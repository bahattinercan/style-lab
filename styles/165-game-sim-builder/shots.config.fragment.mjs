/**
 * 165 · Sim Builder — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: 'upper',
  extraCss: `
h1, h2, h3 { text-transform: uppercase; }
.btn { text-transform: uppercase; letter-spacing: .08em; font-size: 12px; min-height: 44px; border-radius: 2px; }
.btn.ghost { border-color: color-mix(in srgb, var(--ink) 40%, transparent); }
.panel, .pg-card, .visual-card { border-radius: 2px; box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 22%, transparent); }
.chip { border-radius: 2px; text-transform: uppercase; letter-spacing: .12em; }
.field { border-radius: 2px; font-variant-numeric: tabular-nums; }
.nav { border-bottom: 1px solid color-mix(in srgb, var(--accent) 30%, var(--line)); }
.pg-band { border-color: color-mix(in srgb, var(--accent) 26%, var(--line)); }
.eyebrow, .label, .mono, .pg-cap { font-variant-numeric: tabular-nums; }
.kpi strong, .num, .pg-band b { font-variant-numeric: tabular-nums; }
h1 { font-size: 44px; line-height: 1.1; max-width: 24ch; }
h2 { font-size: 26px; }
.pg-band { background: color-mix(in srgb, var(--accent) 6%, var(--bg-2)); }
.pg-meter i { background: var(--accent); }
  `,
};
