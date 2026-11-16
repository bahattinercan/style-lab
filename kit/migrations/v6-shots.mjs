#!/usr/bin/env node
/**
 * kit/migrations/v6-shots.mjs — v5 → v6 document migration: 37 scenes → single page.
 *
 * In style.md, old scene files (01-landing, 02-dashboard, 04-components,
 * Converts references to 17-dark-landing, 03-mobile to `shots/01-page.png`;
 * Reduces the "## Sample images" table to a single row. Display in recipe tables
 * lines are preserved (those screens are part of the same single page).
 *
 * Usage:
 * node kit/migrations/v6-shots.mjs --check
 * node kit/migrations/v6-shots.mjs --apply*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const APPLY = process.argv.includes('--apply');
const CHECK = !APPLY;

const OLD = /`shots\/(?:01-landing|02-dashboard|03-mobile|04-components|17-dark-landing)\.png`/g;
const PAGE = '`shots/01-page.png`';

const SAMPLE_ROW =
  '| `shots/01-page.png` | Single page — 1280×2400: navigation, hero, three sections, widget grid, form/data, CTA, and footer in the same frame. |';

function migrate(md) {
  let out = md.replace(OLD, PAGE);
  // "## Sample images" table: 4 rows → 1 row
  const m = out.match(/^## Örnek görseller\s*$([\s\S]*?)(?=^## )/m);
  if (m) {
    const body = m[1];
    const rows = body.split('\n').filter((l) => l.startsWith('| `shots/'));
    if (rows.length > 1) {
      const first = body.indexOf(rows[0]);
      const last = body.lastIndexOf(rows[rows.length - 1]) + rows[rows.length - 1].length;
      const replaced = body.slice(0, first) + SAMPLE_ROW + body.slice(last);
      out = out.slice(0, m.index + m[0].length - m[1].length) + replaced + out.slice(m.index + m[0].length);
    }
  }
  return out.replace(/\n{3,}/g, '\n\n');
}

const dirs = fs
  .readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
  .map((d) => d.name);

let changed = 0;
for (const dir of dirs) {
  const file = path.join(STYLES_DIR, dir, 'style.md');
  const before = fs.readFileSync(file, 'utf8');
  const after = migrate(before);
  if (after === before) continue;
  changed += 1;
  if (APPLY) fs.writeFileSync(file, after);
}
console.log(`${CHECK ? 'check' : 'implemented'} · ${dirs.length} styles · ${changed} style.md changed`);
if (CHECK && changed) console.log('to apply: node kit/migrations/v6-shots.mjs --apply');
