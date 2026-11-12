/**
 * 112 · Sıfır Arayüz — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['zero-ui'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* imza: monokrom · 1px hairline · niyet satırı · gölgesiz katman */
      body {
        background-image: none;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: -.005em; }
      h1 { font-size: 44px; line-height: 1.14; max-width: 24ch; }
      h2 { font-size: 30px; line-height: 1.2; }
      h3 { font-size: 21px; line-height: 1.3; }
      .lede { font-size: 16px; line-height: 1.68; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: block; }
      .eyebrow::before { content: none; }
      .brand { font-family: var(--font-display); font-size: 15px; font-weight: 400; }

      .nav {
        height: 52px; background: transparent; border-bottom: 1px solid var(--line);
        border-radius: 0; box-shadow: none;
      }
      .nav-links a { font-size: 14px; color: var(--ink-soft); text-decoration: none; }
      .nav-links a[aria-current], .nav-links a.active {
        color: var(--ink); text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px;
      }

      /* hiçbir kart gölge taşımaz: yalnız hairline */
      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: transparent; border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
      }
      .visual-card, .m-grid { background: var(--bg-2); border-color: transparent; }
      .comp-card-demo, .state-card { background: var(--surface); }

      /* dolu buton yok: eylemler altı çizili metin */
      .btn {
        height: 40px; padding: 0 0 2px; border-radius: 0; border: 0; border-bottom: 1px solid var(--ink);
        background: transparent; color: var(--ink); box-shadow: none;
        font-family: var(--font-body); font-size: 16px; font-weight: 500;
      }
      .btn:hover { border-bottom-width: 2px; }
      .btn.ghost, .btn.soft { border: 0; border-bottom: 1px solid var(--line); color: var(--ink-soft); }
      .btn.sm { height: 32px; font-size: 14px; }
      .icon-btn { background: transparent; border: 0; color: var(--ink-soft); }

      .field input, .field select, .field textarea {
        border: 0; border-bottom: 1px solid var(--line); border-radius: 0;
        background: transparent; font-family: var(--font-body); font-size: 16px; min-height: 44px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        outline: 0; border-bottom: 2px solid var(--ink);
      }
      .field.err input, .field.err select { border-bottom-color: var(--danger); }

      /* niyet satırı: ekranın tek vurgusu */
      .hint, .muted { font-family: var(--font-mono); font-size: 12px; color: var(--ink-faint); }
      .chip {
        background: transparent; border: 1px solid var(--line); border-radius: 2px;
        font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft);
      }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .kpi .num, .num { font-family: var(--font-display); font-weight: 400; font-variant-numeric: tabular-nums; letter-spacing: 0; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .bar:not(.accent):not(.w70):not(.w45) { background: var(--line); border-radius: 0; height: 2px; }
      .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--ink); border-radius: 0; }
      .divider, .line { background: var(--line); height: 1px; }
      .mark { background: var(--ink); color: var(--bg); }
      .m-grid { background-image: none; border-radius: var(--radius-lg); }
      .hero-visual {
        background-image: none; border: 1px solid var(--line); border-radius: var(--radius-lg);
      }
      .sig { background: none; }
      /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
      /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
      .btn.ghost, .btn.soft { border-bottom-color: color-mix(in srgb, var(--ink) 55%, transparent); }
      .chip { color: var(--ink); }
      /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
      .hero-visual { min-height: 360px; align-content: center; }
`,
  scenes: {
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 26px; display: grid; align-content: start; gap: 20px; border: 1px solid var(--line); background: transparent; }
body.scene-landing .hero-visual { min-height: 350px; }
body.scene-landing .hero-visual .visual-card .bar { height: 1px; border-radius: 0; background: var(--line); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--ink) 0 28%, var(--line) 28%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 18px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 1fr auto; padding: 0 0 14px; border-radius: 0; border-bottom: 1px solid var(--line); }
body.scene-landing .hero-visual .visual-row .sq { display: none; }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-body); font-size: 11px; color: var(--ink-soft); }
body.scene-landing .hero-visual .visual-card::after { content: 'niyet satırı — yalnız bir eylem; alt çizgi odakta kalınlaşır'; font-family: var(--font-body); font-size: 12px; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 26px; display: grid; align-content: start; gap: 20px; border: 1px solid var(--line); background: transparent; }
body.scene-landing .hero-visual { min-height: 350px; }
body.scene-landing .hero-visual .visual-card .bar { height: 1px; border-radius: 0; background: var(--line); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--ink) 0 28%, var(--line) 28%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 18px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 1fr auto; padding: 0 0 14px; border-radius: 0; border-bottom: 1px solid var(--line); }
body.scene-landing .hero-visual .visual-row .sq { display: none; }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-body); font-size: 11px; color: var(--ink-soft); }
body.scene-landing .hero-visual .visual-card::after { content: 'niyet satırı — yalnız bir eylem; alt çizgi odakta kalınlaşır'; font-family: var(--font-body); font-size: 12px; color: var(--ink-soft); }`,
  },
};
