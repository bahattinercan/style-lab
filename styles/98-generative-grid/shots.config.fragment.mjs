export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
    /* imza: 24px cizim izgarasi · dugum noktalari · 45 derece tarama · koordinat etiketi */
    h1, h2, h3, h4 {
      font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking);
      text-transform: uppercase;
    }
    h1 { font-size: 34px; line-height: 1.2; max-width: 24ch; }
    h2 { font-size: 22px; line-height: 1.32; }
    h3 { font-size: 17px; line-height: 1.34; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 10px; font-weight: 400;
      letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before {
      content: 'N 41\\00B0 02\\0027'; margin-right: 8px; color: var(--accent); letter-spacing: .06em;
    }
    .lede { font-size: 15px; line-height: 1.58; max-width: 60ch; color: var(--ink-soft); }

    .nav {
      height: 58px; padding: 0 20px; border-radius: 0; background: var(--bg);
      border-bottom: 1px solid var(--line); box-shadow: none; position: relative;
    }
    .nav::after {
      content: ''; position: absolute; right: 20px; top: 50%; width: 120px; height: 8px;
      transform: translateY(-50%);
      background-image: repeating-linear-gradient(90deg, var(--ink) 0 1px, transparent 1px 4px);
      opacity: .45;
    }
    .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .02em; }

    /* kart: dugum + koordinat etiketi */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      position: relative; background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: none; padding: 18px;
    }
    .panel::before, .card::before, .kpi::before, .visual-card::before {
      content: ''; position: absolute; top: 6px; left: 6px; width: 3px; height: 3px;
      background: var(--accent); box-shadow: 0 0 0 2px var(--surface), 0 0 0 3px var(--line);
    }
    .card::after, .panel::after {
      content: 'x:024 y:048'; position: absolute; right: 8px; bottom: 6px;
      font-family: var(--font-mono); font-size: 9px; letter-spacing: .08em;
      color: var(--ink-faint); pointer-events: none;
    }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 22px; font-weight: 400;
      line-height: 1.32; letter-spacing: var(--tracking); margin-bottom: 8px;
      text-transform: uppercase;
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 400; font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 30px; line-height: 1.1; }

    .btn {
      min-height: 40px; padding: 0 18px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-display); font-size: 12px; font-weight: 400;
      letter-spacing: .06em; text-transform: uppercase; position: relative;
    }
    .btn::after {
      content: ''; position: absolute; top: 4px; right: 4px; width: 3px; height: 3px;
      background: var(--accent-ink); opacity: 0; transition: opacity .15s linear;
    }
    .btn:hover::after { opacity: .9; }
    .btn.ghost, .btn.soft {
      background: transparent; border: 1px solid var(--ink); color: var(--ink);
      font-family: var(--font-mono); font-size: 12px; letter-spacing: .08em; text-transform: none;
    }
    .field {
      height: 40px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 14px;
      font-family: var(--font-mono);
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
      text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* 24px cizim izgarasi + dugum noktalari: yalniz hero gorseli */
    .hero-visual {
      position: relative; border: 1px solid var(--line); border-radius: var(--radius-lg);
      background: var(--surface); overflow: hidden;
      background-image:
        linear-gradient(color-mix(in srgb, var(--ink) 8%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--ink) 8%, transparent) 1px, transparent 1px);
      background-size: 24px 24px, 24px 24px;
    }
    .hero-visual::before {
      content: ''; position: absolute; inset: 0;
      background-image:
        radial-gradient(var(--accent) 1.5px, transparent 1.8px);
      background-size: 72px 72px; background-position: 12px 12px; opacity: .9;
    }
    .hero-visual::after {
      content: ''; position: absolute; inset: 0;
      background-image: repeating-linear-gradient(-45deg, color-mix(in srgb, var(--accent) 30%, transparent) 0 1px, transparent 1px 6px);
      clip-path: polygon(60% 0, 100% 0, 100% 45%, 60% 45%);
    }
    .hero, .foot-demo {
      background-image:
        linear-gradient(color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
      background-size: 24px 24px, 24px 24px;
    }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 3px; height: 3px; border-radius: 50%;
      background: none; box-shadow: 0 0 0 1px var(--accent);
    }
    .divider { height: 1px; background: repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 4px); }
    .tbl td:first-child, .trow .t { font-family: var(--font-mono); color: var(--ink-faint); }
    .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; }
  
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
      /* hero: çizim ızgarası — koordinat ekseni + düğüm işaretleri */
      .hero-visual .visual-card { background: var(--surface); }
      .hero-visual .visual-card::after {
        content: "x 0→240 · y 0→160 · 24px ızgara";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-row { position: relative; padding-left: 18px; }
      .hero-visual .visual-row::before {
        content: "+"; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
        font-family: var(--font-mono); font-size: 10px; color: var(--accent);
      }
      .hero-visual .visual-row .sq { border-radius: 0; }
      .hero-visual .visual-row .line { border-radius: 0; height: 4px; }
    
    `,
  },
};
