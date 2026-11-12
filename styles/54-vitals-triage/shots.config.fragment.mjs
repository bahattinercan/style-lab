/* styles/54-vitals-triage/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'vitals-triage': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
    /* imza: yuvarlak vital kartı + sol seviye şeridi + nabız halkası */
    h1 { font-family: var(--font-display); font-weight: 600; font-size: 44px; line-height: 1.06; letter-spacing: var(--tracking); max-width: 22ch; }
    h2 { font-family: var(--font-display); font-weight: 600; font-size: 27px; line-height: 1.2; letter-spacing: -.005em; }
    h3 { font-family: var(--font-body); font-weight: 700; font-size: 20px; line-height: 1.32; }
    h4 { font-family: var(--font-body); font-weight: 700; font-size: 15px; }
    .lede { max-width: 56ch; font-size: 16px; line-height: 1.62; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }
    body { font-variant-numeric: tabular-nums; }

    .nav { height: 60px; padding: 0 28px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: -.01em; }
    .nav-links a { font-family: var(--font-body); font-size: 14px; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); border-radius: 999px; padding: 6px 14px; }

    /* yüzeyler: yuvarlak, tek katman gölge + 1px çizgi */
    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: var(--shadow); backdrop-filter: none; background: var(--surface);
    }
    .kpi { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--surface); padding: 22px; }
    .kpi .v, .kpi .num-big, .big404 { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
    .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--surface); }
    .table { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: none; }

    /* triyaj satırı: sol 4px seviye şeridi */
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); position: relative; }
    .table .trow:last-child, tr:last-child { border-bottom: 0; }
    .table .trow::before, .trow::before {
      content: ""; position: absolute; left: 0; top: 6px; bottom: 6px; width: 4px;
      border-radius: 999px; background: var(--ok);
    }
    .table .trow:nth-child(3n+1)::before, .trow:nth-child(3n+1)::before { background: var(--danger); }
    .table .trow:nth-child(3n+2)::before, .trow:nth-child(3n+2)::before { background: var(--warn); }

    .btn {
      min-height: 48px; padding: 0 22px; border-radius: 999px; box-shadow: var(--shadow);
      font-family: var(--font-body); font-size: 15px; font-weight: 700; letter-spacing: 0;
    }
    .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 13px; }
    .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius);
      background: var(--surface); color: var(--ink);
      font-family: var(--font-body); font-size: 15px; min-height: 48px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 28px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-body); font-size: 12px; font-weight: 700;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; }
    .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface); }
    .divider { height: 1px; background: var(--line); }
    .tabbar { border-top: 1px solid var(--line); background: var(--surface); }
    .track { border-radius: 999px; background: var(--surface-2); height: 8px; }
    .track i { border-radius: 999px; background: var(--accent); }
    .opt .box { border-radius: 8px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .01em; }
    .proof li::before { background: var(--accent); border-radius: 999px; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-faint); }

    /* imza motif: nabız halkaları (hero görselinde, sabit) */
    .motif-rings::before { opacity: .7; }

    /* sayfa atmosferi: tek nabız halkası, kritik şerit yok, süs ≤ .10 */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; right: -6vw; top: -10vh; width: 44vw; height: 44vw;
      border-radius: 999px; pointer-events: none;
      background: radial-gradient(circle at 50% 50%, transparent 0 38%, var(--line) 38% 38.4%, transparent 38.6%,
        transparent 52%, var(--line) 52% 52.4%, transparent 52.6%);
      opacity: .6;
    }
    @media (max-width: 900px) {
      h1 { font-size: 28px; max-width: 22ch; }
      .kpi, .panel { padding: 18px; }
      body.scene-landing .sig::before, body.scene-dashboard .sig::before { opacity: .35; }
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
      /* landing imzası: vital kartları + EKG çizgisi + triaj sırası */
      .hero-visual { background: linear-gradient(180deg, var(--surface), color-mix(in srgb, var(--accent) 6%, var(--bg-2))); }
      .visual-card .bar { height: 4px; }
      .visual-card .bar.accent { background: linear-gradient(90deg, transparent, var(--accent), transparent); }
      .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
      .visual-row { display: grid; gap: 4px; padding: 8px; border-radius: var(--radius);
        border: 1px solid var(--line); background: var(--surface); }
      .visual-row .sq { width: 100%; height: 14px; border-radius: 2px;
        background-image: repeating-linear-gradient(90deg, var(--accent) 0 2px, transparent 2px 7px); opacity: .7; }
      .visual-row:nth-child(2) .sq { background-image: repeating-linear-gradient(90deg, var(--warn) 0 2px, transparent 2px 9px); }
      .visual-row .num { font-size: 14px; font-weight: 600; }`,
  },
};
