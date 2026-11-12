export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
    /* imza: asimetrik damla kosesi · 999px pill · yumusak blob (blur 6px) · dalga ayirici · viskoz hareket */
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
    h1 { font-size: 44px; line-height: 1.14; max-width: 22ch; }
    h2 { font-size: 28px; line-height: 1.3; }
    h3 { font-size: 21px; line-height: 1.34; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 400;
      letter-spacing: .1em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before {
      content: ''; display: inline-block; width: 8px; height: 8px; margin-right: 8px;
      border-radius: 50% 50% 50% 2px; background: var(--accent); vertical-align: middle;
    }
    .lede { font-size: 16px; line-height: 1.68; max-width: 62ch; color: var(--ink-soft); }

    .nav {
      height: 72px; padding: 0 26px; border-radius: 0; background: var(--bg);
      border-bottom: 1px solid var(--line); box-shadow: none; position: relative;
    }
    .nav::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -12px; height: 12px;
      background-image: radial-gradient(circle at 8px 12px, color-mix(in srgb, var(--accent) 30%, transparent) 7px, transparent 8px);
      background-size: 16px 12px; background-repeat: repeat-x; opacity: .8;
    }
    .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; }

    /* kart: asimetrik damla kosesi */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      background: var(--surface); border: 1px solid var(--line);
      border-radius: 28px 28px 28px 12px;
      box-shadow: var(--shadow); padding: 26px;
    }
    .state-card, .m-tile { border-radius: 28px 12px 28px 28px; }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 28px; font-weight: 600;
      line-height: 1.3; margin-bottom: 8px;
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 700; font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 34px; line-height: 1.1; }

    .btn {
      min-height: 48px; padding: 0 28px; border-radius: 999px; box-shadow: var(--shadow);
      font-family: var(--font-display); font-size: 15px; font-weight: 600; letter-spacing: .01em;
      transition: border-radius .52s cubic-bezier(.22,.9,.24,1), background-color .52s linear;
    }
    .btn:hover { border-radius: 26px; }
    .btn.ghost, .btn.soft {
      background: var(--surface); border: 1px solid var(--line); color: var(--ink);
      box-shadow: none; font-family: var(--font-body); font-size: 15px; font-weight: 500;
    }
    .field {
      height: 48px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 15px; padding: 0 18px;
    }
    .field.focus { box-shadow: inset 3px 0 0 color-mix(in srgb, var(--accent) 60%, transparent); }
    .chip {
      border-radius: 999px; background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* blob katmani: yalniz dekoratif, metin ustunde degil */
    .hero, .foot-demo { position: relative; }
    .hero::before, .foot-demo::before {
      content: ''; position: absolute; z-index: -1; pointer-events: none;
      width: 46%; height: 60%; left: -8%; top: 6%;
      background: color-mix(in srgb, var(--accent) 18%, transparent);
      border-radius: 62% 38% 55% 45% / 48% 55% 45% 52%;
      filter: blur(var(--blur));
      animation: fluidDrift 24s ease-in-out infinite alternate;
    }
    .foot-demo::before {
      left: auto; right: -6%; top: 10%;
      border-radius: 45% 55% 38% 62% / 55% 42% 58% 45%;
      animation-duration: 32s;
    }
    @keyframes fluidDrift {
      from { border-radius: 62% 38% 55% 45% / 48% 55% 45% 52%; transform: translate3d(0,0,0) scale(1); }
      to { border-radius: 44% 56% 40% 60% / 58% 44% 56% 42%; transform: translate3d(6%, 4%, 0) scale(1.06); }
    }
    .side, .art-toc {
      background-image: radial-gradient(120% 90% at 0% 50%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%);
      border-radius: 28px 12px 28px 12px;
    }
    .hero-visual {
      position: relative; border: 1px solid var(--line); background: var(--surface);
      border-radius: 28px 28px 16px 16px; box-shadow: var(--shadow); overflow: hidden;
    }
    .hero-visual::after {
      content: ''; position: absolute; inset: 18% 12% auto 12%; height: 56%;
      border: 2px solid color-mix(in srgb, var(--accent) 35%, transparent);
      border-radius: 50% 50% 46% 54% / 52% 48% 52% 48%; pointer-events: none;
    }
    .bar { background: var(--accent); border-radius: 999px 999px 4px 4px; }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 9px; height: 9px; border-radius: 50% 50% 50% 2px;
      background: var(--accent);
    }
    .divider {
      height: 12px; background: none; border: 0;
      background-image: radial-gradient(circle at 8px 12px, var(--line) 7px, transparent 8px);
      background-size: 16px 12px; background-repeat: repeat-x;
    }
    .tbl tr, .trow {
      border-radius: 12px;
      transition: border-radius .52s cubic-bezier(.22,.9,.24,1), background-color .52s linear;
    }
    .tbl tr:hover, .trow:hover { border-radius: 18px; background: var(--surface-2); }
    .logo-strip span { font-family: var(--font-display); font-size: 16px; letter-spacing: 0; text-transform: none; }
  
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
      /* hero: viskozite ölçer — damla kesiti + akış çizgisi */
      .hero-visual .visual-card::before {
        content: "viskozite · 0.42 Pa·s · yüzey gerilimi 0.8";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
      }
      .hero-visual .visual-card::after {
        content: "akış 0.6 L/sn · sıcaklık 21°C";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-row .line { height: 10px; border-radius: 999px; }
      .hero-visual .visual-row .sq { border-radius: 999px 999px 999px 4px; }
      .hero-visual .bar { border-radius: 999px; height: 8px; }
    
    `,
  },
};
