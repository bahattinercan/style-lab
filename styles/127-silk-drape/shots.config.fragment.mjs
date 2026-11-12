/**
 * 127 · Silk Drape — shots.config fragment
 *
 * İmza: kıvrım köşesi (44 44 44 12) · hap kontroller · kumaş düşüşü gölgesi · ince serif başlık · mor ipek accent.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Cormorant 300 başlık · Poppins gövde ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 300; }
      h1 { font-size: 60px; line-height: 1.02; letter-spacing: .02em; max-width: 16ch; }
      h2 { font-size: 32px; line-height: 1.14; letter-spacing: .01em; max-width: 26ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
      h3 { font-size: 20px; line-height: 1.3; }
      h4 { font-size: 15px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.7; max-width: 56ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .24em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '〜 '; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .04em;
      }
      .kpi .v, .kpi .num-big { font-size: 26px; }
      .trow .num { font-size: 12px; }

      /* ---------- nav ---------- */
      .nav { height: 64px; padding: 0 32px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 300; font-size: 24px; letter-spacing: .16em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 1px; background: var(--ink);
      }

      /* ---------- yüzey: kumaş düşüşü gölgesi, kıvrım köşesi ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
      }
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card, .co-sec {
        border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px;
        padding: 28px; position: relative;
      }
      .table { overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }
      .plan.hot::before {
        content: ''; position: absolute; left: 28px; right: 28px; top: 0; height: 1px; background: var(--accent);
      }

      /* ---------- kontroller: hap + 48px hedef ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .08em; text-transform: uppercase;
        min-height: 48px; padding: 12px 26px; border-radius: 999px; border: 1px solid transparent; box-shadow: var(--shadow);
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:hover { box-shadow: 0 16px 34px -18px color-mix(in srgb, var(--accent) 45%, transparent), var(--shadow); }
      .btn:active { transform: translateY(1px); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn.sm { min-height: 36px; padding: 8px 18px; font-size: 11px; }
      .field, input, select, textarea {
        min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-body); font-size: 14px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 2px;
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 12px; border-radius: 999px;
        background: transparent; border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .18em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 300; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); }
      .icon-btn, .fab { box-shadow: none; }
      .fab { box-shadow: var(--shadow); }
      .opt .box { border-radius: 12px; border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 999px; height: 6px; }
      .bar { border-radius: 999px; }
      .proof li::before { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: 999px; }
      .scene-m-sheet .m-sheet { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }

      /* ---------- imza: hero görselinde kumaş kıvrımı ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px;
        box-shadow: var(--shadow); overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: -12% -8%; pointer-events: none;
        background-image:
          radial-gradient(120% 80% at 20% 10%, color-mix(in srgb, var(--surface) 92%, transparent) 0%, transparent 60%),
          linear-gradient(115deg, transparent 0 34%, color-mix(in srgb, var(--ink) 9%, transparent) 34% 34.6%, transparent 34.6% 52%,
            color-mix(in srgb, var(--ink) 6%, transparent) 52% 52.5%, transparent 52.5% 70%, color-mix(in srgb, var(--accent) 14%, transparent) 70% 70.6%, transparent 70.6% 100%);
      }
      .hero-visual::after {
        content: ''; position: absolute; right: 18px; bottom: 18px; width: 56px; height: 1px;
        background: var(--ink-faint); opacity: .6; pointer-events: none;
      }

      /* ---------- landing: yumuşak ipek ışığı + sağ kenar kıvrımı ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; right: -14vw; top: -26vh; width: 58vw; height: 58vw;
        border-radius: 50%;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 70%);
        opacity: .5; pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; left: -10vw; bottom: -16vh; width: 46vw; height: 34vw;
        border-radius: 50% 50% 0 0;
        background: radial-gradient(60% 60% at 50% 40%, color-mix(in srgb, var(--surface) 85%, transparent) 0%, transparent 72%);
        opacity: .5; pointer-events: none;
      }

      /* ---------- dashboard: kartela, geniş satır ---------- */
      body.scene-dashboard .kpis { gap: 24px; }
      body.scene-dashboard .kpi { padding: 24px 28px; }
      body.scene-dashboard .side { background: var(--bg-2); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 34px; max-width: 18ch; }
        h2 { font-size: 24px; }
        .lede { font-size: 14px; }
        .plan, .comp-card-demo, .state-card, .m-tile { padding: 20px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-landing .sig::before { opacity: .3; }
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
      /* hero imzası: ipek perde — düşen kuma kıvrımları + kenar dikişi */
      .hero-visual { position: relative; min-height: 360px; }
      .hero-visual::before {
        content: "İPEK · 19 MOM"; position: absolute; inset: 0; padding: 18px 22px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em; color: var(--ink-soft);
        background:
          repeating-linear-gradient(96deg, color-mix(in srgb, var(--ink) 16%, transparent) 0 2px, transparent 2px 22px),
          repeating-linear-gradient(84deg, color-mix(in srgb, var(--accent) 22%, transparent) 0 1px, transparent 1px 36px),
          radial-gradient(90% 60% at 30% 0%, color-mix(in srgb, var(--ink) 7%, transparent), transparent 72%);
        pointer-events: none;
      }
    `,
  },
};
