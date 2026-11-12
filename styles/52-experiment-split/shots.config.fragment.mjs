/* styles/52-experiment-split/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'experiment-split': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
    /* imza: iki eşit panel + sol renk bandı + mono delta rozeti */
    h1 { font-size: 54px; font-weight: 700; line-height: 1.03; letter-spacing: var(--tracking); max-width: 22ch; }
    h2 { font-size: 29px; font-weight: 700; line-height: 1.16; letter-spacing: -.015em; }
    h3 { font-size: 20px; font-weight: 600; line-height: 1.3; letter-spacing: 0; }
    .lede { max-width: 58ch; font-size: 15px; line-height: 1.6; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    .nav { height: 56px; padding: 0 28px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: -.02em; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    /* karşılaştırma panelleri: eşit genişlik, hairline, gölge yok */
    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .table {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none; background: var(--surface);
    }
    .kpi, .plan, .auth-card, .ob-card, .co-sec, .modal, .drawer { border-radius: var(--radius-lg); box-shadow: var(--shadow); }
    .kpi { box-shadow: none; border: 1px solid var(--line); border-radius: var(--radius); }
    .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; background: var(--surface); }

    /* A/B bölünmesi: 6/6 eşit iki sütun ve arada tek dikey çizgi */
    body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; gap: 0; }
    body.scene-dashboard .kpis > .kpi { border-radius: 0; border-width: 0 0 0 1px; }
    body.scene-dashboard .kpis > .kpi:first-child { border-left-width: 3px; border-left-color: var(--ink-faint); }
    body.scene-dashboard .kpis > .kpi:nth-child(2) { border-left-width: 3px; border-left-color: var(--accent); }

    /* kart solunda durum bandı: kontrol nötr, varyant accent */
    .panel, .comp-card { position: relative; }
    .panel::before, .comp-card::before {
      content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
      background: var(--ink-faint); border-radius: var(--radius-lg) 0 0 var(--radius-lg);
    }
    .panel:nth-of-type(2n)::before, .comp-card:nth-of-type(2n)::before { background: var(--accent); }

    .btn { min-height: 44px; padding: 0 20px; border-radius: var(--radius); box-shadow: none; font-size: 14px; font-weight: 600; letter-spacing: 0; }
    .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); }
    .field, input, select, textarea { border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); color: var(--ink); }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 26px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
    .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
    .divider { height: 1px; background: var(--line); }
    .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
    .track, .track i { border-radius: 999px; }
    .opt .box { border-radius: 6px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }
    .proof li::before { background: var(--accent); border-radius: 50%; }
    .table .trow:nth-child(odd), tr:nth-child(odd) { background: var(--surface-2); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }
    .kpi .v, .kpi .num-big, .plan .price b { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }

    /* sayfa atmosferi: %4 nokta ızgara, tek accent lekesi; süs ≤ .12 */
    body.scene-landing .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image: radial-gradient(var(--line) 1px, transparent 1px);
      background-size: 16px 16px; opacity: .5;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
      background: var(--line); pointer-events: none;
    }
    @media (max-width: 900px) {
      h1 { font-size: 32px; max-width: 20ch; }
      body.scene-dashboard .kpis { grid-template-columns: 1fr; }
      body.scene-dashboard .kpis > .kpi { border-width: 1px 0 0 3px; }
      body.scene-landing .sig::after { left: 0; right: 0; top: 50%; bottom: auto; width: auto; height: 1px; }
    }
  
      /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
      /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
      .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
        opacity: 1 !important; background: var(--surface-2) !important;
        color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
      }
      /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
      [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
        border-color: color-mix(in srgb, var(--ink) 62%, transparent);
      }
      /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
      .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
      /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
`,
  scenes: {
  landing: `
      /* landing imzası: A/B paneli — iki varyant + delta */
      .hero-visual { background: var(--bg-2); }
      .visual-card { display: grid; grid-template-columns: 1fr 1fr; gap: 0; padding: 0; overflow: hidden; }
      .visual-card > .bar { grid-column: 1 / -1; height: 6px; }
      .visual-rows { grid-column: 1 / -1; }
      .visual-row { border-left: 3px solid var(--line); }
      .visual-row:nth-child(1) { border-left-color: var(--accent); }
      .visual-row:nth-child(2) { border-left-color: var(--ink-soft); }
      .visual-row:nth-child(3) { border-left-color: var(--warn); }
      .visual-row:nth-child(3) .num::after { content: ' Δ'; color: var(--warn); }
      .visual-row .line { height: 2px; }
      .visual-row .num { justify-self: end; font-size: 10px; }`,
  },
};
