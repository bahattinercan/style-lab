/**
 * 116 · Kids Playground — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
      /* imza: 18px yuvarlak blok · tek kalın gölge (blur 0) · 60px hedef · renk blokları ≤%12 */
      h1 { font-size: 56px; line-height: 1.06; font-weight: 700; font-family: var(--font-display); letter-spacing: 0; max-width: 18ch; }
      h2 { font-size: 34px; line-height: 1.14; font-weight: 700; }
      h3 { font-size: 22px; line-height: 1.28; font-weight: 700; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 19px; line-height: 1.6; color: var(--ink-soft); max-width: 54ch; }
      .eyebrow, .label, .mono, .kpi small { font-family: var(--font-mono); font-size: 13px; letter-spacing: .06em; }
      .brand { font-family: var(--font-display); font-weight: 700; font-size: 24px; }

      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
        border-radius: var(--radius-lg); border: 0; background: var(--surface); box-shadow: var(--shadow);
      }
      .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 20px; }
      .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 60px; font-weight: 700; box-shadow: var(--shadow); }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 2px solid var(--line); box-shadow: none; }
      .btn:hover { transform: translateY(-2px); }
      .btn:active { transform: translateY(2px); box-shadow: none; }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 2px solid var(--line); min-height: 60px; }
      .field.focus, input:focus { outline: 3px solid var(--accent); outline-offset: 3px; }
      .chip { border-radius: var(--radius); background: var(--surface-2); border: 0; font-family: var(--font-body); font-weight: 700; font-size: 13px; }
      .chip.accent { background: var(--accent); color: var(--accent-ink); }
      .kpi strong, .counter { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-size: 20px; }
      .kpi { padding: 20px 22px; }
      .m-tile:nth-child(3n + 1) { background: var(--surface-2); }
      .m-tile:nth-child(3n + 2) { background: color-mix(in srgb, var(--surface-2) 60%, var(--surface)); }
      .nav { border-bottom: 2px solid var(--line); min-height: 72px; }
      .nav-links a { font-weight: 700; font-size: 15px; }
      @media (max-width: 900px) {
        h1 { font-size: 34px; }
        h2 { font-size: 26px; }
        .btn, .field, input, select, textarea { min-height: 56px; }
        .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 14px; }
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
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; align-content: start; gap: 14px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 16px; border-radius: var(--radius); border: 0; background: var(--accent); }
body.scene-landing .hero-visual .visual-card .bar.w70 { width: 32%; background: var(--surface-2); }
body.scene-landing .hero-visual .visual-card .bar.w45 { width: 20%; background: color-mix(in srgb, var(--surface-2) 70%, var(--surface)); }
body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 6px; padding: 14px 12px; background: var(--surface-2); border-radius: var(--radius); box-shadow: var(--shadow); text-align: center; }
body.scene-landing .hero-visual .visual-row .sq { width: 32px; height: 32px; margin: 0 auto; border-radius: 999px; }
body.scene-landing .hero-visual .visual-row .line { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--ink) 14%, transparent); }
body.scene-landing .hero-visual .visual-row .num { font-size: 15px; font-weight: 700; color: var(--ink); }
body.scene-landing .hero-visual .visual-card::after { content: '3 blok tamam · 12 yıldız · sıradaki: renkleri eşleştir'; font-family: var(--font-mono); font-size: 13px; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; align-content: start; gap: 14px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 16px; border-radius: var(--radius); border: 0; background: var(--accent); }
body.scene-landing .hero-visual .visual-card .bar.w70 { width: 32%; background: var(--surface-2); }
body.scene-landing .hero-visual .visual-card .bar.w45 { width: 20%; background: color-mix(in srgb, var(--surface-2) 70%, var(--surface)); }
body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 6px; padding: 14px 12px; background: var(--surface-2); border-radius: var(--radius); box-shadow: var(--shadow); text-align: center; }
body.scene-landing .hero-visual .visual-row .sq { width: 32px; height: 32px; margin: 0 auto; border-radius: 999px; }
body.scene-landing .hero-visual .visual-row .line { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--ink) 14%, transparent); }
body.scene-landing .hero-visual .visual-row .num { font-size: 15px; font-weight: 700; color: var(--ink); }
body.scene-landing .hero-visual .visual-card::after { content: '3 blok tamam · 12 yıldız · sıradaki: renkleri eşleştir'; font-family: var(--font-mono); font-size: 13px; color: var(--ink-soft); }`,
  },
};
