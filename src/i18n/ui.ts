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
