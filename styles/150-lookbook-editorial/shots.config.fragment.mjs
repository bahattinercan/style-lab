/**
 * 150 · Lookbook Editorial — shots.config fragment
 *
 * İmza: 104px fasikül rakamı · satır maskesi · kiremit 1px çizgi · gölgesiz 4px kart
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Fraunces display · Inter gövde · JetBrains etiket ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: none; }
      h1 { font-size: 62px; line-height: 1.04; letter-spacing: -.01em; max-width: 20ch; }
      h2 { font-size: 38px; line-height: 1.14; letter-spacing: 0; max-width: 26ch; }
      h3 { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.3; max-width: 34ch; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; line-height: 1.4; letter-spacing: .02em; text-transform: uppercase; }
      h1 em, h2 em { font-style: italic; font-weight: 700; color: var(--accent); }
      .lede { font-family: var(--font-body); font-size: 17px; line-height: 1.7; max-width: 56ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .18em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); display: inline-flex; align-items: center; gap: 12px; }
      .eyebrow::before { content: ''; width: 40px; height: 1px; background: var(--accent); letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; }
      .kpi .v, .kpi .num-big { font-size: 38px; line-height: 1.05; }
      .trow .num { font-size: 12px; letter-spacing: .1em; }

      /* ---------- nav: ince çizgi, kiremit aktif ---------- */
      .nav { height: 64px; padding: 0 32px; background: var(--bg); border: 0; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 400; font-size: 18px; letter-spacing: .14em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: .02em; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: -22px; height: 1px; background: var(--accent); }

      /* ---------- yüzeyler: 1px çizgi, radius 4px, gölge yok ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 0; }
      .divider { height: 1px; background: var(--line); }
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 24px; position: relative; }
      .modal, .drawer, .menu { border: 1px solid var(--ink); box-shadow: none; border-radius: var(--radius-lg); background: var(--surface); }
      .plan.hot { box-shadow: inset 0 1px 0 var(--accent); }

      /* ---------- kontroller: radius 0, alt çizgi ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
        min-height: 44px; padding: 10px 24px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
        transition: background-color 110ms ease, transform 110ms ease;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 0; color: var(--ink); position: relative; padding: 10px 0; }
      .btn.ghost::after { content: ''; position: absolute; left: 0; right: 0; bottom: 6px; height: 1px; background: var(--accent); transition: height 110ms ease; }
      .btn.ghost:hover::after { height: 2px; }
      .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .btn.soft:hover { border-color: var(--ink); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 30px; padding: 6px 14px; font-size: 10px; }
      .field, input, select, textarea {
        min-height: 52px; border: 0; border-bottom: 1px solid var(--line); border-radius: 0;
        background: transparent; color: var(--ink); font-family: var(--font-body); font-size: 17px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: none; border-bottom-color: var(--accent); }
      .field.err { border-bottom-color: var(--danger); }
      .chip {
        height: 22px; padding: 0; border-radius: 0; background: transparent; border: 0;
        color: var(--accent); font-size: 11px; letter-spacing: .18em;
        display: inline-flex; align-items: center; gap: 10px;
      }
      .chip::before { content: ''; width: 16px; height: 1px; background: var(--accent); }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); padding: 0 8px; }
      .chip.accent::before { display: none; }
      .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 0; border: 1px solid var(--line); background: transparent; box-shadow: none; }
      .opt .box { border-radius: 0; border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: transparent; border-radius: 0; height: 1px; box-shadow: none; border-bottom: 1px solid var(--line); }
      .track i { background: var(--accent); border-radius: 0; height: 1px; }
      .bar { border-radius: 0; }
      .proof li::before { width: 12px; height: 1px; border-radius: 0; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: 0; }

      /* ---------- imza: taşan fasikül rakamı ---------- */
      .hero-visual { position: relative; background: transparent; border: 1px solid var(--line); border-radius: 0; overflow: visible; min-height: 380px; }
      .hero-visual::before {
        content: '01'; position: absolute; left: -18px; top: -46px;
        font-family: var(--font-display); font-weight: 400; font-size: 104px; line-height: .8;
        letter-spacing: -.04em; color: var(--ink-faint); opacity: .4; pointer-events: none;
      }
      body.scene-landing .hero .eyebrow { margin-bottom: 8px; }
      body.scene-landing .sec-head { border-top: 1px solid var(--line); padding-top: 18px; }

      /* ---------- dashboard: koleksiyon listesi ---------- */
      body.scene-dashboard .kpis { gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
      body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      body.scene-dashboard .kpi:last-child { border-right: 0; }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        h2 { font-size: 26px; }
        h3 { font-size: 20px; }
        .lede { font-size: 16px; }
        .nav { height: 54px; padding: 0 16px; }
        .nav-links { display: none; }
        .hero-visual::before { font-size: 56px; left: 0; top: -24px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
        body.scene-dashboard .kpi:last-child { border-bottom: 0; }
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
      /* hero imzası: tipografi ağırlıklı, sağda tek dikey fotoğraf */
      .hero .hero-copy { max-width: 640px; }
      .hero .cta-row { gap: 22px; margin-top: 26px; align-items: baseline; }
      .hero .proof { margin-top: 32px; gap: 20px; border-top: 1px solid var(--line); padding-top: 14px; }
      .hero .proof li { font-size: 11px; }
      .hero-visual { min-height: 420px; }
      /* taşan fasikül rakamı: boşluğu doldurur, bilgi taşımadığı için aria-hidden */
      .hero { position: relative; }
      .hero::after {
        content: '01'; position: absolute; right: 2vw; top: 8%;
        font-family: var(--font-display); font-weight: 400; font-size: clamp(120px, 20vw, 260px);
        line-height: .8; letter-spacing: -.04em; color: var(--ink-faint); opacity: .18;
        pointer-events: none; user-select: none;
      }
    `,
  },
};
