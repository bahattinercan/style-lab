/**
 * Ambiyans kalıpları (4). Hepsi döngü; pause düğmesi zorunlu.
 */
export default [
  {
    id: 'grain-shift',
    cat: 'Ambiyans',
    name: 'Grain kayması',
    tech: 'CSS',
    trigger: 'otomatik',
    dur: '12s',
    ease: 'steps(6)',
    reduced: 'grain sabit (hareketsiz)',
    loop: true,
    html: `<div class="grain"></div><p class="hint">doku her karede kayar (12s)</p>`,
    css: `.d-grain-shift .grain { position: absolute; inset: -10%; background-image:
  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: .5; mix-blend-mode: overlay; }
.d-grain-shift.play .grain { animation: k-grain 12s steps(6) infinite; }
.d-grain-shift .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }
@keyframes k-grain { 0% { transform: translate(0,0); } 25% { transform: translate(-2%,1%); } 50% { transform: translate(1%,-2%); } 75% { transform: translate(-1%,-1%); } 100% { transform: translate(0,0); } }`,
    js: '',
    gsap: `gsap.to('.grain', { backgroundPosition: '12% 8%', duration: 12, repeat: -1, ease: 'steps(6)' });`,
  },
  {
    id: 'breathing',
    cat: 'Ambiyans',
    name: 'Nefes alan yüzey',
    tech: 'CSS',
    trigger: 'otomatik',
    dur: '6s',
    ease: 'ease-in-out',
    reduced: 'sabit ölçek',
    loop: true,
    html: `<div class="br"><span>%2 ölçek · 6s</span></div>`,
    css: `.d-breathing { display: grid; place-items: center; }
.d-breathing .br { width: 62%; height: 62%; border: 1px solid var(--line); border-radius: var(--radius); background: radial-gradient(70% 70% at 40% 30%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 65%), var(--surface); display: grid; place-items: center; transform: scale(1); }
.d-breathing .br span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-faint); }
.d-breathing.play .br { animation: k-breathe 6s ease-in-out infinite; }
@keyframes k-breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }`,
    js: '',
    gsap: `gsap.to('.br', { scale: 1.02, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });`,
  },
  {
    id: 'aurora-blob',
    cat: 'Ambiyans',
    name: 'Aurora leke sürüklenmesi',
    tech: 'CSS',
    trigger: 'otomatik',
    dur: '18s',
    ease: 'ease-in-out',
    reduced: 'lekeler sabit',
    loop: true,
    html: `<div class="aur"><i></i><i></i><i></i></div><p class="hint">3 leke · 18s · %22 opaklık</p>`,
    css: `.d-aurora-blob .aur { position: absolute; inset: 0; }
.d-aurora-blob .aur i { position: absolute; width: 46%; height: 60%; border-radius: 50%; filter: blur(14px); opacity: .26;
  background: radial-gradient(circle at 50% 50%, var(--accent), transparent 62%); }
.d-aurora-blob .aur i:nth-child(1) { left: 6%; top: 12%; }
.d-aurora-blob .aur i:nth-child(2) { right: 10%; top: 26%; background: radial-gradient(circle at 50% 50%, var(--ink), transparent 64%); opacity: .14; }
.d-aurora-blob .aur i:nth-child(3) { left: 32%; bottom: -8%; width: 54%; background: radial-gradient(circle at 50% 50%, var(--accent), transparent 66%); opacity: .18; }
.d-aurora-blob.play .aur i:nth-child(1) { animation: k-aur-a 18s ease-in-out infinite; }
.d-aurora-blob.play .aur i:nth-child(2) { animation: k-aur-b 22s ease-in-out infinite; }
.d-aurora-blob.play .aur i:nth-child(3) { animation: k-aur-c 26s ease-in-out infinite; }
.d-aurora-blob .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }
@keyframes k-aur-a { 50% { transform: translate(18%, 8%) scale(1.1); } }
@keyframes k-aur-b { 50% { transform: translate(-14%, 12%) scale(1.06); } }
@keyframes k-aur-c { 50% { transform: translate(8%, -10%) scale(1.12); } }`,
    js: '',
    gsap: `gsap.to('.aur i:nth-child(1)', { xPercent: 18, yPercent: 8, scale: 1.1, duration: 9, yoyo: true, repeat: -1, ease: 'sine.inOut' });`,
  },
  {
    id: 'specular-sheen',
    cat: 'Ambiyans',
    name: 'Yüzey parlaması (sheen)',
    tech: 'CSS',
    trigger: 'oynat',
    dur: '1.2s',
    ease: 'cubic-bezier(.4,0,.2,1)',
    reduced: 'parlama yok',
    html: `<div class="sh"><b>Koleksiyon</b><span>2026</span></div>`,
    css: `.d-specular-sheen { display: grid; place-items: center; }
.d-specular-sheen .sh { position: relative; overflow: hidden; width: 72%; height: 66%; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); display: grid; place-content: center; text-align: center; gap: 3px; }
.d-specular-sheen .sh b { font-family: var(--font-display); font-size: 22px; letter-spacing: var(--tracking); }
.d-specular-sheen .sh span { font-family: var(--font-mono); font-size: 8px; letter-spacing: .18em; color: var(--ink-faint); }
.d-specular-sheen .sh::after { content: ''; position: absolute; top: -60%; bottom: -60%; width: 42%; left: -60%; transform: rotate(18deg);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--bg) 75%, transparent), transparent); }
.d-specular-sheen.play .sh::after { animation: k-sheen 1.2s cubic-bezier(.4,0,.2,1); }
@keyframes k-sheen { to { left: 130%; } }`,
    js: '',
    gsap: `gsap.fromTo('.sh::after', { xPercent: -120 }, { xPercent: 320, duration: 1.2, ease: 'power2.inOut' });`,
  },
];
