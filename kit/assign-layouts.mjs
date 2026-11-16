#!/usr/bin/env node
/**
 * kit/assign-layouts.mjs — Assigns composition archetypes to 145 styles (deterministic).
 *
 * Why: until now the catalog only varied color/typography; 145 styles
 * hero skeleton was the same. This script uses the field `tokens.json → layout { hero, nav, density }`
 * Selects from `kit/render/layouts.json` definitions. The selection is NOT random: slug + family + tag
 * text is scored; equality is broken by deterministic hashing (same input → same output).
 *
 * Constraints (port: kit/check-layout.mjs):
 * · at least min(4, family size) different hero|nav fingerprints within the family
 * · no fingerprint exceeds 25% of the style count (today: all single fingerprint)
 * · every style carries at least one `sections` archetype (hero) — scheme v3
 *
 * Usage:
 * node kit/assign-layouts.mjs --dry # show suggestion without printing
 * node kit/assign-layouts.mjs --apply # update tokens.json files
 * node kit/assign-layouts.mjs --check # are the files the same as the suggestion (drift gate)
 * node kit/assign-layouts.mjs --apply --styles luxury-typography,y2k
 * node kit/assign-layouts.mjs --json*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const LAYOUTS = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'layouts.json'), 'utf8'));

const ARGV = process.argv.slice(2);
const APPLY = ARGV.includes('--apply');
const CHECK = ARGV.includes('--check');
const DRY = ARGV.includes('--dry') || (!APPLY && !CHECK);
const JSON_OUT = ARGV.includes('--json');
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  if (i < 0) return null;
  const list = (ARGV[i + 1] ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  return list.length ? new Set(list) : null;
})();

/** Ceilings are calculated based on catalog size (fixed 145 trap: door slides when add style).*/
const MAX_SHARE = 0.25;
const styleCount = fs
  .readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json'))).length;
const MAX_FINGERPRINT = Math.max(4, Math.floor(styleCount * MAX_SHARE));

/**
 * Hero scoring dictionary. Order matters: first matching rule +3 points, subsequent ones +1 point.
 * Keywords are searched on slug + name + family + tags (diacritics are simplified).*/
const HERO_RULES = [
  {
    hero: 'type',
    strong: /(typograph|poster|swiss|editorial|zine|poetry|newspaper|book|library|letterpress|print|manifesto|headline)/,
    weak: /(magazine|publish|type)/,
  },
  {
    hero: 'fullbleed',
    strong: /(luxury|grand|tourer|estate|jewel|hotel|fashion|coupe|couture|art-deco|victorian|silk|marble|brass|leather|porcelain|noir|oxblood|villa|monolith|craft|wood|joinery|drape|cafe|wine|restaurant|resort|travel|terrain|coastal|reef)/,
    weak: /(premium|showcase|photograph|gallery|organic|botanical|coastal|mineral|drape|prism)/,
  },
  {
    hero: 'product',
    strong: /(dashboard|panel|telemetry|trading|kanban|terminal|command|repl|notebook|developer|api|sdk|data|kpi|logistics|warehouse|cockpit|sensor|iot|monitor|grid|bento|engine|finance|wallet|bank|crypto|orchestration)/,
    weak: /(tool|arac|console|konsol|analytics|analitik|system|sistem|pipeline|flow|akis)/,
  },
  {
    hero: 'index',
    strong: /(index|archive|gallery|portfolio|museum|studio|catalog|directory|sticker|comic|album|sleeve|zine|collection|marketplace|store|shop|commerce|listing)/,
    weak: /(ajans|agency|work|is\b|project|proje|case|vaka|showcase)/,
  },
  {
    hero: 'sticky',
    strong: /(story|hikaye|journal|gunluk|narrative|anlati|scroll|kaydir|timeline|zaman|motion|hareket|kinetic|kinetik|documentary|belgesel|longform|chapter|bolum|journey|yolculuk|process|surec|incident|trace|latency|throughput)/,
    weak: /(editorial|dergi|feature|ozellik|onboarding|wizard|adim|log|metric|gauge|sensor|uptime|pipeline)/,
  },
  {
    hero: 'centered',
    strong: /(minimal|japandi|wabi|sabi|calm|sakin|zen|ethereal|eterik|quiet|sessiz|soft|yumusak|serene|huzur|sustainable|surdurulebilir|biophilic|biyofilik|wellness|saglik|meditat|nordic|isvec)/,
    weak: /(clean|temiz|airy|ferah|breath|nefes|light|isik|aurora|clay|kil|neumorph|neu)/,
  },
  {
    hero: 'split-reverse',
    strong: /(brutal|anti-design|antitasarim|memphis|maximal|dopamin|dopamine|acid|asit|carnival|karnaval|festival|playful|oyuncul|kids|cocuk|arcade|atari|pixel|sticker|comic|y2k|vapor|synth|cyber|neon|glitch)/,
    weak: /(bold|cesur|energy|enerji|sport|spor|party|eqlence|fun)/,
  },
];

/** Nav: derived from hero; There is also a second candidate to break the repetition of the same fingerprint.*/
const NAV_OF_HERO = {
  split: ['inline', 'split'],
  'split-reverse': ['utility', 'inline'],
  centered: ['pill', 'split'],
  type: ['split', 'inline'],
  fullbleed: ['pill', 'inline'],
  product: ['utility', 'rail'],
  index: ['split', 'pill'],
  sticky: ['inline', 'pill'],
};

const DENSITY_OF_FAMILY = {
  'Data & Indicator': 'dense',
  Industrial: 'dense',
  Oyuncu: 'dense',
  Cesur: 'dense',
  Teknik: 'dense',
  'Material & Luxury': 'sparse',
  Sade: 'sparse',
  'Nature & Organic': 'sparse',
};

function norm(text) {
  return String(text)
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/â/g, 'a');
}

function hash(slug) {
  let h = 0x811c9dc5;
  for (let i = 0; i < slug.length; i += 1) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

function families() {
  const j = readJson(path.join(ROOT, 'kit', 'families.json'));
  return (j.families ?? []).map((f) => ({ from: f.from, to: f.to, name: f.name }));
}
const FAMILIES = families();
const FAMILY_OF = (num) => FAMILIES.find((f) => num >= f.from && num <= f.to)?.name ?? 'Other';

const HERO_IDS = LAYOUTS.heroes.map((h) => h.id);
const NAV_IDS = LAYOUTS.navs.map((n) => n.id);
const DENSITY_IDS = LAYOUTS.densities.map((d) => d.id);
const SECTION_PLAN_IDS = LAYOUTS.sections.map((s) => s.id);
const HERO_OVERRIDES = { 'electronics-spec': 'product', 'pharmacy-store': 'fullbleed', 'subscription-box': 'fullbleed' };

function discover() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => {
      const tokens = readJson(path.join(STYLES_DIR, d.name, 'tokens.json'));
      return {
        dirName: d.name,
        num: parseInt(d.name, 10),
        slug: tokens.slug ?? d.name.replace(/^\d+-/, ''),
        tokens,
        family: FAMILY_OF(parseInt(d.name, 10)),
        path: path.join(STYLES_DIR, d.name, 'tokens.json'),
      };
    })
    .sort((a, b) => a.num - b.num);
}

/** Hero points for a style (higher = more favorable).*/
function heroScores(style) {
  const hay = norm(
    [style.slug, style.tokens.name ?? '', style.family, style.tokens.tag ?? '', ...(style.tokens.tags ?? [])].join(' '),
  );
  const scores = {};
  for (const id of HERO_IDS) scores[id] = 0;
  scores.split = 1; // neutral base
  for (const rule of HERO_RULES) {
    if (rule.strong.test(hay)) scores[rule.hero] += 3;
    else if (rule.weak?.test(hay)) scores[rule.hero] += 1;
  }
  // family trends: plain → calm composition, data → product display
  if (style.family === 'Minimal') scores.centered += 1;
  if (style.family === 'Data & Indicator') scores.product += 2;
  if (style.family === 'Material & Luxury') scores.fullbleed += 2;
  if (style.family === 'Publication & Typography') scores.type += 2;
  if (style.family === 'Typographic') scores.type += 3;
  if (style.family === 'Interactive') scores.product += 1;
  if (style.family === 'Geometric') scores.index += 1;
  const override = HERO_OVERRIDES[style.slug];
  if (override) scores[override] = Math.max(...Object.values(scores)) + 5;
  return scores;
}

/**
 * Assignment: candidates in score order for each style; If there is a constraint violation, it is passed to the next candidate.
 * Deterministic: equal points hash (slug) determines the ranking.*/
function computeAssignments(styles) {
  const ordered = styles.map((s) => {
    const scores = heroScores(s);
    const h = hash(s.slug);
    // selection among the highest scoring candidates is done by hash (same score → diversity),
    // Then the remaining candidates come in order of points: the constraint solution always goes to the second BEST option.
    const maxScore = Math.max(...HERO_IDS.map((id) => scores[id]));
    const byHash = (a, b) => hash(a + s.slug) - hash(b + s.slug);
    const best = HERO_IDS.filter((id) => scores[id] === maxScore).sort(byHash);
    const rest = HERO_IDS.filter((id) => scores[id] !== maxScore).sort((a, b) => scores[b] - scores[a] || byHash(a, b));
    const candidates = [...best, ...rest];
    return { style: s, scores, candidates, hero: candidates[0] };
  });

  const count = (keyFn) => {
    const m = new Map();
    for (const o of ordered) {
      const k = keyFn(o);
      m.set(k, (m.get(k) ?? 0) + 1);
    }
    return m;
  };

  // 1) global fingerprint ceiling: the most populated hero+nav combination should not exceed MAX_FINGERPRINT
  for (let pass = 0; pass < 12; pass += 1) {
    const navOf = (o) => navChoice(o);
    const fp = count((o) => `${o.hero}|${navOf(o)}`);
    const worst = [...fp.entries()].sort((a, b) => b[1] - a[1])[0];
    if (!worst || worst[1] <= MAX_FINGERPRINT) break;
    const [hero] = worst[0].split('|');
    // move the lowest scoring style in this combination to the second island
    const affected = ordered
      .filter((o) => o.hero === hero && `${o.hero}|${navOf(o)}` === worst[0])
      .sort((a, b) => a.scores[a.hero] - b.scores[b.hero]);
    const victim = affected[0];
    if (!victim) break;
    const next = victim.candidates.find((c) => `${c}|${navChoice({ ...victim, hero: c })}` !== worst[0]);
    if (!next) break;
    victim.hero = next;
  }

  // 2) within-family diversity: at least 3 different HEROs (visual skeleton) if family ≥4 styles, 1 for a single style
  const byFamily = new Map();
  for (const o of ordered) {
    const f = o.style.family;
    if (!byFamily.has(f)) byFamily.set(f, []);
    byFamily.get(f).push(o);
  }
  for (const [family, list] of byFamily) {
    const target = list.length >= 8 ? 3 : Math.min(2, list.length);
    for (let guard = 0; guard < 40; guard += 1) {
      const usedHeroes = new Set(list.map((o) => o.hero));
      if (usedHeroes.size >= target) break;
      const fpNow = count((o) => `${o.hero}|${navChoice(o)}`);
      const local = new Map();
      for (const o of list) local.set(o.hero, [...(local.get(o.hero) ?? []), o]);
      const crowded = [...local.entries()].sort((a, b) => b[1].length - a[1].length)[0];
      if (!crowded || crowded[1].length < 2) break;
      // sacrifice: lowest scoring, deterministic with hash in equality
      const victim = crowded[1]
        .slice()
        .sort((a, b) => a.scores[a.hero] - b.scores[b.hero] || hash(a.style.slug) - hash(b.style.slug))[0];
      // Choose the least crowded globally archetype that is not used within the family
      const spare = victim.candidates
        .filter((c) => !usedHeroes.has(c))
        .map((c) => ({ c, load: fpNow.get(`${c}|${navChoice({ ...victim, hero: c })}`) ?? 0 }))
        .sort((a, b) => a.load - b.load || hash(a.c + victim.style.slug) - hash(b.c + victim.style.slug));
      if (!spare.length) break;
      // maintain quality: downgrade obvious matches (≥2) to zero-point archetype — only
      // Forced diversity is allowed in large families (≥8).
      const pick = spare.find((x) => !(victim.scores[victim.hero] >= 2 && victim.scores[x.c] === 0 && list.length < 8));
      if (!pick) break;
      victim.hero = pick.c;
    }
  }

  return ordered.map((o) => ({
    dirName: o.style.dirName,
    slug: o.style.slug,
    family: o.style.family,
    hero: o.hero,
    nav: navChoice(o),
    density: densityChoice(o),
    sectionPlan: SECTION_PLAN_IDS[hash(o.style.slug) % SECTION_PLAN_IDS.length],
    scores: o.scores,
  }));
}

function navChoice(o) {
  const options = NAV_OF_HERO[o.hero] ?? ['inline'];
  return options[hash(o.style?.slug ?? '') % options.length] ?? options[0];
}

function densityChoice(o) {
  const bias = LAYOUTS.heroes.find((h) => h.id === o.hero)?.densityBias;
  const familyBias = DENSITY_OF_FAMILY[o.style?.family];
  const chosen = bias === 'dense' || familyBias === 'dense' ? 'dense' : familyBias === 'sparse' || bias === 'sparse' ? 'sparse' : 'balanced';
  return DENSITY_IDS.includes(chosen) ? chosen : 'balanced';
}

/** Writes (updates if any) the `layout` field to tokens.json, preserving the key order.*/
function withLayout(tokens, layout) {
  const next = { ...tokens };
  if ((next.version ?? 2) < 3) next.version = 3;
  const out = {};
  for (const [k, v] of Object.entries(next)) {
    if (k === 'layout') continue;
    out[k] = v;
    if (k === 'grid' && !tokens.layout) out.layout = layout;
  }
  if (!out.layout) out.layout = layout;
  return out;
}

function main() {
  const styles = discover();
  const assignments = computeAssignments(styles);
  const scoped = ONLY ? assignments.filter((a) => ONLY.has(a.slug) || ONLY.has(String(parseInt(a.dirName, 10)))) : assignments;

  const drift = [];
  for (const a of scoped) {
    const style = styles.find((s) => s.slug === a.slug);
    const cur = style.tokens.layout ?? null;
    const want = { hero: a.hero, nav: a.nav, density: a.density, sectionPlan: a.sectionPlan };
    if (!cur || Object.entries(want).some(([key, value]) => cur[key] !== value)) {
      drift.push({ slug: a.slug, dir: a.dirName, current: cur, want });
    }
  }

  if (APPLY) {
    for (const a of scoped) {
      const style = styles.find((s) => s.slug === a.slug);
      const next = withLayout(style.tokens, { hero: a.hero, nav: a.nav, density: a.density, sectionPlan: a.sectionPlan, family: style.family, ...(style.tokens.layout?.fit ? { fit: style.tokens.layout.fit } : {}) });
      fs.writeFileSync(style.path, JSON.stringify(next, null, 2) + '\n');
    }
    console.log(`written: ${scoped.length} tokens.json (schema v3, layout added)`);
    if (!JSON_OUT) printDistribution(assignments);
    return 0;
  }

  if (CHECK) {
    if (drift.length) {
      console.log(`× layout differs from the recommendation in ${drift.length} styles (drift):`);
      for (const d of drift.slice(0, 10)) console.log(`  - ${d.dir}: ${JSON.stringify(d.current)} → ${JSON.stringify(d.want)}`);
      if (drift.length > 10) console.log(`  … ${drift.length - 10} more`);
      console.log('fix: node kit/assign-layouts.mjs --apply');
      return 1;
    }
    console.log(`✓ layout assignment is up to date (${scoped.length} styles)`);
    return 0;
  }

  // --dry
  if (JSON_OUT) {
    console.log(JSON.stringify({ assignments: scoped }, null, 2));
    return 0;
  }
  console.log('style'.padEnd(30), 'hero'.padEnd(14), 'nav'.padEnd(9), 'density');
  for (const a of scoped) console.log(a.dirName.padEnd(30), a.hero.padEnd(14), a.nav.padEnd(9), a.density);
  printDistribution(assignments);
  return 0;
}

function printDistribution(assignments) {
  const tab = (key) => {
    const m = new Map();
    for (const a of assignments) m.set(a[key], (m.get(a[key]) ?? 0) + 1);
    return [...m.entries()].sort((x, y) => y[1] - x[1]);
  };
  console.log('\n— hero distribution —');
  for (const [k, v] of tab('hero')) console.log(`  ${k.padEnd(14)} ${String(v).padStart(3)}  %${Math.round((v / assignments.length) * 100)}`);
  console.log('— nav distribution —');
  for (const [k, v] of tab('nav')) console.log(`  ${k.padEnd(14)} ${String(v).padStart(3)}`);
  console.log('— density —');
  for (const [k, v] of tab('density')) console.log(`  ${k.padEnd(14)} ${String(v).padStart(3)}`);
  const fp = new Map();
  for (const a of assignments) fp.set(`${a.hero}|${a.nav}`, (fp.get(`${a.hero}|${a.nav}`) ?? 0) + 1);
  const [top, topN] = [...fp.entries()].sort((x, y) => y[1] - x[1])[0] ?? ['—', 0];
  console.log(`\nfingerprint: ${fp.size} distinct combinations · busiest ${top} = ${topN} styles (${Math.round((topN / assignments.length) * 100)}%)`);
}

main();
