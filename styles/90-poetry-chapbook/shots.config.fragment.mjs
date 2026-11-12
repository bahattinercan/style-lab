/**
 * 90 · Poetry Chapbook — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
      /* imza: sol kenarda 1px kesikli el dikişi · dar ölçü (46ch) · italik dize · mono bölüm numarası */
      h1 { font-size: 44px; line-height: 1.14; letter-spacing: .01em; font-weight: 500; font-family: var(--font-display); max-width: 18ch; }
      h2 { font-size: 28px; line-height: 1.26; font-weight: 500; }
      h3 { font-size: 20px; line-height: 1.36; font-weight: 500; }
      p, .lede, .copy { font-family: var(--font-body); font-size: 16.5px; line-height: 1.78; max-width: 46ch; }
      .lede { font-style: italic; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .brand { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-soft); }

      /* el dikişi: sol kenar, tek çizgi, ekran başına 1 */
      .sig::before {
        content: ""; position: absolute; left: 28px; top: 96px; bottom: 96px; width: 0;
        border-left: 1px dashed var(--line); pointer-events: none;
      }
      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
        border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .btn { border-radius: var(--radius); background: transparent; color: var(--accent); border: 1px solid var(--accent); min-height: 44px; font-family: var(--font-body); }
      .btn:hover { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost, .btn.soft { color: var(--ink); border: 1px solid var(--line); }
      .field, input, select, textarea { border-radius: 0; background: transparent; border: 0; border-bottom: 1px solid var(--line); font-family: var(--font-body); font-size: 16.5px; }
      .field.focus, input:focus { border-bottom-color: var(--accent); outline: 2px solid var(--accent); outline-offset: 3px; }
      .chip { border-radius: var(--radius); background: transparent; border: 1px solid var(--line); font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase; }
      .quote, blockquote { font-family: var(--font-display); font-style: italic; font-size: 20px; line-height: 1.72; border: 0; padding: 0; max-width: 46ch; color: var(--ink-soft); }
      .divider, hr { height: 1px; background: var(--line); border: 0; }
      body.sig::after {
        content: ""; position: absolute; inset: 0; pointer-events: none; opacity: var(--grain);
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 18%, transparent) 0 1px, transparent 1px 5px);
      }
      @media (max-width: 900px) {
        h1 { font-size: 30px; }
        .sig::before { display: none; }
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
          /* imza hero: dize bloğu + sol dikiş çizgisi */
          .hero-visual { min-height: 360px; padding: 24px 22px 24px 40px; background: var(--bg-2); border-radius: var(--radius-lg); }
          .visual-card { width: 100%; min-height: 310px; border-radius: var(--radius-lg); border: 0; box-shadow: none; background: transparent; padding: 0; }
          .visual-card .bar { height: 3px; border-radius: 999px; background: color-mix(in srgb, var(--ink) 22%, transparent); border: 0; }
          .visual-card .bar.accent { width: 30%; background: var(--accent); }
          .visual-rows { margin-top: auto; gap: 14px; }
          .visual-row { border-radius: 0; border: 0; background: transparent; padding: 0; }
          .visual-row .sq { display: none; }
          .visual-row .line { height: 2px; background: color-mix(in srgb, var(--ink) 18%, transparent); }
          .visual-row .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em; }
          .hero-visual::before { content: ''; position: absolute; left: 18px; top: 24px; bottom: 24px; width: 0; border-left: 1px dashed var(--line); }
    `,
  },
};
