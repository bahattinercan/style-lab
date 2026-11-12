/**
 * Scroll kalıpları (9). Her demo kendi iç kaydırıcısında çalışır (`.sc`);
 * ilerleme `--p` (0→1) olarak stage'e yazılır.
 */
const SCRUB = `const sc = el.querySelector('.sc');
const upd = () => {
  const max = sc.scrollHeight - sc.clientHeight;
  const p = max > 0 ? Math.min(1, Math.max(0, sc.scrollTop / max)) : 1;
  el.style.setProperty('--p', p.toFixed(3));
  if (p > 0.1) el.classList.add('in');
};
if (el._sc) { el._sc.removeEventListener('scroll', el._up); }
el._sc = sc; el._up = upd;
sc.addEventListener('scroll', upd, { passive: true });
sc.scrollTop = 0;
upd();`;

export default [
  {
    id: 'reveal-stagger',
    cat: 'Scroll',
    name: 'Reveal (stagger, once)',
    tech: 'JS',
    trigger: 'scroll eşiği',
    dur: '0.9s',
    ease: 'cubic-bezier(.2,.9,.24,1)',
    reduced: 'kartlar anında görünür',
    html: `<div class="sc"><div class="sc-body"><p class="hint">kaydır →</p><div class="c"></div><div class="c"></div><div class="c"></div><div class="c"></div></div></div>`,
    css: `.d-reveal-stagger .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-reveal-stagger .sc-body { display: flex; flex-direction: column; gap: 8px; padding: 10px 12px 60px; }
.d-reveal-stagger .hint { margin: 0 0 4px; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }
.d-reveal-stagger .c { height: 44px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); opacity: 0; transform: translateY(24px); filter: blur(6px); }
.d-reveal-stagger.in .c { transition: opacity .9s cubic-bezier(.2,.9,.24,1), transform .9s cubic-bezier(.2,.9,.24,1), filter .9s; opacity: 1; transform: none; filter: none; }
.d-reveal-stagger.in .c:nth-child(3) { transition-delay: .06s; }
.d-reveal-stagger.in .c:nth-child(4) { transition-delay: .12s; }
.d-reveal-stagger.in .c:nth-child(5) { transition-delay: .18s; }`,
    js: SCRUB,
    gsap: `ScrollTrigger.batch('[data-reveal]', {
  start: 'top 82%', once: true,
  onEnter: (els) => gsap.to(els, { y: 0, autoAlpha: 1, filter: 'blur(0px)', duration: .9, ease: 'power3.out', stagger: .06 }),
});`,
  },
  {
    id: 'pin-scrub',
    cat: 'Scroll',
    name: 'Pin + scrub',
    tech: 'JS',
    trigger: 'scroll (sabit bölüm)',
    dur: 'scrub 1.1',
    ease: 'none',
    reduced: 'pin yok, içerik normal akışta',
    html: `<div class="sc"><div class="sc-body"><div class="pin"><div class="txt"><b>Semt,</b><span>evin yarısıdır</span><div class="bar"><i></i></div></div><div class="media"><div class="sky"></div></div></div><div class="tail">devam…</div></div></div>`,
    css: `.d-pin-scrub .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-pin-scrub .sc-body { height: 420px; }
.d-pin-scrub .pin { position: sticky; top: 0; height: 190px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 12px; align-items: center; }
.d-pin-scrub .txt b { display: block; font-family: var(--font-display); font-size: 22px; letter-spacing: var(--tracking); }
.d-pin-scrub .txt span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft); }
.d-pin-scrub .bar { margin-top: 12px; height: 2px; background: color-mix(in srgb, var(--ink) 14%, transparent); position: relative; }
.d-pin-scrub .bar i { position: absolute; inset: 0 auto 0 0; width: calc(var(--p, 0) * 100%); background: var(--accent); }
.d-pin-scrub .media { position: relative; height: 76%; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; background: var(--bg-2); }
.d-pin-scrub .media .sky { position: absolute; inset: 0; transform: scale(calc(1.08 - var(--p, 0) * .08)); transform-origin: 50% 60%;
  background: radial-gradient(70% 50% at 30% 20%, color-mix(in srgb, var(--accent) 40%, transparent), transparent 60%), linear-gradient(180deg, color-mix(in srgb, var(--ink) 40%, var(--bg)), color-mix(in srgb, var(--ink) 8%, var(--bg))); }
.d-pin-scrub .tail { padding: 12px; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: SCRUB,
    gsap: `gsap.timeline({ scrollTrigger: { trigger: '.pin', start: 'top top', end: '+=140%', scrub: 1.1, pin: true, anticipatePin: 1 } })
  .fromTo('.media .sky', { scale: 1.08 }, { scale: 1, ease: 'none' })
  .fromTo('.bar i', { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0);`,
  },
  {
    id: 'parallax-layers',
    cat: 'Scroll',
    name: 'Parallax (3 katman)',
    tech: 'JS',
    trigger: 'scroll',
    dur: 'scrub',
    ease: 'none',
    reduced: 'tüm katmanlar sabit',
    html: `<div class="sc"><div class="sc-body"><div class="l1"></div><div class="l2"></div><div class="l3"></div><p class="hint">kaydır → katmanlar farklı hızda</p></div></div>`,
    css: `.d-parallax-layers .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-parallax-layers .sc-body { position: relative; height: 460px; }
.d-parallax-layers .l1, .d-parallax-layers .l2, .d-parallax-layers .l3 { position: absolute; left: 10%; right: 10%; border: 1px solid var(--line); border-radius: var(--radius); }
.d-parallax-layers .l1 { top: 20px; height: 70px; background: color-mix(in srgb, var(--accent) 26%, transparent); transform: translateY(calc(var(--p, 0) * -18px)); }
.d-parallax-layers .l2 { top: 90px; height: 70px; background: color-mix(in srgb, var(--ink) 16%, transparent); transform: translateY(calc(var(--p, 0) * -46px)); }
.d-parallax-layers .l3 { top: 160px; height: 70px; background: color-mix(in srgb, var(--ink) 30%, transparent); transform: translateY(calc(var(--p, 0) * -80px)); }
.d-parallax-layers .hint { position: absolute; left: 12px; top: 250px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: SCRUB,
    gsap: `gsap.utils.toArray('.l1,.l2,.l3').forEach((layer, i) => {
  gsap.to(layer, { yPercent: -(18 + i * 22), ease: 'none',
    scrollTrigger: { trigger: '.sc-body', start: 'top bottom', end: 'bottom top', scrub: true } });
});`,
  },
  {
    id: 'horizontal-pin',
    cat: 'Scroll',
    name: 'Yatay kaydırma',
    tech: 'JS',
    trigger: 'dikey scroll → yatay track',
    dur: 'scrub 0.8',
    ease: 'none',
    reduced: 'dikey liste (track sabit)',
    html: `<div class="sc"><div class="sc-body"><div class="pin"><div class="track"><div class="it">01</div><div class="it">02</div><div class="it">03</div><div class="it">04</div></div></div></div></div>`,
    css: `.d-horizontal-pin .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-horizontal-pin .sc-body { height: 420px; }
.d-horizontal-pin .pin { position: sticky; top: 0; height: 190px; display: grid; place-items: center; overflow: hidden; }
.d-horizontal-pin .track { display: flex; gap: 10px; padding: 0 12px; transform: translateX(calc(var(--p, 0) * -55%)); }
.d-horizontal-pin .it { flex: none; width: 96px; height: 120px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); display: grid; place-items: center; font-family: var(--font-mono); font-size: 14px; color: var(--ink-soft); }`,
    js: SCRUB,
    gsap: `const track = document.querySelector('.track');
gsap.to(track, { x: () => -(track.scrollWidth - innerWidth), ease: 'none',
  scrollTrigger: { trigger: '.pin', start: 'top top', end: () => '+=' + track.scrollWidth, scrub: .8, pin: true } });`,
  },
  {
    id: 'progress-line',
    cat: 'Scroll',
    name: 'İlerleme çizgisi',
    tech: 'JS',
    trigger: 'scroll',
    dur: 'linear',
    ease: 'none',
    reduced: 'çizgi tam dolu (statik)',
    html: `<div class="sc"><div class="sc-body"><div class="pg"><i></i></div><div class="blok"></div><div class="blok"></div><div class="blok"></div></div></div>`,
    css: `.d-progress-line .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-progress-line .sc-body { padding: 12px; display: flex; flex-direction: column; gap: 10px; }
.d-progress-line .pg { position: sticky; top: 0; height: 2px; background: color-mix(in srgb, var(--ink) 14%, transparent); z-index: 2; }
.d-progress-line .pg i { display: block; height: 100%; width: calc(var(--p, 0) * 100%); background: var(--accent); }
.d-progress-line .blok { height: 120px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); }`,
    js: SCRUB,
    gsap: `gsap.to('.pg i', { scaleX: 1, transformOrigin: '0 50%', ease: 'none',
  scrollTrigger: { trigger: '.sc-body', start: 'top top', end: 'bottom bottom', scrub: true } });`,
  },
  {
    id: 'sticky-stack',
    cat: 'Scroll',
    name: 'Sticky kart yığını',
    tech: 'CSS',
    trigger: 'scroll',
    dur: '0.4s',
    ease: 'ease-out',
    reduced: 'kartlar alt alta normal akış',
    html: `<div class="sc"><div class="sc-body"><div class="card">01</div><div class="card">02</div><div class="card">03</div></div></div>`,
    css: `.d-sticky-stack .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-sticky-stack .sc-body { padding: 12px 14px 80px; display: flex; flex-direction: column; gap: 10px; }
.d-sticky-stack .card { position: sticky; top: 10px; height: 96px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); display: grid; place-items: center; font-family: var(--font-mono); font-size: 15px; color: var(--ink-soft); box-shadow: var(--shadow); }
.d-sticky-stack .card:nth-child(2) { top: 26px; }
.d-sticky-stack .card:nth-child(3) { top: 42px; }`,
    js: SCRUB,
    gsap: `gsap.utils.toArray('.card').forEach((card, i) => {
  gsap.to(card, { scale: 1 - (2 - i) * .03, ease: 'none',
    scrollTrigger: { trigger: card, start: 'top 20%', end: 'bottom top', scrub: true } });
});`,
  },
  {
    id: 'velocity-skew',
    cat: 'Scroll',
    name: 'Hıza bağlı eğim',
    tech: 'JS',
    trigger: 'scroll hızı',
    dur: 'scrub',
    ease: 'none',
    reduced: 'eğim yok, içerik sabit',
    html: `<div class="sc"><div class="sc-body"><p class="hint">kaydır → hız</p><div class="rows"><div class="r">Sakin bir</div><div class="r">çalışma alanı</div><div class="r">hızda eğilir</div><div class="r">dururken doğrulur</div><div class="r">her satır aynı</div><div class="r">eğimi taşır</div><div class="r">sayfa durunca</div><div class="r">sıfıra döner</div></div></div></div>`,
    css: `.d-velocity-skew .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-velocity-skew .sc-body { padding: 10px 12px 70px; }
.d-velocity-skew .hint { margin: 0 0 8px; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }
.d-velocity-skew .rows { transform: skewY(calc(var(--ms-vel, 0) * 2deg)); transform-origin: 0 50%; will-change: transform; }
.d-velocity-skew .r { padding: 9px 0; border-bottom: 1px solid var(--line); font-family: var(--font-display); font-size: 19px; letter-spacing: var(--tracking); }
.d-velocity-skew .r:nth-child(2n) { padding-left: 18px; color: var(--ink-soft); }`,
    js: `const sc = el.querySelector('.sc');
const rows = el.querySelector('.rows');
let last = 0;
let vel = 0;
let raf = 0;
const decay = () => {
  raf = 0;
  vel *= .82;
  rows.style.setProperty('--ms-vel', (Math.abs(vel) < .01 ? 0 : vel).toFixed(3));
  if (vel !== 0) raf = requestAnimationFrame(decay);
};
const onScroll = () => {
  const d = sc.scrollTop - last;
  last = sc.scrollTop;
  vel = Math.max(-1, Math.min(1, d / 45));
  if (!raf) raf = requestAnimationFrame(decay);
};
if (el._sc) { el._sc.removeEventListener('scroll', el._on); cancelAnimationFrame(el._raf); }
el._sc = sc;
el._on = onScroll;
el._raf = raf;
sc.addEventListener('scroll', onScroll, { passive: true });
sc.scrollTop = 0;
rows.style.setProperty('--ms-vel', '0');`,
    gsap: `const rows = document.querySelectorAll('.r');
const q = gsap.utils.selector('.sc-body');
let clamp = gsap.utils.clamp(-1, 1);
ScrollTrigger.create({
  onUpdate: (self) => {
    const v = clamp(self.getVelocity() / -300);
    q('.rows').forEach((el) => gsap.to(el, { skewY: v * 2, overwrite: true, duration: .4, ease: 'power3' }));
  },
});`,
  },
  {
    id: 'snap-gallery',
    cat: 'Scroll',
    name: 'Scroll-snap galeri',
    tech: 'CSS',
    trigger: 'yatay sürükle/kaydır',
    dur: '0.3s',
    ease: 'ease-out',
    reduced: 'snap kapalı, serbest kaydırma',
    html: `<div class="rail"><figure>01</figure><figure>02</figure><figure>03</figure><figure>04</figure></div><p class="hint">← yatay kaydır →</p>`,
    css: `.d-snap-gallery .rail { position: absolute; inset: 14px 14px 34px; display: grid; grid-auto-flow: column; grid-auto-columns: 72%; gap: 10px; overflow-x: auto; scroll-snap-type: x mandatory; }
.d-snap-gallery figure { margin: 0; scroll-snap-align: center; border: 1px solid var(--line); border-radius: var(--radius); background: linear-gradient(180deg, color-mix(in srgb, var(--ink) 34%, var(--bg)), color-mix(in srgb, var(--ink) 10%, var(--bg))); display: grid; place-items: end start; padding: 8px; font-family: var(--font-mono); font-size: 10px; color: var(--bg); }
.d-snap-gallery .hint { position: absolute; left: 14px; bottom: 10px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: '',
    gsap: `// snap için GSAP gerekmez; ScrollTrigger ile nokta senkronu eklenebilir.
ScrollTrigger.create({ trigger: '.rail', start: 'top 80%', onEnter: () => gsap.from('.rail figure', { y: 20, autoAlpha: 0, stagger: .06 }) });`,
  },
  {
    id: 'word-highlight',
    cat: 'Scroll',
    name: 'Kelime vurgu süpürmesi',
    tech: 'JS',
    trigger: 'scroll',
    dur: 'linear',
    ease: 'none',
    reduced: 'vurgu statik (tam)',
    html: `<div class="sc"><div class="sc-body"><p class="tx">Bir adresi seçmek, sabah kahveni içeceğin yolu ve akşam döneceğin virajı seçmektir. Bu yüzden her portföyü mahalle ölçeğinde anlatıyoruz.</p><div class="tail"></div></div></div>`,
    css: `.d-word-highlight .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-word-highlight .sc-body { padding: 14px 16px 70px; }
.d-word-highlight .tx { margin: 0; font-size: 13px; line-height: 1.75;
  background-image: linear-gradient(90deg, var(--ink) calc(var(--p, 0) * 100%), color-mix(in srgb, var(--ink) 26%, transparent) calc(var(--p, 0) * 100%));
  -webkit-background-clip: text; background-clip: text; color: transparent; }
.d-word-highlight .tail { height: 220px; }`,
    js: SCRUB,
    gsap: `gsap.fromTo('.tx', { backgroundPosition: '0% 0' }, { backgroundPosition: '100% 0', ease: 'none',
  scrollTrigger: { trigger: '.tx', start: 'top 70%', end: 'bottom 40%', scrub: true } });`,
  },
  {
    id: 'image-reveal',
    cat: 'Scroll',
    name: 'Görsel açılma maskesi',
    tech: 'JS',
    trigger: 'scroll',
    dur: 'scrub',
    ease: 'none',
    reduced: 'görsel tam görünür',
    html: `<div class="sc"><div class="sc-body"><div class="frame"><div class="img"></div></div><div class="tail"></div></div></div>`,
    css: `.d-image-reveal .sc { position: absolute; inset: 0; overflow-y: auto; }
.d-image-reveal .sc-body { padding: 14px; }
.d-image-reveal .frame { position: relative; height: 150px; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
.d-image-reveal .img { position: absolute; inset: 0; clip-path: inset(calc((1 - var(--p, 0)) * 50%) 0 calc((1 - var(--p, 0)) * 50%) 0);
  background: radial-gradient(70% 60% at 40% 20%, color-mix(in srgb, var(--accent) 44%, transparent), transparent 62%), linear-gradient(180deg, color-mix(in srgb, var(--ink) 42%, var(--bg)), color-mix(in srgb, var(--ink) 8%, var(--bg))); }
.d-image-reveal .tail { height: 200px; }`,
    js: SCRUB,
    gsap: `gsap.fromTo('.img', { clipPath: 'inset(50% 0 50% 0)' }, { clipPath: 'inset(0% 0 0% 0)', ease: 'none',
  scrollTrigger: { trigger: '.frame', start: 'top 85%', end: 'center 55%', scrub: true } });`,
  },
];
