import { config, fields, collection } from '@keystatic/core';

/* =========================================================================
   MyanMate · Keystatic CMS (Git-based, no DB)
   Non-developers edit guides & reviews here at /keystatic, with separate
   EN / KO / MY fields. Content is saved as YAML in the repo (version-controlled).

   STORAGE:
   - Dev: { kind: 'local' } — writes to local files; you commit & push.
   - Deploy: { kind: 'github' } — editors sign in with GitHub and save commits.

   Services are intentionally NOT here — their copy lives in src/i18n/ui.ts
   (single i18n source). Guides + reviews are genuinely new, frequently-edited
   content, so they belong in the CMS.
   ========================================================================= */

const CATEGORY_OPTIONS = [
  { label: 'Visa', value: 'visa' },
  { label: 'Jobs', value: 'jobs' },
  { label: 'Housing', value: 'housing' },
  { label: 'Korean', value: 'korean' },
  { label: 'Daily life', value: 'daily' },
];

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
            { label: 'House visit', value: 'house' },
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
      columns: ['title', 'publishedDate'],
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
        headline: fields.text({ label: 'Headline', description: 'The title readers see, in the post language.' }),
        excerpt: fields.text({ label: 'Excerpt', description: 'Short summary shown on the list card.', multiline: true }),
        author: fields.text({ label: 'Author', defaultValue: 'MyanMate' }),
        publishedDate: fields.date({ label: 'Published date', validation: { isRequired: true } }),
        cover: fields.image({ label: 'Cover image', directory: 'public/images/blog', publicPath: '/images/blog/' }),
        draft: fields.checkbox({ label: 'Draft (hide from the published site)', defaultValue: false }),
        body: fields.markdoc({
          label: 'Body',
          options: { image: { directory: 'public/images/blog', publicPath: '/images/blog/' } },
        }),
      },
    }),
  },
});
