/* =========================================================================
   MyanMate · i18n — SINGLE SOURCE OF TRUTH for all UI copy (EN · KO · MY)
   -------------------------------------------------------------------------
   - Ported from the delivered design `app.js` (window.I18N). Keys are STABLE
     (e.g. "home.hero.headline") — do not rename; the design markup depends on them.
   - EN is the default/base language. KO is human-written.
   - ⚠️ MY is a MACHINE DRAFT — replace the values only (keys stay), after a
     native speaker reviews. Legal/disclaimer strings (footer.disclaimer,
     svcDetail.dont.body, content.disclaimer, privacy.*) must be reviewed first.
   - Do NOT duplicate this copy anywhere else (the docs copysheet is only a
     review worksheet). Use `t(key, lang)` (build time) or data-i18n (runtime).
   - Framework-neutral on purpose: when we later add per-language URLs
     (Astro i18n routing), this module is reused as-is.
   ========================================================================= */

export const languages = ['en', 'ko', 'my'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

/** Language switch order + labels shown in the toggle (matches the delivered design). */
export const langSwitch: ReadonlyArray<{ code: Lang; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'my', label: 'MM' },
  { code: 'ko', label: 'KO' },
];

/** BCP-47 tags for <html lang> / hreflang (used now for lang attr, later for hreflang URLs). */
export const htmlLang: Record<Lang, string> = { en: 'en', ko: 'ko', my: 'my' };

type Entry = Record<Lang, string>;

export const ui = {
  /* 0. Common */
  'nav.home':      { en: 'Home',     ko: '홈',    my: 'ပင်မ' },
  'nav.guides':    { en: 'Guides',   ko: '정보',   my: 'လမ်းညွှန်များ' },
  'nav.blog':      { en: 'Blog',     ko: '블로그',  my: 'ဘလော့ဂ်' },
  'nav.services':  { en: 'Services', ko: '서비스',  my: 'ဝန်ဆောင်မှုများ' },
  'nav.reviews':   { en: 'Reviews',  ko: '후기',   my: 'သုံးသပ်ချက်များ' },
  'nav.about':     { en: 'About',    ko: '소개',   my: 'အကြောင်း' },
  'nav.privacy':   { en: 'Privacy',  ko: '개인정보', my: 'ကိုယ်ရေးအချက်အလက်' },

  'btn.getHelp':      { en: 'Request guidance', ko: '안내 요청', my: 'လမ်းညွှန်မှု တောင်းဆိုရန်' },
  'btn.browseGuides': { en: 'Browse guides', ko: '정보 둘러보기', my: 'လမ်းညွှန်များ ကြည့်ရှုရန်' },
  'btn.viewDetails':  { en: 'View details',  ko: '상세 보기',    my: 'အသေးစိတ်ကြည့်ရန်' },
  'btn.more':         { en: 'See more',      ko: '더 보기',      my: 'ပိုမိုကြည့်ရှုရန်' },

  'footer.disclaimer': {
    en: 'MyanMate provides information and in-person guidance only. You complete and submit all documents and contracts yourself (or through a licensed professional). Please confirm final requirements with Immigration (HiKorea) and a licensed realtor.',
    ko: 'MyanMate는 정보 제공과 동행 자문만 합니다. 모든 서류 작성·신청·제출과 임대차 계약은 본인이 직접(또는 자격 전문가를 통해) 진행합니다. 최종 요건은 출입국·하이코리아 및 공인중개사에게 확인하세요.',
    my: 'MyanMate သည် အချက်အလက်နှင့် လမ်းညွှန်မှုသာ လုပ်ဆောင်ပေးပါသည်။ စာရွက်စာတမ်းများ တင်သွင်းခြင်းနှင့် စာချုပ်ချူပ်ဆိုခြင်းများကို သင်ကိုယ်တိုင် (သို့မဟုတ်)လိုင်စင်ရ ကျွမ်းကျင်သူမှတစ်ဆင့် ဆောင်ရွက်ရပါမည်။ နောက်ဆုံးလိုအပ်ချက်များကို လူဝင်မှုကြီးကြပ်ရေး (HiKorea) နှင့် လိုင်စင်ရ အိမ်ခြံမြေအကျိုးဆောင်ထံ အတည်ပြုပါ။',
  },
  'footer.tagline': { en: 'Your mate for settling in Korea.', ko: '한국 정착, 곁을 지켜주는 친구.', my: 'ကိုရီးယားတွင် အခြေချရာ၌ သင့်ဘေးက မိတ်ဆွေ။' },

  /* 1. Home */
  'home.hero.headline': { en: "New to Korea? You don't have to figure it out alone.", ko: '한국, 막 오셨나요? 혼자\u00a0헤매지\u00a0않아도\u00a0돼요.', my: 'ကိုရီးယားကို အခုမှ ရောက်တာလား? တစ်ယောက်တည်း ရုန်းကန်နေစရာ မလိုပါဘူး။' },
  'home.hero.sub': { en: "MyanMate guides Myanmar people settling in Korea — visas, housing, jobs, and everyday life. We've been through it, and we'll walk it with you.", ko: 'MyanMate는 한국에 정착하는 미얀마 사람들에게 비자, 집, 일자리, 일상 정보를 안내합니다. 우리도 겪어봤고, 함께 살펴볼게요.', my: 'MyanMate သည် ကိုရီးယားတွင် အခြေချနေထိုင်သော မြန်မာလူမျိုးများအတွက် ဗီဇာ၊ နေအိမ်၊ အလုပ်နှင့် နေ့စဉ်ဘဝဆိုင်ရာ အချက်အလက်များကို လမ်းညွှန်ပါသည်။ ကျွန်ုပ်တို့လည်း ဖြတ်သန်းခဲ့ဖူးပြီး သင်နှင့်အတူ ကြည့်ရှုပါမည်။' },
  'home.topics.title':   { en: 'Browse by topic', ko: '주제별로 둘러보기', my: 'ခေါင်းစဉ်အလိုက် ကြည့်ရှုရန်' },
  'home.topics.visa':    { en: 'Visa',       ko: '비자',     my: 'ဗီဇာ' },
  'home.topics.jobs':    { en: 'Jobs',       ko: '알바·취업', my: 'အလုပ်' },
  'home.topics.housing': { en: 'Housing',    ko: '주거',     my: 'နေအိမ်' },
  'home.topics.korean':  { en: 'Korean',     ko: '한국어',    my: 'ကိုရီးယားဘာသာ' },
  'home.topics.daily':   { en: 'Daily life', ko: '생활 일반', my: 'နေ့စဉ်ဘဝ' },
  'home.topics.all':     { en: 'See all',    ko: '전체 보기',  my: 'အားလုံး ကြည့်ရန်' },
  'home.services.title': { en: 'Guidance we offer', ko: '제공하는 안내', my: 'ကျွန်ုပ်တို့ ပေးသော လမ်းညွှန်မှု' },
  'home.reviews.title':  { en: 'What people say', ko: '먼저 경험한 분들', my: 'လူများ ဘာပြောကြသလဲ' },
  'home.about.title':    { en: 'Who we are', ko: '우리를 소개할게요', my: 'ကျွန်ုပ်တို့ ဘယ်သူလဲ' },
  'home.about.blurb':    { en: 'A Korean and a Myanmar national who settled here — together we know both the system and the struggle.', ko: '한국인과, 한국에 정착한 미얀마 사람. 시스템도 알고, 그 막막함도 압니다.', my: 'ကိုရီးယားလူမျိုးတစ်ယောက်နှင့် ဒီမှာ အခြေချခဲ့သော မြန်မာတစ်ယောက်။ စနစ်ကိုလည်း သိ၊ ခက်ခဲမှုကိုလည်း နားလည်ပါသည်။' },
  'home.tiktok.eyebrow': { en: '2,000+ followers on TikTok', ko: 'TikTok 팔로워 2,000명+', my: 'TikTok တွင် follower ၂,၀၀၀ ကျော်' },
  'home.tiktok.title':   { en: 'See the everyday guides we share with the Myanmar community.', ko: '미얀마 커뮤니티와 나누는 한국 생활 정보를 확인해 보세요.', my: 'မြန်မာ community နှင့် မျှဝေသော ကိုရီးယားနေ့စဉ်ဘဝ လမ်းညွှန်များကို ကြည့်ရှုပါ။' },
  'home.tiktok.body':    { en: 'Our TikTok shares visa basics, part-time job notes, housing tips, Korean culture, daily life, and simple Korean expressions for real situations.', ko: 'MyanMate TikTok에서는 비자 기본 정보, 알바 정보, 주거 팁, 한국 문화, 일상 생활, 상황별 쉬운 한국어 표현을 공유합니다.', my: 'MyanMate TikTok တွင် ဗီဇာအခြေခံအချက်အလက်၊ part-time အလုပ်မှတ်စု၊ နေအိမ်အကြံပြုချက်၊ ကိုရီးယားယဉ်ကျေးမှု၊ နေ့စဉ်ဘဝနှင့် လက်တွေ့အခြေအနေများအတွက် ရိုးရှင်းသော ကိုရီးယားစကားများကို မျှဝေပါသည်။' },
  'home.tiktok.topic.visa':    { en: 'Visa info', ko: '비자 정보', my: 'ဗီဇာအချက်အလက်' },
  'home.tiktok.topic.jobs':    { en: 'Part-time jobs', ko: '알바 정보', my: 'Part-time အလုပ်' },
  'home.tiktok.topic.housing': { en: 'Housing tips', ko: '주거 팁', my: 'နေအိမ် အကြံပြုချက်' },
  'home.tiktok.topic.korean':  { en: 'Korean expressions', ko: '상황별 한국어', my: 'ကိုရီးယားစကား' },
  'home.tiktok.topicsLabel':   { en: 'TikTok content topics', ko: 'TikTok 콘텐츠 주제', my: 'TikTok content ခေါင်းစဉ်များ' },
  'home.tiktok.note':    { en: 'General information only. Requirements can change, so confirm your case before applying.', ko: '일반 정보 제공용입니다. 요건은 바뀔 수 있으니 신청 전 본인 상황에 맞게 확인하세요.', my: 'ယေဘုယျအချက်အလက်သာ ဖြစ်ပါသည်။ လိုအပ်ချက်များ ပြောင်းလဲနိုင်သောကြောင့် လျှောက်ထားမီ သင့်အခြေအနေနှင့် ကိုက်ညီမှုကို အတည်ပြုပါ။' },
  'home.tiktok.cta':     { en: 'View TikTok', ko: 'TikTok 보기', my: 'TikTok ကြည့်ရန်' },
  'home.cta.band':       { en: 'Not sure where to start? Just message us.', ko: '어디서부터 해야 할지 모르겠다면, 편하게 메시지 주세요.', my: 'ဘယ်ကစရမှန်း မသိဘူးလား? ကျွန်ုပ်တို့ကို လွတ်လပ်စွာ မက်ဆေ့ပို့လိုက်ပါ။' },

  /* 2. Service cards */
  'svc.house.name':   { en: 'Housing viewing guidance', ko: '집 보기 동행 자문', my: 'နေအိမ်ကြည့်ရှုရာတွင် လမ်းညွှန်မှု' },
  'svc.house.desc':   { en: 'We join viewings and share practical checks, comparison points, and things to ask the licensed realtor.', ko: '집을 보러 갈 때 함께 가서 확인할 점, 비교 기준, 공인중개사에게 물어볼 내용을 정리해 안내합니다.', my: 'အိမ်ကြည့်သွားသည့်အခါ အတူလိုက်ပြီး စစ်ဆေးရန်အချက်များ၊ နှိုင်းယှဉ်ရန်အချက်များနှင့် လိုင်စင်ရ အိမ်ခြံမြေအကျိုးဆောင်ကို မေးရန်အချက်များကို လမ်းညွှန်ပါသည်။' },
  'svc.house.price':  { en: 'From ₩150,000', ko: '15만원부터', my: '₩150,000 မှ စတင်' },
  'svc.house.duration': { en: 'Half a day (afternoon)', ko: '반나절(오후)', my: 'နေ့ဝက် (မွန်းလွဲ)' },
  'svc.visa.name':    { en: 'Visa checklist guidance', ko: '비자 체크리스트 안내', my: 'ဗီဇာ စစ်ဆေးစာရင်း လမ်းညွှန်မှု' },
  'svc.visa.desc':    { en: "Tell us your situation. We research the public requirements and organize a checklist. You write, apply, and submit yourself.", ko: '상황을 알려주시면 공개된 요건을 조사해 체크리스트로 정리합니다. 서류 작성, 신청, 제출은 본인이 직접 진행합니다.', my: 'သင့်အခြေအနေကို ပြောပြပါ။ အများပြည်သူသိနိုင်သော လိုအပ်ချက်များကို ရှာဖွေပြီး စစ်ဆေးစာရင်းအဖြစ် စီစဉ်ပါသည်။ စာရွက်စာတမ်းရေးသားခြင်း၊ လျှောက်ထားခြင်းနှင့် တင်သွင်းခြင်းကို သင်ကိုယ်တိုင် လုပ်ပါ။' },
  'svc.visa.price':   { en: '₩50,000', ko: '5만원', my: '₩50,000' },
  'svc.visa.duration': { en: '2–3 days', ko: '2–3일', my: '၂–၃ ရက်' },
  'svc.resume.name':  { en: 'Resume & job-search guidance', ko: '이력서·구직 정보 안내', my: 'ကိုယ်ရေးရာဇဝင်နှင့် အလုပ်ရှာဖွေရေး လမ်းညွှန်မှု' },
  'svc.resume.desc':  { en: 'We organize a Korean-style resume and guide you on where to check part-time job information yourself.', ko: '한국식 이력서를 정리하고, 알바 정보를 본인이 직접 확인할 수 있는 방법을 안내합니다.', my: 'ကိုရီးယားပုံစံ ကိုယ်ရေးရာဇဝင်ကို စီစဉ်ပြီး အချိန်ပိုင်းအလုပ် အချက်အလက်ကို သင်ကိုယ်တိုင် စစ်ဆေးနိုင်သည့် နည်းလမ်းများကို လမ်းညွှန်ပါသည်။' },
  'svc.resume.price': { en: 'From ₩20,000', ko: '2만원부터', my: '₩20,000 မှ စတင်' },
  'svc.resume.duration': { en: '1–2 days', ko: '1–2일', my: '၁–၂ ရက်' },

  /* 3. Guides */
  'guides.title': { en: 'Guides', ko: '정보', my: 'လမ်းညွှန်များ' },
  'guides.search.placeholder': { en: 'Search topics or keywords', ko: '주제·키워드 검색', my: 'ခေါင်းစဉ် သို့မဟုတ် သော့ချက်စကားလုံး ရှာရန်' },
  'guides.filter.all':     { en: 'All',        ko: '전체',     my: 'အားလုံး' },
  'guides.filter.visa':    { en: 'Visa',       ko: '비자',     my: 'ဗီဇာ' },
  'guides.filter.jobs':    { en: 'Jobs',       ko: '알바·취업', my: 'အလုပ်' },
  'guides.filter.housing': { en: 'Housing',    ko: '주거',     my: 'နေအိမ်' },
  'guides.filter.korean':  { en: 'Korean',     ko: '한국어',    my: 'ကိုရီးယားဘာသာ' },
  'guides.filter.daily':   { en: 'Daily life', ko: '생활 일반', my: 'နေ့စဉ်ဘဝ' },
  'guides.empty': { en: 'Nothing here yet — new guides coming soon.', ko: '아직 글이 없어요. 곧 새 정보가 올라옵니다.', my: 'ဒီမှာ ဘာမှ မရှိသေးပါ — လမ်းညွှန်အသစ်များ မကြာမီ ရောက်လာပါမည်။' },

  /* 3b. Blog */
  'blog.title':    { en: 'Blog', ko: '블로그', my: 'ဘလော့ဂ်' },
  'blog.empty':    { en: 'No posts yet — check back soon.', ko: '아직 글이 없어요. 곧 새 글이 올라옵니다.', my: 'ပို့စ် မရှိသေးပါ — မကြာမီ ပြန်လာကြည့်ပါ။' },
  'blog.readMore': { en: 'Read more', ko: '더 읽기', my: 'ဆက်ဖတ်ရန်' },

  /* 4. Content detail */
  'content.section.eligibility': { en: "Who it's for", ko: '누가 해당되나요', my: 'ဘယ်သူနှင့် သက်ဆိုင်သလဲ' },
  'content.section.documents':   { en: "Documents you'll need", ko: '필요한 서류', my: 'လိုအပ်မည့် စာရွက်စာတမ်းများ' },
  'content.section.steps':       { en: 'How to apply', ko: '신청 절차', my: 'လျှောက်ထားနည်း' },
  'content.section.watchout':    { en: 'Watch out for (common mistakes)', ko: '주의사항 · 자주 하는 실수', my: 'သတိထားရန် (မကြာခဏ မှားတတ်သည့်အရာများ)' },
  'content.section.subtypes':    { en: 'Visa categories', ko: '비자 카테고리', my: 'ဗီဇာ အမျိုးအစားများ' },
  'content.section.notes':       { en: 'Important notes', ko: '중요 사항', my: 'အရေးကြီး မှတ်ချက်များ' },
  'content.cta.title':  { en: 'Need a clear checklist for your case?', ko: '내 상황에 맞는 체크리스트가 필요하신가요?', my: 'သင့်အခြေအနေနှင့် ကိုက်ညီသော စစ်ဆေးစာရင်း လိုပါသလား?' },
  'content.cta.button': { en: 'Ask for guidance →', ko: '안내 요청하기 →', my: 'လမ်းညွှန်မှု တောင်းဆိုရန် →' },
  'content.cta.note':   { en: 'We research and guide. You apply yourself.', ko: '저희는 조사·안내하고, 신청은 직접 하시면 됩니다.', my: 'ကျွန်ုပ်တို့ ရှာဖွေ၍ လမ်းညွှန်ပေးသည်။ လျှောက်ထားခြင်းကို သင်ကိုယ်တိုင် လုပ်ပါ။' },
  'content.related.title': { en: 'Related guides', ko: '관련 정보', my: 'ဆက်စပ် လမ်းညွှန်များ' },
  'content.toc': { en: 'On this page', ko: '목차', my: 'ဤစာမျက်နှာတွင်' },
  'content.lastReviewed': { en: 'Last reviewed', ko: '최종 검토일', my: 'နောက်ဆုံး ပြန်လည်စစ်ဆေးသည့် ရက်' },
  'content.disclaimer': { en: 'This is general information, not legal advice. Always confirm with Immigration (HiKorea).', ko: '일반 정보이며 법률 자문이 아닙니다. 최종 확인은 출입국(하이코리아)에서 하세요.', my: 'ဤအချက်အလက်သည် ယေဘုယျအချက်အလက်ဖြစ်ပြီး ဥပဒေအကြံဉာဏ် မဟုတ်ပါ။ နောက်ဆုံးအတည်ပြုချက်ကို လူဝင်မှုကြီးကြပ်ရေး (HiKorea) တွင် စစ်ဆေးပါ။' },

  /* 5. Service detail */
  'svcDetail.section.whatWeDo':    { en: 'What this includes', ko: '포함되는 안내', my: 'ပါဝင်သော လမ်းညွှန်မှု' },
  'svcDetail.section.whatWeDont':  { en: "What we don't do", ko: '무엇은 하지 않나요', my: 'ကျွန်ုပ်တို့ ဘာ မလုပ်သလဲ' },
  'svcDetail.section.how':         { en: 'How it works', ko: '진행 절차', my: 'ဘယ်လို ဆောင်ရွက်သလဲ' },
  'svcDetail.section.reviews':     { en: 'Reviews', ko: '후기', my: 'သုံးသပ်ချက်များ' },
  'svcDetail.section.faq':         { en: 'FAQ', ko: '자주 묻는 질문', my: 'မေးလေ့ရှိသော မေးခွန်းများ' },
  'svcDetail.dont.body': { en: "We don't write, file, or submit documents, and we don't arrange property contracts or job placements. We research, guide, and accompany; you make the decisions and complete the required steps.", ko: '서류 작성·신청·제출을 하지 않고, 부동산 계약이나 일자리 연결을 알선하지 않습니다. 저희는 조사·안내·동행 자문을 제공하며, 결정과 필수 절차 진행은 본인이 합니다.', my: 'ကျွန်ုပ်တို့သည် စာရွက်စာတမ်းရေးသားခြင်း၊ လျှောက်ထားခြင်း၊ တင်သွင်းခြင်း မလုပ်ပါ။ အိမ်ခြံမြေစာချုပ် သို့မဟုတ် အလုပ်ချိတ်ဆက်မှုကိုလည်း စီစဉ်မပေးပါ။ ကျွန်ုပ်တို့သည် ရှာဖွေခြင်း၊ လမ်းညွှန်ခြင်းနှင့် အတူလိုက်ပါအကြံပြုခြင်းကိုသာ ပေးပြီး ဆုံးဖြတ်ချက်နှင့် လိုအပ်သောအဆင့်များကို သင်ကိုယ်တိုင် လုပ်ဆောင်ပါသည်။' },
  'svcDetail.label.price':    { en: 'Price', ko: '가격', my: 'စျေးနှုန်း' },
  'svcDetail.label.duration': { en: 'Takes about', ko: '소요 시간', my: 'ကြာချိန် ခန့်မှန်း' },
  'svcDetail.value.duration': { en: '2–3 days', ko: '2–3일', my: '၂–၃ ရက်' },
  'svcDetail.cta': { en: 'Request guidance', ko: '안내 요청하기', my: 'လမ်းညွှန်မှု တောင်းဆိုရန်' },
  'svcDetail.how.step1': { en: 'Tell us your situation by message.', ko: '메시지로 상황을 알려주세요.', my: 'သင့်အခြေအနေကို မက်ဆေ့ဖြင့် ပြောပြပါ။' },
  'svcDetail.how.step2': { en: 'We research public information and organize a clear guide for your situation.', ko: '공개 정보를 조사해 현재 상황에 맞는 안내로 정리합니다.', my: 'အများပြည်သူသိနိုင်သော အချက်အလက်များကို ရှာဖွေပြီး သင့်အခြေအနေနှင့် ကိုက်ညီသော လမ်းညွှန်အဖြစ် စီစဉ်ပါသည်။' },
  'svcDetail.how.step3': { en: 'You complete the required steps yourself; we answer questions within the guidance scope.', ko: '필수 절차는 본인이 직접 진행하고, 저희는 안내 범위 안에서 질문에 답합니다.', my: 'လိုအပ်သောအဆင့်များကို သင်ကိုယ်တိုင် ပြီးစီးစေပြီး ကျွန်ုပ်တို့သည် လမ်းညွှန်မှုအတိုင်းအတာအတွင်း မေးခွန်းများကို ဖြေကြားပါသည်။' },
  'svcDetail.faq.q1': { en: 'Where does your guidance stop?', ko: '안내 범위는 어디까지인가요?', my: 'လမ်းညွှန်မှု အတိုင်းအတာက ဘယ်အထိလဲ?' },
  'svcDetail.faq.a1': { en: 'We research public information, organize checklists, and answer questions. You write, apply, submit, sign, and make final decisions yourself, or work with a licensed professional.', ko: '저희는 공개 정보 조사, 체크리스트 정리, 질문 응답을 제공합니다. 작성·신청·제출·서명·최종 결정은 본인이 직접 하거나 자격 전문가와 진행합니다.', my: 'ကျွန်ုပ်တို့သည် အများပြည်သူသိနိုင်သော အချက်အလက်ရှာဖွေခြင်း၊ စစ်ဆေးစာရင်း စီစဉ်ခြင်းနှင့် မေးခွန်းဖြေကြားခြင်းကို ပေးပါသည်။ ရေးသားခြင်း၊ လျှောက်ထားခြင်း၊ တင်သွင်းခြင်း၊ လက်မှတ်ထိုးခြင်းနှင့် နောက်ဆုံးဆုံးဖြတ်ချက်များကို သင်ကိုယ်တိုင် သို့မဟုတ် လိုင်စင်ရ ကျွမ်းကျင်သူနှင့် ဆောင်ရွက်ပါသည်။' },
  'svcDetail.faq.q2': { en: 'How do we communicate?', ko: '어떻게 소통하나요?', my: 'ဘယ်လို ဆက်သွယ်ကြမလဲ?' },
  'svcDetail.faq.a2': { en: 'By message (DM) or the request form — whichever is easiest for you.', ko: '메시지(DM)나 신청 폼으로 편하게 소통합니다.', my: 'မက်ဆေ့ (DM) သို့မဟုတ် တောင်းဆိုမှုပုံစံဖြင့် — သင့်အတွက် အဆင်ပြေသလို။' },

  /* 6. Request / consult */
  'request.title': { en: 'Request guidance', ko: '안내 요청', my: 'လမ်းညွှန်မှု တောင်းဆိုရန်' },
  'request.lead':  { en: "Fill out the form, or message us on Facebook — we reply within a day.", ko: '아래 양식을 남기거나, 페이스북 메시지로 문의해 주세요. 하루 안에 답변합니다.', my: 'အောက်ဖောင်ကို ဖြည့်ပါ၊ သို့မဟုတ် Facebook မက်ဆေ့ပို့ပါ — တစ်ရက်အတွင်း ပြန်ကြားပါမည်။' },
  'request.field.name':       { en: 'Name', ko: '이름', my: 'အမည်' },
  'request.field.name.ph':    { en: 'Your name', ko: '이름 입력', my: 'သင့်အမည်' },
  'request.field.contact':    { en: 'Contact', ko: '연락처', my: 'ဆက်သွယ်ရန်' },
  'request.field.contact.ph': { en: 'Phone or email', ko: '전화 / 이메일', my: 'ဖုန်း သို့မဟုတ် အီးမေးလ်' },
  'request.field.service':    { en: 'Which service?', ko: '원하는 서비스', my: 'ဘယ်ဝန်ဆောင်မှုလဲ?' },
  'request.field.service.ph': { en: 'Choose a service', ko: '서비스 선택', my: 'ဝန်ဆောင်မှု ရွေးပါ' },
  'request.field.memo':       { en: 'Anything we should know?', ko: '메모', my: 'ကျွန်ုပ်တို့ သိသင့်တာ ရှိပါသလား?' },
  'request.field.memo.ph':    { en: 'Tell us a little about your situation', ko: '상황을 간단히 적어주세요', my: 'သင့်အခြေအနေကို အနည်းငယ် ရေးပြပါ' },
  'request.field.memo.note':  { en: "Please don't include sensitive details such as passport or ID numbers.", ko: '여권번호·외국인등록번호 같은 민감정보는 적지 마세요.', my: 'ပတ်စပို့ သို့မဟုတ် မှတ်ပုံတင်နံပါတ်ကဲ့သို့ အရေးကြီးအချက်အလက်များ မထည့်ပါနှင့်။' },
  'request.consent': { en: 'I agree to MyanMate collecting my contact details to respond to this request.', ko: '문의 응대를 위해 MyanMate가 연락처를 수집하는 데 동의합니다.', my: 'ဤတောင်းဆိုမှုကို တုံ့ပြန်ရန်အတွက် MyanMate မှ ကျွန်ုပ်၏ ဆက်သွယ်ရန်အချက်အလက်များ စုဆောင်းခြင်းကို သဘောတူပါသည်။' },
  'request.submit':  { en: 'Send request', ko: '제출하기', my: 'တောင်းဆိုချက် ပို့ရန်' },
  'request.sending': { en: 'Sending…', ko: '보내는 중…', my: 'ပို့နေသည်…' },
  'request.or':      { en: 'or', ko: '또는', my: 'သို့မဟုတ်' },
  'request.dm':      { en: 'Message us on Facebook Messenger', ko: 'Facebook Messenger로 문의하기', my: 'Facebook Messenger ဖြင့် မက်ဆေ့ပို့ရန်' },
  'request.success': { en: "Got it! We'll reply within a day.", ko: '접수됐어요! 하루 안에 답변드릴게요.', my: 'ရရှိပါပြီ! တစ်ရက်အတွင်း ပြန်ကြားပေးပါမည်။' },
  'request.error':   { en: 'Something went wrong — please message us directly.', ko: '문제가 생겼어요 — 메시지로 직접 문의해 주세요.', my: 'တစ်ခုခု မှားယွင်းသွားသည် — တိုက်ရိုက် မက်ဆေ့ပို့ပါ။' },

  /* 7. Reviews */
  'reviews.title':    { en: 'What people say', ko: '먼저 경험한 분들', my: 'လူများ ဘာပြောကြသလဲ' },
  'reviews.subtitle': { en: 'Real stories from Myanmar people who settled in Korea with us.', ko: '우리와 함께 한국에 정착한 미얀마 사람들의 진짜 이야기.', my: 'ကျွန်ုပ်တို့နှင့်အတူ ကိုရီးယားတွင် အခြေချခဲ့သော မြန်မာလူမျိုးများ၏ တကယ့်ဇာတ်လမ်းများ။' },
  'reviews.before':   { en: 'Before', ko: '비포', my: 'အရင်က' },
  'reviews.after':    { en: 'After', ko: '애프터', my: 'အခု' },
  'reviews.cta':      { en: 'Need guidance for your next step? Ask us →', ko: '다음 단계가 막막하다면, 안내 요청하기 →', my: 'နောက်တစ်ဆင့်အတွက် လမ်းညွှန်မှု လိုပါသလား? မေးမြန်းရန် →' },
  'reviews.empty':    { en: 'Reviews coming soon.', ko: '곧 후기가 올라옵니다.', my: 'သုံးသပ်ချက်များ မကြာမီ ရောက်လာပါမည်။' },

  /* 8. About */
  'about.title': { en: 'About MyanMate', ko: 'MyanMate 소개', my: 'MyanMate အကြောင်း' },
  'about.lead':  { en: "We're a small team that knows both sides of settling in Korea.", ko: '한국 정착의 양쪽을 모두 아는 작은 팀입니다.', my: 'ကိုရီးယားတွင် အခြေချခြင်း၏ နှစ်ဖက်စလုံးကို သိသော အသင်းငယ်တစ်ခု ဖြစ်ပါသည်။' },
  'about.partner.kr.label': { en: 'Korean', ko: '한국인', my: 'ကိုရီးယားလူမျိုး' },
  'about.partner.kr.body':  { en: 'Born and raised in Korea — knows the systems, paperwork, and the things only a local notices.', ko: '한국에서 나고 자라 시스템과 행정, 현지인만 아는 것들을 압니다.', my: 'ကိုရီးယားတွင် မွေးဖွားကြီးပြင်းခဲ့ပြီး စနစ်များ၊ ရုံးလုပ်ငန်းများနှင့် ဒေသခံတစ်ယောက်သာ သတိထားမိသည့်အရာများကို သိသည်။' },
  'about.partner.mm.label': { en: 'Myanmar, settled in Korea', ko: '미얀마 출신, 한국 정착', my: 'မြန်မာ၊ ကိုရီးယားတွင် အခြေချ' },
  'about.partner.mm.body':  { en: 'Came from Myanmar and built a life here. Knows the struggle firsthand — because I lived it.', ko: '미얀마에서 와서 이곳에 삶을 일궜습니다. 그 막막함을, 직접 겪었기에 압니다.', my: 'မြန်မာမှ လာပြီး ဒီမှာ ဘဝတည်ဆောက်ခဲ့သည်။ ကိုယ်တိုင် ဖြတ်သန်းခဲ့ရသဖြင့် ထိုခက်ခဲမှုကို နားလည်ပါသည်။' },
  'about.values.title':  { en: 'What we promise', ko: '우리의 약속', my: 'ကျွန်ုပ်တို့၏ ကတိ' },
  'about.values.honest': { en: "Honest advice, even when it's not what you hoped.", ko: '듣기 좋은 말이 아니라, 솔직한 조언을 드립니다.', my: 'နားထောင်ရတာ ကောင်းသည့်စကားမဟုတ်ဘဲ ပွင့်လင်းသော အကြံဉာဏ်ကို ပေးပါသည်။' },
  'about.values.clear':  { en: 'We tell you exactly what we do — and what we don\'t.', ko: '무엇을 하고 무엇은 안 하는지, 분명히 말씀드립니다.', my: 'ဘာလုပ်ပြီး ဘာမလုပ်သည်ကို ရှင်းရှင်းလင်းလင်း ပြောပါသည်။' },
  'about.values.beside': { en: 'You stay in control. We guide you along the way.', ko: '결정과 진행은 본인이 하고, 저희는 곁에서 안내합니다.', my: 'ဆုံးဖြတ်ခြင်းနှင့် ဆောင်ရွက်ခြင်းကို သင်ကိုယ်တိုင် လုပ်ပြီး ကျွန်ုပ်တို့က ဘေးမှ လမ်းညွှန်ပါသည်။' },

  /* 9. Privacy policy (new — general info; finalize with a professional before launch) */
  'privacy.title': { en: 'Privacy policy', ko: '개인정보 처리방침', my: 'ကိုယ်ရေးအချက်အလက် မူဝါဒ' },
  'privacy.lead':  { en: 'We collect only what we need to reply to your request and arrange guidance. We do not sell your information.', ko: '문의 답변과 안내 진행에 필요한 정보만 수집합니다. 정보를 판매하지 않습니다.', my: 'သင့်တောင်းဆိုမှုကို ပြန်ကြားရန်နှင့် လမ်းညွှန်မှု ဆောင်ရွက်ရန် လိုအပ်သောအချက်အလက်ကိုသာ စုဆောင်းပါသည်။ သင့်အချက်အလက်ကို မရောင်းပါ။' },
  'privacy.collect.title': { en: 'What we collect', ko: '수집하는 정보', my: 'ကျွန်ုပ်တို့ စုဆောင်းသည့်အရာ' },
  'privacy.collect.body':  { en: 'When you send a request, we collect your name, contact details (phone or email), selected service, consent status, and any note you write.', ko: '문의를 보내실 때 이름, 연락처(전화 또는 이메일), 선택한 서비스, 동의 여부, 작성하신 메모를 수집합니다.', my: 'တောင်းဆိုမှု ပို့သည့်အခါ သင့်အမည်၊ ဆက်သွယ်ရန်အချက်အလက် (ဖုန်း သို့မဟုတ် အီးမေးလ်)၊ ရွေးချယ်ထားသော ဝန်ဆောင်မှု၊ သဘောတူညီမှု အခြေအနေနှင့် သင်ရေးသည့် မှတ်စုကို စုဆောင်းပါသည်။' },
  'privacy.use.title': { en: 'How we use it', ko: '이용 목적', my: 'ဘယ်လို အသုံးပြုသလဲ' },
  'privacy.use.body':  { en: 'We use it only to reply to your request, discuss the guidance you asked about, and keep a short record of the conversation.', ko: '문의에 답변하고, 요청하신 안내를 논의하며, 대화 기록을 필요한 범위에서 보관하기 위해서만 사용합니다.', my: 'သင့်တောင်းဆိုမှုကို ပြန်ကြားရန်၊ မေးမြန်းထားသော လမ်းညွှန်မှုကို ဆွေးနွေးရန်နှင့် စကားပြောမှတ်တမ်းကို လိုအပ်သလောက် သိမ်းထားရန်အတွက်သာ အသုံးပြုပါသည်။' },
  'privacy.processors.title': { en: 'Where requests are processed', ko: '문의 처리 경로', my: 'တောင်းဆိုမှုများကို ဆောင်ရွက်သည့်နေရာ' },
  'privacy.processors.body':  { en: 'Request forms are processed through Web3Forms and delivered to our Gmail inbox. Facebook Messenger messages are processed by Meta. Each provider may process data under its own privacy policy.', ko: '문의 폼은 Web3Forms를 통해 처리되어 MyanMate의 Gmail 받은편지함으로 전달됩니다. Facebook Messenger 메시지는 Meta가 처리합니다. 각 제공업체는 자체 개인정보 처리방침에 따라 데이터를 처리할 수 있습니다.', my: 'တောင်းဆိုမှုပုံစံများကို Web3Forms မှတစ်ဆင့် ဆောင်ရွက်ပြီး MyanMate ၏ Gmail စာတိုက်သို့ ပို့ပေးပါသည်။ Facebook Messenger မက်ဆေ့များကို Meta က ဆောင်ရွက်ပါသည်။ ဝန်ဆောင်မှုပေးသူတစ်ခုချင်းစီသည် ၎င်းတို့၏ ကိုယ်ရေးအချက်အလက်မူဝါဒအရ ဒေတာကို ဆောင်ရွက်နိုင်ပါသည်။' },
  'privacy.sensitive.title': { en: "Please don't send sensitive data", ko: '민감정보는 보내지 마세요', my: 'အရေးကြီးအချက်အလက် မပို့ပါနှင့်' },
  'privacy.sensitive.body':  { en: 'Please do not include sensitive details such as passport numbers, ID numbers, or financial information. We do not need them for initial guidance.', ko: '여권번호, 외국인등록번호, 금융정보 같은 민감한 정보는 넣지 마세요. 초기 안내에는 필요하지 않습니다.', my: 'ပတ်စပို့နံပါတ်၊ မှတ်ပုံတင်နံပါတ် သို့မဟုတ် ငွေကြေးအချက်အလက်ကဲ့သို့ အရေးကြီးအချက်အလက်များ မထည့်ပါနှင့်။ ကနဦး လမ်းညွှန်မှုအတွက် ၎င်းတို့ကို မလိုအပ်ပါ။' },
  'privacy.retention.title': { en: 'How long we keep it', ko: '보관 기간', my: 'ဘယ်လောက်ကြာ သိမ်းထားသလဲ' },
  'privacy.retention.body':  { en: 'We keep request records only as long as needed to respond and provide guidance. We delete them on request unless we must keep them for a legal or dispute-related reason.', ko: '문의 기록은 답변과 안내에 필요한 기간 동안만 보관합니다. 법적 의무나 분쟁 대응을 위해 필요한 경우가 아니라면 요청 시 삭제합니다.', my: 'တောင်းဆိုမှုမှတ်တမ်းများကို ပြန်ကြားရန်နှင့် လမ်းညွှန်ရန် လိုအပ်သောကာလအတွင်းသာ သိမ်းထားပါသည်။ ဥပဒေအရ သို့မဟုတ် အငြင်းပွားမှုအတွက် သိမ်းထားရန် လိုအပ်သောအခြေအနေ မရှိပါက တောင်းဆိုမှုအပေါ် ဖျက်ပေးပါသည်။' },
  'privacy.contact.title': { en: 'Questions or deletion', ko: '문의·삭제 요청', my: 'မေးခွန်း သို့မဟုတ် ဖျက်ရန်' },
  'privacy.contact.body':  { en: 'To ask a question or have your information deleted, message us anytime.', ko: '문의하거나 정보 삭제를 원하시면 언제든 메시지를 주세요.', my: 'မေးခွန်းမေးရန် သို့မဟုတ် သင့်အချက်အလက် ဖျက်လိုပါက အချိန်မရွေး မက်ဆေ့ပို့ပါ။' },
  'privacy.updated': { en: 'Last updated', ko: '최종 수정일', my: 'နောက်ဆုံး မွမ်းမံသည့်ရက်' },

  /* UI helper labels (not in the original copy sheet) */
  'ui.tag.visaResearch': { en: 'Visa research', ko: '비자 조사', my: 'ဗီဇာ ရှာဖွေ' },
  'ui.tag.houseVisit':   { en: 'House visit', ko: '집 동행', my: 'အိမ်လိုက်' },
  'ui.tag.resumeJob':    { en: 'Resume & jobs', ko: '이력서·알바', my: 'ကိုယ်ရေး·အလုပ်' },
  'ui.step':             { en: 'Step', ko: '단계', my: 'အဆင့်' },
  'ui.readGuide':        { en: 'Visa · Guide example', ko: '비자 · 콘텐츠 예시', my: 'ဗီဇာ · နမူနာ' },
  'ui.menu':             { en: 'Menu', ko: '메뉴', my: 'မီနူး' },
} satisfies Record<string, Entry>;

export type UIKey = keyof typeof ui;

const dict: Record<string, Entry> = ui;

/** Translate a key into the given language, falling back to EN, then to the key itself. */
export function t(key: string, lang: Lang = defaultLang): string {
  const entry = dict[key];
  if (!entry) {
    if (import.meta.env?.DEV) console.warn(`[i18n] missing key: ${key}`);
    return '';
  }
  return entry[lang] ?? entry[defaultLang] ?? '';
}

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (languages as readonly string[]).includes(value);
}
