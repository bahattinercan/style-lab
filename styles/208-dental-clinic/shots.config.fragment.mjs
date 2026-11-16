/**
 * 208 · Dental Clinic — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); max-width: 22ch; }
.panel, .pg-card { border-radius: 12px; }
.btn { border-radius: 10px; min-height: 46px; }
.field { border-radius: 10px; min-height: 46px; font-size: 15px; }
.chip { border-radius: 999px; }
.pg-media { border-radius: 12px; }
.help { font-size: 12px; }
h1 { font-size: var(--type-h1); max-width: 22ch; }
.pg-card { border-radius: 14px; }
.pg-media { border-radius: 14px; }
  `,
};
