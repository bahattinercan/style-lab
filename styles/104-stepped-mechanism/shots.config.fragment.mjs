/* styles/104-stepped-mechanism/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'stepped-mechanism': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
    /* imza: 8px kademe ızgarası + 2px alt kural + 4 çentikli kademe göstergesi */
    .motif-grid::before {
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 8px 8px;
      opacity: .7;
    }
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 38px; line-height: 1.1; letter-spacing: var(--tracking); max-width: 28ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.24; letter-spacing: .02em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 18px; line-height: 1.3; letter-spacing: 0; text-transform: none; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 13px; text-transform: none; }
    .lede { max-width: 70ch; font-size: 14px; line-height: 1.52; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    .nav { height: 48px; padding: 0 20px; border-bottom: 2px solid var(--ink); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .08em; }
    .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi, .table, .side {
      border: 1px solid var(--ink); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none; background: var(--surface);
    }
    .kpi, .m-tile { border-radius: var(--radius); }
    .hero-visual { border: 1px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); background: var(--surface); }
    /* kademe göstergesi: dört çentik, ikisi dolu */
    .hero-visual::after {
      content: ""; position: absolute; right: 8%; bottom: 10%; z-index: 1; width: 96px; height: 8px;
      pointer-events: none;
      background-image:
        repeating-linear-gradient(90deg, var(--ink) 0 16px, transparent 16px 24px);
      background-size: 100% 8px;
      opacity: .55;
    }
    .hero-visual::before {
      content: ""; position: absolute; right: 8%; bottom: 16%; z-index: 1; width: 48px; height: 8px;
      pointer-events: none;
      background: var(--accent);
    }

    .btn {
      min-height: 36px; padding: 0 16px; border-radius: var(--radius); box-shadow: var(--shadow-hard);
      font-family: var(--font-display); font-size: 13px; font-weight: 400; letter-spacing: .03em;
      transition-timing-function: steps(4, end);
    }
    .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
    .field, input, select, textarea {
      border: 1px solid var(--ink); border-radius: var(--radius); background: var(--surface); color: var(--ink);
      font-family: var(--font-mono); font-size: 12px; min-height: 36px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
    .chip {
      height: 22px; padding: 0 8px; border-radius: var(--radius); border: 1px solid var(--ink);
      background: var(--surface-2); font-family: var(--font-display); font-size: 11px; letter-spacing: .02em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); }
    .mark { border-radius: var(--radius); background: var(--ink); color: var(--surface); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
    .icon-btn { border-radius: var(--radius); border: 1px solid var(--ink); background: var(--surface); }
    .divider { height: 2px; background: var(--ink); opacity: .5; }
    .tabbar { border-top: 2px solid var(--ink); background: var(--surface); }
    .track { border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--ink); height: 8px; }
    .track i { border-radius: 0; background: var(--accent); }
    .opt .box { border-radius: 2px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--ink); font-family: var(--font-mono); letter-spacing: .1em; font-size: 10px; }
    .proof li::before { background: var(--accent); border-radius: 0; }
    .bar:not(.accent) { background: var(--ink); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 32px; }
    .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

    /* sayfa atmosferi: 8px kademe ızgarası + alt kademe şeridi */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 8px 8px;
      opacity: .5;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 8px; pointer-events: none;
      background-image: repeating-linear-gradient(90deg, var(--ink) 0 32px, transparent 32px 48px);
      background-size: 100% 8px;
      opacity: .5;
    }
    @media (max-width: 900px) {
      h1 { font-size: 24px; max-width: 26ch; }
      body.scene-landing .sig::before { opacity: .3; }
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
      /* hero: kademeli gösterge — çentik cetveli + 8px basamak */
      .hero-visual .visual-card::before {
        content: "KADEME 3 / 8 · adım 8px";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 2px solid var(--ink);
      }
      .hero-visual .visual-card::after {
        content: "0 [###-----] 8";
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .22em;
        color: var(--accent); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-row { border-left: 8px solid var(--surface-2); }
      .hero-visual .visual-row .line { border-radius: 0; height: 6px; }
      .hero-visual .bar { border-radius: 0; }
    
    `,
  },
};
