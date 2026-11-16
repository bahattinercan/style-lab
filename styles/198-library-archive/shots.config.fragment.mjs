/**
 * 198 · Library Archive — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); line-height: 1.04; max-width: 20ch; }
h2 { font-size: 32px; font-weight: 400; }
h3 { font-size: 22px; font-weight: 500; }
body, .lede { font-size: 17px; line-height: 1.68; }
.panel, .pg-card { border-radius: 0; box-shadow: none; }
.pg-media { border-radius: 0; }
.btn { border-radius: 0; min-height: 46px; letter-spacing: .04em; }
.field { border-radius: 0; }
.chip { border-radius: 0; }
.pg-sec { padding: 34px 56px; }
h1 { font-size: var(--type-h1); max-width: 24ch; }
.pg-table td { font-size: 12.5px; }
.pg-table td:first-child, .pg-table td:last-child { font-family: var(--font-mono); }
  `,
};
