/**
 * 108 · Komut Paleti — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['command-palette'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: 'upper',
  extraCss: `
      /* imza: tek chalk accent · keycap chip · 44px komut satırı · blur arka plan */
      body {
        background-image: radial-gradient(60% 50% at 50% 0%, color-mix(in srgb, var(--ink) 6%, transparent) 0%, transparent 70%);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
      h1 { font-size: 30px; line-height: 1.2; max-width: 28ch; }
      h2 { font-size: 22px; line-height: 1.3; }
      h3 { font-size: 17px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.5; max-width: 68ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '> '; color: var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 13px; font-weight: 600; letter-spacing: 0; }
      body { font-variant-numeric: tabular-nums; }

      .nav { height: 48px; background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      }
      /* palet gövdesi: yüzen tek katman */
      .comp-card-demo, .state-card {
        box-shadow: var(--shadow); border-radius: var(--radius-lg);
      }
      /* seçim satırı */
      .table tr[aria-selected='true'] td, .table tr.selected td, .table tr:hover td {
        background: var(--accent); color: var(--accent-ink);
      }
      .comp-card-demo .t, .list-row, .table td { font-family: var(--font-body); }
      .btn {
        height: 32px; padding: 0 12px; border-radius: var(--radius); border: 1px solid var(--line);
        background: var(--surface-2); color: var(--ink); box-shadow: none;
        font-family: var(--font-mono); font-size: 12px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--surface-2) 85%, var(--accent)); }
      .btn.sm { height: 24px; padding: 0 8px; font-size: 11px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink-soft); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      /* keycap chip */
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 4px;
        font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .02em;
        text-transform: none; min-width: 20px; justify-content: center;
      }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-faint); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); height: 44px; }
      .bar:not(.accent):not(.w70):not(.w45), .line, .divider { background: var(--line); }
      .m-grid { background-image: none; border-radius: var(--radius-lg); }
      .mark { border-radius: 4px; background: var(--accent); color: var(--accent-ink); }
      .scene-overlay .sig, .scene-auth .sig {
        background: color-mix(in srgb, var(--bg) 60%, transparent);
        backdrop-filter: blur(var(--blur)); -webkit-backdrop-filter: blur(var(--blur));
      }
      .hero-visual, .visual-card {
        background-image: linear-gradient(180deg, color-mix(in srgb, var(--ink) 5%, transparent), transparent 60%);
      }
      /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
      /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
      .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
      /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
      .btn.ghost, .btn.soft { border: 1px solid color-mix(in srgb, var(--ink) 55%, transparent); }
      .chip { color: var(--ink); }
      /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
      .hero-visual { min-height: 360px; align-content: center; }
`,
  scenes: {
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 0; overflow: hidden; box-shadow: 0 24px 60px color-mix(in srgb, var(--ink) 32%, transparent); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 52px; border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: var(--surface-2); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 12%, var(--surface-2)) 0 46%, var(--surface-2) 46%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 0; margin: 0; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 18px 1fr auto; padding: 12px 16px; border-radius: 0; border-bottom: 1px solid var(--line); }
body.scene-landing .hero-visual .visual-row:first-child { background: color-mix(in srgb, var(--accent) 10%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 14px; height: 14px; border-radius: 3px; opacity: 1; background: color-mix(in srgb, var(--accent) 26%, transparent); }
body.scene-landing .hero-visual .visual-row .num { font-size: 10px; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line); border-radius: 4px; padding: 2px 6px; }
body.scene-landing .hero-visual .visual-card::after { content: 'komut paleti · 8 satır · esc ile kapanır'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: var(--ink-soft); padding: 10px 16px; border-top: 1px solid var(--line); background: var(--surface-2); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 0; overflow: hidden; box-shadow: 0 24px 60px color-mix(in srgb, var(--ink) 32%, transparent); }
body.scene-landing .hero-visual { min-height: 370px; }
body.scene-landing .hero-visual .visual-card .bar { height: 52px; border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: var(--surface-2); }
body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 12%, var(--surface-2)) 0 46%, var(--surface-2) 46%); }
body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
body.scene-landing .hero-visual .visual-rows { gap: 0; margin: 0; }
body.scene-landing .hero-visual .visual-row { grid-template-columns: 18px 1fr auto; padding: 12px 16px; border-radius: 0; border-bottom: 1px solid var(--line); }
body.scene-landing .hero-visual .visual-row:first-child { background: color-mix(in srgb, var(--accent) 10%, transparent); }
body.scene-landing .hero-visual .visual-row .sq { width: 14px; height: 14px; border-radius: 3px; opacity: 1; background: color-mix(in srgb, var(--accent) 26%, transparent); }
body.scene-landing .hero-visual .visual-row .num { font-size: 10px; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line); border-radius: 4px; padding: 2px 6px; }
body.scene-landing .hero-visual .visual-card::after { content: 'komut paleti · 8 satır · esc ile kapanır'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: var(--ink-soft); padding: 10px 16px; border-top: 1px solid var(--line); background: var(--surface-2); }`,
  },
};
