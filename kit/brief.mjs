#!/usr/bin/env node
/**
 * kit/brief.mjs — implementable brief from intent (P5).
 *
 * Reason: The agent was finding the slug with `pick`, then reading the 5 files and combining them in its head.
 * This script produces an "applicable brief" in a single command: selection rationale, sector/copy, layout
 * archetype, movement choreography, visual treatment, file paths and bans.
 *
 * Usage:
 * node kit/brief.mjs --intent "premium real estate, calm" [--industry real estate] [--limit 2]
 * node kit/brief.mjs --intent "..." --out brief.md
 * node kit/brief.mjs --intent "..." --json
 * node kit/brief.mjs --self-test*/
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES = path.join(ROOT, 'styles');
const CACHE = path.join(ROOT, 'kit', '.shots-cache');
const CORE = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'shots.core.json'), 'utf8')).files;

const ARGV = process.argv.slice(2);
const arg = (name, fb = null) => {
  const i = ARGV.indexOf(`--${name}`);
  return i >= 0 ? (ARGV[i + 1] ?? fb) : fb;
};
const JSON_OUT = ARGV.includes('--json');
const OUT = arg('out');
const INTENT = arg('intent');
const INDUSTRY = arg('industry');
const LIMIT = Number(arg('limit', '2'));

const dirOf = (slug) => fs.readdirSync(STYLES).find((x) => x.replace(/^\d+-/, '') === slug);
const readTokens = (slug) => JSON.parse(fs.readFileSync(path.join(STYLES, dirOf(slug), 'tokens.json'), 'utf8'));

function candidates(intent) {
  const out = execFileSync(
    process.execPath,
    [path.join(ROOT, 'kit', 'pick.mjs'), '--intent', String(intent), '--json', '--limit', String(LIMIT)],
    { encoding: 'utf8' },
  );
  const parsed = JSON.parse(out);
  // pick.mjs --json → { intent, terms, picks[] }
  return Array.isArray(parsed) ? parsed : parsed.picks ?? parsed.candidates ?? [];
}

function packFor(slug) {
  const t = readTokens(slug);
  const id = INDUSTRY ?? t.industries?.[0] ?? 'saas';
  const f = path.join(ROOT, 'kit', 'content', `${id}.json`);
  return { id, pack: fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null };
}

function pathsFor(slug) {
  const dir = dirOf(slug);
  const shots = CORE.filter((f) => fs.existsSync(path.join(STYLES, dir, 'shots', f))).map((f) => `styles/${dir}/shots/${f}`);
  const sectionsDir = path.join(CACHE, dir, 'sections');
  const flowsDir = path.join(CACHE, dir, 'flows');
  const sections = fs.existsSync(sectionsDir) ? fs.readdirSync(sectionsDir).sort().map((f) => `kit/.shots-cache/${dir}/sections/${f}`) : [];
  const flows = fs.existsSync(flowsDir) ? fs.readdirSync(flowsDir).sort().map((f) => `kit/.shots-cache/${dir}/flows/${f}`) : [];
  return { dir, shots, sections, flows };
}

function buildBrief(intentOverride = null) {
  const intent = intentOverride ?? INTENT;
  const list = candidates(intent);
  if (!list.length) throw new Error(`no style matches the intent: ${intent}`);
  const primary = list[0];
  const slug = primary.slug;
  const t = readTokens(slug);
  const { id: industry, pack } = packFor(slug);
  const p = pathsFor(slug);
  const garnish = list[1]?.slug ?? null;

  const lines = [];
  lines.push(`# Brief · ${INTENT}`);
  lines.push('');
  lines.push(`> Production:\`node kit/brief.mjs --intent "${INTENT}"${INDUSTRY ? ` --industry ${INDUSTRY}` : ''}\``);
  lines.push('');
  lines.push('## Selection');
  lines.push('');
  lines.push(`- **Dominant style:** \`${slug}\` (${t.num} · ${t.name})${garnish ? `· **garnish:**\`${garnish}\`` : ''}`);
  lines.push(`- **Sector:** \`${industry}\` — ${pack?.label ?? '—'}`);
  lines.push(`- **Rationale:** ${primary.reason ?? primary.tag ?? t.tag ?? 'intent match'}`);
  lines.push('');
  lines.push('## Composition and motion');
  lines.push('');
  lines.push(`| Axis | Value | Where |`);
  lines.push(`|---|---|---|`);
  lines.push(`| hero | \`${t.layout?.hero ?? '—'}\` | \`kit/render/partials/hero-${t.layout?.hero}.html\` |`);
  lines.push(`| nav | \`${t.layout?.nav ?? '—'}\` | \`kit/render/partials/nav-${t.layout?.nav}.html\` |`);
  lines.push(`| density | density \`${t.layout?.density ?? '—'}\` | \`kit/render/scene.css\` |`);
  lines.push(`| enter | \`${t.motion?.choreography?.enter ?? '—'}\` | \`kit/render/motion/patterns.json\` |`);
  lines.push(`| scroll | \`${t.motion?.choreography?.scroll ?? '—'}\`| same |`);
  lines.push(`| hover | \`${t.motion?.choreography?.hover ?? '—'}\`| same |`);
  lines.push(`| reduced | \`${t.motion?.choreography?.reduced ?? '—'}\` | required |`);
  lines.push(`| photo | \`${t.imagery?.photo ?? '—'}\` · \`${t.imagery?.treatment?.mode ?? '—'}\` ${t.imagery?.treatment?.strength ?? ''} | \`kit/images/\` |`);
  lines.push('');
  lines.push('## Copy (sector pack)');
  lines.push('');
  if (pack) {
    lines.push(`- **h1:** ${pack.hero.h1}`);
    lines.push(`- **lede:** ${pack.hero.lede}`);
    lines.push(`- **CTA:** ${pack.hero.ctaPrimary} · ${pack.hero.ctaSecondary}`);
    lines.push(`- **evidence:** ${pack.proofs.join(' · ')}`);
    lines.push(`- **section headings:** ${pack.tiles.map((x) => x.cap).join(' · ')}`);
  } else lines.push('- package not found');
  lines.push('');
  lines.push('## Token contract');
  lines.push('');
  lines.push('```css');
  lines.push(`[data-style="${slug}"] { --bg: ${t.palette.bg}; --ink: ${t.palette.ink}; --accent: ${t.palette.accent}; --radius: ${t.shape?.radius}; }`);
  lines.push('```');
  lines.push('');
  lines.push('Application: `kit/dist/tokens.all.css` → `[data-style="' + slug + '"]` block.');
  lines.push('**No** hard-coded colour/radius/shadow in the component code; verify with `node kit/style-lint.mjs src --style ' + slug + '`.');
  lines.push('');
  lines.push('## Evidence files');
  lines.push('');
  for (const s of p.shots) lines.push(`- \`${s}\``);
  if (p.sections.length) lines.push(`- sections: ${p.sections.length} files (\`kit/.shots-cache/${p.dir}/sections/\`)`);
  if (p.flows.length) lines.push(`- flows: ${p.flows.length} files (\`kit/.shots-cache/${p.dir}/flows/\`)`);
  if (!p.sections.length || !p.flows.length) {
    lines.push('');
    lines.push('```bash');
    lines.push('node kit/render/render-sections.mjs --styles ' + slug);
    lines.push('node kit/render/render-flows.mjs --styles ' + slug);
    lines.push('```');
  }
  lines.push('');
  lines.push('## Bans (the style\'s own list)');
  lines.push('');
  for (const m of (t.mustNot ?? []).slice(0, 6)) lines.push(`- ${m}`);
  lines.push('');
  lines.push('## Verification');
  lines.push('');
  lines.push('```bash');
  lines.push(`node kit/style-lint.mjs src --style ${slug}   # token leaks`);
  lines.push('node kit/check-contrast.mjs                    # WCAG + APCA');
  lines.push('node kit/motion-check.mjs # motion-budget');
  lines.push('```');
  return lines.join('\n');
}

if (ARGV.includes('--self-test')) {
  const md = buildBrief('premium emlak');
  const ok = md.includes('## Selection') && md.includes('## Composition and motion') && md.includes('## Evidence files') && md.length > 500;
  console.log(`${ok ? '✓' : '×'} brief generated (${md.length} characters)`);
  process.exit(ok ? 0 : 1);
}

if (!INTENT) {
  console.error('usage: node kit/brief.mjs --intent "..." [--industry <id>] [--out brief.md] [--json]');
  process.exit(2);
}

const md = buildBrief();
if (JSON_OUT) console.log(JSON.stringify({ intent: INTENT, markdown: md }, null, 2));
else if (OUT) {
  fs.writeFileSync(path.resolve(OUT), md + '\n');
  console.log(`brief written: ${OUT} (${md.length} characters)`);
} else process.stdout.write(md + '\n');
