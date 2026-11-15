#!/usr/bin/env node
/**
 * kit/add-style.mjs — tek komutla stil ekleme (v6 boru hattı).
 *
 * Neden: yeni stil 8 adımdı (token bloğu, json, style.md, fragment, keywords, atamalar,
 * render, tablolar) ve üç kopyanın elle senkronu en sık kırılan yerdi. Bu CLI tek SPEC'ten
 * dört kaynağı üretir ve geri kalan boru hattını sırayla koşar.
 *
 * Kullanım:
 *   node kit/add-style.mjs kit/specs/batch-01.json              # üret + render + indeks
 *   node kit/add-style.mjs kit/specs/batch-01.json --dry        # yalnız doğrula (dosya yazmaz)
 *   node kit/add-style.mjs kit/specs/batch-01.json --check      # kaynaklar spec ile aynı mı (drift)
 *   node kit/add-style.mjs kit/specs/batch-01.json --no-render  # kaynak + indeks, görsel üretme
 *   node kit/add-style.mjs kit/specs/batch-01.json --styles game-hud,game-racing
 *
 * SPEC alanları: num, slug, name, band, tagline, feeling, best, avoid, palette{10},
 * fonts[display, body, mono], radius[2], motif, must[≥3], mustNot[≥3], refs[≥3],
 * keywords[≥3], brief, signature[≥3], ve opsiyonel: upper, tracking, scale, extraCss,
 * essence, origin, recognition, notThis, neighbors, industries, screens, traps, textNote…
 * Aile bandı kit/families.json'da, ortak şablonlar kit/specs/bands.json'da durur.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

import { buildStyle, validateSpec, mergeBand } from './lib/style-spec.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SPECS_DIR = path.join(ROOT, 'kit', 'specs');
const BANDS_FILE = path.join(SPECS_DIR, 'bands.json');
const FAMILIES_FILE = path.join(ROOT, 'kit', 'families.json');
const FONTS_CSS = path.join(ROOT, 'kit', 'fonts', 'fonts.css');

const ARGV = process.argv.slice(2);
const DRY = ARGV.includes('--dry');
const CHECK = ARGV.includes('--check');
const NO_RENDER = ARGV.includes('--no-render');
const STYLES_ARG_INDEX = ARGV.indexOf('--styles');
const ONLY = (() => {
  if (STYLES_ARG_INDEX < 0) return null;
  const list = (ARGV[STYLES_ARG_INDEX + 1] ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  return list.length ? new Set(list) : null;
})();
const FILE = ARGV.find((a, i) => !a.startsWith('--') && !(STYLES_ARG_INDEX >= 0 && i === STYLES_ARG_INDEX + 1));

const read = (p) => fs.readFileSync(p, 'utf8');
const readJson = (p) => JSON.parse(read(p));

function fontsAvailable() {
  const css = read(FONTS_CSS);
  return new Set([...css.matchAll(/font-family:\s*'([^']+)'/g)].map((m) => m[1]));
}

function specsOf(file) {
  const json = readJson(file);
  const list = Array.isArray(json) ? json : json.styles;
  if (!Array.isArray(list)) throw new Error(`${path.relative(ROOT, file)}: dizi ya da { styles: [] } beklenir`);
  return list;
}

function run(cmd, args, label) {
  process.stdout.write(`  · ${label}\n`);
  const out = execFileSync(process.execPath, [path.join(ROOT, cmd), ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const last = out.trim().split('\n').filter(Boolean).slice(-1)[0] ?? '';
  if (last) process.stdout.write(`    ${last}\n`);
  return out;
}

function main() {
  if (!FILE) {
    console.error('kullanım: node kit/add-style.mjs <spec.json> [--dry] [--check] [--no-render] [--styles a,b]');
    return 2;
  }
  const specFile = path.resolve(ROOT, FILE);
  if (!fs.existsSync(specFile)) {
    console.error(`spec dosyası yok: ${path.relative(ROOT, specFile)}`);
    return 2;
  }

  if (path.basename(specFile) === 'legacy-01-151.json') {
    if (!CHECK) {
      console.error('legacy kaynaklar çıkarılmış durumda; denetim için --check kullan');
      return 2;
    }
    execFileSync(process.execPath, [path.join(ROOT, 'kit', 'extract-spec.mjs'), '--check'], { cwd: ROOT, stdio: 'inherit' });
    return 0;
  }

  const bands = readJson(BANDS_FILE);
  const families = readJson(FAMILIES_FILE).families ?? [];
  const fonts = fontsAvailable();
  const existingDirs = fs
    .readdirSync(path.join(ROOT, 'styles'), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
  const existingSlugs = new Set(existingDirs.map((d) => d.replace(/^\d+-/, '')));

  let specs = specsOf(specFile);
  if (ONLY) specs = specs.filter((s) => ONLY.has(s.slug));

  const errors = [];
  const warnings = [];
  const queue = [];

  for (const spec of specs) {
    const num = parseInt(spec.num, 10);
    const family = families.find((f) => num >= f.from && num <= f.to);
    const band = bands[spec.band] ? mergeBand(bands[spec.band]) : null;
    const { errors: e, warnings: w } = validateSpec(spec, { band, fonts });
    errors.push(...e);
    warnings.push(...w);
    if (!family) errors.push(`${spec.slug}: ${spec.num} hiçbir aile bandında değil (kit/families.json)`);
    if (existingSlugs.has(spec.slug) && !fs.existsSync(path.join(ROOT, 'styles', `${spec.num}-${spec.slug}`, 'tokens.json'))) {
      errors.push(`${spec.slug}: bu slug başka bir numarada zaten var`);
    }
    // komşular katalogda ya da bu partide olmalı (check-schema bunu arar)
    const batchSlugs = new Set(specs.map((x) => x.slug));
    for (const [kind, list] of Object.entries(spec.neighbors ?? {})) {
      for (const other of list ?? []) {
        if (!existingSlugs.has(other) && !batchSlugs.has(other)) {
          errors.push(`${spec.slug}: neighbors.${kind} "${other}" katalogda yok`);
        }
      }
    }
    if (!band || !family) continue;
    queue.push({ spec, band, familyLabel: `${family.name} (${family.from}–${family.to})` });
  }

  if (errors.length) {
    console.error(`\n× ${errors.length} hata — hiçbir dosya yazılmadı`);
    for (const e of errors.slice(0, 40)) console.error(`  × ${e}`);
    if (errors.length > 40) console.error(`  … ${errors.length - 40} hata daha`);
    return 1;
  }
  if (warnings.length) {
    for (const w of warnings) console.log(`  ! ${w}`);
  }

  // 1) kaynaklar
  let written = 0;
  let unchanged = 0;
  const drift = [];
  for (const { spec, band, familyLabel } of queue) {
    const { files, metrics } = buildStyle(spec, { band, familyLabel });
    for (const [rel, generated] of Object.entries(files)) {
      const abs = path.join(ROOT, rel);
      const before = fs.existsSync(abs) ? read(abs) : null;
      let content = generated;
      if (before && rel.endsWith('/tokens.json')) {
        const current = JSON.parse(before);
        const next = JSON.parse(generated);
        if (current.layout?.fit !== undefined) {
          next.layout = { ...next.layout, fit: current.layout.fit };
          content = JSON.stringify(next, null, 2) + '\n';
        }
      }
      if (CHECK && before && rel.endsWith('/tokens.json')) {
        const expected = JSON.parse(generated);
        const current = JSON.parse(before);
        // Assignment tools own these fields after initial SPEC generation; their dedicated --check gates validate them.
        for (const key of ['layout', 'industries']) if (current[key] !== undefined) expected[key] = current[key];
        for (const key of ['photo', 'treatment']) {
          if (current.imagery?.[key] !== undefined) expected.imagery[key] = current.imagery[key];
        }
        content = JSON.stringify(expected, null, 2) + '\n';
      }
      const same = before === content || (CHECK && before && rel.endsWith('/tokens.json') && isDeepStrictEqual(JSON.parse(before), JSON.parse(content)));
      if (same) {
        unchanged += 1;
        continue;
      }
      if (CHECK) {
        drift.push(rel);
        continue;
      }
      if (DRY) {
        process.stdout.write(`  ~ ${rel} (${metrics.body}:1 gövde · ${metrics.accentInk}:1 accent)\n`);
        continue;
      }
      fs.mkdirSync(path.dirname(abs), { recursive: true });
      fs.writeFileSync(abs, content);
      written += 1;
    }
  }

  console.log(
    `${CHECK ? 'kontrol' : DRY ? 'kuru' : 'yazıldı'} · ${queue.length} stil · ${written} dosya yazıldı · ${unchanged} değişmedi` +
      (drift.length ? ` · ${drift.length} drift` : ''),
  );
  if (CHECK) {
    for (const d of drift.slice(0, 20)) console.log(`  × ${d}`);
    return drift.length ? 1 : 0;
  }
  if (DRY) {
    console.log('spec geçerli; yazmak için --dry olmadan çalıştır');
    return 0;
  }

  // 2) boru hattı — yalnız bu listedeki slug'lar için
  const slugs = queue.map((q) => q.spec.slug).join(',');
  if (NO_RENDER) {
    console.log('render atlandı (--no-render) — sıra: apply-fragments, atamalar, build-gallery');
  }
  run('kit/apply-fragments.mjs', ['--apply'], 'fragment senkronu');
  run('kit/assign-layouts.mjs', ['--apply', '--styles', slugs], 'layout ataması');
  run('kit/assign-imagery.mjs', ['--apply', '--styles', slugs], 'görsel ataması');
  run('kit/assign-content.mjs', ['--apply', '--styles', slugs], 'içerik ataması');

  if (!NO_RENDER) {
    run('kit/render/render-shots.mjs', ['--styles', slugs, '--force', '--jobs', '2'], 'tek sayfa render');
    run('kit/render/optimize-shots.mjs', ['--styles', slugs], 'görsel optimizasyonu');
    run('kit/sync-shot-tables.mjs', ['--write', '--styles', slugs], 'doküman tabloları');
  }

  run('kit/build-gallery.mjs', [], 'galeri + indeks');
  run('kit/export-tokens.mjs', [], 'token export');
  run('kit/build-slim-index.mjs', [], 'slim indeks');
  run('kit/report.mjs', [], 'rapor');
  run('kit/composition-report.mjs', [], 'kompozisyon raporu');
  if (!NO_RENDER) run('kit/render/phash.mjs', ['--write', '--force'], 'görsel imza baseline');

  console.log(`\nbitti · ${queue.length} stil hazır. Doğrulama: bash kit/gates.sh`);
  return 0;
}

process.exit(main());
