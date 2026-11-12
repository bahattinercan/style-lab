/* styles/142-quantum-lab/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'quantum-lab': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
    /* imza: olasılık bulutu (nokta) + 0 radius + Courier Prime daktilo başlık */
    .motif-dots::before {
      background-image:
        radial-gradient(var(--ink) 1px, transparent 1.2px),
        radial-gradient(var(--accent) 1.4px, transparent 1.6px);
      background-size: 14px 14px, 22px 22px;
      background-position: 0 0, 7px 9px;
      opacity: .5;
    }
    *, *::before, *::after { border-radius: 0 !important; }
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 40px; line-height: 1.14; letter-spacing: var(--tracking); max-width: 26ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 25px; line-height: 1.24; letter-spacing: .01em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 19px; line-height: 1.32; letter-spacing: 0; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 13px; }
    .lede { max-width: 66ch; font-size: 15px; line-height: 1.58; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }
    body { font-variant-numeric: tabular-nums; }

    .nav { height: 46px; padding: 0 20px; border-bottom: 1px solid var(--ink); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 16px; letter-spacing: .01em; }
    .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi, .table, .side {
      border: 1px solid var(--ink); border-radius: 0; box-shadow: none; backdrop-filter: none; background: var(--surface);
    }
    .hero-visual { border: 1px solid var(--ink); border-radius: 0; box-shadow: none; background: var(--surface); overflow: hidden; }
    /* ölçüm histogramı: iki katmanlı çubuk dizisi (maske yok) */
    .hero-visual::after {
      content: ""; position: absolute; left: 8%; right: 8%; bottom: 10%; height: 46%; z-index: 1; pointer-events: none;
      background-image:
        repeating-linear-gradient(90deg, var(--ink) 0 6px, transparent 6px 18px),
        repeating-linear-gradient(90deg, var(--accent) 0 6px, transparent 6px 42px);
      background-size: 100% 62%, 100% 88%;
      background-position: 0 100%, 0 100%;
      background-repeat: repeat-x, repeat-x;
      opacity: .45;
    }

    .btn {
      min-height: 36px; padding: 0 14px; border-radius: 0; box-shadow: none;
      font-family: var(--font-display); font-size: 13px; font-weight: 400; letter-spacing: .01em;
    }
    .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
    .field, input, select, textarea {
      border: 1px solid var(--ink); border-radius: 0; background: var(--surface); color: var(--ink);
      font-family: var(--font-mono); font-size: 12px; min-height: 36px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
    .chip {
      height: 20px; padding: 0 8px; border-radius: 0; border: 1px solid var(--ink);
      background: var(--surface-2); font-family: var(--font-display); font-size: 11px; letter-spacing: .01em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); }
    .mark { border-radius: 0; background: var(--ink); color: var(--surface); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 0; border: 1px solid var(--ink); }
    .icon-btn { border-radius: 0; border: 1px solid var(--ink); background: var(--surface); }
    .divider { height: 1px; background: var(--ink); opacity: .45; }
    .tabbar { border-top: 1px solid var(--ink); background: var(--bg); }
    .track { border-radius: 0; background: var(--surface-2); border: 1px solid var(--ink); height: 10px; }
    .track i { border-radius: 0; background: var(--accent); }
    .opt .box { border-radius: 0; }
    .logo-strip { border-top: 1px solid var(--ink); font-family: var(--font-mono); letter-spacing: .12em; font-size: 10px; }
    .proof li::before { background: var(--accent); border-radius: 0; }
    .bar:not(.accent) { background: var(--ink); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 32px; }
    .table .trow:last-child, tr:last-child { border-top: 1px solid var(--ink); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

    /* sayfa atmosferi: nokta bulutu, metin opak katmanda; süs ≤ .10 */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image:
        radial-gradient(var(--ink) 1px, transparent 1.2px),
        radial-gradient(var(--accent) 1.2px, transparent 1.4px);
      background-size: 18px 18px, 26px 26px;
      background-position: 0 0, 9px 11px;
      opacity: .10;
    }
    @media (max-width: 900px) {
      h1 { font-size: 25px; max-width: 24ch; }
      body.scene-landing .sig::before { opacity: .06; }
    }
  

      /* ===== FIX136 denetim düzeltmeleri ===== */
      /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
         opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
         opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
         (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
      .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
        opacity: 1 !important; color: var(--ink-soft);
        background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
        box-shadow: none;
      }
      /* D1b: buton metni ikinci satıra düşmesin */
      .btn { white-space: nowrap; }
      /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
      .chip { color: var(--ink); }
      .chip.accent, .chip:first-child { color: var(--accent-ink); }

      /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
      .eyebrow, .label, .mono { color: var(--ink-soft); }
      .table th, .mini-table th { color: var(--ink-soft); }
    `,
  scenes: {
    landing: `

      /* 01 · landing — olasılık bulutu + histogram (6px çubuk, iki katman) */
      .scene-landing .hero-visual {
        background-color: var(--surface);
        background-image:
          radial-gradient(color-mix(in srgb, var(--ink) 22%, transparent) 1px, transparent 1.2px),
          radial-gradient(color-mix(in srgb, var(--accent) 30%, transparent) 1.2px, transparent 1.4px);
        background-size: 14px 14px, 22px 22px;
      }
      .scene-landing .visual-card { position: relative; width: 60%; border-radius: 0; border: 1px solid var(--ink); background: var(--surface); }
      .scene-landing .visual-card::before {
        content: "ψ · 0.42 ± 0.03"; display: block; margin-bottom: 6px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink);
      }
      .scene-landing .visual-card .bar { height: 6px; border: 0; border-radius: 0; background: color-mix(in srgb, var(--ink) 24%, transparent); }
      .scene-landing .visual-card .bar.accent { width: 47%; background: var(--accent); }
      .scene-landing .visual-card::after {
        content: ""; position: absolute; left: 16px; right: 16px; bottom: 14px; height: 18px;
        background-image: repeating-linear-gradient(90deg, var(--ink) 0 6px, transparent 6px 18px);
        background-size: 100% 60%; background-repeat: repeat-x; background-position: 0 100%;
        opacity: .35; pointer-events: none;
      }
    `,
  },
};
