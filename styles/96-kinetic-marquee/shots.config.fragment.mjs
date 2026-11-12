export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
    /* imza: 32px marquee bandı · hıza bağlı skew · harf dalgası · rotasyon YOK */
    h1, h2, h3, h4 {
      font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking);
    }
    h1 { font-size: 56px; line-height: 1.04; max-width: 20ch; }
    h2 { font-size: 24px; line-height: 1.18; }
    h3 { font-size: 18px; line-height: 1.3; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 10px; font-weight: 500;
      letter-spacing: .18em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::after {
      content: ''; display: inline-block; width: 32px; height: 2px; margin-left: 8px;
      background: var(--accent); vertical-align: middle;
    }
    .lede { font-size: 15px; line-height: 1.6; max-width: 56ch; color: var(--ink-soft); }

    /* nav + marquee bandı */
    .nav {
      height: 64px; padding: 0 24px; border-radius: 0; background: var(--bg);
      border-bottom: 1px solid var(--line); box-shadow: none; position: relative;
    }
    .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .06em; }

    /* 32px marquee bandı: iki hız sınıfı, hover'da durur */
    .hero::after, .foot-demo::before {
      content: 'KINETIC · MARQUEE · VELOCITY · TYPE · KINETIC · MARQUEE · VELOCITY · TYPE · ';
      display: block; height: 32px; line-height: 32px; overflow: hidden; white-space: nowrap;
      font-family: var(--font-display); font-size: 12px; letter-spacing: .28em;
      text-transform: uppercase; color: var(--accent);
      border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
      animation: marqueeSlideA 28s linear infinite;
    }
    .foot-demo::before { animation-duration: 44s; animation-direction: reverse; color: var(--ink-soft); }
    .hero::after:hover, .foot-demo::before:hover { animation-play-state: paused; }
    @keyframes marqueeSlideA {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    /* kart: 2px accent üst çizgi, hover'da 24px'e uzar */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      position: relative; background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: none; padding: 20px;
    }
    .panel::before, .card::before, .kpi::before, .visual-card::before {
      content: ''; position: absolute; top: 0; left: 20px; height: 2px; width: 2px;
      background: var(--accent); transition: width .34s cubic-bezier(.12,.9,.2,1);
    }
    .card:hover::before, .panel:hover::before, .visual-card:hover::before { width: 24px; }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 24px; font-weight: 600;
      line-height: 1.18; letter-spacing: var(--tracking); margin-bottom: 8px;
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 500; font-variant-numeric: tabular-nums;
      letter-spacing: -.01em;
    }
    .kpi .v { font-size: 34px; line-height: 1.05; }

    .btn {
      min-height: 44px; padding: 0 22px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-display); font-size: 13px; font-weight: 600;
      letter-spacing: .08em; text-transform: uppercase;
      transition: transform .18s cubic-bezier(.12,.9,.2,1);
    }
    .btn:hover { transform: translateX(2px); }
    .btn.ghost, .btn.soft {
      background: transparent; border: 1px solid var(--ink); color: var(--ink);
      font-family: var(--font-body); font-size: 13px; text-transform: none; letter-spacing: .02em;
    }
    .field {
      height: 42px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 14px;
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
      text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* hıza bağlı eğim: en fazla 6°, sayfa dururken 0° */
    .hero-visual {
      border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface);
      transition: transform .34s cubic-bezier(.12,.9,.2,1);
    }
    .hero-visual:hover { transform: skewX(-6deg); }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 12px; height: 2px; border-radius: 0; background: var(--accent);
    }
    .divider { height: 1px; background: var(--line); }
    .tbl tr:hover td, .trow:hover { transform: translateX(2px); }
    .tbl tr, .trow { transition: transform .18s cubic-bezier(.12,.9,.2,1); }
    .hero, .side { background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 5%, transparent) 0 1px, transparent 1px 32px); }
    .logo-strip span { font-family: var(--font-display); font-size: 13px; letter-spacing: .16em; text-transform: uppercase; }
  
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
      /* hero: hız şeritleri — eğik bant + sürat çentikleri */
      .hero-visual { overflow: hidden; }
      .hero-visual .visual-card { transform: skewX(-6deg); }
      .hero-visual .visual-card::after {
        content: "0.62s · MARQUEE · 28s/loop";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line);
        margin-top: auto; transform: skewX(6deg);
      }
      .hero-visual .visual-row { border-left: 2px solid var(--accent); padding-left: 10px; }
      .hero-visual .visual-row .line { transform: skewX(-12deg); height: 8px; }
      .hero-visual .bar { height: 6px; }
      .hero-visual .bar.accent { width: 46%; }
    
    `,
  },
};
