/* =========================================================================
   MyanMate · active services (code-driven)
   Copy lives in ui.ts (svc.* keys, preserved from the delivered design) so we
   keep a single i18n source — services are NOT in the CMS (their copy would
   otherwise duplicate ui.ts). Guides + reviews ARE in the CMS.
   ========================================================================= */

export type ServiceId = 'visa' | 'resume' | 'housing';

export interface Service {
  id: ServiceId;
  iconKey: string; // key in src/lib/icons.ts
  nameKey: string;
  descKey: string;
  priceKey: string;
  durationKey: string;
  reviewTagKey: string;
  deliverableKeys?: string[];
  pricingKeys?: string[];
  confirmationKeys?: string[];
  /** how-it-works step keys (generic, compliance-safe) */
  howKeys: string[];
  /** FAQ Q/A key pairs */
  faqKeys: Array<{ q: string; a: string }>;
}

export const services: Service[] = [
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
  {
    id: 'housing',
    iconKey: 'housing',
    nameKey: 'svc.housing.name',
    descKey: 'svc.housing.desc',
    priceKey: 'svc.housing.price',
    durationKey: 'svc.housing.duration',
    reviewTagKey: 'ui.tag.housingCompanion',
    deliverableKeys: [
      'svc.housing.deliverable.notes',
      'svc.housing.deliverable.condition',
      'svc.housing.deliverable.access',
      'svc.housing.deliverable.costs',
      'svc.housing.deliverable.compare',
      'svc.housing.deliverable.opinion',
    ],
    pricingKeys: [
      'svc.housing.pricing.base',
      'svc.housing.pricing.included',
      'svc.housing.pricing.regardless',
      'svc.housing.pricing.extraHome',
      'svc.housing.pricing.overtime',
      'svc.housing.pricing.travel',
    ],
    confirmationKeys: [
      'svc.housing.confirm.selfBooked',
      'svc.housing.confirm.noListings',
      'svc.housing.confirm.noNegotiation',
      'svc.housing.confirm.noContractReview',
      'svc.housing.confirm.visibleOnly',
      'svc.housing.confirm.feeRegardless',
      'svc.housing.confirm.noReferralFee',
    ],
    howKeys: [
      'svc.housing.how.step1',
      'svc.housing.how.step2',
      'svc.housing.how.step3',
      'svc.housing.how.step4',
      'svc.housing.how.step5',
      'svc.housing.how.step6',
    ],
    faqKeys: [
      { q: 'svc.housing.faq.q1', a: 'svc.housing.faq.a1' },
      { q: 'svc.housing.faq.q2', a: 'svc.housing.faq.a2' },
      { q: 'svc.housing.faq.q3', a: 'svc.housing.faq.a3' },
      { q: 'svc.housing.faq.q4', a: 'svc.housing.faq.a4' },
    ],
  },
];

export const serviceById = (id: string): Service | undefined => services.find((s) => s.id === id);

/** Which service a guide category should upsell (content detail CTA → service detail). */
export const categoryToService: Partial<Record<string, ServiceId>> = {
  visa: 'visa',
  jobs: 'resume',
  housing: 'housing',
};
