#!/usr/bin/env node
/**
 * kit/build-site.mjs — compiles the publishable static site into `_site/`.
 *
 * Why separate folder: repo is over 2 GB (git history + kit/render + 209 MB PNG).
 * Only files that are actually served should go to GitHub Pages. These script resources
 * reads, generates the gallery/landing/catalog HTML and builds the `_site/` tree:
 *
 * _site/
 * ├── index.html landing (generated)
 * ├── readable index of catalog.html 251 styles (generated from docs/catalog.md)
 * ├── .nojekyll Pages turns off Jekyll processing
 * ├── kit/gallery.html gallery (copy + post conversions)
 * ├── kit/live.html style preview
 * ├── kit/{gallery.css,gallery.js,tokens.css,live-styles.js,viewer-*.js,site-config.js}
 * ├── thumbs/<dir>-01-page@640|1280.webp (generates kit/build-thumbs.mjs)
 * ├── fonts/ woff2 + fonts.css (@font-face)
 * └── styles/<dir>/shots/01-page.png original PNG (lightbox "PNG" target)
 *
 * Usage:
 * node kit/build-site.mjs # _site/ compile
 * node kit/build-site.mjs --check # broadcast integrity gate (does not write)
 * node kit/build-site.mjs --clean # delete _site/ first
 *
 * --check what measures: are there two WebP variants for each style, whatever the gallery points to
 * is the image/font file decoded, does it match the catalog table style number,
 * Are the numbers in the landing the same as the source? Numbers cannot be made up (AGENTS rule 10).*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const KIT_DIR = HERE;
const THUMBS_DIR = path.join(KIT_DIR, 'site', 'thumbs');
const FONTS_DIR = path.join(KIT_DIR, 'fonts');
const OUT = path.join(ROOT, '_site');
const SHOT = '01-page.png';
const VARIANTS = ['640', '1280'];

const CHECK = process.argv.includes('--check');
const CLEAN = process.argv.includes('--clean');

const failures = [];
const fail = (msg) => failures.push(msg);
const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const j = (rel) => JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');

/** Converts the path in the site tree to the actual file in the repo: fonts → kit/fonts, thumbs → kit/site/thumbs.*/
function repoOf(sitePath) {
  if (sitePath.startsWith('fonts/')) return path.join(KIT_DIR, sitePath);
  if (sitePath.startsWith('thumbs/')) return path.join(THUMBS_DIR, sitePath.slice('thumbs/'.length));
  return path.join(ROOT, sitePath);
}

const index = j('kit/styles.index.json');
const families = j('kit/families.json').families ?? [];
const styles = index.styles ?? [];
const bySlug = new Map(styles.map((s) => [s.slug, s]));

/** The "select in 10 seconds" list in the README is displayed on landing.*/
const FEATURED = [
  'minimalism',
  'swiss-design',
  'neo-brutalism',
  'bento-grid',
  'game-hud',
  'editorial-design',
  'terrazzo-stone',
  'agent-console',
];

const fmtInt = (n) => n.toLocaleString('tr-TR');
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(0);

function dirOf(style) {
  return `${style.num}-${style.slug}`;
}

function thumbPath(style, variant) {
  return `thumbs/${dirOf(style)}-${SHOT.replace(/\.png$/, '')}@${variant}.webp`;
}

function shotPng(style) {
  return `styles/${dirOf(style)}/shots/${SHOT}`;
}

/* --------------------------------------------------------------- landing */

function landingHtml({ pngBytes, thumbBytes }) {
  const cards = FEATURED.map((slug) => bySlug.get(slug)).filter(Boolean);
  const counts = {
    styles: styles.length,
    families: families.length,
    shots: styles.length,
    pngMb: mb(pngBytes),
    thumbMb: mb(thumbBytes),
  };
  const bandRows = families
    .map((f) => {
      const n = styles.filter((s) => Number(s.num) >= f.from && Number(s.num) <= f.to).length;
      return `<li><a href="kit/gallery.html?fam=${encodeURIComponent(f.name)}">
          <span class="band-n">${f.from}–${f.to}</span>
          <span class="band-name">${esc(f.name)}</span>
          <span class="band-c">${n} styles</span>
        </a></li>`;
    })
    .join('\n        ');

  const tiles = cards
    .map((s, i) => {
      const priority = i < 2 ? ' fetchpriority="high"' : ' loading="lazy"';
      return `<a class="tile" href="kit/gallery.html?q=${encodeURIComponent(s.num)}">
          <img src="${thumbPath(s, '640')}" alt="${esc(s.name)} — single page preview"
               width="640" height="1200"${priority} decoding="async">
          <span class="tile-b"><b>${esc(s.name)}</b><i>${esc(s.family)}</i></span>
        </a>`;
    })
    .join('\n        ');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Design Styles · ${counts.styles} styles, ${counts.families} families</title>
<meta name="description" content="Visual style catalog to counter monotony: ${counts.styles} style, ${counts.families} family band, one-page mock-up for each style, token set, and AI brief.">
<link rel="stylesheet" href="fonts/fonts.css">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  :root {
    --bg: #14161a; --surface: #1a1d23; --line: rgba(255,255,255,.10);
    --ink: #e9ecf1; --ink-soft: #a6aebb; --ink-faint: #7d8797;
    --accent: #7ee0c0; --radius: 10px;
    --font-display: 'Inter', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  }
  html { color-scheme: dark; }
  body {
    margin: 0; background: var(--bg); color: var(--ink);
    font-family: var(--font-body); font-size: 16px; line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  a { color: inherit; }
  h1, h2, h3 { margin: 0; line-height: 1.1; letter-spacing: -.015em; }
  p { margin: 0; }
  .wrap { width: min(1180px, 92vw); margin: 0 auto; }
  .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }

  .top { border-bottom: 1px solid var(--line); }
  .top-in { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; padding: 14px 0; }
  .top b { font-size: 14px; letter-spacing: -.01em; }
  .top .grow { flex: 1 1 auto; }
  .top a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; text-decoration: none; color: var(--ink-soft); border-bottom: 1px solid var(--line); }
  .top a:hover { color: var(--accent); border-color: var(--accent); }

  .hero { padding: clamp(56px, 10vw, 120px) 0 clamp(40px, 6vw, 72px); }
  .hero h1 { font-size: clamp(36px, 7vw, 76px); max-width: 20ch; }
  .hero p { color: var(--ink-soft); font-size: clamp(16px, 2vw, 21px); max-width: 62ch; margin-top: 22px; }
  .stats { display: flex; flex-wrap: wrap; gap: 12px 40px; margin-top: 34px; }
  .stats div { display: grid; gap: 2px; }
  .stats b { font-family: var(--font-display); font-size: clamp(22px, 3vw, 30px); letter-spacing: -.02em; }
  .cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
  .cta a {
    display: inline-flex; align-items: center; gap: 8px; min-height: 46px;
    padding: 12px 20px; border-radius: var(--radius); text-decoration: none;
    font-size: 15px; font-weight: 600;
    border: 1px solid var(--line); color: var(--ink);
  }
  .cta a.primary { background: var(--accent); color: #08130f; border-color: transparent; }
  .cta a:hover { border-color: var(--accent); }
  .cta a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

  section { padding: clamp(32px, 5vw, 56px) 0; border-top: 1px solid var(--line); }
  .sec-h { display: flex; flex-wrap: wrap; align-items: baseline; gap: 14px; margin-bottom: 8px; }
  .sec-h h2 { font-size: clamp(20px, 2.6vw, 28px); }
  .sec-h span { color: var(--ink-faint); }

  .tiles { display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); margin-top: 26px; }
  .tile { display: block; text-decoration: none; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; background: var(--surface); }
  .tile:hover { border-color: var(--accent); }
  .tile:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  .tile img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: cover; object-position: top center; background: #0e1218; }
  .tile-b { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px; padding: 10px 12px 12px; }
  .tile-b b { font-size: 14px; }
  .tile-b i { font-family: var(--font-mono); font-style: normal; font-size: 10px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-faint); }

  .bands { list-style: none; margin: 26px 0 0; padding: 0; display: grid; gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
  .bands a { display: grid; grid-template-columns: auto 1fr auto; align-items: baseline; gap: 12px; padding: 12px 14px; background: var(--bg); text-decoration: none; }
  .bands a:hover { background: var(--surface); }
  .band-n { font-family: var(--font-mono); font-size: 11px; color: var(--ink-faint); }
  .band-name { font-size: 14px; }
  .band-c { font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-faint); }

  .foot { padding: 40px 0 64px; border-top: 1px solid var(--line); color: var(--ink-faint); font-size: 13px; display: flex; flex-wrap: wrap; gap: 10px 24px; align-items: center; }
  .foot .grow { flex: 1 1 auto; }
  .foot a { color: var(--ink-soft); }
</style>
</head>
<body>

<nav class="top" aria-label="Site">
  <div class="wrap top-in">
    <b>Design Styles</b>
    <span class="mono">${counts.styles} style ${counts.families} family</span>
    <span class="grow"></span>
    <a href="kit/gallery.html">gallery</a>
    <a href="katalog.html">catalog</a>
    <a href="kit/live.html?style=game-hud">style preview</a>
  </div>
</nav>

<header class="hero wrap">
  <h1>${counts.styles} visual styles versus monotony.</h1>
  <p>
    Every style is documented with a single long page: navigation, hero, three content sections,
    a component grid, form + data, CTA and footer. The token set, component recipe, traps and AI brief
    sit next to it. Cards are published as WebP, full pages as the original PNG.
  </p>
  <div class="stats">
    <div><span class="mono">style</span><b>${fmtInt(counts.styles)}</b></div>
    <div><span class="mono">family band</span><b>${fmtInt(counts.families)}</b></div>
    <div><span class="mono">single page PNG</span><b>${fmtInt(counts.shots)}</b></div>
    <div><span class="mono">visual size</span><b>${counts.pngMb} MB</b></div>
    <div><span class="mono">webp derivative</span><b>${counts.thumbMb} MB</b></div>
  </div>
  <div class="cta">
    <a class="primary" href="kit/gallery.html">open gallery</a>
    <a href="katalog.html">Catalog index</a>
    <a href="kit/live.html?style=minimalism">Style preview</a>
  </div>
</header>

<section>
  <div class="wrap">
    <div class="sec-h"><h2>Vitrin</h2><span>${cards.length} sample · not random, from different families</span></div>
    <div class="tiles">
        ${tiles}
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="sec-h"><h2>family bands</h2><span>${families.length} bant · kesintisiz ${families[0]?.from ?? 1}–${families[families.length - 1]?.to ?? counts.styles}</span></div>
    <ul class="bands">
        ${bandRows}
    </ul>
  </div>
</section>

<footer class="foot wrap">
  <span class="grow">Source:<a href="https://github.com/bahattinercan/style-lab">github.com/bahattinercan/style-lab</a></span>
  <a href="kit/gallery.html">gallery</a>
  <a href="katalog.html">catalog</a>
</footer>

</body>
</html>
`;
}

/*------------------------------------------------------------------------------- catalog*/

/** docs/catalog.md → HTML. Only the syntax used by this file is supported.*/
function katalogHtml(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let inTable = false;
  let tableRows = 0;
  let totalRows = 0;

  const inline = (text) =>
    esc(text)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, label, href) => {
        // style.md links are not published on the site: take to that style in the gallery
        const hit = href.match(/\.\.\/styles\/(\d+)-[^/]+\/style\.md$/);
        if (hit) return `<a href="kit/gallery.html?q=${encodeURIComponent(hit[1])}">${label}</a>`;
        if (/^https?:/.test(href)) return `<a href="${href}" rel="noopener">${label}</a>`;
        return `<a href="${href}">${label}</a>`;
      });

  const closeTable = () => {
    if (inTable) {
      out.push('    </tbody>\n  </table>');
      inTable = false;
    }
  };

  let next = 0;
  for (; next < lines.length; next += 1) {
    const line = lines[next].trimEnd();
    if (/^\|/.test(line)) {
      const cells = line.slice(1, -1).split('|').map((c) => c.trim());
      if (cells.every((c) => /^:?-{2,}:?$/.test(c))) continue;
      if (!inTable) {
        inTable = true;
        tableRows = 0;
        out.push(
          '  <table>\n    <thead>\n      <tr>' +
            cells.map((c) => `<th scope="col">${inline(c)}</th>`).join('') +
            '</tr>\n    </thead>\n    <tbody>',
        );
        continue;
      }
      tableRows += 1;
      totalRows += 1;
      out.push('      <tr>' + cells.map((c, i) => `<td${i === 0 ? ' class="num"' : ''}>${inline(c)}</td>`).join('') + '</tr>');
      continue;
    }
    closeTable();
    if (!line.trim()) continue;
    if (line.startsWith('## ')) out.push(`  <h2>${inline(line.slice(3))}</h2>`);
    else if (line.startsWith('# ')) out.push(`  <h1>${inline(line.slice(2))}</h1>`);
    else if (line.startsWith('> ')) {
      // consecutive quoted lines become a single blockquote
      const buf = [line.slice(2)];
      while (next < lines.length && lines[next].trimEnd().startsWith('> ')) {
        buf.push(lines[next].trimEnd().slice(2));
        next += 1;
      }
      if (next < lines.length) continue;
      out.push(`  <blockquote><p>${buf.map(inline).join(' ')}</p></blockquote>`);
      continue;
    } else out.push(`  <p>${inline(line)}</p>`);
  }
  closeTable();

  return { body: out.join('\n'), rows: totalRows };
}

function katalogPage({ md, styleCount }) {
  const { body, rows } = katalogHtml(md);
  if (rows !== styleCount) fail(`catalog: ${rows} table rows, expected ${styleCount} styles`);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Catalog ${styleCount} style</title>
<meta name="description" content="One-line IDs and family bands of the ${styleCount} design style.">
<link rel="stylesheet" href="fonts/fonts.css">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  :root {
    --bg: #14161a; --surface: #1a1d23; --line: rgba(255,255,255,.10);
    --ink: #e9ecf1; --ink-soft: #a9b1bd; --ink-faint: #7d8797; --accent: #7ee0c0;
    --font-body: 'Inter', system-ui, sans-serif; --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  }
  html { color-scheme: dark; }
  body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--font-body); font-size: 15px; line-height: 1.6; }
  .wrap { width: min(1100px, 94vw); margin: 0 auto; }
  .top { position: sticky; top: 0; z-index: 3; border-bottom: 1px solid var(--line); background: #14161a; }
  .top-in { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; padding: 12px 0; }
  .top b { font-size: 14px; }
  .top .grow { flex: 1 1 auto; }
  .top a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; text-decoration: none; color: var(--ink-soft); border-bottom: 1px solid var(--line); }
  .top a:hover { color: var(--accent); border-color: var(--accent); }
  main { padding: 32px 0 72px; }
  h1 { font-size: clamp(26px, 4vw, 38px); letter-spacing: -.02em; margin: 0 0 8px; }
  h2 { font-size: 18px; letter-spacing: -.01em; margin: 40px 0 10px; padding-top: 14px; border-top: 1px solid var(--line); }
  p { margin: 0 0 10px; color: var(--ink-soft); }
  blockquote { margin: 14px 0; padding: 12px 16px; border-left: 2px solid var(--accent); background: var(--surface); border-radius: 0 8px 8px 0; }
  blockquote p { margin: 0; color: var(--ink-soft); font-size: 14px; }
  code { font-family: var(--font-mono); font-size: 12.5px; background: var(--surface); padding: 1px 5px; border-radius: 4px; }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
  table { width: 100%; border-collapse: collapse; margin: 10px 0 6px; font-size: 14px; }
  th, td { text-align: left; vertical-align: top; padding: 8px 10px; border-bottom: 1px solid var(--line); }
  th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-faint); font-weight: 400; }
  td.num { font-family: var(--font-mono); font-size: 12px; color: var(--ink-faint); white-space: nowrap; }
  @media (max-width: 720px) {
    table { font-size: 13px; }
    th:nth-child(3), td:nth-child(3) { display: none; }
  }
</style>
</head>
<body>
<nav class="top" aria-label="Site">
  <div class="wrap top-in">
    <b>catalog</b>
    <span style="font-family:var(--font-mono);font-size:11px;color:var(--ink-faint)">${styleCount} style</span>
    <span class="grow"></span>
    <a href="index.html">home page</a>
    <a href="kit/gallery.html">gallery</a>
  </div>
</nav>
<main class="wrap">
${body}
</main>
</body>
</html>
`;
}

/*------------------------------------------------------- gallery transformation*/

/**
 * Converts image paths to WebP variants in gallery copy:
 * card : ../styles/<dir>/shots/01-page.png → ../thumbs/<dir>-01-page@640.webp
 * big : same path (a.href) → ../thumbs/<dir>-01-page@1280.webp
 * Also injects site-config.js (gallery.js `.cover` images at runtime as well)
 * derivative) and gives fetchpriority to the first cards.*/
function transformGallery(html) {
  let cardIndex = 0;
  // <a class="cover" href="…/01-page.png"> → major derivative
  let out = html.replace(
    /(<a class="cover" href=")\.\.\/styles\/([^"/]+)\/shots\/01-page\.png(")/g,
    (m, pre, dir, post) => pre + '../thumbs/' + dir + '-01-page@1280.webp' + post,
  );
  // <img src="…/01-page.png" alt="…" loading="lazy" decoding="async"> → card variant
  out = out.replace(
    /(<img src=")\.\.\/styles\/([^"/]+)\/shots\/01-page\.png("[^>]*?)>/g,
    (m, pre, dir, mid) => {
      const first = cardIndex < 6;
      const rest = mid
        .replace(/\sloading="lazy"/, first ? '' : ' loading="lazy"')
        .replace(/decoding="async"/, (first ? ' fetchpriority="high"' : '') + ' decoding="async" width="640" height="1200"');
      cardIndex += 1;
      return pre + '../thumbs/' + dir + '-01-page@640.webp' + rest + '>';
    },
  );
  out = out.replace(
    '<script src="gallery.js" defer></script>',
    '<script src="site-config.js"></script>\n<script src="gallery.js" defer></script>',
  );
  if (cardIndex !== styles.length) fail(`gallery: ${cardIndex} card images converted, expected ${styles.length}`);
  return out;
}

const SITE_CONFIG = `/* site-config.js — generates node kit/build-site.mjs; manual editing.
   It tells the gallery "cards use WebP variant". If undefined (inside repo file://
   preview) gallery.js uses the original PNG path. */
window.STYLE_LAB_SHOTS = { base: '../thumbs', card: '640', full: '1280' };`;

/* ----------------------------------------------------------------- derleme */

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copy(rel, destRel = rel) {
  const from = path.join(ROOT, rel);
  const to = path.join(OUT, destRel);
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
}

function copyDir(relSrc, relDest = relSrc) {
  const src = path.join(ROOT, relSrc);
  const dest = path.join(OUT, relDest);
  if (!fs.existsSync(src)) return;
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const sRel = path.posix.join(relSrc, entry.name);
    const dRel = path.posix.join(relDest, entry.name);
    if (entry.isDirectory()) {
      copyDir(sRel, dRel);
    } else {
      copy(sRel, dRel);
    }
  }
}

function build() {
  if (CLEAN && fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });
  ensureDir(OUT);

  // 1) kit assets
  for (const f of ['gallery.css', 'gallery.js', 'tokens.css', 'live.html', 'live-styles.js', 'viewer-nav.js', 'viewer-lightbox.js']) {
    copy(`kit/${f}`, `kit/${f}`);
  }
  copy('kit/render/scene.css', 'kit/render/scene.css');
  copyDir('kit/live', 'kit/live');
  copyDir('kit/images', 'kit/images');
  copy('docs/catalog.md', 'docs/catalog.md');
  const gallery = transformGallery(read('kit/gallery.html'));
  fs.writeFileSync(path.join(OUT, 'kit', 'gallery.html'), gallery);
  fs.writeFileSync(path.join(OUT, 'kit', 'site-config.js'), SITE_CONFIG);

  // 2) fontlar
  for (const f of fs.readdirSync(FONTS_DIR)) {
    if (/\.(woff2|css)$/i.test(f)) {
      copy(`kit/fonts/${f}`, `fonts/${f}`);
      copy(`kit/fonts/${f}`, `kit/fonts/${f}`);
    }
  }

  // 3) PNG originals (lightbox/download target)
  let pngBytes = 0;
  for (const s of styles) {
    const rel = shotPng(s);
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) {
      fail(`${rel}: missing — run node kit/render/render-shots.mjs first`);
      continue;
    }
    pngBytes += fs.statSync(abs).size;
    copy(rel, rel);
  }

  // 4) WebP derivatives (source: kit/site/thumbs, target: _site/thumbs)
  let thumbBytes = 0;
  for (const s of styles) {
    for (const variant of VARIANTS) {
      const rel = thumbPath(s, variant);
      const abs = repoOf(rel);
      if (!fs.existsSync(abs)) {
        fail(`${rel}: yok — node kit/build-thumbs.mjs`);
        continue;
      }
      thumbBytes += fs.statSync(abs).size;
      ensureDir(path.join(OUT, 'thumbs'));
      fs.copyFileSync(abs, path.join(OUT, rel));
    }
  }

  // 5) landing + catalog
  fs.writeFileSync(path.join(OUT, 'index.html'), landingHtml({ pngBytes, thumbBytes }));
  fs.writeFileSync(path.join(OUT, 'katalog.html'), katalogPage({ md: read('docs/catalog.md'), styleCount: styles.length }));
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
  return { pngBytes, thumbBytes };
}

function check() {
  // A) two variants for each style
  for (const s of styles) {
    for (const variant of VARIANTS) {
      const abs = repoOf(thumbPath(s, variant));
      if (!fs.existsSync(abs)) fail(`${thumbPath(s, variant)} yok — node kit/build-thumbs.mjs`);
    }
    if (!fs.existsSync(path.join(ROOT, shotPng(s)))) fail(`${shotPng(s)} yok — node kit/render/render-shots.mjs`);
  }

  // B) does the gallery copy conversion capture all cards
  const gallery = transformGallery(read('kit/gallery.html'));
  if (/\.\.\/styles\/[^"]+\/shots\/01-page\.png/.test(gallery)) {
    fail('gallery: unconverted PNG path left (card image must be WebP)');
  }
  if (!gallery.includes('site-config.js')) fail('gallery: site-config.js was not injected');

  // C) Are gallery/live/catalog references resolved in the site tree?
  //    Site path → repo path: kit/ and styles/ remain the same, fonts → kit/fonts,
  //    thumbs → kit/site/thumbs. Generated pages (index/catalog/site-config) are skipped.
  const GENERATED = new Set(['index.html', 'katalog.html', 'kit/site-config.js', '.nojekyll']);
  for (const rel of ['kit/gallery.html', 'kit/live.html', 'kit/gallery.css']) {
    const html = read(rel);
    const refs = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => m[1]);
    for (const ref of new Set(refs)) {
      if (!ref || ref.startsWith('?') || ref.startsWith('data:')) continue;
      const sitePath = path.posix.normalize(path.posix.join('kit', ref));
      if (GENERATED.has(sitePath)) continue;
      if (!fs.existsSync(repoOf(sitePath))) fail(`${rel}: ${ref} → ${sitePath} does not resolve`);
    }
  }

  // D) Are live pages and their references resolved?
  const liveDir = path.join(KIT_DIR, 'live');
  if (!fs.existsSync(liveDir)) {
    fail('There is no kit/live folder — node kit/build-live.mjs first');
  } else {
    const liveFiles = fs.readdirSync(liveDir).filter((f) => f.endsWith('.html'));
    if (liveFiles.length !== styles.length) {
      fail(`kit/live: ${liveFiles.length} pages, expected ${styles.length}`);
    }
    const checkOut = fs.existsSync(OUT);
    if (checkOut) {
      const outLive = path.join(OUT, 'kit', 'live');
      if (!fs.existsSync(outLive)) {
        fail('No _site/kit/live folder — node kit/build-site.mjs');
      } else {
        const outLiveFiles = fs.readdirSync(outLive).filter((f) => f.endsWith('.html'));
        if (outLiveFiles.length !== styles.length) {
          fail(`_site/kit/live: ${outLiveFiles.length} pages, expected ${styles.length}`);
        }
      }
      if (!fs.existsSync(path.join(OUT, 'kit', 'render', 'scene.css'))) fail('_site/kit/render/scene.css yok');
      if (!fs.existsSync(path.join(OUT, 'kit', 'fonts', 'fonts.css'))) fail('_site/kit/fonts/fonts.css yok');
    }
    const seenRefs = new Set();
    for (const f of liveFiles) {
      const html = fs.readFileSync(path.join(liveDir, f), 'utf8');
      const refs = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => m[1]);
      for (const ref of refs) {
        if (!ref || ref.startsWith('?') || ref.startsWith('data:')) continue;
        const cleanRef = ref.split('?')[0];
        if (seenRefs.has(cleanRef)) continue;
        seenRefs.add(cleanRef);
        const sitePath = path.posix.normalize(path.posix.join('kit/live', cleanRef));
        if (!fs.existsSync(repoOf(sitePath))) {
          fail(`kit/live/${f}: ${cleanRef} → ${sitePath} repoda yok`);
        }
        if (checkOut && !fs.existsSync(path.join(OUT, sitePath))) {
          fail(`kit/live/${f}: ${cleanRef} → _site/${sitePath} yok`);
        }
      }
    }
  }

  // E) number of catalog lines
  katalogPage({ md: read('docs/catalog.md'), styleCount: styles.length });

  // F) Are the landing numbers the same as the source (no made-up numbers)
  const landing = landingHtml({ pngBytes: 0, thumbBytes: 0 });
  const shown = Number((landing.match(/<title>[^<]*·\s*(\d+)\s*styles/) ?? [])[1]);
  if (shown !== styles.length) fail(`the landing headline says ${shown} styles, the source has ${styles.length}`);

  if (failures.length) {
    console.error(`✗ the site is not ready to publish (${failures.length} problems):`);
    for (const f of failures.slice(0, 25)) console.error(`  - ${f}`);
    if (failures.length > 25) console.error(`  … ${failures.length - 25} more`);
    process.exit(1);
  }
  console.log(
    `✓ site integrity: ${styles.length} styles × ${VARIANTS.length} WebP + PNG · ${families.length} families · catalog ${styles.length} rows · ${styles.length} live pages`,
  );
}

const started = Date.now();
if (CHECK) {
  check();
} else {
  const { pngBytes, thumbBytes } = build();
  if (failures.length) {
    console.error(`✗ _site was built incomplete (${failures.length} problems):`);
    for (const f of failures.slice(0, 25)) console.error(`  - ${f}`);
    process.exit(1);
  }
  const size = (function du(dir) {
    let total = 0;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, e.name);
      total += e.isDirectory() ? du(abs) : fs.statSync(abs).size;
    }
    return total;
  })(OUT);
  const files = (function count(dir) {
    let n = 0;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      n += e.isDirectory() ? count(path.join(dir, e.name)) : 1;
    }
    return n;
  })(OUT);
  console.log(
    `✓ _site built · ${files} files · ${(size / 1024 / 1024).toFixed(0)} MB ` +
      `(PNG ${(pngBytes / 1024 / 1024).toFixed(0)} MB + WebP ${(thumbBytes / 1024 / 1024).toFixed(0)} MB) · ${((Date.now() - started) / 1000).toFixed(1)} s`,
  );
}
