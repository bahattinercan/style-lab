/**
 * kit/render/cdp-browser.mjs — tek tarayıcı, çok sekme, çok kare (CDP, bağımlılıksız).
 *
 * Neden: eski yol her kare için `chrome --screenshot` başlatıyordu (kare başına yeni profil
 * + tarayıcı açılışı). Ölçüm (16 kare): eski yol 8.2 s @4 paralel; tek sekmeli CDP 18.6 s
 * (seri). Bu dosya sekmeleri paralel çalıştırır: N sekme ≈ N× yakalama, tek tarayıcı süreci.
 * Ayrıca PNG'ye ek olarak **WebP** yakalanabilir (thumbnail: 126 KB → 31 KB, ~4×).
 *
 * Determinizm: `--virtual-time-budget` yerine animasyonları dondurma. Sayfa yüklendikten
 * sonra `document.getAnimations()` üzerinden tüm animasyon/geçişler `freezeAtMs`'e konup
 * duraklatılır → sonsuz animasyonlu sahneler (skeleton shimmer, marquee, fluid drift) her
 * koşuda aynı kareyi verir.
 *
 * API:
 *   const b = await launch({ tabs: 4 });
 *   const png  = await b.capture(filePath, { width, height });
 *   const webp = await b.capture(filePath, { width, height, format: 'webp', quality: 88 });
 *   await b.close();
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CANDIDATES = [
  process.env.BROWSER,
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/google-chrome',
  '/usr/bin/microsoft-edge',
].filter(Boolean);

export function findBrowser() {
  for (const p of CANDIDATES) if (fs.existsSync(p)) return p;
  throw new Error('Chromium tabanlı tarayıcı bulunamadı; BROWSER=/yol/tarayici ver');
}

/** TEMP'te 1 saatten eski `cdp-*` profillerini arka planda siler (beklemeden). */
function sweepOldProfiles() {
  const temp = process.env.TEMP ?? '/tmp';
  let entries = [];
  try {
    entries = fs.readdirSync(temp).filter((f) => f.startsWith('cdp-'));
  } catch {
    return;
  }
  const cutoff = Date.now() - 60 * 60 * 1000;
  for (const name of entries) {
    const dir = path.join(temp, name);
    try {
      if (fs.statSync(dir).mtimeMs < cutoff) setImmediate(() => rmQuiet(dir));
    } catch {
      /* yarış: dizin bu arada silinmiş olabilir */
    }
  }
}

function rmQuiet(target) {
  try {
    fs.rmSync(target, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  } catch {
    /* profil silinemezse zararsız */
  }
}

/** Tek sekme: CDP oturumu + istek/eşleme tabloları. */
function makeTab(wsUrl, timeoutMs) {
  const ws = new WebSocket(wsUrl);
  const tab = { ws, timeoutMs, pending: new Map(), waiters: new Map(), nextId: 0 };

  tab.send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++tab.nextId;
      tab.pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
      setTimeout(() => {
        if (tab.pending.delete(id)) reject(new Error(`CDP zaman aşımı: ${method}`));
      }, timeoutMs);
    });

  tab.once = (method) =>
    new Promise((resolve) => {
      if (!tab.waiters.has(method)) tab.waiters.set(method, []);
      tab.waiters.get(method).push(resolve);
    });

  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && tab.pending.has(msg.id)) {
      const { resolve, reject } = tab.pending.get(msg.id);
      tab.pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      return;
    }
    if (msg.method) {
      const list = tab.waiters.get(msg.method);
      if (list?.length) list.shift()(msg.params);
    }
  });

  tab.ready = new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  return tab;
}

export async function launch({ profileDir, browserPath, timeoutMs = 30_000, tabs = 4, keepProfile = true } = {}) {
  const browser = browserPath ?? findBrowser();
  // Profil HER KOŞUDA YENİ + TEMP'te: repo içinde oluşturmak Windows Defender taramasıyla
  // ~30 s'ye çıkıyor; profili yeniden kullanmak da önceki Chrome kapanırken kilit sorunu
  // yaratıyor. Silme pahalı olduğu için varsayılan: bırak (eski profiller arka planda süpürülür).
  const profile = profileDir ?? path.join(process.env.TEMP ?? '/tmp', `cdp-${process.pid}-${Date.now()}`);
  sweepOldProfiles();
  fs.mkdirSync(profile, { recursive: true });

  const proc = spawn(
    browser,
    [
      '--headless=new',
      ...(process.platform === 'linux' ? ['--no-sandbox', '--disable-dev-shm-usage'] : []),
      '--disable-gpu',
      '--hide-scrollbars',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-extensions',
      '--disable-sync',
      // arka plan sekmeleri: büyük fotoğraflı sayfalarda capture'ın askıda kalmaması için
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--disable-background-timer-throttling',
      '--force-device-scale-factor=1',
      '--remote-debugging-port=0',
      '--allow-file-access-from-files',
      `--user-data-dir=${profile}`,
      'about:blank',
    ],
    { stdio: 'ignore', windowsHide: true },
  );

  // Port: <profile>/DevToolsActivePort ilk satır
  const portFile = path.join(profile, 'DevToolsActivePort');
  const deadline = Date.now() + timeoutMs;
  let port = null;
  while (Date.now() < deadline) {
    if (fs.existsSync(portFile)) {
      // Chrome dosyayı yazarken okuma EBUSY/EPERM verebilir: kısa süre yeniden dene
      let first = '';
      try {
        first = fs.readFileSync(portFile, 'utf8').split(String.fromCharCode(10))[0].trim();
      } catch (err) {
        if (!['EBUSY', 'EPERM', 'EACCES'].includes(err.code)) throw err;
        await sleep(60);
        continue;
      }
      if (/^[0-9]+$/.test(first)) {
        port = Number(first);
        break;
      }
    }
    await sleep(50);
  }
  if (!port) {
    proc.kill();
    throw new Error('CDP portu açılmadı (DevToolsActivePort yok)');
  }

  /** Sekme websocket adresleri: ilki mevcut about:blank, kalanı /json/new ile. */
  async function targetUrls(count) {
    const urls = [];
    for (let i = 0; i < count; i += 1) {
      let ws = null;
      const until = Date.now() + timeoutMs;
      while (Date.now() < until && !ws) {
        try {
          if (i === 0) {
            const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
            ws = list.find((t) => t.type === 'page')?.webSocketDebuggerUrl ?? null;
          } else {
            const res = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' });
            if (res.ok) ws = (await res.json()).webSocketDebuggerUrl ?? null;
          }
        } catch {
          /* tarayıcı hazır değil */
        }
        if (!ws) await sleep(50);
      }
      if (!ws) throw new Error(`CDP sekmesi ${i} açılamadı`);
      urls.push(ws);
    }
    return urls;
  }

  const urls = await targetUrls(Math.max(1, tabs));
  const clients = urls.map((u) => makeTab(u, timeoutMs));
  for (const tab of clients) {
    await tab.ready;
    await tab.send('Page.enable');
    await tab.send('Runtime.enable');
  }

  const free = [...clients];
  const waiting = [];
  const fileUrl = (p) => 'file:///' + path.resolve(p).replace(/\\/g, '/');
  let closed = false;

  /** Sayfayı yükler, fontları bekler; freeze ise animasyonları sabit ana kareye dondurur. */
  async function prepare(tab, target, opts = {}) {
    const { width = 1280, height = 900, freezeAtMs = 4000, query = '', reducedMotion = null, freeze = true } = opts;
    await tab.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false, screenWidth: width, screenHeight: height });
    await tab.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: reducedMotion ?? 'no-preference' }] }).catch(() => {});
    const loaded = tab.once('Page.loadEventFired');
    await tab.send('Page.navigate', { url: fileUrl(target) + (query ? `?${query}` : '') });
    await Promise.race([loaded, sleep(15_000)]);
    for (let i = 0; i < 60; i += 1) {
      const r = await tab.send('Runtime.evaluate', { expression: 'document.fonts ? document.fonts.status : "loaded"', returnByValue: true }).catch(() => null);
      if (r?.result?.value === 'loaded') break;
      await sleep(30);
    }
    if (freeze) {
      await tab.send('Runtime.evaluate', { expression: `(() => { for (const a of document.getAnimations()) { try { a.currentTime = ${freezeAtMs}; a.pause(); } catch {} } return document.getAnimations().length; })()` }).catch(() => {});
      await sleep(30);
    }
    return tab;
  }

  /** Görüntü yakalar (PNG/WebP). Boş/yarım kare (paint yarışı) 3 kez yeniden denenir. */
  async function captureOn(tab, target, opts = {}) {
    const { format = 'png', quality = 88 } = opts;
    const area = (opts.width ?? 1280) * (opts.height ?? 900);
    const auto = format === 'png' ? (area > 300_000 ? 12_000 : 4_000) : 2_500;
    // CDP_MIN_BYTES: test/kıyas için eşiği geçersiz kılar (yeniden deneme yolunu kanıtlamak için)
    const minBytes = Number(process.env.CDP_MIN_BYTES) || auto;
    let last = null;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      await prepare(tab, target, opts);
      // fotoğraflı sayfalarda arka sekme compositing'i askıya alabiliyor: yakalamadan önce öne al
      await tab.send('Page.bringToFront').catch(() => {});
      const shot = await tab.send('Page.captureScreenshot', {
        format,
        ...(format === 'png' ? {} : { quality }),
        captureBeyondViewport: false,
        fromSurface: true,
      });
      last = Buffer.from(shot.data, 'base64');
      if (last.length >= minBytes) return last;
      await sleep(150);
    }
    process.emitWarning(`boş kare: ${path.basename(String(target))} (${last?.length ?? 0} B) — 3 deneme`);
    return last;
  }

  /** Yükle → ifadeyi çalıştır (animasyon anını ayarla) → aynı sayfada yakala. */
  async function captureEval(tab, target, opts = {}) {
    const { expression, format = 'png', quality = 88 } = opts;
    await prepare(tab, target, { ...opts, freeze: false });
    if (expression) await tab.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    const shot = await tab.send('Page.captureScreenshot', { format, ...(format === 'png' ? {} : { quality }), captureBeyondViewport: false, fromSurface: true });
    return Buffer.from(shot.data, 'base64');
  }
  /** İfade değerlendirir (dondurma yok — çalışma zamanı ölçümü). */
  async function evaluateOn(tab, target, opts = {}) {
    const { expression, awaitPromise = true } = opts;
    await prepare(tab, target, { ...opts, freeze: opts.freeze === true });
    const res = await tab.send('Runtime.evaluate', { expression, awaitPromise, returnByValue: true });
    if (res?.exceptionDetails) throw new Error(res.exceptionDetails.text ?? 'değerlendirme hatası');
    return res?.result?.value;
  }
  /** Boş sekme al (yoksa bekle), yakala, iade et. */
  async function capture(target, opts = {}) {
    const tab = free.length ? free.pop() : await new Promise((resolve) => waiting.push(resolve));
    try {
      return await captureOn(tab, target, opts);
    } finally {
      const next = waiting.shift();
      if (next) next(tab);
      else free.push(tab);
    }
  }

  async function captureWithEval(target, opts = {}) {
    const tab = free.length ? free.pop() : await new Promise((resolve) => waiting.push(resolve));
    try {
      return await captureEval(tab, target, opts);
    } finally {
      const next = waiting.shift();
      if (next) next(tab);
      else free.push(tab);
    }
  }

  async function evaluate(target, opts = {}) {
    const tab = free.length ? free.pop() : await new Promise((resolve) => waiting.push(resolve));
    try {
      return await evaluateOn(tab, target, opts);
    } finally {
      const next = waiting.shift();
      if (next) next(tab);
      else free.push(tab);
    }
  }

  async function close() {
    if (closed) return;
    closed = true;
    for (const tab of clients) {
      try {
        tab.ws.close();
      } catch {
        /* zaten kapalı */
      }
    }
    // Windows'ta proc.kill() yalnız ana süreci öldürür; alt süreçler (renderer/GPU) kalır ve
    // profili kilitleyip sonraki turu 30 s askıda bırakır. Süreç AĞACINI öldür (yalnız kendi PID'imiz).
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/PID', String(proc.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true });
    } else {
      proc.kill();
    }
    await sleep(100);
    // Profil varsayılan olarak KORUNUR: Windows'ta Chrome profil silme ~30 s sürebiliyor.
    // Temizlik için: `--clean-profile` (ya da KEEP_CDP_PROFILE=0).
    if (!keepProfile || process.env.KEEP_CDP_PROFILE === '0') rmQuiet(profile);
  }

  return { capture, captureWithEval, evaluate, close, profile, port, browser, tabs: clients.length };
}
