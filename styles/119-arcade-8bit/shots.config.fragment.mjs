/**
 * 119 · Arcade 8-bit — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
      /* imza: pixel display (≤3 satır) · 4px köşe kırpma · statik CRT taraması · tek neon mint */
      h1 { font-size: 32px; line-height: 1.4; letter-spacing: 0; font-weight: 400; font-family: var(--font-display); max-width: 22ch; }
      h2 { font-size: 24px; line-height: 1.4; font-weight: 400; }
      h3 { font-size: 20px; line-height: 1.35; font-weight: 500; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 17px; line-height: 1.62; color: var(--ink-soft); max-width: 68ch; }
      .eyebrow, .label, .mono, .score { font-family: var(--font-mono); font-size: 20px; letter-spacing: 0; }
      .brand { font-family: var(--font-display); font-size: 14px; letter-spacing: .12em; text-transform: uppercase; }

      /* köşe kırpma: 4px */
      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .m-tile {
        border-radius: 0; border: 1px solid var(--line); background: var(--surface); box-shadow: none;
        clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%);
      }
      /* statik CRT taraması: 1px / 3px, yalnız bölüm zemininde */
      .sec, .art-body {
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 4%, transparent) 0 1px, transparent 1px 3px);
      }
      .btn { border-radius: 0; background: var(--accent); color: var(--accent-ink); border: 0; min-height: 48px; font-family: var(--font-display); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
        clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%); }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .btn:active { transform: translateY(2px); }
      .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 16px; }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip { border-radius: 0; background: var(--surface-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
      .chip.accent { background: var(--accent); color: var(--accent-ink); }
      .kpi strong, .counter, .score-value { font-family: var(--font-mono); font-size: 20px; font-variant-numeric: tabular-nums; }
      table td.num, .kpi strong { text-align: right; }
      .nav { border-bottom: 1px solid var(--line); min-height: 56px; }
      .nav-links a { font-family: var(--font-display); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; }
      @media (max-width: 900px) {
        h1 { font-size: 20px; }
        h2 { font-size: 16px; }
        .sec, .art-body { background-image: none; }
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
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 12px; background: var(--bg-2); clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: 0; border: 0; background: var(--surface-2); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 42%; background: var(--accent); }
body.scene-landing .hero-visual .visual-rows { gap: 6px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 26px 1fr auto; padding: 8px 10px; border-radius: 0; background: color-mix(in srgb, var(--surface-2) 70%, transparent); border-left: 3px solid var(--accent); }
body.scene-landing .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 0; clip-path: polygon(0 0, 100% 0, 100% 60%, 60% 100%, 0 100%); }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--accent); }
body.scene-landing .hero-visual .visual-card::after { content: '1UP 001250 TAKEOFF HIP-SCORE — press start'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 12px; background: var(--bg-2); clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: 0; border: 0; background: var(--surface-2); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 42%; background: var(--accent); }
body.scene-landing .hero-visual .visual-rows { gap: 6px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 26px 1fr auto; padding: 8px 10px; border-radius: 0; background: color-mix(in srgb, var(--surface-2) 70%, transparent); border-left: 3px solid var(--accent); }
body.scene-landing .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 0; clip-path: polygon(0 0, 100% 0, 100% 60%, 60% 100%, 0 100%); }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--accent); }
body.scene-landing .hero-visual .visual-card::after { content: '1UP 001250 TAKEOFF HIP-SCORE — press start'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }`,
  },
};
