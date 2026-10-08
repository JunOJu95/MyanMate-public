/**
 * Public translation API: stable keys and the existing EN/KO/MY language switch.
 * EN/KO references live in reference.json. Myanmar wording is edited in
 * Keystatic and stored once in src/content/ui-copy/*.json.
 */
import references from './reference.json';
import { createUi, revisionFor } from './catalog.mjs';

export const languages = ['en', 'ko', 'my'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'my';

/** Language switch order + labels shown in the toggle (matches the delivered design). */
export const langSwitch: ReadonlyArray<{ code: Lang; label: string }> = [
  { code: 'my', label: 'MM' },
  { code: 'ko', label: 'KO' },
  { code: 'en', label: 'EN' },
];

/** BCP-47 tags for <html lang> / hreflang (used now for lang attr, later for hreflang URLs). */
export const htmlLang: Record<Lang, string> = { en: 'en', ko: 'ko', my: 'my' };

type Entry = Record<Lang, string>;

const files = import.meta.glob('../content/ui-copy/*.json', { eager: true, import: 'default' });
const documents = Object.fromEntries(Object.entries(files).map(([path, data]) => [path.split('/').pop()!.replace(/\.json$/, ''), data]));
export const ui = createUi(documents) as Record<keyof typeof references, Entry>;
export const uiRevision: string = revisionFor(ui);

export type UIKey = keyof typeof ui;

const dict: Record<string, Entry> = ui;

/** Translate a key into the given language, falling back to EN, then to the key itself. */
export function t(key: string, lang: Lang = defaultLang): string {
  const entry = dict[key];
  if (!entry) {
    if (import.meta.env?.DEV) console.warn(`[i18n] missing key: ${key}`);
    return '';
  }
  return entry[lang] ?? entry.en ?? '';
}

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (languages as readonly string[]).includes(value);
}
