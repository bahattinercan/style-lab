/**
 * 88 · Magazine Feature — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
      /* imza: 7/5 asimetri · tam kanama görsel · pull-quote (3px accent çizgi) · 14px radius */
      h1 { font-size: 64px; line-height: 1.04; letter-spacing: -0.02em; font-weight: 600; font-family: var(--font-display); max-width: 14ch; }
      h2 { font-size: 38px; line-height: 1.10; letter-spacing: -0.01em; font-weight: 600; }
      h3 { font-size: 24px; line-height: 1.20; letter-spacing: -0.01em; font-weight: 500; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 19px; line-height: 1.6; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; border-bottom: 1px solid var(--line); padding-bottom: 8px; display: inline-block; }
      .brand { font-family: var(--font-display); font-weight: 600; font-size: 20px; }

      .quad, .m-grid { grid-template-columns: 5fr 7fr; gap: 24px; align-items: center; }
      .visual-card, .hero-visual { border-radius: var(--radius-lg); box-shadow: var(--shadow); border: 1px solid var(--line); overflow: hidden; position: relative; }
      .visual-card::after, .hero-visual::after {
        content: ""; position: absolute; inset: 0; pointer-events: none; opacity: var(--grain);
        background-image: repeating-linear-gradient(45deg, color-mix(in srgb, var(--ink) 20%, transparent) 0 1px, transparent 1px 3px);
      }
      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi { border-radius: var(--radius-lg); box-shadow: none; border: 1px solid var(--line); background: var(--surface); }
      .quote, blockquote {
        font-family: var(--font-display); font-size: 28px; line-height: 1.26; font-weight: 500;
        border-left: 3px solid var(--accent); padding: 4px 0 4px 32px; margin: 0; max-width: 40ch;
      }
      .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; font-weight: 500; min-height: 48px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .btn:hover { box-shadow: var(--shadow); }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; }
      .kpi strong, .counter { font-family: var(--font-display); font-size: 34px; letter-spacing: -0.01em; }
      @media (max-width: 900px) {
        h1 { font-size: 36px; max-width: 16ch; }
        h2 { font-size: 26px; }
        .quad, .m-grid { grid-template-columns: 1fr; }
        .quote, blockquote { font-size: 22px; padding-left: 20px; }
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
          /* imza hero: feature açılışı — tam kanama görsel bandı + pull-quote */
          .hero-visual { min-height: 380px; padding: 0; background: color-mix(in srgb, var(--accent) 10%, var(--bg-2)); border-radius: var(--radius-lg); }
          .visual-card { width: 100%; min-height: 360px; border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 0; overflow: hidden; display: flex; flex-direction: column; }
          .visual-card .bar { margin: 24px 26px 0; }
          .visual-card .bar.accent { height: 6px; border-radius: 3px; }
          .visual-rows { margin: auto 26px 26px; gap: 12px; }
          .visual-row { border-radius: var(--radius); }
          .visual-row .sq { border-radius: var(--radius); height: 24px; }
          .visual-card::before {
            content: ''; display: block; height: 150px;
            background: linear-gradient(140deg, color-mix(in srgb, var(--accent) 48%, transparent) 0%, color-mix(in srgb, var(--ink) 12%, transparent) 100%);
          }
          .hero-visual::after { content: 'FEATURE'; position: absolute; left: 26px; top: 158px; font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-soft); }
    `,
  },
};
