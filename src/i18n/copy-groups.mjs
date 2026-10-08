import references from './reference.json' with { type: 'json' };

// Fixed groups keep translation IDs out of the editor's editable fields.
const definitions = [
  ['home', '홈페이지', '/'],
  ['courses', '과정 소개 · 한글 / TOPIK', '/courses/hangul'],
  ['speaking', '말하기 과정', '/courses/speaking'],
  ['teachers', '강사 소개', '/#teachers'],
  ['enrollment', '수강 안내', '/#enrollment'],
  ['faq', '자주 묻는 질문', '/'],
  ['application', '신청서 · 안내와 오류 메시지', '/apply'],
  ['common', '메뉴 · 버튼 · 공통 문구', '/'],
  ['privacy', '개인정보 · 동의와 면책', '/privacy'],
  ['blog', '블로그 화면', '/blog'],
  ['reviews', '후기 화면', '/reviews'],
  ['contact', '문의 화면', '/contact'],
  ['about', 'MyanMate 소개', '/about'],
  ['guides', '정보 · 가이드 화면', '/guides'],
  ['services', '기존 서비스 화면', '/services'],
  ['legacyHome', '이전 화면 문구 · 보관용', '/'],
];

function groupFor(key) {
  if (['learn.nav', 'learn.kicker', 'learn.now', 'learn.hello', 'learn.helloWord', 'learn.helloMeaning', 'learn.soon', 'learn.group', 'learn.groupBody', 'redesign.classPhotoPending'].includes(key)) return 'legacyHome';
  if (key === 'footer.disclaimer' || key === 'content.disclaimer' || key.startsWith('privacy.') || key.startsWith('svcDetail.dont') || key === 'apply.consent') return 'privacy';
  if (/^learn\.(faq|step)/.test(key)) return key.startsWith('learn.faq') ? 'faq' : 'enrollment';
  if (/^learn\.(moe|lee|teachers)/.test(key)) return 'teachers';
  if (/^learn\.blog/.test(key) || key === 'redesign.blogAll') return 'blog';
  if (key.startsWith('course.speaking.') || key.startsWith('learn.speaking')) return 'speaking';
  if (key.startsWith('course.') || /^learn\.(courses|courseLead|hangul|topik)/.test(key)) return 'courses';
  if (key.startsWith('redesign.')) {
    const name = key.slice('redesign.'.length);
    if (/Faq$|Answer$|^faqTitle$/.test(name)) return 'faq';
    if (['stepsLead', 'noCommitment', 'howStart', 'speakingStepsLead'].includes(name)) return 'enrollment';
    if (/^(teachersLead|moeRole|junRole|moeOrigin|junOrigin|moeCredential|junCredential|moePractice|junPractice|compareTracks|teacherIntro|photoPending)$/.test(name)) return 'teachers';
    if (/^(speaking|tracks|track|moeFit|junFit|moeLearn|junLearn|moeApply|junApply|ability|whatLearn|learn[123]|moeTrackRole)/.test(name)) return 'speaking';
    if (/Goal$|^(level|duration|goal|shortHangul|shortSpeaking)$/.test(name)) return 'courses';
    if (/^nav/.test(name)) return 'common';
    if (name === 'chooseLater') return 'application';
    return 'home';
  }
  const prefix = key.split('.')[0];
  return ({
    home: 'legacyHome', learn: 'home', apply: 'application', request: 'application',
    nav: 'common', ui: 'common', btn: 'common', mobileCta: 'common', footer: 'common', motion: 'common',
    blog: 'blog', reviews: 'reviews', dm: 'contact', about: 'about', story: 'about',
    guides: 'guides', infoHub: 'guides', infoTopic: 'guides', visaPurpose: 'guides', content: 'guides',
    services: 'services', svcDetail: 'services',
  })[prefix];
}

export const copyGroups = definitions.map(([id, label, previewUrl]) => ({
  id, label, previewUrl,
  keys: Object.keys(references).filter(key => groupFor(key) === id),
}));

const homeOrder = ['learn.title', 'learn.lead', 'learn.apply', 'learn.browse', 'redesign.reply', 'redesign.private', 'redesign.unsure'];
const homeRank = key => homeOrder.includes(key) ? homeOrder.indexOf(key) : homeOrder.length;
copyGroups.find(group => group.id === 'home').keys.sort((a, b) => homeRank(a) - homeRank(b));

const grouped = copyGroups.flatMap(group => group.keys);
if (grouped.length !== Object.keys(references).length || new Set(grouped).size !== grouped.length) {
  throw new Error('Every UI translation must belong to exactly one review group.');
}
