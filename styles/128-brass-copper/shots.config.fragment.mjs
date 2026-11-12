/**
 * 128 · Brass Copper — shots.config fragment
 *
 * İmza: üst kenarda 1px iç parlaklık · bakır accent · gravür Cinzel künye · fırçalanmış metal grain.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
      /* ---------- tipografi: Cinzel gravür başlık · Jost gövde · Courier künye ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 600; text-transform: uppercase; }
      h1 { font-size: 44px; line-height: 1.1; letter-spacing: .12em; max-width: 20ch; }
      h2 { font-size: 26px; line-height: 1.2; letter-spacing: .08em; max-width: 28ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
      h3 { font-size: 19px; line-height: 1.25; }
      h4 { font-size: 15px; line-height: 1.3; }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 66ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '// '; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .04em;
      }
      .kpi .v, .kpi .num-big { font-size: 24px; }
      .trow .num { font-size: 14px; }

      /* ---------- nav ---------- */
      .nav { height: 56px; padding: 0 24px; background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 600; font-size: 16px; letter-spacing: .16em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .06em; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -18px; height: 1px; background: var(--accent);
      }

      /* ---------- plaka: üst kenarda 1px iç parlaklık ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg);
        box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 10%, transparent);
        backdrop-filter: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 20px; position: relative; }
      .modal, .drawer, .menu {
        border: 1px solid var(--accent); box-shadow: var(--shadow); border-radius: var(--radius-lg);
      }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 10%, transparent), var(--shadow-hard); }

      /* perçin: kartın sol üstünde tek 4px nokta */
      .plan::before, .comp-card-demo::before, .state-card::before {
        content: ''; position: absolute; left: 10px; top: 10px; width: 4px; height: 4px; border-radius: 50%;
        background: var(--ink-faint);
      }

      /* ---------- kontroller: 3px radius, 40px ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 12px; letter-spacing: .10em; text-transform: uppercase;
        min-height: 40px; padding: 10px 20px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--accent); color: var(--accent); }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:hover { box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 22%, transparent); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 30px; padding: 6px 12px; font-size: 10px; }
      .field, input, select, textarea {
        min-height: 40px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink);
        font-family: var(--font-mono); font-size: 14px; letter-spacing: .02em;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 1px; border-bottom: 1px solid var(--accent);
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 22px; padding: 0 8px; border-radius: var(--radius);
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .14em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 600; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .fab { box-shadow: var(--shadow); }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--bg-2); border-radius: 1px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 1px; height: 6px; }
      .bar { border-radius: 1px; }
      .proof li::before { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- imza: hero görselinde fırçalanmış metal + patina ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: var(--radius-lg);
        box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 12%, transparent); overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: repeating-linear-gradient(
          0deg,
          color-mix(in srgb, var(--ink) 7%, transparent) 0 1px,
          transparent 1px 4px
        );
        opacity: .8;
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 12%; right: 12%; top: 38%; height: 34%;
        border-radius: 50%;
        background: radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--accent) 26%, transparent) 0%, transparent 72%);
        pointer-events: none;
      }

      /* ---------- landing: sol üstte bakır şerit + sağda gravür halkası ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 1px;
        background: var(--accent); opacity: .7; pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: -6vw; top: -6vh; width: 40vw; height: 40vw;
        background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0 30px, color-mix(in srgb, var(--accent) 16%, transparent) 30px 31px);
        -webkit-mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 74%);
        mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 74%);
        pointer-events: none;
      }

      /* ---------- dashboard: alaşım tablosu, sert bölmeler ---------- */
      body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
      body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      body.scene-dashboard .kpi:last-child { border-right: 0; }
      body.scene-dashboard .side { background: var(--bg-2); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 20ch; }
        h2 { font-size: 20px; }
        .lede { font-size: 14px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
        body.scene-dashboard .kpi:last-child { border-bottom: 0; }
        body.scene-landing .sig::after { display: none; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
      .btn { white-space: nowrap; }
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      body.scene-landing .sig { z-index: -1; }
      .hero-visual { min-height: 360px; }
    `,
  scenes: {
    landing: `
      /* hero imzası: pirinç plaka — 4 perçin + gravür çizgileri */
      .hero-visual { position: relative; min-height: 360px; }
      .hero-visual::before {
        content: "PİRİNÇ · No. 128"; position: absolute; inset: 26px; padding: 20px;
        border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .22em; color: var(--accent);
        background:
          radial-gradient(circle at 10px 10px, var(--accent) 0 3px, transparent 3px) 0 0 / 100% 100% no-repeat,
          radial-gradient(circle at calc(100% - 10px) 10px, var(--accent) 0 3px, transparent 3px) 0 0 / 100% 100% no-repeat,
          radial-gradient(circle at 10px calc(100% - 10px), var(--accent) 0 3px, transparent 3px) 0 0 / 100% 100% no-repeat,
          radial-gradient(circle at calc(100% - 10px) calc(100% - 10px), var(--accent) 0 3px, transparent 3px) 0 0 / 100% 100% no-repeat,
          linear-gradient(0deg, color-mix(in srgb, var(--accent) 40%, transparent) 0 1px, transparent 1px) 20px 74px / 62% 1px no-repeat;
        pointer-events: none;
      }
    `,
  },
};
