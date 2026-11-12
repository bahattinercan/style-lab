/**
 * 57 · İşlenmiş Metal Panel — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['machined-metal-panel'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
      /* imza: fırçalanmış alüminyum · bevel çift hairline · gravür etiket · amber durum noktası */
      body {
        background-image: repeating-linear-gradient(
          180deg,
          color-mix(in srgb, var(--ink) 5%, transparent) 0 1px,
          transparent 1px 3px
        );
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: .06em; text-transform: uppercase; }
      h1 { font-size: 38px; line-height: 1.14; max-width: 24ch; }
      h2 { font-size: 26px; line-height: 1.2; }
      h3 { font-size: 19px; line-height: 1.3; letter-spacing: .04em; }
      .lede { font-size: 16px; line-height: 1.58; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '◤ '; color: var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; }

      /* panel kenarı: üst 2px açık, alt 1px koyu çift hairline */
      .nav {
        background: var(--surface); box-shadow: inset 0 2px 0 color-mix(in srgb, var(--ink) 10%, transparent);
        border-bottom: 1px solid var(--line); border-radius: 0;
      }
      .nav-links a { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; }

      /* bevel yüzey + köşe vida izi */
      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: var(--shadow);
      }
      .panel, .card, .kpi { position: relative; }
      .panel::before, .card::before, .kpi::before {
        content: ''; position: absolute; top: 5px; right: 5px; width: 5px; height: 5px;
        border-radius: 50%; border: 1px solid color-mix(in srgb, var(--ink) 26%, transparent);
        background: color-mix(in srgb, var(--bg-2) 60%, transparent);
      }

      /* basılabilir kontrol */
      .btn {
        height: 38px; padding: 0 16px; border-radius: var(--radius);
        background: var(--surface-2); color: var(--ink); border: 1px solid var(--line);
        box-shadow: var(--shadow);
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--surface-2) 88%, var(--ink)); }
      .btn:active { box-shadow: inset 0 1px 2px color-mix(in srgb, var(--ink) 30%, transparent); }
      .btn.sm { height: 30px; padding: 0 10px; font-size: 10px; }
      .btn.accent, .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: color-mix(in srgb, var(--ink) 22%, transparent); }
      .btn.ghost, .btn.soft { background: var(--bg-2); color: var(--ink-soft); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); box-shadow: inset 0 1px 2px color-mix(in srgb, var(--ink) 16%, transparent);
        background: var(--bg-2);
      }
      .chip {
        background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; text-transform: uppercase;
      }

      /* amber durum noktası: her KPI başlığının solunda */
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
      .kpi .t, .kpi .label { display: inline-flex; align-items: center; gap: 6px; }
      .kpi .t::before, .kpi .label::before {
        content: ''; width: 6px; height: 6px; border-radius: 50%;
        background: var(--accent); box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink) 20%, transparent);
      }
      .table th { font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; text-transform: uppercase; }
      .table th, .table td { border-bottom: 1px solid var(--line); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .divider, .line, .bar { background: var(--line); }
      .sig { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 14%, transparent); }

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
      /* landing imzası: fırçalanmış panel + amber LED sırası + gravür etiket */
      .hero-visual { background-image: repeating-linear-gradient(180deg,
        color-mix(in srgb, var(--ink) 5%, transparent) 0 1px, transparent 1px 3px); }
      .hero-visual::after { content: 'PANEL A-04 · 24V'; position: absolute; left: 12px; top: 10px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; color: var(--ink-soft); }
      .visual-card { background: var(--surface-2); border: 1px solid var(--line); box-shadow: var(--shadow); }
      .visual-card .bar { height: 3px; background: color-mix(in srgb, var(--ink) 22%, transparent); }
      .visual-row { display: grid; grid-template-columns: 12px 1fr 40px; align-items: center; gap: 8px; }
      .visual-row .sq { width: 8px; height: 8px; border-radius: 50%; background: var(--accent);
        box-shadow: inset 0 1px 0 color-mix(in srgb, var(--danger-ink) 40%, transparent), 0 0 0 2px color-mix(in srgb, var(--ink) 16%, transparent); }
      .visual-row .line { height: 2px; background: color-mix(in srgb, var(--ink) 26%, transparent); }
      .visual-row .num { font-family: var(--font-mono); font-size: 9px; }`,
  },
};
