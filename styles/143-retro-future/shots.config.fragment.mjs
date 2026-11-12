/* styles/143-retro-future/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'retro-future': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
    /* imza: uzay çağı afişi — geniş harf aralığı, 3px alt kural, yörünge yayı, hız çizgileri */
    .motif-bars::before {
      background:
        linear-gradient(0deg, transparent 0%, var(--accent) 22%, var(--accent) 30%, transparent 52%),
        linear-gradient(0deg, transparent 0%, var(--accent) 44%, var(--accent) 50%, transparent 66%),
        linear-gradient(0deg, transparent 0%, var(--accent) 64%, var(--accent) 68%, transparent 78%);
      background-size: 100% 6px, 100% 3px, 100% 2px;
      background-position: 0 62%, 0 74%, 0 84%;
      background-repeat: no-repeat;
      opacity: .5;
    }
    h1 { font-family: var(--font-display); font-weight: 600; font-size: 56px; line-height: 1.04; letter-spacing: var(--tracking); max-width: 22ch; text-transform: uppercase; }
    h2 { font-family: var(--font-display); font-weight: 600; font-size: 30px; line-height: 1.16; letter-spacing: .06em; text-transform: uppercase; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 21px; line-height: 1.28; letter-spacing: 0; text-transform: none; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; text-transform: none; }
    .lede { max-width: 56ch; font-size: 16px; line-height: 1.62; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .22em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    /* uzay çağı başlığı: 3px alt kural, kağıttan kesilmiş panel */
    .nav { height: 60px; padding: 0 28px; border-bottom: 3px solid var(--ink); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: .14em; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .06em; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
      border: 1px solid var(--ink); border-radius: var(--radius-lg);
      box-shadow: var(--shadow), 0 3px 0 var(--ink); backdrop-filter: none; background: var(--surface);
    }
    .kpi { border-radius: var(--radius); }
    .table { border: 1px solid var(--ink); border-radius: var(--radius-lg); overflow: hidden; box-shadow: 0 3px 0 var(--ink); background: var(--surface); }
    .hero-visual { border: 1px solid var(--ink); border-radius: var(--radius-lg); box-shadow: 0 3px 0 var(--ink); background: var(--surface-2); overflow: hidden; }
    /* yörünge yayı: hero görselin alt yarısında yarım daire */
    .hero-visual::after {
      content: ""; position: absolute; left: 50%; bottom: -46%; width: 120%; height: 120%; z-index: 0;
      transform: translateX(-50%); border-radius: 999px; pointer-events: none;
      border: 2px solid var(--accent); opacity: .45;
    }
    .hero-visual::before {
      content: ""; position: absolute; right: 16%; top: 22%; width: 10px; height: 10px; z-index: 1;
      border-radius: 999px; background: var(--accent); pointer-events: none;
    }

    .btn {
      min-height: 44px; padding: 0 26px; border-radius: 999px; box-shadow: var(--shadow);
      font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: none;
    }
    .btn.sm { min-height: 34px; padding: 8px 18px; font-size: 12px; }
    .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
    .field, input, select, textarea {
      border: 1px solid var(--ink); border-radius: var(--radius); background: var(--surface); color: var(--ink);
      font-family: var(--font-body); font-size: 15px; min-height: 44px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 26px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--ink);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); }
    .mark { border-radius: 999px; background: var(--ink); color: var(--surface); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; border: 1px solid var(--ink); }
    .icon-btn { border-radius: 999px; border: 1px solid var(--ink); background: var(--surface); }
    .divider { height: 3px; background: var(--ink); }
    .tabbar { border-top: 3px solid var(--ink); background: var(--bg); }
    .track { border-radius: 999px; background: var(--surface-2); border: 1px solid var(--ink); height: 10px; }
    .track i { border-radius: 999px; background: var(--accent); }
    .opt .box { border-radius: 6px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 3px solid var(--ink); letter-spacing: .2em; font-size: 11px; }
    .proof li::before { background: var(--accent); border-radius: 999px; }
    .bar:not(.accent) { background: var(--ink); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 42px; }
    .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }

    /* sayfa atmosferi: yörünge yayı + hız çizgileri; süs ≤ .20 */
    body.scene-landing .sig::before {
      content: ""; position: absolute; left: 50%; bottom: -34vh; width: 120vw; height: 120vw;
      transform: translateX(-50%); border-radius: 999px; pointer-events: none;
      border: 2px solid var(--accent); opacity: .20;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: 0; right: 0; top: 30%; height: 7px; pointer-events: none;
      background: repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 18px);
      opacity: .18;
    }
    @media (max-width: 900px) {
      h1 { font-size: 32px; max-width: 20ch; }
      body.scene-landing .sig::before { bottom: -22vh; }
      body.scene-landing .sig::after { display: none; }
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

      /* 01 · landing — yörünge yayı + yapıştırılmış panel (3px alt kural) */
      .scene-landing .hero-visual { background: var(--surface-2); border: 1px solid var(--ink); box-shadow: 0 3px 0 var(--ink); }
      .scene-landing .visual-card {
        width: 60%; border: 1px solid var(--ink); box-shadow: 0 3px 0 var(--ink);
        border-radius: var(--radius-lg);
      }
      .scene-landing .visual-card::before {
        content: "YÖRÜNGE · 1962"; display: block; margin-bottom: 6px;
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .22em;
        text-transform: uppercase; color: var(--accent);
      }
      .scene-landing .visual-card .bar { height: 3px; border: 0; border-radius: 999px; background: color-mix(in srgb, var(--ink) 20%, transparent); }
      .scene-landing .visual-card .bar.accent { width: 36%; background: var(--accent); }
      .scene-landing .hero-visual::after { width: 96%; height: 96%; bottom: -38%; }
      .scene-landing .visual-row .sq { border-radius: 999px; background: var(--accent); }
    `,
  },
};
