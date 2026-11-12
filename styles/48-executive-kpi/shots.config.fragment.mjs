export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
    /* imza: kâğıt rapor · hairline kural · 64px serif KPI · 80px dikey ritim · gölge yok */
    body { background: var(--bg); }
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking); }
    h1 { font-size: 44px; line-height: 1.08; max-width: 22ch; }
    h2 { font-size: 26px; line-height: 1.22; }
    h3 { font-size: 19px; line-height: 1.3; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow { padding-bottom: 6px; border-bottom: 1px solid var(--line); }
    .lede { font-size: 17px; line-height: 1.62; max-width: 64ch; color: var(--ink-soft); }

    .nav {
      height: 64px; padding: 0 24px; border-radius: 0; background: var(--bg);
      border-bottom: 1px solid var(--line); box-shadow: none;
    }
    .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .08em; text-transform: uppercase; }

    /* KPI bloğu: üstte 1px accent kural, gölge yok */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: none; padding: 24px;
    }
    .kpi { border-top: 1px solid var(--accent); }
    .kpi .v, .kpi .num-big {
      font-family: var(--font-display); font-weight: 400; font-size: 64px;
      line-height: 1; letter-spacing: -.01em; font-variant-numeric: tabular-nums;
    }
    .kpi .d, .trow .num { font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em; }
    .tbl td.num, .trow .num { font-variant-numeric: tabular-nums; }

    .btn {
      min-height: 48px; padding: 0 24px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-body); font-size: 13px; font-weight: 500;
      letter-spacing: .08em; text-transform: uppercase;
    }
    .btn.ghost, .btn.soft {
      background: transparent; border: 1px solid var(--line); color: var(--ink);
      box-shadow: inset 0 -1px 0 var(--line);
    }
    .field {
      height: 48px; border: 0; border-bottom: 1px solid var(--line); border-radius: 0;
      background: transparent; box-shadow: none; font-size: 16px;
    }
    .chip {
      border-radius: var(--radius); background: transparent; border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* kâğıt ritmi: bölümler arası 1px kural, 80px dikey boşluk */
    .hero, .side, .foot-demo { background-image: none; }
    .divider { height: 1px; background: var(--line); }
    .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 6px; height: 6px; border-radius: 0;
      background: var(--accent); box-shadow: none;
    }
    .logo-strip span { font-family: var(--font-display); font-size: 15px; letter-spacing: 0; text-transform: none; }
  
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
      /* landing imzası: üç büyük KPI bloğu + trend oku */
      .hero-visual { background: linear-gradient(180deg, var(--surface), var(--bg-2)); }
      .visual-card { background: transparent; border: 0; }
      .visual-card .bar { display: none; }
      .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      .visual-row { display: flex; flex-direction: column; gap: 6px; padding: 14px;
        border: 1px solid var(--line); border-radius: var(--radius-lg); background: var(--surface); }
      .visual-row .sq { width: 22px; height: 4px; border-radius: 999px; background: var(--accent); }
      .visual-row .line { height: 1px; background: var(--line); }
      .visual-row .num { font-family: var(--font-display); font-size: 26px; line-height: 1; }
      .visual-row .num::after { content: ' ↑'; font-size: 13px; color: var(--accent); }`,
  },
};
