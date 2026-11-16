#!/usr/bin/env node
/**
 * kit/check-language.mjs — English-only regression gate for project-authored text.
 *
 * Reason: a Turkish source string that survives a translation is invisible to the build (JSON parses,
 * CSS is valid, HTML renders) and only shows up on a published page. The gate looks for two signals:
 * - Turkish-specific letters (ı, İ, ş, ğ, ü, ö, ç) anywhere in tracked text;
 * - a curated list of unambiguous Turkish words, including their common inflections, which also
 *   catches Turkish text written without diacritics.
 *
 * Usage:
 * node kit/check-language.mjs            # gate (exit 1 when findings exist)
 * node kit/check-language.mjs --json     # machine-readable output
 * node kit/check-language.mjs --list     # every hit with context
 *
 * Deliberate exceptions are listed below with a reason each: identifiers, data keys, proper names and
 * the historical migration patterns that must stay byte-for-byte stable.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JSON_OUT = process.argv.includes('--json');
const LIST = process.argv.includes('--list');

/** Files whose content is not project-authored prose. */
const SKIP_DIRS = [
  '.git/',
  '_site/',
  'kit/site/thumbs/',
  'kit/fonts/',
  'kit/dist/',
  'kit/live/',
  'kit/images/',
  'styles/', // generated per-style sources; covered by the SPEC + style.md gates
  'refs/design-resources/archive/',
  'refs/design-resources/readme.snapshot.md/', // third-party snapshot, read-only
];
const SKIP_FILES = [
  'README.tr.md', // the only bilingual pair: README.md is English, README.tr.md stays Turkish (AGENTS.md rule 14)
  'kit/specs/legacy-01-151.json', // migrated in its own pass; measured separately
  'refs/design-resources/readme.snapshot.md',
  'kit/migrations/v6-shots.mjs', // historical migration: matches pre-v6 Turkish headings
  'kit/migrations/v6-strip.mjs',
  'refs/design-resources/rows.json',
  'refs/design-resources/link-health.json',
  'kit/styles.index.json',
  'kit/gallery.html',
  'kit/gallery.data.mjs',
  'kit/live-styles.js',
  'kit/render/shots.config.mjs',
  'kit/tokens.css',
  'docs/catalog.md',
];
const BINARY_EXT = new Set([
  '.png', '.jpg', '.jpeg', '.webp', '.woff2', '.woff', '.ttf', '.otf', '.ico', '.gif', '.pdf', '.zip', '.mp4', '.webm',
]);

/** Unambiguous Turkish words. A false positive costs a review; a miss costs a published page. */
const WORDS = [
  'bir', 'için', 'ile', 'daha', 'gibi', 'olarak', 'sonra', 'önce', 'değil', 'veya', 'nasıl', 'neden',
  'hangi', 'tüm', 'yalnız', 'sadece', 'göre', 'kadar', 'çünkü', 'eğer', 'aynı', 'gerekli', 'gerekir',
  'yapılır', 'yazılır', 'kullanılır', 'olmalı', 'yoksa', 'ayrıca', 'örnek', 'değer', 'renk', 'metin',
  'boyut', 'boşluk', 'köşe', 'gölge', 'çizgi', 'katman', 'düğme', 'tablo', 'başlık', 'gövde', 'etiket',
  'kural', 'sayfa', 'ekran', 'dosya', 'hedef', 'ölçü', 'tema', 'koyu', 'açık', 'şablon', 'sahne',
  'stil', 'uyarı', 'bulgu', 'güncel', 'tanımsız', 'zorunlu', 'sunucu', 'denetim', 'ölçüm', 'sığdırma',
  'görsel', 'tarayıcı', 'sürüm', 'işlem', 'çıktı', 'kaynak', 'içerik', 'ayar', 'yüzde', 'aralık',
  'sınır', 'doğrulama', 'çalıştır', 'kontrol', 'senkron', 'kodlama', 'parite', 'galeri', 'kompozisyon',
  'indeks', 'duman', 'tipografi', 'yazıtipi', 'harf', 'rakam', 'zemin', 'parametre', 'seviye', 'kenar',
  'dolgu', 'çerçeve', 'vurgu', 'ölçek', 'ağırlık', 'sütun', 'satır', 'paragraf', 'cümle', 'kelime',
  'birim', 'genişlik', 'yükseklik', 'doygunluk', 'bileşen', 'reçete', 'etkileşim', 'düğüm', 'kaydırma',
  'karakter', 'imza', 'ritim', 'hiyerarşi', 'denge', 'komşu', 'yasak', 'iskelet', 'şerit', 'derinlik',
  'doku', 'ışık', 'yoğunluk', 'kesikli', 'yuvarlak', 'keskin', 'yüzen', 'katmanlı', 'durum', 'biçim',
  'yüzey', 'sayısı', 'adedi', 'listesi', 'tablosu', 'başlığı', 'rengi', 'yazıldı', 'değişti', 'eksik',
  'rapor', 'kopya', 'yedek', 'bayat', 'eskimiş', 'silinemez', 'yazılamaz', 'okunamaz',
];

/** Common Turkish suffixes; matching stem + suffix keeps English look-alikes ("listen") out. */
const SUFFIXES = [
  'i', 'ı', 'u', 'ü', 'si', 'sı', 'su', 'sü', 'yi', 'yı', 'yu', 'yü',
  'ler', 'lar', 'leri', 'ları', 'de', 'da', 'den', 'dan', 'e', 'a', 'te', 'ta', 'ten', 'tan',
  'in', 'ın', 'un', 'ün', 'im', 'ım', 'nin', 'nın', 'lik', 'lık', 'luk', 'lük', 'ce', 'ca', 'çe', 'ça',
];
const LETTERS = 'A-Za-zÇĞİÖŞÜçğıöşü';
const WORD_RE = new RegExp(`(^|[^${LETTERS}])(${WORDS.join('|')})(?:${SUFFIXES.join('|')})?(?![${LETTERS}])`, 'iu');
const CHAR_RE = /[\u0131\u0130\u015f\u015e\u011f\u011e\u00fc\u00dc\u00f6\u00d6\u00e7\u00c7]/u;

/**
 * Line-level exceptions, each with a reason:
 * - band ids are data keys shared with kit/families.json and kit/specs/bands.json; renaming them is a
 *   schema migration, not a translation;
 * - the district names are proper nouns in the demo fixture;
 * - the diacritic tables are the matcher that makes Turkish and unaccented spellings compare equal;
 * - `push('tipografi', …)` names a token-export group, i.e. a generated file path.
 */
const LINE_EXCEPTIONS = [
  /"band":\s*"[a-z]+"/,
  /\[\d+,\s*\d+,\s*'[a-z]+'\]/,
  /^\s*"(oyun|operasyon|ticaret|kultur|saglik|ogrenme|materyal|tipografi|gelecek)":\s*\{$/, // band id keys in kit/specs/bands.json
  /Beşiktaş|Yalıkavak|Alaçatı|Çeşme|Türkiye/,
  /\.replace\(\/[\u0131\u015f\u011f\u00fc\u00f6\u00e7]/u,
  /toLocaleLowerCase\('tr'\)/,
  /push\('tipografi'/,
];

/** The frontmatter of a skill carries the bilingual trigger aliases; the body is English. */
function inSkillFrontmatter(rel, lines, index) {
  if (!/^skills\/.*SKILL\.md$/.test(rel)) return false;
  if (lines[0]?.trim() !== '---') return false;
  const end = lines.findIndex((line, i) => i > 0 && line.trim() === '---');
  return end > 0 && index <= end;
}

function trackedFiles() {
  const out = execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8' });
  return out.split(/\r?\n/).filter(Boolean);
}

function isSkipped(rel) {
  if (SKIP_FILES.includes(rel)) return true;
  if (SKIP_DIRS.some((dir) => rel.startsWith(dir))) return true;
  return BINARY_EXT.has(path.extname(rel).toLowerCase());
}

const findings = [];
for (const rel of trackedFiles()) {
  if (isSkipped(rel)) continue;
  const abs = path.join(ROOT, rel);
  let text;
  try {
    if (!fs.statSync(abs).isFile()) continue;
    if (fs.statSync(abs).size > 4_000_000) continue;
    text = fs.readFileSync(abs, 'utf8');
  } catch {
    continue;
  }
  if (text.includes('\u0000')) continue;
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (LINE_EXCEPTIONS.some((re) => re.test(line))) continue;
    if (inSkillFrontmatter(rel, lines, i)) continue;
    const wordHit = WORD_RE.test(line);
    const charHit = CHAR_RE.test(line);
    if (!wordHit && !charHit) continue;
    const reason = [wordHit ? 'word' : null, charHit ? 'char' : null].filter(Boolean).join('+');
    findings.push({ file: rel, line: i + 1, reason, text: line.trim().slice(0, 160) });
  }
}

if (JSON_OUT) {
  console.log(JSON.stringify({ findings: findings.length, files: new Set(findings.map((f) => f.file)).size, list: findings }, null, 2));
} else if (findings.length) {
  const byFile = new Map();
  for (const f of findings) byFile.set(f.file, [...(byFile.get(f.file) ?? []), f]);
  for (const [file, list] of [...byFile.entries()].sort((a, b) => b[1].length - a[1].length)) {
    console.error(`${file} (${list.length})`);
    if (LIST) for (const f of list.slice(0, 20)) console.error(`  ${f.line}: [${f.reason}] ${f.text}`);
  }
  console.error(`\ncheck-language: ${findings.length} findings in ${byFile.size} files`);
} else {
  console.log('check-language: clean');
}

process.exitCode = findings.length ? 1 : 0;
