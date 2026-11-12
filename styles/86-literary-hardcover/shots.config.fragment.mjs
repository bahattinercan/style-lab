/**
 * 86 · Literary Hardcover — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
      /* imza: tek serif aile · kapak bloğu (4px radius + iç hairline + 2px accent şerit) · künye şeridi */
      h1 { font-size: 58px; line-height: 1.10; letter-spacing: -0.01em; font-weight: 600; font-family: var(--font-display); }
      h2 { font-size: 34px; line-height: 1.22; letter-spacing: -0.005em; font-weight: 600; }
      h3 { font-size: 22px; line-height: 1.34; letter-spacing: -0.005em; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 20px; line-height: 1.62; color: var(--ink-soft); max-width: 64ch; }
      .eyebrow, .label, .mono, .kpi small { font-family: var(--font-mono); letter-spacing: .14em; font-size: 11px; text-transform: uppercase; }
      .brand { font-family: var(--font-display); font-weight: 600; font-size: 18px; letter-spacing: .02em; }

      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi {
        border-radius: var(--radius-lg); box-shadow: none; border: 1px solid var(--line); background: var(--surface);
      }
      .visual-card, .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; position: relative; background: var(--bg-2); }
      .visual-card::before, .hero-visual::before {
        content: ""; position: absolute; inset: 0 0 auto 0; height: 2px; background: var(--accent); pointer-events: none;
      }
      .btn { border-radius: var(--radius); border: 1px solid transparent; background: var(--ink); color: var(--bg); font-family: var(--font-body); font-weight: 600; min-height: 46px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .btn:hover { background: var(--accent); color: var(--accent-ink); }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); }
      .field.focus, input:focus { border-color: var(--ink); outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
      .divider, hr { height: 1px; background: var(--line); border: 0; }
      .foot-demo, .art-body { background-image: none; }

      /* kâğıt grain: tek doku, overlay */
      body.sig::after {
        content: ""; position: absolute; inset: 0; pointer-events: none; opacity: var(--grain);
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 30%, transparent) 0 1px, transparent 1px 4px);
      }
      .kpi strong, .counter { font-variant-numeric: tabular-nums; }
      @media (max-width: 900px) {
        h1 { font-size: 34px; }
        h2 { font-size: 26px; }
        .lede { font-size: 17px; }
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
          /* imza hero: kitap sayfası + künye satırları (içindekiler) */
          .hero-visual { min-height: 360px; padding: 0; background: var(--bg-2); border-radius: var(--radius-lg); }
          .visual-card { width: 100%; min-height: 340px; border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; padding: 28px 30px; }
          .visual-card::after { content: ''; position: absolute; inset: 0 auto 0 0; width: 3px; background: var(--accent); }
          .visual-card .bar { height: 1px; background: var(--line); border: 0; border-radius: 0; }
          .visual-card .bar.accent { height: 2px; background: var(--accent); width: 38%; }
          .visual-rows { margin-top: auto; gap: 0; }
          .visual-row { border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: transparent; padding: 10px 0; }
          .visual-row .sq { display: none; }
          .visual-row .num { font-size: 11px; letter-spacing: .06em; }
    `,
  },
};
