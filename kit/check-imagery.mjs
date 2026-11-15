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
import { createHash } from 'node:crypto';
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

function validateSvg(file) {
  const issues = [];
  if (!fs.existsSync(file)) return ['file missing'];
  const bytes = fs.readFileSync(file);
  const svg = bytes.toString('utf8');
  if (bytes.length > 64 * 1024) issues.push('over 64 KB');
  if (/<\s*(script|foreignObject)\b/i.test(svg)) issues.push('script/foreignObject forbidden');
  if (/@import\b/i.test(svg)) issues.push('@import forbidden');
  if (/url\(\s*['"]?\s*https?:/i.test(svg)) issues.push('external url() forbidden');
  if (/\b(?:href|src)\s*=\s*(['"])(?!#|data:image\/)[^'"]+\1/i.test(svg)) issues.push('external href/src forbidden');
  if (!/^\s*<svg\b[^>]*\bviewBox\s*=\s*(['"])[^'"]+\1/i.test(svg)) issues.push('SVG root/viewBox missing');
  const stack = [];
  const tags = svg.match(/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[^>]*>|<[^>]*>/gi) ?? [];
  for (const token of tags) {
    if (/^<!--|^<!\[CDATA\[|^<\?|^<!DOCTYPE/i.test(token)) continue;
    const closing = token.match(/^<\s*\/\s*([\w:-]+)\s*>$/);
    if (closing) {
      if (stack.pop() !== closing[1]) { issues.push('malformed XML tag nesting'); break; }
      continue;
    }
    const opening = token.match(/^<\s*([\w:-]+)(?:\s[^<>]*?)?\s*(\/?)>$/);
    if (!opening) { issues.push('malformed XML tag'); break; }
    if (!stack.length && opening[1].toLowerCase() !== 'svg') issues.push('root element is not svg');
    if (!opening[2]) stack.push(opening[1]);
  }
  if (stack.length) issues.push('unclosed XML tags');
  return [...new Set(issues)];
}

const styles = fs
  .readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
  .map((d) => {
    const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, d.name, 'tokens.json'), 'utf8'));
    return { dirName: d.name, slug: tokens.slug ?? d.name.replace(/^\d+-/, ''), tokens };
  })
  .sort((a, b) => parseInt(a.dirName, 10) - parseInt(b.dirName, 10));

const usage = new Map();
const artUsage = new Map();
for (const s of styles) {
  const img = s.tokens.imagery ?? {};
  const tag = s.dirName;
  if (!img.photo && !img.art) errors.push(`${tag}: imagery.photo veya imagery.art gerekli`);
  if (img.photo) {
    if (!FILES.has(img.photo)) errors.push(`${tag}: imagery.photo "${img.photo}" INDEX.json'da yok`);
    usage.set(img.photo, (usage.get(img.photo) ?? 0) + 1);
  }
  if (img.art) {
    const rel = String(img.art);
    const file = path.resolve(ROOT, 'kit/images', rel);
    const base = path.resolve(ROOT, 'kit/images/gen') + path.sep;
    if (!rel.startsWith('gen/') || rel.split('/').includes('..') || !rel.endsWith('.svg') || !file.startsWith(base)) errors.push(`${tag}: imagery.art "${rel}" kit/images/gen/ altındaki .svg olmalı`);
    else {
      const svgIssues = validateSvg(file);
      if (svgIssues.length) errors.push(`${tag}: imagery.art ${rel}: ${svgIssues.join(', ')}`);
      if (fs.existsSync(file)) {
        const digest = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
        if (artUsage.has(digest)) errors.push(`${tag}: imagery.art yineleniyor (${artUsage.get(digest)})`);
        else artUsage.set(digest, tag);
      }
    }
  }

  const t = img.treatment ?? {};
  if (img.photo) {
    if (!MODES.has(t.mode)) errors.push(`${tag}: imagery.treatment.mode "${t.mode}" geçersiz (${[...MODES].join('|')})`);
    const strength = Number(t.strength);
    if (!Number.isFinite(strength) || strength < 0 || strength > 0.8) {
      errors.push(`${tag}: treatment.strength ${t.strength} aralık dışı (0…0.8)`);
    } else if (t.mode === 'plain' && strength !== 0) {
      errors.push(`${tag}: plain treatment strength 0 olmalı (şu an ${strength})`);
    } else if (t.mode !== 'plain' && strength <= 0) {
      errors.push(`${tag}: ${t.mode} treatment strength > 0 olmalı`);
    }
  }

  const hero = s.tokens.layout?.hero;
  if (PHOTO_HEROES.has(hero) && !img.photo && !img.art) errors.push(`${tag}: hero "${hero}" medya kullanıyor ama photo/art yok`);
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
