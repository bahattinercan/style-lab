/**
 * 65 · Cockpit Avionics — shots.config fragment
 *
 * İmza: çift çizgi bezel · 3/6/3 kokpit bölgeleri · segment çubuk · radar halkası · sıçrayan değer.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: 'upper',
  extraCss: `
      /* ---------- tipografi: Rajdhani başlık · Inter gövde · Share Tech Mono okuma ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 700; text-transform: uppercase; }
      h1 { font-size: 34px; line-height: 1.02; letter-spacing: .06em; max-width: 22ch; }
      h2 { font-size: 22px; line-height: 1.15; letter-spacing: .04em; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
      h3 { font-size: 17px; line-height: 1.25; }
      h4 { font-size: 14px; line-height: 1.3; }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '◈ '; color: var(--ink-faint); }
      .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.5; max-width: 70ch; color: var(--ink-soft); }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .04em;
      }
      .kpi .v, .kpi .num-big { font-size: 22px; }

      /* ---------- nav: 3 bölgeli üst bar ---------- */
      .nav { height: 44px; padding: 0 20px; background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 700; font-size: 16px; letter-spacing: .14em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--accent); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -15px; height: 2px; background: var(--accent);
      }

      /* ---------- bezel: dış 1px + iç 1px, gölge yok ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent);
        backdrop-filter: none;
      }
      .table { border-radius: var(--radius); overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .trow .num { font-size: 15px; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }

      /* aktif panel: 1px cyan dış halka (shadow-hard) */
      .plan.hot, .kpi:first-child, .m-tile.accent {
        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent), var(--shadow-hard);
      }
      .plan.hot::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent);
      }

      /* ---------- kontroller: 34px görsel, 44px hedef ---------- */
      .btn {
        font-family: var(--font-display); font-weight: 700; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
        min-height: 34px; padding: 8px 14px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost, .btn.soft { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }
      .btn.ghost:hover, .btn.soft:hover { border-color: var(--ink-soft); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 28px; padding: 4px 10px; font-size: 10px; letter-spacing: .16em; }
      .field, input, select, textarea {
        min-height: 34px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink);
        font-family: var(--font-mono); font-size: 13px; letter-spacing: .04em;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 1px; border-left: 2px solid var(--accent);
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 20px; padding: 0 8px; border-radius: var(--radius);
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .14em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
      .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }

      /* segmentli gösterge: 4px bloklar, sürekli gradient yok */
      .track {
        height: 12px; border-radius: var(--radius); background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line);
        background-image: repeating-linear-gradient(90deg, transparent 0 6px, var(--bg) 6px 8px);
      }
      .track i { background: var(--accent); border-radius: var(--radius); height: 12px; }
      .visual-card .bar, .bars .bar { border-radius: 1px; }
      .proof li::before { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- imza: radar halkaları (statik) + ufuk çizgisi ---------- */
      .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent); overflow: hidden; }
      .hero-visual::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background: repeating-radial-gradient(circle at 50% 50%, transparent 0 42px, color-mix(in srgb, var(--accent) 34%, transparent) 42px 43px, transparent 43px 84px);
        opacity: .7;
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px;
        background: color-mix(in srgb, var(--accent) 45%, transparent); pointer-events: none;
      }

      /* ---------- landing: üstte 2px cyan ölçüm şeridi + sağ altta ölçek bandı ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; right: 0; top: 0; height: 2px; background: var(--accent); opacity: .8;
        pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 6px;
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 55%, transparent) 0 1px, transparent 1px 24px);
        pointer-events: none;
      }

      /* ---------- dashboard: 3/6/3 bölge, gösterge ızgarası ---------- */
      body.scene-dashboard .main { gap: 12px; }
      body.scene-dashboard .kpis { gap: 12px; }
      body.scene-dashboard .kpi { padding: 12px 14px; }
      body.scene-dashboard .kpi .k { letter-spacing: .2em; }
      body.scene-dashboard .table .trow { font-variant-numeric: tabular-nums; }
      body.scene-dashboard .side { border-right: 1px solid var(--line); }

      @media (max-width: 900px) {
        h1 { font-size: 24px; max-width: 20ch; }
        h2 { font-size: 19px; }
        .lede { font-size: 13px; }
        .nav { height: 44px; padding: 0 14px; }
        .panel, .panel-2, .kpi, .table { border-radius: var(--radius); }
        body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; gap: 8px; }
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
        .hero-visual .visual-card { border: 1px solid var(--accent); border-radius: var(--radius-lg); padding: 18px;
          box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent); }
        .hero-visual .visual-card .bar { height: 10px; border: 0; border-radius: var(--radius); background: var(--surface-2);
          background-image: repeating-linear-gradient(90deg, transparent 0 5px, var(--bg) 5px 7px); }
        .hero-visual .visual-card .bar.accent { width: 42%; background: var(--accent);
          background-image: repeating-linear-gradient(90deg, transparent 0 5px, color-mix(in srgb, var(--bg) 45%, transparent) 5px 7px); }
        .hero-visual .visual-row { height: 32px; border-bottom: 1px solid var(--line); grid-template-columns: 8px 1fr auto; }
        .hero-visual .visual-row .sq { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
        .hero-visual::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px;
          background: color-mix(in srgb, var(--accent) 32%, transparent); pointer-events: none; }
        .hero-visual::after { content: ''; position: absolute; inset: 0; pointer-events: none;
          background: repeating-radial-gradient(circle at 50% 50%, transparent 0 42px, color-mix(in srgb, var(--accent) 20%, transparent) 42px 43px); }
      `,
  },
};
