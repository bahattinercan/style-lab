#!/usr/bin/env node
/**
 * kit/pick.mjs — niyet cümlesinden stil adayı çıkarır (ajanın ilk adımı).
 *
 * Neden: ajanın 145 stili tek tek okuması gerekmesin. `kit/dist/index.slim.json`
 * üzerinde sözlüksel puanlama yapar; gömülü model/vektör yok, kural açık ve denetlenebilir.
 * Çıktı: sıralı adaylar + **hangi terimin eşleştiği** (gerekçe) + dosya yolları.
 *
 * Kullanım:
 *   node kit/pick.mjs --intent "uzun okuma + sakin + kurumsal"
 *   node kit/pick.mjs --intent "veri yoğun panel" --family "Veri & Gösterge"
 *   node kit/pick.mjs --intent "premium emlak" --limit 5 --garnish
 *   node kit/pick.mjs --intent "..." --json
 *   node kit/pick.mjs --families
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SLIM = path.join(ROOT, 'kit', 'dist', 'index.slim.json');

const ARGV = process.argv.slice(2);
const argOf = (name) => {
  const i = ARGV.indexOf(name);
  return i < 0 ? null : (ARGV[i + 1] ?? null);
};
const JSON_OUT = ARGV.includes('--json');
const GARNISH = ARGV.includes('--garnish');
const FAMILIES_ONLY = ARGV.includes('--families');
const LIMIT = Number(argOf('--limit') ?? 3);
const FAMILY = argOf('--family');
const INTENT = argOf('--intent');

/** Türkçe küçük harf + diakritik sadeleştirme: "Kültürel" → "kulturel" */
function norm(text) {
  return String(text)
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/â/g, 'a')
    .replace(/[^a-z0-9&\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const STOP = new Set([
  've', 'ile', 'icin', 'bir', 'cok', 'daha', 'gibi', 'ama', 'veya', 'the', 'and', 'for', 'with', 'a', 'of', 'to',
  'ama', 'fakat', 'gerek', 'istiyorum', 'lazim', 'olan', 'olsun', 'tarzi', 'tarz', 'stil', 'style', 'tasarim',
]);

/**
 * Niyet sözlüğü: kullanıcı dili → katalog terimleri. Küçük ve bilinçli tutulur;
 * eşleşme bulunamazsa yalnız sözlüksel arama kalır (sihir yok).
 */
const SYNONYMS = {
  kurumsal: ['sade', 'executive', 'swiss', 'utility', 'minimal', 'premium', 'finans'],
  sakin: ['japandi', 'wabi-sabi', 'ethereal', 'sade', 'bosluk', 'yumusak'],
  okuma: ['editorial', 'yayin', 'kitap', 'literary', 'broadsheet', 'magazine', 'poetry', 'academic', 'serif'],
  metin: ['editorial', 'literary', 'poetry', 'academic', 'typography'],
  veri: ['veri', 'telemetry', 'trading', 'kpi', 'log', 'dashboard', 'tablo', 'gosterge', 'olcum'],
  dashboard: ['bento', 'executive-kpi', 'telemetry-grid', 'kanban', 'panel'],
  panel: ['dashboard', 'telemetry', 'kpi', 'console', 'trading'],
  luks: ['luxury', 'zamansiz', 'materyal', 'marble', 'brass', 'silk', 'grand-tourer', 'premium'],
  premium: ['luxury', 'grand-tourer', 'marble', 'brass', 'art-deco'],
  emlak: ['estate', 'grand-tourer', 'luxury', 'emlak', 'vitrin'],
  oyun: ['oyuncul', 'kids', 'dopamine', 'carnival', 'arcade', 'sticker', 'playground'],
  cocuk: ['kids', 'playground', 'dopamine', 'carnival', 'sticker'],
  eglence: ['dopamine', 'carnival', 'sticker', 'memphis', 'maximalism', 'celebration'],
  terminal: ['teknik', 'terminal', 'command-palette', 'keyboard', 'log', 'mono'],
  gelistirici: ['teknik', 'terminal', 'command-palette', 'keyboard', 'utility'],
  nostalji: ['retro', 'y2k', 'synthwave', 'vaporwave', 'arcade', 'pixel'],
  retro: ['retro', 'y2k', 'synthwave', 'vaporwave', 'arcade', 'pixel', 'frutiger'],
  gelecek: ['deneysel', 'speculative', 'nanotech', 'quantum', 'zero-gravity', 'holographic', 'ai-native'],
  deneysel: ['deneysel', 'speculative', 'moire', 'optical', 'generative', 'quantum'],
  dogal: ['doga', 'biophilic', 'organic', 'forest', 'japandi', 'botanical', 'topographic'],
  surdurulebilir: ['doga', 'biophilic', 'organic', 'japandi', 'forest'],
  kulturel: ['kulturel', 'nordic-folk', 'levant', 'azulejo', 'persian', 'block-print', 'textile'],
  endustriyel: ['endustriyel', 'blueprint', 'mes', 'saha', 'cockpit', 'calibration', 'warehouse'],
  muze: ['museum', 'thesis', 'editorial', 'academic', 'art-deco'],
  dergi: ['magazine', 'editorial', 'broadsheet', 'catalog'],
  kartvizit: ['minimal', 'swiss', 'editorial', 'letterpress'],
  moda: ['editorial', 'luxury', 'magazine', 'silk', 'marble'],
  saglik: ['vitals', 'clinical', 'utility', 'minimal', 'calm'],
  egitim: ['academic', 'encyclopedia', 'notebook', 'playground'],
  harita: ['map', 'atlas', 'topographic', 'terrain', 'spatial'],
  ses: ['voice-first', 'audio', 'album', 'waveform'],
  mobil: ['mobile', 'app', 'playground', 'command-palette'],
};

const FAMILY_SYNONYMS = {
  sade: ['Sade'],
  yuzey: ['Yüzey'],
  cesur: ['Cesur'],
  retro: ['Retro'],
  sanatsal: ['Sanatsal'],
  geometrik: ['Geometrik'],
  tipografik: ['Tipografik'],
  organik: ['Organik'],
  yenidalga: ['Yeni Dalga'],
  zamansiz: ['Zamansız'],
  teknik: ['Teknik'],
  veri: ['Veri & Gösterge'],
  endustriyel: ['Endüstriyel'],
  kulturel: ['Kültürel & Bölgesel'],
  doga: ['Doğa & Organik'],
  yayin: ['Yayın & Tipografi'],
  hareket: ['Hareket & Optik'],
  etkilesim: ['Etkileşim'],
  oyuncul: ['Oyuncul'],
  materyal: ['Materyal & Lüks'],
  deneysel: ['Deneysel & Gelecek'],
  // niyet → aile eşlemesi (katalogda o niyetin evi olan bantlar)
  emlak: ['Zamansız'],
  luks: ['Zamansız', 'Materyal & Lüks'],
  premium: ['Zamansız'],
  moda: ['Yayın & Tipografi'],
  dergi: ['Yayın & Tipografi'],
  okuma: ['Yayın & Tipografi'],
  metin: ['Yayın & Tipografi'],
  saglik: ['Veri & Gösterge'],
  harita: ['Doğa & Organik'],
};

if (!fs.existsSync(SLIM)) {
  console.error('kit/dist/index.slim.json yok — önce: node kit/build-slim-index.mjs');
  process.exit(1);
}
const index = JSON.parse(fs.readFileSync(SLIM, 'utf8'));

if (FAMILIES_ONLY) {
  for (const f of index.families) console.log(`${String(f.from).padStart(3, '0')}–${String(f.to).padStart(3, '0')}  ${f.name}`);
  process.exit(0);
}

if (!INTENT) {
  console.error('kullanım: node kit/pick.mjs --intent "uzun okuma + sakin + kurumsal" [--family <aile>] [--limit 3] [--garnish] [--json]');
  process.exit(2);
}

/* ---------- terimler ---------- */
const rawTerms = norm(INTENT)
  .split(/[\s,+;/]+/)
  .filter((t) => t.length > 1 && !STOP.has(t));

const expanded = new Map(); // terim → ağırlık (doğrudan 1, eşanlamlı 0.6)
for (const term of rawTerms) {
  expanded.set(term, Math.max(expanded.get(term) ?? 0, 1));
  for (const syn of SYNONYMS[term] ?? []) {
    const key = norm(syn);
    expanded.set(key, Math.max(expanded.get(key) ?? 0, 0.6));
  }
}

const wantedFamilies = new Set();
for (const term of rawTerms) for (const fam of FAMILY_SYNONYMS[term] ?? []) wantedFamilies.add(fam);
if (FAMILY) wantedFamilies.add(FAMILY);

/* ---------- puanlama ---------- */
const scored = index.styles.map((s) => {
  const name = norm(s.name);
  const slug = norm(s.slug);
  const family = norm(s.family);
  const tags = s.tags.map(norm);
  const tag = norm(s.tag);
  const reasons = [];
  let score = 0;

  for (const [term, weight] of expanded) {
    const hits = [];
    if (slug === term || slug.split('-').includes(term)) hits.push(['slug', 3]);
    else if (term.includes('-') && slug.includes(term)) hits.push(['slug~', 2.5]);
    if (name.split(' ').includes(term)) hits.push(['ad', 3]);
    if (tags.some((t) => t === term)) hits.push(['etiket', 3]);
    else if (tags.some((t) => t.includes(term))) hits.push(['etiket~', 1.8]);
    if (family.includes(term)) hits.push(['aile', 2.5]);
    if (tag.includes(term)) hits.push(['cümle', 1.2]);
    for (const [kind, base] of hits) {
      score += base * weight;
      reasons.push(`${kind}:${term}`);
    }
  }

  if (wantedFamilies.has(s.family)) {
    score += 4;
    reasons.push(`aile-eşleşme:${s.family}`);
  }
  if (!s.dark) score -= 0.5; // koyu modu olmayan stil pratikte dezavantajlı

  return { style: s, score: Number(score.toFixed(2)), reasons: [...new Set(reasons)] };
});

const ranked = scored
  .filter((r) => r.score > 0)
  .filter((r) => (FAMILY ? norm(r.style.family).includes(norm(FAMILY)) || norm(FAMILY).includes(norm(r.style.family)) : true))
  .sort((a, b) => b.score - a.score || a.style.num.localeCompare(b.style.num))
  .slice(0, Math.max(1, LIMIT));

if (!ranked.length) {
  console.log(`eşleşme yok: "${INTENT}"`);
  console.log('ipucu: aile adları için --families · daha genel bir niyet cümlesi dene');
  process.exit(1);
}

const dirOf = (s) => `styles/${s.num}-${s.slug}`;

if (JSON_OUT) {
  console.log(
    JSON.stringify(
      {
        intent: INTENT,
        terms: [...expanded.entries()].map(([term, weight]) => ({ term, weight })),
        picks: ranked.map((r) => ({
          ...r.style,
          score: r.score,
          reasons: r.reasons,
          dir: dirOf(r.style),
          style: `${dirOf(r.style)}/style.md`,
          tokens: `${dirOf(r.style)}/tokens.json`,
          cover: `${dirOf(r.style)}/shots/01-landing.png`,
        })),
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

console.log(`niyet: "${INTENT}" · terimler: ${[...expanded.keys()].join(', ')}`);
console.log('');
for (const [i, r] of ranked.entries()) {
  const s = r.style;
  const mark = i === 0 ? '★' : '·';
  console.log(`${mark} ${s.num} ${s.slug}  [${s.family}]  puan ${r.score}`);
  console.log(`   ${s.tag}`);
  console.log(`   etiketler: ${s.tags.join(' · ')} · hareket: ${s.motion.enterMs}ms/${s.motion.ease} · koyu: ${s.dark ? 'var' : 'yok'}`);
  console.log(`   gerekçe: ${r.reasons.slice(0, 6).join(', ')}`);
  console.log(`   dosya: ${dirOf(s)}/style.md · ${dirOf(s)}/shots/01-landing.png`);
  if (GARNISH && i === 0) {
    console.log(`   garnitür (uyumlu): ${s.compatible.join(', ') || '—'}`);
    console.log(`   yasak: ${s.forbidden.join(', ') || '—'}`);
  }
  console.log('');
}
console.log('sonraki adım: seçilen stilin style.md → "Görsel imza" + "Yasaklar" + tokens.json → motion.sequences');
