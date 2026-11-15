/**
 * 246 · Orbital Logistics — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); max-width: 22ch; }
.panel, .pg-card { border-radius: 6px; }
.pg-media { border-radius: 6px; }
.btn { border-radius: 4px; letter-spacing: .04em; }
.field { border-radius: 4px; font-family: var(--font-mono); font-size: 13px; }
.chip { border-radius: 3px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .12em; }
.pg-cap { letter-spacing: .22em; }
.pg-band { background: color-mix(in srgb, var(--accent) 6%, var(--bg-2)); }
h1 { font-size: var(--type-h1); letter-spacing: .04em; max-width: 24ch; }
.pg-media { background-image: repeating-radial-gradient(circle at 50% 60%, color-mix(in srgb, var(--accent) 12%, transparent) 0 1px, transparent 1px 36px); }
.pg-table td { font-family: var(--font-mono); font-size: 11px; }
  `,
};
