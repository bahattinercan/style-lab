/* styles/55-fleet-telemetry/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'fleet-telemetry': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'dots',
  bodyClass: 'upper',
  extraCss: `
    /* imza: 20px kapsama nokta ızgarası + 36px cihaz satırı + mono durum kodu */
    .motif-dots::before {
      background-image: radial-gradient(var(--line) 1.4px, transparent 1.4px);
      background-size: 20px 20px;
    }
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 36px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 30ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 23px; line-height: 1.24; letter-spacing: .02em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 18px; line-height: 1.3; letter-spacing: 0; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; }
    .lede { max-width: 66ch; font-size: 14px; line-height: 1.5; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }
    body { font-variant-numeric: tabular-nums; }

    /* gezinme: ince konsol şeridi */
    .nav {
      height: 48px; padding: 0 20px; border-bottom: 1px solid var(--line);
      background: var(--bg); box-shadow: none;
    }
    .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .08em; }
    .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    /* yüzeyler: 1px çizgi, gölge yok; panel başlığı --surface-2 şerit */
    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .table, .side {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none; background: var(--surface);
    }
    .panel > h3, .panel > h2, .panel .head, .comp-card .t {
      border-bottom: 1px solid var(--line);
      background: var(--surface-2);
      padding-bottom: 8px;
    }
    .kpi {
      border: 1px solid var(--line); border-radius: var(--radius); box-shadow: none;
      background: var(--surface); padding: 12px 14px;
    }
    .kpi .v, .kpi .num-big, .big404 { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
    .hero-visual {
      border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      background: var(--bg-2);
      background-image: radial-gradient(var(--line) 1.4px, transparent 1.4px);
      background-size: 20px 20px;
    }
    /* kapsama: cihaz olan hücreler accent — hero görselinde 4 nokta */
    .hero-visual::after {
      content: ""; position: absolute; right: 12%; top: 18%; width: 60%; height: 60%; z-index: 1;
      pointer-events: none;
      background-image:
        radial-gradient(var(--accent) 3px, transparent 3.4px),
        radial-gradient(var(--accent) 3px, transparent 3.4px),
        radial-gradient(var(--accent) 3px, transparent 3.4px),
        radial-gradient(var(--accent) 3px, transparent 3.4px);
      background-size: 20px 20px;
      background-position: 0 0, 60px 40px, 120px 80px, 180px 20px;
      background-repeat: no-repeat;
    }

    /* cihaz satırı: 36px, zebra, sağa hizalı saat */
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 36px; }
    .table .trow:nth-child(odd), tr:nth-child(odd) { background: var(--surface-2); }
    .table .trow:last-child, tr:last-child { border-bottom: 0; }
    .table td:last-child, .tbl td:last-child { font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); text-align: right; }

    .btn {
      min-height: 36px; padding: 0 14px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-mono); font-size: 13px; font-weight: 600; letter-spacing: .04em;
    }
    .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius);
      background: var(--surface); color: var(--ink);
      font-family: var(--font-mono); font-size: 12px; min-height: 36px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 22px; padding: 0 8px; border-radius: var(--radius); border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
    .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
    .divider { height: 1px; background: var(--line); }
    .tabbar { border-top: 1px solid var(--line); background: var(--surface-2); }
    .track { border-radius: 0; background: var(--surface-2); height: 4px; }
    .track i { border-radius: 0; background: var(--accent); }
    .opt .box { border-radius: 1px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--line); font-family: var(--font-mono); letter-spacing: .1em; font-size: 11px; }
    .proof li::before { background: var(--ok); border-radius: 1px; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }

    /* sayfa atmosferi: tek kapsama ızgarası şeridi, süs ≤ .10 */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image: radial-gradient(var(--line) 1.4px, transparent 1.4px);
      background-size: 20px 20px; opacity: .6;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 28px;
      border-top: 1px solid var(--line); background: var(--surface-2);
      background-image: repeating-linear-gradient(90deg, var(--ink-faint) 0 28px, transparent 28px 96px);
      background-size: 100% 6px; background-repeat: no-repeat; background-position: center;
      opacity: .5; pointer-events: none;
    }
    @media (max-width: 900px) {
      h1 { font-size: 22px; max-width: 26ch; }
      .table .trow, .trow, tr { height: 44px; }
      body.scene-landing .sig::after { height: 20px; }
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
      /* landing imzası: filo haritası (araç noktaları) + araç satırları */
      .hero-visual { background-image:
        radial-gradient(color-mix(in srgb, var(--accent) 40%, transparent) 1.5px, transparent 1.6px);
        background-size: 26px 26px; }
      .hero-visual::before { content: ''; position: absolute; inset: 0; pointer-events: none;
        background: linear-gradient(115deg, transparent 46%, color-mix(in srgb, var(--accent) 22%, transparent) 47% 48%, transparent 49%),
                    linear-gradient(65deg, transparent 62%, color-mix(in srgb, var(--ink) 10%, transparent) 63% 64%, transparent 65%); }
      .visual-card { background: color-mix(in srgb, var(--surface) 92%, transparent); }
      .visual-row { display: grid; grid-template-columns: 12px 1fr 40px; align-items: center; gap: 6px; }
      .visual-row .sq { width: 8px; height: 8px; border-radius: 50%; background: var(--accent);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent); }
      .visual-row .line { height: 2px; }
      .visual-row .num { font-size: 9px; text-align: right; }`,
  },
};
