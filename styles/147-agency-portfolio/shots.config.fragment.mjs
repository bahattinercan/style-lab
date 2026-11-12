/**
 * 147 · Agency Portfolio — shots.config fragment
 *
 * İmza: dev Archivo Black başlık · mono indeks numarası · 1px çizgi ızgara · gölgesiz 6px kart
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
      /* ---------- tipografi: Archivo Black display · Inter gövde · Space Mono indeks ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: none; }
      h1 { font-size: 72px; line-height: 1.02; letter-spacing: -.02em; max-width: 22ch; }
      h2 { font-size: 36px; line-height: 1.1; letter-spacing: -.01em; max-width: 28ch; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 24px; line-height: 1.2; letter-spacing: -.01em; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 16px; line-height: 1.3; letter-spacing: 0; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 60ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .14em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .eyebrow::after { content: ' /'; letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b {
        font-family: var(--font-display); font-weight: 400; letter-spacing: -.02em;
      }
      .kpi .v, .kpi .num-big { font-size: 40px; line-height: 1; }
      .trow .num { font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }

      /* ---------- nav: 1px siyah alt çizgi, gölge yok ---------- */
      .nav { height: 60px; padding: 0 32px; background: var(--bg); border: 0; border-bottom: 1px solid var(--ink); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 400; font-size: 16px; letter-spacing: -.02em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); font-weight: 600; position: relative; }
      .nav-links a:first-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: -20px; height: 2px; background: var(--accent); }

      /* ---------- yüzeyler: 1px çizgi, radius 6px, gölge yok ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .trow:hover { background: var(--bg-2); position: relative; }
      .trow:hover::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent); }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--ink); }
      .divider { height: 1px; background: var(--line); }
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 20px; position: relative; }
      .modal, .drawer, .menu { border: 1px solid var(--ink); box-shadow: none; border-radius: var(--radius-lg); background: var(--surface); }
      .plan.hot { box-shadow: inset 0 2px 0 var(--accent); }

      /* ---------- kontroller: 2px radius, keskin ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
        min-height: 44px; padding: 10px 22px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
        transition: background-color 120ms ease, color 120ms ease, transform 120ms ease;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
      .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .btn.ghost:hover { background: var(--ink); color: var(--bg); }
      .btn.soft:hover { background: var(--bg-2); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 30px; padding: 6px 12px; font-size: 10px; letter-spacing: .1em; }
      .field, input, select, textarea {
        min-height: 48px; border: 1px solid var(--ink); border-radius: var(--radius);
        background: var(--surface); color: var(--ink); font-family: var(--font-body); font-size: 16px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 22px; padding: 0 8px; border-radius: var(--radius);
        background: transparent; border: 1px solid var(--line); color: var(--ink-soft);
        font-size: 10px; letter-spacing: .14em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); box-shadow: none; }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--ink); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--bg-2); border-radius: 2px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 2px; height: 6px; }
      .bar { border-radius: 2px 2px 0 0; }
      .proof li::before { width: 8px; height: 1px; border-radius: 0; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- imza: indeks satırı + sağda büyük numara ---------- */
      .hero-visual { position: relative; background: var(--bg-2); border: 1px solid var(--ink); border-radius: var(--radius-lg); overflow: hidden; min-height: 360px; }
      .hero-visual::before {
        content: counter(indexitem, decimal-leading-zero);
        position: absolute; right: 18px; bottom: 8px;
        font-family: var(--font-display); font-size: 92px; line-height: 1;
        color: color-mix(in srgb, var(--accent) 40%, transparent);
        letter-spacing: -.04em;
      }
      body.scene-landing .sig::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: var(--line);
      }
      body.scene-landing .sec-head { border-bottom: 1px solid var(--ink); padding-bottom: 14px; }

      /* ---------- dashboard: indeks tablosu ---------- */
      body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
      body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      body.scene-dashboard .kpi:last-child { border-right: 0; }
      body.scene-dashboard .trow:nth-child(odd) { background: var(--bg-2); }

      @media (max-width: 900px) {
        h1 { font-size: 36px; max-width: 18ch; }
        h2 { font-size: 24px; }
        h3 { font-size: 19px; }
        .lede { font-size: 15px; }
        .nav { height: 52px; padding: 0 16px; }
        .nav-links { display: none; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
        body.scene-dashboard .kpi:last-child { border-bottom: 0; }
        .hero-visual::before { font-size: 56px; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .45; color: var(--ink-soft); border-color: var(--line); }
      .btn { white-space: nowrap; }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      body.scene-landing .sig { z-index: -1; }
      .proof li { color: var(--ink-soft); }
    `,
  scenes: {
    landing: `
      /* hero imzası: dev başlık + sağda indeks rayı */
      .hero .hero-copy { max-width: 720px; }
      .hero .cta-row { gap: 0; margin-top: 26px; }
      .hero .cta-row .btn { margin-right: -1px; }
      .hero .proof { margin-top: 30px; gap: 0; border-top: 1px solid var(--ink); }
      .hero .proof li { flex: 1 1 0; padding: 12px 0; border-right: 1px solid var(--line); font-size: 10px; }
      .hero .proof li:last-child { border-right: 0; }
    `,
  },
};
