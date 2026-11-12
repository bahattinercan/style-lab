#!/usr/bin/env node
/**
 * kit/assign-content.mjs — sektör içerik paketi ataması (P1).
 *
 * Neden: 145 stil aynı kurgusal SaaS metniyle render ediliyordu ("Ürün ekibin için sakin bir
 * çalışma alanı"). Lüks bir stil "En iyi: otel/emlak" diyor ama ekranda görev paneli görünüyordu.
 * Bu script `tokens.json → industries[]` yazar (ilk eleman render'da kullanılan paket).
 *
 * Kullanım: node kit/assign-content.mjs --dry | --apply | --check [--styles a,b]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const INDUSTRIES = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'industries.json'), 'utf8')).industries;
const PACK_IDS = Object.keys(INDUSTRIES);

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

/** Aile → izinli sektörler (ilk eleman tercih). Deterministik hash ile dağıtılır. */
const BY_FAMILY = {
  Sade: ['danismanlik', 'saas', 'dergi'],
  Yüzey: ['saglik', 'saas'],
  Cesur: ['eticaret', 'ajans'],
  Retro: ['eticaret', 'ajans'],
  Sanatsal: ['ajans', 'dergi'],
  Geometrik: ['danismanlik', 'ajans'],
  Tipografik: ['dergi'],
  Organik: ['saglik', 'emlak'],
  'Yeni Dalga': ['saas', 'ajans'],
  Zamansız: ['emlak', 'dergi'],
  Teknik: ['saas'],
  'Veri & Gösterge': ['saas', 'danismanlik'],
  Endüstriyel: ['saas', 'danismanlik'],
  'Kültürel & Bölgesel': ['dergi', 'emlak'],
  'Doğa & Organik': ['saglik', 'emlak'],
  'Yayın & Tipografi': ['dergi'],
  'Hareket & Optik': ['ajans', 'eticaret'],
  Etkileşim: ['saas', 'egitim'],
  Oyuncul: ['egitim', 'eticaret'],
  'Materyal & Lüks': ['emlak', 'dergi'],
  'Deneysel & Gelecek': ['ajans', 'saas'],
  'Sahne & Prestij': ['emlak', 'ajans', 'saas', 'dergi'],
  Diğer: ['saas'],
};

/** Arketip → sektör (kompozisyon niyeti sektörü belirler: vitrin→emlak, poster→dergi, ürün ekranı→saas). */
const BY_ARCHETYPE = { fullbleed: 'emlak', type: 'dergi' };

function hash(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}
const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

function discover() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => {
      const num = parseInt(d.name, 10);
      const tokens = readJson(path.join(STYLES_DIR, d.name, 'tokens.json'));
      return { dirName: d.name, num, slug: tokens.slug ?? d.name.replace(/^\d+-/, ''), family: familyOf(num), tokens, path: path.join(STYLES_DIR, d.name, 'tokens.json') };
    })
    .sort((a, b) => a.num - b.num);
}

/** Aile havuzundan hash ile seç + her sektörün en az kullanımını garanti et. */
function compute(rows) {
  const counts = new Map(PACK_IDS.map((id) => [id, 0]));
  return rows.map((r) => {
    const pool = (BY_FAMILY[r.family] ?? BY_FAMILY.Diğer).filter((id) => PACK_IDS.includes(id));
    const byHero = BY_ARCHETYPE[r.tokens.layout?.hero ?? ''];
    let primary = byHero && PACK_IDS.includes(byHero) ? byHero : pool[hash(r.slug) % pool.length] ?? pool[0];
    // denge: hiç kullanılmayan sektör kalmasın (tavan: toplamın %35'i)
    const cap = Math.floor(rows.length * 0.35);
    if ((counts.get(primary) ?? 0) >= cap) {
      const alt = pool.find((id) => (counts.get(id) ?? 0) < cap) ?? PACK_IDS.find((id) => (counts.get(id) ?? 0) < cap);
      if (alt) primary = alt;
    }
    counts.set(primary, (counts.get(primary) ?? 0) + 1);
    const secondary = pool.filter((id) => id !== primary).slice(0, 2);
    return { ...r, industries: [primary, ...secondary] };
  });
}

/** Denge: hiçbir sektör "ölü" kalmasın (en az ~%4) — kararlı arketip atamalarına dokunmaz. */
function rebalance(list) {
  const floor = Math.max(4, Math.floor(list.length * 0.04));
  const decisive = new Set(Object.values(BY_ARCHETYPE));
  for (let guard = 0; guard < 40; guard += 1) {
    const counts = new Map(PACK_IDS.map((id) => [id, 0]));
    for (const a of list) counts.set(a.industries[0], (counts.get(a.industries[0]) ?? 0) + 1);
    const low = PACK_IDS.find((id) => (counts.get(id) ?? 0) < floor);
    if (!low) break;
    // verilecek aday: ailesi bu sektöre izin veren, arketipi karar verici olmayan, en kalabalık sektördeki stil
    const rich = [...counts.entries()].sort((x, y) => y[1] - x[1])[0]?.[0];
    const victim = list.find(
      (a) => a.industries[0] === rich && !decisive.has(a.industries[0]) && (BY_FAMILY[a.family] ?? []).includes(low) && !a.industries.includes(low),
    );
    if (!victim) break;
    victim.industries = [low, ...victim.industries.filter((x) => x !== low)].slice(0, 3);
  }
  return list;
}

function withIndustries(tokens, industries) {
  const next = { ...tokens };
  next.industries = industries;
  return next;
}

function main() {
  const rows = discover();
  const all = rebalance(compute(rows));
  const scoped = ONLY ? all.filter((a) => ONLY.has(a.slug)) : all;
  const drift = scoped.filter((a) => JSON.stringify(a.tokens.industries ?? null) !== JSON.stringify(a.industries));

  if (APPLY) {
    for (const a of scoped) fs.writeFileSync(a.path, JSON.stringify(withIndustries(a.tokens, a.industries), null, 2) + '\n');
    console.log(`yazıldı: ${scoped.length} tokens.json (industries[])`);
    if (!JSON_OUT) {
      const tally = new Map();
      for (const a of all) tally.set(a.industries[0], (tally.get(a.industries[0]) ?? 0) + 1);
      for (const [k, v] of [...tally].sort((x, y) => y[1] - x[1])) console.log(`  ${k.padEnd(14)} ${v}`);
    }
    return 0;
  }
  if (CHECK) {
    if (drift.length) {
      console.log(`× ${drift.length} stilde industries öneriden farklı:`);
      for (const d of drift.slice(0, 8)) console.log(`  - ${d.dirName}: ${JSON.stringify(d.tokens.industries)} → ${JSON.stringify(d.industries)}`);
      console.log('düzeltme: node kit/assign-content.mjs --apply');
      return 1;
    }
    console.log(`✓ içerik ataması güncel (${scoped.length} stil)`);
    return 0;
  }
  if (JSON_OUT) return console.log(JSON.stringify(scoped.map((a) => ({ slug: a.slug, industries: a.industries })), null, 2)), 0;
  for (const a of scoped) console.log(a.dirName.padEnd(28), a.industries.join(' · '));
  return 0;
}

process.exit(main());
