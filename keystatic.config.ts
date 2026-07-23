import { config, fields, collection, singleton } from '@keystatic/core';

/* =========================================================================
   MyanMate · Keystatic CMS (Git-based, no DB)
   Non-developers edit guides & reviews here at /keystatic, with separate
   EN / KO / MY fields. Content is saved as YAML in the repo (version-controlled).

   STORAGE:
   - Dev: { kind: 'local' } — writes to local files; you commit & push.
   - Deploy: { kind: 'github' } — editors sign in with GitHub and save commits.

   Long-form guide and service content lives here so a non-developer can edit it.
   Shared UI labels and fixed legal disclaimers remain in src/i18n/ui.ts.
   ========================================================================= */

const CATEGORY_OPTIONS = [
  { label: 'Visa', value: 'visa' },
  { label: 'Jobs', value: 'jobs' },
  { label: 'Housing', value: 'housing' },
  { label: 'Korean', value: 'korean' },
  { label: 'Daily life', value: 'daily' },
];

const ICON_OPTIONS = [
  { label: 'Document', value: 'doc' },
  { label: 'Home', value: 'housing' },
  { label: 'People', value: 'users' },
  { label: 'Jobs', value: 'jobs' },
  { label: 'List', value: 'list' },
  { label: 'Star', value: 'star' },
  { label: 'Check', value: 'check' },
  { label: 'Search', value: 'search' },
  { label: 'Daily life', value: 'daily' },
  { label: 'Topics', value: 'topics' },
  { label: 'Help / caution', value: 'help' },
  { label: 'External link', value: 'external' },
  { label: 'Visa', value: 'visa' },
  { label: 'Korean language', value: 'korean' },
] as const;

const localizedText = (label: string, multiline = false) =>
  fields.object(
    {
      en: fields.text({ label: 'English', multiline, validation: { isRequired: true } }),
      ko: fields.text({ label: '한국어', multiline }),
      my: fields.text({ label: 'မြန်မာ — machine draft', multiline }),
    },
    { label }
  );

const serviceSchema = () => ({
  title: localizedText('Page title / 페이지 제목'),
  description: localizedText('Page introduction / 페이지 소개', true),
  sections: fields.array(
    fields.object({
      icon: fields.select({ label: 'Section icon', options: ICON_OPTIONS, defaultValue: 'list' }),
      title: localizedText('Section title / 섹션 제목'),
      intro: localizedText('Section introduction / 섹션 소개', true),
      items: fields.array(
        fields.object({
          icon: fields.select({ label: 'Point icon', options: ICON_OPTIONS, defaultValue: 'check' }),
          title: localizedText('Point title / 포인트 제목'),
          body: localizedText('Point description / 포인트 설명', true),
          href: fields.url({
            label: 'Official link (optional)',
            description: 'Leave empty for a normal information point. Use only trusted official sources.',
          }),
        }),
        {
          label: 'Information points / 정보 포인트',
          validation: { length: { min: 1, max: 8 } },
        }
      ),
    }),
    {
      label: 'Information sections / 정보 섹션',
      validation: { length: { min: 1, max: 8 } },
    }
  ),
});

const localizedTextList = (label: string, itemLabel: string, multiline = true) =>
  fields.array(localizedText(itemLabel, multiline), {
    label,
    validation: { length: { min: 1, max: 8 } },
  });

const localizedDetailList = (label: string, itemLabel: string) =>
  fields.array(
    fields.object(
      {
        title: localizedText('Item title / 항목 제목'),
        body: localizedText('Item description / 항목 설명', true),
      },
      { label: itemLabel }
    ),
    {
      label,
      validation: { length: { min: 1, max: 8 } },
    }
  );

/**
 * Editable commercial-service copy only. Fixed UI section labels and legal
 * disclaimers deliberately stay in src/i18n/ui.ts so editors cannot weaken
 * the service boundary by accident.
 */
const serviceOfferSchema = () => ({
  title: localizedText('Service title / 서비스 제목'),
  summary: localizedText('Service summary / 서비스 요약', true),
  recommendedFor: localizedTextList(
    'Recommended for / 추천 대상',
    'Recommended-for item / 추천 대상 항목'
  ),
  included: localizedDetailList('What we help with / 해드리는 일', 'Included item / 지원 항목'),
  process: localizedDetailList('Process / 진행 순서', 'Process step / 진행 단계'),
  deliverables: localizedTextList('What you receive / 받는 결과', 'Deliverable / 결과물'),
  preparation: localizedTextList('What to prepare / 준비사항', 'Preparation item / 준비 항목'),
});

const guideLang = (label: string) =>
  fields.object(
    {
      title: fields.text({ label: 'Title' }),
      summary: fields.text({ label: 'Summary', multiline: true }),
      eligibility: fields.text({ label: "Who it's for", multiline: true }),
      subtypes: fields.text({ label: 'Visa categories / 비자 카테고리 (one per line)', multiline: true }),
      documents: fields.text({ label: "Documents you'll need (one per line)", multiline: true }),
      steps: fields.text({ label: 'How to apply (one step per line)', multiline: true }),
      watchout: fields.text({ label: 'Watch out for (one per line)', multiline: true }),
      notes: fields.text({ label: 'Important notes / 중요 사항 (one per line)', multiline: true }),
    },
    { label }
  );

const reviewLang = (label: string) =>
  fields.object(
    {
      before: fields.text({ label: 'Before', multiline: true }),
      after: fields.text({ label: 'After', multiline: true }),
      quote: fields.text({ label: 'Quote (optional)', multiline: true }),
    },
    { label }
  );

const isDev = process.env.NODE_ENV === 'development';

export default config({
  // Local dev edits local files; production (Vercel) uses GitHub storage so the
  // co-founder can edit live at www.myanmate.com/keystatic (saves → commit to
  // GitHub → Vercel auto-rebuilds). Needs a GitHub App + env vars (.env.example).
  storage: isDev ? { kind: 'local' } : { kind: 'github', repo: 'JunOJu95/MyanMate-public' },
  ui: {
    brand: { name: 'MyanMate' },
  },
  collections: {
    guides: collection({
      label: 'Guides · 정보 콘텐츠',
      slugField: 'title',
      path: 'src/content/guides/*',
      format: { data: 'yaml' },
      columns: ['title', 'category', 'lastReviewed'],
      schema: {
        title: fields.slug({
          name: { label: 'Internal title (English)', description: 'Used for the URL and the admin list.' },
        }),
        category: fields.select({ label: 'Category', options: CATEGORY_OPTIONS, defaultValue: 'visa' }),
        order: fields.integer({ label: 'Order (lower shows first)', defaultValue: 10 }),
        lastReviewed: fields.date({
          label: 'Last reviewed (최종 검토일)',
          description: 'Set this whenever you verify the content against current policy. Shown to readers.',
          validation: { isRequired: true },
        }),
        en: guideLang('English (base)'),
        ko: guideLang('한국어'),
        my: guideLang('မြန်မာ — machine draft, review before publishing'),
      },
    }),

    reviews: collection({
      label: 'Reviews · 후기',
      slugField: 'name',
      path: 'src/content/reviews/*',
      format: { data: 'yaml' },
      columns: ['name', 'service', 'rating'],
      schema: {
        name: fields.slug({ name: { label: 'Internal name (English)' } }),
        service: fields.select({
          label: 'Service',
          options: [
            { label: 'Visa research', value: 'visa' },
            { label: 'Resume & jobs', value: 'resume' },
          ],
          defaultValue: 'visa',
        }),
        rating: fields.integer({ label: 'Rating (1–5)', defaultValue: 5 }),
        en: reviewLang('English'),
        ko: reviewLang('한국어'),
        my: reviewLang('မြန်မာ (draft)'),
      },
    }),

    posts: collection({
      label: 'Blog · 블로그',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { data: 'yaml', contentField: 'body' },
      entryLayout: 'content',
      previewUrl: '/blog',
      columns: ['title', 'lang', 'category', 'publishedDate', 'lastReviewed', 'draft'],
      schema: {
        title: fields.slug({
          name: { label: 'Internal title (English)', description: 'Used for the URL and the admin list (not shown to readers).' },
        }),
        lang: fields.select({
          label: 'Language',
          description: 'The language this post is written in (sets the font + page lang).',
          options: [
            { label: 'မြန်မာ (Burmese)', value: 'my' },
            { label: '한국어 (Korean)', value: 'ko' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'my',
        }),
        category: fields.select({
          label: 'Category',
          description: 'Readers can filter the blog by this category.',
          options: CATEGORY_OPTIONS,
          defaultValue: 'daily',
        }),
        headline: fields.text({
          label: 'Headline',
          description: 'The title readers see, in the post language.',
          validation: { isRequired: true },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'A short summary shown on the blog list and home page.',
          multiline: true,
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'MyanMate',
          validation: { isRequired: true },
        }),
        publishedDate: fields.date({ label: 'Published date', validation: { isRequired: true } }),
        lastReviewed: fields.date({
          label: 'Last reviewed (최종 검토일)',
          description: 'Update this after checking the information against current official sources.',
          validation: { isRequired: true },
        }),
        cover: fields.image({
          label: 'Cover image (optional)',
          description: 'Stored privately with the post. Draft images are not copied to the public site.',
          directory: 'src/content/blog-media',
          publicPath: '/images/blog/',
        }),
        coverAlt: fields.text({
          label: 'Cover image alt text',
          description: 'Describe informative images for screen-reader users. Leave empty only when the cover is decorative.',
        }),
        publishingBoundaryConfirmed: fields.checkbox({
          label: 'Publishing boundary confirmed',
          description: 'Before publishing, confirm this post only provides information or guidance. It must not promise document writing or submission, property introductions, negotiation, or contract involvement.',
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: 'Draft (keep private)',
          description: 'New posts start private. Confirm the publishing boundary above, then turn this off only when the post is ready.',
          defaultValue: true,
        }),
        body: fields.markdoc({
          label: 'Body',
          description: 'Use Heading 2–4 inside the post; the page headline is already Heading 1.',
          options: {
            heading: [2, 3, 4],
            image: {
              directory: 'src/content/blog-media',
              publicPath: '/images/blog/',
              schema: {
                alt: fields.text({
                  label: 'Alt text',
                  description: 'Describe the image for readers who cannot see it.',
                  validation: { isRequired: true },
                }),
              },
            },
          },
        }),
      },
    }),
  },
  singletons: {
    resumeService: singleton({
      label: 'Information · 이력서·구직 정보',
      path: 'src/content/services/resume',
      format: { data: 'yaml' },
      previewUrl: '/guides/resume',
      schema: serviceSchema(),
    }),
    housingService: singleton({
      label: 'Information · 집 보기·생활환경 정보',
      path: 'src/content/services/housing',
      format: { data: 'yaml' },
      previewUrl: '/guides/housing',
      schema: serviceSchema(),
    }),
    partTimeJobServiceOffer: singleton({
      label: 'Service · Part-time job support',
      path: 'src/content/service-offers/part-time-job',
      format: { data: 'yaml' },
      previewUrl: '/services/part-time-job',
      schema: serviceOfferSchema(),
    }),
    careerServiceOffer: singleton({
      label: 'Service · Professional career support',
      path: 'src/content/service-offers/career',
      format: { data: 'yaml' },
      previewUrl: '/services/career',
      schema: serviceOfferSchema(),
    }),
    portfolioServiceOffer: singleton({
      label: 'Service · Portfolio support',
      path: 'src/content/service-offers/portfolio',
      format: { data: 'yaml' },
      previewUrl: '/services/portfolio',
      schema: serviceOfferSchema(),
    }),
    studyServiceOffer: singleton({
      label: 'Service · Study in Korea support',
      path: 'src/content/service-offers/study',
      format: { data: 'yaml' },
      previewUrl: '/services/study',
      schema: serviceOfferSchema(),
    }),
    housingServiceOffer: singleton({
      label: '1:1 Guidance · 집 보기 동행',
      path: 'src/content/service-offers/housing',
      format: { data: 'yaml' },
      previewUrl: '/services/housing',
      schema: serviceOfferSchema(),
    }),
  },
});
