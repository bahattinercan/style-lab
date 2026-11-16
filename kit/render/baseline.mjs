#!/usr/bin/env node
/**
 * kit/render/baseline.mjs — handles the visual regression baseline.
 *
 * gates.sh, `styles/<slug>/shots/*.png` files if there is a baseline
 * Compares pixel by pixel with `kit/render/.baseline/<slug>/*.png`.
 * Baseline directory does not go into the repo (.gitignore) — it is a deliberate "acceptance" step.
 *
 * Usage:
 * node kit/render/baseline.mjs --write # write baseline for all styles
 * node kit/render/baseline.mjs --write --styles utility,minimalism
 * node kit/render/baseline.mjs --status # coverage report
 * node kit/render/baseline.mjs --clean # delete baseline*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const BASELINE = path.join(HERE, '.baseline');

const WRITE = process.argv.includes('--write');
const CLEAN = process.argv.includes('--clean');
const STATUS = process.argv.includes('--status');
const onlyArg = process.argv.indexOf('--styles');
const only =
  onlyArg >= 0 && process.argv[onlyArg + 1] && !process.argv[onlyArg + 1].startsWith('--')
    ? process.argv[onlyArg + 1].split(',')
    : [];

function styles() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .filter((name) => !only.length || only.includes(name) || only.includes(name.replace(/^\d+-/, '')))
    .map((dirName) => ({ dirName, slug: dirName.replace(/^\d+-/, '') }));
}

function shotsOf(dirName) {
  const dir = path.join(STYLES_DIR, dirName, 'shots');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.png')).sort();
}

function status() {
  const list = styles();
  let total = 0;
  let based = 0;
  const missing = [];
  for (const s of list) {
    const shots = shotsOf(s.dirName);
    const baseDir = path.join(BASELINE, s.slug);
    const baseFiles = fs.existsSync(baseDir) ? fs.readdirSync(baseDir).filter((f) => f.endsWith('.png')) : [];
    total += shots.length;
    based += shots.filter((f) => baseFiles.includes(f)).length;
    if (shots.length && baseFiles.length !== shots.length) missing.push(`${s.slug} (${baseFiles.length}/${shots.length})`);
  }
  console.log(`baseline: ${based}/${total} images · ${list.length} styles · folder: ${path.relative(ROOT, BASELINE)}`);
  if (missing.length) {
    console.log(`missing/incomplete baseline (${missing.length} styles):`);
    for (const m of missing.slice(0, 20)) console.log('  · ' + m);
    if (missing.length > 20) console.log(`  … +${missing.length - 20}`);
    console.log('  → node kit/render/baseline.mjs --write');
  }
  return 0;
}

function write() {
  let copied = 0;
  const list = styles();
  for (const s of list) {
    const shots = shotsOf(s.dirName);
    if (!shots.length) continue;
    const target = path.join(BASELINE, s.slug);
    fs.mkdirSync(target, { recursive: true });
    for (const f of shots) {
      fs.copyFileSync(path.join(STYLES_DIR, s.dirName, 'shots', f), path.join(target, f));
      copied++;
    }
  }
  console.log(`baseline written: ${copied} images · ${list.length} styles → ${path.relative(ROOT, BASELINE)}`);
  console.log('note: baseline does not enter repo; is a copy of the images you accept. --clean to close.');
  return 0;
}

function clean() {
  if (!fs.existsSync(BASELINE)) {
    console.log('No baseline, nothing to erase');
    return 0;
  }
  fs.rmSync(BASELINE, { recursive: true, force: true });
  console.log('baseline deleted — visual regression gate will be skipped');
  return 0;
}

if (CLEAN) process.exit(clean());
if (WRITE) process.exit(write());
process.exit(status() || (STATUS ? 0 : 0));
