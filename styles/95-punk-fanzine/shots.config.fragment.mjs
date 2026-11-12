/**
 * 95 · Punk Fanzine — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: 'upper',
  extraCss: `
      /* imza: fotokopi greni · kes-yapıştır şerit · zımba izleri · ranson punto · tek damga rengi */
      h1 { font-family: var(--font-display); font-size: 46px; line-height: 1.04; letter-spacing: .01em; font-weight: 700; max-width: 18ch; transform: rotate(-.6deg); }
      h2 { font-family: var(--font-display); font-size: 28px; line-height: 1.1; font-weight: 700; }
      h3 { font-family: var(--font-display); font-size: 19px; line-height: 1.2; font-weight: 700; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; }
      .brand { font-family: var(--font-display); font-size: 22px; font-weight: 700; letter-spacing: .01em; transform: rotate(-1.2deg); }
      .lede { font-family: var(--font-body); font-size: 14.5px; line-height: 1.6; max-width: 54ch; }

      /* fotokopi greni: toner lekesi (yalnız zemin, kartlar temiz) */
      body { background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 7%, transparent) 0 1px, transparent 1px 3px); }
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .auth-card, .field, input, textarea { background-image: none; }

      .nav { border-bottom: 2px solid var(--ink); padding: 14px 28px; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; }
      .divider { height: 3px; background: var(--ink); border: 0; }
      .hero-copy { border-left: 3px solid var(--accent); padding-left: 18px; }

      /* yüzeyler: düz kâğıt, 2px mürekkep kenar, radius 0 */
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: 0; border: 2px solid var(--ink); box-shadow: none; background: var(--surface);
      }
      .hero-visual { border-radius: 0; border: 2px solid var(--ink); box-shadow: var(--shadow-hard); transform: rotate(.8deg); }
      .chip { border-radius: 0; background: var(--ink); border-color: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; padding: 3px 6px; }
      .chip.accent { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
      .btn { border-radius: 0; border: 2px solid var(--ink); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; min-height: 44px; padding: 12px 16px; box-shadow: none; }
      .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); border-color: var(--ink); }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 2px solid var(--ink); box-shadow: none; }
      .btn:hover { box-shadow: var(--shadow-hard); transform: translate(-1px, -1px); }
      .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 2px solid var(--ink); font-family: var(--font-body); }
      .field.focus, input:focus { outline: 3px solid var(--ink); outline-offset: 2px; }
      .mark { border-radius: 0; background: var(--ink); color: var(--bg); }

      /* ranson punto: tek başlık satırında üç farklı ses (display / mono / body) */
      .hero-copy h1 em, .hero-copy h1 strong {
        font-family: var(--font-mono); font-style: normal; font-weight: 400;
        background: var(--ink); color: var(--bg); padding: 0 6px; letter-spacing: .06em;
      }
      /* kes-yapıştır şerit: 1.4deg döndürülmüş kâğıt parçası (ekran başına 2) */
      .proof, .logo-strip, .foot-demo { transform: rotate(-1.4deg); border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink); background: var(--surface-2); }
      /* zımba izleri: sol kenarda iki kare */
      body.scene-landing .sig::before {
        content: ""; position: absolute; left: 18px; top: 32vh; width: 10px; height: 10px;
        background: var(--ink); box-shadow: 0 62px 0 var(--ink);
      }
      /* yarım ton nokta bandı: sag üstte 6px nokta ızgarası (%18) + damga kutusu */
      body.scene-landing .sig::after {
        content: ""; position: absolute; top: 0; right: 0; width: 34vw; height: 40vh; pointer-events: none;
        background-image: radial-gradient(circle at 50% 50%, var(--ink) 0 1.6px, transparent 1.6px);
        background-size: 6px 6px; opacity: .18;
        -webkit-mask-image: linear-gradient(200deg, var(--ink) 0 30%, transparent 78%);
        mask-image: linear-gradient(200deg, var(--ink) 0 30%, transparent 78%);
      }
      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 15ch; }
        body.scene-landing .sig::before { box-shadow: 0 44px 0 var(--ink); }
        body.scene-landing .sig::after { width: 46vw; height: 26vh; }
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
      /* hero: fotokopi kolaj — kes-yapıştır şerit, damga, zımba izi */
      .hero-visual { transform: rotate(-1.2deg); box-shadow: 6px 6px 0 color-mix(in srgb, var(--ink) 85%, transparent); }
      .hero-visual .visual-card { transform: rotate(.7deg); background: var(--surface-2); }
      .hero-visual .visual-card::before {
        content: "KES · YAPIŞTIR · ÇOĞALT";
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .22em;
        background: var(--ink); color: var(--bg); padding: 4px 8px; align-self: flex-start;
      }
      .hero-visual .visual-card::after {
        content: "sayı 03 · fotokopi · 20 adet";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em;
        color: var(--ink-soft); padding-top: 8px; border-top: 2px solid var(--ink); margin-top: auto;
      }
      .hero-visual .visual-row .sq { border-radius: 0; width: 14px; height: 14px; transform: rotate(-8deg); }
      .hero-visual .visual-row .line { border-radius: 0; height: 3px; }
      .hero-visual .bar { border-radius: 0; height: 4px; }
      .hero-visual .bar.accent { width: 40%; transform: rotate(-.8deg); }
    
    `,
  },
};
