export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
    /* imza: 28px akan satır · 88px zaman rayı · önem çipi · nokta dokusu · gölge yok */
    body { font-variant-numeric: tabular-nums; }
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: var(--tracking); }
    h1 { font-size: 30px; line-height: 1.18; max-width: 24ch; }
    h2 { font-size: 19px; line-height: 1.32; }
    h3 { font-size: 15px; line-height: 1.34; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 500;
      letter-spacing: .08em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before { content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); margin-right: 6px; }
    .lede { font-size: 13px; line-height: 1.6; max-width: 72ch; color: var(--ink-soft); }

    .nav {
      height: 48px; padding: 0 16px; border-radius: 0; background: var(--bg);
      border-bottom: 1px solid var(--line); box-shadow: none;
    }
    .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .02em; }

    /* akan satır: 28px, zebra, çizgisiz */
    .panel, .card, .visual-card, .comp-card-demo, .state-card, .m-tile {
      background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: none; padding: 12px;
    }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
      text-transform: uppercase; color: var(--ink-soft); margin-bottom: 8px;
    }
    .tbl tr:nth-child(even) td, .trow:nth-child(even) { background: var(--surface-2); }
    .tbl td, .trow { height: 28px; font-family: var(--font-mono); font-size: 12px; }
    .tbl td:first-child, .trow .t {
      font-family: var(--font-mono); color: var(--ink-soft); width: 88px;
      font-variant-numeric: tabular-nums;
    }

    .kpi { padding: 12px; border-radius: var(--radius-lg); }
    .kpi .v, .kpi .num-big {
      font-family: var(--font-mono); font-weight: 700; font-size: 24px;
      letter-spacing: -.01em; font-variant-numeric: tabular-nums;
    }

    .btn {
      min-height: 32px; padding: 0 12px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-mono); font-size: 12px; font-weight: 500; letter-spacing: .04em;
      text-transform: none;
    }
    .btn.ghost, .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
    .field {
      height: 32px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none;
      font-family: var(--font-mono); font-size: 12px;
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px;
      letter-spacing: .06em; text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* nokta dokusu yalnız başlık ve boş durum zemininde */
    .hero, .logo-strip, .foot-demo {
      background-image: radial-gradient(var(--line) 1px, transparent 1px);
      background-size: 16px 16px;
    }
    .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 8px; height: 8px; border-radius: 50%;
      background: var(--accent);
    }
    .divider { height: 1px; background: var(--line); }
    .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; }
  
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
      /* landing imzası: log satırları (zaman damgası + seviye + mesaj) */
      .hero-visual { background: var(--bg-2); border-color: var(--line); }
      .visual-card { background: var(--surface); border-radius: var(--radius); }
      .visual-card .bar { height: 1px; }
      .visual-rows { display: flex; flex-direction: column; gap: 0; font-family: var(--font-mono); }
      .visual-row { display: grid; grid-template-columns: 44px 44px 1fr; gap: 8px; align-items: center;
        padding: 5px 6px; border-bottom: 1px solid color-mix(in srgb, var(--line) 65%, transparent); font-size: 10px; }
      .visual-row::before { content: '12:0' counter(l) ':04'; color: var(--ink-faint); font-size: 9px; }
      .visual-row .sq { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
      .visual-row:nth-child(2) .sq { background: var(--warn); }
      .visual-row:nth-child(3) .sq { background: var(--danger); }
      .visual-row .line { background: color-mix(in srgb, var(--ink) 22%, transparent); height: 3px; }
      .visual-row .num { font-size: 9px; color: var(--ink-soft); }`,
  'dark-landing': `
      /* koyu mod: log zemini koyulaşır, seviye noktaları parlar */
      .hero-visual { background: color-mix(in srgb, var(--bg-2) 80%, var(--bg)); }
      .visual-row .sq { box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 26%, transparent); }`,
  },
};
