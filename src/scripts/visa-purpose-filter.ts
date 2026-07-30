const hubs = document.querySelectorAll<HTMLElement>('[data-visa-purpose-hub]');

hubs.forEach((hub) => {
  const section = hub.closest('.visa-hub-content');
  if (!section) return;

  const buttons = Array.from(hub.querySelectorAll<HTMLButtonElement>('[data-visa-purpose-filter]'));
  const items = Array.from(section.querySelectorAll<HTMLElement>('[data-visa-purpose]'));
  const empty = section.querySelector<HTMLElement>('[data-visa-purpose-empty]');

  const setPurpose = (purpose: string) => {
    let visibleCount = 0;

    buttons.forEach((button) => {
      const selected = button.dataset.visaPurposeFilter === purpose;
      button.classList.toggle('on', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });

    items.forEach((item) => {
      const visible = purpose === 'all' || item.dataset.visaPurpose === purpose;
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (empty) empty.hidden = visibleCount > 0;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      setPurpose(button.dataset.visaPurposeFilter || 'all');
    });
  });
});
