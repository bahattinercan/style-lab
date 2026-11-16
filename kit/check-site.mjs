#!/usr/bin/env node
/**
 * kit/check-site.mjs — smoke test (gate) of the published site.
 *
 * Reason: `build-site --check` verifies the existence of the files, but the gallery does not actually exist.
 * Installed WebP variant, lightbox opened 1280 variant, live.html styled
 It does not indicate that it is painted with * tokens and there is no error in the console. This door is `_site/`
 * compiles it, serves it on the local HTTP server, and measures it in the headless browser.
 *
 * Usage:
 * node kit/check-site.mjs # compile + serve + measure (port)
 * node kit/check-site.mjs --verbose # print each measurement
 * node kit/check-site.mjs --no-build # measure against existing _site/
 *
 * Measured: landing (8 showcases, 31 families, webp), gallery (251 cards, webp path, lazy/priority,
 * lightbox 1280 derivative), catalog (251 rows, 31 tables), live (251 options, token color),
 * HTTP content types (webp/png), console errors.*/
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { launch } from './render/cdp-browser.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const SITE = path.join(ROOT, '_site');
const VERBOSE = process.argv.includes('--verbose');
const NO_BUILD = process.argv.includes('--no-build');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const problems = [];
const checks = [];
const check = (ok, message) => {
  if (!ok) problems.push(message);
};

/** Minimal static server serving the `_site/` tree (does not list directories).*/
function serve() {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
    const rel = url.endsWith('/') ? `${url}index.html` : url;
    const abs = path.join(SITE, path.posix.normalize(rel));
    if (!abs.startsWith(SITE)) {
      res.writeHead(403).end('forbidden');
      return;
    }
    let file = abs;
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) {
      res.writeHead(404, { 'content-type': 'text/plain' }).end('404');
      return;
    }
    res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] ?? 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

/** Browser tab: Minimal CDP client over WebSocket.*/
async function openPage(port, url) {
  const res = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  const target = await res.json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  let id = 0;
  const pending = new Map();
  const errors = [];
  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
    if (msg.method === 'Runtime.exceptionThrown') errors.push(msg.params.exceptionDetails?.text ?? 'exception');
    if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
      errors.push(msg.params.args.map((a) => a.value ?? a.description).join(' '));
    }
  });
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      id += 1;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  await send('Runtime.enable');
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  for (let i = 0; i < 120; i += 1) {
    const r = await send('Runtime.evaluate', { expression: 'document.readyState', returnByValue: true });
    if (r.result?.result?.value === 'complete') break;
    await new Promise((r2) => setTimeout(r2, 100));
  }
  await new Promise((r2) => setTimeout(r2, 800));
  const evaluate = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.text);
    return r.result?.result?.value;
  };
  return { evaluate, close: () => ws.close(), errors };
}

const http0 = (base, rel) => fetch(base + rel).then((r) => ({ status: r.status, type: r.headers.get('content-type') ?? '' }));

async function main() {
  if (!NO_BUILD) {
    execFileSync(process.execPath, [path.join(HERE, 'build-site.mjs')], { cwd: ROOT, stdio: VERBOSE ? 'inherit' : 'ignore' });
  }
  if (!fs.existsSync(path.join(SITE, 'index.html'))) {
    console.error('✗ No _site/index.html — node kit/build-site.mjs first');
    process.exit(1);
  }

  const server = await serve();
  const port = server.address().port;
  const base = `http://127.0.0.1:${port}`;
  const cdp = await launch({ tabs: 1 });
  try {
    // HTTP content types
    const webp = await http0(base, '/thumbs/01-minimalism-01-page@640.webp');
    const png = await http0(base, '/styles/01-minimalism/shots/01-page.png');
    const nojekyll = await http0(base, '/.nojekyll');
    checks.push({ page: 'HTTP', webp, png, nojekyll });
    check(webp.status === 200 && webp.type.includes('image/webp'), `webp servis: ${webp.status} ${webp.type}`);
    check(png.status === 200 && png.type.includes('image/png'), `png servis: ${png.status} ${png.type}`);

    // landing
    {
      const p = await openPage(cdp.port, `${base}/index.html`);
      const info = await p.evaluate(`(() => {
        const imgs = [...document.images];
        return {
          title: document.title,
          tiles: document.querySelectorAll('.tile').length,
          bands: document.querySelectorAll('.bands a').length,
          loaded: imgs.filter((i) => i.complete && i.naturalWidth > 0).length,
          webp: imgs.filter((i) => (i.currentSrc || '').includes('.webp')).length,
          stats: [...document.querySelectorAll('.stats b')].map((b) => b.textContent),
        };
      })()`);
      checks.push({ page: 'index.html', ...info });
      check(info.tiles === 8, `landing: ${info.tiles} showcase cards (8 expected)`);
      check(info.bands >= 1, 'landing: family list is empty');
      check(info.webp >= 2 && info.loaded >= 2, `landing: webp ${info.webp} / loaded ${info.loaded}`);
      check(!p.errors.length, `landing konsol: ${p.errors.join(' | ')}`);
      p.close();
    }

    // gallery
    {
      const p = await openPage(cdp.port, `${base}/kit/gallery.html`);
      const info = await p.evaluate(`(async () => {
        const wait = (ms) => new Promise((r) => setTimeout(r, ms));
        const cards = [...document.querySelectorAll('.card')];
        const covers = cards.slice(0, 12).map((c) => c.querySelector('.cover img'));
        for (let i = 0; i < 60; i++) { if (covers.every((im) => im && im.complete && im.naturalWidth > 0)) break; await wait(100); }
        return {
          cards: cards.length,
          firstSrc: cards[0]?.querySelector('.cover img')?.getAttribute('src'),
          firstHref: cards[0]?.querySelector('.cover')?.getAttribute('href'),
          loaded12: covers.filter((im) => im && im.naturalWidth > 0).length,
          countText: document.getElementById('count')?.textContent,
          config: window.STYLE_LAB_SHOTS ? 'var' : 'yok',
          lazy: document.querySelectorAll('.cover img[loading="lazy"]').length,
          priority: document.querySelectorAll('.cover img[fetchpriority="high"]').length,
        };
      })()`);
      checks.push({ page: 'kit/gallery.html', ...info });
      check(info.cards === 251, `gallery: ${info.cards} cards (251 expected)`);
      check(String(info.firstSrc).includes('/thumbs/'), `gallery: card src is not a derivative (${info.firstSrc})`);
      check(String(info.firstHref).includes('@1280.webp'), `gallery: cover link is not the large derivative (${info.firstHref})`);
      check(info.loaded12 >= 8, `gallery: ${info.loaded12} of the first 12 cards loaded`);
      check(info.config === 'var', 'gallery: site-config.js not loaded');
      check(info.lazy > 200 && info.priority === 6, `gallery: lazy ${info.lazy} / priority ${info.priority} (245/6 expected)`);

      const lb = await p.evaluate(`(async () => {
        document.querySelector('.card .cover').click();
        await new Promise((r) => setTimeout(r, 600));
        const img = document.querySelector('.lb img, #lb img, [class*="lb"] img');
        return { src: img?.getAttribute('src') ?? null, natural: img?.naturalWidth ?? 0 };
      })()`);
      checks.push({ page: 'gallery lightbox', ...lb });
      if (lb.src) check(String(lb.src).includes('@1280.webp') && lb.natural === 1280, `lightbox: ${lb.src} (${lb.natural}px)`);
      check(!p.errors.length, `gallery console: ${p.errors.join(' | ')}`);
      p.close();
    }

    // catalog
    {
      const p = await openPage(cdp.port, `${base}/katalog.html`);
      const info = await p.evaluate(`(() => ({
        rows: document.querySelectorAll('main table tbody tr').length,
        tables: document.querySelectorAll('main table').length,
        styleLinks: [...document.querySelectorAll('main table a')].filter((a) => (a.getAttribute('href') || '').includes('gallery.html?q=')).length,
      }))()`);
      checks.push({ page: 'katalog.html', ...info });
      check(info.rows === 251, `catalog: ${info.rows} rows (251 expected)`);
      check(info.tables === 31, `catalog: ${info.tables} tables (31 expected)`);
      check(info.styleLinks === 251, `catalog: ${info.styleLinks} style links (251 expected)`);
      check(!p.errors.length, `katalog konsol: ${p.errors.join(' | ')}`);
      p.close();
    }

    // live (token numunesi)
    {
      const p = await openPage(cdp.port, `${base}/kit/live.html?mode=tokens&style=game-hud`);
      const info = await p.evaluate(`(() => ({
        options: document.querySelectorAll('#styleSel option').length,
        selected: document.querySelector('#styleSel')?.value,
        fullShot: document.getElementById('fullShot')?.getAttribute('href'),
        bg: getComputedStyle(document.body).backgroundColor,
        fontsLoaded: [...document.fonts].filter((f) => f.status === 'loaded').length,
      }))()`);
      checks.push({ page: 'kit/live.html (tokens)', ...info });
      check(info.options === 251, `live: ${info.options} options (251 expected)`);
      check(info.selected === 'game-hud', `live: selected style is ${info.selected}`);
      check(String(info.fullShot).includes('/styles/152-game-hud/shots/01-page.png'), `live: full-page link ${info.fullShot}`);
      check(info.bg !== 'rgb(255, 255, 255)', 'live: style tokens not implemented (bg white)');
      check(!p.errors.length, `live konsol: ${p.errors.join(' | ')}`);
      p.close();
    }

    // live page (published single page design)
    for (const target of [
      { slug: 'game-hud', path: '/kit/live/152-game-hud.html', motif: 'motif-grid', type: 'stock photo' },
      { slug: 'fluid-simulation', path: '/kit/live/100-fluid-simulation.html', motif: 'motif-blob', type: 'generated artwork' },
    ]) {
      const p = await openPage(cdp.port, `${base}${target.path}`);
      const info = await p.evaluate(`(async () => {
        const wait = (ms) => new Promise((r) => setTimeout(r, ms));
        const img = document.querySelector('.pg-media img.pg-photo, img.pg-photo');
        for (let i = 0; i < 40; i++) {
          if (img && img.complete && img.naturalWidth > 0) break;
          await wait(100);
        }
        const h1 = document.querySelector('.hero h1, h1');
        const media = document.querySelector('figure.pg-media, .pg-media');
        return {
          dataStyle: document.documentElement.getAttribute('data-style'),
          h1Text: h1 ? h1.textContent.trim() : null,
          hasH1: Boolean(h1 && h1.textContent.trim().length > 0),
          motifClass: media ? media.className : '',
          photoSrc: img ? img.getAttribute('src') : null,
          photoNaturalWidth: img ? img.naturalWidth : 0,
        };
      })()`);
      checks.push({ page: target.path, ...info });
      check(info.hasH1, `live page (${target.slug}): no hero heading`);
      check(info.dataStyle === target.slug, `live page (${target.slug}): data-style (${info.dataStyle}) does not match`);
      check(
        info.motifClass.includes(target.motif),
        `live page (${target.slug}): the ${target.motif} class is missing on the media figure (${info.motifClass})`,
      );
      check(
        info.photoNaturalWidth > 0,
        `live page (${target.slug}): the ${target.type} hero image did not load (${info.photoSrc}, naturalWidth=${info.photoNaturalWidth})`,
      );
      check(!p.errors.length, `live page (${target.slug}) console: ${p.errors.join(' | ')}`);
      p.close();
    }
  } finally {
    await cdp.close();
    server.close();
  }

  if (VERBOSE) console.log(JSON.stringify(checks, null, 2));
  if (problems.length) {
    console.error(`✗ site smoke test: ${problems.length} problems`);
    for (const p of problems) console.error('  - ' + p);
    process.exit(1);
  }
  const gallery = checks.find((c) => c.page === 'kit/gallery.html');
  console.log(
    `✓ site smoke test: landing + gallery ${gallery?.cards ?? '?'} cards (webp, lazy ${gallery?.lazy ?? '?'}, priority ${gallery?.priority ?? '?'}) ` +
      `+ catalog + live (token + page) · console clean`,
  );
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
