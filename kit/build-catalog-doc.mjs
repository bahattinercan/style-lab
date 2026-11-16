#!/usr/bin/env node
/**
 * kit/build-catalog-doc.mjs — generates docs/catalog.md (reading list).
 *
 * Cause: the catalog index was being updated manually; when the number of styles changes (151 → 251)
 * the document was quietly becoming stale. Single source: kit/styles.index.json + kit/families.json.
 *
 * Usage:
 * write node kit/build-catalog-doc.mjs #
 * node kit/build-catalog-doc.mjs --check # is it up to date (exit 1 if stale)*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INDEX = path.join(ROOT, 'kit', 'styles.index.json');
const FAMILIES = path.join(ROOT, 'kit', 'families.json');
const OUT = path.join(ROOT, 'docs', 'catalog.md');
const CHECK = process.argv.includes('--check');

const index = JSON.parse(fs.readFileSync(INDEX, 'utf8'));
const families = JSON.parse(fs.readFileSync(FAMILIES, 'utf8')).families ?? [];
const styles = index.styles ?? [];

const byNum = new Map(styles.map((s) => [Number(s.num), s]));

const lines = [];
lines.push(`# Catalog index — ${styles.length} styles`);
lines.push('');
lines.push('This file is a **generated reading list**:`node kit/build-catalog-doc.mjs`.');
lines.push('Machine-readable source `kit/styles.index.json`; the only real source');
lines.push('`styles/<nn-slug>/style.md` + `tokens.json` + `kit/families.json`.');
lines.push(`The family bands ${families[0]?.from ?? 1}–${families[families.length - 1]?.to ?? 0} are contiguous.`);
lines.push('');
lines.push('> After selecting a style: `shots/01-page.png` (single page, 1280×2400) →');
lines.push('> `style.md` (§ Mandatory rules, § Component recipes, § Pitfalls) → `tokens.json` (palette + composition).');
lines.push('> If the document and the visual conflict, **the visual wins**.');
lines.push('');

for (const f of families) {
  const inBand = styles
    .filter((s) => Number(s.num) >= f.from && Number(s.num) <= f.to)
    .sort((a, b) => Number(a.num) - Number(b.num));
  if (!inBand.length) continue;
  lines.push(`## ${f.name} (${f.from}–${f.to}) · ${inBand.length} styles`);
  lines.push('');
  lines.push('| # | Style | Tags | One sentence |');
  lines.push('|---|---|---|---|');
  for (const s of inBand) {
    const tags = (s.tags ?? []).join(' · ');
    const tag = String(s.tag ?? '').replace(/\|/g, '\\|');
    lines.push(`| ${s.num} | [${s.name}](../styles/${s.num}-${s.slug}/style.md) | ${tags} | ${tag} |`);
  }
  lines.push('');
}

const missing = [...byNum.keys()].filter((n) => !families.some((f) => n >= f.from && n <= f.to));
if (missing.length) {
  lines.push(`> ⚠ ${missing.length} styles are outside every family band: ${missing.join(', ')}`);
  lines.push('');
}

const md = lines.join('\n');
if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
  if (current !== md) {
    console.log(`× docs/catalog.md is stale — node kit/build-catalog-doc.mjs`);
    process.exit(1);
  }
  console.log(`✓ docs/catalog.md is up to date (${styles.length} styles · ${families.length} families)`);
  process.exit(0);
}
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md);
const kb = (Buffer.byteLength(md) / 1024).toFixed(1);
console.log(`docs/catalog.md written · ${styles.length} styles · ${families.length} families · ${kb} KB`);
