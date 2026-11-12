/**
 * 56 · Blueprint Çizimi — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['blueprint-drawing'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
      /* imza: cyanotype pafta · 8/64px çizim ızgarası · 1px çizgi hiyerarşisi · ölçü etiketleri */
      body {
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 64px 64px;
        background-position: -1px -1px;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
      h1 { font-size: 46px; line-height: 1.08; max-width: 22ch; }
      h2 { font-size: 30px; line-height: 1.16; letter-spacing: .02em; }
      h3 { font-size: 20px; line-height: 1.3; }
      .lede { font-size: 15px; line-height: 1.62; max-width: 60ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }
      .eyebrow::before { content: 'DWG '; color: var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .08em; color: var(--ink); }
      .brand::after { content: ' · pafta 1/1'; color: var(--ink-faint); }
      .nav { border-bottom: 1px solid var(--line); box-shadow: none; background: var(--bg); }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; }

      /* pafta çerçevesi: 1px dış çizgi + 8px kesikli iç çizgi */
      .panel, .card, .kpi, .field, .chip, .visual-card, .comp-card-demo, .state-card, .m-tile {
        border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; background: var(--surface);
      }
      .panel, .visual-card { position: relative; }
      .panel::after, .visual-card::after {
        content: ''; position: absolute; inset: 8px; pointer-events: none;
        border: 1px dashed color-mix(in srgb, var(--accent) 32%, transparent);
      }

      /* ölçü çizgili buton */
      .btn {
        height: 40px; padding: 0 16px; border-radius: var(--radius); box-shadow: none;
        background: transparent; border: 1px solid var(--accent); color: var(--accent);
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 14%, transparent); }
      .btn.sm { height: 32px; padding: 0 12px; font-size: 10px; }
      .btn.ghost, .btn.soft { background: transparent; border-color: var(--line); color: var(--ink); }
      .field input, .field select, .field textarea { border-radius: var(--radius); background: var(--bg-2); }
      .chip { font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; background: transparent; }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }

      /* ölçü etiketi: her KPI'nın altında hairline + birim */
      .kpi { padding: 16px 20px; border-left: 2px solid var(--accent); }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
      .bar, .line, .divider { background: var(--line); }
      .m-grid, .visual-rows { background-image: linear-gradient(var(--line) 1px, transparent 1px); background-size: 100% 32px; }
      table, .table { font-variant-numeric: tabular-nums; }
      .table th, .table td { border-bottom: 1px solid var(--line); }
      .mark { border-radius: var(--radius); background: transparent; border: 1px solid var(--accent); color: var(--accent); }
      .sig { border-top: 1px solid var(--accent); }

      /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
      /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
      .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
        opacity: 1 !important; background: var(--surface-2) !important;
        color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
      }
      /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
      [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
        border-color: color-mix(in srgb, var(--ink) 62%, transparent);
      }
      /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
      .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
      /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
`,
  scenes: {
  landing: `
      /* landing imzası: pafta çerçevesi + ölçü oku + çizim ızgarası */
      .hero-visual { background-image:
        linear-gradient(color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1px);
        background-size: 24px 24px, 24px 24px; }
      .hero-visual::after { content: 'Ø 42 · ölçek 1:2'; position: absolute; right: 14px; bottom: 10px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .12em; color: var(--accent); }
      .visual-card { background: color-mix(in srgb, var(--bg) 82%, transparent);
        border: 1px solid var(--accent); border-radius: var(--radius-lg); }
      .visual-card .bar { height: 1px; background: var(--accent); }
      .visual-row .sq { border: 1px solid var(--accent); background: transparent; }
      .visual-row .line { height: 1px; background: color-mix(in srgb, var(--ink) 30%, transparent); position: relative; }
      .visual-row .line::after { content: ''; position: absolute; right: -1px; top: -3px; width: 1px; height: 7px; background: var(--accent); }
      .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--accent); }`,
  'dark-landing': `
      /* koyu mod: pafta çizgisi parlak, iç çerçeve görünür */
      .hero-visual { background-image:
        linear-gradient(color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px);
        background-size: 24px 24px, 24px 24px; }
      .visual-card { border-color: color-mix(in srgb, var(--accent) 70%, var(--line)); }`,
  },
};
