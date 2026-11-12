/**
 * 113 · Notebook / REPL — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['notebook-repl'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
      /* imza: In[n] oluğu · Out bloğu · kernel noktası · mono kod */
      body { background-image: none; }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: -.02em; }
      h1 { font-size: 36px; line-height: 1.16; max-width: 24ch; }
      h2 { font-size: 26px; line-height: 1.22; }
      h3 { font-size: 19px; line-height: 1.28; }
      .lede { font-size: 15px; line-height: 1.58; max-width: 66ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
      .eyebrow::before {
        content: ''; width: 6px; height: 6px; background: var(--accent); border-radius: 1px;
      }
      .brand { font-family: var(--font-display); font-size: 14px; font-weight: 700; }

      .nav { height: 48px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .nav-links a { font-family: var(--font-mono); font-size: 12px; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      /* hücre: beyaz yüzey + sol yürütme oluğu */
      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      .panel, .card, .comp-card-demo { position: relative; padding-left: 46px; }
      .state-card { position: relative; padding-left: 38px; }
      .panel::before, .card::before, .comp-card-demo::before, .state-card::before {
        content: 'In ['; position: absolute; left: 10px; top: 12px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .04em; color: var(--ink-faint);
      }
      .panel::after, .card::after, .comp-card-demo::after, .state-card::after {
        content: ']:'; position: absolute; left: 34px; top: 12px;
        font-family: var(--font-mono); font-size: 10px; color: var(--ink-faint);
      }
      .m-tile { position: relative; padding-left: 46px; background: var(--surface-2); box-shadow: none; }
      .m-tile::before {
        content: 'Out'; position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
        font-family: var(--font-mono); font-size: 10px; color: var(--ink-faint);
      }
      .visual-card, .m-grid { background: var(--bg-2); box-shadow: none; }
      .kpi { background: var(--surface-2); box-shadow: none; padding-left: 16px; }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; }

      /* çıktı bloğu */
      .code, code, pre {
        font-family: var(--font-mono); font-size: 12px; color: var(--ink);
        background: var(--surface-2); border-left: 2px solid var(--accent); padding: 2px 6px;
      }
      .btn {
        height: 32px; padding: 0 12px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 13px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn.sm { height: 26px; padding: 0 8px; font-family: var(--font-mono); font-size: 11px; }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-mono); font-size: 13px; min-height: 36px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 26%, transparent); outline-offset: 1px;
      }
      .field.err input, .field.err select { border-color: var(--danger); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft);
      }
      .chip.accent {
        background: color-mix(in srgb, var(--accent) 12%, var(--surface)); color: var(--accent);
        border-color: color-mix(in srgb, var(--accent) 34%, transparent);
      }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
      .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 18%, transparent); border-radius: 2px; height: 4px; }
      .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--accent); border-radius: 2px; }
      .divider, .line { background: var(--line); height: 1px; }
      .mark { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); }
      .m-grid {
        background-image:
          linear-gradient(0deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
        background-size: 100% 24px; border-radius: var(--radius-lg);
      }
      .hero-visual {
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 30%, transparent) 2px, transparent 2px),
          linear-gradient(0deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
        background-size: 46px 100%, 100% 24px;
      }
      .sig { background-image: linear-gradient(0deg, color-mix(in srgb, var(--accent) 10%, transparent) 0 24px, transparent 24px); }
      /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      /* dar kartta oluk başlığa giriyordu: .state-card için 38px oluk + 4/22px etiket */
      .state-card::before { left: 4px; }
      .state-card::after { left: 22px; }
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
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px 20px; display: grid; align-content: start; gap: 12px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-rows { gap: 12px; }
body.scene-landing .hero-visual .visual-row { position: relative; grid-template-columns: 1fr auto; padding: 10px 10px 10px 42px; background: var(--surface-2); border-radius: var(--radius); border-left: 2px solid var(--accent); }
body.scene-landing .hero-visual .visual-row .sq { display: none; }
body.scene-landing .hero-visual .visual-row::before { content: 'In ['; position: absolute; left: 8px; top: 10px; font-family: var(--font-mono); font-size: 10px; color: var(--ink-soft); }
body.scene-landing .hero-visual .visual-card::after { content: 'Out[3]: 4 çekirdek · 128 GB · süre 00:04:12 — hata yok'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px 20px; display: grid; align-content: start; gap: 12px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-rows { gap: 12px; }
body.scene-landing .hero-visual .visual-row { position: relative; grid-template-columns: 1fr auto; padding: 10px 10px 10px 42px; background: var(--surface-2); border-radius: var(--radius); border-left: 2px solid var(--accent); }
body.scene-landing .hero-visual .visual-row .sq { display: none; }
body.scene-landing .hero-visual .visual-row::before { content: 'In ['; position: absolute; left: 8px; top: 10px; font-family: var(--font-mono); font-size: 10px; color: var(--ink-soft); }
body.scene-landing .hero-visual .visual-card::after { content: 'Out[3]: 4 çekirdek · 128 GB · süre 00:04:12 — hata yok'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }`,
  },
};
