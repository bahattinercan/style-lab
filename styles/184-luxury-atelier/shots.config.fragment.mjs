/**
 * 184 · Luxury Atelier — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
.btn { border-radius: 8px; }
.field { border-radius: 8px; }
.panel, .pg-card { border-radius: 12px; }
.pg-media { border-radius: 12px; }
.price, .num { font-variant-numeric: tabular-nums; }
.pg-table td { padding: 9px 0; }
h1 { font-size: var(--type-h1); font-weight: 300; line-height: 1.02; max-width: 20ch; }
h2 { font-size: 32px; font-weight: 400; }
.pg-card, .pg-media { border-radius: 0; box-shadow: none; }
.pg-sec { padding: 42px 56px; }
  `,
};
