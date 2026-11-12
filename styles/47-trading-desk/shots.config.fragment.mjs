export const CONFIG = {
  motif: 'bars',
  bodyClass: '',
  extraCss: `
    /* imza: dealing-room yoğunluğu · amber vurgu · 24px satır · ▲▼ yön kodu · ticker bandı */
    body { font-variant-numeric: tabular-nums; }
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); text-transform: none; }
    h1 { font-size: 36px; line-height: 1.1; max-width: 22ch; }
    h2 { font-size: 20px; line-height: 1.24; }
    h3 { font-size: 16px; line-height: 1.3; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 500;
      letter-spacing: .1em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before { content: '▲'; color: var(--accent); margin-right: 5px; font-size: 8px; }
    .lede { font-size: 14px; line-height: 1.48; max-width: 56ch; color: var(--ink-soft); }

    .nav {
      height: 44px; padding: 0 12px; border-radius: 0; background: var(--surface);
      border-bottom: 1px solid var(--line); box-shadow: none;
    }
    .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; }
    .nav::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -28px; height: 28px;
      background: var(--surface-2); border-bottom: 1px solid var(--line);
    }

    /* panel: 8px padding, 24px başlık şeridi, hairline */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: none; padding: 8px;
    }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
      text-transform: uppercase; color: var(--ink-soft);
      border-bottom: 1px solid var(--line); padding-bottom: 4px; margin-bottom: 6px;
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b, .kv b {
      font-family: var(--font-mono); font-weight: 500; letter-spacing: -.01em;
      font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 26px; line-height: 1.05; }

    /* fiyat sütunları: bid ok, ask danger */
    .tbl td.up, .trow .num.up { color: var(--ok); }
    .tbl td.down, .trow .num.down { color: var(--danger); }

    .btn {
      min-height: 28px; padding: 0 10px; border-radius: var(--radius);
      font-family: var(--font-display); font-size: 12px; font-weight: 600;
      letter-spacing: .08em; text-transform: uppercase; box-shadow: none;
    }
    .btn.ghost, .btn.soft {
      background: var(--surface-2); border: 1px solid var(--line); color: var(--ink);
    }
    .field {
      height: 28px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 13px;
      font-family: var(--font-mono); font-variant-numeric: tabular-nums;
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* diyagonal ticker şeridi yalnız bant zemininde */
    .hero, .foot-demo, .logo-strip {
      background-image: repeating-linear-gradient(
        112deg,
        color-mix(in srgb, var(--accent) 7%, transparent) 0 6px,
        transparent 6px 22px
      );
    }
    .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: '▲'; width: auto; height: auto; background: none; border-radius: 0;
      color: var(--accent); font-family: var(--font-mono); font-size: 9px;
    }
    .divider { height: 1px; background: var(--line); }
    .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; }
  
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
      /* landing imzası: emir defteri satırları (bid/ask) + derinlik çubukları */
      .hero-visual { background: var(--bg-2); }
      .visual-card { border-color: color-mix(in srgb, var(--ok) 26%, var(--line)); }
      .visual-card .bar { height: 5px; border-radius: 1px; }
      .visual-card .bar.w70 { background: color-mix(in srgb, var(--danger) 55%, transparent); }
      .visual-card .bar.w45 { background: color-mix(in srgb, var(--ok) 55%, transparent); }
      .visual-rows { display: flex; flex-direction: column; gap: 2px; }
      .visual-row { display: grid; grid-template-columns: 10px 1fr 44px; align-items: center;
        padding: 4px 6px; border-bottom: 1px solid color-mix(in srgb, var(--line) 70%, transparent); }
      .visual-row .sq { width: 6px; height: 6px; border-radius: 1px; }
      .visual-row:nth-child(1) .sq { background: var(--ok); }
      .visual-row:nth-child(2) .sq { background: var(--danger); }
      .visual-row:nth-child(3) .sq { background: var(--warn); }
      .visual-row .num { text-align: right; font-size: 10px; }`,
  'dark-landing': `
      /* koyu mod: defter zemini bir ton daha derin, bid/ask çizgileri daha parlak */
      .hero-visual { background: color-mix(in srgb, var(--bg-2) 88%, var(--bg)); }
      .visual-card { border-color: color-mix(in srgb, var(--ok) 40%, var(--line)); }`,
  },
};
