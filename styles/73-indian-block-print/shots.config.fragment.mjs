export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
    /* imza: 1px kayma izi · 4px ofset birincil yüzey · blok damga · çift baskı çizgisi */
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
    h1 { font-size: 36px; line-height: 1.16; max-width: 22ch; }
    h2 { font-size: 24px; line-height: 1.28; }
    h3 { font-size: 18px; line-height: 1.32; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 10px; font-weight: 500;
      letter-spacing: .18em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before {
      content: ''; display: inline-block; width: 8px; height: 8px; margin-right: 8px;
      background: var(--accent); vertical-align: baseline;
    }
    .lede { font-size: 15px; line-height: 1.66; max-width: 58ch; color: var(--ink-soft); }

    .nav {
      height: 56px; padding: 0 20px; border-radius: 0; background: var(--bg);
      border-bottom: 1px solid var(--line); box-shadow: none;
    }
    .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .1em; text-transform: uppercase; }
    .nav-links a.active {
      box-shadow: inset 0 -1px 0 var(--accent), inset 0 -3px 0 transparent;
      background-image: linear-gradient(var(--accent), var(--accent));
      background-repeat: no-repeat;
      background-size: 100% 1px;
      background-position: 0 calc(100% - 3px);
    }

    /* kart: 1px kayma izi + köşede damga */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      position: relative; background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 18px;
    }
    .card::after, .panel::after, .visual-card::after {
      content: ''; position: absolute; right: 12px; bottom: 12px; width: 20px; height: 20px;
      background-image:
        linear-gradient(90deg, var(--accent) 0 2px, transparent 2px 18px, var(--accent) 18px 20px),
        linear-gradient(0deg, var(--accent) 0 2px, transparent 2px 18px, var(--accent) 18px 20px);
      background-size: 20px 6px, 6px 20px;
      background-repeat: no-repeat;
      background-position: top left, top left;
      opacity: .28;
    }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 24px; font-weight: 600;
      line-height: 1.28; padding-bottom: 8px; border-bottom: 1px solid var(--accent);
      margin-bottom: 12px;
    }
    .kpi { box-shadow: var(--shadow-hard); }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 500; letter-spacing: 0;
      font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 30px; line-height: 1.1; }

    .btn {
      min-height: 42px; padding: 0 20px; border-radius: var(--radius);
      font-family: var(--font-body); font-size: 13px; font-weight: 500;
      letter-spacing: .1em; text-transform: uppercase; box-shadow: var(--shadow-hard);
    }
    .btn.ghost, .btn.soft {
      background: var(--surface); border: 1px solid var(--line); color: var(--ink);
      box-shadow: var(--shadow); font-family: var(--font-mono); font-size: 12px;
      letter-spacing: .1em;
    }
    .field {
      height: 40px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: var(--shadow); font-size: 14px;
    }
    .field.focus { box-shadow: none; }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em;
      text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* blok tekrarı: damga deseni yalnız hero ve alt bant zemininde */
    .hero, .foot-demo, .logo-strip {
      background-image: radial-gradient(color-mix(in srgb, var(--accent) 16%, transparent) 2px, transparent 2px);
      background-size: 24px 24px;
    }
    .side, .art-toc {
      background-image: repeating-linear-gradient(
        135deg,
        color-mix(in srgb, var(--accent) 7%, transparent) 0 2px,
        transparent 2px 12px
      );
    }
    .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); box-shadow: var(--shadow-hard); }
    .visual-card .bar, .bars .bar { background: var(--accent); }
    .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 8px; height: 8px; border-radius: 0;
      background: var(--accent);
    }
    .divider { height: 1px; background: var(--line); box-shadow: 0 2px 0 color-mix(in srgb, var(--ink) 8%, transparent); }
    .tbl td:first-child, .trow .t {
      box-shadow: inset 1px 0 0 var(--accent);
    }
    .tbl tr:nth-child(4n) td, .trow:nth-child(4n) { box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--ink) 10%, transparent); }
    .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; }
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
        .hero-visual .visual-card { border: 1px solid var(--ink); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow); }
        .hero-visual .visual-card .bar { height: 4px; border: 0; border-radius: 99px; background: var(--surface-2); }
        .hero-visual .visual-card .bar.accent { width: 38%; background: var(--accent); }
        .hero-visual .visual-row { height: 30px; border-bottom: 1px dotted var(--line); }
        .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 50%; border: 1px solid var(--accent);
          background: radial-gradient(circle, var(--accent) 0 2px, transparent 2px); }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
        .hero-visual::before { content: ''; position: absolute; right: 18px; bottom: 18px; width: 56px; height: 56px; pointer-events: none;
          border: 1px solid var(--accent); border-radius: 50%;
          background: radial-gradient(circle, transparent 0 10px, color-mix(in srgb, var(--accent) 38%, transparent) 10px 11px,
            transparent 11px 20px, color-mix(in srgb, var(--accent) 22%, transparent) 20px 21px, transparent 21px); }
      `,
  },
};
