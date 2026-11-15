#!/usr/bin/env node
/**
 * kit/build-site.mjs — yayınlanabilir statik siteyi `_site/` içine derler.
 *
 * Neden ayrı klasör: repo 2 GB'ın üzerinde (git geçmişi + kit/render + 209 MB PNG).
 * GitHub Pages'e yalnız gerçekten servis edilen dosyalar gitmeli. Bu script kaynakları
 * okur, galeri/landing/katalog HTML'ini üretir ve `_site/` ağacını kurar:
 *
 *   _site/
 *   ├── index.html                 landing (üretilir)
 *   ├── katalog.html               251 stilin okunur indeksi (docs/katalog.md'den, üretilir)
 *   ├── .nojekyll                  Pages Jekyll işlemesini kapatır
 *   ├── kit/gallery.html           galeri (kopya + yayın dönüşümleri)
 *   ├── kit/live.html              stil önizlemesi
 *   ├── kit/{gallery.css,gallery.js,tokens.css,live-styles.js,viewer-*.js,site-config.js}
 *   ├── thumbs/<dir>-01-page@640|1280.webp   (kit/build-thumbs.mjs üretir)
 *   ├── fonts/                     woff2 + fonts.css (@font-face)
 *   └── styles/<dir>/shots/01-page.png       orijinal PNG (lightbox "PNG" hedefi)
 *
 * Kullanım:
 *   node kit/build-site.mjs            # _site/ derle
 *   node kit/build-site.mjs --check    # yayın bütünlüğü kapısı (yazmaz)
 *   node kit/build-site.mjs --clean    # önce _site/'i sil
 *
 * --check ne ölçer: her stil için iki WebP türevi var mı, galerinin işaret ettiği her
 * görsel/font dosyası çözülüyor mu, katalog tablosu stil sayısıyla eşleşiyor mu,
 * landing'deki sayılar kaynakla aynı mı. Sayı uydurulmaz (AGENTS kural 10).
 */
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

/** Site ağacındaki yolu repodaki gerçek dosyaya çevirir: fonts → kit/fonts, thumbs → kit/site/thumbs. */
function repoOf(sitePath) {
  if (sitePath.startsWith('fonts/')) return path.join(KIT_DIR, sitePath);
  if (sitePath.startsWith('thumbs/')) return path.join(THUMBS_DIR, sitePath.slice('thumbs/'.length));
  return path.join(ROOT, sitePath);
}

const index = j('kit/styles.index.json');
const families = j('kit/families.json').families ?? [];
const styles = index.styles ?? [];
const bySlug = new Map(styles.map((s) => [s.slug, s]));

/** README'deki "10 saniyede seç" listesi landing'de vitrine çıkar. */
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
          <span class="band-c">${n} stil</span>
        </a></li>`;
    })
    .join('\n        ');

  const tiles = cards
    .map((s, i) => {
      const priority = i < 2 ? ' fetchpriority="high"' : ' loading="lazy"';
      return `<a class="tile" href="kit/gallery.html?q=${encodeURIComponent(s.num)}">
          <img src="${thumbPath(s, '640')}" alt="${esc(s.name)} — tek sayfa önizleme"
               width="640" height="1200"${priority} decoding="async">
          <span class="tile-b"><b>${esc(s.name)}</b><i>${esc(s.family)}</i></span>
        </a>`;
    })
    .join('\n        ');

  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tasarım Stilleri · ${counts.styles} stil, ${counts.families} aile</title>
<meta name="description" content="Tekdüzeliğe karşı görsel stil kataloğu: ${counts.styles} stil, ${counts.families} aile bandı, her stil için tek sayfa mock-up, token seti ve AI brief.">
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
    <b>Tasarım Stilleri</b>
    <span class="mono">${counts.styles} stil · ${counts.families} aile</span>
    <span class="grow"></span>
    <a href="kit/gallery.html">galeri</a>
    <a href="katalog.html">katalog</a>
    <a href="kit/live.html?style=game-hud">stil önizlemesi</a>
  </div>
</nav>

<header class="hero wrap">
  <h1>Tekdüzeliğe karşı ${counts.styles} görsel stil.</h1>
  <p>
    Her stil tek bir uzun sayfayla anlatılır: gezinme, hero, üç içerik bölümü, bileşen ızgarası,
    form + veri, CTA ve alt bilgi. Yanında token seti, bileşen reçetesi, tuzaklar ve AI brief gelir.
    Kartlar WebP, tam sayfa orijinal PNG olarak yayınlanır.
  </p>
  <div class="stats">
    <div><span class="mono">stil</span><b>${fmtInt(counts.styles)}</b></div>
    <div><span class="mono">aile bandı</span><b>${fmtInt(counts.families)}</b></div>
    <div><span class="mono">tek sayfa PNG</span><b>${fmtInt(counts.shots)}</b></div>
    <div><span class="mono">görsel boyut</span><b>${counts.pngMb} MB</b></div>
    <div><span class="mono">webp türev</span><b>${counts.thumbMb} MB</b></div>
  </div>
  <div class="cta">
    <a class="primary" href="kit/gallery.html">Galeriyi aç</a>
    <a href="katalog.html">Katalog indeksi</a>
    <a href="kit/live.html?style=minimalism">Stil önizlemesi</a>
  </div>
</header>

<section>
  <div class="wrap">
    <div class="sec-h"><h2>Vitrin</h2><span>${cards.length} örnek · rastgele değil, farklı ailelerden</span></div>
    <div class="tiles">
        ${tiles}
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="sec-h"><h2>Aile bantları</h2><span>${families.length} bant · kesintisiz ${families[0]?.from ?? 1}–${families[families.length - 1]?.to ?? counts.styles}</span></div>
    <ul class="bands">
        ${bandRows}
    </ul>
  </div>
</section>

<footer class="foot wrap">
  <span class="grow">Kaynak: <a href="https://github.com/bahattinercan/style-lab">github.com/bahattinercan/style-lab</a></span>
  <a href="kit/gallery.html">galeri</a>
  <a href="katalog.html">katalog</a>
</footer>

</body>
</html>
`;
}

/* --------------------------------------------------------------- katalog */

/** docs/katalog.md → HTML. Yalnız bu dosyanın kullandığı sözdizimi desteklenir. */
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
        // style.md bağlantıları sitede yayınlanmıyor: galeride o stile götür
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
      // ardışık alıntı satırları tek blockquote olur
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
  if (rows !== styleCount) fail(`katalog: ${rows} tablo satırı, beklenen ${styleCount} stil`);
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Katalog · ${styleCount} stil</title>
<meta name="description" content="${styleCount} tasarım stilinin tek satırlık kimlikleri ve aile bantları.">
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
    <b>Katalog</b>
    <span style="font-family:var(--font-mono);font-size:11px;color:var(--ink-faint)">${styleCount} stil</span>
    <span class="grow"></span>
    <a href="index.html">ana sayfa</a>
    <a href="kit/gallery.html">galeri</a>
  </div>
</nav>
<main class="wrap">
${body}
</main>
</body>
</html>
`;
}

/* ------------------------------------------------------- galeri dönüşümü */

/**
 * Galeri kopyasında görsel yollarını WebP türevlerine çevirir:
 *   kart  : ../styles/<dir>/shots/01-page.png → ../thumbs/<dir>-01-page@640.webp
 *   büyük : aynı yol (a.href)                 → ../thumbs/<dir>-01-page@1280.webp
 * Ayrıca site-config.js enjekte eder (gallery.js `.cover` görsellerini runtime'da da
 * türeve çeker) ve ilk kartlara fetchpriority verir.
 */
function transformGallery(html) {
  let cardIndex = 0;
  // <a class="cover" href="…/01-page.png"> → büyük türev
  let out = html.replace(
    /(<a class="cover" href=")\.\.\/styles\/([^"/]+)\/shots\/01-page\.png(")/g,
    (m, pre, dir, post) => pre + '../thumbs/' + dir + '-01-page@1280.webp' + post,
  );
  // <img src="…/01-page.png" alt="…" loading="lazy" decoding="async"> → kart türevi
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
  if (cardIndex !== styles.length) fail(`galeri: ${cardIndex} kart görseli dönüştürüldü, beklenen ${styles.length}`);
  return out;
}

const SITE_CONFIG = `/* site-config.js — node kit/build-site.mjs üretir; elle düzenleme.
   Galeriye "kartlar WebP türevini kullan" der. Tanımsızsa (repo içi file://
   önizleme) gallery.js orijinal PNG yolunu kullanır. */
window.STYLE_LAB_SHOTS = { base: '../thumbs', card: '640', full: '1280' };
`;

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

function build() {
  if (CLEAN && fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });
  ensureDir(OUT);

  // 1) kit varlıkları
  for (const f of ['gallery.css', 'gallery.js', 'tokens.css', 'live.html', 'live-styles.js', 'viewer-nav.js', 'viewer-lightbox.js']) {
    copy(`kit/${f}`, `kit/${f}`);
  }
  const gallery = transformGallery(read('kit/gallery.html'));
  fs.writeFileSync(path.join(OUT, 'kit', 'gallery.html'), gallery);
  fs.writeFileSync(path.join(OUT, 'kit', 'site-config.js'), SITE_CONFIG);

  // 2) fontlar
  for (const f of fs.readdirSync(FONTS_DIR)) {
    if (/\.(woff2|css)$/i.test(f)) copy(`kit/fonts/${f}`, `fonts/${f}`);
  }

  // 3) PNG orijinaller (lightbox/indirme hedefi)
  let pngBytes = 0;
  for (const s of styles) {
    const rel = shotPng(s);
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) {
      fail(`${rel}: yok — önce node kit/render/render-shots.mjs`);
      continue;
    }
    pngBytes += fs.statSync(abs).size;
    copy(rel, rel);
  }

  // 4) WebP türevleri (kaynak: kit/site/thumbs, hedef: _site/thumbs)
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

  // 5) landing + katalog
  fs.writeFileSync(path.join(OUT, 'index.html'), landingHtml({ pngBytes, thumbBytes }));
  fs.writeFileSync(path.join(OUT, 'katalog.html'), katalogPage({ md: read('docs/katalog.md'), styleCount: styles.length }));
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
  return { pngBytes, thumbBytes };
}

function check() {
  // A) her stil için iki türev
  for (const s of styles) {
    for (const variant of VARIANTS) {
      const abs = repoOf(thumbPath(s, variant));
      if (!fs.existsSync(abs)) fail(`${thumbPath(s, variant)} yok — node kit/build-thumbs.mjs`);
    }
    if (!fs.existsSync(path.join(ROOT, shotPng(s)))) fail(`${shotPng(s)} yok — node kit/render/render-shots.mjs`);
  }

  // B) galeri kopyası dönüşümü tüm kartları yakalıyor mu
  const gallery = transformGallery(read('kit/gallery.html'));
  if (/\.\.\/styles\/[^"]+\/shots\/01-page\.png/.test(gallery)) {
    fail('galeri: dönüştürülmemiş PNG yolu kaldı (kart görseli WebP olmalı)');
  }
  if (!gallery.includes('site-config.js')) fail('galeri: site-config.js enjekte edilmedi');

  // C) galeri/live/katalog referansları site ağacında çözülüyor mu
  //    Site yolu → repo yolu: kit/ ve styles/ aynı kalır, fonts → kit/fonts,
  //    thumbs → kit/site/thumbs. Üretilen sayfalar (index/katalog/site-config) atlanır.
  const GENERATED = new Set(['index.html', 'katalog.html', 'kit/site-config.js', '.nojekyll']);
  for (const rel of ['kit/gallery.html', 'kit/live.html', 'kit/gallery.css']) {
    const html = read(rel);
    const refs = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => m[1]);
    for (const ref of new Set(refs)) {
      if (!ref || ref.startsWith('?') || ref.startsWith('data:')) continue;
      const sitePath = path.posix.normalize(path.posix.join('kit', ref));
      if (GENERATED.has(sitePath)) continue;
      if (!fs.existsSync(repoOf(sitePath))) fail(`${rel}: ${ref} → ${sitePath} çözülmüyor`);
    }
  }

  // D) katalog satır sayısı
  katalogPage({ md: read('docs/katalog.md'), styleCount: styles.length });

  // E) landing sayıları kaynakla aynı mı (uydurma sayı yok)
  const landing = landingHtml({ pngBytes: 0, thumbBytes: 0 });
  const shown = Number((landing.match(/<title>[^<]*·\s*(\d+)\s*stil/) ?? [])[1]);
  if (shown !== styles.length) fail(`landing başlığında ${shown} stil yazıyor, kaynak ${styles.length}`);

  if (failures.length) {
    console.error(`✗ site yayına hazır değil (${failures.length} sorun):`);
    for (const f of failures.slice(0, 25)) console.error(`  - ${f}`);
    if (failures.length > 25) console.error(`  … ${failures.length - 25} tane daha`);
    process.exit(1);
  }
  console.log(
    `✓ site bütünlüğü: ${styles.length} stil × ${VARIANTS.length} WebP + PNG · ${families.length} aile · katalog ${styles.length} satır`,
  );
}

const started = Date.now();
if (CHECK) {
  check();
} else {
  const { pngBytes, thumbBytes } = build();
  if (failures.length) {
    console.error(`✗ _site eksik derlendi (${failures.length} sorun):`);
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
    `✓ _site derlendi · ${files} dosya · ${(size / 1024 / 1024).toFixed(0)} MB ` +
      `(PNG ${(pngBytes / 1024 / 1024).toFixed(0)} MB + WebP ${(thumbBytes / 1024 / 1024).toFixed(0)} MB) · ${((Date.now() - started) / 1000).toFixed(1)} s`,
  );
}
