/**
 * 106 · Ses-Öncelikli — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['voice-first'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
      /* imza: dinleme halkası · dalga formu · hap buton · mono transkript */
      body {
        background-image:
          radial-gradient(52% 44% at 50% 8%, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 72%),
          radial-gradient(40% 36% at 88% 92%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 70%);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: -.01em; }
      h1 { font-size: 48px; line-height: 1.08; max-width: 20ch; }
      h2 { font-size: 32px; line-height: 1.16; }
      h3 { font-size: 22px; line-height: 1.3; }
      .lede { font-size: 16px; line-height: 1.62; max-width: 54ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
      .eyebrow::before {
        content: ''; width: 8px; height: 8px; border-radius: 999px; background: var(--accent);
        box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 22%, transparent);
      }
      .brand { font-family: var(--font-display); font-size: 19px; font-weight: 500; }

      .nav {
        background: color-mix(in srgb, var(--bg) 88%, var(--surface));
        border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
      }
      .nav-links a { font-family: var(--font-body); font-size: 15px; font-weight: 500; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      /* dinleme halkası: hero görselinin zemini */
      .hero-visual, .visual-card {
        position: relative; overflow: hidden;
        background-image:
          repeating-radial-gradient(circle at 50% 52%, transparent 0 34px, color-mix(in srgb, var(--accent) 26%, transparent) 34px 35px),
          repeating-radial-gradient(circle at 50% 52%, transparent 0 68px, color-mix(in srgb, var(--accent) 14%, transparent) 68px 69px);
      }
      /* dalga formu: satır içi çubuklar */
      .bar:not(.accent):not(.w70):not(.w45) {
        background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 40%, transparent));
        border-radius: 999px; width: 4px;
      }
      .line, .divider { background: var(--line); }
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
      }
      .state-card, .comp-card-demo:first-child { box-shadow: var(--shadow); border-color: color-mix(in srgb, var(--accent) 34%, transparent); }
      .btn {
        height: 48px; padding: 0 26px; border-radius: 999px; border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: var(--shadow);
        font-family: var(--font-body); font-size: 15px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 90%, var(--ink)); }
      .btn:active { transform: scale(.98); }
      .btn.sm { height: 38px; padding: 0 18px; font-size: 14px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
      .field input, .field select, .field textarea {
        border-radius: 999px; background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field textarea { border-radius: var(--radius-lg); }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); outline-offset: 2px;
      }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-body); font-size: 12px; font-weight: 600;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 40%, transparent); }
      .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .m-grid {
        background-image: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 30%, transparent) 0 2px, transparent 2px);
        background-size: 12px 12px; border-radius: var(--radius-lg);
      }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
      .sig { background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%); }
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
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; grid-template-rows: auto 1fr; gap: 18px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 9px; border-radius: 999px; background: var(--accent); border: 0; }
body.scene-landing .hero-visual .visual-card .bar.w70 { width: 38%; background: color-mix(in srgb, var(--accent) 44%, transparent); }
body.scene-landing .hero-visual .visual-card .bar.w45 { width: 22%; background: color-mix(in srgb, var(--accent) 22%, transparent); }
body.scene-landing .hero-visual .visual-rows { display: flex; align-items: center; justify-content: space-between; height: 96px; margin: 0; padding: 0; }
body.scene-landing .hero-visual .visual-row { display: block; width: 5px; padding: 0; background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 26%, transparent)); border-radius: 999px; }
body.scene-landing .hero-visual .visual-row:nth-child(1) { height: 32%; }
body.scene-landing .hero-visual .visual-row:nth-child(2) { height: 66%; }
body.scene-landing .hero-visual .visual-row:nth-child(3) { height: 92%; }
body.scene-landing .hero-visual .visual-row > * { display: none; }
body.scene-landing .hero-visual .visual-card::after { content: 'canlı transkript 00:04 — notları özetle, ekibe gönder'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 12px; }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; grid-template-rows: auto 1fr; gap: 18px; }
body.scene-landing .hero-visual { min-height: 360px; }
body.scene-landing .hero-visual .visual-card .bar { height: 9px; border-radius: 999px; background: var(--accent); border: 0; }
body.scene-landing .hero-visual .visual-card .bar.w70 { width: 38%; background: color-mix(in srgb, var(--accent) 44%, transparent); }
body.scene-landing .hero-visual .visual-card .bar.w45 { width: 22%; background: color-mix(in srgb, var(--accent) 22%, transparent); }
body.scene-landing .hero-visual .visual-rows { display: flex; align-items: center; justify-content: space-between; height: 96px; margin: 0; padding: 0; }
body.scene-landing .hero-visual .visual-row { display: block; width: 5px; padding: 0; background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 26%, transparent)); border-radius: 999px; }
body.scene-landing .hero-visual .visual-row:nth-child(1) { height: 32%; }
body.scene-landing .hero-visual .visual-row:nth-child(2) { height: 66%; }
body.scene-landing .hero-visual .visual-row:nth-child(3) { height: 92%; }
body.scene-landing .hero-visual .visual-row > * { display: none; }
body.scene-landing .hero-visual .visual-card::after { content: 'canlı transkript 00:04 — notları özetle, ekibe gönder'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 12px; }`,
  },
};
