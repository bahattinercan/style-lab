/* styles/145-zero-gravity/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'zero-gravity': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
    /* imza: yüzen kartlar (kademeli dikey kayma) + ince yörünge yayı + geniş radius */
    /* yıldız tozu: iki nokta ızgarası + tek soluk accent lekesi */
    .motif-dots::before {
      background-image:
        radial-gradient(var(--line) 1.4px, transparent 1.6px),
        radial-gradient(var(--accent) 1.2px, transparent 1.4px),
        radial-gradient(40% 34% at 70% 22%, var(--accent) 0%, transparent 70%);
      background-size: 22px 22px, 38px 38px, 100% 100%;
      background-position: 0 0, 11px 15px, 0 0;
      background-repeat: repeat, repeat, no-repeat;
      opacity: .35;
    }
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 48px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 24ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 27px; line-height: 1.22; letter-spacing: .03em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 19px; line-height: 1.3; letter-spacing: 0; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; }
    .lede { max-width: 60ch; font-size: 15px; line-height: 1.66; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .2em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    /* yüzen nav: sayfadan kopuk, hap formunda */
    .nav {
      margin: 16px 24px 0; height: 56px; padding: 0 24px; border: 1px solid var(--line);
      border-radius: 999px; background: color-mix(in srgb, var(--surface) 88%, transparent);
      box-shadow: var(--shadow);
    }
    .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: .16em; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: var(--shadow); backdrop-filter: none; background: var(--surface);
    }
    .kpi { border-radius: var(--radius); }
    .table { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: var(--surface); box-shadow: var(--shadow); }
    .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--surface); overflow: visible; }
    /* yörünge yayı: hero görselin arkasında ince halka + yüzen nokta */
    .hero-visual::after {
      content: ""; position: absolute; inset: -14% -10%; z-index: -1; pointer-events: none;
      border-radius: 999px; border: 1px solid var(--accent); opacity: .35;
    }
    .hero-visual::before {
      content: ""; position: absolute; right: 6%; top: -6%; width: 10px; height: 10px; z-index: 2;
      border-radius: 999px; background: var(--accent); pointer-events: none;
      box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent) 16%, transparent);
    }
    /* kartlar dikeyde kademeli yüzer (4–8px) */
    .panel:nth-of-type(2n), .kpi:nth-of-type(2n) { transform: translateY(6px); }
    .panel:nth-of-type(3n), .kpi:nth-of-type(3n) { transform: translateY(-4px); }

    .btn {
      min-height: 46px; padding: 0 26px; border-radius: 999px; box-shadow: var(--shadow);
      font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .02em;
    }
    .btn.sm { min-height: 34px; padding: 8px 16px; font-size: 12px; }
    .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); color: var(--ink);
      font-family: var(--font-body); font-size: 15px; min-height: 46px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 26px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
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
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .12em; font-size: 10px; }
    .proof li::before { background: var(--accent); border-radius: 999px; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 46px; }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }

    /* sayfa atmosferi: ince yörünge halkaları + çok soluk buz lekesi; süs ≤ .18 */
    body.scene-landing .sig::before {
      content: ""; position: absolute; right: -14vw; top: -20vh; width: 64vw; height: 64vw;
      border-radius: 999px; pointer-events: none;
      border: 1px solid var(--accent); opacity: .18;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: -12vw; bottom: -24vh; width: 52vw; height: 52vw;
      border-radius: 999px; pointer-events: none;
      background: radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%);
      opacity: .10;
    }
    @media (max-width: 900px) {
      h1 { font-size: 28px; max-width: 22ch; }
      .panel:nth-of-type(2n), .kpi:nth-of-type(2n), .panel:nth-of-type(3n), .kpi:nth-of-type(3n) { transform: none; }
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
         ink %48 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 48%, transparent); }
      [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
        border-color: color-mix(in srgb, var(--ink) 48%, transparent);
      }

      /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
      .eyebrow, .label, .mono { color: var(--ink-soft); }
      .table th, .mini-table th { color: var(--ink-soft); }
    `,
  scenes: {
    landing: `

      /* 01 · landing — yüzen kart + ince yörünge halkası (geniş, aşağı yönlü gölge) */
      .scene-landing .hero-visual {
        background: var(--surface); border: 1px solid var(--line);
        box-shadow: 0 30px 70px -48px var(--ink); border-radius: var(--radius-lg);
      }
      .scene-landing .visual-card {
        width: 62%; border-radius: 36px; transform: translateY(-4px);
        box-shadow: 0 30px 70px -48px color-mix(in srgb, var(--ink) 70%, transparent);
      }
      .scene-landing .visual-card::before {
        content: "YÖRÜNGE · 0.00 g"; display: block; margin-bottom: 6px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
        text-transform: uppercase; color: var(--accent);
      }
      .scene-landing .visual-card .bar { height: 6px; border: 0; border-radius: 999px; }
      .scene-landing .visual-rows { gap: 9px; }
      .scene-landing .hero-visual::after { inset: -12% -8%; border-color: color-mix(in srgb, var(--accent) 45%, transparent); }
    `,
  },
};
