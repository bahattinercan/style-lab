/**
 * 118 · Sticker Sheet — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
      /* imza: 6px die-cut halka · 2px ofset gölge · −10°…40° rotasyon · hover'da 8px kalkma */
      h1 { font-size: 44px; line-height: 1.1; letter-spacing: -.01em; font-weight: 900; font-family: var(--font-display); max-width: 20ch; }
      h2 { font-size: 26px; line-height: 1.16; font-weight: 900; }
      h3 { font-size: 20px; line-height: 1.28; font-weight: 700; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 18px; line-height: 1.6; color: var(--ink-soft); max-width: 58ch; }
      .eyebrow, .label, .mono, .counter { font-family: var(--font-mono); font-size: 12px; letter-spacing: .08em; }
      .brand { font-family: var(--font-display); font-weight: 900; font-size: 22px; }

      /* die-cut çıkartma: halka + ofset gölge */
      .panel, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .m-tile {
        border-radius: var(--radius); background: var(--surface);
        border: 6px solid var(--surface); box-shadow: var(--shadow);
      }
      .visual-card, .m-tile { border-radius: var(--radius-lg); }
      .m-grid, .comp-grid, .quad, .plan-grid, .data-grid { gap: 22px; }
      /* rotasyon: sayfa başına en fazla 6; sırayla dağıt */
      .m-tile:nth-child(6n + 1) { transform: rotate(-4deg); }
      .m-tile:nth-child(6n + 2) { transform: rotate(3deg); }
      .m-tile:nth-child(6n + 3) { transform: rotate(-7deg); }
      .m-tile:nth-child(6n + 4) { transform: rotate(6deg); }
      .m-tile:nth-child(6n + 5) { transform: rotate(-2deg); }
      .m-tile:nth-child(6n + 6) { transform: rotate(9deg); }
      .m-tile:hover { transform: translateY(-8px) rotate(0deg); }
      .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 52px; font-weight: 700; font-size: 15px; box-shadow: var(--shadow); }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 2px solid var(--line); box-shadow: none; }
      .btn:hover { box-shadow: var(--shadow); transform: translateY(-8px); }
      .btn:active { transform: scale(.94); box-shadow: none; }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 2px solid var(--line); }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 4px; }
      .chip { border-radius: var(--radius); background: var(--surface-2); border: 0; font-family: var(--font-body); font-size: 13px; padding: 4px 10px; }
      .chip.accent { background: var(--accent); color: var(--accent-ink); }
      .counter { font-variant-numeric: tabular-nums; }
      .divider, hr { border: 0; border-top: 1px dashed var(--line); height: 0; }
      .nav { border-bottom: 2px solid var(--line); min-height: 64px; }
      .nav-links a { font-weight: 700; font-size: 15px; }
      @media (max-width: 900px) {
        h1 { font-size: 28px; }
        h2 { font-size: 22px; }
        .panel, .comp-card, .plan, .kpi, .visual-card, .m-tile { border-width: 4px; }
        .m-tile { transform: none; }
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
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 12px; background: var(--surface-2); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: 999px; border: 0; background: var(--surface); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 46%; background: var(--accent); }
body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 16px 12px; background: var(--surface); border-radius: var(--radius-lg); border: 6px solid var(--surface); box-shadow: 2px 2px 0 color-mix(in srgb, var(--ink) 18%, transparent); text-align: center; }
body.scene-landing .hero-visual .visual-row:nth-child(1) { transform: rotate(-4deg); }
body.scene-landing .hero-visual .visual-row:nth-child(2) { transform: rotate(3deg); }
body.scene-landing .hero-visual .visual-row:nth-child(3) { transform: rotate(-2deg); }
body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: 42px; border-radius: var(--radius); }
body.scene-landing .hero-visual .visual-row .line { height: 6px; border-radius: 3px; }
body.scene-landing .hero-visual .visual-card::after { content: '12/24 çıkartma · 6 sayfa · kes-yeri: 1px kesikli çizgi'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 12px; background: var(--surface-2); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: 999px; border: 0; background: var(--surface); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 46%; background: var(--accent); }
body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 16px 12px; background: var(--surface); border-radius: var(--radius-lg); border: 6px solid var(--surface); box-shadow: 2px 2px 0 color-mix(in srgb, var(--ink) 18%, transparent); text-align: center; }
body.scene-landing .hero-visual .visual-row:nth-child(1) { transform: rotate(-4deg); }
body.scene-landing .hero-visual .visual-row:nth-child(2) { transform: rotate(3deg); }
body.scene-landing .hero-visual .visual-row:nth-child(3) { transform: rotate(-2deg); }
body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: 42px; border-radius: var(--radius); }
body.scene-landing .hero-visual .visual-row .line { height: 6px; border-radius: 3px; }
body.scene-landing .hero-visual .visual-card::after { content: '12/24 çıkartma · 6 sayfa · kes-yeri: 1px kesikli çizgi'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }`,
  },
};
