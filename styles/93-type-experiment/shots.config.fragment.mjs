/**
 * 93 · Type Experiment — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
      /* imza: 8px taban çizgisi ızgarası · kadrajdan taşan display · mono ölçü notları · ağırlık karışımı */
      h1 { font-size: 76px; line-height: .92; letter-spacing: -.02em; font-weight: 400; max-width: 14ch; }
      h2 { font-size: 34px; line-height: 1.02; letter-spacing: -.015em; font-weight: 400; }
      h3 { font-size: 20px; line-height: 1.18; letter-spacing: -.005em; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .16em; }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .04em; }
      .lede { font-family: var(--font-body); font-size: 13.5px; line-height: 1.75; max-width: 52ch; color: var(--ink-soft); }

      /* taban çizgisi ızgarası: 8px, yalnız sayfa zemini ve hero (kart yüzeyi temiz kalır) */
      body { background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 6%, transparent) 0 1px, transparent 1px 8px); }
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card, .field, input, textarea {
        background-image: none;
      }

      .nav { border-bottom: 1px solid var(--ink); padding: 16px 32px; }
      .nav-links a { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .12em; }
      .divider { height: 0; background: none; border: 0; border-top: 1px solid var(--ink); }
      .hero-copy { border-left: 0; padding-left: 0; }

      /* kart: düz kâğıt, 1px kenar, radius 0 */
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: 0; border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .hero-visual { border-radius: 0; border: 1px solid var(--ink); box-shadow: none; }
      .chip { border-radius: 0; background: transparent; border-color: var(--line); font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .14em; padding: 2px 6px; }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .btn { border-radius: 0; border: 1px solid var(--ink); font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .14em; min-height: 44px; padding: 13px 18px; box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 0; }
      .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); }

      /* ağırlık karışımı: tek satırda iki ses (display + mono) — spesimen karakteri */
      .hero-copy h1 + .lede { border-top: 1px solid var(--line); padding-top: 14px; }
      .hero-copy h1 { border-bottom: 1px solid var(--ink); padding-bottom: 10px; }

      /* mono ölçü notları: sağ üstte üç satır (x-height / tracking / weight) */
      body.scene-landing .sig::before {
        content: "x-h 0.52em\\A trk -0.02em\\A wgt 400";
        white-space: pre; position: absolute; top: 84px; right: 5vw;
        font-family: var(--font-mono); font-size: 10px; line-height: 1.7; letter-spacing: .1em;
        color: var(--ink-soft); border-top: 1px solid var(--accent); padding-top: 6px;
      }
      /* kadrajdan taşan display: sol altta dev harf, %10 opaklık (dekoratif) */
      body.scene-landing .sig::after {
        content: "Aa"; position: absolute; left: -3vw; bottom: -12vh;
        font-family: var(--font-display); font-size: 34vw; line-height: 1; letter-spacing: -.04em;
        color: var(--ink); opacity: .06; pointer-events: none;
      }
      @media (max-width: 900px) {
        h1 { font-size: 40px; max-width: 12ch; }
        body.scene-landing .sig::before { display: none; }
        body.scene-landing .sig::after { font-size: 52vw; bottom: -8vh; }
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
      /* hero: tipografi numunesi — taban çizgisi ızgarası + ağırlık notları */
      .hero-visual {
        border: 1px solid var(--ink);
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 9%, transparent) 0 1px, transparent 1px 8px);
      }
      .hero-visual .visual-card { background: var(--surface); box-shadow: 0 0 0 1px var(--line); }
      .hero-visual .visual-card::before {
        content: "Aa · 34/40 · wgt 700 · trk -0.02em";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--ink);
      }
      .hero-visual .visual-card::after {
        content: "x-h 0.52em  ·  cap 0.72em  ·  taban 8px";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-row { border-bottom: 1px solid color-mix(in srgb, var(--ink) 18%, transparent); }
      .hero-visual .visual-row .sq { border-radius: 0; width: 10px; height: 10px; }
      .hero-visual .visual-row .num { letter-spacing: .2em; }
      .hero-visual .bar { border-radius: 0; }
    
    `,
  },
};
