/**
 * 110 · Kanban Akışı — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['kanban-flow'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
      /* imza: kolon sayacı · 3px kart şeridi · WIP chip · tahta zemini */
      body {
        background-image: radial-gradient(color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
        background-size: 22px 22px;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
      h1 { font-size: 36px; line-height: 1.12; max-width: 26ch; }
      h2 { font-size: 26px; line-height: 1.2; }
      h3 { font-size: 19px; line-height: 1.28; }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.55; max-width: 62ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
      .eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 999px; background: var(--accent); }
      .brand { font-family: var(--font-display); font-size: 14px; font-weight: 600; }

      .nav { height: 52px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 600; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      /* kolon zemini */
      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      .panel, .visual-card { background: var(--bg-2); box-shadow: none; border-style: solid; }
      /* kart: sol 3px etiket şeridi */
      .m-tile, .comp-card-demo, .state-card {
        position: relative; padding-left: 17px; box-shadow: var(--shadow); background: var(--surface);
      }
      .m-tile::before, .comp-card-demo::before, .state-card::before {
        content: ''; position: absolute; left: 0; top: 8px; bottom: 8px; width: 3px;
        border-radius: 999px; background: var(--accent); opacity: .8;
      }
      .kpi { padding-left: 17px; box-shadow: none; background: var(--surface-2); }
      /* kolon başlığı: sayaç */
      .kpi .t, .kpi .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; }
      .btn {
        height: 34px; padding: 0 12px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 13px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn.sm { height: 28px; padding: 0 10px; font-size: 12px; }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 14px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 30%, transparent); outline-offset: 1px;
      }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-body); font-size: 11px; font-weight: 600;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 32%, transparent); }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 22%, transparent); border-radius: 999px; }
      .line, .divider { background: var(--line); }
      .m-grid {
        background-image: radial-gradient(color-mix(in srgb, var(--ink) 8%, transparent) 1px, transparent 1px);
        background-size: 22px 22px; border-radius: var(--radius-lg);
      }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
      .sig { box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--accent) 30%, transparent); }
      .hero-visual, .visual-card {
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px);
        background-size: 25% 100%;
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
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 10px; background: var(--bg-2); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 999px; }
body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 10px; background: var(--surface); border-radius: var(--radius); box-shadow: 0 1px 3px color-mix(in srgb, var(--ink) 12%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: 6px; border-radius: 3px; }
body.scene-landing .hero-visual .visual-row .line { height: 26px; border-radius: var(--radius); background: var(--surface-2); }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--ink-soft); }
body.scene-landing .hero-visual .visual-card::after { content: 'TODO 3/5 · YAPILIYOR 2/3 · BİTTİ 7/12 — WIP limiti aşılmadı'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 10px; background: var(--bg-2); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 999px; }
body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 10px; background: var(--surface); border-radius: var(--radius); box-shadow: 0 1px 3px color-mix(in srgb, var(--ink) 12%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: 6px; border-radius: 3px; }
body.scene-landing .hero-visual .visual-row .line { height: 26px; border-radius: var(--radius); background: var(--surface-2); }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--ink-soft); }
body.scene-landing .hero-visual .visual-card::after { content: 'TODO 3/5 · YAPILIYOR 2/3 · BİTTİ 7/12 — WIP limiti aşılmadı'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }`,
  },
};
