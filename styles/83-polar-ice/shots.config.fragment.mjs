/**
 * 83 · Polar Ice — shots.config fragment
 *
 * İmza: gölgesiz buz plakası · iki radius (2px / 10px) · ölçüm üçlüsü · kristal örgü · eşik çizgisi.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Space Grotesk başlık · Inter gövde · Space Mono ölçüm ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 700; }
      h1 { font-size: 40px; line-height: 1.08; letter-spacing: -.02em; max-width: 24ch; }
      h2 { font-size: 24px; line-height: 1.18; letter-spacing: -.01em; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
      h3 { font-size: 18px; line-height: 1.3; }
      h4 { font-size: 15px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 68ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-soft); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '✳ '; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 24px; }
      .trow .num { font-size: 13px; }

      /* ---------- nav ---------- */
      .nav { height: 48px; padding: 0 24px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 700; font-size: 17px; letter-spacing: -.02em; text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 2px; background: var(--accent);
      }

      /* ---------- gölgesiz plaka: 1px çizgi + 2px ton ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none; backdrop-filter: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .kpi { padding: 14px 16px; }
      .comp-card-demo, .m-tile, .state-card { padding: 18px; }
      .plan { padding: 20px; }
      /* seçili plaka: 1px buz halkası (gölge değil) */
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }
      .plan.hot::before {
        content: ''; position: absolute; left: 0; right: 0; top: 0; height: 2px;
        background: var(--accent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
      }

      /* ---------- kontroller: 2px radius iç kutu, 40px görsel ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: 0;
        min-height: 40px; padding: 10px 18px; border-radius: var(--radius);
        border: 1px solid transparent; box-shadow: none; text-transform: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--accent); color: var(--accent); }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn:active { transform: translateY(1px); }
      .field, input, select, textarea {
        min-height: 40px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-mono); font-size: 14px; letter-spacing: .02em;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 1px;
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 20px; padding: 0 8px; border-radius: var(--radius);
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .16em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 2px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 2px; height: 6px; }
      .bar { border-radius: 1px; }
      .proof li::before { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- imza: buz plakası + kristal örgü + eşik çizgisi ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none; overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image:
          linear-gradient(60deg, transparent 0 47%, color-mix(in srgb, var(--accent) 16%, transparent) 47% 48%, transparent 48% 100%),
          linear-gradient(-60deg, transparent 0 47%, color-mix(in srgb, var(--accent) 16%, transparent) 47% 48%, transparent 48% 100%);
        background-size: 48px 84px;
        opacity: .9;
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 0; right: 0; top: 58%; height: 1px;
        background: color-mix(in srgb, var(--warn) 55%, transparent);
        pointer-events: none;
      }

      /* ---------- landing: üstte ince buz çizgisi, sağda çatlak deseni ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; right: 0; top: 0; height: 1px;
        background: color-mix(in srgb, var(--accent) 45%, transparent); pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: -8vw; top: -10vh; width: 44vw; height: 44vw;
        background-image: repeating-linear-gradient(
          58deg,
          color-mix(in srgb, var(--accent) 12%, transparent) 0 1px,
          transparent 1px 34px
        );
        -webkit-mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 74%);
        mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 74%);
        pointer-events: none;
      }

      /* ---------- dashboard: 4×3 simetrik veri ızgarası ---------- */
      body.scene-dashboard .kpis { gap: 12px; }
      body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
      body.scene-dashboard .kpi .v { font-variant-numeric: tabular-nums; }
      body.scene-dashboard .side { background: var(--bg-2); }

      @media (max-width: 900px) {
        h1 { font-size: 26px; max-width: 22ch; }
        h2 { font-size: 20px; }
        .lede { font-size: 14px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; gap: 8px; }
        .table { overflow-x: auto; }
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
          /* imza hero: buz katmanları + kristal çatlak */
          .hero-visual { min-height: 360px; padding: 20px; background: linear-gradient(200deg, color-mix(in srgb, var(--accent) 10%, var(--bg-2)) 0%, var(--surface) 100%); }
          .visual-card { width: 100%; min-height: 300px; background: color-mix(in srgb, var(--surface) 84%, transparent); }
          .visual-rows { margin-top: auto; }
          .visual-row { border-radius: 2px; }
          .visual-row .sq { border-radius: 2px; transform: rotate(45deg); width: 14px; height: 14px; }
          .hero-visual::before {
            content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .35;
            background-image: linear-gradient(60deg, transparent 0 46%, color-mix(in srgb, var(--accent) 40%, transparent) 46% 46.4%, transparent 46.4% 100%),
              linear-gradient(-60deg, transparent 0 62%, color-mix(in srgb, var(--ink) 18%, transparent) 62% 62.3%, transparent 62.3% 100%);
          }
    `,
  },
};
