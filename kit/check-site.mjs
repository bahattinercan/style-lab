#!/usr/bin/env node
/**
 * kit/check-site.mjs — yayınlanan sitenin duman testi (kapı).
 *
 * Neden: `build-site --check` dosyaların varlığını doğrular, ama galerinin gerçekten
 * WebP türevini yüklediğini, lightbox'ın 1280 türevini açtığını, live.html'in stil
 * token'larıyla boyandığını ve konsolda hata olmadığını göstermez. Bu kapı `_site/`
 * derler, yerel HTTP sunucusunda servis eder ve başsız tarayıcıda ölçer.
 *
 * Kullanım:
 *   node kit/check-site.mjs            # derle + servis + ölç (kapı)
 *   node kit/check-site.mjs --verbose  # her ölçümü yazdır
 *   node kit/check-site.mjs --no-build # var olan _site/ ile ölç
 *
 * Ölçülen: landing (8 vitrin, 31 aile, webp), galeri (251 kart, webp yol, lazy/priority,
 * lightbox 1280 türev), katalog (251 satır, 31 tablo), live (251 seçenek, token rengi),
 * HTTP içerik tipleri (webp/png), konsol hataları.
 */
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
  '.woff2': 'font/woff2',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const problems = [];
const checks = [];
const check = (ok, message) => {
  if (!ok) problems.push(message);
};

/** `_site/` ağacını servis eden minimal statik sunucu (dizin listelemez). */
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

/** Tarayıcı sekmesi: WebSocket üzerinden minimal CDP istemcisi. */
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
    console.error('✗ _site/index.html yok — önce node kit/build-site.mjs');
    process.exit(1);
  }

  const server = await serve();
  const port = server.address().port;
  const base = `http://127.0.0.1:${port}`;
  const cdp = await launch({ tabs: 1 });
  try {
    // HTTP içerik tipleri
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
      check(info.tiles === 8, `landing: ${info.tiles} vitrin kartı (8 bekleniyor)`);
      check(info.bands >= 1, 'landing: aile listesi boş');
      check(info.webp >= 2 && info.loaded >= 2, `landing: webp ${info.webp} / yüklenen ${info.loaded}`);
      check(!p.errors.length, `landing konsol: ${p.errors.join(' | ')}`);
      p.close();
    }

    // galeri
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
      check(info.cards === 251, `galeri: ${info.cards} kart (251 bekleniyor)`);
      check(String(info.firstSrc).includes('/thumbs/'), `galeri: kart src türev değil (${info.firstSrc})`);
      check(String(info.firstHref).includes('@1280.webp'), `galeri: kapak bağlantısı büyük türev değil (${info.firstHref})`);
      check(info.loaded12 >= 8, `galeri: ilk 12 karttan ${info.loaded12} görsel yüklendi`);
      check(info.config === 'var', 'galeri: site-config.js yüklenmedi');
      check(info.lazy > 200 && info.priority === 6, `galeri: lazy ${info.lazy} / priority ${info.priority} (245/6 bekleniyor)`);

      const lb = await p.evaluate(`(async () => {
        document.querySelector('.card .cover').click();
        await new Promise((r) => setTimeout(r, 600));
        const img = document.querySelector('.lb img, #lb img, [class*="lb"] img');
        return { src: img?.getAttribute('src') ?? null, natural: img?.naturalWidth ?? 0 };
      })()`);
      checks.push({ page: 'galeri lightbox', ...lb });
      if (lb.src) check(String(lb.src).includes('@1280.webp') && lb.natural === 1280, `lightbox: ${lb.src} (${lb.natural}px)`);
      check(!p.errors.length, `galeri konsol: ${p.errors.join(' | ')}`);
      p.close();
    }

    // katalog
    {
      const p = await openPage(cdp.port, `${base}/katalog.html`);
      const info = await p.evaluate(`(() => ({
        rows: document.querySelectorAll('main table tbody tr').length,
        tables: document.querySelectorAll('main table').length,
        styleLinks: [...document.querySelectorAll('main table a')].filter((a) => (a.getAttribute('href') || '').includes('gallery.html?q=')).length,
      }))()`);
      checks.push({ page: 'katalog.html', ...info });
      check(info.rows === 251, `katalog: ${info.rows} satır (251 bekleniyor)`);
      check(info.tables === 31, `katalog: ${info.tables} tablo (31 bekleniyor)`);
      check(info.styleLinks === 251, `katalog: ${info.styleLinks} stil bağlantısı (251 bekleniyor)`);
      check(!p.errors.length, `katalog konsol: ${p.errors.join(' | ')}`);
      p.close();
    }

    // live
    {
      const p = await openPage(cdp.port, `${base}/kit/live.html?style=game-hud`);
      const info = await p.evaluate(`(() => ({
        options: document.querySelectorAll('#styleSel option').length,
        selected: document.querySelector('#styleSel')?.value,
        fullShot: document.getElementById('fullShot')?.getAttribute('href'),
        bg: getComputedStyle(document.body).backgroundColor,
        fontsLoaded: [...document.fonts].filter((f) => f.status === 'loaded').length,
      }))()`);
      checks.push({ page: 'kit/live.html', ...info });
      check(info.options === 251, `live: ${info.options} seçenek (251 bekleniyor)`);
      check(info.selected === 'game-hud', `live: seçili stil ${info.selected}`);
      check(String(info.fullShot).includes('/styles/152-game-hud/shots/01-page.png'), `live: tam sayfa bağlantısı ${info.fullShot}`);
      check(info.bg !== 'rgb(255, 255, 255)', 'live: stil token’ları uygulanmadı (bg beyaz)');
      check(!p.errors.length, `live konsol: ${p.errors.join(' | ')}`);
      p.close();
    }
  } finally {
    await cdp.close();
    server.close();
  }

  if (VERBOSE) console.log(JSON.stringify(checks, null, 2));
  if (problems.length) {
    console.error(`✗ site duman testi: ${problems.length} sorun`);
    for (const p of problems) console.error('  - ' + p);
    process.exit(1);
  }
  const gallery = checks.find((c) => c.page === 'kit/gallery.html');
  console.log(
    `✓ site duman testi: landing + galeri ${gallery?.cards ?? '?'} kart (webp, lazy ${gallery?.lazy ?? '?'}, priority ${gallery?.priority ?? '?'}) ` +
      `+ katalog + live · konsol temiz`,
  );
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
