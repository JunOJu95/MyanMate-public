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
  'nav.about':     { en: 'About',    ko: '소개',   my: 'ကျွန်ုပ်တို့အကြောင်း' },
  'nav.privacy':   { en: 'Privacy',  ko: '개인정보', my: 'ကိုယ်ရေးအချက်အလက်မူဝါဒ' },
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
    my: 'MyanMate သည် အချက်အလက်နှင့် လမ်းညွှန်မှုများကိုသာ ပံ့ပိုးပေးပါသည်။ စာရွက်စာတမ်းနှင့် စာချုပ်ကိစ္စရပ်များကို သင်ကိုယ်တိုင် (သို့မဟုတ် လိုင်စင်ရပညာရှင်မှတစ်ဆင့်) လုပ်ဆောင်ပါ။ ဗီဇာကိစ္စရပ်များကို လူဝင်မှုကြီးကြပ်ရေး (HiKorea) နှင့် အိမ်ခြံမြေကိစ္စများကို လိုင်စင်ရ အကျိုးဆောင်ထံတွင် ထပ်မံအတည်ပြုပါ။',
  },
  'footer.tagline': { en: 'Your mate for settling in Korea.', ko: '한국 정착, 곁을 지켜주는 친구.', my: 'ကိုရီးယားတွင် အခြေချရာ၌ သင့်ဘေးက မိတ်ဆွေ။' },

  /* 1. Home */
  'home.hero.kicker': { en: 'Myanmar community guidance in Korea', ko: '한국 생활이 처음인 미얀마인을 위한 안내', my: 'ကိုရီးယားရှိ မြန်မာ community အတွက် လမ်းညွှန်မှု' },
  'home.hero.headline': { en: "New to Korea? You don't have to figure it out alone.", ko: '한국에 막 오셨나요? 혼자 헤매지 않아도 돼요.', my: 'ကိုရီးယားကို ရောက်ခါစလား? တစ်ယောက်တည်း အခက်အခဲတွေနဲ့ ရုန်းကန်နေစရာ မလိုပါဘူး။' },
  'home.hero.sub': { en: 'Start with the visa information already organized here. We will keep adding more visa topics. If something is still unclear after reading, message us through the channel that is easiest for you.', ko: '먼저 정리된 비자 정보를 확인해 보세요. 필요한 비자 정보는 계속 추가할 예정입니다. 읽고도 궁금한 점이 남으면 편한 채널로 메시지를 보내주세요.', my: 'ဗီဇာနဲ့ ပတ်သက်တဲ့ အချက်အလက်တွေကို ဒီမှာ စနစ်တကျ စုစည်းပေးထားပါတယ်။ ဗီဇာနဲ့ဆိုင်တဲ့ အကြောင်းအရာတွေကိုလည်း ဆက်လက်ဖြည့်စွက်ပေးသွားမှာပါ။ ဖတ်ကြည့်ပြီးလို့ မရှင်းလင်းတာရှိရင် ကိုယ်နဲ့ အဆင်ပြေဆုံး ချန်နယ်ကနေတစ်ဆင့် ကျွန်ုပ်တို့ကို စာပို့ပြီး မေးမြန်းနိုင်ပါတယ်။' },
  'home.hero.visual.title': { en: 'Clear points for your next step', ko: '다음에 확인할 내용을 안내해요', my: 'သင်၏ နောက်တစ်ဆင့်အတွက် ရှင်းလင်းပြတ်သားတဲ့ အချက်အလက်များ' },
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
  'home.services.title': { en: 'Guidance we offer', ko: '이런 안내를 드려요', my: 'ကျွန်ုပ်တို့ ပံ့ပိုးပေးသည့် ဝန်ဆောင်မှုများ' },
  'home.services.lead': { en: 'A small, practical service lineup for the first questions people usually face after arriving in Korea.', ko: '한국에 막 왔을 때 가장 먼저 막히는 문제부터 작고 실용적으로 도와드립니다.', my: 'ကိုရီးယားကို အခုမှ ရောက်လာသူများ ပထမဆုံး ကြုံရသော မေးခွန်းများအတွက် လက်တွေ့ကျသော လမ်းညွှန်မှုများ ဖြစ်ပါသည်။' },
  'home.process.title': { en: 'How MyanMate works', ko: 'MyanMate는 이렇게 도와드려요', my: 'MyanMate ဘယ်လို အလုပ်လုပ်သလဲ' },
  'home.process.step1.title': { en: 'You tell us the context', ko: '상황을 알려주세요', my: 'သင့်အခြေအနေကို ပြောပြပါ' },
  'home.process.step1.body': { en: 'Only the details needed to understand your question.', ko: '문의에 필요한 최소한의 내용만 확인합니다.', my: 'သင့်မေးခွန်းကို နားလည်ဖို့အတွက် လိုအပ်တဲ့ အချက်အလက်တွေကိုပဲ ပြောပြပေးဖို့ လိုအပ်ပါတယ်။' },
  'home.process.step2.title': { en: 'We organize public information', ko: '공개 정보를 정리합니다', my: 'ကျွန်ုပ်တို့က အချက်အလက်တွေကို စုစည်းပေးပါတယ်' },
  'home.process.step2.body': { en: 'Requirements, comparison points, and questions to ask.', ko: '요건, 비교 기준, 확인할 질문을 정리합니다.', my: 'လိုအပ်ချက်များ၊ နှိုင်းယှဉ်စရာအချက်များ နှင့် မေးမြန်းရန် လိုအပ်သည့်အချက်များကို စနစ်တကျ စုစည်းပေးသွားမှာပါ။' },
  'home.process.step3.title': { en: 'You stay in control', ko: '진행은 본인이 직접 합니다', my: 'သင်ကိုယ်တိုင်ပဲ ဆုံးဖြတ်ပါ' },
  'home.process.step3.body': { en: 'You complete required steps yourself, with guidance beside you.', ko: '필수 절차는 본인이 진행하고, 저희는 곁에서 안내합니다.', my: 'လိုအပ်တဲ့ အဆင့်တွေကို သင်ကိုယ်တိုင် လုပ်ဆောင်ရမှာဖြစ်ပြီး၊ ကျွန်ုပ်တို့ဘက်ကတော့ သင့်ဘေးမှာ လိုအပ်တဲ့ လမ်းညွှန်မှုတွေကို ပံ့ပိုးပေးသွားမှာပါ။' },
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
  'home.about.title':    { en: 'Who we are', ko: '우리를 소개할게요', my: 'ကျွန်ုပ်တို့အကြောင်း' },
  'home.about.eyebrow':  { en: 'Why we started', ko: '우리가 시작한 이유', my: 'စတင်ဖြစ်ပေါ်လာပုံ' },
  'home.about.blurb':    { en: 'MyanMate was built by a Korean partner who understands local systems and a Myanmar partner who has spent five years building a life here. We connect both perspectives so your next step feels clearer.', ko: 'MyanMate는 한국의 제도와 행정을 아는 한국인 파트너와, 이곳에서 5년간 직접 삶을 꾸려온 미얀마 출신 파트너가 함께 만들었습니다. 두 시선을 연결해 다음 단계를 더 분명하게 안내합니다.', my: 'MyanMate ကို ကိုရီးယားစနစ်တွေကို ကျွမ်းကျင်တဲ့ ကိုရီးယားမိတ်ဆွေတစ်ဦးနဲ့ ကိုရီးယားမှာ (၅) နှစ်တိုင်တိုင် ဘဝကို တည်ဆောက်ဖြတ်သန်းခဲ့တဲ့ မြန်မာမိတ်ဆွေတစ်ဦးတို့ ပူးပေါင်းပြီး တည်ထောင်ထားတာပါ။ သင်သွားမယ့် နောက်ခြေလှမ်းတွေ ပိုမိုရှင်းလင်းလာစေဖို့ နှစ်ဦးနှစ်ဖက်ရဲ့ အတွေ့အကြုံတွေကို ပေါင်းစပ်ပြီး ကူညီပေးသွားမှာပါ။' },
  'home.about.role.kr':  { en: 'Korean systems and local context', ko: '한국 제도와 현지 맥락', my: 'ကိုရီးယားရဲ့ စနစ်နဲ့ ဒေသတွင်း အချက်အလက်များကို ကောင်းစွာ နားလည်ထားခြင်း' },
  'home.about.role.mm':  { en: 'Five years of lived settlement experience', ko: '5년의 실제 한국 정착 경험', my: 'ကိုရီးယားမှာ (၅) နှစ်ကြာ ကိုယ်တိုင်နေထိုင်ခဲ့တဲ့ အတွေ့အကြုံများဖြင့် ပံ့ပိုးပေးခြင်း' },
  'home.about.cta':      { en: 'Read our story', ko: '우리 이야기 더 보기', my: 'ကျွန်ုပ်တို့၏ ဇာတ်လမ်းကို ဖတ်ရန်' },
  'home.tiktok.eyebrow': { en: 'Everyday Korea notes', ko: 'TikTok 생활 정보', my: 'နေ့စဉ် ကိုရီးယားမှတ်စုများ' },
  'home.tiktok.title':   { en: 'See the everyday guides we share with the Myanmar community.', ko: '미얀마 커뮤니티와 나누는 한국 생활 정보를 확인해 보세요.', my: 'မြန်မာ community နှင့် မျှဝေသော ကိုရီးယားနေ့စဉ်ဘဝ လမ်းညွှန်များကို ကြည့်ရှုပါ။' },
  'home.tiktok.body':    { en: 'Our TikTok shares visa basics, part-time job notes, housing tips, Korean culture, daily life, and simple Korean expressions for real situations.', ko: 'MyanMate TikTok에서는 비자 기본 정보, 알바 정보, 주거 팁, 한국 문화, 일상 생활, 상황별 쉬운 한국어 표현을 공유합니다.', my: 'MyanMate TikTok တွင် ဗီဇာအခြေခံအချက်အလက်၊ part-time အလုပ်မှတ်စု၊ နေအိမ်အကြံပြုချက်၊ ကိုရီးယားယဉ်ကျေးမှု၊ နေ့စဉ်ဘဝနှင့် လက်တွေ့အခြေအနေများအတွက် ရိုးရှင်းသော ကိုရီးယားစကားများကို မျှဝေပါသည်။' },
  'home.tiktok.topic.visa':    { en: 'Visa info', ko: '비자 정보', my: 'ဗီဇာအချက်အလက်' },
  'home.tiktok.topic.jobs':    { en: 'Part-time jobs', ko: '알바 정보', my: 'Part-time အလုပ်' },
  'home.tiktok.topic.housing': { en: 'Housing tips', ko: '주거 팁', my: 'နေအိမ် အကြံပြုချက်' },
  'home.tiktok.topic.korean':  { en: 'Korean expressions', ko: '상황별 한국어', my: 'ကိုရီးယားစကား' },
  'home.tiktok.topicsLabel':   { en: 'TikTok content topics', ko: 'TikTok 콘텐츠 주제', my: 'TikTok content ခေါင်းစဉ်များ' },
  'home.tiktok.note':    { en: 'General information only. Requirements can change, so confirm your case before applying.', ko: '일반 정보 제공용입니다. 요건은 바뀔 수 있으니 신청 전 본인 상황에 맞게 확인하세요.', my: 'မှတ်ချက် - ဤအချက်အလက်များသည် ယေဘူယျသာဖြစ်သည်။ စည်းကမ်းချက်များ ပြောင်းလဲနိုင်သဖြင့် မလျှောက်ထားမီ အသေးစိတ်ကို ထပ်မံအတည်ပြုပါ။' },
  'home.tiktok.cta':     { en: 'View TikTok', ko: 'TikTok 보기', my: 'TikTok ကြည့်ရန်' },
  'home.cta.band':       { en: 'Not sure where to start? Just message us.', ko: '어디서부터 해야 할지 모르겠다면, 편하게 메시지 주세요.', my: 'ဘယ်ကစရမှန်း မသိဘူးလား? ကျွန်ုပ်တို့ကို လွတ်လပ်စွာ မက်ဆေ့ပို့လိုက်ပါ။' },
  'home.cta.flow.title': { en: 'Ask without sending sensitive details.', ko: '민감정보 없이 편하게 문의하세요.', my: 'အရေးကြီးအချက်အလက် မပို့ဘဲ လွတ်လပ်စွာ မေးမြန်းပါ။' },
  'home.cta.flow.body': { en: 'We first clarify the guidance scope, then organize the next steps you complete yourself.', ko: '먼저 안내 범위를 확인하고, 본인이 직접 진행할 다음 단계를 정리해 드립니다.', my: 'ပထမဆုံး လမ်းညွှန်မှုအတိုင်းအတာကို ရှင်းပြပြီး သင်ကိုယ်တိုင် ဆောင်ရွက်မည့် နောက်အဆင့်များကို စီစဉ်ပေးပါသည်။' },
  'home.cta.flow.step1': { en: 'No passport or ID numbers', ko: '여권번호·신분번호 불필요', my: 'ပတ်စပို့/ID နံပါတ် မလိုပါ' },
  'home.cta.flow.step2': { en: 'Scope confirmed first', ko: '안내 범위 먼저 확인', my: 'လမ်းညွှန်မှုအတိုင်းအတာကို ပထမဆုံး အတည်ပြု' },
  'home.cta.flow.step3': { en: 'You complete required steps', ko: '필수 절차는 본인이 진행', my: 'လိုအပ်သောအဆင့်များကို သင်ကိုယ်တိုင် ဆောင်ရွက်' },
  'home.community.title': { en: 'More Korea-life notes on TikTok', ko: 'TikTok에서도 생활 정보를 확인하세요', my: 'TikTok မှာ ကိုရီးယားနေထိုင်မှု အကြောင်းအရာများ ကြည့်ရှုနိုင်ပါပြီ' },
  'home.community.body': { en: 'We share short, practical notes on visas, work, housing, and everyday Korean. Visit our TikTok for the latest posts.', ko: '비자, 일자리, 주거, 생활 한국어에 관한 짧고 실용적인 정보를 나눕니다. 최신 게시물은 TikTok에서 확인하세요.', my: 'ဗီဇာ၊ အလုပ်အကိုင်၊ နေအိမ်နဲ့ နေ့စဉ်သုံး ကိုရီးယားစကားလုံးများအတွက် အသုံးဝင်တဲ့ အချက်အလက်တိုလေးတွေကို TikTok မှာ မျှဝေပေးနေပါတယ်။ အသစ်တင်ထားတာတွေကို ကြည့်ဖို့ ကျွန်ုပ်တို့ TikTok ကို လာရောက်လည်ပတ်ပေးပါဦး။' },

  /* 3. Guides */
  'guides.title': { en: 'Visa information', ko: '비자 정보', my: 'ဗီဇာနှင့် ပတ်သက်သည့် အချက်အလက်များ' },
  'guides.eyebrow': { en: 'Korea visa information', ko: '한국 비자 정보', my: 'ကိုရီးယား ဗီဇာအချက်အလက်' },
  'guides.intro': { en: 'Choose an available visa and read the eligibility, documents, application steps, and cautions. Each visa is presented as a separate guide, and new topics will be added as they are prepared.', ko: '현재 제공되는 비자 정보에서 확인하려는 항목을 선택해 자격, 필요 서류, 신청 절차와 주의사항을 읽어보세요. 준비되는 비자 정보는 계속 추가됩니다.', my: 'ဗီဇာအမျိုးအစားအလိုက် လိုအပ်ချက်များ၊ စာရွက်စာတမ်းများနှင့် လျှောက်ထားပုံ အဆင့်ဆင့်ကို သီးခြားလမ်းညွှန်ချက်များဖြင့် ဖော်ပြထားပါသည်။ အကြောင်းအရာအသစ်များကိုလည်း ဆက်လက်ဖြည့်စွက်ပေးသွားပါမည်။' },
  'guides.choose': { en: 'Choose a visa', ko: '확인할 비자를 선택하세요', my: 'ဗီဇာ ရွေးချယ်ရန်' },
  'guides.chooseNote': { en: 'All available guides have the same importance. Open the information you need; new guides will appear here as they are added.', ko: '현재 제공되는 비자 정보는 같은 중요도로 보여드립니다. 지금 필요한 정보를 선택하세요. 새 안내도 추가되는 대로 이곳에 표시됩니다.', my: 'မိမိသိလိုသည့် ဗီဇာအချက်အလက်ကို နှိပ်၍ ဖတ်ရှုနိုင်ပါသည်။ လမ်းညွှန်ချက်အသစ်များကို ဤနေရာတွင် ဆက်လက်ဖြည့်စွက်ပေးသွားပါမည်။' },
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
  'dm.note': { en: 'Do not send passport numbers, ID numbers, financial information, or document photos in your first message.', ko: '첫 메시지에는 여권번호·외국인등록번호·금융정보·서류 사진을 보내지 마세요.', my: 'ပထမဆုံးအကြိမ်တွင် ID၊ Passport နှင့် ဘဏ်အချက်အလက်များကို မပို့ပါနှင့်။' },
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
  'svcDetail.dont.body': { en: "We don't write, file, or submit documents, and we don't arrange property contracts or job placements. We research, guide, and accompany; you make the decisions and complete the required steps.", ko: '서류 작성·신청·제출을 하지 않고, 부동산 계약이나 일자리 연결을 알선하지 않습니다. 저희는 조사·안내·동행 자문을 제공하며, 결정과 필수 절차 진행은 본인이 합니다.', my: 'ကျွန်ုပ်တို့သည် စာရွက်စာတမ်းတင်ခြင်း၊ စာချုပ်ချုပ်ဆိုခြင်းနှင့် အလုပ်ရှာပေးခြင်းများ မလုပ်ဆောင်ပါ။ ကျွန်ုပ်တို့သည်အချက်အလက်များ ရှာဖွေခြင်းနှင့် လမ်းညွှန်ပေးခြင်းတို့ကိုသာ ဆောင်ရွက်ပြီး၊ အရေးကြီးသည့် ဆုံးဖြတ်ချက်များကိုမူ သင်ကိုယ်တိုင် ချမှတ်ရပါမည်။' },

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
  'about.lead':  { en: 'One place to understand Korea visa, school, work, culture, and daily life before and after you arrive.', ko: '한국에 오기 전과 온 뒤에 필요한 비자, 학교, 일, 문화, 생활 정보를 한곳에서 이해할 수 있게 합니다.', my: 'ကိုရီးယားနိုင်ငံသို့ မရောက်မီနှင့် ရောက်ရှိပြီးနောက် ဗီဇာ၊ ကျောင်း၊ အလုပ်အကိုင်၊ ယဉ်ကျေးမှုနှင့် နေ့စဉ်ဘဝတို့ကို တစ်နေရာတည်းတွင် နားလည်နိုင်ပါသည်။' },
  'about.story.intro': { en: 'MyanMate began from a simple problem: Korea information for Burmese people exists, but it is scattered across official pages, school notices, job posts, videos, communities, and private messages.', ko: 'MyanMate는 단순한 문제에서 시작했습니다. 미얀마인을 위한 한국 정보는 존재하지만 공식 페이지, 학교 공지, 채용 정보, 영상, 커뮤니티, 개인 메시지에 흩어져 있습니다.', my: 'MyanMate ကို ရိုးရှင်းသော ပြဿနာတစ်ခုမှ စတင်ခဲ့ခြင်း ဖြစ်သည် - မြန်မာလူမျိုးများအတွက် ကိုရီးယားဆိုင်ရာ အချက်အလက်များ ရှိသော်လည်း ၎င်းတို့သည် တရားဝင်စာမျက်နှာများ၊ ကျောင်းကြေညာချက်များ၊ အလုပ်ခေါ်စာများ၊ ဗီဒီယိုများ၊ အသိုင်းအဝိုင်းများနှင့် ပုဂ္ဂိုလ်ရေး မက်ဆေ့ချ်များတွင် ပျံ့နှံ့နေပါသည်။' },
  'about.story.chapter1.body': { en: 'You can use MyanMate to check visa basics, study and work notes, culture, housing, daily life tips, and the questions people usually face when settling in Korea. The goal is simple: help you know what to check first, where to confirm it, and what help is available if you are still unsure.', ko: 'MyanMate에서는 비자 기본 정보, 유학과 일 관련 메모, 문화, 집, 생활 팁, 한국 정착 과정에서 자주 마주치는 질문을 확인할 수 있습니다. 목표는 단순합니다. 무엇을 먼저 확인해야 하는지, 어디에서 최종 확인해야 하는지, 그래도 불확실할 때 어떤 도움을 받을 수 있는지 알려주는 것입니다.', my: 'ဗီဇာအခြေခံအချက်အလက်၊ ကျောင်းနှင့်အလုပ်ဆိုင်ရာမှတ်စုများ၊ ယဉ်ကျေးမှု၊အိမ်ရာ၊ နေ့စဉ်ဘဝဆိုင်ရာ အကြံပြုချက်များနှင့် ကိုရီးယားတွင် အခြေချရာတွင် လူများ အများဆုံးရင်ဆိုင်ရလေ့ရှိသည့် မေးခွန်းများကို စစ်ဆေးရန် MyanMate ကို အသုံးပြုနိုင်ပါသည်။ ရည်မှန်းချက်မှာ ရိုးရှင်းပါသည် - ဘာကို အစောဆုံး စစ်ဆေးရမည်၊ ဘယ်နေရာမှာ အတည်ပြုရမည်၊ နှင့် သံသယရှိနေဆဲဆိုလျှင် မည်သည့်အကူအညီများ ရနိုင်သည်ကို သိရှိစေရန် ကူညီပေးရန် ဖြစ်ပါသည်။' },
  'about.story.chapter2.body': { en: 'There are official pages, school notices, job posts, visa rules, and community advice, but they are spread across many places. MyanMate organizes public information into clearer starting points, then points you back to official sources or licensed professionals when final confirmation is needed.', ko: '공식 페이지, 학교 공지, 채용 정보, 비자 규정, 커뮤니티 조언은 존재하지만 여러 곳에 흩어져 있습니다. MyanMate는 공개 정보를 더 이해하기 쉬운 출발점으로 정리하고, 최종 확인이 필요할 때는 공식 출처나 자격 전문가에게 확인하도록 안내합니다.', my: 'တရားဝင်စာမျက်နှာများ၊ ကျောင်းကြေညာချက်များ၊ အလုပ်ကြော်ငြာများ၊ ဗီဇာစည်းမျဉ်းများနှင့် community အကြံပြုချက်များရှိသော်လည်း နေရာများစွာတွင် ပြန့်ကျဲနေပါသည်။ MyanMate သည် အများပြည်သူသိနိုင်သောအချက်အလက်များကို ပိုမိုနားလည်လွယ်သောအစမှတ်များအဖြစ် စုစည်းပြီး နောက်ဆုံးအတည်ပြုရန်လိုအပ်သည့်အခါ တရားဝင်ရင်းမြစ်များ သို့မဟုတ် လိုင်စင်ရပညာရှင်များထံ ပြန်လည်ညွှန်ပြပါသည်။' },
  'about.story.quote': { en: 'We want MyanMate to be the first place Burmese people check when they have a Korea question.', ko: '미얀마인이 한국에 대해 궁금할 때 가장 먼저 확인하는 곳이 MyanMate가 되길 바랍니다.', my: 'မြန်မာလူမျိုးများ ကိုရီးယားနှင့်ပတ်သက်၍ မေးစရာရှိလာသည့်အခါ အရင်ဆုံးစစ်ဆေးမည့်နေရာ ဖြစ်လာစေရန် MyanMate ကို ဖြစ်စေလိုပါသည်။' },
  'about.story.chapter3.body': { en: 'One co-founder is Burmese and has lived in Korea for nearly five years, moving through student life, work, and everyday settlement. The other is Korean and understands local systems, law, and how cases are handled in Korea. Together, we turn experience and public information into practical guidance.', ko: '한 공동창업자는 한국에서 거의 5년 동안 살며 유학생활, 일, 일상 정착을 직접 경험한 미얀마인입니다. 다른 공동창업자는 한국 현지 제도와 법, 실제 사례가 처리되는 맥락을 이해하는 한국인입니다. 두 사람이 함께 경험과 공개 정보를 실용적인 안내로 바꿉니다.', my: 'ပူးတွဲတည်ထောင်သူ တစ်ဦးသည် မြန်မာလူမျိုးဖြစ်ပြီး ကိုရီးယားတွင် ကျောင်းသားဘဝ၊ အလုပ်နှင့် နေ့စဉ်အခြေချနေထိုင်မှုတို့ဖြင့် ၅ နှစ်နီးပါး နေထိုင်ခဲ့သူ ဖြစ်ပါသည်။ နောက်တစ်ဦးမှာ ကိုရီးယားလူမျိုးဖြစ်ပြီး ဒေသန္တရစနစ်များ၊ ဥပဒေများနှင့် ကိုရီးယားတွင် ကိစ္စရပ်များကို မည်သို့ကိုင်တွယ်သည်ကို နားလည်သူ ဖြစ်ပါသည်။ ဤသို့ဖြင့် ကျွန်ုပ်တို့သည် အတွေ့အကြုံများနှင့် အများပြည်သူဆိုင်ရာ အချက်အလက်များကို လက်တွေ့ကျသော လမ်းညွှန်မှုအဖြစ် ပြောင်းလဲပေးပါသည်။' },
  'about.proof.label': { en: 'Why people can trust MyanMate', ko: 'MyanMate를 신뢰할 수 있는 이유', my: 'MyanMate ကို ယုံကြည်နိုင်သည့်အကြောင်းရင်း' },
  'about.proof.item1': { en: 'Myanmar-first information', ko: '미얀마인을 우선한 정보', my: 'မြန်မာလူမျိုးများအတွက် ဦးစားပေးအချက်အလက်' },
  'about.proof.item2': { en: 'Nearly 5 years of lived Korea experience', ko: '거의 5년의 실제 한국 생활 경험', my: 'ကိုရီးယားတွင် ၅ နှစ်နီးပါး နေထိုင်ဖူးသည့် အတွေ့အကြုံ' },
  'about.proof.item3': { en: 'Korean local context and system knowledge', ko: '한국 현지 맥락과 제도 이해', my: 'ကိုရီးယားဒေသအခြေအနေနှင့် စနစ်များကို နားလည်မှု' },
  'about.cta.note': { en: 'Start with the guides. If your situation is still unclear, choose a DM channel and ask without sending sensitive numbers.', ko: '먼저 정보를 확인해 보세요. 그래도 내 상황이 불확실하다면 민감번호 없이 편한 DM 채널로 문의하세요.', my: 'လမ်းညွှန်ချက်များဖြင့် စတင်ပါ။ သင့်အခြေအနေမှာ မသေချာသေးပါက DM ချန်နယ်တစ်ခုကို ရွေးချယ်ပြီး အရေးကြီးနံပါတ်များကို မပို့ဘဲ မေးမြန်းပါ။' },

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
