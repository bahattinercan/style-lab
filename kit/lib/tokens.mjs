/**
 * kit/lib/tokens.mjs — token değerlerini hedef-bağımsız tiplere çeviren ortak ayrıştırıcılar.
 *
 * Neden: `tokens.json` insan için yazılmış CSS/prose karışımı taşır
 * ("ease-out / cubic-bezier(.2,.6,.2,1)", "0.5s", "0 1px 2px rgba(16,17,18,.06)",
 * "-0.03em"). CSS dışındaki hedefler (Flutter/Dart, SwiftUI, Compose) sayı ister.
 * Bu modül tek yerde ayrıştırır; `kit/normalize-motion.mjs` ve `kit/export/*`
 * aynı fonksiyonları kullanır — ikinci bir ayrıştırıcı yazılmaz.
 */

/* CSS adlandırılmış eğriler → kontrol noktaları (x1,y1,x2,y2) */
export const NAMED_CURVES = {
  linear: [0, 0, 1, 1],
  ease: [0.25, 0.1, 0.25, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1],
};

/**
 * GSAP eğri adları → yaklaşık cubic-bezier. Yaklaşımdır: `approximated: true`
 * ile işaretlenir, hedef kendi eğrisini üretirken bu değeri kullanır.
 */
export const GSAP_CURVES = {
  'power1.out': [0.25, 0.46, 0.45, 0.94],
  'power2.out': [0.215, 0.61, 0.355, 1],
  'power3.out': [0.165, 0.84, 0.44, 1],
  'power4.out': [0.23, 1, 0.32, 1],
  'sine.out': [0.39, 0.575, 0.565, 1],
  'expo.out': [0.19, 1, 0.22, 1],
  'circ.out': [0.075, 0.82, 0.165, 1],
};

/** back.out(n): taşma miktarı n ile büyür; y1 = 1 + 0.82·(n−1) yaklaşımı (n=1.7 → 1.56) */
export function gsapBackOut(overshoot) {
  const n = Number.isFinite(overshoot) ? overshoot : 1.7;
  return [0.34, Number((1 + 0.82 * (n - 1)).toFixed(3)), 0.64, 1];
}

/** "— açıklama", " - açıklama", ") sonrası serbest metin" kırpılır */
function stripProse(value) {
  return String(value)
    .split('—')[0]
    .split(' - ')[0]
    .replace(/\)\s+[^)]*$/, ')')
    .trim();
}

/**
 * Eğri metni → { kind, ... }. Ayrıştırılamazsa null döner (çağıran hata üretir).
 * Öncelik: cubic-bezier > steps > GSAP > CSS adlandırılmış.
 */
export function parseCurve(value) {
  if (value == null) return null;
  const raw = String(value).trim();
  const text = stripProse(raw);

  const cubic = text.match(/cubic-bezier\(\s*([^)]+)\)/);
  if (cubic) {
    const points = cubic[1].split(',').map((n) => Number(n.trim()));
    if (points.length === 4 && points.every((n) => Number.isFinite(n))) {
      return { kind: 'cubic', points, css: `cubic-bezier(${points.join(',')})`, source: raw };
    }
  }

  const steps = text.match(/steps\(\s*([\d.]+)\s*(?:[–-]\s*([\d.]+))?\s*(?:,\s*(start|end|jump-start|jump-end|jump-none|jump-both))?\s*\)/);
  if (steps) {
    const from = Number(steps[1]);
    const to = steps[2] ? Number(steps[2]) : from;
    return {
      kind: 'steps',
      steps: to,
      range: steps[2] ? [from, to] : null,
      position: steps[3] ?? 'end',
      css: steps[2] ? `steps(${from}–${to}, ${steps[3] ?? 'end'})` : `steps(${from}, ${steps[3] ?? 'end'})`,
      source: raw,
    };
  }

  const gsap = text.match(/\b(power[1-4]|sine|expo|circ|back)\.out(?:\(\s*([\d.]+)\s*\))?/);
  if (gsap) {
    const name = `${gsap[1]}.out`;
    if (gsap[1] === 'back') {
      const overshoot = gsap[2] ? Number(gsap[2]) : 1.7;
      return {
        kind: 'cubic',
        points: gsapBackOut(overshoot),
        css: `cubic-bezier(${gsapBackOut(overshoot).join(',')})`,
        gsap: `${name}(${overshoot})`,
        approximated: true,
        source: raw,
      };
    }
    const points = GSAP_CURVES[name];
    if (points) {
      return { kind: 'cubic', points, css: `cubic-bezier(${points.join(',')})`, gsap: name, approximated: true, source: raw };
    }
  }

  const named = text.match(/\b(ease-in-out|ease-out|ease-in|ease|linear)\b/);
  if (named) {
    return { kind: 'named', name: named[1], points: NAMED_CURVES[named[1]], css: named[1], source: raw };
  }

  return null;
}

/** "0.5s" | "110ms" | "0.01ms" → ms (sayı). Ayrıştırılamazsa null. */
export function parseDurationMs(value) {
  if (value == null) return null;
  if (typeof value === 'number') return value;
  const m = String(value).match(/([\d.]+)\s*(ms|s)\b/);
  if (!m) return null;
  const n = Number(m[1]);
  if (!Number.isFinite(n)) return null;
  return Number((m[2] === 's' ? n * 1000 : n).toFixed(2));
}

/** "12px" | "0" → sayı. Ayrıştırılamazsa null. */
export function parsePx(value) {
  if (value == null) return null;
  if (typeof value === 'number') return value;
  const m = String(value).match(/(-?[\d.]+)\s*px\b/);
  if (m) return Number(m[1]);
  const bare = String(value).trim().match(/^(-?[\d.]+)$/);
  return bare ? Number(bare[1]) : null;
}

/** "-0.03em" → em sayısı (px'e çevirmek hedefin font boyutuna bağlı) */
export function parseEm(value) {
  if (value == null) return null;
  const m = String(value).match(/(-?[\d.]+)\s*em\b/);
  if (m) return Number(m[1]);
  const bare = String(value).trim().match(/^(-?[\d.]+)$/);
  return bare ? Number(bare[1]) : null;
}

/** "+125%" | "-40%" → { percent, sign } */
export function parsePercent(value) {
  if (value == null) return null;
  const m = String(value).match(/([+-]?)([\d.]+)\s*%/);
  if (!m) return null;
  const n = Number(m[2]);
  return { percent: m[1] === '-' ? -n : n, sign: m[1] === '-' ? -1 : 1 };
}

/** "top 86%" → 86 (scroll tetikleyicisinin yüzdesi) */
export function parseTrigger(value) {
  if (value == null) return null;
  const m = String(value).match(/top\s+([\d.]+)\s*%/);
  return m ? Number(m[1]) : null;
}

/** Sayı ya da sayısal metin ("1.015", "0.04") → sayı */
export function parseNumber(value) {
  if (value == null) return null;
  if (typeof value === 'number') return value;
  const n = Number(String(value).trim());
  return Number.isFinite(n) ? n : null;
}

/**
 * "#rrggbb" | "#rgb" | "#rrggbbaa" | "rgba(r,g,b,a)" | "rgb(r,g,b)" | "transparent"
 * → { r, g, b, a } (0–255, a 0–1). Ayrıştırılamazsa null (gradient vb.).
 */
export function parseColor(value) {
  if (value == null) return null;
  const text = String(value).trim();
  if (text === 'transparent') return { r: 0, g: 0, b: 0, a: 0 };

  if (text.startsWith('#')) {
    const hex = text.slice(1);
    if (hex.length === 3) {
      const [r, g, b] = [...hex].map((c) => parseInt(c + c, 16));
      return { r, g, b, a: 1 };
    }
    if (hex.length === 6) {
      return { r: parseInt(hex.slice(0, 2), 16), g: parseInt(hex.slice(2, 4), 16), b: parseInt(hex.slice(4, 6), 16), a: 1 };
    }
    if (hex.length === 8) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
        a: Number((parseInt(hex.slice(6, 8), 16) / 255).toFixed(3)),
      };
    }
    return null;
  }

  const fn = text.match(/^rgba?\(([^)]+)\)$/);
  if (fn) {
    const parts = fn[1].split(/[,/]/).map((p) => p.trim()).filter(Boolean);
    if (parts.length < 3) return null;
    const channel = (p) => (p.endsWith('%') ? Math.round((Number(p.slice(0, -1)) / 100) * 255) : Number(p));
    const [r, g, b] = parts.slice(0, 3).map(channel);
    let a = 1;
    if (parts[3] != null) {
      a = parts[3].endsWith('%') ? Number(parts[3].slice(0, -1)) / 100 : Number(parts[3]);
    }
    if (![r, g, b, a].every((n) => Number.isFinite(n))) return null;
    return { r, g, b, a: Number(a.toFixed(3)) };
  }

  return null;
}

/** "linear-gradient(180deg, #fff, #d6ecff)" → ["#ffffff", "#d6ecff"] */
export function parseGradientStops(value) {
  if (value == null) return null;
  const text = String(value).trim();
  if (!/^linear-gradient\(/i.test(text)) return null;
  const inner = text.slice(text.indexOf('(') + 1, text.lastIndexOf(')'));
  const stops = inner
    .split(',')
    .map((p) => p.trim())
    .filter((p) => p.startsWith('#') || p.startsWith('rgb'));
  return stops.length >= 2 ? stops : null;
}

function splitTopLevel(value) {
  const parts = [];
  let depth = 0;
  let buf = '';
  for (const ch of value) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) {
      parts.push(buf);
      buf = '';
      continue;
    }
    buf += ch;
  }
  if (buf.trim()) parts.push(buf);
  return parts.map((p) => p.trim()).filter(Boolean);
}

/**
 * CSS box-shadow → [{ dx, dy, blur, spread, color|colorRef, inset }]
 * "none" → []. `var(--line)` gibi referanslar colorRef olarak korunur.
 */
export function parseShadows(value) {
  if (value == null) return [];
  const text = String(value).trim();
  if (text === '' || text === 'none') return [];

  return splitTopLevel(text).map((part) => {
    const tokens = part.split(/\s+/).filter(Boolean);
    const inset = tokens.includes('inset');
    const colorToken = tokens.find((t) => t.startsWith('#') || t.startsWith('rgb') || t === 'transparent' || t.startsWith('var('));
    const lengths = tokens
      .filter((t) => !t.startsWith('#') && !t.startsWith('rgb') && !t.startsWith('var(') && t !== 'inset' && t !== 'transparent')
      .map((t) => parsePx(t))
      .filter((n) => n != null);

    const shadow = {
      dx: lengths[0] ?? 0,
      dy: lengths[1] ?? 0,
      blur: lengths[2] ?? 0,
      spread: lengths[3] ?? 0,
      inset,
    };
    if (colorToken?.startsWith('var(')) {
      shadow.colorRef = colorToken.match(/var\((--[\w-]+)\)/)?.[1] ?? null;
      shadow.color = null;
    } else {
      shadow.color = parseColor(colorToken);
      shadow.colorRef = null;
    }
    return shadow;
  });
}
