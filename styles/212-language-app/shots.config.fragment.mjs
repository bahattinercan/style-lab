/**
 * 212 · Language App — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); }
.panel, .pg-card { border-radius: 14px; }
.btn { border-radius: 12px; min-height: 46px; font-size: 15px; }
.field { border-radius: 12px; }
.chip { border-radius: 999px; background: color-mix(in srgb, var(--accent) 12%, var(--surface-2)); }
.pg-media { border-radius: 14px; }
.pg-band { background: color-mix(in srgb, var(--accent) 8%, var(--bg-2)); }
h1 { font-size: var(--type-h1); max-width: 22ch; }
.pg-card { border-radius: 16px; }
.pg-chart i { border-radius: 8px; }
  `,
};
