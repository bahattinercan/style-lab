/**
 * 91 · Product Catalog — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'paper',
  bodyClass: 'upper',
  extraCss: `
      /* imza: katalog sütun başlığı · hairline cetvel · swatch kareleri · katalog harfi */
      h1 { font-size: 44px; line-height: 1.04; letter-spacing: -.01em; font-weight: 600; max-width: 22ch; }
      h2 { font-size: 26px; line-height: 1.12; letter-spacing: -.005em; font-weight: 600; }
      h3 { font-size: 18px; line-height: 1.28; font-weight: 600; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); letter-spacing: .12em; font-size: 11px; }
      .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: .02em; }
      .lede { font-size: 15.5px; line-height: 1.66; max-width: 58ch; }

      /* katalog cetveli: bölüm başlığı üstünde 1px, altında 1px line */
      .nav { border-bottom: 1px solid var(--line); padding: 18px 40px; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; }
      .divider { height: 0; background: none; border: 0; border-top: 1px solid var(--line); }
      .hero-copy { border-left: 0; padding-left: 0; }
      .hero-copy h1 { border-bottom: 1px solid var(--line); padding-bottom: 16px; }

      /* ürün kartı: kare fotoğraf + 3 satır spec, gölge yok */
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: var(--radius); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .hero-visual { border-radius: var(--radius); border: 1px solid var(--line); box-shadow: none; }
      .chip { border-radius: 1px; background: transparent; border-color: var(--line); font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; padding: 3px 6px; }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .btn { border-radius: 1px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; min-height: 40px; padding: 11px 16px; box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field, input, select, textarea { border-radius: 1px; background: var(--surface); border: 1px solid var(--line); }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .mark { border-radius: 1px; background: var(--accent); color: var(--accent-ink); }

      /* spec tablosu: sayılar tabular, fiyat sağa dayalı, 36px satır */
      .tbl td, .mini-table td, .kv b, .sum-row b, .co-item .pr, .kpi .v { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
      .tbl th, .mini-table th { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .1em; color: var(--ink-faint); border-bottom: 1px solid var(--line); }
      .tbl tr, .mini-table tr { border-bottom: 1px solid var(--line); }

      /* swatch kareleri: 40x40, 1px kenar, sırayla dizilir */
      .proof li::before, .dot, .swatch { border-radius: 1px; box-shadow: inset 0 0 0 1px var(--line); }

      /* katalog harfi: hero sol üstte mono A/B/C bloğu (ekran basina 1) */
      body.scene-landing .sig::before {
        content: "A"; position: absolute; top: 84px; left: 5vw;
        font-family: var(--font-mono); font-size: 13px; letter-spacing: .18em; color: var(--accent-ink);
        background: var(--accent); padding: 6px 9px; border-radius: 1px;
      }
      /* hairline cetvel: sağ kenarda dikey 1px sütun çizgisi */
      body.scene-landing .sig::after {
        content: ""; position: absolute; top: 0; bottom: 0; right: 12vw; width: 1px; background: var(--line);
      }
      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 18ch; }
        body.scene-landing .sig::after { display: none; }
        body.scene-landing .sig::before { top: 66px; font-size: 11px; padding: 4px 7px; }
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
      /* hero: katalog föyü — sütun başlığı, hairline cetvel, swatch kareleri */
      .hero-visual { background: var(--surface); border-radius: var(--radius); }
      .hero-visual .visual-card { border-top: 1px solid var(--ink); padding-top: 12px; }
      .hero-visual .visual-card::before {
        content: "KATALOG 2026 · A–C · TEK FİYAT";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em;
        color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
      }
      .hero-visual .visual-card::after {
        content: "01 — 24 / stok · fiyat · varyant";
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em;
        color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
      }
      .hero-visual .visual-row { border-bottom: 1px solid var(--line); padding-bottom: 9px; }
      .hero-visual .visual-row .sq { border-radius: 0; width: 34px; height: 34px; border: 1px solid var(--line); }
      .hero-visual .visual-row .line { border-radius: 0; height: 7px; }
      .hero-visual .bar { border-radius: 0; height: 5px; }
      .hero-visual .bar.accent { width: 18%; }
    
    `,
  },
};
