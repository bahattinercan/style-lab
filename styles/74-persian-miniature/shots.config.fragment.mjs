export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
    /* imza: çift altın çerçeve · madalyon kemeri · gece laciverti · 58ch metin bloğu */
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking); }
    h1 { font-size: 42px; line-height: 1.14; max-width: 20ch; }
    h2 { font-size: 28px; line-height: 1.3; }
    h3 { font-size: 20px; line-height: 1.34; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 500;
      letter-spacing: .16em; text-transform: uppercase; color: var(--accent);
    }
    .eyebrow::before {
      content: ''; display: inline-block; width: 10px; height: 5px; margin-right: 8px;
      border-top: 1px solid var(--accent); border-left: 1px solid var(--accent);
      border-right: 1px solid var(--accent); border-radius: 5px 5px 0 0;
      vertical-align: middle;
    }
    .lede { font-size: 17px; line-height: 1.72; max-width: 56ch; color: var(--ink-soft); }

    /* çift altın çerçeve: dış 1px + 4px aralık + iç 1px */
    .nav {
      height: 68px; padding: 0 28px; border-radius: 0; background: var(--bg);
      border-bottom: 1px solid var(--accent); box-shadow: none; position: relative;
    }
    .nav::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -5px; height: 1px;
      background: color-mix(in srgb, var(--accent) 45%, transparent);
    }
    .nav-links a { font-family: var(--font-body); font-size: 15px; letter-spacing: .02em; }

    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      position: relative; background: var(--surface); border-radius: var(--radius-lg);
      border: 1px solid var(--accent); box-shadow: none; padding: 28px;
    }
    .panel::before, .card::before, .kpi::before, .visual-card::before, .m-tile::before {
      content: ''; position: absolute; inset: 4px; border: 1px solid var(--accent);
      border-radius: calc(var(--radius-lg) - 4px); opacity: .55; pointer-events: none;
    }
    .kpi::after, .visual-card::after {
      content: ''; position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
      width: 96px; height: 20px; border: 1px solid var(--accent); border-bottom: 0;
      border-radius: 48px 48px 0 0; background: var(--bg); pointer-events: none;
    }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 28px; font-weight: 400;
      line-height: 1.3; margin-bottom: 10px; letter-spacing: var(--tracking);
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 400; letter-spacing: 0;
      font-variant-numeric: tabular-nums; color: var(--accent);
    }
    .kpi .v { font-size: 34px; line-height: 1.1; }

    .btn {
      min-height: 44px; padding: 0 24px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: .06em;
    }
    .btn.ghost, .btn.soft {
      background: transparent; border: 1px solid var(--accent); color: var(--ink);
      position: relative;
    }
    .btn.ghost::after {
      content: ''; position: absolute; inset: 3px; border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
      border-radius: calc(var(--radius) - 2px); pointer-events: none;
    }
    .field {
      height: 44px; border-radius: var(--radius); background: var(--bg-2);
      border-color: var(--line); box-shadow: none; font-size: 16px;
      font-family: var(--font-body);
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em;
      text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* altın ızgara dokusu: yalnız hero ve yan paneller */
    .hero, .side, .art-toc, .foot-demo {
      background-image:
        repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 12%, transparent) 0 1px, transparent 1px 24px),
        repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 24px);
    }
    .hero-visual {
      border-radius: var(--radius-lg); border: 1px solid var(--accent); background: var(--surface);
      box-shadow: inset 0 0 0 4px var(--surface), inset 0 0 0 5px var(--accent);
    }
    .visual-card .bar, .bars .bar { background: var(--accent); }
    .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 8px; height: 4px; border-radius: 4px 4px 0 0; background: none;
      border: 1px solid var(--accent); border-bottom: 0;
    }
    .divider { height: 5px; background: none; border-top: 1px solid var(--accent); border-bottom: 1px solid color-mix(in srgb, var(--accent) 45%, transparent); }
    .tbl td:first-child, .trow .t { font-family: var(--font-mono); font-variant-numeric: tabular-nums; color: var(--ink-soft); }
    .logo-strip span { font-family: var(--font-display); font-size: 17px; letter-spacing: .02em; text-transform: none; }
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
        .hero-visual .visual-card { border: 1px solid var(--accent); padding: 30px 22px 18px; box-shadow: var(--shadow);
          border-radius: 50% 50% var(--radius-lg) var(--radius-lg) / 22% 22% var(--radius-lg); }
        .hero-visual .visual-card .bar { height: 3px; border: 0; border-radius: 99px; background: var(--surface-2); }
        .hero-visual .visual-card .bar.accent { width: 40%; background: var(--accent); }
        .hero-visual .visual-row { height: 30px; border-bottom: 1px solid var(--line); }
        .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 0; background: var(--accent);
          clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
        .hero-visual::before { content: ''; position: absolute; inset: 14px; pointer-events: none;
          border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent); border-radius: 50% 50% 0 0 / 26% 26% 0; }
      `,
  },
};
