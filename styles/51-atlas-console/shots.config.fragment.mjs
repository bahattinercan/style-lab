/* styles/51-atlas-console/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'atlas-console': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
    /* imza: kartografik ızgara + koordinat şeridi + tek katman çizgisi */
    .motif-grid::before {
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 32px 32px;
      opacity: .9;
    }
    h1 { font-family: var(--font-display); font-size: 48px; font-weight: 600; line-height: 1.08; letter-spacing: var(--tracking); max-width: 22ch; }
    h2 { font-family: var(--font-display); font-size: 26px; font-weight: 600; line-height: 1.22; letter-spacing: .03em; }
    h3 { font-family: var(--font-body); font-size: 19px; font-weight: 600; line-height: 1.3; letter-spacing: 0; }
    .lede { max-width: 60ch; font-size: 15px; line-height: 1.58; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    /* gezinme: koyu şerit + koordinat tikleri */
    .nav {
      height: 52px; padding: 0 24px; border-bottom: 1px solid var(--line);
      background: var(--bg); box-shadow: none;
      background-image: repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 24px);
      background-size: 100% 5px; background-repeat: no-repeat; background-position: bottom;
    }
    .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .1em; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .01em; color: var(--ink-soft); text-transform: none; }
    .nav-links a:first-child { color: var(--ink); }

    /* yüzeyler: 1px çizgi, gölge yok; katman farkı yalnız ton */
    .panel, .panel-2, .kpi, .visual-card, .comp-card, .m-tile, .state-card, .table, .side {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none;
    }
    .kpi, .m-tile { border-radius: var(--radius); }
    .hero-visual {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; background: var(--bg-2);
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 32px 32px;
    }
    /* harita paneli: üst ve alt kenarda koordinat şeridi */
    .hero-visual::after {
      content: ""; position: absolute; left: 0; right: 0; top: 0; height: 20px; z-index: 1;
      border-bottom: 1px solid var(--line);
      background: repeating-linear-gradient(90deg, var(--ink-faint) 0 1px, transparent 1px 48px);
      background-size: 100% 6px; background-repeat: no-repeat; background-position: bottom;
      opacity: .5;
    }

    /* kontroller */
    .btn {
      min-height: 40px; padding: 0 16px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .01em;
    }
    .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius);
      background: var(--bg-2); color: var(--ink);
      font-family: var(--font-mono); font-size: 13px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 24px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
    }
    .chip.on, .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
    .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); }
    .divider { height: 1px; background: var(--line); }
    .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
    .track, .track i { border-radius: 999px; }
    .opt .box { border-radius: 4px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .12em; font-size: 11px; }
    .proof li::before { background: var(--accent); border-radius: 50%; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--ink-faint); }

    /* sayfa atmosferi: koordinat tikleri + tek lejant noktası; süs ≤ .18 */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image:
        repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 96px),
        repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px 96px);
      opacity: .28;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; right: 6vw; top: 12vh; width: 220px; height: 220px;
      border-radius: 50%; pointer-events: none;
      background: radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 62%);
      opacity: .10;
    }
    @media (max-width: 900px) {
      h1 { font-size: 28px; max-width: 24ch; }
      body.scene-landing .sig::after { display: none; }
      .hero-visual::after { height: 16px; }
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
      /* landing imzası: harita ızgarası + koordinat tikleri + waypoint */
      .hero-visual { background-image:
        linear-gradient(color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 1px);
        background-size: 34px 34px, 34px 34px; }
      .hero-visual::before { content: '37.04°N · 27.42°E'; position: absolute; left: 14px; bottom: 12px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; color: var(--ink-faint); }
      .visual-card { background: color-mix(in srgb, var(--surface) 90%, transparent); border-color: color-mix(in srgb, var(--accent) 26%, var(--line)); }
      .visual-row { position: relative; }
      .visual-row .sq { border-radius: 50% 50% 50% 0; transform: rotate(-45deg); background: var(--accent); }
      .visual-row .line { height: 2px; background: color-mix(in srgb, var(--ink) 18%, transparent); }
      .visual-row .num { font-size: 9px; }`,
  'dark-landing': `
      /* koyu mod: harita ızgarası daha görünür, waypoint halkası parlar */
      .hero-visual { background-image:
        linear-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px);
        background-size: 34px 34px, 34px 34px; }
      .visual-row .sq { box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 24%, transparent); }`,
  },
};
