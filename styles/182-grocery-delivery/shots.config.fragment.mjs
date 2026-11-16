/**
 * 182 · Grocery Delivery — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
.btn { border-radius: 8px; }
.field { border-radius: 8px; }
.panel, .pg-card { border-radius: 12px; }
.pg-media { border-radius: 12px; }
.price, .num { font-variant-numeric: tabular-nums; }
.pg-table td { padding: 9px 0; }
h1 { font-size: var(--type-h1); max-width: 22ch; }
.pg-card { border-radius: 14px; }
.pg-chart i { border-radius: 6px 6px 0 0; }
  `,
};
