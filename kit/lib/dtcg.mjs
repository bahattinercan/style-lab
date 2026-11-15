/**
 * kit/lib/dtcg.mjs — DTCG 2025.10 (`$value`/`$type`) çıktısı.
 *
 * Neden: katalog üç özel biçim üretiyordu (CSS, Tailwind @theme, Figma variables). DTCG
 * 2025.10 stable v1 olduğundan (Tokens Studio, Style Dictionary v5, Figma eklentileri bu biçimi
 * okuyor) dördüncü çıktı standart biçimde verilir; mevcut üç dosya korunur.
 *
 * Kapsam: renk (colorSpace + components + hex yedeği), dimension (radius, tipografi ölçeği),
 * fontFamily. Kapsam dışı (bilinçli): em cinsinden tracking (şemada birim yok), CSS gölge metni
 * (ayrıştırma hedef başına değişir), prose bileşen reçeteleri.
 */
import { parseColor } from '../color.mjs';

const round4 = (n) => Math.round(n * 10000) / 10000;
/** token sözleşmesindeki 10 renk — sıra CSS bloğuyla aynıdır. */
export const COLOR_KEYS = ['bg', 'bg-2', 'surface', 'surface-2', 'ink', 'ink-soft', 'ink-faint', 'accent', 'accent-ink', 'line'];

/** DTCG renk değeri: colorSpace + components (0–1) + alpha + hex yedeği. */
export function dtcgColor(raw) {
  const c = parseColor(raw);
  if (!c) return null;
  const hex = '#' + [c.r, c.g, c.b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('');
  const value = { colorSpace: 'srgb', components: [round4(c.r / 255), round4(c.g / 255), round4(c.b / 255)], hex };
  if (c.a !== 1) value.alpha = c.a;
  return value;
}

/** "8px" → DTCG dimension; em/calc gibi birimler `null` (şemada karşılığı yok). */
export function dtcgDimension(raw) {
  const m = String(raw ?? '').trim().match(/^(-?[\d.]+)px$/);
  return m ? { value: Number(m[1]), unit: 'px' } : null;
}

/** `"Inter, system-ui, sans-serif"` → ["Inter", "system-ui", "sans-serif"] */
export function dtcgFontStack(raw) {
  return String(raw ?? '')
    .split(',')
    .map((x) => x.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

/**
 * Stil listesi + CSS değişken sözlüğü → DTCG belgesi.
 * @param {Array<{slug:string, tokens:{name?:string, typography?:{scale?:Record<string,string>}}|null}>} styles
 * @param {{light: Record<string, Record<string,string>>}} css
 */
export function buildDtcg(styles, css) {
  const out = {
    $description:
      'style-lab v6 token seti · DTCG 2025.10 ($value/$type) · kaynak: kit/tokens.css + styles/<nn-slug>/tokens.json · üretici: kit/export-tokens.mjs',
  };
  for (const s of styles) {
    const v = css.light[s.slug];
    if (!v) continue;
    const node = {};

    const color = {};
    for (const key of COLOR_KEYS) {
      const value = dtcgColor(v[key]);
      if (value) color[key] = { $value: value, $description: `${s.tokens?.name ?? s.slug} · --${key}` };
    }
    if (Object.keys(color).length) node.color = { $type: 'color', ...color };

    const size = {};
    for (const key of ['radius', 'radius-lg']) {
      const value = dtcgDimension(v[key]);
      if (value) size[key] = { $value: value };
    }
    if (Object.keys(size).length) node.size = { $type: 'dimension', ...size };

    const font = {};
    for (const [key, raw] of [
      ['display', v['font-display']],
      ['body', v['font-body']],
      ['mono', v['font-mono']],
    ]) {
      const stack = dtcgFontStack(raw);
      if (stack.length) font[key] = { $value: stack };
    }
    if (Object.keys(font).length) node.font = { $type: 'fontFamily', ...font };

    const fontSize = {};
    for (const [key, raw] of Object.entries(s.tokens?.typography?.scale ?? {})) {
      const value = dtcgDimension(raw);
      if (value) fontSize[key] = { $value: value };
    }
    if (Object.keys(fontSize).length) node['font-size'] = { $type: 'dimension', ...fontSize };

    out[s.slug] = node;
  }
  return out;
}
