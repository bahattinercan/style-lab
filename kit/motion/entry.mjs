/**
 * Giriş & sayfa geçişi kalıpları (6).
 * Tüm CSS `.d-<id>` ile kapsanır; keyframe adları `k-<id>`.
 */
export default [
  {
    id: 'mask-lines',
    cat: 'Giriş',
    name: 'Satır maske reveal',
    tech: 'CSS',
    trigger: 'yüklenme / oynat',
    dur: '0.9s',
    ease: 'cubic-bezier(.16,.84,.24,1)',
    reduced: 'satırlar anında görünür (transform yok)',
    html: `<h4 class="ml"><span><i>Boğaz'da</i></span><span><i>sessiz bir</i></span><span><i>sabah.</i></span></h4><p class="cap">satır maske · 80ms stagger</p>`,
    css: `.d-mask-lines { display: grid; place-content: center; padding: 18px; }
.d-mask-lines .ml { margin: 0; font-family: var(--font-display); font-size: 30px; line-height: 1.08; letter-spacing: var(--tracking); }
.d-mask-lines .ml span { display: block; overflow: hidden; }
.d-mask-lines .ml i { display: block; font-style: normal; transform: translateY(112%); }
.d-mask-lines.play .ml span:nth-child(1) i { animation: k-mask-lines .9s cubic-bezier(.16,.84,.24,1) both; }
.d-mask-lines.play .ml span:nth-child(2) i { animation: k-mask-lines .9s .08s cubic-bezier(.16,.84,.24,1) both; }
.d-mask-lines.play .ml span:nth-child(3) i { animation: k-mask-lines .9s .16s cubic-bezier(.16,.84,.24,1) both; }
.d-mask-lines .cap { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }
@keyframes k-mask-lines { from { transform: translateY(112%); } to { transform: none; } }`,
    html2: '',
    js: '',
    gsap: `SplitText.create('.ml', { type: 'lines', mask: 'lines', onSplit(self) {
  return gsap.from(self.lines, { yPercent: 110, duration: .9, ease: 'power3.out', stagger: .08 });
} });`,
  },
  {
    id: 'char-stagger',
    cat: 'Giriş',
    name: 'Karakter stagger',
    tech: 'CSS',
    trigger: 'yüklenme / oynat',
    dur: '0.8s',
    ease: 'power3.out',
    reduced: 'kelime düz görünür',
    html: `<h4 class="cs">${[...'PREMIUM'].map((c, i) => `<span style="--i:${i}">${c}</span>`).join('')}</h4><p class="cap">harf başına 45ms · 0.8s</p>`,
    css: `.d-char-stagger { display: grid; place-content: center; }
.d-char-stagger .cs { margin: 0; font-family: var(--font-display); font-size: 44px; letter-spacing: .12em; display: flex; }
.d-char-stagger .cs span { display: block; opacity: 0; transform: translateY(14px) rotate(4deg); }
.d-char-stagger.play .cs span { animation: k-char-stagger .8s cubic-bezier(.2,.9,.24,1) both; animation-delay: calc(var(--i) * 45ms); }
.d-char-stagger .cap { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }
@keyframes k-char-stagger { from { opacity: 0; transform: translateY(14px) rotate(4deg); } to { opacity: 1; transform: none; } }`,
    js: '',
    gsap: `SplitText.create('.cs', { type: 'chars', onSplit(self) {
  return gsap.from(self.chars, { yPercent: 60, rotate: 4, autoAlpha: 0, duration: .8, ease: 'power3.out', stagger: .045 });
} });`,
  },
  {
    id: 'clip-wipe',
    cat: 'Giriş',
    name: 'Clip-path perde',
    tech: 'CSS',
    trigger: 'yüklenme / oynat',
    dur: '1.1s',
    ease: 'cubic-bezier(.7,0,.2,1)',
    reduced: 'görsel doğrudan tam kare',
    html: `<div class="win"><div class="ph"><span>18 kare</span></div><div class="ph two"><span>perde</span></div></div>`,
    css: `.d-clip-wipe { display: grid; place-items: center; }
.d-clip-wipe .win { position: relative; width: 74%; height: 74%; }
.d-clip-wipe .ph { position: absolute; inset: 0; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; display: grid; place-items: end start;
  background: linear-gradient(180deg, color-mix(in srgb, var(--ink) 46%, var(--bg)), color-mix(in srgb, var(--ink) 10%, var(--bg))); }
.d-clip-wipe .ph::after { content: ''; position: absolute; inset: auto 0 0 0; height: 34%;
  background: color-mix(in srgb, var(--ink) 55%, transparent);
  clip-path: polygon(0 46%,10% 46%,10% 26%,24% 26%,24% 54%,36% 54%,36% 14%,50% 14%,50% 40%,64% 40%,64% 24%,78% 24%,78% 50%,100% 50%,100% 100%,0 100%); }
.d-clip-wipe .ph span { position: relative; z-index: 2; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--bg); padding: 6px 8px; }
body.reduced .d-clip-wipe .ph.two { display: none; }
@media (prefers-reduced-motion: reduce) { .d-clip-wipe .ph.two { display: none; } }
.d-clip-wipe .ph.two { clip-path: inset(0 100% 0 0); background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 40%, var(--bg)), color-mix(in srgb, var(--ink) 30%, var(--bg))); }
.d-clip-wipe.play .ph.two { animation: k-clip-wipe 1.1s cubic-bezier(.7,0,.2,1) both; }
@keyframes k-clip-wipe { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }`,
    js: '',
    gsap: `gsap.fromTo('.ph.two', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'expo.inOut' });`,
  },
  {
    id: 'preloader',
    cat: 'Giriş',
    name: 'Preloader → hero devir',
    tech: 'WAAPI',
    trigger: 'yüklenme',
    dur: '1.2s',
    ease: 'expo.out',
    reduced: 'preloader atlanır, içerik direkt görünür',
    html: `<div class="load"><div class="cnt">0</div><div class="cur"></div></div><div class="hero-mini"><b>Boğaz'da</b><span>sessiz bir sabah</span></div>`,
    css: `.d-preloader { display: grid; place-items: center; }
body.reduced .d-preloader .load, body.reduced .d-preloader .cur { display: none; }
@media (prefers-reduced-motion: reduce) { .d-preloader .load, .d-preloader .cur { display: none; } }
.d-preloader .load { position: absolute; inset: 0; z-index: 3; background: var(--ink); color: var(--bg); display: grid; place-items: center; }
.d-preloader .cnt { font-family: var(--font-mono); font-size: 26px; letter-spacing: .04em; }
.d-preloader .cur { position: absolute; inset: 0; background: var(--accent); transform: scaleY(0); transform-origin: 50% 100%; }
.d-preloader .hero-mini { text-align: center; transform: translateY(10px); opacity: 0; }
.d-preloader .hero-mini b { display: block; font-family: var(--font-display); font-size: 28px; letter-spacing: var(--tracking); }
.d-preloader .hero-mini span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-faint); }
.d-preloader.play .load { animation: k-preloader-out .5s .7s cubic-bezier(.7,0,.2,1) both; }
.d-preloader.play .hero-mini { animation: k-preloader-hero .6s .75s cubic-bezier(.2,.9,.2,1) both; }
@keyframes k-preloader-out { to { transform: translateY(-102%); } }
@keyframes k-preloader-hero { to { transform: none; opacity: 1; } }`,
    js: `const cnt = el.querySelector('.cnt');
const t0 = performance.now();
const target = 100;
const tick = (t) => {
  const k = Math.min(1, (t - t0) / 700);
  cnt.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
  if (k < 1) requestAnimationFrame(tick);
};
requestAnimationFrame(tick);`,
    gsap: `gsap.timeline()
  .to('.cnt', { textContent: 100, duration: .7, snap: { textContent: 1 }, ease: 'power2.out' })
  .to('.load', { yPercent: -102, duration: .5, ease: 'expo.inOut' }, '-=.1')
  .from('.hero-mini', { y: 12, autoAlpha: 0, duration: .6 }, '-=.4');`,
  },
  {
    id: 'view-transition',
    cat: 'Giriş',
    name: 'Sayfa geçişi (View Transitions)',
    tech: 'View Transitions',
    trigger: 'tıklama / oynat',
    dur: '0.32s',
    ease: 'ease-out',
    reduced: 'cross-fade (hareket yok)',
    html: `<div class="vt"><div class="a"><span>liste</span></div><div class="b"><span>detay</span></div></div><p class="cap">document.startViewTransition · aynı doküman</p>`,
    css: `.d-view-transition { display: grid; place-items: center; }
.d-view-transition .vt { position: relative; width: 74%; height: 66%; }
.d-view-transition .a, .d-view-transition .b { position: absolute; inset: 0; border: 1px solid var(--line); border-radius: var(--radius); display: grid; place-items: center; }
.d-view-transition .a { background: var(--surface); }
.d-view-transition .b { background: var(--surface-2); opacity: 0; }
.d-view-transition .a span, .d-view-transition .b span { font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
.d-view-transition.switched .a { opacity: 0; }
.d-view-transition.switched .b { opacity: 1; }
.d-view-transition .cap { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; color: var(--ink-faint); }
.d-view-transition .a { view-transition-name: vt-a; }
.d-view-transition .b { view-transition-name: vt-b; }`,
    js: `el.classList.remove('switched');
const swap = () => el.classList.add('switched');
if (!document.startViewTransition) { swap(); return; }
void el.offsetWidth;
document.startViewTransition(swap);`,
    gsap: `// aynı doküman morph: View Transitions + view-transition-name
document.startViewTransition(() => {
  // DOM/CSS değişimi
});`,
  },
  {
    id: 'curtain-split',
    cat: 'Giriş',
    name: 'Perde ikiye ayrılma',
    tech: 'WAAPI',
    trigger: 'oynat',
    dur: '1s',
    ease: 'cubic-bezier(.7,0,.2,1)',
    reduced: 'perde yok, içerik görünür',
    html: `<div class="cur l"></div><div class="cur r"></div><div class="rev"><b>1928</b><span>boğaz yalısı</span></div>`,
    css: `.d-curtain-split { display: grid; place-items: center; }
.d-curtain-split .cur { position: absolute; top: 0; bottom: 0; width: 50%; z-index: 3; background: var(--ink); }
.d-curtain-split .cur.l { left: 0; transform-origin: 0 50%; }
.d-curtain-split .cur.r { right: 0; transform-origin: 100% 50%; }
body.reduced .d-curtain-split .cur { display: none; }
body.reduced .d-curtain-split .rev { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .d-curtain-split .cur { display: none; } .d-curtain-split .rev { opacity: 1; transform: none; } }
.d-curtain-split .rev { text-align: center; opacity: 0; transform: scale(.98); }
.d-curtain-split .rev b { display: block; font-family: var(--font-mono); font-size: 24px; font-weight: 400; }
.d-curtain-split .rev span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-faint); }
.d-curtain-split.play .cur.l { animation: k-curtain-left 1s cubic-bezier(.7,0,.2,1) both; }
.d-curtain-split.play .cur.r { animation: k-curtain-right 1s cubic-bezier(.7,0,.2,1) both; }
.d-curtain-split.play .rev { animation: k-curtain-rev .5s .45s ease-out both; }
@keyframes k-curtain-left { to { transform: translateX(-100%); } }
@keyframes k-curtain-right { to { transform: translateX(100%); } }
@keyframes k-curtain-rev { to { opacity: 1; transform: none; } }`,
    js: '',
    gsap: `gsap.timeline()
  .to('.cur.l', { xPercent: -100, duration: 1, ease: 'expo.inOut' }, 0)
  .to('.cur.r', { xPercent: 100, duration: 1, ease: 'expo.inOut' }, 0)
  .from('.rev', { scale: .98, autoAlpha: 0, duration: .5 }, .45);`,
  },
];
