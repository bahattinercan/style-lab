/**
 * kit/lib/dtcg.mjs — DTCG 2025.10 (`$value`/`$type`) output.
 *
 * Cause: catalog was generating three custom formats (CSS, Tailwind @theme, Figma variables). DTCG
 * Since 2025.10 is stable v1 (Tokens Studio, Style Dictionary v5, Figma plugins support this format
 * reading) the fourth output is given in standard format; The three existing files are preserved.
 *
 * Scope: color (colorSpace + components + hex replacement), dimension (radius, typography scale),
 *fontFamily. Out of scope (intentional): tracking in em (no units in schema), CSS shadow text
 * (parsing varies per target), process component recipes.*/
import { parseColor } from '../color.mjs';

const round4 = (n) => Math.round(n * 10000) / 10000;
/** 10 colors in token contract — the order is the same as the CSS block.*/
export const COLOR_KEYS = ['bg', 'bg-2', 'surface', 'surface-2', 'ink', 'ink-soft', 'ink-faint', 'accent', 'accent-ink', 'line'];

/** DTCG color value: colorSpace + components (0–1) + alpha + hex replacement.*/
export function dtcgColor(raw) {
  const c = parseColor(raw);
  if (!c) return null;
  const hex = '#' + [c.r, c.g, c.b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('');
  const value = { colorSpace: 'srgb', components: [round4(c.r / 255), round4(c.g / 255), round4(c.b / 255)], hex };
  if (c.a !== 1) value.alpha = c.a;
  return value;
}

/** "8px" → DTCG dimension; Units like em/calc are `null` (no equivalent in the diagram).*/
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
 * Style list + CSS variable dictionary → DTCG document.
 * @param {Array<{slug:string, tokens:{name?:string, typography?:{scale?:Record<string,string>}}|null}>} styles
 * @param {{light: Record<string, Record<string,string>>}} css*/
export function buildDtcg(styles, css) {
  const out = {
    $description:
      'style-lab v6 token set · DTCG 2025.10 ($value/$type) · source: kit/tokens.css + styles/<nn-slug>/tokens.json · manufacturer: kit/export-tokens.mjs',
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
