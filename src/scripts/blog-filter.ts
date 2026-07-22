const root = document.querySelector<HTMLElement>('[data-blog-index]');

if (root) {
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-blog-filter]'));
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-blog-item]'));
  const empty = root.querySelector<HTMLElement>('[data-blog-empty-category]');
  const validCategories = new Set(buttons.map((button) => button.dataset.blogFilter ?? 'all'));

  function categoryFromUrl(): string {
    const value = new URL(window.location.href).searchParams.get('category') ?? 'all';
    return validCategories.has(value) ? value : 'all';
  }

  function applyFilter(category: string): void {
    let visibleIndex = 0;

    for (const card of cards) {
      const visible = category === 'all' || card.dataset.category === category;
      card.hidden = !visible;
      card.classList.toggle('is-featured', visible && visibleIndex === 0);
      if (visible) visibleIndex += 1;
    }

    for (const button of buttons) {
      const selected = button.dataset.blogFilter === category;
      button.classList.toggle('on', selected);
      button.setAttribute('aria-pressed', String(selected));
    }

    if (empty) empty.hidden = visibleIndex !== 0;
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

  window.addEventListener('popstate', () => applyFilter(categoryFromUrl()));
  applyFilter(categoryFromUrl());
}
