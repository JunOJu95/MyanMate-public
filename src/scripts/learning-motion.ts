// Content is visible by default; animation never gates reading or navigation.
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktop = window.matchMedia('(min-width: 761px)');
const running = new Set<Animation>();
const detailsMotion = new Map<HTMLDetailsElement, {open: boolean; animation: Animation; settle: () => void}>();
let revealObserver: IntersectionObserver | undefined;

function remember(animation: Animation): void {
  running.add(animation);
  animation.addEventListener('finish', () => running.delete(animation), {once:true});
  animation.addEventListener('cancel', () => running.delete(animation), {once:true});
}

function enter(el: HTMLElement): void {
  if (el.hasAttribute('data-mm-entered')) return;
  el.setAttribute('data-mm-entered','');
  if (preference.matches || !el.animate) return;
  const media = el.dataset.mmReveal === 'media';
  remember(el.animate([
    {opacity:media ? .45 : 0, transform:`translateY(${media ? 18 : 14}px)`},
    {opacity:1, transform:'translateY(0)'},
  ], {duration:media ? 800 : 560, delay:Math.min(Number(el.dataset.mmDelay)||0,180), easing:'cubic-bezier(.22,1,.36,1)'}));
}

function initEntries(): void {
  document.querySelectorAll<HTMLElement>('[data-mm-stagger]').forEach(group => {
    Array.from(group.children).forEach((el,i) => {
      if (el instanceof HTMLElement) el.dataset.mmDelay = String(Math.min(i,3)*60);
    });
  });
  const elements = document.querySelectorAll<HTMLElement>('[data-mm-reveal]');
  if (preference.matches || !('IntersectionObserver' in window)) {
    elements.forEach(el=>el.setAttribute('data-mm-entered',''));
    return;
  }
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      enter(entry.target as HTMLElement);
      revealObserver?.unobserve(entry.target);
    });
  }, {threshold:.06,rootMargin:'0px 0px -24px 0px'});
  elements.forEach(el=>revealObserver!.observe(el));
  // A focus target should never wait for its visual entrance.
  document.addEventListener('focusin',event => {
    const element = (event.target as HTMLElement).closest<HTMLElement>('[data-mm-reveal]');
    if (element) {enter(element);revealObserver?.unobserve(element);}
  });
}

function initDetails(): void {
  document.querySelectorAll<HTMLDetailsElement>('.mm-faq details,.apply-optional').forEach(details => {
    const summary = details.querySelector<HTMLElement>('summary')!;
    summary.addEventListener('click',event => {
      if (preference.matches || !details.animate) return; // Native disclosure stays usable.
      event.preventDefault();
      const previous = detailsMotion.get(details);
      const open = !(previous?.open ?? details.open);
      const start = details.getBoundingClientRect().height;
      previous?.animation.cancel();
      details.open = true;
      const expanded = details.getBoundingClientRect().height;
      const collapsed = summary.getBoundingClientRect().height + parseFloat(getComputedStyle(details).borderBottomWidth || '0');
      details.style.overflow = 'hidden';
      const animation = details.animate(
        [{height:`${start}px`},{height:`${open ? expanded : collapsed}px`}],
        {duration:open ? 320 : 240,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'},
      );
      const settle = () => {
        details.open = open;
        details.style.removeProperty('overflow');
        animation.cancel();
        detailsMotion.delete(details);
      };
      detailsMotion.set(details,{open,animation,settle});
      animation.addEventListener('finish',settle,{once:true});
    });
  });
}

function initPhotoDepth(): void {
  const photos = Array.from(document.querySelectorAll<HTMLElement>('[data-mm-parallax]'));
  if (!photos.length) return;
  let frame = 0;
  const update = () => {
    frame = 0;
    photos.forEach(photo => {
      if (preference.matches || !desktop.matches) {photo.style.removeProperty('--mm-image-y');return;}
      const bounds = photo.parentElement!.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > innerHeight) return;
      const offset = Math.max(-7,Math.min(7,(innerHeight/2 - (bounds.top+bounds.height/2))*.025));
      photo.style.setProperty('--mm-image-y',`${offset.toFixed(2)}px`);
    });
  };
  const schedule = () => {if (!frame) frame=requestAnimationFrame(update);};
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  preference.addEventListener('change',schedule);
  desktop.addEventListener('change',schedule);
  update();
}

function initSelection(): void {
  document.addEventListener('change',event => {
    const control = event.target as HTMLElement;
    if (preference.matches || !control.matches('#course,#speaking-track')) return;
    document.querySelectorAll<HTMLElement>('#selected-course,#speaking-track-field').forEach(el => {
      if (el.hidden || !el.animate) return;
      el.getAnimations().forEach(animation=>animation.cancel());
      remember(el.animate([{opacity:.3,transform:'translateY(-6px)'},{opacity:1,transform:'none'}],
        {duration:280,easing:'cubic-bezier(.22,1,.36,1)'}));
    });
  });
}

function settleMotion(): void {
  running.forEach(animation=>animation.cancel());
  detailsMotion.forEach(state=>state.settle());
}

function initLearningMotion(): void {
  try {initEntries();initDetails();initPhotoDepth();initSelection();}
  catch {settleMotion();revealObserver?.disconnect();} // Never leave invisible content on failure.
  document.addEventListener('mm:langchange',settleMotion);
  preference.addEventListener('change',() => {
    if (!preference.matches) return;
    settleMotion();
    revealObserver?.disconnect();
    document.querySelectorAll<HTMLElement>('[data-mm-reveal]').forEach(el=>el.setAttribute('data-mm-entered',''));
  });
  window.addEventListener('pagehide',settleMotion);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',initLearningMotion,{once:true});
else initLearningMotion();
