/**
 * kit/lib/palette.mjs — palette decompiler (contract v7).
 *
 * Reason: palette was 10 hand-picked hexes so far; The human was correcting the value that did not exceed the threshold
 * (19 soft splats, `skeuomorphism` ink-soft 4.34:1). This module color **based on target contrast
 *decodes**: OKLCH aperture adjusted by binary search (hue/chroma preserved), WCAG 2.2 ratio to target
 * is seated. The same solver derives the state colors (danger/ok/warn) and neutral ramp.
 *
 * Usage: `node kit/lib/palette.mjs --self-test` (door) · `node kit/lib/palette.mjs --derive <slug>`
 *
 * Note: APCA is not used as a threshold (WCAG 3 draft, algorithm not determined); For informational purposes only.*/
import { apcaContrast, contrastRatio, parseColor } from '../color.mjs';

/*------------------------------------------------------------------ color space*/

const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const fromLinear = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);

/** {r,g,b} 0–255 → [r,g,b] 0–1 nonlinear sRGB*/
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

/** OKLCH → sRGB 0–255 (clipped if out of gamut)*/
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

/*---------------------------------------------------------------------------------- solver*/

/** Fit a color to the target ratio against the background: OKLCH L binary search, C limited.*/
export function solveContrast({ from, against, target, step = 28 }) {
  const againstColor = parseColor(against);
  if (!againstColor) throw new Error(`solver: invalid background ${against}`);
  const base = parseColor(from);
  if (!base) throw new Error(`solver: invalid colour ${from}`);
  const o = srgbToOklch(toUnit(base));
  // contrastRatio expects hex text (parseColor does not resolve the object) — intermediate values are converted to hex.
  const contrastAt = (L) => contrastRatio(hex(oklchToSrgb({ L, C: o.C, h: o.h })), against);

  // If the ground is light, go dark, if it is dark, go light.
  const bgL = srgbToOklch(toUnit(againstColor)).L;
  const dir = bgL > 0.5 ? -1 : 1;
  let lo = dir < 0 ? 0 : o.L;
  let hi = dir < 0 ? o.L : 1;
  if (contrastAt(dir < 0 ? 0 : 1) < target) {
    // Try again by lowering the chroma (if the saturated color doesn't hit the mark, it will neutralize)
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
    throw new Error(`solver: ${from} → ${against} cannot reach ${target}:1`);
  }
  for (let i = 0; i < step; i += 1) {
    const mid = (lo + hi) / 2;
    if (contrastAt(mid) >= target) (dir < 0 ? (lo = mid) : (hi = mid));
    else (dir < 0 ? (hi = mid) : (lo = mid));
  }
  const L = dir < 0 ? lo : hi;
  return { hex: hex(oklchToSrgb({ L, C: o.C, h: o.h })), contrast: contrastAt(L), chroma: o.C };
}

/** Status colors: fixed hue (red/green/amber), L resolved to target, text color on top.*/
export function deriveStatusColors(palette) {
  const bg = palette.bg;
  const seeds = { danger: '#d92d20', ok: '#12b76a', warn: '#f79009' };
  const out = {};
  for (const [key, seed] of Object.entries(seeds)) {
    const solved = solveContrast({ from: seed, against: bg, target: 4.5 });
    out[key] = solved.hex;
    // text above status background: choose higher between black/white
    const on = contrastRatio('#ffffff', solved.hex);
    const onDark = contrastRatio('#000000', solved.hex);
    out[`${key}Ink`] = on >= onDark ? '#ffffff' : '#0b0d10';
    if (contrastRatio(out[`${key}Ink`], solved.hex) < 4.5) {
      out[`${key}Ink`] = on >= onDark ? '#ffffff' : '#000000';
    }
  }
  return out;
}

/** Neutral ramp: derives bg-2/surface-2/line from bg in L steps (for verification only).*/
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

/** Select the closest readable aperture for the APCA target, preserving the seed hue/chroma.*/
export function solveApcaContrast({ from, against, target = 60 }) {
  const seed = parseColor(from);
  if (!seed || !parseColor(against)) throw new Error(`APCA solver: invalid colour ${from} / ${against}`);
  const base = srgbToOklch(toUnit(seed));
  let best = null;
  for (let i = 0; i <= 1000; i += 1) {
    const L = i / 1000;
    const color = hex(oklchToSrgb({ L, C: base.C, h: base.h }));
    const lc = Math.abs(apcaContrast(color, against) ?? 0);
    const distance = Math.abs(L - base.L);
    if (lc >= target && (!best || distance < best.distance)) best = { hex: color, contrast: lc, distance };
  }
  if (!best) throw new Error(`APCA solver: ${from} → ${against} cannot reach the Lc ${target} target`);
  return best;
}

export const CORE_PALETTE_TARGETS = Object.freeze({ ink: 4.5, inkSoft: 4.5, inkFaint: 3, accentInk: 4.5, focus: 3, apca: 60 });

/** Palette seeds stay editable; only colors below their contract targets are adjusted. */
export function deriveCorePalette(seeds, targets = CORE_PALETTE_TARGETS) {
  const palette = { ...seeds };
  const solveWcag = (key, against, target) => {
    if (contrastRatio(palette[key], against) < target) {
      palette[key] = solveContrast({ from: palette[key], against, target }).hex;
    }
  };
  if (Math.abs(apcaContrast(palette.ink, palette.bg) ?? 0) < (targets.apca ?? 60)) {
    try {
      palette.ink = solveApcaContrast({ from: palette.ink, against: palette.bg, target: targets.apca ?? 60 }).hex;
    } catch {
      palette.bg = solveApcaContrast({ from: palette.bg, against: palette.ink, target: targets.apca ?? 60 }).hex;
    }
  }
  solveWcag('ink', palette.bg, targets.ink ?? 4.5);
  solveWcag('inkSoft', palette.bg, targets.inkSoft ?? 4.5);
  solveWcag('inkFaint', palette.bg, targets.inkFaint ?? 3);
  solveWcag('accent', palette.bg, targets.focus ?? 3);
  solveWcag('accentInk', palette.accent, targets.accentInk ?? 4.5);
  return palette;
}

/* ------------------------------------------------------------------ self-test */

function selfTest() {
  const cases = [
    { from: '#5a5f66', against: '#fafaf9', target: 4.5, name: 'ink-soft / light ground' },
    { from: '#a9bccd', against: '#0b1118', target: 4.5, name: 'ink-soft / dark background' },
    { from: '#04140f', against: '#38e8c0', target: 4.5, name: 'accent-ink / accent (mint)' },
    { from: '#38e8c0', against: '#0b1118', target: 3, name: 'focus ring' },
  ];
  let failed = 0;
  for (const c of cases) {
    const out = solveContrast(c);
    const ok = out.contrast >= c.target - 0.02;
    if (!ok) failed += 1;
    console.log(`${ok ? '✓' : '×'} ${c.name}: ${out.hex} → ${out.contrast.toFixed(2)}:1 (target ${c.target})`);
  }
  const status = deriveStatusColors({ bg: '#0b1118', ink: '#e9f2fa', accent: '#38e8c0' });
  for (const key of ['danger', 'ok', 'warn']) {
    const r = contrastRatio(status[key], '#0b1118');
    const ok = r >= 4.48;
    if (!ok) failed += 1;
    console.log(`${ok ? '✓' : '×'} status ${key}: ${status[key]} → ${r.toFixed(2)}:1 (target 4.5)`);
    const inkR = contrastRatio(status[`${key}Ink`], status[key]);
    const okInk = inkR >= 4.48;
    if (!okInk) failed += 1;
    console.log(`${okInk ? '✓' : '×'} status ${key}-ink: ${status[`${key}Ink`]} → ${inkR.toFixed(2)}:1 (target 4.5)`);
  }
  const seeded = deriveCorePalette({
    bg: '#fafaf9', bg2: '#f2f2f0', surface: '#ffffff', surface2: '#f7f7f5',
    ink: '#101112', inkSoft: '#5a5f66', inkFaint: '#9aa0a6', accent: '#2563eb',
    accentInk: '#ffffff', line: 'rgba(16,17,18,.10)',
  });
  const seededOk = contrastRatio(seeded.inkFaint, seeded.bg) >= 3 && seeded.inkFaint !== '#9aa0a6';
  if (!seededOk) failed += 1;
  console.log(`${seededOk ? '✓' : '×'} the seed palette fixes a low ink-faint target`);
  const apca = solveApcaContrast({ from: '#a6a29b', against: '#12130f', target: 60 });
  const apcaOk = apca.contrast >= 60;
  if (!apcaOk) failed += 1;
  console.log(`${apcaOk ? '✓' : '×'} the APCA solver hits the Lc ${apca.contrast.toFixed(1)} target`);
  // resolver cannot be regressed: request fails to reach target returns error
  let threw = false;
  try {
    solveContrast({ from: '#ffffff', against: '#fefefe', target: 21 });
  } catch {
    threw = true;
  }
  console.log(`${threw ? '✓' : '×'} an unreachable target raises an error`);
  if (!threw) failed += 1;
  console.log(failed ? `self-test: ${failed} failed` : 'self-test: solver meets targets');
  return failed === 0;
}

if (process.argv[1]?.endsWith('palette.mjs')) {
  process.exit(selfTest() ? 0 : 1);
}
