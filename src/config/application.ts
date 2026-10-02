// Change PUBLIC_APPLICATION_EMAIL and the Web3Forms recipient together.
// Web3Forms binds delivery to its access key, never to a browser-supplied email.
export const applicationEmail = import.meta.env.PUBLIC_APPLICATION_EMAIL || 'junho357818@gmail.com';
export const applicationAccessKey = import.meta.env.PUBLIC_WEB3FORMS_KEY?.trim() || '';
