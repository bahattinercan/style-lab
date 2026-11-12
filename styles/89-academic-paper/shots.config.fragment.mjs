/**
 * 89 · Academic Paper — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
      /* imza: numaralı başlık · özet bloğu (3px sol çizgi) · kenar notu · dipnot çizgisi */
      h1 { font-size: 34px; line-height: 1.18; letter-spacing: -0.005em; font-weight: 600; font-family: var(--font-display); max-width: 28ch; }
      h2 { font-size: 24px; line-height: 1.24; letter-spacing: -0.005em; font-weight: 600; }
      h2::before { content: counter(sec) ". "; color: var(--ink-soft); }
      h3 { font-size: 18px; line-height: 1.3; font-weight: 600; }
      p, .lede, .copy { font-family: var(--font-body); font-size: 15.5px; line-height: 1.66; max-width: 72ch; }
      .lede { border-left: 3px solid var(--line); padding-left: 22px; color: var(--ink); max-width: 72ch; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; }
      .brand { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }

      .quad, .m-grid { grid-template-columns: 8fr 3fr; gap: 24px; }
      .aside-note, .state-card { font-size: 12.5px; line-height: 1.5; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }
      .panel, .panel-2, .comp-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
        border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; font-weight: 600; min-height: 44px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 15.5px; }
      .field.focus, input:focus { border-color: var(--ink); outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; }
      .foot-demo, .footnote { border-top: 1px solid var(--line); width: 64px; padding-top: 8px; font-size: 12.5px; color: var(--ink-soft); }
      .divider, hr { height: 1px; background: var(--line); border: 0; }
      .kpi strong, .counter, table td.num { font-variant-numeric: tabular-nums; }
      table { border-collapse: collapse; }
      table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-align: left; border-bottom: 1px solid var(--ink); }
      table td { border-bottom: 1px solid var(--line); }
      @media (max-width: 900px) {
        h1 { font-size: 26px; }
        .quad, .m-grid { grid-template-columns: 1fr; }
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
          /* imza hero: figür kutusu + numaralı atıf satırları */
          .hero-visual { min-height: 360px; padding: 18px; background: var(--bg-2); border: 0; border-radius: var(--radius-lg); }
          .visual-card { width: 100%; min-height: 320px; border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; padding: 18px; }
          .visual-card .bar { height: 2px; border-radius: 0; }
          .visual-card .bar.accent { width: 26%; }
          .visual-rows { margin-top: auto; gap: 0; }
          .visual-row { border-radius: 0; border: 0; border-top: 1px solid var(--line); background: transparent; padding: 8px 0; counter-increment: ref; }
          .visual-row .sq { display: none; }
          .visual-row .num { font-family: var(--font-mono); font-size: 10px; }
          .hero-visual::after { content: 'Şekil 1 · ölçüm düzeni'; position: absolute; left: 18px; bottom: 8px; font-family: var(--font-mono); font-size: 9px; letter-spacing: .08em; color: var(--ink-soft); }
    `,
  },
};
