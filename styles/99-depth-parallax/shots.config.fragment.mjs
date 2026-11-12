export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
    /* imza: 3 derinlik duzlemi · atmosferik pus (blur 2px) · kaydirma hizi farki · golge hiyerarsisi */
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: var(--tracking); }
    h1 { font-size: 48px; line-height: 1.1; max-width: 20ch; }
    h2 { font-size: 30px; line-height: 1.24; }
    h3 { font-size: 20px; line-height: 1.3; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 11px; font-weight: 500;
      letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before {
      content: ''; display: inline-block; width: 8px; height: 8px; margin-right: 8px;
      border-radius: 50%; background: var(--accent);
      box-shadow: 4px 4px 0 color-mix(in srgb, var(--accent) 40%, transparent);
      vertical-align: middle;
    }
    .lede { font-size: 16px; line-height: 1.66; max-width: 58ch; color: var(--ink-soft); }

    .nav {
      height: 72px; padding: 0 28px; border-radius: 0; background: var(--surface);
      border-bottom: 1px solid var(--line); box-shadow: none;
      position: relative; z-index: 2;
    }
    .nav::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -24px; height: 24px;
      background: radial-gradient(120% 100% at 50% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%);
      filter: blur(var(--blur)); opacity: .8; pointer-events: none;
    }
    .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: .02em; }

    /* kart: yakin duzlem — golge + arkada puslu kopya */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      position: relative; background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 24px;
    }
    .card::after, .panel::after, .visual-card::after, .kpi::after {
      content: ''; position: absolute; inset: 8px -8px -8px 8px; z-index: -1;
      border-radius: var(--radius-lg); background: var(--surface-2);
      filter: blur(var(--blur)); opacity: .55; pointer-events: none;
    }
    .kpi { box-shadow: var(--shadow-hard); }
    .panel > .t, .card > .t, .comp-card-demo > .t {
      font-family: var(--font-display); font-size: 30px; font-weight: 500;
      line-height: 1.24; letter-spacing: var(--tracking); margin-bottom: 8px;
    }
    .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
      font-family: var(--font-mono); font-weight: 500; font-variant-numeric: tabular-nums;
    }
    .kpi .v { font-size: 40px; line-height: 1.05; }

    .btn {
      min-height: 48px; padding: 0 26px; border-radius: var(--radius);
      font-family: var(--font-body); font-size: 15px; font-weight: 600; letter-spacing: .02em;
      box-shadow: var(--shadow);
    }
    .btn.ghost, .btn.soft {
      background: var(--surface); border: 1px solid var(--line); color: var(--ink);
      box-shadow: none;
    }
    .field {
      height: 46px; border-radius: var(--radius); background: var(--bg-2);
      border-color: var(--line); box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 4%, transparent);
      font-size: 15px;
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
      text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    /* uc duzlem: uzak (puslu) · orta · yakin */
    .hero, .foot-demo {
      position: relative;
      background-image:
        radial-gradient(80% 60% at 20% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%),
        radial-gradient(70% 50% at 90% 30%, color-mix(in srgb, var(--ink) 6%, transparent), transparent 72%);
    }
    .side, .art-toc {
      background-image: repeating-linear-gradient(
        0deg,
        color-mix(in srgb, var(--surface-2) 70%, transparent) 0 24px,
        transparent 24px 64px
      );
      filter: blur(var(--blur));
      opacity: .6;
    }
    .hero-visual {
      position: relative; border-radius: var(--radius-lg); border: 1px solid var(--line);
      background: var(--surface); box-shadow: var(--shadow-hard);
    }
    .hero-visual::before {
      content: ''; position: absolute; inset: -12% -6% 40% -6%; z-index: -1;
      background: radial-gradient(60% 80% at 50% 100%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 72%);
      filter: blur(calc(var(--blur) * 4));
      opacity: .7;
    }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--accent);
      box-shadow: 3px 3px 0 color-mix(in srgb, var(--accent) 35%, transparent);
    }
    .divider {
      height: 1px; background: var(--line); border: 0;
      box-shadow: 0 8px 24px color-mix(in srgb, var(--bg) 60%, transparent);
    }
    .tbl tr, .trow { transition: transform .36s cubic-bezier(.16,.6,.3,1), box-shadow .36s linear; }
    .tbl tr:hover, .trow:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow);
    }
    .logo-strip span { font-family: var(--font-display); font-size: 16px; letter-spacing: .01em; text-transform: none; }
  
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
      /* hero: üç derinlik düzlemi — ölçek şeridi + ufuk çizgisi */
      .hero-visual .visual-card::before {
        content: "PLANE 0 · 0.6×   PLANE 1 · 1.0×   PLANE 2 · 1.4×";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
      }
      .hero-visual .visual-row { border-bottom: 1px solid var(--line); }
      .hero-visual .visual-row:nth-child(1) { transform: translateX(-6px) scale(.98); }
      .hero-visual .visual-row:nth-child(3) { transform: translateX(6px) scale(1.02); }
      .hero-visual .bar { height: 5px; }
      .hero-visual .bar.accent { width: 40%; }
    
    `,
  },
};
