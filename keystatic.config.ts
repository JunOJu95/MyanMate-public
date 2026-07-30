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
  { label: 'Study', value: 'study' },
  { label: 'Work', value: 'jobs' },
  { label: 'Housing', value: 'housing' },
  { label: 'Korean', value: 'korean' },
  { label: 'Daily life', value: 'daily' },
];

const POST_CATEGORY_OPTIONS = [
  { label: 'Visa', value: 'visa' },
  { label: 'Jobs', value: 'jobs' },
  { label: 'Study', value: 'study' },
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
  { label: 'Safety', value: 'shield' },
  { label: 'Healthcare', value: 'health' },
  { label: 'Administration', value: 'admin' },
  { label: 'Phone', value: 'phone' },
  { label: 'Transit', value: 'transit' },
] as const;

const INFORMATION_SECTION_VARIANTS = [
  { label: 'Standard cards', value: 'standard' },
  { label: 'Situation overview', value: 'overview' },
  { label: 'Step-by-step timeline', value: 'timeline' },
  { label: 'Optional checks', value: 'optional' },
  { label: 'Exceptions and cautions', value: 'warning' },
  { label: 'Official sources', value: 'sources' },
] as const;

const INFORMATION_AUDIENCES = [
  { label: 'No audience label / 적용 대상 표시 없음', value: 'none' },
  { label: 'Registered foreign residents / 외국인등록을 한 사람', value: 'general' },
  { label: 'Students / 학생', value: 'student' },
  { label: 'Workers / 근로자', value: 'worker' },
  { label: 'If applicable / 해당 시', value: 'ifApplicable' },
  { label: 'Stop and confirm / 먼저 확인', value: 'warning' },
  { label: 'Official source / 공식 근거', value: 'official' },
] as const;

const safeAssetFilename = (originalFilename: string) => {
  const extensionIndex = originalFilename.lastIndexOf('.');
  const stem = (extensionIndex > 0 ? originalFilename.slice(0, extensionIndex) : originalFilename)
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
  const extension =
    extensionIndex > 0
      ? originalFilename.slice(extensionIndex).toLowerCase().replace(/[^.a-z0-9]/g, '')
      : '';

  return `${stem || 'image'}${extension}`;
};

const localizedText = (label: string, multiline = false) =>
  fields.object(
    {
      en: fields.text({ label: 'English', multiline, validation: { isRequired: true } }),
      ko: fields.text({ label: '한국어', multiline }),
      my: fields.text({ label: 'မြန်မာ — machine draft', multiline }),
    },
    { label }
  );

const optionalLocalizedText = (label: string, multiline = false) =>
  fields.object(
    {
      en: fields.text({ label: 'English', multiline }),
      ko: fields.text({ label: '한국어', multiline }),
      my: fields.text({ label: 'မြန်မာ — machine draft', multiline }),
    },
    { label }
  );

const informationSchema = () => ({
  lastReviewed: fields.date({
    label: 'Last reviewed (최종 검토일)',
    description: 'Update this after checking the information against current official sources.',
    validation: { isRequired: true },
  }),
  title: localizedText('Page title / 페이지 제목'),
  description: localizedText('Page introduction / 페이지 소개', true),
  sections: fields.array(
    fields.object({
      id: fields.text({
        label: 'Stable section ID / 고정 섹션 ID',
        description:
          'Use lowercase English letters, numbers, and hyphens. Keep this unchanged after publishing because overview links use it. Existing pages may leave it empty.',
      }),
      variant: fields.select({
        label: 'Section layout / 섹션 형식',
        options: INFORMATION_SECTION_VARIANTS,
        defaultValue: 'standard',
      }),
      icon: fields.select({ label: 'Section icon', options: ICON_OPTIONS, defaultValue: 'list' }),
      title: localizedText('Section title / 섹션 제목'),
      intro: localizedText('Section introduction / 섹션 소개', true),
      items: fields.array(
        fields.object({
          icon: fields.select({ label: 'Point icon', options: ICON_OPTIONS, defaultValue: 'check' }),
          audience: fields.select({
            label: 'Who this is for / 적용 대상',
            description:
              'This label separates legal duties from student, worker, optional, and caution items. Do not mark an item as a universal duty without an official source.',
            options: INFORMATION_AUDIENCES,
            defaultValue: 'none',
          }),
          title: localizedText('Point title / 포인트 제목'),
          body: localizedText('Point description / 포인트 설명', true),
          prepare: fields.array(
            localizedText('Preparation item / 준비 항목', true),
            {
              label: 'What to prepare (optional) / 준비할 것 (선택)',
              description:
                'For changing procedures, say readers must recheck the current official requirements instead of presenting this list as final.',
              validation: { length: { max: 10 } },
            }
          ),
          steps: fields.array(
            localizedText('Step / 진행 단계', true),
            {
              label: 'Step-by-step actions (optional) / 진행 순서 (선택)',
              description:
                'Describe actions readers complete themselves. Do not instruct MyanMate to write, submit, reserve, negotiate, or pay for them.',
              validation: { length: { max: 10 } },
            }
          ),
          checklist: fields.array(
            localizedText('Checklist item / 체크 항목', true),
            {
              label: 'Action checklist (optional) / 실행 체크리스트 (선택)',
              description:
                'Add only concrete actions the reader can complete themselves. Leave empty for a normal information point.',
              validation: { length: { max: 12 } },
            }
          ),
          doneWhen: optionalLocalizedText('How to confirm completion (optional) / 완료 확인 기준 (선택)', true),
          details: fields.object(
            {
              title: optionalLocalizedText('Details title / 상세 제목'),
              body: optionalLocalizedText('Details body / 상세 내용', true),
            },
            {
              label: 'Expandable details (optional) / 펼쳐보는 상세 설명 (선택)',
              description:
                'Use for legal nuance, exceptions, or troubleshooting. Cite the official basis in the sources field below.',
            }
          ),
          messageTemplate: optionalLocalizedText(
            'Message readers can copy (optional) / 직접 문의할 때 복사할 문장 (선택)',
            true
          ),
          evidenceLevel: fields.select({
            label: 'Evidence level / 근거 수준',
            description:
              'New items default to an official or legal claim. Keep that setting for duties, deadlines, penalties, eligibility, required documents, or filing channels, and attach at least one official source. Choose general guidance only for non-legal practical tips.',
            options: [
              { label: 'Official or legal claim — source required / 법·공식 기준 — 출처 필수', value: 'official' },
              { label: 'General practical guidance / 일반 실용 안내', value: 'general' },
            ],
            defaultValue: 'official',
          }),
          sources: fields.array(
            fields.object(
              {
                label: localizedText('Source label / 출처 이름'),
                href: fields.url({
                  label: 'Official source URL / 공식 출처 URL',
                  description: 'Use a government or the institution’s own official page.',
                  validation: { isRequired: true },
                }),
              },
              { label: 'Related official source / 관련 공식 근거' }
            ),
            {
              label: 'Inline official sources (optional) / 항목 바로 아래 공식 근거 (선택)',
              description:
                'Required when the item states a legal duty, deadline, penalty, eligibility rule, or filing channel.',
              validation: { length: { max: 4 } },
            }
          ),
          jumpTo: fields.text({
            label: 'Jump to section ID (optional) / 이동할 섹션 ID (선택)',
            description:
              'For overview cards only. Enter another section’s stable ID without #, for example passport-report.',
          }),
          href: fields.url({
            label: 'Official link (optional)',
            description:
              'Use for a standalone source card. For evidence attached to an action card, use Inline official sources.',
          }),
        }),
        {
          label: 'Information points / 정보 포인트',
          validation: { length: { min: 1, max: 10 } },
        }
      ),
    }),
    {
      label: 'Information sections / 정보 섹션',
      validation: { length: { min: 1, max: 10 } },
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
      eligibility: fields.text({ label: "Who it's for / when this matters", multiline: true }),
      subtypes: fields.text({ label: 'Types, levels, or categories (one per line)', multiline: true }),
      documents: fields.text({ label: 'What to check or prepare (one per line)', multiline: true }),
      steps: fields.text({ label: 'Checklist or process (one step per line)', multiline: true }),
      watchout: fields.text({ label: 'Common mistakes / cautions (one per line)', multiline: true }),
      notes: fields.text({ label: 'Official confirmation / important notes (one per line)', multiline: true }),
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
  // Local dev edits local files. Production saves co-founder edits to a
  // keystatic/* branch, where GitHub Actions validates and publishes them.
  storage: isDev
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: 'JunOJu95/MyanMate-public',
        branchPrefix: 'keystatic/',
      },
  ui: {
    brand: { name: 'MyanMate' },
  },
  collections: {
    guides: collection({
      label: 'Guide Articles · Visa / Study',
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
          options: POST_CATEGORY_OPTIONS,
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
          transformFilename: safeAssetFilename,
        }),
        coverAlt: fields.text({
          label: 'Cover image alt text',
          description: 'Describe informative images for screen-reader users. Leave empty only when the cover is decorative.',
        }),
        draft: fields.checkbox({
          label: 'Draft (keep private)',
          description: 'Leave this off to publish after saving. Turn it on only when the post must stay private.',
          defaultValue: false,
        }),
        body: fields.markdoc({
          label: 'Body',
          description: 'Use Heading 2–4 inside the post; the page headline is already Heading 1.',
          options: {
            heading: [2, 3, 4],
            image: {
              directory: 'src/content/blog-media',
              publicPath: '/images/blog/',
              transformFilename: safeAssetFilename,
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

    guideInformation: collection({
      label: 'Guide Information · Edit by category',
      slugField: 'entryTitle',
      path: 'src/content/services/*',
      format: { data: 'yaml' },
      columns: ['entryTitle', 'category', 'lastReviewed'],
      schema: {
        entryTitle: fields.slug({
          name: {
            label: 'Internal title (English)',
            description: 'Used only for the admin list and file URL. Reader-facing titles are below.',
          },
        }),
        category: fields.select({ label: 'Guide category', options: CATEGORY_OPTIONS, defaultValue: 'daily' }),
        order: fields.integer({ label: 'Order inside category (lower shows first)', defaultValue: 10 }),
        ...informationSchema(),
      },
    }),
  },
  singletons: {
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
    interviewServiceOffer: singleton({
      label: 'Service · 1:1 interview coaching',
      path: 'src/content/service-offers/interview',
      format: { data: 'yaml' },
      previewUrl: '/services/interview',
      schema: serviceOfferSchema(),
    }),
    portfolioServiceOffer: singleton({
      label: 'Service · Portfolio support',
      path: 'src/content/service-offers/portfolio',
      format: { data: 'yaml' },
      previewUrl: '/services/portfolio',
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
