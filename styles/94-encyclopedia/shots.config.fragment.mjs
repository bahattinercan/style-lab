/**
 * 94 · Encyclopedia — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* imza: madde başı + telaffuz · numaralı tanımlar · çapraz referans oku · alan/tip tablosu */
      h1 { font-size: 42px; line-height: 1.08; letter-spacing: -.005em; font-weight: 700; max-width: 20ch; }
      h2 { font-size: 26px; line-height: 1.16; font-weight: 700; }
      h3 { font-size: 18px; line-height: 1.3; font-weight: 700; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .1em; }
      .brand { font-family: var(--font-display); font-size: 19px; font-weight: 700; letter-spacing: 0; }
      .lede { font-size: 14.5px; line-height: 1.62; max-width: 56ch; }

      /* madde başı: h1 yanında mono telaffuz + kalın accent ilk harf bloğu */
      .hero-copy h1::after {
        content: attr(data-pron); display: block; margin-top: 8px;
        font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; color: var(--ink-soft); font-weight: 400;
      }
      .nav { border-bottom: 1px solid var(--ink); padding: 16px 36px; }
      .nav-links a { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .08em; }
      .divider { height: 0; background: none; border: 0; border-top: 1px solid var(--line); }
      .hero-copy { border-left: 0; padding-left: 0; }

      /* iki kolonlu yoğun gövde: 60ch, kolon arası 1px kural */
      .art-body, .comp-card-demo p, .co-note, .sec {
        columns: 2; column-gap: 32px; column-rule: 1px solid var(--line);
        font-size: 14.5px; line-height: 1.6;
      }
      /* numarali tanim listesi: 1. 2. 3. (mono isaret, asili) */
      ol, .proof { padding-left: 1.6em; list-style: none; }
      ol > li { position: relative; padding-left: 1.4em; text-indent: -1.4em; }
      ol > li::before {
        content: counter(list-item) "."; font-family: var(--font-mono); font-size: 11px;
        color: var(--accent); margin-right: 8px;
      }
      /* capraz referans: accent mono ok */
      a[data-xref], .crumb-x, .xref { font-family: var(--font-mono); font-size: 12px; color: var(--accent); text-decoration: none; }
      a[data-xref]::before, .xref::before { content: "→ "; }

      /* kart: duz kagit, 1px kenar, golge yok */
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: 0; border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .hero-visual { border-radius: 0; border: 1px solid var(--line); box-shadow: none; }
      .chip { border-radius: 0; background: var(--surface-2); border-color: var(--line); font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .08em; color: var(--ink-soft); }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .btn { border-radius: 0; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .08em; min-height: 44px; padding: 13px 16px; box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 1px solid var(--line); }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); }

      /* alan/tip tablosu: veri sozlugu karakteri (mono tip kolonu) */
      .tbl th, .mini-table th, .kv .k { font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }
      .tbl th, .mini-table th { border-bottom: 1px solid var(--ink); }
      .tbl tr, .mini-table tr { border-bottom: 1px solid var(--line); }
      .tbl td:nth-child(2), .mini-table td:nth-child(2) { font-family: var(--font-mono); font-size: 12px; color: var(--accent); }

      /* alfabe seridi: hero ustunde A-Z mono dizisi, aktif harf accent (ekran basina 1) */
      body.scene-landing .sig::before {
        content: "A B C Ç D E F G H I İ J K L M N O Ö P Q R S Ş T U Ü V W X Y Z";
        position: absolute; top: 76px; left: 0; right: 0; text-align: center;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-faint);
        border-bottom: 1px solid var(--line); padding-bottom: 8px;
      }
      body.scene-landing .sig::after {
        content: "M"; position: absolute; top: 70px; left: calc(50% - 4px);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--accent-ink);
        background: var(--accent); padding: 2px 4px;
      }
      @media (max-width: 900px) {
        h1 { font-size: 30px; }
        .art-body, .comp-card-demo p, .co-note, .sec { columns: 1; column-rule: 0; }
        body.scene-landing .sig::before { font-size: 8.5px; letter-spacing: .1em; }
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
      /* hero: madde kartı — numaralı tanımlar + çapraz referans */
      .hero-visual .visual-card { counter-reset: madde; padding-left: 30px; position: relative; }
      .hero-visual .visual-card::before {
        content: "MADDE 042 · telaffuz /sö·zük/";
        position: absolute; left: 0; top: 0;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em;
        color: var(--ink-soft); padding-bottom: 10px;
      }
      .hero-visual .visual-card::after {
        content: "→ bkz. 045, 118 · → karşıt: 077";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em;
        color: var(--ink-soft); padding-top: 10px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-row { counter-increment: madde; display: grid; grid-template-columns: 18px 14px 1fr auto; align-items: center; gap: 10px; }
      .hero-visual .visual-row::before {
        content: counter(madde) "."; font-family: var(--font-mono); font-size: 10px; color: var(--accent);
      }
      .hero-visual .visual-row .sq { border-radius: 0; width: 12px; height: 12px; }
      .hero-visual .visual-row .line { border-radius: 0; height: 1px; }
    
    `,
  },
};
