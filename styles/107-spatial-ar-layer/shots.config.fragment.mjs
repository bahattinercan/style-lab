/**
 * 107 · Uzamsal AR Katman — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['spatial-ar-layer'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
      /* imza: perspektif ızgara · çapa artısı · üç derinlik düzlemi · mono koordinat */
      body {
        background-image:
          linear-gradient(color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
        background-size: 40px 40px, 40px 40px;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: .01em; }
      h1 { font-size: 44px; line-height: 1.08; max-width: 21ch; }
      h2 { font-size: 30px; line-height: 1.16; }
      h3 { font-size: 21px; line-height: 1.28; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '⊕ '; color: var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; }

      .nav {
        background: color-mix(in srgb, var(--surface) 72%, transparent);
        border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        backdrop-filter: blur(var(--blur)); -webkit-backdrop-filter: blur(var(--blur));
      }
      .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 500; }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      /* katman yükseklikleri: z0 düz, z1 orta, z2 ön */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: 0 8px 20px color-mix(in srgb, var(--ink) 12%, transparent);
      }
      .panel, .card, .visual-card, .comp-card-demo { position: relative; box-shadow: var(--shadow); }
      /* çapa artısı */
      .panel::before, .card::before, .visual-card::before, .comp-card-demo::before {
        content: '+'; position: absolute; top: 6px; left: 8px; font-family: var(--font-mono);
        font-size: 12px; line-height: 1; color: var(--accent); pointer-events: none;
      }
      /* perspektif sahne: hero görseli */
      .hero-visual, .visual-card {
        background-image:
          linear-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px),
          linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%);
        background-size: 28px 28px, 28px 28px, 100% 100%;
      }
      .m-tile, .field { box-shadow: none; }
      .btn {
        height: 42px; padding: 0 18px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: 0 8px 20px color-mix(in srgb, var(--ink) 16%, transparent);
        font-family: var(--font-display); font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn:active { transform: translateY(1px); box-shadow: 0 4px 12px color-mix(in srgb, var(--ink) 18%, transparent); }
      .btn.sm { height: 32px; padding: 0 12px; font-size: 11px; }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 44%, transparent); }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
      .bar:not(.accent):not(.w70):not(.w45), .line, .divider { background: var(--line); }
      .m-grid {
        background-image:
          linear-gradient(color-mix(in srgb, var(--accent) 20%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 20%, transparent) 1px, transparent 1px);
        background-size: 24px 24px; border-radius: var(--radius-lg);
      }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .sig {
        border-top: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
        box-shadow: inset 0 8px 20px color-mix(in srgb, var(--ink) 10%, transparent);
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
    landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 12px; background: color-mix(in srgb, var(--surface) 86%, transparent); }
body.scene-landing .hero-visual { min-height: 380px; }
body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: var(--radius); background: color-mix(in srgb, var(--accent) 16%, transparent); border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent); }
body.scene-landing .hero-visual .visual-rows { gap: 14px; perspective: 900px; }
body.scene-landing .hero-visual .visual-row { transform: rotateY(4deg); box-shadow: 0 10px 24px color-mix(in srgb, var(--ink) 14%, transparent); background: color-mix(in srgb, var(--surface) 92%, transparent); }
body.scene-landing .hero-visual .visual-row:nth-child(2) { transform: rotateY(-3deg) translateX(10px); }
body.scene-landing .hero-visual .visual-row:nth-child(3) { transform: rotateY(2deg) translateX(20px); }
body.scene-landing .hero-visual .visual-row .sq { background: transparent; position: relative; }
body.scene-landing .hero-visual .visual-row .sq::before { content: '+'; position: absolute; inset: 0; display: grid; place-items: center; font-family: var(--font-mono); font-size: 13px; color: var(--accent); }
body.scene-landing .hero-visual .visual-card::after { content: 'x 1.24 · y 0.86 · z 0.42 — 3 katman sabitlendi'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-soft); }`,
    'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 12px; background: color-mix(in srgb, var(--surface) 86%, transparent); }
body.scene-landing .hero-visual { min-height: 380px; }
body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: var(--radius); background: color-mix(in srgb, var(--accent) 16%, transparent); border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent); }
body.scene-landing .hero-visual .visual-rows { gap: 14px; perspective: 900px; }
body.scene-landing .hero-visual .visual-row { transform: rotateY(4deg); box-shadow: 0 10px 24px color-mix(in srgb, var(--ink) 14%, transparent); background: color-mix(in srgb, var(--surface) 92%, transparent); }
body.scene-landing .hero-visual .visual-row:nth-child(2) { transform: rotateY(-3deg) translateX(10px); }
body.scene-landing .hero-visual .visual-row:nth-child(3) { transform: rotateY(2deg) translateX(20px); }
body.scene-landing .hero-visual .visual-row .sq { background: transparent; position: relative; }
body.scene-landing .hero-visual .visual-row .sq::before { content: '+'; position: absolute; inset: 0; display: grid; place-items: center; font-family: var(--font-mono); font-size: 13px; color: var(--accent); }
body.scene-landing .hero-visual .visual-card::after { content: 'x 1.24 · y 0.86 · z 0.42 — 3 katman sabitlendi'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-soft); }`,
  },
};
