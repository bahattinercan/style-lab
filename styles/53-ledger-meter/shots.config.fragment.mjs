/* styles/53-ledger-meter/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'ledger-meter': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'paper',
  bodyClass: '',
  extraCss: `
    /* imza: defter çizgisi + serif başlık + çift kural toplam + tabular tutar */
    .motif-paper::before { opacity: .5; }
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 48px; line-height: 1.06; letter-spacing: var(--tracking); max-width: 22ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 29px; line-height: 1.18; letter-spacing: .005em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; line-height: 1.32; letter-spacing: 0; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; }
    .lede { max-width: 62ch; font-size: 15px; line-height: 1.62; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }
    body { font-variant-numeric: tabular-nums; }

    /* gezinme: muhasebe başlığı, çift kural */
    .nav {
      height: 56px; padding: 0 24px; border-bottom: 3px double var(--line);
      background: var(--bg); box-shadow: none;
    }
    .brand { font-family: var(--font-display); font-size: 16px; letter-spacing: -.01em; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    /* yüzeyler: kağıt kart, 1px çizgi, gölge yok */
    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .table, .side {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none; background: var(--surface);
    }
    .kpi { border: 1px solid var(--line); border-radius: var(--radius); box-shadow: none; background: var(--surface-2); }
    .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; background: var(--surface); }
    .plan { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; }
    .plan.hot { border-top: 3px double var(--line); background: var(--surface-2); }
    .plan .price b { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: 0; }

    /* tutar ve tablo dili: sağa hizalı, zebra, toplam çift kural */
    .table .trow:nth-child(odd), tr:nth-child(odd) { background: var(--surface-2); }
    .table .trow:last-child, .tbl tr:last-child { border-top: 3px double var(--line); color: var(--accent); font-weight: 700; }
    .table td, .tbl td { font-variant-numeric: tabular-nums; }
    .kpi .v, .kpi .num-big { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }

    .btn {
      min-height: 40px; padding: 0 18px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .01em;
    }
    .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius);
      background: var(--surface); color: var(--ink);
      font-family: var(--font-mono); font-size: 13px; font-variant-numeric: tabular-nums;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 24px; padding: 0 8px; border-radius: var(--radius); border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
    .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
    .divider { height: 1px; background: var(--line); }
    .tabbar { border-top: 3px double var(--line); background: var(--bg); }
    .track { border-radius: 2px; background: var(--surface-2); height: 6px; }
    .track i { border-radius: 2px; background: var(--accent); }
    .opt .box { border-radius: 2px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 3px double var(--line); letter-spacing: .04em; font-size: 11px; }
    .proof li::before { background: var(--accent); border-radius: 0; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); text-transform: uppercase; }

    /* sayfa atmosferi: defter çizgisi tüm sayfada, sıcak zemin, süs ≤ .10 */
    body.scene-landing .sig::before, body.scene-pricing .sig::before, body.scene-checkout .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background: linear-gradient(transparent 0 27px, var(--line) 27px 28px, transparent 28px) 0 0 / 100% 28px;
      opacity: .55;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: 0; right: 0; top: 46%; height: 3px;
      border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
      opacity: .8; pointer-events: none;
    }
    @media (max-width: 900px) {
      h1 { font-size: 29px; max-width: 22ch; }
      h2 { font-size: 22px; }
      .table, .tbl { overflow-x: auto; }
      body.scene-landing .sig::after { display: none; }
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
      /* landing imzası: defter satırları (borç/alacak + kümülatif) */
      .hero-visual { background: var(--surface); }
      .visual-card { background: var(--surface); border: 1px solid var(--line); }
      .visual-card .bar { height: 2px; background: color-mix(in srgb, var(--ink) 18%, transparent); }
      .visual-rows { display: flex; flex-direction: column; }
      .visual-row { display: grid; grid-template-columns: 10px 1fr 56px; align-items: baseline;
        padding: 7px 4px; border-bottom: 1px dashed color-mix(in srgb, var(--ink) 16%, transparent); }
      .visual-row .sq { width: 5px; height: 5px; border-radius: 0; background: var(--accent); }
      .visual-row .line { height: 1px; background: color-mix(in srgb, var(--ink) 14%, transparent); }
      .visual-row .num { text-align: right; font-family: var(--font-mono); font-size: 11px; }
      .visual-rows::after { content: '= 1.284,50'; display: block; text-align: right; padding-top: 6px;
        font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--accent);
        border-top: 2px solid var(--ink); }`,
  },
};
