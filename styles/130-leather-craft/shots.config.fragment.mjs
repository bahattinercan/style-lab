/**
 * 130 · Leather Craft — shots.config fragment
 *
 * İmza: kart içinde kesikli dikiş çerçevesi · yoğun deri tanesi (grain .06) · kahve accent · mono kalınlık/dikiş künyesi.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Fraunces başlık · Lora gövde · Share Tech Mono künye ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 700; }
      h1 { font-size: 50px; line-height: 1.08; letter-spacing: -.01em; max-width: 18ch; }
      h2 { font-size: 28px; line-height: 1.2; max-width: 26ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
      h3 { font-size: 20px; line-height: 1.28; }
      h4 { font-size: 16px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.66; max-width: 62ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .14em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '— '; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 26px; }
      .trow .num { font-size: 13px; }

      /* ---------- nav ---------- */
      .nav { height: 58px; padding: 0 26px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 700; font-size: 21px; letter-spacing: -.01em; text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -19px; height: 2px; background: var(--accent);
      }

      /* ---------- yüzey: kısa gölge + iç kesikli dikiş ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
      }
      /* dikiş çerçevesi: kart/modal içinde 8px boşlukla kesikli çizgi */
      .plan::after, .comp-card-demo::after, .state-card::after, .auth-card::after, .ob-card::after, .modal::after {
        content: ''; position: absolute; inset: 8px; border-radius: calc(var(--radius-lg) - 6px);
        border: 1px dashed color-mix(in srgb, var(--ink-soft) 45%, transparent);
        pointer-events: none;
      }
      .plan, .comp-card-demo, .state-card, .auth-card, .ob-card, .modal { position: relative; padding: 24px; }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard), var(--shadow); }
      .plan.hot::before {
        content: ''; position: absolute; left: 24px; right: 24px; top: 0; height: 2px; background: var(--accent);
      }

      /* ---------- kontroller: 4px radius, 46px hedef ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 14px; letter-spacing: 0;
        min-height: 46px; padding: 12px 22px; border-radius: var(--radius);
        border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: var(--surface); border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:hover { border-bottom: 1px dashed color-mix(in srgb, var(--ink-soft) 55%, transparent); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 36px; padding: 8px 14px; font-size: 12px; }
      .field, input, select, textarea {
        min-height: 46px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-body); font-size: 15px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 2px;
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 10px; border-radius: var(--radius);
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .14em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .fab { box-shadow: var(--shadow); }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 2px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 2px; height: 6px; }
      .bar { border-radius: 2px; }
      .proof li::before { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- imza: hero görselinde deri tanesi + dikiş sırası ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow); overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: 10px; pointer-events: none;
        border: 1px dashed color-mix(in srgb, var(--ink-soft) 40%, transparent);
        border-radius: calc(var(--radius-lg) - 6px);
      }
      .hero-visual::after {
        content: ''; position: absolute; right: 22px; bottom: 22px; width: 64px; height: 1px;
        background: repeating-linear-gradient(90deg, var(--ink-soft) 0 4px, transparent 4px 8px);
        pointer-events: none;
      }

      /* ---------- landing: sol üstte alet izi, sağda kesikli dikiş bandı ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 6px;
        background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 22%, transparent) 0 6px, transparent 6px 14px);
        pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: -8vw; top: -10vh; width: 42vw; height: 42vw;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 70%);
        opacity: .5; pointer-events: none;
      }

      /* ---------- dashboard: atölye panosu ---------- */
      body.scene-dashboard .kpis { gap: 18px; }
      body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
      body.scene-dashboard .side { background: var(--bg-2); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        h2 { font-size: 22px; }
        .lede { font-size: 15px; }
        .plan, .comp-card-demo, .state-card, .auth-card, .ob-card, .modal { padding: 20px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
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
      /* hero imzası: deri — çift dikiş kenarı + kayış dili */
      .hero-visual { position: relative; min-height: 360px; }
      .hero-visual::after {
        content: "EL DİKİŞİ · 130"; position: absolute; inset: 14px; padding: 20px;
        border: 1px solid color-mix(in srgb, var(--ink) 22%, transparent); border-radius: var(--radius);
        outline: 1px dashed color-mix(in srgb, var(--ink-soft) 45%, transparent); outline-offset: -8px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em; color: var(--ink-soft);
        background: linear-gradient(90deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 100%) 20px calc(100% - 26px) / 46% 14px no-repeat;
        pointer-events: none;
      }
    `,
  },
};
