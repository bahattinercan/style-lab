/* styles/103-motion-trail/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'motion-trail': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'none',
  bodyClass: 'upper',
  extraCss: `
    /* imza: üç kademeli iz kopyası (%40/%20/%8) + Anton başlık + hap kontrol */
    /* imza motifi yok: izin kendisi motiftir; hız şeritleri aşağıdaki sig kurallarında. */

    h1 { font-family: var(--font-display); font-weight: 400; font-size: 52px; line-height: 1.02; letter-spacing: var(--tracking); max-width: 20ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 28px; line-height: 1.16; letter-spacing: -.005em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; line-height: 1.3; letter-spacing: 0; text-transform: none; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; text-transform: none; }
    .lede { max-width: 60ch; font-size: 16px; line-height: 1.6; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    .nav { height: 60px; padding: 0 28px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 19px; letter-spacing: .01em; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); text-transform: none; }
    .nav-links a:first-child { color: var(--ink); background: var(--surface-2); border-radius: 999px; padding: 6px 14px; }

    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: var(--shadow); backdrop-filter: none; background: var(--surface);
    }
    .kpi { border-radius: var(--radius); }
    .table { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: none; }
    .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--surface); }
    /* iz katmanları: iki kopya, hareket yönünde kaymış */
    .hero-visual::before {
      content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
      border: 1px solid var(--accent); border-radius: var(--radius-lg);
      transform: translate(-16px, 0); opacity: .08;
    }
    .hero-visual::after {
      content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
      border: 1px solid var(--accent); border-radius: var(--radius-lg);
      transform: translate(-8px, 0); opacity: .20;
    }

    .btn {
      min-height: 44px; padding: 0 24px; border-radius: 999px; box-shadow: var(--shadow);
      font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: 0; text-transform: none;
    }
    .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 13px; }
    .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius);
      background: var(--surface); color: var(--ink); font-family: var(--font-body); font-size: 15px; min-height: 44px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 26px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-body); font-size: 12px; font-weight: 600; text-transform: none;
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
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }
    .proof li::before { background: var(--accent); border-radius: 999px; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); }
    .table .trow:hover, tr:hover { transform: translateX(4px); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }

    /* sayfa atmosferi: soldan sağa solan üç iz şeridi */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; left: 0; right: 0; top: 33%; height: 8px; pointer-events: none;
      background: linear-gradient(90deg, transparent 0%, var(--accent) 22%, transparent 46%);
      opacity: .5;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: 0; right: 0; top: 38%; height: 1px; pointer-events: none;
      background: linear-gradient(90deg, transparent 0%, var(--accent) 16%, transparent 40%);
      opacity: .28;
    }
    @media (max-width: 900px) {
      h1 { font-size: 32px; max-width: 20ch; }
      .hero-visual::before { transform: translate(-10px, 0); }
      .hero-visual::after { transform: translate(-5px, 0); }
      .table .trow:hover, tr:hover { transform: none; }
    }
  
    /* ── QA düzeltme katmanı (dosya sonu: aynı özgüllükte son kural kazanır) ── */
    /* D1 · devre dışı buton: opaklık yerine yüzey+kenar ile susturulur (opacity .6 metni 4.5:1 altına düşürüyordu) */
    .btn[aria-disabled="true"], .btn:disabled, .field[disabled] {
      opacity: 1 !important;
      background: color-mix(in srgb, var(--surface-2) 60%, var(--bg));
      color: var(--ink-soft);
      border: 1px dashed color-mix(in srgb, var(--ink) 34%, transparent);
      box-shadow: none;
    }
    /* D2 · ghost/soft kenarı her iki temada da 3:1 üstünde (açık min 3.02 / koyu min 5.12) */
    .btn.ghost, .btn.soft { border: 1px solid color-mix(in srgb, var(--ink) 55%, transparent); }
    /* D2b · buton metni ikinci satıra düşmez */
    .btn { white-space: nowrap; }
    /* D3 · okunması gereken mikro etiketler ink-faint → ink-soft */
    .hero-visual .num, .visual-row .num, .logo-strip span, .logo-strip span:first-child,
    .table th, .mini-table th, .tbl th { color: var(--ink-soft); }
    /* D4 · dekor katmanı metnin altında, tıklamayı kesmez */
    .sig { pointer-events: none; z-index: 0; }
    main, .nav, .logo-strip, .foot-demo { position: relative; z-index: 1; }
    /* D5 · hero görseli kutunun tamamını doldurur (alt yarı boş kalmaz) */
    .hero-visual { display: grid; align-items: stretch; }
    .hero-visual .visual-card { height: 100%; display: flex; flex-direction: column; gap: 10px; }
    .hero-visual .visual-rows { flex: 1; display: grid; align-content: space-evenly; }
    /* D6 · durum şeritleri sayfa kenarından taşmaz */
    .hero { overflow: clip; }

    /* D7 · iz şeritleri metnin üstünden geçmesin: yalnız sağ yarı, hero görsel hizası */
    body.scene-landing .sig::before { left: 54%; right: 0; top: 46%; }
    body.scene-landing .sig::after { left: 54%; right: 0; top: 51%; }

  `,
  scenes: {
    landing: `
      /* hero: iz zaman çizelgesi — 12px kademeli hayalet kopyalar */
      .hero-visual .visual-card {
        box-shadow: 12px 0 0 -6px color-mix(in srgb, var(--surface) 70%, transparent),
                    24px 0 0 -12px color-mix(in srgb, var(--surface) 45%, transparent);
      }
      .hero-visual .visual-card::before {
        content: "0 → 12px → 24px · iz .40 / .20 / .08";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
      }
      .hero-visual .visual-card::after {
        content: "0.37s · 3 kademe · hap kontrol";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-row .line { height: 8px; }
      .hero-visual .visual-row:nth-child(2) { transform: translateX(6px); }
    
    `,
  },
};
