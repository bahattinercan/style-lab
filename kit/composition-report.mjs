#!/usr/bin/env node
/**
 * kit/composition-report.mjs — kompozisyon dağılımını ölçen rapor (kit/dist/composition.md).
 *
 * Neden: `kit/dist/report.md` kapsam/kontrast/koyu mod borcunu ölçer; **iskelet çeşitliliğini**
 * ölçmez. Bu rapor, v5 revizyonunun ana ölçüsü olan "tekdüzelik endeksi"ni (en kalabalık
 * hero|nav kombinasyonunun payı) ve aile bazlı çeşitliliği yazıya döker.
 *
 * Kullanım:
 *   node kit/composition-report.mjs           # yaz
 *   node kit/composition-report.mjs --check   # güncel mi (bayat rapor = exit 1)
 *   node kit/composition-report.mjs --quiet
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkLayout } from './check-layout.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'kit', 'dist', 'composition.md');
const LAYOUTS = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'layouts.json'), 'utf8'));
const ARGV = process.argv.slice(2);
const CHECK = ARGV.includes('--check');
const QUIET = ARGV.includes('--quiet');

const STYLES_DIR = path.join(ROOT, 'styles');
const FAMILIES = (JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'families.json'), 'utf8')).families ?? []).map(
  (f) => ({ from: f.from, to: f.to, name: f.name }),
);

function discover() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => {
      const num = parseInt(d.name, 10);
      const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, d.name, 'tokens.json'), 'utf8'));
      return {
        dirName: d.name,
        num,
        slug: tokens.slug ?? d.name.replace(/^\d+-/, ''),
        name: tokens.name ?? d.slug,
        family: FAMILIES.find((f) => num >= f.from && num <= f.to)?.name ?? 'Diğer',
        layout: tokens.layout ?? null,
      };
    })
    .sort((a, b) => a.num - b.num);
}

const pct = (v, n) => `%${Math.round((v / n) * 100)}`;

function build() {
  const rows = discover();
  const result = checkLayout(rows);
  if (result.errors.length) {
    console.error('× kompozisyon raporu üretilemedi; önce kapıyı temizle: node kit/check-layout.mjs');
    for (const e of result.errors.slice(0, 5)) console.error(`  - ${e}`);
    process.exit(1);
  }
  const n = rows.length;
  const s = result.stats;
  const uniformity = s.fingerprints[0]?.[1] ?? n;
  const heroShare = s.heroes[0]?.[1] ?? n;
  const familyCount = s.families.filter((f) => f.n >= 2);
  const avgHero = familyCount.reduce((a, f) => a + f.heroes, 0) / Math.max(1, familyCount.length);

  const exemplars = (key, value, limit = 3) =>
    rows.filter((r) => r.layout[key] === value).slice(0, limit).map((r) => `\`${r.slug}\``).join(', ');

  const lines = [];
  lines.push('# Kompozisyon raporu');
  lines.push('');
  lines.push('Üretim: `node kit/composition-report.mjs` · kaynak: `kit/render/layouts.json` + `styles/*/tokens.json`');
  lines.push('');
  lines.push('> Neden bu rapor var: katalog 145 stilin **rengini** çeşitlendiriyordu, **iskeletini** değil.');
  lines.push('> Ölçü: hero|nav parmak izi. Hedef: tekdüzelik endeksi (en kalabalık kombinasyonun payı) **%30 altı**.');
  lines.push('');
  lines.push('## 1 · Özet');
  lines.push('');
  lines.push('| Ölçü | Değer | Hedef |');
  lines.push('|---|---|---|');
  lines.push(`| Stil | ${n} | — |`);
  lines.push(`| Farklı hero|nav parmak izi | ${s.fingerprints.length} | ≥ 12 |`);
  lines.push(`| **Tekdüzelik endeksi** (en kalabalık parmak izi) | ${uniformity}/${n} = ${pct(uniformity, n)} | <%30 |`);
  lines.push(`| En kalabalık tek hero | ${s.heroes[0][0]} = ${heroShare}/${n} = ${pct(heroShare, n)} | <%35 |`);
  lines.push(`| Aile başına ortalama farklı hero | ${avgHero.toFixed(1)} | ≥ 2 |`);
  lines.push(`| Kullanılan arketip | ${s.heroes.length} hero · ${s.navs.length} nav · ${s.densities.length} yoğunluk | tümü |`);
  lines.push('');

  lines.push('## 2 · Hero arketipleri');
  lines.push('');
  lines.push('| Arketip | Ne zaman | Stil | Örnekler |');
  lines.push('|---|---|---|---|');
  for (const h of LAYOUTS.heroes) {
    const used = s.heroes.find(([k]) => k === h.id)?.[1] ?? 0;
    lines.push(`| \`${h.id}\` · ${h.label} | ${h.when} | ${used} (${pct(used, n)}) | ${exemplars('hero', h.id)} |`);
  }
  lines.push('');
  lines.push('## 3 · Nav arketipleri');
  lines.push('');
  lines.push('| Arketip | Ne zaman | Stil | Örnekler |');
  lines.push('|---|---|---|---|');
  for (const v of LAYOUTS.navs) {
    const used = s.navs.find(([k]) => k === v.id)?.[1] ?? 0;
    lines.push(`| \`${v.id}\` · ${v.label} | ${v.when} | ${used} (${pct(used, n)}) | ${exemplars('nav', v.id)} |`);
  }
  lines.push('');
  lines.push('## 4 · Yoğunluk');
  lines.push('');
  lines.push('| Yoğunluk | Ne zaman | Stil |');
  lines.push('|---|---|---|');
  for (const d of LAYOUTS.densities) {
    const used = s.densities.find(([k]) => k === d.id)?.[1] ?? 0;
    lines.push(`| \`${d.id}\` · ${d.label} | ${d.when} | ${used} (${pct(used, n)}) |`);
  }
  lines.push('');
  lines.push('## 5 · Aile bazlı çeşitlilik');
  lines.push('');
  lines.push('| Aile | Stil | Farklı hero | Farklı parmak izi | Baskın hero |');
  lines.push('|---|---|---|---|---|');
  for (const f of s.families) {
    const list = rows.filter((r) => r.family === f.family);
    const byHero = new Map();
    for (const r of list) byHero.set(r.layout.hero, (byHero.get(r.layout.hero) ?? 0) + 1);
    const top = [...byHero.entries()].sort((a, b) => b[1] - a[1])[0];
    lines.push(`| ${f.family} | ${f.n} | ${f.heroes} | ${f.fingerprints} | \`${top?.[0]}\` (${top?.[1]}) |`);
  }
  lines.push('');
  lines.push('## 6 · Parmak izleri');
  lines.push('');
  lines.push('| hero|nav | Stil | Pay |');
  lines.push('|---|---|---|');
  for (const [k, v] of s.fingerprints) lines.push(`| \`${k}\` | ${v} | ${pct(v, n)} |`);
  lines.push('');
  lines.push('## 7 · Kalan eksenler (henüz ölçülmüyor)');
  lines.push('');
  lines.push('| Eksen | Durum | Plan |');
  lines.push('|---|---|---|');
  lines.push('| İçerik paketi (sektör) | tek kurgusal SaaS + emlak | P1: `kit/content/*.json`, `tokens.json → industries[]` |');
  lines.push('| Görsel katman | 0 `<img>` (yalnız CSS motif) | P2: `kit/images/` + `imagery.treatment` |');
  lines.push('| Bölüm kütüphanesi | yok | P3: `kit/sections.html` + 12 arketip |');
  lines.push('| Akış şeritleri | tek kare | P4: onboarding/checkout/invite akışları |');
  lines.push('');
  return lines.join('\n');
}

const md = build();
if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
  if (current === null) {
    console.log('× kompozisyon raporu yok — node kit/composition-report.mjs');
    process.exit(1);
  }
  if (current !== md) {
    console.log('× kompozisyon raporu bayat — node kit/composition-report.mjs');
    process.exit(1);
  }
  if (!QUIET) console.log('✓ kompozisyon raporu güncel');
  process.exit(0);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md);
if (!QUIET) console.log(`kompozisyon raporu: ${path.relative(ROOT, OUT)}`);
