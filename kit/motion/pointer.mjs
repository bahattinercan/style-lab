/**
 * Hover & imleç kalıpları (7). Tümü sahne içinde çalışır; sayfa imleci değişmez
 * (custom cursor yalnız sahne sınırında).
 */
export default [
  {
    id: 'card-hover',
    cat: 'İmleç',
    name: 'Kart hover (zoom + meta)',
    tech: 'CSS',
    trigger: 'hover',
    dur: '240ms',
    ease: 'ease-out',
    reduced: 'yalnız renk değişimi, ölçek yok',
    html: `<article class="hc"><div class="ph"></div><div class="bd"><b>Yalı Dairesi</b><span>Beşiktaş · 320 m²</span><i>₺84.500.000</i></div></article><p class="hint">üzerine gel (veya ↻)</p>`,
    css: `.d-card-hover { display: grid; place-content: center; }
.d-card-hover .hc { width: 220px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); overflow: hidden; box-shadow: var(--shadow); }
.d-card-hover .ph { height: 74px; background: linear-gradient(180deg, color-mix(in srgb, var(--ink) 34%, var(--bg)), color-mix(in srgb, var(--ink) 10%, var(--bg))); transform: scale(1); transition: transform 240ms ease-out; }
.d-card-hover .bd { padding: 8px 10px 10px; display: grid; gap: 2px; }
.d-card-hover .bd b { font-family: var(--font-display); font-size: 13px; letter-spacing: var(--tracking); }
.d-card-hover .bd span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-faint); }
.d-card-hover .bd i { font-style: normal; font-family: var(--font-mono); font-size: 11px; color: var(--ink); transform: translateY(4px); opacity: .6; transition: transform 240ms ease-out, opacity 240ms; }
.d-card-hover .hc:hover .ph, .d-card-hover.play .ph { transform: scale(1.04); }
.d-card-hover .hc:hover .bd i, .d-card-hover.play .bd i { transform: none; opacity: 1; }
.d-card-hover .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: '',
    gsap: `card.addEventListener('pointerenter', () =>
  gsap.to(card.querySelector('.ph'), { scale: 1.04, duration: .24, ease: 'power2.out' }));
card.addEventListener('pointerleave', () =>
  gsap.to(card.querySelector('.ph'), { scale: 1, duration: .24 }));`,
  },
  {
    id: 'magnetic-btn',
    cat: 'İmleç',
    name: 'Magnetic button',
    tech: 'JS',
    trigger: 'mousemove',
    dur: '180ms',
    ease: 'power2.out',
    reduced: 'buton sabit',
    html: `<div class="wrap"><button class="mag" type="button">Randevu al</button></div><p class="hint">imleci yaklaştır</p>`,
    css: `.d-magnetic-btn { display: grid; place-items: center; }
.d-magnetic-btn .wrap { display: grid; place-items: center; width: 100%; height: 100%; }
.d-magnetic-btn .mag { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; padding: 12px 20px; border-radius: var(--radius); border: 1px solid transparent; background: var(--accent); color: var(--accent-ink); cursor: pointer; will-change: transform; transition: transform 180ms cubic-bezier(.2,.9,.2,1); }
.d-magnetic-btn .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: `const btn = el.querySelector('.mag');
if (el._mm) el.removeEventListener('pointermove', el._mm);
el._mm = (e) => {
  const r = btn.getBoundingClientRect();
  const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
  const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
  btn.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
};
el.addEventListener('pointermove', el._mm);
el.onpointerleave = () => { btn.style.transform = ''; };`,
    gsap: `el.addEventListener('pointermove', (e) => {
  const r = btn.getBoundingClientRect();
  gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * .22, y: (e.clientY - r.top - r.height / 2) * .22, duration: .18, ease: 'power2.out' });
});`,
  },
  {
    id: 'cursor-blend',
    cat: 'İmleç',
    name: 'Custom cursor (blend farkı)',
    tech: 'JS',
    trigger: 'mousemove',
    dur: '120ms',
    ease: 'linear',
    reduced: 'özel imleç yok, sistem imleci',
    html: `<div class="zone"><span>sahne içinde imleç</span><i class="dot"></i></div>`,
    css: `.d-cursor-blend { display: grid; place-items: center; }
.d-cursor-blend .zone { position: relative; width: 84%; height: 70%; border: 1px dashed color-mix(in srgb, var(--ink) 26%, transparent); border-radius: var(--radius); display: grid; place-items: center; overflow: hidden; background: var(--surface); cursor: none; }
.d-cursor-blend .zone span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-faint); }
.d-cursor-blend .dot { position: absolute; left: 50%; top: 50%; width: 26px; height: 26px; margin: -13px 0 0 -13px; border-radius: 50%; background: var(--accent); mix-blend-mode: difference; transform: translate(-50%, -50%); pointer-events: none; opacity: 0; transition: opacity 120ms linear; }`,
    js: `const zone = el.querySelector('.zone');
const dot = el.querySelector('.dot');
zone.onpointerenter = () => { dot.style.opacity = '1'; };
zone.onpointerleave = () => { dot.style.opacity = '0'; };
zone.onpointermove = (e) => {
  const r = zone.getBoundingClientRect();
  dot.style.left = (e.clientX - r.left) + 'px';
  dot.style.top = (e.clientY - r.top) + 'px';
};`,
    gsap: `gsap.set(dot, { xPercent: -50, yPercent: -50 });
zone.addEventListener('pointermove', (e) => {
  const r = zone.getBoundingClientRect();
  gsap.to(dot, { x: e.clientX - r.left, y: e.clientY - r.top, duration: .12, ease: 'none' });
});`,
  },
  {
    id: 'link-draw',
    cat: 'İmleç',
    name: 'Alt çizgi çizimi',
    tech: 'SVG',
    trigger: 'hover / oynat',
    dur: '220ms',
    ease: 'ease-out',
    reduced: 'çizgi anında görünür',
    html: `<div class="wrap"><a class="lk" href="#"><span>Koleksiyonu gör</span><svg viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true"><path d="M1 6 C 40 2, 160 2, 199 6"/></svg></a></div>`,
    css: `.d-link-draw { display: grid; place-items: center; }
.d-link-draw .lk { position: relative; text-decoration: none; color: var(--ink); font-family: var(--font-display); font-size: 20px; letter-spacing: var(--tracking); }
.d-link-draw .lk svg { position: absolute; left: 0; right: 0; bottom: -6px; width: 100%; height: 8px; overflow: visible; }
.d-link-draw .lk path { fill: none; stroke: var(--accent); stroke-width: 1.6; stroke-linecap: round; stroke-dasharray: 210; stroke-dashoffset: 210; transition: stroke-dashoffset 220ms ease-out; }
.d-link-draw .lk:hover path, .d-link-draw.play path { stroke-dashoffset: 0; }`,
    js: '',
    gsap: `gsap.fromTo('.lk path', { strokeDashoffset: 210 }, { strokeDashoffset: 0, duration: .22, ease: 'power2.out' });`,
  },
  {
    id: 'tilt-3d',
    cat: 'İmleç',
    name: '3D tilt',
    tech: 'CSS',
    trigger: 'mousemove',
    dur: '200ms',
    ease: 'cubic-bezier(.2,.9,.2,1)',
    reduced: 'kart düz',
    html: `<div class="scene"><div class="plate"><b>1928</b><span>boğaz yalısı</span></div></div><p class="hint">imleci kart üstünde gezdir</p>`,
    css: `.d-tilt-3d { display: grid; place-items: center; perspective: 700px; }
.d-tilt-3d .scene { width: 66%; height: 74%; display: grid; place-items: center; }
.d-tilt-3d .plate { width: 100%; height: 100%; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow);
  display: grid; place-items: center; text-align: center; transform-style: preserve-3d; transition: transform 200ms cubic-bezier(.2,.9,.2,1); }
.d-tilt-3d .plate b { font-family: var(--font-mono); font-size: 22px; font-weight: 400; transform: translateZ(24px); }
.d-tilt-3d .plate span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-faint); transform: translateZ(14px); }
.d-tilt-3d .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: `const plate = el.querySelector('.plate');
if (el._mm) el.removeEventListener('pointermove', el._mm);
el._mm = (e) => {
  const r = el.getBoundingClientRect();
  const rx = ((e.clientY - r.top) / r.height - .5) * -14;
  const ry = ((e.clientX - r.left) / r.width - .5) * 14;
  plate.style.transform = 'rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
};
el.addEventListener('pointermove', el._mm);
el.onpointerleave = () => { plate.style.transform = ''; };`,
    gsap: `el.addEventListener('pointermove', (e) => {
  const r = el.getBoundingClientRect();
  gsap.to(plate, { rotateX: ((e.clientY - r.top) / r.height - .5) * -14, rotateY: ((e.clientX - r.left) / r.width - .5) * 14, duration: .2, ease: 'power2.out' });
});`,
  },
  {
    id: 'gooey-hover',
    cat: 'İmleç',
    name: 'Gooey birleşme (SVG filtre)',
    tech: 'SVG',
    trigger: 'hover',
    dur: '400ms',
    ease: 'ease-in-out',
    reduced: 'şekiller ayrık, filtre yok',
    html: `<svg class="defs" width="0" height="0" aria-hidden="true"><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" result="g"/><feBlend in="SourceGraphic" in2="g"/></filter></svg><div class="goo"><i class="b1"></i><i class="b2"></i><i class="b3"></i></div>`,
    css: `.d-gooey-hover { display: grid; place-items: center; }
.d-gooey-hover .goo { position: relative; width: 190px; height: 100px; filter: url(#goo); }
.d-gooey-hover i { position: absolute; top: 30px; width: 42px; height: 42px; border-radius: 50%; background: var(--accent); transition: transform 400ms ease-in-out; }
.d-gooey-hover .b1 { left: 18px; }
.d-gooey-hover .b2 { left: 74px; }
.d-gooey-hover .b3 { left: 130px; }
.d-gooey-hover .goo:hover .b2, .d-gooey-hover.play .b2 { transform: translateX(-14px) scale(1.12); }
.d-gooey-hover .goo:hover .b3, .d-gooey-hover.play .b3 { transform: translateX(-28px) scale(1.06); }`,
    js: '',
    gsap: `gsap.to('.goo .b2', { x: -14, scale: 1.12, duration: .4, ease: 'power2.inOut' });`,
  },
  {
    id: 'image-trail',
    cat: 'İmleç',
    name: 'İmleç izi (gecikmeli)',
    tech: 'JS',
    trigger: 'mousemove',
    dur: '0.6s',
    ease: 'power2.out',
    reduced: 'iz yok',
    html: `<div class="zone"><span>imleci gezdir</span>${Array.from({ length: 8 }, (_, i) => `<i style="--i:${i}"></i>`).join('')}</div>`,
    css: `.d-image-trail { display: grid; place-items: center; }
.d-image-trail .zone { position: relative; width: 86%; height: 74%; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; background: var(--surface); }
.d-image-trail .zone span { position: absolute; left: 10px; bottom: 8px; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }
.d-image-trail i { position: absolute; width: calc(10px - var(--i) * .6px); height: calc(10px - var(--i) * .6px); border-radius: 50%; background: color-mix(in srgb, var(--accent) calc(100% - var(--i) * 10%), transparent); left: 0; top: 0; opacity: 0; pointer-events: none; }`,
    js: `const zone = el.querySelector('.zone');
const dots = [...el.querySelectorAll('i')];
const pts = dots.map(() => ({ x: 0, y: 0, o: 0 }));
zone.onpointerenter = () => dots.forEach((d) => { d.style.opacity = '1'; });
zone.onpointerleave = () => dots.forEach((d) => { d.style.opacity = '0'; });
zone.onpointermove = (e) => {
  const r = zone.getBoundingClientRect();
  pts[0] = { x: e.clientX - r.left, y: e.clientY - r.top, o: 1 };
};
let raf = 0;
const loop = () => {
  for (let i = 1; i < pts.length; i++) {
    pts[i].x += (pts[i - 1].x - pts[i].x) * 0.35;
    pts[i].y += (pts[i - 1].y - pts[i].y) * 0.35;
  }
  dots.forEach((d, i) => { d.style.transform = 'translate(' + pts[i].x + 'px,' + pts[i].y + 'px)'; });
  raf = requestAnimationFrame(loop);
};
cancelAnimationFrame(el._raf || 0);
el._raf = raf;
loop();`,
    gsap: `const dots = gsap.utils.toArray('.zone i');
zone.addEventListener('pointermove', (e) => {
  const r = zone.getBoundingClientRect();
  dots.forEach((d, i) => gsap.to(d, { x: e.clientX - r.left, y: e.clientY - r.top, duration: .6, delay: i * .03, ease: 'power2.out' }));
});`,
  },
];
