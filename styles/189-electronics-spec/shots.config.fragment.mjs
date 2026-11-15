/**
 * 189 · Electronics Spec — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
.btn { border-radius: 8px; }
.field { border-radius: 8px; }
.panel, .pg-card { border-radius: 12px; }
.pg-media { border-radius: 12px; }
.price, .num { font-variant-numeric: tabular-nums; }
.pg-table td { padding: 9px 0; }
h1 { font-size: var(--type-h1); max-width: 26ch; }
.pg-table td { font-size: 12.5px; }
.pg-table td:first-child { color: var(--ink-soft); }
.pg-table td:last-child { font-family: var(--font-mono); }
  `,
};
