export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
    /* imza: 24px ölçüm ızgarası · hairline tile · eşik şeridi · tabular rakam */
    body { font-variant-numeric: tabular-nums; }
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
    h1 { font-size: 34px; line-height: 1.14; max-width: 24ch; }
    h2 { font-size: 22px; line-height: 1.28; }
    h3 { font-size: 17px; line-height: 1.32; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 500;
      letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before { content: '\\25CF'; color: var(--accent); margin-right: 6px; font-size: 8px; vertical-align: middle; }
    .lede { font-size: 15px; line-height: 1.52; max-width: 62ch; color: var(--ink-soft); }

    .nav {
      height: 48px; padding: 0 16px; border-radius: 0;
      border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none;
    }
    .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em; text-transform: uppercase; }

    /* tile: hairline kutu + üst etiket satırı + 3px sol eşik şeridi */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: none;
      background-image: linear-gradient(90deg, var(--accent) 0 3px, transparent 3px);
      padding-left: 12px;
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 500; letter-spacing: -.01em;
      font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 30px; line-height: 1.1; }

    .btn {
      min-height: 34px; padding: 0 12px; border-radius: var(--radius);
      font-family: var(--font-display); font-size: 13px; font-weight: 600;
      box-shadow: none; border: 1px solid transparent;
    }
    .btn.ghost, .btn.soft {
      background: var(--surface); border-color: var(--line); color: var(--ink);
      font-family: var(--font-mono); font-size: 12px; font-weight: 500;
    }
    .field {
      height: 34px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 13px;
      font-variant-numeric: tabular-nums;
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2);
      border: 1px solid var(--line); color: var(--ink-soft);
      font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* ölçüm ızgarası: bölüm zeminine 24px hücre */
    .hero, .side, .art-toc, .foot-demo {
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 24px 24px;
    }
    .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 7px; height: 7px; border-radius: 1px;
      background: var(--accent); box-shadow: none;
    }
    .divider { height: 1px; background: var(--line); }
    .logo-strip span { font-family: var(--font-mono); letter-spacing: .1em; }
  
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
      /* landing imzası: ölçüm ızgarası + eşik tikleri + 3 KPI hücresi */
      .hero-visual { background-image:
        linear-gradient(color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px);
        background-size: 28px 28px, 28px 28px; }
      .hero-visual::before { content: ''; position: absolute; inset: 12px; pointer-events: none;
        border: 1px dashed color-mix(in srgb, var(--accent) 32%, transparent); }
      .visual-card { background: color-mix(in srgb, var(--surface) 88%, transparent); }
      .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
      .visual-row { display: grid; grid-template-columns: 8px 1fr; gap: 4px 6px;
        padding: 8px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); }
      .visual-row .line { grid-column: 1 / -1; height: 2px; background: color-mix(in srgb, var(--accent) 60%, transparent); }
      .visual-row .num { font-size: 15px; font-weight: 600; }`,
  },
};
