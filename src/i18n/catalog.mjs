import references from './reference.json' with { type: 'json' };
import { copyGroups } from './copy-groups.mjs';

/** Assemble the same dictionary for server rendering and client language switching. */
export function createUi(documents) {
  const expectedGroups = new Set(copyGroups.map(group => group.id));
  for (const id of Object.keys(documents)) {
    if (!expectedGroups.has(id)) throw new Error(`Unknown Myanmar copy group: ${id}`);
  }
  const translations = {};
  for (const group of copyGroups) {
    const document = documents[group.id];
    if (!document || typeof document !== 'object' || Array.isArray(document)) throw new Error(`Missing Myanmar copy group: ${group.id}`);
    if (Object.keys(document).some(key => key !== 'translations')) throw new Error(`Unexpected data in Myanmar copy group: ${group.id}`);
    const entries = document.translations;
    if (!entries || typeof entries !== 'object' || Array.isArray(entries)) throw new Error(`Missing translations: ${group.id}`);
    const expectedKeys = new Set(group.keys);
    for (const key of Object.keys(entries)) {
      if (!expectedKeys.has(key)) throw new Error(`Unknown or misplaced translation: ${key}`);
    }
    for (const key of group.keys) {
      const entry = entries[key];
      if (!entry || typeof entry.value !== 'string' || !entry.value.trim()) throw new Error(`Missing or blank Myanmar translation: ${key}`);
      if (typeof entry.reviewed !== 'boolean') throw new Error(`Missing review status: ${key}`);
      if (Object.keys(entry).some(field => !['value', 'reviewed'].includes(field))) throw new Error(`Unexpected translation data: ${key}`);
      translations[key] = entry.value;
    }
  }
  return Object.fromEntries(Object.entries(references).map(([key, entry]) => [key, { ...entry, my: translations[key] }]));
}

// Invalidate cached public copy when wording changes, not when a review box changes.
export function revisionFor(ui) {
  let hash = 2166136261;
  const text = JSON.stringify(ui);
  for (let index = 0; index < text.length; index++) hash = Math.imul(hash ^ text.charCodeAt(index), 16777619) >>> 0;
  return hash.toString(36);
}
