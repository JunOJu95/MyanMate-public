const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;

function setStaggerOrder(): void {
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      (child as HTMLElement).style.setProperty('--mm-order', String(index));
    });
  });
}

function revealEverything(): void {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
}

function initReveals(): void {
  setStaggerOrder();
  root.classList.add('motion-ready');

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealEverything();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => observer.observe(el));
}

function initStickyCtas(): void {
  document.querySelectorAll<HTMLElement>('[data-sticky-cta]').forEach((cta) => {
    const sentinelSelector = cta.dataset.ctaSentinel;
    const sentinel = sentinelSelector ? document.querySelector<HTMLElement>(sentinelSelector) : null;
    const blockers = Array.from(document.querySelectorAll<HTMLElement>(cta.dataset.ctaBlockers || '.foot'));
    if (!sentinel) return;

    let scheduled = false;
    const update = () => {
      scheduled = false;
      const passedSentinel = sentinel.getBoundingClientRect().bottom < 0;
      const blocked = blockers.some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
      const visible = passedSentinel && !blocked;
      cta.classList.toggle('is-visible', visible);
      cta.toggleAttribute('inert', !visible);
      cta.setAttribute('aria-hidden', String(!visible));
    };
    const requestUpdate = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    update();
  });
}

function initMotion(): void {
  try {
    initReveals();
    initStickyCtas();
  } catch {
    root.classList.remove('motion-ready');
    revealEverything();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion, { once: true });
} else {
  initMotion();
}
