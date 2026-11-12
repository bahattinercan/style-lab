/**
 * 115 · Klavye-Öncelikli Komut Arayüzü — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['keyboard-first'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
      /* imza: tuş başlığı (kbd) · sabit komut satırı · odak halkası · 2px seçim şeridi */
      body {
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px),
          linear-gradient(0deg, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px);
        background-size: 88px 88px;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: .01em; }
      h1 { font-size: 34px; line-height: 1.05; max-width: 26ch; text-transform: none; }
      h2 { font-size: 24px; line-height: 1.14; }
      h3 { font-size: 18px; line-height: 1.2; }
      .lede { font-size: 14px; line-height: 1.52; max-width: 70ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
      .eyebrow::before {
        content: '>'; font-family: var(--font-mono); color: var(--accent); font-size: 12px; line-height: 1;
      }
      .brand { font-family: var(--font-display); font-size: 15px; font-weight: 700; letter-spacing: .04em; }

      .nav {
        height: 44px; background: var(--bg-2); border-bottom: 1px solid var(--line);
        border-radius: 0; box-shadow: none;
      }
      .nav-links a { font-family: var(--font-mono); font-size: 12px; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active {
        color: var(--accent); text-decoration: underline; text-underline-offset: 5px; text-decoration-thickness: 2px;
      }

      /* tuş başlığı: mono, 4px radius, sert alt gölge */
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; color: var(--ink);
        box-shadow: var(--shadow-hard); padding: 0 6px;
      }
      .chip.accent {
        background: var(--accent); color: var(--accent-ink); border-color: var(--accent);
        box-shadow: 0 2px 0 color-mix(in srgb, var(--accent) 55%, var(--bg));
      }
      .hint {
        font-family: var(--font-mono); font-size: 11px; color: var(--ink-faint);
        border-left: 2px solid var(--line); padding-left: 8px;
      }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
      }
      .panel, .kpi { background: var(--bg-2); }
      .visual-card, .m-grid { background: var(--bg-2); }
      /* seçili satır: sol 2px accent şerit */
      .comp-card-demo, .state-card, .m-tile { position: relative; padding-left: 16px; }
      .comp-card-demo::before, .state-card::before, .m-tile::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent);
      }
      .m-tile { box-shadow: none; background: var(--surface-2); }

      .btn {
        height: 32px; padding: 0 12px; border-radius: var(--radius); border: 1px solid var(--line);
        background: var(--surface-2); color: var(--ink); box-shadow: none;
        font-family: var(--font-body); font-size: 13px; font-weight: 600;
      }
      .btn:hover { border-color: var(--accent); color: var(--accent); }
      .btn:active { transform: translateY(2px); }
      .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink-soft); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); color: var(--ink); }
      .btn.sm { height: 26px; padding: 0 8px; font-family: var(--font-mono); font-size: 11px; }

      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line);
        font-family: var(--font-mono); font-size: 13px; min-height: 34px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 30%, transparent); outline-offset: 1px;
      }
      .field.err input, .field.err select { border-color: var(--danger); }
      .kpi .num, .num { font-family: var(--font-mono); font-weight: 600; font-variant-numeric: tabular-nums; letter-spacing: -.01em; }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); font-family: var(--font-mono); font-size: 12px; }
      .table tr:hover td { background: var(--surface-2); }
      .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 20%, transparent); border-radius: 1px; height: 4px; }
      .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--accent); border-radius: 1px; }
      .divider, .line { background: var(--line); height: 1px; }
      .mark { background: var(--accent); color: var(--accent-ink); border-radius: var(--radius); }
      .m-grid {
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px),
          linear-gradient(0deg, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px);
        background-size: 44px 44px; border-radius: var(--radius-lg);
      }
      .hero-visual {
        background-image:
          linear-gradient(0deg, color-mix(in srgb, var(--accent) 34%, transparent) 2px, transparent 2px);
        background-repeat: no-repeat; background-position: bottom; background-size: 100% 6px;
        border: 1px solid var(--line); border-radius: var(--radius-lg);
      }
      .sig { box-shadow: inset 0 -32px 0 color-mix(in srgb, var(--bg-2) 92%, transparent); }
      /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
      /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
      .btn.ghost, .btn.soft { border: 1px solid color-mix(in srgb, var(--ink) 55%, transparent); }
      .chip { color: var(--ink); }
      /* içeriksiz dekor bandı: landing sayfasında sabit şerit yok */
      .scene-landing .sig { background-image: none; box-shadow: none; }
      /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
      .hero-visual { min-height: 360px; align-content: center; }
`,
  scenes: {
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 0; display: grid; align-content: start; gap: 0; background: var(--bg-2); }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 34px; border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: var(--surface); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--surface) 0 88%, var(--surface-2) 88%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 0; margin: 0; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 14px 1fr auto; padding: 9px 14px; border-radius: 0; border-bottom: 1px solid var(--line); }
body.scene-landing .hero-visual .visual-row:first-child { border-left: 2px solid var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 1px; background: var(--surface-2); }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line); border-radius: 3px; padding: 1px 5px; }
body.scene-landing .hero-visual .visual-card::after { content: '> ara · K komut · ENTER seç · ↑↓ gez · ? yardım'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); padding: 9px 14px; }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 0; display: grid; align-content: start; gap: 0; background: var(--bg-2); }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 34px; border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: var(--surface); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--surface) 0 88%, var(--surface-2) 88%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 0; margin: 0; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 14px 1fr auto; padding: 9px 14px; border-radius: 0; border-bottom: 1px solid var(--line); }
body.scene-landing .hero-visual .visual-row:first-child { border-left: 2px solid var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 1px; background: var(--surface-2); }
body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line); border-radius: 3px; padding: 1px 5px; }
body.scene-landing .hero-visual .visual-card::after { content: '> ara · K komut · ENTER seç · ↑↓ gez · ? yardım'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); padding: 9px 14px; }`,
  },
};
