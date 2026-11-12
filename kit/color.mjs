#!/usr/bin/env node
/**
 * kit/color.mjs — renk yardımcıları (tek kaynak).
 *
 * Desteklenen biçimler: #rgb · #rrggbb · #rrggbbaa · rgb() · rgba() (virgül veya boşluk ayraçlı).
 * Kullanım: kit/export-tokens.mjs, kit/report.mjs, kit/check-contrast.mjs
 */

const toLinear = (v) => {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};

/** CSS renk değeri → { r, g, b, a } (r,g,b 0-255; a 0-1). Çözülemezse null. */
export function parseColor(value) {
  if (!value) return null;
  const v = String(value).trim();

  const hex = v.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3) h = [...h].map((c) => c + c).join('');
    if (h.length === 6 || h.length === 8) {
      return {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16),
        a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1,
      };
    }
    return null;
  }

  const rgb = v.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?\s*\)$/i);
  if (rgb) return { r: +rgb[1], g: +rgb[2], b: +rgb[3], a: rgb[4] === undefined ? 1 : +rgb[4] };

  return null;
}

/** Yarı saydam ön planı zemine bindirir. */
export const over = (fg, bg) => ({
  r: fg.r * fg.a + bg.r * (1 - fg.a),
  g: fg.g * fg.a + bg.g * (1 - fg.a),
  b: fg.b * fg.a + bg.b * (1 - fg.a),
  a: 1,
});

/** Göreli parlaklık (WCAG 2.2). */
export const luminance = (c) => 0.2126 * toLinear(c.r) + 0.7152 * toLinear(c.g) + 0.0722 * toLinear(c.b);

/** İki CSS renk değeri arasında kontrast oranı; çözülemezse null. */
export function contrastRatio(fgRaw, bgRaw) {
  const bg = parseColor(bgRaw);
  let fg = parseColor(fgRaw);
  if (!bg || !fg) return null;
  if (fg.a < 1) fg = over(fg, bg);
  const l1 = luminance(fg);
  const l2 = luminance(bg);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

/** Yarı saydam yüzeyin sayfa zemini üzerindeki hâline göre kontrast (cam stilleri için). */
export function contrastOnSurface(fgRaw, surfaceRaw, pageRaw) {
  const surface = parseColor(surfaceRaw);
  const page = parseColor(pageRaw);
  if (!surface || !page) return null;
  const base = surface.a < 1 ? over(surface, page) : surface;
  return contrastRatio(fgRaw, `rgb(${base.r} ${base.g} ${base.b})`);
}

/* ---------- APCA (WCAG 3 taslağı) ---------- */

const APCA = {
  mainTRC: 2.4,
  Rco: 0.2126729,
  Gco: 0.7151522,
  Bco: 0.072175,
  normBG: 0.56,
  normTXT: 0.57,
  revTXT: 0.62,
  revBG: 0.65,
  scaleBoW: 1.14,
  scaleWoB: 1.14,
  loBoWoffset: 0.027,
  loWoBoffset: 0.027,
  blkThrs: 0.022,
  blkClmp: 1.414,
  deltaYmin: 0.0005,
  loClip: 0.1,
};

/** APCA Y: algısal parlaklık (siyah eşiğinde yumuşatılmış). */
function apcaY(c) {
  const ch = (v) => Math.pow(v / 255, APCA.mainTRC);
  const y = APCA.Rco * ch(c.r) + APCA.Gco * ch(c.g) + APCA.Bco * ch(c.b);
  return y > APCA.blkThrs ? y : y + Math.pow(APCA.blkThrs - y, APCA.blkClmp);
}

/**
 * APCA kontrastı (Lc), APCA-W3 0.1.9 formülü.
 * İşaret polariteyi taşır: **pozitif = açık zemin üstünde koyu metin**, negatif = tersi.
 * Gövde metni için |Lc| ≥ 75, büyük/akıcı metin ≥ 60, ikincil metin ≥ 45 önerilir.
 * Çözülemezse null.
 */
export function apcaContrast(textRaw, bgRaw) {
  const bg = parseColor(bgRaw);
  let text = parseColor(textRaw);
  if (!bg || !text) return null;
  if (text.a < 1) text = over(text, bg);

  const Yt = apcaY(text);
  const Yb = apcaY(bg);
  if (Math.abs(Yb - Yt) < APCA.deltaYmin) return 0;

  let sapc;
  let out;
  if (Yb > Yt) {
    sapc = (Math.pow(Yb, APCA.normBG) - Math.pow(Yt, APCA.normTXT)) * APCA.scaleBoW;
    out = sapc < APCA.loClip ? 0 : sapc - APCA.loBoWoffset;
  } else {
    sapc = (Math.pow(Yb, APCA.revBG) - Math.pow(Yt, APCA.revTXT)) * APCA.scaleWoB;
    out = sapc > -APCA.loClip ? 0 : sapc + APCA.loWoBoffset;
  }
  return Math.round(out * 1000) / 10;
}
