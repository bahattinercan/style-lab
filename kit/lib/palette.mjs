/**
 * kit/lib/palette.mjs — palet çözücü (sözleşme v7).
 *
 * Neden: palet bugüne kadar 10 elle seçilmiş hex'ti; eşiği geçmeyen değeri insan düzeltiyordu
 * (19 yumuşak uyarı, `skeuomorphism` ink-soft 4.34:1). Bu modül rengi **hedef kontrasta göre
 * çözer**: OKLCH açıklığı ikili aramayla ayarlanır (hue/chroma korunur), WCAG 2.2 oranı hedefe
 * oturtulur. Aynı çözücü durum renklerini (danger/ok/warn) ve nötr rampayı türetir.
 *
 * Kullanım: `node kit/lib/palette.mjs --self-test` (kapı) · `node kit/lib/palette.mjs --derive <slug>`
 *
 * Not: APCA eşik olarak kullanılmaz (WCAG 3 taslak, algoritma belirlenmedi); yalnız bilgi amaçlı.
 */
import { contrastRatio, parseColor } from '../color.mjs';

/* ------------------------------------------------------------------ renk uzayı */

const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const fromLinear = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);

/** {r,g,b} 0–255 → [r,g,b] 0–1 doğrusal olmayan sRGB */
const toUnit = (c) => ({ r: c.r / 255, g: c.g / 255, b: c.b / 255 });

/** sRGB (0–1) → OKLab → OKLCH { L, C, h } */
export function srgbToOklch({ r, g, b }) {
  const lr = toLinear(r);
  const lg = toLinear(g);
  const lb = toLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  const C = Math.hypot(A, B);
  let h = (Math.atan2(B, A) * 180) / Math.PI;
  if (h < 0) h += 360;
  return { L, C, h };
}

/** OKLCH → sRGB 0–255 (gamut dışıysa kırpılır) */
export function oklchToSrgb({ L, C, h }) {
  const a = (h * Math.PI) / 180;
  const A = Math.cos(a) * C;
  const B = Math.sin(a) * C;
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  const lr = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const lg = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const lb = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  const channel = (v) => Math.round(Math.min(1, Math.max(0, fromLinear(Math.min(1, Math.max(0, v))))) * 255);
  return { r: channel(lr), g: channel(lg), b: channel(lb), a: 1 };
}

const hex = ({ r, g, b }) => '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');

/* ------------------------------------------------------------------- çözücü */

/** Bir rengi zemine karşı hedef orana oturt: OKLCH L ikili arama, C sınırlı. */
export function solveContrast({ from, against, target, step = 28 }) {
  const againstColor = parseColor(against);
  if (!againstColor) throw new Error(`çözücü: geçersiz zemin ${against}`);
  const base = parseColor(from);
  if (!base) throw new Error(`çözücü: geçersiz renk ${from}`);
  const o = srgbToOklch(toUnit(base));
  // contrastRatio hex metni bekler (parseColor nesneyi çözmez) — ara değerler hex'e çevrilir.
  const contrastAt = (L) => contrastRatio(hex(oklchToSrgb({ L, C: o.C, h: o.h })), against);

  // Zemin açıksa koyuya, koyuysa açığa git.
  const bgL = srgbToOklch(toUnit(againstColor)).L;
  const dir = bgL > 0.5 ? -1 : 1;
  let lo = dir < 0 ? 0 : o.L;
  let hi = dir < 0 ? o.L : 1;
  if (contrastAt(dir < 0 ? 0 : 1) < target) {
    // chroma'yı düşürerek yeniden dene (doygun renk hedefe ulaşamıyorsa nötrleşir)
    for (const cScale of [0.75, 0.5, 0.25, 0]) {
      const cc = o.C * cScale;
      const at = (L) => contrastRatio(hex(oklchToSrgb({ L, C: cc, h: o.h })), against);
      const extreme = dir < 0 ? 0 : 1;
      if (at(extreme) >= target) {
        let a = dir < 0 ? 0 : o.L;
        let b2 = dir < 0 ? o.L : 1;
        for (let i = 0; i < step; i += 1) {
          const mid = (a + b2) / 2;
          if (at(mid) >= target) (dir < 0 ? (a = mid) : (b2 = mid));
          else (dir < 0 ? (b2 = mid) : (a = mid));
        }
        const picked = dir < 0 ? a : b2;
        return { hex: hex(oklchToSrgb({ L: picked, C: cc, h: o.h })), contrast: at(picked), chroma: cc };
      }
    }
    throw new Error(`çözücü: ${from} → ${against} ${target}:1 ulaşılamıyor`);
  }
  for (let i = 0; i < step; i += 1) {
    const mid = (lo + hi) / 2;
    if (contrastAt(mid) >= target) (dir < 0 ? (lo = mid) : (hi = mid));
    else (dir < 0 ? (hi = mid) : (lo = mid));
  }
  const L = dir < 0 ? lo : hi;
  return { hex: hex(oklchToSrgb({ L, C: o.C, h: o.h })), contrast: contrastAt(L), chroma: o.C };
}

/** Durum renkleri: sabit hue (kırmızı/yeşil/amber), L hedefe çözülür, üstüne metin rengi. */
export function deriveStatusColors(palette) {
  const bg = palette.bg;
  const seeds = { danger: '#d92d20', ok: '#12b76a', warn: '#f79009' };
  const out = {};
  for (const [key, seed] of Object.entries(seeds)) {
    const solved = solveContrast({ from: seed, against: bg, target: 4.5 });
    out[key] = solved.hex;
    // durum zemininin üstündeki metin: siyah/beyaz arasından yüksek olanı seç
    const on = contrastRatio('#ffffff', solved.hex);
    const onDark = contrastRatio('#000000', solved.hex);
    out[`${key}Ink`] = on >= onDark ? '#ffffff' : '#0b0d10';
    if (contrastRatio(out[`${key}Ink`], solved.hex) < 4.5) {
      out[`${key}Ink`] = on >= onDark ? '#ffffff' : '#000000';
    }
  }
  return out;
}

/** Nötr rampa: bg'den L adımlarıyla bg-2 / surface-2 / line türetir (yalnız doğrulama için). */
export function deriveNeutrals(palette) {
  const bg = parseColor(palette.bg);
  const ink = parseColor(palette.ink);
  const o = srgbToOklch(toUnit(bg));
  const inkL = srgbToOklch(toUnit(ink)).L;
  const toward = inkL > o.L ? 1 : -1;
  const stepL = (n) => o.L + toward * n;
  return {
    bg2: hex(oklchToSrgb({ L: stepL(0.02), C: o.C, h: o.h })),
    surface2: hex(oklchToSrgb({ L: stepL(0.04), C: o.C, h: o.h })),
  };
}

/* ------------------------------------------------------------------ self-test */

function selfTest() {
  const cases = [
    { from: '#5a5f66', against: '#fafaf9', target: 4.5, name: 'ink-soft / açık zemin' },
    { from: '#a9bccd', against: '#0b1118', target: 4.5, name: 'ink-soft / koyu zemin' },
    { from: '#04140f', against: '#38e8c0', target: 4.5, name: 'accent-ink / accent (mint)' },
    { from: '#38e8c0', against: '#0b1118', target: 3, name: 'odak halkası' },
  ];
  let failed = 0;
  for (const c of cases) {
    const out = solveContrast(c);
    const ok = out.contrast >= c.target - 0.02;
    if (!ok) failed += 1;
    console.log(`${ok ? '✓' : '×'} ${c.name}: ${out.hex} → ${out.contrast.toFixed(2)}:1 (hedef ${c.target})`);
  }
  const status = deriveStatusColors({ bg: '#0b1118', ink: '#e9f2fa', accent: '#38e8c0' });
  for (const key of ['danger', 'ok', 'warn']) {
    const r = contrastRatio(status[key], '#0b1118');
    const ok = r >= 4.48;
    if (!ok) failed += 1;
    console.log(`${ok ? '✓' : '×'} durum ${key}: ${status[key]} → ${r.toFixed(2)}:1 (hedef 4.5)`);
    const inkR = contrastRatio(status[`${key}Ink`], status[key]);
    const okInk = inkR >= 4.48;
    if (!okInk) failed += 1;
    console.log(`${okInk ? '✓' : '×'} durum ${key}-ink: ${status[`${key}Ink`]} → ${inkR.toFixed(2)}:1 (hedef 4.5)`);
  }
  // çözücü gerilemez: hedefe ulaşılamayan istek hata verir
  let threw = false;
  try {
    solveContrast({ from: '#ffffff', against: '#fefefe', target: 21 });
  } catch {
    threw = true;
  }
  console.log(`${threw ? '✓' : '×'} ulaşılamaz hedef hata veriyor`);
  if (!threw) failed += 1;
  console.log(failed ? `self-test: ${failed} başarısız` : 'self-test: çözücü hedefleri tutturuyor');
  return failed === 0;
}

if (process.argv[1]?.endsWith('palette.mjs')) {
  process.exit(selfTest() ? 0 : 1);
}
