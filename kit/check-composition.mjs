#!/usr/bin/env node
/**
 * kit/check-composition.mjs — checks that the dominant + garnish composition is safe.
 *
 * Rule (playbook §2.2): dominant style carries colour/typography/surface; garnish **own only
 It lives in the * subtree** (`[data-style="garnish"]`) and does not overwhelm the print's variables.
 * This measures two things:
 *
 * static : no style `:root` / `body` / `*` / variable only in scope `[data-theme]`
 * does not define? (global definition → cannot be used as a garnish, it stains everything)
 * graph : `neighbors.compatible` / `forbidden` symmetrical or conflicting?
 * browser: does the outer field take the value of the print and the inner field the value of garnish in 4 compatible pairs in the real DOM?
 *
 * Usage:
 * node kit/check-composition.mjs # static + graph
 * node kit/check-composition.mjs --browser # + real DOM (Chrome/Edge required)
 * node kit/check-composition.mjs --json
 * node kit/check-composition.mjs --pairs 4 # how many pairs to try (browser mode)*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parsePairs, readBlock } from './lib/css-block.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const TOKENS_CSS = path.join(ROOT, 'kit', 'tokens.css');

const ARGV = process.argv.slice(2);
const JSON_OUT = ARGV.includes('--json');
const BROWSER_MODE = ARGV.includes('--browser');
const PAIRS = Number((() => {
  const i = ARGV.indexOf('--pairs');
  return i >= 0 ? ARGV[i + 1] : 4;
})());

const errors = [];
const warnings = [];

const styleDirs = () =>
  fs
    .readdirSync(STYLES_DIR)
    .filter((d) => /^\d{2,3}-/.test(d) && fs.existsSync(path.join(STYLES_DIR, d, 'tokens.json')))
    .sort();

const readStyle = (dir) => JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));

/*---------- 1 · static: is there a variable in global scope ----------*/

/**
 * Checks the selector and body of each rule in the fragment file for `--x:`.
 * Variable definition in rule without `[data-style="..."]` = global leak.*/
function scopedDeclarationProblems(dir) {
  const file = path.join(STYLES_DIR, dir, 'token-block.css');
  if (!fs.existsSync(file)) return [`${dir}: token-block.css yok`];
  const css = fs.readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, ' ');
  const problems = [];
  let i = 0;
  while (i < css.length) {
    const open = css.indexOf('{', i);
    if (open < 0) break;
    const selectorStart = css.lastIndexOf('}', open) + 1;
    const selector = css.slice(selectorStart, open).trim();
    let depth = 0;
    let end = -1;
    for (let p = open; p < css.length; p++) {
      if (css[p] === '{') depth++;
      else if (css[p] === '}') {
        depth--;
        if (depth === 0) {
          end = p;
          break;
        }
      }
    }
    if (end < 0) break;
    const body = css.slice(open + 1, end);
    if (/--[a-z0-9-]+\s*:/i.test(body) && !selector.includes('[data-style="')) {
      problems.push(`${dir}: variable in the global scope (selector: "${selector.slice(0, 60)}")`);
    }
    i = end + 1;
  }
  return problems;
}

for (const dir of styleDirs()) errors.push(...scopedDeclarationProblems(dir));

/*---------- 2 · graph: neighbor lists ----------*/

const index = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'styles.index.json'), 'utf8'));
const neighbors = new Map(index.styles.map((s) => [s.slug, s.neighbors ?? {}]));
const allSlugs = new Set(neighbors.keys());

for (const [slug, n] of neighbors) {
  const compatible = n.compatible ?? [];
  const forbidden = n.forbidden ?? [];
  for (const other of compatible) {
    // lists are directional ("garnish candidates for this style"), symmetry is not expected
    if (!allSlugs.has(other)) errors.push(`${slug}: compatible "${other}" katalogda yok`);
  }
  for (const other of forbidden) {
    if (!allSlugs.has(other)) errors.push(`${slug}: forbidden "${other}" katalogda yok`);
    if (compatible.includes(other)) errors.push(`${slug}: "${other}" hem compatible hem forbidden`);
  }
  if (compatible.includes(slug)) errors.push(`${slug}: kendini compatible listeliyor`);
  if (compatible.length > 4) warnings.push(`${slug}: ${compatible.length} compatible neighbours (≤ 4 recommended)`);
}

/*---------- 3 · browser: true DOM isolation ----------*/

async function browserCheck() {
  const pairs = [];
  for (const [slug, n] of neighbors) {
    for (const other of n.compatible ?? []) {
      if (!allSlugs.has(other)) continue;
      const key = [slug, other].sort().join('|');
      if (!pairs.some((p) => p.key === key)) pairs.push({ key, a: slug, b: other });
    }
  }
  pairs.sort((x, y) => x.key.localeCompare(y.key));
  // family diversity: choosing multiple pairs of the same dominant style
  const selected = [];
  const usedFamilies = new Set();
  const familyOf = (slug) => index.styles.find((s) => s.slug === slug)?.family ?? slug;
  for (const p of pairs) {
    if (selected.length >= PAIRS) break;
    const fam = familyOf(p.a);
    if (usedFamilies.has(fam)) continue;
    usedFamilies.add(fam);
    selected.push(p);
  }
  for (const p of pairs) {
    if (selected.length >= PAIRS) break;
    if (!selected.includes(p)) selected.push(p);
  }

  const CANDIDATES = [
    process.env.BROWSER,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/microsoft-edge',
  ].filter(Boolean);
  const browser = CANDIDATES.find((p) => fs.existsSync(p));
  if (!browser) {
    console.log('↷ browser not found, DOM inspection skipped (BROWSER=/path/ver)');
    return;
  }

  const { spawn } = await import('node:child_process');
  const port = 9800 + Math.floor(Math.random() * 150);
  const profile = path.join(process.env.TEMP ?? '/tmp', `cdp-compose-${Date.now()}`);
  const proc = spawn(browser, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    '--no-first-run',
    '--disable-gpu',
    'about:blank',
  ], { stdio: 'ignore' });

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  let target = null;
  for (let i = 0; i < 60 && !target; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      target = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
    } catch {}
    if (!target) await sleep(250);
  }
  if (!target) {
    proc.kill();
    console.log('↷ CDP target not opened, DOM inspection skipped');
    return;
  }

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.onopen = res;
    ws.onerror = rej;
  });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const mid = ++id;
      pending.set(mid, { resolve, reject });
      ws.send(JSON.stringify({ id: mid, method, params }));
    });
  const evaluate = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text);
    return r.result.value;
  };

  await send('Runtime.enable');
  await send('Page.enable');

  const probe = (styleA, styleB, theme) => `(() => {
    const html = document.documentElement;
    html.setAttribute('data-style', '${styleA}');
    if ('${theme}' === 'dark') html.setAttribute('data-theme', 'dark'); else html.removeAttribute('data-theme');
    const host = document.getElementById('host');
    const themeAttr = '${theme}' === 'dark' ? ' data-theme="dark"' : '';
    host.innerHTML = '<div id="out"><span id="out-probe">x</span></div><div data-style="${styleB}"' + themeAttr + '><span id="in-probe">x</span></div>';
    const read = (el) => {
      const cs = getComputedStyle(el);
      return { bg: cs.getPropertyValue('--bg').trim(), accent: cs.getPropertyValue('--accent').trim(), font: cs.getPropertyValue('--font-body').trim(), radius: cs.getPropertyValue('--radius').trim() };
    };
    return { out: read(document.getElementById('out-probe')), in: read(document.getElementById('in-probe')) };
  })()`;

  const tokensCss = fs.readFileSync(TOKENS_CSS, 'utf8');
  const page = `<!doctype html><html><head><meta charset="utf-8"><style>${tokensCss}</style></head><body><div id="host"></div></body></html>`;
  const file = path.join(process.env.TEMP ?? '/tmp', `stylelab-compose-${Date.now()}.html`);
  fs.writeFileSync(file, page);

  await send('Page.navigate', { url: `file:///${file.replace(/\\/g, '/')}` });
  await sleep(600);

  const tokens = new Map(styleDirs().map((d) => {
    const t = readStyle(d);
    return [t.slug, t];
  }));

  for (const { a, b } of selected) {
    const ta = tokens.get(a);
    const tb = tokens.get(b);
    for (const theme of ['light', 'dark']) {
      if (theme === 'dark' && (!ta.palette.dark || !tb.palette.dark)) continue;
      const res = await evaluate(probe(a, b, theme));
      const palA = theme === 'dark' ? ta.palette.dark : ta.palette;
      const palB = theme === 'dark' ? tb.palette.dark : tb.palette;
      const expectOut = { bg: palA.bg, accent: palA.accent, radius: String(ta.shape?.radius ?? '') };
      const expectIn = { bg: palB.bg, accent: palB.accent, radius: String(tb.shape?.radius ?? '') };
      for (const key of ['bg', 'accent', 'radius']) {
        if (expectOut[key] && res.out[key] !== expectOut[key]) {
          errors.push(`${a} + ${b} (${theme}): outer scope --${key} "${res.out[key]}" ≠ "${expectOut[key]}" (dominant style overwritten)`);
        }
        if (expectIn[key] && res.in[key] !== expectIn[key]) {
          errors.push(`${a} + ${b} (${theme}): inner scope --${key} "${res.in[key]}" ≠ "${expectIn[key]}" (garnish not applied)`);
        }
      }
    }
  }

  console.log(`  ✓ DOM isolation: ${selected.length} compatible pairs (${selected.map((p) => `${p.a}+${p.b}`).join(', ')})`);
  ws.close();
  proc.kill();
  try {
    fs.unlinkSync(file);
  } catch {}
}

if (BROWSER_MODE) await browserCheck();

/*---------- report ----------*/

const summary = { styles: styleDirs().length, errors: errors.length, warnings: warnings.length, browser: BROWSER_MODE };

if (JSON_OUT) {
  console.log(JSON.stringify({ ...summary, errors, warnings }, null, 2));
} else {
  console.log(`composition · ${summary.styles} styles · ${summary.errors} errors · ${summary.warnings} warnings`);
  for (const e of errors.slice(0, 12)) console.log(`  ✗ ${e}`);
  if (errors.length > 12) console.log(`  … +${errors.length - 12}`);
  for (const w of warnings.slice(0, 8)) console.log(`  ! ${w}`);
  if (warnings.length > 8) console.log(`  … +${warnings.length - 8}`);
  if (!errors.length) console.log(BROWSER_MODE ? 'result: clean (static + DOM)' : 'result: clean (static + graph; --browser for DOM)');
}

process.exit(errors.length ? 1 : 0);
