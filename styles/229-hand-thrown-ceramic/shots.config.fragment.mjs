/**
 * 229 · Hand-thrown Ceramic — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); font-weight: 400; }
h2 { font-size: 28px; font-weight: 400; }
.panel, .pg-card { border-radius: 2px; }
.pg-media { border-radius: 2px; }
.btn { border-radius: 2px; letter-spacing: .06em; }
.field { border-radius: 2px; }
.chip { border-radius: 2px; }
.pg-media::after { content: ''; position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(color-mix(in srgb, var(--ink) 18%, transparent) .5px, transparent .5px); background-size: 4px 4px; opacity: .5; }
h1 { font-size: var(--type-h1); max-width: 22ch; }
.pg-media { border-radius: 18px 12px 16px 10px; }
.pg-card { border-radius: 16px 12px 14px 10px; }
  `,
};
