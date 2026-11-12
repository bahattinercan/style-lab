/**
 * 120 · Craft Handmade — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
      /* imza: kraft doku · sol kenarda kesikli dikiş · 4px radius · gölgesiz katman */
      h1 { font-size: 52px; line-height: 1.08; letter-spacing: .01em; font-weight: 700; font-family: var(--font-display); max-width: 16ch; }
      h2 { font-size: 32px; line-height: 1.16; letter-spacing: 0; font-weight: 700; }
      h3 { font-size: 20px; line-height: 1.3; font-weight: 700; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 18px; line-height: 1.66; color: var(--ink-soft); max-width: 48ch; }
      .eyebrow, .label, .mono, .price { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .14em; text-transform: uppercase; }
      .brand { font-family: var(--font-display); font-weight: 700; font-size: 24px; }

      /* kraft dokusu: grain + ince kâğıt çizgisi */
      .sig::after {
        content: ""; position: absolute; inset: 0; pointer-events: none; opacity: var(--grain);
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 22%, transparent) 0 1px, transparent 1px 7px);
      }
      /* dikiş çizgisi: sol kenar, ekran başına 1 */
      .sig::before {
        content: ""; position: absolute; left: 24px; top: 96px; bottom: 96px; width: 0;
        border-left: 2px dashed var(--line); pointer-events: none;
      }
      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .m-tile {
        border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); box-shadow: none;
      }
      .visual-card, .hero-visual { position: relative; overflow: hidden; }
      .visual-card::before, .hero-visual::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 2px; background: var(--accent); }
      .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 48px; font-family: var(--font-body); font-weight: 700; font-size: 15px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .btn:hover { transform: translateY(-1px); border: 1px solid var(--ink); }
      .btn:active { transform: translateY(1px); }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 16.5px; }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 3px; }
      .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .14em; text-transform: uppercase; }
      .chip.accent { background: var(--accent); color: var(--accent-ink); }
      .price, .counter { font-variant-numeric: tabular-nums; }
      .divider, hr { border: 0; border-top: 1px dashed var(--line); height: 0; }
      .nav { border-bottom: 1px solid var(--line); min-height: 64px; }
      .nav-links a { font-family: var(--font-mono); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; }
      @media (max-width: 900px) {
        h1 { font-size: 32px; }
        .sig::before { left: 16px; border-left-width: 1px; }
      }
          /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
      /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
      .chip { color: var(--ink); }
      /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
      .hero-visual { min-height: 360px; align-content: center; }
`,
  scenes: {
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px 22px 22px 34px; display: grid; align-content: start; gap: 12px; background: var(--surface); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card { border-left: 2px dashed var(--line); }
body.scene-landing .hero-visual .visual-card .bar { height: 9px; border-radius: 2px; border: 0; background: color-mix(in srgb, var(--accent) 30%, transparent); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 40%; background: var(--accent); }
body.scene-landing .hero-visual .visual-rows { gap: 0; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 18px 1fr auto; padding: 10px 0; border-radius: 0; border-bottom: 1px dashed var(--line); }
body.scene-landing .hero-visual .visual-row .sq { width: 16px; height: 16px; border-radius: 2px; }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
body.scene-landing .hero-visual .visual-card::after { content: 'defter · kes → dik → paketle · 3 adım · el işi parti no. 014'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px 22px 22px 34px; display: grid; align-content: start; gap: 12px; background: var(--surface); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card { border-left: 2px dashed var(--line); }
body.scene-landing .hero-visual .visual-card .bar { height: 9px; border-radius: 2px; border: 0; background: color-mix(in srgb, var(--accent) 30%, transparent); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 40%; background: var(--accent); }
body.scene-landing .hero-visual .visual-rows { gap: 0; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 18px 1fr auto; padding: 10px 0; border-radius: 0; border-bottom: 1px dashed var(--line); }
body.scene-landing .hero-visual .visual-row .sq { width: 16px; height: 16px; border-radius: 2px; }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
body.scene-landing .hero-visual .visual-card::after { content: 'defter · kes → dik → paketle · 3 adım · el işi parti no. 014'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-soft); }`,
  },
};
