#!/usr/bin/env node
/**
 * kit/normalize-motion.mjs — `tokens.json → motion` prose'unu hedef-bağımsız sayılara çevirir.
 *
 * Neden: `tokens.json` insan için yazılmış metin taşır ("ease-out / cubic-bezier(.2,.6,.2,1)",
 * "0.5s", "+125%", "top 86%"). CSS bu metni doğrudan kullanabilir; Flutter/SwiftUI/Compose
 * kullanamaz. Bu adım tek normalizasyon noktasıdır: `kit/dist/motion.json` üretilir,
 * tüm emitter'lar (kit/export/*) buradan okur. Ayrıştırılamayan değer **kapıyı düşürür** —
 * yeni bir stil sessizce bozuk eğri ekleyemez.
 *
 * Kullanım:
 *   node kit/normalize-motion.mjs            # yaz
 *   node kit/normalize-motion.mjs --check    # güncel mi? değilse exit 1
 *   node kit/normalize-motion.mjs --json     # makine-okur özet (yazmaz)
 *   node kit/normalize-motion.mjs --styles 46,47   # yalnız bu stilleri raporla
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  parseCurve,
  parseDurationMs,
  parseNumber,
  parsePercent,
  parsePx,
  parseTrigger,
} from './lib/tokens.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const OUT = path.join(ROOT, 'kit', 'dist', 'motion.json');

const ARGV = process.argv.slice(2);
const CHECK = ARGV.includes('--check');
const JSON_OUT = ARGV.includes('--json');
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  if (i < 0) return null;
  const list = (ARGV[i + 1] ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => (/^\d+$/.test(s) ? String(parseInt(s, 10)) : s));
  return new Set(list);
})();

const errors = [];

function styleDirs() {
  return fs
    .readdirSync(STYLES_DIR)
    .filter((d) => /^\d{2,3}-/.test(d) && fs.existsSync(path.join(STYLES_DIR, d, 'tokens.json')))
    .sort();
}

/** Alan adı → normalize edici. Tanınmayan alanlar (note, property, from, to…) olduğu gibi kalır. */
const FIELD = {
  duration: ['durationMs', parseDurationMs],
  ease: ['curve', parseCurve],
  offsetY: ['offsetYPx', parsePx],
  stagger: ['stagger', parseNumber],
  imageScale: ['imageScale', parseNumber],
  scrub: ['scrub', parseNumber],
  trigger: ['trigger', (v) => ({ raw: String(v), topPercent: parseTrigger(v) })],
  distance: ['distance', (v) => (v == null ? null : (parsePercent(v) ?? { raw: String(v), percent: null }))],
  blur: ['blurPx', parsePx],
  enabled: ['enabled', (v) => v === true || v === 'true'],
  once: ['once', (v) => v === true || v === 'true'],
};

function normalizeSequence(tag, key, seq) {
  const out = {};
  for (const [field, value] of Object.entries(seq)) {
    const rule = FIELD[field];
    if (!rule) {
      out[field] = value;
      continue;
    }
    const [name, parse] = rule;
    const parsed = parse(value);
    if (parsed == null && value != null) {
      errors.push(`${tag}: motion.sequences.${key}.${field} ayrıştırılamadı (${JSON.stringify(value)})`);
      out[name] = null;
      out[`${name}Raw`] = value;
      continue;
    }
    out[name] = parsed;
  }
  return out;
}

function normalizeStyle(dir) {
  const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
  const tag = `${dir.replace(/^\d+-/, '')}`;
  const motion = tokens.motion ?? {};
  const sequences = {};

  for (const [key, seq] of Object.entries(motion.sequences ?? {})) {
    sequences[key] = normalizeSequence(tag, key, seq);
  }

  const topCurve = motion.easing ? parseCurve(motion.easing) : null;
  if (motion.easing && !topCurve) {
    errors.push(`${tag}: motion.easing ayrıştırılamadı (${JSON.stringify(motion.easing)})`);
  }

  return {
    num: tokens.num,
    slug: tokens.slug,
    name: tokens.name,
    family: motion.family ?? null,
    fastMs: parseDurationMs(motion.fast),
    baseMs: parseDurationMs(motion.base),
    slowMs: parseDurationMs(motion.slow),
    curve: topCurve,
    properties: motion.properties ?? [],
    forbidden: motion.forbidden ?? [],
    reduced: motion.reduced ?? null,
    sequences,
    // M1: hareket sözlüğü (desen kimlikleri). Sayı imzasının yanında DESEN imzası.
    choreography: motion.choreography ?? null,
  };
}

function build() {
  const dirs = styleDirs().filter((dir) => {
    if (!ONLY) return true;
    const slug = dir.replace(/^\d+-/, '');
    const num = String(parseInt(dir, 10));
    return ONLY.has(slug) || ONLY.has(num);
  });

  const styles = {};
  for (const dir of dirs) {
    const s = normalizeStyle(dir);
    styles[s.slug] = s;
  }

  const curves = new Set();
  let approximated = 0;
  let stepCurves = 0;
  for (const s of Object.values(styles)) {
    const list = [s.curve, ...Object.values(s.sequences).map((q) => q.curve)].filter(Boolean);
    for (const c of list) {
      curves.add(c.css);
      if (c.approximated) approximated++;
      if (c.kind === 'steps') stepCurves++;
    }
  }

  return {
    generatedBy: 'kit/normalize-motion.mjs',
    contract: {
      durationMs: 'sayı (ms)',
      curve: '{ kind: cubic|named|steps, points?, steps?, name?, approximated?, source }',
      offsetYPx: 'sayı (px)',
      trigger: '{ raw, topPercent }',
      distance: '{ percent, sign }',
      reduced: 'serbest metin (hedef reduced-motion politikasını kendisi kurar)',
      choreography: "{ enter, scroll, hover, page?, reduced } — id'ler kit/render/motion/patterns.json",
    },
    counts: {
      styles: Object.keys(styles).length,
      curves: curves.size,
      approximated,
      steps: stepCurves,
      stylesWithoutCurve: Object.values(styles).filter((s) => !s.curve).length,
    },
    styles,
  };
}

const doc = build();
const serialized = JSON.stringify(doc, null, 2) + '\n';

if (JSON_OUT) {
  console.log(JSON.stringify({ counts: doc.counts, errors }, null, 2));
} else if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  const synced = current === serialized;
  console.log(`motion normalizasyonu · ${doc.counts.styles} stil · ${doc.counts.curves} farklı eğri · ${doc.counts.approximated} yaklaşım · ${doc.counts.steps} kademeli`);
  console.log(`  ${synced ? 'senkron' : 'EKSİK/GÜNCEL DEĞİL'}  kit/dist/motion.json`);
  if (doc.counts.stylesWithoutCurve) {
    const missing = Object.values(doc.styles).filter((s) => !s.curve).map((s) => s.slug);
    console.log(`  ✗ ${missing.length} stilde motion.easing yok/ayrıştırılamadı: ${missing.slice(0, 8).join(', ')}`);
    errors.push('eksik eğri');
  }
  if (errors.length) {
    for (const e of errors.slice(0, 20)) console.log(`  ✗ ${e}`);
    if (errors.length > 20) console.log(`  … +${errors.length - 20}`);
    process.exit(1);
  }
  if (!synced) {
    console.log('  düzelt: node kit/normalize-motion.mjs');
    process.exit(1);
  }
  console.log('  sonuç: temiz');
} else {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, serialized);
  console.log(`yazıldı: kit/dist/motion.json · ${doc.counts.styles} stil · ${doc.counts.curves} farklı eğri · ${doc.counts.approximated} yaklaşım · ${doc.counts.steps} kademeli`);
  if (errors.length) {
    for (const e of errors) console.log(`  ✗ ${e}`);
    process.exit(1);
  }
}
