/**
 * 171 · Pinball Neon — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
h1, h2, h3 { text-transform: uppercase; }
.btn { text-transform: uppercase; letter-spacing: .08em; font-size: 12px; min-height: 44px; border-radius: 2px; }
.btn.ghost { border-color: color-mix(in srgb, var(--ink) 40%, transparent); }
.panel, .pg-card, .visual-card { border-radius: 2px; box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 22%, transparent); }
.chip { border-radius: 2px; text-transform: uppercase; letter-spacing: .12em; }
.field { border-radius: 2px; font-variant-numeric: tabular-nums; }
.nav { border-bottom: 1px solid color-mix(in srgb, var(--accent) 30%, var(--line)); }
.pg-band { border-color: color-mix(in srgb, var(--accent) 26%, var(--line)); }
.eyebrow, .label, .mono, .pg-cap { font-variant-numeric: tabular-nums; }
.kpi strong, .num, .pg-band b { font-variant-numeric: tabular-nums; }
h1 { font-size: var(--type-h1); line-height: 1; max-width: 20ch; }
h2 { font-size: 28px; }
.pg-band { background-image: repeating-linear-gradient(12deg, color-mix(in srgb, var(--accent) 10%, transparent) 0 1px, transparent 1px 18px); }
.pg-num { color: var(--accent); font-family: var(--font-mono); }
  `,
};
