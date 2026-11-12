/**
 * 117 · Carnival Festival — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: 'upper',
  extraCss: `
      /* imza: tek satır Anton bant başlık · 8px renk şeridi · bilet perforasyonu · 0–4px radius */
      h1 { font-size: 72px; line-height: .94; letter-spacing: -.01em; font-weight: 400; font-family: var(--font-display); text-transform: uppercase; max-width: 20ch; }
      h2 { font-size: 40px; line-height: 1.0; letter-spacing: 0; font-weight: 400; text-transform: uppercase; }
      h3 { font-size: 22px; line-height: 1.16; font-weight: 700; }
      p, .lede, .copy { font-family: var(--font-body); }
      .lede { font-size: 18px; line-height: 1.55; max-width: 52ch; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; }
      .brand { font-family: var(--font-display); font-size: 24px; text-transform: uppercase; letter-spacing: -.01em; }

      /* şerit bandı: 8px, metinsiz, ekran başına en fazla 3 */
      .sec::before {
        content: ""; display: block; height: 8px; border-radius: 0;
        background-image: repeating-linear-gradient(45deg, var(--accent) 0 16px, var(--ink) 16px 32px, var(--surface-2) 32px 48px);
        pointer-events: none;
      }
      .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card {
        border-radius: var(--radius-lg); border: 1px solid var(--ink); background: var(--surface); box-shadow: none;
      }
      /* bilet bloğu: 2px kesikli kenar */
      .plan, .auth-card { border: 2px dashed var(--ink); border-radius: var(--radius-lg); }
      .plan:hover, .auth-card:hover { box-shadow: var(--shadow-hard); transform: translate(-1px, -1px); }
      .btn { border-radius: 0; background: var(--accent); color: var(--accent-ink); border: 0; min-height: 52px; font-family: var(--font-body); font-weight: 700; font-size: 13px; letter-spacing: .06em; text-transform: uppercase; }
      .btn.ghost, .btn.soft { background: var(--bg); color: var(--ink); border: 2px solid var(--ink); }
      .btn:hover { transform: translateY(2px); }
      .field, input, select, textarea { border-radius: var(--radius-lg); background: var(--surface); border: 2px solid var(--line); }
      .field.focus, input:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
      .chip { border-radius: 0; background: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; padding: 4px 10px; }
      .chip.accent { background: var(--accent); color: var(--accent-ink); }
      .kpi strong, .counter, .price { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
      .nav { border-bottom: 2px solid var(--ink); min-height: 60px; }
      .nav-links a { font-weight: 700; font-size: 13px; letter-spacing: .06em; text-transform: uppercase; }
      .sec { padding-top: 28px; }
      @media (max-width: 900px) {
        h1 { font-size: 40px; max-width: 16ch; }
        h2 { font-size: 26px; }
        .sig::before, .sec::before { height: 6px; }
      }
          /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
      .chip { color: var(--ink); }
      /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
      .hero-visual { min-height: 360px; align-content: center; }
`,
  scenes: {
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 10px; border-radius: 4px; }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 0; border: 0; background: var(--accent); }
body.scene-landing .hero-visual .visual-card .bar.w70 { width: 66%; background: var(--ink); }
body.scene-landing .hero-visual .visual-card .bar.w45 { width: 33%; background: color-mix(in srgb, var(--accent) 60%, var(--ink)); }
body.scene-landing .hero-visual .visual-rows { gap: 0; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 58px 1fr auto; padding: 12px 10px; border-radius: 0; border-bottom: 1px solid var(--line); }
body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: auto; border-radius: 0; background: transparent; }
body.scene-landing .hero-visual .visual-row .sq::before { font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); }
body.scene-landing .hero-visual .visual-row:nth-child(1) .sq::before { content: '20:30'; }
body.scene-landing .hero-visual .visual-row:nth-child(2) .sq::before { content: '22:00'; }
body.scene-landing .hero-visual .visual-row:nth-child(3) .sq::before { content: '23:30'; }
body.scene-landing .hero-visual .visual-row .line { height: 10px; border-radius: 2px; }
body.scene-landing .hero-visual .visual-card::after { content: 'ANA SAHNE · BAHÇE · KAPANIŞ — bilet: 4px radius, 2px kesikli kenar'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); border-top: 2px solid var(--accent); padding-top: 10px; }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 10px; border-radius: 4px; }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 0; border: 0; background: var(--accent); }
body.scene-landing .hero-visual .visual-card .bar.w70 { width: 66%; background: var(--ink); }
body.scene-landing .hero-visual .visual-card .bar.w45 { width: 33%; background: color-mix(in srgb, var(--accent) 60%, var(--ink)); }
body.scene-landing .hero-visual .visual-rows { gap: 0; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 58px 1fr auto; padding: 12px 10px; border-radius: 0; border-bottom: 1px solid var(--line); }
body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: auto; border-radius: 0; background: transparent; }
body.scene-landing .hero-visual .visual-row .sq::before { font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); }
body.scene-landing .hero-visual .visual-row:nth-child(1) .sq::before { content: '20:30'; }
body.scene-landing .hero-visual .visual-row:nth-child(2) .sq::before { content: '22:00'; }
body.scene-landing .hero-visual .visual-row:nth-child(3) .sq::before { content: '23:30'; }
body.scene-landing .hero-visual .visual-row .line { height: 10px; border-radius: 2px; }
body.scene-landing .hero-visual .visual-card::after { content: 'ANA SAHNE · BAHÇE · KAPANIŞ — bilet: 4px radius, 2px kesikli kenar'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); border-top: 2px solid var(--accent); padding-top: 10px; }`,
  },
};
