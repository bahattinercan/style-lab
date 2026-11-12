/**
 * 148 · Product Launch — shots.config fragment
 *
 * İmza: sabit radial spotlight · mint accent · 1px iç parlaklıklı panel · 24px kart radius
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Space Grotesk 700 · Poppins gövde · IBM Plex etiket ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3 { font-family: var(--font-display); font-weight: 700; text-transform: none; }
      h1 { font-size: 52px; line-height: 1.06; letter-spacing: -.01em; max-width: 20ch; }
      h2 { font-size: 32px; line-height: 1.14; letter-spacing: -.005em; max-width: 26ch; }
      h3 { font-size: 22px; line-height: 1.2; max-width: 32ch; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 16px; letter-spacing: 0; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 52ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .18em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '●'; font-size: 7px; letter-spacing: 0; margin-right: 8px; vertical-align: 2px; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b { font-family: var(--font-display); font-weight: 700; letter-spacing: -.02em; }
      .kpi .v, .kpi .num-big { font-size: 38px; line-height: 1; }
      .trow .num { font-size: 11px; letter-spacing: .12em; }

      /* ---------- nav ---------- */
      .nav { height: 64px; padding: 0 28px; background: var(--bg-2); border: 0; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 700; font-size: 17px; letter-spacing: -.01em; text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after { content: ''; position: absolute; left: 50%; bottom: -22px; width: 4px; height: 4px; margin-left: -2px; border-radius: 50%; background: var(--accent); }

      /* ---------- paneller: üst kenarda 1px iç parlaklık ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
      }
      .table { overflow: hidden; border-radius: var(--radius-lg); }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .trow:hover { background: var(--surface-2); }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 24px; position: relative; }
      .modal, .drawer, .menu {
        border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
        box-shadow: var(--shadow); border-radius: var(--radius-lg); background: var(--surface);
        -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
      }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

      /* ---------- kontroller ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .02em; text-transform: none;
        min-height: 48px; padding: 12px 26px; border-radius: var(--radius); border: 1px solid transparent;
        transition: background-color 130ms ease, transform 130ms ease, box-shadow 130ms ease;
      }
      .btn:not(.ghost):not(.soft):not(.sm) {
        background: var(--accent); color: var(--accent-ink);
        box-shadow: 0 10px 30px -18px color-mix(in srgb, var(--accent) 55%, transparent);
      }
      .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { border-color: color-mix(in srgb, var(--accent) 35%, transparent); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 34px; padding: 7px 14px; font-size: 11px; }
      .field, input, select, textarea {
        min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 16px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 26px; padding: 0 12px; border-radius: 999px;
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .16em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .fab { box-shadow: var(--shadow); }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .opt.on .box { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); }
      .track { background: var(--bg-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 999px; height: 6px; }
      .bar { border-radius: 4px 4px 0 0; }
      .proof li::before { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- imza: sabit spotlight ---------- */
      body::before {
        content: ''; position: fixed; left: 50%; top: 0; transform: translateX(-50%);
        width: 120vw; height: 62vh; pointer-events: none; z-index: 0;
        background: radial-gradient(58% 46% at 50% 0%, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 72%);
      }
      .hero { position: relative; }
      .hero::after {
        content: ''; position: absolute; left: 50%; bottom: -1px; transform: translateX(-50%);
        width: 62%; height: 1px; background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 45%, transparent), transparent);
        pointer-events: none;
      }
      .hero-visual { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: inset 0 1px 0 rgba(255,255,255,.06); overflow: hidden; min-height: 360px; }

      /* ---------- adım göstergesi: aktif mint hap ---------- */
      .ob-steps i, .dots i { background: var(--line); }
      .ob-steps i.on, .dots i.on { background: var(--accent); width: 24px; border-radius: 999px; }

      /* ---------- dashboard: yoğun ama tek accent ---------- */
      body.scene-dashboard .kpis { gap: 12px; }
      body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }
      body.scene-dashboard .side { border-radius: 0; }

      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 20ch; }
        h2 { font-size: 24px; }
        h3 { font-size: 19px; }
        .lede { font-size: 15px; }
        .nav { height: 56px; padding: 0 16px; }
        .nav-links { display: none; }
        body::before { height: 46vh; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .45; color: var(--ink-soft); background: var(--surface-2); border-color: var(--line); box-shadow: none; }
      .btn { white-space: nowrap; }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      body.scene-landing .sig { z-index: -1; }
      .proof li { color: var(--ink-soft); }
    `,
  scenes: {
    landing: `
      /* hero imzası: solda kopya, sağda panel; spotlight ikisinin arkasında */
      .hero .hero-copy { max-width: 560px; }
      .hero .cta-row { gap: 10px; margin-top: 24px; }
      .hero .proof { gap: 18px; margin-top: 26px; }
      .hero .proof li { font-size: 10px; letter-spacing: .16em; }
      .hero-visual { min-height: 400px; }
    `,
  },
};
