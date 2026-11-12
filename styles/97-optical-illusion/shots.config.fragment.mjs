export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
    /* imza: moiré (1-3 derece) · yarim ton 4px nokta · sekil-zemin · radius 0 · desen STATIK */
    h1, h2, h3, h4 {
      font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking);
    }
    h1 { font-size: 44px; line-height: 1.06; max-width: 18ch; }
    h2 { font-size: 26px; line-height: 1.2; }
    h3 { font-size: 19px; line-height: 1.28; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 400;
      letter-spacing: .2em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before {
      content: ''; display: inline-block; width: 10px; height: 10px; margin-right: 8px;
      background-image: repeating-linear-gradient(0deg, var(--ink) 0 2px, transparent 2px 4px);
      vertical-align: -1px;
    }
    .lede { font-size: 15px; line-height: 1.6; max-width: 52ch; color: var(--ink-soft); }

    /* nav: 8px degisimli kenar bandi (statik) */
    .nav {
      height: 60px; padding: 0 20px; border-radius: 0; background: var(--bg);
      border-bottom: 2px solid var(--ink); box-shadow: none; position: relative;
    }
    .nav::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 8px;
      background-image: repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 4px);
    }
    .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .04em; }

    /* kart: keskin cerceve + yarim ton kose blogu */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      position: relative; background: var(--surface); border: 1px solid var(--ink);
      border-radius: 0; box-shadow: none; padding: 20px;
    }
    .card::after, .panel::after, .visual-card::after {
      content: ''; position: absolute; top: 0; right: 0; width: 32px; height: 32px;
      background-image: radial-gradient(var(--ink) 1.6px, transparent 1.8px);
      background-size: 4px 4px; opacity: .55; pointer-events: none;
    }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 26px; font-weight: 400;
      line-height: 1.2; letter-spacing: var(--tracking); margin-bottom: 8px;
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 700; font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 36px; line-height: 1.02; }

    .btn {
      min-height: 44px; padding: 0 20px; border-radius: 0; box-shadow: none;
      font-family: var(--font-display); font-size: 13px; font-weight: 400;
      letter-spacing: .06em; text-transform: uppercase; transition: background-color 90ms linear;
    }
    .btn:hover { background: var(--accent); color: var(--accent-ink); }
    .btn.ghost, .btn.soft {
      background: transparent; border: 2px solid var(--ink); color: var(--ink);
      font-family: var(--font-body); font-size: 13px; text-transform: none;
    }
    .btn.ghost:hover { background: var(--ink); color: var(--bg); }
    .field {
      height: 42px; border-radius: 0; background: var(--surface);
      border: 1px solid var(--ink); box-shadow: none; font-size: 14px;
    }
    .chip {
      border-radius: 0; background: var(--surface-2); border: 1px solid var(--ink);
      color: var(--ink); font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
      text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* moire: iki izgara 2 derece ile cakisir — yalniz hero gorseli */
    .hero-visual {
      position: relative; border: 1px solid var(--ink); border-radius: 0; background: var(--surface);
      overflow: hidden;
    }
    .hero-visual::before, .hero-visual::after {
      content: ''; position: absolute; inset: -20%;
      background-image: repeating-linear-gradient(0deg, var(--ink) 0 1px, transparent 1px 6px);
    }
    .hero-visual::after {
      transform: rotate(2deg); opacity: .72;
      background-image: repeating-linear-gradient(0deg, var(--ink) 0 1px, transparent 1px 7px);
    }

    /* sekil-zemin paneli: tek panelde, yalniz yan sutun */
    .side, .art-toc {
      background-image:
        radial-gradient(circle at 30% 40%, var(--ink) 26px, transparent 27px),
        radial-gradient(circle at 70% 60%, var(--ink) 26px, transparent 27px),
        repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 8%, transparent) 0 2px, transparent 2px 8px);
      background-repeat: no-repeat, no-repeat, repeat;
    }
    .hero, .foot-demo {
      background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 6%, transparent) 0 2px, transparent 2px 12px);
    }
    .bar { background: var(--ink); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 2px var(--ink); }
    .proof li::before {
      content: ''; width: 8px; height: 8px; border-radius: 0; background: var(--accent);
    }
    .divider { height: 8px; background: none; border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink); }
    .tbl td:first-child, .trow .t { font-family: var(--font-mono); color: var(--ink-soft); }
    .logo-strip span { font-family: var(--font-display); font-size: 13px; letter-spacing: .12em; text-transform: uppercase; }
  
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
      /* hero: şekil–zemin testi — satırlar dönüşümlü terslenir */
      .hero-visual .visual-card { background: var(--surface); }
      .hero-visual .visual-card::before {
        content: "ŞEKİL / ZEMİN · 2°";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .24em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--ink);
      }
      .hero-visual .visual-row { padding: 8px 10px; border: 1px solid var(--ink); }
      .hero-visual .visual-row:nth-child(even) { background: var(--ink); }
      .hero-visual .visual-row:nth-child(even) .line { background: var(--bg); }
      .hero-visual .visual-row:nth-child(even) .sq { background: var(--bg); }
      .hero-visual .visual-row:nth-child(even) .num { color: var(--bg); }
    
    `,
  },
};
