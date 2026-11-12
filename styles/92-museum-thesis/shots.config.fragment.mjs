/**
 * 92 · Museum & Thesis — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* imza: geniş kenar · numaralı bölüm · asılı girinti · duvar etiketi · levha çerçevesi */
      h1 { font-size: 38px; line-height: 1.14; letter-spacing: -.005em; font-weight: 500; max-width: 24ch; }
      h2 { font-size: 25px; line-height: 1.2; font-weight: 500; }
      h3 { font-size: 18px; line-height: 1.34; font-weight: 500; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; }
      .brand { font-family: var(--font-display); font-size: 19px; letter-spacing: .01em; }
      .lede { font-size: 17px; line-height: 1.72; max-width: 52ch; color: var(--ink-soft); }

      /* geniş kenar: nav ve bölümler 96px içeri çekilir */
      .nav { border-bottom: 1px solid var(--line); padding: 22px 96px; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .09em; }
      .divider { height: 0; background: none; border: 0; border-top: 1px solid var(--line); }
      .hero-copy { border-left: 0; padding-left: 0; }

      /* numarali bolum: h2 onunde mono "1." / "1.1" isareti */
      h2::before {
        content: attr(data-sec); font-family: var(--font-mono); font-size: 11px;
        letter-spacing: .1em; color: var(--accent); margin-right: 12px; vertical-align: .35em;
      }
      /* asili girinti: govde paragrafi 2em asili */
      p, .lede, .art-body p { text-indent: 0; padding-left: 2em; text-indent: -2em; }
      .lede { padding-left: 0; text-indent: 0; }

      /* duvar etiketi: sol 1px kural + mono Fig. etiketi + 15px aciklama */
      .visual-card figcaption, .comp-card-demo figcaption, .caption, .art-author {
        border-left: 1px solid var(--line); padding-left: 14px;
        font-size: 14px; line-height: 1.5; color: var(--ink-soft);
      }
      .caption::before { content: "Fig. "; font-family: var(--font-mono); font-size: 11px; color: var(--accent); }
      /* dipnot kurali: 40px genisliginde 1px cizgi */
      hr, .foot-demo .rule, .art-toc::before {
        display: block; width: 40px; height: 0; border: 0; border-top: 1px solid var(--ink);
      }

      /* levha (plate): 1px cerceve, golge yok, 4px ic bosluk */
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: 0; border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .hero-visual { border-radius: 0; border: 1px solid var(--line); box-shadow: none; padding: 4px; }
      .chip { border-radius: 0; background: transparent; border-color: var(--line); font-family: var(--font-mono); font-size: 10px; letter-spacing: .09em; color: var(--ink-soft); }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .btn { border-radius: 0; font-family: var(--font-mono); font-size: 11px; letter-spacing: .09em; min-height: 44px; padding: 12px 18px; box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field, input, select, textarea { border-radius: 0; background: transparent; border: 1px solid var(--line); }
      .field.focus, input:focus { outline: 1px solid var(--accent); outline-offset: 2px; }
      .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); }
      .tbl th, .mini-table th { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .08em; color: var(--ink-soft); border-bottom: 1px solid var(--ink); }
      .tbl tr, .mini-table tr { border-bottom: 1px solid var(--line); }

      /* kunye sutunu: sag kenarda 1px kural + mono notlar (hero'da tek) */
      body.scene-landing .sig::before {
        content: ""; position: absolute; top: 96px; bottom: 96px; right: 12vw; width: 1px; background: var(--line);
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; top: 96px; right: 12vw; width: 96px; height: 1px; background: var(--accent);
      }
      @media (max-width: 900px) {
        .nav { padding: 16px 24px; }
        h1 { font-size: 28px; }
        p, .lede, .art-body p { padding-left: 1.2em; text-indent: -1.2em; }
        body.scene-landing .sig::before, body.scene-landing .sig::after { display: none; }
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
      /* hero: levha (plate) — geniş kenar, künye, asılı girinti */
      .hero-visual { padding: 10px; background: var(--bg-2); }
      .hero-visual .visual-card { padding: 22px 22px 18px; border-left: 1px solid var(--ink); }
      .hero-visual .visual-card::before {
        content: "LEVHA II — KOLEKSİYON KAYDI";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .24em;
        color: var(--ink-soft); padding-bottom: 10px; border-bottom: 1px solid var(--line);
      }
      .hero-visual .visual-card::after {
        content: "Envanter 1994.11 · kâğıt üzerine baskı · 42 × 29 cm";
        font-family: var(--font-body); font-size: 12px; line-height: 1.5;
        color: var(--ink-soft); padding-top: 10px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-rows { padding-left: 18px; border-left: 1px solid var(--line); }
      .hero-visual .visual-row .sq { border-radius: 0; width: 12px; height: 12px; background: var(--ink); }
      .hero-visual .visual-row .line { border-radius: 0; height: 1px; }
      .hero-visual .bar { border-radius: 0; height: 2px; }
    
    `,
  },
};
