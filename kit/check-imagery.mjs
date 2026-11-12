#!/usr/bin/env node
/**
 * kit/check-imagery.mjs — görsel katman kapısı (P2).
 *
 * Neden: `tokens.json → imagery` v4'e kadar yalnız prose'du (`imagery.photos`: "tek konu, yumuşak
 * ışık…") ve 31 şablonun hiçbirinde `<img>` yoktu. P2 ile her stile bir dosya + bir treatment atandı.
 * Bu kapı sessiz drift'i yakalar:
 *
 *   · index    : `imagery.photo` kit/images/INDEX.json'da var mı, treatment geçerli mi
 *   · tutarlılık: plain ⇒ strength 0; scrim/duotone/grain ⇒ strength > 0
 *   · şablon   : fotoğraf kullanan arketipler (fullbleed, centered) `__PHOTO__` yer tutucusu taşır
 *   · kapsam   : fullbleed/centered stylerın hepsinde photo var (fotoğrafsız render sessizce düz kart olmasın)
 *
 * Kullanım: node kit/check-imagery.mjs [--json]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const INDEX = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'images', 'INDEX.json'), 'utf8'));
const FILES = new Set(INDEX.images.map((i) => i.file));
const MODES = new Set(['plain', 'scrim', 'duotone', 'grain']);
const JSON_OUT = process.argv.includes('--json');

const PHOTO_HEROES = new Set(['fullbleed', 'centered']);
const TEMPLATES = {
  fullbleed: 'kit/render/partials/hero-fullbleed.html',
  centered: 'kit/render/partials/hero-centered.html',
};

const errors = [];
const warnings = [];

const styles = fs
  .readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
  .map((d) => {
    const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, d.name, 'tokens.json'), 'utf8'));
    return { dirName: d.name, slug: tokens.slug ?? d.name.replace(/^\d+-/, ''), tokens };
  })
  .sort((a, b) => parseInt(a.dirName, 10) - parseInt(b.dirName, 10));

const usage = new Map();
for (const s of styles) {
  const img = s.tokens.imagery ?? {};
  const tag = s.dirName;
  if (!img.photo) {
    errors.push(`${tag}: imagery.photo yok — node kit/assign-imagery.mjs --apply`);
    continue;
  }
  if (!FILES.has(img.photo)) errors.push(`${tag}: imagery.photo "${img.photo}" INDEX.json'da yok`);
  usage.set(img.photo, (usage.get(img.photo) ?? 0) + 1);

  const t = img.treatment ?? {};
  if (!MODES.has(t.mode)) errors.push(`${tag}: imagery.treatment.mode "${t.mode}" geçersiz (${[...MODES].join('|')})`);
  const strength = Number(t.strength);
  if (!Number.isFinite(strength) || strength < 0 || strength > 0.8) {
    errors.push(`${tag}: treatment.strength ${t.strength} aralık dışı (0…0.8)`);
  } else if (t.mode === 'plain' && strength !== 0) {
    errors.push(`${tag}: plain treatment strength 0 olmalı (şu an ${strength})`);
  } else if (t.mode !== 'plain' && strength <= 0) {
    errors.push(`${tag}: ${t.mode} treatment strength > 0 olmalı`);
  }

  const hero = s.tokens.layout?.hero;
  if (PHOTO_HEROES.has(hero) && !img.photo) errors.push(`${tag}: hero "${hero}" fotoğraf kullanıyor ama photo yok`);
}

// şablonlar fotoğraf yer tutucusunu taşımalı
for (const [hero, rel] of Object.entries(TEMPLATES)) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) {
    errors.push(`${rel} yok (hero "${hero}")`);
    continue;
  }
  const html = fs.readFileSync(p, 'utf8');
  if (!html.includes('__PHOTO__')) errors.push(`${rel}: __PHOTO__ yer tutucusu yok (fotoğraf sessizce düşer)`);
  if (!html.includes('__PHOTO_ATTRS__')) errors.push(`${rel}: __PHOTO_ATTRS__ (treatment) yok`);
}

// ölü görsel: hiç kullanılmayan dosya (yeni stil eklendikçe değişebilir → uyarı)
for (const f of FILES) if (!usage.has(f)) warnings.push(`kit/images/${f}: hiçbir stilde kullanılmıyor`);

// kullanım yoğunluğu: tek fotoğrafa aşırı yüklenme
const total = styles.length;
for (const [file, n] of usage) {
  if (n / total > 0.25) warnings.push(`kit/images/${file}: ${n}/${total} stil (%${Math.round((n / total) * 100)}) — çeşitlilik düşük`);
}

if (JSON_OUT) {
  console.log(JSON.stringify({ styles: total, used: usage.size, errors, warnings }, null, 2));
} else {
  for (const w of warnings) console.log(`  ! ${w}`);
  for (const e of errors) console.log(`  × ${e}`);
  console.log(
    `görsel katman · ${total} stil · ${usage.size}/${FILES.size} fotoğraf kullanımda · ` +
      `${errors.length} hata · ${warnings.length} uyarı${errors.length ? '' : ' — temiz'}`,
  );
}
process.exit(errors.length ? 1 : 0);
