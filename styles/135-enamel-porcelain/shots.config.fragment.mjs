/**
 * 135 · Enamel Porcelain — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
      /* imza: 1px kobalt kontur · 1px sır highlight · tek 2px gölge · 6/12px radius */
      h1 { font-size: 40px; line-height: 1.2; letter-spacing: .08em; font-weight: 400; font-family: var(--font-display); max-width: 20ch; }
      h2 { font-size: 26px; line-height: 1.25; letter-spacing: .06em; font-weight: 400; }
      h3 { font-size: 19px; line-height: 1.3; letter-spacing: .02em; font-weight: 600; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 17px; line-height: 1.66; color: var(--ink-soft); max-width: 62ch; }
      .eyebrow, .label, .mono, .material { font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; }
      .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: .1em; }

      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
        border-radius: var(--radius-lg); background: var(--surface); border: 1px solid var(--line);
        box-shadow: inset 0 1px 0 var(--surface), var(--shadow);
      }
      .visual-card, .hero-visual, .plan { border-color: var(--accent); }
      .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 48px; font-family: var(--font-body); font-weight: 600; font-size: 15px;
        box-shadow: inset 0 1px 0 color-mix(in srgb, var(--surface) 24%, transparent); }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--accent); border: 1px solid var(--accent); box-shadow: none; }
      .btn:hover { background: var(--ink); }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 16px; }
      .field.focus, input:focus { border-color: var(--accent); outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip { border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      /* tek süs: 1px kobalt çizgi */
      .sec::before { content: ""; display: block; width: 64px; height: 1px; background: var(--accent); margin-bottom: 32px; }
      .material { color: var(--ink-soft); }
      .nav { border-bottom: 1px solid var(--line); min-height: 68px; }
      .nav-links a { font-size: 13px; font-weight: 500; }
      @media (max-width: 900px) {
        h1 { font-size: 26px; }
        h2 { font-size: 20px; }
        .sec::before { width: 44px; margin-bottom: 24px; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
      .btn { white-space: nowrap; }
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      .hero-visual { min-height: 340px; }
    `,
  scenes: {
    landing: `
      /* hero imzası: mine rozetleri — emaye çerçeve + iç halka */
      .hero-visual { position: relative; min-height: 340px; }
      .hero-visual::before {
        content: "MİNE · 135"; position: absolute; inset: 0; padding: 20px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
        background:
          radial-gradient(circle at 34% 58%, transparent 0 34px, color-mix(in srgb, var(--accent) 70%, transparent) 34px 36px, transparent 36px) 0 0 / 100% 100% no-repeat,
          radial-gradient(circle at 34% 58%, transparent 0 26px, color-mix(in srgb, var(--ink) 22%, transparent) 26px 27px, transparent 27px) 0 0 / 100% 100% no-repeat,
          radial-gradient(circle at 68% 40%, transparent 0 18px, color-mix(in srgb, var(--accent) 40%, transparent) 18px 19px, transparent 19px) 0 0 / 100% 100% no-repeat;
        pointer-events: none;
      }
    `,
  },
};
