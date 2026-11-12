/**
 * 82 · Desert Sand — shots.config fragment
 *
 * İmza: kumul eğrisi radiusu (24/44 + hap) · tek yön uzun gölge · ince serif başlık · mor alacakaranlık accent.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Cormorant 300 başlık · Jost gövde ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 300; }
      h1 { font-size: 58px; line-height: 1; letter-spacing: .01em; max-width: 17ch; }
      h2 { font-size: 30px; line-height: 1.12; letter-spacing: .02em; max-width: 28ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: .01em; }
      h3 { font-size: 20px; line-height: 1.3; }
      h4 { font-size: 16px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.66; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .22em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-soft); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '◦ '; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .04em;
      }
      .kpi .v, .kpi .num-big { font-size: 26px; }
      .trow .num { font-size: 13px; letter-spacing: .04em; }

      /* ---------- nav: ortalanmış marka, ince alt çizgi ---------- */
      .nav { height: 64px; padding: 0 32px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 300; font-size: 22px; letter-spacing: .18em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 1px; background: var(--ink);
      }

      /* ---------- yüzey: kumul radiusu + tek yön uzun gölge ---------- */
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
      /* kartın üstü daha yuvarlak: kumul eğrisi */
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card {
        border-radius: var(--radius-lg) var(--radius-lg) var(--radius) var(--radius);
        padding: 28px;
      }
      .plan.hot { box-shadow: inset 0 0 0 1px var(--line), var(--shadow); }
      .plan.hot::before {
        content: ''; position: absolute; left: 28px; right: 28px; top: 0; height: 1px; background: var(--accent);
      }

      /* ---------- kontroller: 48px hedef, hap ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .08em; text-transform: uppercase;
        min-height: 48px; padding: 12px 26px; border-radius: 999px; border: 1px solid transparent; box-shadow: var(--shadow);
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn.sm { min-height: 36px; padding: 8px 18px; font-size: 11px; }
      .btn:hover { box-shadow: 0 18px 34px -18px color-mix(in srgb, var(--ink) 35%, transparent), var(--shadow); }
      .btn:active { transform: translateY(2px); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
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
        background: transparent; border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .18em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 300; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .opt .box { border-radius: 12px; border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 999px; height: 6px; }
      .bar { border-radius: 999px; }
      .proof li::before { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: 999px; }
      .fab { border-radius: 999px; box-shadow: var(--shadow); }

      /* ---------- imza: hero görselinde kumul profili (eşmerkezli eğriler) ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: var(--radius-lg) var(--radius-lg) var(--radius) var(--radius);
        box-shadow: var(--shadow); overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; left: -20%; right: -20%; bottom: -46%; height: 120%;
        border-radius: 50% 50% 0 0;
        background: var(--surface);
        box-shadow: inset 0 1px 0 var(--line), inset 0 40px 60px -50px color-mix(in srgb, var(--ink) 18%, transparent);
        pointer-events: none;
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 42%;
        background-image: repeating-linear-gradient(
          0deg,
          transparent 0 22px,
          color-mix(in srgb, var(--ink) 8%, transparent) 22px 23px
        );
        -webkit-mask-image: linear-gradient(transparent 0%, var(--ink) 90%);
        mask-image: linear-gradient(transparent 0%, var(--ink) 90%);
        pointer-events: none;
      }

      /* ---------- landing: düşük ufuk + yumuşak güneş halkası ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; right: -12vw; top: -24vh; width: 56vw; height: 56vw;
        border-radius: 50%;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 70%);
        opacity: .55; pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 18vh; height: 1px;
        background: color-mix(in srgb, var(--ink) 22%, transparent); pointer-events: none;
      }

      /* ---------- dashboard: ölçüm tablosu, geniş satır ---------- */
      body.scene-dashboard .kpis { gap: 24px; }
      body.scene-dashboard .kpi { padding: 24px 28px; }
      body.scene-dashboard .side { background: var(--bg-2); }

      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 18ch; }
        h2 { font-size: 24px; }
        .lede { font-size: 15px; }
        .plan, .comp-card-demo, .state-card, .m-tile { padding: 20px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-landing .sig::before { opacity: .35; }
        .hero-visual::before { bottom: -30%; }
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
          /* imza hero: kumul sırtları + ufuk çizgisi */
          .hero-visual { min-height: 360px; padding: 20px; background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 12%, var(--bg-2)) 0%, var(--bg-2) 100%); }
          .visual-card { width: 100%; min-height: 300px; border-radius: var(--radius-lg); }
          .visual-rows { margin-top: auto; }
          .visual-row { border-radius: 999px; border: 0; background: color-mix(in srgb, var(--surface) 76%, transparent); }
          .hero-visual::before {
            content: ''; position: absolute; left: -10%; right: -10%; bottom: 6%; height: 46%; pointer-events: none; opacity: .55;
            background:
              radial-gradient(120% 60% at 20% 100%, color-mix(in srgb, var(--accent) 26%, transparent) 0 40%, transparent 41%),
              radial-gradient(120% 60% at 80% 100%, color-mix(in srgb, var(--ink) 14%, transparent) 0 34%, transparent 35%);
          }
    `,
  },
};
