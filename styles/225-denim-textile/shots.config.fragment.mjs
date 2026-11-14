/**
 * 225 · Denim Textile — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
h1 { font-size: 52px; font-weight: 400; }
h2 { font-size: 28px; font-weight: 400; }
.panel, .pg-card { border-radius: 2px; }
.pg-media { border-radius: 2px; }
.btn { border-radius: 2px; letter-spacing: .06em; }
.field { border-radius: 2px; }
.chip { border-radius: 2px; }
.pg-media::after { content: ''; position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(color-mix(in srgb, var(--ink) 18%, transparent) .5px, transparent .5px); background-size: 4px 4px; opacity: .5; }
h1 { font-size: 46px; max-width: 22ch; }
.pg-sec { border-bottom: 1px solid var(--line); box-shadow: 0 3px 0 -2px var(--line); }
.pg-table td { font-family: var(--font-mono); font-size: 11.5px; }
  `,
};
