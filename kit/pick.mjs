#!/usr/bin/env node
/**
 * kit/pick.mjs — extracts the style candidate from the intent statement (the agent's first step).
 *
 * Reason: the agent should not have to read the 145 styles one by one. `kit/dist/index.slim.json`
 * performs lexical scoring on; No embedded models/vectors, rules are explicit and auditable.
 * Output: sorted candidates + **which term matches** (justification) + file paths.
 *
 * Usage:
 * node kit/pick.mjs --intent "long read + calm + enterprise"
 * node kit/pick.mjs --intent "data-intensive panel" --family "Data & Display"
 * node kit/pick.mjs --intent "premium real estate" --limit 5 --garnish
 * node kit/pick.mjs --intent "..." --json
 * node kit/pick.mjs --families*/
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

/** Lower case + diacritic simplification so accented and plain spellings compare equal */
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
  'the', 'and', 'for', 'with', 'a', 'an', 'of', 'to', 'in', 'on', 'or', 'but', 'want', 'need',
  'style', 'styles', 'design', 'look', 'feel', 'like', 'that', 'is', 'are',
]);

/**
 * Intent dictionary: user language → catalog terms. It is kept small and deliberate;
 * if no match is found, only lexical search remains (no magic).*/
const SYNONYMS = {
  corporate: ['minimal', 'executive', 'swiss', 'utility', 'premium', 'finance'],
  calm: ['japandi', 'wabi-sabi', 'ethereal', 'minimal', 'space', 'soft'],
  reading: ['editorial', 'publishing', 'book', 'literary', 'broadsheet', 'magazine', 'poetry', 'academic', 'serif'],
  text: ['editorial', 'literary', 'poetry', 'academic', 'typography'],
  data: ['telemetry', 'trading', 'kpi', 'log', 'dashboard', 'table', 'gauge', 'measurement'],
  dashboard: ['bento', 'executive-kpi', 'telemetry-grid', 'kanban', 'panel'],
  panel: ['dashboard', 'telemetry', 'kpi', 'console', 'trading'],
  luxury: ['luxury', 'timeless', 'material', 'marble', 'brass', 'silk', 'grand-tourer', 'premium'],
  premium: ['luxury', 'grand-tourer', 'marble', 'brass', 'art-deco'],
  estate: ['estate', 'grand-tourer', 'luxury', 'showcase'],
  game: ['playful', 'kids', 'dopamine', 'carnival', 'arcade', 'sticker', 'playground'],
  kids: ['kids', 'playground', 'dopamine', 'carnival', 'sticker'],
  fun: ['dopamine', 'carnival', 'sticker', 'memphis', 'maximalism', 'celebration'],
  terminal: ['technical', 'terminal', 'command-palette', 'keyboard', 'log', 'mono'],
  developer: ['technical', 'terminal', 'command-palette', 'keyboard', 'utility'],
  nostalgia: ['retro', 'y2k', 'synthwave', 'vaporwave', 'arcade', 'pixel'],
  retro: ['retro', 'y2k', 'synthwave', 'vaporwave', 'arcade', 'pixel', 'frutiger'],
  future: ['experimental', 'speculative', 'nanotech', 'quantum', 'zero-gravity', 'holographic', 'ai-native'],
  experimental: ['experimental', 'speculative', 'moire', 'optical', 'generative', 'quantum'],
  natural: ['nature', 'biophilic', 'organic', 'forest', 'japandi', 'botanical', 'topographic'],
  sustainable: ['nature', 'biophilic', 'organic', 'japandi', 'forest'],
  cultural: ['cultural', 'nordic-folk', 'levant', 'azulejo', 'persian', 'block-print', 'textile'],
  industrial: ['industrial', 'blueprint', 'shopfloor', 'cockpit', 'calibration', 'warehouse'],
  museum: ['museum', 'thesis', 'editorial', 'academic', 'art-deco'],
  magazine: ['magazine', 'editorial', 'broadsheet', 'catalog'],
  businesscard: ['minimal', 'swiss', 'editorial', 'letterpress'],
  fashion: ['editorial', 'luxury', 'magazine', 'silk', 'marble'],
  health: ['vitals', 'clinical', 'utility', 'minimal', 'calm'],
  education: ['academic', 'encyclopedia', 'notebook', 'playground'],
  map: ['map', 'atlas', 'topographic', 'terrain', 'spatial'],
  voice: ['voice-first', 'audio', 'album', 'waveform'],
  mobile: ['mobile', 'app', 'playground', 'command-palette'],
};

const FAMILY_SYNONYMS = {
  minimal: ['Minimal'],
  surface: ['Surface'],
  bold: ['Bold'],
  retro: ['Retro'],
  art: ['Art'],
  geometric: ['Geometric'],
  typographic: ['Typographic'],
  organic: ['Organic'],
  newwave: ['New Wave'],
  timeless: ['Timeless'],
  technical: ['Technical'],
  data: ['Data & Indicator'],
  industrial: ['Industrial'],
  cultural: ['Cultural & Regional'],
  nature: ['Nature & Organic'],
  publishing: ['Publication & Typography'],
  motion: ['Motion & Optics'],
  interactive: ['Interactive'],
  playful: ['Playful'],
  material: ['Material & Luxury'],
  experimental: ['Experimental & Future'],
  // intent → family mapping (the band where that intent lives in the catalog)
  estate: ['Timeless'],
  luxury: ['Timeless', 'Material & Luxury'],
  premium: ['Timeless'],
  fashion: ['Publication & Typography'],
  magazine: ['Publication & Typography'],
  reading: ['Publication & Typography'],
  text: ['Publication & Typography'],
  health: ['Data & Indicator'],
  map: ['Nature & Organic'],
};

if (!fs.existsSync(SLIM)) {
  console.error('no kit/dist/index.slim.json — before: node kit/build-slim-index.mjs');
  process.exit(1);
}
const index = JSON.parse(fs.readFileSync(SLIM, 'utf8'));

if (FAMILIES_ONLY) {
  for (const f of index.families) console.log(`${String(f.from).padStart(3, '0')}–${String(f.to).padStart(3, '0')}  ${f.name}`);
  process.exit(0);
}

if (!INTENT) {
  console.error('usage: node kit/pick.mjs --intent "long read + calm + corporate" [--family <name>] [--limit 3] [--garnish] [--json]');
  process.exit(2);
}

/* ---------- terimler ---------- */
const rawTerms = norm(INTENT)
  .split(/[\s,+;/]+/)
  .filter((t) => t.length > 1 && !STOP.has(t));

const expanded = new Map(); // term → weight (direct 1, synonym 0.6)
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
    if (tags.some((t) => t === term)) hits.push(['tag', 3]);
    else if (tags.some((t) => t.includes(term))) hits.push(['tag~', 1.8]);
    if (family.includes(term)) hits.push(['aile', 2.5]);
    if (tag.includes(term)) hits.push(['sentence', 1.2]);
    for (const [kind, base] of hits) {
      score += base * weight;
      reasons.push(`${kind}:${term}`);
    }
  }

  if (wantedFamilies.has(s.family)) {
    score += 4;
    reasons.push(`family-match:${s.family}`);
  }
  if (!s.dark) score -= 0.5; // a style without a dark variant is practically at a disadvantage

  return { style: s, score: Number(score.toFixed(2)), reasons: [...new Set(reasons)] };
});

const ranked = scored
  .filter((r) => r.score > 0)
  .filter((r) => (FAMILY ? norm(r.style.family).includes(norm(FAMILY)) || norm(FAMILY).includes(norm(r.style.family)) : true))
  .sort((a, b) => b.score - a.score || a.style.num.localeCompare(b.style.num))
  .slice(0, Math.max(1, LIMIT));

if (!ranked.length) {
  console.log(`no match: "${INTENT}"`);
  console.log('tip: for family names --families · try a more general intent phrase');
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
  console.log(`   tags: ${s.tags.join(' · ')} · motion: ${s.motion?.enterMs ?? '—'}ms/${s.motion?.ease ?? '—'} · dark: ${s.dark ? 'yes' : 'no'}`);
  console.log(`   rationale: ${r.reasons.slice(0, 6).join(', ')}`);
  console.log(`   file: ${dirOf(s)}/style.md · ${dirOf(s)}/shots/01-page.png`);
  if (GARNISH && i === 0) {
    console.log(`   garnish (compatible): ${s.compatible.join(', ') || '—'}`);
    console.log(`   banned: ${s.forbidden.join(', ') || '—'}`);
  }
  console.log('');
}
console.log('next step: the chosen style\'s style.md → "Visual signature" + "Bans" + tokens.json');
