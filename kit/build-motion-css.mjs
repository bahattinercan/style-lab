#!/usr/bin/env node
/**
 * kit/build-motion-css.mjs — hareket sözlüğünü CSS'e derler (kit/render/motion/patterns.css).
 *
 * Neden: desenlerin tek kaynağı `kit/render/motion/patterns.json`. Canlı önizleme ve lab aynı CSS'i
 * kullanır; iki yerde elle yazılan animasyon drift üretir. Bu script JSON'daki `css` alanlarını
 * sırayla birleştirir ve `--check` ile bayatlığı yakalar.
 *
 * Kullanım: node kit/build-motion-css.mjs | --check | --json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JSON_PATH = path.join(ROOT, 'kit', 'render', 'motion', 'patterns.json');
const OUT = path.join(ROOT, 'kit', 'render', 'motion', 'patterns.css');
const CHECK = process.argv.includes('--check');

const defs = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
const patterns = defs.patterns ?? [];
if (!patterns.length) {
  console.error('× patterns.json boş');
  process.exit(1);
}

const header = [
  '/* kit/render/motion/patterns.css — ÜRETİLEN DOSYA (elle düzenleme)',
  '   Kaynak: kit/render/motion/patterns.json · üretim: node kit/build-motion-css.mjs',
  `   Desen: ${patterns.length} · reduced stratejisi: ${(defs.reducedStrategies ?? []).length}`,
  '   Değişkenler: --mi-dur/--mi-ease/--mi-offset/--mi-stagger (giriş), --ms-* (scroll), --mh-* (hover) */',
  '',
];

const body = [];
for (const p of patterns) {
  if (!p.css) {
    console.error(`× ${p.id}: css alanı yok`);
    process.exit(1);
  }
  body.push(`/* ${p.kind} · ${p.id} — ${p.label ?? ''} */`);
  body.push(p.css.trim());
  body.push('');
}

/* reduced-motion: her desen kendi stratejisini beyan eder; global güvenlik ağı burada */
body.push('/* reduced-motion güvenlik ağı (strateji ayrıntısı patterns.json → reduced) */');
body.push('@media (prefers-reduced-motion: reduce) {');
body.push('  [data-motion] .mi, [data-motion] .mi-line > span, [data-motion] .mi-char,');
body.push('  [data-motion] .ms, [data-motion-hover] .mh, [data-motion-hover] .mh::after {');
body.push('    transition-duration: 0.01ms !important; transition-delay: 0ms !important;');
body.push('    animation-duration: 0.01ms !important; animation-delay: 0ms !important;');
body.push('    transform: none !important; filter: none !important; clip-path: none !important;');
body.push('    opacity: 1 !important;');
body.push('  }');
body.push('  [data-motion=\'pin-scrub\'] .ms, [data-motion=\'parallax\'] .ms { transform: none !important; opacity: 1 !important; }');
body.push('}');
body.push('');

const css = [...header, ...body].join('\n');
if (CHECK) {
  const prev = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
  if (prev === null) {
    console.log('× kit/render/motion/patterns.css yok — node kit/build-motion-css.mjs');
    process.exit(1);
  }
  if (prev !== css) {
    console.log('× patterns.css bayat — node kit/build-motion-css.mjs');
    process.exit(1);
  }
  console.log(`✓ patterns.css güncel (${patterns.length} desen)`);
  process.exit(0);
}
fs.writeFileSync(OUT, css);
console.log(`patterns.css yazıldı · ${patterns.length} desen · ${(css.length / 1024).toFixed(1)} KB`);
