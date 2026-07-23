/* =========================================================================
   MyanMate · content access (Keystatic reader)
   Reads CMS content at build time (static site). Pages call these helpers.
   ========================================================================= */
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import type { Lang } from '../i18n/ui';
import type { ServiceId, ServiceInfoId } from '../data/services';
import Markdoc from '@markdoc/markdoc';

export const reader = createReader(process.cwd(), keystaticConfig);

function str(v: unknown, fb = ''): string {
  return typeof v === 'string' ? v : fb;
}

function assertNever(value: never): never {
  throw new Error(`Unhandled service id: ${String(value)}`);
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

export async function getServiceContent(id: ServiceInfoId): Promise<ServiceContent | null> {
  let entry;
  switch (id) {
    case 'resume':
      entry = await reader.singletons.resumeService.read();
      break;
    case 'housing':
      entry = await reader.singletons.housingService.read();
      break;
    default:
      return assertNever(id);
  }
  return entry ? toServiceContent(entry) : null;
}

export async function getServiceContents(): Promise<Record<ServiceInfoId, ServiceContent>> {
  const [resume, housing] = await Promise.all([
    getServiceContent('resume'),
    getServiceContent('housing'),
  ]);
  if (!resume || !housing) throw new Error('Service content is missing from src/content/services.');
  return { resume, housing };
}

/* ---------------- 1:1 service offers ---------------- */
export interface ServiceOfferDetail {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ServiceOffer {
  title: LocalizedText;
  summary: LocalizedText;
  recommendedFor: LocalizedText[];
  included: ServiceOfferDetail[];
  process: ServiceOfferDetail[];
  deliverables: LocalizedText[];
  preparation: LocalizedText[];
}

function localizedTextList(value: unknown): LocalizedText[] {
  return Array.isArray(value) ? value.map(localizedText) : [];
}

function serviceOfferDetails(value: unknown): ServiceOfferDetail[] {
  if (!Array.isArray(value)) return [];
  return value.map((item: any) => ({
    title: localizedText(item?.title),
    body: localizedText(item?.body),
  }));
}

function toServiceOffer(entry: any): ServiceOffer {
  return {
    title: localizedText(entry?.title),
    summary: localizedText(entry?.summary),
    recommendedFor: localizedTextList(entry?.recommendedFor),
    included: serviceOfferDetails(entry?.included),
    process: serviceOfferDetails(entry?.process),
    deliverables: localizedTextList(entry?.deliverables),
    preparation: localizedTextList(entry?.preparation),
  };
}

export async function getServiceOffer(id: ServiceId): Promise<ServiceOffer | null> {
  let entry;
  switch (id) {
    case 'part-time-job':
      entry = await reader.singletons.partTimeJobServiceOffer.read();
      break;
    case 'career':
      entry = await reader.singletons.careerServiceOffer.read();
      break;
    case 'portfolio':
      entry = await reader.singletons.portfolioServiceOffer.read();
      break;
    case 'study':
      entry = await reader.singletons.studyServiceOffer.read();
      break;
    case 'housing':
      entry = await reader.singletons.housingServiceOffer.read();
      break;
    default:
      return assertNever(id);
  }
  return entry ? toServiceOffer(entry) : null;
}

export async function getServiceOffers(): Promise<Record<ServiceId, ServiceOffer>> {
  const [partTimeJob, career, portfolio, study, housing] = await Promise.all([
    getServiceOffer('part-time-job'),
    getServiceOffer('career'),
    getServiceOffer('portfolio'),
    getServiceOffer('study'),
    getServiceOffer('housing'),
  ]);
  if (!partTimeJob || !career || !portfolio || !study || !housing) {
    throw new Error('Service offer content is missing from src/content/service-offers.');
  }
  return {
    'part-time-job': partTimeJob,
    career,
    portfolio,
    study,
    housing,
  };
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
export const POST_CATEGORIES = ['visa', 'jobs', 'housing', 'korean', 'daily'] as const;
export type PostCategory = (typeof POST_CATEGORIES)[number];

export interface Post {
  slug: string;
  lang: Lang;
  category: PostCategory;
  headline: string;
  excerpt: string;
  author: string;
  publishedDate: string | null;
  lastReviewed: string | null;
  cover: string | null;
  coverAlt: string;
  publishingBoundaryConfirmed: boolean;
  draft: boolean;
}

function toPost(slug: string, e: any): Post {
  const category = POST_CATEGORIES.includes(e?.category) ? e.category : 'daily';
  return {
    slug,
    lang: (['en', 'ko', 'my'].includes(e?.lang) ? e.lang : 'my') as Lang,
    category,
    headline: str(e?.headline),
    excerpt: str(e?.excerpt),
    author: str(e?.author, 'MyanMate'),
    publishedDate: e?.publishedDate ?? null,
    lastReviewed: e?.lastReviewed ?? null,
    cover: typeof e?.cover === 'string' ? e.cover : null,
    coverAlt: str(e?.coverAlt),
    publishingBoundaryConfirmed: e?.publishingBoundaryConfirmed === true,
    // Missing/invalid draft metadata fails closed so an incomplete entry is
    // never published by accident.
    draft: e?.draft !== false,
  };
}

// Drafts are previewable only in Astro dev. Every static build, including a
// local production build, excludes them and their routes.
const SHOW_DRAFTS = import.meta.env.DEV;

function comparePosts(a: Post, b: Post): number {
  return (
    (b.publishedDate ?? '').localeCompare(a.publishedDate ?? '') ||
    a.slug.localeCompare(b.slug)
  );
}

export async function getPosts(): Promise<Post[]> {
  const list = await reader.collections.posts.all();
  const posts = list.map((e: any) => toPost(e.slug, e.entry));
  const uncheckedPost = posts.find((post) => !post.draft && !post.publishingBoundaryConfirmed);
  if (uncheckedPost) {
    throw new Error(
      `Published blog post "${uncheckedPost.slug}" is missing the publishing-boundary confirmation.`
    );
  }
  return posts
    .filter((p) => SHOW_DRAFTS || !p.draft)
    .sort(comparePosts);
}

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  const posts = await getPosts();
  return posts.slice(0, Math.max(0, limit));
}

function unwrapMarkdocArticle(html: string): string {
  const match = html.trim().match(/^<article>([\s\S]*)<\/article>$/);
  return match ? match[1].trim() : html.trim();
}

export async function getPost(slug: string): Promise<{ meta: Post; bodyHtml: string } | null> {
  const entry = await reader.collections.posts.read(slug);
  if (!entry) return null;
  const meta = toPost(slug, entry);
  if (!SHOW_DRAFTS && meta.draft) return null;
  if (!meta.draft && !meta.publishingBoundaryConfirmed) {
    throw new Error(`Published blog post "${slug}" is missing the publishing-boundary confirmation.`);
  }

  let bodyHtml = '';
  try {
    const { node } = await (entry as any).body();
    const validationErrors = Markdoc.validate(node).filter(({ error }) =>
      error.level === 'error' || error.level === 'critical'
    );
    if (validationErrors.length > 0) {
      const details = validationErrors
        .map(({ error, lines }) => `${error.message}${lines.length ? ` (line ${lines.join(', ')})` : ''}`)
        .join('; ');
      throw new Error(details);
    }
    bodyHtml = unwrapMarkdocArticle(Markdoc.renderers.html(Markdoc.transform(node)));
  } catch (err) {
    if (!meta.draft) {
      throw new Error(`Published blog post "${slug}" could not be rendered.`, { cause: err });
    }
    console.warn('[getPost] draft body render failed for', slug, err);
  }

  if (!meta.draft && !bodyHtml) {
    throw new Error(`Published blog post "${slug}" has an empty body.`);
  }
  return { meta, bodyHtml };
}
