const root = document.querySelector<HTMLElement>('[data-blog-index]');
const PAGE_SIZE = 9;

if (root) {
  const filters = Array.from(root.querySelectorAll<HTMLElement>('[data-blog-filter]'));
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-blog-item]'));
  const seeMoreWrap = root.querySelector<HTMLElement>('[data-blog-see-more-wrap]');
  const seeMoreButton = root.querySelector<HTMLButtonElement>('[data-blog-see-more]');
  const validCategories = new Set(filters.map((filter) => filter.dataset.blogFilter ?? 'all'));
  const pageCategory = root.dataset.blogCategory ?? 'all';
  let activeCategory = pageCategory;
  let visibleLimit = PAGE_SIZE;

  function categoryFromUrl(): string {
    const value = new URL(window.location.href).searchParams.get('category') ?? 'all';
    return validCategories.has(value) ? value : 'all';
  }

  function applyFilter(category: string, resetLimit = true): void {
    if (resetLimit || category !== activeCategory) visibleLimit = PAGE_SIZE;
    activeCategory = category;
    let matchedCount = 0;

    for (const card of cards) {
      const matchesCategory = pageCategory !== 'all' || category === 'all' || card.dataset.category === category;
      if (matchesCategory) matchedCount += 1;
      const visible = matchesCategory && matchedCount <= visibleLimit;
      card.hidden = !visible;
    }

    for (const filter of filters) {
      const selected = filter.dataset.blogFilter === category;
      filter.classList.toggle('on', selected);
      if (selected) filter.setAttribute('aria-current', 'page');
      else filter.removeAttribute('aria-current');
    }

    if (seeMoreWrap) seeMoreWrap.hidden = matchedCount <= visibleLimit;
  }

  seeMoreButton?.addEventListener('click', () => {
    visibleLimit += PAGE_SIZE;
    applyFilter(activeCategory, false);
  });

  const urlCategory = categoryFromUrl();
  applyFilter(pageCategory === 'all' ? urlCategory : pageCategory);
}
