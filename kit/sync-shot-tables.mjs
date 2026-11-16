#!/usr/bin/env node
/**
 * kit/sync-shot-tables.mjs — keeps style.md tables in step with the manifest (v6: one page).
 *
 * Reason: the image table, the meta row and the "Screen recipes" evidence column in every document
 * must come from the same source (kit/shots.manifest.json); hand edits drifted the file names.
 *
 * Usage:
 *   node kit/sync-shot-tables.mjs --check           # exit 1 on drift (writes nothing)
 *   node kit/sync-shot-tables.mjs --write           # rewrite the tables
 *   node kit/sync-shot-tables.mjs --write --styles minimalism,glassmorphism
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const MANIFEST = path.join(ROOT, 'kit', 'shots.manifest.json');

const WRITE = process.argv.includes('--write');
const onlyArg = process.argv.indexOf('--styles');
const only =
  onlyArg >= 0 && process.argv[onlyArg + 1] && !process.argv[onlyArg + 1].startsWith('--')
    ? process.argv[onlyArg + 1].split(',')
    : [];

/** The scenes that actually exist in that style's shots/ folder (in manifest order). */
function existingScenes(dirName, scenes) {
  return scenes.filter((s) => fs.existsSync(path.join(STYLES_DIR, dirName, 'shots', s.file)));
}

/** "What to look at" note per scene — short and measurable. */
const NOTES = {
  landing:
    '1280×2400: navigation, hero, three sections, component grid, form/data, CTA and footer in one frame.',
};

const STYLE_NOTE = 'Identical content is rendered with the same text in every style; only the design differs.';

function styleDirs() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .filter((d) => !only.length || only.includes(d.replace(/^\d+-/, '')));
}

function tableFor(scenes) {
  const rows = scenes.map((s) => {
    const note = NOTES[s.key] ?? s.label;
    return `| \`shots/${s.file}\` | ${s.label} — ${note} |`;
  });
  return ['| Image | What to look at |', '|---|---|', ...rows].join('\n');
}

/** Writes the **Images** row of the meta table from the core scenes that exist. */
function upsertMetaRow(md, present) {
  if (!present.length) return md;
  const value = `\`shots/${present[0].file}\` (single page · 1280×2400)`;
  return md.replace(/^\| \*\*Images\*\* \|.*$/m, `| **Images** | ${value} |`);
}

function replaceSection(md, table) {
  const parts = md.split(/\n(?=## )/);
  const idx = parts.findIndex((p) => /^##\s+Sample images\s*(\n|$)/.test(p));
  if (idx === -1) return { md, ok: false };
  parts[idx] = ['## Sample images', '', STYLE_NOTE, '', table, ''].join('\n');
  return { md: parts.join('\n').replace(/\n+$/, '\n'), ok: true };
}

/** In the "## Screen recipes" table the evidence image is the single page. */
function upsertScreenTable(md, present) {
  const parts = md.split(/\n(?=## )/);
  const idx = parts.findIndex((p) => /^##\s+Screen recipes\s*(\n|$)/.test(p));
  if (idx === -1) return { md, ok: false };

  const lines = parts[idx].split('\n');
  const headAt = lines.findIndex((l) => l.trim().startsWith('|'));
  if (headAt === -1) return { md, ok: false };

  const cells = (l) => l.split('|').slice(1, -1).map((c) => c.trim());
  const proof = present.length ? `\`shots/${present[0].file}\`` : '—';

  const out = [...lines.slice(0, headAt), '| Screen | Density | Implementation | Image |', '|---|---|---|---|'];
  for (let i = headAt + 2; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim().startsWith('|')) {
      out.push(...lines.slice(i));
      break;
    }
    const c = cells(line);
    if (c.length < 2) continue;
    out.push(`| ${c[0]} | ${c[1] ?? ''} | ${c[2] ?? ''} | ${proof} |`);
  }
  parts[idx] = out.join('\n');
  return { md: parts.join('\n').replace(/\n+$/, '\n'), ok: true };
}

function main() {
  if (!fs.existsSync(MANIFEST)) {
    console.error('kit/shots.manifest.json is missing — run the render first');
    process.exit(1);
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const scenes = manifest.scenes ?? [];

  let changed = 0;
  const drift = [];
  for (const dirName of styleDirs()) {
    const file = path.join(STYLES_DIR, dirName, 'style.md');
    const before = fs.readFileSync(file, 'utf8');
    const present = existingScenes(dirName, scenes);
    const have = new Set(present.map((s) => s.file));

    const res = replaceSection(before, tableFor(present));
    if (!res.ok) {
      drift.push(`${dirName}: missing "## Sample images" section`);
      continue;
    }
    // references to non-core scenes: "—" in the table cell, dropped unless written in parentheses
    const scrub = (md) => {
      let out = md.replace(/\s*\(`shots\/([^`]+)`\)/g, (m, f) => (have.has(f) ? m : ''));
      out = out.replace(/`shots\/([^`]+)`/g, (m, f) => (have.has(f) ? m : '—'));
      return out;
    };
    let next = scrub(upsertMetaRow(res.md, present));

    const res2 = upsertScreenTable(next, present);
    if (!res2.ok) {
      drift.push(`${dirName}: missing "## Screen recipes" table`);
      continue;
    }
    next = res2.md;
    if (next === before) continue;
    if (WRITE) {
      fs.writeFileSync(file, next);
      changed += 1;
    } else {
      drift.push(`${dirName}: tables do not match the manifest`);
    }
  }

  if (WRITE) {
    console.log(`${changed} files updated · single-page table + screen recipe evidence column`);
    return;
  }
  if (drift.length) {
    console.log(`${drift.length} sapma:`);
    for (const d of drift.slice(0, 10)) console.log('  × ' + d);
    process.exit(1);
  }
  console.log('sync: clean (every style.md table matches the manifest)');
}

main();
