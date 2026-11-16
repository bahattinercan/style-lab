#!/usr/bin/env node
/**
 * kit/composition-report.mjs — report measuring composition distribution (kit/dist/composition.md).
 *
 * Cause: `kit/dist/report.md` measures coverage/contrast/dark mode debt; **skeletal diversity**
 *does not measure. This report includes the "uniformity index" (the most crowded
 * share of hero|nav combination) and transcribes family-based diversity.
 *
 * Usage:
 * write node kit/composition-report.mjs #
 * node kit/composition-report.mjs --check # is it up to date (stale report = exit 1)
 * node kit/composition-report.mjs --quiet*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkLayout } from './check-layout.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'kit', 'dist', 'composition.md');
const LAYOUTS = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'layouts.json'), 'utf8'));
const ARGV = process.argv.slice(2);
const CHECK = ARGV.includes('--check');
const QUIET = ARGV.includes('--quiet');

const STYLES_DIR = path.join(ROOT, 'styles');
const FAMILIES = (JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'families.json'), 'utf8')).families ?? []).map(
  (f) => ({ from: f.from, to: f.to, name: f.name }),
);

function discover() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => {
      const num = parseInt(d.name, 10);
      const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, d.name, 'tokens.json'), 'utf8'));
      return {
        dirName: d.name,
        num,
        slug: tokens.slug ?? d.name.replace(/^\d+-/, ''),
        name: tokens.name ?? d.slug,
        family: FAMILIES.find((f) => num >= f.from && num <= f.to)?.name ?? 'Other',
        layout: tokens.layout ?? null,
      };
    })
    .sort((a, b) => a.num - b.num);
}

const pct = (v, n) => `%${Math.round((v / n) * 100)}`;

function build() {
  const rows = discover();
  const result = checkLayout(rows);
  if (result.errors.length) {
    console.error('× composition report could not be produced; clear the door first: node kit/check-layout.mjs');
    for (const e of result.errors.slice(0, 5)) console.error(`  - ${e}`);
    process.exit(1);
  }
  const n = rows.length;
  const s = result.stats;
  const uniformity = s.fingerprints[0]?.[1] ?? n;
  const heroShare = s.heroes[0]?.[1] ?? n;
  const familyCount = s.families.filter((f) => f.n >= 2);
  const avgHero = familyCount.reduce((a, f) => a + f.heroes, 0) / Math.max(1, familyCount.length);

  const exemplars = (key, value, limit = 3) =>
    rows.filter((r) => r.layout[key] === value).slice(0, limit).map((r) => `\`${r.slug}\``).join(', ');

  const lines = [];
  lines.push('# Composition report');
  lines.push('');
  lines.push('Production: `node kit/composition-report.mjs` source: `kit/render/layouts.json` + `styles/*/tokens.json`');
  lines.push('');
  lines.push('> Why is there this report: the catalog varied the **color** of 145 styles, not the **skeleton**.');
  lines.push('> Measure: hero|nav fingerprint. Target: uniformity index (share of most populated combination) **Below 30%**.');
  lines.push('');
  lines.push('## 1 · Summary');
  lines.push('');
  lines.push('| Measure | Value | Target |');
  lines.push('|---|---|---|');
  lines.push(`| Style | ${n} | — |`);
  lines.push(`| Distinct hero|nav fingerprints | ${s.fingerprints.length} | ≥ 12 |`);
  lines.push(`| **Uniformity index** (busiest fingerprint) | ${uniformity}/${n} = ${pct(uniformity, n)} | <30% |`);
  lines.push(`| Busiest single hero | ${s.heroes[0][0]} = ${heroShare}/${n} = ${pct(heroShare, n)} | <35% |`);
  lines.push(`| Average distinct heroes per family | ${avgHero.toFixed(1)} | ≥ 2 |`);
  lines.push(`| Archetypes in use | ${s.heroes.length} hero · ${s.navs.length} nav · ${s.densities.length} densities | all |`);
  lines.push('');

  lines.push('## 2 · Hero arketipleri');
  lines.push('');
  lines.push('| Archetype | When | Style | Examples |');
  lines.push('|---|---|---|---|');
  for (const h of LAYOUTS.heroes) {
    const used = s.heroes.find(([k]) => k === h.id)?.[1] ?? 0;
    lines.push(`| \`${h.id}\` · ${h.label} | ${h.when} | ${used} (${pct(used, n)}) | ${exemplars('hero', h.id)} |`);
  }
  lines.push('');
  lines.push('## 3 · Nav arketipleri');
  lines.push('');
  lines.push('| Archetype | When | Style | Examples |');
  lines.push('|---|---|---|---|');
  for (const v of LAYOUTS.navs) {
    const used = s.navs.find(([k]) => k === v.id)?.[1] ?? 0;
    lines.push(`| \`${v.id}\` · ${v.label} | ${v.when} | ${used} (${pct(used, n)}) | ${exemplars('nav', v.id)} |`);
  }
  lines.push('');
  lines.push('## 4 · Density');
  lines.push('');
  lines.push('| Density | When | Style |');
  lines.push('|---|---|---|');
  for (const d of LAYOUTS.densities) {
    const used = s.densities.find(([k]) => k === d.id)?.[1] ?? 0;
    lines.push(`| \`${d.id}\` · ${d.label} | ${d.when} | ${used} (${pct(used, n)}) |`);
  }
  lines.push('');
  lines.push('## 5 · Family-based diversity');
  lines.push('');
  lines.push('| Family | Style | Different hero | Different fingerprint | Dominant hero |');
  lines.push('|---|---|---|---|---|');
  for (const f of s.families) {
    const list = rows.filter((r) => r.family === f.family);
    const byHero = new Map();
    for (const r of list) byHero.set(r.layout.hero, (byHero.get(r.layout.hero) ?? 0) + 1);
    const top = [...byHero.entries()].sort((a, b) => b[1] - a[1])[0];
    lines.push(`| ${f.family} | ${f.n} | ${f.heroes} | ${f.fingerprints} | \`${top?.[0]}\` (${top?.[1]}) |`);
  }
  lines.push('');
  lines.push('## 6 · Parmak izleri');
  lines.push('');
  lines.push('| hero|nav | Style | Share |');
  lines.push('|---|---|---|');
  for (const [k, v] of s.fingerprints) lines.push(`| \`${k}\` | ${v} | ${pct(v, n)} |`);
  lines.push('');
  lines.push('## 7 · Remaining axes (not yet measured)');
  lines.push('');
  lines.push('| Axis | Status | Plan |');
  lines.push('|---|---|---|');
  lines.push('| Content suite (industry) | single fictional SaaS + real estate | P1:`kit/content/*.json`, `tokens.json → industries[]`|');
  lines.push('| Visual layer | 0`<img>`(CSS motif only) | P2:`kit/images/` + `imagery.treatment`|');
  lines.push('| Section library | none | P3:`kit/sections.html` + 12 arketip |');
  lines.push('| Flow strips | single frame | P4: onboarding/checkout/invite flows |');
  lines.push('');
  return lines.join('\n');
}

const md = build();
if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
  if (current === null) {
    console.log('× no composition report — node kit/composition-report.mjs');
    process.exit(1);
  }
  if (current !== md) {
    console.log('× the composition report is stale — node kit/composition-report.mjs');
    process.exit(1);
  }
  if (!QUIET) console.log('✓ composition report is up to date');
  process.exit(0);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md);
if (!QUIET) console.log(`composition report: ${path.relative(ROOT, OUT)}`);
