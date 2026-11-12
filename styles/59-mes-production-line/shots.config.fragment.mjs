/**
 * 59 · Üretim Hattı · MES — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['mes-production-line'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
      /* imza: durum şeridi · tabular sayaç · 1px hairline kart · yoğun tablo ritmi */
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: -.01em; }
      h1 { font-size: 34px; line-height: 1.16; max-width: 26ch; }
      h2 { font-size: 24px; line-height: 1.3; }
      h3 { font-size: 18px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.55; max-width: 62ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
      .eyebrow::before {
        content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
      }
      .brand { font-family: var(--font-mono); font-size: 13px; font-weight: 700; letter-spacing: .02em; }
      body { font-variant-numeric: tabular-nums; }

      .nav {
        height: 48px; background: var(--surface); border-bottom: 1px solid var(--line);
        border-radius: 0; box-shadow: none;
      }
      .nav-links a { font-family: var(--font-body); font-size: 13px; font-weight: 500; }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); box-shadow: inset 0 -2px 0 var(--accent); }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      .kpi { border-left: 3px solid var(--accent); padding: 14px 16px; }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 700; letter-spacing: -.02em; }
      .kpi .t, .kpi .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; }

      .btn {
        height: 36px; padding: 0 12px; border-radius: var(--radius); box-shadow: none;
        background: var(--accent); color: var(--accent-ink); border: 1px solid transparent;
        font-family: var(--font-body); font-size: 13px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn.sm { height: 30px; padding: 0 10px; font-size: 12px; }
      .btn.ghost, .btn.soft {
        background: var(--surface); color: var(--ink); border: 1px solid var(--line); box-shadow: none;
      }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 14px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); outline-offset: 1px;
      }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 34%, transparent); }

      .table { font-variant-numeric: tabular-nums; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); height: 32px; }
      .table tr:hover td { background: var(--surface-2); }
      .bar, .line, .divider { background: var(--line); }
      .m-grid { background-image: radial-gradient(var(--line) 1px, transparent 1px); background-size: 16px 16px; }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .sig { border-left: 3px solid var(--accent); }

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
      /* landing imzası: hat verimi çubukları + istasyon durum satırları */
      .hero-visual { background: var(--surface); }
      .visual-card { background: var(--surface); border: 1px solid var(--line); box-shadow: var(--shadow); }
      .visual-card .bar { height: 8px; border-radius: 2px; background: color-mix(in srgb, var(--accent) 78%, transparent); }
      .visual-card .bar.w70 { background: color-mix(in srgb, var(--accent) 46%, transparent); }
      .visual-card .bar.w45 { background: color-mix(in srgb, var(--warn) 60%, transparent); }
      .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
      .visual-row { display: grid; gap: 4px; padding: 8px; border-left: 3px solid var(--accent);
        background: var(--surface-2); border-radius: var(--radius); }
      .visual-row:nth-child(2) { border-left-color: var(--warn); }
      .visual-row:nth-child(3) { border-left-color: var(--danger); }
      .visual-row .sq { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
      .visual-row .line { height: 2px; }
      .visual-row .num { font-family: var(--font-mono); font-size: 13px; font-weight: 700; }`,
  },
};
