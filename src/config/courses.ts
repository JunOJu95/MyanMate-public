// Shared by the course list, details and application form.
export const courseIds = ['hangul', 'topik', 'topik2', 'speaking'] as const;
export type CourseId = typeof courseIds[number];
export function isCourseId(value: unknown): value is CourseId {
  return typeof value === 'string' && courseIds.some(id => id === value);
}
