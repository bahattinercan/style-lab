#!/usr/bin/env node
/**
 * kit/render/render-shots.mjs — stillerin ekran görüntülerini üretir.
 *
 * Yöntem: kit/render/*.html şablonları stilin data-style'ı + imza CSS'i ile
 * doldurulur, Edge headless ile ekran görüntüsü alınır. npm bağımlılığı yok.
 *
 * Kullanım:
 *   node kit/render/render-shots.mjs                        # tüm stiller, tüm sahneler
 *   node kit/render/render-shots.mjs --styles minimalism,glassmorphism
 *   node kit/render/render-shots.mjs --scene landing         # tek sahne
 *   node kit/render/render-shots.mjs --styles y2k --force     # var olanı ez
 *
 * Çıktı:
 *   styles/<nn-slug>/shots/01-landing.png
 *   styles/<nn-slug>/shots/02-dashboard.png
 *   styles/<nn-slug>/shots/03-mobile.png
 *   styles/<nn-slug>/shots/04-components.png
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { configFor } from './shots.config.mjs';
import { launch as launchCdp } from './cdp-browser.mjs';
import { icon } from './icons.mjs';
import { cropPngTop } from './png.mjs';

const run = promisify(execFile);
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const TMP_DIR = path.join(HERE, '.tmp');

const SCENES = [
  { key: 'landing', file: '01-landing.png', tpl: 'landing.html', width: 1280, height: 900, label: 'Landing' },
  { key: 'dashboard', file: '02-dashboard.png', tpl: 'dashboard.html', width: 1280, height: 900, label: 'Dashboard' },
  { key: 'mobile', file: '03-mobile.png', tpl: 'mobile.html', width: 390, height: 844, label: 'Mobil' },
  { key: 'components', file: '04-components.png', tpl: 'components.html', width: 1280, height: 900, label: 'Bileşenler · temel' },
  { key: 'form', file: '05-components-form.png', tpl: 'forms.html', width: 1280, height: 900, label: 'Bileşenler · form' },
  { key: 'overlay', file: '06-components-overlay.png', tpl: 'overlay.html', width: 1280, height: 900, label: 'Bileşenler · katman' },
  { key: 'data', file: '07-components-data.png', tpl: 'data.html', width: 1280, height: 900, label: 'Bileşenler · veri' },
  { key: 'nav', file: '08-components-nav.png', tpl: 'nav.html', width: 1280, height: 900, label: 'Bileşenler · gezinme' },
  { key: 'pricing', file: '09-page-pricing.png', tpl: 'pricing.html', width: 1280, height: 1150, label: 'Sayfa · fiyatlandırma' },
  { key: 'auth', file: '10-page-auth.png', tpl: 'auth.html', width: 1280, height: 900, label: 'Sayfa · giriş' },
  { key: 'list', file: '11-page-list.png', tpl: 'list.html', width: 1280, height: 1000, label: 'Sayfa · liste' },
  { key: 'states', file: '12-page-states.png', tpl: 'states.html', width: 1280, height: 900, label: 'Sayfa · durumlar' },
  { key: 'settings', file: '13-page-settings.png', tpl: 'settings.html', width: 1280, height: 1000, label: 'Sayfa · ayarlar' },
  { key: 'checkout', file: '14-page-checkout.png', tpl: 'checkout.html', width: 1280, height: 1000, label: 'Sayfa · ödeme' },
  { key: 'onboarding', file: '15-page-onboarding.png', tpl: 'onboarding.html', width: 1280, height: 900, label: 'Sayfa · onboarding' },
  { key: 'article', file: '16-page-article.png', tpl: 'article.html', width: 1280, height: 1100, label: 'Sayfa · makale' },
  /* ---- emlak (estate) sahneleri: 22–27 ---- */
  { key: 'estate-landing', file: '22-estate-landing.png', tpl: 'estate.html', width: 1280, height: 2080, label: 'Emlak · landing' },
  { key: 'estate-detail', file: '23-estate-detail.png', tpl: 'estate-detail.html', width: 1280, height: 1600, label: 'Emlak · ilan detayı' },
  { key: 'estate-map', file: '24-estate-map.png', tpl: 'estate-map.html', width: 1280, height: 760, label: 'Emlak · harita + filtre' },
  { key: 'estate-concierge', file: '25-estate-concierge.png', tpl: 'estate-concierge.html', width: 1280, height: 880, label: 'Emlak · concierge' },
  { key: 'mobile-estate', file: '26-mobile-estate.png', tpl: 'mobile-estate.html', width: 390, height: 844, label: 'Mobil · emlak' },
  { key: 'motion', file: '27-motion.png', tpl: 'motion.html', width: 1280, height: 900, label: 'Hareket levhası' },
  { key: 'dark-landing', file: '17-dark-landing.png', tpl: 'dark-landing.html', width: 1280, height: 900, label: 'Koyu mod · landing' },
  { key: 'dark-dashboard', file: '28-dark-dashboard.png', tpl: 'dark-dashboard.html', width: 1280, height: 900, label: 'Koyu mod · dashboard' },
  { key: 'dark-components', file: '29-dark-components.png', tpl: 'dark-components.html', width: 1280, height: 900, label: 'Koyu mod · bileşenler' },
  { key: 'dark-list', file: '30-dark-list.png', tpl: 'dark-list.html', width: 1280, height: 1000, label: 'Koyu mod · liste' },
  { key: 'dark-mobile', file: '31-dark-mobile.png', tpl: 'dark-mobile.html', width: 390, height: 844, label: 'Koyu mod · mobil' },
  { key: 'dark-form', file: '18-dark-form.png', tpl: 'dark-form.html', width: 1280, height: 900, label: 'Koyu mod · form' },
  { key: 'mobile-sheet', file: '19-mobile-sheet.png', tpl: 'mobile-sheet.html', width: 390, height: 844, label: 'Mobil · alt sayfa' },
  { key: 'mobile-form', file: '20-mobile-form.png', tpl: 'mobile-form.html', width: 390, height: 844, label: 'Mobil · form' },
  { key: 'mobile-list', file: '21-mobile-list.png', tpl: 'mobile-list.html', width: 390, height: 844, label: 'Mobil · liste' },
  /* ---- P4b: işlevsel sahneler 32–37 ---- */
  { key: 'paywall', file: '32-paywall.png', tpl: 'paywall.html', width: 1280, height: 900, label: 'Sayfa · paywall' },
  { key: 'feed', file: '33-feed.png', tpl: 'feed.html', width: 1280, height: 900, label: 'Sayfa · etkinlik akışı' },
  { key: 'table-filters', file: '34-table-filters.png', tpl: 'table-filters.html', width: 1280, height: 960, label: 'Sayfa · filtreli tablo' },
  { key: 'profile', file: '35-profile.png', tpl: 'profile.html', width: 1280, height: 900, label: 'Sayfa · profil' },
  { key: 'search', file: '36-search.png', tpl: 'search.html', width: 1280, height: 900, label: 'Sayfa · arama' },
  { key: 'integrations', file: '37-integrations.png', tpl: 'integrations.html', width: 1280, height: 900, label: 'Sayfa · entegrasyonlar' },
];

const CORE_JSON = path.join(ROOT, 'kit', 'shots.core.json');
const CONTENT_DIR = path.join(ROOT, 'kit', 'content');
const CACHE_DIR = path.join(ROOT, 'kit', '.shots-cache');
/** Repoda tutulan sahneler (kit/shots.core.json); kalanı CACHE_DIR'e yazılır. */
const CORE_FILES = new Set(
  (() => {
    try {
      return JSON.parse(fs.readFileSync(CORE_JSON, 'utf8')).files ?? [];
    } catch {
      console.warn('uyarı: kit/shots.core.json okunamadı; tüm sahneler repoya yazılacak');
      return [];
    }
  })(),
);
const CACHE_ONLY = process.argv.includes('--cache-only');
/** Sahnenin çıktı dizini: çekirdek sahne → styles/<dir>/shots, diğerleri → kit/.shots-cache/<dir>. */
const outDirFor = (dirName, file) =>
  !CACHE_ONLY && CORE_FILES.has(file)
    ? path.join(STYLES_DIR, dirName, 'shots')
    : path.join(CACHE_DIR, dirName);

const MANIFEST = path.join(ROOT, 'kit', 'shots.manifest.json');
const MANIFEST_LOCK = `${MANIFEST}.lock`;
const LOCK_STALE_MS = 20_000;
const LOCK_WAIT_MS = 15_000;
/** senkron bekleme: kilit yokken kısa aralıklarla yeniden dene (Atomics.wait bloklar, CPU yakmaz) */
const sleepMs = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
const QA_DIR = path.join(ROOT, 'kit', 'qa');
/** headless pencere payı: viewport = pencere - 92px (AMPİRİK; WINDOW_CHROME ile değiştir) */
const WINDOW_CHROME = Number(process.env.WINDOW_CHROME ?? 92);
const sceneByKey = (k) =>
  SCENES.find((s) => s.key === k) ??
  SCENES.find((s) => s.file.startsWith(k)) ??
  SCENES.find((s) => s.tpl === `${k}.html`);

const EDGE_CANDIDATES = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/microsoft-edge',
];

function findBrowser() {
  if (process.env.BROWSER) return process.env.BROWSER;
  for (const p of EDGE_CANDIDATES) if (fs.existsSync(p)) return p;
  throw new Error('Chromium tabanlı tarayıcı bulunamadı; BROWSER=/yol/tarayici ver');
}

function arg(name, fallback = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
}

const FORCE = process.argv.includes('--force');
/** Görsel kıyas / geri dönüş: kare başına yeni tarayıcı (eski davranış). */
const LEGACY_SPAWN = process.argv.includes('--legacy-spawn') || process.env.SHOTS_LEGACY_SPAWN === '1';

/**
 * Kompozisyon ekseni: kit/render/layouts.json (tek kaynak) + styles/<dir>/tokens.json → layout.
 * Eksik/geçersiz layout sessizce varsayılana düşmez; kapı (kit/check-layout.mjs) hatayı verir,
 * render ise "split | inline | balanced" ile devam eder ki tek bir bozuk dosya 145 görseli durdurmasın.
 */
const LAYOUT_DEFS = (() => {
  try {
    return JSON.parse(fs.readFileSync(path.join(HERE, 'layouts.json'), 'utf8'));
  } catch (err) {
    console.warn(`uyarı: kit/render/layouts.json okunamadı (${err.message}); varsayılan kompozisyon kullanılacak`);
    return { heroes: [], navs: [], densities: [] };
  }
})();
const DEFAULT_LAYOUT = { hero: 'split', nav: 'inline', density: 'balanced' };
const layoutCache = new Map();
const imageryCache = new Map();
const copyCache = new Map();

/** Sektör içerik paketi (P1): styles/<dir>/tokens.json → industries[0] → kit/content/<pack>.json */
function copyFor(dirName) {
  if (copyCache.has(dirName)) return copyCache.get(dirName);
  let pack = null;
  try {
    const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dirName, 'tokens.json'), 'utf8'));
    const id = tokens.industries?.[0] ?? 'saas';
    const file = path.join(CONTENT_DIR, `${id}.json`);
    pack = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
  } catch {
    pack = null;
  }
  copyCache.set(dirName, pack);
  return pack;
}

/** h1'i dengeli 3 satıra böler (type arketipi satır maskesi kullanır). */
function h1Lines(text) {
  const words = String(text).split(/\s+/);
  if (words.length <= 3) return words.join('<br>');
  const per = Math.ceil(words.length / 3);
  const lines = [];
  for (let i = 0; i < words.length; i += per) lines.push(words.slice(i, i + per).join(' '));
  return lines.slice(0, 3).join('<br>');
}

/** styles/<dir>/tokens.json → imagery { photo, treatment } (P2). */
function imageryFor(dirName) {
  if (imageryCache.has(dirName)) return imageryCache.get(dirName);
  let imagery = null;
  try {
    const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dirName, 'tokens.json'), 'utf8'));
    imagery = tokens.imagery ?? null;
  } catch {
    imagery = null;
  }
  imageryCache.set(dirName, imagery);
  return imagery;
}

/** styles/<dir>/tokens.json → { hero, nav, density }; geçersiz değer varsayılana düşer. */
function layoutFor(dirName) {
  if (layoutCache.has(dirName)) return layoutCache.get(dirName);
  let layout = DEFAULT_LAYOUT;
  try {
    const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dirName, 'tokens.json'), 'utf8'));
    const l = tokens.layout ?? {};
    const hero = LAYOUT_DEFS.heroes.some((h) => h.id === l.hero) ? l.hero : DEFAULT_LAYOUT.hero;
    const nav = LAYOUT_DEFS.navs.some((n) => n.id === l.nav) ? l.nav : DEFAULT_LAYOUT.nav;
    const density = LAYOUT_DEFS.densities.some((d) => d.id === l.density) ? l.density : DEFAULT_LAYOUT.density;
    layout = { hero, nav, density };
  } catch (err) {
    console.warn(`uyarı: ${dirName}/tokens.json okunamadı (${err.message}); varsayılan kompozisyon`);
  }
  layoutCache.set(dirName, layout);
  return layout;
}

/** partials/hero-<id>.html · nav-<id>.html — 13 küçük parça, şablon başına bir kez okunur. */
const partialCache = new Map();
function partial(name) {
  if (partialCache.has(name)) return partialCache.get(name);
  const file = path.join(HERE, 'partials', `${name}.html`);
  if (!fs.existsSync(file)) throw new Error(`partial yok: kit/render/partials/${name}.html`);
  const html = fs.readFileSync(file, 'utf8');
  partialCache.set(name, html);
  return html;
}

function tokenVars() {
  const css = fs.readFileSync(path.join(ROOT, 'kit', 'tokens.css'), 'utf8');
  const map = {};
  for (const m of css.matchAll(/^\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) {
    const vars = {};
    for (const v of m[2].matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) vars[v[1]] = v[2].trim();
    map[m[1]] = vars;
  }
  return map;
}

/**
 * Aile bantları tek kaynaktan: kit/families.json (apply-fragments.mjs ve build-gallery.mjs ile aynı).
 * Burada hard-coded aralık tablosu YOK; dosya okunamazsa etiket "Diğer" olur.
 */
const FAMILY_RANGES = (() => {
  try {
    const j = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'families.json'), 'utf8'));
    return (j.families ?? [])
      .map((f) => [f.from, f.to, f.name])
      .sort((a, b) => a[0] - b[0]);
  } catch (err) {
    console.warn(`uyarı: kit/families.json okunamadı (${err.message}); aile etiketi "Diğer" yazılacak`);
    return [];
  }
})();

const FAMILY_OF = (num) => {
  const n = parseInt(num, 10);
  if (!Number.isFinite(n)) return 'Diğer';
  return FAMILY_RANGES.find(([lo, hi]) => n >= lo && n <= hi)?.[2] ?? 'Diğer';
};

function fill(tpl, slug, cfg, num, vars, sceneKey, layout = DEFAULT_LAYOUT, imagery = null, copy = null) {
  // partial'lar yer tutuculardan ÖNCE gömülür: içlerindeki __MOTIF__/__ICON__ da aynı map'ten geçer.
  let html = tpl
    .replace(/<!--\s*NAV\s*-->/, () => partial(`nav-${layout.nav}`))
    .replace(/<!--\s*HERO\s*-->/, () => partial(`hero-${layout.hero}`));
  const map = {
    __STYLE__: slug,
    __BODY_CLASS__: cfg.bodyClass ?? '',
    __MOTIF__: `motif-${cfg.motif ?? 'rings'}`,
    __BG__: vars.bg ?? '',
    __SURFACE__: vars.surface ?? '',
    __INK__: vars.ink ?? '',
    __ACCENT__: vars.accent ?? '',
    __TRACKING__: vars.tracking ?? '',
    __FONT_DISPLAY__: (vars['font-display'] ?? '').split(',')[0].replace(/"/g, ''),
    __FONT_BODY__: (vars['font-body'] ?? '').split(',')[0].replace(/"/g, ''),
    __RADIUS__: vars.radius ?? '',
    __RADIUS_LG__: vars['radius-lg'] ?? '',
    __FAMILY__: FAMILY_OF(num),
    __LAYOUT_HERO__: layout.hero,
    __LAYOUT_NAV__: layout.nav,
    __DENSITY__: layout.density,
    __PHOTO__: imagery?.photo ? `../images/${imagery.photo}` : '',
    __PHOTO_ATTRS__: imagery?.photo
      ? `data-photo="${imagery.treatment?.mode ?? 'plain'}" style="--photo-strength:${imagery.treatment?.strength ?? 0}"`
      : '',
    __COPY_EYEBROW__: copy?.hero?.eyebrow ?? '',
    __COPY_H1__: copy?.hero?.h1 ?? '',
    __COPY_H1_LINES__: h1Lines(copy?.hero?.h1 ?? ''),
    __COPY_LEDE__: copy?.hero?.lede ?? '',
    __COPY_CTA1__: copy?.hero?.ctaPrimary ?? '',
    __COPY_CTA2__: copy?.hero?.ctaSecondary ?? '',
    __COPY_PROOF1__: copy?.proofs?.[0] ?? '',
    __COPY_PROOF2__: copy?.proofs?.[1] ?? '',
    __COPY_PROOF3__: copy?.proofs?.[2] ?? '',
    __COPY_LOGO_LABEL__: copy?.logoLabel ?? '',
    __COPY_LOGO1__: copy?.logos?.[0] ?? '',
    __COPY_LOGO2__: copy?.logos?.[1] ?? '',
    __COPY_LOGO3__: copy?.logos?.[2] ?? '',
    __COPY_LOGO4__: copy?.logos?.[3] ?? '',
    __COPY_LOGO5__: copy?.logos?.[4] ?? '',
    __COPY_TILE1__: copy?.tiles?.[0]?.cap ?? '',
    __COPY_TILE2__: copy?.tiles?.[1]?.cap ?? '',
    __COPY_TILE3__: copy?.tiles?.[2]?.cap ?? '',
    __COPY_TILE4__: copy?.tiles?.[3]?.cap ?? '',
  };
  for (const [k, v] of Object.entries(map)) html = html.split(k).join(v);
  html = html.replace(/__ICON:([a-z0-9-]+):(\d+)__/g, (_m, name, size) => icon(name, Number(size)));
  return html.replace(
    '<style id="extra"></style>',
    `<style>\n${cfg.extraCss ?? ''}\n${cfg.scenes?.[sceneKey] ?? ''}\n</style>`,
  );
}

/** Eski yol: her kare için yeni tarayıcı (0.32–0.46 s/kare). Kıyas/geri dönüş için korunur. */
async function shootSpawn(browser, htmlPath, png, scene, slug) {
  const profile = path.join(TMP_DIR, 'profile-' + slug + '-' + path.basename(png, '.png'));
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--disable-sync',
    '--force-device-scale-factor=1',
    '--virtual-time-budget=4000',
    `--user-data-dir=${profile}`,
    `--window-size=${scene.width},${scene.height + WINDOW_CHROME}`,
    `--screenshot=${png}`,
    'file:///' + encodeURI(htmlPath.replace(/\\/g, '/')),
  ];
  await run(browser, args, { timeout: 90_000, windowsHide: true }).catch((err) => {
    if (!fs.existsSync(png)) throw new Error(`${path.basename(png)}: ${err.message.split('\n')[0]}`);
  });
  if (!fs.existsSync(png)) throw new Error(`${path.basename(png)} üretilemedi`);
  cropPngTop(png, scene.height);
}

/**
 * Tek tarayıcı + CDP ile yakalar (varsayılan). `--legacy-spawn` verilirse eski yol.
 * Kazanç: kare başına 0.32–0.46 s → ~0.15 s; ayrıca WebP yakalama (thumbnail) mümkün.
 */
/** Sahne taşma ölçümü (--measure): yatay taşma, kırpılan blok, 9px altı metin. */
const MEASURE_EXPR = `(() => {
  const de = document.documentElement;
  const vh = de.clientHeight;
  const clipped = [...document.querySelectorAll('.panel, .comp-head, .plans, .intg-grid, .search-results, .feed-main, table.tbl')]
    .filter((el) => { const r = el.getBoundingClientRect(); return r.bottom > vh + 2 && r.height > 40; }).length;
  let tiny = 0;
  for (const el of document.querySelectorAll('body *')) {
    if (!el.childElementCount && el.textContent.trim().length > 1) {
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs && fs < 8.5) tiny++;
    }
  }
  return { overflowX: de.scrollWidth - de.clientWidth, clipped, tiny };
})()`;

const MEASURE = process.argv.includes('--measure');
const problems = [];
const warnings = [];

async function shoot(cdp, htmlPath, png, scene, slug) {
  if (LEGACY_SPAWN) return shootSpawn(cdp.browserPath ?? cdp.browser, htmlPath, png, scene, slug);
  if (MEASURE) {
    const m = await cdp.evaluate(htmlPath, { width: scene.width, height: scene.height, expression: MEASURE_EXPR });
    if (m.overflowX > 2) problems.push(`${slug}/${scene.key}: yatay taşma ${m.overflowX}px`);
    if (m.clipped) problems.push(`${slug}/${scene.key}: ${m.clipped} blok alttan kırpılıyor`);
    if (m.tiny > 3) warnings.push(`${slug}/${scene.key}: ${m.tiny} öğe 8,5px altı`);
    if (!process.env.SHOTS_KEEP_TMP) fs.rmSync(htmlPath, { force: true });
    return;
  }
  const buf = await cdp.capture(htmlPath, { width: scene.width, height: scene.height, format: 'png' });
  fs.writeFileSync(png, buf);
}

async function pool(items, limit, worker) {
  const queue = [...items];
  const results = [];
  await Promise.all(
    Array.from({ length: Math.min(limit, queue.length) }, async () => {
      while (queue.length) {
        const item = queue.shift();
        results.push(await worker(item));
      }
    }),
  );
  return results;
}

/** --sample N: stiller arasından eşit aralıkla N örnek (ölçüm için). */
function sampledDirs(n) {
  const all = allStyleDirs();
  const step = Math.max(1, Math.floor(all.length / Math.max(1, n)));
  const out = [];
  for (let i = 0; i < all.length && out.length < n; i += step) out.push(all[i]);
  return out;
}

function allStyleDirs() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

/** kit/shots.manifest.json — sahne tanımı + üretilen görsellerin boyutu/ağırlığı. */
function readManifest() {
  if (!fs.existsSync(MANIFEST)) return { version: 1, styles: {} };
  try {
    return JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  } catch (err) {
    console.warn(`uyarı: mevcut manifest okunamadı (${err.message}); yalnız bu çalıştırmanın slugları yazılacak`);
    return { version: 1, styles: {} };
  }
}

/** Yalnız bu çalıştırmada işlenen slug'ların kayıtlarını üretir (başka slug'lara dokunmaz). */
function ownManifestEntries(touchedDirs, ready) {
  const own = {};
  for (const dirName of touchedDirs) {
    const slug = dirName.replace(/^\d+-/, '');
    const entry = {};
    for (const s of ready) {
      const p = path.join(STYLES_DIR, dirName, 'shots', s.file);
      if (!fs.existsSync(p)) continue;
      entry[s.file] = { key: s.key, w: s.width, h: s.height, bytes: fs.statSync(p).size };
    }
    own[slug] = entry;
  }
  return own;
}

/** Kilit: eşzamanlı render'lar manifest'i sırayla yazar (stale kilit 20 sn sonra düşer). */
function acquireManifestLock() {
  const deadline = Date.now() + LOCK_WAIT_MS;
  for (;;) {
    try {
      const fd = fs.openSync(MANIFEST_LOCK, 'wx');
      fs.writeSync(fd, String(process.pid));
      fs.closeSync(fd);
      return true;
    } catch (err) {
      if (err.code !== 'EEXIST') throw err;
      try {
        if (Date.now() - fs.statSync(MANIFEST_LOCK).mtimeMs > LOCK_STALE_MS) {
          fs.rmSync(MANIFEST_LOCK, { force: true });
          continue;
        }
      } catch {
        /* kilit arada silinmişse yeniden dene */
      }
      if (Date.now() > deadline) return false;
      sleepMs(50);
    }
  }
}

function releaseManifestLock() {
  try {
    fs.rmSync(MANIFEST_LOCK, { force: true });
  } catch {
    /* kilit zaten yoksa sorun değil */
  }
}

function writeManifestAtomic(out) {
  const tmp = `${MANIFEST}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(out, null, 2) + '\n');
  try {
    fs.renameSync(tmp, MANIFEST);
  } catch {
    fs.copyFileSync(tmp, MANIFEST);
    fs.rmSync(tmp, { force: true });
  }
}

/**
 * Manifest yazımı: oku-birleştir-yaz + kilit + atomik rename + yazım sonrası doğrulama.
 * Eşzamanlı iki render birbirinin kayıtlarını silmez: her biri yalnız kendi slug'larını yazar,
 * diğer slug'lar okunan güncel dosyadan aynen korunur.
 */
function writeManifest(touchedDirs) {
  const ready = SCENES.filter((s) => fs.existsSync(path.join(HERE, s.tpl)));
  const own = ownManifestEntries(touchedDirs, ready);
  const ownSlugs = Object.keys(own);
  const dirsBySlug = new Map(allStyleDirs().map((dir) => [dir.replace(/^\d+-/, ''), dir]));
  const locked = acquireManifestLock();
  if (!locked) {
    console.warn('uyarı: manifest kilidi 15 sn içinde alınamadı; birleştirme kilitsiz yapılıyor');
  }
  try {
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      const prev = readManifest();
      const merged = { ...(prev.styles ?? {}), ...own };
      // budama: artık var olmayan dosya kayıtları manifestte kalmasın (sahne cache'e taşındığında)
      const styles = {};
      for (const [slug, files] of Object.entries(merged)) {
        const dir = dirsBySlug.get(slug);
        const next = {};
        for (const [file, meta] of Object.entries(files)) {
          if (!dir) continue;
          if (fs.existsSync(path.join(STYLES_DIR, dir, 'shots', file)) || fs.existsSync(path.join(CACHE_DIR, dir, file))) {
            next[file] = meta;
          }
        }
        if (Object.keys(next).length) styles[slug] = next;
      }
      const out = {
        version: 1,
        scenes: ready.map((s) => ({ key: s.key, file: s.file, label: s.label, w: s.width, h: s.height, tpl: s.tpl })),
        styles,
      };
      writeManifestAtomic(out);
      const check = readManifest();
      const ok = ownSlugs.every(
        (slug) => JSON.stringify(check.styles?.[slug] ?? null) === JSON.stringify(own[slug]),
      );
      if (ok) return;
      if (attempt < 3) sleepMs(30 * attempt);
    }
    console.warn('uyarı: manifest yazımı 3 denemede doğrulanamadı (eşzamanlı yazım olabilir)');
  } finally {
    if (locked) releaseManifestLock();
  }
}

/** Tek sahnede 34 stili tek görüntüde gösterir → görsel QA (kit/qa/<sahne>.png). */
async function contactSheet(cdp, key) {
  const scene = sceneByKey(key);
  if (!scene) throw new Error(`bilinmeyen sahne: ${key}`);
  const cols = Number(arg('cols', '5'));
  const tileW = 252;
  const gap = 12;
  const labelH = 20;
  const tiles = [];
  for (const dirName of allStyleDirs()) {
    const png = path.join(STYLES_DIR, dirName, 'shots', scene.file);
    if (!fs.existsSync(png)) continue;
    const num = String(parseInt(dirName, 10));
    const name = dirName.replace(/^\d+-/, '').replace(/-/g, ' ');
    tiles.push(
      `<figure><img src="../styles/${dirName}/shots/${scene.file}" alt="${name}">` +
        `<figcaption><b>${num}</b> ${name}</figcaption></figure>`,
    );
  }
  if (!tiles.length) throw new Error(`${scene.key}: hiç görsel yok — önce render et`);

  const rows = Math.ceil(tiles.length / cols);
  const tileH = Math.round((tileW * scene.height) / scene.width);
  const width = 80 + cols * tileW + (cols - 1) * gap;
  const height = 74 + rows * (tileH + labelH + gap) + 16;
  const tpl = fs.readFileSync(path.join(ROOT, 'kit', 'contact.html'), 'utf8');
  const html = tpl
    .replace(/__TITLE__/g, `${scene.label} — ${tiles.length} stil`)
    .replace(/__SUB__/g, `${tiles.length} stil · ${scene.file} · ${scene.width}×${scene.height}`)
    .replace(/__COLS__/g, String(cols))
    .replace(/__TILEW__/g, String(tileW))
    .replace('__TILES__', tiles.join('\n      '));

  fs.mkdirSync(TMP_DIR, { recursive: true });
  fs.mkdirSync(QA_DIR, { recursive: true });
  const tmp = path.join(ROOT, 'kit', `.tmp-contact-${scene.key}.html`);
  fs.writeFileSync(tmp, html);
  const out = path.join(QA_DIR, `${scene.key}.png`);
  await shoot(cdp, tmp, out, { width, height }, `contact-${scene.key}`);
  fs.rmSync(tmp, { force: true });
  console.log(`QA levhası: kit/qa/${scene.key}.png · ${tiles.length} stil · ${width}×${height}`);
}

const T0 = Date.now();
const T = (label) => {
  if (process.env.SHOT_TIME) console.error(`[t+${((Date.now() - T0) / 1000).toFixed(2)}s] ${label}`);
};

async function main() {
  T('main start');
  const browser = findBrowser();
  let cdp = null;
  // Tarayıcı yalnız gerçekten üretilecek kare varsa açılır (no-op tur tarayıcı başlatmaz)
  const getCdp = async () => {
    if (!cdp) {
      cdp = await launchCdp({
        browserPath: browser,
        tabs: Number(process.env.CDP_TABS ?? 4),
        keepProfile: !process.argv.includes('--clean-profile'),
      });
      cdp.browserPath = browser;
    }
    return cdp;
  };
  try {
    return await runAll(getCdp, browser);
  } finally {
    if (cdp) await cdp.close();
  }
}

async function runAll(getCdp, browser) {
  const onlyStyles = (arg('styles') ?? '').split(',').filter(Boolean);
  const onlyScene = arg('scene');
  const contactKey = arg('contact');

  if (contactKey) {
    await contactSheet(await getCdp(), contactKey);
    return;
  }

  const sampleN = Number(arg('sample', '0')) || 0;
  const dirs = (
    sampleN
      ? sampledDirs(sampleN)
      : fs
          .readdirSync(STYLES_DIR, { withFileTypes: true })
          .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
          .map((d) => d.name)
          .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
  ).filter((name) => !onlyStyles.length || onlyStyles.includes(name.replace(/^\d+-/, '')));

  if (!dirs.length) throw new Error('eşleşen stil yok');

  // şablonu henüz yazılmamış sahneler sessizce atlanır (kademeli katalog)
  const ready = SCENES.filter((s) => fs.existsSync(path.join(HERE, s.tpl)));
  const skipped = SCENES.filter((s) => !ready.includes(s));
  const requested = (arg('scenes') ?? '')
    .split(',')
    .map((s) => s.trim().replace(/.png$/, ''))
    .filter(Boolean);
  const scenes = onlyScene
    ? ready.filter((s) => s === sceneByKey(onlyScene))
    : requested.length
      ? ready.filter((s) => requested.includes(s.key) || requested.includes(s.file.replace(/.png$/, '')))
      : ready;
  if (!scenes.length) throw new Error(`bilinmeyen veya hazır olmayan sahne: ${onlyScene ?? requested.join(', ')}`);

  fs.mkdirSync(TMP_DIR, { recursive: true });
  const vars = tokenVars();
  const cols = Number(arg('jobs', '4'));

  const jobs = [];
  for (const dirName of dirs) {
    const slug = dirName.replace(/^\d+-/, '');
    const vars2 = vars[slug];
    if (!vars2) throw new Error(`${slug}: kit/tokens.css içinde [data-style="${slug}"] yok`);
    const cfg = configFor(slug);
    fs.mkdirSync(path.join(STYLES_DIR, dirName, 'shots'), { recursive: true });

    const num = String(parseInt(dirName, 10));
    for (const scene of scenes) {
      const png = path.join(outDirFor(dirName, scene.file), scene.file);
      if (!FORCE && !MEASURE && fs.existsSync(png) && fs.statSync(png).size > 2000) continue;
      fs.mkdirSync(path.dirname(png), { recursive: true });
      const tpl = fs.readFileSync(path.join(HERE, scene.tpl), 'utf8');
      const htmlPath = path.join(HERE, `.tmp-${slug}-${scene.tpl}`);
      fs.writeFileSync(
        htmlPath,
        fill(
          tpl,
          slug,
          cfg,
          num,
          vars2,
          scene.tpl.replace('.html', ''),
          layoutFor(dirName),
          imageryFor(dirName),
          copyFor(dirName),
        ),
      );
      jobs.push({ slug, num, scene, png, htmlPath });
    }
  }

  if (!jobs.length) {
    console.log('üretilecek görsel yok (hepsi var). Yeniden üretmek için --force');
    writeManifest(dirs);
    return;
  }

  const cdp = await getCdp();
  T('browser hazır');
  const started = Date.now();
  let done = 0;
  await pool(jobs, cols, async (job) => {
    await shoot(cdp, job.htmlPath, job.png, job.scene, job.slug);
    done++;
    process.stdout.write(
      `\r${String(done).padStart(3)}/${jobs.length}  ${job.num} ${job.slug} · ${job.scene.label}      `,
    );
    return job;
  });
  if (MEASURE) {
    for (const pr of problems.slice(0, 25)) console.log(`× ${pr}`);
    const shown = new Set(jobs.map((j) => j.slug + '/' + j.scene.key)).size;
    console.log(`
ölçüm · ${shown} sahne · ${problems.length} sorun · ${warnings.length} uyarı (küçük metin)`);
    if (problems.length) process.exitCode = 1;
    return;
  }
  console.log(`\n${jobs.length} görsel · ${((Date.now() - started) / 1000).toFixed(1)}s`);
  if (skipped.length) {
    console.log(`atlandı (şablon yok): ${skipped.map((s) => s.key).join(', ')}`);
  }
  writeManifest(dirs);
  T('manifest yazıldı');

  /* Yalnız bu çalıştırmada işlenen slug'ların geçici profilleri/tmp html'leri silinir.
     Eşzamanlı çalışan başka worker'ların profile-* dizinlerine dokunulmaz; eşleşme
     slug öneki yerine TAM ada göre yapılır (slug'ı başka slug'ın öneki olduğunda çakışmaz). */
  const ownSlugs = dirs.map((d) => d.replace(/^\d+-/, ''));
  const ownProfiles = new Set();
  const ownHtml = new Set();
  for (const slug of ownSlugs) {
    for (const s of SCENES) {
      ownProfiles.add(`profile-${slug}-${path.basename(s.file, '.png')}`);
      ownHtml.add(`.tmp-${slug}-${s.tpl}`);
    }
  }
  for (const f of fs.existsSync(HERE) ? fs.readdirSync(HERE) : []) {
    if (ownHtml.has(f)) fs.rmSync(path.join(HERE, f), { force: true, maxRetries: 3, retryDelay: 200 });
  }
  for (const f of fs.existsSync(TMP_DIR) ? fs.readdirSync(TMP_DIR) : []) {
    if (ownProfiles.has(f)) fs.rmSync(path.join(TMP_DIR, f), { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
  }
}

main().catch((err) => {
  console.error('\nHATA:', err.message);
  process.exit(1);
});
