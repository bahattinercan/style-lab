/**
 * 227 · Cast Concrete — render imzası.
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
h1 { font-size: 48px; max-width: 22ch; }
.panel, .pg-card, .pg-media { border-radius: 0; box-shadow: none; }
.pg-card { border-top: 4px solid var(--ink); }
  `,
};
