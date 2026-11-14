import { launch } from 'file:///C:/Orca/style-lab/kit/render/cdp-browser.mjs';
const cdp = await launch({ browserPath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', tabs: 1 });
const expr = `(() => {
  const w = document.documentElement.clientWidth;
  const out = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.right > w + 0.5 || r.left < -0.5) out.push([el.tagName + '.' + (el.className || '').toString().slice(0,40), Math.round(r.left), Math.round(r.right)]);
  }
  return JSON.stringify({ w, scrollWidth: document.documentElement.scrollWidth, out: out.slice(0, 10) });
})()`;
const res = await cdp.evaluate('C:/Orca/style-lab/kit/render/.tmp-zero-gravity-page.html', { width: 1280, height: 2400, expression: expr });
console.log(res);
await cdp.close();
