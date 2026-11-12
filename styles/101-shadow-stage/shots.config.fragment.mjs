/* styles/101-shadow-stage/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'shadow-stage': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
    /* imza: tek ışık kaynağı (üst-sol) + köşe vinyeti + Poiret One ince başlık */
    /* tek ışık kaynağı: üst-sol leke + karşı köşede çok soluk serin yansıma */
    .motif-blob::before {
      background:
        radial-gradient(46% 42% at 24% 18%, var(--accent) 0%, transparent 66%),
        radial-gradient(40% 38% at 78% 82%, var(--ink) 0%, transparent 72%);
      opacity: .16;
      filter: blur(24px);
    }
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: var(--tracking); max-width: 22ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 27px; line-height: 1.22; letter-spacing: .02em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 19px; line-height: 1.3; letter-spacing: 0; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; }
    .lede { max-width: 58ch; font-size: 15px; line-height: 1.62; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }

    .nav { height: 56px; padding: 0 24px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: .14em; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); position: relative; }
    .nav-links a:first-child::after {
      content: ""; position: absolute; left: 0; right: 0; bottom: -8px; height: 1px; background: var(--accent);
    }

    /* yüzeyler: tek katman, üst-sol yönlü çok soluk gölge */
    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: var(--shadow); backdrop-filter: none; background: var(--surface);
    }
    .kpi { border-radius: var(--radius); }
    .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--bg-2); }
    /* ışık huzmesi: hero görselde tek kaynak yansıması */
    .hero-visual::after {
      content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background: radial-gradient(52% 46% at 22% 16%, var(--accent) 0%, transparent 64%);
      opacity: .12;
    }

    .btn { min-height: 40px; padding: 0 18px; border-radius: var(--radius); box-shadow: none; font-size: 13px; font-weight: 600; }
    .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius);
      background: var(--bg-2); color: var(--ink);
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip {
      height: 24px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; }
    .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
    .divider { height: 1px; background: var(--line); }
    .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
    .track { border-radius: 999px; background: var(--surface-2); }
    .track i { border-radius: 999px; background: var(--accent); }
    .opt .box { border-radius: 8px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .06em; }
    .proof li::before { background: var(--accent); border-radius: 999px; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--ink-faint); }

    /* sayfa atmosferi: köşe vinyeti (≤ %22) + tek ışık lekesi */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background:
        radial-gradient(120% 90% at 22% 10%, transparent 30%, var(--bg) 78%),
        radial-gradient(60% 50% at 18% 12%, var(--accent) 0%, transparent 60%);
      opacity: .22;
    }
    @media (max-width: 900px) {
      h1 { font-size: 30px; max-width: 22ch; }
      body.scene-landing .sig::before { opacity: .14; }
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
      /* hero: sahne — tek ışık konisi, zemin çizgisi, düşen gölge */
      .hero-visual .visual-card { box-shadow: 28px 28px 0 -20px color-mix(in srgb, var(--ink) 22%, transparent); }
      .hero-visual .visual-card::before {
        content: "SAHNE 01 · ışık 22% / 16% · tek kaynak";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
      }
      .hero-visual .visual-card::after {
        content: "gölge 24px · blur .7 · vinyet .14";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-rows { border-bottom: 1px solid var(--line); }
      .hero-visual .bar { height: 4px; }
    
    `,
  },
};
