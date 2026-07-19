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

function initSmoothDmSidebars(): void {
  const sidebars = Array.from(document.querySelectorAll<HTMLElement>('.guide-dm-aside'));
  if (sidebars.length === 0) return;

  const desktop = window.matchMedia('(min-width: 960px)');
  const maxLag = 16;
  let previousScrollY = window.scrollY;
  let currentOffset = 0;
  let targetOffset = 0;
  let frame = 0;

  const reset = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previousScrollY = window.scrollY;
    currentOffset = 0;
    targetOffset = 0;
    sidebars.forEach((sidebar) => {
      sidebar.style.removeProperty('--dm-follow-y');
      sidebar.classList.remove('is-following');
    });
  };

  const render = () => {
    currentOffset += (targetOffset - currentOffset) * 0.2;
    targetOffset *= 0.78;

    const settled = Math.abs(currentOffset) < 0.08 && Math.abs(targetOffset) < 0.08;
    sidebars.forEach((sidebar) => {
      sidebar.style.setProperty('--dm-follow-y', `${settled ? 0 : currentOffset.toFixed(2)}px`);
      sidebar.classList.toggle('is-following', !settled);
    });

    if (settled) {
      frame = 0;
      return;
    }
    frame = requestAnimationFrame(render);
  };

  const onScroll = () => {
    const scrollY = window.scrollY;
    const delta = scrollY - previousScrollY;
    previousScrollY = scrollY;

    if (!desktop.matches || reducedMotion.matches || delta === 0) return;

    targetOffset = Math.max(-maxLag, Math.min(maxLag, targetOffset + delta * 0.16));
    if (!frame) frame = requestAnimationFrame(render);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', reset, { passive: true });
  desktop.addEventListener('change', reset);
  reducedMotion.addEventListener('change', reset);
}

function initMotion(): void {
  try {
    initReveals();
    initStickyCtas();
    initSmoothDmSidebars();
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
