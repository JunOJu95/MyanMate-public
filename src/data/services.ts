/* =========================================================================
   MyanMate · active service routes and fixed presentation metadata
   Editable page content lives in Keystatic singletons under src/content/services.
   ========================================================================= */

export type ServiceId = 'resume' | 'housing';

export interface Service {
  id: ServiceId;
  iconKey: string;
  reviewTagKey: string;
}

export const services: Service[] = [
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
  jobs: 'resume',
  housing: 'housing',
};
