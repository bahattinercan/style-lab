#!/usr/bin/env node
import fs from 'node:fs';

const specsDir = 'kit/specs';
const specFiles = fs.readdirSync(specsDir).filter((name) => name.endsWith('.json') && name !== 'bands.json');
const specsBySlug = new Map();
for (const file of specFiles) {
  const data = JSON.parse(fs.readFileSync(`${specsDir}/${file}`, 'utf8'));
  const list = Array.isArray(data) ? data : data.styles;
  for (const spec of list ?? []) specsBySlug.set(spec.slug, { file, data, spec });
}

function replaceH1Size(css) {
  return css.replace(/([^{}]*\bh1\b[^{}]*)\{([^}]*)\}/g, (whole, selector, body) => {
    if (!/font-size\s*:/.test(body)) return whole;
    return `${selector} {${body.replace(/font-size\s*:\s*[^;]+/, 'font-size: var(--type-h1)')}}`;
  });
}

let migrated = 0;
const dirs = fs.readdirSync('styles').filter((name) => /^\d+-/.test(name));
for (const dir of dirs) {
  const fragmentPath = `styles/${dir}/shots.config.fragment.mjs`;
  let fragment = fs.readFileSync(fragmentPath, 'utf8');
  const config = fragment.match(/export const CONFIG = ([\s\S]*);\s*$/);
  const extraCss = config?.[1].match(/extraCss:\s*`([\s\S]*?)`/);
  if (!extraCss) continue;
  const h1Sizes = [...extraCss[1].matchAll(/([^{}]*\bh1\b[^{}]*)\{([^}]*)\}/gm)]
    .flatMap(([, , body]) => [...body.matchAll(/font-size\s*:\s*([^;]+);?/g)].map(([, value]) => value.trim()))
    .filter((value) => !value.startsWith('var('));
  if (!h1Sizes.length) continue;
  const size = h1Sizes.at(-1);
  fragment = fragment.replace(extraCss[1], replaceH1Size(extraCss[1]));
  fs.writeFileSync(fragmentPath, fragment, 'utf8');

  const tokenPath = `styles/${dir}/tokens.json`;
  const tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
  tokens.typography ??= {};
  tokens.typography.scale ??= {};
  tokens.typography.scale.h1 = size;
  fs.writeFileSync(tokenPath, `${JSON.stringify(tokens, null, 2)}\n`, 'utf8');

  const slug = dir.replace(/^\d+-/, '');
  const found = specsBySlug.get(slug);
  if (found) {
    found.spec.scale ??= {};
    found.spec.scale.h1 = size;
    found.spec.extraCss = replaceH1Size(found.spec.extraCss ?? '');
  }
  migrated += 1;
}

const written = new Set();
for (const { file, data } of specsBySlug.values()) {
  if (written.has(file)) continue;
  fs.writeFileSync(`${specsDir}/${file}`, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  written.add(file);
}

const bandsPath = `${specsDir}/bands.json`;
const bands = JSON.parse(fs.readFileSync(bandsPath, 'utf8'));
for (const band of Object.values(bands)) if (band.extraCss) band.extraCss = replaceH1Size(band.extraCss);
fs.writeFileSync(bandsPath, `${JSON.stringify(bands, null, 2)}\n`, 'utf8');
console.log(`h1 font-size moved into the token: ${migrated} style fragments`);
