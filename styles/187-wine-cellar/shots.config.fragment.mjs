/**
 * 187 · Wine Cellar — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
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
h1 { font-size: var(--type-h1); letter-spacing: .03em; max-width: 22ch; }
h2 { font-size: 26px; }
.pg-table td { font-size: 12.5px; }
  `,
};
