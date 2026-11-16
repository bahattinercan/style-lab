#!/usr/bin/env node
/**
 * kit/migrations/v6-strip.mjs — v5 → v6 source migration (single page · no dark mode · still).
 *
 * What it does (over 151 style sources):
 * 1. tokens.json: palette.dark is deleted, motion object is deleted, downgraded to version 6.
 * 2. token-block.css : `[data-theme="dark"][data-style="…"]` block is deleted.
 * 3. style.md: "## Motion" and "## Dark mode" sections are deleted; "Images" row
 * converted to a single scene (shots/01-page.png).
 * 4. shots.config.fragment.mjs: @keyframes blocks and animation notifications are deleted
 * (static single page: animation neither in the system nor on the stage).
 *
 * Usage:
 * node kit/migrations/v6-strip.mjs --check # what will change, report without writing
 * node kit/migrations/v6-strip.mjs --apply # apply
 *
 * It is not a door; runs once. After: node kit/apply-fragments.mjs --apply*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const APPLY = process.argv.includes('--apply');
const CHECK = process.argv.includes('--check') || !APPLY;

const read = (p) => fs.readFileSync(p, 'utf8');
const writeIfChanged = (p, before, after) => {
  if (before === after) return false;
  if (APPLY) fs.writeFileSync(p, after);
  return true;
};

/** Deletes a single block (selector + body) by counting `{` / `}`.*/
function removeCssBlock(css, selector) {
  const start = css.indexOf(selector);
  if (start < 0) return css;
  const open = css.indexOf('{', start);
  if (open < 0) return css;
  let depth = 0;
  let i = open;
  for (; i < css.length; i += 1) {
    if (css[i] === '{') depth += 1;
    else if (css[i] === '}') {
      depth -= 1;
      if (depth === 0) break;
    }
  }
  if (depth !== 0) return css;
  return css.slice(0, start).replace(/\s*$/, '\n') + css.slice(i + 1).replace(/^\s*\n/, '');
}

/** @deletes keyframes blocks (nested braces).*/
function stripKeyframes(css) {
  let out = css;
  for (;;) {
    const m = out.match(/@(-webkit-)?keyframes\s+[A-Za-z0-9_-]+\s*\{/);
    if (!m) return out;
    const open = m.index + m[0].length - 1;
    let depth = 0;
    let i = open;
    for (; i < out.length; i += 1) {
      if (out[i] === '{') depth += 1;
      else if (out[i] === '}') {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    if (depth !== 0) return out;
    out = out.slice(0, m.index).replace(/[ \t]+$/, '') + out.slice(i + 1).replace(/^\n/, '');
  }
}

/** animation/animation-* deletes declarations (line or block).*/
function stripAnimationDecls(css) {
  return css
    .replace(/^[ \t]*animation(-[a-z-]+)?\s*:[^;{}]*;[ \t]*\r?\n?/gim, '')
    .replace(/[ \t]*animation(-[a-z-]+)?\s*:[^;{}]*;(?=\s*[.\-#@a-z*:>\[])/gi, '')
    .replace(/\n{3,}/g, '\n\n');
}

/**
 * Deletes a `## Title` section (title + body) from style.md.
 * Header line starts with `##`; the section ends on the next `## ` line.*/
function removeMdSection(md, title) {
  const re = new RegExp(`^##\\s+${title}\\s*$`, 'm');
  const m = md.match(re);
  if (!m) return md;
  const start = m.index;
  const rest = md.slice(start + m[0].length);
  const next = rest.search(/^## /m);
  const end = next < 0 ? md.length : start + m[0].length + next;
  return md.slice(0, start).replace(/\s*$/, '\n\n') + md.slice(end);
}

function migrateTokens(dirName) {
  const file = path.join(STYLES_DIR, dirName, 'tokens.json');
  if (!fs.existsSync(file)) return null;
  const before = read(file);
  const t = JSON.parse(before);
  const notes = [];
  if (t.palette?.dark) {
    delete t.palette.dark;
    notes.push('palette.dark');
  }
  if (t.motion) {
    delete t.motion;
    notes.push('motion');
  }
  if (t.version !== 6) {
    t.version = 6;
    notes.push(`version→6`);
  }
  if (!notes.length) return null;
  return { file, before, after: JSON.stringify(t, null, 2) + '\n', notes };
}

function migrateTokenBlock(dirName, slug) {
  const file = path.join(STYLES_DIR, dirName, 'token-block.css');
  if (!fs.existsSync(file)) return null;
  const before = read(file);
  const after = removeCssBlock(before, `[data-theme="dark"][data-style="${slug}"]`);
  if (after === before) return null;
  return { file, before, after, notes: ['koyu blok'] };
}

function migrateStyleMd(dirName) {
  const file = path.join(STYLES_DIR, dirName, 'style.md');
  if (!fs.existsSync(file)) return null;
  const before = read(file);
  let after = removeMdSection(before, 'Hareket');
  after = removeMdSection(after, 'Koyu mod');
  after = after.replace(
    /\|\s*\*\*Görseller\*\*\s*\|[^\n]*\|/,
    '| **Images** | `shots/01-page.png` (single page · 1280×2400) |',
  );
  after = after.replace(/\n{3,}/g, '\n\n');
  if (after === before) return null;
  return { file, before, after, notes: ['Hareket', 'Koyu mod', 'Images'] };
}

function migrateFragment(dirName) {
  const file = path.join(STYLES_DIR, dirName, 'shots.config.fragment.mjs');
  if (!fs.existsSync(file)) return null;
  const before = read(file);
  let after = stripKeyframes(before);
  after = stripAnimationDecls(after);
  if (after === before) return null;
  return { file, before, after, notes: ['@keyframes/animation'] };
}

const dirs = fs
  .readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
  .map((d) => d.name)
  .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

const stats = { files: 0, changed: 0, byKind: {} };
for (const dir of dirs) {
  const slug = dir.replace(/^\d+-/, '');
  const jobs = [migrateTokens(dir), migrateTokenBlock(dir, slug), migrateStyleMd(dir), migrateFragment(dir)].filter(Boolean);
  for (const job of jobs) {
    stats.files += 1;
    const changed = writeIfChanged(job.file, job.before, job.after);
    if (changed) {
      stats.changed += 1;
      for (const n of job.notes) stats.byKind[n] = (stats.byKind[n] ?? 0) + 1;
      if (CHECK) console.log(`~ ${path.relative(ROOT, job.file)}: ${job.notes.join(', ')}`);
    }
  }
}

console.log(
  `${CHECK ? 'check' : 'implemented'} · ${dirs.length} styles · ${stats.files} files scanned · ${stats.changed} changed` +
    ` · ${Object.entries(stats.byKind).map(([k, v]) => `${k} ${v}`).join(' · ')}`,
);
if (CHECK && stats.changed) {
  console.log('to apply: node kit/migrations/v6-strip.mjs --apply');
}
