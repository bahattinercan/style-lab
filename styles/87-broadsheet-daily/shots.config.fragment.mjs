/**
 * 87 · Broadsheet Daily — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
      /* imza: masthead (tek satır) · çift kural · keskin köşe · stats bandı */
      h1 { font-size: 46px; line-height: 1.02; letter-spacing: -0.02em; font-weight: 400; text-transform: uppercase; font-family: var(--font-display); max-width: 18ch; }
      h2 { font-size: 30px; line-height: 1.10; letter-spacing: -0.01em; font-weight: 400; }
      h3 { font-size: 20px; line-height: 1.20; letter-spacing: -0.005em; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 18px; line-height: 1.5; max-width: 38ch; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
      .brand { font-family: var(--font-display); font-size: 24px; letter-spacing: -0.02em; text-transform: uppercase; }

      .nav { border-bottom: 3px solid var(--ink); padding: 14px 24px; background: var(--surface); }
      .masthead, .hero-copy { border-bottom: 3px solid var(--ink); padding-bottom: 10px; box-shadow: 0 1px 0 0 var(--ink); }
      .divider, hr { height: 3px; background: var(--ink); border: 0; }
      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
        border-radius: 0; border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .hero-visual { border: 1px solid var(--ink); }
      .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 12px; }
      .btn { border-radius: 0; font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; min-height: 44px; box-shadow: none; }
      .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); border: 1px solid var(--accent); }
      .btn.ghost, .btn.soft { background: var(--bg); color: var(--ink); border: 1px solid var(--ink); }
      .btn:hover { transform: translate(2px, 2px); }
      .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: -2px; }
      .chip { border-radius: 0; background: var(--ink); color: var(--bg); border: 1px solid var(--ink); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
      .chip.accent { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
      .kpi strong, .counter { font-family: var(--font-mono); font-size: 22px; font-variant-numeric: tabular-nums; }

      /* kâğıt çizgisi: yalnız bölüm zemininde, 6px aralık, %2 */
      .sec, .art-body, .auth-aside {
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 2%, transparent) 0 1px, transparent 1px 6px);
      }
      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 16ch; }
        h2 { font-size: 24px; }
        .nav { border-bottom-width: 2px; }
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
          /* imza hero: gazete kolonları + masthead bandı */
          .hero-visual { min-height: 360px; padding: 0; background: var(--surface); border: 1px solid var(--ink); border-radius: 0; }
          .visual-card { width: 100%; min-height: 340px; border-radius: 0; border: 0; box-shadow: none; padding: 18px 20px; }
          .visual-card .bar { height: 6px; border-radius: 0; background: var(--ink); border: 0; }
          .visual-card .bar.accent { background: var(--accent); width: 44%; }
          .visual-card .bar.w70, .visual-card .bar.w45 { background: var(--surface-2); }
          .visual-rows { margin-top: auto; gap: 0; }
          .visual-row { border-radius: 0; border: 0; border-top: 1px solid var(--line); background: transparent; padding: 9px 0; }
          .visual-row .sq { border-radius: 0; width: 12px; height: 12px; }
          .hero-visual::after { content: 'GÜNLÜK · 14. SAYFA'; position: absolute; top: 6px; right: 10px; font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em; color: var(--ink-soft); }
    `,
  },
};
