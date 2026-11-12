/**
 * 114 · Eşzamanlı İşbirlikçi — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['multiplayer-presence'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
      /* imza: canlı imleç · avatar yığını · uzak seçim vurgusu · presence hapı */
      body {
        background-image:
          radial-gradient(46% 38% at 78% 6%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 70%);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
      h1 { font-size: 42px; line-height: 1.08; max-width: 22ch; }
      h2 { font-size: 29px; line-height: 1.18; }
      h3 { font-size: 21px; line-height: 1.24; }
      .lede { font-size: 16px; line-height: 1.62; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .05em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
      .eyebrow::before {
        content: ''; width: 8px; height: 8px; border-radius: 999px; background: var(--accent);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent);
      }
      .brand { font-family: var(--font-display); font-size: 17px; font-weight: 600; }

      .nav { height: 56px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .nav-links a { font-family: var(--font-body); font-size: 15px; font-weight: 700; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      /* avatar yığını */
      .avatar {
        width: 28px; height: 28px; border-radius: 999px; background: var(--surface-2);
        border: 2px solid var(--surface); color: var(--ink); font-family: var(--font-body);
        font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center;
        box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink) 12%, transparent);
      }
      .avatar + .avatar { margin-left: -10px; }
      .who { display: inline-flex; align-items: center; gap: 8px; }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      .visual-card, .m-grid { background: var(--bg-2); box-shadow: none; }
      /* uzak seçim: uzaktan birinin baktığı/düzenlediği kart */
      .comp-card-demo, .state-card {
        position: relative;
        box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 34%, transparent), var(--shadow);
        background: color-mix(in srgb, var(--accent) 6%, var(--surface));
      }
      .comp-card-demo::after, .state-card::after {
        content: '● 3 kişi düzenliyor'; position: absolute; right: 12px; top: 12px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .04em; color: var(--accent);
      }
      .kpi { position: relative; background: var(--surface-2); box-shadow: none; }

      /* canlı imleç bayrağı */
      .hero-visual {
        background-image:
          linear-gradient(180deg, color-mix(in srgb, var(--accent) 16%, transparent) 0 2px, transparent 2px),
          radial-gradient(circle at 22% 34%, color-mix(in srgb, var(--accent) 22%, transparent) 0 5px, transparent 5px),
          radial-gradient(circle at 68% 62%, color-mix(in srgb, var(--accent) 16%, transparent) 0 5px, transparent 5px);
        background-repeat: no-repeat;
      }
      .btn {
        height: 40px; padding: 0 18px; border-radius: 999px; border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 15px; font-weight: 700;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 90%, var(--ink)); }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn.sm { height: 32px; padding: 0 14px; font-size: 13px; }
      .field input, .field select, .field textarea {
        border-radius: 999px; background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px; min-height: 40px; padding: 0 16px;
      }
      .field textarea { border-radius: var(--radius-lg); padding: 12px 16px; }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 3px solid color-mix(in srgb, var(--accent) 22%, transparent); outline-offset: 1px;
      }
      .field.err input, .field.err select { border-color: var(--danger); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-body); font-size: 12px; font-weight: 700;
      }
      .chip.accent {
        background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent);
        border-color: color-mix(in srgb, var(--accent) 36%, transparent);
      }
      .kpi .num, .num { font-family: var(--font-display); font-weight: 600; font-variant-numeric: tabular-nums; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .05em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 18%, transparent); border-radius: 999px; }
      .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--accent); border-radius: 999px; }
      .divider, .line { background: var(--line); height: 1px; }
      .mark { background: color-mix(in srgb, var(--accent) 20%, transparent); color: var(--accent); }
      .m-grid {
        background-image:
          radial-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px);
        background-size: 26px 26px; border-radius: var(--radius-lg);
      }
      .sig { box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--accent) 30%, transparent); }
      /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      /* varlık rozeti ::after (right 12/top 12) başlık çipiyle çakışıyordu: üstte 34px pay */
      .comp-card-demo, .state-card { padding-top: 34px; }
      .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
      /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
      .chip { color: var(--ink); }
      /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
      .hero-visual { min-height: 360px; align-content: center; }
`,
  scenes: {
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 14px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 999px; }
body.scene-landing .hero-visual .visual-rows { gap: 12px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 28px 1fr auto; padding: 8px 10px; border: 1px solid var(--line); border-radius: 999px; }
body.scene-landing .hero-visual .visual-row .sq { width: 26px; height: 26px; border-radius: 999px; border: 2px solid var(--surface); box-shadow: 0 0 0 1px var(--line); }
body.scene-landing .hero-visual .visual-row:nth-child(2) .sq { background: color-mix(in srgb, var(--accent) 55%, var(--surface-2)); }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; }
body.scene-landing .hero-visual .visual-card::after { content: '3 kişi düzenliyor · imleçler canlı · DÜZENLİYOR'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 14px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 999px; }
body.scene-landing .hero-visual .visual-rows { gap: 12px; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 28px 1fr auto; padding: 8px 10px; border: 1px solid var(--line); border-radius: 999px; }
body.scene-landing .hero-visual .visual-row .sq { width: 26px; height: 26px; border-radius: 999px; border: 2px solid var(--surface); box-shadow: 0 0 0 1px var(--line); }
body.scene-landing .hero-visual .visual-row:nth-child(2) .sq { background: color-mix(in srgb, var(--accent) 55%, var(--surface-2)); }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; }
body.scene-landing .hero-visual .visual-card::after { content: '3 kişi düzenliyor · imleçler canlı · DÜZENLİYOR'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }`,
  },
};
