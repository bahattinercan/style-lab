/**
 * 58 · Güvenlik Tabelası — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['safety-signage'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: 'upper',
  extraCss: `
      /* imza: çapraz tehlike bandı · 2px uyarı çerçevesi · Anton büyük harf · piktogram */
      body { background: var(--bg); }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; }
      h1 { font-size: 72px; line-height: .94; max-width: 18ch; letter-spacing: .01em; }
      h2 { font-size: 40px; line-height: 1.02; }
      h3 { font-size: 24px; line-height: 1.12; }
      .lede { font-family: var(--font-body); font-size: 17px; font-weight: 500; line-height: 1.45; max-width: 46ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow {
        display: inline-block; padding: 4px 8px; background: var(--accent); color: var(--accent-ink);
      }
      .brand { font-family: var(--font-display); font-size: 18px; letter-spacing: .02em; text-transform: uppercase; }

      /* üst bant: 45° çapraz tehlike şeridi */
      .nav {
        height: 60px; border: 0; border-radius: 0; box-shadow: none; background: var(--accent-ink);
        color: var(--ink); border-top: 8px solid transparent;
        border-image: repeating-linear-gradient(45deg, var(--accent) 0 20px, var(--accent-ink) 20px 40px) 8;
      }
      .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }

      /* uyarı kutusu: 2px accent çerçeve, 0 radius, gölge yok */
      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        border: 2px solid var(--line); border-radius: 0; box-shadow: none; background: var(--surface);
      }
      .card, .state-card { border-left-width: 8px; border-left-color: var(--accent); }
      .kpi { border-color: var(--accent); }
      .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; letter-spacing: .01em; }

      .btn {
        height: 48px; padding: 0 20px; border-radius: 0; box-shadow: none;
        background: var(--accent); color: var(--accent-ink); border: 2px solid var(--accent-ink);
        font-family: var(--font-body); font-size: 15px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
      }
      .btn:hover { background: var(--accent-ink); color: var(--accent); }
      .btn:active { transform: translateY(2px); }
      .btn.sm { height: 40px; padding: 0 14px; font-size: 13px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border-color: var(--ink); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--ink); color: var(--bg); }
      .field input, .field select, .field textarea {
        border-radius: 0; border: 2px solid var(--line); background: var(--bg-2);
        font-family: var(--font-body); font-size: 16px; font-weight: 500;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        border-radius: 0; border: 0; background: var(--accent); color: var(--accent-ink);
        font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); }
      .table th {
        font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: .1em;
        text-transform: uppercase; border-bottom: 2px solid var(--accent);
      }
      .table td { border-bottom: 2px solid var(--line); }
      .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); }
      .divider, .line, .bar { background: var(--line); height: 2px; }
      .sig {
        background: repeating-linear-gradient(45deg, var(--accent) 0 20px, transparent 20px 40px);
        opacity: .18;
      }

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
      /* landing imzası: çapraz tehlike bandı + uyarı plakası + kontrol listesi */
      .hero-visual { background: var(--bg-2); }
      .hero-visual::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 10px; pointer-events: none;
        background: repeating-linear-gradient(45deg, var(--accent) 0 14px, var(--accent-ink) 14px 28px); }
      .visual-card { background: var(--surface); border: 2px solid var(--accent); border-radius: 0; }
      .visual-card .bar { height: 4px; background: var(--accent-ink); }
      .visual-row { display: grid; grid-template-columns: 14px 1fr 42px; align-items: center; gap: 8px;
        padding: 5px 0; border-bottom: 2px solid var(--line); }
      .visual-row .sq { width: 10px; height: 10px; background: var(--accent-ink); }
      .visual-row .line { height: 3px; background: color-mix(in srgb, var(--ink) 30%, transparent); }
      .visual-row .num { font-family: var(--font-display); font-size: 11px; color: var(--accent); }`,
  'dark-landing': `
      /* koyu mod: bant parlaklığı artar, plaka çerçevesi kalınlaşır */
      .hero-visual::before { opacity: 1; }
      .visual-card { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent); }`,
  },
};
