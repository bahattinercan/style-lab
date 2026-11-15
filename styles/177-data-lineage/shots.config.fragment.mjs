/**
 * 177 · Data Lineage — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
h1 { font-size: 40px; max-width: 24ch; }
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
h1 { font-size: 38px; max-width: 26ch; }
.pg-media { background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 24px); }
.pg-table td { font-family: var(--font-mono); font-size: 11px; }
  `,
};
