/**
 * 210 · Genomics Lab — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); max-width: 22ch; }
.panel, .pg-card { border-radius: 12px; }
.btn { border-radius: 10px; min-height: 46px; }
.field { border-radius: 10px; min-height: 46px; font-size: 15px; }
.chip { border-radius: 999px; }
.pg-media { border-radius: 12px; }
.help { font-size: 12px; }
h1 { font-size: var(--type-h1); max-width: 26ch; }
.pg-media { background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 24px); }
.pg-table td { font-family: var(--font-mono); font-size: 11px; }
  `,
};
