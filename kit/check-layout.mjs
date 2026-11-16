#!/usr/bin/env node
/**
 * kit/check-layout.mjs — gateway to composition diversity.
 *
 * Reason: kit/motion-check.mjs says "do not copy motion signature within family" but
 * There were no dimensions for SKELETON — the hero composition of all 145 styles was the same. this door
 * Measures via `tokens.json → layout`:
 *
 * scope: each style has a layout, the values are defined in layouts.json
 * family: sufficient number of different heroes within the family (≥3 if family ≥8)
 * fingerprint : ≥min(3, n) different hero|nav combinations within family
 * ceiling: no fingerprint exceeds 25% of the style count, no hero exceeds 35%
 * vitality: each archetype is used in at least 4 styles (no dead archetypes)
 * template: carries page.html placeholders and
 * separated from each other by data-theme ONLY (no silent template drift)
 *
 * Usage:
 * node kit/check-layout.mjs # door (exit 1 if error)
 * node kit/check-layout.mjs --json
 * node kit/check-layout.mjs --self-test # proves the ruleset is no-op
 * node kit/check-layout.mjs --report # distribution table (writes even if there are no errors)*/
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
const SECTION_PLAN_IDS = LAYOUTS.sections.map((s) => s.id);
const SECTION_MARKERS = ['logo-wall', 'how-it-works', 'feature-media', 'stats', 'components', 'form-data', 'cta', 'footer', 'footer-base'];
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
        family: FAMILIES.find((f) => num >= f.from && num <= f.to)?.name ?? 'Other',
        version: tokens.version ?? 2,
        layout: tokens.layout ?? null,
      };
    })
    .sort((a, b) => a.num - b.num);
}

/** Pure ruleset: works with both real and synthetic input (self-test uses this).*/
export function checkLayout(rows) {
  const errors = [];
  const warnings = [];
  const n = rows.length;

  for (const plan of LAYOUTS.sections) {
    if (!Array.isArray(plan.order) || plan.order.length !== SECTION_MARKERS.length ||
      new Set(plan.order).size !== SECTION_MARKERS.length ||
      SECTION_MARKERS.some((section) => !plan.order.includes(section))) {
      errors.push(`section plan "${plan.id}" must list the page.html sections completely and uniquely`);
    }
  }

  for (const r of rows) {
    if (!r.layout) {
      errors.push(`${r.dirName}: missing layout (schema v3 required) — node kit/assign-layouts.mjs --apply`);
      continue;
    }
    const { hero, nav, density } = r.layout;
    if (!HERO_IDS.includes(hero)) errors.push(`${r.dirName}: layout.hero "${hero}" is undefined`);
    if (!NAV_IDS.includes(nav)) errors.push(`${r.dirName}: layout.nav "${nav}" is undefined`);
    if (!DENSITY_IDS.includes(density)) errors.push(`${r.dirName}: layout.density "${density}" is undefined`);
    if (!SECTION_PLAN_IDS.includes(r.layout.sectionPlan)) errors.push(`${r.dirName}: layout.sectionPlan "${r.layout.sectionPlan}" is undefined`);
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
  const sectionPlans = countBy((r) => r.layout.sectionPlan);
  const fingerprints = countBy((r) => `${r.layout.hero}|${r.layout.nav}`);

  // ceiling: one fingerprint / one hero should not dominate the catalog alone
  for (const [k, v] of fingerprints) {
    if (v / n > MAX_FP_SHARE) {
      errors.push(`fingerprint "${k}" ${v}/${n} styles (${Math.round((v / n) * 100)}%) — ceiling ${MAX_FP_SHARE * 100}%`);
    }
  }
  for (const [k, v] of heroes) {
    if (v / n > MAX_HERO_SHARE) {
      errors.push(`hero "${k}" ${v}/${n} styles (${Math.round((v / n) * 100)}%) — ceiling ${MAX_HERO_SHARE * 100}%`);
    }
  }

  // vitality: are each archetype used?
  for (const id of HERO_IDS) {
    const v = heroes.get(id) ?? 0;
    if (v < MIN_ARCHETYPE_USES) errors.push(`hero "${id}" appears in ${v} styles only — at least ${MIN_ARCHETYPE_USES} (dead archetype)`);
  }
  for (const id of NAV_IDS) {
    const v = navs.get(id) ?? 0;
    if (v < MIN_ARCHETYPE_USES) errors.push(`nav "${id}" appears in ${v} styles only — at least ${MIN_ARCHETYPE_USES} (dead archetype)`);
  }
  for (const plan of LAYOUTS.sections) {
    const used = sectionPlans.get(plan.id) ?? 0;
    if (used < MIN_ARCHETYPE_USES) errors.push(`section plan "${plan.id}" is used in ${used} styles only — at least ${MIN_ARCHETYPE_USES}`);
    if (used / n > 0.35) errors.push(`section plan "${plan.id}" ${used}/${n} styles (${Math.round((used / n) * 100)}%) — ceiling 35%`);
  }

  // within-family diversity
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
      errors.push(`family "${family}" (${list.length} styles): ${heroSet.size} distinct heroes — at least ${heroTarget}`);
    }
    if (fpSet.size < fpTarget) {
      errors.push(`family "${family}" (${list.length} styles): ${fpSet.size} distinct hero|nav — at least ${fpTarget}`);
    }
    if (list.length >= 8 && densities.size < 2) warnings.push(`family "${family}": no density variety`);
  }

  // template agreement: placeholders (v6: single page template)
  const lightTpl = path.join(ROOT, 'kit', 'render', 'page.html');
  for (const [label, p] of [['page.html', lightTpl]]) {
    if (!fs.existsSync(p)) {
      errors.push(`kit/render/${label} yok`);
      continue;
    }
    const html = fs.readFileSync(p, 'utf8');
    if (!/<!--\s*HERO\s*-->/.test(html)) errors.push(`kit/render/${label}: <!-- HERO --> yer tutucusu yok`);
    if (!/<!--\s*NAV\s*-->/.test(html)) errors.push(`kit/render/${label}: <!-- NAV --> yer tutucusu yok`);
    if (!html.includes('__LAYOUT_HERO__')) errors.push(`kit/render/${label}: data-layout="__LAYOUT_HERO__" yok`);
  }

  return {
    errors,
    warnings,
    stats: {
      styles: n,
      heroes: [...heroes.entries()].sort((a, b) => b[1] - a[1]),
      navs: [...navs.entries()].sort((a, b) => b[1] - a[1]),
      densities: [...densities.entries()].sort((a, b) => b[1] - a[1]),
      sectionPlans: [...sectionPlans.entries()].sort((a, b) => b[1] - a[1]),
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

/** Proves that the ruleset really captures: each scenario must produce a SINGLE error.*/
function selfTest() {
  const rows = discover();
  if (!rows.length) {
    console.log('× self-test: style not found');
    return 1;
  }
  const base = checkLayout(rows);
  if (base.errors.length) {
    console.log('× self-test: real catalog is already faulty, synthetic test is pointless');
    return 1;
  }

  const clone = () => rows.map((r) => ({ ...r, layout: { ...r.layout } }));
  const scenarios = [
    {
      name: 'uniformity: all styles are the same hero|nav',
      mutate: (rs) => rs.forEach((r) => (r.layout = { ...r.layout, hero: 'split', nav: 'inline' })),
      expect: /fingerprint "split\|inline"/,
    },
    {
      name: 'missing layout',
      mutate: (rs) => (rs[0].layout = null),
      expect: /missing layout/,
    },
    {
      name: 'undefined archetype',
      mutate: (rs) => (rs[1].layout = { ...rs[1].layout, hero: 'yok-boyle-hero' }),
      expect: /is undefined/,
    },
    {
      name: 'intra-family copy: all styles of a family are the same',
      mutate: (rs) => {
        const fam = rs.find((r) => r.family === 'Data & Indicator')?.family ?? rs[0].family;
        rs.filter((r) => r.family === fam).forEach((r) => (r.layout = { ...r.layout, hero: 'product', nav: 'utility' }));
      },
      expect: /family "(Data & Indicator|.*)"/,
    },
    {
      name: 'dead archetype: sticky is never used',
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
      console.log(`✓ caught: ${s.name}`);
    } else {
      failed += 1;
      console.log(`× MISSED: ${s.name} (expected /${s.expect.source}/)`);
      if (out.errors.length) console.log(`   produced errors: ${out.errors.slice(0, 3).join(' | ')}`);
    }
  }

  // template contract test: catch when placeholder is deleted (with temporary copy)
  const lightTpl = path.join(ROOT, 'kit', 'render', 'page.html');
  const backup = fs.readFileSync(lightTpl, 'utf8');
  try {
    fs.writeFileSync(lightTpl, backup.replace('<!-- HERO -->', ''));
    const out = checkLayout(rows);
    if (out.errors.some((e) => /HERO --> yer tutucusu yok/.test(e))) console.log('✓ caught: deleting HERO placeholder from template');
    else {
      failed += 1;
      console.log('× MISSED: deleting HERO placeholder from template');
    }
  } finally {
    fs.writeFileSync(lightTpl, backup);
  }

  console.log(failed ? `\n× self-test: ${failed} scenarios missed` : '\n✓ self-test: rule set is not no-op');
  return failed ? 1 : 0;
}

function printReport(stats) {
  if (!stats.styles) return;
  const pad = (s, w) => String(s).padEnd(w);
  console.log(`\n— hero distribution (${stats.styles} styles) —`);
  for (const [k, v] of stats.heroes) console.log(`  ${pad(k, 14)} ${String(v).padStart(3)}  %${Math.round((v / stats.styles) * 100)}`);
  console.log('— nav distribution —');
  for (const [k, v] of stats.navs) console.log(`  ${pad(k, 14)} ${String(v).padStart(3)}`);
  console.log('— density —');
  for (const [k, v] of stats.densities) console.log(`  ${pad(k, 14)} ${String(v).padStart(3)}`);
  console.log(`\n— parmak izi (${stats.fingerprints.length} kombinasyon) —`);
  for (const [k, v] of stats.fingerprints) console.log(`  ${pad(k, 22)} ${String(v).padStart(3)}`);
  console.log('\n— family diversity —');
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
      console.log(`composition: ${result.stats.fingerprints.length} distinct hero|nav · busiest ${top[0]} = ${top[1]} styles (${share}%)`);
    }
  }
  if (REPORT) printReport(result.stats);

  for (const w of result.warnings) console.log(`! ${w}`);
  if (result.errors.length) {
    for (const e of result.errors) console.log(`× ${e}`);
    console.log(`\n${result.errors.length} composition violations`);
    return 1;
  }
  console.log(`✓ composition gate clean (${rows.length} styles · ${result.stats.fingerprints.length} fingerprints)`);
  return 0;
}

const IS_MAIN = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (IS_MAIN) process.exit(main());
