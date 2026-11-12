export const CONFIG = {
  motif: 'bars',
  bodyClass: '',
  extraCss: `
    /* imza: basamak (escalera) bandı · 8px çözgü şeritleri · 3px ofset gölge · aynalı simetri */
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: var(--tracking); }
    h1 { font-size: 38px; line-height: 1.12; max-width: 22ch; }
    h2 { font-size: 26px; line-height: 1.26; }
    h3 { font-size: 19px; line-height: 1.32; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 700;
      letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before {
      content: ''; display: inline-block; width: 12px; height: 6px; margin-right: 8px;
      background-image: linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 8px, var(--accent) 8px 12px);
      vertical-align: middle;
    }
    .lede { font-size: 16px; line-height: 1.62; max-width: 62ch; color: var(--ink-soft); }

    /* çözgü şeritleri: 8px aralık, 1px çizgi */
    .nav {
      height: 64px; padding: 0 24px; border-radius: 0; background: var(--surface);
      border-bottom: 1px solid var(--line); box-shadow: none; position: relative;
    }
    .nav::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 8px;
      background-image:
        linear-gradient(90deg, color-mix(in srgb, var(--accent) 55%, transparent) 0 4px, transparent 4px 8px),
        linear-gradient(0deg, var(--line) 1px, transparent 1px);
      background-size: 8px 8px, 8px 8px;
      opacity: .5;
    }
    .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: .06em; }
    .nav-links a.active { box-shadow: inset 0 -3px 0 var(--accent); }

    /* kart: üstte çözgü şeridi, altta 4px basamak bandı, ofset gölge yok */
    .panel, .card, .visual-card, .comp-card-demo, .state-card, .m-tile {
      background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; padding: 20px; position: relative; overflow: hidden;
    }
    .panel::after, .card::after, .kpi::after, .visual-card::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 4px;
      background-image:
        linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 8px),
        linear-gradient(0deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px);
      background-size: 8px 4px, 8px 4px;
      opacity: .7;
    }
    .kpi {
      box-shadow: var(--shadow-hard);
      background-image: repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 4%, transparent) 0 1px, transparent 1px 8px);
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 700; letter-spacing: 0;
      font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 32px; line-height: 1.1; }

    .btn {
      min-height: 46px; padding: 0 22px; border-radius: var(--radius);
      font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: .06em;
      box-shadow: var(--shadow-hard);
    }
    .btn.ghost, .btn.soft {
      background: var(--surface); border: 1px solid var(--line); color: var(--ink);
      box-shadow: none; font-family: var(--font-mono); font-size: 13px; font-weight: 700;
      letter-spacing: .08em;
    }
    .field {
      height: 42px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 15px;
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* basamaklı zemin: hero ve alt bant */
    .hero, .foot-demo, .logo-strip {
      background-image:
        repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 5%, transparent) 0 1px, transparent 1px 8px),
        repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 2px, transparent 2px 16px);
    }
    .side, .art-toc {
      background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 10%, transparent) 0 2px, transparent 2px 8px, color-mix(in srgb, var(--ink) 6%, transparent) 8px 10px, transparent 10px 16px);
    }
    .hero-visual {
      border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface);
      box-shadow: var(--shadow-hard);
    }
    .visual-card .bar, .bars .bar { background: var(--accent); }
    .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 10px; height: 6px; border-radius: 0; background: none;
      background-image: linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 5px, var(--accent) 5px 10px);
    }
    .divider {
      height: 6px; background: none;
      background-image:
        linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 8px),
        linear-gradient(0deg, var(--line) 1px, transparent 1px);
      background-size: 8px 6px, 8px 6px;
      opacity: .8;
    }
    .tbl td:first-child, .trow .t {
      box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--accent) 45%, transparent);
    }
    .logo-strip span { font-family: var(--font-mono); font-size: 12px; letter-spacing: .1em; }
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
        .hero-visual .visual-card { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow); }
        .hero-visual .visual-card .bar { height: 6px; border: 0; border-radius: 0; background: var(--surface-2); }
        .hero-visual .visual-card .bar.accent { width: 32%; background: var(--accent); }
        .hero-visual .visual-row { height: 28px; grid-template-columns: 14px 1fr auto; }
        .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 0; background: var(--accent);
          clip-path: polygon(0 100%, 0 40%, 50% 40%, 50% 0, 100% 0, 100% 60%, 50% 60%, 50% 100%); }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
        .hero-visual::before { content: ''; position: absolute; left: 12px; right: 12px; top: 12px; height: 10px; pointer-events: none;
          background-image: repeating-linear-gradient(135deg, var(--accent) 0 6px, transparent 6px 12px); opacity: .4; }
      `,
  },
};
