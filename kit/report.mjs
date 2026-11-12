#!/usr/bin/env node
/**
 * kit/report.mjs — katalogdan markdown rapor üretir (veri okur, hiçbir şeyi değiştirmez).
 *
 * Çıktı (varsayılan kit/dist/report.md):
 *   1. Özet sayılar (stil, sahne, dolu slot, koyu mod kapsamı)
 *   2. Kapsam tablosu: stil başına sahne, koyu mod durumu, token sayısı
 *   3. Kontrast tablosu: ink/bg, ink-soft/bg, ink-faint/bg, accent-ink/accent, ink/surface
 *   4. Borç listesi: koyu mod borcu (kit/dark-baseline.json), eksik tipografi yasağı, kısa referans
 *   5. Kapı komutları
 *
 * Kullanım:
 *   node kit/report.mjs [--out kit/dist/report.md] [--quiet]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { contrastOnSurface, contrastRatio } from './color.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const KIT = path.join(ROOT, 'kit');

const arg = (name, fallback = null) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
};
const OUT = path.resolve(arg('out', path.join(KIT, 'dist', 'report.md')));
const QUIET = process.argv.includes('--quiet');
/** --check: dist raporu güncel mi (bayat rapor sessizce okunmasın). */
const CHECK = process.argv.includes('--check');

const read = (p) => fs.readFileSync(p, 'utf8');
const readJson = (p, fallback) => (fs.existsSync(p) ? JSON.parse(read(p)) : fallback);

function tokensCss() {
  const css = read(path.join(KIT, 'tokens.css'));
  const root = {};
  const rootMatch = css.match(/:root\s*\{([\s\S]*?)\n\}/);
  if (rootMatch) for (const v of rootMatch[1].matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) root[v[1]] = v[2].trim();
  const light = {};
  const dark = {};
  for (const m of css.matchAll(/^\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) {
    const vars = {};
    for (const v of m[2].matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) vars[v[1]] = v[2].trim();
    light[m[1]] = vars;
  }
  for (const m of css.matchAll(/^\[data-theme="dark"\]\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) {
    const vars = {};
    for (const v of m[2].matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) vars[v[1]] = v[2].trim();
    dark[m[1]] = vars;
  }
  return { root, light, dark };
}

/**
 * Aile bantları tek kaynaktan: kit/families.json (1-145 kesintisiz, çakışmasız).
 * Biçim: [ilk, son, ad] — kit/apply-fragments.mjs bu dosyayı doğrular.
 */
const FAMILIES = (() => {
  const j = JSON.parse(fs.readFileSync(path.join(KIT, 'families.json'), 'utf8'));
  return (j.families ?? []).map((f) => [f.from, f.to, f.name]);
})();
const familyOf = (num) => FAMILIES.find(([lo, hi]) => num >= lo && num <= hi)?.[2] ?? 'Diğer';
const f2 = (n) => (n === null || n === undefined ? '—' : n.toFixed(2));

function main() {
  const { root, light, dark } = tokensCss();
  const manifest = readJson(path.join(KIT, 'shots.manifest.json'), { scenes: [] });
  // Repoda tutulan çekirdek sahneler (kit/shots.core.json). Kalan sahneler kit/.shots-cache/ (üretilen).
  const coreFiles = readJson(path.join(KIT, 'shots.core.json'), { files: [] }).files ?? [];
  const scenes = coreFiles.length ? coreFiles : (manifest.scenes ?? []).map((s) => s.file);
  const allTemplates = (manifest.scenes ?? []).length;
  const darkBaseline = readJson(path.join(KIT, 'dark-baseline.json'), { slugs: {} });
  const contrastBaseline = readJson(path.join(KIT, 'contrast-baseline.json'), {});

  const dirs = fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

  const rows = dirs.map((dirName) => {
    const slug = dirName.replace(/^\d+-/, '');
    const num = parseInt(dirName, 10);
    const t = readJson(path.join(STYLES_DIR, dirName, 'tokens.json'), null);
    const shotsDir = path.join(STYLES_DIR, dirName, 'shots');
    const shots = fs.existsSync(shotsDir) ? fs.readdirSync(shotsDir).filter((f) => f.endsWith('.png')) : [];
    const v = { ...root, ...(light[slug] ?? {}) };
    const darkState = dark[slug] ? 'uygulandı' : darkBaseline.slugs?.[slug] ? 'borç' : 'yok';
    return {
      dirName,
      slug,
      num,
      name: t?.name ?? slug,
      family: familyOf(num),
      scenes: shots.length,
      darkState,
      tokens: Object.keys(light[slug] ?? {}).length,
      contrast: {
        body: contrastRatio(v['ink'], v['bg']),
        soft: contrastRatio(v['ink-soft'], v['bg']),
        faint: contrastRatio(v['ink-faint'], v['bg']),
        accent: contrastRatio(v['accent-ink'], v['accent']),
        onSurface: contrastOnSurface(v['ink'], v['surface'], v['bg']),
      },
      forbiddenMissing: !Array.isArray(t?.typography?.forbidden) || t.typography.forbidden.length === 0,
      refs: Array.isArray(t?.refs) ? t.refs.length : 0,
      debtNote: darkBaseline.slugs?.[slug] ?? null,
      contrastDebt: contrastBaseline[slug] ?? null,
    };
  });

  const filled = rows.reduce((n, r) => n + r.scenes, 0);
  const slots = rows.length * scenes.length;
  const darkDone = rows.filter((r) => r.darkState === 'uygulandı').length;
  const darkDebt = rows.filter((r) => r.darkState === 'borç').length;
  const contrastIssues = rows.filter((r) => (r.contrast.body ?? 9) < 4.5 || (r.contrast.accent ?? 9) < 4.5);

  const lines = [];
  lines.push('# Katalog raporu');
  lines.push('');
  lines.push(`Üretim: \`node kit/report.mjs\` · kaynak: \`kit/tokens.css\` + \`styles/*/tokens.json\` + \`kit/shots.manifest.json\``);
  lines.push('');
  lines.push('## 1 · Özet');
  lines.push('');
  lines.push('| Ölçü | Değer |');
  lines.push('|---|---|');
  lines.push(`| Stil | ${rows.length} |`);
  lines.push(`| Sahne şablonu (tam set) | ${allTemplates} |`);
  lines.push(`| Repoda tutulan sahne | ${scenes.length} (çekirdek; kalanı \`kit/.shots-cache/\`) |`);
  lines.push(`| Dolu sahne | ${filled} / ${slots} (%${Math.round((filled / slots) * 100)}) |`);
  lines.push(`| Koyu mod uygulanmış | ${darkDone} stil |`);
  lines.push(`| Koyu mod borcu | ${darkDebt} stil (\`kit/dark-baseline.json\`) |`);
  lines.push(`| Kontrast hatası | ${contrastIssues.length} stil |`);
  lines.push(`| Boş tipografi yasak listesi | ${rows.filter((r) => r.forbiddenMissing).length} stil |`);
  lines.push('');

  lines.push('## 2 · Kapsam');
  lines.push('');
  lines.push('| # | Stil | Aile | Sahne | Koyu mod | Token |');
  lines.push('|---|---|---|---|---|---|');
  for (const r of rows) {
    lines.push(
      `| ${r.num} | [${r.name}](../styles/${r.dirName}/style.md) | ${r.family} | ${r.scenes}/${scenes.length} | ${
        r.darkState === 'uygulandı' ? '✓' : r.darkState === 'borç' ? 'borç' : '—'
      } | ${r.tokens} |`,
    );
  }
  lines.push('');

  lines.push('## 3 · Kontrast (WCAG)');
  lines.push('');
  lines.push('Eşikler: gövde ≥ 4.5, büyük metin ≥ 3, accent üstü metin ≥ 4.5. `faint` dekoratiftir (≥ 3 hedef, altı uyarı).');
  lines.push('');
  lines.push('| Stil | ink/bg | soft/bg | faint/bg | accent-ink/accent | ink/surface |');
  lines.push('|---|---|---|---|---|---|');
  for (const r of rows) {
    const flag = (v, min) => (v !== null && v < min ? ' ⚠' : '');
    lines.push(
      `| ${r.slug} | ${f2(r.contrast.body)}${flag(r.contrast.body, 4.5)} | ${f2(r.contrast.soft)}${flag(
        r.contrast.soft,
        4.5,
      )} | ${f2(r.contrast.faint)}${flag(r.contrast.faint, 3)} | ${f2(r.contrast.accent)}${flag(
        r.contrast.accent,
        4.5,
      )} | ${f2(r.contrast.onSurface)}${flag(r.contrast.onSurface, 4.5)} |`,
    );
  }
  lines.push('');

  lines.push('## 4 · Borçlar');
  lines.push('');
  if (darkDebt) {
    lines.push(`### Koyu mod (${darkDebt})`);
    lines.push('');
    lines.push('`tokens.json` içinde `palette.dark` var; `kit/tokens.css` bloğu ve `shots/17-18` üretilmedi. Kapatma: koyu bloğu ekle → `node kit/render/render-shots.mjs --styles <slug> --force` → kaydı `kit/dark-baseline.json`’dan sil.');
    lines.push('');
    lines.push('| Stil | Not |');
    lines.push('|---|---|');
    for (const r of rows.filter((x) => x.darkState === 'borç')) lines.push(`| ${r.slug} | ${r.debtNote ?? ''} |`);
    lines.push('');
  }
  if (rows.some((r) => r.forbiddenMissing)) {
    lines.push('### Boş `typography.forbidden`');
    lines.push('');
    lines.push(rows.filter((r) => r.forbiddenMissing).map((r) => `\`${r.slug}\``).join(' · '));
    lines.push('');
  }
  if (rows.filter((r) => r.refs < 3).length) {
    lines.push('### 3’ten az referans');
    lines.push('');
    lines.push(rows.filter((r) => r.refs < 3).map((r) => `\`${r.slug}\` (${r.refs})`).join(' · '));
    lines.push('');
  }
  if (!darkDebt && !rows.some((r) => r.forbiddenMissing) && !rows.filter((r) => r.refs < 3).length) {
    lines.push('Borç yok.');
    lines.push('');
  }

  lines.push('## 5 · Kapılar');
  lines.push('');
  lines.push('```bash');
  lines.push('bash kit/gates.sh                  # hepsi sırayla');
  lines.push('node kit/check-schema.mjs         # şema + koyu mod paritesi + komşu/refs');
  lines.push('node kit/check-contrast.mjs       # WCAG ölçümü');
  lines.push('node kit/export-tokens.mjs --check # dist güncel mi');
  lines.push('node kit/build-gallery.mjs --check # katalog + galeri');
  lines.push('node kit/motion-check.mjs         # hareket sekansı');
  lines.push('```');
  lines.push('');

  const md = lines.join('\n');

  if (CHECK) {
    const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
    if (current === null) {
      console.log(`× rapor yok: ${path.relative(ROOT, OUT)} — node kit/report.mjs`);
      return 1;
    }
    if (current !== md) {
      console.log(`× rapor bayat: ${path.relative(ROOT, OUT)} — node kit/report.mjs ile yenile`);
      return 1;
    }
    if (!QUIET) console.log(`✓ rapor güncel: ${path.relative(ROOT, OUT)} (${rows.length} stil · ${filled}/${slots} sahne)`);
    return 0;
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, md);
  if (!QUIET) {
    console.log(
      `rapor: ${path.relative(ROOT, OUT)} · ${rows.length} stil · ${filled}/${slots} sahne · ` +
        `koyu mod ${darkDone} uygulandı / ${darkDebt} borç`,
    );
  }
  return 0;
}

process.exit(main());
