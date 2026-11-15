/**
 * 178 · Access Audit — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); max-width: 24ch; }
h2 { font-size: 24px; }
h3 { font-size: 17px; }
body { font-size: 14px; }
.panel, .pg-card { border-radius: 4px; }
.btn { min-height: 38px; padding: 0 14px; font-size: 13px; border-radius: 4px; }
.field { min-height: 38px; font-size: 13px; }
.chip { border-radius: 3px; font-size: 10px; letter-spacing: .1em; }
.pg-table td, .pg-table th { padding: 6px 0; }
.pg-sec { padding: 22px 56px; }
.pg-trio .pg-card { border-top-width: 1px; }
.mono, .num, .pg-cap { font-variant-numeric: tabular-nums; }
h1 { font-size: var(--type-h1); max-width: 28ch; }
.pg-table td, .pg-table th { font-size: 11.5px; }
.pg-table tr:nth-child(even) { background: var(--surface-2); }
  `,
};
