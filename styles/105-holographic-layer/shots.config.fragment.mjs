/* styles/105-holographic-layer/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'holographic-layer': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok.
   Not: .motif-mesh CSS'i bu dosyada tanımlıdır (scene.css'te yok). */
export const CONFIG = {
  motif: 'mesh',
  bodyClass: '',
  extraCss: `
    /* imza: üç katman yığını (0/1/2) + 12px kayma + ince mesh + Michroma başlık */
    .motif-mesh::before {
      content: ""; position: absolute; inset: -14%; z-index: 0; pointer-events: none;
      background-image:
        repeating-linear-gradient(60deg, var(--line) 0 1px, transparent 1px 24px),
        repeating-linear-gradient(-60deg, var(--line) 0 1px, transparent 1px 24px);
      opacity: .8;
    }
    .motif-mesh::after {
      content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background: radial-gradient(58% 54% at 70% 24%, var(--accent) 0%, transparent 68%);
      opacity: .16;
      filter: blur(var(--blur));
    }
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 44px; line-height: 1.14; letter-spacing: var(--tracking); max-width: 24ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 26px; line-height: 1.24; letter-spacing: .01em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 19px; line-height: 1.3; letter-spacing: 0; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; }
    .lede { max-width: 58ch; font-size: 15px; line-height: 1.6; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    .nav {
      height: 64px; padding: 0 28px; border-bottom: 1px solid var(--line);
      background: color-mix(in srgb, var(--surface) 74%, transparent);
      backdrop-filter: blur(var(--blur)) saturate(120%);
    }
    .brand { font-family: var(--font-display); font-size: 16px; letter-spacing: .04em; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    /* yüzeyler: ana katman opak, dekoratif kopyalar kaymış ve soluk */
    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: var(--shadow), inset 0 1px 0 color-mix(in srgb, var(--ink) 8%, transparent);
      background: var(--surface); backdrop-filter: none;
    }
    .kpi { border-radius: var(--radius); }
    .table { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: var(--surface); }
    .hero-visual {
      border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow);
      background: var(--bg-2); overflow: visible;
    }
    /* katman 1 ve 2: 12px aralıklı kayma, artan solukluk */
    .hero-visual::before {
      content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      background: color-mix(in srgb, var(--surface) 40%, transparent);
      transform: translate(12px, 12px); opacity: .10;
    }
    .hero-visual::after {
      content: ""; position: absolute; inset: 0; z-index: -2; pointer-events: none;
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      background: color-mix(in srgb, var(--accent) 24%, transparent);
      transform: translate(24px, 24px); opacity: .08;
    }

    .btn {
      min-height: 46px; padding: 0 22px; border-radius: 999px; box-shadow: var(--shadow);
      font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .02em;
    }
    .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 12px; }
    .btn.ghost, .btn.soft {
      background: color-mix(in srgb, var(--surface) 62%, transparent);
      border: 1px solid var(--line); color: var(--ink); box-shadow: none;
      backdrop-filter: blur(var(--blur));
    }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius);
      background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 15px; min-height: 46px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 26px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; background: var(--surface-2); border: 1px solid var(--line); }
    .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); }
    .divider { height: 1px; background: var(--line); }
    .tabbar {
      border-top: 1px solid var(--line);
      background: color-mix(in srgb, var(--surface) 78%, transparent);
      backdrop-filter: blur(var(--blur));
    }
    .track { border-radius: 999px; background: var(--surface-2); height: 6px; }
    .track i { border-radius: 999px; background: var(--accent); }
    .opt .box { border-radius: 6px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .06em; }
    .proof li::before { background: var(--accent); border-radius: 999px; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); }
    .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--ink-faint); }

    /* sayfa atmosferi: mesh + tek accent ışıması; metin opak katmanda */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image:
        repeating-linear-gradient(60deg, var(--line) 0 1px, transparent 1px 28px),
        repeating-linear-gradient(-60deg, var(--line) 0 1px, transparent 1px 28px);
      opacity: .7;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; right: -12vw; top: -18vh; width: 64vw; height: 64vw;
      border-radius: 999px; pointer-events: none;
      background: radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%);
      opacity: .14; filter: blur(28px);
    }
    @media (max-width: 900px) {
      h1 { font-size: 27px; max-width: 22ch; }
      .hero-visual::before { transform: translate(8px, 8px); }
      .hero-visual::after { transform: translate(16px, 16px); }
      body.scene-landing .sig::after { opacity: .10; }
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
      /* hero: üç katman yığını — 0/1/2 offset + tarama çizgisi */
      .hero-visual .visual-card { background: color-mix(in srgb, var(--surface) 92%, transparent); }
      .hero-visual .visual-card::before {
        content: "KATMAN 0 · 1 · 2  /  12px kayma";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
      }
      .hero-visual .visual-card::after {
        content: "opaklık .40 / .24 / .08 · tarama 3px";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-row:nth-child(2) { transform: translateX(6px); }
      .hero-visual .visual-row:nth-child(3) { transform: translateX(12px); }
      .hero-visual .visual-row .line { border-radius: 0; height: 5px; }
    
    `,
  },
};
