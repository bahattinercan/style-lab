/**
 * İleri kalıplar (5): WebGL, Canvas, SMIL morph, offset-path, 3D stack.
 * Hepsi bağımlılıksız; pause için `el._pause(bool)` tanımlanır.
 */
export default [
  {
    id: 'webgl-plasma',
    cat: 'İleri',
    name: 'WebGL plasma (shader)',
    tech: 'WebGL',
    trigger: 'otomatik',
    dur: 'döngü',
    ease: 'linear',
    reduced: 'statik gradyan (shader durur)',
    loop: true,
    html: `<canvas class="gl" aria-hidden="true"></canvas><p class="hint">ham WebGL · 1 fragment shader · kütüphane yok</p>`,
    css: `.d-webgl-plasma .gl { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.d-webgl-plasma .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: color-mix(in srgb, var(--bg) 80%, transparent); }`,
    js: `el._stop?.();
const cv = el.querySelector('.gl');
const gl = cv.getContext('webgl', { antialias: true, alpha: true });
if (!gl) { cv.style.background = 'linear-gradient(180deg, var(--accent), var(--ink))'; return; }
const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const fs = 'precision mediump float;uniform vec2 r;uniform float t;uniform vec3 a;uniform vec3 b;' +
  'void main(){vec2 u=gl_FragCoord.xy/r; vec2 q=u*3.0; float v=sin(q.x*2.1+t*.6)+sin(q.y*2.7-t*.4)+sin((q.x+q.y)*1.9+t*.9);' +
  'v=v/3.0*.5+.5; vec3 c=mix(a,b,v); float g=smoothstep(0.0,0.9,length(u-vec2(.5,.55))); gl_FragColor=vec4(c*(1.0-g*.55),1.0);}';
const mk = (t, s) => { const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh); return sh; };
const pr = gl.createProgram();
gl.attachShader(pr, mk(gl.VERTEX_SHADER, vs));
gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, fs));
gl.linkProgram(pr); gl.useProgram(pr);
const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
const uR = gl.getUniformLocation(pr, 'r'), uT = gl.getUniformLocation(pr, 't');
const uA = gl.getUniformLocation(pr, 'a'), uB = gl.getUniformLocation(pr, 'b');
const hex = (v, fb) => { const s = (v || fb).trim().replace('#',''); const n = parseInt(s.length === 3 ? s.split('').map(c => c+c).join('') : s, 16); return [(n>>16&255)/255, (n>>8&255)/255, (n&255)/255]; };
const cs = getComputedStyle(document.body);
const A = hex(cs.getPropertyValue('--accent'), '#1f3b2c'), B = hex(cs.getPropertyValue('--bg'), '#efe7da');
let t = 0, raf = 0, paused = false;
const draw = () => {
  const dpr = Math.min(2, devicePixelRatio || 1);
  const w = Math.round(cv.clientWidth * dpr), h = Math.round(cv.clientHeight * dpr);
  if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
  gl.viewport(0, 0, w, h);
  gl.uniform2f(uR, w, h); gl.uniform1f(uT, t); gl.uniform3f(uA, A[0], A[1], A[2]); gl.uniform3f(uB, B[0], B[1], B[2]);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  if (!paused) t += 0.016;
  raf = requestAnimationFrame(draw);
};
draw();
el._pause = (on) => { paused = on; };
el._stop = () => cancelAnimationFrame(raf);`,
    gsap: `// WebGL/SMIL yerine GSAP ile 2D eşdeğeri:
gsap.to('.aur', { backgroundPosition: '100% 0%', duration: 18, repeat: -1, ease: 'none' });`,
  },
  {
    id: 'canvas-particles',
    cat: 'İleri',
    name: 'Canvas parçacık ağı',
    tech: 'Canvas',
    trigger: 'otomatik + imleç',
    dur: 'döngü',
    ease: 'linear',
    reduced: 'statik nokta bulutu',
    loop: true,
    html: `<canvas class="pt" aria-hidden="true"></canvas><p class="hint">imleç itiyor · 70 parçacık</p>`,
    css: `.d-canvas-particles canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
.d-canvas-particles .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: `el._stop?.();
const cv = el.querySelector('.pt');
const ctx = cv.getContext('2d');
const dpr = Math.min(2, devicePixelRatio || 1);
const fit = () => { cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr; };
fit();
const cs = getComputedStyle(document.body);
const accent = cs.getPropertyValue('--accent').trim() || '#1f3b2c';
const ps = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .0016, vy: (Math.random() - .5) * .0016 }));
const mouse = { x: .5, y: .5, on: false };
cv.onpointermove = (e) => { const r = cv.getBoundingClientRect(); mouse.x = (e.clientX - r.left) / r.width; mouse.y = (e.clientY - r.top) / r.height; mouse.on = true; };
cv.onpointerleave = () => { mouse.on = false; };
let raf = 0, paused = false;
const draw = () => {
  const w = cv.width, h = cv.height;
  ctx.clearRect(0, 0, w, h);
  for (const p of ps) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > 1) p.vx *= -1;
    if (p.y < 0 || p.y > 1) p.vy *= -1;
    if (mouse.on) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < .18) { p.vx += dx * .00006; p.vy += dy * .00006; }
    }
    p.vx *= .999; p.vy *= .999;
    ctx.beginPath(); ctx.arc(p.x * w, p.y * h, 2.2 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = accent; ctx.globalAlpha = .75; ctx.fill();
  }
  ctx.globalAlpha = .18; ctx.strokeStyle = accent;
  for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) {
    const a = ps[i], b = ps[j], d = Math.hypot(a.x - b.x, a.y - b.y);
    if (d < .12) { ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke(); }
  }
  if (!paused) raf = requestAnimationFrame(draw);
};
draw();
el._pause = (on) => { paused = on; if (!on) draw(); };
el._stop = () => cancelAnimationFrame(raf);`,
    gsap: `// GSAP: parçacıkları DOM'a alıp gsap.to(particle, { x: 'random(0,600)', y: 'random(0,380)', repeat: -1, yoyo: true })`,
  },
  {
    id: 'svg-morph',
    cat: 'İleri',
    name: 'SVG şekil morph (SMIL)',
    tech: 'SVG',
    trigger: 'otomatik',
    dur: '6s',
    ease: 'ease-in-out',
    reduced: 'tek şekil, morph yok',
    loop: true,
    html: `<svg class="mo" viewBox="0 0 200 140" role="img" aria-label="Soyut şekil"><path class="p" fill="none" stroke="currentColor" stroke-width="1.6" d="M100 20 C 150 20 180 50 180 70 C 180 100 150 120 100 120 C 50 120 20 100 20 70 C 20 50 50 20 100 20 Z"><animate attributeName="d" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" values="M100 20 C 150 20 180 50 180 70 C 180 100 150 120 100 120 C 50 120 20 100 20 70 C 20 50 50 20 100 20 Z; M100 14 C 130 30 170 40 172 74 C 174 104 138 118 100 126 C 62 118 26 104 28 74 C 30 40 70 30 100 14 Z; M100 20 C 150 20 180 50 180 70 C 180 100 150 120 100 120 C 50 120 20 100 20 70 C 20 50 50 20 100 20 Z"/></path></svg>`,
    css: `.d-svg-morph { display: grid; place-items: center; }
.d-svg-morph .mo { width: 74%; height: auto; color: var(--ink); }
.d-svg-morph .p { stroke: var(--accent); stroke-width: 1.6; }`,
    js: `const p = el.querySelector('.p');
// SMIL desteklenmiyorsa (ör. bazı tarayıcılar) basit nabız
if (!document.createElementNS('http://www.w3.org/2000/svg', 'animate').beginElement) {
  el.classList.add('no-smil');
}`,
    gsap: `gsap.to('.p', { morphSVG: { shape: '#other-shape' }, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });`,
  },
  {
    id: 'offset-orbit',
    cat: 'İleri',
    name: 'offset-path yörünge',
    tech: 'CSS',
    trigger: 'otomatik',
    dur: '8s',
    ease: 'linear',
    reduced: 'öğe yörüngenin başında sabit',
    loop: true,
    html: `<div class="orb"><i class="dot"></i><i class="dot b"></i></div><p class="hint">offset-path · 8s</p>`,
    css: `.d-offset-orbit { display: grid; place-items: center; }
.d-offset-orbit .orb { position: relative; width: 78%; height: 70%; }
.d-offset-orbit .dot { position: absolute; left: 0; top: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--accent);
  offset-path: path('M 20 90 C 70 10, 190 10, 240 80 C 190 150, 70 150, 20 90 Z'); offset-rotate: 0deg; }
.d-offset-orbit .dot.b { width: 10px; height: 10px; background: var(--ink-soft); opacity: .6; }
.d-offset-orbit.play .dot { animation: k-orbit 8s linear infinite; }
.d-offset-orbit.play .dot.b { animation-duration: 5.4s; }
.d-offset-orbit .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }
@keyframes k-orbit { to { offset-distance: 100%; } }`,
    js: '',
    gsap: `gsap.to('.dot', { motionPath: { path: 'M20 90 C 70 10, 190 10, 240 80 C 190 150, 70 150, 20 90 Z' }, duration: 8, repeat: -1, ease: 'none' });`,
  },
  {
    id: 'perspective-stack',
    cat: 'İleri',
    name: '3D kart yelpazesi',
    tech: 'CSS',
    trigger: 'oynat',
    dur: '0.9s',
    ease: 'cubic-bezier(.2,.9,.2,1)',
    reduced: 'kartlar üst üste düz',
    html: `<div class="sc3"><div class="c a"><b>01</b></div><div class="c b"><b>02</b></div><div class="c c"><b>03</b></div></div><p class="hint">perspective 800px</p>`,
    css: `.d-perspective-stack { display: grid; place-items: center; perspective: 800px; }
.d-perspective-stack .sc3 { position: relative; width: 60%; height: 70%; transform-style: preserve-3d; }
.d-perspective-stack .c { position: absolute; inset: 0; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: var(--shadow); display: grid; place-items: center;
  transform: rotateX(0) rotateY(0) translateZ(0); transition: transform .9s cubic-bezier(.2,.9,.2,1); }
.d-perspective-stack .c b { font-family: var(--font-mono); font-size: 20px; font-weight: 400; color: var(--ink-soft); }
.d-perspective-stack.play .c.a { transform: translate3d(-26%, 4%, 0) rotateY(18deg); }
.d-perspective-stack.play .c.b { transform: translate3d(0, 0, 30px); }
.d-perspective-stack.play .c.c { transform: translate3d(26%, -4%, 0) rotateY(-18deg); }
.d-perspective-stack .hint { position: absolute; left: 12px; bottom: 8px; margin: 0; font-family: var(--font-mono); font-size: 8px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-faint); }`,
    js: '',
    gsap: `gsap.to('.c.a', { xPercent: -26, yPercent: 4, rotateY: 18, duration: .9, ease: 'power3.out' });
gsap.to('.c.c', { xPercent: 26, yPercent: -4, rotateY: -18, duration: .9, ease: 'power3.out' });`,
  },
];
