#!/usr/bin/env node
/**
 * kit/build-motion-lab.mjs — animasyon laboratuvarını üretir.
 *
 * Girdi: kit/motion/*.mjs (kategori başına demo listesi)
 * Çıktı: kit/motion-lab.html (tek dosya, bağımlılıksız; tokens.css'i kullanır)
 *
 * Kullanım:
 *   node kit/build-motion-lab.mjs           # üret
 *   node kit/build-motion-lab.mjs --check   # veri kurallarını denetle + dosya güncel mi
 *
 * Demo sözleşmesi (kit/motion/*.mjs):
 *   id        benzersiz slug (CSS kapsamı: `.d-<id>`)
 *   cat       Giriş | Scroll | İmleç | Metin | Geri bildirim | Ambiyans | İleri
 *   name      görünen ad
 *   tech      CSS | WAAPI | JS | View Transitions | SVG | WebGL | Canvas
 *   trigger   ne tetikler
 *   dur       süre (ms/s) — ambiyans dışında ≤ 1.2s
 *   ease      eğri
 *   reduced   reduced-motion karşılığı (zorunlu)
 *   html      sahne içeriği (kapsayıcı: .stage.d-<id>)
 *   css       `.d-<id>` ile kapsanmış CSS
 *   js        (ops.) fonksiyon gövdesi; `el` = sahne kökü
 *   gsap      (ops.) GSAP karşılığı — kod sekmesinde gösterilir
 *   loop      true ise sürekli animasyon (pause düğmesi zorunlu, ≤2 önerilir)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const OUT = path.join(ROOT, 'kit', 'motion-lab.html');
const CHECK = process.argv.includes('--check');

const CATS = ['Giriş', 'Scroll', 'İmleç', 'Metin', 'Geri bildirim', 'Ambiyans', 'İleri'];
const TECHS = ['CSS', 'WAAPI', 'JS', 'View Transitions', 'SVG', 'WebGL', 'Canvas'];
const FILES = ['entry', 'scroll', 'pointer', 'text', 'feedback', 'ambient', 'advanced'];

const fails = [];
const warns = [];
const F = (m) => fails.push(m);
const W = (m) => warns.push(m);

const demos = [];
for (const f of FILES) {
  const p = path.join(HERE, 'motion', `${f}.mjs`);
  if (!fs.existsSync(p)) continue;
  const mod = await import(`file://${p.replace(/\\/g, '/')}?t=${fs.existsSync(p) ? fs.statSync(p).mtimeMs : 0}`);
  const list = mod.default ?? [];
  for (const d of list) demos.push(d);
}

/* ---------- veri kuralları ---------- */
const seen = new Set();
const parseDur = (v) => {
  const m = String(v ?? '').match(new RegExp('([0-9]*[.]?[0-9]+)[ \t]*(ms|s)(?![a-z0-9])'));
  if (!m) return null;
  return m[2] === 'ms' ? Number(m[1]) / 1000 : Number(m[1]);
};
for (const d of demos) {
  if (!d.id || !/^[a-z0-9-]+$/.test(d.id)) F(`geçersiz id: ${d.id}`);
  if (seen.has(d.id)) F(`tekrarlanan id: ${d.id}`);
  seen.add(d.id);
  if (!CATS.includes(d.cat)) F(`${d.id}: bilinmeyen kategori "${d.cat}"`);
  if (!TECHS.includes(d.tech)) F(`${d.id}: bilinmeyen teknoloji "${d.tech}"`);
  if (!d.name) F(`${d.id}: ad yok`);
  if (!d.reduced) F(`${d.id}: reduced-motion karşılığı yok`);
  if (!d.trigger) F(`${d.id}: tetik yok`);
  if (!d.html) F(`${d.id}: sahne html yok`);
  if (!d.css) W(`${d.id}: css yok (sadece JS ile mi çalışıyor?)`);
  const off = (d.html + (d.css ?? '') + (d.js ?? '')).replace(/https?:\/\/www\.w3\.org\S*/g, '');
  if (/https?:\/\//.test(off)) F(`${d.id}: dış URL (offline kuralı)`);
  if (/\binfinite\b/.test(d.css ?? '') && !d.loop) F(`${d.id}: sonsuz animasyon ama loop=true değil`);
  const dur = parseDur(d.dur);
  const nonTime = /^(scrub|linear|döngü)/i.test(String(d.dur));
  if (d.js) {
    try { new Function('el', d.js); } catch (e) { F(`${d.id}: js sözdizimi — ${e.message}`); }
  }
  if (dur === null && !nonTime) F(`${d.id}: süre okunamadı ("${d.dur}")`);
  else if (dur !== null && !d.loop && dur > 1.2) F(`${d.id}: süre ${d.dur} > 1.2s (UI bütçesi)`);
}

/* ---------- politika kapısı (kit/motion/policy.json) ---------- */
const POLICY_PATH = path.join(HERE, 'motion', 'policy.json');
if (!fs.existsSync(POLICY_PATH)) {
  F('kit/motion/policy.json yok — hareket politikası tek kaynak olmalı');
} else {
  const policy = JSON.parse(fs.readFileSync(POLICY_PATH, 'utf8'));
  const teaching = policy.teachingOnly ?? {};
  const ids = new Set(demos.map((d) => d.id));
  for (const [id, reason] of Object.entries(teaching)) {
    if (!ids.has(id)) F(`policy.teachingOnly.${id}: lab'da böyle bir demo yok (ölü kayıt)`);
    if (String(reason).trim().length < 20) F(`policy.teachingOnly.${id}: gerekçe çok kısa`);
  }
  for (const rule of policy.forbidden ?? []) {
    if (!rule.id || !rule.reason || !rule.demospattern) {
      F(`policy.forbidden: eksik alan (${JSON.stringify(rule)})`);
      continue;
    }
    const re = new RegExp(`^(${rule.demospattern})$`);
    const hits = demos.filter((d) => re.test(d.id));
    for (const d of hits) {
      if (!teaching[d.id]) {
        F(`${d.id}: "${rule.id}" politikada yasak ama teachingOnly gerekçesi yok (policy.json)`);
      }
    }
    if (!hits.length) W(`policy "${rule.id}": lab'da eşleşen demo yok (desen sergilenmiyor)`);
  }
  // playbook metni politika dosyasını işaret etmeli (tek kaynak)
  const playbook = path.join(ROOT, 'playbook.md');
  if (fs.existsSync(playbook) && !fs.readFileSync(playbook, 'utf8').includes('kit/motion/policy.json')) {
    F('playbook.md §6.1 yasak listesi kit/motion/policy.json dosyasını işaret etmiyor');
  }
}

/* ---------- M5: lab ↔ katalog bağı ---------- */
const BINDINGS_PATH = path.join(HERE, 'render', 'motion', 'lab-bindings.json');
const PATTERNS_PATH = path.join(HERE, 'render', 'motion', 'patterns.json');
if (!fs.existsSync(BINDINGS_PATH)) {
  F('kit/motion/lab-bindings.json yok — her desenin lab demosu olmalı (M5)');
} else {
  const bindings = JSON.parse(fs.readFileSync(BINDINGS_PATH, 'utf8')).bindings ?? {};
  const patternIds = fs.existsSync(PATTERNS_PATH)
    ? JSON.parse(fs.readFileSync(PATTERNS_PATH, 'utf8')).patterns.map((p) => p.id)
    : [];
  const demoIds = new Set(demos.map((d) => d.id));
  for (const id of patternIds) {
    const list = bindings[id];
    if (!list?.length) F(`lab-bindings: desen "${id}" için demo bağı yok`);
    else {
      for (const demo of list) {
        if (!demoIds.has(demo)) F(`lab-bindings: "${id}" → "${demo}" lab'da yok`);
      }
    }
  }
  for (const [id, list] of Object.entries(bindings)) {
    if (patternIds.length && !patternIds.includes(id)) F(`lab-bindings: "${id}" patterns.json'da yok (ölü bağ)`);
    if (!Array.isArray(list) || !list.length) F(`lab-bindings: "${id}" boş liste`);
  }
}

const loops = demos.filter((d) => d.loop);
if (loops.length > 12) W(`sürekli animasyon ${loops.length} adet — sayfa başına ≤2 önerilir`);

/* ---------- süre bağlama (M5b): demo süreleri stilin hareket token'ına bağlanır ----------
 * Sayfa `--mdspeed` (stilin enter süresi / 900ms) ile ölçeklenir. Demo CSS'inde süre
 * literalleri `calc(var(--mdspeed, 1) * 0.9s)` biçimine sarılır; JS demolarında
 * `duration: 900` → `duration: Math.round(900 * mdspeed())` olur.
 */
const TIME_RE = /(?<![\w-])(\d*\.?\d+)(m?s)\b/g;
const bindTimes = (str) =>
  String(str ?? '').replace(TIME_RE, (_m, num, unit) => `calc(var(--mdspeed, 1) * ${num}${unit})`);
const bindJs = (str) =>
  String(str ?? '')
    .replace(/duration:\s*(\d+(?:\.\d+)?)/g, (_m, n) => `duration: Math.round(${n} * mdspeed())`)
    .replace(/delay:\s*(\d+(?:\.\d+)?)/g, (_m, n) => `delay: Math.round(${n} * mdspeed())`);

const unbound = demos.filter((d) => {
  const has = /\d*\.?\d+m?s\b/.test(d.css ?? '') || /duration:\s*\d/.test(d.js ?? '');
  if (!has) return false;
  const boundCss = bindTimes(d.css ?? '');
  const boundJs = bindJs(d.js ?? '');
  return !/--mdspeed/.test(boundCss) && !/mdspeed\(\)/.test(boundJs);
});
if (unbound.length) F(`süre bağlanmayan demo: ${unbound.map((d) => d.id).join(', ')}`);

/* ---------- stil süre haritası (M5b): her stilin enter süresi → hız çarpanı ---------- */
const STYLES_DIR = path.join(ROOT, 'styles');
const BASE_MS = 900;
const msOf = (v, fb) => {
  const m = String(v ?? '').match(new RegExp('([0-9]*[.]?[0-9]+)[ \t]*(ms|s)(?![a-z0-9])'));
  if (!m) return fb;
  const n = parseFloat(m[1]);
  return m[2] === 's' ? n * 1000 : n;
};
const SPEED_MAP = {};
for (const d of fs.existsSync(STYLES_DIR) ? fs.readdirSync(STYLES_DIR) : []) {
  const f = path.join(STYLES_DIR, d, 'tokens.json');
  if (!fs.existsSync(f)) continue;
  const t = JSON.parse(fs.readFileSync(f, 'utf8'));
  const enterMs = msOf(t.motion?.sequences?.enter?.duration, msOf(t.motion?.base, BASE_MS));
  SPEED_MAP[t.slug ?? d.replace(/^\d+-/, '')] = Math.min(2.4, Math.max(0.4, enterMs / BASE_MS));
}
if (!Object.keys(SPEED_MAP).length) F('stil süre haritası boş — tokens.json bulunamadı');
const speedVals = Object.values(SPEED_MAP);
if (new Set(speedVals.map((v) => v.toFixed(2))).size < 8) {
  F('stil süre haritası tekdüze — en az 8 farklı hız çarpanı beklenir');
}

/* ---------- üretim ---------- */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function card(d, i) {
  // Tetik "oynat" değilse OYNAT tek başına görünür sonuç üretmez: tıklama/sürüklemede
  // etkileşimi kendimiz tetikleriz, imleçte düğme dürüst etiketlenir (sentetik olay :hover'ı açmaz).
  const trigger = String(d.trigger ?? '');
  const pointer = /imleç|hover|fare|üzerine|mousemove|pointer|mouse/i.test(trigger);
  const alsoPlay = /oynat|otomatik|yükleme|tıklama|scroll|kaydır/i.test(trigger);
  const click = /tıklama|sürükle|yatay|kaydır/i.test(trigger) && !pointer;
  const pointerOnly = pointer && !alsoPlay;
  const playLabel = pointerOnly ? 'imleçle dene' : '↻ oynat';
  const playHint = pointerOnly
    ? `${esc(d.name)} imleç hareketiyle çalışır — kartın üzerine gelin`
    : `${esc(d.name)} animasyonunu oynat`;
  return `
    <article class="demo-card" data-cat="${esc(d.cat)}" data-demo="${d.id}" data-tech="${esc(d.tech)}"
             data-trigger="${pointerOnly ? 'pointer' : click ? 'click' : 'play'}"
             data-search="${esc((d.id + ' ' + d.name + ' ' + d.cat + ' ' + d.tech + ' ' + d.trigger).toLowerCase())}">
      <header>
        <span class="idx">${String(i + 1).padStart(2, '0')}</span>
        <h3>${esc(d.name)}</h3>
        <span class="badge">${esc(d.cat)}</span>
      </header>
      <p class="meta"><b>${esc(d.tech)}</b> · ${esc(d.trigger)} · ${esc(d.dur)} · ${esc(d.ease)}${d.loop ? ' · döngü' : ''}</p>
      <div class="stage d-${d.id}">${d.html}</div>
      <div class="row">
        <button class="play" type="button" data-play="${d.id}" aria-label="${playHint}">${playLabel}</button>
        ${d.loop ? `<button class="pause" type="button" data-pause="${d.id}" aria-pressed="false" aria-label="${esc(d.name)} döngüsünü duraklat">❙❙ duraklat</button>` : ''}
        <details class="code">
          <summary>kod</summary>
          <div class="code-body">
            <div class="code-tabs">
              <b>CSS</b><pre>${esc(bindTimes(d.css ?? ''))}</pre>
              ${d.js ? `<b>JS</b><pre>${esc(bindJs(d.js))}</pre>` : ''}
              ${d.gsap ? `<b>GSAP</b><pre>${esc(d.gsap)}</pre>` : ''}
            </div>
          </div>
        </details>
      </div>
      <p class="reduced"><b>reduced-motion:</b> ${esc(d.reduced)}</p>
    </article>`;
}

const css = demos.map((d) => bindTimes(d.css)).filter(Boolean).join('\n\n');
const runners = demos
  .filter((d) => d.js)
  .map(
    (d) =>
      `  ${JSON.stringify(d.id)}: (el) => {` +
      "  const mdspeed = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mdspeed')) || 1;" +
      bindJs(d.js) +
      `  },`,
  )
  .join(String.fromCharCode(10));

const html = `<!doctype html>
<html lang="tr" data-style="grand-tourer-oxblood">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Animasyon laboratuvarı · ${demos.length} kalıp</title>
<script data-style-boot>
  (() => {
    const m = location.search.match(/[?&]style=([a-z0-9-]+)/);
    if (m) document.documentElement.dataset.style = m[1];
  })();
</script>
<link rel="stylesheet" href="tokens.css">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0; background: var(--bg); color: var(--ink);
    font-family: var(--font-body); font-size: 15px; line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3 { font-family: var(--font-display); letter-spacing: var(--tracking); margin: 0; line-height: 1.1; }
  .wrap { width: min(1320px, 94vw); margin: 0 auto; padding: 26px 0 60px; }
  .bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; padding: 16px 0 14px; border-bottom: 1px solid var(--line); }
  .bar h1 { font-size: 26px; }
  .bar .sub { font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-faint); }
  .bar .grow { flex: 1; }
  .bar select, .bar button, .bar input {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
    background: var(--surface); color: var(--ink); border: 1px solid var(--line);
    border-radius: var(--radius); padding: 8px 10px; min-height: 36px; cursor: pointer;
  }
  .bar input { cursor: text; min-width: 190px; }
  .bar button[aria-pressed="true"] { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
  .bar a { font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-soft); }

  .filters { display: flex; gap: 6px; flex-wrap: wrap; padding: 14px 0 6px; }
  .filters button {
    font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase;
    padding: 6px 10px; border-radius: 2px; border: 1px solid var(--line);
    background: transparent; color: var(--ink-soft); cursor: pointer;
  }
  .filters button[aria-pressed="true"] { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
  .filters .count { margin-left: auto; align-self: center; }

  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 14px; padding-top: 14px; }
  .demo-card { border: 1px solid var(--line); border-radius: var(--radius-lg); background: var(--surface); box-shadow: var(--shadow); padding: 14px; display: flex; flex-direction: column; gap: 9px; }
  .demo-card header { display: flex; align-items: baseline; gap: 8px; }
  .demo-card h3 { font-size: 16px; }
  .demo-card .idx { font-family: var(--font-mono); font-size: 9px; color: var(--ink-faint); }
  .demo-card .badge { margin-left: auto; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; border: 1px solid var(--line); border-radius: 2px; padding: 2px 6px; color: var(--ink-soft); }
  .demo-card .meta { margin: 0; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: .06em; color: var(--ink-faint); }
  .demo-card .meta b { color: var(--ink-soft); font-weight: 400; }
  .stage { position: relative; height: 190px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-2); overflow: hidden; }
  /* imleç tetikli kalıpta düğme görünür geri bildirim verir (sentetik olay :hover açmaz) */
  .stage[data-poke] { outline: 2px dashed var(--accent); outline-offset: -2px; }
  .stage[data-poke]::after { content: 'imleci bu alanda gezdirin'; position: absolute; right: 8px; bottom: 6px; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); }
  .row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .play, .pause { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .1em; text-transform: uppercase; padding: 6px 10px; border-radius: 2px; border: 1px solid var(--line); background: var(--surface-2); color: var(--ink); cursor: pointer; min-height: 30px; }
  .play:hover, .pause:hover { background: var(--bg-2); }
  .pause[aria-pressed="true"] { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
  .code { margin-left: auto; }
  .code summary { font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-soft); cursor: pointer; }
  .code-body { position: absolute; z-index: 20; left: 0; right: 0; margin-top: 6px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg); padding: 10px; max-height: 300px; overflow: auto; box-shadow: var(--shadow); }
  .code-tabs b { display: block; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); margin: 8px 0 3px; }
  .code-tabs pre { margin: 0; font-family: var(--font-mono); font-size: 9px; line-height: 1.5; white-space: pre-wrap; color: var(--ink-soft); }
  .demo-card .reduced { margin: 0; font-size: 10.5px; color: var(--ink-faint); }
  .demo-card .reduced b { color: var(--ink-soft); font-weight: 500; }
  .demo-card[hidden] { display: none; }
  body.reduced .stage *, body.reduced .stage *::before, body.reduced .stage *::after {
    animation: none !important; transition: none !important; filter: none !important;
    transform: none !important; opacity: 1 !important; clip-path: none !important;
    offset-distance: 0% !important;
  }
  @media (prefers-reduced-motion: reduce) {
    .stage *, .stage *::before, .stage *::after {
      animation: none !important; transition: none !important; filter: none !important;
      transform: none !important; opacity: 1 !important; clip-path: none !important;
    }
  }
  body.reduced .demo-card .stage::after {
    content: 'reduced-motion: statik'; position: absolute; right: 8px; top: 8px; z-index: 30;
    font-family: var(--font-mono); font-size: 8px; letter-spacing: .1em; text-transform: uppercase;
    background: var(--ink); color: var(--bg); padding: 2px 5px; border-radius: 2px;
  }
  .ctl-group { display: inline-flex; align-items: center; gap: 7px; padding: 4px 10px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); }
  .ctl-group select { max-width: 190px; }
  .ctl-group input[type="range"] { width: 96px; }
  footer.lab { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; padding-top: 24px; border-top: 1px solid var(--line); margin-top: 26px; }
  footer.lab .mono { font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }
  footer.lab .grow { flex: 1; }
  .rm-note { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin: 10px 0 0; padding: 10px 12px;
    border: 1px solid var(--accent); border-radius: var(--radius);
    background: color-mix(in srgb, var(--accent) 10%, var(--surface)); font-size: 12px; color: var(--ink); }
  .rm-note b { font-weight: 600; }
  .rm-note button { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .1em; text-transform: uppercase; padding: 6px 10px;
    border-radius: 2px; border: 1px solid var(--accent); background: var(--accent); color: var(--accent-ink); cursor: pointer; }
  .rm-note code { font-family: var(--font-mono); font-size: 10px; }

  /* ---------- demo CSS ---------- */
${css}
</style>
</head>
<body>
<div class="wrap">
  <div class="bar">
    <h1>Animasyon laboratuvarı</h1>
    <span class="sub">${demos.length} kalıp · 7 kategori · CSS + WAAPI (0 bağımlılık)</span>
    <span class="grow"></span>
    <span class="ctl-group">
      <label class="sub" for="styleSel">stil</label>
      <select id="styleSel" aria-label="stil seç"></select>
      <label class="sub" for="speed">hız</label>
      <input id="speed" type="range" min="0.4" max="2.4" step="0.05" value="1" aria-label="hareket hızı (stilin süresine göre çarpan)">
      <output class="sub" id="speedOut">1.00×</output>
    </span>
    <input id="q" type="search" placeholder="kalıp ara…" aria-label="kalıp ara">
    <button id="reducedBtn" type="button" aria-pressed="false" title="Hareketi kapat (reduced-motion)">hareket: açık</button>
    <button id="allBtn" type="button" title="Görünür kartların hepsini sırayla oynat">hepsini oynat</button>
    <a href="gallery.html">← galeri</a>
    <a href="live.html">canlı sayfa</a>
  </div>

  <div class="rm-note" id="rmNote" hidden>
    <b>Sistemde “hareketi azalt” açık.</b>
    <span>Tüm kalıplar anında oynuyor (WCAG 2.3.3). Bu sayfada hareketi açmak için</span>
    <button type="button" id="rmEnable">hareketi aç</button>
    <span>· kalıcı: <code>?motion=full</code></span>
  </div>

  <div class="filters" role="group" aria-label="kategori filtresi">
    <button type="button" class="f" data-cat="" aria-pressed="true">tümü</button>
${CATS.map((c) => `    <button type="button" class="f" data-cat="${c}" aria-pressed="false">${c} <span class="n">${demos.filter((d) => d.cat === c).length}</span></button>`).join('\n')}
    <span class="count sub" id="count">${demos.length} kalıp</span>
  </div>

  <div class="grid" id="grid">
${demos.map(card).join('\n')}
  </div>

  <footer class="lab">
    <span class="mono">kaynak: playbook.md §6.2 · motion.data</span>
    <span class="mono">süre bütçesi: UI ≤1.2s · ambiyans döngü (pause'lu)</span>
    <span class="grow"></span>
    <a class="mono" href="live.html">sayfa reçetesi →</a>
  </footer>
</div>

<script src="live-styles.js"></script>
<script>
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* stil seçici */
  const list = window.LIVE_STYLES || [];
  const sel = $('#styleSel');
  const current = document.documentElement.dataset.style;
  for (const s of list) {
    const o = document.createElement('option');
    o.value = s.slug; o.textContent = s.num + ' · ' + s.name;
    sel.appendChild(o);
  }
  if (current) sel.value = current;
  /* M5b: stil seçimi demo sürelerini stilin token'ına bağlar (--mdspeed) */
  const LAB_SPEED = ${JSON.stringify(SPEED_MAP)};
  const speedOf = (slug) => LAB_SPEED[slug] ?? 1;
  const speed = $('#speed');
  const speedOut = $('#speedOut');
  const applySpeed = (mult) => {
    const v = Number(mult) || 1;
    document.documentElement.style.setProperty('--mdspeed', String(v));
    speed.value = String(v);
    speedOut.textContent = v.toFixed(2) + '×';
  };
  speed.addEventListener('input', () => applySpeed(speed.value));
  applySpeed(speedOf(current));

  sel.addEventListener('change', () => {
    const reduce = document.body.classList.contains('reduced');
    location.search = '?style=' + sel.value + (reduce ? '&motion=reduce' : '');
  });

  /* reduced-motion */
  const reducedBtn = $('#reducedBtn');
  const osReduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rmNote = $('#rmNote');
  const setReduced = (on, fromOs) => {
    document.body.classList.toggle('reduced', on);
    reducedBtn.setAttribute('aria-pressed', String(on));
    reducedBtn.textContent = on ? (fromOs ? 'hareket: kapalı (sistem)' : 'hareket: kapalı') : 'hareket: açık';
    rmNote.hidden = !on;
    if (on) $$('.stage').forEach((st) => st.classList.remove('play'));
  };
  const qMotion = new URLSearchParams(location.search).get('motion');
  const startReduced = qMotion === 'full' ? false : osReduce || qMotion === 'reduce';
  setReduced(startReduced, osReduce && qMotion !== 'reduce');
  reducedBtn.addEventListener('click', () => setReduced(reducedBtn.getAttribute('aria-pressed') !== 'true', false));
  $('#rmEnable').addEventListener('click', () => setReduced(false, false));

  /* ---------- demo çalıştırıcıları ---------- */
  const runners = {
${runners}
  };

  /* Kaydırmayla çalışan kalıplar OYNAT'a tepki vermiyordu: kapsayıcıyı yumuşakça kaydır. */
  const glide = (el, prop, to, ms = 700) => {
    const from = el[prop];
    const t0 = performance.now();
    if (el._glide) cancelAnimationFrame(el._glide);
    const step = (t) => {
      const k = Math.min(1, (t - t0) / ms);
      el[prop] = from + (to - from) * (1 - Math.pow(1 - k, 3));
      el.dispatchEvent(new Event('scroll'));
      el._glide = k < 1 ? requestAnimationFrame(step) : 0;
    };
    el._glide = requestAnimationFrame(step);
  };

  /* Etkileşim tetikli kalıplar: OYNAT tek başına sonuç üretmez — tetikleyiciyi kendimiz çalıştırırız.
     İmleç tetiklilerde sentetik olay CSS :hover'ı açmadığı için düğme "imleçle dene" olarak dürüst etiketlenir. */
  const nudge = (card, stage) => {
    const sc = stage.querySelector('.sc');
    if (sc && sc.scrollHeight > sc.clientHeight + 4) {
      glide(sc, 'scrollTop', Math.round((sc.scrollHeight - sc.clientHeight) * 0.85));
    }
    const rail = stage.querySelector('.rail');
    if (rail && rail.scrollWidth > rail.clientWidth + 4) {
      glide(rail, 'scrollLeft', Math.round((rail.scrollWidth - rail.clientWidth) * 0.7), 500);
    }
    if (card.dataset.trigger !== 'click') {
      if (card.dataset.trigger === 'pointer') {
        // sentetik imleç süpürmesi: JS ile sürülen kalıplar (magnetic-btn, image-trail…) tepki verir.
        // CSS :hover kalıpları sentetik olayla açılmaz — onlara görsel ipucu gösterilir.
        const r = stage.getBoundingClientRect();
        const target = stage.querySelector('.mh, button, a') || stage;
        [[-70, -30], [-25, -8], [20, 12], [65, 34]].forEach(([dx, dy], i) => {
          setTimeout(() => {
            const x = r.x + r.width / 2 + dx;
            const y = r.y + r.height / 2 + dy;
            target.dispatchEvent(new PointerEvent('pointermove', { bubbles: true, clientX: x, clientY: y }));
            target.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: x, clientY: y }));
          }, i * 80);
        });
        stage.setAttribute('data-poke', '');
        clearTimeout(stage._poke);
        stage._poke = setTimeout(() => stage.removeAttribute('data-poke'), 1200);
      }
      return;
    }
    const target = stage.querySelector('[role="switch"], .acc > button, button, .mh, a[href]');
    if (!target) return;
    // açık/kapalı bir kalıp zaten "açık" durumda kaldıysa önce kapat: OYNAT her basışta
    // geçiş animasyonunu göstersin (akordeon aria-expanded, switch aria-checked).
    const isOn = target.getAttribute('aria-expanded') === 'true' || target.getAttribute('aria-checked') === 'true';
    if (isOn) {
      target.click();
      setTimeout(() => target.click(), 320);
      return;
    }
    target.click();
  };

  const play = (id) => {
    const card = document.querySelector('[data-demo="' + id + '"]');
    if (!card) return;
    const stage = $('.stage', card);
    if (document.body.classList.contains('reduced')) {
      stage.classList.add('play');
      return;
    }
    if (typeof stage._stop === 'function') stage._stop();
    stage.classList.remove('play');
    // yeniden başlat: reflow + sınıf + JS runner
    void stage.offsetWidth;
    stage.classList.add('play');
    const run = runners[id];
    if (run) { try { run(stage); } catch (e) { console.warn(id, e); } }
    try { nudge(card, stage); } catch (e) { console.warn(id, e); }
  };

  $$('[data-play]').forEach((b) => b.addEventListener('click', () => play(b.dataset.play)));
  $$('[data-pause]').forEach((b) => {
    b.addEventListener('click', () => {
      const id = b.dataset.pause;
      const on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', String(on));
      b.textContent = on ? '▶ devam' : '❙❙ duraklat';
      const stage = document.querySelector('[data-demo="' + id + '"] .stage');
      stage.querySelectorAll('*').forEach((n) => {
        n.style.animationPlayState = on ? 'paused' : '';
      });
      stage.classList.toggle('paused', on);
      if (typeof stage._pause === 'function') stage._pause(on);
    });
  });

  /* kategori filtresi + arama */
  const cards = $$('.demo-card');
  let cat = '';
  const applyFilter = () => {
    const q = $('#q').value.trim().toLowerCase();
    let n = 0;
    for (const c of cards) {
      const okCat = !cat || c.dataset.cat === cat;
      const okQ = !q || c.dataset.search.includes(q);
      c.hidden = !(okCat && okQ);
      if (!c.hidden) n++;
    }
    $('#count').textContent = n + ' kalıp';
  };
  $$('.f').forEach((b) => b.addEventListener('click', () => {
    cat = b.dataset.cat;
    $$('.f').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    applyFilter();
  }));
  $('#q').addEventListener('input', applyFilter);

  /* hepsini oynat (sırayla) */
  $('#allBtn').addEventListener('click', () => {
    const vis = cards.filter((c) => !c.hidden);
    vis.forEach((c, i) => setTimeout(() => play(c.dataset.demo), i * 90));
  });

  /* ilk görünür kartları otomatik oynat */
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const id = e.target.dataset.demo;
      if (!e.target.dataset.seen) {
        e.target.dataset.seen = '1';
        play(id);
      }
      io.unobserve(e.target);
    }
  }, { threshold: 0.35 });
  cards.forEach((c) => io.observe(c));
})();
</script>
</body>
</html>
`;

/* ---------- yaz / denetle ---------- */
if (CHECK) {
  const prev = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  if (prev !== html) W('kit/motion-lab.html güncel değil — `node kit/build-motion-lab.mjs` çalıştır');
  if (fails.length) {
    for (const f of fails) console.log('  × ' + f);
    process.exit(1);
  }
  for (const w of warns) console.log('  ! ' + w);
  console.log(`hareket lab: ${demos.length} kalıp · ${new Set(demos.map((d) => d.cat)).size} kategori · ${fails.length} hata`);
  process.exit(warns.length ? 0 : 0);
} else {
  fs.writeFileSync(OUT, html);
  for (const w of warns) console.log('  ! ' + w);
  for (const f of fails) console.log('  × ' + f);
  console.log(`kit/motion-lab.html yazıldı · ${demos.length} kalıp · ${(html.length / 1024).toFixed(1)} KB`);
  if (fails.length) process.exit(1);
}
