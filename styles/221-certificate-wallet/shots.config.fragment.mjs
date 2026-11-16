/**
 * 221 · Certificate Wallet — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); }
.panel, .pg-card { border-radius: 14px; }
.btn { border-radius: 12px; min-height: 46px; font-size: 15px; }
.field { border-radius: 12px; }
.chip { border-radius: 999px; background: color-mix(in srgb, var(--accent) 12%, var(--surface-2)); }
.pg-media { border-radius: 14px; }
.pg-band { background: color-mix(in srgb, var(--accent) 8%, var(--bg-2)); }
h1 { font-size: var(--type-h1); letter-spacing: .03em; max-width: 24ch; }
.pg-card { border: 1px solid color-mix(in srgb, var(--accent) 30%, var(--line)); }
  `,
};
