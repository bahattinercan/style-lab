#!/usr/bin/env node
/**
 * kit/check-schema.mjs — şema v2 bütünlük kapısı (build-gallery'nin derinleştirilmiş hâli).
 *
 * build-gallery yalnız "dosya var mı / bölüm var mı / token metni aynı mı" bakar.
 * Bu kapı verinin **tutarlılığına** bakar:
 *   - tokens.json zorunlu alanları ve ölçek sözleşmesi (boşluk 4…64, radius, tipografi)
 *   - üç kopya paritesi: tokens.json palette/.css ⟺ token-block.css ⟺ tokens.css (sessiz drift yok)
 *   - sahne kapsamı: manifestteki tek sahne (01-page.png, 1280×2400)
 *   - v6 sözleşmesi: palette.dark ve motion geri gelmeyecek (koyu mod + hareket kaldırıldı)
 *   - komşu stil slug'ları katalogda var mı, çelişki var mı
 *   - style.md: "Bir cümlede" uzunluğu, meta tablo anahtarları, AI brief kod bloğu, ≥3 https referans
 *   - must/mustNot ≥3, typography.forbidden dolu, refs biçimi
 *
 * Kullanım:
 *   node kit/check-schema.mjs [--json] [--strict]
 *   Hata varsa exit 1. --strict uyarıları da hata sayar.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pairsToMap, parsePairs, readBlock } from './lib/css-block.mjs';
import { CORE_PALETTE_TARGETS, deriveCorePalette } from './lib/palette.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const MANIFEST = path.join(ROOT, 'kit', 'shots.manifest.json');
const TOKENS_CSS = path.join(ROOT, 'kit', 'tokens.css');
const CORE_JSON = path.join(ROOT, 'kit', 'shots.core.json');
/** Repoda tutulması zorunlu sahneler (kit/shots.core.json); kalanı kit/.shots-cache/ (üretilen). */
const CORE_FILES = (() => {
  try {
    return JSON.parse(fs.readFileSync(CORE_JSON, 'utf8')).files ?? [];
  } catch {
    return [];
  }
})();
const LAYOUTS = (() => {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'layouts.json'), 'utf8'));
  } catch {
    return { heroes: [], navs: [], densities: [] };
  }
})();
const HERO_IDS = new Set(LAYOUTS.heroes.map((h) => h.id));
const NAV_IDS = new Set(LAYOUTS.navs.map((n) => n.id));
const DENSITY_IDS = new Set(LAYOUTS.densities.map((d) => d.id));
const JSON_OUT = process.argv.includes('--json');
const STRICT = process.argv.includes('--strict');

const CSS_KEY = {
  bg: 'bg',
  bg2: 'bg-2',
  surface: 'surface',
  surface2: 'surface-2',
  ink: 'ink',
  inkSoft: 'ink-soft',
  inkFaint: 'ink-faint',
  accent: 'accent',
  accentInk: 'accent-ink',
  line: 'line',
};
const SPACING_STEPS = ['4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px'];
const REQUIRED_PALETTE = ['bg', 'bg2', 'surface', 'surface2', 'ink', 'inkSoft', 'inkFaint', 'accent', 'accentInk', 'line'];
const REQUIRED_SCALE = ['label', 'caption', 'body', 'h2'];
const EXPECTED_SCALE = ['small', 'h3', 'h1', 'h1Mobile'];
const REQUIRED_COMPONENTS = ['button', 'input', 'card', 'nav', 'tableRow', 'toast'];
const EXPECTED_COMPONENTS = ['chip', 'modal', 'chart'];
const REQUIRED_META = ['Hissiyat', 'En iyi', 'Kaçın', 'Aile'];

const errors = [];
const warnings = [];
const E = (m) => errors.push(m);
const W = (m) => warnings.push(m);

const read = (p) => fs.readFileSync(p, 'utf8');

function listStyles() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

/**
 * Bir stilin üç kopyasını okur: token-block.css (kaynak) · tokens.css (üretilen) · tokens.json.css (özet).
 * Üçü ayrı yerde durur; parite denetlenmezse sessiz drift oluşur.
 */
function readTokenSources(dirName, slug, tokensCss) {
  const out = { fragmentLight: null, cssLight: null, jsonCssLight: null };

  const fragmentPath = path.join(STYLES_DIR, dirName, 'token-block.css');
  if (fs.existsSync(fragmentPath)) {
    const css = read(fragmentPath);
    const light = readBlock(css, `[data-style="${slug}"]`);
    if (light) out.fragmentLight = pairsToMap(parsePairs(light));
  }

  const cssLightBlock = readBlock(tokensCss, `\n[data-style="${slug}"]`) ?? readBlock(tokensCss, `[data-style="${slug}"]`);
  if (cssLightBlock) out.cssLight = pairsToMap(parsePairs(cssLightBlock));

  const jsonPath = path.join(STYLES_DIR, dirName, 'tokens.json');
  if (fs.existsSync(jsonPath)) {
    const t = JSON.parse(read(jsonPath));
    if (typeof t.css === 'string' && t.css.trim().startsWith('[')) {
      const block = readBlock(t.css, `[data-style="${slug}"]`);
      if (block) out.jsonCssLight = pairsToMap(parsePairs(block));
    }
  }

  return out;
}

/** iki sözlüğü karşılaştırır; fark varsa E() ile raporlar */
function compareVars(tag, label, a, b, keys) {
  let diffs = 0;
  for (const key of keys) {
    const va = a[key];
    const vb = b[key];
    if (va === undefined && vb === undefined) continue;
    if (va === undefined) {
      E(`${tag}: ${label} --${key} yalnız ikinci kaynakta var (${vb})`);
      diffs++;
    } else if (vb === undefined) {
      E(`${tag}: ${label} --${key} yalnız birinci kaynakta var (${va})`);
      diffs++;
    } else if (String(va).replace(/\s+/g, ' ') !== String(vb).replace(/\s+/g, ' ')) {
      E(`${tag}: ${label} --${key}: "${va}" ≠ "${vb}"`);
      diffs++;
    }
  }
  return diffs;
}

function cssLightSlugs() {
  const css = read(TOKENS_CSS);
  const slugs = new Set();
  for (const m of css.matchAll(/^\[data-style="([a-z0-9-]+)"\]/gm)) slugs.add(m[1]);
  return slugs;
}

function checkStyle(dirName, ctx) {
  const slug = dirName.replace(/^\d+-/, '');
  const dir = path.join(STYLES_DIR, dirName);
  const md = read(path.join(dir, 'style.md'));
  const jsonPath = path.join(dir, 'tokens.json');
  const tag = `${dirName}`;

  if (!ctx.light.has(slug)) E(`${tag}: kit/tokens.css içinde [data-style="${slug}"] bloğu yok`);

  /* ---- style.md ---- */
  const oneLine = md.match(/^>\s+\*\*Bir cümle(?:de|yle):\*\*\s+(.+)$/m);
  if (!oneLine) E(`${tag}/style.md: "**Bir cümlede:**" satırı yok`);
  else if (oneLine[1].trim().length > 170) {
    W(`${tag}/style.md: "Bir cümlede" ${oneLine[1].trim().length} karakter (>170) — kısalt`);
  }

  for (const key of REQUIRED_META) {
    if (!new RegExp(`^\\|\\s+\\*\\*${key}\\*\\*`, 'm').test(md)) {
      E(`${tag}/style.md: meta tabloda **${key}** satırı yok`);
    }
  }
  if (!/\*\*Token\*\*/.test(md.slice(0, 4000))) E(`${tag}/style.md: meta tabloda **Token** bağlantısı yok`);

  const briefIdx = md.indexOf('## AI brief');
  if (briefIdx < 0) E(`${tag}/style.md: "## AI brief" bölümü yok`);
  else {
    const rest = md.slice(briefIdx);
    if (!/```[\s\S]*?```/.test(rest)) E(`${tag}/style.md: AI brief kopyalanabilir kod bloğu içermiyor`);
  }

  const refsSection = md.split(/^## Referanslar$/m)[1]?.split(/^## /m)[0] ?? '';
  const refRows = refsSection.split('\n').filter((l) => /^\|\s*https?:\/\//.test(l.trim()));
  if (refRows.length < 3) E(`${tag}/style.md: "Referanslar" en az 3 https satırı içermeli (${refRows.length})`);

  /* ---- shots ---- */
  const shotsDir = path.join(dir, 'shots');
  const shots = fs.existsSync(shotsDir)
    ? fs.readdirSync(shotsDir).filter((f) => f.toLowerCase().endsWith('.png'))
    : [];
  const requiredScenes = CORE_FILES.length ? CORE_FILES : ctx.scenes;
  for (const scene of requiredScenes) {
    if (!shots.includes(scene)) E(`${tag}: shots/${scene} yok (zorunlu ${requiredScenes.length} sahne)`);
  }
  const extraShots = shots.filter((f) => !requiredScenes.includes(f));
  if (extraShots.length) W(`${tag}: shots/ altında sözleşme dışı ${extraShots.length} görsel (${extraShots.slice(0, 3).join(', ')})`);


  if (!fs.existsSync(jsonPath)) {
    E(`${tag}: tokens.json yok (şema v2 zorunlu)`);
    return { slug, scenes: shots.length };
  }
  const t = JSON.parse(read(jsonPath));

  if (t.slug !== slug) E(`${tag}: tokens.json slug "${t.slug}" klasörle eşleşmiyor`);
  if ((dirName.match(/^(\d+)-/)?.[1] ?? '') !== t.num && t.num !== dirName.slice(0, 2)) E(`${tag}: tokens.json num "${t.num}" klasör ön ekiyle eşleşmiyor`);
  if (!t.name) E(`${tag}: tokens.json name boş`);
  if (!(t.version >= 2)) E(`${tag}: tokens.json version ${t.version} — şema v2 beklenir`);

  /* ---- şema v3 · kompozisyon ekseni (layout) ---- */
  if (t.version >= 3) {
    const l = t.layout;
    if (!l || typeof l !== 'object') {
      E(`${tag}: şema v3 için tokens.json layout { hero, nav, density } zorunlu`);
    } else {
      if (!HERO_IDS.has(l.hero)) E(`${tag}: layout.hero "${l.hero}" kit/render/layouts.json'da yok`);
      if (!NAV_IDS.has(l.nav)) E(`${tag}: layout.nav "${l.nav}" kit/render/layouts.json'da yok`);
      if (!DENSITY_IDS.has(l.density)) E(`${tag}: layout.density "${l.density}" geçersiz (${[...DENSITY_IDS].join('|')})`);
      const partial = path.join(ROOT, 'kit', 'render', 'partials', `hero-${l.hero}.html`);
      if (HERO_IDS.has(l.hero) && !fs.existsSync(partial)) E(`${tag}: layout.hero "${l.hero}" için partial yok (${path.basename(partial)})`);
      const navPartial = path.join(ROOT, 'kit', 'render', 'partials', `nav-${l.nav}.html`);
      if (NAV_IDS.has(l.nav) && !fs.existsSync(navPartial)) E(`${tag}: layout.nav "${l.nav}" için partial yok (${path.basename(navPartial)})`);
    }
  } else {
    W(`${tag}: şema v${t.version} — kompozisyon ekseni (layout) yok; şema v3 beklenir`);
  }

  const palette = t.palette ?? {};
  for (const key of REQUIRED_PALETTE) if (!(key in palette)) E(`${tag}: palette.${key} eksik`);
  const seeds = t.paletteSeeds ?? {};
  for (const key of REQUIRED_PALETTE) if (!(key in seeds)) E(`${tag}: paletteSeeds.${key} eksik`);
  const targets = t.paletteTargets ?? {};
  for (const key of Object.keys(CORE_PALETTE_TARGETS)) {
    if (typeof targets[key] !== 'number' || targets[key] <= 0) E(`${tag}: paletteTargets.${key} pozitif sayı olmalı`);
  }
  if (REQUIRED_PALETTE.every((key) => key in seeds)) {
    try {
      const derived = deriveCorePalette(seeds, targets);
      for (const key of REQUIRED_PALETTE) {
        if (derived[key] !== palette[key]) E(`${tag}: palette.${key} seed/hedef sonucuyla aynı değil (${derived[key]} beklenir)`);
      }
    } catch (error) {
      E(`${tag}: seed paleti çözülemedi (${error.message})`);
    }
  }

  /* v6: koyu mod ve hareket kaldırıldı — geri gelirlerse kapı kırmızı. */
  if ('dark' in palette) E(`${tag}: palette.dark v6'da yasak (koyu mod kaldırıldı)`);
  if ('motion' in t) E(`${tag}: motion v6'da yasak (hareket katmanı kaldırıldı)`);

  /* ---- üç kopya paritesi: token-block.css ⇄ tokens.css ⇄ tokens.json.css ---- */
  const src = readTokenSources(dirName, slug, ctx.tokensCss);
  if (!src.fragmentLight) {
    E(`${tag}: token-block.css yok ya da açık blok eksik — fragment tek kaynak olmalı`);
  } else {
    // 1) tokens.json palette (makine kaynağı) ⇄ fragment
    const paletteVars = {};
    for (const key of Object.keys(CSS_KEY)) {
      const value = palette[key];
      if (value == null || typeof value !== 'string') continue;
      paletteVars[`--${CSS_KEY[key]}`] = value;
    }
    compareVars(tag, 'palette ⇄ token-block.css', paletteVars, src.fragmentLight, Object.keys(paletteVars));

    // 2) fragment ⇄ tokens.css (üretilen)
    if (src.cssLight) {
      const keys = new Set([...Object.keys(src.fragmentLight), ...Object.keys(src.cssLight)]);
      compareVars(tag, 'token-block.css ⇄ tokens.css', src.fragmentLight, src.cssLight, [...keys]);
    } else {
      E(`${tag}: tokens.css içinde açık blok yok`);
    }

    // 3) tokens.json.css ⇄ fragment (üçüncü kopya; yalnız json'da bildirilen anahtarlar denetlenir)
    if (src.jsonCssLight) {
      compareVars(tag, 'tokens.json.css ⇄ token-block.css', src.jsonCssLight, src.fragmentLight, Object.keys(src.jsonCssLight));
    }

    // 4) shape.radius ⇄ fragment
    for (const [field, cssKey] of [['radius', '--radius'], ['radiusLg', '--radius-lg']]) {
      const expected = String(t.shape?.[field] ?? '');
      const actual = src.fragmentLight[cssKey];
      if (expected && actual && expected !== actual) E(`${tag}: shape.${field}=${expected} ile token-block ${cssKey}: ${actual} çelişiyor`);
    }
  }

  const ty = t.typography ?? {};
  for (const k of ['display', 'body', 'mono']) if (!ty[k]) E(`${tag}: typography.${k} eksik`);
  for (const k of REQUIRED_SCALE) if (!(ty.scale ?? {})[k]) E(`${tag}: typography.scale.${k} eksik`);
  for (const k of EXPECTED_SCALE) if (!(ty.scale ?? {})[k]) W(`${tag}: typography.scale.${k} yok (beklenen ölçek)`);
  if (!Array.isArray(ty.forbidden) || ty.forbidden.length < 1) W(`${tag}: typography.forbidden boş (yasak listesi yazılmalı)`);
  if (!ty.measure) W(`${tag}: typography.measure yok`);

  const spacingScale = (t.spacing?.scale ?? []).map((s) => String(s).replace(/\s/g, ''));
  if (spacingScale.length !== SPACING_STEPS.length || spacingScale.some((v, i) => v !== SPACING_STEPS[i])) {
    W(`${tag}: spacing.scale 8'li sözleşmeden farklı (${spacingScale.join('/') || 'boş'})`);
  }

  const radius = String(t.shape?.radius ?? '');
  const radiusLg = String(t.shape?.radiusLg ?? '');
  if (!radius || !radiusLg) E(`${tag}: shape.radius / shape.radiusLg eksik`);

  const comps = t.components ?? {};
  for (const k of REQUIRED_COMPONENTS) if (!comps[k]) E(`${tag}: components.${k} eksik`);
  for (const k of EXPECTED_COMPONENTS) if (!comps[k]) W(`${tag}: components.${k} yok (reçete eksik)`);

  for (const key of ['must', 'mustNot']) {
    const arr = t[key];
    if (!Array.isArray(arr) || arr.length < 3) E(`${tag}: ${key} en az 3 madde olmalı`);
  }

  const nb = t.neighbors ?? {};
  for (const key of ['compatible', 'forbidden']) {
    const list = nb[key];
    if (!Array.isArray(list) || list.length < 2) {
      W(`${tag}: neighbors.${key} en az 2 slug önerilir`);
      continue;
    }
    for (const other of list) {
      if (!ctx.slugs.has(other)) E(`${tag}: neighbors.${key} "${other}" katalogda yok`);
    }
  }
  for (const other of nb.compatible ?? []) {
    if ((nb.forbidden ?? []).includes(other)) E(`${tag}: "${other}" hem uyumlu hem yasak olarak listelenmiş`);
  }

  const refs = t.refs ?? [];
  if (refs.length < 3) E(`${tag}: refs en az 3 kayıt olmalı (${refs.length})`);
  for (const r of refs) {
    if (!/^https:\/\//.test(r.url ?? '')) E(`${tag}: refs url https olmalı (${r.url})`);
    if (!r.label || !r.use) W(`${tag}: refs "${r.url}" label/use eksik`);
  }

  return { slug, scenes: shots.length };
}

function main() {
  const dirs = listStyles();
  if (!dirs.length) {
    console.log('şema: styles/ altında stil yok');
    return 1;
  }
  const manifest = JSON.parse(read(MANIFEST));
  const scenes = (manifest.scenes ?? []).map((s) => s.file);
  const slugs = new Set(dirs.map((d) => d.replace(/^\d+-/, '')));


  const ctx = { scenes, slugs, light: cssLightSlugs(), tokensCss: read(TOKENS_CSS) };
  const coverage = dirs.map((d) => checkStyle(d, ctx));

  // tokens.css'te olup klasörü olmayan bloklar (ölü token)
  for (const slug of ctx.light) {
    if (!slugs.has(slug)) E(`kit/tokens.css: "${slug}" bloğu var ama styles/${slug} klasörü yok`);
  }

  const summary = {
    styles: dirs.length,
    scenes: scenes.length,
    slots: dirs.length * scenes.length,
    filled: coverage.reduce((n, c) => n + c.scenes, 0),
    errors,
    warnings,
  };

  if (JSON_OUT) {
    console.log(JSON.stringify(summary, null, 2));
    return errors.length || (STRICT && warnings.length) ? 1 : 0;
  }

  console.log(
    `şema kapısı · ${dirs.length} stil · ${scenes.length} sahne · ${summary.filled}/${summary.slots} dolu`,
  );
  for (const w of warnings) console.log('  ! ' + w);
  for (const e of errors) console.log('  × ' + e);
  console.log(
    `\n${dirs.length} stil · ${errors.length} hata · ${warnings.length} uyarı` +
      (errors.length === 0 && (!STRICT || warnings.length === 0) ? ' — temiz' : ''),
  );
  return errors.length || (STRICT && warnings.length) ? 1 : 0;
}

process.exit(main());
