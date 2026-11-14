/**
 * 240 · Numerals Display — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
h1 { font-size: 72px; line-height: .98; letter-spacing: -.035em; max-width: 18ch; }
h2 { font-size: 32px; line-height: 1.08; }
h3 { font-size: 20px; }
.panel, .pg-card, .pg-media { border-radius: 0; box-shadow: none; }
.btn { border-radius: 0; }
.field { border-radius: 0; }
.chip { border-radius: 0; font-family: var(--font-mono); }
.pg-sec { padding: 32px 56px; }
.pg-logos-row { font-family: var(--font-display); font-size: 18px; }
h1 { font-size: 40px; max-width: 26ch; }
.pg-band b { font-size: 72px; font-variant-numeric: tabular-nums; line-height: .9; }
.pg-band span { font-family: var(--font-mono); font-size: 10.5px; }
  `,
};
