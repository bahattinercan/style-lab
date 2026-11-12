/**
 * 126 · Marble Vein — shots.config fragment
 *
 * İmza: taş plaka (radius 2/6) · tek damar çizgisi · grafit accent · mono ölçü künyesi.
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Playfair 700 başlık · Inter gövde · mono künye ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 700; }
      h1 { font-size: 54px; line-height: 1.06; letter-spacing: -.01em; max-width: 18ch; }
      h2 { font-size: 30px; line-height: 1.16; max-width: 26ch; }
      h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
      h3 { font-size: 21px; line-height: 1.28; }
      h4 { font-size: 16px; line-height: 1.35; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.64; max-width: 62ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-faint); }
      .eyebrow { color: var(--ink-soft); }
      .eyebrow::before { content: '/ '; color: var(--accent); }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
      }
      .kpi .v, .kpi .num-big { font-size: 24px; }
      .trow .num { font-size: 13px; }

      /* ---------- nav ---------- */
      .nav { height: 56px; padding: 0 28px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 700; font-size: 20px; letter-spacing: -.01em; text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .02em; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -19px; height: 2px; background: var(--ink);
      }

      /* ---------- plaka: 1px çizgi, gölge yok ---------- */
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
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 24px; }
      .modal, .drawer, .menu { border: 1px solid var(--ink); box-shadow: var(--shadow); border-radius: var(--radius-lg); }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

      /* damar çizgisi: kart başlığının solunda 1px, ekran başına 1 */
      .kpi:first-child::before, .plan:first-child::before {
        content: ''; position: absolute; left: 24px; top: 0; width: 1px; height: 18px; background: var(--ink-faint);
      }
      .kpi, .plan { position: relative; }

      /* ---------- kontroller: 2px radius ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .02em;
        min-height: 44px; padding: 10px 20px; border-radius: var(--radius);
        border: 1px solid transparent; box-shadow: none; text-transform: none;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
      .btn:active { transform: translateY(1px); }
      .field, input, select, textarea {
        min-height: 44px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-body); font-size: 15px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 1px; border-bottom: 1px solid var(--ink);
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 22px; padding: 0 8px; border-radius: var(--radius);
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .16em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--surface-2); border-radius: 0; height: 4px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 0; height: 4px; }
      .bar { border-radius: 0; }
      .proof li::before { width: 6px; height: 6px; border-radius: 0; background: var(--ink); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }
      .fab { border-radius: var(--radius); box-shadow: var(--shadow); }

      /* ---------- imza: hero görselinde tek damar + plaka kesiti ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none; overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: -10% -6%; pointer-events: none;
        background-image:
          linear-gradient(72deg, transparent 0 46%, color-mix(in srgb, var(--ink) 26%, transparent) 46% 46.35%, transparent 46.35% 100%),
          linear-gradient(68deg, transparent 0 62%, color-mix(in srgb, var(--ink) 14%, transparent) 62% 62.4%, transparent 62.4% 100%),
          linear-gradient(80deg, transparent 0 28%, color-mix(in srgb, var(--ink) 10%, transparent) 28% 28.3%, transparent 28.3% 100%);
        -webkit-mask-image: radial-gradient(75% 75% at 45% 50%, var(--ink) 0%, transparent 82%);
        mask-image: radial-gradient(75% 75% at 45% 50%, var(--ink) 0%, transparent 82%);
      }
      .hero-visual::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px;
        background: var(--ink-faint); opacity: .5; pointer-events: none;
      }

      /* ---------- landing: tek ince damar, arka planda ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: linear-gradient(74deg, transparent 0 58%, color-mix(in srgb, var(--ink) 12%, transparent) 58% 58.2%, transparent 58.2% 100%);
        -webkit-mask-image: linear-gradient(transparent 0%, var(--ink) 40%, transparent 90%);
        mask-image: linear-gradient(transparent 0%, var(--ink) 40%, transparent 90%);
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 1px;
        background: var(--line); pointer-events: none;
      }

      /* ---------- dashboard: ölçü tablosu, sakin satırlar ---------- */
      body.scene-dashboard .kpis { gap: 16px; }
      body.scene-dashboard .side { background: var(--bg-2); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        h2 { font-size: 24px; }
        .lede { font-size: 15px; }
        .plan, .comp-card-demo, .state-card, .m-tile { padding: 18px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-landing .sig::before { opacity: .6; }
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
      /* hero imzası: mermer damarı — ince eğri damarlar + kesit yüzeyi */
      .hero-visual { position: relative; min-height: 360px; }
      .hero-visual::after {
        content: "KESİT A–A"; position: absolute; inset: 0; padding: 18px 20px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
        background:
          repeating-linear-gradient(74deg, color-mix(in srgb, var(--ink) 24%, transparent) 0 1px, transparent 1px 46px),
          repeating-linear-gradient(-62deg, color-mix(in srgb, var(--accent) 42%, transparent) 0 1px, transparent 1px 64px),
          radial-gradient(120% 80% at 20% 10%, color-mix(in srgb, var(--ink) 8%, transparent), transparent 70%);
        opacity: .9; pointer-events: none;
      }
    `,
  },
};
