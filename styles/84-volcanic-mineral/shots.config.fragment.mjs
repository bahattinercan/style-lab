/**
 * 84 · Volcanic Mineral — shots.config fragment
 *
 * İmza: keskin köşe (0–2px) · 3px mineral şeridi · 15° katman çizgileri · magma accent · bazalt grain.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
      /* ---------- tipografi: Michroma fasetli başlık · Space Grotesk gövde · mono ölçüm ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; }
      h1 { font-size: 48px; line-height: 1.02; letter-spacing: .04em; max-width: 20ch; }
      h2 { font-size: 28px; line-height: 1.1; letter-spacing: .03em; max-width: 28ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 700; letter-spacing: 0; }
      h3 { font-size: 19px; line-height: 1.25; }
      h4 { font-size: 15px; line-height: 1.3; }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.58; max-width: 66ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-soft); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '▲ '; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 26px; }
      .trow .num { font-size: 13px; }

      /* ---------- nav ---------- */
      .nav { height: 52px; padding: 0 24px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 400; font-size: 15px; letter-spacing: .14em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; font-weight: 500; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 2px; background: var(--accent);
      }

      /* ---------- keskin yüzey: radius 0, gölge yok ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: 0; box-shadow: none; backdrop-filter: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .modal, .drawer, .menu { border-radius: var(--radius-lg); border: 1px solid var(--accent); box-shadow: var(--shadow); }
      /* aktif örnek: 1px magma halka */
      .plan.hot, .kpi.accent, .m-tile.accent, .comp-card-demo.accent { box-shadow: var(--shadow-hard); }

      /* kart: üstte 3px mineral şeridi */
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { position: relative; padding: 20px; }
      .plan::before, .comp-card-demo::before, .state-card::before, .auth-card::before, .ob-card::before {
        content: ''; position: absolute; left: 0; right: 0; top: 0; height: 3px;
        background: color-mix(in srgb, var(--accent) 70%, transparent);
      }

      /* ---------- kontroller: keskin köşe, 40px ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 700; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
        min-height: 40px; padding: 10px 18px; border-radius: 0; border: 1px solid transparent; box-shadow: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:hover { border-bottom-color: var(--accent); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 30px; padding: 6px 12px; font-size: 10px; }
      .field, input, select, textarea {
        min-height: 40px; border: 1px solid var(--line); border-radius: 0;
        background: var(--bg-2); color: var(--ink);
        font-family: var(--font-mono); font-size: 14px; letter-spacing: .02em;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 1px; border-bottom: 2px solid var(--accent);
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 20px; padding: 0 8px; border-radius: 0;
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .16em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .empty-ic, .icon-btn { border-radius: 0; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .opt .box { border-radius: 0; border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 0; height: 8px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 0; height: 8px; }
      .bar { border-radius: 0; }
      .bars i, .bar i { border-radius: 0; }
      .proof li::before { width: 6px; height: 6px; border-radius: 0; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: 0; }
      .fab { border-radius: 0; box-shadow: var(--shadow); }

      /* ---------- imza: hero görselinde 15° katman çizgileri ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: 0; box-shadow: none; overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: -20% -10%; pointer-events: none;
        background-image: repeating-linear-gradient(
          15deg,
          transparent 0 26px,
          color-mix(in srgb, var(--ink) 16%, transparent) 26px 27px,
          transparent 27px 52px,
          color-mix(in srgb, var(--accent) 40%, transparent) 52px 53px
        );
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
        background: color-mix(in srgb, var(--accent) 70%, transparent); pointer-events: none;
      }

      /* ---------- landing: sol üstte magma çatlağı (statik) ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
        background: color-mix(in srgb, var(--accent) 70%, transparent); pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: -6vw; top: -8vh; width: 40vw; height: 40vw;
        background-image: repeating-linear-gradient(
          15deg,
          color-mix(in srgb, var(--accent) 14%, transparent) 0 1px,
          transparent 1px 30px
        );
        -webkit-mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 72%);
        mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 72%);
        pointer-events: none;
      }

      /* ---------- dashboard: örnek ızgarası, keskin bölmeler ---------- */
      body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); }
      body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; }
      body.scene-dashboard .kpi:last-child { border-right: 0; }
      body.scene-dashboard .side { background: var(--bg-2); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 18ch; }
        h2 { font-size: 20px; }
        .lede { font-size: 14px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
        body.scene-dashboard .kpi:last-child { border-bottom: 0; }
        body.scene-landing .sig::after { display: none; }
      }
    
      /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
      .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
        opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
        border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
      }
      .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
      .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
      .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      .logo-strip { color: var(--ink-soft); }
      .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .sig { z-index: 0; }
      .sig::before, .sig::after { z-index: -1; }
      .hero-visual { overflow: hidden; }
      .hero-visual > * { position: relative; z-index: 1; }

    `,
  scenes: {
    landing: `
          /* imza hero: mineral damarı + kor bandı */
          .hero-visual { min-height: 360px; padding: 18px; background: var(--bg-2); }
          .visual-card { width: 100%; min-height: 300px; border-radius: 0; border: 1px solid var(--line); }
          .visual-rows { margin-top: auto; }
          .visual-row { border-radius: 0; background: color-mix(in srgb, var(--surface-2) 88%, transparent); }
          .visual-row .sq { border-radius: 0; height: 18px; }
          .hero-visual::before {
            content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .5;
            background-image: repeating-linear-gradient(58deg, transparent 0 30px, color-mix(in srgb, var(--accent) 34%, transparent) 30px 31px, transparent 31px 60px);
          }
          .hero-visual::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: var(--accent); }
    `,
  },
};
