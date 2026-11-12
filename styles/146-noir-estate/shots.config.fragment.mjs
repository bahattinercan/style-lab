/**
 * 146 · Noir Estate — shots.config fragment
 *
 * İmza: cam hap gezinme çubuğu · altın 1px ince çizgi · gece fotoğrafı scrim · 16px kart radius
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Cormorant 300 başlık · Jost gövde · JetBrains künye ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3 { font-family: var(--font-display); font-weight: 300; text-transform: none; }
      h1 { font-size: 56px; line-height: 1.06; letter-spacing: .01em; max-width: 18ch; }
      h2 { font-size: 38px; line-height: 1.12; letter-spacing: .01em; max-width: 24ch; }
      h3 { font-size: 24px; line-height: 1.2; font-weight: 500; max-width: 28ch; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; letter-spacing: 0; }
      h1 em, h2 em { font-style: normal; color: var(--accent); }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 56ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .22em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); display: inline-flex; align-items: center; gap: 10px; }
      .eyebrow::before { content: ''; width: 24px; height: 1px; background: var(--accent); letter-spacing: 0; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b { font-family: var(--font-display); font-weight: 500; letter-spacing: 0; }
      .kpi .v, .kpi .num-big { font-size: 28px; line-height: 1.1; letter-spacing: 0; }
      .trow .num { font-family: var(--font-mono); font-size: 13px; letter-spacing: 0; }

      /* ---------- cam hap gezinme çubuğu ---------- */
      .nav {
        height: 64px; margin: 16px 16px 0; padding: 0 20px; border-radius: 999px;
        background: color-mix(in srgb, var(--bg) 55%, transparent);
        border: 1px solid var(--line); border-bottom-color: var(--line);
        -webkit-backdrop-filter: blur(var(--blur)) saturate(1.25);
        backdrop-filter: blur(var(--blur)) saturate(1.25);
        box-shadow: var(--shadow);
      }
      .brand { font-family: var(--font-display); font-weight: 500; font-size: 17px; letter-spacing: .18em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .04em; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -22px; height: 1px; background: var(--accent);
      }

      /* ---------- yüzeyler: gölgesiz, 1px çerçeve ---------- */
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
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 24px; position: relative; }
      .modal, .drawer, .menu {
        border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
        box-shadow: var(--shadow); border-radius: var(--radius-lg);
        background: color-mix(in srgb, var(--surface) 92%, transparent);
        -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
      }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

      /* ---------- kontroller ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 600; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
        min-height: 48px; padding: 12px 26px; border-radius: var(--radius); border: 1px solid transparent;
        box-shadow: 0 10px 24px -16px rgba(0,0,0,.9); transition: transform 140ms ease, box-shadow 140ms ease;
      }
      .btn:not(.ghost):not(.soft):not(.sm) {
        background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 92%, var(--ink)), var(--accent));
        color: var(--accent-ink);
      }
      .btn.ghost { background: transparent; border: 1px solid color-mix(in srgb, var(--ink) 28%, transparent); color: var(--ink); box-shadow: none; }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); border-color: color-mix(in srgb, var(--accent) 45%, transparent); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 34px; padding: 7px 14px; font-size: 10px; letter-spacing: .10em; }
      .field, input, select, textarea {
        min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 15px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
        outline: 2px solid var(--accent); outline-offset: 1px; border-color: color-mix(in srgb, var(--accent) 55%, transparent);
      }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 10px; border-radius: 999px;
        background: color-mix(in srgb, var(--bg) 62%, transparent); border: 1px solid var(--line);
        color: var(--ink-soft); font-size: 10px; letter-spacing: .16em;
        -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: 50%; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 500; }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 50%; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .fab { box-shadow: var(--shadow); }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--bg-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 999px; height: 6px; }
      .bar { border-radius: 2px 2px 0 0; }
      .proof li::before { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- hero: gece fotoğrafı + scrim ---------- */
      .hero-media { position: relative; border-radius: 0; overflow: hidden; background: var(--bg-2); border: 0; }
      .hero-photo { filter: saturate(.88) brightness(.68) contrast(1.06) sepia(.16); }
      .hero-media-scrim {
        background:
          linear-gradient(180deg, rgba(8,6,5,.18) 0%, rgba(8,6,5,.30) 42%, rgba(8,6,5,.78) 100%),
          linear-gradient(90deg, rgba(8,6,5,.72) 0%, rgba(8,6,5,.10) 58%, rgba(8,6,5,0) 100%);
      }
      .hero-fullbleed { background: var(--bg-2); }
      .hero-fullbleed .hero-copy { color: var(--ink); }
      .hero-media-cap { color: var(--ink-soft); }
      .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }

      /* ---------- altın ince çizgi: bölüm başlığı üstünde 32px ---------- */
      .sec-head > *:first-child::before,
      body.scene-landing .sec-head > *:first-child::before {
        content: ''; display: block; width: 32px; height: 1px; background: var(--accent); margin-bottom: 14px;
      }

      /* ---------- dashboard: sert bölmeler, tabular para ---------- */
      body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
      body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      body.scene-dashboard .kpi:last-child { border-right: 0; }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        h2 { font-size: 26px; }
        h3 { font-size: 19px; }
        .lede { font-size: 14px; }
        .nav { height: 56px; margin: 8px 8px 0; padding: 0 12px; }
        .nav-links { display: none; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
        body.scene-dashboard .kpi:last-child { border-bottom: 0; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .55; color: var(--ink-soft); background: var(--surface-2); border-color: var(--line); box-shadow: none; }
      .btn { white-space: nowrap; }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      body.scene-landing .sig { z-index: -1; }
      .hero-visual { min-height: 360px; }
      .proof li { color: var(--ink-soft); }
    `,
  scenes: {
    landing: `
      /* hero imzası: altın künye çizgisi + cam filtre paneli */
      .hero-fullbleed .hero-copy { max-width: 560px; }
      .hero-fullbleed .cta-row { gap: 12px; margin-top: 22px; }
      .hero-fullbleed .proof { margin-top: 26px; gap: 18px; }
      .hero-fullbleed .proof li { font-size: 10px; letter-spacing: .18em; }
      .hero-fullbleed::after {
        content: ''; position: absolute; left: 24px; right: 24px; bottom: 0; height: 1px;
        background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 60%, transparent), transparent 62%);
        pointer-events: none;
      }
    `,
  },
};
