/**
 * 78 · Topografya & Arazi — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['topographic-terrain'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: 'upper',
  extraCss: `
      /* imza: harita kâğıdı · eş yükselti halkaları · pafta çerçevesi · mono ölçü */
      body {
        background-image:
          repeating-radial-gradient(circle at 18% 12%, color-mix(in srgb, var(--ink) 7%, transparent) 0 1px, transparent 1px 34px),
          repeating-radial-gradient(circle at 84% 78%, color-mix(in srgb, var(--accent) 12%, transparent) 0 1px, transparent 1px 26px);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: .01em; }
      h1 { font-size: 46px; line-height: 1.06; max-width: 22ch; }
      h2 { font-size: 30px; line-height: 1.16; letter-spacing: .02em; }
      h3 { font-size: 20px; line-height: 1.28; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 62ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '▲ '; color: var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .12em; text-transform: uppercase; }

      .nav {
        background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        box-shadow: inset 0 -3px 0 -2px var(--line);
      }
      .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 500; letter-spacing: .02em; }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); box-shadow: inset 0 -2px 0 var(--accent); }

      /* pafta: 1px dış çerçeve + köşe artıları */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
      }
      .panel, .card, .visual-card { position: relative; }
      /* FIX: içeriksiz iç çerçeve tüm kartlardan kaldırıldı; pafta çerçevesi yalnız hero görselinde */
      body.scene-landing .hero-visual::after {
        content: ''; position: absolute; inset: 6px; pointer-events: none;
        border: 1px solid color-mix(in srgb, var(--ink) 12%, transparent);
      }
      /* eş yükselti halkaları: hero görselinin zemini */
      .hero-visual, .visual-card {
        background-image:
          repeating-radial-gradient(circle at 50% 62%, transparent 0 18px, color-mix(in srgb, var(--accent) 26%, transparent) 18px 19px),
          repeating-radial-gradient(circle at 50% 62%, transparent 0 42px, color-mix(in srgb, var(--ink) 12%, transparent) 42px 43px);
      }
      .btn {
        height: 40px; padding: 0 16px; border-radius: var(--radius); box-shadow: none; border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink);
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn.sm { height: 32px; padding: 0 12px; font-size: 10px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--accent);
      }
      .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
      .bar, .visual-row .line, .divider { background: var(--line); }
      .m-grid {
        background-image:
          repeating-radial-gradient(circle at 50% 50%, transparent 0 14px, color-mix(in srgb, var(--ink) 10%, transparent) 14px 15px);
        border-radius: var(--radius-lg);
      }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .sig {
        border-top: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
        border-bottom: 1px solid color-mix(in srgb, var(--ink) 12%, transparent);
      }

      /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
      .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
        opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
        border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
      }
      .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
      .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
      .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      .logo-strip { color: var(--ink-soft); }
      .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .sig { z-index: 0; }
      .sig::before, .sig::after { z-index: -1; }
      .hero-visual { overflow: hidden; }
      .hero-visual > * { position: relative; z-index: 1; }

    `,
  scenes: {
    landing: `
          /* imza hero: eş yükselti halkaları + pafta çerçevesi */
          .hero-visual {
            min-height: 360px; padding: 18px; border: 1px solid var(--line);
            background-image:
              repeating-radial-gradient(circle at 30% 40%, color-mix(in srgb, var(--ink) 9%, transparent) 0 1px, transparent 1px 26px),
              repeating-radial-gradient(circle at 76% 66%, color-mix(in srgb, var(--accent) 16%, transparent) 0 1px, transparent 1px 20px);
          }
          .visual-card { width: 100%; min-height: 300px; border-radius: 2px; }
          .visual-card .bar { height: 4px; border-radius: 0; }
          .visual-row { border-radius: 2px; }
          .visual-row .sq { border-radius: 0; }
          .visual-row .num { font-size: 11px; letter-spacing: .06em; }
          .hero-visual::after { content: '1:25 000'; position: absolute; right: 14px; bottom: 10px; font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; color: var(--ink-soft); }
    `,
  },
};
