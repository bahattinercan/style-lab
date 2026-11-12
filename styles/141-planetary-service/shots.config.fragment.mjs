/* styles/141-planetary-service/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'planetary-service': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'rings',
  bodyClass: 'upper',
  extraCss: `
    /* imza: eşmerkezli yörünge halkaları + mono telemetri ızgarası + pencere sayacı */
    .motif-rings::before {
      background:
        radial-gradient(circle at 50% 52%, transparent 0 58px, var(--line) 58px 59px, transparent 59px 104px,
          var(--accent) 104px 105px, transparent 105px 168px, var(--line) 168px 169px, transparent 169px 236px,
          var(--accent) 236px 237px, transparent 237px);
      opacity: .85;
    }
    h1 { font-family: var(--font-display); font-weight: 600; font-size: 42px; line-height: 1.1; letter-spacing: var(--tracking); max-width: 24ch; }
    h2 { font-family: var(--font-display); font-weight: 600; font-size: 24px; line-height: 1.24; letter-spacing: .02em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 18px; line-height: 1.3; letter-spacing: 0; text-transform: none; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 13px; text-transform: none; }
    .lede { max-width: 64ch; font-size: 14px; line-height: 1.55; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }
    body { font-variant-numeric: tabular-nums; }

    .nav { height: 52px; padding: 0 24px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 14px; letter-spacing: .14em; }
    .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .table, .side {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none; background: var(--surface);
    }
    .kpi { border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: none; }
    .kpi .v, .kpi .num-big, .big404 { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
    .hero-visual {
      border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      background: var(--bg-2);
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 24px 24px;
    }
    /* yörünge izdüşümü: hero içinde tek halka + cisim */
    .hero-visual::after {
      content: ""; position: absolute; left: 50%; top: 50%; width: 168px; height: 168px; z-index: 1;
      transform: translate(-50%, -50%); border-radius: 999px; pointer-events: none;
      border: 1px solid var(--accent); opacity: .5;
    }
    .hero-visual::before {
      content: ""; position: absolute; left: 50%; top: 50%; width: 8px; height: 8px; z-index: 2;
      transform: translate(-50%, -50%); border-radius: 999px; pointer-events: none;
      background: var(--ink);
    }

    .btn {
      min-height: 38px; padding: 0 14px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-mono); font-size: 12px; font-weight: 600; letter-spacing: .06em;
    }
    .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius);
      background: var(--bg-2); color: var(--ink);
      font-family: var(--font-mono); font-size: 12px; min-height: 38px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 22px; padding: 0 8px; border-radius: 999px; border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; }
    .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
    .divider { height: 1px; background: var(--line); }
    .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
    .track { border-radius: 999px; background: var(--surface-2); height: 6px; }
    .track i { border-radius: 999px; background: var(--accent); }
    .opt .box { border-radius: 4px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .1em; font-size: 10px; }
    .proof li::before { background: var(--accent); border-radius: 999px; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 36px; }
    .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

    /* sayfa atmosferi: yıldız tozu + tek yörünge yayı; süs ≤ .18 */
    body.scene-landing .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image: radial-gradient(var(--ink-faint) 1px, transparent 1.4px);
      background-size: 96px 96px; opacity: .18;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; right: -10vw; top: -14vh; width: 56vw; height: 56vw;
      border-radius: 999px; pointer-events: none;
      border: 1px solid var(--accent); opacity: .18;
    }
    @media (max-width: 900px) {
      h1 { font-size: 26px; max-width: 24ch; }
      .hero-visual::after { width: 120px; height: 120px; }
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
      /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
         ink %40 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 40%, transparent); }
      [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
        border-color: color-mix(in srgb, var(--ink) 40%, transparent);
      }

      /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
      .eyebrow, .label, .mono { color: var(--ink-soft); }
      .table th, .mini-table th { color: var(--ink-soft); }
    `,
  scenes: {
    landing: `

      /* 01 · landing — telemetri penceresi: 24px ızgara + yörünge halkası + mono pencere no */
      .scene-landing .hero-visual {
        background-color: var(--bg-2);
        background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 24px 24px;
      }
      .scene-landing .visual-card {
        width: 58%; border-radius: 0; border: 1px solid var(--line);
        background: color-mix(in srgb, var(--surface) 90%, transparent);
      }
      .scene-landing .visual-card::before {
        content: "PENCERE 04 · YÖRÜNGE"; display: block; margin-bottom: 6px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase; color: var(--accent);
      }
      .scene-landing .hero-visual::after {
        width: 58%; height: auto; aspect-ratio: 1;
        border-color: color-mix(in srgb, var(--accent) 55%, transparent);
      }
      .scene-landing .visual-row .sq { border-radius: 0; background: var(--accent); }
      .scene-landing .visual-row .num { font-family: var(--font-mono); font-size: 10px; color: var(--accent); }
    `,
  },
};
