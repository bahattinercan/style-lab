/**
 * 151 · Dark Dashboard — shots.config fragment
 *
 * İmza: 240px sol ray + 2px cyan şerit · 44px tablo satırı · 34px Michroma KPI · 1px ızgara
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Michroma yalnız display · Inter gövde · JetBrains sayı ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: none; }
      h1 { font-size: 34px; line-height: 1.15; letter-spacing: -.01em; max-width: 24ch; }
      h2 { font-size: 26px; line-height: 1.22; letter-spacing: 0; max-width: 32ch; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; line-height: 1.3; letter-spacing: -.005em; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; line-height: 1.35; letter-spacing: 0; }
      .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.55; max-width: 64ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .16em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .big404, .kpi .v, .kpi .num-big { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; font-size: 34px; line-height: 1.1; }
      .plan .price b, .sum-total b { font-family: var(--font-mono); font-weight: 400; letter-spacing: 0; }
      .trow .num { font-size: 13px; letter-spacing: 0; }

      /* ---------- nav: sticky ince cam, sol ray ---------- */
      .nav {
        height: 56px; padding: 0 20px; background: color-mix(in srgb, var(--bg) 88%, transparent);
        border: 0; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
      }
      .brand { font-family: var(--font-display); font-weight: 400; font-size: 14px; letter-spacing: .12em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: -18px; height: 2px; background: var(--accent); }

      /* ---------- yüzeyler: 1px çizgi, radius 14px, gölge yok ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); height: 44px; }
      .trow:last-child { border-bottom: 0; }
      .trow:hover { background: var(--surface-2); }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); border-radius: 0; }
      .side a, .side .nav-item { border-radius: var(--radius); }
      .side .on, .side .active { background: var(--surface-2); box-shadow: inset 2px 0 0 var(--accent); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 16px; position: relative; }
      .modal, .drawer, .menu {
        border: 1px solid var(--line); box-shadow: var(--shadow); border-radius: var(--radius-lg);
        background: var(--surface); -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
      }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

      /* ---------- kontroller ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .02em; text-transform: none;
        min-height: 40px; padding: 8px 16px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
        transition: background-color 100ms ease, transform 100ms ease;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
      .btn.ghost:hover, .btn.soft:hover { border-color: var(--ink-faint); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 28px; padding: 4px 10px; font-size: 12px; }
      .field, input, select, textarea {
        min-height: 40px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 14px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 22px; padding: 0 8px; border-radius: var(--radius);
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .14em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-size: 12px; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 50%; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--bg-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 999px; height: 6px; }
      .bar { border-radius: 2px 2px 0 0; }
      .proof li::before { width: 6px; height: 6px; border-radius: 2px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- durum noktası: renk + metin ---------- */
      .dot-ok, .dot-warn, .dot-err { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
      .dot-ok { background: var(--ok); }
      .dot-warn { background: var(--warn); }
      .dot-err { background: var(--danger); }

      /* ---------- imza: KPI şeridi + mini grafik ---------- */
      .hero-visual { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; min-height: 360px; position: relative; }
      .hero-visual::after {
        content: ''; position: absolute; inset: auto 0 0 0; height: 42%;
        background:
          linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--accent) 10%, transparent) 100%),
          repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 6%, transparent) 0 1px, transparent 1px 44px);
        pointer-events: none;
      }
      body.scene-landing .sec-head { border-top: 1px solid var(--line); padding-top: 14px; }
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent); opacity: .5;
      }

      /* ---------- dashboard: yoğun ızgara ---------- */
      body.scene-dashboard .kpis { gap: 12px; }
      body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
      body.scene-dashboard .kpi .v, body.scene-dashboard .kpi .num-big { font-size: 34px; }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }
      body.scene-dashboard .side { border-radius: 0; }

      @media (max-width: 900px) {
        h1 { font-size: 24px; max-width: 22ch; }
        h2 { font-size: 20px; }
        h3 { font-size: 17px; }
        .lede { font-size: 13px; }
        .nav { height: 52px; padding: 0 12px; }
        .nav-links { display: none; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; }
        .side { display: none; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .4; color: var(--ink-soft); background: transparent; border: 1px dashed var(--line); }
      .btn { white-space: nowrap; }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      body.scene-landing .sig { z-index: -1; }
      .proof li { color: var(--ink-soft); }
    `,
  scenes: {
    landing: `
      /* hero imzası: solda kopya, sağda panel önizlemesi */
      .hero .hero-copy { max-width: 560px; }
      .hero .cta-row { gap: 8px; margin-top: 20px; }
      .hero .proof { margin-top: 24px; gap: 16px; }
      .hero .proof li { font-size: 10px; }
      .hero-visual { min-height: 380px; }
    `,
  },
};
