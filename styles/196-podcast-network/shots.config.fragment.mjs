/**
 * 196 · Podcast Network — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
h1 { font-size: 58px; line-height: 1.04; max-width: 20ch; }
h2 { font-size: 32px; font-weight: 400; }
h3 { font-size: 22px; font-weight: 500; }
body, .lede { font-size: 17px; line-height: 1.68; }
.panel, .pg-card { border-radius: 0; box-shadow: none; }
.pg-media { border-radius: 0; }
.btn { border-radius: 0; min-height: 46px; letter-spacing: .04em; }
.field { border-radius: 0; }
.chip { border-radius: 0; }
.pg-sec { padding: 34px 56px; }
h1 { font-size: 44px; max-width: 24ch; }
.pg-card { border-radius: 10px; }
  `,
};
