const root = document.querySelector<HTMLElement>('[data-blog-index]');
const PAGE_SIZE = 9;

if (root) {
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-blog-filter]'));
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-blog-item]'));
  const empty = root.querySelector<HTMLElement>('[data-blog-empty-category]');
  const seeMoreWrap = root.querySelector<HTMLElement>('[data-blog-see-more-wrap]');
  const seeMoreButton = root.querySelector<HTMLButtonElement>('[data-blog-see-more]');
  const validCategories = new Set(buttons.map((button) => button.dataset.blogFilter ?? 'all'));
  let activeCategory = 'all';
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
      const matchesCategory = category === 'all' || card.dataset.category === category;
      if (matchesCategory) matchedCount += 1;
      const visible = matchesCategory && matchedCount <= visibleLimit;
      card.hidden = !visible;
    }

    for (const button of buttons) {
      const selected = button.dataset.blogFilter === category;
      button.classList.toggle('on', selected);
      button.setAttribute('aria-pressed', String(selected));
    }

    if (empty) empty.hidden = matchedCount !== 0;
    if (seeMoreWrap) seeMoreWrap.hidden = matchedCount <= visibleLimit;
  }

  function updateUrl(category: string): void {
    const url = new URL(window.location.href);
    if (category === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    window.history.pushState({ category }, '', url);
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const category = button.dataset.blogFilter ?? 'all';
      applyFilter(category);
      updateUrl(category);
    });
  }

  seeMoreButton?.addEventListener('click', () => {
    visibleLimit += PAGE_SIZE;
    applyFilter(activeCategory, false);
  });

  window.addEventListener('popstate', () => applyFilter(categoryFromUrl()));
  applyFilter(categoryFromUrl());
}
