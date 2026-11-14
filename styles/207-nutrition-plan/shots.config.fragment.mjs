/**
 * 207 · Nutrition Plan — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
h1 { font-size: 48px; max-width: 22ch; }
.panel, .pg-card { border-radius: 12px; }
.btn { border-radius: 10px; min-height: 46px; }
.field { border-radius: 10px; min-height: 46px; font-size: 15px; }
.chip { border-radius: 999px; }
.pg-media { border-radius: 12px; }
.help { font-size: 12px; }
h1 { font-size: 42px; max-width: 22ch; }
.pg-card { border-radius: 16px; }
.pg-band { background: color-mix(in srgb, var(--accent) 7%, var(--bg-2)); }
  `,
};
