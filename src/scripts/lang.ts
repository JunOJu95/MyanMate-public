/* =========================================================================
   MyanMate · client language runtime
   - Instant EN/MM/KO toggle (no reload), persisted to localStorage.
   - Extends the delivered app.js behavior: swaps textContent for [data-i18n]
     AND placeholder/aria-label/value for [data-i18n-ph|aria|value]
     (the original only handled textContent — forms need the rest).
   - Multilingual long-form CONTENT (guides) is shown/hidden via CSS on
     body.lang-* (see global.css [data-lang]); this file only drives UI strings.
   - Works without JS too: server renders EN (the default), JS just switches.
   ========================================================================= */
import { ui, defaultLang, isLang, htmlLang, type Lang } from '../i18n/ui';

const STORAGE_KEY = 'mm-lang';
const dict = ui as Record<string, Record<string, string>>;

export function applyLang(input: string): void {
  const lang: Lang = isLang(input) ? input : defaultLang;
  (window as unknown as { __lang: Lang }).__lang = lang;

  const html = document.documentElement;
  html.lang = htmlLang[lang] ?? lang;
  document.body.classList.remove('lang-en', 'lang-ko', 'lang-my');
  document.body.classList.add('lang-' + lang);

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const e = dict[el.getAttribute('data-i18n') as string];
    if (e && e[lang] != null) el.textContent = e[lang];
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-ph]').forEach((el) => {
    const e = dict[el.getAttribute('data-i18n-ph') as string];
    if (e && e[lang] != null) el.setAttribute('placeholder', e[lang]);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const e = dict[el.getAttribute('data-i18n-aria') as string];
    if (e && e[lang] != null) el.setAttribute('aria-label', e[lang]);
  });
  document.querySelectorAll<HTMLOptionElement | HTMLInputElement>('[data-i18n-value]').forEach((el) => {
    const e = dict[el.getAttribute('data-i18n-value') as string];
    if (e && e[lang] != null) (el as HTMLInputElement).value = e[lang];
  });

  document.querySelectorAll<HTMLElement>('.lang span').forEach((s) => {
    s.classList.toggle('on', s.getAttribute('data-l') === lang);
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* private mode */ }
  document.dispatchEvent(new CustomEvent('mm:langchange', { detail: { lang } }));
}

(window as unknown as { applyLang: typeof applyLang }).applyLang = applyLang;

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  const span = target.closest('.lang span');
  if (span) {
    const l = span.getAttribute('data-l');
    if (l) applyLang(l);
    return;
  }

  const toggle = target.closest('[data-nav-toggle]');
  if (toggle) {
    const nav = document.getElementById('mobile-nav');
    if (nav) {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    }
    return;
  }

  if (target.closest('#mobile-nav a')) {
    document.getElementById('mobile-nav')?.classList.remove('open');
  }
});

// keyboard: Enter/Space on the language toggle spans
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const span = (e.target as HTMLElement).closest('.lang span');
  if (span) {
    e.preventDefault();
    const l = span.getAttribute('data-l');
    if (l) applyLang(l);
  }
});

function init(): void {
  let saved: string | null = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* ignore */ }
  applyLang(saved && isLang(saved) ? saved : defaultLang);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
