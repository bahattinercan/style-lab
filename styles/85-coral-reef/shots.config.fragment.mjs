/**
 * 85 · Coral Reef — shots.config fragment
 *
 * İmza: asimetrik mercan köşesi (36/12) · hap kontroller · su tonu katmanları · kabarcık dizisi · mercan accent.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Baloo 2 başlık · Nunito gövde · Courier Prime kayıt ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 600; }
      h1 { font-size: 46px; line-height: 1.08; letter-spacing: 0; max-width: 20ch; }
      h2 { font-size: 28px; line-height: 1.2; max-width: 26ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 700; letter-spacing: 0; }
      h3 { font-size: 20px; line-height: 1.3; }
      h4 { font-size: 16px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.66; max-width: 60ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .14em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-soft); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '❋ '; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 26px; }
      .trow .num { font-size: 14px; }

      /* ---------- nav: hap aktif işaret + su sıcaklığı ---------- */
      .nav { height: 60px; padding: 0 26px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 600; font-size: 20px; letter-spacing: 0; text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::before {
        content: ''; display: inline-block; width: 6px; height: 6px; margin-right: 7px; border-radius: 999px;
        background: var(--accent); vertical-align: middle;
      }

      /* ---------- yüzey: koyu su tonları + asimetrik mercan köşesi ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
      }
      /* mercan öbeği: asimetrik köşe + 24px padding */
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card, .co-sec {
        border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px;
        padding: 24px; position: relative;
      }
      .table { overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }
      .plan.hot::before {
        content: ''; position: absolute; left: 24px; right: 24px; top: 0; height: 2px; background: var(--accent);
        border-radius: 999px;
      }

      /* ---------- kontroller: hap + 48px hedef ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 700; font-size: 14px; letter-spacing: 0;
        min-height: 48px; padding: 12px 24px; border-radius: 999px;
        border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--accent); color: var(--accent); box-shadow: none; }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:hover { transform: translateY(-2px); }
      .btn:active { transform: translateY(1px); box-shadow: none; }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 12px; }
      .field, input, select, textarea {
        min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-body); font-size: 15px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 2px;
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 12px; border-radius: 999px;
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 11px; letter-spacing: .12em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 600; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); box-shadow: var(--shadow); }
      .opt .box { border-radius: 10px; border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 999px; height: 8px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 999px; height: 8px; }
      .bar { border-radius: 999px; }
      .proof li::before { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: 999px; }
      .scene-m-sheet .m-sheet { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }

      /* ---------- imza: hero görselinde kabarcık dizisi + mercan öbeği ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px;
        box-shadow: var(--shadow); overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image:
          radial-gradient(circle at 22% 74%, transparent 0 22px, color-mix(in srgb, var(--ink) 16%, transparent) 22px 23px, transparent 23px),
          radial-gradient(circle at 38% 46%, transparent 0 13px, color-mix(in srgb, var(--ink) 14%, transparent) 13px 14px, transparent 14px),
          radial-gradient(circle at 52% 26%, transparent 0 7px, color-mix(in srgb, var(--ink) 12%, transparent) 7px 8px, transparent 8px),
          radial-gradient(circle at 70% 36%, transparent 0 4px, color-mix(in srgb, var(--accent) 40%, transparent) 4px 5px, transparent 5px);
      }
      .hero-visual::after {
        content: ''; position: absolute; right: -16%; bottom: -30%; width: 76%; height: 70%;
        border-radius: 46% 54% 52% 48% / 58% 42% 58% 42%;
        background: radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--accent) 24%, transparent) 0%, transparent 72%);
        pointer-events: none;
      }

      /* ---------- landing: su üstü ışığı (statik) + alt kabarcık bandı ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: -10vw; top: -20vh; width: 52vw; height: 52vw;
        border-radius: 50%;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 70%);
        opacity: .5; pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 12vh;
        background-image: radial-gradient(circle, color-mix(in srgb, var(--ink) 14%, transparent) 2px, transparent 2px);
        background-size: 34px 34px;
        -webkit-mask-image: linear-gradient(transparent 0%, var(--ink) 100%);
        mask-image: linear-gradient(transparent 0%, var(--ink) 100%);
        pointer-events: none;
      }

      /* ---------- dashboard: bölge dağılımı + gözlem listesi ---------- */
      body.scene-dashboard .kpis { gap: 20px; }
      body.scene-dashboard .kpi { border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px; }
      body.scene-dashboard .side { background: var(--bg-2); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 20ch; }
        h2 { font-size: 22px; }
        .lede { font-size: 15px; }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 18px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; gap: 12px; }
        body.scene-landing .sig::before { opacity: .3; }
        body.scene-landing .sig::after { height: 8vh; }
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
          /* imza hero: mercan dalları + resif katmanı */
          .hero-visual { min-height: 360px; padding: 20px; background: radial-gradient(120% 100% at 80% 100%, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 62%), var(--bg-2); }
          .visual-card { width: 100%; min-height: 300px; border-radius: 22px 22px 6px 22px; }
          .visual-rows { margin-top: auto; }
          .visual-row { border-radius: 999px; }
          .visual-row .sq { border-radius: 999px 999px 999px 4px; }
          .hero-visual::after {
            content: ''; position: absolute; right: 12%; bottom: 8%; width: 42%; height: 46%; pointer-events: none; opacity: .5;
            background: radial-gradient(60% 60% at 50% 100%, color-mix(in srgb, var(--accent) 40%, transparent) 0 32%, transparent 33%),
              radial-gradient(50% 50% at 20% 90%, color-mix(in srgb, var(--accent) 30%, transparent) 0 30%, transparent 31%);
          }
    `,
  },
};
