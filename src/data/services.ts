/* =========================================================================
   MyanMate · active service routes and fixed presentation metadata
   Editable information lives under src/content/services. Editable 1:1 guidance
   offers live under src/content/service-offers.
   ========================================================================= */

export const serviceIds = ['part-time-job', 'career', 'portfolio', 'study', 'housing'] as const;
export type ServiceId = (typeof serviceIds)[number];

/** Only resume and housing have standalone long-form information singletons. */
export const serviceInfoIds = ['resume', 'housing'] as const;
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
    id: 'portfolio',
    iconKey: 'doc',
    reviewTagKey: 'ui.tag.portfolioSupport',
  },
  {
    id: 'study',
    iconKey: 'korean',
    reviewTagKey: 'ui.tag.studySupport',
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
  visa: 'study',
  jobs: 'part-time-job',
  housing: 'housing',
};
