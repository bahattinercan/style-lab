#!/usr/bin/env node
/**
 * kit/build-slim-index.mjs — ajan için hafif katalog indeksi (`kit/dist/index.slim.json`).
 *
 * Neden: `kit/styles.index.json` 1 MB (145 × 27 sahne yolu + gömülü token kopyası) — bir ajanın
 * okuyacağı dosya değil. Bu script seçim kararı için gereken **en az** alanı üretir:
 * slug, ad, aile, tek cümle, etiketler, koyu mod durumu, hareket özeti, uyumlu komşular, yollar.
 *
 * Kullanım:
 *   node kit/build-slim-index.mjs           # yaz
 *   node kit/build-slim-index.mjs --check   # güncel mi? değilse exit 1
 *   node kit/build-slim-index.mjs --json    # özet
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FULL = path.join(ROOT, 'kit', 'styles.index.json');
const MOTION = path.join(ROOT, 'kit', 'dist', 'motion.json');
const FAMILIES = path.join(ROOT, 'kit', 'families.json');
const OUT = path.join(ROOT, 'kit', 'dist', 'index.slim.json');

const CHECK = process.argv.includes('--check');
const JSON_OUT = process.argv.includes('--json');

const full = JSON.parse(fs.readFileSync(FULL, 'utf8'));
const motion = JSON.parse(fs.readFileSync(MOTION, 'utf8'));
const families = JSON.parse(fs.readFileSync(FAMILIES, 'utf8'));

const styles = full.styles.map((s) => {
  const m = motion.styles[s.slug] ?? {};
  const enter = m.sequences?.enter ?? {};
  const scroll = m.sequences?.scroll ?? {};
  const hover = m.sequences?.hover ?? {};
  return {
    num: s.num,
    slug: s.slug,
    name: s.name,
    family: s.family,
    tag: s.tag,
    tags: s.tags ?? [],
    dark: s.dark === 'full' || s.dark === true || s.palette?.dark != null,
    layout: s.layout ? { hero: s.layout.hero, nav: s.layout.nav, density: s.layout.density } : null,
    motion: {
      enterMs: enter.durationMs ?? null,
      ease: enter.curve?.css ?? m.curve?.css ?? null,
      scrollMs: scroll.durationMs ?? null,
      hoverMs: hover.durationMs ?? null,
    },
    compatible: s.neighbors?.compatible ?? [],
    forbidden: s.neighbors?.forbidden ?? [],
  };
});

const doc = {
  generatedBy: 'kit/build-slim-index.mjs',
  count: styles.length,
  families: families.families.map((f) => ({ name: f.name, from: f.from, to: f.to })),
  contract: {
    dir: 'dosya yolu: styles/<num>-<slug>/ (style.md · tokens.json · shots/01-landing.png · shots/17-dark-landing.png)',
    tag: 'tek cümlelik kimlik',
    tags: '3 etiket (arama/niyet eşleşmesi)',
    motion: 'normalize edilmiş hareket özeti (ms + eğri)',
    layout: 'kompozisyon arketipi: hero|nav|density (kit/render/layouts.json)',
    compatible: 'garnitür olarak kullanılabilir stiller (baskın değil)',
    forbidden: 'birlikte kullanılmayacak stiller',
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
  console.log(`slim indeks · ${doc.count} stil · ${kb} KB · ${synced ? 'senkron' : 'GÜNCEL DEĞİL'}`);
  if (!synced) {
    console.log('  düzelt: node kit/build-slim-index.mjs');
    process.exit(1);
  }
  if (serialized.length > 150 * 1024) {
    console.log(`  ✗ dosya 150 KB sınırını aştı (${kb} KB) — ajan okunabilirliği düşer`);
    process.exit(1);
  }
  process.exit(0);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, serialized);
console.log(`yazıldı: kit/dist/index.slim.json · ${doc.count} stil · ${kb} KB`);
