/**
 * 109 · Zaman Çizelgesi Editörü — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['timeline-editor'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
      /* imza: kanal şeritleri · 2px playhead · zaman kodu · %14 klip tonu */
      body {
        background-image: repeating-linear-gradient(180deg, color-mix(in srgb, var(--ink) 4%, transparent) 0 1px, transparent 1px 32px);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; }
      h1 { font-size: 38px; line-height: 1.1; max-width: 24ch; }
      h2 { font-size: 26px; line-height: 1.18; }
      h3 { font-size: 18px; line-height: 1.28; }
      .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.55; max-width: 64ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
      .eyebrow::before { content: ''; width: 2px; height: 12px; background: var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 12px; letter-spacing: .08em; text-transform: uppercase; }

      .nav { height: 44px; background: var(--surface-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; font-weight: 500; }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      }
      /* klip bloğu: seçili klip accent %24 */
      .m-tile, .kpi { background: color-mix(in srgb, var(--accent) 8%, var(--surface)); border-color: color-mix(in srgb, var(--accent) 22%, var(--line)); }
      .m-tile:hover, .kpi:hover { background: color-mix(in srgb, var(--accent) 16%, var(--surface)); box-shadow: 0 2px 8px color-mix(in srgb, var(--ink) 12%, transparent); }
      /* playhead: hero görselinde tek dikey çizgi */
      .hero-visual, .visual-card {
        position: relative;
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 12%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px);
        background-size: 64px 100%, 16px 100%;
      }
      .hero-visual::after, .visual-card::after {
        content: ''; position: absolute; top: 0; bottom: 0; left: 42%; width: 2px; background: var(--accent);
      }
      .btn {
        height: 32px; padding: 0 10px; border-radius: var(--radius); border: 1px solid var(--line);
        background: var(--surface-2); color: var(--ink); box-shadow: none;
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--surface-2) 88%, var(--ink)); }
      .btn.sm { height: 24px; padding: 0 8px; font-size: 10px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink-soft); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-mono); font-size: 12px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 20%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 40%, transparent); }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .02em; }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); height: 32px; font-variant-numeric: tabular-nums; }
      .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 24%, transparent); border-radius: var(--radius); }
      .line, .divider { background: var(--line); }
      .m-grid {
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px),
          linear-gradient(180deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
        background-size: 64px 100%, 100% 32px; border-radius: var(--radius-lg);
      }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .sig { border-left: 2px solid var(--accent); }
      /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
      /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
      .chip { color: var(--ink); }
      /* chip.accent: accent metin / accent-karışımı zemin 4.38–4.51:1 → dolu accent + accent-ink (5.36–6.98:1) */
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
      .hero-visual { min-height: 360px; align-content: center; }
`,
  scenes: {
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 10px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 4px; border-radius: 0; background: var(--line); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--line) 0 34%, var(--accent) 34% 36%, var(--line) 36%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 10px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 16px 1fr auto; padding: 12px 10px; border-left: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); }
body.scene-landing .hero-visual .visual-row:nth-child(2) { border-left-color: var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 1px; }
body.scene-landing .hero-visual .visual-card::after { content: '00:00:12:04 · playhead · 2 kanal · snap 1/4'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 10px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 4px; border-radius: 0; background: var(--line); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--line) 0 34%, var(--accent) 34% 36%, var(--line) 36%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 10px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 16px 1fr auto; padding: 12px 10px; border-left: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); }
body.scene-landing .hero-visual .visual-row:nth-child(2) { border-left-color: var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 1px; }
body.scene-landing .hero-visual .visual-card::after { content: '00:00:12:04 · playhead · 2 kanal · snap 1/4'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: var(--ink-soft); }`,
  },
};
