/**
 * 230 · Raw Steel — render imzası.
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
.pg-media { background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 8%, transparent) 0 1px, transparent 1px 8px); }
.pg-table td { font-family: var(--font-mono); font-size: 11px; }
  `,
};
