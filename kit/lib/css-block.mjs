/**
 * kit/lib/css-block.mjs — The only parser that reads CSS variable blocks.
 *
 * Usage: `kit/apply-fragments.mjs` (fragment → tokens.css) and `kit/check-schema.mjs`
 * (tokens.json ↔ token-block.css ↔ tokens.css parity). A second parser is not written:
 * two different parsers produce gates that say "synchronous" but miss drift.*/

/** Returns the balanced `{...}` block from the selector (comment/quote aware).*/
export function readBlock(css, selector) {
  const i = css.indexOf(selector);
  if (i < 0) return null;
  const open = css.indexOf('{', i);
  if (open < 0) return null;
  let depth = 0;
  let quote = null;
  for (let p = open; p < css.length; p += 1) {
    const ch = css[p];
    if (quote) {
      if (ch === '\\') p += 1;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '{') depth += 1;
    else if (ch === '}') {
      depth -= 1;
      if (depth === 0) return css.slice(i, p + 1);
    }
  }
  return null;
}

/** Converts the block body to `[['--bg', '#fff'], …]` pairs (last notification wins).*/
export function parsePairs(block) {
  const body = block.slice(block.indexOf('{') + 1, block.lastIndexOf('}'));
  const clean = body.replace(/\/\*[\s\S]*?\*\//g, ' ');
  const out = [];
  for (const part of clean.split(';')) {
    const t = part.trim();
    if (!t) continue;
    const m = t.match(/^(--[a-z0-9-]+)\s*:\s*([\s\S]+)$/i);
    if (!m) throw new Error(`unparsable declaration: ${t.slice(0, 70)}`);
    out.push([m[1], m[2].replace(/\s+/g, ' ').trim()]);
  }
  const seen = new Map();
  for (const [k, v] of out) seen.set(k, v);
  return [...seen.entries()];
}

/** Converts doubles to dictionary: { '--bg': '#fff' }*/
export function pairsToMap(pairs) {
  return Object.fromEntries(pairs);
}
