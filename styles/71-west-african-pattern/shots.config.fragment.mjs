export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
    /* imza: 8px dokuma şeritleri · 24px desen bloğu · adinkra damgası · keskin köşe · gölge yok */
    h1, h2, h3, h4 {
      font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking);
      text-transform: uppercase;
    }
    h1 { font-size: 40px; line-height: 1.1; max-width: 20ch; }
    h2 { font-size: 26px; line-height: 1.24; }
    h3 { font-size: 20px; line-height: 1.3; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 500;
      letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before {
      content: ''; display: inline-block; width: 8px; height: 8px;
      background: var(--accent); margin-right: 8px; vertical-align: baseline;
    }
    .lede { font-size: 16px; line-height: 1.6; max-width: 60ch; color: var(--ink-soft); }

    /* dokuma bandı: 8px şeritler, her beşinci blok 24px */
    .nav {
      height: 60px; padding: 0 24px; border-radius: 0; background: var(--bg);
      border-bottom: 1px solid var(--line); box-shadow: none; position: relative;
    }
    .nav::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 12px;
      background-image: repeating-linear-gradient(
        90deg,
        var(--accent) 0 8px, transparent 8px 16px,
        var(--line) 16px 24px, transparent 24px 32px,
        var(--accent) 32px 56px, transparent 56px 64px
      );
      opacity: .5;
    }
    .nav-links a {
      font-family: var(--font-body); font-size: 13px; letter-spacing: .12em;
      text-transform: uppercase;
    }

    /* kart: üstte 8px dokuma şeridi, keskin köşe */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; padding: 16px; position: relative; overflow: hidden;
    }
    .panel::before, .card::before, .kpi::before, .visual-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 8px;
      background-image: repeating-linear-gradient(
        90deg,
        var(--accent) 0 8px, transparent 8px 16px,
        var(--line) 16px 24px, transparent 24px 40px,
        var(--accent) 40px 48px, transparent 48px 56px
      );
      opacity: .42;
    }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 20px; text-transform: uppercase;
      line-height: 1.3; padding-top: 12px;
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 500; letter-spacing: -.01em;
      font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 30px; line-height: 1.1; }

    .btn {
      min-height: 44px; padding: 0 24px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-display); font-size: 13px; font-weight: 400;
      letter-spacing: .08em; text-transform: uppercase;
    }
    .btn.ghost, .btn.soft {
      background: transparent; border: 2px solid var(--line); color: var(--ink);
      font-family: var(--font-body); font-size: 13px; letter-spacing: .12em;
    }
    .field {
      height: 40px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 15px;
      box-shadow: inset 4px 0 0 var(--surface-2);
    }
    .field.focus { box-shadow: inset 4px 0 0 var(--accent); }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em;
      text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* dokuma zemin: yalnız hero ve alt bant */
    .hero, .foot-demo, .logo-strip {
      background-image: repeating-linear-gradient(
        90deg,
        color-mix(in srgb, var(--accent) 10%, transparent) 0 8px,
        transparent 8px 16px,
        color-mix(in srgb, var(--ink) 4%, transparent) 16px 24px,
        transparent 24px 40px
      );
    }
    .hero-visual {
      border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface);
      background-image: repeating-linear-gradient(
        0deg,
        color-mix(in srgb, var(--accent) 8%, transparent) 0 8px,
        transparent 8px 24px
      );
    }
    .visual-card .bar, .bars .bar { background: var(--accent); }
    .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 8px; height: 8px; border-radius: 0;
      background: var(--accent);
    }
    .divider {
      height: 8px; background: none;
      background-image: repeating-linear-gradient(
        90deg,
        var(--accent) 0 8px, transparent 8px 16px,
        var(--line) 16px 24px, transparent 24px 40px
      );
      opacity: .6;
    }
    .tbl tr:nth-child(even) td, .trow:nth-child(even) { background: var(--surface-2); }
    .tbl td:first-child, .trow .t { box-shadow: inset 3px 0 0 color-mix(in srgb, var(--accent) 35%, transparent); }
    .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; }
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
        .hero-visual .visual-card { border: 2px solid var(--ink); border-radius: var(--radius-lg); padding: 18px; box-shadow: var(--shadow); }
        .hero-visual .visual-card .bar { height: 6px; border: 0; border-radius: 0; background: var(--surface-2); }
        .hero-visual .visual-card .bar.accent { width: 34%; background: var(--accent); }
        .hero-visual .visual-rows { gap: 6px; }
        .hero-visual .visual-row { height: 26px; grid-template-columns: 12px 1fr auto; gap: 8px;
          background-image: repeating-linear-gradient(90deg, transparent 0 14px, color-mix(in srgb, var(--accent) 22%, transparent) 14px 16px); }
        .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 0; background: var(--accent); }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
        .hero-visual::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 8px; pointer-events: none;
          background: repeating-linear-gradient(90deg, var(--accent) 0 12px, var(--ink) 12px 14px, transparent 14px 26px); opacity: .55; }
      `,
  },
};
