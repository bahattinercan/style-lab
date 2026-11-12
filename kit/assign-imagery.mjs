#!/usr/bin/env node
/**
 * kit/assign-imagery.mjs — görsel katmanı ataması (P2).
 *
 * Her stile bir fotoğraf + bir `treatment` (scrim/duotone/grain/plain) atar.
 * Seçim aile → etiket eşlemesi + hash ile deterministik; elle "hissiyat" seçimi yok.
 *
 * Gerekçe: `imagery.photos` prose'u vardı ama render'da hiç fotoğraf yoktu (31 şablonun
 * hiçbirinde `<img>` yoktu). Bu script `tokens.json → imagery.photo|treatment` yazar.
 *
 * Kullanım: node kit/assign-imagery.mjs --dry | --apply | --check [--styles a,b]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const INDEX = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'images', 'INDEX.json'), 'utf8'));
const FILES = INDEX.images.map((i) => i.file);

const ARGV = process.argv.slice(2);
const APPLY = ARGV.includes('--apply');
const CHECK = ARGV.includes('--check');
const JSON_OUT = ARGV.includes('--json');
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  return i >= 0 ? new Set((ARGV[i + 1] ?? '').split(',').filter(Boolean)) : null;
})();

const FAMILIES = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'families.json'), 'utf8')).families;
const familyOf = (num) => FAMILIES.find((f) => num >= f.from && num <= f.to)?.name ?? 'Diğer';

/** Aile → fotoğraf havuzu (INDEX dosya adları) ve treatment. */
/** Stil bazlı istisna: aile havuzu/filtresi o stilin zemin polaritesine uymuyorsa burada ezilir.
 *  Neden: 'Sahne & Prestij' ailesi hem koyu (146/148/149/151) hem açık (147/150) zemin taşıyor;
 *  açık zeminde scrim fotoğrafı çamurlu, koyu zeminde plain fotoğraf parlak kalıyor. */
const BY_SLUG = {
  'agency-portfolio': { pool: ['int-04.jpg', 'tex-04.jpg'], treatment: { mode: 'plain', strength: 0 } },
  'lookbook-editorial': { pool: ['tex-01.jpg', 'int-01.jpg'], treatment: { mode: 'grain', strength: 0.35 } },
  'noir-estate': { pool: ['arch-01.jpg', 'arch-04.jpg'], treatment: { mode: 'scrim', strength: 0.46 } },
  'boutique-hotel': { pool: ['int-01.jpg', 'int-02.jpg'], treatment: { mode: 'scrim', strength: 0.4 } },
  'product-launch': { pool: ['obj-03.jpg', 'obj-02.jpg'], treatment: { mode: 'scrim', strength: 0.45 } },
  'dark-dashboard': { pool: ['urb-02.jpg', 'obj-03.jpg'], treatment: { mode: 'scrim', strength: 0.55 } },
};

const BY_FAMILY = {
  Sade: { pool: ['int-03.jpg', 'int-04.jpg', 'int-01.jpg'], treatment: { mode: 'plain', strength: 0 } },
  Yüzey: { pool: ['tex-02.jpg', 'nat-02.jpg', 'int-02.jpg'], treatment: { mode: 'scrim', strength: 0.45 } },
  Cesur: { pool: ['obj-02.jpg', 'obj-03.jpg', 'obj-04.jpg'], treatment: { mode: 'duotone', strength: 0.35 } },
  Retro: { pool: ['obj-03.jpg', 'tex-02.jpg', 'urb-02.jpg'], treatment: { mode: 'duotone', strength: 0.45 } },
  Sanatsal: { pool: ['tex-01.jpg', 'nat-02.jpg', 'tex-02.jpg'], treatment: { mode: 'grain', strength: 0.4 } },
  Geometrik: { pool: ['arch-02.jpg', 'urb-02.jpg'], treatment: { mode: 'scrim', strength: 0.3 } },
  Tipografik: { pool: ['int-04.jpg', 'tex-04.jpg'], treatment: { mode: 'plain', strength: 0 } },
  Organik: { pool: ['nat-01.jpg', 'nat-03.jpg'], treatment: { mode: 'plain', strength: 0 } },
  'Yeni Dalga': { pool: ['tex-02.jpg', 'urb-02.jpg'], treatment: { mode: 'duotone', strength: 0.4 } },
  Zamansız: { pool: ['arch-01.jpg', 'arch-04.jpg', 'int-02.jpg'], treatment: { mode: 'scrim', strength: 0.35 } },
  Teknik: { pool: ['urb-02.jpg', 'obj-03.jpg'], treatment: { mode: 'scrim', strength: 0.5 } },
  'Veri & Gösterge': { pool: ['urb-02.jpg', 'obj-03.jpg'], treatment: { mode: 'scrim', strength: 0.55 } },
  Endüstriyel: { pool: ['tex-03.jpg', 'arch-02.jpg', 'tex-04.jpg'], treatment: { mode: 'grain', strength: 0.35 } },
  'Kültürel & Bölgesel': { pool: ['tex-01.jpg', 'tex-03.jpg', 'int-01.jpg'], treatment: { mode: 'grain', strength: 0.4 } },
  'Doğa & Organik': { pool: ['nat-01.jpg', 'nat-02.jpg', 'nat-03.jpg', 'nat-04.jpg'], treatment: { mode: 'plain', strength: 0 } },
  'Yayın & Tipografi': { pool: ['int-01.jpg', 'int-04.jpg', 'tex-01.jpg'], treatment: { mode: 'plain', strength: 0 } },
  'Hareket & Optik': { pool: ['tex-02.jpg', 'nat-02.jpg', 'obj-03.jpg'], treatment: { mode: 'duotone', strength: 0.4 } },
  Etkileşim: { pool: ['obj-03.jpg', 'urb-02.jpg', 'int-02.jpg'], treatment: { mode: 'scrim', strength: 0.4 } },
  Oyuncul: { pool: ['obj-02.jpg', 'obj-04.jpg', 'tex-02.jpg'], treatment: { mode: 'duotone', strength: 0.3 } },
  'Materyal & Lüks': { pool: ['arch-01.jpg', 'tex-03.jpg', 'int-01.jpg'], treatment: { mode: 'grain', strength: 0.25 } },
  'Deneysel & Gelecek': { pool: ['nat-02.jpg', 'tex-02.jpg', 'urb-02.jpg'], treatment: { mode: 'grain', strength: 0.45 } },
  'Sahne & Prestij': { pool: ['arch-01.jpg', 'arch-04.jpg', 'int-01.jpg', 'int-02.jpg'], treatment: { mode: 'scrim', strength: 0.4 } },
  Diğer: { pool: ['int-03.jpg'], treatment: { mode: 'plain', strength: 0 } },
};

function hash(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

function discover() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => {
      const num = parseInt(d.name, 10);
      const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, d.name, 'tokens.json'), 'utf8'));
      return { dirName: d.name, num, slug: tokens.slug ?? d.name.replace(/^\d+-/, ''), family: familyOf(num), tokens, path: path.join(STYLES_DIR, d.name, 'tokens.json') };
    })
    .sort((a, b) => a.num - b.num);
}

function compute(rows) {
  return rows.map((r) => {
    const conf = BY_SLUG[r.slug] ?? BY_FAMILY[r.family] ?? BY_FAMILY.Diğer;
    const pool = conf.pool.filter((f) => FILES.includes(f));
    const photo = pool[hash(r.slug) % pool.length] ?? FILES[0];
    return { ...r, photo, treatment: conf.treatment };
  });
}

function withImagery(tokens, photo, treatment) {
  const next = { ...tokens };
  const imagery = { ...(next.imagery ?? {}) };
  imagery.photo = photo;
  imagery.treatment = treatment;
  next.imagery = imagery;
  return next;
}

function main() {
  const rows = discover();
  const all = compute(rows);
  const scoped = ONLY ? all.filter((a) => ONLY.has(a.slug)) : all;
  const drift = scoped.filter((a) => {
    const cur = a.tokens.imagery ?? {};
    return cur.photo !== a.photo || JSON.stringify(cur.treatment) !== JSON.stringify(a.treatment);
  });

  if (APPLY) {
    for (const a of scoped) fs.writeFileSync(a.path, JSON.stringify(withImagery(a.tokens, a.photo, a.treatment), null, 2) + '\n');
    console.log(`yazıldı: ${scoped.length} tokens.json (imagery.photo + treatment)`);
    const tally = new Map();
    for (const a of all) tally.set(a.photo, (tally.get(a.photo) ?? 0) + 1);
    if (!JSON_OUT) for (const [k, v] of [...tally].sort((x, y) => y[1] - x[1])) console.log(`  ${k.padEnd(16)} ${v}`);
    return 0;
  }
  if (CHECK) {
    if (drift.length) {
      console.log(`× ${drift.length} stilde imagery ataması öneriden farklı:`);
      for (const d of drift.slice(0, 8)) console.log(`  - ${d.dirName}: ${JSON.stringify(d.tokens.imagery?.photo)} → ${d.photo}`);
      console.log('düzeltme: node kit/assign-imagery.mjs --apply');
      return 1;
    }
    console.log(`✓ görsel ataması güncel (${scoped.length} stil)`);
    return 0;
  }
  if (JSON_OUT) return console.log(JSON.stringify(scoped.map((a) => ({ slug: a.slug, photo: a.photo, treatment: a.treatment })), null, 2)), 0;
  for (const a of scoped) console.log(a.dirName.padEnd(28), a.photo.padEnd(16), a.treatment.mode, a.treatment.strength);
  return 0;
}

process.exit(main());
