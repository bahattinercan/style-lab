/**
 * 129 · Porcelain Glaze — shots.config fragment
 *
 * İmza: sıfır doku (grain 0) · kobalt accent · 14/28px + hap radius · ince 1px kontur · mono ölçü satırı.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: EB Garamond başlık · Nunito gövde · Space Mono ölçü ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 400; }
      h1 { font-size: 46px; line-height: 1.1; letter-spacing: .01em; max-width: 20ch; }
      h2 { font-size: 26px; line-height: 1.22; letter-spacing: .01em; max-width: 28ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 700; letter-spacing: 0; }
      h3 { font-size: 19px; line-height: 1.28; }
      h4 { font-size: 16px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.68; max-width: 60ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '· '; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 24px; }
      .trow .num { font-size: 13px; }

      /* ---------- nav ---------- */
      .nav { height: 60px; padding: 0 28px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 400; font-size: 22px; letter-spacing: .14em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -20px; height: 2px; background: var(--accent);
      }

      /* ---------- yüzey: ince kontur, 2px gölge ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 22px; }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }
      .plan.hot::before {
        content: ''; position: absolute; left: 22px; right: 22px; top: 0; height: 1px; background: var(--accent);
      }

      /* ---------- kontroller: 14px form, hap buton ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 700; font-size: 14px; letter-spacing: 0;
        min-height: 46px; padding: 12px 24px; border-radius: 999px;
        border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: var(--surface); border: 1px solid var(--line); color: var(--accent); box-shadow: none; }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 12px; }
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
        height: 24px; padding: 0 10px; border-radius: 999px;
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .16em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .fab { box-shadow: var(--shadow); }
      .opt .box { border-radius: 10px; border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 999px; height: 5px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 999px; height: 5px; }
      .bar { border-radius: 999px; }
      .proof li::before { width: 6px; height: 6px; border-radius: 999px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: 999px; }
      .scene-m-sheet .m-sheet { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }

      /* ---------- imza: hero görselinde 1px vazo silüeti (tek kez) ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
        overflow: hidden; margin-left: 2px;
      }
      .hero-visual::before {
        content: ''; position: absolute; left: 50%; bottom: 0; width: 42%; height: 82%;
        transform: translateX(-50%);
        border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
        border-bottom: 0;
        border-radius: 50% 50% 8% 8% / 42% 42% 6% 6%;
        pointer-events: none;
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 8%; right: 8%; top: 26%; height: 1px;
        background: color-mix(in srgb, var(--accent) 35%, transparent); pointer-events: none;
      }

      /* ---------- landing: kobalt ince yay, sol kenarda 1px çizgi ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: radial-gradient(120% 90% at 50% 0%, transparent 0 62%, color-mix(in srgb, var(--accent) 12%, transparent) 62% 62.25%, transparent 62.25% 100%);
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: var(--line); pointer-events: none;
      }

      /* ---------- dashboard: koleksiyon ızgarası, sakin satırlar ---------- */
      body.scene-dashboard .kpis { gap: 20px; }
      body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
      body.scene-dashboard .side { background: var(--bg-2); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 18ch; }
        h2 { font-size: 21px; }
        .lede { font-size: 15px; }
        .plan, .comp-card-demo, .state-card, .m-tile { padding: 18px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        .hero-visual { margin-left: 0; }
        body.scene-landing .sig::before { opacity: .5; }
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
      /* hero imzası: sır halkaları + kraklür çatlakları */
      .hero-visual { position: relative; min-height: 360px; }
      .hero-visual::before {
        content: "SIR · 1.280 °C"; position: absolute; inset: 0; padding: 18px 20px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
        background:
          repeating-radial-gradient(circle at 50% 62%, color-mix(in srgb, var(--accent) 30%, transparent) 0 1px, transparent 1px 26px),
          repeating-linear-gradient(38deg, color-mix(in srgb, var(--ink) 10%, transparent) 0 1px, transparent 1px 38px);
        pointer-events: none;
      }
    `,
  },
};
