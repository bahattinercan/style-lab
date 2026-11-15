/**
 * 239 · Italic Accent — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
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
h1, h2 { font-style: italic; font-weight: 400; }h1 { font-size: var(--type-h1); max-width: 22ch; }
blockquote, .pg-media .pg-cap { font-style: italic; }
  `,
};
