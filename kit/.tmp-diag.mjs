import { launch } from 'file:///C:/Orca/style-lab/kit/render/cdp-browser.mjs';

const browser = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const cdp = await launch({ browserPath: browser, tabs: 1 });
const file = 'C:/Orca/style-lab/kit/render/.tmp-game-retro-console-page.html';
const expr = `(() => {
  const out = [];
  for (const sel of ['body','.nav','.hero','.hero-copy','.hero-visual','main.pg','.pg-sec','.pg-band','.pg-cta','.pg-foot']) {
    const el = document.querySelector(sel);
    if (!el) { out.push([sel,'MISSING']); continue; }
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    out.push([sel, Math.round(r.top), Math.round(r.height), cs.display, cs.visibility, cs.opacity, cs.color]);
  }
  const de = document.documentElement;
  return JSON.stringify({ scrollHeight: de.scrollHeight, clientHeight: de.clientHeight, zoom: document.body.style.zoom, out });
})()`;
const res = await cdp.evaluate(file, { width: 1280, height: 2400, expression: expr });
console.log(res);
await cdp.close();
