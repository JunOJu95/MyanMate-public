/* =========================================================================
   MyanMate · content access (Keystatic reader)
   Reads CMS content at build time (static site). Pages call these helpers.
   ========================================================================= */
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import type { Lang } from '../i18n/ui';
import type { ServiceId } from '../data/services';
import Markdoc from '@markdoc/markdoc';

export const reader = createReader(process.cwd(), keystaticConfig);

function str(v: unknown, fb = ''): string {
  return typeof v === 'string' ? v : fb;
}

/* ---------------- guides ---------------- */
export interface GuideText {
  title: string;
  summary: string;
  eligibility: string;
  subtypes: string;
  documents: string;
  steps: string;
  watchout: string;
  notes: string;
}
export interface Guide {
  slug: string;
  category: string;
  order: number;
  lastReviewed: string | null;
  en: GuideText;
  ko: GuideText;
  my: GuideText;
}

function guideText(o: any): GuideText {
  o = o ?? {};
  return {
    title: str(o.title),
    summary: str(o.summary),
    eligibility: str(o.eligibility),
    subtypes: str(o.subtypes),
    documents: str(o.documents),
    steps: str(o.steps),
    watchout: str(o.watchout),
    notes: str(o.notes),
  };
}

function toGuide(slug: string, entry: any): Guide {
  return {
    slug,
    category: str(entry?.category, 'visa'),
    order: typeof entry?.order === 'number' ? entry.order : 99,
    lastReviewed: entry?.lastReviewed ?? null,
    en: guideText(entry?.en),
    ko: guideText(entry?.ko),
    my: guideText(entry?.my),
  };
}

export async function getGuides(): Promise<Guide[]> {
  const list = await reader.collections.guides.all();
  return list.map((e: any) => toGuide(e.slug, e.entry)).sort((a, b) => a.order - b.order);
}

export async function getGuide(slug: string): Promise<Guide | null> {
  const entry = await reader.collections.guides.read(slug);
  return entry ? toGuide(slug, entry) : null;
}

/** Active-language text, falling back to EN when a language is empty (e.g. MY not yet translated). */
export function pickGuide(g: Guide, lang: Lang): GuideText {
  const text = g[lang];
  return text && text.title ? text : g.en;
}

/** Visa code from a guide slug: "d2-student-visa" -> "D-2", "e9-employment" -> "E-9". null if not visa-style. */
export function visaCode(slug: string): string | null {
  const m = slug.match(/^([a-z])(\d+)/i);
  return m ? `${m[1].toUpperCase()}-${m[2]}` : null;
}

/* ---------------- service information ---------------- */
export interface LocalizedText {
  en: string;
  ko: string;
  my: string;
}

export interface ServiceContentItem {
  icon: string;
  title: LocalizedText;
  body: LocalizedText;
  href: string;
}

export interface ServiceContentSection {
  icon: string;
  title: LocalizedText;
  intro: LocalizedText;
  items: ServiceContentItem[];
}

export interface ServiceContent {
  title: LocalizedText;
  description: LocalizedText;
  sections: ServiceContentSection[];
}

function localizedText(value: any): LocalizedText {
  return {
    en: str(value?.en),
    ko: str(value?.ko),
    my: str(value?.my),
  };
}

function toServiceContent(entry: any): ServiceContent {
  const sections = Array.isArray(entry?.sections) ? entry.sections : [];
  return {
    title: localizedText(entry?.title),
    description: localizedText(entry?.description),
    sections: sections.map((section: any) => ({
      icon: str(section?.icon, 'list'),
      title: localizedText(section?.title),
      intro: localizedText(section?.intro),
      items: (Array.isArray(section?.items) ? section.items : []).map((item: any) => ({
        icon: str(item?.icon, 'check'),
        title: localizedText(item?.title),
        body: localizedText(item?.body),
        href: str(item?.href),
      })),
    })),
  };
}

export async function getServiceContent(id: ServiceId): Promise<ServiceContent | null> {
  const entry = id === 'resume'
    ? await reader.singletons.resumeService.read()
    : await reader.singletons.housingService.read();
  return entry ? toServiceContent(entry) : null;
}

export async function getServiceContents(): Promise<Record<ServiceId, ServiceContent>> {
  const [resume, housing] = await Promise.all([
    getServiceContent('resume'),
    getServiceContent('housing'),
  ]);
  if (!resume || !housing) throw new Error('Service content is missing from src/content/services.');
  return { resume, housing };
}

/* ---------------- reviews ---------------- */
export interface ReviewText {
  before: string;
  after: string;
  quote: string;
}
export interface Review {
  slug: string;
  service: string;
  rating: number;
  en: ReviewText;
  ko: ReviewText;
  my: ReviewText;
}

function reviewText(o: any): ReviewText {
  o = o ?? {};
  return { before: str(o.before), after: str(o.after), quote: str(o.quote) };
}

export async function getReviews(): Promise<Review[]> {
  const list = await reader.collections.reviews.all();
  return list.map((e: any) => ({
    slug: e.slug,
    service: str(e.entry?.service, 'visa'),
    rating: typeof e.entry?.rating === 'number' ? e.entry.rating : 5,
    en: reviewText(e.entry?.en),
    ko: reviewText(e.entry?.ko),
    my: reviewText(e.entry?.my),
  }));
}

export function pickReview(r: Review, lang: Lang): ReviewText {
  const text = r[lang];
  return text && (text.before || text.after) ? text : r.en;
}

/** Maps a review's service to its i18n tag key (ui.tag.*). */
export const reviewTagKey: Record<string, string> = {
  visa: 'ui.tag.visaResearch',
  resume: 'ui.tag.resumeJob',
};

/* ---------------- blog posts ---------------- */
export interface Post {
  slug: string;
  lang: Lang;
  headline: string;
  excerpt: string;
  author: string;
  publishedDate: string | null;
  cover: string | null;
  draft: boolean;
}

function toPost(slug: string, e: any): Post {
  return {
    slug,
    lang: (['en', 'ko', 'my'].includes(e?.lang) ? e.lang : 'my') as Lang,
    headline: str(e?.headline),
    excerpt: str(e?.excerpt),
    author: str(e?.author, 'MyanMate'),
    publishedDate: e?.publishedDate ?? null,
    cover: typeof e?.cover === 'string' ? e.cover : null,
    draft: e?.draft === true,
  };
}

// Drafts are visible in local dev, hidden in the production (Vercel) build.
const SHOW_DRAFTS = !process.env.VERCEL;

export async function getPosts(): Promise<Post[]> {
  const list = await reader.collections.posts.all();
  return list
    .map((e: any) => toPost(e.slug, e.entry))
    .filter((p) => SHOW_DRAFTS || !p.draft)
    .sort((a, b) => (b.publishedDate ?? '').localeCompare(a.publishedDate ?? ''));
}

export async function getPost(slug: string): Promise<{ meta: Post; bodyHtml: string } | null> {
  const entry = await reader.collections.posts.read(slug);
  if (!entry) return null;
  let bodyHtml = '';
  try {
    const { node } = await (entry as any).body();
    bodyHtml = Markdoc.renderers.html(Markdoc.transform(node));
  } catch (err) {
    console.warn('[getPost] body render failed for', slug, err);
  }
  return { meta: toPost(slug, entry), bodyHtml };
}
