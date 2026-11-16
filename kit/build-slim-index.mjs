#!/usr/bin/env node
/**
 * kit/build-slim-index.mjs — lightweight catalog index for the agent (`kit/dist/index.slim.json`).
 *
 * Reason: `kit/styles.index.json` 1 MB (145 × 27 stage path + embedded token copy) — an agent's
 * is not the file it will read. This script produces the **minimum** space required for the selection decision:
 * slug, name, family, single sentence, tags, composition, compatible neighbors, paths.
 * v6: dark mode and motion layer removed; The index carries only what is needed for the selection decision.
 *
 * Usage:
 * write node kit/build-slim-index.mjs #
 * node kit/build-slim-index.mjs --check # is it up to date? otherwise exit 1
 * node kit/build-slim-index.mjs --json # summary*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FULL = path.join(ROOT, 'kit', 'styles.index.json');
const FAMILIES = path.join(ROOT, 'kit', 'families.json');
const OUT = path.join(ROOT, 'kit', 'dist', 'index.slim.json');

const CHECK = process.argv.includes('--check');
const JSON_OUT = process.argv.includes('--json');

const full = JSON.parse(fs.readFileSync(FULL, 'utf8'));
const families = JSON.parse(fs.readFileSync(FAMILIES, 'utf8'));

const styles = full.styles.map((s) => ({
  num: s.num,
  slug: s.slug,
  name: s.name,
  family: s.family,
  tag: s.tag,
  tags: s.tags ?? [],
  layout: s.layout ? { hero: s.layout.hero, nav: s.layout.nav, density: s.layout.density } : null,
  compatible: s.neighbors?.compatible ?? [],
  forbidden: s.neighbors?.forbidden ?? [],
}));

const doc = {
  generatedBy: 'kit/build-slim-index.mjs',
  count: styles.length,
  families: families.families.map((f) => ({ name: f.name, from: f.from, to: f.to })),
  contract: {
    dir: 'file path: styles/<num>-<slug>/ (style.md · tokens.json · shots/01-page.png)',
    tag: 'one sentence identity',
    tags: '3 tags (search/intent match)',
    layout: 'composition archetype: hero|nav|density (kit/render/layouts.json)',
    compatible: 'Styles that can be used as garnishes (not dominant)',
    forbidden: 'Styles that cannot be used together',
  },
  styles,
};

const serialized = JSON.stringify(doc, null, 1) + '\n';
const kb = (serialized.length / 1024).toFixed(0);

if (JSON_OUT) {
  console.log(JSON.stringify({ count: doc.count, sizeKb: Number(kb), families: doc.families.length }, null, 2));
  process.exit(0);
}

if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  const synced = current === serialized;
  console.log(`slim index · ${doc.count} styles · ${kb} KB · ${synced ? 'in sync' : 'NOT CURRENT'}`);
  if (!synced) {
    console.log('fix: node kit/build-slim-index.mjs');
    process.exit(1);
  }
  if (serialized.length > 150 * 1024) {
    console.log(`  ✗ the file passed the 150 KB limit (${kb} KB) — agent readability drops`);
    process.exit(1);
  }
  process.exit(0);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, serialized);
console.log(`written: kit/dist/index.slim.json · ${doc.count} styles · ${kb} KB`);
