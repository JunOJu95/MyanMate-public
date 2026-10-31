import { t, isLang, defaultLang } from '../i18n/ui';

// One progressive-enhancement layer. Content is never hidden while waiting for JS.
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktop = window.matchMedia('(min-width: 981px)');
const running = new Set<Animation>();
const detailsMotion = new Map<HTMLDetailsElement, { animation: Animation; open: boolean; settle: () => void }>();

function remember(animation: Animation): void {
  running.add(animation);
  animation.addEventListener('finish', () => running.delete(animation), { once: true });
  animation.addEventListener('cancel', () => running.delete(animation), { once: true });
}

function initHeroOverlap(): void {
  const home = document.querySelector<HTMLElement>('.mm-home');
  const hero = home?.querySelector<HTMLElement>('.mm-hero-band');
  const surface = home?.querySelector<HTMLElement>('.mm-home-surface');
  const header = document.querySelector<HTMLElement>('.bar');
  if (!home || !hero || !surface || !header) return;
  const controls = Array.from(hero.querySelectorAll<HTMLElement>('a[href],button'));
  let frame = 0;

  function update(): void {
    frame = 0;
    if (preference.matches) {
      home!.removeAttribute('data-hero-overlap');
      hero!.style.removeProperty('--mm-hero-top');
      hero!.inert = false;
      controls.forEach(control => { control.inert = false; });
      return;
    }
    // Tall mobile heroes scroll normally until every line and the photo can be
    // seen. Only then do they stay behind the rising surface. No scroll trapping.
    const headerHeight = header!.getBoundingClientRect().height;
    const top = Math.min(headerHeight, innerHeight - hero!.offsetHeight);
    hero!.style.setProperty('--mm-hero-top', `${top}px`);
    home!.setAttribute('data-hero-overlap', '');
    // Covered links must not receive keyboard focus behind the white surface.
    const surfaceTop = surface!.getBoundingClientRect().top;
    hero!.inert = surfaceTop <= headerHeight;
    controls.forEach(control => {
      control.inert = control.getBoundingClientRect().bottom > surfaceTop;
    });
  }
  function schedule(): void { if (!frame) frame = requestAnimationFrame(update); }
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule);
    observer.observe(hero); observer.observe(header);
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('hashchange', schedule);
  window.addEventListener('pageshow', schedule);
  document.addEventListener('mm:langchange', schedule);
  preference.addEventListener('change', update);
  update();
}

function initEntries(): void {
  // The home uses a continuous panel transition, with no separate text reveals.
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-mm-reveal],[data-reveal]'))
    .filter(element => !element.closest('.mm-home'));
  document.querySelectorAll<HTMLElement>('[data-mm-stagger],[data-stagger]').forEach(group => {
    Array.from(group.children).forEach((child,index) => {
      if (child instanceof HTMLElement) child.dataset.mmDelay = String(Math.min(index,3) * 65);
    });
  });

  function enter(element: HTMLElement, immediate = false): void {
    if (element.hasAttribute('data-mm-entered')) return;
    element.setAttribute('data-mm-entered','');
    element.classList.add('is-visible');
    if (immediate || preference.matches || !element.animate) return;
    const media = element.dataset.mmReveal === 'media';
    remember(element.animate([
      { opacity:0, transform:`translateY(${media ? 26 : 20}px)` },
      { opacity:1, transform:'translateY(0)' },
    ], {
      duration:media ? 850 : 680,
      delay:Math.min(Number(element.dataset.mmDelay)||0,195),
      easing:'cubic-bezier(.16,1,.3,1)',
    }));
  }
  if (preference.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) {
    elements.forEach(element => enter(element, true));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    enter(entry.target as HTMLElement);
    observer.unobserve(entry.target);
  }), { threshold:.02 });
  elements.forEach(element => observer.observe(element));

  function showForInteraction(element: HTMLElement): void {
    enter(element, true);
    element.getAnimations().forEach(animation => animation.cancel());
    observer.unobserve(element);
  }
  document.addEventListener('focusin', event => {
    if (!(event.target instanceof HTMLElement)) return;
    const element = event.target.closest<HTMLElement>('[data-mm-reveal],[data-reveal]');
    if (element && !element.closest('.mm-home')) showForInteraction(element);
  });
  preference.addEventListener('change', () => {
    if (!preference.matches) return;
    observer.disconnect(); elements.forEach(showForInteraction);
  });
}

function initGalleries(): void {
  document.querySelectorAll<HTMLElement>('[data-hero-gallery]').forEach(gallery => {
    const photos = Array.from(gallery.querySelectorAll<HTMLElement>('[data-hero-photo]'));
    const button = gallery.querySelector<HTMLButtonElement>('[data-gallery-toggle]');
    if (!button || photos.length < 2) return;
    const focusRoot = gallery.closest('.mm-hero') || gallery;
    let current = 0, timer: ReturnType<typeof setTimeout> | undefined, generation = 0;
    let userPaused = false, hovering = false, focused = false;
    const canRun = () => !userPaused && !hovering && !focused && !preference.matches && !document.hidden;
    const label = () => {
      const key = userPaused ? 'ui.motion.play' : 'ui.motion.pause';
      button.dataset.i18nAria = key;
      button.setAttribute('aria-label', t(key,isLang(document.documentElement.lang) ? document.documentElement.lang : defaultLang));
      button.setAttribute('aria-pressed',String(userPaused));
      button.hidden = preference.matches;
      gallery.dataset.galleryRunning = String(canRun());
    };
    function schedule(): void {
      clearTimeout(timer); const token = ++generation; label();
      if (!canRun()) return;
      timer = setTimeout(async () => {
        const next = (current + 1) % photos.length;
        const image = photos[next].querySelector('img');
        if (image) { try { await image.decode(); } catch { schedule(); return; } }
        if (token !== generation || !canRun()) return;
        photos[current].classList.remove('is-active'); photos[next].classList.add('is-active');
        current = next; gallery.dataset.galleryIndex = String(current); schedule();
      },6000);
    }
    button.addEventListener('click', () => { userPaused = !userPaused; schedule(); });
    gallery.addEventListener('pointerenter',event => { if(event.pointerType !== 'touch'){hovering=true;schedule();} });
    gallery.addEventListener('pointerleave',() => {hovering=false;schedule();});
    focusRoot.addEventListener('focusin',() => {focused=true;schedule();});
    focusRoot.addEventListener('focusout',() => queueMicrotask(() => {
      focused=focusRoot.contains(document.activeElement);schedule();
    }));
    document.addEventListener('visibilitychange',schedule);
    document.addEventListener('mm:langchange',label);
    preference.addEventListener('change',() => {
      if(preference.matches){photos.forEach((photo,index)=>photo.classList.toggle('is-active',index===0));current=0;gallery.dataset.galleryIndex='0';}
      schedule();
    });
    window.addEventListener('pagehide',() => {clearTimeout(timer);generation++;});
    window.addEventListener('pageshow',schedule);
    gallery.dataset.galleryIndex='0';schedule();
  });
}

function initCourseCarousels(): void {
  document.querySelectorAll<HTMLElement>('[data-course-carousel]').forEach(root => {
    const track = root.querySelector<HTMLElement>('[data-course-track]');
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-course-slide]'));
    const previous = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
    const controls = root.querySelector<HTMLElement>('[data-carousel-controls]');
    const count = root.querySelector<HTMLElement>('[data-carousel-current]');
    const picker = root.querySelector<HTMLElement>('[data-course-picker]');
    const line = root.querySelector<HTMLElement>('[data-course-picker-line]');
    const choices = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-course-choice]'));
    if (!track || !previous || !next || !controls || !cards.length) return;
    let current = 0, frame = 0, requested: number | null = null;
    let settleTimer: ReturnType<typeof setTimeout> | undefined;

    function update(): void {
      frame = 0;
      const bounds = track!.getBoundingClientRect(), center = bounds.left + bounds.width / 2;
      let nearest = 0, distance = Infinity;
      cards.forEach((card,index) => {
        const rect = card.getBoundingClientRect(), delta = Math.abs(rect.left + rect.width / 2 - center);
        if (delta < distance) { distance = delta; nearest = index; }
      });
      current = requested ?? nearest;
      previous!.disabled = current === 0; next!.disabled = current === cards.length - 1;
      if (count) count.textContent = String(current + 1).padStart(2,'0');
      choices.forEach((choice,index) => {
        if (index === current) choice.setAttribute('aria-current','true');
        else choice.removeAttribute('aria-current');
      });
      if (picker && line && choices[current]) {
        const selected = choices[current].getBoundingClientRect(), container = picker.getBoundingClientRect();
        line.style.width = `${selected.width}px`;
        line.style.transform = `translate(${selected.left - container.left}px,${selected.bottom - container.top - 2}px)`;
        line.hidden = false; picker.dataset.pickerEnhanced = '';
      }
      root.dataset.carouselIndex = String(current);
      const id = choices[current]?.dataset.courseChoice;
      if (id && history.state?.mmCourse !== id) {
        try { history.replaceState({...history.state,mmCourse:id},''); } catch { /* History restrictions leave native navigation intact. */ }
      }
      if (requested !== null) {
        clearTimeout(settleTimer);
        settleTimer = setTimeout(() => { requested = null; update(); },160);
      }
    }
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    function restore(): void {
      const id = history.state?.mmCourse;
      const card = cards.find(card => card.id === `course-card-${id}`);
      if (card) {
        const rect = card.getBoundingClientRect(), rail = track!.getBoundingClientRect();
        track!.scrollBy({left:rect.left + rect.width / 2 - (rail.left + rail.width / 2),behavior:'instant'});
      }
      update();
    }
    function go(index: number): void {
      requested = Math.max(0,Math.min(cards.length - 1,index));
      const rect = cards[requested].getBoundingClientRect(), bounds = track!.getBoundingClientRect();
      track!.scrollBy({left:rect.left + rect.width / 2 - (bounds.left + bounds.width / 2),behavior:preference.matches ? 'instant' : 'smooth'});
      update();
    }
    previous.addEventListener('click',() => go(current - 1)); next.addEventListener('click',() => go(current + 1));
    choices.forEach((choice,index) => choice.addEventListener('click',event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); go(index);
    }));
    function keyboard(event: KeyboardEvent, moveFocus = false): void {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const keys: Record<string,number> = {ArrowLeft:current - 1,ArrowRight:current + 1,Home:0,End:cards.length - 1};
      if (!(event.key in keys)) return;
      event.preventDefault(); go(keys[event.key]);
      if (moveFocus) choices[current]?.focus({preventScroll:true});
    }
    track.addEventListener('keydown',event => {
      keyboard(event);
      if (event.defaultPrevented && event.target !== track) cards[current].querySelector<HTMLAnchorElement>('a[href]')?.focus({preventScroll:true});
    });
    track.addEventListener('focusin',event => {
      const card = (event.target as Element).closest<HTMLElement>('[data-course-slide]');
      const index = card ? cards.indexOf(card) : -1;
      if (index >= 0 && index !== current) go(index);
    });
    picker?.addEventListener('keydown',event => keyboard(event,true));
    track.addEventListener('pointerdown',() => { requested = null; clearTimeout(settleTimer); });
    track.addEventListener('wheel',() => { requested = null; },{passive:true});
    track.addEventListener('scroll',requestUpdate,{passive:true});
    window.addEventListener('resize',requestUpdate,{passive:true});
    window.addEventListener('pageshow',() => requestAnimationFrame(restore));
    window.addEventListener('popstate',restore);
    window.addEventListener('pagehide',() => { requested = null; clearTimeout(settleTimer); });
    document.addEventListener('mm:langchange',requestUpdate);
    if (picker && 'ResizeObserver' in window) new ResizeObserver(requestUpdate).observe(picker);
    controls.hidden = false; restore();
  });
}

function initEnrollmentFlows(): void {
  const flows = Array.from(document.querySelectorAll<HTMLElement>('[data-enrollment-flow]')).flatMap(section => {
    const steps = section.querySelector<HTMLElement>('.mm-steps');
    const items = Array.from(steps?.querySelectorAll<HTMLElement>('li') ?? []);
    const nodes = items.map(item => item.querySelector<HTMLElement>('.mm-step-number'));
    return steps && nodes.length > 1 && nodes.every(node => node !== null)
      ? [{section,steps,items,nodes:nodes as HTMLElement[]}] : [];
  });
  if (!flows.length) return;
  const header = document.querySelector<HTMLElement>('.bar');
  const clamp = (value: number) => Math.max(0,Math.min(1,value));
  let frame = 0;

  function update(): void {
    frame = 0;
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const viewport = Math.max(1,innerHeight - headerHeight);
    const readingLine = headerHeight + viewport * .5;
    flows.forEach(({section,steps,items,nodes}) => {
      if (preference.matches) {
        section.removeAttribute('data-flow-ready');
        steps.style.removeProperty('--flow-progress');
        items.forEach(item => {
          item.style.removeProperty('--step-progress');
          item.removeAttribute('data-flow-reached');
        });
        return;
      }
      const bounds = nodes.map(node => node.getBoundingClientRect());
      // Derive every frame from position, with no remembered completion state.
      // The vertical line ends at the reading line; the horizontal layout fills
      // as its row moves through the same comfortable reading area.
      const progress = clamp((headerHeight + viewport * .78 - (bounds[0].top + bounds[0].height / 2)) / (viewport * .38));
      steps.style.setProperty('--flow-progress',String(progress));
      items.forEach((item,index) => {
        const node = bounds[index], next = bounds[index + 1];
        const reached = desktop.matches
          ? progress > 0 && progress >= index / (items.length - 1)
          : readingLine >= node.top + node.height / 2;
        item.toggleAttribute('data-flow-reached',reached);
        const segment = next ? clamp((readingLine - node.bottom) / Math.max(1,next.top - node.bottom)) : 0;
        item.style.setProperty('--step-progress',String(segment));
      });
      section.dataset.flowReady = '';
    });
  }
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  window.addEventListener('pageshow',schedule);
  document.addEventListener('mm:langchange',schedule);
  preference.addEventListener('change',schedule);
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule);
    flows.forEach(({steps}) => observer.observe(steps));
  }
  update();
}

function initDetails(): void {
  document.querySelectorAll<HTMLDetailsElement>('.mm-faq details,.apply-optional,.blog-faq-item').forEach(details=>{
    const summary=details.querySelector<HTMLElement>('summary');if(!summary)return;
    summary.addEventListener('click',event=>{
      if(preference.matches||!details.animate)return;
      event.preventDefault();
      const previous=detailsMotion.get(details),open=!(previous?.open??details.open);
      const start=details.getBoundingClientRect().height;previous?.animation.cancel();details.open=true;
      const expanded=details.getBoundingClientRect().height;
      const collapsed=summary.getBoundingClientRect().height+parseFloat(getComputedStyle(details).borderTopWidth||'0')+parseFloat(getComputedStyle(details).borderBottomWidth||'0')+parseFloat(getComputedStyle(details).paddingTop||'0')+parseFloat(getComputedStyle(details).paddingBottom||'0');
      details.style.overflow='hidden';
      const animation=details.animate([{height:`${start}px`},{height:`${open?expanded:collapsed}px`}],{duration:open?360:260,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'});
      const settle=()=>{details.open=open;details.style.removeProperty('overflow');animation.cancel();detailsMotion.delete(details);};
      detailsMotion.set(details,{animation,open,settle});animation.addEventListener('finish',settle,{once:true});
    });
  });
}

function initPhotoDepth(): void {
  const photos=Array.from(document.querySelectorAll<HTMLElement>('.mm-hero-gallery .learning-photo,.mm-practice-intro .learning-photo'));
  let frame=0;
  const update=()=>{
    frame=0;photos.forEach(photo=>{
      const enabled=desktop.matches&&!preference.matches;photo.classList.toggle('has-photo-depth',enabled);
      if(!enabled){photo.style.removeProperty('--photo-y');return;}
      const rect=photo.getBoundingClientRect();if(rect.bottom<0||rect.top>innerHeight)return;
      const offset=Math.max(-12,Math.min(12,(innerHeight/2-(rect.top+rect.height/2))*.035));
      photo.style.setProperty('--photo-y',`${offset.toFixed(2)}px`);
    });
  };
  const requestUpdate=()=>{if(!frame)frame=requestAnimationFrame(update);};
  window.addEventListener('scroll',requestUpdate,{passive:true});window.addEventListener('resize',requestUpdate,{passive:true});
  preference.addEventListener('change',requestUpdate);update();
}

function initStickyCtas(): void {
  document.querySelectorAll<HTMLElement>('[data-sticky-cta]').forEach(cta=>{
    const selector=cta.dataset.ctaSentinel,sentinel=selector?document.querySelector<HTMLElement>(selector):null;
    if(!sentinel)return;
    const blockers=Array.from(document.querySelectorAll<HTMLElement>(cta.dataset.ctaBlockers||'.foot'));
    let frame=0;
    const update=()=>{
      frame=0;const blocked=blockers.some(el=>{const rect=el.getBoundingClientRect();return rect.top<innerHeight&&rect.bottom>0;});
      const visible=sentinel.getBoundingClientRect().bottom<0&&!blocked;
      cta.classList.toggle('is-visible',visible);cta.toggleAttribute('inert',!visible);cta.setAttribute('aria-hidden',String(!visible));
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
    window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});update();
  });
}

function settle(): void {running.forEach(animation=>animation.cancel());detailsMotion.forEach(state=>state.settle());}
function initMotion(): void {
  initHeroOverlap();initEntries();initGalleries();initCourseCarousels();initEnrollmentFlows();initDetails();initPhotoDepth();initStickyCtas();
  document.addEventListener('mm:langchange',settle);
  document.addEventListener('change',event=>{
    if(preference.matches||!(event.target as HTMLElement).matches('#course,#speaking-track'))return;
    document.querySelectorAll<HTMLElement>('#selected-course,#speaking-track-field').forEach(el=>{
      if(el.hidden||!el.animate)return;
      remember(el.animate([{opacity:.35,transform:'translateY(-5px)'},{opacity:1,transform:'none'}],{duration:280,easing:'cubic-bezier(.22,1,.36,1)'}));
    });
  });
  preference.addEventListener('change',()=>{if(preference.matches)settle();});window.addEventListener('pagehide',settle);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initMotion,{once:true});else initMotion();
