#!/usr/bin/env node
/**
 * kit/check-layout.mjs — kompozisyon çeşitliliği kapısı.
 *
 * Neden: kit/motion-check.mjs "hareket imzası aile içinde kopyalanmasın" diyor ama
 * İSKELET için hiçbir ölçü yoktu — 145 stilin hero kompozisyonu aynıydı. Bu kapı
 * `tokens.json → layout` üzerinden şunu ölçer:
 *
 *   kapsam      : her stilde layout var, değerler layouts.json'da tanımlı
 *   aile        : aile içinde yeterli sayıda farklı hero (aile ≥8 ise ≥3)
 *   parmak izi  : aile içinde ≥min(3, n) farklı hero|nav kombinasyonu
 *   tavan       : hiçbir parmak izi stil sayısının %25'ini, hiçbir hero %35'ini geçmez
 *   canlılık    : her arketip en az 4 stilde kullanılır (ölü arketip yok)
 *   şablon      : landing.html + dark-landing.html yer tutucuları taşır ve
 *                 birbirinden YALNIZ data-theme ile ayrılır (sessiz şablon drift'i yok)
 *
 * Kullanım:
 *   node kit/check-layout.mjs              # kapı (hata varsa exit 1)
 *   node kit/check-layout.mjs --json
 *   node kit/check-layout.mjs --self-test  # kural setinin no-op olmadığını kanıtlar
 *   node kit/check-layout.mjs --report     # dağılım tablosu (hata yoksa da yazar)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const LAYOUTS = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'layouts.json'), 'utf8'));

const ARGV = process.argv.slice(2);
const JSON_OUT = ARGV.includes('--json');
const SELF_TEST = ARGV.includes('--self-test');
const REPORT = ARGV.includes('--report');

const HERO_IDS = LAYOUTS.heroes.map((h) => h.id);
const NAV_IDS = LAYOUTS.navs.map((n) => n.id);
const DENSITY_IDS = LAYOUTS.densities.map((d) => d.id);
const MAX_FP_SHARE = 0.25;
const MAX_HERO_SHARE = 0.35;
const MIN_ARCHETYPE_USES = 4;

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const FAMILIES = (readJson(path.join(ROOT, 'kit', 'families.json')).families ?? []).map((f) => ({
  from: f.from,
  to: f.to,
  name: f.name,
}));

function discover() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => {
      const num = parseInt(d.name, 10);
      const tokens = readJson(path.join(STYLES_DIR, d.name, 'tokens.json'));
      return {
        dirName: d.name,
        num,
        slug: tokens.slug ?? d.name.replace(/^\d+-/, ''),
        family: FAMILIES.find((f) => num >= f.from && num <= f.to)?.name ?? 'Diğer',
        version: tokens.version ?? 2,
        layout: tokens.layout ?? null,
      };
    })
    .sort((a, b) => a.num - b.num);
}

/** Saf kural seti: hem gerçek hem sentetik girdiyle çalışır (self-test bunu kullanır). */
export function checkLayout(rows) {
  const errors = [];
  const warnings = [];
  const n = rows.length;

  for (const r of rows) {
    if (!r.layout) {
      errors.push(`${r.dirName}: layout yok (şema v3 zorunlu) — node kit/assign-layouts.mjs --apply`);
      continue;
    }
    const { hero, nav, density } = r.layout;
    if (!HERO_IDS.includes(hero)) errors.push(`${r.dirName}: layout.hero "${hero}" tanımsız`);
    if (!NAV_IDS.includes(nav)) errors.push(`${r.dirName}: layout.nav "${nav}" tanımsız`);
    if (!DENSITY_IDS.includes(density)) errors.push(`${r.dirName}: layout.density "${density}" tanımsız`);
    const heroPartial = path.join(ROOT, 'kit', 'render', 'partials', `hero-${hero}.html`);
    if (HERO_IDS.includes(hero) && !fs.existsSync(heroPartial)) errors.push(`${r.dirName}: hero partial yok (hero-${hero}.html)`);
    const navPartial = path.join(ROOT, 'kit', 'render', 'partials', `nav-${nav}.html`);
    if (NAV_IDS.includes(nav) && !fs.existsSync(navPartial)) errors.push(`${r.dirName}: nav partial yok (nav-${nav}.html)`);
  }
  if (errors.length) return { errors, warnings, stats: {} };

  const countBy = (keyFn) => {
    const m = new Map();
    for (const r of rows) {
      const k = keyFn(r);
      m.set(k, (m.get(k) ?? 0) + 1);
    }
    return m;
  };

  const heroes = countBy((r) => r.layout.hero);
  const navs = countBy((r) => r.layout.nav);
  const densities = countBy((r) => r.layout.density);
  const fingerprints = countBy((r) => `${r.layout.hero}|${r.layout.nav}`);

  // tavan: tek parmak izi / tek hero tek başına katalogu domine etmesin
  for (const [k, v] of fingerprints) {
    if (v / n > MAX_FP_SHARE) {
      errors.push(`parmak izi "${k}" ${v}/${n} stil (%${Math.round((v / n) * 100)}) — tavan %${MAX_FP_SHARE * 100}`);
    }
  }
  for (const [k, v] of heroes) {
    if (v / n > MAX_HERO_SHARE) {
      errors.push(`hero "${k}" ${v}/${n} stil (%${Math.round((v / n) * 100)}) — tavan %${MAX_HERO_SHARE * 100}`);
    }
  }

  // canlılık: her arketip kullanılıyor mu
  for (const id of HERO_IDS) {
    const v = heroes.get(id) ?? 0;
    if (v < MIN_ARCHETYPE_USES) errors.push(`hero "${id}" yalnız ${v} stilde — en az ${MIN_ARCHETYPE_USES} (ölü arketip)`);
  }
  for (const id of NAV_IDS) {
    const v = navs.get(id) ?? 0;
    if (v < MIN_ARCHETYPE_USES) errors.push(`nav "${id}" yalnız ${v} stilde — en az ${MIN_ARCHETYPE_USES} (ölü arketip)`);
  }

  // aile içi çeşitlilik
  const families = new Map();
  for (const r of rows) {
    if (!families.has(r.family)) families.set(r.family, []);
    families.get(r.family).push(r);
  }
  for (const [family, list] of families) {
    const heroSet = new Set(list.map((r) => r.layout.hero));
    const fpSet = new Set(list.map((r) => `${r.layout.hero}|${r.layout.nav}`));
    const heroTarget = list.length >= 8 ? 3 : Math.min(2, list.length);
    const fpTarget = Math.min(3, list.length);
    if (heroSet.size < heroTarget) {
      errors.push(`aile "${family}" (${list.length} stil): ${heroSet.size} farklı hero — en az ${heroTarget}`);
    }
    if (fpSet.size < fpTarget) {
      errors.push(`aile "${family}" (${list.length} stil): ${fpSet.size} farklı hero|nav — en az ${fpTarget}`);
    }
    if (list.length >= 8 && densities.size < 2) warnings.push(`aile "${family}": yoğunluk çeşitliliği yok`);
  }

  // şablon sözleşmesi: yer tutucular + koyu/aydınlık paritesi
  const lightTpl = path.join(ROOT, 'kit', 'render', 'landing.html');
  const darkTpl = path.join(ROOT, 'kit', 'render', 'dark-landing.html');
  for (const [label, p] of [
    ['landing.html', lightTpl],
    ['dark-landing.html', darkTpl],
  ]) {
    if (!fs.existsSync(p)) {
      errors.push(`kit/render/${label} yok`);
      continue;
    }
    const html = fs.readFileSync(p, 'utf8');
    if (!/<!--\s*HERO\s*-->/.test(html)) errors.push(`kit/render/${label}: <!-- HERO --> yer tutucusu yok`);
    if (!/<!--\s*NAV\s*-->/.test(html)) errors.push(`kit/render/${label}: <!-- NAV --> yer tutucusu yok`);
    if (!html.includes('__LAYOUT_HERO__')) errors.push(`kit/render/${label}: data-layout="__LAYOUT_HERO__" yok`);
  }
  if (fs.existsSync(lightTpl) && fs.existsSync(darkTpl)) {
    const norm = (s) => s.replace(/\s+data-theme="dark"/, '').replace(/\s+/g, ' ').trim();
    if (norm(fs.readFileSync(lightTpl, 'utf8')) !== norm(fs.readFileSync(darkTpl, 'utf8'))) {
      errors.push('landing.html ⇄ dark-landing.html yalnız data-theme ile ayrılmalı (şablon drift’i)');
    }
  }

  return {
    errors,
    warnings,
    stats: {
      styles: n,
      heroes: [...heroes.entries()].sort((a, b) => b[1] - a[1]),
      navs: [...navs.entries()].sort((a, b) => b[1] - a[1]),
      densities: [...densities.entries()].sort((a, b) => b[1] - a[1]),
      fingerprints: [...fingerprints.entries()].sort((a, b) => b[1] - a[1]),
      families: [...families.entries()].map(([f, list]) => ({
        family: f,
        n: list.length,
        heroes: new Set(list.map((r) => r.layout.hero)).size,
        fingerprints: new Set(list.map((r) => `${r.layout.hero}|${r.layout.nav}`)).size,
      })),
    },
  };
}

/** Kural setinin gerçekten yakaladığını kanıtlar: her senaryo TEK bir hata üretmeli. */
function selfTest() {
  const rows = discover();
  if (!rows.length) {
    console.log('× self-test: stil bulunamadı');
    return 1;
  }
  const base = checkLayout(rows);
  if (base.errors.length) {
    console.log('× self-test: gerçek katalog zaten hatalı, sentetik test anlamsız');
    return 1;
  }

  const clone = () => rows.map((r) => ({ ...r, layout: { ...r.layout } }));
  const scenarios = [
    {
      name: 'tekdüzelik: tüm stiller aynı hero|nav',
      mutate: (rs) => rs.forEach((r) => (r.layout = { ...r.layout, hero: 'split', nav: 'inline' })),
      expect: /parmak izi "split\|inline"/,
    },
    {
      name: 'eksik layout',
      mutate: (rs) => (rs[0].layout = null),
      expect: /layout yok/,
    },
    {
      name: 'tanımsız arketip',
      mutate: (rs) => (rs[1].layout = { ...rs[1].layout, hero: 'yok-boyle-hero' }),
      expect: /tanımsız/,
    },
    {
      name: 'aile içi kopya: bir ailenin tüm stilleri aynı',
      mutate: (rs) => {
        const fam = rs.find((r) => r.family === 'Veri & Gösterge')?.family ?? rs[0].family;
        rs.filter((r) => r.family === fam).forEach((r) => (r.layout = { ...r.layout, hero: 'product', nav: 'utility' }));
      },
      expect: /aile "(Veri & Gösterge|.*)"/,
    },
    {
      name: 'ölü arketip: sticky hiç kullanılmıyor',
      mutate: (rs) => rs.forEach((r) => {
        if (r.layout.hero === 'sticky') r.layout = { ...r.layout, hero: 'split' };
      }),
      expect: /hero "sticky"/,
    },
  ];

  let failed = 0;
  for (const s of scenarios) {
    const rs = clone();
    s.mutate(rs);
    const out = checkLayout(rs);
    const hit = out.errors.some((e) => s.expect.test(e));
    if (hit) {
      console.log(`✓ yakalandı: ${s.name}`);
    } else {
      failed += 1;
      console.log(`× KAÇTI: ${s.name} (beklenen /${s.expect.source}/)`);
      if (out.errors.length) console.log(`   üretilen hatalar: ${out.errors.slice(0, 3).join(' | ')}`);
    }
  }

  // şablon sözleşmesi testi: yer tutucu silinince yakalanmalı (geçici kopya ile)
  const lightTpl = path.join(ROOT, 'kit', 'render', 'landing.html');
  const backup = fs.readFileSync(lightTpl, 'utf8');
  try {
    fs.writeFileSync(lightTpl, backup.replace('<!-- HERO -->', ''));
    const out = checkLayout(rows);
    if (out.errors.some((e) => /HERO --> yer tutucusu yok/.test(e))) console.log('✓ yakalandı: şablondan HERO yer tutucusu silinmesi');
    else {
      failed += 1;
      console.log('× KAÇTI: şablondan HERO yer tutucusu silinmesi');
    }
  } finally {
    fs.writeFileSync(lightTpl, backup);
  }

  console.log(failed ? `\n× self-test: ${failed} senaryo kaçtı` : '\n✓ self-test: kural seti no-op değil');
  return failed ? 1 : 0;
}

function printReport(stats) {
  if (!stats.styles) return;
  const pad = (s, w) => String(s).padEnd(w);
  console.log(`\n— hero dağılımı (${stats.styles} stil) —`);
  for (const [k, v] of stats.heroes) console.log(`  ${pad(k, 14)} ${String(v).padStart(3)}  %${Math.round((v / stats.styles) * 100)}`);
  console.log('— nav dağılımı —');
  for (const [k, v] of stats.navs) console.log(`  ${pad(k, 14)} ${String(v).padStart(3)}`);
  console.log('— yoğunluk —');
  for (const [k, v] of stats.densities) console.log(`  ${pad(k, 14)} ${String(v).padStart(3)}`);
  console.log(`\n— parmak izi (${stats.fingerprints.length} kombinasyon) —`);
  for (const [k, v] of stats.fingerprints) console.log(`  ${pad(k, 22)} ${String(v).padStart(3)}`);
  console.log('\n— aile çeşitliliği —');
  for (const f of stats.families) console.log(`  ${pad(f.family, 24)} n=${String(f.n).padStart(2)}  hero=${f.heroes}  fp=${f.fingerprints}`);
}

function main() {
  if (SELF_TEST) return selfTest();

  const rows = discover();
  const result = checkLayout(rows);

  if (JSON_OUT) {
    console.log(JSON.stringify(result, null, 2));
    return result.errors.length ? 1 : 0;
  }

  if (REPORT || result.errors.length === 0) {
    const top = result.stats.fingerprints?.[0];
    if (top) {
      const share = Math.round((top[1] / result.stats.styles) * 100);
      console.log(`kompozisyon: ${result.stats.fingerprints.length} farklı hero|nav · en kalabalık ${top[0]} = ${top[1]} stil (%${share})`);
    }
  }
  if (REPORT) printReport(result.stats);

  for (const w of result.warnings) console.log(`! ${w}`);
  if (result.errors.length) {
    for (const e of result.errors) console.log(`× ${e}`);
    console.log(`\n${result.errors.length} kompozisyon ihlali`);
    return 1;
  }
  console.log(`✓ kompozisyon kapısı temiz (${rows.length} stil · ${result.stats.fingerprints.length} parmak izi)`);
  return 0;
}

const IS_MAIN = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (IS_MAIN) process.exit(main());
