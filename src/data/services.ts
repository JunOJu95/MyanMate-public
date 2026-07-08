/* =========================================================================
   MyanMate · services (3-tier lineup, code-driven)
   Copy lives in ui.ts (svc.* keys, preserved from the delivered design) so we
   keep a single i18n source — services are NOT in the CMS (their copy would
   otherwise duplicate ui.ts). Guides + reviews ARE in the CMS.
   ========================================================================= */

export type ServiceId = 'house' | 'visa' | 'resume';

export interface Service {
  id: ServiceId;
  iconKey: string; // key in src/lib/icons.ts
  nameKey: string;
  descKey: string;
  priceKey: string;
  durationKey: string;
  reviewTagKey: string;
  /** how-it-works step keys (generic, compliance-safe) */
  howKeys: string[];
  /** FAQ Q/A key pairs */
  faqKeys: Array<{ q: string; a: string }>;
}

export const services: Service[] = [
  {
    id: 'house',
    iconKey: 'houseSvc',
    nameKey: 'svc.house.name',
    descKey: 'svc.house.desc',
    priceKey: 'svc.house.price',
    durationKey: 'svc.house.duration',
    reviewTagKey: 'ui.tag.houseVisit',
    howKeys: ['svcDetail.how.step1', 'svcDetail.how.step2', 'svcDetail.how.step3'],
    faqKeys: [
      { q: 'svcDetail.faq.q1', a: 'svcDetail.faq.a1' },
      { q: 'svcDetail.faq.q2', a: 'svcDetail.faq.a2' },
    ],
  },
  {
    id: 'visa',
    iconKey: 'visaSvc',
    nameKey: 'svc.visa.name',
    descKey: 'svc.visa.desc',
    priceKey: 'svc.visa.price',
    durationKey: 'svc.visa.duration',
    reviewTagKey: 'ui.tag.visaResearch',
    howKeys: ['svcDetail.how.step1', 'svcDetail.how.step2', 'svcDetail.how.step3'],
    faqKeys: [
      { q: 'svcDetail.faq.q1', a: 'svcDetail.faq.a1' },
      { q: 'svcDetail.faq.q2', a: 'svcDetail.faq.a2' },
    ],
  },
  {
    id: 'resume',
    iconKey: 'resumeSvc',
    nameKey: 'svc.resume.name',
    descKey: 'svc.resume.desc',
    priceKey: 'svc.resume.price',
    durationKey: 'svc.resume.duration',
    reviewTagKey: 'ui.tag.resumeJob',
    howKeys: ['svcDetail.how.step1', 'svcDetail.how.step2', 'svcDetail.how.step3'],
    faqKeys: [
      { q: 'svcDetail.faq.q1', a: 'svcDetail.faq.a1' },
      { q: 'svcDetail.faq.q2', a: 'svcDetail.faq.a2' },
    ],
  },
];

export const serviceById = (id: string): Service | undefined => services.find((s) => s.id === id);

/** Which service a guide category should upsell (content detail CTA → service detail). */
export const categoryToService: Record<string, ServiceId> = {
  visa: 'visa',
  jobs: 'resume',
  housing: 'house',
  korean: 'visa',
  daily: 'visa',
};
