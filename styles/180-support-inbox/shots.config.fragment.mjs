/**
 * 180 · Support Inbox — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
h1 { font-size: 40px; max-width: 24ch; }
h2 { font-size: 24px; }
h3 { font-size: 17px; }
body { font-size: 14px; }
.panel, .pg-card { border-radius: 4px; }
.btn { min-height: 38px; padding: 0 14px; font-size: 13px; border-radius: 4px; }
.field { min-height: 38px; font-size: 13px; }
.chip { border-radius: 3px; font-size: 9.5px; letter-spacing: .1em; }
.pg-table td, .pg-table th { padding: 6px 0; }
.pg-sec { padding: 22px 56px; }
.pg-trio .pg-card { border-top-width: 1px; }
.mono, .num, .pg-cap { font-variant-numeric: tabular-nums; }
h1 { font-size: 38px; max-width: 26ch; }
.pg-card { box-shadow: 0 1px 2px rgba(27,24,21,.06); }
  `,
};
