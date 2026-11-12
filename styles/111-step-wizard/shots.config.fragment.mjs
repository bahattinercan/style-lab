/**
 * 111 · Adım Sihirbazı — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['step-wizard'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
      /* imza: dikey numaralı adım rayı · 2/5 mono sayaç · seçenek kartı · tek soru */
      body {
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 4%, transparent) 1px, transparent 1px);
        background-size: 25% 100%;
        background-position: 0 0;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
      h1 { font-size: 40px; line-height: 1.1; max-width: 22ch; }
      h2 { font-size: 28px; line-height: 1.16; }
      h3 { font-size: 20px; line-height: 1.26; }
      .lede { font-size: 16px; line-height: 1.6; max-width: 56ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
      .eyebrow::before {
        content: ''; width: 20px; height: 2px; background: var(--accent);
      }
      .brand { font-family: var(--font-display); font-size: 14px; font-weight: 600; }
      .nav { height: 56px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .nav-links a { font-size: 14px; font-weight: 600; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      /* adım rayı: panelin solunda 2px dikey çizgi + numaralı noktalar */
      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      .visual-card, .m-grid { background: var(--bg-2); box-shadow: none; }
      .panel { position: relative; padding-left: 30px; }
      .panel::before {
        content: ''; position: absolute; left: 13px; top: 16px; bottom: 16px; width: 2px;
        background: color-mix(in srgb, var(--ink) 12%, transparent);
      }
      .m-tile { position: relative; padding-left: 44px; }
      .m-tile::before {
        content: '1'; position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
        width: 22px; height: 22px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); color: var(--ink-soft);
        font-family: var(--font-mono); font-size: 11px; line-height: 20px; text-align: center;
      }
      .m-tile:nth-child(2)::before { content: '2'; }
      .m-tile:nth-child(3)::before { content: '3'; }
      .m-tile:nth-child(4)::before { content: '4'; }
      .m-tile:first-child::before {
        background: var(--accent); border-color: var(--accent); color: var(--accent-ink);
      }
      .comp-card-demo, .state-card { background: var(--surface); }

      /* ilerleme: kpi sayacı + %8 zemin seçenek */
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; letter-spacing: 0; }
      .kpi { padding-left: 16px; box-shadow: none; background: var(--surface-2); }
      .kpi .t, .kpi .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; }
      .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 22%, transparent); border-radius: 999px; }
      .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--accent); border-radius: 999px; }

      .btn {
        height: 44px; padding: 0 20px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 14px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 90%, var(--ink)); }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px; min-height: 44px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 28%, transparent); outline-offset: 1px;
      }
      .field.err input, .field.err select { border-color: var(--danger); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-body); font-size: 11px; font-weight: 600;
      }
      .chip.accent {
        background: color-mix(in srgb, var(--accent) 10%, var(--surface)); color: var(--accent);
        border-color: color-mix(in srgb, var(--accent) 30%, transparent);
      }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .mark { background: var(--accent); color: var(--accent-ink); border-radius: 999px; }
      .divider, .line { background: var(--line); }
      .sig { background-image: linear-gradient(180deg, transparent calc(100% - 57px), var(--surface) calc(100% - 57px)); }
      .hero-visual {
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 1px);
        background-size: 25% 100%;
      }
      /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
      /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
      .chip { color: var(--ink); }
      /* içeriksiz dekor bandı: landing sayfasında sabit şerit yok */
      .scene-landing .sig { background-image: none; box-shadow: none; }
      /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
      .hero-visual { min-height: 360px; align-content: center; }
`,
  scenes: {
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; align-content: start; gap: 14px; }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 6px; border-radius: 999px; background: var(--line); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--accent) 0 66%, var(--line) 66%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 14px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 22px 1fr auto; padding: 10px 12px; border: 1px solid var(--line); border-radius: var(--radius); }
body.scene-landing .hero-visual .visual-row:nth-child(1) { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 20px; height: 20px; border-radius: 999px; }
body.scene-landing .hero-visual .visual-card::after { content: 'adım 2/5 · ekip büyüklüğü · ileri'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; align-content: start; gap: 14px; }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 6px; border-radius: 999px; background: var(--line); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--accent) 0 66%, var(--line) 66%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 14px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 22px 1fr auto; padding: 10px 12px; border: 1px solid var(--line); border-radius: var(--radius); }
body.scene-landing .hero-visual .visual-row:nth-child(1) { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 20px; height: 20px; border-radius: 999px; }
body.scene-landing .hero-visual .visual-card::after { content: 'adım 2/5 · ekip büyüklüğü · ileri'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }`,
  },
};
