/* =========================================================================
   MyanMate · active services (code-driven)
   Visible copy lives in ui.ts. This file only defines page structure and
   trusted external destinations so the service pages stay consistent.
   ========================================================================= */

export type ServiceId = 'resume' | 'housing';

export interface ServiceInfoItem {
  iconKey: string;
  titleKey: string;
  bodyKey: string;
  href?: string;
}

export interface ServiceInfoSection {
  id: string;
  iconKey: string;
  titleKey: string;
  introKey?: string;
  items: ServiceInfoItem[];
}

export interface Service {
  id: ServiceId;
  iconKey: string;
  nameKey: string;
  descKey: string;
  reviewTagKey: string;
  contentSections: ServiceInfoSection[];
}

const HOUSING_HUG_URL = 'https://www.khug.or.kr/jeonse/web/s01/s010102.jsp';
const HOUSING_TRANSACTIONS_URL = 'https://rt.molit.go.kr/';
const WORK24_RESUME_URL = 'https://www.work24.go.kr/wk/r/d/1111/resumeSelfIntroGuide2.do';
const WORK24_URL = 'https://www.work24.go.kr/';
const JOB_STABILITY_ACT_URL = 'https://www.law.go.kr/LSW/LsiJoLinkP.do?docType=JO&joNo=001900000&languageType=KO&lsNm=%EC%A7%81%EC%97%85%EC%95%88%EC%A0%95%EB%B2%95&paras=1';
const HIKOREA_WORK_URL = 'https://www.hikorea.go.kr/cvlappl/cvlapplInfoR.pt?CAT_SEQ=1818';
const MOEL_CONTRACT_URL = 'https://moel.go.kr/mainpop2.do';

export const services: Service[] = [
  {
    id: 'resume',
    iconKey: 'resumeSvc',
    nameKey: 'svc.resume.name',
    descKey: 'svc.resume.desc',
    reviewTagKey: 'ui.tag.resumeJob',
    contentSections: [
      {
        id: 'resume-basics',
        iconKey: 'doc',
        titleKey: 'svc.resume.info.basics.title',
        introKey: 'svc.resume.info.basics.intro',
        items: [
          { iconKey: 'users', titleKey: 'svc.resume.info.basics.identity.title', bodyKey: 'svc.resume.info.basics.identity.body' },
          { iconKey: 'jobs', titleKey: 'svc.resume.info.basics.target.title', bodyKey: 'svc.resume.info.basics.target.body' },
          { iconKey: 'list', titleKey: 'svc.resume.info.basics.history.title', bodyKey: 'svc.resume.info.basics.history.body' },
          { iconKey: 'star', titleKey: 'svc.resume.info.basics.skills.title', bodyKey: 'svc.resume.info.basics.skills.body' },
        ],
      },
      {
        id: 'resume-experience',
        iconKey: 'star',
        titleKey: 'svc.resume.info.experience.title',
        introKey: 'svc.resume.info.experience.intro',
        items: [
          { iconKey: 'list', titleKey: 'svc.resume.info.experience.role.title', bodyKey: 'svc.resume.info.experience.role.body' },
          { iconKey: 'check', titleKey: 'svc.resume.info.experience.action.title', bodyKey: 'svc.resume.info.experience.action.body' },
          { iconKey: 'star', titleKey: 'svc.resume.info.experience.result.title', bodyKey: 'svc.resume.info.experience.result.body' },
          { iconKey: 'external', titleKey: 'svc.resume.source.work24guide.title', bodyKey: 'svc.resume.source.work24guide.body', href: WORK24_RESUME_URL },
        ],
      },
      {
        id: 'resume-job-posting',
        iconKey: 'search',
        titleKey: 'svc.resume.info.posting.title',
        introKey: 'svc.resume.info.posting.intro',
        items: [
          { iconKey: 'jobs', titleKey: 'svc.resume.info.posting.work.title', bodyKey: 'svc.resume.info.posting.work.body' },
          { iconKey: 'daily', titleKey: 'svc.resume.info.posting.schedule.title', bodyKey: 'svc.resume.info.posting.schedule.body' },
          { iconKey: 'doc', titleKey: 'svc.resume.info.posting.pay.title', bodyKey: 'svc.resume.info.posting.pay.body' },
          { iconKey: 'korean', titleKey: 'svc.resume.info.posting.requirements.title', bodyKey: 'svc.resume.info.posting.requirements.body' },
        ],
      },
      {
        id: 'resume-sources',
        iconKey: 'external',
        titleKey: 'svc.resume.info.sources.title',
        introKey: 'svc.resume.info.sources.intro',
        items: [
          { iconKey: 'search', titleKey: 'svc.resume.source.work24.title', bodyKey: 'svc.resume.source.work24.body', href: WORK24_URL },
          { iconKey: 'doc', titleKey: 'svc.resume.source.law.title', bodyKey: 'svc.resume.source.law.body', href: JOB_STABILITY_ACT_URL },
        ],
      },
      {
        id: 'resume-before-applying',
        iconKey: 'check',
        titleKey: 'svc.resume.info.before.title',
        introKey: 'svc.resume.info.before.intro',
        items: [
          { iconKey: 'visa', titleKey: 'svc.resume.source.hikorea.title', bodyKey: 'svc.resume.source.hikorea.body', href: HIKOREA_WORK_URL },
          { iconKey: 'doc', titleKey: 'svc.resume.source.moel.title', bodyKey: 'svc.resume.source.moel.body', href: MOEL_CONTRACT_URL },
          { iconKey: 'help', titleKey: 'svc.resume.info.before.privacy.title', bodyKey: 'svc.resume.info.before.privacy.body' },
        ],
      },
    ],
  },
  {
    id: 'housing',
    iconKey: 'housing',
    nameKey: 'svc.housing.name',
    descKey: 'svc.housing.desc',
    reviewTagKey: 'ui.tag.housingCompanion',
    contentSections: [
      {
        id: 'housing-inside',
        iconKey: 'housing',
        titleKey: 'svc.housing.info.inside.title',
        introKey: 'svc.housing.info.inside.intro',
        items: [
          { iconKey: 'daily', titleKey: 'svc.housing.info.inside.light.title', bodyKey: 'svc.housing.info.inside.light.body' },
          { iconKey: 'search', titleKey: 'svc.housing.info.inside.moisture.title', bodyKey: 'svc.housing.info.inside.moisture.body' },
          { iconKey: 'help', titleKey: 'svc.housing.info.inside.noise.title', bodyKey: 'svc.housing.info.inside.noise.body' },
          { iconKey: 'check', titleKey: 'svc.housing.info.inside.water.title', bodyKey: 'svc.housing.info.inside.water.body' },
          { iconKey: 'housing', titleKey: 'svc.housing.info.inside.windows.title', bodyKey: 'svc.housing.info.inside.windows.body' },
          { iconKey: 'list', titleKey: 'svc.housing.info.inside.storage.title', bodyKey: 'svc.housing.info.inside.storage.body' },
        ],
      },
      {
        id: 'housing-building',
        iconKey: 'topics',
        titleKey: 'svc.housing.info.building.title',
        introKey: 'svc.housing.info.building.intro',
        items: [
          { iconKey: 'check', titleKey: 'svc.housing.info.building.entry.title', bodyKey: 'svc.housing.info.building.entry.body' },
          { iconKey: 'daily', titleKey: 'svc.housing.info.building.shared.title', bodyKey: 'svc.housing.info.building.shared.body' },
          { iconKey: 'list', titleKey: 'svc.housing.info.building.waste.title', bodyKey: 'svc.housing.info.building.waste.body' },
          { iconKey: 'housing', titleKey: 'svc.housing.info.building.facilities.title', bodyKey: 'svc.housing.info.building.facilities.body' },
        ],
      },
      {
        id: 'housing-neighborhood',
        iconKey: 'daily',
        titleKey: 'svc.housing.info.area.title',
        introKey: 'svc.housing.info.area.intro',
        items: [
          { iconKey: 'jobs', titleKey: 'svc.housing.info.area.commute.title', bodyKey: 'svc.housing.info.area.commute.body' },
          { iconKey: 'daily', titleKey: 'svc.housing.info.area.late.title', bodyKey: 'svc.housing.info.area.late.body' },
          { iconKey: 'help', titleKey: 'svc.housing.info.area.daily.title', bodyKey: 'svc.housing.info.area.daily.body' },
          { iconKey: 'search', titleKey: 'svc.housing.info.area.walk.title', bodyKey: 'svc.housing.info.area.walk.body' },
        ],
      },
      {
        id: 'housing-compare',
        iconKey: 'list',
        titleKey: 'svc.housing.info.compare.title',
        introKey: 'svc.housing.info.compare.intro',
        items: [
          { iconKey: 'housing', titleKey: 'svc.housing.info.compare.location.title', bodyKey: 'svc.housing.info.compare.location.body' },
          { iconKey: 'daily', titleKey: 'svc.housing.info.compare.convenience.title', bodyKey: 'svc.housing.info.compare.convenience.body' },
          { iconKey: 'search', titleKey: 'svc.housing.info.compare.condition.title', bodyKey: 'svc.housing.info.compare.condition.body' },
          { iconKey: 'star', titleKey: 'svc.housing.info.compare.priority.title', bodyKey: 'svc.housing.info.compare.priority.body' },
        ],
      },
      {
        id: 'housing-official',
        iconKey: 'external',
        titleKey: 'svc.housing.info.official.title',
        introKey: 'svc.housing.info.official.intro',
        items: [
          { iconKey: 'external', titleKey: 'svc.housing.source.hug.title', bodyKey: 'svc.housing.source.hug.body', href: HOUSING_HUG_URL },
          { iconKey: 'external', titleKey: 'svc.housing.source.transactions.title', bodyKey: 'svc.housing.source.transactions.body', href: HOUSING_TRANSACTIONS_URL },
          { iconKey: 'help', titleKey: 'svc.housing.info.official.boundary.title', bodyKey: 'svc.housing.info.official.boundary.body' },
        ],
      },
    ],
  },
];

export const serviceById = (id: string): Service | undefined => services.find((s) => s.id === id);

/** Which service a guide category should suggest after the free information. */
export const categoryToService: Partial<Record<string, ServiceId>> = {
  jobs: 'resume',
  housing: 'housing',
};
