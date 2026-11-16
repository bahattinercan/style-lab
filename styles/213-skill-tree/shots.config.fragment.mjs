/**
 * 213 · Skill Tree — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); }
.panel, .pg-card { border-radius: 14px; }
.btn { border-radius: 12px; min-height: 46px; font-size: 15px; }
.field { border-radius: 12px; }
.chip { border-radius: 999px; background: color-mix(in srgb, var(--accent) 12%, var(--surface-2)); }
.pg-media { border-radius: 14px; }
.pg-band { background: color-mix(in srgb, var(--accent) 8%, var(--bg-2)); }
h1 { font-size: var(--type-h1); max-width: 26ch; }
.pg-media { background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 28px); }
  `,
};
