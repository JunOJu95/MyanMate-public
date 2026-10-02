import { t, isLang, defaultLang } from '../i18n/ui';
import { isCourseId } from '../config/courses';
const form = document.querySelector<HTMLFormElement>('#application-form');
if (form) {
  const button = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  const label = button.querySelector<HTMLElement>('[data-i18n]')!;
  const status = document.querySelector<HTMLElement>('#apply-status')!;
  const lang = () => isLang(document.documentElement.lang) ? document.documentElement.lang : defaultLang;
  function setText(el: HTMLElement, key: string) { el.dataset.i18n = key; el.textContent = t(key, lang()); }
  button.disabled = !form.dataset.accessKey;
  const courseSelect = form.elements.namedItem('course') as HTMLSelectElement;
  const trackSelect = form.elements.namedItem('speaking_track') as HTMLSelectElement;
  const channelSelect = form.elements.namedItem('channel') as HTMLSelectElement;
  const contact = form.elements.namedItem('contact') as HTMLInputElement;
  const selection = form.querySelector<HTMLElement>('#selected-course')!;
  const params = new URLSearchParams(location.search);
  if (isCourseId(params.get('course'))) courseSelect.value = params.get('course')!;
  if (params.get('track') === 'moe' || params.get('track') === 'jun-ho') trackSelect.value = params.get('track')!;
  function updateCourse() {
    const id = courseSelect.value;
    const known = isCourseId(id);
    setText(selection.querySelector('h3')!, known ? `learn.${id}` : 'apply.unsure');
    setText(selection.querySelector('.apply-selection-body')!, known ? `learn.${id}Body` : 'apply.unsureBody');
    (selection.querySelector('.apply-selection-foot') as HTMLElement).hidden = !known;
    if (known) {
      setText(selection.querySelector('[data-course-duration]')!, `course.${id}.duration`);
      (selection.querySelector('[data-course-link]') as HTMLAnchorElement).href = `/courses/${id}`;
    }
    form.querySelector<HTMLElement>('#speaking-track-field')!.hidden = id !== 'speaking';
    trackSelect.disabled = id !== 'speaking';
  }
  function validateContact() {
    contact.setCustomValidity('');
    if (!contact.value.trim()) return;
    if (channelSelect.value === 'email') {
      if (contact.validity.typeMismatch) contact.setCustomValidity(t('apply.emailInvalid', lang()));
    } else {
      const phone = normalizePhone(contact.value);
      const digits = phone.replace(/\D/g, '');
      if (!/^[+\d() .-]+$/.test(phone.trim()) || digits.length < 6 || digits.length > 20) contact.setCustomValidity(t('apply.phoneInvalid', lang()));
    }
  }
  function normalizePhone(value: string) {
    return value.replace(/[၀-၉０-９]/g, digit => String(digit.charCodeAt(0) - (digit.charCodeAt(0) >= 0xff10 ? 0xff10 : 0x1040)));
  }
  function updateChannel() {
    const email = channelSelect.value === 'email';
    contact.type = email ? 'email' : 'tel';
    contact.inputMode = email ? 'email' : 'tel';
    contact.autocomplete = email ? 'email' : 'tel';
    setText(form.querySelector('#contact-help [data-i18n]')!, email ? 'apply.emailHelp' : 'apply.phoneHelp');
    validateContact();
  }
  courseSelect.addEventListener('change', updateCourse);
  channelSelect.addEventListener('change', updateChannel);
  contact.addEventListener('input', validateContact);
  document.addEventListener('mm:langchange', () => { updateCourse(); updateChannel(); });
  updateCourse(); updateChannel();
  let sending = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.dataset.accessKey || sending) return;
    contact.value = contact.value.trim();
    if (channelSelect.value === 'phone') contact.value = normalizePhone(contact.value);
    validateContact();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get('botcheck')) return;
    // Reject whitespace-only names/contact information without discarding input.
    for (const name of ['name','contact']) {
      const input = form.elements.namedItem(name) as HTMLInputElement;
      input.value = input.value.trim();
      if (!input.reportValidity()) return;
      data.set(name, input.value);
    }
    sending = true; button.disabled = true; form.setAttribute('aria-busy','true');
    // Keep the submitted values stable while delivery is in progress.
    const fieldsets = [...form.querySelectorAll('fieldset')];
    const consent = form.elements.namedItem('consent') as HTMLInputElement;
    fieldsets.forEach(fieldset => { fieldset.disabled = true; });
    consent.disabled = true;
    setText(label, 'apply.sending'); status.hidden = true;
    const payload = Object.fromEntries(data.entries());
    delete payload.botcheck;
    Object.assign(payload, {access_key:form.dataset.accessKey, subject:'MyanMate · Korean class application', from_name:'MyanMate', language:lang()});
    // Add readable course labels for the recipient while keeping stable field IDs.
    payload.course_title = t(isCourseId(courseSelect.value) ? `learn.${courseSelect.value}` : 'apply.unsure', 'ko');
    if (courseSelect.value === 'speaking') payload.track_title = t(trackSelect.value === 'moe' ? 'apply.trackMoe' : trackSelect.value === 'jun-ho' ? 'apply.trackJunHo' : 'apply.unsure', 'ko');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(20000)});
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Delivery not confirmed');
      const chosenCourse = courseSelect.value;
      const chosenTrack = trackSelect.value;
      form.reset(); courseSelect.value = chosenCourse; trackSelect.value = chosenTrack;
      setText(status,'apply.success'); status.dataset.state = 'success';
      // Track only the confirmed event, never application/contact details.
      (window as unknown as {mmTrack?:(name:string)=>void}).mmTrack?.('class_application_success');
    } catch { setText(status,'apply.error'); status.dataset.state = 'error'; }
    finally {
      fieldsets.forEach(fieldset => { fieldset.disabled = false; }); consent.disabled = false;
      updateCourse(); updateChannel();
      status.hidden = false; sending = false; button.disabled = false; form.removeAttribute('aria-busy'); setText(label,'apply.submit');
      status.focus({preventScroll:true});
      status.scrollIntoView({block:'nearest',behavior:'auto'});
    }
  });
}
