#!/usr/bin/env node
/**
 * kit/check-content.mjs — sektör içerik katmanı kapısı (P1).
 *
 * Neden: 145 stil aynı kurgusal SaaS metniyle render ediliyordu; "En iyi: otel/emlak" diyen bir
 * stil ekranda görev paneli gösteriyordu. P1 ile her stile `industries[]` ve bir içerik paketi
 * (`kit/content/<id>.json`) atandı. Bu kapı sessiz drift'i yakalar:
 *
 *   · atama   : industries[0] geçerli, paket dosyası var, her paket ≥3 stilde canlı (ölü paket yok)
 *   · sözleşme: paketler zorunlu alanları taşır; metin uzunlukları taşma yaratmayacak sınırda
 *   · şablon  : hero partial'ları + landing logo şeridi `__COPY_*__` kullanır (literal demo metni yok)
 *   · eşleme  : partial'lardaki her yer tutucu render-shots'un sağladığı anahtar kümesinde
 *
 * Kullanım: node kit/check-content.mjs [--json]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const CONTENT_DIR = path.join(ROOT, 'kit', 'content');
const PARTIALS = path.join(ROOT, 'kit', 'render', 'partials');
const JSON_OUT = process.argv.includes('--json');

const errors = [];
const warnings = [];

const packFiles = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.json'));
const packs = new Map(packFiles.map((f) => [f.replace(/\.json$/, ''), JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8'))]));

const LIMITS = { h1: 56, lede: 120, eyebrow: 34, ctaPrimary: 26, ctaSecondary: 26, proof: 30, logo: 18, tile: 18 };
const REQUIRED = ['label', 'tags', 'hero', 'proofs', 'logos', 'logoLabel', 'tiles'];

for (const [id, p] of packs) {
  for (const key of REQUIRED) if (!(key in p)) errors.push(`kit/content/${id}.json: ${key} yok`);
  if (!Array.isArray(p.proofs) || p.proofs.length < 3) errors.push(`kit/content/${id}.json: proofs ≥3 olmalı`);
  if (!Array.isArray(p.logos) || p.logos.length < 5) errors.push(`kit/content/${id}.json: logos ≥5 olmalı`);
  if (!Array.isArray(p.tiles) || p.tiles.length < 4) errors.push(`kit/content/${id}.json: tiles ≥4 olmalı`);
  for (const [field, max] of Object.entries(LIMITS)) {
    const val = field in (p.hero ?? {}) ? p.hero[field] : null;
    if (val && String(val).length > max) errors.push(`kit/content/${id}.json: hero.${field} ${String(val).length} karakter (>${max}) — taşma riski`);
  }
  for (const proof of p.proofs ?? []) if (proof.length > LIMITS.proof) warnings.push(`kit/content/${id}.json: proof "${proof}" uzun (>${LIMITS.proof})`);
  for (const logo of p.logos ?? []) if (logo.length > LIMITS.logo) warnings.push(`kit/content/${id}.json: logo "${logo}" uzun (>${LIMITS.logo})`);
}

// atama
const usage = new Map([...packs.keys()].map((id) => [id, 0]));
const styles = fs
  .readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
  .map((d) => ({ dirName: d.name, tokens: JSON.parse(fs.readFileSync(path.join(STYLES_DIR, d.name, 'tokens.json'), 'utf8')) }))
  .sort((a, b) => parseInt(a.dirName, 10) - parseInt(b.dirName, 10));

for (const s of styles) {
  const ind = s.tokens.industries;
  if (!Array.isArray(ind) || !ind.length) {
    errors.push(`${s.dirName}: industries[] yok — node kit/assign-content.mjs --apply`);
    continue;
  }
  if (!packs.has(ind[0])) errors.push(`${s.dirName}: industries[0] "${ind[0]}" için paket yok`);
  else usage.set(ind[0], usage.get(ind[0]) + 1);
  for (const id of ind) if (!packs.has(id)) errors.push(`${s.dirName}: industries[] "${id}" tanımsız`);
}
for (const [id, n] of usage) if (n < 3) errors.push(`kit/content/${id}.json: yalnız ${n} stilde kullanılıyor (ölü paket, en az 3)`);

// şablonlar: literal demo metni kalmamalı, yer tutucular eşleşmeli
const COPY_RE = /__COPY_([A-Z0-9_]+)__/g;
const provided = new Set();
for (const [, key] of fs.readFileSync(path.join(ROOT, 'kit', 'render', 'render-shots.mjs'), 'utf8').matchAll(/__COPY_([A-Z0-9_]+)__:/g)) provided.add(key);
const partialFiles = fs.readdirSync(PARTIALS).filter((f) => /^hero-.*\.html$/.test(f));
const HARD_COPY = /Ürün ekibin|Ücretsiz başla|Kart gerekmez|Demo izle|Sprint planı|Ekip alanı/;
for (const f of [...partialFiles, 'landing.html', 'dark-landing.html']) {
  const p = f.endsWith('.html') && !f.startsWith('hero-') ? path.join(ROOT, 'kit', 'render', f) : path.join(PARTIALS, f);
  if (!fs.existsSync(p)) {
    errors.push(`şablon yok: ${path.relative(ROOT, p)}`);
    continue;
  }
  const html = fs.readFileSync(p, 'utf8');
  if (HARD_COPY.test(html)) errors.push(`${path.relative(ROOT, p)}: literal demo metni kaldı (__COPY_*__ kullan)`);
  for (const [, key] of html.matchAll(COPY_RE)) {
    if (!provided.has(key)) errors.push(`${path.relative(ROOT, p)}: __COPY_${key}__ için render-shots'ta karşılık yok`);
  }
}
if (partialFiles.length < 8) errors.push(`hero partial sayısı ${partialFiles.length} (8 arketip bekleniyor)`);

const covered = [...usage.values()].filter((n) => n > 0).length;
if (JSON_OUT) console.log(JSON.stringify({ packs: packs.size, styles: styles.length, usage: [...usage], errors, warnings }, null, 2));
else {
  for (const w of warnings) console.log(`  ! ${w}`);
  for (const e of errors) console.log(`  × ${e}`);
  console.log(
    `içerik katmanı · ${styles.length} stil · ${covered}/${packs.size} sektör kullanımda · ` +
      `${errors.length} hata · ${warnings.length} uyarı${errors.length ? '' : ' — temiz'}`,
  );
}
process.exit(errors.length ? 1 : 0);
