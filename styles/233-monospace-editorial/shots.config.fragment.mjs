/**
 * 233 · Monospace Editorial — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); line-height: .98; letter-spacing: -.035em; max-width: 18ch; }
h2 { font-size: 32px; line-height: 1.08; }
h3 { font-size: 20px; }
.panel, .pg-card, .pg-media { border-radius: 0; box-shadow: none; }
.btn { border-radius: 0; }
.field { border-radius: 0; }
.chip { border-radius: 0; font-family: var(--font-mono); }
.pg-sec { padding: 32px 56px; }
.pg-logos-row { font-family: var(--font-display); font-size: 18px; }
h1 { font-size: var(--type-h1); line-height: 1.1; max-width: 26ch; font-weight: 700; }
h2 { font-size: 24px; font-weight: 600; }
body, .lede, .pg-p { font-family: var(--font-mono); font-size: 15px; line-height: 1.72; }
  `,
};
