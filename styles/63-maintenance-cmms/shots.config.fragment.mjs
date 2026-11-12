/**
 * 63 · Maintenance CMMS — shots.config fragment
 *
 * İmza: koyu mat yüzey · tek yönlü alt gölge · delikli kart şeridi · daktilo mono künye · turuncu aciliyet.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Chakra Petch başlık · Space Grotesk gövde · Courier Prime künye ---------- */
      h1, h2 { font-family: var(--font-display); font-weight: 600; }
      h1 { font-size: 38px; line-height: 1.08; letter-spacing: 0; max-width: 21ch; }
      h2 { font-size: 24px; line-height: 1.2; letter-spacing: .01em; }
      h3, h4 { font-family: var(--font-body); font-weight: 700; }
      h3 { font-size: 18px; line-height: 1.25; }
      h4 { font-size: 15px; line-height: 1.3; }
      .eyebrow, .label, .mono, .chip, .trow .num, .kpi .k, .logo-strip span, .proof li, .crumbs span {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .16em; text-transform: uppercase;
      }
      .eyebrow, .kpi .k, .label { font-size: 11px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '// '; color: var(--ink-faint); }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 64ch; color: var(--ink-soft); }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 26px; }

      /* ---------- nav ---------- */
      .nav { height: 52px; padding: 0 28px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 600; font-size: 17px; letter-spacing: 0; text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; font-weight: 500; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -17px; height: 3px; background: var(--accent);
      }

      /* ---------- yüzey: koyu mat, tek yönlü alt gölge ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .trow .num { font-size: 12px; letter-spacing: .14em; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .foot-demo, .logo-strip { background: var(--bg-2); border-top: 1px solid var(--line); }

      /* iş emri kartı: üstte 4px delikli turuncu şerit */
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { position: relative; padding: 18px; }
      .plan::before, .comp-card-demo::before, .state-card::before, .auth-card::before, .ob-card::before {
        content: ''; position: absolute; left: 0; right: 0; top: 0; height: 4px;
        border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        background-color: var(--surface-2);
        background-image: radial-gradient(var(--accent) 1.2px, transparent 1.2px);
        background-size: 8px 4px;
      }
      .plan.hot, .m-tile.accent { box-shadow: var(--shadow-hard); }
      .plan.hot::before { background-color: var(--surface-2); }

      /* ---------- kontroller: 40px görsel, 44px hedef ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 700; font-size: 13px; letter-spacing: .01em;
        min-height: 40px; padding: 8px 18px; border-radius: var(--radius);
        border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }
      .btn.soft { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { border-color: var(--ink-soft); }
      .btn:focus-visible { outline: 2px solid var(--warn); outline-offset: 2px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .field, input, select, textarea {
        min-height: 40px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink);
        font-family: var(--font-mono); font-size: 14px; letter-spacing: .02em;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 1px; border-left: 3px solid var(--accent);
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 10px; border-radius: 6px;
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        letter-spacing: .14em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 600; }
      .divider { height: 1px; background: var(--line); }
      .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .opt .box { border-radius: 4px; border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 0; height: 8px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 0; height: 8px; }
      .proof li::before { width: 7px; height: 7px; border-radius: 2px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: 4px; }

      /* ---------- imza: hero görselinde delikli panel + makine künyesi ---------- */
      .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); overflow: hidden; }
      .hero-visual::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: radial-gradient(color-mix(in srgb, var(--ink) 16%, transparent) 1.2px, transparent 1.2px);
        background-size: 14px 14px;
        opacity: .7;
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
        background: var(--accent); opacity: .75; pointer-events: none;
      }

      /* ---------- landing: sol üstte 4px turuncu şerit, sağ altta ışıklı zemin yok ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 4px;
        background: var(--accent); opacity: .9; pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; left: -6vw; bottom: -18vh; width: 44vw; height: 44vw;
        background-image: radial-gradient(color-mix(in srgb, var(--ink) 14%, transparent) 1.2px, transparent 1.2px);
        background-size: 16px 16px;
        -webkit-mask-image: radial-gradient(60% 60% at 50% 50%, var(--ink) 0%, transparent 70%);
        mask-image: radial-gradient(60% 60% at 50% 50%, var(--ink) 0%, transparent 70%);
        pointer-events: none;
      }

      /* ---------- dashboard: KPI şeridi tek çizgiyle bölünür, geciken işte turuncu halka ---------- */
      body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: var(--surface); }
      body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; background: transparent; }
      body.scene-dashboard .kpi:last-child { border-right: 0; }
      body.scene-dashboard .kpi:nth-child(2) { box-shadow: inset 3px 0 0 var(--accent); }

      @media (max-width: 900px) {
        h1 { font-size: 26px; max-width: 20ch; }
        h2 { font-size: 20px; }
        .lede { font-size: 14px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); box-shadow: none; }
        body.scene-dashboard .kpi:last-child { border-bottom: 0; }
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
        .hero-visual .visual-card { border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); padding: 20px; }
        .hero-visual .visual-card::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 4px;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0; background-color: var(--surface-2);
          background-image: radial-gradient(var(--accent) 1.2px, transparent 1.2px); background-size: 8px 4px; }
        .hero-visual .visual-card .bar { height: 6px; border: 0; background: var(--surface-2); }
        .hero-visual .visual-card .bar.accent { width: 34%; background: var(--accent); }
        .hero-visual .visual-row { height: 32px; border-bottom: 1px solid var(--line); grid-template-columns: 18px 1fr auto; gap: 10px; }
        .hero-visual .visual-row .sq { width: 14px; height: 14px; border-radius: 3px; border: 1px solid var(--accent); background: transparent; }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em; }
        .hero-visual::after { content: 'WO-2481'; position: absolute; right: 18px; top: 14px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-faint); }
      `,
  },
};
