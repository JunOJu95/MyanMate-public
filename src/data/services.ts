/* =========================================================================
   MyanMate · active service routes and fixed presentation metadata
   Editable information lives under src/content/services. Editable 1:1 guidance
   offers live under src/content/service-offers.
   ========================================================================= */

export const serviceIds = ['visa', 'resume', 'housing'] as const;
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
    id: 'visa',
    iconKey: 'visa',
    reviewTagKey: 'ui.tag.visaResearch',
  },
  {
    id: 'resume',
    iconKey: 'resumeSvc',
    reviewTagKey: 'ui.tag.resumeJob',
  },
  {
    id: 'housing',
    iconKey: 'housing',
    reviewTagKey: 'ui.tag.housingCompanion',
  },
];

export const serviceById = (id: string): Service | undefined => services.find((service) => service.id === id);

/** Which service a guide category should suggest after the free information. */
export const categoryToService: Partial<Record<string, ServiceId>> = {
  visa: 'visa',
  jobs: 'resume',
  housing: 'housing',
};
