/* =========================================================================
   MyanMate · lightweight funnel tracking
   Captures the TikTok → web → guide → service → request funnel (기획서 §12).
   Forwards [data-event] clicks + pageviews to whatever provider is present
   (Plausible / GA gtag / dataLayer); no-ops otherwise. Pick a privacy-friendly
   provider later (e.g. Plausible/Umami) — no code change needed here.
   ========================================================================= */
type Props = Record<string, string>;

function track(event: string, props: Props = {}): void {
  const w = window as any;
  try {
    if (typeof w.plausible === 'function') w.plausible(event, { props });
    else if (typeof w.gtag === 'function') w.gtag('event', event, props);
    else if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event, ...props });
    else if (import.meta.env.DEV) console.debug('[track]', event, props);
  } catch {
    /* never let analytics break the page */
  }
}

(window as any).mmTrack = track;

document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest('[data-event]');
  if (!el) return;
  track(el.getAttribute('data-event') || 'click', {
    lang: (window as any).__lang || 'en',
    path: location.pathname,
  });
});

track('pageview', { path: location.pathname });
