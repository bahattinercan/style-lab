/**
 * 64 · Construction Site — shots.config fragment
 *
 * İmza: 2px ink plaka çerçevesi · 6px sert ofset · numara kutusu · grafik kâğıdı ızgarası · beton grain.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: 'upper',
  extraCss: `
      /* ---------- tipografi: Anton plaka başlık · Jost gövde · Space Mono metraj ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; }
      h1 { font-size: 64px; line-height: .92; letter-spacing: .01em; max-width: 16ch; }
      h2 { font-size: 30px; line-height: 1.05; letter-spacing: 0; max-width: 24ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
      h3 { font-size: 21px; line-height: 1.25; }
      h4 { font-size: 16px; line-height: 1.3; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num, .kpi .k {
        font-family: var(--font-mono); letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 28px; font-weight: 400; }
      .eyebrow, .label, .mono, .chip, .logo-strip span, .proof li, .crumbs span {
        font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
      }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '▪ '; color: var(--ink); }
      .label, .kpi .k { color: var(--ink-faint); font-weight: 400; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.62; max-width: 60ch; color: var(--ink-soft); }

      /* ---------- nav: 2px yapısal alt kural ---------- */
      .nav { height: 60px; padding: 0 32px; background: var(--bg); border-bottom: 2px solid var(--ink); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 400; font-size: 20px; letter-spacing: .02em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -21px; height: 4px; background: var(--accent);
      }

      /* ---------- plaka: 2px ink çerçeve, gölge yok ---------- */
      .panel, .panel-2, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .m-tile, .table {
        background: var(--surface); border: 2px solid var(--ink);
        border-radius: var(--radius-lg); box-shadow: none; backdrop-filter: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .trow .num { font-size: 14px; font-weight: 400; letter-spacing: .02em; }
      .side { background: var(--bg-2); border-right: 2px solid var(--ink); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 2px solid var(--ink); }
      .divider { height: 1px; background: var(--line); }
      .divider-x { background: var(--line); }

      /* kaldırılan blok: 6px sert ofset */
      .plan, .comp-card-demo, .state-card, .m-tile.accent, .modal, .drawer, .menu {
        box-shadow: var(--shadow-hard); border-radius: var(--radius-lg);
      }
      .plan { padding: 24px; }
      .plan.hot { border-color: var(--ink); box-shadow: var(--shadow-hard); }
      .plan.hot::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: var(--accent);
      }

      /* ---------- kontroller: 48px hedef, ofset basma ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 14px; letter-spacing: .06em; text-transform: uppercase;
        min-height: 48px; padding: 12px 24px; border-radius: var(--radius); border: 2px solid var(--ink);
        box-shadow: var(--shadow-hard);
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 2px solid var(--ink); box-shadow: none; }
      .btn.sm { min-height: 40px; padding: 8px 14px; font-size: 12px; box-shadow: none; }
      .btn:hover { transform: translate(3px, 3px); box-shadow: 3px 3px 0 var(--ink); }
      .btn:active { transform: translate(6px, 6px); box-shadow: none; }
      .btn:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--ink); }
      .field, input, select, textarea {
        min-height: 48px; border: 2px solid var(--ink); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-mono); font-size: 15px; letter-spacing: .02em;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 3px solid var(--accent); outline-offset: 2px;
      }
      .field.err { border-color: var(--danger); outline-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 8px; border-radius: 0;
        background: transparent; border: 1px solid var(--ink); color: var(--ink);
        letter-spacing: .14em;
      }
      .chip.accent { background: var(--accent); border-color: var(--ink); color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--ink); color: var(--bg); font-family: var(--font-display); font-weight: 400; }
      .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 2px solid var(--ink); background: var(--surface-2); }
      .icon-btn { border-radius: var(--radius); border: 2px solid var(--ink); background: var(--surface); box-shadow: none; }
      .opt .box { border-radius: 0; border: 2px solid var(--ink); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 0; height: 10px; box-shadow: inset 0 0 0 2px var(--ink); }
      .track i { background: var(--accent); border-radius: 0; height: 10px; }
      .proof li::before { width: 8px; height: 8px; border-radius: 0; background: var(--accent); }
      .tabbar { border-top: 2px solid var(--ink); background: var(--bg-2); }
      .scene-mobile .tabs span { border-radius: 0; }

      /* ---------- numara kutusu: bölüm başlığının yanında ---------- */
      .hero-copy::before {
        content: '01'; display: inline-grid; place-items: center;
        width: 32px; height: 32px; margin-bottom: 14px;
        border: 2px solid var(--ink); background: var(--surface);
        font-family: var(--font-display); font-size: 18px; line-height: 1; color: var(--ink);
      }
      .art-main h2::before, .co-sec h2::before {
        content: '▪'; margin-right: 10px; color: var(--accent); font-family: var(--font-mono); font-size: 0.7em;
      }

      /* ---------- imza: hero görselinde grafik kâğıdı + kalıp plakası ---------- */
      .hero-visual { background: var(--bg-2); border: 2px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); overflow: hidden; }
      .hero-visual::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image:
          linear-gradient(color-mix(in srgb, var(--ink) 22%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 22%, transparent) 1px, transparent 1px);
        background-size: 24px 24px;
        opacity: .35;
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 8px;
        background: repeating-linear-gradient(112deg, var(--ink) 0 10px, var(--accent) 10px 20px);
        pointer-events: none;
      }

      /* ---------- landing: üstte 2px kural + sağda numara bloğu ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; right: 0; top: 0; height: 2px; background: var(--ink);
        pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: 'B-04'; position: absolute; right: 4vw; top: 8vh;
        font-family: var(--font-display); font-size: 96px; line-height: 1; letter-spacing: .02em;
        color: color-mix(in srgb, var(--ink) 10%, transparent);
        pointer-events: none;
      }

      /* ---------- dashboard: metraj satırları ve toplam ---------- */
      body.scene-dashboard .kpis { gap: 16px; }
      body.scene-dashboard .table .trow:last-of-type { border-top: 2px solid var(--ink); border-bottom: 0; }
      body.scene-dashboard .kpi .v { font-family: var(--font-mono); }

      @media (max-width: 900px) {
        h1 { font-size: 34px; max-width: 18ch; }
        h2 { font-size: 22px; }
        .lede { font-size: 15px; }
        .btn { min-height: 48px; box-shadow: 4px 4px 0 var(--ink); }
        .hero-visual { box-shadow: 4px 4px 0 var(--ink); }
        body.scene-landing .sig::after { font-size: 48px; top: 4vh; opacity: .8; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
      }

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
        .hero-visual .visual-card { border: 2px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); padding: 22px; }
        .hero-visual .visual-card .bar { height: 6px; border-radius: 0; border: 1px solid var(--ink); background: var(--surface-2); box-shadow: none; }
        .hero-visual .visual-card .bar.accent { width: 30%; background: var(--accent); border-color: transparent; }
        .hero-visual .visual-row { height: 36px; border-top: 2px solid var(--ink); grid-template-columns: 26px 1fr auto; }
        .hero-visual .visual-row .sq { width: 22px; height: 22px; border-radius: 0; border: 2px solid var(--ink); background: var(--surface); }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 13px; }
        .hero-visual::before { content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: repeating-linear-gradient(0deg, transparent 0 22px, color-mix(in srgb, var(--ink) 16%, transparent) 22px 23px); opacity: .5; }
      `,
  },
};
