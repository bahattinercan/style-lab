/**
 * 81 · Forest Bark — shots.config fragment
 *
 * İmza: kabuk dokulu koyu zemin · iki serif hiyerarşi · tan accent · damar çizgisi · hap chip · ölçü çubuğu.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Lora başlık · EB Garamond gövde · mono ölçü ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; }
      h1 { font-size: 52px; line-height: 1.04; letter-spacing: -.01em; max-width: 19ch; }
      h2 { font-size: 32px; line-height: 1.14; max-width: 26ch; }
      h3 { font-size: 22px; line-height: 1.2; }
      h4 { font-size: 17px; line-height: 1.3; }
      .lede { font-family: var(--font-body); font-size: 17px; line-height: 1.7; max-width: 64ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .18em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-soft); }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: '❧ '; color: var(--ink-faint); letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num, .metric b {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 24px; }
      .trow .num { font-size: 14px; text-transform: none; letter-spacing: .02em; }

      /* ---------- nav: 1px alt çizgi, aktifte 2px tan ---------- */
      .nav { height: 56px; padding: 0 28px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 600; font-size: 19px; letter-spacing: -.01em; text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 16px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 2px; background: var(--accent);
      }

      /* ---------- yüzey: ton katmanı + 1px çizgi, yumuşak gölge ---------- */
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

      /* damar çizgisi: yalnız ilk kartta (ekran başına 1) */
      .kpi:first-child::before, .plan:first-child::before {
        content: ''; position: absolute; left: 22px; top: 0; width: 1px; height: 22px;
        background: var(--line); pointer-events: none;
      }
      .kpi, .plan { position: relative; }

      /* ---------- kontroller ---------- */
      .btn {
        font-family: var(--font-display); font-weight: 600; font-size: 14px; letter-spacing: 0;
        min-height: 44px; padding: 10px 20px; border-radius: var(--radius);
        border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn:active { transform: translateY(1px); }
      .field, input, select, textarea {
        min-height: 44px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink);
        font-family: var(--font-body); font-size: 15px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 2px; border-left: 2px solid var(--accent);
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 10px; border-radius: 999px;
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 11px; letter-spacing: .16em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 600; }
      .avatar, .avatar-lg, .empty-ic { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); }
      .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .opt .box { border-radius: 6px; border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }

      /* ölçü çubuğu: türün boy aralığı, 4px, accent dolgu */
      .track { background: var(--surface-2); border-radius: 999px; height: 4px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 999px; height: 4px; }
      .bar { border-radius: 999px; background: var(--accent); }
      .bar:not(.accent) { background: var(--ink-soft); }
      .proof li::before { width: 7px; height: 7px; border-radius: 999px; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }

      /* ---------- imza: hero görselinde kabuk damarı + yumuşak katman ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: var(--shadow); overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: repeating-linear-gradient(
          97deg,
          transparent 0 26px,
          color-mix(in srgb, var(--accent) 14%, transparent) 26px 27px,
          transparent 27px 54px
        );
        -webkit-mask-image: radial-gradient(70% 70% at 40% 50%, var(--ink) 0%, transparent 78%);
        mask-image: radial-gradient(70% 70% at 40% 50%, var(--ink) 0%, transparent 78%);
        opacity: .9;
      }
      .hero-visual::after {
        content: ''; position: absolute; right: -12%; bottom: -18%; width: 62%; height: 70%;
        border-radius: 46% 54% 52% 48% / 58% 42% 58% 42%;
        background: radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 72%);
        pointer-events: none;
      }

      /* ---------- landing: sol üstte yumuşak ışık lekesi (yeşil sızıntı), yazı yok ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: -12vw; top: -18vh; width: 48vw; height: 48vw;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--ok) 30%, transparent) 0%, transparent 70%);
        opacity: .28; pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 3px;
        background: color-mix(in srgb, var(--accent) 30%, transparent); pointer-events: none;
      }

      /* ---------- dashboard: mevsim şeridi + ölçü tablosu ---------- */
      body.scene-dashboard .kpis { gap: 16px; }
      body.scene-dashboard .side { background: var(--bg-2); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 20ch; }
        h2 { font-size: 24px; }
        .lede { font-size: 16px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-landing .sig::before { opacity: .18; }
        .hero-visual::before { opacity: .6; }
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
          /* imza hero: kabuk damarı + yaş halkası sayacı */
          .hero-visual { min-height: 360px; padding: 20px; }
          .visual-card { width: 100%; min-height: 300px; background: color-mix(in srgb, var(--surface) 92%, transparent); }
          .visual-rows { margin-top: auto; }
          .visual-row { border-bottom: 1px dashed color-mix(in srgb, var(--accent) 30%, transparent); border-radius: 0; background: transparent; }
          .visual-row .num { font-size: 13px; letter-spacing: .04em; }
          .hero-visual::after { content: '◍ 128 halka'; position: absolute; left: 18px; bottom: 12px; font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
    `,
  },
};
