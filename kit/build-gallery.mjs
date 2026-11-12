#!/usr/bin/env node
/**
 * kit/build-gallery.mjs — styles/<num-slug>/style.md dosyalarından üretir:
 *   1) kit/gallery.html   (görselli katalog + lightbox)
 *   2) kit/styles.index.json (AI giriş noktası: 34 stilin özeti)
 *
 * Kullanım:
 *   node kit/build-gallery.mjs           # üret
 *   node kit/build-gallery.mjs --check    # doğrula, hata varsa exit 1
 *
 * Doğrulama kapsamı:
 *   - her stil klasöründe style.md var, başlık/token bloğu okunuyor
 *   - style.md token bloğu kit/tokens.css ile aynı (drift yok)
 *   - shots/ en az 4 görsel içeriyor
 *   - tokens.json varsa (şema v2) zorunlu bölümlerin hepsi var
 *   - README'deki styles/... linkleri çözülüyor
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_DEMO, DEMOS, KEYWORDS } from './gallery.data.mjs';
import { galleryHtml } from './gallery.template.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const KIT_DIR = path.join(ROOT, 'kit');
const OUT_HTML = path.join(KIT_DIR, 'gallery.html');
const OUT_INDEX = path.join(KIT_DIR, 'styles.index.json');
const CHECK = process.argv.includes('--check');
const MIN_SHOTS = 4;
const MANIFEST_PATH = path.join(KIT_DIR, 'shots.manifest.json');
const MIN_PNG_BYTES = 12_000;
const SCENE_LABELS = (() => {
  try {
    const m = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    return Object.fromEntries((m.scenes ?? []).map((x) => [x.file, x.label]));
  } catch {
    return {};
  }
})();

/**
 * Aile bantları tek kaynaktan: kit/families.json (1-145 kesintisiz, çakışmasız).
 * Biçim: [ad, ilk, son] — kit/apply-fragments.mjs bu dosyayı doğrular.
 */
const FAMILIES = (() => {
  const j = JSON.parse(fs.readFileSync(path.join(KIT_DIR, 'families.json'), 'utf8'));
  return (j.families ?? []).map((f) => [f.name, f.from, f.to]);
})();

/** Koyu mod durumu: tokens.css bloğu + dark-baseline.json kaydı. */
const DARK_SLUGS = (() => {
  try {
    const css = fs.readFileSync(path.join(KIT_DIR, 'tokens.css'), 'utf8');
    return new Set([...css.matchAll(/^\[data-theme="dark"\]\[data-style="([a-z0-9-]+)"\]/gm)].map((m) => m[1]));
  } catch {
    return new Set();
  }
})();
const DARK_DEBT = (() => {
  try {
    const j = JSON.parse(fs.readFileSync(path.join(KIT_DIR, 'dark-baseline.json'), 'utf8'));
    return new Set(Object.keys(j.slugs ?? {}));
  } catch {
    return new Set();
  }
})();

/** 'applied' | 'debt' | 'none' */
const darkState = (slug) => (DARK_SLUGS.has(slug) ? 'applied' : DARK_DEBT.has(slug) ? 'debt' : 'none');
/** v1 şema: bugün 34 stilin tamamında olan bölümler. */
const CORE_SECTIONS = [
  'Görsel imza',
  'Renk',
  'Tipografi',
  'Yüzey ve derinlik',
  'Hareket',
  'Token',
  'Ekran reçeteleri',
  'Tuzaklar',
  'Komşu stiller',
];

/** v2 şema: tokens.json taşıyan stillerde aranan ek bölümler. */
const V2_SECTIONS = [
  'Öz',
  'Zorunlu kurallar',
  'Yasaklar',
  'Bileşen reçeteleri',
  'Izgara ve boşluk',
  'Görsel dil',
  'Koyu mod',
  'Erişilebilirlik',
  'Örnek görseller',
  'Referanslar',
  'AI brief',
];

const CONTRACT = [
  ['--bg', 'sayfa zemini'],
  ['--bg-2', 'ikincil zemin'],
  ['--surface', 'kart / panel'],
  ['--surface-2', 'ikincil yüzey'],
  ['--ink', 'ana metin'],
  ['--ink-soft', 'ikincil metin'],
  ['--ink-faint', 'soluk / dekoratif metin'],
  ['--accent', 'vurgu'],
  ['--accent-ink', 'vurgu üstü metin'],
  ['--line', 'kenarlık'],
  ['--radius', 'köşe'],
  ['--radius-lg', 'büyük köşe'],
  ['--shadow', 'yumuşak gölge'],
  ['--shadow-hard', 'sert gölge'],
  ['--font-display', 'başlık ailesi'],
  ['--font-body', 'gövde ailesi'],
  ['--font-mono', 'mono ailesi'],
  ['--tracking', 'başlık harf aralığı'],
  ['--blur', 'cam bulanıklığı'],
  ['--grain', 'doku yoğunluğu'],
];

const failures = [];
const warnings = [];

function fail(msg) {
  failures.push(msg);
}

function warn(msg) {
  warnings.push(msg);
}

/* ---------------------------------------------------------------- okuma */

function listStyleDirs() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => fs.existsSync(path.join(STYLES_DIR, name, 'style.md')))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

function sectionsOf(md) {
  return [...md.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1].trim());
}

function parseStyle(dirName) {
  const file = path.join(STYLES_DIR, dirName, 'style.md');
  const md = fs.readFileSync(file, 'utf8');
  const head = md.match(/^#\s+(\d+)\s+·\s+(.+)$/m);
  if (!head) {
    fail(`${dirName}/style.md: "# NN · Ad" başlığı yok`);
    return null;
  }
  const slug = dirName.replace(/^\d+-/, '');
  const tag = md.match(/^>\s+\*\*Bir cümlede:\*\*\s+(.+)$/m);
  const meta = {};
  for (const m of md.matchAll(/^\|\s+\*\*(.+?)\*\*\s*\|(.+?)\|/gm)) {
    meta[m[1].trim()] = m[2].trim();
  }

  const declarations = md.matchAll(/\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)\}/g);
  let cssBlock = '';
  for (const decl of declarations) {
    if (decl[1] === slug) cssBlock = decl[2];
  }
  if (!cssBlock) fail(`${dirName}/style.md: "Token" bölümünde [data-style="${slug}"] bloğu yok`);

  const vars = {};
  for (const m of cssBlock.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    vars[m[1]] = m[2].trim();
  }

  const shotsDir = path.join(STYLES_DIR, dirName, 'shots');
  const shots = fs.existsSync(shotsDir)
    ? fs.readdirSync(shotsDir).filter((f) => /\.(png|jpg|webp)$/i.test(f)).sort()
    : [];

  const tokensJsonPath = path.join(STYLES_DIR, dirName, 'tokens.json');
  const tokensJson = fs.existsSync(tokensJsonPath)
    ? JSON.parse(fs.readFileSync(tokensJsonPath, 'utf8'))
    : null;

  if (shots.length < MIN_SHOTS) {
    fail(`${dirName}: ${shots.length} görsel var, en az ${MIN_SHOTS} olmalı (shots/)`);
  }

  const sections = sectionsOf(md);
  for (const s of CORE_SECTIONS) {
    if (!sections.some((x) => x.startsWith(s))) fail(`${dirName}/style.md: "${s}" bölümü yok`);
  }
  if (tokensJson) {
    for (const s of V2_SECTIONS) {
      if (!sections.some((x) => x.startsWith(s))) fail(`${dirName}/style.md: v2 bölümü "${s}" yok`);
    }
    for (const [key, val] of Object.entries(tokensJson.palette || {})) {
      const cssKey = key.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());
      if (vars[cssKey] && vars[cssKey] !== val) {
        fail(`${dirName}: tokens.json ${key}=${val} ile style.md ${vars[cssKey]} çelişiyor`);
      }
    }
  }

  return {
    dirName,
    num: head[1],
    name: head[2].trim(),
    slug,
    tag: tag ? tag[1].trim() : '',
    meta,
    md,
    vars,
    sections,
    shots,
    tokensJson,
  };
}

function tokensCssMap() {
  const css = fs.readFileSync(path.join(KIT_DIR, 'tokens.css'), 'utf8');
  const map = {};
  for (const m of css.matchAll(/^\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) {
    map[m[1]] = m[2];
  }
  return map;
}

const norm = (s) =>
  s
    .replace(/^\s*\[data-style="[a-z0-9-]+"\]\s*\{/, "")
    .replace(/\}\s*$/, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};:,])\s*/g, "$1")
    .trim();

function checkTokenDrift(styles) {
  const css = tokensCssMap();
  for (const s of styles) {
    const a = norm(s.tokensJson?.css ?? '');
    if (!a) continue; // tokens.json css alanı opsiyonel
    const b = norm(css[s.slug] ?? '');
    if (b && a !== b) fail(`${s.dirName}: tokens.json css bloğu kit/tokens.css ile aynı değil`);
  }
}

/** Manifest varsa: sahne sayısı, boyut, boş kare ve bayt sapması denetimi. */
function checkShotCatalog(styles) {
  if (!fs.existsSync(MANIFEST_PATH)) {
    warn('kit/shots.manifest.json yok — katalog denetimi atlandı (render-shots çalıştır)');
    return;
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const scenes = manifest.scenes ?? [];
  let filled = 0;
  let total = 0;
  for (const s of styles) {
    for (const sc of scenes) {
      total++;
      const png = path.join(STYLES_DIR, s.dirName, 'shots', sc.file);
      if (!fs.existsSync(png)) continue;
      filled++;
      const bytes = fs.statSync(png).size;
      if (bytes < MIN_PNG_BYTES) {
        fail(`${s.dirName}/shots/${sc.file}: ${(bytes / 1024).toFixed(0)} KB — boş/yarım render`);
      }
      const rec = manifest.styles?.[s.slug]?.[sc.file];
      if (rec && Math.abs(rec.w - sc.w) + Math.abs(rec.h - sc.h) > 0) {
        fail(`${s.dirName}/shots/${sc.file}: manifest boyutu ${rec.w}×${rec.h}, beklenen ${sc.w}×${sc.h}`);
      }
      if (rec && rec.bytes > 0 && Math.abs(rec.bytes - bytes) / rec.bytes > 0.4) {
        warn(`${s.dirName}/shots/${sc.file}: bayt sapması %${Math.round((Math.abs(rec.bytes - bytes) / rec.bytes) * 100)} (font yüklenmeden render?)`);
      }
    }
    // doküman ↔ dosya: style.md'de geçen her shots/xx.png gerçekten var mı
    for (const m of new Set([...s.md.matchAll(/shots\/([a-z0-9-]+\.png)/g)].map((x) => x[1]))) {
      if (!fs.existsSync(path.join(STYLES_DIR, s.dirName, 'shots', m))) {
        fail(`${s.dirName}/style.md: "${m}" dosyası shots/ içinde yok`);
      }
    }
  }
  if (total) console.log(`katalog: ${filled}/${total} sahne dolu (${scenes.length} sahne × ${styles.length} stil)`);
}

/** Şablonlarda hard-coded renk yasak: tüm renkler var(--…) üzerinden gelir. */
function checkTemplateColors() {
  const dir = path.join(ROOT, 'kit', 'render');
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.html'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const hit = src.match(/#[0-9a-fA-F]{3,8}\b/);
    if (hit) fail(`kit/render/${f}: hard-coded renk "${hit[0]}" — var(--…) kullan`);
  }
}

/* --------------------------------------------------------------- render */

function familyOf(num) {
  const n = parseInt(num, 10);
  for (const [fam, lo, hi] of FAMILIES) if (n >= lo && n <= hi) return fam;
  return 'Diğer';
}

/** Accent renginden ton kovası (keşif filtresi): sıcak / soğuk / yeşil / nötr. */
function hueBucket(hex) {
  const m = String(hex ?? '').trim().match(/^#?([0-9a-f]{6})$/i);
  if (!m) return 'notr';
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / max;
  if (sat < 0.16) return 'notr';
  let h = 0;
  if (max === r) h = ((g - b) / (max - min)) * 60;
  else if (max === g) h = (2 + (b - r) / (max - min)) * 60;
  else h = (4 + (r - g) / (max - min)) * 60;
  if (h < 0) h += 360;
  if (h < 55 || h >= 330) return 'sicak';
  if (h < 170) return 'yesil';
  return 'soguk';
}



function indexJson(styles) {
  return {
    schema: 2,
    count: styles.length,
    contract: CONTRACT.map(([name, use]) => ({ name, use })),
    families: FAMILIES.map(([name, lo, hi]) => ({ name, from: lo, to: hi })),
    styles: styles.map((s) => {
      const t = s.tokensJson;
      return {
        num: s.num,
        slug: s.slug,
        name: s.name,
        family: familyOf(s.num),
        tag: s.tag,
        tags: KEYWORDS[s.slug] ?? [],
        path: `styles/${s.dirName}/style.md`,
        tokens: fs.existsSync(path.join(STYLES_DIR, s.dirName, 'tokens.json'))
          ? `styles/${s.dirName}/tokens.json`
          : null,
        shots: s.shots.map((f) => `styles/${s.dirName}/shots/${f}`),
        palette: t?.palette ?? {
          bg: s.vars.bg,
          surface: s.vars.surface,
          ink: s.vars.ink,
          accent: s.vars.accent,
        },
        fonts: t?.typography ?? {
          display: s.vars['font-display'],
          body: s.vars['font-body'],
          mono: s.vars['font-mono'],
        },
        shape: t?.shape ?? { radius: s.vars.radius, radiusLg: s.vars['radius-lg'] },
        layout: t?.layout ?? null,
        motion: t?.motion ?? { note: 'playbook §6 aile tablosuna bak' },
        must: t?.must ?? [],
        mustNot: t?.mustNot ?? [],
        neighbors: t?.neighbors ?? [],
        refs: t?.refs ?? [],
        docsReady: Boolean(t),
        dark: darkState(s.slug),
      };
    }),
  };
}

/* ------------------------------------------------------------ README QA */

function checkReadmeLinks() {
  const readme = path.join(ROOT, 'README.md');
  if (!fs.existsSync(readme)) return;
  const md = fs.readFileSync(readme, 'utf8');
  for (const m of md.matchAll(/\]\((styles\/[^)\s]+)\)/g)) {
    if (!fs.existsSync(path.join(ROOT, m[1]))) fail(`README.md: kırık link ${m[1]}`);
  }
}

/* ----------------------------------------------------------------- main */

function main() {
  const onlyArg = process.argv.indexOf('--styles');
  const onlyStyles = onlyArg >= 0 && process.argv[onlyArg + 1] ? process.argv[onlyArg + 1].split(',') : [];

  const allDirs = listStyleDirs();
  const dirs = onlyStyles.length
    ? allDirs.filter((d) => onlyStyles.includes(d) || onlyStyles.includes(d.replace(/^\d+-/, '')))
    : allDirs;
  if (!dirs.length) {
    console.error('styles/ altında NN-slug/style.md bulunamadı');
    process.exit(1);
  }
  const flat = fs.readdirSync(STYLES_DIR).filter((f) => f.endsWith('.md'));
  if (flat.length) warn(`styles/ kökünde ${flat.length} adet .md var; klasör düzenine taşınmalı`);

  const styles = dirs.map(parseStyle).filter(Boolean);
  checkTokenDrift(styles);
  checkShotCatalog(styles);
  checkTemplateColors();
  checkReadmeLinks();
  for (const f of ['gallery.css', 'gallery.js', 'live.html', 'live-styles.js', 'live-motion.js', 'sections.html', 'flows.html', 'gallery.js', 'viewer-nav.js', 'viewer-lightbox.js']) {
    if (!fs.existsSync(path.join(KIT_DIR, f))) {
      fail(`kit/${f} yok — canlı önizleme kırılır (node kit/build-gallery.mjs)`);
    }
  }

  const filtered = Boolean(onlyStyles.length);
  if (CHECK) {
    // --check modunda hiçbir dosya yazılmaz (galeri/index ayrı komutla üretilir)
  } else {
    fs.writeFileSync(OUT_INDEX, JSON.stringify(indexJson(styles), null, 2) + '\n');
    const liveList = styles.map((x) => ({ num: x.num, slug: x.slug, name: x.name, family: familyOf(x.num) }));
    fs.writeFileSync(
      path.join(KIT_DIR, 'live-styles.js'),
      '/* kit/live-styles.js — node kit/build-gallery.mjs üretir; elle düzenleme */\nwindow.LIVE_STYLES = ' +
        JSON.stringify(liveList, null, 2) +
        ';\n',
    );
    // live-motion.js: canlı önizleme stilin GERÇEK sayı ve desenlerini kullanır (M2)
    const MOTION_DIST = path.join(KIT_DIR, 'dist', 'motion.json');
    const motionDist = fs.existsSync(MOTION_DIST) ? JSON.parse(fs.readFileSync(MOTION_DIST, 'utf8')) : { styles: {} };
    const motionMap = {};
    for (const x of styles) {
      const m = motionDist.styles?.[x.slug];
      if (!m) continue;
      const ch = x.tokensJson?.motion?.choreography ?? m.choreography ?? null;
      motionMap[x.slug] = {
        enter: {
          pattern: ch?.enter ?? 'fade-rise',
          durationMs: m.sequences?.enter?.durationMs ?? 500,
          easeCss: m.sequences?.enter?.curve?.css ?? 'ease-out',
          offsetY: m.sequences?.enter?.offsetYPx ?? 16,
          staggerMs: Math.round((m.sequences?.enter?.stagger ?? 0.04) * 1000),
        },
        scroll: {
          pattern: ch?.scroll ?? 'reveal',
          durationMs: m.sequences?.scroll?.durationMs ?? 600,
          offsetY: m.sequences?.scroll?.offsetYPx ?? 24,
        },
        hover: {
          pattern: ch?.hover ?? 'scale',
          durationMs: m.sequences?.hover?.durationMs ?? 160,
          imageScale: m.sequences?.hover?.imageScale ?? 1.02,
        },
        pin: { enabled: Boolean(m.sequences?.pin?.enabled), scrub: m.sequences?.pin?.scrub ?? null },
        reduced: ch?.reduced ?? 'opacity',
      };
    }
    fs.writeFileSync(
      path.join(KIT_DIR, 'live-motion.js'),
      '/* kit/live-motion.js — node kit/build-gallery.mjs üretir; elle düzenleme */\n' +
        '/* Kaynak: styles/<slug>/tokens.json → motion.choreography + dist/motion.json (ms) */\n' +
        'window.STYLE_MOTION = ' +
        JSON.stringify(motionMap, null, 2) +
        ';\n',
    );
    fs.writeFileSync(
      OUT_HTML,
      galleryHtml(styles, { families: FAMILIES, familyOf, darkState, hueBucket, KEYWORDS, DEMOS, DEFAULT_DEMO, sceneLabels: SCENE_LABELS }),
    );
  }

  const v2 = styles.filter((s) => s.tokensJson).length;
  const shots = styles.reduce((n, s) => n + s.shots.length, 0);
  console.log(
    `${styles.length} stil · ${shots} görsel · ${v2} tam şema (v3)` +
      (filtered ? ' (filtreli)' : ' · kit/styles.index.json güncel') +
      (CHECK ? '' : ' · kit/gallery.html + live-styles.js + live-motion.js yazıldı'),
  );
  if (warnings.length) {
    console.log('\nUyarı:');
    for (const w of warnings) console.log('  ! ' + w);
  }
  if (failures.length) {
    console.log(`\n${failures.length} hata:`);
    for (const f of failures) console.log('  × ' + f);
    if (CHECK) process.exit(1);
    console.log('\n(üretim modu: dosyalar yazıldı; --check ile kapı uygulanır)');
  } else {
    console.log('doğrulama: temiz');
  }
}

main();
