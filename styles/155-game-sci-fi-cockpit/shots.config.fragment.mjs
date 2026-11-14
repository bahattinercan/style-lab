/**
 * 155 · Sci-Fi Cockpit — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'grid',
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
h1 { font-size: 40px; letter-spacing: .06em; max-width: 26ch; }
h2 { font-size: 22px; letter-spacing: .05em; }
.panel, .pg-card { border: 1px solid color-mix(in srgb, var(--accent) 18%, var(--line)); }
.pg-band { background: color-mix(in srgb, var(--accent) 5%, var(--bg-2)); }
.pg-bars i { height: 4px; border-radius: 0; }
/* Michroma'nın % glifi '0/0' gibi okunuyor: ölçüm/rakam vurgusu monoya geçer (kokpit dili). */
.pg-band b, .pg-band strong, .pg-table .num, .kpi .v, .pg-meter-c { font-family: var(--font-mono); letter-spacing: .01em; }
/* Michroma geniş: tek harflik marka kutusunda harf taşmasın */
.mark { font-size: 11px; letter-spacing: 0; }
  `,
};
