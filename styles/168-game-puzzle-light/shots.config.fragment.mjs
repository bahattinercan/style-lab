/**
 * 168 · Puzzle Light — render imzası.
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
h1 { font-size: var(--type-h1); line-height: 1.14; max-width: 22ch; }
h2 { font-size: 24px; }
.pg-media { border-radius: 18px; }
.pg-chart i { border-radius: 6px 6px 0 0; }
  `,
};
