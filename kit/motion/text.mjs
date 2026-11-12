/**
 * Metin kalıpları (6).
 */
export default [
  {
    id: 'decode',
    cat: 'Metin',
    name: 'Decode / scramble',
    tech: 'JS',
    trigger: 'görünür / oynat',
    dur: '0.6s',
    ease: 'linear',
    reduced: 'metin doğrudan yazılır',
    html: `<div class="dc" aria-label="Boğaz'da sessiz bir sabah"><span class="t">BOĞAZ'DA SESSİZ BİR SABAH</span></div>`,
    css: `.d-decode { display: grid; place-items: center; padding: 12px; }
.d-decode .t { font-family: var(--font-mono); font-size: 13px; letter-spacing: .12em; color: var(--ink); white-space: nowrap; }`,
    js: `const out = el.querySelector('.t');
const final = out.textContent;
const chars = 'ABCDEFGHJKLMNOPRSTUVYZ0123456789#%&';
let frame = 0;
const total = 22;
clearInterval(el._iv);
el._iv = setInterval(() => {
  frame++;
  const lock = Math.floor((frame / total) * final.length);
  out.textContent = final.split('').map((ch, i) => {
    if (ch === ' ') return ' ';
    if (i < lock) return ch;
    return chars[Math.floor(Math.random() * chars.length)];
  }).join('');
  if (frame >= total) { clearInterval(el._iv); out.textContent = final; }
}, 28);`,
    gsap: `gsap.to('.t', { duration: .6, ease: 'none', scrambleText: { text: "BOĞAZ'DA SESSİZ BİR SABAH", chars: 'upperCase' } });`,
  },
  {
    id: 'odometer',
    cat: 'Metin',
    name: 'Odometer rakam rulosu',
    tech: 'CSS',
    trigger: 'görünür / oynat',
    dur: '0.9s',
    ease: 'power3.out',
    reduced: 'son değer doğrudan görünür',
    html: `<div class="odo"><span class="cur">₺</span><span class="d" data-d="8"><i>0123456789</i></span><span class="d" data-d="4"><i>0123456789</i></span><span class="sep">.</span><span class="d" data-d="5"><i>0123456789</i></span><span class="d" data-d="0"><i>0123456789</i></span><span class="d" data-d="0"><i>0123456789</i></span><span class="d" data-d="0"><i>0123456789</i></span><span class="d" data-d="0"><i>0123456789</i></span></div><p class="cap">₺84.500.000 · 0.9s</p>`,
    css: `.d-odometer { display: grid; place-items: center; }
.d-odometer .odo { display: flex; align-items: baseline; gap: 1px; font-family: var(--font-mono); font-size: 26px; color: var(--ink); }
.d-odometer .cur, .d-odometer .sep { font-size: 17px; color: var(--ink-soft); }
.d-odometer .d { display: block; height: 1.12em; overflow: hidden; width: .62em; text-align: center; }
.d-odometer .d i { display: block; font-style: normal; line-height: 1.12em; transition: transform .9s cubic-bezier(.2,.9,.24,1); }
.d-odometer.play .d i { transform: translateY(calc(var(--d) * -1.12em)); }
.d-odometer .cap { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: `el.querySelectorAll('.d').forEach((node, i) => {
  node.style.setProperty('--d', node.dataset.d);
  node.querySelector('i').style.transitionDelay = (i * 45) + 'ms';
});`,
    gsap: `// her hane ayrı: translateY(-digit * 1.12em), stagger 45ms
gsap.to('.d i', { yPercent: (i, t) => -Number(t.parentElement.dataset.d) * 100 / 10 * 10, duration: .9, ease: 'power3.out', stagger: .045 });`,
  },
  {
    id: 'typewriter',
    cat: 'Metin',
    name: 'Daktilo',
    tech: 'JS',
    trigger: 'görünür / oynat',
    dur: '1.2s',
    ease: 'steps',
    reduced: 'metin tam görünür',
    html: `<div class="tw"><span class="txt"></span><i class="car" aria-hidden="true"></i></div><p class="src">— koleksiyon notu</p>`,
    css: `.d-typewriter { display: grid; place-items: center; padding: 12px; }
.d-typewriter .tw { display: flex; align-items: center; gap: 2px; max-width: 90%; }
.d-typewriter .txt { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .04em; color: var(--ink); }
.d-typewriter .car { width: 1px; height: 15px; background: var(--accent); }
.d-typewriter .src { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: `const out = el.querySelector('.txt');
const text = "On iki konut. Her biri tek bir manzaraya sahip.";
out.textContent = '';
clearInterval(el._iv);
let i = 0;
el._iv = setInterval(() => {
  out.textContent = text.slice(0, ++i);
  if (i >= text.length) clearInterval(el._iv);
}, 1200 / text.length);`,
    gsap: `gsap.to('.txt', { duration: 1.2, ease: 'steps(48)', text: { value: 'On iki konut. Her biri tek bir manzaraya sahip.' } });`,
  },
  {
    id: 'svg-text-draw',
    cat: 'Metin',
    name: 'SVG yazı çizimi',
    tech: 'SVG',
    trigger: 'oynat',
    dur: '1.1s',
    ease: 'ease-out',
    reduced: 'yazı tam çizili',
    html: `<svg class="st" viewBox="0 0 260 60" role="img" aria-label="N">
  <text x="130" y="44" text-anchor="middle">ESTATE</text>
</svg>`,
    css: `.d-svg-text-draw { display: grid; place-items: center; }
.d-svg-text-draw .st { width: 78%; height: auto; }
.d-svg-text-draw text { font-family: var(--font-display); font-size: 40px; letter-spacing: .14em; fill: none; stroke: var(--ink); stroke-width: .8; stroke-dasharray: 900; stroke-dashoffset: 900; }
.d-svg-text-draw.play text { animation: k-svg-text-draw 1.1s ease-out both; }
@keyframes k-svg-text-draw { to { stroke-dashoffset: 0; } }`,
    js: '',
    gsap: `gsap.fromTo('.st text', { strokeDashoffset: 900 }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.out' });`,
  },
  {
    id: 'kinetic-marquee',
    cat: 'Metin',
    name: 'Kinetic marquee (çok hızlı)',
    tech: 'CSS',
    trigger: 'otomatik',
    dur: '18s',
    ease: 'linear',
    reduced: 'şerit durur',
    loop: true,
    html: `<div class="mq"><div class="row a"><span>İSTANBUL · BOĞAZ · 2026 · PORTFÖY ·</span><span aria-hidden="true">İSTANBUL · BOĞAZ · 2026 · PORTFÖY ·</span></div><div class="row b"><span>ÖZEL GÖRÜŞME · RANDEVU ·</span><span aria-hidden="true">ÖZEL GÖRÜŞME · RANDEVU ·</span></div></div>`,
    css: `.d-kinetic-marquee { display: grid; align-content: center; gap: 6px; overflow: hidden; }
.d-kinetic-marquee .row { display: flex; gap: 18px; white-space: nowrap; font-family: var(--font-mono); font-size: 20px; letter-spacing: .12em; color: var(--ink); }
.d-kinetic-marquee .row.b { font-size: 13px; color: var(--ink-soft); }
.d-kinetic-marquee .row span { display: block; }
.d-kinetic-marquee.play .row.a { animation: k-mq-a 18s linear infinite; }
.d-kinetic-marquee.play .row.b { animation: k-mq-b 12s linear infinite reverse; }
@keyframes k-mq-a { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes k-mq-b { from { transform: translateX(0); } to { transform: translateX(-50%); } }`,
    js: '',
    gsap: `gsap.to('.row.a', { xPercent: -50, repeat: -1, duration: 18, ease: 'none' });
gsap.to('.row.b', { xPercent: -50, repeat: -1, duration: 12, ease: 'none' });`,
  },
  {
    id: 'word-mask',
    cat: 'Metin',
    name: 'Kelime maske kayması',
    tech: 'CSS',
    trigger: 'oynat',
    dur: '0.9s',
    ease: 'cubic-bezier(.16,.84,.24,1)',
    reduced: 'metin düz',
    html: `<h4 class="wm"><span><i>Özel</i></span><span><i>görüşme</i></span><span><i>randevusu</i></span></h4>`,
    css: `.d-word-mask { display: grid; place-items: center; }
.d-word-mask .wm { margin: 0; font-family: var(--font-display); font-size: 26px; line-height: 1.1; letter-spacing: var(--tracking); text-align: center; }
.d-word-mask .wm span { display: block; overflow: hidden; }
.d-word-mask .wm i { display: block; font-style: normal; transform: translateY(105%); }
.d-word-mask.play .wm span:nth-child(1) i { animation: k-word-mask .9s cubic-bezier(.16,.84,.24,1) both; }
.d-word-mask.play .wm span:nth-child(2) i { animation: k-word-mask .9s .07s cubic-bezier(.16,.84,.24,1) both; }
.d-word-mask.play .wm span:nth-child(3) i { animation: k-word-mask .9s .14s cubic-bezier(.16,.84,.24,1) both; }
@keyframes k-word-mask { to { transform: none; } }`,
    js: '',
    gsap: `gsap.from('.wm i', { yPercent: 105, duration: .9, ease: 'expo.out', stagger: .07 });`,
  },
];
