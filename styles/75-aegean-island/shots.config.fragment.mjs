export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
    /* imza: kemer açıklık (22px) · badana dashed kenarı · 2px dalga çizgisi · neredeyse gölgesiz */
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: var(--tracking); }
    h1 { font-size: 40px; line-height: 1.12; max-width: 22ch; }
    h2 { font-size: 27px; line-height: 1.26; }
    h3 { font-size: 20px; line-height: 1.3; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 500;
      letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before {
      content: ''; display: inline-block; width: 14px; height: 9px; margin-right: 8px;
      border: 1px solid var(--accent); border-bottom: 0; border-radius: 7px 7px 0 0;
      vertical-align: middle;
    }
    .lede { font-size: 16px; line-height: 1.64; max-width: 62ch; color: var(--ink-soft); }

    .nav {
      height: 68px; padding: 0 24px; border-radius: 0; background: var(--surface);
      border-bottom: 1px solid var(--line); box-shadow: none;
    }
    .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: .02em; }
    .nav-links a.active {
      border-radius: 7px 7px 0 0; box-shadow: inset 0 -1px 0 var(--accent);
      background-image: radial-gradient(circle at 50% 100%, transparent 6px, var(--accent) 6px 6.5px, transparent 7px);
      background-repeat: no-repeat; background-size: 14px 7px; background-position: 50% 100%;
    }

    /* kemerli kart: 22px radius + badana kenarı + neredeyse gölgesiz */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 24px;
    }
    .state-card, .comp-card-demo { border-style: dashed; }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 27px; font-weight: 500;
      line-height: 1.26; margin-bottom: 10px; letter-spacing: var(--tracking);
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 500; letter-spacing: -.01em;
      font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 32px; line-height: 1.1; }

    .btn {
      min-height: 46px; padding: 0 24px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-display); font-size: 14px; font-weight: 500; letter-spacing: .06em;
    }
    .btn.ghost, .btn.soft {
      background: var(--surface); border: 1px dashed var(--line); color: var(--ink);
      font-family: var(--font-body); font-size: 14px;
    }
    .field {
      height: 46px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 16px;
    }
    .chip {
      border-radius: 12px; background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* dalga çizgisi: yalnız hero kartı ve modal başlığı üstünde */
    .hero-visual {
      border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface);
      box-shadow: var(--shadow); position: relative; overflow: hidden;
    }
    .hero-visual::before {
      content: ''; position: absolute; top: 12px; left: 24px; right: 24px; height: 4px;
      background-image: radial-gradient(circle at 4px 4px, var(--accent) 3px, transparent 3.5px);
      background-size: 16px 8px; background-repeat: repeat-x; opacity: .55;
    }
    .hero, .foot-demo {
      background-image: radial-gradient(color-mix(in srgb, var(--accent) 9%, transparent) 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .side, .art-toc { background-image: none; }
    .visual-card .bar, .bars .bar { background: var(--accent); }
    .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 14px; height: 9px; border-radius: 7px 7px 0 0;
      background: none; border: 1px solid var(--accent); border-bottom: 0;
    }
    .divider { height: 2px; background: none; border-top: 1px dashed var(--line); }
    .tbl td:first-child, .trow .t { box-shadow: inset 3px 0 0 var(--accent); }
    .logo-strip span { font-family: var(--font-display); font-size: 15px; letter-spacing: .04em; text-transform: none; }
      /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
      .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
      .btn { white-space: nowrap; }
      .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
      .chip.accent { color: var(--accent-ink); }
      .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .sig::before, .sig::after { opacity: .6; }
      .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
      @media (min-width: 901px) { .hero-visual { min-height: 380px; } }

  `,
  scenes: {
    landing: `
        .hero-visual .visual-card { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 22px 20px; box-shadow: var(--shadow); }
        .hero-visual .visual-card .bar { height: 6px; border: 0; border-radius: 999px; background: var(--surface-2); }
        .hero-visual .visual-card .bar.accent { width: 34%; background: var(--accent); }
        .hero-visual .visual-row { height: 32px; border-bottom: 1px solid var(--line); grid-template-columns: 14px 1fr auto; }
        .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 999px; background: var(--accent); opacity: .85; }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
        .hero-visual::before { content: ''; position: absolute; left: 12%; right: 12%; bottom: 0; height: 52%; pointer-events: none;
          border-radius: 50% 50% 0 0 / 100% 100% 0 0; background: color-mix(in srgb, var(--accent) 10%, transparent); }
        .hero-visual::after { content: ''; position: absolute; left: 0; right: 0; bottom: 30%; height: 1px; pointer-events: none;
          background: color-mix(in srgb, var(--accent) 38%, transparent); }
      `,
  },
};
