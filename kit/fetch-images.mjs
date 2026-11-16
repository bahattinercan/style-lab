#!/usr/bin/env node
/**
 * kit/fetch-images.mjs — downloads/validates the image layer (P2).
 *
 * Source: `kit/images/INDEX.json` (Unsplash License; attribution not required, source URL for provenance).
 * Files are kept in the repo (offline rendering requirement): 24 frames ≈ 2–4 MB.
 *
 * Usage:
 * node kit/fetch-images.mjs --all # download missing items
 * node kit/fetch-images.mjs --check # does the file exist, is the size/format/INDEX consistent
 * node kit/fetch-images.mjs --json*/
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'kit', 'images');
const INDEX = path.join(DIR, 'INDEX.json');
const ARGV = process.argv.slice(2);
const CHECK = ARGV.includes('--check');
const ALL = ARGV.includes('--all');
const JSON_OUT = ARGV.includes('--json');

const idx = JSON.parse(fs.readFileSync(INDEX, 'utf8'));
const images = idx.images ?? [];
const MIN_BYTES = 40_000;

const problems = [];
const rows = [];
for (const img of images) {
  const file = path.join(DIR, img.file);
  const exists = fs.existsSync(file);
  const bytes = exists ? fs.statSync(file).size : 0;
  if (!exists) problems.push(`${img.file}: file missing`);
  else if (bytes < MIN_BYTES) problems.push(`${img.file}: too small (${bytes} B) — the download may be incomplete`);
  if (!img.id) problems.push(`${img.file}: missing id (no source URL can be built)`);
  if (!Array.isArray(img.tags) || !img.tags.length) problems.push(`${img.file}: tags are empty`);
  if (!img.use) problems.push(`${img.file}: missing use (usage note)`);
  rows.push({ file: img.file, exists, bytes });
}

// orphan file: image not in INDEX
const orphan = fs.existsSync(DIR)
  ? fs.readdirSync(DIR).filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && !images.some((i) => i.file === f))
  : [];
for (const f of orphan) problems.push(`${f}: not registered in INDEX.json (orphan file)`);

if (!idx.license?.id) problems.push('INDEX.json: no license block');

if (ALL) {
  fs.mkdirSync(DIR, { recursive: true });
  let downloaded = 0;
  for (const img of images) {
    const file = path.join(DIR, img.file);
    if (fs.existsSync(file) && fs.statSync(file).size >= MIN_BYTES) continue;
    const url = `https://images.unsplash.com/photo-${img.id}?w=${idx.width}&q=${idx.quality}&fm=jpg`;
    try {
      execFileSync('curl', ['-sSL', '--fail', '-o', file, url], { stdio: 'pipe', timeout: 60_000 });
      downloaded += 1;
    } catch (err) {
      problems.push(`${img.file}: indirilemedi (${String(err.message).split('\n')[0]})`);
    }
  }
  if (!JSON_OUT) console.log(`downloaded: ${downloaded} · total records: ${images.length}`);
}

if (JSON_OUT) {
  console.log(JSON.stringify({ images: images.length, problems, rows }, null, 2));
} else {
  for (const p of problems) console.log(`× ${p}`);
  const mb = (rows.reduce((n, r) => n + r.bytes, 0) / 1048576).toFixed(1);
  console.log(
    `images: ${images.length} records · ${rows.filter((r) => r.exists).length} files · ${mb} MB · licence: ${idx.license?.label ?? '—'}` +
      (problems.length ? ` · ${problems.length} sorun` : ' · temiz'),
  );
}
process.exit(problems.length ? 1 : 0);
