/**
 * 60 · Enerji Şebekesi — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['energy-grid'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
      /* imza: nokta ızgarası zemin · 1.5px şema hattı · düğüm noktası · tek renk akış */
      body {
        background-image: radial-gradient(color-mix(in srgb, var(--ink) 14%, transparent) 1px, transparent 1px);
        background-size: 8px 8px;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; }
      h1 { font-size: 52px; line-height: 1.02; max-width: 20ch; }
      h2 { font-size: 32px; line-height: 1.1; letter-spacing: .01em; }
      h3 { font-size: 21px; line-height: 1.24; }
      .lede { font-size: 16px; line-height: 1.6; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
      .eyebrow::before {
        content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent);
      }
      .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .12em; text-transform: uppercase; }

      .nav {
        background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0;
        box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--accent) 20%, transparent);
      }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
      }
      .panel, .card, .visual-card { position: relative; }
      .panel::before, .card::before, .visual-card::before {
        content: ''; position: absolute; top: -3px; left: -3px; width: 5px; height: 5px;
        border-radius: 50%; background: var(--accent);
      }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: -.02em; }
      .kpi { border-top: 1px solid color-mix(in srgb, var(--accent) 40%, transparent); }

      .btn {
        height: 42px; padding: 0 18px; border-radius: var(--radius); box-shadow: none;
        background: var(--accent); color: var(--accent-ink); border: 1px solid transparent;
        font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
      .btn.sm { height: 32px; padding: 0 12px; font-size: 10px; }
      .btn.ghost, .btn.soft {
        background: transparent; color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
      }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line);
        font-family: var(--font-mono); font-size: 13px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 16%, transparent); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 46%, transparent); }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
      .bar, .line, .divider { background: color-mix(in srgb, var(--accent) 34%, var(--line)); }
      .m-grid {
        background-image: radial-gradient(color-mix(in srgb, var(--ink) 16%, transparent) 1px, transparent 1px);
        background-size: 8px 8px; border-radius: var(--radius-lg);
      }
      .mark { border-radius: 50%; background: var(--accent); color: var(--accent-ink); }
      .sig { border-top: 1px solid color-mix(in srgb, var(--accent) 30%, transparent); }

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
      /* landing imzası: tek hat şeması (düğüm + akış hattı + yük) */
      .hero-visual { background-image: radial-gradient(color-mix(in srgb, var(--ink) 16%, transparent) 1px, transparent 1px);
        background-size: 8px 8px; }
      .hero-visual::before { content: ''; position: absolute; left: 18px; right: 18px; top: 34%; height: 1.5px; pointer-events: none;
        background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 60%, transparent) 18% 82%, transparent); }
      .visual-card { background: color-mix(in srgb, var(--surface) 88%, transparent); border-color: color-mix(in srgb, var(--accent) 30%, var(--line)); }
      .visual-card .bar { height: 3px; background: color-mix(in srgb, var(--accent) 60%, transparent); }
      .visual-row { position: relative; display: grid; grid-template-columns: 14px 1fr 44px; align-items: center; gap: 8px; }
      .visual-row .sq { width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent); }
      .visual-row .line { height: 1.5px; background: color-mix(in srgb, var(--accent) 40%, transparent); }
      .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--accent); }`,
  'dark-landing': `
      /* koyu mod: akış hattı daha parlak, düğüm halkası genişler */
      .hero-visual::before { background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 78%, transparent) 18% 82%, transparent); }
      .visual-row .sq { box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 24%, transparent); }`,
  },
};
