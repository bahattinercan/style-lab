/**
 * kit/render/cdp-browser.mjs — single browser, multi-tab, multi-frame (CDP, dependency-free).
 *
 * Cause: old way was initializing `chrome --screenshot` per frame (new profile per frame
 * + browser opening). Measurement (16 frames): old way 8.2 s @4 parallel; single-hop CDP 18.6 s
 * (series). This file runs tabs in parallel: N tabs ≈ N× capture, single browser process.
 * **WebP** can also be captured in addition to PNG (thumbnail: 126 KB → 31 KB, ~4×).
 *
 * Determinism: Freeze animations instead of `--virtual-time-budget`. After the page loads
 * then all animations/transitions are put into `freezeAtMs` via `document.getAnimations()`
 * paused → endless animated scenes (skeleton shimmer, marquee, fluid drift) every
 * gives the same frame in the run.
 *
 * API:
 * const b = await launch({ tabs: 4 });
 * const png = await b.capture(filePath, { width, height });
 * const webp = await b.capture(filePath, { width, height, format: 'webp', quality: 88 });
 * await b.close();*/
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
  throw new Error('Chromium-based browser not found; Give BROWSER=/path/browser');
}

/** In TEMP, deletes `cdp-*` profiles older than 1 hour in the background (without waiting).*/
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
      /*race: directory may have been deleted in the meantime*/
    }
  }
}

function rmQuiet(target) {
  try {
    fs.rmSync(target, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  } catch {
    /*harmless if the profile cannot be deleted*/
  }
}

/** Single tab: CDP session + request/mapping tables.*/
function makeTab(wsUrl, timeoutMs) {
  const ws = new WebSocket(wsUrl);
  const tab = { ws, timeoutMs, pending: new Map(), waiters: new Map(), nextId: 0 };

  tab.send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++tab.nextId;
      tab.pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
      setTimeout(() => {
        if (tab.pending.delete(id)) reject(new Error(`CDP timeout: ${method}`));
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
  // Profile NEW IN EVERY RUN + TEMP: building in repo With Windows Defender scanning
  // increases to ~30 s; Reusing the profile also solves the previous Chrome lock issue when closing.
  // creates. Since deletion is expensive, default: leave (old profiles are swept into the background).
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
      // background tabs: to prevent capture from hanging on large photo pages
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

  // Port: <profile>/DevToolsActivePort first line
  const portFile = path.join(profile, 'DevToolsActivePort');
  const deadline = Date.now() + timeoutMs;
  let port = null;
  while (Date.now() < deadline) {
    if (fs.existsSync(portFile)) {
      // Chrome may give read EBUSY/EPERM while writing file: try again shortly
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
    throw new Error('CDP port not opened (no DevToolsActivePort)');
  }

  /** Tab websocket addresses: the first one is available with about:blank, the rest with /json/new.*/
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
          /*browser not ready*/
        }
        if (!ws) await sleep(50);
      }
      if (!ws) throw new Error(`could not open CDP tab ${i}`);
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

  /** Loads the page, waits for fonts; freeze freezes animations to a fixed keyframe.*/
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

  /** Captures images (PNG/WebP). Empty/half frame (paint race) is retried 3 times.*/
  /**
   * Pre-capture viewport validation: one tab in the tab pool to another frame
   * (e.g. narrow mobile view) is set, the page will be rendered at the wrong width and
   * screenshot appears empty/single column. So the metrics are reapplied and
   * Waits until innerWidth/innerHeight matches.*/
  async function ensureViewport(tab, width, height) {
    for (let i = 0; i < 4; i += 1) {
      const r = await tab
        .send('Runtime.evaluate', { expression: 'JSON.stringify([innerWidth, innerHeight])', returnByValue: true })
        .catch(() => null);
      let got = null;
      try {
        got = JSON.parse(r?.result?.value ?? 'null');
      } catch {
        got = null;
      }
      if (got && Math.abs(got[0] - width) <= 1 && Math.abs(got[1] - height) <= 1) return true;
      await tab
        .send('Emulation.setDeviceMetricsOverride', {
          width,
          height,
          deviceScaleFactor: 1,
          mobile: false,
          screenWidth: width,
          screenHeight: height,
        })
        .catch(() => {});
      await sleep(60);
    }
    return false;
  }

  /** PNG IHDR: 16..20 width, 20..24 height. If the format is not png, null.*/
  function pngSize(buf) {
    if (!buf || buf.length < 24 || buf[0] !== 0x89 || buf[1] !== 0x50) return null;
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  async function captureOn(tab, target, opts = {}) {
    const { format = 'png', quality = 88 } = opts;
    const width = opts.width ?? 1280;
    const height = opts.height ?? 900;
    const area = width * height;
    const auto = format === 'png' ? (area > 300_000 ? 12_000 : 4_000) : 2_500;
    // CDP_MIN_BYTES: overrides the threshold for testing/benchmarking (to prove the retry path)
    const minBytes = Number(process.env.CDP_MIN_BYTES) || auto;
    let last = null;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      await prepare(tab, target, opts);
      const okViewport = await ensureViewport(tab, width, height);
      // Can suspend back tab compositing on photo pages: bring to front before capturing
      await tab.send('Page.bringToFront').catch(() => {});
      const shot = await tab.send('Page.captureScreenshot', {
        format,
        ...(format === 'png' ? {} : { quality }),
        captureBeyondViewport: false,
        fromSurface: true,
      });
      last = Buffer.from(shot.data, 'base64');
      const size = pngSize(last);
      const sizeOk = !size || (size.width === width && size.height >= height - 2);
      if (!okViewport || !sizeOk) {
        process.emitWarning(`viewport mismatch: ${path.basename(String(target))} — retrying`);
        await sleep(120);
        continue;
      }
      if (last.length >= minBytes) return last;
      await sleep(150);
    }
    process.emitWarning(`blank frame: ${path.basename(String(target))} (${last?.length ?? 0} B) — 3 attempts`);
    return last;
  }

  /** Load → run expression (set animation moment) → capture on the same page.*/
  async function captureEval(tab, target, opts = {}) {
    const { expression, format = 'png', quality = 88 } = opts;
    await prepare(tab, target, { ...opts, freeze: false });
    if (expression) await tab.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    const shot = await tab.send('Page.captureScreenshot', { format, ...(format === 'png' ? {} : { quality }), captureBeyondViewport: false, fromSurface: true });
    return Buffer.from(shot.data, 'base64');
  }
  /** Expression evaluates (no freeze — runtime measurement).*/
  async function evaluateOn(tab, target, opts = {}) {
    const { expression, awaitPromise = true } = opts;
    await prepare(tab, target, { ...opts, freeze: opts.freeze === true });
    const res = await tab.send('Runtime.evaluate', { expression, awaitPromise, returnByValue: true });
    if (res?.exceptionDetails) throw new Error(res.exceptionDetails.text ?? 'evaluation error');
    return res?.result?.value;
  }
  /** Get empty tab (or wait), capture, return.*/
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
        /*already closed*/
      }
    }
    // On Windows, proc.kill() kills only the main process; child processes (renderer/GPU) remain and
    // locks the profile and suspends the next round for 30 s. Kill the process TREE (our own PID only).
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/PID', String(proc.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true });
    } else {
      proc.kill();
    }
    await sleep(100);
    // Profile is PROTECTED by default: Deleting a Chrome profile on Windows can take ~30 s.
    // For cleaning: `--clean-profile` (or KEEP_CDP_PROFILE=0).
    if (!keepProfile || process.env.KEEP_CDP_PROFILE === '0') rmQuiet(profile);
  }

  return { capture, captureWithEval, evaluate, close, profile, port, browser, tabs: clients.length };
}
