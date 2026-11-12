/**
 * 149 · Boutique Hotel — shots.config fragment
 *
 * İmza: tam kanama oda fotoğrafı + ısınan scrim · terracotta ince çizgi · 4 hücreli mono künye şeridi
 * Yalnız var(--...) kullanır; hard-coded renk/gölge/radius yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Playfair 400 başlık · Nunito gövde · IBM Plex künye ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: none; }
      h1 { font-size: 46px; line-height: 1.12; letter-spacing: 0; max-width: 20ch; }
      h2 { font-size: 30px; line-height: 1.2; letter-spacing: 0; max-width: 28ch; }
      h3 { font-family: var(--font-display); font-weight: 400; font-size: 21px; line-height: 1.3; max-width: 32ch; }
      h4 { font-family: var(--font-body); font-weight: 700; font-size: 15px; line-height: 1.35; letter-spacing: 0; }
      h1 em, h2 em { font-style: italic; font-weight: 700; color: var(--accent); }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.65; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
      }
      .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b { font-family: var(--font-display); font-weight: 400; letter-spacing: 0; }
      .kpi .v, .kpi .num-big { font-size: 32px; line-height: 1.1; }
      .trow .num { font-size: 12px; letter-spacing: .12em; }

      /* ---------- nav: ince çizgi, terracotta aktif ---------- */
      .nav { height: 68px; padding: 0 28px; background: var(--bg-2); border: 0; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .brand { font-family: var(--font-display); font-weight: 400; font-size: 18px; letter-spacing: .16em; text-transform: uppercase; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: -24px; height: 1px; background: var(--accent); }

      /* ---------- yüzeyler: 1px çerçeve, radius 10px, gölge yok ---------- */
      .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      }
      .table { overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .side { background: var(--bg-2); border-right: 1px solid var(--line); }
      .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 22px; position: relative; }
      .modal, .drawer, .menu {
        border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
        box-shadow: var(--shadow); border-radius: var(--radius-lg); background: var(--surface);
        -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
      }
      .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

      /* ---------- kontroller ---------- */
      .btn {
        font-family: var(--font-body); font-weight: 700; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
        min-height: 48px; padding: 12px 24px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
        transition: background-color 150ms ease, transform 150ms ease;
      }
      .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid color-mix(in srgb, var(--accent) 70%, transparent); color: var(--accent); }
      .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .btn:active { transform: translateY(1px); }
      .btn.sm { min-height: 32px; padding: 6px 12px; font-size: 10px; }
      .field, input, select, textarea {
        min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 16px;
      }
      .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .field.err { border-color: var(--danger); }
      .chip {
        height: 24px; padding: 0 10px; border-radius: var(--radius);
        background: transparent; border: 1px solid color-mix(in srgb, var(--accent) 60%, transparent);
        color: var(--accent); font-size: 10px; letter-spacing: .18em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 50%; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
      .fab { box-shadow: var(--shadow); }
      .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
      .opt.round .box { border-radius: 999px; }
      .track { background: var(--bg-2); border-radius: 1px; height: 5px; box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); border-radius: 1px; height: 5px; }
      .bar { border-radius: 1px; }
      .proof li::before { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
      .tabbar div.on { color: var(--accent); }
      .scene-mobile .tabs span { border-radius: var(--radius); }

      /* ---------- hero: oda fotoğrafı + ısınan scrim ---------- */
      .hero-media { position: relative; border-radius: 0; overflow: hidden; background: var(--bg-2); border: 0; }
      .hero-photo { filter: saturate(1.02) brightness(.82) sepia(.1); }
      .hero-media-scrim {
        background:
          linear-gradient(180deg, rgba(22,17,12,.10) 0%, rgba(22,17,12,.34) 48%, rgba(22,17,12,.80) 100%),
          linear-gradient(90deg, rgba(22,17,12,.66) 0%, rgba(22,17,12,.12) 56%, rgba(22,17,12,0) 100%);
      }
      .hero-fullbleed { background: var(--bg-2); }
      .hero-media-cap { color: var(--ink-soft); }
      .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }

      /* ---------- terracotta ince çizgi: bölüm başlığı üstünde 28px ---------- */
      .sec-head > *:first-child::before {
        content: ''; display: block; width: 28px; height: 1px; background: var(--accent); margin-bottom: 12px;
      }

      /* ---------- dashboard: rezervasyon tablosu ---------- */
      body.scene-dashboard .kpis { gap: 12px; }
      body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
      body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }
      body.scene-dashboard .trow:hover { background: var(--surface-2); }

      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 18ch; }
        h2 { font-size: 24px; }
        h3 { font-size: 19px; }
        .lede { font-size: 15px; }
        .nav { height: 56px; padding: 0 16px; }
        .nav-links { display: none; }
        .hero-fullbleed .hero-copy { max-width: 100%; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .5; color: var(--ink-soft); background: var(--surface-2); border-color: var(--line); }
      .btn { white-space: nowrap; }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      body.scene-landing .sig { z-index: -1; }
      .hero-visual { min-height: 340px; }
      .proof li { color: var(--ink-soft); }
    `,
  scenes: {
    landing: `
      /* hero imzası: sol metin + altta 4 hücreli künye şeridi */
      .hero-fullbleed .hero-copy { max-width: 540px; }
      .hero-fullbleed .cta-row { gap: 10px; margin-top: 22px; }
      .hero-fullbleed::after {
        content: 'GPS 37.03 · 27.42'; position: absolute; right: 24px; bottom: 20px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .2em; color: var(--ink-soft);
        pointer-events: none;
      }
      .hero-fullbleed .proof {
        margin-top: 26px; gap: 0; border-top: 1px solid var(--line); padding-top: 12px;
      }
      .hero-fullbleed .proof li { flex: 1 1 0; border-right: 1px solid var(--line); padding-right: 12px; font-size: 10px; }
      .hero-fullbleed .proof li:last-child { border-right: 0; }
    `,
  },
};
