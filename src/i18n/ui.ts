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
  'nav.logoTag':    { en: 'Settle in Korea', ko: '한국 정착 안내', my: 'ကိုရီးယား အခြေချ လမ်းညွှန်' },

  'btn.getHelp':      { en: '1:1 DM inquiry', ko: '1:1 DM 문의', my: '1:1 DM မေးမြန်းရန်' },
  'btn.organizeVisa': { en: 'Ask about visa information', ko: '비자 정보 문의하기', my: 'ဗီဇာအချက်အလက် မေးမြန်းရန်' },
  'btn.readVisa':     { en: 'Check visa information', ko: '비자 정보 확인하기', my: 'ဗီဇာအချက်အလက် ကြည့်ရန်' },
  'btn.serviceScope': { en: 'View service scope', ko: '서비스 범위 보기', my: 'ဝန်ဆောင်မှုအတိုင်းအတာ ကြည့်ရန်' },
  'mobileCta.note':   { en: 'Choose a channel without sending sensitive details', ko: '민감정보 없이 편한 채널을 선택하세요', my: 'အရေးကြီးအချက်အလက် မပို့ဘဲ channel ရွေးပါ' },
  'mobileCta.action': { en: 'Choose DM', ko: 'DM 선택', my: 'DM ရွေးရန်' },
  'btn.browseGuides': { en: 'Visa information', ko: '비자 정보 보기', my: 'ဗီဇာအချက်အလက်' },
  'btn.viewDetails':  { en: 'View details',  ko: '상세 보기',    my: 'အသေးစိတ်ကြည့်ရန်' },
  'btn.more':         { en: 'See more',      ko: '더 보기',      my: 'ပိုမိုကြည့်ရှုရန်' },

  'footer.disclaimer': {
    en: 'MyanMate provides information and in-person guidance only. You complete and submit all documents and contracts yourself (or through a licensed professional). Please confirm final requirements with Immigration (HiKorea) and a licensed realtor.',
    ko: 'MyanMate는 정보 제공과 동행 자문만 합니다. 모든 서류 작성·신청·제출과 임대차 계약은 본인이 직접(또는 자격 전문가를 통해) 진행합니다. 최종 요건은 출입국·하이코리아 및 공인중개사에게 확인하세요.',
    my: 'MyanMate သည် အချက်အလက်နှင့် လမ်းညွှန်မှုသာ လုပ်ဆောင်ပေးပါသည်။ စာရွက်စာတမ်းများ တင်သွင်းခြင်းနှင့် စာချုပ်ချူပ်ဆိုခြင်းများကို သင်ကိုယ်တိုင် (သို့မဟုတ်)လိုင်စင်ရ ကျွမ်းကျင်သူမှတစ်ဆင့် ဆောင်ရွက်ရပါမည်။ နောက်ဆုံးလိုအပ်ချက်များကို လူဝင်မှုကြီးကြပ်ရေး (HiKorea) နှင့် လိုင်စင်ရ အိမ်ခြံမြေအကျိုးဆောင်ထံ အတည်ပြုပါ။',
  },
  'footer.tagline': { en: 'Your mate for settling in Korea.', ko: '한국 정착, 곁을 지켜주는 친구.', my: 'ကိုရီးယားတွင် အခြေချရာ၌ သင့်ဘေးက မိတ်ဆွေ။' },

  /* 1. Home */
  'home.hero.kicker': { en: 'Myanmar community guidance in Korea', ko: '한국 생활이 처음인 미얀마인을 위한 안내', my: 'ကိုရီးယားရှိ မြန်မာ community အတွက် လမ်းညွှန်မှု' },
  'home.hero.headline': { en: "New to Korea? You don't have to figure it out alone.", ko: '한국에 막 오셨나요? 혼자 헤매지 않아도 돼요.', my: 'ကိုရီးယားကို အခုမှ ရောက်တာလား? တစ်ယောက်တည်း ရုန်းကန်နေစရာ မလိုပါဘူး။' },
  'home.hero.sub': { en: 'Start with the visa information already organized here. We will keep adding more visa topics. If something is still unclear after reading, message us through the channel that is easiest for you.', ko: '먼저 정리된 비자 정보를 확인해 보세요. 필요한 비자 정보는 계속 추가할 예정입니다. 읽고도 궁금한 점이 남으면 편한 채널로 메시지를 보내주세요.', my: 'ဤနေရာတွင် စီစဉ်ထားသော ဗီဇာအချက်အလက်များကို ဦးစွာ ကြည့်ပါ။ လိုအပ်သော ဗီဇာအကြောင်းအရာများကို ဆက်လက်ထည့်သွင်းသွားပါမည်။ ဖတ်ပြီးနောက် မရှင်းလင်းသေးသည့်အချက်ရှိပါက အဆင်ပြေသော channel မှ မက်ဆေ့ပို့ပါ။' },
  'home.hero.visual.title': { en: 'Clear points for your next step', ko: '다음에 확인할 내용을 안내해요', my: 'နောက်တစ်ဆင့်တွင် စစ်ဆေးရမည့်အချက်များကို လမ်းညွှန်ပါသည်' },
  'home.hero.visual.item1': { en: 'Your situation', ko: '현재 상황', my: 'သင့်အခြေအနေ' },
  'home.hero.visual.item2': { en: 'Public requirements', ko: '공개 요건 확인', my: 'အများပြည်သူသိနိုင်သော လိုအပ်ချက်များ' },
  'home.hero.visual.item3': { en: 'Preparation points to confirm', ko: '직접 확인할 준비 항목', my: 'ကိုယ်တိုင် အတည်ပြုရမည့် ပြင်ဆင်ချက်များ' },
  'home.quick.title': { en: 'Which visa information do you need?', ko: '어떤 비자 정보를 확인할까요?', my: 'မည်သည့်ဗီဇာအချက်အလက်ကို စစ်ဆေးလိုပါသလဲ?' },
  'home.quick.visa': { en: 'Visa information', ko: '비자 정보', my: 'ဗီဇာအချက်အလက်' },
  'home.quick.resume': { en: 'Resume & job notes', ko: '이력서·구직 정보', my: 'ကိုယ်ရေးရာဇဝင်နှင့် အလုပ်မှတ်စု' },
  'home.trust.info': { en: 'Information research and guidance only', ko: '정보 조사와 안내만', my: 'အချက်အလက်ရှာဖွေမှုနှင့် လမ်းညွှန်မှုသာ' },
  'home.trust.self': { en: 'You apply and decide yourself', ko: '신청과 결정은 본인이 직접', my: 'လျှောက်ထားခြင်းနှင့် ဆုံးဖြတ်ခြင်းကို ကိုယ်တိုင်' },
  'home.trust.private': { en: 'No passport or ID numbers needed to ask', ko: '문의에 여권번호·신분번호 불필요', my: 'မေးမြန်းရန် ပတ်စပို့/ID နံပါတ် မလိုပါ' },
  'home.trust.label': { en: 'MyanMate guidance principles', ko: 'MyanMate 안내 원칙', my: 'MyanMate လမ်းညွှန်မှု စည်းမျဉ်းများ' },
  'home.trust.slogan': { en: 'We guide, You decide', ko: 'We guide, You decide', my: 'We guide, You decide' },
  'home.entry.label': { en: 'Information and guidance categories', ko: '정보 및 안내 카테고리', my: 'အချက်အလက်နှင့် လမ်းညွှန်မှု အမျိုးအစားများ' },
  'home.entry.visa': { en: 'Visa information', ko: '비자 정보', my: 'ဗီဇာအချက်အလက်' },
  'home.topics.title':   { en: 'Browse by topic', ko: '주제별로 둘러보기', my: 'ခေါင်းစဉ်အလိုက် ကြည့်ရှုရန်' },
  'home.topics.visa':    { en: 'Visa',       ko: '비자',     my: 'ဗီဇာ' },
  'home.topics.jobs':    { en: 'Jobs',       ko: '알바·취업', my: 'အလုပ်' },
  'home.topics.housing': { en: 'Housing',    ko: '주거',     my: 'နေအိမ်' },
  'home.topics.korean':  { en: 'Korean',     ko: '한국어',    my: 'ကိုရီးယားဘာသာ' },
  'home.topics.daily':   { en: 'Daily life', ko: '생활 일반', my: 'နေ့စဉ်ဘဝ' },
  'home.topics.all':     { en: 'See all',    ko: '전체 보기',  my: 'အားလုံး ကြည့်ရန်' },
  'home.services.title': { en: 'Guidance we offer', ko: '이런 안내를 드려요', my: 'ကျွန်ုပ်တို့ ပေးသော လမ်းညွှန်မှု' },
  'home.services.lead': { en: 'A small, practical service lineup for the first questions people usually face after arriving in Korea.', ko: '한국에 막 왔을 때 가장 먼저 막히는 문제부터 작고 실용적으로 도와드립니다.', my: 'ကိုရီးယားကို အခုမှ ရောက်လာသူများ ပထမဆုံး ကြုံရသော မေးခွန်းများအတွက် လက်တွေ့ကျသော လမ်းညွှန်မှုများ ဖြစ်ပါသည်။' },
  'home.process.title': { en: 'How MyanMate works', ko: 'MyanMate는 이렇게 도와드려요', my: 'MyanMate ဘယ်လို ကူညီသလဲ' },
  'home.process.step1.title': { en: 'You tell us the context', ko: '상황을 알려주세요', my: 'သင့်အခြေအနေကို ပြောပြပါ' },
  'home.process.step1.body': { en: 'Only the details needed to understand your question.', ko: '문의에 필요한 최소한의 내용만 확인합니다.', my: 'မေးခွန်းကို နားလည်ရန် လိုအပ်သော အချက်အလက်အနည်းငယ်သာ။' },
  'home.process.step2.title': { en: 'We organize public information', ko: '공개 정보를 정리합니다', my: 'အများပြည်သူသိနိုင်သော အချက်အလက်များကို စီစဉ်ပါသည်' },
  'home.process.step2.body': { en: 'Requirements, comparison points, and questions to ask.', ko: '요건, 비교 기준, 확인할 질문을 정리합니다.', my: 'လိုအပ်ချက်များ၊ နှိုင်းယှဉ်ချက်များနှင့် မေးရန်အချက်များ။' },
  'home.process.step3.title': { en: 'You stay in control', ko: '진행은 본인이 직접 합니다', my: 'သင်ကိုယ်တိုင် ထိန်းချုပ်ပါသည်' },
  'home.process.step3.body': { en: 'You complete required steps yourself, with guidance beside you.', ko: '필수 절차는 본인이 진행하고, 저희는 곁에서 안내합니다.', my: 'လိုအပ်သောအဆင့်များကို သင်ကိုယ်တိုင် ပြီးစီးစေပြီး ကျွန်ုပ်တို့က ဘေးမှ လမ်းညွှန်ပါသည်။' },
  'home.guides.title': { en: 'Check the visa information first', ko: '비자 정보부터 확인하세요', my: 'ဗီဇာအချက်အလက်ကို ဦးစွာ စစ်ဆေးပါ' },
  'home.guides.lead': { en: 'Each available visa is organized as a separate guide, and more will be added as needed. Open the information you need and review the eligibility, documents, and application steps yourself.', ko: '현재 제공되는 비자 정보를 각각 독립된 안내로 정리했으며, 필요한 정보는 계속 추가할 예정입니다. 확인하려는 비자를 열어 자격, 서류, 신청 절차를 직접 살펴보세요.', my: 'လက်ရှိပေးထားသော ဗီဇာအချက်အလက်တစ်ခုစီကို သီးခြားလမ်းညွှန်အဖြစ် စီစဉ်ထားပြီး လိုအပ်သလို ထပ်မံထည့်သွင်းသွားပါမည်။ လိုအပ်သောအချက်အလက်ကို ဖွင့်၍ အရည်အချင်း၊ စာရွက်စာတမ်းနှင့် လျှောက်ထားမှုအဆင့်များကို ကိုယ်တိုင် စစ်ဆေးပါ။' },
  'home.guides.all': { en: 'View all visa information', ko: '비자 정보 전체 보기', my: 'ဗီဇာအချက်အလက်အားလုံး ကြည့်ရန်' },
  'home.guideFeatures.label': { en: 'Information included in each visa guide', ko: '각 비자 정보에 포함된 내용', my: 'ဗီဇာလမ်းညွှန်တစ်ခုစီတွင် ပါဝင်သောအချက်အလက်' },
  'home.guideFeatures.eligibility': { en: 'Eligibility', ko: '대상·자격', my: 'အရည်အချင်း' },
  'home.guideFeatures.documents': { en: 'Documents', ko: '필요 서류', my: 'စာရွက်စာတမ်း' },
  'home.guideFeatures.steps': { en: 'Application steps', ko: '신청 절차', my: 'လျှောက်ထားမှုအဆင့်' },
  'home.prepare.title': { en: 'What to check when preparing it yourself', ko: '직접 준비할 때 확인해야 하는 것', my: 'ကိုယ်တိုင်ပြင်ဆင်ရာတွင် စစ်ဆေးရမည့်အချက်များ' },
  'home.prepare.lead': { en: 'The information is open for you to read. Applying it to your own situation still means checking each requirement, timing, and official source.', ko: '정보는 누구나 직접 읽을 수 있습니다. 다만 내 상황에 적용하려면 요건과 발급 시점, 공식 확인처를 하나씩 다시 확인해야 합니다.', my: 'အချက်အလက်များကို မည်သူမဆို ကိုယ်တိုင်ဖတ်နိုင်ပါသည်။ သို့သော် သင့်အခြေအနေတွင် အသုံးချရန် လိုအပ်ချက်၊ အချိန်နှင့် တရားဝင်အတည်ပြုရာနေရာတစ်ခုချင်းစီကို ပြန်လည်စစ်ဆေးရပါသည်။' },
  'home.prepare.eligibility': { en: 'Confirm which eligibility rules apply to my situation', ko: '내 상황에 적용되는 자격 요건 확인', my: 'မိမိအခြေအနေနှင့် သက်ဆိုင်သော အရည်အချင်းလိုအပ်ချက် စစ်ဆေးခြင်း' },
  'home.prepare.documents': { en: 'Separate required and case-specific documents', ko: '공통 서류와 상황별 추가 서류 구분', my: 'အခြေခံနှင့် အခြေအနေအလိုက် အပိုစာရွက်စာတမ်း ခွဲခြားခြင်း' },
  'home.prepare.validity': { en: 'Check issue dates and validity periods', ko: '서류 발급 시점과 유효기간 확인', my: 'စာရွက်စာတမ်းထုတ်ရက်နှင့် သက်တမ်း စစ်ဆေးခြင်း' },
  'home.prepare.order': { en: 'Organize the preparation and application order', ko: '준비 순서와 신청 절차 정리', my: 'ပြင်ဆင်မှုနှင့် လျှောက်ထားမှုအစီအစဉ် စီစဉ်ခြင်း' },
  'home.prepare.official': { en: 'Recheck the latest official requirements', ko: '최신 공식 요건 최종 확인', my: 'နောက်ဆုံး တရားဝင်လိုအပ်ချက်များ ပြန်လည်စစ်ဆေးခြင်း' },
  'home.otherServices.title': { en: 'Other everyday guidance', ko: '다른 생활 안내', my: 'အခြားနေ့စဉ်ဘဝ လမ်းညွှန်မှု' },
  'home.otherServices.lead': { en: 'Resume, job-search, and home-viewing guidance are available separately when you need them.', ko: '이력서·구직 정보와 집 보기 동행 안내는 필요할 때 별도로 확인할 수 있습니다.', my: 'ကိုယ်ရေးရာဇဝင်၊ အလုပ်ရှာဖွေမှုနှင့် အိမ်ကြည့်အတူလိုက် လမ်းညွှန်မှုကို လိုအပ်သည့်အခါ သီးခြားစစ်ဆေးနိုင်ပါသည်။' },
  'home.reviews.title':  { en: 'What people say', ko: '먼저 경험한 분들', my: 'လူများ ဘာပြောကြသလဲ' },
  'home.about.title':    { en: 'Who we are', ko: '우리를 소개할게요', my: 'ကျွန်ုပ်တို့ ဘယ်သူလဲ' },
  'home.about.eyebrow':  { en: 'Why we started', ko: '우리가 시작한 이유', my: 'ကျွန်ုပ်တို့ စတင်ခဲ့သည့် အကြောင်းရင်း' },
  'home.about.blurb':    { en: 'MyanMate was built by a Korean partner who understands local systems and a Myanmar partner who has spent five years building a life here. We connect both perspectives so your next step feels clearer.', ko: 'MyanMate는 한국의 제도와 행정을 아는 한국인 파트너와, 이곳에서 5년간 직접 삶을 꾸려온 미얀마 출신 파트너가 함께 만들었습니다. 두 시선을 연결해 다음 단계를 더 분명하게 안내합니다.', my: 'MyanMate ကို ကိုရီးယားစနစ်နှင့် အုပ်ချုပ်ရေးကို သိသော ကိုရီးယားပါတနာနှင့် ဒီမှာ ၅ နှစ်ကြာ ကိုယ်တိုင်ဘဝတည်ဆောက်ခဲ့သော မြန်မာပါတနာတို့ အတူတကွ ဖန်တီးခဲ့ပါသည်။ ရှုထောင့်နှစ်ခုကို ပေါင်းစပ်၍ သင့်နောက်တစ်ဆင့်ကို ပိုမိုရှင်းလင်းစွာ လမ်းညွှန်ပါသည်။' },
  'home.about.role.kr':  { en: 'Korean systems and local context', ko: '한국 제도와 현지 맥락', my: 'ကိုရီးယားစနစ်နှင့် ဒေသဆိုင်ရာ အခြေအနေ' },
  'home.about.role.mm':  { en: 'Five years of lived settlement experience', ko: '5년의 실제 한국 정착 경험', my: 'ကိုရီးယားတွင် ၅ နှစ်ကြာ အခြေချနေထိုင်ခဲ့သည့် အတွေ့အကြုံ' },
  'home.about.cta':      { en: 'Read our story', ko: '우리 이야기 더 보기', my: 'ကျွန်ုပ်တို့၏ ဇာတ်လမ်းကို ဖတ်ရန်' },
  'home.tiktok.eyebrow': { en: 'Everyday Korea notes', ko: 'TikTok 생활 정보', my: 'နေ့စဉ် ကိုရီးယားမှတ်စုများ' },
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
  'home.cta.flow.title': { en: 'Ask without sending sensitive details.', ko: '민감정보 없이 편하게 문의하세요.', my: 'အရေးကြီးအချက်အလက် မပို့ဘဲ လွတ်လပ်စွာ မေးမြန်းပါ။' },
  'home.cta.flow.body': { en: 'We first clarify the guidance scope, then organize the next steps you complete yourself.', ko: '먼저 안내 범위를 확인하고, 본인이 직접 진행할 다음 단계를 정리해 드립니다.', my: 'ပထမဆုံး လမ်းညွှန်မှုအတိုင်းအတာကို ရှင်းပြပြီး သင်ကိုယ်တိုင် ဆောင်ရွက်မည့် နောက်အဆင့်များကို စီစဉ်ပေးပါသည်။' },
  'home.cta.flow.step1': { en: 'No passport or ID numbers', ko: '여권번호·신분번호 불필요', my: 'ပတ်စပို့/ID နံပါတ် မလိုပါ' },
  'home.cta.flow.step2': { en: 'Scope confirmed first', ko: '안내 범위 먼저 확인', my: 'လမ်းညွှန်မှုအတိုင်းအတာကို ပထမဆုံး အတည်ပြု' },
  'home.cta.flow.step3': { en: 'You complete required steps', ko: '필수 절차는 본인이 진행', my: 'လိုအပ်သောအဆင့်များကို သင်ကိုယ်တိုင် ဆောင်ရွက်' },
  'home.community.title': { en: 'More Korea-life notes on TikTok', ko: 'TikTok에서도 생활 정보를 확인하세요', my: 'TikTok တွင် ကိုရီးယားဘဝ အချက်အလက်များကို ကြည့်ပါ' },
  'home.community.body': { en: 'We share short, practical notes on visas, work, housing, and everyday Korean. Visit our TikTok for the latest posts.', ko: '비자, 일자리, 주거, 생활 한국어에 관한 짧고 실용적인 정보를 나눕니다. 최신 게시물은 TikTok에서 확인하세요.', my: 'ဗီဇာ၊ အလုပ်၊ နေအိမ်နှင့် နေ့စဉ်သုံး ကိုရီးယားစကားအကြောင်း လက်တွေ့ကျသော အချက်အလက်တိုများကို မျှဝေပါသည်။ နောက်ဆုံးပို့စ်များကို TikTok တွင် ကြည့်ပါ။' },

  /* 2. Service cards */
  'svc.resume.name':  { en: 'Resume & job-search guidance', ko: '이력서·구직 정보 안내', my: 'ကိုယ်ရေးရာဇဝင်နှင့် အလုပ်ရှာဖွေရေး လမ်းညွှန်မှု' },
  'svc.resume.desc': { en: 'A practical overview of Korean-style resumes, describing experience clearly, and checking public job information yourself.', ko: '한국식 이력서 구성과 경력 표현 방법, 공개 구직 정보를 직접 확인하는 방법을 한눈에 정리했습니다.', my: 'ကိုရီးယားပုံစံ ကိုယ်ရေးရာဇဝင် ဖွဲ့စည်းပုံ၊ အတွေ့အကြုံကို ရှင်းလင်းစွာ ရေးသားနည်းနှင့် အများပြည်သူသုံး အလုပ်အချက်အလက်ကို ကိုယ်တိုင်စစ်ဆေးနည်းကို စုစည်းထားပါသည်။' },
  'svc.housing.name': { en: 'Home-viewing companion & living-area check', ko: '집 보기 동행 체크 및 생활환경 안내', my: 'အိမ်ကြည့်ရာတွင် အတူလိုက်ပါ၍ နေထိုင်မှုပတ်ဝန်းကျင် စစ်ဆေးလမ်းညွှန်မှု' },
  'svc.housing.desc': { en: 'Practical points for looking at the inside of a home, shared spaces, and the surrounding living environment, plus official sources to check yourself.', ko: '집 안과 공용공간, 주변 생활환경을 직접 살펴볼 때 도움이 되는 포인트와 공식 확인처를 정리했습니다.', my: 'အိမ်အတွင်းပိုင်း၊ အများသုံးနေရာများနှင့် ပတ်ဝန်းကျင်နေထိုင်မှုအခြေအနေကို ကိုယ်တိုင်ကြည့်ရှုရာတွင် အသုံးဝင်သောအချက်များနှင့် တရားဝင်စစ်ဆေးရာနေရာများကို စုစည်းထားပါသည်။' },

  /* 2b. Resume and job-search information */
  'svc.resume.info.basics.title': { en: 'Build the basic structure first', ko: '한국식 이력서 기본 구성', my: 'ကိုရီးယားပုံစံ ကိုယ်ရေးရာဇဝင် အခြေခံဖွဲ့စည်းပုံ' },
  'svc.resume.info.basics.intro': { en: 'Put the information a reader needs in a clear order. Leave out sensitive identifiers that are not needed for an application.', ko: '채용 담당자가 필요한 정보를 읽기 쉬운 순서로 배치하고, 지원에 불필요한 민감한 식별정보는 넣지 않습니다.', my: 'ဖတ်ရှုသူလိုအပ်သော အချက်အလက်ကို ရှင်းလင်းသောအစီအစဉ်ဖြင့် ထည့်ပြီး မလိုအပ်သော ကိုယ်ရေးအမှတ်အသားအချက်အလက်များကို မထည့်ပါနှင့်။' },
  'svc.resume.info.basics.identity.title': { en: 'Only essential contact details', ko: '필요한 연락 정보만', my: 'လိုအပ်သော ဆက်သွယ်ရန်အချက်အလက်သာ' },
  'svc.resume.info.basics.identity.body': { en: 'Use your name and a reachable phone number or email. Do not add passport, resident ID, bank, or account passwords.', ko: '이름과 연락 가능한 전화번호 또는 이메일만 적습니다. 여권번호·외국인등록번호·금융정보·비밀번호는 넣지 않습니다.', my: 'အမည်နှင့် ဆက်သွယ်နိုင်သော ဖုန်းနံပါတ် သို့မဟုတ် အီးမေးလ်ကိုသာ ထည့်ပါ။ ပတ်စပို့၊ နိုင်ငံခြားသားမှတ်ပုံတင်၊ ဘဏ်အချက်အလက် သို့မဟုတ် စကားဝှက် မထည့်ပါနှင့်။' },
  'svc.resume.info.basics.target.title': { en: 'State the role you want', ko: '희망 직무를 분명하게', my: 'လိုချင်သောအလုပ်တာဝန်ကို ရှင်းလင်းစွာ' },
  'svc.resume.info.basics.target.body': { en: 'Name the type of work you are applying for so your experience and skills are easier to understand in context.', ko: '어떤 업무에 지원하는지 먼저 적으면 경력과 기술이 그 직무와 어떻게 연결되는지 이해하기 쉽습니다.', my: 'လျှောက်ထားလိုသောအလုပ်အမျိုးအစားကို အရင်ရေးပါက အတွေ့အကြုံနှင့် ကျွမ်းကျင်မှုတို့၏ ဆက်စပ်မှုကို နားလည်ရလွယ်ကူပါသည်။' },
  'svc.resume.info.basics.history.title': { en: 'Education and experience', ko: '학력과 경력·경험', my: 'ပညာရေးနှင့် အလုပ်အတွေ့အကြုံ' },
  'svc.resume.info.basics.history.body': { en: 'Show the organization, period, role, and main work consistently, usually with the most recent experience first.', ko: '기관명, 기간, 역할, 주요 업무를 같은 형식으로 적고 보통 최근 경험부터 보여줍니다.', my: 'အဖွဲ့အစည်းအမည်၊ ကာလ၊ တာဝန်နှင့် အဓိကလုပ်ငန်းကို ပုံစံတူရေးပြီး ပုံမှန်အားဖြင့် နောက်ဆုံးအတွေ့အကြုံမှ စတင်ပါ။' },
  'svc.resume.info.basics.skills.title': { en: 'Language, skills, and certificates', ko: '언어·기술·자격', my: 'ဘာသာစကား၊ ကျွမ်းကျင်မှုနှင့် လက်မှတ်များ' },
  'svc.resume.info.basics.skills.body': { en: 'Include only items relevant to the role and describe your actual level without exaggeration.', ko: '지원 직무와 관련 있는 내용만 고르고 실제로 사용할 수 있는 수준을 과장 없이 적습니다.', my: 'အလုပ်တာဝန်နှင့် သက်ဆိုင်သောအရာကိုသာ ရွေးပြီး အမှန်တကယ်အသုံးချနိုင်သောအဆင့်ကို မချဲ့ကားဘဲ ရေးပါ။' },

  'svc.resume.info.experience.title': { en: 'Make experience specific', ko: '경험을 구체적으로 표현하는 법', my: 'အတွေ့အကြုံကို တိတိကျကျ ရေးသားနည်း' },
  'svc.resume.info.experience.intro': { en: 'A short role-action-result order helps a reader understand what you actually did.', ko: '역할, 실제 행동, 결과 순서로 짧게 적으면 무엇을 했는지 더 쉽게 전달할 수 있습니다.', my: 'တာဝန်၊ လုပ်ဆောင်ချက်နှင့် ရလဒ်အစီအစဉ်ဖြင့် တိုတိုရေးပါက သင်အမှန်တကယ်လုပ်ခဲ့သည်ကို နားလည်ရလွယ်ကူပါသည်။' },
  'svc.resume.info.experience.role.title': { en: 'Role', ko: '역할', my: 'တာဝန်' },
  'svc.resume.info.experience.role.body': { en: 'Start with your responsibility and the situation, not a long personal introduction.', ko: '긴 자기소개보다 맡았던 책임과 어떤 상황이었는지를 먼저 적습니다.', my: 'ရှည်လျားသော ကိုယ်ရေးမိတ်ဆက်ထက် သင်တာဝန်ယူခဲ့သည့်အရာနှင့် အခြေအနေကို အရင်ရေးပါ။' },
  'svc.resume.info.experience.action.title': { en: 'Action', ko: '행동', my: 'လုပ်ဆောင်ချက်' },
  'svc.resume.info.experience.action.body': { en: 'Use a clear verb to explain what you handled, improved, solved, or supported.', ko: '처리한 일, 개선한 점, 해결하거나 도운 내용을 분명한 동사로 적습니다.', my: 'သင်ကိုင်တွယ်၊ တိုးတက်၊ ဖြေရှင်း သို့မဟုတ် ကူညီခဲ့သည့်အရာကို ရှင်းလင်းသော ကြိယာဖြင့် ရေးပါ။' },
  'svc.resume.info.experience.result.title': { en: 'Result', ko: '결과', my: 'ရလဒ်' },
  'svc.resume.info.experience.result.body': { en: 'Add a truthful number, change, or result when one exists. Never invent or inflate a result.', ko: '확인 가능한 수치나 변화, 결과가 있다면 함께 적되 없는 내용을 만들거나 부풀리지 않습니다.', my: 'အတည်ပြုနိုင်သော နံပါတ်၊ ပြောင်းလဲမှု သို့မဟုတ် ရလဒ်ရှိပါက ထည့်ပြီး မရှိသောအရာကို မဖန်တီး၊ မချဲ့ကားပါနှင့်။' },
  'svc.resume.source.work24guide.title': { en: 'Work24 writing guide', ko: '고용24 이력서 작성 가이드', my: 'Work24 ကိုယ်ရေးရာဇဝင်ရေးသားမှု လမ်းညွှန်' },
  'svc.resume.source.work24guide.body': { en: 'Read the Korean government employment portal guide for organizing experience and writing concisely.', ko: '경험 정리와 간결한 표현에 관한 정부 고용 포털의 공식 가이드를 직접 확인하세요.', my: 'အတွေ့အကြုံစီစဉ်ခြင်းနှင့် တိုတောင်းရှင်းလင်းစွာရေးသားခြင်းအတွက် အစိုးရအလုပ်အကိုင် portal လမ်းညွှန်ကို ကြည့်ပါ။' },

  'svc.resume.info.posting.title': { en: 'Read the whole job posting', ko: '채용 공고에서 볼 항목', my: 'အလုပ်ခေါ်စာတွင် ကြည့်ရမည့်အချက်များ' },
  'svc.resume.info.posting.intro': { en: 'Do not decide from the title alone. Compare the work, schedule, pay basis, and requirements together.', ko: '공고 제목만 보고 결정하지 말고 실제 업무, 일정, 임금 기준과 지원 요건을 함께 확인합니다.', my: 'ခေါင်းစဉ်တစ်ခုတည်းဖြင့် မဆုံးဖြတ်ဘဲ အလုပ်တာဝန်၊ အချိန်ဇယား၊ လစာအခြေခံနှင့် လိုအပ်ချက်များကို အတူစစ်ဆေးပါ။' },
  'svc.resume.info.posting.work.title': { en: 'Work and location', ko: '업무 내용과 근무지', my: 'အလုပ်တာဝန်နှင့် အလုပ်နေရာ' },
  'svc.resume.info.posting.work.body': { en: 'Check the actual duties, workplace address, travel time, and whether the location can change.', ko: '실제 담당 업무, 근무지 주소, 이동 시간과 근무 장소가 바뀔 수 있는지 확인합니다.', my: 'အမှန်တကယ်တာဝန်၊ အလုပ်နေရာလိပ်စာ၊ သွားလာချိန်နှင့် နေရာပြောင်းနိုင်ခြင်းရှိမရှိ စစ်ဆေးပါ။' },
  'svc.resume.info.posting.schedule.title': { en: 'Days, hours, and breaks', ko: '근무일·시간·휴게', my: 'အလုပ်ရက်၊ အချိန်နှင့် နားချိန်' },
  'svc.resume.info.posting.schedule.body': { en: 'Read the working days, start and finish times, break time, and any weekend or shift expectations.', ko: '근무 요일, 시작·종료 시간, 휴게시간과 주말 또는 교대근무 여부를 확인합니다.', my: 'အလုပ်ရက်၊ စတင်နှင့်ပြီးဆုံးချိန်၊ နားချိန်နှင့် စနေတနင်္ဂနွေ သို့မဟုတ် အလှည့်ကျအလုပ်ရှိမရှိ ဖတ်ပါ။' },
  'svc.resume.info.posting.pay.title': { en: 'Pay and contract terms', ko: '임금과 계약 조건', my: 'လစာနှင့် စာချုပ်အခြေအနေ' },
  'svc.resume.info.posting.pay.body': { en: 'Check whether pay is hourly, daily, or monthly, how it is calculated, the pay date, contract period, and probation terms.', ko: '시급·일급·월급 중 어떤 기준인지, 계산 방식과 지급일, 계약 기간과 수습 조건을 확인합니다.', my: 'နာရီ၊ နေ့ သို့မဟုတ် လအလိုက် လစာဖြစ်ခြင်း၊ တွက်ချက်ပုံ၊ ပေးချေရက်၊ စာချုပ်ကာလနှင့် စမ်းသပ်ကာလကို စစ်ဆေးပါ။' },
  'svc.resume.info.posting.requirements.title': { en: 'Language and qualifications', ko: '언어와 지원 요건', my: 'ဘာသာစကားနှင့် လျှောက်ထားမှုလိုအပ်ချက်' },
  'svc.resume.info.posting.requirements.body': { en: 'Separate required conditions from preferred ones and confirm that your current status permits the work before starting.', ko: '필수 조건과 우대 조건을 구분하고, 일을 시작하기 전에 현재 체류자격으로 가능한 활동인지 직접 확인합니다.', my: 'မဖြစ်မနေလိုအပ်ချက်နှင့် ဦးစားပေးအချက်ကို ခွဲပြီး အလုပ်မစမီ လက်ရှိနေထိုင်ခွင့်ဖြင့် လုပ်ကိုင်နိုင်ခြင်းရှိမရှိ ကိုယ်တိုင်စစ်ဆေးပါ။' },

  'svc.resume.info.sources.title': { en: 'Where to check public job information', ko: '공개 구직 정보를 확인하는 곳', my: 'အများပြည်သူသုံး အလုပ်အချက်အလက် စစ်ဆေးရာနေရာ' },
  'svc.resume.info.sources.intro': { en: 'Use official sources to search and confirm information yourself. MyanMate does not match employers with job seekers.', ko: '공식 확인처에서 직접 정보를 찾고 확인하세요. MyanMate는 사업장과 구직자를 연결하지 않습니다.', my: 'တရားဝင်ရင်းမြစ်များတွင် အချက်အလက်ကို ကိုယ်တိုင်ရှာဖွေစစ်ဆေးပါ။ MyanMate သည် အလုပ်ရှင်နှင့် အလုပ်ရှာသူကို ချိတ်ဆက်မပေးပါ။' },
  'svc.resume.source.work24.title': { en: 'Work24', ko: '고용24', my: 'Work24' },
  'svc.resume.source.work24.body': { en: 'Search public job listings and employment support information on Korea’s government employment portal.', ko: '대한민국 정부 고용 포털에서 공개 채용 정보와 취업지원 정보를 직접 확인할 수 있습니다.', my: 'ကိုရီးယားအစိုးရ အလုပ်အကိုင် portal တွင် အများပြည်သူသုံး အလုပ်ခေါ်စာနှင့် အလုပ်အကိုင်ပံ့ပိုးမှုအချက်အလက်ကို ကြည့်နိုင်ပါသည်။' },
  'svc.resume.source.law.title': { en: 'Job placement rules', ko: '직업소개 관련 법령', my: 'အလုပ်အကိုင်မိတ်ဆက်မှုဆိုင်ရာ စည်းမျဉ်း' },
  'svc.resume.source.law.body': { en: 'Check the legal definition of job placement directly. MyanMate only explains public information and ways to search.', ko: '직업소개에 해당하는 범위는 법령에서 직접 확인하세요. MyanMate는 공개 정보와 구직 방법만 안내합니다.', my: 'အလုပ်အကိုင်မိတ်ဆက်မှု၏ ဥပဒေသတ်မှတ်ချက်ကို ကိုယ်တိုင်စစ်ဆေးပါ။ MyanMate သည် အများပြည်သူသုံးအချက်အလက်နှင့် ရှာဖွေနည်းကိုသာ ရှင်းပြပါသည်။' },

  'svc.resume.info.before.title': { en: 'Confirm before applying', ko: '지원 전에 직접 확인할 내용', my: 'မလျှောက်ထားမီ ကိုယ်တိုင်စစ်ဆေးရန်' },
  'svc.resume.info.before.intro': { en: 'Work permission and employment conditions can differ by person and job. Confirm the current rules with the responsible authority.', ko: '취업 가능 범위와 근로조건은 개인과 일자리마다 다를 수 있으므로 담당 기관의 최신 정보를 직접 확인합니다.', my: 'အလုပ်လုပ်ခွင့်နှင့် အလုပ်အခြေအနေများသည် လူနှင့်အလုပ်အလိုက် ကွာနိုင်သောကြောင့် သက်ဆိုင်ရာဌာန၏ လက်ရှိအချက်အလက်ကို ကိုယ်တိုင်စစ်ဆေးပါ။' },
  'svc.resume.source.hikorea.title': { en: 'HiKorea and 1345', ko: 'HiKorea·1345', my: 'HiKorea နှင့် 1345' },
  'svc.resume.source.hikorea.body': { en: 'Confirm whether your current status permits the activity and whether separate permission is required before working.', ko: '현재 체류자격으로 가능한 활동인지, 별도의 허가가 필요한지 일을 시작하기 전에 직접 확인하세요.', my: 'လက်ရှိနေထိုင်ခွင့်ဖြင့် လုပ်နိုင်ခြင်းနှင့် သီးခြားခွင့်ပြုချက်လိုအပ်ခြင်းရှိမရှိ အလုပ်မစမီ စစ်ဆေးပါ။' },
  'svc.resume.source.moel.title': { en: 'Written employment contract', ko: '서면 근로계약', my: 'စာဖြင့်ရေးသားသော အလုပ်စာချုပ်' },
  'svc.resume.source.moel.body': { en: 'Review the Ministry of Employment and Labor guidance on written contracts, pay, working hours, rest days, and leave.', ko: '임금, 근로시간, 휴일과 휴가를 적은 서면 근로계약에 관한 고용노동부 안내를 확인하세요.', my: 'လစာ၊ အလုပ်ချိန်၊ နားရက်နှင့် ခွင့်ရက်ပါသော စာဖြင့်ရေးသားသည့် စာချုပ်အတွက် အလုပ်သမားဝန်ကြီးဌာန လမ်းညွှန်ကို ကြည့်ပါ။' },
  'svc.resume.info.before.privacy.title': { en: 'Protect personal information', ko: '개인정보 요구 확인', my: 'ကိုယ်ရေးအချက်အလက်ကို ကာကွယ်ပါ' },
  'svc.resume.info.before.privacy.body': { en: 'Be careful when an initial message asks for identity documents, financial information, passwords, or payment before providing clear job details.', ko: '업무 정보가 분명하지 않은데 첫 연락부터 신분증 사본, 금융정보, 비밀번호나 선입금을 요구하면 주의합니다.', my: 'အလုပ်အချက်အလက် မရှင်းလင်းသေးဘဲ ပထမဆက်သွယ်မှုတွင် ID မိတ္တူ၊ ငွေကြေးအချက်အလက်၊ စကားဝှက် သို့မဟုတ် ကြိုတင်ငွေတောင်းပါက သတိထားပါ။' },

  /* 2c. Home-viewing and living-area information */
  'svc.housing.info.inside.title': { en: 'Points to notice inside the home', ko: '집 안에서 볼 포인트', my: 'အိမ်အတွင်း ကြည့်ရမည့်အချက်များ' },
  'svc.housing.info.inside.intro': { en: 'Look slowly and compare what you can see, hear, and smell. Ask before operating fixtures or taking photos.', ko: '눈에 보이는 상태뿐 아니라 들리는 소리와 냄새도 천천히 살펴보세요. 설비를 작동하거나 사진을 찍기 전에는 허락을 구합니다.', my: 'မြင်ရ၊ ကြားရ၊ အနံ့ရသောအခြေအနေများကို ဖြည်းဖြည်းကြည့်ပါ။ ပစ္စည်းအသုံးပြုခြင်း သို့မဟုတ် ဓာတ်ပုံရိုက်ခြင်းမပြုမီ ခွင့်တောင်းပါ။' },
  'svc.housing.info.inside.light.title': { en: 'Light and ventilation', ko: '채광과 환기', my: 'အလင်းရောင်နှင့် လေဝင်လေထွက်' },
  'svc.housing.info.inside.light.body': { en: 'Notice the direction and size of windows, blocked views, and whether fresh air moves through the main living and sleeping spaces.', ko: '창문의 방향과 크기, 앞을 가리는 건물, 주로 생활하고 자는 공간에 공기가 통하는지 살펴봅니다.', my: 'ပြတင်းပေါက်ဦးတည်ချက်နှင့် အရွယ်အစား၊ မြင်ကွင်းပိတ်ဆို့မှုနှင့် နေထိုင်အိပ်စက်ရာနေရာတွင် လေဝင်လေထွက်ရှိမရှိ ကြည့်ပါ။' },
  'svc.housing.info.inside.moisture.title': { en: 'Moisture, mold, and odor', ko: '습기·곰팡이·냄새', my: 'စိုထိုင်းမှု၊ မှိုနှင့် အနံ့' },
  'svc.housing.info.inside.moisture.body': { en: 'Look around window frames, exterior walls, ceilings, cabinets, and bathrooms for stains, peeling surfaces, condensation, or persistent odor.', ko: '창틀, 외벽 쪽 벽, 천장, 수납장과 욕실 주변에 얼룩·들뜸·결로·지속되는 냄새가 있는지 봅니다.', my: 'ပြတင်းပေါက်ဘောင်၊ အပြင်ဘက်နံရံ၊ မျက်နှာကျက်၊ ဗီရိုနှင့် ရေချိုးခန်းတွင် အစွန်းအထင်း၊ ကွာကျမှု၊ ရေငွေ့နှင့် အနံ့ရှိမရှိ ကြည့်ပါ။' },
  'svc.housing.info.inside.noise.title': { en: 'Noise and privacy', ko: '소음과 사생활', my: 'ဆူညံသံနှင့် ကိုယ်ရေးလွတ်လပ်မှု' },
  'svc.housing.info.inside.noise.body': { en: 'Pause near windows and shared walls. Consider road, hallway, shop, elevator, and neighboring-building noise and sight lines.', ko: '창가와 옆집에 붙은 벽 근처에서 잠시 들어보세요. 도로·복도·상가·엘리베이터 소음과 맞은편 건물의 시선을 함께 봅니다.', my: 'ပြတင်းပေါက်နှင့် အတူကပ်နံရံအနီးတွင် အသံနားထောင်ပါ။ လမ်း၊ စင်္ကြံ၊ ဆိုင်၊ ဓာတ်လှေကားနှင့် အိမ်နီးချင်းအဆောက်အအုံမှ မြင်ကွင်းကို စဉ်းစားပါ။' },
  'svc.housing.info.inside.water.title': { en: 'Water pressure and drainage', ko: '수압과 배수', my: 'ရေဖိအားနှင့် ရေစီးဆင်းမှု' },
  'svc.housing.info.inside.water.body': { en: 'With permission, run taps and check hot water response, water pressure, drainage speed, leaks, and bathroom ventilation.', ko: '허락을 받은 뒤 수도를 틀어 온수 반응, 수압, 배수 속도, 누수 흔적과 욕실 환기를 살펴봅니다.', my: 'ခွင့်ပြုချက်ရပြီးနောက် ရေဖွင့်၍ ရေပူတုံ့ပြန်မှု၊ ရေဖိအား၊ ရေစီးနှုန်း၊ ယိုစိမ့်မှုနှင့် ရေချိုးခန်းလေဝင်လေထွက်ကို ကြည့်ပါ။' },
  'svc.housing.info.inside.windows.title': { en: 'Windows, doors, and heating', ko: '창문·문·난방', my: 'ပြတင်းပေါက်၊ တံခါးနှင့် အပူပေးစနစ်' },
  'svc.housing.info.inside.windows.body': { en: 'See whether windows and doors close properly, seals are damaged, drafts are noticeable, and the heating controls are easy to identify.', ko: '창문과 문이 잘 닫히는지, 틈이나 손상은 없는지, 외풍이 느껴지는지, 난방 조절 장치를 찾기 쉬운지 봅니다.', my: 'ပြတင်းပေါက်နှင့် တံခါးများ ကောင်းစွာပိတ်ခြင်း၊ ပျက်စီးမှု၊ လေအေးဝင်မှုနှင့် အပူထိန်းကိရိယာကို ရှာရလွယ်ကူခြင်းရှိမရှိ ကြည့်ပါ။' },
  'svc.housing.info.inside.storage.title': { en: 'Storage and outlets', ko: '수납과 콘센트', my: 'သိုလှောင်မှုနှင့် လျှပ်စစ်ပေါက်' },
  'svc.housing.info.inside.storage.body': { en: 'Picture where everyday belongings and appliances would go, and note the number and placement of accessible outlets.', ko: '생활용품과 가전이 들어갈 자리를 생각해 보고, 사용할 수 있는 수납공간과 콘센트의 수·위치를 봅니다.', my: 'နေ့စဉ်ပစ္စည်းနှင့် စက်ကိရိယာထားမည့်နေရာကို စဉ်းစားပြီး သိုလှောင်ရာနှင့် လျှပ်စစ်ပေါက် အရေအတွက်၊ နေရာကို ကြည့်ပါ။' },

  'svc.housing.info.building.title': { en: 'Look beyond the front door', ko: '건물과 공용공간', my: 'အဆောက်အအုံနှင့် အများသုံးနေရာများ' },
  'svc.housing.info.building.intro': { en: 'Shared spaces affect daily convenience and how safe the route feels after dark.', ko: '공용공간의 상태와 동선은 매일의 편의와 늦은 시간 귀가할 때의 느낌에 영향을 줍니다.', my: 'အများသုံးနေရာအခြေအနေနှင့် လမ်းကြောင်းသည် နေ့စဉ်အဆင်ပြေမှုနှင့် ညအချိန်ပြန်လာရာတွင် ခံစားရမှုကို သက်ရောက်စေပါသည်။' },
  'svc.housing.info.building.entry.title': { en: 'Entrance and access', ko: '출입구와 보안', my: 'ဝင်ပေါက်နှင့် ဝင်ထွက်မှု' },
  'svc.housing.info.building.entry.body': { en: 'Notice the entry system, visibility from the street, door condition, and whether unfamiliar visitors can enter shared areas easily.', ko: '공동현관 방식, 골목이나 도로에서 보이는 정도, 문 상태와 외부인이 공용공간에 쉽게 들어올 수 있는지 봅니다.', my: 'အဝင်စနစ်၊ လမ်းမှ မြင်နိုင်မှု၊ တံခါးအခြေအနေနှင့် မသိသူများ အများသုံးနေရာသို့ လွယ်ကူစွာဝင်နိုင်ခြင်းရှိမရှိ ကြည့်ပါ။' },
  'svc.housing.info.building.shared.title': { en: 'Hallways and stairs', ko: '복도와 계단', my: 'စင်္ကြံနှင့် လှေကား' },
  'svc.housing.info.building.shared.body': { en: 'Check lighting, cleanliness, handrails, slippery areas, obstructions, and the route to emergency exits.', ko: '조명, 청결, 난간, 미끄러운 곳, 통행을 막는 물건과 비상구까지의 동선을 봅니다.', my: 'မီးအလင်း၊ သန့်ရှင်းမှု၊ လက်ရန်း၊ ချော်နိုင်သည့်နေရာ၊ ပိတ်ဆို့ပစ္စည်းနှင့် အရေးပေါ်ထွက်ပေါက်လမ်းကို ကြည့်ပါ။' },
  'svc.housing.info.building.waste.title': { en: 'Waste and recycling', ko: '쓰레기와 분리배출', my: 'အမှိုက်နှင့် ခွဲခြားစွန့်ပစ်မှု' },
  'svc.housing.info.building.waste.body': { en: 'Find where and when general waste, food waste, and recycling are placed, and whether the route is practical.', ko: '일반쓰레기, 음식물, 재활용품을 어디에 언제 내놓는지와 이동하기 불편하지 않은지 확인합니다.', my: 'အထွေထွေအမှိုက်၊ အစားအစာအမှိုက်နှင့် ပြန်လည်အသုံးပြုပစ္စည်းကို ဘယ်နေရာ၊ ဘယ်အချိန် ထားရမည်နှင့် လမ်းကြောင်းအဆင်ပြေမှုကို စစ်ဆေးပါ။' },
  'svc.housing.info.building.facilities.title': { en: 'Elevator, parking, bikes, and deliveries', ko: '엘리베이터·주차·자전거·택배', my: 'ဓာတ်လှေကား၊ ကားရပ်၊ စက်ဘီးနှင့် ပို့ဆောင်မှု' },
  'svc.housing.info.building.facilities.body': { en: 'Confirm which shared facilities actually exist and whether their size, access, and operating conditions fit your routine.', ko: '필요한 공용시설이 실제로 있는지, 크기와 접근 방식, 이용 조건이 생활 방식에 맞는지 봅니다.', my: 'လိုအပ်သော အများသုံးပစ္စည်းရှိမရှိနှင့် အရွယ်အစား၊ ဝင်ထွက်ပုံ၊ အသုံးပြုမှုအခြေအနေသည် သင့်ဘဝနှင့် ကိုက်ညီမှုရှိမရှိ ကြည့်ပါ။' },

  'svc.housing.info.area.title': { en: 'Test the living environment', ko: '주변 생활환경', my: 'ပတ်ဝန်းကျင်နေထိုင်မှုအခြေအနေ' },
  'svc.housing.info.area.intro': { en: 'A map distance can feel different in real life. Think about the route and time of day you will actually use.', ko: '지도상의 거리와 실제 체감은 다를 수 있습니다. 자주 이동할 시간대와 실제 동선을 기준으로 살펴보세요.', my: 'မြေပုံအကွာအဝေးနှင့် အမှန်တကယ်ခံစားရမှု ကွာနိုင်ပါသည်။ သင်အသုံးများမည့်အချိန်နှင့် လမ်းကြောင်းဖြင့် စဉ်းစားပါ။' },
  'svc.housing.info.area.commute.title': { en: 'Real commute time', ko: '실제 출퇴근 시간', my: 'အမှန်တကယ် အလုပ်သွားလာချိန်' },
  'svc.housing.info.area.commute.body': { en: 'Check door-to-door travel at your usual time, including walking, transfers, waiting, and the route from the last stop.', ko: '평소 이동할 시간에 걷기, 환승, 대기와 마지막 정류장에서 집까지의 길을 포함한 시간을 봅니다.', my: 'သင်သွားလာမည့်အချိန်တွင် လမ်းလျှောက်၊ ပြောင်းစီး၊ စောင့်ဆိုင်းမှုနှင့် နောက်ဆုံးမှတ်တိုင်မှ အိမ်အထိ ခရီးကို ထည့်တွက်ပါ။' },
  'svc.housing.info.area.late.title': { en: 'Late-night transport', ko: '늦은 시간 교통편', my: 'ညနောက်ကျ သယ်ယူပို့ဆောင်ရေး' },
  'svc.housing.info.area.late.body': { en: 'Look at the last train or bus, night routes, taxi access, and how the walk home feels after dark.', ko: '막차 시간, 심야 노선, 택시 접근성과 어두워진 뒤 집까지 걷는 길을 확인합니다.', my: 'နောက်ဆုံးရထား သို့မဟုတ် ဘတ်စ်ကား၊ ညလမ်းကြောင်း၊ တက္ကစီရရှိမှုနှင့် ညတွင် အိမ်ပြန်လမ်းကို ကြည့်ပါ။' },
  'svc.housing.info.area.daily.title': { en: 'Daily essentials', ko: '마트·병원·약국', my: 'နေ့စဉ်လိုအပ်သောနေရာများ' },
  'svc.housing.info.area.daily.body': { en: 'Check the nearest grocery store, pharmacy, clinic or hospital, bank or ATM, laundromat, and other places you expect to use.', ko: '가까운 마트, 약국, 병원, 은행이나 ATM, 세탁소처럼 자주 이용할 장소의 위치와 운영시간을 봅니다.', my: 'အနီးဆုံး ကုန်စုံဆိုင်၊ ဆေးဆိုင်၊ ဆေးရုံ၊ ဘဏ် သို့မဟုတ် ATM၊ အဝတ်လျှော်ဆိုင်နှင့် အသုံးများမည့်နေရာကို ကြည့်ပါ။' },
  'svc.housing.info.area.walk.title': { en: 'Walking route and noise', ko: '경사·야간 보행·시간대별 소음', my: 'လမ်းလျှောက်လမ်းနှင့် အချိန်အလိုက်ဆူညံသံ' },
  'svc.housing.info.area.walk.body': { en: 'Notice steep slopes, lighting, crossings, isolated stretches, construction, nightlife, traffic, and noise at the times you will be home.', ko: '가파른 길, 조명, 횡단보도, 인적이 드문 구간, 공사장·상가·차량 소음이 생활 시간대에 어떤지 봅니다.', my: 'မတ်စောက်သောလမ်း၊ မီးအလင်း၊ လမ်းကူး၊ လူရှင်းနေရာ၊ ဆောက်လုပ်ရေး၊ ဆိုင်နှင့် ယာဉ်ဆူညံသံကို သင်အိမ်တွင်ရှိမည့်အချိန်ဖြင့် ကြည့်ပါ။' },

  'svc.housing.info.compare.title': { en: 'Compare homes with the same points', ko: '여러 집을 비교하는 기준', my: 'အိမ်များကို အချက်တူဖြင့် နှိုင်းယှဉ်ခြင်း' },
  'svc.housing.info.compare.intro': { en: 'Use the same headings for every home and separate facts from your first impression. Your priorities decide which trade-offs matter.', ko: '집마다 같은 항목으로 메모하고 사실과 첫인상을 나눠 적어보세요. 어떤 단점이 중요한지는 본인의 우선순위에 따라 달라집니다.', my: 'အိမ်တိုင်းကို ခေါင်းစဉ်တူဖြင့် မှတ်တမ်းတင်ပြီး အချက်အလက်နှင့် ပထမခံစားချက်ကို ခွဲရေးပါ။ ဘယ်အချက်အရေးကြီးသည်ကို သင့်ဦးစားပေးမှုက ဆုံးဖြတ်ပါသည်။' },
  'svc.housing.info.compare.location.title': { en: 'Location and travel', ko: '위치와 이동', my: 'တည်နေရာနှင့် သွားလာမှု' },
  'svc.housing.info.compare.location.body': { en: 'Record door-to-door time, transfers, late-night options, hills, and the walk from transit.', ko: '목적지까지 걸리는 시간, 환승, 늦은 교통편, 경사와 대중교통에서 집까지의 길을 적습니다.', my: 'သွားလိုသည့်နေရာအထိအချိန်၊ ပြောင်းစီးမှု၊ ညသယ်ယူပို့ဆောင်ရေး၊ တောင်စောင်းနှင့် မှတ်တိုင်မှအိမ်လမ်းကို မှတ်ပါ။' },
  'svc.housing.info.compare.convenience.title': { en: 'Daily convenience', ko: '생활 편의', my: 'နေ့စဉ်အဆင်ပြေမှု' },
  'svc.housing.info.compare.convenience.body': { en: 'Compare nearby essentials, waste disposal, deliveries, parking, storage, and everyday routes.', ko: '주변 편의시설, 쓰레기 배출, 택배, 주차, 수납과 평소 이동 동선을 비교합니다.', my: 'အနီးအနားလိုအပ်သောနေရာ၊ အမှိုက်စွန့်ပစ်မှု၊ ပို့ဆောင်မှု၊ ကားရပ်၊ သိုလှောင်မှုနှင့် နေ့စဉ်လမ်းကြောင်းကို နှိုင်းယှဉ်ပါ။' },
  'svc.housing.info.compare.condition.title': { en: 'Visible condition', ko: '눈에 보이는 상태', my: 'မြင်နိုင်သောအခြေအနေ' },
  'svc.housing.info.compare.condition.body': { en: 'Note light, moisture, odor, noise, water, windows, doors, cleanliness, and any questions that still need an expert answer.', ko: '채광, 습기, 냄새, 소음, 물, 창문과 문, 청결 상태와 전문가에게 확인할 질문을 따로 적습니다.', my: 'အလင်း၊ စိုထိုင်းမှု၊ အနံ့၊ ဆူညံသံ၊ ရေ၊ ပြတင်းပေါက်၊ တံခါး၊ သန့်ရှင်းမှုနှင့် ကျွမ်းကျင်သူကို မေးရမည့်အရာကို မှတ်ပါ။' },
  'svc.housing.info.compare.priority.title': { en: 'Your priorities', ko: '나의 우선순위', my: 'သင့်ဦးစားပေးမှု' },
  'svc.housing.info.compare.priority.body': { en: 'Choose the three conditions you cannot compromise on and compare each home against them before deciding.', ko: '포기하기 어려운 조건 세 가지를 먼저 정하고, 최종 결정 전에 각 집이 얼마나 맞는지 비교합니다.', my: 'မလျှော့နိုင်သောအခြေအနေ သုံးခုကို အရင်ရွေးပြီး မဆုံးဖြတ်မီ အိမ်တိုင်းနှင့် နှိုင်းယှဉ်ပါ။' },

  'svc.housing.info.official.title': { en: 'Official sources before a contract', ko: '계약 전 공식 확인처', my: 'စာချုပ်မချုပ်မီ တရားဝင်စစ်ဆေးရာနေရာ' },
  'svc.housing.info.official.intro': { en: 'Visible condition is only one part of choosing a home. Confirm prices, rights, guarantees, and contract safety through official services and qualified professionals.', ko: '눈에 보이는 상태만으로 집의 계약 안전을 판단할 수 없습니다. 시세, 권리관계, 보증과 계약 조건은 공식 서비스와 자격 전문가를 통해 확인하세요.', my: 'မြင်နိုင်သောအခြေအနေတစ်ခုတည်းဖြင့် စာချုပ်လုံခြုံမှုကို မဆုံးဖြတ်နိုင်ပါ။ စျေးနှုန်း၊ အခွင့်အရေး၊ အာမခံနှင့် စာချုပ်အခြေအနေကို တရားဝင်ဝန်ဆောင်မှုနှင့် ကျွမ်းကျင်သူထံ စစ်ဆေးပါ။' },
  'svc.housing.source.hug.title': { en: 'HUG Safe Jeonse', ko: 'HUG 안심전세', my: 'HUG Safe Jeonse' },
  'svc.housing.source.hug.body': { en: 'Check available housing-price, jeonse-ratio, landlord, guarantee, and pre-contract information directly in HUG’s official service.', ko: '주택 시세, 전세가율, 임대인·보증 관련 정보와 계약 전 확인 기능을 HUG 공식 서비스에서 직접 확인하세요.', my: 'အိမ်စျေးနှုန်း၊ jeonse အချိုး၊ အိမ်ရှင်၊ အာမခံနှင့် စာချုပ်မချုပ်မီအချက်အလက်ကို HUG တရားဝင်ဝန်ဆောင်မှုတွင် စစ်ဆေးပါ။' },
  'svc.housing.source.transactions.title': { en: 'Official real transaction prices', ko: '국토교통부 실거래가 공개시스템', my: 'မြေယာနှင့် ပို့ဆောင်ရေးဝန်ကြီးဌာန အမှန်တကယ်အရောင်းအဝယ်စျေး' },
  'svc.housing.source.transactions.body': { en: 'Search reported sale and rental transactions by housing type and area on the Ministry of Land’s official system.', ko: '주택 유형과 지역별로 신고된 매매·전월세 실거래 정보를 국토교통부 공식 시스템에서 확인하세요.', my: 'အိမ်အမျိုးအစားနှင့် ဒေသအလိုက် အစီရင်ခံထားသော အရောင်းနှင့် အငှားအရောင်းအဝယ်ကို ဝန်ကြီးဌာန တရားဝင်စနစ်တွင် ကြည့်ပါ။' },
  'svc.housing.info.official.boundary.title': { en: 'Get a qualified confirmation', ko: '계약 판단은 자격 전문가와', my: 'စာချုပ်ဆုံးဖြတ်ချက်ကို ကျွမ်းကျင်သူနှင့်' },
  'svc.housing.info.official.boundary.body': { en: 'MyanMate does not determine legal rights or certify a property as safe. Confirm contracts and legal questions with a licensed realtor or another qualified professional.', ko: 'MyanMate는 권리관계를 판단하거나 주택의 법적 안전성을 보증하지 않습니다. 계약과 법적 질문은 공인중개사 또는 자격 전문가에게 확인하세요.', my: 'MyanMate သည် ဥပဒေအခွင့်အရေးကို မဆုံးဖြတ်သလို အိမ်၏ ဥပဒေလုံခြုံမှုကိုလည်း အာမမခံပါ။ စာချုပ်နှင့် ဥပဒေမေးခွန်းကို လိုင်စင်ရအိမ်ခြံမြေအကျိုးဆောင် သို့မဟုတ် ကျွမ်းကျင်သူထံ စစ်ဆေးပါ။' },

  /* 3. Guides */
  'guides.title': { en: 'Visa information', ko: '비자 정보', my: 'ဗီဇာအချက်အလက်' },
  'guides.eyebrow': { en: 'Korea visa information', ko: '한국 비자 정보', my: 'ကိုရီးယား ဗီဇာအချက်အလက်' },
  'guides.intro': { en: 'Choose an available visa and read the eligibility, documents, application steps, and cautions. Each visa is presented as a separate guide, and new topics will be added as they are prepared.', ko: '현재 제공되는 비자 정보에서 확인하려는 항목을 선택해 자격, 필요 서류, 신청 절차와 주의사항을 읽어보세요. 준비되는 비자 정보는 계속 추가됩니다.', my: 'လက်ရှိပေးထားသော ဗီဇာအချက်အလက်ထဲမှ စစ်ဆေးလိုသောအရာကို ရွေးပြီး အရည်အချင်း၊ လိုအပ်သောစာရွက်စာတမ်း၊ လျှောက်ထားမှုအဆင့်နှင့် သတိထားရမည့်အချက်များကို ဖတ်ပါ။ ပြင်ဆင်ပြီးသော ဗီဇာအကြောင်းအရာအသစ်များကို ဆက်လက်ထည့်သွင်းသွားပါမည်။' },
  'guides.choose': { en: 'Choose a visa', ko: '확인할 비자를 선택하세요', my: 'စစ်ဆေးမည့်ဗီဇာကို ရွေးပါ' },
  'guides.chooseNote': { en: 'All available guides have the same importance. Open the information you need; new guides will appear here as they are added.', ko: '현재 제공되는 비자 정보는 같은 중요도로 보여드립니다. 지금 필요한 정보를 선택하세요. 새 안내도 추가되는 대로 이곳에 표시됩니다.', my: 'လက်ရှိပေးထားသော လမ်းညွှန်အားလုံးကို တူညီသောအရေးပါမှုဖြင့် ဖော်ပြထားပါသည်။ လိုအပ်သောအချက်အလက်ကို ရွေးပါ။ လမ်းညွှန်အသစ်များကို ထည့်သွင်းသည်နှင့် ဤနေရာတွင် ပြသပါမည်။' },
  'guides.search.placeholder': { en: 'Search topics or keywords', ko: '주제·키워드 검색', my: 'ခေါင်းစဉ် သို့မဟုတ် သော့ချက်စကားလုံး ရှာရန်' },
  'guides.filter.all':     { en: 'All',        ko: '전체',     my: 'အားလုံး' },
  'guides.filter.visa':    { en: 'Visa',       ko: '비자',     my: 'ဗီဇာ' },
  'guides.filter.jobs':    { en: 'Jobs',       ko: '알바·취업', my: 'အလုပ်' },
  'guides.filter.housing': { en: 'Housing',    ko: '주거',     my: 'နေအိမ်' },
  'guides.filter.korean':  { en: 'Korean',     ko: '한국어',    my: 'ကိုရီးယားဘာသာ' },
  'guides.filter.daily':   { en: 'Daily life', ko: '생활 일반', my: 'နေ့စဉ်ဘဝ' },
  'guides.empty': { en: 'Nothing here yet — new guides coming soon.', ko: '아직 글이 없어요. 곧 새 정보가 올라옵니다.', my: 'ဒီမှာ ဘာမှ မရှိသေးပါ — လမ်းညွှန်အသစ်များ မကြာမီ ရောက်လာပါမည်။' },
  'guides.empty.title': { en: 'This topic is still being prepared.', ko: '이 주제는 아직 준비 중입니다.', my: 'ဤခေါင်းစဉ်ကို ပြင်ဆင်နေဆဲ ဖြစ်ပါသည်။' },
  'guides.empty.body': { en: 'Tell us what you need, or check our TikTok for everyday Korea tips while we add more guides.', ko: '필요한 내용을 알려주세요. 더 많은 정보를 준비하는 동안 TikTok에서도 한국 생활 팁을 확인할 수 있어요.', my: 'သင်လိုအပ်သောအရာကို ပြောပြပါ။ လမ်းညွှန်များ ထပ်ထည့်နေစဉ် TikTok တွင် ကိုရီးယားနေ့စဉ်ဘဝအကြံပြုချက်များကို ကြည့်နိုင်ပါသည်။' },

  /* 1:1 social DM */
  'dm.eyebrow': { en: '1:1 message', ko: '1:1 DM 문의', my: '1:1 မက်ဆေ့' },
  'dm.title': { en: 'Have a question?', ko: '궁금한 점이 있나요?', my: 'မေးလိုသည့်အချက် ရှိပါသလား?' },
  'dm.body.visa': { en: 'Send the visa type and your question through the channel that is easiest for you.', ko: '비자 종류와 궁금한 점을 편한 채널로 보내주세요.', my: 'ဗီဇာအမျိုးအစားနှင့် မေးလိုသည့်အချက်ကို အဆင်ပြေသော channel မှ ပို့ပါ။' },
  'dm.body.service': { en: 'Send the service you are checking and a short note about your situation through your preferred channel.', ko: '확인 중인 서비스와 현재 상황을 편한 채널로 간단히 보내주세요.', my: 'စစ်ဆေးနေသော ဝန်ဆောင်မှုနှင့် လက်ရှိအခြေအနေကို အဆင်ပြေသော channel မှ အကျဉ်းချုပ် ပို့ပါ။' },
  'dm.body.general': { en: 'Choose the channel that is easiest for you and send us a short message.', ko: '편한 채널을 선택해 궁금한 내용을 짧게 메시지로 보내주세요.', my: 'အဆင်ပြေသော channel ကို ရွေးပြီး မေးလိုသည့်အကြောင်းကို အကျဉ်းချုပ် မက်ဆေ့ပို့ပါ။' },
  'dm.cta': { en: '1:1 DM inquiry', ko: '1:1 DM 문의', my: '1:1 DM မေးမြန်းရန်' },
  'dm.telegram': { en: 'Message on Telegram', ko: 'Telegram으로 문의', my: 'Telegram မှ မေးမြန်းရန်' },
  'dm.tiktok': { en: 'Message through TikTok', ko: 'TikTok에서 메시지', my: 'TikTok မှ မက်ဆေ့ပို့ရန်' },
  'dm.messenger': { en: 'Message on Messenger', ko: 'Messenger로 문의', my: 'Messenger မှ မေးမြန်းရန်' },
  'dm.note': { en: 'Do not send passport numbers, ID numbers, financial information, or document photos in your first message.', ko: '첫 메시지에는 여권번호·외국인등록번호·금융정보·서류 사진을 보내지 마세요.', my: 'ပထမမက်ဆေ့တွင် ပတ်စပို့နံပါတ်၊ ID နံပါတ်၊ ငွေကြေးအချက်အလက် သို့မဟုတ် စာရွက်စာတမ်းဓာတ်ပုံ မပို့ပါနှင့်။' },
  'dm.mobile.title': { en: 'Ask by 1:1 message', ko: '1:1 DM으로 물어보기', my: '1:1 မက်ဆေ့ဖြင့် မေးရန်' },
  'dm.mobile.note': { en: 'Choose a channel', ko: '편한 채널을 선택하세요', my: 'အဆင်ပြေသော channel ကို ရွေးပါ' },
  'dm.mobile.open': { en: 'Choose DM', ko: 'DM 선택', my: 'DM ရွေးရန်' },
  'dm.mobile.close': { en: 'Close', ko: '닫기', my: 'ပိတ်ရန်' },

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
  'content.cta.title':  { en: 'Need more visa information?', ko: '비자 정보가 더 궁금하신가요?', my: 'ဗီဇာအချက်အလက် ပိုမိုသိလိုပါသလား?' },
  'content.cta.button': { en: 'Ask by 1:1 DM →', ko: '1:1 DM으로 문의하기 →', my: '1:1 DM ဖြင့် မေးမြန်းရန် →' },
  'content.cta.note':   { en: 'We research and guide. You apply yourself.', ko: '저희는 조사·안내하고, 신청은 직접 하시면 됩니다.', my: 'ကျွန်ုပ်တို့ ရှာဖွေ၍ လမ်းညွှန်ပေးသည်။ လျှောက်ထားခြင်းကို သင်ကိုယ်တိုင် လုပ်ပါ။' },
  'content.cta.visa.eyebrow': { en: 'visa information', ko: '비자 정보', my: 'ဗီဇာအချက်အလက်' },
  'content.cta.visa.title': { en: 'Ask about visa information', ko: '비자 정보 문의하기', my: 'ဗီဇာအချက်အလက် မေးမြန်းရန်' },
  'content.cta.visa.inlineTitle': { en: 'The document list changes with your situation', ko: '상황에 따라 준비 서류는 달라질 수 있어요', my: 'သင့်အခြေအနေအလိုက် လိုအပ်သောစာရွက်စာတမ်းများ ပြောင်းလဲနိုင်ပါသည်' },
  'content.cta.visa.body': { en: 'Tell us the visa type and what is unclear. You complete every application and submission yourself.', ko: '확인 중인 비자 종류와 궁금한 점을 알려주세요. 신청과 제출은 본인이 직접 진행합니다.', my: 'စစ်ဆေးနေသော ဗီဇာအမျိုးအစားနှင့် မရှင်းလင်းသည့်အချက်ကို ပြောပြပါ။ လျှောက်ထားခြင်းနှင့် တင်သွင်းခြင်းကို သင်ကိုယ်တိုင် ဆောင်ရွက်ပါသည်။' },
  'content.cta.visa.button': { en: 'Ask about visa information', ko: '비자 정보 문의하기', my: 'ဗီဇာအချက်အလက် မေးမြန်းရန်' },
  'content.related.title': { en: 'Related guides', ko: '관련 정보', my: 'ဆက်စပ် လမ်းညွှန်များ' },
  'content.toc': { en: 'On this page', ko: '목차', my: 'ဤစာမျက်နှာတွင်' },
  'content.lastReviewed': { en: 'Last reviewed', ko: '최종 검토일', my: 'နောက်ဆုံး ပြန်လည်စစ်ဆေးသည့် ရက်' },
  'content.disclaimer': { en: 'This is general information, not legal advice. Always confirm with Immigration (HiKorea).', ko: '일반 정보이며 법률 자문이 아닙니다. 최종 확인은 출입국(하이코리아)에서 하세요.', my: 'ဤအချက်အလက်သည် ယေဘုယျအချက်အလက်ဖြစ်ပြီး ဥပဒေအကြံဉာဏ် မဟုတ်ပါ။ နောက်ဆုံးအတည်ပြုချက်ကို လူဝင်မှုကြီးကြပ်ရေး (HiKorea) တွင် စစ်ဆေးပါ။' },

  /* 5. Service detail */
  'svcDetail.scope.title': { en: 'MyanMate guidance scope', ko: 'MyanMate 안내 범위', my: 'MyanMate လမ်းညွှန်မှုအတိုင်းအတာ' },
  'svcDetail.section.whatWeDont':  { en: "What we don't do", ko: '무엇은 하지 않나요', my: 'ကျွန်ုပ်တို့ ဘာ မလုပ်သလဲ' },
  'svcDetail.dont.body': { en: "We don't write, file, or submit documents, and we don't arrange property contracts or job placements. We research, guide, and accompany; you make the decisions and complete the required steps.", ko: '서류 작성·신청·제출을 하지 않고, 부동산 계약이나 일자리 연결을 알선하지 않습니다. 저희는 조사·안내·동행 자문을 제공하며, 결정과 필수 절차 진행은 본인이 합니다.', my: 'ကျွန်ုပ်တို့သည် စာရွက်စာတမ်းရေးသားခြင်း၊ လျှောက်ထားခြင်း၊ တင်သွင်းခြင်း မလုပ်ပါ။ အိမ်ခြံမြေစာချုပ် သို့မဟုတ် အလုပ်ချိတ်ဆက်မှုကိုလည်း စီစဉ်မပေးပါ။ ကျွန်ုပ်တို့သည် ရှာဖွေခြင်း၊ လမ်းညွှန်ခြင်းနှင့် အတူလိုက်ပါအကြံပြုခြင်းကိုသာ ပေးပြီး ဆုံးဖြတ်ချက်နှင့် လိုအပ်သောအဆင့်များကို သင်ကိုယ်တိုင် လုပ်ဆောင်ပါသည်။' },

  /* 6. 1:1 DM */
  'request.title': { en: '1:1 DM inquiry', ko: '1:1 DM 문의', my: '1:1 DM မေးမြန်းရန်' },
  'request.lead':  { en: 'Choose Telegram, TikTok, or Messenger. We will continue the conversation in the channel you select.', ko: 'Telegram, TikTok, Messenger 중 편한 채널을 선택하세요. 선택한 채널에서 1:1로 대화를 이어갑니다.', my: 'Telegram၊ TikTok သို့မဟုတ် Messenger ထဲမှ အဆင်ပြေသော channel ကို ရွေးပါ။ ရွေးထားသော channel တွင် 1:1 စကားပြောပါမည်။' },
  'request.trust.noSensitive.title': { en: 'No sensitive numbers', ko: '민감번호는 필요 없어요', my: 'အရေးကြီးနံပါတ်များ မလိုပါ' },
  'request.trust.noSensitive.body': { en: 'Do not send passport, ID, or financial numbers.', ko: '여권번호, 외국인등록번호, 금융정보는 보내지 마세요.', my: 'ပတ်စပို့၊ ID သို့မဟုတ် ငွေကြေးနံပါတ်များ မပို့ပါနှင့်။' },
  'request.trust.self.title': { en: 'You stay in control', ko: '진행은 본인이 직접', my: 'သင်ကိုယ်တိုင် ထိန်းချုပ်ပါသည်' },
  'request.trust.self.body': { en: 'We research and guide; you complete required steps yourself.', ko: '저희는 조사·안내하고, 필수 절차는 본인이 진행합니다.', my: 'ကျွန်ုပ်တို့ ရှာဖွေ၍ လမ်းညွှန်ပေးပြီး လိုအပ်သောအဆင့်များကို သင်ကိုယ်တိုင် လုပ်ဆောင်ပါသည်။' },
  'request.trust.dm.title': { en: 'Choose one of three channels', ko: '세 채널 중 편하게 선택', my: 'Channel သုံးခုထဲမှ ရွေးပါ' },
  'request.trust.dm.body': { en: 'Telegram, TikTok, and Messenger are available.', ko: 'Telegram, TikTok, Messenger로 문의할 수 있어요.', my: 'Telegram၊ TikTok နှင့် Messenger ဖြင့် မေးမြန်းနိုင်ပါသည်။' },

  /* 7. Reviews */
  'reviews.title':    { en: 'What people say', ko: '먼저 경험한 분들', my: 'လူများ ဘာပြောကြသလဲ' },
  'reviews.subtitle': { en: 'We will share real stories after the first guidance cases are complete.', ko: '실제 안내 사례가 쌓이면 이곳에 투명하게 공유하겠습니다.', my: 'ပထမဆုံး လမ်းညွှန်မှုကိစ္စများ ပြီးဆုံးပြီးနောက် တကယ့်ဇာတ်လမ်းများကို ဤနေရာတွင် မျှဝေပါမည်။' },
  'reviews.before':   { en: 'Before', ko: '비포', my: 'အရင်က' },
  'reviews.after':    { en: 'After', ko: '애프터', my: 'အခု' },
  'reviews.cta':      { en: 'Ask by 1:1 DM →', ko: '1:1 DM으로 문의하기 →', my: '1:1 DM ဖြင့် မေးမြန်းရန် →' },
  'reviews.empty':    { en: 'Reviews coming soon.', ko: '곧 후기가 올라옵니다.', my: 'သုံးသပ်ချက်များ မကြာမီ ရောက်လာပါမည်။' },
  'reviews.empty.title': { en: 'Real reviews will come after launch.', ko: '실제 후기는 서비스 시작 후 공개할게요.', my: 'တကယ့်သုံးသပ်ချက်များကို ဝန်ဆောင်မှုစတင်ပြီးနောက် ဖော်ပြပါမည်။' },
  'reviews.empty.body': { en: 'For now, use the guides and TikTok, or message us through a 1:1 DM channel.', ko: '지금은 정보 글과 TikTok을 확인하거나 편한 채널로 1:1 DM을 보내주세요.', my: 'ယခုအချိန်တွင် လမ်းညွှန်များနှင့် TikTok ကို ကြည့်ပါ သို့မဟုတ် အဆင်ပြေသော channel မှ 1:1 DM ပို့ပါ။' },

  /* 8. About */
  'about.title': { en: 'About MyanMate', ko: 'MyanMate 소개', my: 'MyanMate အကြောင်း' },
  'about.lead':  { en: 'Two perspectives, one purpose: less time lost while settling in Korea.', ko: '두 가지 시선으로, 한국에서 혼자 헤매는 시간을 줄입니다.', my: 'ရှုထောင့်နှစ်ခုနှင့် ရည်ရွယ်ချက်တစ်ခုဖြင့် ကိုရီးယားတွင် အခြေချရာ၌ တစ်ယောက်တည်း ရုန်းကန်ရသည့်အချိန်ကို လျှော့ချပေးပါသည်။' },
  'about.story.title': { en: 'Why we started MyanMate', ko: '우리가 MyanMate를 시작한 이유', my: 'ကျွန်ုပ်တို့ MyanMate ကို စတင်ခဲ့သည့် အကြောင်းရင်း' },
  'about.story.p1': { en: 'One of us came from Myanmar and has spent five years building a life in Korea. Language, administrative terms, and scattered information made even simple next steps feel uncertain. That experience is still the starting point for every guide we make.', ko: '우리 중 한 사람은 미얀마에서 와 한국에서 5년간 직접 삶을 꾸려왔습니다. 언어와 행정 용어, 흩어진 정보 때문에 간단한 다음 단계조차 막막하게 느껴지는 시간을 겪었습니다. 그 경험이 지금도 모든 안내의 출발점입니다.', my: 'ကျွန်ုပ်တို့ထဲမှ တစ်ယောက်သည် မြန်မာနိုင်ငံမှ လာပြီး ကိုရီးယားတွင် ၅ နှစ်ကြာ ကိုယ်တိုင်ဘဝတည်ဆောက်ခဲ့ပါသည်။ ဘာသာစကား၊ အုပ်ချုပ်ရေးအသုံးအနှုန်းများနှင့် ပြန့်ကျဲနေသော အချက်အလက်များကြောင့် ရိုးရှင်းသော နောက်တစ်ဆင့်တောင် မသေချာသလို ခံစားခဲ့ရပါသည်။ ထိုအတွေ့အကြုံသည် ယနေ့ ကျွန်ုပ်တို့၏ လမ်းညွှန်မှုတိုင်း၏ အစဖြစ်ပါသည်။' },
  'about.story.p2': { en: 'The other grew up in Korea and understands the systems, paperwork, and local context behind those questions. Looking at the same problem from both sides showed us what information was missing and what needed a clearer explanation.', ko: '다른 한 사람은 한국에서 자라 제도와 서류, 질문 뒤에 있는 현지 맥락을 압니다. 같은 문제를 두 시선으로 바라보니 어떤 정보가 빠져 있고, 무엇을 더 쉽게 설명해야 하는지가 보였습니다.', my: 'အခြားတစ်ယောက်သည် ကိုရီးယားတွင် ကြီးပြင်းခဲ့ပြီး ထိုမေးခွန်းများနောက်ကွယ်ရှိ စနစ်များ၊ စာရွက်စာတမ်းများနှင့် ဒေသဆိုင်ရာ အခြေအနေကို နားလည်ပါသည်။ တူညီသောပြဿနာကို နှစ်ဖက်စလုံးမှ ကြည့်သောအခါ မည်သည့်အချက်အလက် ပျောက်နေပြီး မည်သည့်အရာကို ပိုရှင်းပြရန် လိုအပ်သည်ကို တွေ့မြင်ခဲ့ပါသည်။' },
  'about.story.p3': { en: 'We started MyanMate to turn public information into clear next steps and practical preparation points. We research and explain; you keep control of every application and decision.', ko: '그래서 공개된 정보를 이해하기 쉬운 다음 단계와 실용적인 준비 항목으로 정리하기 위해 MyanMate를 시작했습니다. 저희는 조사하고 설명하며, 모든 신청과 결정은 본인이 직접 진행합니다.', my: 'ထို့ကြောင့် အများပြည်သူသိနိုင်သော အချက်အလက်များကို နားလည်လွယ်သော နောက်အဆင့်များနှင့် လက်တွေ့ကျသော ပြင်ဆင်ချက်များအဖြစ် စီစဉ်ရန် MyanMate ကို စတင်ခဲ့ပါသည်။ ကျွန်ုပ်တို့က ရှာဖွေ၍ ရှင်းပြပြီး လျှောက်ထားခြင်းနှင့် ဆုံးဖြတ်ခြင်းအားလုံးကို သင်ကိုယ်တိုင် ထိန်းချုပ်ပါသည်။' },
  'about.partner.title': { en: 'Two perspectives behind every guide', ko: '모든 안내에 담긴 두 가지 시선', my: 'လမ်းညွှန်မှုတိုင်း၏ နောက်ကွယ်ရှိ ရှုထောင့်နှစ်ခု' },
  'about.partner.kr.label': { en: 'Korean perspective', ko: '한국인 파트너', my: 'ကိုရီးယားပါတနာ' },
  'about.partner.kr.body':  { en: 'Born and raised in Korea, with an understanding of public systems, administrative language, and the context that can be hard to notice from outside.', ko: '한국에서 나고 자라 공공 제도와 행정 용어, 외부에서는 알아차리기 어려운 현지 맥락을 살펴봅니다.', my: 'ကိုရီးယားတွင် မွေးဖွားကြီးပြင်းခဲ့ပြီး အများပြည်သူဆိုင်ရာ စနစ်များ၊ အုပ်ချုပ်ရေးအသုံးအနှုန်းများနှင့် ပြင်ပမှ သတိမထားမိနိုင်သော ဒေသဆိုင်ရာ အခြေအနေကို နားလည်ပါသည်။' },
  'about.partner.mm.label': { en: 'Myanmar perspective · 5 years in Korea', ko: '미얀마 출신 파트너 · 한국 정착 5년', my: 'မြန်မာပါတနာ · ကိုရီးယားတွင် ၅ နှစ်' },
  'about.partner.mm.body':  { en: 'Came from Myanmar and built a life here over five years. Brings firsthand understanding of the language, cultural, and practical questions that come with settling in Korea.', ko: '미얀마에서 와 5년 동안 이곳에서 삶을 꾸려왔습니다. 한국 정착 과정에서 생기는 언어, 문화, 생활의 질문을 직접 겪은 시선으로 살펴봅니다.', my: 'မြန်မာနိုင်ငံမှ လာပြီး ဒီမှာ ၅ နှစ်ကြာ ဘဝတည်ဆောက်ခဲ့ပါသည်။ ကိုရီးယားတွင် အခြေချရာ၌ ဖြစ်ပေါ်လာသော ဘာသာစကား၊ ယဉ်ကျေးမှုနှင့် လက်တွေ့ဘဝမေးခွန်းများကို ကိုယ်တိုင်ကြုံတွေ့ခဲ့သည့် ရှုထောင့်ဖြင့် ကြည့်ပါသည်။' },
  'about.partner.role.label': { en: 'What this perspective adds', ko: '이 시선이 더하는 것', my: 'ဤရှုထောင့်က ထည့်သွင်းပေးသည့်အရာ' },
  'about.partner.kr.role': { en: 'Checks Korean public information, administrative language, and local context.', ko: '한국의 공개 정보, 행정 용어, 현지 맥락을 확인합니다.', my: 'ကိုရီးယား အများပြည်သူသိနိုင်သော အချက်အလက်၊ အုပ်ချုပ်ရေးအသုံးအနှုန်းနှင့် ဒေသဆိုင်ရာ အခြေအနေကို စစ်ဆေးပါသည်။' },
  'about.partner.mm.role': { en: 'Checks whether the guidance makes sense from a Myanmar newcomer’s point of view.', ko: '미얀마에서 온 사람이 실제로 이해하고 사용할 수 있는지 확인합니다.', my: 'မြန်မာနိုင်ငံမှ လာသူတစ်ယောက်၏ ရှုထောင့်မှ လမ်းညွှန်မှုကို အမှန်တကယ် နားလည်အသုံးပြုနိုင်ခြင်း ရှိမရှိ စစ်ဆေးပါသည်။' },
  'about.values.title':  { en: 'How we earn trust', ko: '신뢰를 지키는 방식', my: 'ယုံကြည်မှုကို ထိန်းသိမ်းသည့် နည်းလမ်း' },
  'about.values.public.title': { en: 'We start with public sources', ko: '공개 정보부터 확인합니다', my: 'အများပြည်သူသိနိုင်သော ရင်းမြစ်များမှ စတင်ပါသည်' },
  'about.values.public.body': { en: 'We organize requirements from public information and point you to where final confirmation belongs.', ko: '공개된 정보를 기준으로 요건을 정리하고, 최종 확인이 필요한 곳을 함께 안내합니다.', my: 'အများပြည်သူသိနိုင်သော အချက်အလက်များအရ လိုအပ်ချက်များကို စီစဉ်ပြီး နောက်ဆုံးအတည်ပြုရမည့်နေရာကို လမ်းညွှန်ပါသည်။' },
  'about.values.honest.title': { en: 'We say when something needs confirmation', ko: '확인이 필요한 것은 분명히 말합니다', my: 'အတည်ပြုရန် လိုအပ်သည့်အရာကို ရှင်းလင်းစွာ ပြောပါသည်' },
  'about.values.honest.body': { en: 'Rules change. If something is uncertain or outside our scope, we tell you clearly.', ko: '요건은 바뀔 수 있습니다. 불확실하거나 안내 범위를 벗어나는 내용은 분명하게 말씀드립니다.', my: 'စည်းမျဉ်းများ ပြောင်းလဲနိုင်ပါသည်။ မသေချာသော သို့မဟုတ် ကျွန်ုပ်တို့၏ လမ်းညွှန်မှုအတိုင်းအတာပြင်ပရှိ အကြောင်းအရာကို ရှင်းလင်းစွာ ပြောပါသည်။' },
  'about.values.control.title': { en: 'You keep the final decision', ko: '결정과 진행은 본인이 합니다', my: 'နောက်ဆုံးဆုံးဖြတ်ချက်ကို သင်ကိုယ်တိုင် ချပါသည်' },
  'about.values.control.body': { en: 'We research and guide. You complete applications, submissions, signatures, and final decisions yourself.', ko: '저희는 조사하고 안내합니다. 신청, 제출, 서명과 최종 결정은 본인이 직접 진행합니다.', my: 'ကျွန်ုပ်တို့က ရှာဖွေ၍ လမ်းညွှန်ပါသည်။ လျှောက်ထားခြင်း၊ တင်သွင်းခြင်း၊ လက်မှတ်ထိုးခြင်းနှင့် နောက်ဆုံးဆုံးဖြတ်ချက်များကို သင်ကိုယ်တိုင် ဆောင်ရွက်ပါသည်။' },
  'about.cta.note': { en: 'Tell us what feels unclear. We will first check whether it fits the guidance we provide.', ko: '무엇이 막막한지 알려주세요. 먼저 저희가 안내할 수 있는 범위인지 확인하겠습니다.', my: 'မည်သည့်အရာက မရှင်းလင်းသည်ကို ပြောပြပါ။ ပထမဆုံး ကျွန်ုပ်တို့ လမ်းညွှန်ပေးနိုင်သော အတိုင်းအတာအတွင်း ရှိမရှိ စစ်ဆေးပါမည်။' },

  /* 9. Privacy policy (new — general info; finalize with a professional before launch) */
  'privacy.title': { en: 'Privacy policy', ko: '개인정보 처리방침', my: 'ကိုယ်ရေးအချက်အလက် မူဝါဒ' },
  'privacy.lead':  { en: 'We use only the information needed to reply to your DM. We do not sell your information.', ko: 'DM 문의에 답변하는 데 필요한 정보만 이용합니다. 정보를 판매하지 않습니다.', my: 'DM မေးမြန်းမှုကို ပြန်ကြားရန် လိုအပ်သောအချက်အလက်ကိုသာ အသုံးပြုပါသည်။ သင့်အချက်အလက်ကို မရောင်းပါ။' },
  'privacy.collect.title': { en: 'What we collect', ko: '수집하는 정보', my: 'ကျွန်ုပ်တို့ စုဆောင်းသည့်အရာ' },
  'privacy.collect.body':  { en: 'When you send a DM, the selected platform may show us your account name, message content, and any files you choose to send.', ko: 'DM을 보내면 선택한 플랫폼을 통해 계정 표시명, 메시지 내용과 이용자가 직접 첨부한 파일을 확인할 수 있습니다.', my: 'DM ပို့သည့်အခါ ရွေးထားသော platform မှ သင့် account အမည်၊ မက်ဆေ့အကြောင်းအရာနှင့် သင်ရွေးချယ်ပို့သော file များကို ကျွန်ုပ်တို့ မြင်နိုင်ပါသည်။' },
  'privacy.use.title': { en: 'How we use it', ko: '이용 목적', my: 'ဘယ်လို အသုံးပြုသလဲ' },
  'privacy.use.body':  { en: 'We use it only to reply to your request, discuss the guidance you asked about, and keep a short record of the conversation.', ko: '문의에 답변하고, 요청하신 안내를 논의하며, 대화 기록을 필요한 범위에서 보관하기 위해서만 사용합니다.', my: 'သင့်တောင်းဆိုမှုကို ပြန်ကြားရန်၊ မေးမြန်းထားသော လမ်းညွှန်မှုကို ဆွေးနွေးရန်နှင့် စကားပြောမှတ်တမ်းကို လိုအပ်သလောက် သိမ်းထားရန်အတွက်သာ အသုံးပြုပါသည်။' },
  'privacy.processors.title': { en: 'Where requests are processed', ko: '문의 처리 경로', my: 'တောင်းဆိုမှုများကို ဆောင်ရွက်သည့်နေရာ' },
  'privacy.processors.body':  { en: 'Telegram, TikTok, and Messenger messages are processed by their respective platform providers. Each provider may process data under its own privacy policy.', ko: 'Telegram, TikTok, Messenger 메시지는 각 플랫폼 제공업체가 처리하며, 각자의 개인정보 처리방침이 적용될 수 있습니다.', my: 'Telegram၊ TikTok နှင့် Messenger မက်ဆေ့များကို သက်ဆိုင်ရာ platform ပံ့ပိုးသူများက ဆောင်ရွက်ပြီး ၎င်းတို့၏ ကိုယ်ရေးအချက်အလက်မူဝါဒများ သက်ရောက်နိုင်ပါသည်။' },
  'privacy.sensitive.title': { en: "Please don't send sensitive data", ko: '민감정보는 보내지 마세요', my: 'အရေးကြီးအချက်အလက် မပို့ပါနှင့်' },
  'privacy.sensitive.body':  { en: 'Please do not include sensitive details such as passport numbers, ID numbers, or financial information. We do not need them for initial guidance.', ko: '여권번호, 외국인등록번호, 금융정보 같은 민감한 정보는 넣지 마세요. 초기 안내에는 필요하지 않습니다.', my: 'ပတ်စပို့နံပါတ်၊ မှတ်ပုံတင်နံပါတ် သို့မဟုတ် ငွေကြေးအချက်အလက်ကဲ့သို့ အရေးကြီးအချက်အလက်များ မထည့်ပါနှင့်။ ကနဦး လမ်းညွှန်မှုအတွက် ၎င်းတို့ကို မလိုအပ်ပါ။' },
  'privacy.retention.title': { en: 'How long we keep it', ko: '보관 기간', my: 'ဘယ်လောက်ကြာ သိမ်းထားသလဲ' },
  'privacy.retention.body':  { en: 'We keep DM conversation records only as long as needed to respond and provide guidance. We delete them on request unless we must keep them for a legal or dispute-related reason.', ko: 'DM 대화 기록은 답변과 안내에 필요한 기간 동안만 보관합니다. 법적 의무나 분쟁 대응을 위해 필요한 경우가 아니라면 요청 시 삭제합니다.', my: 'DM စကားပြောမှတ်တမ်းများကို ပြန်ကြားရန်နှင့် လမ်းညွှန်ရန် လိုအပ်သောကာလအတွင်းသာ သိမ်းထားပါသည်။ ဥပဒေအရ သို့မဟုတ် အငြင်းပွားမှုအတွက် လိုအပ်သောအခြေအနေ မရှိပါက တောင်းဆိုမှုအပေါ် ဖျက်ပေးပါသည်။' },
  'privacy.contact.title': { en: 'Questions or deletion', ko: '문의·삭제 요청', my: 'မေးခွန်း သို့မဟုတ် ဖျက်ရန်' },
  'privacy.contact.body':  { en: 'To ask a question or have your information deleted, message us anytime.', ko: '문의하거나 정보 삭제를 원하시면 언제든 메시지를 주세요.', my: 'မေးခွန်းမေးရန် သို့မဟုတ် သင့်အချက်အလက် ဖျက်လိုပါက အချိန်မရွေး မက်ဆေ့ပို့ပါ။' },
  'privacy.updated': { en: 'Last updated', ko: '최종 수정일', my: 'နောက်ဆုံး မွမ်းမံသည့်ရက်' },

  /* UI helper labels (not in the original copy sheet) */
  'ui.tag.visaResearch': { en: 'Visa research', ko: '비자 조사', my: 'ဗီဇာ ရှာဖွေ' },
  'ui.tag.resumeJob':    { en: 'Resume & jobs', ko: '이력서·알바', my: 'ကိုယ်ရေး·အလုပ်' },
  'ui.tag.housingCompanion': { en: 'Home viewing', ko: '집 보기 동행', my: 'အိမ်ကြည့်အတူလိုက်' },
  'ui.step':             { en: 'Step', ko: '단계', my: 'အဆင့်' },
  'ui.readGuide':        { en: 'Visa · Guide example', ko: '비자 · 콘텐츠 예시', my: 'ဗီဇာ · နမူနာ' },
  'ui.menu':             { en: 'Menu', ko: '메뉴', my: 'မီနူး' },
  'ui.nav.primary':      { en: 'Primary navigation', ko: '주요 메뉴', my: 'အဓိက မီနူး' },
  'ui.nav.mobile':       { en: 'Mobile navigation', ko: '모바일 메뉴', my: 'မိုဘိုင်း မီနူး' },
  'ui.status.available': { en: 'Available now', ko: '현재 가능', my: 'ယခု ရနိုင်သည်' },
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
