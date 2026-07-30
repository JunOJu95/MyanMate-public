/* =========================================================================
   MyanMate · active service routes and fixed presentation metadata
   Editable information lives under src/content/services. Editable 1:1 guidance
   offers live under src/content/service-offers.
   ========================================================================= */

export const serviceIds = ['part-time-job', 'career', 'interview', 'portfolio', 'housing'] as const;
export type ServiceId = (typeof serviceIds)[number];

/** Standalone long-form information pages managed through Keystatic. */
export const serviceInfoIds = [
  'resume',
  'housing',
  'work-pay',
  'healthcare',
  'life-admin',
  'address-change-after-moving',
  'phone-sim',
  'public-transportation',
  'emergency-numbers',
  'student-part-time-work-permit',
  'find-part-time-jobs-safely',
  'minimum-wage-salary-check',
  'employment-contract-basics',
] as const;
export type ServiceInfoId = (typeof serviceInfoIds)[number];

export interface Service {
  id: ServiceId;
  iconKey: string;
  reviewTagKey: string;
}

export const services: Service[] = [
  {
    id: 'part-time-job',
    iconKey: 'jobs',
    reviewTagKey: 'ui.tag.partTimeJob',
  },
  {
    id: 'career',
    iconKey: 'resumeSvc',
    reviewTagKey: 'ui.tag.careerSupport',
  },
  {
    id: 'interview',
    iconKey: 'users',
    reviewTagKey: 'ui.tag.interviewCoaching',
  },
  {
    id: 'portfolio',
    iconKey: 'doc',
    reviewTagKey: 'ui.tag.portfolioSupport',
  },
  {
    id: 'housing',
    iconKey: 'housing',
    reviewTagKey: 'ui.tag.housingCompanion',
  },
];

const legacyServiceAliases: Record<string, Service> = {
  resume: {
    id: 'career',
    iconKey: 'resumeSvc',
    reviewTagKey: 'ui.tag.careerSupport',
  },
};

export const serviceById = (id: string): Service | undefined => (
  services.find((service) => service.id === id) ?? legacyServiceAliases[id]
);

/** Which service a guide category should suggest after the free information. */
export const categoryToService: Partial<Record<string, ServiceId>> = {
  jobs: 'part-time-job',
  housing: 'housing',
};
