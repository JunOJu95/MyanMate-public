import { track as trackVercel } from '@vercel/analytics';

/* =========================================================================
   MyanMate · lightweight funnel tracking
   Captures the TikTok → web → guide → service → request funnel (기획서 §12).
   Sends [data-event] interactions to Vercel Analytics and mirrors them to an
   optional Plausible / GA installation when one is present.
   ========================================================================= */
type Props = Record<string, string | undefined>;

function track(event: string, props: Props = {}): void {
  const w = window as any;
  try {
    trackVercel(event, props);
  } catch {
    /* never let analytics break the page */
  }
  try {
    if (typeof w.plausible === 'function') w.plausible(event, { props });
    else if (typeof w.gtag === 'function') w.gtag('event', event, props);
    else if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event, ...props });
  } catch {
    /* optional analytics providers must not affect the page */
  }
}

(window as any).mmTrack = track;

document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest('[data-event]');
  if (!el) return;
  const event = el.getAttribute('data-event') || 'click';
  const service = el.getAttribute('data-service') || undefined;
  const source = el.getAttribute('data-source') || undefined;

  track(event, {
    lang: (window as any).__lang || 'en',
    path: location.pathname,
    service,
    visa: el.getAttribute('data-visa') || undefined,
    channel: el.getAttribute('data-channel') || undefined,
    source,
  });
});
