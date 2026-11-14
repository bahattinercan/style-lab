/**
 * 203 · Lab Protocol — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
h1 { font-size: 48px; max-width: 22ch; }
.panel, .pg-card { border-radius: 12px; }
.btn { border-radius: 10px; min-height: 46px; }
.field { border-radius: 10px; min-height: 46px; font-size: 15px; }
.chip { border-radius: 999px; }
.pg-media { border-radius: 12px; }
.help { font-size: 12px; }
h1 { font-size: 38px; max-width: 26ch; }
.pg-card { border-left: 2px solid color-mix(in srgb, var(--accent) 44%, var(--line)); }
  `,
};
