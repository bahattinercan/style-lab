/**
 * 61 · Calibration Lab — shots.config fragment
 *
 * İmza: kalibrasyon ızgarası · mono okuma bandı · 2px tolerans çubuğu · hairline çerçeve.
 * Renk/radius/gölge/font yalnız var(--...) üzerinden gelir (hard-coded değer yok).
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
      /* ---------- tipografi: Jost başlık + mono etiket, iki punto gövde ---------- */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
      h1 { font-size: 44px; line-height: 1.06; max-width: 20ch; }
      h2 { font-size: 26px; line-height: 1.16; }
      h3 { font-size: 19px; line-height: 1.3; }
      .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: 0; font-variant-numeric: tabular-nums;
      }
      .kpi .v, .kpi .num-big { font-size: 22px; }
      .eyebrow, .label, .mono, .chip, .trow .num, .kpi .k, .axis, .legend, .lv-tag, .crumbs span {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase;
      }
      .eyebrow { color: var(--accent); }
      .eyebrow::before { content: 'REF '; color: var(--ink-faint); letter-spacing: .14em; }
      .label, .kpi .k, .axis, .legend { color: var(--ink-soft); }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.62; max-width: 62ch; color: var(--ink-soft); }

      /* ---------- yüzey: hairline çerçeve, gölge yok ---------- */
      .nav {
        background: var(--bg); border-bottom: 1px solid var(--line); box-shadow: none;
        border-radius: 0; padding: 0 32px; height: 48px;
      }
      .brand { font-family: var(--font-display); font-weight: 600; font-size: 16px; letter-spacing: -.01em; text-transform: none; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }
      .panel, .panel-2, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .plan, .auth-card, .ob-card, .co-sec, .m-tile, .table {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius); box-shadow: none; backdrop-filter: none;
      }
      .table { border-radius: var(--radius); overflow: hidden; }
      .trow { border-bottom: 1px solid var(--line); }
      .trow:last-child { border-bottom: 0; }
      .trow .num { letter-spacing: .02em; text-transform: none; font-size: 12px; }

      /* ---------- okuma bandı: tablo başlığı + KPI satırı ---------- */
      .table-head, .kpi-row, .tbl th, .mini-table th {
        background: var(--surface-2); border-bottom: 1px solid var(--line);
      }
      .kpi, .m-tile { padding: 16px 20px; gap: 6px; }
      .kpi .v, .kpi .num-big { color: var(--ink); }

      /* ---------- tolerans çubuğu: 2px, hedef bandı surface-2, sapma accent ---------- */
      .bar, .track, .track i { height: 2px; border-radius: 0; }
      .visual-card .bar, .bars .bar { background: var(--accent); }
      .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--ink-soft); }
      .track { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .track i { background: var(--accent); }

      /* ---------- kontroller ---------- */
      .btn {
        font-family: var(--font-display); font-weight: 600; font-size: 13px; letter-spacing: 0;
        min-height: 38px; padding: 8px 16px; border-radius: var(--radius); box-shadow: none; text-transform: none;
      }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); }
      .btn:focus-visible, .field:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
      .field, input, select, textarea {
        min-height: 38px; border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); font-family: var(--font-mono); font-size: 14px; color: var(--ink);
        font-variant-numeric: tabular-nums;
      }
      .field.focus, .field:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip {
        height: 22px; padding: 0 8px; border-radius: var(--radius);
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
        letter-spacing: .1em; text-transform: uppercase;
      }
      .chip.accent { background: transparent; border-color: var(--accent); color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .divider { height: 1px; background: var(--line); }
      .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 1px solid var(--line); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); box-shadow: none; }
      .opt .box { border-radius: var(--radius); }
      .logo-strip { border-top: 1px solid var(--line); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }
      .proof li { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft); }
      .proof li::before { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

      /* ---------- imza: kalibrasyon ızgarası + tolerans bandı (hero görseli) ---------- */
      .hero-visual {
        background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-color: var(--surface);
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 28px 28px;
        opacity: .55;
      }
      /* hedef bandı: hero görselinde yatay şerit + 1px kesikli sınırlar */
      .hero-visual::after {
        content: ''; position: absolute; left: 0; right: 0; top: 46%; height: 56px;
        pointer-events: none;
        background: color-mix(in srgb, var(--accent) 8%, transparent);
        border-top: 1px dashed color-mix(in srgb, var(--accent) 55%, transparent);
        border-bottom: 1px dashed color-mix(in srgb, var(--accent) 55%, transparent);
      }

      /* ---------- landing atmosferi: sağ üstte ince okuma ızgarası, yazı yok ---------- */
      body.scene-landing .sig::before {
        content: ''; position: absolute; right: -6vw; top: -8vh; width: 46vw; height: 46vw;
        background-image:
          linear-gradient(color-mix(in srgb, var(--accent) 16%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 16%, transparent) 1px, transparent 1px);
        background-size: 22px 22px;
        -webkit-mask-image: radial-gradient(60% 60% at 50% 50%, var(--ink) 0%, transparent 72%);
        mask-image: radial-gradient(60% 60% at 50% 50%, var(--ink) 0%, transparent 72%);
        pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; right: 4vw; top: 12vh; width: 26vw; height: 1px;
        background: var(--accent); opacity: .5; pointer-events: none;
      }

      /* ---------- dashboard: KPI'lar okuma bandı gibi, eşit genişlik ---------- */
      body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
      body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; }
      body.scene-dashboard .kpi:last-child { border-right: 0; }

      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 22ch; }
        h2 { font-size: 21px; }
        .lede { font-size: 14px; }
        .hero-visual::after { height: 40px; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
        body.scene-dashboard .kpi:last-child { border-bottom: 0; }
        body.scene-landing .sig::before { opacity: .5; }
      }

      /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
      .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
      .btn { white-space: nowrap; }
      .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
      .chip.accent { color: var(--accent-ink); }
      .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .sig::before, .sig::after { opacity: .6; }
      .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
      @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
    `,
  scenes: {
    landing: `
        .hero-visual .visual-card { border-radius: var(--radius); box-shadow: var(--shadow-hard); padding: 18px 16px 22px; }
        .hero-visual .visual-card .bar { height: 2px; border-radius: 0; border: 0; background: var(--line); }
        .hero-visual .visual-card .bar.accent { width: 46%; background: var(--accent); }
        .hero-visual .visual-rows { gap: 0; margin-top: 6px; border-top: 1px solid var(--line); }
        .hero-visual .visual-row { height: 30px; padding: 0; border-bottom: 1px solid var(--line); grid-template-columns: 8px 1fr auto; gap: 10px; }
        .hero-visual .visual-row .sq { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
        .hero-visual .visual-row .line { height: 1px; border-radius: 0; background: var(--ink-faint); opacity: .7; }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; }
        .hero-visual::before { content: ''; position: absolute; inset: 12px; pointer-events: none;
          background-image: linear-gradient(90deg, var(--line) 1px, transparent 1px), linear-gradient(0deg, var(--line) 1px, transparent 1px);
          background-size: 28px 28px; opacity: .45; }
      `,
  },
};
