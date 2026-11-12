/**
 * 134 · Concrete Monolith — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: 'upper',
  extraCss: `
      /* imza: kenarlık YOK · gölge YOK · radius 0 · kütle yalnız tonla · kalıp izi (1 kez) */
      h1 { font-size: 56px; line-height: 1.02; letter-spacing: -.02em; font-weight: 400; font-family: var(--font-display); text-transform: uppercase; max-width: 18ch; }
      h2 { font-size: 30px; line-height: 1.08; letter-spacing: -.01em; font-weight: 400; text-transform: uppercase; }
      h3 { font-size: 20px; line-height: 1.2; letter-spacing: 0; font-weight: 500; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 17px; line-height: 1.6; color: var(--ink-soft); max-width: 66ch; }
      .eyebrow, .label, .mono, .figure { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
      .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: -.02em; text-transform: uppercase; }

      /* kütle: hiçbir blokta kenarlık ve gölge yok */
      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual, .m-tile {
        border: 0; border-radius: 0; background: var(--surface); box-shadow: none;
      }
      .panel-2, .kpi, .plan { background: var(--surface-2); }
      .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 40px; }
      .kpi { padding: 28px; }
      .figure, .kpi strong { font-family: var(--font-mono); font-size: 24px; letter-spacing: 0; }
      /* kalıp izi: yalnız hero, 1 kez */
      body.scene-landing .sig::before {
        content: ""; position: absolute; inset: 0 0 0 0; pointer-events: none;
        background-image: repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 3%, transparent) 0 1px, transparent 1px 14px);
        opacity: .9;
      }
      .btn { border: 0; border-radius: 0; background: var(--accent); color: var(--accent-ink); min-height: 52px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; box-shadow: none; }
      .btn.ghost, .btn.soft { background: var(--surface-2); color: var(--ink); }
      .btn:hover { background: var(--ink); color: var(--bg); }
      .field, input, select, textarea { border: 0; border-radius: 0; background: var(--surface); font-family: var(--font-body); font-size: 16px; }
      .field.focus, input:focus { outline: 3px solid var(--accent); outline-offset: 0; }
      .chip { border: 0; border-radius: 0; background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
      .chip.accent { background: var(--accent); color: var(--accent-ink); }
      .divider, hr { height: 0; background: none; border: 0; }
      .nav { border: 0; min-height: 72px; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
      @media (max-width: 900px) {
        h1 { font-size: 32px; }
        h2 { font-size: 22px; }
        .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 24px; }
        body.scene-landing .sig::before { display: none; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
      .btn { white-space: nowrap; }
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      body.scene-landing .sig { z-index: -1; }
      .hero-visual { min-height: 360px; }
    `,
  scenes: {
    landing: `
      /* hero imzası: beton kalıp — düşey ek yerleri + kalıp bağlantı delikleri */
      .hero-visual { position: relative; min-height: 360px; }
      .hero-visual::before {
        content: "C30/37 · KALIP 134"; position: absolute; inset: 0; padding: 18px 20px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
        background:
          radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--ink) 26%, transparent) 0 4px, transparent 4px) 0 0 / 96px 96px repeat,
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 14%, transparent) 0 1px, transparent 1px) 0 0 / 96px 100% repeat-x,
          linear-gradient(0deg, color-mix(in srgb, var(--ink) 10%, transparent) 0 1px, transparent 1px) 0 0 / 100% 96px repeat-y;
        pointer-events: none;
      }
    `,
  },
};
