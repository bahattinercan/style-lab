/**
 * 62 · Warehouse Flow — shots.config fragment
 *
 * İmza: 4px sert ofset gölge · 2px ink çerçeve · raf şeridi · mono kod etiketleri.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
      /* ---------- tipografi: Archivo Black blok başlık + mono kod ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; }
      h1 { font-size: 56px; line-height: .96; letter-spacing: -.02em; max-width: 18ch; }
      h2 { font-size: 30px; line-height: 1.1; letter-spacing: -.01em; max-width: 22ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
      h3 { font-size: 20px; line-height: 1.25; }
      h4 { font-size: 15px; line-height: 1.3; }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span {
        font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
      }
      .eyebrow { color: var(--ink); }
      .eyebrow::before { content: '▮ '; color: var(--ink); }
      .label, .kpi .k { color: var(--ink-soft); font-weight: 400; }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.55; max-width: 58ch; color: var(--ink-soft); }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b {
        font-family: var(--font-mono); font-weight: 700; letter-spacing: -.02em;
      }
      .kpi .v, .kpi .num-big { font-size: 24px; }

      /* ---------- nav: 2px ink alt çizgi, aktif öğede 4px accent şerit ---------- */
      .nav { height: 56px; padding: 0 24px; background: var(--bg); border-bottom: 2px solid var(--ink); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 400; font-size: 18px; letter-spacing: -.01em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -19px; height: 4px; background: var(--accent);
      }

      /* ---------- paneller gölgesiz; taşınabilir öğe 4px sert ofset ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none; backdrop-filter: none;
      }
      .table { border-radius: var(--radius-lg); overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .trow .num { font-weight: 400; letter-spacing: .02em; text-transform: none; font-size: 13px; }

      /* iş kartı / plan / modal: taşınabilir → 2px ink + ofset */
      .plan, .comp-card-demo, .state-card {
        border: 2px solid var(--ink); box-shadow: var(--shadow-hard); border-radius: var(--radius-lg);
      }
      .plan.hot { border-color: var(--ink); }
      .plan.hot::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: var(--accent);
        border-radius: var(--radius-lg) 0 0 var(--radius-lg);
      }
      .modal, .drawer, .menu {
        border: 2px solid var(--ink); box-shadow: var(--shadow-hard); border-radius: var(--radius-lg);
      }

      /* ---------- kontroller: 44px hedef, ofset basma hissi ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .02em;
        min-height: 44px; padding: 10px 20px; border-radius: var(--radius); border: 1px solid var(--ink);
        box-shadow: var(--shadow-hard); text-transform: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost, .btn.soft {
        background: var(--surface); color: var(--ink); border: 1px solid var(--ink); box-shadow: var(--shadow);
      }
      .btn.sm { min-height: 36px; padding: 8px 12px; font-size: 12px; box-shadow: var(--shadow); }
      .btn:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--ink); }
      .btn:active { transform: translate(4px, 4px); box-shadow: none; }
      .btn:focus-visible { outline: 3px solid var(--ink); outline-offset: 2px; }
      .field, input, select, textarea {
        min-height: 44px; border: 1px solid var(--ink); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-mono); font-size: 14px; font-variant-numeric: tabular-nums;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 3px solid var(--accent); outline-offset: 2px;
      }
      .field.err { border-color: var(--danger); outline-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 8px; border-radius: var(--radius);
        background: var(--surface-2); border: 1px solid var(--ink); color: var(--ink);
        box-shadow: none; letter-spacing: .1em;
      }
      .chip.accent { background: var(--accent); border-color: var(--ink); color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--ink); color: var(--bg); font-family: var(--font-display); font-weight: 400; }
      .divider { height: 2px; background: var(--ink); }
      .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 1px solid var(--ink); background: var(--surface-2); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--ink); background: var(--surface); box-shadow: none; }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--ink); }
      .track, .track i { border-radius: 0; height: 8px; }
      .track { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--ink); }
      .track i { background: var(--accent); }
      .logo-strip { border-top: 2px solid var(--ink); letter-spacing: .12em; }
      .proof li::before { width: 8px; height: 8px; border-radius: 0; background: var(--accent); }
      .tabbar { border-top: 2px solid var(--ink); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- imza: hero görselinde raf şeritleri + kutu numarası ---------- */
      .hero-visual { background: var(--bg-2); border: 2px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); }
      .hero-visual::after {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: repeating-linear-gradient(
          0deg,
          transparent 0 46px,
          color-mix(in srgb, var(--ink) 78%, transparent) 46px 49px,
          color-mix(in srgb, var(--accent) 55%, transparent) 49px 53px,
          transparent 53px 56px
        );
        opacity: .5;
      }

      /* ---------- landing: çapraz raf şeridi bandı (bölüm ayırıcı, tek kez) ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; right: 0; top: 0; height: 10px;
        background: repeating-linear-gradient(
          112deg,
          var(--ink) 0 12px,
          var(--accent) 12px 24px
        );
        pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: -8vw; bottom: -12vh; width: 40vw; height: 16vh;
        background-image: repeating-linear-gradient(
          90deg,
          color-mix(in srgb, var(--ink) 10%, transparent) 0 1px,
          transparent 1px 34px
        );
        pointer-events: none;
      }

      /* ---------- dashboard: KPI şeridi 2px çizgiyle bölünür ---------- */
      body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
      body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; }
      body.scene-dashboard .kpi:last-child { border-right: 0; }
      body.scene-dashboard .side { border-right: 2px solid var(--ink); }

      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 16ch; }
        h2 { font-size: 22px; }
        .lede { font-size: 14px; }
        .hero-visual { box-shadow: 3px 3px 0 var(--ink); }
        .btn { box-shadow: 3px 3px 0 var(--ink); }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
        body.scene-dashboard .kpi:last-child { border-bottom: 0; }
        body.scene-dashboard .side { border-right: 0; border-bottom: 2px solid var(--ink); }
        body.scene-landing .sig::after { display: none; }
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
        .hero-visual .visual-card { border: 2px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); padding: 18px; }
        .hero-visual .visual-card .bar { height: 8px; border-radius: 0; border: 1px solid var(--ink); background: var(--surface-2); box-shadow: none; }
        .hero-visual .visual-card .bar.accent { width: 40%; background: var(--accent); border-color: transparent; }
        .hero-visual .visual-rows { gap: 0; border-top: 2px solid var(--ink); }
        .hero-visual .visual-row { height: 34px; padding: 0 8px; border-bottom: 1px solid var(--line); grid-template-columns: 22px 1fr auto; }
        .hero-visual .visual-row .sq { width: 16px; height: 16px; border-radius: 0; border: 1px solid var(--ink); background: var(--surface); }
        .hero-visual .visual-row .line { height: 4px; border-radius: 0; background: var(--surface-2); }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 12px; font-weight: 700; }
      `,
  },
};
