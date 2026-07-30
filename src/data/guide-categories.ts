import type { LocalizedText } from '../lib/content';

export type GuideCategoryId = 'visa' | 'study' | 'work' | 'daily-life';

export interface GuideCategory {
  id: GuideCategoryId;
  href: string;
  icon: string;
  image: string;
  title: LocalizedText;
  summary: LocalizedText;
  focus: LocalizedText[];
}

export const guideCategories: GuideCategory[] = [
  {
    id: 'visa',
    href: '/guides/visa',
    icon: 'visa',
    image: '/images/guides/visa.png',
    title: {
      en: 'Visa',
      ko: '비자',
      my: 'ဗီဇာ',
    },
    summary: {
      en: 'Understand stay status, required documents, application steps, reporting duties, and common visa cautions before making a decision.',
      ko: '체류자격, 필요 서류, 신청 절차, 신고 의무와 자주 놓치는 주의사항을 결정 전에 확인할 수 있게 정리합니다.',
      my: 'နေထိုင်ခွင့်အမျိုးအစား၊ လိုအပ်သောစာရွက်စာတမ်း၊ လျှောက်ထားပုံ၊ တင်ပြရန်တာဝန်နှင့် သတိပြုရန်အချက်များကို ဆုံးဖြတ်ချက်မချမီ နားလည်နိုင်အောင် စုစည်းထားပါသည်။',
    },
    focus: [
      {
        en: 'Student, job-seeking, work, and family visa basics',
        ko: '유학·구직·취업·가족 비자 기본 정보',
        my: 'ကျောင်းသား၊ အလုပ်ရှာ၊ အလုပ်နှင့် မိသားစုဗီဇာ အခြေခံများ',
      },
      {
        en: 'Official-source reminders and legal boundaries',
        ko: '공식 출처 확인과 법적 주의 범위',
        my: 'တရားဝင်ရင်းမြစ်စစ်ဆေးမှုနှင့် ဥပဒေဆိုင်ရာ သတိပြုရန်အချက်များ',
      },
    ],
  },
  {
    id: 'study',
    href: '/guides/study',
    icon: 'study',
    image: '/images/guides/study.png',
    title: {
      en: 'Study',
      ko: '유학',
      my: 'ပညာသင်',
    },
    summary: {
      en: 'Compare schools, Korean-language preparation, scholarships, applications, student insurance, and first-arrival tasks in Korea.',
      ko: '학교 선택, 한국어 준비, 장학금, 지원 절차, 유학생 보험과 입국 초기 준비를 비교할 수 있게 정리합니다.',
      my: 'TOPIK၊ KIIP၊ Scholarship၊ ကျောင်းရွေးချယ်မှု၊ လျှောက်ထားရန်ပြင်ဆင်မှုနှင့် ကိုရီးယားမလာခင် စစ်ထားသင့်သောအချက်များကို စုစည်းထားပါသည်။',
    },
    focus: [
      {
        en: 'University, language school, scholarship, and TOPIK topics',
        ko: '대학·어학당·장학금·TOPIK 주제',
        my: 'တက္ကသိုလ်၊ ဘာသာစကားကျောင်း၊ Scholarship နှင့် TOPIK အကြောင်းအရာများ',
      },
      {
        en: 'What students should confirm before applying',
        ko: '지원 전에 유학생이 확인해야 할 내용',
        my: 'မလျှောက်ထားမီ ကျောင်းသားများ စစ်ဆေးသင့်သောအချက်များ',
      },
    ],
  },
  {
    id: 'work',
    href: '/guides/work',
    icon: 'jobs',
    image: '/images/guides/work.png',
    title: {
      en: 'Work',
      ko: '일·취업',
      my: 'အလုပ်',
    },
    summary: {
      en: 'Read practical information about part-time jobs, contracts, pay, resumes, interviews, and safe job-search habits.',
      ko: '아르바이트, 근로계약, 급여, 이력서, 면접과 안전한 구직 확인 습관을 실용적으로 정리합니다.',
      my: 'Part-time အလုပ်၊ အလုပ်စာချုပ်၊ လစာ၊ ကိုယ်ရေးရာဇဝင်၊ Interview နှင့် လုံခြုံသောအလုပ်ရှာဖွေနည်းများကို လက်တွေ့အသုံးဝင်အောင် စုစည်းထားပါသည်။',
    },
    focus: [
      {
        en: 'Part-time work, career preparation, and worker rights basics',
        ko: '아르바이트·취업 준비·근로조건 기본 정보',
        my: 'Part-time အလုပ်၊ Career ပြင်ဆင်မှုနှင့် အလုပ်သမားအခွင့်အရေး အခြေခံများ',
      },
      {
        en: 'When to use resume, interview, or job-support services',
        ko: '이력서·면접·구직 지원 서비스가 필요한 경우',
        my: 'Resume၊ Interview သို့မဟုတ် အလုပ်ရှာအကူအညီ လိုအပ်နိုင်သောအခြေအနေများ',
      },
    ],
  },
  {
    id: 'daily-life',
    href: '/guides/daily-life',
    icon: 'daily',
    image: '/images/guides/daily-life.png',
    title: {
      en: 'Daily Life',
      ko: '생활',
      my: 'နေ့စဉ်ဘဝ',
    },
    summary: {
      en: 'Find plain-language guidance for housing, healthcare, foreigner registration, address changes, transport, apps, and everyday Korea life.',
      ko: '주거, 건강보험·병원, 외국인등록, 주소 변경, 교통, 앱과 한국 생활 정보를 쉽게 확인할 수 있게 정리합니다.',
      my: 'နေအိမ်၊ ကျန်းမာရေးအာမခံနှင့် ဆေးရုံ၊ နိုင်ငံခြားသားမှတ်ပုံတင်၊ လိပ်စာပြောင်းခြင်း၊ သွားလာရေး၊ App များနှင့် ကိုရီးယားနေ့စဉ်ဘဝအချက်အလက်များကို ရိုးရှင်းစွာ စုစည်းထားပါသည်။',
    },
    focus: [
      {
        en: 'Housing, health insurance, ARC, and local-life checks',
        ko: '주거·건강보험·외국인등록증·생활 확인사항',
        my: 'နေအိမ်၊ ကျန်းမာရေးအာမခံ၊ ARC နှင့် နေ့စဉ်ဘဝ စစ်ဆေးရန်အချက်များ',
      },
      {
        en: 'Useful information for people already in Korea and people preparing to come',
        ko: '이미 한국에 있는 사람과 입국 준비 중인 사람 모두를 위한 정보',
        my: 'ကိုရီးယားတွင်ရှိပြီးသူများနှင့် လာရန်ပြင်ဆင်နေသူများ နှစ်ဖက်စလုံးအတွက် အချက်အလက်များ',
      },
    ],
  },
];

export const guideCategoryById = (id: GuideCategoryId): GuideCategory => {
  const category = guideCategories.find((item) => item.id === id);
  if (!category) throw new Error(`Unknown guide category: ${id}`);
  return category;
};
