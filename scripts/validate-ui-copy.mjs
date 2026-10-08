import { readdir, readFile } from 'node:fs/promises';
import { createUi } from '../src/i18n/catalog.mjs';

const directory = new URL('../src/content/ui-copy/', import.meta.url);
const files = (await readdir(directory)).filter(file => file.endsWith('.json'));
const documents = Object.fromEntries(await Promise.all(files.map(async file => [
  file.slice(0, -5), JSON.parse(await readFile(new URL(file, directory), 'utf8')),
])));
const ui = createUi(documents);
const reviewed = Object.values(documents).flatMap(document => Object.values(document.translations)).filter(entry => entry.reviewed).length;
console.log(`Myanmar copy: ${Object.keys(ui).length} valid entries in ${files.length} groups; ${reviewed} marked reviewed.`);
