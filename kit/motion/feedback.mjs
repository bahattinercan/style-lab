/**
 * Mikro geri bildirim kalıpları (7).
 */
export default [
  {
    id: 'rocker-ripple',
    cat: 'Geri bildirim',
    name: 'Buton rocker + ripple',
    tech: 'CSS',
    trigger: 'basma',
    dur: '140ms',
    ease: 'ease-out',
    reduced: 'yalnız renk değişimi',
    html: `<button class="rk" type="button"><span class="rip"></span>Randevu al</button><p class="hint">tıkla (veya ↻)</p>`,
    css: `.d-rocker-ripple { display: grid; place-items: center; }
.d-rocker-ripple .rk { position: relative; overflow: hidden; font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase;
  padding: 12px 20px; border-radius: var(--radius); border: 1px solid transparent; background: var(--accent); color: var(--accent-ink); cursor: pointer;
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--bg) 30%, transparent), inset 0 -1px 0 color-mix(in srgb, var(--ink) 30%, transparent); }
.d-rocker-ripple .rk:active { transform: translateY(1px); }
.d-rocker-ripple.play .rk { animation: k-rocker 140ms ease-out; }
.d-rocker-ripple .rip { position: absolute; left: 50%; top: 50%; width: 8px; height: 8px; margin: -4px 0 0 -4px; border-radius: 50%; background: color-mix(in srgb, var(--bg) 70%, transparent); opacity: 0; }
.d-rocker-ripple.play .rip { animation: k-ripple .5s ease-out; }
.d-rocker-ripple .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }
@keyframes k-rocker { 50% { transform: translateY(1px); } }
@keyframes k-ripple { from { opacity: .55; transform: scale(1); } to { opacity: 0; transform: scale(9); } }`,
    js: `const btn = el.querySelector('.rk');
btn.onclick = () => {
  const rip = el.querySelector('.rip');
  rip.style.left = '50%';
  el.classList.remove('play'); void el.offsetWidth; el.classList.add('play');
};`,
    gsap: `btn.addEventListener('click', (e) => {
  const r = btn.getBoundingClientRect();
  gsap.fromTo(rip, { x: e.clientX - r.left, y: e.clientY - r.top, scale: 1, autoAlpha: .55 },
    { scale: 9, autoAlpha: 0, duration: .5, ease: 'power2.out' });
  gsap.fromTo(btn, { y: 0 }, { y: 1, duration: .07, yoyo: true, repeat: 1 });
});`,
  },
  {
    id: 'toast',
    cat: 'Geri bildirim',
    name: 'Toast giriş / çıkış',
    tech: 'WAAPI',
    trigger: 'olay',
    dur: '240ms',
    ease: 'cubic-bezier(.2,.9,.24,1)',
    reduced: 'toast anında belirir',
    html: `<button class="trig" type="button">bildirimi göster</button><div class="tst" role="status"><i class="bar"></i><b>Görüşme talebi alındı</b><span>2 saat içinde dönüş yapılacak.</span><em class="x">×</em></div>`,
    css: `.d-toast { display: grid; place-items: center; }
.d-toast .trig { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .14em; text-transform: uppercase; padding: 8px 12px; border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); color: var(--ink); cursor: pointer; }
.d-toast .tst { position: absolute; left: 12px; right: 12px; bottom: 12px; display: grid; grid-template-columns: 3px 1fr auto; gap: 10px; align-items: center;
  padding: 10px 12px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow);
  transform: translateY(14px); opacity: 0; pointer-events: none; }
.d-toast .tst .bar { align-self: stretch; border-radius: 2px; background: var(--accent); }
.d-toast .tst b { font-size: 11.5px; }
.d-toast .tst span { grid-column: 2; font-size: 10.5px; color: var(--ink-soft); margin-top: -6px; }
.d-toast .tst .x { grid-column: 3; grid-row: 1 / span 2; font-style: normal; color: var(--ink-faint); cursor: pointer; }
.d-toast.play .tst { animation: k-toast-in 240ms cubic-bezier(.2,.9,.24,1) both; }
@keyframes k-toast-in { from { transform: translateY(14px); opacity: 0; } to { transform: none; opacity: 1; } }`,
    js: `const tst = el.querySelector('.tst');
el.querySelector('.trig').onclick = () => {
  el.classList.remove('play'); void el.offsetWidth; el.classList.add('play');
  tst.style.pointerEvents = 'auto';
  clearTimeout(el._t);
  el._t = setTimeout(() => tst.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateY(14px)', opacity: 0 }], { duration: 200, easing: 'ease-in', fill: 'forwards' }), 2200);
};
el.querySelector('.x').onclick = () => tst.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, fill: 'forwards' });`,
    gsap: `gsap.fromTo('.tst', { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .24, ease: 'power3.out' });
gsap.to('.tst', { y: 14, autoAlpha: 0, duration: .2, delay: 2.2, ease: 'power2.in' });`,
  },
  {
    id: 'accordion-flip',
    cat: 'Geri bildirim',
    name: 'Accordion (FLIP)',
    tech: 'WAAPI',
    trigger: 'tıklama',
    dur: '280ms',
    ease: 'cubic-bezier(.2,.9,.24,1)',
    reduced: 'anında açılır',
    html: `<div class="acc"><button type="button" aria-expanded="false">Künye<span>+</span></button><div class="pan"><p>4+1 · 320 m² · 2019 · güney cephe · 2 kapalı otopark · kat mülkiyeti</p></div><button type="button" aria-expanded="false">Ödeme planı<span>+</span></button><div class="pan"><p>%30 peşinat + 12 taksit + teslimde bakiye.</p></div></div>`,
    css: `.d-accordion-flip { display: grid; place-content: center; padding: 12px; }
.d-accordion-flip .acc { width: 300px; display: flex; flex-direction: column; }
.d-accordion-flip button { display: flex; align-items: center; gap: 8px; width: 100%; padding: 10px 2px; background: none; border: 0; border-bottom: 1px solid var(--line); color: var(--ink); cursor: pointer; text-align: left; font-family: var(--font-body); font-size: 12px; }
.d-accordion-flip button span { margin-left: auto; font-family: var(--font-mono); color: var(--ink-faint); }
.d-accordion-flip .pan { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 280ms cubic-bezier(.2,.9,.24,1); }
.d-accordion-flip .pan p { overflow: hidden; margin: 0; font-size: 11px; color: var(--ink-soft); }
.d-accordion-flip .pan.open { grid-template-rows: 1fr; }
.d-accordion-flip .pan.open p { padding: 8px 0 10px; }
.d-accordion-flip button[aria-expanded="true"] span { color: var(--accent); }
.d-accordion-flip button[aria-expanded="true"] span::after { content: ''; }`,
    js: `const btns = [...el.querySelectorAll('.acc > button')];
btns.forEach((b) => {
  b.onclick = () => {
    const pan = b.nextElementSibling;
    const open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', String(open));
    b.querySelector('span').textContent = open ? '–' : '+';
    pan.classList.toggle('open', open);
  };
});`,
    gsap: `// FLIP: yükseklik değişimini ölç, tersine çevir, serbest bırak
const state = Flip.getState('.pan');
pan.classList.toggle('open');
Flip.from(state, { duration: .28, ease: 'power3.out', absolute: true, nested: true });`,
  },
  {
    id: 'form-shake-check',
    cat: 'Geri bildirim',
    name: 'Form shake + başarı tik',
    tech: 'CSS',
    trigger: 'hata / başarı',
    dur: '0.36s',
    ease: 'ease-in-out',
    reduced: 'renk + metin geri bildirimi',
    html: `<div class="fm"><label for="f1">E-posta</label><input id="f1" type="email" placeholder="ornek@kuzey.co" aria-describedby="f1h"><span id="f1h" class="hintline">geçerli bir e-posta gir</span><div class="ok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg><span>Kaydedildi</span></div></div>`,
    css: `.d-form-shake-check { display: grid; place-items: center; padding: 14px; }
.d-form-shake-check .fm { width: 240px; display: grid; gap: 5px; }
.d-form-shake-check label { font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }
.d-form-shake-check input { font-family: var(--font-body); font-size: 12px; padding: 9px 10px; border: 1px solid color-mix(in srgb, var(--ink) 22%, transparent); border-radius: var(--radius); background: var(--surface); color: var(--ink); }
.d-form-shake-check .hintline { font-size: 9.5px; color: color-mix(in srgb, var(--danger) 62%, var(--ink)); opacity: 0; transition: opacity .2s; }
.d-form-shake-check.play .fm { animation: k-shake 360ms ease-in-out; }
.d-form-shake-check.play .hintline { opacity: 1; }
.d-form-shake-check.play input { border-color: var(--danger); }
.d-form-shake-check .ok { display: flex; align-items: center; gap: 6px; opacity: 0; }
.d-form-shake-check .ok svg { width: 18px; height: 18px; fill: none; stroke: var(--ok); stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 30; stroke-dashoffset: 30; }
.d-form-shake-check.play .ok { opacity: 1; transition: opacity .2s .2s; }
.d-form-shake-check.play .ok svg { animation: k-check .4s .15s ease-out both; }
.d-form-shake-check .ok span { font-size: 10px; color: var(--ok); }
@keyframes k-shake { 10%, 90% { transform: translateX(-1px); } 20%, 80% { transform: translateX(2px); } 30%, 50%, 70% { transform: translateX(-4px); } 40%, 60% { transform: translateX(4px); } }
@keyframes k-check { to { stroke-dashoffset: 0; } }`,
    js: '',
    gsap: `gsap.timeline()
  .to('.fm', { x: 4, duration: .06, repeat: 3, yoyo: true })
  .fromTo('.ok svg', { strokeDashoffset: 30 }, { strokeDashoffset: 0, duration: .4, ease: 'power2.out' });`,
  },
  {
    id: 'skeleton-shimmer',
    cat: 'Geri bildirim',
    name: 'Skeleton shimmer',
    tech: 'CSS',
    trigger: 'yükleniyor',
    dur: '1.4s',
    ease: 'linear',
    reduced: 'statik blok',
    loop: true,
    html: `<div class="sk"><div class="l w60"></div><div class="l w80"></div><div class="box"></div><div class="l w40"></div></div>`,
    css: `.d-skeleton-shimmer { display: grid; place-items: center; }
.d-skeleton-shimmer .sk { width: 70%; display: grid; gap: 8px; }
.d-skeleton-shimmer .l, .d-skeleton-shimmer .box { position: relative; overflow: hidden; border-radius: 2px; background: color-mix(in srgb, var(--ink) 10%, transparent); }
.d-skeleton-shimmer .l { height: 9px; }
.d-skeleton-shimmer .l.w60 { width: 60%; }
.d-skeleton-shimmer .l.w80 { width: 80%; }
.d-skeleton-shimmer .l.w40 { width: 40%; }
.d-skeleton-shimmer .box { height: 54px; }
.d-skeleton-shimmer .l::after, .d-skeleton-shimmer .box::after { content: ''; position: absolute; inset: 0; transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--bg) 55%, transparent), transparent); }
.d-skeleton-shimmer.play .l::after, .d-skeleton-shimmer.play .box::after { animation: k-shimmer 1.4s linear infinite; }
@keyframes k-shimmer { to { transform: translateX(100%); } }`,
    js: '',
    gsap: `gsap.to('.sk ::after', { xPercent: 100, repeat: -1, duration: 1.4, ease: 'none' });`,
  },
  {
    id: 'switch-morph',
    cat: 'Geri bildirim',
    name: 'Switch morph (knob + renk)',
    tech: 'CSS',
    trigger: 'tıklama',
    dur: '220ms',
    ease: 'cubic-bezier(.3,1.2,.4,1)',
    reduced: 'anında geçer',
    html: `<button class="sw" type="button" role="switch" aria-checked="false" aria-label="Bildirimleri aç"><i class="knob"></i><span class="on">açık</span><span class="off">kapalı</span></button>`,
    css: `.d-switch-morph { display: grid; place-items: center; }
.d-switch-morph .sw { position: relative; width: 74px; height: 34px; border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); cursor: pointer; transition: background 220ms, border-color 220ms; }
.d-switch-morph .sw[aria-checked="true"] { background: var(--accent); border-color: transparent; }
.d-switch-morph .knob { position: absolute; left: 3px; top: 3px; width: 26px; height: 26px; border-radius: 50%; background: var(--surface); box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 22%, transparent); transition: transform 220ms cubic-bezier(.3,1.2,.4,1), border-radius 220ms; }
.d-switch-morph .sw[aria-checked="true"] .knob { transform: translateX(40px); border-radius: 30% 50% 50% 30%; }
.d-switch-morph .on, .d-switch-morph .off { position: absolute; bottom: -16px; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }
.d-switch-morph .on { left: 0; }
.d-switch-morph .off { right: 0; }`,
    js: `const sw = el.querySelector('.sw');
sw.onclick = () => sw.setAttribute('aria-checked', String(sw.getAttribute('aria-checked') !== 'true'));`,
    gsap: `gsap.to('.knob', { x: 40, duration: .22, ease: 'back.out(1.6)' });
gsap.to('.sw', { backgroundColor: 'var(--accent)', duration: .22 });`,
  },
  {
    id: 'confetti-burst',
    cat: 'Geri bildirim',
    name: 'Confetti patlaması',
    tech: 'Canvas',
    trigger: 'başarı',
    dur: '1.2s',
    ease: 'power2.out',
    reduced: 'patlama yok, sadece onay metni',
    html: `<canvas class="cv" width="600" height="380" aria-hidden="true"></canvas><div class="cf"><b>Görüşme onaylandı</b><span>takvime eklendi</span></div>`,
    css: `.d-confetti-burst .cv { position: absolute; inset: 0; width: 100%; height: 100%; }
.d-confetti-burst .cf { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; gap: 2px; }
.d-confetti-burst .cf b { font-family: var(--font-display); font-size: 17px; letter-spacing: var(--tracking); }
.d-confetti-burst .cf span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: `const cv = el.querySelector('.cv');
const ctx = cv.getContext('2d');
const dpr = Math.min(2, devicePixelRatio || 1);
cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr;
ctx.clearRect(0, 0, cv.width, cv.height);
const cs = getComputedStyle(document.body);
const accent = cs.getPropertyValue('--accent').trim() || '#1f3b2c';
const ink = cs.getPropertyValue('--ink').trim() || '#111';
const parts = Array.from({ length: 90 }, () => ({
  x: cv.width / 2, y: cv.height * 0.42,
  vx: (Math.random() - .5) * 14, vy: (Math.random() - .85) * 13,
  s: 2 + Math.random() * 4, r: Math.random() * Math.PI, vr: (Math.random() - .5) * .3,
  c: Math.random() > .5 ? accent : ink, life: 1,
}));
const t0 = performance.now();
const tick = (t) => {
  const k = (t - t0) / 1200;
  ctx.clearRect(0, 0, cv.width, cv.height);
  for (const p of parts) {
    p.vy += 0.32; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life = 1 - k;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
    ctx.globalAlpha = Math.max(0, p.life); ctx.fillStyle = p.c;
    ctx.fillRect(-p.s, -p.s / 2, p.s * 2, p.s); ctx.restore();
  }
  if (k < 1) el._raf = requestAnimationFrame(tick);
};
cancelAnimationFrame(el._raf || 0);
el._raf = requestAnimationFrame(tick);`,
    gsap: `// canvas yerine DOM parçacık: gsap.to(particle, { x, y, rotation, autoAlpha: 0, duration: 1.2, ease: 'power2.out' })`,
  },
];
