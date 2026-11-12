#!/usr/bin/env node
/**
 * kit/brief.mjs — niyetten uygulanabilir brief (P5).
 *
 * Neden: ajan `pick` ile slug buluyor, sonra 5 dosyayı okuyup kafasında birleştiriyordu.
 * Bu script tek komutta "uygulanabilir brief" üretir: seçim gerekçesi, sektör/kopya, layout
 * arketipi, hareket koreografisi, görsel treatment, dosya yolları ve yasaklar.
 *
 * Kullanım:
 *   node kit/brief.mjs --intent "premium emlak, sakin" [--industry emlak] [--limit 2]
 *   node kit/brief.mjs --intent "..." --out brief.md
 *   node kit/brief.mjs --intent "..." --json
 *   node kit/brief.mjs --self-test
 */
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
  if (!list.length) throw new Error(`niyetle eşleşen stil yok: ${intent}`);
  const primary = list[0];
  const slug = primary.slug;
  const t = readTokens(slug);
  const { id: industry, pack } = packFor(slug);
  const p = pathsFor(slug);
  const garnish = list[1]?.slug ?? null;

  const lines = [];
  lines.push(`# Brief · ${INTENT}`);
  lines.push('');
  lines.push(`> Üretim: \`node kit/brief.mjs --intent "${INTENT}"${INDUSTRY ? ` --industry ${INDUSTRY}` : ''}\``);
  lines.push('');
  lines.push('## Seçim');
  lines.push('');
  lines.push(`- **Baskın stil:** \`${slug}\` (${t.num} · ${t.name})${garnish ? ` · **garnitür:** \`${garnish}\`` : ''}`);
  lines.push(`- **Sektör:** \`${industry}\` — ${pack?.label ?? '—'}`);
  lines.push(`- **Gerekçe:** ${primary.reason ?? primary.tag ?? t.tag ?? 'niyet eşleşmesi'}`);
  lines.push('');
  lines.push('## Kompozisyon ve hareket');
  lines.push('');
  lines.push(`| Eksen | Değer | Nerede |`);
  lines.push(`|---|---|---|`);
  lines.push(`| hero | \`${t.layout?.hero ?? '—'}\` | \`kit/render/partials/hero-${t.layout?.hero}.html\` |`);
  lines.push(`| nav | \`${t.layout?.nav ?? '—'}\` | \`kit/render/partials/nav-${t.layout?.nav}.html\` |`);
  lines.push(`| yoğunluk | \`${t.layout?.density ?? '—'}\` | \`kit/render/scene.css\` |`);
  lines.push(`| enter | \`${t.motion?.choreography?.enter ?? '—'}\` | \`kit/render/motion/patterns.json\` |`);
  lines.push(`| scroll | \`${t.motion?.choreography?.scroll ?? '—'}\` | aynı |`);
  lines.push(`| hover | \`${t.motion?.choreography?.hover ?? '—'}\` | aynı |`);
  lines.push(`| reduced | \`${t.motion?.choreography?.reduced ?? '—'}\` | zorunlu |`);
  lines.push(`| fotoğraf | \`${t.imagery?.photo ?? '—'}\` · \`${t.imagery?.treatment?.mode ?? '—'}\` ${t.imagery?.treatment?.strength ?? ''} | \`kit/images/\` |`);
  lines.push('');
  lines.push('## Kopya (sektör paketi)');
  lines.push('');
  if (pack) {
    lines.push(`- **h1:** ${pack.hero.h1}`);
    lines.push(`- **lede:** ${pack.hero.lede}`);
    lines.push(`- **CTA:** ${pack.hero.ctaPrimary} · ${pack.hero.ctaSecondary}`);
    lines.push(`- **kanıt:** ${pack.proofs.join(' · ')}`);
    lines.push(`- **bölüm başlıkları:** ${pack.tiles.map((x) => x.cap).join(' · ')}`);
  } else lines.push('- paket bulunamadı');
  lines.push('');
  lines.push('## Token sözleşmesi');
  lines.push('');
  lines.push('```css');
  lines.push(`[data-style="${slug}"] { --bg: ${t.palette.bg}; --ink: ${t.palette.ink}; --accent: ${t.palette.accent}; --radius: ${t.shape?.radius}; }`);
  lines.push('```');
  lines.push('');
  lines.push('Uygulama: `kit/dist/tokens.all.css` → `[data-style="' + slug + '"]` bloğu; koyu mod `[data-theme="dark"]`.');
  lines.push('Bileşen kodunda hard-coded renk/radius/gölge **yok**; `node kit/style-lint.mjs src --style ' + slug + '` ile denetle.');
  lines.push('');
  lines.push('## Kanıt dosyaları');
  lines.push('');
  for (const s of p.shots) lines.push(`- \`${s}\``);
  if (p.sections.length) lines.push(`- bölümler: ${p.sections.length} dosya (\`kit/.shots-cache/${p.dir}/sections/\`)`);
  if (p.flows.length) lines.push(`- akışlar: ${p.flows.length} dosya (\`kit/.shots-cache/${p.dir}/flows/\`)`);
  if (!p.sections.length || !p.flows.length) {
    lines.push('');
    lines.push('```bash');
    lines.push('node kit/render/render-sections.mjs --styles ' + slug);
    lines.push('node kit/render/render-flows.mjs --styles ' + slug);
    lines.push('```');
  }
  lines.push('');
  lines.push('## Yasaklar (stilin kendi listesi)');
  lines.push('');
  for (const m of (t.mustNot ?? []).slice(0, 6)) lines.push(`- ${m}`);
  lines.push('');
  lines.push('## Doğrulama');
  lines.push('');
  lines.push('```bash');
  lines.push(`node kit/style-lint.mjs src --style ${slug}   # token sızıntısı`);
  lines.push('node kit/check-contrast.mjs                    # WCAG + APCA');
  lines.push('node kit/motion-check.mjs                      # hareket bütçesi');
  lines.push('```');
  return lines.join('\n');
}

if (ARGV.includes('--self-test')) {
  const md = buildBrief('premium emlak');
  const ok = md.includes('## Seçim') && md.includes('## Kompozisyon ve hareket') && md.includes('## Kanıt dosyaları') && md.length > 500;
  console.log(`${ok ? '✓' : '×'} brief üretimi (${md.length} karakter)`);
  process.exit(ok ? 0 : 1);
}

if (!INTENT) {
  console.error('kullanım: node kit/brief.mjs --intent "..." [--industry <id>] [--out brief.md] [--json]');
  process.exit(2);
}

const md = buildBrief();
if (JSON_OUT) console.log(JSON.stringify({ intent: INTENT, markdown: md }, null, 2));
else if (OUT) {
  fs.writeFileSync(path.resolve(OUT), md + '\n');
  console.log(`brief yazıldı: ${OUT} (${md.length} karakter)`);
} else process.stdout.write(md + '\n');
