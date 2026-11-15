/**
 * 202 · Clinical Trial — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); max-width: 22ch; }
.panel, .pg-card { border-radius: 12px; }
.btn { border-radius: 10px; min-height: 46px; }
.field { border-radius: 10px; min-height: 46px; font-size: 15px; }
.chip { border-radius: 999px; }
.pg-media { border-radius: 12px; }
.help { font-size: 12px; }
h1 { font-size: var(--type-h1); max-width: 26ch; }
.pg-table td { font-size: 12.5px; }
  `,
};
