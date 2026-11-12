/* styles/102-moire-field/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'moire-field': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'rings',
  bodyClass: 'upper',
  extraCss: `
    /* imza: iki perde çizgi (4° / 7° fark) + keskin köşe + Silkscreen başlık */
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 38px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 26ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.26; letter-spacing: .01em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 18px; line-height: 1.34; letter-spacing: 0; text-transform: none; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 13px; text-transform: none; }
    .lede { max-width: 68ch; font-size: 15px; line-height: 1.55; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    /* çift perde: tüm yüzeylerde keskin köşe */
    *, *::before, *::after { border-radius: 0 !important; }

    .nav { height: 48px; padding: 0 20px; border-bottom: 1px solid var(--ink); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .04em; }
    .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi, .table, .side {
      border: 1px solid var(--ink); border-radius: 0; box-shadow: none; backdrop-filter: none;
      background: var(--surface);
    }
    .hero-visual { border: 1px solid var(--ink); border-radius: 0; box-shadow: none; background: var(--surface); overflow: hidden; }
    /* iki perde: hero görselin zemini */
    .hero-visual::before {
      content: ""; position: absolute; inset: -20%; z-index: 0; pointer-events: none;
      background-image:
        repeating-linear-gradient(4deg, var(--line) 0 1px, transparent 1px 5px),
        repeating-linear-gradient(11deg, var(--line) 0 1px, transparent 1px 7px);
      opacity: .9;
    }
    /* girişim tepesi: accent noktalar */
    .hero-visual::after {
      content: ""; position: absolute; right: 10%; bottom: 12%; width: 46%; height: 46%; z-index: 1;
      pointer-events: none;
      background-image:
        radial-gradient(var(--accent) 2px, transparent 2.4px),
        radial-gradient(var(--accent) 2px, transparent 2.4px);
      background-size: 15px 15px, 21px 21px;
      background-position: 0 0, 7px 9px;
      opacity: .5;
    }

    .btn {
      min-height: 36px; padding: 0 14px; border-radius: 0; box-shadow: none;
      font-family: var(--font-display); font-size: 12px; font-weight: 400; letter-spacing: .04em;
    }
    .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
    .field, input, select, textarea {
      border: 1px solid var(--ink); border-radius: 0; background: var(--surface); color: var(--ink);
      font-family: var(--font-mono); font-size: 12px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
    .chip {
      height: 20px; padding: 0 8px; border-radius: 0; border: 1px solid var(--ink);
      background: var(--surface-2); font-family: var(--font-display); font-size: 10px; letter-spacing: .04em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); }
    .mark { border-radius: 0; background: var(--ink); color: var(--surface); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 0; border: 1px solid var(--ink); }
    .icon-btn { border-radius: 0; border: 1px solid var(--ink); background: var(--surface); }
    .divider { height: 1px; background: var(--ink); opacity: .4; }
    .tabbar { border-top: 1px solid var(--ink); background: var(--bg); }
    .track { border-radius: 0; background: var(--surface-2); border: 1px solid var(--line); }
    .track i { border-radius: 0; background: var(--accent); }
    .logo-strip { border-top: 1px solid var(--ink); font-family: var(--font-mono); letter-spacing: .12em; font-size: 10px; }
    .proof li::before { background: var(--accent); border-radius: 0; }
    .bar:not(.accent) { background: var(--ink); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

    /* sayfa atmosferi: iki perde, düşük opaklık; metin opak katmanda kalır */
    body.scene-landing .sig::before, body.scene-pricing .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image:
        repeating-linear-gradient(7deg, var(--line) 0 1px, transparent 1px 6px),
        repeating-linear-gradient(-4deg, var(--line) 0 1px, transparent 1px 9px);
      opacity: .55;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: 0; top: 0; width: 42%; height: 100%; pointer-events: none;
      background: linear-gradient(90deg, var(--surface) 0%, transparent 100%);
      opacity: .5;
    }
    @media (max-width: 900px) {
      h1 { font-size: 24px; max-width: 24ch; }
      body.scene-landing .sig::before { opacity: .35; }
      body.scene-landing .sig::after { display: none; }
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

  `,
  scenes: {
    landing: `
      /* hero: moiré test kartı — açı notu, kesim payı, girişim çizgileri */
      .hero-visual .visual-card { background: color-mix(in srgb, var(--surface) 90%, transparent); border: 1px solid var(--ink); }
      .hero-visual .visual-card::before {
        content: "MOIRÉ 4° / 11° · girişim 15px";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--ink);
      }
      .hero-visual .visual-card::after {
        content: "kesim payı 3 mm · statik baskı";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--ink); margin-top: auto;
      }
      .hero-visual .visual-row { border-bottom: 1px solid var(--line); }
      .hero-visual .visual-row .sq { border-radius: 0; }
      .hero-visual .visual-row .line { border-radius: 0; height: 2px; }
    
    `,
  },
};
