import {readFile, writeFile, mkdir} from 'node:fs/promises';

const root = new URL('../dist/client/', import.meta.url);
let html = await readFile(new URL('design-directions/index.html', root), 'utf8');
for (const match of html.matchAll(/<link rel="stylesheet" href="(\/_astro\/[^\"]+)">/g)) {
  const css = await readFile(new URL(match[1].slice(1), root), 'utf8');
  html = html.replace(match[0], `<style>${css}</style>`);
}
const output = new URL('../../design-review/', import.meta.url);
await mkdir(output, {recursive:true});
await writeFile(new URL('rise-after-nest-design-directions.html', output), html);
console.log('Exported design-review/rise-after-nest-design-directions.html');
