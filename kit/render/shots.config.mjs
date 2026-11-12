/**
 * kit/render/shots.config.mjs — ekran görüntüsü kompozisyonu
 *
 * Her stil için yalnızca "imza" ayarları burada durur. Renk, tipografi,
 * radius ve gölge kit/tokens.css'ten gelir; burada tekrarlanmaz.
 *
 * Alanlar:
 *   motif      hero görselinin zemini: none | rings | blob | grid | bars | dots | paper
 *   bodyClass  ek gövde sınıfları: "upper" (başlıklar büyük harf), "hard-shadow"
 *   extraCss   stile özel imza CSS'i (sadece var(--...) kullan)
 *   scenes     sahne bazlı ek CSS: { landing, dashboard, mobile, components }
 *
 * Kancalar: `.sig` (tam ekran overlay, z-index 80, pointer-events none),
 * `.hero-visual`, `.panel`, `.btn`, `.field`, `.chip`, `.kpi`, `.m-grid`.
 */

export const DEFAULTS = {
  motif: 'rings',
  bodyClass: '',
  extraCss: '',
  scenes: {},
};

/**
 * Grand Tourer ailesi (41–43) imza CSS'i: tek kaynak.
 * Palet, tipografi ve radius kit/tokens.css'ten gelir; burada renk yazılmaz.
 */
const GRAND_TOURER_CSS = `
      /* imza: krem deri zemin · krom hairline · kadran · ceviz damar · plaka tipografisi */
      h1, h2, h3, h4 { font-weight: 400; }
      h1 { font-size: 50px; line-height: 1.06; letter-spacing: .1em; max-width: 19ch; }
      h2 { font-size: 24px; line-height: 1.16; letter-spacing: .07em; }
      h3 { font-size: 15.5px; line-height: 1.3; letter-spacing: .05em; }
      .eyebrow, .label, .mono { letter-spacing: .2em; }
      .brand { font-family: var(--font-display); font-size: 14px; letter-spacing: .16em; }
      .nav { padding: 22px 52px; border-bottom: 1px solid var(--line); box-shadow: 0 4px 0 -3px var(--accent); }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
      .lede { font-size: 16.5px; line-height: 1.68; max-width: 44ch; }
      .divider { height: 4px; background: none; border-top: 1px solid var(--accent); border-bottom: 1px solid var(--line); }

      /* krom rocker buton */
      .btn {
        font-family: var(--font-mono); font-size: 10.5px; font-weight: 400;
        letter-spacing: .16em; text-transform: uppercase; min-height: 42px; padding: 12px 20px;
        box-shadow: inset 0 1px 0 rgba(255,255,255,.3), inset 0 -1px 0 rgba(28,26,23,.24);
      }
      .btn.sm { min-height: 34px; padding: 8px 14px; font-size: 9.5px; }
      .btn.ghost { box-shadow: inset 0 1px 0 rgba(255,255,255,.6); border-color: color-mix(in srgb, var(--ink) 30%, transparent); color: var(--ink); }
      .btn.soft { box-shadow: inset 0 1px 0 rgba(255,255,255,.6); }

      /* gravür plaka: etiket, chip, marka rozeti */
      .chip { border-radius: 2px; background: transparent; border-color: color-mix(in srgb, var(--ink) 26%, transparent); color: var(--ink-soft); font-size: 8.5px; letter-spacing: .18em; padding: 4px 8px; }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .mark { border-radius: 50%; background: var(--accent); color: var(--accent-ink); box-shadow: inset 0 0 0 1px rgba(255,255,255,.35); font-size: 12px; }

      /* krom iç kenar: krem yüzey + 1px beyaz parlama */
      .panel-2, .m-tile, .kpi, .comp-card-demo, .state-card, .quad .cell, .co-sec, .auth-card, .ob-card {
        box-shadow: inset 0 0 0 1px rgba(255,255,255,.55);
      }
      .field {
        background: var(--surface); border-color: color-mix(in srgb, var(--ink) 22%, transparent);
        box-shadow: inset 0 1px 2px rgba(28,26,23,.09), inset 0 0 0 1px rgba(255,255,255,.55);
        font-size: 12.5px;
      }
      .field.focus { outline-offset: 2px; }

      /* ceviz damar: yalnız yan paneller ve alt şerit */
      .side, .logo-strip, .foot-demo, .art-toc {
        background-image: repeating-linear-gradient(92deg, color-mix(in srgb, var(--ink) 2.5%, transparent) 0 1px, transparent 1px 11px);
      }
      .auth-aside {
        background-image: repeating-linear-gradient(92deg, color-mix(in srgb, var(--ink) 2%, transparent) 0 1px, transparent 1px 19px);
      }

      /* sayaç rakamları: fiyat, KPI, tutar */
      .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num, .kv b, .sum-row b, .co-item .pr {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: 0;
      }
      .tbl th, .mini-table th, .cmp .row.head, .foot-demo .col-h { letter-spacing: .16em; }
      .big404 { font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em; }

      /* sahne başlıkları: plaka ölçeği */
      .comp-head h2 { font-size: 21px; letter-spacing: .09em; }
      .pricing-head h1 { font-size: 30px; }
      .lhead h1 { font-size: 19px; letter-spacing: .1em; }
      .plan .price b { font-size: 26px; }
      .plan .price span { text-transform: uppercase; letter-spacing: .14em; font-size: 9.5px; }
      .scene-pricing .period { align-self: flex-start; margin-left: auto; }
      .art-main h1 { font-size: 29px; line-height: 1.18; }
      .art-main h2 { font-size: 17px; }
      .ob-card h1 { font-size: 24px; }
      .auth-card h1 { font-size: 17px; }
      .app-bar h2 { font-size: 19px; }

      /* LANDING: gösterge kadranı + künye plakası + koç çizgisi */
      body.scene-landing .hero { padding: 46px 52px 34px; gap: 44px; }
      body.scene-landing .hero-visual {
        border-color: color-mix(in srgb, var(--ink) 30%, transparent);
        box-shadow: inset 0 0 0 1px rgba(255,255,255,.8), 0 30px 60px -46px rgba(28,26,23,.6);
        background: var(--surface);
      }
      body.scene-landing .hero-visual.motif-rings::before {
        inset: auto; right: -40px; top: -40px; width: 224px; height: 224px; border-radius: 50%;
        background:
          radial-gradient(circle at 50% 50%, transparent 0 88px, color-mix(in srgb, var(--ink) 58%, transparent) 88px 89px, transparent 89px 96px, color-mix(in srgb, var(--ink) 20%, transparent) 96px 97px, transparent 97px),
          repeating-conic-gradient(from 0deg at 50% 50%, color-mix(in srgb, var(--ink) 30%, transparent) 0 .9deg, transparent .9deg 9deg);
        -webkit-mask-image: radial-gradient(circle at 50% 50%, transparent 0 64px, #000 64px 100px, transparent 100px);
                mask-image: radial-gradient(circle at 50% 50%, transparent 0 64px, #000 64px 100px, transparent 100px);
        opacity: 1;
      }
      body.scene-landing .hero-visual::after {
        content: ''; position: absolute; right: -40px; top: -40px; width: 224px; height: 224px;
        background:
          radial-gradient(circle at 50% 50%, var(--accent) 0 4px, var(--surface) 4px 6px, transparent 6px),
          conic-gradient(from 46deg at 50% 50%, var(--accent) 0 1.3deg, transparent 1.3deg);
        -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 0 82px, transparent 82px);
                mask-image: radial-gradient(circle at 50% 50%, #000 0 82px, transparent 82px);
        pointer-events: none;
      }
      body.scene-landing .visual-card {
        border-color: color-mix(in srgb, var(--ink) 22%, transparent);
        box-shadow: inset 0 0 0 1px rgba(255,255,255,.8), 0 10px 24px -18px rgba(28,26,23,.45);
      }
      body.scene-landing .visual-card .bar { height: 6px; }
      body.scene-landing .visual-row .sq {
        border-radius: 50%; opacity: 1;
        background: radial-gradient(circle at 50% 50%, var(--surface) 0 38%, var(--accent) 39% 100%);
      }
      body.scene-landing .visual-row .num { letter-spacing: 0; }
      .scene-mobile .tabs span { border-radius: 2px; }
      .tabbar div { color: var(--ink-soft); }
      .app-bar .avatar, .avatar, .avatar-lg { border-radius: 50%; }
      .logo-strip {
        border-top: 1px solid var(--line); box-shadow: 0 -4px 0 -3px var(--accent);
        padding: 20px 52px 24px; font-family: var(--font-display); font-size: 12px; letter-spacing: .14em;
      }
      .logo-strip span:first-child { font-family: var(--font-mono); letter-spacing: .2em; }

      /* fiyat kartı: krom çift çerçeve yerine tek çerçeve + yeşil üst kural */
      .plan.hot { border-color: color-mix(in srgb, var(--accent) 55%, var(--line)); box-shadow: inset 0 0 0 1px rgba(255,255,255,.75), 0 18px 40px -30px color-mix(in srgb, var(--accent) 50%, transparent); }
      .pager .pg.on, .pager-nav .pg.on, .segmented span.on, .period span.on, .ob-opt.on { box-shadow: inset 0 1px 0 rgba(255,255,255,.4); }
`;

/**
 * 42 · Grand Tourer Oxblood — "prime" katmanı.
 * Yalnız bu varyantta: gravür başlık, künye şeridi, plaka CTA, çift krom çerçeve,
 * işlenmiş kart kenarı, daha ağır hareket. Ortak sistem (41/43) etkilenmez.
 */
const GRAND_TOURER_OXBLOOD_CSS = `
      /* gravür plaka: başlıkta deboss ışığı + daha geniş harf aralığı */
      h1 { font-size: 52px; letter-spacing: .12em; max-width: 17ch; text-shadow: 0 1px 0 rgba(255,255,255,.62); }
      h2 { letter-spacing: .1em; text-shadow: 0 1px 0 rgba(255,255,255,.5); }
      h3 { letter-spacing: .08em; }
      .eyebrow { color: var(--accent); letter-spacing: .24em; }
      .label { letter-spacing: .22em; }

      /* nav: daha uzun, marka harf aralığı geniş, aktif bağlantı plaka alt çizgisi */
      .nav { padding: 26px 52px; }
      .brand { font-size: 15px; letter-spacing: .22em; }
      .nav-links a { font-size: 10.5px; letter-spacing: .18em; }
      .nav-links a:first-child { position: relative; }
      .nav-links a:first-child::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -9px; height: 1px; background: var(--accent);
      }

      /* plaka CTA: birincil butonda 1px dış halka (3px boşlukla) — mühür etkisi */
      .btn:not(.ghost):not(.soft):not(.sm) {
        outline: 1px solid color-mix(in srgb, var(--accent) 40%, transparent); outline-offset: 2px;
        font-size: 11px; letter-spacing: .2em;
      }
      .btn.ghost { letter-spacing: .18em; }
      /* mobilde halka kırpılmasın: dar sahnelerde plaka halkası kapanır */
      body.scene-m-form .btn:not(.ghost):not(.soft):not(.sm),
      body.scene-m-sheet .btn:not(.ghost):not(.soft):not(.sm),
      body.scene-mobile .btn:not(.ghost):not(.soft):not(.sm) { outline: none; }
      /* yıkıcı eylem plaka almaz: halka accent rengiyle çelişmesin */
      .btn.danger { outline: none; }

      /* işlenmiş kart kenarı: üst beyaz parlama (token'dan) + alt ince gölge çizgisi */
      .panel, .panel-2, .kpi, .m-tile, .comp-card-demo, .plan, .modal, .drawer, .auth-card, .ob-card, .co-sec, .state-card {
        box-shadow: var(--shadow), inset 0 -1px 0 rgba(32,26,23,.07);
      }
      .plan { padding: 22px; }
      .auth-card { padding: 26px; }
      .plan .price b { font-size: 30px; letter-spacing: .01em; }

      /* ceviz damarı bir tık daha okunur (premium doku, hâlâ %3 altında) */
      .side, .logo-strip, .foot-demo, .art-toc, .auth-aside {
        background-image: repeating-linear-gradient(92deg, color-mix(in srgb, var(--ink) 3.2%, transparent) 0 1px, transparent 1px 10px);
      }

      /* LANDING: çift krom çerçeve + showroom vinyeti + künye şeridi */
      body.scene-landing .hero { padding: 56px 52px 40px; }
      body.scene-landing .hero-copy { gap: 22px; }
      body.scene-landing .hero-visual {
        box-shadow:
          inset 0 0 0 1px rgba(255,255,255,.85),
          inset 0 0 70px color-mix(in srgb, var(--ink) 6%, transparent),
          0 0 0 6px var(--bg),
          0 0 0 7px color-mix(in srgb, var(--ink) 15%, transparent),
          0 34px 70px -50px rgba(32,26,23,.55);
      }
      body.scene-landing .proof {
        align-self: stretch; gap: 0; margin-top: 10px; padding: 11px 0;
        border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
      }
      body.scene-landing .proof li {
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em; text-transform: uppercase;
        color: var(--ink-soft); padding: 0 16px; border-left: 1px solid var(--line); gap: 7px;
      }
      body.scene-landing .proof li:first-child { border-left: 0; padding-left: 0; }
      body.scene-landing .proof li::before { width: 4px; height: 4px; background: var(--accent); }
      body.scene-landing .logo-strip { border-top: 1px solid var(--accent); box-shadow: none; letter-spacing: .2em; font-size: 11px; }
      body.scene-landing .logo-strip span:first-child { letter-spacing: .24em; }
`;

export const STYLES = {
  /* ---------------- A · Sade ve disiplinli ---------------- */
  bauhaus: {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
      .nav { border-bottom: 3px solid var(--ink); }
      h1 { max-width: 15ch; font-size: 58px; line-height: .98; }
      .hero-copy { border-left: 3px solid var(--accent); padding-left: 20px; }
      .btn { border: 2px solid var(--ink); box-shadow: none; }
      .btn:not(.ghost):not(.soft) { box-shadow: none; }
      .panel { border: 2px solid var(--ink); }
      .visual-card { border: 2px solid var(--ink); }
      .mark { border-radius: 0; }
      body.scene-landing .sig::before {
        content: ''; position: absolute; right: 6vw; top: 8vh;
        width: 156px; height: 156px; border-radius: 50%; background: var(--accent); opacity: .9;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; left: 47vw; top: 60vh;
        width: 0; height: 0; border-left: 44px solid transparent;
        border-right: 44px solid transparent; border-bottom: 70px solid var(--ink); opacity: .10;
      }
      @media (max-width: 900px) { .sig::before, .sig::after { display: none; } }
    `,
  },
  constructivism: {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
      /* imza: kalın diagonal çubuk + 3px siyah kural + uppercase display */
      .nav { border-bottom: 3px solid var(--line); }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
      .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; }
      h1 { font-size: 62px; line-height: .94; letter-spacing: -.01em; max-width: 16ch; }
      h2 { font-size: 27px; line-height: 1.02; letter-spacing: 0; }
      .eyebrow { color: var(--accent); letter-spacing: .22em; }
      .lede { max-width: 44ch; }
      .hero-copy { border-left: 6px solid var(--accent); padding-left: 24px; }
      .btn {
        border: 3px solid var(--line); border-radius: 0; box-shadow: none;
        font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
      }
      .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; color: var(--ink); border: 3px solid var(--line); }
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card {
        border: 3px solid var(--line); border-radius: 0; box-shadow: none; backdrop-filter: none;
      }
      .hero-visual { box-shadow: var(--shadow-hard); border: 3px solid var(--line); border-radius: 0; }
      .field, input, select, textarea { border: 3px solid var(--line); border-radius: 0; background: var(--surface); }
      .chip { border: 1px solid var(--line); border-radius: 0; font-family: var(--font-mono); letter-spacing: .16em; text-transform: uppercase; }
      .mark { border-radius: 0; }
      .empty-ic { border-radius: 0; border: 3px solid var(--line); }
      .opt .box, .opt.round .box, .opt.round input:checked + .box::after { border-radius: 0; }
      .divider { height: 3px; }
      .avatar, .avatar-lg, .fab { border-radius: 0; }
      .fab { border: 3px solid var(--line); }
      .scene-mobile .tabs span { border-radius: 0; }
      .tabbar { border-top: 3px solid var(--line); }
      .track, .track i { border-radius: 0; }
      .logo-strip { border-top: 6px solid var(--line); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .16em; }
      .proof li::before { background: var(--accent); border-radius: 0; }
      /* hero görselinde kalın diagonal accent çubuk (kartın arkasında) */
      .hero-visual::after {
        content: ""; position: absolute; z-index: 1;
        left: -16%; right: -16%; top: 44%; height: 38px;
        background: var(--accent); transform: rotate(-20deg);
      }
      /* landing: sağ kenarda dikey kırmızı çubuk + ince diagonal kural */
      body.scene-landing .sig::before {
        content: ""; position: absolute; top: 0; bottom: 0; right: 0; width: 20px;
        background: var(--accent);
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; right: 20px; top: 0; bottom: 0; width: 6px;
        background: var(--line); opacity: .16;
      }
      @media (max-width: 900px) {
        h1 { font-size: 34px; max-width: 18ch; }
        body.scene-landing .sig::before { width: 12px; }
        body.scene-landing .sig::after { display: none; }      }
    `,
  },
  'kinetic-type': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
      /* imza: dev ölçek atlaması + sıkı satır + negatif tracking + diagonal accent şerit */
      .nav { border-bottom: 1px solid var(--line); padding: 0 40px; }
      /* hero 1.6fr / 1fr ≈ 8 / 5 — dev tipografiye geniş kolon */
      body.scene-landing .hero { grid-template-columns: 1.6fr 1fr; gap: 44px; }
      .brand, .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; }
      h1 { font-size: clamp(28px, 7vw, 96px); line-height: .95; letter-spacing: -.03em; text-transform: uppercase; max-width: 15ch; }
      /* Anton tek ağırlık: sentetik kalınlaştırma harfleri bulandırır */
      h1, h2, .type-scale .line b, .kpi .v, .kpi .num-big, .big404 { font-weight: 400; }
      .big404 { font-size: 58px; line-height: .9; letter-spacing: -.03em; }
      h2 { font-size: 32px; line-height: 1.0; letter-spacing: -.02em; text-transform: uppercase; }
      .art-main h2 { font-size: 24px; line-height: 1.12; letter-spacing: -.02em; }
      .auth-card h1 { font-size: 26px; line-height: 1.1; margin-bottom: 4px; }
      .ob-card h1 { font-size: 34px; line-height: 1.06; }
      .art-main blockquote { font-size: 22px; line-height: 1.16; letter-spacing: -.01em; border-left-width: 4px; }
      .app-bar h2 { font-size: 26px; line-height: 1.0; }
      h3 { font-family: var(--font-body); font-size: 19px; font-weight: 700; letter-spacing: -.01em; line-height: 1.2; }
      h4 { font-family: var(--font-body); font-size: 15px; font-weight: 700; letter-spacing: 0; line-height: 1.3; }
      .type-scale { gap: 10px; }
      .type-scale .line b { line-height: 1.2; }
      .eyebrow, .label { font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .lede { max-width: 44ch; font-size: 15px; line-height: 1.55; }
      .btn {
        border-radius: 2px; box-shadow: none;
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
      }
      .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card {
        border-radius: 4px; box-shadow: none; backdrop-filter: none;
      }
      .hero-visual { border-radius: 4px; box-shadow: none; }
      .field, input, select, textarea { border-radius: 2px; background: var(--surface); }
      .chip { border-radius: 2px; font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; }
      .mark { border-radius: 2px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-mono); }
      .divider, .track, .track i, .tabbar, .empty-ic { border-radius: 2px; }
      .avatar, .avatar-lg, .fab { border-radius: 2px; }
      .logo-strip { border-top: 1px solid var(--line); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .16em; }
      .proof li::before { background: var(--accent); border-radius: 0; }
      /* diagonal accent şerit: hero görselinin arkasından geçer */
      .hero-visual::after {
        content: ""; position: absolute; z-index: 1;
        left: -14%; right: -14%; top: 58%; height: 12px;
        background: var(--accent); transform: rotate(-6deg);
      }
      /* döndürülmüş kelime katmanı (ekran başına tek) */
      .hero-visual::before {
        content: "KİNETİK"; position: absolute; z-index: 1; left: 5%; bottom: 5%;
        font-family: var(--font-display); font-size: 44px; line-height: .9; letter-spacing: -.02em;
        color: var(--ink-faint); text-transform: uppercase; transform: rotate(-6deg); opacity: .42;
      }
      @media (max-width: 900px) {
        h1 { font-size: clamp(28px, 9vw, 44px); max-width: 18ch; }
        .hero-visual::after { height: 8px; top: 54%; }
        .hero-visual::before { font-size: 26px; bottom: 9%; }
      }
    `,
  },
  'organic-bio': {
    motif: 'blob',
    extraCss: `
      /* imza: asimetrik yumuşak radius + katmanlı blob + 1px ince çizgi */
      .nav { border-bottom: 1px solid var(--line); padding: 22px 44px; }
      .mark {
        border-radius: 42% 58% 55% 45% / 52% 45% 55% 48%;
        background: var(--accent); color: var(--accent-ink);
      }
      h1 { font-size: 54px; line-height: 1.06; letter-spacing: -.01em; max-width: 19ch; }
      h2 { font-size: 30px; line-height: 1.16; }
      h3 { font-size: 18px; }
      .lede { max-width: 46ch; font-size: 16px; line-height: 1.68; }
      .eyebrow, .label { letter-spacing: .14em; }
      .hero-copy { gap: 16px; }
      .btn { border-radius: 999px; border: 1px solid transparent; min-height: 44px; padding: 0 22px; }
      .btn.ghost { border-color: var(--line); background: var(--surface); box-shadow: none; }
      .panel {
        border: 1px solid var(--line); border-radius: 26px 26px 26px 8px;
        box-shadow: var(--shadow); backdrop-filter: none;
      }
      .panel-2, .kpi, .comp-card, .m-tile {
        border: 1px solid var(--line); border-radius: 18px 18px 18px 6px;
        box-shadow: none; backdrop-filter: none;
      }
      .hero-visual {
        border: 1px solid var(--line); border-radius: 26px 26px 26px 8px;
        box-shadow: var(--shadow);
      }
      .visual-card { border-radius: 18px 18px 18px 6px; box-shadow: var(--shadow); }
      .visual-card .bar { border-radius: 9px; }
      .visual-row { border-radius: 12px; }
      .visual-row .sq { border-radius: 42% 58% 51% 49% / 55% 45% 55% 45%; }
      .field, input, select, textarea { border: 1px solid var(--line); border-radius: 14px; background: var(--surface); }
      .chip { border: 1px solid var(--line); border-radius: 999px; letter-spacing: .14em; }
      .divider { height: 1px; background: var(--line); }
      .opt .box { border-radius: 8px; }
      .opt.round .box { border-radius: 999px; }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 42% 58% 55% 45% / 52% 45% 55% 48%; }
      .fab, .empty-ic { box-shadow: var(--shadow); }
      .tabbar, .track, .track i { border-radius: 999px; }
      .proof li::before { border-radius: 42% 58% 51% 49% / 55% 45% 55% 45%; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }
      .table-row, .trow, tr { border-radius: 12px; }
      /* landing/mobile: iki yumuşak blob + büyüme halkaları (süs, metnin altında) */
      body.scene-landing .sig::before, body.scene-mobile .sig::before {
        content: ""; position: absolute; right: -8vw; top: -10vh; width: 52vw; height: 52vw;
        border-radius: 46% 54% 48% 52% / 52% 46% 54% 48%;
        background: radial-gradient(58% 58% at 40% 40%, var(--accent) 0%, transparent 72%);
        opacity: .14; filter: none;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: -10vw; bottom: -14vh; width: 38vw; height: 38vw;
        border-radius: 50%; opacity: .10;
        background: radial-gradient(60% 60% at 50% 50%, var(--accent) 0%, transparent 74%);
      }
      body.scene-mobile .sig::after {
        content: ""; position: absolute; left: -18vw; bottom: 6vh; width: 46vw; height: 46vw;
        border-radius: 50%; opacity: .10;
        background: repeating-radial-gradient(circle at 50% 50%, transparent 0 18px, var(--line) 18px 19px, transparent 19px 40px);
      }
      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        .panel, .hero-visual { border-radius: 22px 22px 22px 8px; }
        body.scene-landing .sig::after { display: none; }
      }
    `,
  },
  'ai-native-mesh': {
    motif: 'mesh',
    extraCss: `
      /* imza: iki katmanlı mesh atmosfer + cam kart + tek üst iç parlaklık */
      h1 { font-size: 40px; font-weight: 600; line-height: 1.14; letter-spacing: var(--tracking); max-width: 24ch; }
      h2 { font-size: 26px; font-weight: 600; line-height: 1.2; letter-spacing: var(--tracking); }
      h3 { font-size: 20px; font-weight: 500; letter-spacing: -.005em; }
      .eyebrow, .label, .mono { letter-spacing: .1em; }
      .eyebrow { color: var(--accent); }
      .lede { max-width: 54ch; font-size: 16px; line-height: 1.6; color: var(--ink-soft); }
      .mark { border-radius: var(--radius); background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }

      /* 1 · cam yüzey: surface %82 + blur 14px + yalnız üst kenarda 1px iç parlaklık */
      .panel, .visual-card {
        background: color-mix(in srgb, var(--surface) 82%, transparent);
        border: 1px solid var(--line);
        border-radius: var(--radius-lg);
        box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow);
        backdrop-filter: blur(var(--blur)) saturate(112%);
      }
      .kpi, .m-tile, .state-card { border-radius: var(--radius); }
      .table { border-radius: var(--radius-lg); }
      .plan.hot { border-color: var(--line); box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow); }
      .plan.hot::before {
        content: ""; position: absolute; left: 0; right: 0; top: 0; height: 2px;
        background: var(--accent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
      }

      /* 2 · mat ikincil yüzey: blur yok, cam üstüne cam yasak */
      .comp-card-demo, .visual-row, .sk, .code, .ob-opt, .opt .box {
        background: var(--surface-2); backdrop-filter: none; box-shadow: none;
      }

      /* 3 · kontroller */
      .btn { min-height: 44px; padding: 0 20px; border-radius: var(--radius); font-size: 13px; font-weight: 600; letter-spacing: .01em; }
      .btn.sm { min-height: 34px; padding: 8px 14px; }
      .btn.ghost {
        background: color-mix(in srgb, var(--surface) 60%, transparent);
        border-color: var(--line); box-shadow: none; backdrop-filter: blur(var(--blur));
      }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .field.focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip { border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line); letter-spacing: .1em; backdrop-filter: none; }
      .icon-btn { border-radius: var(--radius); background: var(--surface-2); }
      .divider { height: 1px; background: var(--line); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .avatar { background: var(--surface-2); border: 1px solid var(--line); }
      .track, .track i { border-radius: 999px; }
      .opt .box { border-radius: 6px; }
      .opt.round .box { border-radius: 999px; }

      /* 4 · gezinme: cam nav, alt 1px kural, aktif 2px accent */
      .nav {
        background: color-mix(in srgb, var(--surface) 72%, transparent);
        backdrop-filter: blur(var(--blur)) saturate(112%);
        border-bottom: 1px solid var(--line);
      }
      .nav-links a { color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }
      .tabbar {
        background: color-mix(in srgb, var(--surface) 78%, transparent);
        backdrop-filter: blur(var(--blur)); border-top: 1px solid var(--line);
      }
      .scene-m-sheet .m-sheet, .scene-m-form .m-foot {
        background: color-mix(in srgb, var(--surface) 90%, transparent);
        backdrop-filter: blur(var(--blur));
      }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }

      /* 5 · atmosfer: kahraman görselde iki katman (radial çifti + conic) */
      .motif-mesh::before {
        content: ""; position: absolute; inset: -18% -14%; pointer-events: none;
        background:
          radial-gradient(52% 46% at 18% 22%, color-mix(in srgb, var(--accent) 84%, transparent) 0%, transparent 64%),
          radial-gradient(46% 42% at 78% 74%, color-mix(in srgb, var(--accent) 46%, transparent) 0%, transparent 66%);
        filter: blur(16px) saturate(118%);
        opacity: .5;
      }
      .motif-mesh::after {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background: conic-gradient(
          from 210deg at 62% 38%,
          color-mix(in srgb, var(--accent) 44%, transparent) 0deg,
          transparent 130deg,
          color-mix(in srgb, var(--ink) 14%, transparent) 235deg,
          transparent 360deg);
        filter: blur(22px);
        opacity: .5;
      }
      .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); }

      /* 6 · sayfa atmosferi: tek renk ailesi, ≤ .16, hareket yok */
      body.scene-landing .sig::before {
        content: ""; position: absolute; right: -14vw; top: -26vh; width: 72vw; height: 72vw;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 88%, transparent) 0%, transparent 70%);
        opacity: .16; filter: blur(26px); pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: -16vw; bottom: -30vh; width: 58vw; height: 58vw;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--ink) 40%, transparent) 0%, transparent 72%);
        opacity: .10; filter: blur(34px); pointer-events: none;
      }
      body.scene-dashboard .sig::before, body.scene-auth .sig::before, body.scene-onboarding .sig::before {
        content: ""; position: absolute; right: -18vw; top: -30vh; width: 64vw; height: 64vw;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 80%, transparent) 0%, transparent 70%);
        opacity: .10; filter: blur(30px); pointer-events: none;
      }
      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 22ch; }
        .panel, .visual-card { border-radius: var(--radius-lg); }
        body.scene-landing .sig::after, body.scene-dashboard .sig::before { display: none; }
        body.scene-landing .sig::before { opacity: .12; }
      }
    `,
  },
  'scandinavian-dark': {
    motif: 'paper',
    extraCss: `
      /* imza: mat koyu yüzey + 1px hairline + geniş boşluk + sakin başlık */
      .motif-paper::before { opacity: .08; }
      .nav { border-bottom: 1px solid var(--line); padding: 24px 48px; }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: var(--tracking); text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .01em; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 44px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 21ch; text-transform: none; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 26px; line-height: 1.2; letter-spacing: var(--tracking); text-transform: none; }
      h3 { font-weight: 500; letter-spacing: 0; }
      h4 { font-weight: 500; }
      .art-main h2, .auth-card h1, .ob-card h1, .app-bar h2 { font-weight: 400; letter-spacing: var(--tracking); }
      .big404 { font-family: var(--font-display); font-weight: 400; font-size: 64px; line-height: 1; letter-spacing: var(--tracking); }
      .eyebrow, .label, .mono { letter-spacing: .12em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .lede { max-width: 52ch; font-size: 16px; line-height: 1.7; color: var(--ink-soft); }
      .mark { border-radius: var(--radius); background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); font-family: var(--font-display); }
      .btn { min-height: 44px; padding: 0 20px; border-radius: var(--radius); box-shadow: none; font-size: 13px; font-weight: 500; letter-spacing: .01em; text-transform: none; }
      .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .panel, .panel-2, .kpi, .comp-card, .m-tile {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; padding: 30px;
      }
      .kpi, .m-tile { padding: 20px; }
      .table {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; padding: 0; overflow: hidden;
      }
      .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: var(--shadow); }
      .plan { padding: 24px; }
      .plan.hot { background: var(--surface-2); border-color: var(--line); box-shadow: none; }
      .plan.hot::before {
        content: ""; position: absolute; left: 0; right: 0; top: 0; height: 2px;
        background: var(--accent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
      }
      .plan .price b { font-weight: 400; letter-spacing: var(--tracking); }
      .comp-card-demo { border-radius: var(--radius); }
      .field, input, select, textarea { border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-2); color: var(--ink); }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip { height: 26px; border: 1px solid var(--line); border-radius: 4px; background: var(--surface-2); letter-spacing: .12em; }
      .divider { height: 1px; background: var(--line); }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .04em; }
      .proof li::before { background: var(--accent); border-radius: 2px; }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .tabbar { border-top: 1px solid var(--line); }
      .track, .track i { border-radius: 3px; }
      .opt .box { border-radius: 4px; }
      .opt.round .box { border-radius: 999px; }
      /* kuzey ışığı: tek geniş, çok soluk ışık lekesi (süs değil, ışık) */
      body.scene-landing .sig::before {
        content: ""; position: absolute; right: -10vw; top: -22vh; width: 62vw; height: 62vw;
        background: radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%);
        opacity: .07; pointer-events: none;
      }
      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 22ch; }
        .panel, .panel-2, .comp-card { padding: 20px; }
        body.scene-landing .sig::before { opacity: .05; }
      }
    `,
  },
  minimalism: {
    motif: 'none',
    extraCss: `h1 { max-width: 15ch; }`,
  },

  'swiss-design': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      .nav { border-bottom: 3px solid var(--ink); }
      .nav-links a { font-size: 12px; letter-spacing: .04em; }
      .eyebrow { color: var(--accent); letter-spacing: .18em; }
      h1 { font-weight: 700; letter-spacing: -.035em; }
      .hero-copy { border-left: 6px solid var(--accent); padding-left: 22px; }
      .btn { border-radius: 0; box-shadow: none; border: 2px solid var(--ink); }
      .btn.ghost { border-width: 2px; }
      .hero-visual { border-radius: 0; box-shadow: none; border-color: var(--ink); }
      .logo-strip { border-top: 3px solid var(--ink); font-weight: 700; letter-spacing: .12em; }
      .proof li::before { background: var(--accent); }
    `,
  },

  'editorial-design': {
    motif: 'paper',
    extraCss: `
      h1 { font-weight: 400; letter-spacing: -.01em; line-height: 1.04; }
      .hero-copy { max-width: 44ch; }
      .lede { font-family: var(--font-body); font-size: 15px; border-left: 3px solid var(--accent); padding-left: 14px; }
      .eyebrow { letter-spacing: .22em; }
      .panel { border-radius: var(--radius); }
      .hero-visual { box-shadow: none; border-radius: 2px; }
    `,
  },

  'luxury-typography': {
    motif: 'rings',
    extraCss: `
      .nav-links a, .brand { letter-spacing: .22em; text-transform: uppercase; font-size: 10px; }
      h1 { font-weight: 300; letter-spacing: .005em; line-height: 1.12; max-width: 14ch; }
      .eyebrow { letter-spacing: .34em; color: var(--accent); }
      .lede { font-family: var(--font-body); font-size: 13px; letter-spacing: .06em; max-width: 38ch; }
      .btn { padding: 14px 26px; letter-spacing: .18em; text-transform: uppercase; font-size: 10px; box-shadow: none; }
      .btn.ghost { border-color: var(--accent); }
      .hero-visual { border-radius: 0; border-color: var(--accent); box-shadow: none; }
      .logo-strip { letter-spacing: .3em; font-size: 10px; text-transform: uppercase; }
    `,
  },

  'bento-grid': {
    motif: 'dots',
    extraCss: `
      .kpis { grid-template-columns: 1.4fr 1fr 1fr; }
      .panel { box-shadow: var(--shadow); }
      .hero-visual { border-radius: var(--radius-lg); }
    `,
  },

  japandi: {
    motif: 'none',
    extraCss: `
      h1 { font-weight: 400; letter-spacing: -.01em; max-width: 16ch; }
      .eyebrow { letter-spacing: .2em; }
      .panel { border-color: rgba(44,41,37,.08); }
      .hero-visual { box-shadow: none; border-color: rgba(44,41,37,.10); }
      .btn { box-shadow: none; }
      .logo-strip { font-family: var(--font-display); letter-spacing: .06em; }
    `,
  },

  'wabi-sabi': {
    motif: 'paper',
    extraCss: `
      h1 { font-weight: 400; max-width: 15ch; }
      .hero-visual { transform: rotate(-.7deg); border-radius: 18px 4px 18px 4px; }
      .panel:nth-of-type(2n) { transform: rotate(.4deg); }
      .btn { border-radius: 18px 4px 18px 4px; }
      .eyebrow { letter-spacing: .26em; }
    `,
  },

  /* ---------------- B · Yüzey ve malzeme ---------------- */
  glassmorphism: {
    motif: 'blob',
    extraCss: `
      body {
        background:
          radial-gradient(34% 40% at 16% 20%, #7dd3fc 0%, transparent 62%),
          radial-gradient(32% 36% at 84% 26%, #a78bfa 0%, transparent 64%),
          radial-gradient(38% 38% at 58% 92%, #f472b6 0%, transparent 62%),
          linear-gradient(160deg, #1b1035, #2a1a5e 60%, #14082b);
        background-attachment: fixed;
      }
      .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.28); }
      .nav { background: rgba(255,255,255,.08); backdrop-filter: blur(20px) saturate(140%); }
      .logo-strip { background: rgba(255,255,255,.04); backdrop-filter: blur(18px); }
      .side { background: rgba(255,255,255,.06); backdrop-filter: blur(18px); }
      .hero-visual { background: rgba(255,255,255,.05); }
    `,
  },

  'liquid-glass': {
    motif: 'blob',
    extraCss: `
      body {
        background:
          radial-gradient(30% 34% at 22% 18%, #4cc9f0 0%, transparent 60%),
          radial-gradient(28% 32% at 78% 34%, #b5179e 0%, transparent 62%),
          radial-gradient(34% 34% at 46% 96%, #4361ee 0%, transparent 60%),
          linear-gradient(170deg, #0a0d12, #141a24);
        background-attachment: fixed;
      }
      .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.35); }
      .btn { border-radius: 999px; }
      .field, .icon-btn { border-radius: 999px; }
      .nav, .logo-strip { background: rgba(255,255,255,.05); backdrop-filter: blur(24px) saturate(150%); }
      .hero-visual { background: rgba(255,255,255,.04); }
    `,
  },

  neumorphism: {
    motif: 'none',
    extraCss: `
      .panel, .field, .icon-btn, .btn, .chip { border-color: transparent; }
      .btn { box-shadow: var(--shadow); }
      .hero-visual { border-color: transparent; box-shadow: var(--shadow); }
    `,
  },

  claymorphism: {
    motif: 'dots',
    extraCss: `
      .panel { box-shadow: var(--shadow), var(--shadow-hard); border-color: transparent; }
      .btn { border-radius: 999px; border-color: transparent; box-shadow: var(--shadow-hard); }
      .hero-visual { border-radius: 36px; border-color: transparent; }
      .mark, .avatar, .fab { border-radius: 999px; }
      h1 { font-weight: 600; }
    `,
  },

  'aurora-ui': {
    motif: 'blob',
    extraCss: `
      body {
        background:
          radial-gradient(40% 46% at 12% 8%, var(--bg-2) 0%, transparent 62%),
          radial-gradient(36% 40% at 88% 18%, var(--accent) 0%, transparent 58%),
          radial-gradient(30% 34% at 60% 96%, #22d3ee 0%, transparent 60%),
          var(--bg);
        background-attachment: fixed;
      }
      .panel { box-shadow: var(--shadow); }
    `,
  },

  /* ---------------- C · Cesur ve ham ---------------- */
  'neo-brutalism': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
      .panel, .field, .icon-btn, .btn.ghost, .hero-visual { border-width: 2px; }
      .btn { border: 2px solid var(--ink); }
      .chip { border-width: 1.5px; }
      .nav, .logo-strip, .table .trow, .side { border-color: var(--ink); }
      .side { border-right-width: 2px; }
      .nav { border-bottom-width: 2px; }
      .hero-visual { box-shadow: 8px 8px 0 var(--accent); }
      .kpi:nth-child(2) { background: var(--surface-2); }
      .eyebrow { color: var(--ink); font-weight: 700; }
      h1 { max-width: 13ch; }
    `,
  },

  'anti-design': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      .hero-visual { transform: rotate(-1.5deg); border-radius: 0; }
      .panel:nth-of-type(2n) { transform: rotate(.6deg); border-radius: 0; }
      .btn { border: 3px solid var(--ink); border-radius: 0; box-shadow: var(--shadow-hard); }
      .eyebrow { color: var(--accent); letter-spacing: .1em; }
      h1 { letter-spacing: -.01em; line-height: .92; }
      .field { border-radius: 0; border-width: 2px; }
      .nav { border-bottom: 3px solid var(--ink); }
    `,
  },

  'acid-graphics': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
      h1 { color: var(--accent); text-shadow: 0 0 28px rgba(204,255,0,.35); }
      .eyebrow { color: var(--accent); }
      .panel { border-color: rgba(204,255,0,.35); }
      .btn { box-shadow: 0 0 20px rgba(204,255,0,.25); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(0deg, rgba(204,255,0,.07) 0 1px, transparent 1px 4px);
      }
      .sig::after {
        content: ""; position: absolute; inset: 0;
        background: radial-gradient(circle at 82% 18%, rgba(204,255,0,.18), transparent 45%);
      }
    `,
  },

  memphis: {
    motif: 'dots',
    bodyClass: 'upper',
    extraCss: `
      .panel { border: 3px solid var(--ink); }
      .btn { border: 3px solid var(--ink); }
      .hero-visual { border: 3px solid var(--ink); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background:
          radial-gradient(circle at 8% 18%, var(--accent) 0 16px, transparent 17px),
          radial-gradient(circle at 92% 26%, #ffd93d 0 24px, transparent 25px),
          radial-gradient(circle at 14% 86%, #3ad1c4 0 12px, transparent 13px),
          radial-gradient(circle at 78% 92%, #7b5cff 0 10px, transparent 11px);
        opacity: .45;
      }
      .kpi:nth-child(2) { background: var(--surface-2); }
    `,
  },

  maximalism: {
    motif: 'bars',
    extraCss: `
      h1 { font-size: 66px; line-height: .92; }
      .hero-copy { max-width: 40ch; }
      .panel { border: 2px solid var(--ink); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(-45deg, rgba(122,31,61,.10) 0 10px, transparent 10px 20px);
        opacity: .8;
      }
      .hero-visual { box-shadow: 10px 10px 0 rgba(34,20,16,.85); }
    `,
  },

  'dopamine-ui': {
    motif: 'dots',
    extraCss: `
      .btn { border-radius: 999px; }
      .chip { border-radius: 999px; }
      .hero-visual { border-radius: 28px; }
      .kpi:nth-child(3) { background: var(--surface-2); }
      h1 { font-weight: 600; }
    `,
  },

  /* ---------------- D · Retro ve dönem ---------------- */
  y2k: {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: `
      h1 { letter-spacing: .02em; font-size: 52px; }
      .panel { background: linear-gradient(180deg, rgba(255,255,255,.95), rgba(214,236,255,.8)); }
      .hero-visual { background: linear-gradient(160deg, #ffffff, #cfe8ff 55%, #a9d4ff); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background:
          radial-gradient(circle at 88% 12%, rgba(123,92,255,.35) 0 3px, transparent 4px),
          radial-gradient(circle at 74% 22%, rgba(123,92,255,.25) 0 2px, transparent 3px),
          radial-gradient(circle at 12% 78%, rgba(47,155,224,.30) 0 3px, transparent 4px);
      }
    `,
  },

  vaporwave: {
    motif: 'grid',
    extraCss: `
      h1 { letter-spacing: .22em; font-weight: 400; text-transform: uppercase; }
      .panel { border-color: rgba(246,239,255,.22); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background:
          linear-gradient(transparent 58%, rgba(242,160,192,.30) 58%),
          repeating-linear-gradient(90deg, rgba(246,239,255,.14) 0 1px, transparent 1px 56px),
          repeating-linear-gradient(0deg, rgba(246,239,255,.14) 0 1px, transparent 1px 56px);
        -webkit-mask-image: linear-gradient(transparent 45%, #000 100%);
        mask-image: linear-gradient(transparent 45%, #000 100%);
      }
      .sig::after {
        content: ""; position: absolute; left: 50%; top: 42%; width: 260px; height: 260px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(242,160,192,.55) 0 40%, rgba(255,214,102,.35) 41% 60%, transparent 61%);
        filter: blur(2px);
        opacity: .5;
      }
    `,
  },

  synthwave: {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      h1 { letter-spacing: .04em; text-shadow: 0 0 18px rgba(255,42,109,.55); }
      .panel { border-color: rgba(255,42,109,.35); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background:
          radial-gradient(circle at 50% 76%, #ff2a6d 0 96px, #ff9e00 96px 132px, transparent 133px),
          repeating-linear-gradient(0deg, rgba(255,42,109,.45) 0 2px, transparent 2px 34px);
        opacity: .55;
      }
    `,
  },

  cyberpunk: {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      h1 { color: var(--accent); text-shadow: 0 0 16px rgba(249,240,2,.45); }
      .panel { border-color: rgba(5,217,232,.35); }
      .sig::before {
        content: ""; position: absolute; left: 0; right: 0; top: 0; height: 8px;
        background: repeating-linear-gradient(90deg, var(--accent) 0 14px, #0b0b0f 14px 28px);
        opacity: .85;
      }
      .sig::after {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(0deg, rgba(5,217,232,.06) 0 1px, transparent 1px 3px);
      }
    `,
  },

  cybercore: {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      h1::before { content: "> "; color: var(--accent); }
      .panel { border-color: rgba(51,255,153,.30); }
      .eyebrow { color: var(--accent); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(0deg, rgba(51,255,153,.055) 0 1px, transparent 1px 3px);
      }
      .hero-visual { border-color: rgba(51,255,153,.30); }
    `,
  },

  'pixel-art': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      *, *::before, *::after { border-radius: 0 !important; }
      h1 { font-size: 30px; line-height: 1.3; letter-spacing: 0; }
      h2 { font-size: 18px; }
      .lede { font-size: 14px; max-width: 40ch; }
      .hero-visual { border: 3px solid var(--ink); box-shadow: var(--shadow-hard); }
      .panel, .btn, .field { border-width: 2px; }
      .btn { box-shadow: var(--shadow-hard); }
      .eyebrow, .label, .chip { font-family: var(--font-display); font-size: 9px; letter-spacing: .06em; }
    `,
  },

  'frutiger-aero': {
    motif: 'rings',
    extraCss: `
      body { background: linear-gradient(180deg, #ffffff 0%, var(--bg) 42%, #c9e7ff 100%); }
      .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.95); }
      .hero-visual { background: radial-gradient(circle at 28% 18%, #ffffff, #cfe9ff 55%, #8ecbf2); }
      .btn { background: linear-gradient(180deg, #6fc0f0, var(--accent)); box-shadow: 0 2px 6px rgba(47,155,224,.45), inset 0 1px 0 rgba(255,255,255,.75); }
      .btn.ghost { background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(214,236,255,.7)); }
    `,
  },

  'art-deco': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: `
      h1 { letter-spacing: .10em; font-weight: 400; }
      .hero-visual { border: 1px solid var(--accent); outline: 1px solid var(--accent); outline-offset: 7px; box-shadow: none; }
      .eyebrow { color: var(--accent); letter-spacing: .32em; }
      .nav { border-bottom: 1px solid var(--accent); }
      .logo-strip { border-top: 1px solid var(--accent); letter-spacing: .24em; }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(90deg, rgba(200,162,74,.16) 0 1px, transparent 1px 9px);
        -webkit-mask-image: linear-gradient(#000, transparent 45%);
        mask-image: linear-gradient(#000, transparent 45%);
      }
    `,
  },

  victorian: {
    motif: 'rings',
    extraCss: `
      h1 { font-weight: 400; letter-spacing: .01em; line-height: 1.08; }
      .hero-copy { border: 1px solid var(--line); outline: 1px solid var(--line); outline-offset: 5px; padding: 22px; }
      .hero-visual { border: 1px solid var(--line); outline: 1px solid var(--line); outline-offset: 5px; box-shadow: none; }
      .nav { border-bottom: 3px double var(--line); }
      .lede::first-letter { font-family: var(--font-display); font-size: 42px; float: left; line-height: .8; padding-right: 6px; }
      .logo-strip { border-top: 3px double var(--line); }
    `,
  },

  /* ---------------- E · Sanatsal ve duygusal ---------------- */
  surrealism: {
    motif: 'blob',
    extraCss: `
      h1 { font-size: 72px; line-height: .92; max-width: 12ch; }
      .lede { font-size: 18px; max-width: 38ch; }
      .hero-visual { transform: scale(1.05) rotate(1.6deg); border-radius: 10px; }
      .kpi:nth-child(1) { transform: translateY(-6px); }
    `,
  },

  ethereal: {
    motif: 'blob',
    extraCss: `
      body {
        background:
          radial-gradient(60% 52% at 18% 8%, #efe6fb 0%, transparent 68%),
          radial-gradient(52% 52% at 86% 82%, #fde8ee 0%, transparent 68%),
          var(--bg);
        background-attachment: fixed;
      }
      h1 { font-weight: 300; letter-spacing: 0; }
      .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.6); }
      .btn { box-shadow: var(--shadow); }
      .eyebrow { letter-spacing: .3em; }
    `,
  },

  bohemian: {
    motif: 'dots',
    extraCss: `
      .hero-visual { border-radius: 24px 24px 24px 4px; }
      .panel { border-radius: 18px 18px 18px 3px; }
      h1 { font-weight: 400; }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(45deg, rgba(192,96,60,.07) 0 10px, transparent 10px 20px);
      }
    `,
  },

  scrapbook: {
    motif: 'paper',
    extraCss: `
      h1 { font-family: var(--font-display); font-weight: 700; letter-spacing: .005em; }
      .hero-visual { transform: rotate(-1.2deg); box-shadow: 6px 6px 0 rgba(31,43,58,.14); }
      .hero-visual::after {
        content: ""; position: absolute; top: -12px; left: 44px; width: 96px; height: 24px;
        background: rgba(255,246,214,.9); border: 1px solid rgba(31,43,58,.15); transform: rotate(-3deg);
      }
      .panel:nth-of-type(2n) { transform: rotate(.8deg); }
      .eyebrow { font-family: var(--font-display); font-size: 14px; letter-spacing: .02em; text-transform: none; }
    `,
  },

  'conceptual-sketch': {
    motif: 'paper',
    extraCss: `
      h1 { font-family: var(--font-display); font-weight: 400; letter-spacing: 0; }
      .panel { border: 1.5px dashed rgba(42,42,42,.35); box-shadow: none; }
      .hero-visual { border: 1.5px dashed rgba(42,42,42,.4); box-shadow: none; transform: rotate(-.5deg); }
      .btn { border: 1.5px solid var(--ink); box-shadow: var(--shadow-hard); }
      .field { border-style: dashed; }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(0deg, rgba(42,42,42,.05) 0 1px, transparent 1px 32px);
      }
    `,
  },

  'dark-academia': {
    motif: 'paper',
    extraCss: `
      body {
        background:
          radial-gradient(72% 62% at 26% 14%, #2a231c 0%, #1b1714 62%),
          var(--bg);
        background-attachment: fixed;
      }
      h1 { font-weight: 400; letter-spacing: .01em; line-height: 1.1; }
      .panel { border-color: rgba(176,134,63,.22); }
      .eyebrow { color: var(--accent); letter-spacing: .26em; }
      .hero-visual { border-color: rgba(176,134,63,.22); }
      .lede::first-letter { font-family: var(--font-display); font-size: 40px; float: left; line-height: .82; padding-right: 6px; color: var(--accent); }
    `,
  },

  skeuomorphism: {
    motif: 'none',
    extraCss: `
      .panel {
        background: linear-gradient(180deg, #fdf8ee, #ece3d2);
        border-color: #b9ad99;
        box-shadow: var(--shadow);
      }
      .nav, .logo-strip, .tabbar { background: linear-gradient(180deg, #ece3d2, #d8cfbd); border-color: #b9ad99; }
      .btn {
        background: linear-gradient(180deg, #479a74, #2f6b4f);
        border-color: #245139;
        text-shadow: 0 1px 0 rgba(0,0,0,.35);
        box-shadow: var(--shadow);
      }
      .btn.ghost { background: linear-gradient(180deg, #fbf6ea, #e3dac8); border-color: #b9ad99; color: var(--ink); text-shadow: none; }
      .field { background: #fffdf7; box-shadow: inset 0 2px 4px rgba(47,42,36,.22); }
      .hero-visual { background: linear-gradient(180deg, #fdf8ee, #e6dcc9); border-color: #b9ad99; }
      .mark { background: linear-gradient(180deg, #479a74, #245139); }
    `,
  },

  /* ---------------- F · Zamansız (41–44) ---------------- */
  'grand-tourer': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: GRAND_TOURER_CSS,
  },

  'grand-tourer-oxblood': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: GRAND_TOURER_CSS + GRAND_TOURER_OXBLOOD_CSS,
  },

  'grand-tourer-midnight': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: GRAND_TOURER_CSS,
  },

  /* ---------------- 44 · Utility (ai-design-skills uyarlaması) ---------------- */
  utility: {
    motif: 'grid',
    extraCss: `
      /* imza: hairline yüzey · gradyan başlık · tek accent · 680px ölçü · 4'ün katı boşluk */
      h1, h2, h3, h4 { font-weight: 600; letter-spacing: 0; }
      h1 { font-size: 60px; line-height: 1; max-width: 680px; }
      h2 { font-size: 48px; line-height: 1; max-width: 680px; }
      h3 { font-size: 36px; line-height: 1.11; }
      .hero h1 {
        background: linear-gradient(90deg, var(--ink), color-mix(in srgb, var(--ink) 60%, var(--bg)));
        -webkit-background-clip: text; background-clip: text; color: transparent;
      }
      .lede { font-size: 18px; line-height: 1.56; max-width: 680px; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 12px; letter-spacing: .02em; color: var(--ink-soft); }
      /* cümle düzeni: büyük harf dönüşümü yok, buton altı çizgisiz */
      .chip, .label, .eyebrow, .mono, .kpi .k, .btn, .nav-links a, .proof li, .logo-strip, .tbl th, .mini-table th { text-transform: none; }
      .btn { text-decoration: none; }
      /* nav: üstten kopmuş, içeriğe göre daralan tek parça bar */
      .nav {
        margin: 12px 24px; padding: 0 12px; border-radius: var(--radius-lg);
        border: 1px solid var(--line); box-shadow: none;
        background: color-mix(in srgb, var(--bg) 82%, transparent);
        -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
      }
      /* yüzey ayrımı gölgeyle değil hairline ile */
      .panel, .card, .kpi, .field, .chip, .visual-card, .comp-card-demo, .state-card {
        box-shadow: none; border: 1px solid var(--line);
      }
      .btn { font-weight: 600; padding: 8px 12px; min-height: 44px; border-radius: var(--radius); box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .btn.sm { min-height: 36px; padding: 8px 12px; font-size: 14px; }
      .chip { border-radius: var(--radius); background: var(--surface-2); color: var(--ink-soft); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .hero-visual { background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius-lg); }
      .bar:not(.accent) { background: var(--ink-soft); }
    `,
  },

  /* ---------------- 45 · Terminal UI (45–46 Teknik) ---------------- */
  'terminal-ui': {
    motif: 'grid',
    extraCss: `
      /* imza: mono ızgara · 1px çerçeve · ters video · efekt yok */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3, h4 { font-family: var(--font-mono); font-weight: 600; letter-spacing: 0; }
      h1 { font-size: 40px; line-height: 1.15; max-width: 26ch; }
      h2 { font-size: 24px; line-height: 1.3; }
      h3 { font-size: 18px; line-height: 1.35; }
      .lede { font-size: 14px; line-height: 1.55; max-width: 72ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }
      .eyebrow::before { content: '> '; color: var(--accent); }
      .nav {
        border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        background: var(--bg); padding: 0 16px; height: 40px;
      }
      .nav-links a { font-family: var(--font-mono); font-size: 13px; }
      .panel, .card, .kpi, .field, .chip, .visual-card, .comp-card-demo, .state-card {
        box-shadow: none; border: 1px solid var(--line); border-radius: var(--radius-lg);
      }
      .btn {
        font-family: var(--font-mono); font-size: 13px; font-weight: 600; text-transform: none;
        min-height: 36px; padding: 6px 10px; border-radius: var(--radius); box-shadow: none;
      }
      .btn::before { content: '['; margin-right: 5px; opacity: .65; }
      .btn::after { content: ']'; margin-left: 5px; opacity: .65; }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .chip { border-radius: 0; font-family: var(--font-mono); font-size: 11px; }
      .hero-visual { border-radius: 2px; background: var(--surface); border: 1px solid var(--line); }
      .bar { background: var(--accent); }
      .bar:not(.accent) { background: var(--ink-soft); }
      .proof li::before {
        content: '[ok]'; width: auto; height: auto; border-radius: 0; background: none;
        color: var(--accent); font-family: var(--font-mono); font-size: 11px;
      }
      .logo-strip span { letter-spacing: 0; text-transform: none; }
    `,
  },  /* >>> apply-fragments:styles >>> */
  'minimalism': {
    motif: 'none',
    extraCss: `h1 { max-width: 15ch; }`,
  },
  'swiss-design': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      .nav { border-bottom: 3px solid var(--ink); }
      .nav-links a { font-size: 12px; letter-spacing: .04em; }
      .eyebrow { color: var(--accent); letter-spacing: .18em; }
      h1 { font-weight: 700; letter-spacing: -.035em; }
      .hero-copy { border-left: 6px solid var(--accent); padding-left: 22px; }
      .btn { border-radius: 0; box-shadow: none; border: 2px solid var(--ink); }
      .btn.ghost { border-width: 2px; }
      .hero-visual { border-radius: 0; box-shadow: none; border-color: var(--ink); }
      .logo-strip { border-top: 3px solid var(--ink); font-weight: 700; letter-spacing: .12em; }
      .proof li::before { background: var(--accent); }
    `,
  },
  'editorial-design': {
    motif: 'paper',
    extraCss: `
      h1 { font-weight: 400; letter-spacing: -.01em; line-height: 1.04; }
      .hero-copy { max-width: 44ch; }
      .lede { font-family: var(--font-body); font-size: 15px; border-left: 3px solid var(--accent); padding-left: 14px; }
      .eyebrow { letter-spacing: .22em; }
      .panel { border-radius: var(--radius); }
      .hero-visual { box-shadow: none; border-radius: 2px; }
    `,
  },
  'luxury-typography': {
    motif: 'rings',
    extraCss: `
      .nav-links a, .brand { letter-spacing: .22em; text-transform: uppercase; font-size: 10px; }
      h1 { font-weight: 300; letter-spacing: .005em; line-height: 1.12; max-width: 14ch; }
      .eyebrow { letter-spacing: .34em; color: var(--accent); }
      .lede { font-family: var(--font-body); font-size: 13px; letter-spacing: .06em; max-width: 38ch; }
      .btn { padding: 14px 26px; letter-spacing: .18em; text-transform: uppercase; font-size: 10px; box-shadow: none; }
      .btn.ghost { border-color: var(--accent); }
      .hero-visual { border-radius: 0; border-color: var(--accent); box-shadow: none; }
      .logo-strip { letter-spacing: .3em; font-size: 10px; text-transform: uppercase; }
    `,
  },
  'bento-grid': {
    motif: 'dots',
    extraCss: `
      .kpis { grid-template-columns: 1.4fr 1fr 1fr; }
      .panel { box-shadow: var(--shadow); }
      .hero-visual { border-radius: var(--radius-lg); }
    `,
  },
  'japandi': {
    motif: 'none',
    extraCss: `
      h1 { font-weight: 400; letter-spacing: -.01em; max-width: 16ch; }
      .eyebrow { letter-spacing: .2em; }
      .panel { border-color: rgba(44,41,37,.08); }
      .hero-visual { box-shadow: none; border-color: rgba(44,41,37,.10); }
      .btn { box-shadow: none; }
      .logo-strip { font-family: var(--font-display); letter-spacing: .06em; }
    `,
  },
  'wabi-sabi': {
    motif: 'paper',
    extraCss: `
      h1 { font-weight: 400; max-width: 15ch; }
      .hero-visual { transform: rotate(-.7deg); border-radius: 18px 4px 18px 4px; }
      .panel:nth-of-type(2n) { transform: rotate(.4deg); }
      .btn { border-radius: 18px 4px 18px 4px; }
      .eyebrow { letter-spacing: .26em; }
    `,
  },
  'glassmorphism': {
    motif: 'blob',
    extraCss: `
      body {
        background:
          radial-gradient(34% 40% at 16% 20%, #7dd3fc 0%, transparent 62%),
          radial-gradient(32% 36% at 84% 26%, #a78bfa 0%, transparent 64%),
          radial-gradient(38% 38% at 58% 92%, #f472b6 0%, transparent 62%),
          linear-gradient(160deg, #1b1035, #2a1a5e 60%, #14082b);
        background-attachment: fixed;
      }
      .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.28); }
      .nav { background: rgba(255,255,255,.08); backdrop-filter: blur(20px) saturate(140%); }
      .logo-strip { background: rgba(255,255,255,.04); backdrop-filter: blur(18px); }
      .side { background: rgba(255,255,255,.06); backdrop-filter: blur(18px); }
      .hero-visual { background: rgba(255,255,255,.05); }
    `,
  },
  'liquid-glass': {
    motif: 'blob',
    extraCss: `
      body {
        background:
          radial-gradient(30% 34% at 22% 18%, #4cc9f0 0%, transparent 60%),
          radial-gradient(28% 32% at 78% 34%, #b5179e 0%, transparent 62%),
          radial-gradient(34% 34% at 46% 96%, #4361ee 0%, transparent 60%),
          linear-gradient(170deg, #0a0d12, #141a24);
        background-attachment: fixed;
      }
      .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.35); }
      .btn { border-radius: 999px; }
      .field, .icon-btn { border-radius: 999px; }
      .nav, .logo-strip { background: rgba(255,255,255,.05); backdrop-filter: blur(24px) saturate(150%); }
      .hero-visual { background: rgba(255,255,255,.04); }
    `,
  },
  'neumorphism': {
    motif: 'none',
    extraCss: `
      .panel, .field, .icon-btn, .btn, .chip { border-color: transparent; }
      .btn { box-shadow: var(--shadow); }
      .hero-visual { border-color: transparent; box-shadow: var(--shadow); }
    `,
  },
  'claymorphism': {
    motif: 'dots',
    extraCss: `
      .panel { box-shadow: var(--shadow), var(--shadow-hard); border-color: transparent; }
      .btn { border-radius: 999px; border-color: transparent; box-shadow: var(--shadow-hard); }
      .hero-visual { border-radius: 36px; border-color: transparent; }
      .mark, .avatar, .fab { border-radius: 999px; }
      h1 { font-weight: 600; }
    `,
  },
  'aurora-ui': {
    motif: 'blob',
    extraCss: `
      body {
        background:
          radial-gradient(40% 46% at 12% 8%, var(--bg-2) 0%, transparent 62%),
          radial-gradient(36% 40% at 88% 18%, var(--accent) 0%, transparent 58%),
          radial-gradient(30% 34% at 60% 96%, #22d3ee 0%, transparent 60%),
          var(--bg);
        background-attachment: fixed;
      }
      .panel { box-shadow: var(--shadow); }
    `,
  },
  'neo-brutalism': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
      .panel, .field, .icon-btn, .btn.ghost, .hero-visual { border-width: 2px; }
      .btn { border: 2px solid var(--ink); }
      .chip { border-width: 1.5px; }
      .nav, .logo-strip, .table .trow, .side { border-color: var(--ink); }
      .side { border-right-width: 2px; }
      .nav { border-bottom-width: 2px; }
      .hero-visual { box-shadow: 8px 8px 0 var(--accent); }
      .kpi:nth-child(2) { background: var(--surface-2); }
      .eyebrow { color: var(--ink); font-weight: 700; }
      h1 { max-width: 13ch; }
    `,
  },
  'anti-design': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      .hero-visual { transform: rotate(-1.5deg); border-radius: 0; }
      .panel:nth-of-type(2n) { transform: rotate(.6deg); border-radius: 0; }
      .btn { border: 3px solid var(--ink); border-radius: 0; box-shadow: var(--shadow-hard); }
      .eyebrow { color: var(--accent); letter-spacing: .1em; }
      h1 { letter-spacing: -.01em; line-height: .92; }
      .field { border-radius: 0; border-width: 2px; }
      .nav { border-bottom: 3px solid var(--ink); }
    `,
  },
  'acid-graphics': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
      h1 { color: var(--accent); text-shadow: 0 0 28px rgba(204,255,0,.35); }
      .eyebrow { color: var(--accent); }
      .panel { border-color: rgba(204,255,0,.35); }
      .btn { box-shadow: 0 0 20px rgba(204,255,0,.25); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(0deg, rgba(204,255,0,.07) 0 1px, transparent 1px 4px);
      }
      .sig::after {
        content: ""; position: absolute; inset: 0;
        background: radial-gradient(circle at 82% 18%, rgba(204,255,0,.18), transparent 45%);
      }
    `,
  },
  'memphis': {
    motif: 'dots',
    bodyClass: 'upper',
    extraCss: `
      .panel { border: 3px solid var(--ink); }
      .btn { border: 3px solid var(--ink); }
      .hero-visual { border: 3px solid var(--ink); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background:
          radial-gradient(circle at 8% 18%, var(--accent) 0 16px, transparent 17px),
          radial-gradient(circle at 92% 26%, #ffd93d 0 24px, transparent 25px),
          radial-gradient(circle at 14% 86%, #3ad1c4 0 12px, transparent 13px),
          radial-gradient(circle at 78% 92%, #7b5cff 0 10px, transparent 11px);
        opacity: .45;
      }
      .kpi:nth-child(2) { background: var(--surface-2); }
    `,
  },
  'maximalism': {
    motif: 'bars',
    extraCss: `
      h1 { font-size: 66px; line-height: .92; }
      .hero-copy { max-width: 40ch; }
      .panel { border: 2px solid var(--ink); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(-45deg, rgba(122,31,61,.10) 0 10px, transparent 10px 20px);
        opacity: .8;
      }
      .hero-visual { box-shadow: 10px 10px 0 rgba(34,20,16,.85); }
    `,
  },
  'dopamine-ui': {
    motif: 'dots',
    extraCss: `
      .btn { border-radius: 999px; }
      .chip { border-radius: 999px; }
      .hero-visual { border-radius: 28px; }
      .kpi:nth-child(3) { background: var(--surface-2); }
      h1 { font-weight: 600; }
    `,
  },
  'y2k': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: `
      h1 { letter-spacing: .02em; font-size: 52px; }
      .panel { background: linear-gradient(180deg, rgba(255,255,255,.95), rgba(214,236,255,.8)); }
      .hero-visual { background: linear-gradient(160deg, #ffffff, #cfe8ff 55%, #a9d4ff); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background:
          radial-gradient(circle at 88% 12%, rgba(123,92,255,.35) 0 3px, transparent 4px),
          radial-gradient(circle at 74% 22%, rgba(123,92,255,.25) 0 2px, transparent 3px),
          radial-gradient(circle at 12% 78%, rgba(47,155,224,.30) 0 3px, transparent 4px);
      }
    `,
  },
  'vaporwave': {
    motif: 'grid',
    extraCss: `
      h1 { letter-spacing: .22em; font-weight: 400; text-transform: uppercase; }
      .panel { border-color: rgba(246,239,255,.22); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background:
          linear-gradient(transparent 58%, rgba(242,160,192,.30) 58%),
          repeating-linear-gradient(90deg, rgba(246,239,255,.14) 0 1px, transparent 1px 56px),
          repeating-linear-gradient(0deg, rgba(246,239,255,.14) 0 1px, transparent 1px 56px);
        -webkit-mask-image: linear-gradient(transparent 45%, #000 100%);
        mask-image: linear-gradient(transparent 45%, #000 100%);
      }
      .sig::after {
        content: ""; position: absolute; left: 50%; top: 42%; width: 260px; height: 260px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(242,160,192,.55) 0 40%, rgba(255,214,102,.35) 41% 60%, transparent 61%);
        filter: blur(2px);
        opacity: .5;
      }
    `,
  },
  'synthwave': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      h1 { letter-spacing: .04em; text-shadow: 0 0 18px rgba(255,42,109,.55); }
      .panel { border-color: rgba(255,42,109,.35); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background:
          radial-gradient(circle at 50% 76%, #ff2a6d 0 96px, #ff9e00 96px 132px, transparent 133px),
          repeating-linear-gradient(0deg, rgba(255,42,109,.45) 0 2px, transparent 2px 34px);
        opacity: .55;
      }
    `,
  },
  'cyberpunk': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      h1 { color: var(--accent); text-shadow: 0 0 16px rgba(249,240,2,.45); }
      .panel { border-color: rgba(5,217,232,.35); }
      .sig::before {
        content: ""; position: absolute; left: 0; right: 0; top: 0; height: 8px;
        background: repeating-linear-gradient(90deg, var(--accent) 0 14px, #0b0b0f 14px 28px);
        opacity: .85;
      }
      .sig::after {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(0deg, rgba(5,217,232,.06) 0 1px, transparent 1px 3px);
      }
    `,
  },
  'cybercore': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      h1::before { content: "> "; color: var(--accent); }
      .panel { border-color: rgba(51,255,153,.30); }
      .eyebrow { color: var(--accent); }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(0deg, rgba(51,255,153,.055) 0 1px, transparent 1px 3px);
      }
      .hero-visual { border-color: rgba(51,255,153,.30); }
    `,
  },
  'pixel-art': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      *, *::before, *::after { border-radius: 0 !important; }
      h1 { font-size: 30px; line-height: 1.3; letter-spacing: 0; }
      h2 { font-size: 18px; }
      .lede { font-size: 14px; max-width: 40ch; }
      .hero-visual { border: 3px solid var(--ink); box-shadow: var(--shadow-hard); }
      .panel, .btn, .field { border-width: 2px; }
      .btn { box-shadow: var(--shadow-hard); }
      .eyebrow, .label, .chip { font-family: var(--font-display); font-size: 9px; letter-spacing: .06em; }
    `,
  },
  'frutiger-aero': {
    motif: 'rings',
    extraCss: `
      body { background: linear-gradient(180deg, #ffffff 0%, var(--bg) 42%, #c9e7ff 100%); }
      .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.95); }
      .hero-visual { background: radial-gradient(circle at 28% 18%, #ffffff, #cfe9ff 55%, #8ecbf2); }
      .btn { background: linear-gradient(180deg, #6fc0f0, var(--accent)); box-shadow: 0 2px 6px rgba(47,155,224,.45), inset 0 1px 0 rgba(255,255,255,.75); }
      .btn.ghost { background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(214,236,255,.7)); }
    `,
  },
  'art-deco': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: `
      h1 { letter-spacing: .10em; font-weight: 400; }
      .hero-visual { border: 1px solid var(--accent); outline: 1px solid var(--accent); outline-offset: 7px; box-shadow: none; }
      .eyebrow { color: var(--accent); letter-spacing: .32em; }
      .nav { border-bottom: 1px solid var(--accent); }
      .logo-strip { border-top: 1px solid var(--accent); letter-spacing: .24em; }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(90deg, rgba(200,162,74,.16) 0 1px, transparent 1px 9px);
        -webkit-mask-image: linear-gradient(#000, transparent 45%);
        mask-image: linear-gradient(#000, transparent 45%);
      }
    `,
  },
  'victorian': {
    motif: 'rings',
    extraCss: `
      h1 { font-weight: 400; letter-spacing: .01em; line-height: 1.08; }
      .hero-copy { border: 1px solid var(--line); outline: 1px solid var(--line); outline-offset: 5px; padding: 22px; }
      .hero-visual { border: 1px solid var(--line); outline: 1px solid var(--line); outline-offset: 5px; box-shadow: none; }
      .nav { border-bottom: 3px double var(--line); }
      .lede::first-letter { font-family: var(--font-display); font-size: 42px; float: left; line-height: .8; padding-right: 6px; }
      .logo-strip { border-top: 3px double var(--line); }
    `,
  },
  'surrealism': {
    motif: 'blob',
    extraCss: `
      h1 { font-size: 72px; line-height: .92; max-width: 12ch; }
      .lede { font-size: 18px; max-width: 38ch; }
      .hero-visual { transform: scale(1.05) rotate(1.6deg); border-radius: 10px; }
      .kpi:nth-child(1) { transform: translateY(-6px); }
    `,
  },
  'ethereal': {
    motif: 'blob',
    extraCss: `
      body {
        background:
          radial-gradient(60% 52% at 18% 8%, #efe6fb 0%, transparent 68%),
          radial-gradient(52% 52% at 86% 82%, #fde8ee 0%, transparent 68%),
          var(--bg);
        background-attachment: fixed;
      }
      h1 { font-weight: 300; letter-spacing: 0; }
      .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.6); }
      .btn { box-shadow: var(--shadow); }
      .eyebrow { letter-spacing: .3em; }
    `,
  },
  'bohemian': {
    motif: 'dots',
    extraCss: `
      .hero-visual { border-radius: 24px 24px 24px 4px; }
      .panel { border-radius: 18px 18px 18px 3px; }
      h1 { font-weight: 400; }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(45deg, rgba(192,96,60,.07) 0 10px, transparent 10px 20px);
      }
    `,
  },
  'scrapbook': {
    motif: 'paper',
    extraCss: `
      h1 { font-family: var(--font-display); font-weight: 700; letter-spacing: .005em; }
      .hero-visual { transform: rotate(-1.2deg); box-shadow: 6px 6px 0 rgba(31,43,58,.14); }
      .hero-visual::after {
        content: ""; position: absolute; top: -12px; left: 44px; width: 96px; height: 24px;
        background: rgba(255,246,214,.9); border: 1px solid rgba(31,43,58,.15); transform: rotate(-3deg);
      }
      .panel:nth-of-type(2n) { transform: rotate(.8deg); }
      .eyebrow { font-family: var(--font-display); font-size: 14px; letter-spacing: .02em; text-transform: none; }
    `,
  },
  'conceptual-sketch': {
    motif: 'paper',
    extraCss: `
      h1 { font-family: var(--font-display); font-weight: 400; letter-spacing: 0; }
      .panel { border: 1.5px dashed rgba(42,42,42,.35); box-shadow: none; }
      .hero-visual { border: 1.5px dashed rgba(42,42,42,.4); box-shadow: none; transform: rotate(-.5deg); }
      .btn { border: 1.5px solid var(--ink); box-shadow: var(--shadow-hard); }
      .field { border-style: dashed; }
      .sig::before {
        content: ""; position: absolute; inset: 0;
        background: repeating-linear-gradient(0deg, rgba(42,42,42,.05) 0 1px, transparent 1px 32px);
      }
    `,
  },
  'dark-academia': {
    motif: 'paper',
    extraCss: `
      body {
        background:
          radial-gradient(72% 62% at 26% 14%, #2a231c 0%, #1b1714 62%),
          var(--bg);
        background-attachment: fixed;
      }
      h1 { font-weight: 400; letter-spacing: .01em; line-height: 1.1; }
      .panel { border-color: rgba(176,134,63,.22); }
      .eyebrow { color: var(--accent); letter-spacing: .26em; }
      .hero-visual { border-color: rgba(176,134,63,.22); }
      .lede::first-letter { font-family: var(--font-display); font-size: 40px; float: left; line-height: .82; padding-right: 6px; color: var(--accent); }
    `,
  },
  'skeuomorphism': {
    motif: 'none',
    extraCss: `
      .panel {
        background: linear-gradient(180deg, #fdf8ee, #ece3d2);
        border-color: #b9ad99;
        box-shadow: var(--shadow);
      }
      .nav, .logo-strip, .tabbar { background: linear-gradient(180deg, #ece3d2, #d8cfbd); border-color: #b9ad99; }
      .btn {
        background: linear-gradient(180deg, #479a74, #2f6b4f);
        border-color: #245139;
        text-shadow: 0 1px 0 rgba(0,0,0,.35);
        box-shadow: var(--shadow);
      }
      .btn.ghost { background: linear-gradient(180deg, #fbf6ea, #e3dac8); border-color: #b9ad99; color: var(--ink); text-shadow: none; }
      .field { background: #fffdf7; box-shadow: inset 0 2px 4px rgba(47,42,36,.22); }
      .hero-visual { background: linear-gradient(180deg, #fdf8ee, #e6dcc9); border-color: #b9ad99; }
      .mark { background: linear-gradient(180deg, #479a74, #245139); }
    `,
  },
  'bauhaus': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
      .nav { border-bottom: 3px solid var(--ink); }
      h1 { max-width: 15ch; font-size: 58px; line-height: .98; }
      .hero-copy { border-left: 3px solid var(--accent); padding-left: 20px; }
      .btn { border: 2px solid var(--ink); box-shadow: none; }
      .btn:not(.ghost):not(.soft) { box-shadow: none; }
      .panel { border: 2px solid var(--ink); }
      .visual-card { border: 2px solid var(--ink); }
      .mark { border-radius: 0; }
      body.scene-landing .sig::before {
        content: ''; position: absolute; right: 6vw; top: 8vh;
        width: 156px; height: 156px; border-radius: 50%; background: var(--accent); opacity: .9;
      }
      body.scene-landing .sig::after {
        content: ''; position: absolute; left: 47vw; top: 60vh;
        width: 0; height: 0; border-left: 44px solid transparent;
        border-right: 44px solid transparent; border-bottom: 70px solid var(--ink); opacity: .10;
      }
      @media (max-width: 900px) { .sig::before, .sig::after { display: none; } }
    `,
  },
  'constructivism': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
      /* imza: kalın diagonal çubuk + 3px siyah kural + uppercase display */
      .nav { border-bottom: 3px solid var(--line); }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
      .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; }
      h1 { font-size: 62px; line-height: .94; letter-spacing: -.01em; max-width: 16ch; }
      h2 { font-size: 27px; line-height: 1.02; letter-spacing: 0; }
      .eyebrow { color: var(--accent); letter-spacing: .22em; }
      .lede { max-width: 44ch; }
      .hero-copy { border-left: 6px solid var(--accent); padding-left: 24px; }
      .btn {
        border: 3px solid var(--line); border-radius: 0; box-shadow: none;
        font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
      }
      .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; color: var(--ink); border: 3px solid var(--line); }
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card {
        border: 3px solid var(--line); border-radius: 0; box-shadow: none; backdrop-filter: none;
      }
      .hero-visual { box-shadow: var(--shadow-hard); border: 3px solid var(--line); border-radius: 0; }
      .field, input, select, textarea { border: 3px solid var(--line); border-radius: 0; background: var(--surface); }
      .chip { border: 1px solid var(--line); border-radius: 0; font-family: var(--font-mono); letter-spacing: .16em; text-transform: uppercase; }
      .mark { border-radius: 0; }
      .empty-ic { border-radius: 0; border: 3px solid var(--line); }
      .opt .box, .opt.round .box, .opt.round input:checked + .box::after { border-radius: 0; }
      .divider { height: 3px; }
      .avatar, .avatar-lg, .fab { border-radius: 0; }
      .fab { border: 3px solid var(--line); }
      .scene-mobile .tabs span { border-radius: 0; }
      .tabbar { border-top: 3px solid var(--line); }
      .track, .track i { border-radius: 0; }
      .logo-strip { border-top: 6px solid var(--line); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .16em; }
      .proof li::before { background: var(--accent); border-radius: 0; }
      /* hero görselinde kalın diagonal accent çubuk (kartın arkasında) */
      .hero-visual::after {
        content: ""; position: absolute; z-index: 1;
        left: -16%; right: -16%; top: 44%; height: 38px;
        background: var(--accent); transform: rotate(-20deg);
      }
      /* landing: sağ kenarda dikey kırmızı çubuk + ince diagonal kural */
      body.scene-landing .sig::before {
        content: ""; position: absolute; top: 0; bottom: 0; right: 0; width: 20px;
        background: var(--accent);
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; right: 20px; top: 0; bottom: 0; width: 6px;
        background: var(--line); opacity: .16;
      }
      @media (max-width: 900px) {
        h1 { font-size: 34px; max-width: 18ch; }
        body.scene-landing .sig::before { width: 12px; }
        body.scene-landing .sig::after { display: none; }      }
    `,
  },
  'kinetic-type': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
      /* imza: dev ölçek atlaması + sıkı satır + negatif tracking + diagonal accent şerit */
      .nav { border-bottom: 1px solid var(--line); padding: 0 40px; }
      /* hero 1.6fr / 1fr ≈ 8 / 5 — dev tipografiye geniş kolon */
      body.scene-landing .hero { grid-template-columns: 1.6fr 1fr; gap: 44px; }
      .brand, .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; }
      h1 { font-size: clamp(28px, 7vw, 96px); line-height: .95; letter-spacing: -.03em; text-transform: uppercase; max-width: 15ch; }
      /* Anton tek ağırlık: sentetik kalınlaştırma harfleri bulandırır */
      h1, h2, .type-scale .line b, .kpi .v, .kpi .num-big, .big404 { font-weight: 400; }
      .big404 { font-size: 58px; line-height: .9; letter-spacing: -.03em; }
      h2 { font-size: 32px; line-height: 1.0; letter-spacing: -.02em; text-transform: uppercase; }
      .art-main h2 { font-size: 24px; line-height: 1.12; letter-spacing: -.02em; }
      .auth-card h1 { font-size: 26px; line-height: 1.1; margin-bottom: 4px; }
      .ob-card h1 { font-size: 34px; line-height: 1.06; }
      .art-main blockquote { font-size: 22px; line-height: 1.16; letter-spacing: -.01em; border-left-width: 4px; }
      .app-bar h2 { font-size: 26px; line-height: 1.0; }
      h3 { font-family: var(--font-body); font-size: 19px; font-weight: 700; letter-spacing: -.01em; line-height: 1.2; }
      h4 { font-family: var(--font-body); font-size: 15px; font-weight: 700; letter-spacing: 0; line-height: 1.3; }
      .type-scale { gap: 10px; }
      .type-scale .line b { line-height: 1.2; }
      .eyebrow, .label { font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .lede { max-width: 44ch; font-size: 15px; line-height: 1.55; }
      .btn {
        border-radius: 2px; box-shadow: none;
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
      }
      .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card {
        border-radius: 4px; box-shadow: none; backdrop-filter: none;
      }
      .hero-visual { border-radius: 4px; box-shadow: none; }
      .field, input, select, textarea { border-radius: 2px; background: var(--surface); }
      .chip { border-radius: 2px; font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; }
      .mark { border-radius: 2px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-mono); }
      .divider, .track, .track i, .tabbar, .empty-ic { border-radius: 2px; }
      .avatar, .avatar-lg, .fab { border-radius: 2px; }
      .logo-strip { border-top: 1px solid var(--line); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .16em; }
      .proof li::before { background: var(--accent); border-radius: 0; }
      /* diagonal accent şerit: hero görselinin arkasından geçer */
      .hero-visual::after {
        content: ""; position: absolute; z-index: 1;
        left: -14%; right: -14%; top: 58%; height: 12px;
        background: var(--accent); transform: rotate(-6deg);
      }
      /* döndürülmüş kelime katmanı (ekran başına tek) */
      .hero-visual::before {
        content: "KİNETİK"; position: absolute; z-index: 1; left: 5%; bottom: 5%;
        font-family: var(--font-display); font-size: 44px; line-height: .9; letter-spacing: -.02em;
        color: var(--ink-faint); text-transform: uppercase; transform: rotate(-6deg); opacity: .42;
      }
      @media (max-width: 900px) {
        h1 { font-size: clamp(28px, 9vw, 44px); max-width: 18ch; }
        .hero-visual::after { height: 8px; top: 54%; }
        .hero-visual::before { font-size: 26px; bottom: 9%; }
      }
    `,
  },
  'organic-bio': {
    motif: 'blob',
    extraCss: `
      /* imza: asimetrik yumuşak radius + katmanlı blob + 1px ince çizgi */
      .nav { border-bottom: 1px solid var(--line); padding: 22px 44px; }
      .mark {
        border-radius: 42% 58% 55% 45% / 52% 45% 55% 48%;
        background: var(--accent); color: var(--accent-ink);
      }
      h1 { font-size: 54px; line-height: 1.06; letter-spacing: -.01em; max-width: 19ch; }
      h2 { font-size: 30px; line-height: 1.16; }
      h3 { font-size: 18px; }
      .lede { max-width: 46ch; font-size: 16px; line-height: 1.68; }
      .eyebrow, .label { letter-spacing: .14em; }
      .hero-copy { gap: 16px; }
      .btn { border-radius: 999px; border: 1px solid transparent; min-height: 44px; padding: 0 22px; }
      .btn.ghost { border-color: var(--line); background: var(--surface); box-shadow: none; }
      .panel {
        border: 1px solid var(--line); border-radius: 26px 26px 26px 8px;
        box-shadow: var(--shadow); backdrop-filter: none;
      }
      .panel-2, .kpi, .comp-card, .m-tile {
        border: 1px solid var(--line); border-radius: 18px 18px 18px 6px;
        box-shadow: none; backdrop-filter: none;
      }
      .hero-visual {
        border: 1px solid var(--line); border-radius: 26px 26px 26px 8px;
        box-shadow: var(--shadow);
      }
      .visual-card { border-radius: 18px 18px 18px 6px; box-shadow: var(--shadow); }
      .visual-card .bar { border-radius: 9px; }
      .visual-row { border-radius: 12px; }
      .visual-row .sq { border-radius: 42% 58% 51% 49% / 55% 45% 55% 45%; }
      .field, input, select, textarea { border: 1px solid var(--line); border-radius: 14px; background: var(--surface); }
      .chip { border: 1px solid var(--line); border-radius: 999px; letter-spacing: .14em; }
      .divider { height: 1px; background: var(--line); }
      .opt .box { border-radius: 8px; }
      .opt.round .box { border-radius: 999px; }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 42% 58% 55% 45% / 52% 45% 55% 48%; }
      .fab, .empty-ic { box-shadow: var(--shadow); }
      .tabbar, .track, .track i { border-radius: 999px; }
      .proof li::before { border-radius: 42% 58% 51% 49% / 55% 45% 55% 45%; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }
      .table-row, .trow, tr { border-radius: 12px; }
      /* landing/mobile: iki yumuşak blob + büyüme halkaları (süs, metnin altında) */
      body.scene-landing .sig::before, body.scene-mobile .sig::before {
        content: ""; position: absolute; right: -8vw; top: -10vh; width: 52vw; height: 52vw;
        border-radius: 46% 54% 48% 52% / 52% 46% 54% 48%;
        background: radial-gradient(58% 58% at 40% 40%, var(--accent) 0%, transparent 72%);
        opacity: .14; filter: none;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: -10vw; bottom: -14vh; width: 38vw; height: 38vw;
        border-radius: 50%; opacity: .10;
        background: radial-gradient(60% 60% at 50% 50%, var(--accent) 0%, transparent 74%);
      }
      body.scene-mobile .sig::after {
        content: ""; position: absolute; left: -18vw; bottom: 6vh; width: 46vw; height: 46vw;
        border-radius: 50%; opacity: .10;
        background: repeating-radial-gradient(circle at 50% 50%, transparent 0 18px, var(--line) 18px 19px, transparent 19px 40px);
      }
      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        .panel, .hero-visual { border-radius: 22px 22px 22px 8px; }
        body.scene-landing .sig::after { display: none; }
      }
    `,
  },
  'ai-native-mesh': {
    motif: 'mesh',
    extraCss: `
      /* imza: iki katmanlı mesh atmosfer + cam kart + tek üst iç parlaklık */
      h1 { font-size: 40px; font-weight: 600; line-height: 1.14; letter-spacing: var(--tracking); max-width: 24ch; }
      h2 { font-size: 26px; font-weight: 600; line-height: 1.2; letter-spacing: var(--tracking); }
      h3 { font-size: 20px; font-weight: 500; letter-spacing: -.005em; }
      .eyebrow, .label, .mono { letter-spacing: .1em; }
      .eyebrow { color: var(--accent); }
      .lede { max-width: 54ch; font-size: 16px; line-height: 1.6; color: var(--ink-soft); }
      .mark { border-radius: var(--radius); background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }

      /* 1 · cam yüzey: surface %82 + blur 14px + yalnız üst kenarda 1px iç parlaklık */
      .panel, .visual-card {
        background: color-mix(in srgb, var(--surface) 82%, transparent);
        border: 1px solid var(--line);
        border-radius: var(--radius-lg);
        box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow);
        backdrop-filter: blur(var(--blur)) saturate(112%);
      }
      .kpi, .m-tile, .state-card { border-radius: var(--radius); }
      .table { border-radius: var(--radius-lg); }
      .plan.hot { border-color: var(--line); box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow); }
      .plan.hot::before {
        content: ""; position: absolute; left: 0; right: 0; top: 0; height: 2px;
        background: var(--accent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
      }

      /* 2 · mat ikincil yüzey: blur yok, cam üstüne cam yasak */
      .comp-card-demo, .visual-row, .sk, .code, .ob-opt, .opt .box {
        background: var(--surface-2); backdrop-filter: none; box-shadow: none;
      }

      /* 3 · kontroller */
      .btn { min-height: 44px; padding: 0 20px; border-radius: var(--radius); font-size: 13px; font-weight: 600; letter-spacing: .01em; }
      .btn.sm { min-height: 34px; padding: 8px 14px; }
      .btn.ghost {
        background: color-mix(in srgb, var(--surface) 60%, transparent);
        border-color: var(--line); box-shadow: none; backdrop-filter: blur(var(--blur));
      }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .field.focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip { border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line); letter-spacing: .1em; backdrop-filter: none; }
      .icon-btn { border-radius: var(--radius); background: var(--surface-2); }
      .divider { height: 1px; background: var(--line); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .avatar { background: var(--surface-2); border: 1px solid var(--line); }
      .track, .track i { border-radius: 999px; }
      .opt .box { border-radius: 6px; }
      .opt.round .box { border-radius: 999px; }

      /* 4 · gezinme: cam nav, alt 1px kural, aktif 2px accent */
      .nav {
        background: color-mix(in srgb, var(--surface) 72%, transparent);
        backdrop-filter: blur(var(--blur)) saturate(112%);
        border-bottom: 1px solid var(--line);
      }
      .nav-links a { color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }
      .tabbar {
        background: color-mix(in srgb, var(--surface) 78%, transparent);
        backdrop-filter: blur(var(--blur)); border-top: 1px solid var(--line);
      }
      .scene-m-sheet .m-sheet, .scene-m-form .m-foot {
        background: color-mix(in srgb, var(--surface) 90%, transparent);
        backdrop-filter: blur(var(--blur));
      }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }

      /* 5 · atmosfer: kahraman görselde iki katman (radial çifti + conic) */
      .motif-mesh::before {
        content: ""; position: absolute; inset: -18% -14%; pointer-events: none;
        background:
          radial-gradient(52% 46% at 18% 22%, color-mix(in srgb, var(--accent) 84%, transparent) 0%, transparent 64%),
          radial-gradient(46% 42% at 78% 74%, color-mix(in srgb, var(--accent) 46%, transparent) 0%, transparent 66%);
        filter: blur(16px) saturate(118%);
        opacity: .5;
      }
      .motif-mesh::after {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background: conic-gradient(
          from 210deg at 62% 38%,
          color-mix(in srgb, var(--accent) 44%, transparent) 0deg,
          transparent 130deg,
          color-mix(in srgb, var(--ink) 14%, transparent) 235deg,
          transparent 360deg);
        filter: blur(22px);
        opacity: .5;
      }
      .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); }

      /* 6 · sayfa atmosferi: tek renk ailesi, ≤ .16, hareket yok */
      body.scene-landing .sig::before {
        content: ""; position: absolute; right: -14vw; top: -26vh; width: 72vw; height: 72vw;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 88%, transparent) 0%, transparent 70%);
        opacity: .16; filter: blur(26px); pointer-events: none;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: -16vw; bottom: -30vh; width: 58vw; height: 58vw;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--ink) 40%, transparent) 0%, transparent 72%);
        opacity: .10; filter: blur(34px); pointer-events: none;
      }
      body.scene-dashboard .sig::before, body.scene-auth .sig::before, body.scene-onboarding .sig::before {
        content: ""; position: absolute; right: -18vw; top: -30vh; width: 64vw; height: 64vw;
        background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 80%, transparent) 0%, transparent 70%);
        opacity: .10; filter: blur(30px); pointer-events: none;
      }
      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 22ch; }
        .panel, .visual-card { border-radius: var(--radius-lg); }
        body.scene-landing .sig::after, body.scene-dashboard .sig::before { display: none; }
        body.scene-landing .sig::before { opacity: .12; }
      }
    `,
  },
  'scandinavian-dark': {
    motif: 'paper',
    extraCss: `
      /* imza: mat koyu yüzey + 1px hairline + geniş boşluk + sakin başlık */
      .motif-paper::before { opacity: .08; }
      .nav { border-bottom: 1px solid var(--line); padding: 24px 48px; }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: var(--tracking); text-transform: none; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .01em; text-transform: none; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 44px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 21ch; text-transform: none; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 26px; line-height: 1.2; letter-spacing: var(--tracking); text-transform: none; }
      h3 { font-weight: 500; letter-spacing: 0; }
      h4 { font-weight: 500; }
      .art-main h2, .auth-card h1, .ob-card h1, .app-bar h2 { font-weight: 400; letter-spacing: var(--tracking); }
      .big404 { font-family: var(--font-display); font-weight: 400; font-size: 64px; line-height: 1; letter-spacing: var(--tracking); }
      .eyebrow, .label, .mono { letter-spacing: .12em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      .lede { max-width: 52ch; font-size: 16px; line-height: 1.7; color: var(--ink-soft); }
      .mark { border-radius: var(--radius); background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); font-family: var(--font-display); }
      .btn { min-height: 44px; padding: 0 20px; border-radius: var(--radius); box-shadow: none; font-size: 13px; font-weight: 500; letter-spacing: .01em; text-transform: none; }
      .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .panel, .panel-2, .kpi, .comp-card, .m-tile {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; padding: 30px;
      }
      .kpi, .m-tile { padding: 20px; }
      .table {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; padding: 0; overflow: hidden;
      }
      .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: var(--shadow); }
      .plan { padding: 24px; }
      .plan.hot { background: var(--surface-2); border-color: var(--line); box-shadow: none; }
      .plan.hot::before {
        content: ""; position: absolute; left: 0; right: 0; top: 0; height: 2px;
        background: var(--accent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
      }
      .plan .price b { font-weight: 400; letter-spacing: var(--tracking); }
      .comp-card-demo { border-radius: var(--radius); }
      .field, input, select, textarea { border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-2); color: var(--ink); }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip { height: 26px; border: 1px solid var(--line); border-radius: 4px; background: var(--surface-2); letter-spacing: .12em; }
      .divider { height: 1px; background: var(--line); }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .04em; }
      .proof li::before { background: var(--accent); border-radius: 2px; }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .tabbar { border-top: 1px solid var(--line); }
      .track, .track i { border-radius: 3px; }
      .opt .box { border-radius: 4px; }
      .opt.round .box { border-radius: 999px; }
      /* kuzey ışığı: tek geniş, çok soluk ışık lekesi (süs değil, ışık) */
      body.scene-landing .sig::before {
        content: ""; position: absolute; right: -10vw; top: -22vh; width: 62vw; height: 62vw;
        background: radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%);
        opacity: .07; pointer-events: none;
      }
      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 22ch; }
        .panel, .panel-2, .comp-card { padding: 20px; }
        body.scene-landing .sig::before { opacity: .05; }
      }
    `,
  },
  'grand-tourer': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: GRAND_TOURER_CSS,
  },
  'grand-tourer-oxblood': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: GRAND_TOURER_CSS + GRAND_TOURER_OXBLOOD_CSS,
  },
  'grand-tourer-midnight': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: GRAND_TOURER_CSS,
  },
  'utility': {
    motif: 'grid',
    extraCss: `
      /* imza: hairline yüzey · gradyan başlık · tek accent · 680px ölçü · 4'ün katı boşluk */
      h1, h2, h3, h4 { font-weight: 600; letter-spacing: 0; }
      h1 { font-size: 60px; line-height: 1; max-width: 680px; }
      h2 { font-size: 48px; line-height: 1; max-width: 680px; }
      h3 { font-size: 36px; line-height: 1.11; }
      .hero h1 {
        background: linear-gradient(90deg, var(--ink), color-mix(in srgb, var(--ink) 60%, var(--bg)));
        -webkit-background-clip: text; background-clip: text; color: transparent;
      }
      .lede { font-size: 18px; line-height: 1.56; max-width: 680px; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 12px; letter-spacing: .02em; color: var(--ink-soft); }
      /* cümle düzeni: büyük harf dönüşümü yok, buton altı çizgisiz */
      .chip, .label, .eyebrow, .mono, .kpi .k, .btn, .nav-links a, .proof li, .logo-strip, .tbl th, .mini-table th { text-transform: none; }
      .btn { text-decoration: none; }
      /* nav: üstten kopmuş, içeriğe göre daralan tek parça bar */
      .nav {
        margin: 12px 24px; padding: 0 12px; border-radius: var(--radius-lg);
        border: 1px solid var(--line); box-shadow: none;
        background: color-mix(in srgb, var(--bg) 82%, transparent);
        -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
      }
      /* yüzey ayrımı gölgeyle değil hairline ile */
      .panel, .card, .kpi, .field, .chip, .visual-card, .comp-card-demo, .state-card {
        box-shadow: none; border: 1px solid var(--line);
      }
      .btn { font-weight: 600; padding: 8px 12px; min-height: 44px; border-radius: var(--radius); box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .btn.sm { min-height: 36px; padding: 8px 12px; font-size: 14px; }
      .chip { border-radius: var(--radius); background: var(--surface-2); color: var(--ink-soft); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .hero-visual { background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius-lg); }
      .bar:not(.accent) { background: var(--ink-soft); }
    `,
  },
  'terminal-ui': {
    motif: 'grid',
    extraCss: `
      /* imza: mono ızgara · 1px çerçeve · ters video · efekt yok */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3, h4 { font-family: var(--font-mono); font-weight: 600; letter-spacing: 0; }
      h1 { font-size: 40px; line-height: 1.15; max-width: 26ch; }
      h2 { font-size: 24px; line-height: 1.3; }
      h3 { font-size: 18px; line-height: 1.35; }
      .lede { font-size: 14px; line-height: 1.55; max-width: 72ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }
      .eyebrow::before { content: '> '; color: var(--accent); }
      .nav {
        border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        background: var(--bg); padding: 0 16px; height: 40px;
      }
      .nav-links a { font-family: var(--font-mono); font-size: 13px; }
      .panel, .card, .kpi, .field, .chip, .visual-card, .comp-card-demo, .state-card {
        box-shadow: none; border: 1px solid var(--line); border-radius: var(--radius-lg);
      }
      .btn {
        font-family: var(--font-mono); font-size: 13px; font-weight: 600; text-transform: none;
        min-height: 36px; padding: 6px 10px; border-radius: var(--radius); box-shadow: none;
      }
      .btn::before { content: '['; margin-right: 5px; opacity: .65; }
      .btn::after { content: ']'; margin-left: 5px; opacity: .65; }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .chip { border-radius: 0; font-family: var(--font-mono); font-size: 11px; }
      .hero-visual { border-radius: 2px; background: var(--surface); border: 1px solid var(--line); }
      .bar { background: var(--accent); }
      .bar:not(.accent) { background: var(--ink-soft); }
      .proof li::before {
        content: '[ok]'; width: auto; height: auto; border-radius: 0; background: none;
        color: var(--accent); font-family: var(--font-mono); font-size: 11px;
      }
      .logo-strip span { letter-spacing: 0; text-transform: none; }
    `,
  },
  'telemetry-grid': {
    motif: 'grid',
    bodyClass: '',
    extraCss: `
      /* imza: 24px ölçüm ızgarası · hairline tile · eşik şeridi · tabular rakam */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
      h1 { font-size: 34px; line-height: 1.14; max-width: 24ch; }
      h2 { font-size: 22px; line-height: 1.28; }
      h3 { font-size: 17px; line-height: 1.32; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; font-weight: 500;
        letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '\\25CF'; color: var(--accent); margin-right: 6px; font-size: 8px; vertical-align: middle; }
      .lede { font-size: 15px; line-height: 1.52; max-width: 62ch; color: var(--ink-soft); }

      .nav {
        height: 48px; padding: 0 16px; border-radius: 0;
        border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none;
      }
      .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em; text-transform: uppercase; }

      /* tile: hairline kutu + üst etiket satırı + 3px sol eşik şeridi */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
        background-image: linear-gradient(90deg, var(--accent) 0 3px, transparent 3px);
        padding-left: 12px;
      }
      .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
        font-family: var(--font-mono); font-weight: 500; letter-spacing: -.01em;
        font-variant-numeric: tabular-nums;
      }
      .kpi .v { font-size: 30px; line-height: 1.1; }

      .btn {
        min-height: 34px; padding: 0 12px; border-radius: var(--radius);
        font-family: var(--font-display); font-size: 13px; font-weight: 600;
        box-shadow: none; border: 1px solid transparent;
      }
      .btn.ghost, .btn.soft {
        background: var(--surface); border-color: var(--line); color: var(--ink);
        font-family: var(--font-mono); font-size: 12px; font-weight: 500;
      }
      .field {
        height: 34px; border-radius: var(--radius); background: var(--surface);
        border-color: var(--line); box-shadow: none; font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .chip {
        border-radius: var(--radius); background: var(--surface-2);
        border: 1px solid var(--line); color: var(--ink-soft);
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* ölçüm ızgarası: bölüm zeminine 24px hücre */
      .hero, .side, .art-toc, .foot-demo {
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 24px 24px;
      }
      .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
      .bar { background: var(--accent); }
      .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 7px; height: 7px; border-radius: 1px;
        background: var(--accent); box-shadow: none;
      }
      .divider { height: 1px; background: var(--line); }
      .logo-strip span { font-family: var(--font-mono); letter-spacing: .1em; }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: ölçüm ızgarası + eşik tikleri + 3 KPI hücresi */
        .hero-visual { background-image:
          linear-gradient(color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px);
          background-size: 28px 28px, 28px 28px; }
        .hero-visual::before { content: ''; position: absolute; inset: 12px; pointer-events: none;
          border: 1px dashed color-mix(in srgb, var(--accent) 32%, transparent); }
        .visual-card { background: color-mix(in srgb, var(--surface) 88%, transparent); }
        .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .visual-row { display: grid; grid-template-columns: 8px 1fr; gap: 4px 6px;
          padding: 8px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); }
        .visual-row .line { grid-column: 1 / -1; height: 2px; background: color-mix(in srgb, var(--accent) 60%, transparent); }
        .visual-row .num { font-size: 15px; font-weight: 600; }`,
    },
  },
  'trading-desk': {
    motif: 'bars',
    bodyClass: '',
    extraCss: `
      /* imza: dealing-room yoğunluğu · amber vurgu · 24px satır · ▲▼ yön kodu · ticker bandı */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); text-transform: none; }
      h1 { font-size: 36px; line-height: 1.1; max-width: 22ch; }
      h2 { font-size: 20px; line-height: 1.24; }
      h3 { font-size: 16px; line-height: 1.3; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; font-weight: 500;
        letter-spacing: .1em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '▲'; color: var(--accent); margin-right: 5px; font-size: 8px; }
      .lede { font-size: 14px; line-height: 1.48; max-width: 56ch; color: var(--ink-soft); }

      .nav {
        height: 44px; padding: 0 12px; border-radius: 0; background: var(--surface);
        border-bottom: 1px solid var(--line); box-shadow: none;
      }
      .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; }
      .nav::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -28px; height: 28px;
        background: var(--surface-2); border-bottom: 1px solid var(--line);
      }

      /* panel: 8px padding, 24px başlık şeridi, hairline */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none; padding: 8px;
      }
      .panel > .t, .card > .t, .comp-card-demo > .t {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
        text-transform: uppercase; color: var(--ink-soft);
        border-bottom: 1px solid var(--line); padding-bottom: 4px; margin-bottom: 6px;
      }
      .kpi .v, .kpi .num-big, .trow .num, .plan .price b, .kv b {
        font-family: var(--font-mono); font-weight: 500; letter-spacing: -.01em;
        font-variant-numeric: tabular-nums;
      }
      .kpi .v { font-size: 26px; line-height: 1.05; }

      /* fiyat sütunları: bid ok, ask danger */
      .tbl td.up, .trow .num.up { color: var(--ok); }
      .tbl td.down, .trow .num.down { color: var(--danger); }

      .btn {
        min-height: 28px; padding: 0 10px; border-radius: var(--radius);
        font-family: var(--font-display); font-size: 12px; font-weight: 600;
        letter-spacing: .08em; text-transform: uppercase; box-shadow: none;
      }
      .btn.ghost, .btn.soft {
        background: var(--surface-2); border: 1px solid var(--line); color: var(--ink);
      }
      .field {
        height: 28px; border-radius: var(--radius); background: var(--surface);
        border-color: var(--line); box-shadow: none; font-size: 13px;
        font-family: var(--font-mono); font-variant-numeric: tabular-nums;
      }
      .chip {
        border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* diyagonal ticker şeridi yalnız bant zemininde */
      .hero, .foot-demo, .logo-strip {
        background-image: repeating-linear-gradient(
          112deg,
          color-mix(in srgb, var(--accent) 7%, transparent) 0 6px,
          transparent 6px 22px
        );
      }
      .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
      .bar { background: var(--accent); }
      .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: '▲'; width: auto; height: auto; background: none; border-radius: 0;
        color: var(--accent); font-family: var(--font-mono); font-size: 9px;
      }
      .divider { height: 1px; background: var(--line); }
      .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: emir defteri satırları (bid/ask) + derinlik çubukları */
        .hero-visual { background: var(--bg-2); }
        .visual-card { border-color: color-mix(in srgb, var(--ok) 26%, var(--line)); }
        .visual-card .bar { height: 5px; border-radius: 1px; }
        .visual-card .bar.w70 { background: color-mix(in srgb, var(--danger) 55%, transparent); }
        .visual-card .bar.w45 { background: color-mix(in srgb, var(--ok) 55%, transparent); }
        .visual-rows { display: flex; flex-direction: column; gap: 2px; }
        .visual-row { display: grid; grid-template-columns: 10px 1fr 44px; align-items: center;
          padding: 4px 6px; border-bottom: 1px solid color-mix(in srgb, var(--line) 70%, transparent); }
        .visual-row .sq { width: 6px; height: 6px; border-radius: 1px; }
        .visual-row:nth-child(1) .sq { background: var(--ok); }
        .visual-row:nth-child(2) .sq { background: var(--danger); }
        .visual-row:nth-child(3) .sq { background: var(--warn); }
        .visual-row .num { text-align: right; font-size: 10px; }`,
    'dark-landing': `
        /* koyu mod: defter zemini bir ton daha derin, bid/ask çizgileri daha parlak */
        .hero-visual { background: color-mix(in srgb, var(--bg-2) 88%, var(--bg)); }
        .visual-card { border-color: color-mix(in srgb, var(--ok) 40%, var(--line)); }`,
    },
  },
  'executive-kpi': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
      /* imza: kâğıt rapor · hairline kural · 64px serif KPI · 80px dikey ritim · gölge yok */
      body { background: var(--bg); }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking); }
      h1 { font-size: 44px; line-height: 1.08; max-width: 22ch; }
      h2 { font-size: 26px; line-height: 1.22; }
      h3 { font-size: 19px; line-height: 1.3; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; font-weight: 500;
        letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { padding-bottom: 6px; border-bottom: 1px solid var(--line); }
      .lede { font-size: 17px; line-height: 1.62; max-width: 64ch; color: var(--ink-soft); }

      .nav {
        height: 64px; padding: 0 24px; border-radius: 0; background: var(--bg);
        border-bottom: 1px solid var(--line); box-shadow: none;
      }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .08em; text-transform: uppercase; }

      /* KPI bloğu: üstte 1px accent kural, gölge yok */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none; padding: 24px;
      }
      .kpi { border-top: 1px solid var(--accent); }
      .kpi .v, .kpi .num-big {
        font-family: var(--font-display); font-weight: 400; font-size: 64px;
        line-height: 1; letter-spacing: -.01em; font-variant-numeric: tabular-nums;
      }
      .kpi .d, .trow .num { font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em; }
      .tbl td.num, .trow .num { font-variant-numeric: tabular-nums; }

      .btn {
        min-height: 48px; padding: 0 24px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-body); font-size: 13px; font-weight: 500;
        letter-spacing: .08em; text-transform: uppercase;
      }
      .btn.ghost, .btn.soft {
        background: transparent; border: 1px solid var(--line); color: var(--ink);
        box-shadow: inset 0 -1px 0 var(--line);
      }
      .field {
        height: 48px; border: 0; border-bottom: 1px solid var(--line); border-radius: 0;
        background: transparent; box-shadow: none; font-size: 16px;
      }
      .chip {
        border-radius: var(--radius); background: transparent; border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* kâğıt ritmi: bölümler arası 1px kural, 80px dikey boşluk */
      .hero, .side, .foot-demo { background-image: none; }
      .divider { height: 1px; background: var(--line); }
      .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
      .bar { background: var(--accent); }
      .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 6px; height: 6px; border-radius: 0;
        background: var(--accent); box-shadow: none;
      }
      .logo-strip span { font-family: var(--font-display); font-size: 15px; letter-spacing: 0; text-transform: none; }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: üç büyük KPI bloğu + trend oku */
        .hero-visual { background: linear-gradient(180deg, var(--surface), var(--bg-2)); }
        .visual-card { background: transparent; border: 0; }
        .visual-card .bar { display: none; }
        .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .visual-row { display: flex; flex-direction: column; gap: 6px; padding: 14px;
          border: 1px solid var(--line); border-radius: var(--radius-lg); background: var(--surface); }
        .visual-row .sq { width: 22px; height: 4px; border-radius: 999px; background: var(--accent); }
        .visual-row .line { height: 1px; background: var(--line); }
        .visual-row .num { font-family: var(--font-display); font-size: 26px; line-height: 1; }
        .visual-row .num::after { content: ' ↑'; font-size: 13px; color: var(--accent); }`,
    },
  },
  'log-stream': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
      /* imza: 28px akan satır · 88px zaman rayı · önem çipi · nokta dokusu · gölge yok */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: var(--tracking); }
      h1 { font-size: 30px; line-height: 1.18; max-width: 24ch; }
      h2 { font-size: 19px; line-height: 1.32; }
      h3 { font-size: 15px; line-height: 1.34; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; font-weight: 500;
        letter-spacing: .08em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); margin-right: 6px; }
      .lede { font-size: 13px; line-height: 1.6; max-width: 72ch; color: var(--ink-soft); }

      .nav {
        height: 48px; padding: 0 16px; border-radius: 0; background: var(--bg);
        border-bottom: 1px solid var(--line); box-shadow: none;
      }
      .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .02em; }

      /* akan satır: 28px, zebra, çizgisiz */
      .panel, .card, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none; padding: 12px;
      }
      .panel > .t, .card > .t, .comp-card-demo > .t {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft); margin-bottom: 8px;
      }
      .tbl tr:nth-child(even) td, .trow:nth-child(even) { background: var(--surface-2); }
      .tbl td, .trow { height: 28px; font-family: var(--font-mono); font-size: 12px; }
      .tbl td:first-child, .trow .t {
        font-family: var(--font-mono); color: var(--ink-soft); width: 88px;
        font-variant-numeric: tabular-nums;
      }

      .kpi { padding: 12px; border-radius: var(--radius-lg); }
      .kpi .v, .kpi .num-big {
        font-family: var(--font-mono); font-weight: 700; font-size: 24px;
        letter-spacing: -.01em; font-variant-numeric: tabular-nums;
      }

      .btn {
        min-height: 32px; padding: 0 12px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-mono); font-size: 12px; font-weight: 500; letter-spacing: .04em;
        text-transform: none;
      }
      .btn.ghost, .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
      .field {
        height: 32px; border-radius: var(--radius); background: var(--surface);
        border-color: var(--line); box-shadow: none;
        font-family: var(--font-mono); font-size: 12px;
      }
      .chip {
        border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px;
        letter-spacing: .06em; text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* nokta dokusu yalnız başlık ve boş durum zemininde */
      .hero, .logo-strip, .foot-demo {
        background-image: radial-gradient(var(--line) 1px, transparent 1px);
        background-size: 16px 16px;
      }
      .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
      .bar { background: var(--accent); }
      .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 8px; height: 8px; border-radius: 50%;
        background: var(--accent);
      }
      .divider { height: 1px; background: var(--line); }
      .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: log satırları (zaman damgası + seviye + mesaj) */
        .hero-visual { background: var(--bg-2); border-color: var(--line); }
        .visual-card { background: var(--surface); border-radius: var(--radius); }
        .visual-card .bar { height: 1px; }
        .visual-rows { display: flex; flex-direction: column; gap: 0; font-family: var(--font-mono); }
        .visual-row { display: grid; grid-template-columns: 44px 44px 1fr; gap: 8px; align-items: center;
          padding: 5px 6px; border-bottom: 1px solid color-mix(in srgb, var(--line) 65%, transparent); font-size: 10px; }
        .visual-row::before { content: '12:0' counter(l) ':04'; color: var(--ink-faint); font-size: 9px; }
        .visual-row .sq { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .visual-row:nth-child(2) .sq { background: var(--warn); }
        .visual-row:nth-child(3) .sq { background: var(--danger); }
        .visual-row .line { background: color-mix(in srgb, var(--ink) 22%, transparent); height: 3px; }
        .visual-row .num { font-size: 9px; color: var(--ink-soft); }`,
    'dark-landing': `
        /* koyu mod: log zemini koyulaşır, seviye noktaları parlar */
        .hero-visual { background: color-mix(in srgb, var(--bg-2) 80%, var(--bg)); }
        .visual-row .sq { box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 26%, transparent); }`,
    },
  },
  'lab-instrument': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
      /* imza: kadran yayı · köşe crosshair · 4px cetvel tıkları · 2px sert gölge · birim etiketi */
      body { font-variant-numeric: tabular-nums; }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking); text-transform: uppercase; }
      h1 { font-size: 32px; line-height: 1.16; max-width: 24ch; }
      h2 { font-size: 21px; line-height: 1.24; }
      h3 { font-size: 16px; line-height: 1.3; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; font-weight: 400;
        letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: 'CH-'; color: var(--accent); }
      .lede { font-size: 15px; line-height: 1.58; max-width: 64ch; color: var(--ink-soft); }

      .nav {
        height: 56px; padding: 0 20px; border-radius: 0; background: var(--surface);
        border-bottom: 1px solid var(--line); box-shadow: none;
      }
      .nav-links a { font-family: var(--font-body); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; }
      .nav::after {
        content: 'CAL 2026-02-11'; position: absolute; right: 20px; top: 50%; transform: translateY(-50%);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-soft);
      }

      /* ölçüm kartı: crosshair köşeler + kadran yayı + birim */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
        position: relative; background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none; padding: 16px;
      }
      .kpi { box-shadow: var(--shadow-hard); }
      .kpi::before, .kpi::after {
        content: ''; position: absolute; width: 8px; height: 8px; pointer-events: none;
        border-top: 1px solid var(--accent); border-left: 1px solid var(--accent);
      }
      .kpi::before { top: 6px; left: 6px; }
      .kpi::after { bottom: 6px; right: 6px; transform: rotate(180deg); }
      .kpi .v, .kpi .num-big {
        font-family: var(--font-mono); font-weight: 400; font-size: 40px;
        line-height: 1.05; letter-spacing: 0; font-variant-numeric: tabular-nums;
      }
      .kpi .v::after { content: ' mV'; font-size: 12px; letter-spacing: .12em; color: var(--ink-soft); }

      /* cetvel tıkları: bölüm ayırıcıları 4px aralıklı 1px çizgiler */
      .divider {
        height: 6px; background: none; border: 0;
        background-image: repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 4px);
      }
      .hero, .side, .foot-demo {
        background-image: repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 64px);
      }

      .btn {
        min-height: 40px; padding: 0 16px; border-radius: var(--radius);
        font-family: var(--font-display); font-size: 12px; font-weight: 400;
        letter-spacing: .06em; text-transform: uppercase;
        box-shadow: var(--shadow-hard);
      }
      .btn.ghost, .btn.soft {
        background: var(--surface); border: 1px solid var(--line); color: var(--ink);
        box-shadow: none; font-family: var(--font-mono); font-size: 12px;
        letter-spacing: .08em; text-transform: none;
      }
      .field {
        height: 36px; border-radius: var(--radius); background: var(--surface);
        border-color: var(--line); box-shadow: none; font-size: 14px;
        font-family: var(--font-mono); font-variant-numeric: tabular-nums;
      }
      .chip {
        border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
      .bar { background: var(--accent); }
      .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 10px; height: 2px; border-radius: 0; background: var(--accent);
      }
      .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: kadran yayı + iğne + okuma satırı */
        .hero-visual { background: radial-gradient(120% 100% at 50% 100%, var(--surface-2), var(--surface)); }
        .hero-visual::after { content: ''; position: absolute; left: 50%; bottom: 26px; width: 190px; height: 95px;
          transform: translateX(-50%); pointer-events: none;
          background: conic-gradient(from 270deg at 50% 100%, var(--accent) 0 62%, color-mix(in srgb, var(--ink) 12%, transparent) 62% 100%);
          border-radius: 190px 190px 0 0;
          mask-image: radial-gradient(circle at 50% 100%, transparent 0 54%, var(--ink) 55%);
          -webkit-mask-image: radial-gradient(circle at 50% 100%, transparent 0 54%, var(--ink) 55%); }
        .visual-card { background: color-mix(in srgb, var(--surface) 92%, transparent); }
        .visual-card .bar { height: 3px; }
        .visual-row .num { font-family: var(--font-mono); font-size: 13px; letter-spacing: .06em; }
        .visual-row .line { height: 1px; background: color-mix(in srgb, var(--ink) 16%, transparent); }`,
    },
  },
  'atlas-console': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      /* imza: kartografik ızgara + koordinat şeridi + tek katman çizgisi */
      .motif-grid::before {
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 32px 32px;
        opacity: .9;
      }
      h1 { font-family: var(--font-display); font-size: 48px; font-weight: 600; line-height: 1.08; letter-spacing: var(--tracking); max-width: 22ch; }
      h2 { font-family: var(--font-display); font-size: 26px; font-weight: 600; line-height: 1.22; letter-spacing: .03em; }
      h3 { font-family: var(--font-body); font-size: 19px; font-weight: 600; line-height: 1.3; letter-spacing: 0; }
      .lede { max-width: 60ch; font-size: 15px; line-height: 1.58; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      /* gezinme: koyu şerit + koordinat tikleri */
      .nav {
        height: 52px; padding: 0 24px; border-bottom: 1px solid var(--line);
        background: var(--bg); box-shadow: none;
        background-image: repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 24px);
        background-size: 100% 5px; background-repeat: no-repeat; background-position: bottom;
      }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .1em; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .01em; color: var(--ink-soft); text-transform: none; }
      .nav-links a:first-child { color: var(--ink); }

      /* yüzeyler: 1px çizgi, gölge yok; katman farkı yalnız ton */
      .panel, .panel-2, .kpi, .visual-card, .comp-card, .m-tile, .state-card, .table, .side {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none;
      }
      .kpi, .m-tile { border-radius: var(--radius); }
      .hero-visual {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; background: var(--bg-2);
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 32px 32px;
      }
      /* harita paneli: üst ve alt kenarda koordinat şeridi */
      .hero-visual::after {
        content: ""; position: absolute; left: 0; right: 0; top: 0; height: 20px; z-index: 1;
        border-bottom: 1px solid var(--line);
        background: repeating-linear-gradient(90deg, var(--ink-faint) 0 1px, transparent 1px 48px);
        background-size: 100% 6px; background-repeat: no-repeat; background-position: bottom;
        opacity: .5;
      }

      /* kontroller */
      .btn {
        min-height: 40px; padding: 0 16px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .01em;
      }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink);
        font-family: var(--font-mono); font-size: 13px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 24px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
      }
      .chip.on, .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
      .track, .track i { border-radius: 999px; }
      .opt .box { border-radius: 4px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .12em; font-size: 11px; }
      .proof li::before { background: var(--accent); border-radius: 50%; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--ink-faint); }

      /* sayfa atmosferi: koordinat tikleri + tek lejant noktası; süs ≤ .18 */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image:
          repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 96px),
          repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px 96px);
        opacity: .28;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; right: 6vw; top: 12vh; width: 220px; height: 220px;
        border-radius: 50%; pointer-events: none;
        background: radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 62%);
        opacity: .10;
      }
      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 24ch; }
        body.scene-landing .sig::after { display: none; }
        .hero-visual::after { height: 16px; }
      }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: harita ızgarası + koordinat tikleri + waypoint */
        .hero-visual { background-image:
          linear-gradient(color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 1px);
          background-size: 34px 34px, 34px 34px; }
        .hero-visual::before { content: '37.04°N · 27.42°E'; position: absolute; left: 14px; bottom: 12px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; color: var(--ink-faint); }
        .visual-card { background: color-mix(in srgb, var(--surface) 90%, transparent); border-color: color-mix(in srgb, var(--accent) 26%, var(--line)); }
        .visual-row { position: relative; }
        .visual-row .sq { border-radius: 50% 50% 50% 0; transform: rotate(-45deg); background: var(--accent); }
        .visual-row .line { height: 2px; background: color-mix(in srgb, var(--ink) 18%, transparent); }
        .visual-row .num { font-size: 9px; }`,
    'dark-landing': `
        /* koyu mod: harita ızgarası daha görünür, waypoint halkası parlar */
        .hero-visual { background-image:
          linear-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px);
          background-size: 34px 34px, 34px 34px; }
        .visual-row .sq { box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 24%, transparent); }`,
    },
  },
  'experiment-split': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
      /* imza: iki eşit panel + sol renk bandı + mono delta rozeti */
      h1 { font-size: 54px; font-weight: 700; line-height: 1.03; letter-spacing: var(--tracking); max-width: 22ch; }
      h2 { font-size: 29px; font-weight: 700; line-height: 1.16; letter-spacing: -.015em; }
      h3 { font-size: 20px; font-weight: 600; line-height: 1.3; letter-spacing: 0; }
      .lede { max-width: 58ch; font-size: 15px; line-height: 1.6; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      .nav { height: 56px; padding: 0 28px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: -.02em; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      /* karşılaştırma panelleri: eşit genişlik, hairline, gölge yok */
      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .table {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; background: var(--surface);
      }
      .kpi, .plan, .auth-card, .ob-card, .co-sec, .modal, .drawer { border-radius: var(--radius-lg); box-shadow: var(--shadow); }
      .kpi { box-shadow: none; border: 1px solid var(--line); border-radius: var(--radius); }
      .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; background: var(--surface); }

      /* A/B bölünmesi: 6/6 eşit iki sütun ve arada tek dikey çizgi */
      body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; gap: 0; }
      body.scene-dashboard .kpis > .kpi { border-radius: 0; border-width: 0 0 0 1px; }
      body.scene-dashboard .kpis > .kpi:first-child { border-left-width: 3px; border-left-color: var(--ink-faint); }
      body.scene-dashboard .kpis > .kpi:nth-child(2) { border-left-width: 3px; border-left-color: var(--accent); }

      /* kart solunda durum bandı: kontrol nötr, varyant accent */
      .panel, .comp-card { position: relative; }
      .panel::before, .comp-card::before {
        content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
        background: var(--ink-faint); border-radius: var(--radius-lg) 0 0 var(--radius-lg);
      }
      .panel:nth-of-type(2n)::before, .comp-card:nth-of-type(2n)::before { background: var(--accent); }

      .btn { min-height: 44px; padding: 0 20px; border-radius: var(--radius); box-shadow: none; font-size: 14px; font-weight: 600; letter-spacing: 0; }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); }
      .field, input, select, textarea { border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); color: var(--ink); }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 26px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
      .track, .track i { border-radius: 999px; }
      .opt .box { border-radius: 6px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }
      .proof li::before { background: var(--accent); border-radius: 50%; }
      .table .trow:nth-child(odd), tr:nth-child(odd) { background: var(--surface-2); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }
      .kpi .v, .kpi .num-big, .plan .price b { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }

      /* sayfa atmosferi: %4 nokta ızgara, tek accent lekesi; süs ≤ .12 */
      body.scene-landing .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image: radial-gradient(var(--line) 1px, transparent 1px);
        background-size: 16px 16px; opacity: .5;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
        background: var(--line); pointer-events: none;
      }
      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        body.scene-dashboard .kpis > .kpi { border-width: 1px 0 0 3px; }
        body.scene-landing .sig::after { left: 0; right: 0; top: 50%; bottom: auto; width: auto; height: 1px; }
      }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: A/B paneli — iki varyant + delta */
        .hero-visual { background: var(--bg-2); }
        .visual-card { display: grid; grid-template-columns: 1fr 1fr; gap: 0; padding: 0; overflow: hidden; }
        .visual-card > .bar { grid-column: 1 / -1; height: 6px; }
        .visual-rows { grid-column: 1 / -1; }
        .visual-row { border-left: 3px solid var(--line); }
        .visual-row:nth-child(1) { border-left-color: var(--accent); }
        .visual-row:nth-child(2) { border-left-color: var(--ink-soft); }
        .visual-row:nth-child(3) { border-left-color: var(--warn); }
        .visual-row:nth-child(3) .num::after { content: ' Δ'; color: var(--warn); }
        .visual-row .line { height: 2px; }
        .visual-row .num { justify-self: end; font-size: 10px; }`,
    },
  },
  'ledger-meter': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
      /* imza: defter çizgisi + serif başlık + çift kural toplam + tabular tutar */
      .motif-paper::before { opacity: .5; }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 48px; line-height: 1.06; letter-spacing: var(--tracking); max-width: 22ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 29px; line-height: 1.18; letter-spacing: .005em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; line-height: 1.32; letter-spacing: 0; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; }
      .lede { max-width: 62ch; font-size: 15px; line-height: 1.62; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      body { font-variant-numeric: tabular-nums; }

      /* gezinme: muhasebe başlığı, çift kural */
      .nav {
        height: 56px; padding: 0 24px; border-bottom: 3px double var(--line);
        background: var(--bg); box-shadow: none;
      }
      .brand { font-family: var(--font-display); font-size: 16px; letter-spacing: -.01em; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      /* yüzeyler: kağıt kart, 1px çizgi, gölge yok */
      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .table, .side {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; background: var(--surface);
      }
      .kpi { border: 1px solid var(--line); border-radius: var(--radius); box-shadow: none; background: var(--surface-2); }
      .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; background: var(--surface); }
      .plan { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; }
      .plan.hot { border-top: 3px double var(--line); background: var(--surface-2); }
      .plan .price b { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: 0; }

      /* tutar ve tablo dili: sağa hizalı, zebra, toplam çift kural */
      .table .trow:nth-child(odd), tr:nth-child(odd) { background: var(--surface-2); }
      .table .trow:last-child, .tbl tr:last-child { border-top: 3px double var(--line); color: var(--accent); font-weight: 700; }
      .table td, .tbl td { font-variant-numeric: tabular-nums; }
      .kpi .v, .kpi .num-big { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }

      .btn {
        min-height: 40px; padding: 0 18px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .01em;
      }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-mono); font-size: 13px; font-variant-numeric: tabular-nums;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 24px; padding: 0 8px; border-radius: var(--radius); border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 3px double var(--line); background: var(--bg); }
      .track { border-radius: 2px; background: var(--surface-2); height: 6px; }
      .track i { border-radius: 2px; background: var(--accent); }
      .opt .box { border-radius: 2px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 3px double var(--line); letter-spacing: .04em; font-size: 11px; }
      .proof li::before { background: var(--accent); border-radius: 0; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); text-transform: uppercase; }

      /* sayfa atmosferi: defter çizgisi tüm sayfada, sıcak zemin, süs ≤ .10 */
      body.scene-landing .sig::before, body.scene-pricing .sig::before, body.scene-checkout .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background: linear-gradient(transparent 0 27px, var(--line) 27px 28px, transparent 28px) 0 0 / 100% 28px;
        opacity: .55;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: 0; right: 0; top: 46%; height: 3px;
        border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
        opacity: .8; pointer-events: none;
      }
      @media (max-width: 900px) {
        h1 { font-size: 29px; max-width: 22ch; }
        h2 { font-size: 22px; }
        .table, .tbl { overflow-x: auto; }
        body.scene-landing .sig::after { display: none; }
      }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: defter satırları (borç/alacak + kümülatif) */
        .hero-visual { background: var(--surface); }
        .visual-card { background: var(--surface); border: 1px solid var(--line); }
        .visual-card .bar { height: 2px; background: color-mix(in srgb, var(--ink) 18%, transparent); }
        .visual-rows { display: flex; flex-direction: column; }
        .visual-row { display: grid; grid-template-columns: 10px 1fr 56px; align-items: baseline;
          padding: 7px 4px; border-bottom: 1px dashed color-mix(in srgb, var(--ink) 16%, transparent); }
        .visual-row .sq { width: 5px; height: 5px; border-radius: 0; background: var(--accent); }
        .visual-row .line { height: 1px; background: color-mix(in srgb, var(--ink) 14%, transparent); }
        .visual-row .num { text-align: right; font-family: var(--font-mono); font-size: 11px; }
        .visual-rows::after { content: '= 1.284,50'; display: block; text-align: right; padding-top: 6px;
          font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--accent);
          border-top: 2px solid var(--ink); }`,
    },
  },
  'vitals-triage': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
      /* imza: yuvarlak vital kartı + sol seviye şeridi + nabız halkası */
      h1 { font-family: var(--font-display); font-weight: 600; font-size: 44px; line-height: 1.06; letter-spacing: var(--tracking); max-width: 22ch; }
      h2 { font-family: var(--font-display); font-weight: 600; font-size: 27px; line-height: 1.2; letter-spacing: -.005em; }
      h3 { font-family: var(--font-body); font-weight: 700; font-size: 20px; line-height: 1.32; }
      h4 { font-family: var(--font-body); font-weight: 700; font-size: 15px; }
      .lede { max-width: 56ch; font-size: 16px; line-height: 1.62; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      body { font-variant-numeric: tabular-nums; }

      .nav { height: 60px; padding: 0 28px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: -.01em; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); border-radius: 999px; padding: 6px 14px; }

      /* yüzeyler: yuvarlak, tek katman gölge + 1px çizgi */
      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: var(--shadow); backdrop-filter: none; background: var(--surface);
      }
      .kpi { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--surface); padding: 22px; }
      .kpi .v, .kpi .num-big, .big404 { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
      .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--surface); }
      .table { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: none; }

      /* triyaj satırı: sol 4px seviye şeridi */
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); position: relative; }
      .table .trow:last-child, tr:last-child { border-bottom: 0; }
      .table .trow::before, .trow::before {
        content: ""; position: absolute; left: 0; top: 6px; bottom: 6px; width: 4px;
        border-radius: 999px; background: var(--ok);
      }
      .table .trow:nth-child(3n+1)::before, .trow:nth-child(3n+1)::before { background: var(--danger); }
      .table .trow:nth-child(3n+2)::before, .trow:nth-child(3n+2)::before { background: var(--warn); }

      .btn {
        min-height: 48px; padding: 0 22px; border-radius: 999px; box-shadow: var(--shadow);
        font-family: var(--font-body); font-size: 15px; font-weight: 700; letter-spacing: 0;
      }
      .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 13px; }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-body); font-size: 15px; min-height: 48px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 28px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-body); font-size: 12px; font-weight: 700;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; }
      .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--surface); }
      .track { border-radius: 999px; background: var(--surface-2); height: 8px; }
      .track i { border-radius: 999px; background: var(--accent); }
      .opt .box { border-radius: 8px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .01em; }
      .proof li::before { background: var(--accent); border-radius: 999px; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-faint); }

      /* imza motif: nabız halkaları (hero görselinde, sabit) */
      .motif-rings::before { opacity: .7; }

      /* sayfa atmosferi: tek nabız halkası, kritik şerit yok, süs ≤ .10 */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; right: -6vw; top: -10vh; width: 44vw; height: 44vw;
        border-radius: 999px; pointer-events: none;
        background: radial-gradient(circle at 50% 50%, transparent 0 38%, var(--line) 38% 38.4%, transparent 38.6%,
          transparent 52%, var(--line) 52% 52.4%, transparent 52.6%);
        opacity: .6;
      }
      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 22ch; }
        .kpi, .panel { padding: 18px; }
        body.scene-landing .sig::before, body.scene-dashboard .sig::before { opacity: .35; }
      }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: vital kartları + EKG çizgisi + triaj sırası */
        .hero-visual { background: linear-gradient(180deg, var(--surface), color-mix(in srgb, var(--accent) 6%, var(--bg-2))); }
        .visual-card .bar { height: 4px; }
        .visual-card .bar.accent { background: linear-gradient(90deg, transparent, var(--accent), transparent); }
        .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .visual-row { display: grid; gap: 4px; padding: 8px; border-radius: var(--radius);
          border: 1px solid var(--line); background: var(--surface); }
        .visual-row .sq { width: 100%; height: 14px; border-radius: 2px;
          background-image: repeating-linear-gradient(90deg, var(--accent) 0 2px, transparent 2px 7px); opacity: .7; }
        .visual-row:nth-child(2) .sq { background-image: repeating-linear-gradient(90deg, var(--warn) 0 2px, transparent 2px 9px); }
        .visual-row .num { font-size: 14px; font-weight: 600; }`,
    },
  },
  'fleet-telemetry': {
    motif: 'dots',
    bodyClass: 'upper',
    extraCss: `
      /* imza: 20px kapsama nokta ızgarası + 36px cihaz satırı + mono durum kodu */
      .motif-dots::before {
        background-image: radial-gradient(var(--line) 1.4px, transparent 1.4px);
        background-size: 20px 20px;
      }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 36px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 30ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 23px; line-height: 1.24; letter-spacing: .02em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 18px; line-height: 1.3; letter-spacing: 0; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; }
      .lede { max-width: 66ch; font-size: 14px; line-height: 1.5; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      body { font-variant-numeric: tabular-nums; }

      /* gezinme: ince konsol şeridi */
      .nav {
        height: 48px; padding: 0 20px; border-bottom: 1px solid var(--line);
        background: var(--bg); box-shadow: none;
      }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .08em; }
      .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      /* yüzeyler: 1px çizgi, gölge yok; panel başlığı --surface-2 şerit */
      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .table, .side {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; background: var(--surface);
      }
      .panel > h3, .panel > h2, .panel .head, .comp-card .t {
        border-bottom: 1px solid var(--line);
        background: var(--surface-2);
        padding-bottom: 8px;
      }
      .kpi {
        border: 1px solid var(--line); border-radius: var(--radius); box-shadow: none;
        background: var(--surface); padding: 12px 14px;
      }
      .kpi .v, .kpi .num-big, .big404 { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
      .hero-visual {
        border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        background: var(--bg-2);
        background-image: radial-gradient(var(--line) 1.4px, transparent 1.4px);
        background-size: 20px 20px;
      }
      /* kapsama: cihaz olan hücreler accent — hero görselinde 4 nokta */
      .hero-visual::after {
        content: ""; position: absolute; right: 12%; top: 18%; width: 60%; height: 60%; z-index: 1;
        pointer-events: none;
        background-image:
          radial-gradient(var(--accent) 3px, transparent 3.4px),
          radial-gradient(var(--accent) 3px, transparent 3.4px),
          radial-gradient(var(--accent) 3px, transparent 3.4px),
          radial-gradient(var(--accent) 3px, transparent 3.4px);
        background-size: 20px 20px;
        background-position: 0 0, 60px 40px, 120px 80px, 180px 20px;
        background-repeat: no-repeat;
      }

      /* cihaz satırı: 36px, zebra, sağa hizalı saat */
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 36px; }
      .table .trow:nth-child(odd), tr:nth-child(odd) { background: var(--surface-2); }
      .table .trow:last-child, tr:last-child { border-bottom: 0; }
      .table td:last-child, .tbl td:last-child { font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); text-align: right; }

      .btn {
        min-height: 36px; padding: 0 14px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-mono); font-size: 13px; font-weight: 600; letter-spacing: .04em;
      }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink);
        font-family: var(--font-mono); font-size: 12px; min-height: 36px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 22px; padding: 0 8px; border-radius: var(--radius); border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--surface-2); }
      .track { border-radius: 0; background: var(--surface-2); height: 4px; }
      .track i { border-radius: 0; background: var(--accent); }
      .opt .box { border-radius: 1px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); font-family: var(--font-mono); letter-spacing: .1em; font-size: 11px; }
      .proof li::before { background: var(--ok); border-radius: 1px; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }

      /* sayfa atmosferi: tek kapsama ızgarası şeridi, süs ≤ .10 */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image: radial-gradient(var(--line) 1.4px, transparent 1.4px);
        background-size: 20px 20px; opacity: .6;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 28px;
        border-top: 1px solid var(--line); background: var(--surface-2);
        background-image: repeating-linear-gradient(90deg, var(--ink-faint) 0 28px, transparent 28px 96px);
        background-size: 100% 6px; background-repeat: no-repeat; background-position: center;
        opacity: .5; pointer-events: none;
      }
      @media (max-width: 900px) {
        h1 { font-size: 22px; max-width: 26ch; }
        .table .trow, .trow, tr { height: 44px; }
        body.scene-landing .sig::after { height: 20px; }
      }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: filo haritası (araç noktaları) + araç satırları */
        .hero-visual { background-image:
          radial-gradient(color-mix(in srgb, var(--accent) 40%, transparent) 1.5px, transparent 1.6px);
          background-size: 26px 26px; }
        .hero-visual::before { content: ''; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, transparent 46%, color-mix(in srgb, var(--accent) 22%, transparent) 47% 48%, transparent 49%),
                      linear-gradient(65deg, transparent 62%, color-mix(in srgb, var(--ink) 10%, transparent) 63% 64%, transparent 65%); }
        .visual-card { background: color-mix(in srgb, var(--surface) 92%, transparent); }
        .visual-row { display: grid; grid-template-columns: 12px 1fr 40px; align-items: center; gap: 6px; }
        .visual-row .sq { width: 8px; height: 8px; border-radius: 50%; background: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent); }
        .visual-row .line { height: 2px; }
        .visual-row .num { font-size: 9px; text-align: right; }`,
    },
  },
  'blueprint-drawing': {
    motif: 'grid',
    bodyClass: '',
    extraCss: `
        /* imza: cyanotype pafta · 8/64px çizim ızgarası · 1px çizgi hiyerarşisi · ölçü etiketleri */
        body {
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 64px 64px;
          background-position: -1px -1px;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
        h1 { font-size: 46px; line-height: 1.08; max-width: 22ch; }
        h2 { font-size: 30px; line-height: 1.16; letter-spacing: .02em; }
        h3 { font-size: 20px; line-height: 1.3; }
        .lede { font-size: 15px; line-height: 1.62; max-width: 60ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }
        .eyebrow::before { content: 'DWG '; color: var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .08em; color: var(--ink); }
        .brand::after { content: ' · pafta 1/1'; color: var(--ink-faint); }
        .nav { border-bottom: 1px solid var(--line); box-shadow: none; background: var(--bg); }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; }

        /* pafta çerçevesi: 1px dış çizgi + 8px kesikli iç çizgi */
        .panel, .card, .kpi, .field, .chip, .visual-card, .comp-card-demo, .state-card, .m-tile {
          border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; background: var(--surface);
        }
        .panel, .visual-card { position: relative; }
        .panel::after, .visual-card::after {
          content: ''; position: absolute; inset: 8px; pointer-events: none;
          border: 1px dashed color-mix(in srgb, var(--accent) 32%, transparent);
        }

        /* ölçü çizgili buton */
        .btn {
          height: 40px; padding: 0 16px; border-radius: var(--radius); box-shadow: none;
          background: transparent; border: 1px solid var(--accent); color: var(--accent);
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 14%, transparent); }
        .btn.sm { height: 32px; padding: 0 12px; font-size: 10px; }
        .btn.ghost, .btn.soft { background: transparent; border-color: var(--line); color: var(--ink); }
        .field input, .field select, .field textarea { border-radius: var(--radius); background: var(--bg-2); }
        .chip { font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; background: transparent; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }

        /* ölçü etiketi: her KPI'nın altında hairline + birim */
        .kpi { padding: 16px 20px; border-left: 2px solid var(--accent); }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
        .bar, .line, .divider { background: var(--line); }
        .m-grid, .visual-rows { background-image: linear-gradient(var(--line) 1px, transparent 1px); background-size: 100% 32px; }
        table, .table { font-variant-numeric: tabular-nums; }
        .table th, .table td { border-bottom: 1px solid var(--line); }
        .mark { border-radius: var(--radius); background: transparent; border: 1px solid var(--accent); color: var(--accent); }
        .sig { border-top: 1px solid var(--accent); }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: pafta çerçevesi + ölçü oku + çizim ızgarası */
        .hero-visual { background-image:
          linear-gradient(color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1px);
          background-size: 24px 24px, 24px 24px; }
        .hero-visual::after { content: 'Ø 42 · ölçek 1:2'; position: absolute; right: 14px; bottom: 10px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .12em; color: var(--accent); }
        .visual-card { background: color-mix(in srgb, var(--bg) 82%, transparent);
          border: 1px solid var(--accent); border-radius: var(--radius-lg); }
        .visual-card .bar { height: 1px; background: var(--accent); }
        .visual-row .sq { border: 1px solid var(--accent); background: transparent; }
        .visual-row .line { height: 1px; background: color-mix(in srgb, var(--ink) 30%, transparent); position: relative; }
        .visual-row .line::after { content: ''; position: absolute; right: -1px; top: -3px; width: 1px; height: 7px; background: var(--accent); }
        .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--accent); }`,
    'dark-landing': `
        /* koyu mod: pafta çizgisi parlak, iç çerçeve görünür */
        .hero-visual { background-image:
          linear-gradient(color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px);
          background-size: 24px 24px, 24px 24px; }
        .visual-card { border-color: color-mix(in srgb, var(--accent) 70%, var(--line)); }`,
    },
  },
  'machined-metal-panel': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
        /* imza: fırçalanmış alüminyum · bevel çift hairline · gravür etiket · amber durum noktası */
        body {
          background-image: repeating-linear-gradient(
            180deg,
            color-mix(in srgb, var(--ink) 5%, transparent) 0 1px,
            transparent 1px 3px
          );
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: .06em; text-transform: uppercase; }
        h1 { font-size: 38px; line-height: 1.14; max-width: 24ch; }
        h2 { font-size: 26px; line-height: 1.2; }
        h3 { font-size: 19px; line-height: 1.3; letter-spacing: .04em; }
        .lede { font-size: 16px; line-height: 1.58; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow::before { content: '◤ '; color: var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; }

        /* panel kenarı: üst 2px açık, alt 1px koyu çift hairline */
        .nav {
          background: var(--surface); box-shadow: inset 0 2px 0 color-mix(in srgb, var(--ink) 10%, transparent);
          border-bottom: 1px solid var(--line); border-radius: 0;
        }
        .nav-links a { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; }

        /* bevel yüzey + köşe vida izi */
        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
          box-shadow: var(--shadow);
        }
        .panel, .card, .kpi { position: relative; }
        .panel::before, .card::before, .kpi::before {
          content: ''; position: absolute; top: 5px; right: 5px; width: 5px; height: 5px;
          border-radius: 50%; border: 1px solid color-mix(in srgb, var(--ink) 26%, transparent);
          background: color-mix(in srgb, var(--bg-2) 60%, transparent);
        }

        /* basılabilir kontrol */
        .btn {
          height: 38px; padding: 0 16px; border-radius: var(--radius);
          background: var(--surface-2); color: var(--ink); border: 1px solid var(--line);
          box-shadow: var(--shadow);
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--surface-2) 88%, var(--ink)); }
        .btn:active { box-shadow: inset 0 1px 2px color-mix(in srgb, var(--ink) 30%, transparent); }
        .btn.sm { height: 30px; padding: 0 10px; font-size: 10px; }
        .btn.accent, .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: color-mix(in srgb, var(--ink) 22%, transparent); }
        .btn.ghost, .btn.soft { background: var(--bg-2); color: var(--ink-soft); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); box-shadow: inset 0 1px 2px color-mix(in srgb, var(--ink) 16%, transparent);
          background: var(--bg-2);
        }
        .chip {
          background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; text-transform: uppercase;
        }

        /* amber durum noktası: her KPI başlığının solunda */
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
        .kpi .t, .kpi .label { display: inline-flex; align-items: center; gap: 6px; }
        .kpi .t::before, .kpi .label::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink) 20%, transparent);
        }
        .table th { font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; text-transform: uppercase; }
        .table th, .table td { border-bottom: 1px solid var(--line); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .divider, .line, .bar { background: var(--line); }
        .sig { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 14%, transparent); }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: fırçalanmış panel + amber LED sırası + gravür etiket */
        .hero-visual { background-image: repeating-linear-gradient(180deg,
          color-mix(in srgb, var(--ink) 5%, transparent) 0 1px, transparent 1px 3px); }
        .hero-visual::after { content: 'PANEL A-04 · 24V'; position: absolute; left: 12px; top: 10px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; color: var(--ink-soft); }
        .visual-card { background: var(--surface-2); border: 1px solid var(--line); box-shadow: var(--shadow); }
        .visual-card .bar { height: 3px; background: color-mix(in srgb, var(--ink) 22%, transparent); }
        .visual-row { display: grid; grid-template-columns: 12px 1fr 40px; align-items: center; gap: 8px; }
        .visual-row .sq { width: 8px; height: 8px; border-radius: 50%; background: var(--accent);
          box-shadow: inset 0 1px 0 color-mix(in srgb, var(--danger-ink) 40%, transparent), 0 0 0 2px color-mix(in srgb, var(--ink) 16%, transparent); }
        .visual-row .line { height: 2px; background: color-mix(in srgb, var(--ink) 26%, transparent); }
        .visual-row .num { font-family: var(--font-mono); font-size: 9px; }`,
    },
  },
  'safety-signage': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
        /* imza: çapraz tehlike bandı · 2px uyarı çerçevesi · Anton büyük harf · piktogram */
        body { background: var(--bg); }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; }
        h1 { font-size: 72px; line-height: .94; max-width: 18ch; letter-spacing: .01em; }
        h2 { font-size: 40px; line-height: 1.02; }
        h3 { font-size: 24px; line-height: 1.12; }
        .lede { font-family: var(--font-body); font-size: 17px; font-weight: 500; line-height: 1.45; max-width: 46ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow {
          display: inline-block; padding: 4px 8px; background: var(--accent); color: var(--accent-ink);
        }
        .brand { font-family: var(--font-display); font-size: 18px; letter-spacing: .02em; text-transform: uppercase; }

        /* üst bant: 45° çapraz tehlike şeridi */
        .nav {
          height: 60px; border: 0; border-radius: 0; box-shadow: none; background: var(--accent-ink);
          color: var(--ink); border-top: 8px solid transparent;
          border-image: repeating-linear-gradient(45deg, var(--accent) 0 20px, var(--accent-ink) 20px 40px) 8;
        }
        .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }

        /* uyarı kutusu: 2px accent çerçeve, 0 radius, gölge yok */
        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          border: 2px solid var(--line); border-radius: 0; box-shadow: none; background: var(--surface);
        }
        .card, .state-card { border-left-width: 8px; border-left-color: var(--accent); }
        .kpi { border-color: var(--accent); }
        .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; letter-spacing: .01em; }

        .btn {
          height: 48px; padding: 0 20px; border-radius: 0; box-shadow: none;
          background: var(--accent); color: var(--accent-ink); border: 2px solid var(--accent-ink);
          font-family: var(--font-body); font-size: 15px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
        }
        .btn:hover { background: var(--accent-ink); color: var(--accent); }
        .btn:active { transform: translateY(2px); }
        .btn.sm { height: 40px; padding: 0 14px; font-size: 13px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border-color: var(--ink); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--ink); color: var(--bg); }
        .field input, .field select, .field textarea {
          border-radius: 0; border: 2px solid var(--line); background: var(--bg-2);
          font-family: var(--font-body); font-size: 16px; font-weight: 500;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          border-radius: 0; border: 0; background: var(--accent); color: var(--accent-ink);
          font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
        }
        .chip.accent { background: var(--accent); }
        .table th {
          font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; border-bottom: 2px solid var(--accent);
        }
        .table td { border-bottom: 2px solid var(--line); }
        .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); }
        .divider, .line, .bar { background: var(--line); height: 2px; }
        .sig {
          background: repeating-linear-gradient(45deg, var(--accent) 0 20px, transparent 20px 40px);
          opacity: .18;
        }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: çapraz tehlike bandı + uyarı plakası + kontrol listesi */
        .hero-visual { background: var(--bg-2); }
        .hero-visual::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 10px; pointer-events: none;
          background: repeating-linear-gradient(45deg, var(--accent) 0 14px, var(--accent-ink) 14px 28px); }
        .visual-card { background: var(--surface); border: 2px solid var(--accent); border-radius: 0; }
        .visual-card .bar { height: 4px; background: var(--accent-ink); }
        .visual-row { display: grid; grid-template-columns: 14px 1fr 42px; align-items: center; gap: 8px;
          padding: 5px 0; border-bottom: 2px solid var(--line); }
        .visual-row .sq { width: 10px; height: 10px; background: var(--accent-ink); }
        .visual-row .line { height: 3px; background: color-mix(in srgb, var(--ink) 30%, transparent); }
        .visual-row .num { font-family: var(--font-display); font-size: 11px; color: var(--accent); }`,
    'dark-landing': `
        /* koyu mod: bant parlaklığı artar, plaka çerçevesi kalınlaşır */
        .hero-visual::before { opacity: 1; }
        .visual-card { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent); }`,
    },
  },
  'mes-production-line': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* imza: durum şeridi · tabular sayaç · 1px hairline kart · yoğun tablo ritmi */
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: -.01em; }
        h1 { font-size: 34px; line-height: 1.16; max-width: 26ch; }
        h2 { font-size: 24px; line-height: 1.3; }
        h3 { font-size: 18px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.55; max-width: 62ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
        .eyebrow::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
        }
        .brand { font-family: var(--font-mono); font-size: 13px; font-weight: 700; letter-spacing: .02em; }
        body { font-variant-numeric: tabular-nums; }

        .nav {
          height: 48px; background: var(--surface); border-bottom: 1px solid var(--line);
          border-radius: 0; box-shadow: none;
        }
        .nav-links a { font-family: var(--font-body); font-size: 13px; font-weight: 500; }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); box-shadow: inset 0 -2px 0 var(--accent); }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        .kpi { border-left: 3px solid var(--accent); padding: 14px 16px; }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 700; letter-spacing: -.02em; }
        .kpi .t, .kpi .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; }

        .btn {
          height: 36px; padding: 0 12px; border-radius: var(--radius); box-shadow: none;
          background: var(--accent); color: var(--accent-ink); border: 1px solid transparent;
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn.sm { height: 30px; padding: 0 10px; font-size: 12px; }
        .btn.ghost, .btn.soft {
          background: var(--surface); color: var(--ink); border: 1px solid var(--line); box-shadow: none;
        }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 14px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); outline-offset: 1px;
        }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 34%, transparent); }

        .table { font-variant-numeric: tabular-nums; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); height: 32px; }
        .table tr:hover td { background: var(--surface-2); }
        .bar, .line, .divider { background: var(--line); }
        .m-grid { background-image: radial-gradient(var(--line) 1px, transparent 1px); background-size: 16px 16px; }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .sig { border-left: 3px solid var(--accent); }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: hat verimi çubukları + istasyon durum satırları */
        .hero-visual { background: var(--surface); }
        .visual-card { background: var(--surface); border: 1px solid var(--line); box-shadow: var(--shadow); }
        .visual-card .bar { height: 8px; border-radius: 2px; background: color-mix(in srgb, var(--accent) 78%, transparent); }
        .visual-card .bar.w70 { background: color-mix(in srgb, var(--accent) 46%, transparent); }
        .visual-card .bar.w45 { background: color-mix(in srgb, var(--warn) 60%, transparent); }
        .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .visual-row { display: grid; gap: 4px; padding: 8px; border-left: 3px solid var(--accent);
          background: var(--surface-2); border-radius: var(--radius); }
        .visual-row:nth-child(2) { border-left-color: var(--warn); }
        .visual-row:nth-child(3) { border-left-color: var(--danger); }
        .visual-row .sq { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .visual-row .line { height: 2px; }
        .visual-row .num { font-family: var(--font-mono); font-size: 13px; font-weight: 700; }`,
    },
  },
  'energy-grid': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
        /* imza: nokta ızgarası zemin · 1.5px şema hattı · düğüm noktası · tek renk akış */
        body {
          background-image: radial-gradient(color-mix(in srgb, var(--ink) 14%, transparent) 1px, transparent 1px);
          background-size: 8px 8px;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; }
        h1 { font-size: 52px; line-height: 1.02; max-width: 20ch; }
        h2 { font-size: 32px; line-height: 1.1; letter-spacing: .01em; }
        h3 { font-size: 21px; line-height: 1.24; }
        .lede { font-size: 16px; line-height: 1.6; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .eyebrow::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent);
        }
        .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .12em; text-transform: uppercase; }

        .nav {
          background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0;
          box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--accent) 20%, transparent);
        }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .panel, .card, .visual-card { position: relative; }
        .panel::before, .card::before, .visual-card::before {
          content: ''; position: absolute; top: -3px; left: -3px; width: 5px; height: 5px;
          border-radius: 50%; background: var(--accent);
        }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: -.02em; }
        .kpi { border-top: 1px solid color-mix(in srgb, var(--accent) 40%, transparent); }

        .btn {
          height: 42px; padding: 0 18px; border-radius: var(--radius); box-shadow: none;
          background: var(--accent); color: var(--accent-ink); border: 1px solid transparent;
          font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
        .btn.sm { height: 32px; padding: 0 12px; font-size: 10px; }
        .btn.ghost, .btn.soft {
          background: transparent; color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
        }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line);
          font-family: var(--font-mono); font-size: 13px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 16%, transparent); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 46%, transparent); }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
        .bar, .line, .divider { background: color-mix(in srgb, var(--accent) 34%, var(--line)); }
        .m-grid {
          background-image: radial-gradient(color-mix(in srgb, var(--ink) 16%, transparent) 1px, transparent 1px);
          background-size: 8px 8px; border-radius: var(--radius-lg);
        }
        .mark { border-radius: 50%; background: var(--accent); color: var(--accent-ink); }
        .sig { border-top: 1px solid color-mix(in srgb, var(--accent) 30%, transparent); }

        /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
        /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
        .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
          opacity: 1 !important; background: var(--surface-2) !important;
          color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
        }
        /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 62%, transparent);
        }
        /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
        .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
        /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
  `,
    scenes: {
    landing: `
        /* landing imzası: tek hat şeması (düğüm + akış hattı + yük) */
        .hero-visual { background-image: radial-gradient(color-mix(in srgb, var(--ink) 16%, transparent) 1px, transparent 1px);
          background-size: 8px 8px; }
        .hero-visual::before { content: ''; position: absolute; left: 18px; right: 18px; top: 34%; height: 1.5px; pointer-events: none;
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 60%, transparent) 18% 82%, transparent); }
        .visual-card { background: color-mix(in srgb, var(--surface) 88%, transparent); border-color: color-mix(in srgb, var(--accent) 30%, var(--line)); }
        .visual-card .bar { height: 3px; background: color-mix(in srgb, var(--accent) 60%, transparent); }
        .visual-row { position: relative; display: grid; grid-template-columns: 14px 1fr 44px; align-items: center; gap: 8px; }
        .visual-row .sq { width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent); }
        .visual-row .line { height: 1.5px; background: color-mix(in srgb, var(--accent) 40%, transparent); }
        .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--accent); }`,
    'dark-landing': `
        /* koyu mod: akış hattı daha parlak, düğüm halkası genişler */
        .hero-visual::before { background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 78%, transparent) 18% 82%, transparent); }
        .visual-row .sq { box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 24%, transparent); }`,
    },
  },
  'calibration-lab': {
    motif: 'grid',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Jost başlık + mono etiket, iki punto gövde ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
        h1 { font-size: 44px; line-height: 1.06; max-width: 20ch; }
        h2 { font-size: 26px; line-height: 1.16; }
        h3 { font-size: 19px; line-height: 1.3; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: 0; font-variant-numeric: tabular-nums;
        }
        .kpi .v, .kpi .num-big { font-size: 22px; }
        .eyebrow, .label, .mono, .chip, .trow .num, .kpi .k, .axis, .legend, .lv-tag, .crumbs span {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase;
        }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: 'REF '; color: var(--ink-faint); letter-spacing: .14em; }
        .label, .kpi .k, .axis, .legend { color: var(--ink-soft); }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.62; max-width: 62ch; color: var(--ink-soft); }

        /* ---------- yüzey: hairline çerçeve, gölge yok ---------- */
        .nav {
          background: var(--bg); border-bottom: 1px solid var(--line); box-shadow: none;
          border-radius: 0; padding: 0 32px; height: 48px;
        }
        .brand { font-family: var(--font-display); font-weight: 600; font-size: 16px; letter-spacing: -.01em; text-transform: none; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); }
        .panel, .panel-2, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .plan, .auth-card, .ob-card, .co-sec, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius); box-shadow: none; backdrop-filter: none;
        }
        .table { border-radius: var(--radius); overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .trow .num { letter-spacing: .02em; text-transform: none; font-size: 12px; }

        /* ---------- okuma bandı: tablo başlığı + KPI satırı ---------- */
        .table-head, .kpi-row, .tbl th, .mini-table th {
          background: var(--surface-2); border-bottom: 1px solid var(--line);
        }
        .kpi, .m-tile { padding: 16px 20px; gap: 6px; }
        .kpi .v, .kpi .num-big { color: var(--ink); }

        /* ---------- tolerans çubuğu: 2px, hedef bandı surface-2, sapma accent ---------- */
        .bar, .track, .track i { height: 2px; border-radius: 0; }
        .visual-card .bar, .bars .bar { background: var(--accent); }
        .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--ink-soft); }
        .track { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); }

        /* ---------- kontroller ---------- */
        .btn {
          font-family: var(--font-display); font-weight: 600; font-size: 13px; letter-spacing: 0;
          min-height: 38px; padding: 8px 16px; border-radius: var(--radius); box-shadow: none; text-transform: none;
        }
        .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); }
        .btn:focus-visible, .field:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .field, input, select, textarea {
          min-height: 38px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--surface); font-family: var(--font-mono); font-size: 14px; color: var(--ink);
          font-variant-numeric: tabular-nums;
        }
        .field.focus, .field:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
        .chip {
          height: 22px; padding: 0 8px; border-radius: var(--radius);
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          letter-spacing: .1em; text-transform: uppercase;
        }
        .chip.accent { background: transparent; border-color: var(--accent); color: var(--accent); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
        .divider { height: 1px; background: var(--line); }
        .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 1px solid var(--line); }
        .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); box-shadow: none; }
        .opt .box { border-radius: var(--radius); }
        .logo-strip { border-top: 1px solid var(--line); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; }
        .proof li { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft); }
        .proof li::before { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

        /* ---------- imza: kalibrasyon ızgarası + tolerans bandı (hero görseli) ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg);
          box-shadow: none; overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-color: var(--surface);
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: .55;
        }
        /* hedef bandı: hero görselinde yatay şerit + 1px kesikli sınırlar */
        .hero-visual::after {
          content: ''; position: absolute; left: 0; right: 0; top: 46%; height: 56px;
          pointer-events: none;
          background: color-mix(in srgb, var(--accent) 8%, transparent);
          border-top: 1px dashed color-mix(in srgb, var(--accent) 55%, transparent);
          border-bottom: 1px dashed color-mix(in srgb, var(--accent) 55%, transparent);
        }

        /* ---------- landing atmosferi: sağ üstte ince okuma ızgarası, yazı yok ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; right: -6vw; top: -8vh; width: 46vw; height: 46vw;
          background-image:
            linear-gradient(color-mix(in srgb, var(--accent) 16%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--accent) 16%, transparent) 1px, transparent 1px);
          background-size: 22px 22px;
          -webkit-mask-image: radial-gradient(60% 60% at 50% 50%, var(--ink) 0%, transparent 72%);
          mask-image: radial-gradient(60% 60% at 50% 50%, var(--ink) 0%, transparent 72%);
          pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: 4vw; top: 12vh; width: 26vw; height: 1px;
          background: var(--accent); opacity: .5; pointer-events: none;
        }

        /* ---------- dashboard: KPI'lar okuma bandı gibi, eşit genişlik ---------- */
        body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
        body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; }
        body.scene-dashboard .kpi:last-child { border-right: 0; }

        @media (max-width: 900px) {
          h1 { font-size: 28px; max-width: 22ch; }
          h2 { font-size: 21px; }
          .lede { font-size: 14px; }
          .hero-visual::after { height: 40px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
          body.scene-dashboard .kpi:last-child { border-bottom: 0; }
          body.scene-landing .sig::before { opacity: .5; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border-radius: var(--radius); box-shadow: var(--shadow-hard); padding: 18px 16px 22px; }
          .hero-visual .visual-card .bar { height: 2px; border-radius: 0; border: 0; background: var(--line); }
          .hero-visual .visual-card .bar.accent { width: 46%; background: var(--accent); }
          .hero-visual .visual-rows { gap: 0; margin-top: 6px; border-top: 1px solid var(--line); }
          .hero-visual .visual-row { height: 30px; padding: 0; border-bottom: 1px solid var(--line); grid-template-columns: 8px 1fr auto; gap: 10px; }
          .hero-visual .visual-row .sq { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
          .hero-visual .visual-row .line { height: 1px; border-radius: 0; background: var(--ink-faint); opacity: .7; }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; }
          .hero-visual::before { content: ''; position: absolute; inset: 12px; pointer-events: none;
            background-image: linear-gradient(90deg, var(--line) 1px, transparent 1px), linear-gradient(0deg, var(--line) 1px, transparent 1px);
            background-size: 28px 28px; opacity: .45; }
        `,
    },
  },
  'warehouse-flow': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
        /* ---------- tipografi: Archivo Black blok başlık + mono kod ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; }
        h1 { font-size: 56px; line-height: .96; letter-spacing: -.02em; max-width: 18ch; }
        h2 { font-size: 30px; line-height: 1.1; letter-spacing: -.01em; max-width: 22ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
        h3 { font-size: 20px; line-height: 1.25; }
        h4 { font-size: 15px; line-height: 1.3; }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span {
          font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
        }
        .eyebrow { color: var(--ink); }
        .eyebrow::before { content: '▮ '; color: var(--ink); }
        .label, .kpi .k { color: var(--ink-soft); font-weight: 400; }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.55; max-width: 58ch; color: var(--ink-soft); }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b {
          font-family: var(--font-mono); font-weight: 700; letter-spacing: -.02em;
        }
        .kpi .v, .kpi .num-big { font-size: 24px; }

        /* ---------- nav: 2px ink alt çizgi, aktif öğede 4px accent şerit ---------- */
        .nav { height: 56px; padding: 0 24px; background: var(--bg); border-bottom: 2px solid var(--ink); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 400; font-size: 18px; letter-spacing: -.01em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -19px; height: 4px; background: var(--accent);
        }

        /* ---------- paneller gölgesiz; taşınabilir öğe 4px sert ofset ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none; backdrop-filter: none;
        }
        .table { border-radius: var(--radius-lg); overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .trow .num { font-weight: 400; letter-spacing: .02em; text-transform: none; font-size: 13px; }

        /* iş kartı / plan / modal: taşınabilir → 2px ink + ofset */
        .plan, .comp-card-demo, .state-card {
          border: 2px solid var(--ink); box-shadow: var(--shadow-hard); border-radius: var(--radius-lg);
        }
        .plan.hot { border-color: var(--ink); }
        .plan.hot::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: var(--accent);
          border-radius: var(--radius-lg) 0 0 var(--radius-lg);
        }
        .modal, .drawer, .menu {
          border: 2px solid var(--ink); box-shadow: var(--shadow-hard); border-radius: var(--radius-lg);
        }

        /* ---------- kontroller: 44px hedef, ofset basma hissi ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .02em;
          min-height: 44px; padding: 10px 20px; border-radius: var(--radius); border: 1px solid var(--ink);
          box-shadow: var(--shadow-hard); text-transform: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft {
          background: var(--surface); color: var(--ink); border: 1px solid var(--ink); box-shadow: var(--shadow);
        }
        .btn.sm { min-height: 36px; padding: 8px 12px; font-size: 12px; box-shadow: var(--shadow); }
        .btn:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--ink); }
        .btn:active { transform: translate(4px, 4px); box-shadow: none; }
        .btn:focus-visible { outline: 3px solid var(--ink); outline-offset: 2px; }
        .field, input, select, textarea {
          min-height: 44px; border: 1px solid var(--ink); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-mono); font-size: 14px; font-variant-numeric: tabular-nums;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 3px solid var(--accent); outline-offset: 2px;
        }
        .field.err { border-color: var(--danger); outline-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 8px; border-radius: var(--radius);
          background: var(--surface-2); border: 1px solid var(--ink); color: var(--ink);
          box-shadow: none; letter-spacing: .1em;
        }
        .chip.accent { background: var(--accent); border-color: var(--ink); color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--ink); color: var(--bg); font-family: var(--font-display); font-weight: 400; }
        .divider { height: 2px; background: var(--ink); }
        .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 1px solid var(--ink); background: var(--surface-2); }
        .icon-btn { border-radius: var(--radius); border: 1px solid var(--ink); background: var(--surface); box-shadow: none; }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--ink); }
        .track, .track i { border-radius: 0; height: 8px; }
        .track { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--ink); }
        .track i { background: var(--accent); }
        .logo-strip { border-top: 2px solid var(--ink); letter-spacing: .12em; }
        .proof li::before { width: 8px; height: 8px; border-radius: 0; background: var(--accent); }
        .tabbar { border-top: 2px solid var(--ink); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- imza: hero görselinde raf şeritleri + kutu numarası ---------- */
        .hero-visual { background: var(--bg-2); border: 2px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); }
        .hero-visual::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: repeating-linear-gradient(
            0deg,
            transparent 0 46px,
            color-mix(in srgb, var(--ink) 78%, transparent) 46px 49px,
            color-mix(in srgb, var(--accent) 55%, transparent) 49px 53px,
            transparent 53px 56px
          );
          opacity: .5;
        }

        /* ---------- landing: çapraz raf şeridi bandı (bölüm ayırıcı, tek kez) ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0; height: 10px;
          background: repeating-linear-gradient(
            112deg,
            var(--ink) 0 12px,
            var(--accent) 12px 24px
          );
          pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: -8vw; bottom: -12vh; width: 40vw; height: 16vh;
          background-image: repeating-linear-gradient(
            90deg,
            color-mix(in srgb, var(--ink) 10%, transparent) 0 1px,
            transparent 1px 34px
          );
          pointer-events: none;
        }

        /* ---------- dashboard: KPI şeridi 2px çizgiyle bölünür ---------- */
        body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
        body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; }
        body.scene-dashboard .kpi:last-child { border-right: 0; }
        body.scene-dashboard .side { border-right: 2px solid var(--ink); }

        @media (max-width: 900px) {
          h1 { font-size: 32px; max-width: 16ch; }
          h2 { font-size: 22px; }
          .lede { font-size: 14px; }
          .hero-visual { box-shadow: 3px 3px 0 var(--ink); }
          .btn { box-shadow: 3px 3px 0 var(--ink); }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
          body.scene-dashboard .kpi:last-child { border-bottom: 0; }
          body.scene-dashboard .side { border-right: 0; border-bottom: 2px solid var(--ink); }
          body.scene-landing .sig::after { display: none; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 2px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); padding: 18px; }
          .hero-visual .visual-card .bar { height: 8px; border-radius: 0; border: 1px solid var(--ink); background: var(--surface-2); box-shadow: none; }
          .hero-visual .visual-card .bar.accent { width: 40%; background: var(--accent); border-color: transparent; }
          .hero-visual .visual-rows { gap: 0; border-top: 2px solid var(--ink); }
          .hero-visual .visual-row { height: 34px; padding: 0 8px; border-bottom: 1px solid var(--line); grid-template-columns: 22px 1fr auto; }
          .hero-visual .visual-row .sq { width: 16px; height: 16px; border-radius: 0; border: 1px solid var(--ink); background: var(--surface); }
          .hero-visual .visual-row .line { height: 4px; border-radius: 0; background: var(--surface-2); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 12px; font-weight: 700; }
        `,
    },
  },
  'maintenance-cmms': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Chakra Petch başlık · Space Grotesk gövde · Courier Prime künye ---------- */
        h1, h2 { font-family: var(--font-display); font-weight: 600; }
        h1 { font-size: 38px; line-height: 1.08; letter-spacing: 0; max-width: 21ch; }
        h2 { font-size: 24px; line-height: 1.2; letter-spacing: .01em; }
        h3, h4 { font-family: var(--font-body); font-weight: 700; }
        h3 { font-size: 18px; line-height: 1.25; }
        h4 { font-size: 15px; line-height: 1.3; }
        .eyebrow, .label, .mono, .chip, .trow .num, .kpi .k, .logo-strip span, .proof li, .crumbs span {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .16em; text-transform: uppercase;
        }
        .eyebrow, .kpi .k, .label { font-size: 11px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '// '; color: var(--ink-faint); }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 64ch; color: var(--ink-soft); }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 26px; }

        /* ---------- nav ---------- */
        .nav { height: 52px; padding: 0 28px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 600; font-size: 17px; letter-spacing: 0; text-transform: none; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; font-weight: 500; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -17px; height: 3px; background: var(--accent);
        }

        /* ---------- yüzey: koyu mat, tek yönlü alt gölge ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .trow .num { font-size: 12px; letter-spacing: .14em; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .foot-demo, .logo-strip { background: var(--bg-2); border-top: 1px solid var(--line); }

        /* iş emri kartı: üstte 4px delikli turuncu şerit */
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { position: relative; padding: 18px; }
        .plan::before, .comp-card-demo::before, .state-card::before, .auth-card::before, .ob-card::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0; height: 4px;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          background-color: var(--surface-2);
          background-image: radial-gradient(var(--accent) 1.2px, transparent 1.2px);
          background-size: 8px 4px;
        }
        .plan.hot, .m-tile.accent { box-shadow: var(--shadow-hard); }
        .plan.hot::before { background-color: var(--surface-2); }

        /* ---------- kontroller: 40px görsel, 44px hedef ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 700; font-size: 13px; letter-spacing: .01em;
          min-height: 40px; padding: 8px 18px; border-radius: var(--radius);
          border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }
        .btn.soft { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { border-color: var(--ink-soft); }
        .btn:focus-visible { outline: 2px solid var(--warn); outline-offset: 2px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .field, input, select, textarea {
          min-height: 40px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--bg-2); color: var(--ink);
          font-family: var(--font-mono); font-size: 14px; letter-spacing: .02em;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 1px; border-left: 3px solid var(--accent);
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 10px; border-radius: 6px;
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          letter-spacing: .14em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 600; }
        .divider { height: 1px; background: var(--line); }
        .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); }
        .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .opt .box { border-radius: 4px; border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 0; height: 8px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 0; height: 8px; }
        .proof li::before { width: 7px; height: 7px; border-radius: 2px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: 4px; }

        /* ---------- imza: hero görselinde delikli panel + makine künyesi ---------- */
        .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); overflow: hidden; }
        .hero-visual::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(color-mix(in srgb, var(--ink) 16%, transparent) 1.2px, transparent 1.2px);
          background-size: 14px 14px;
          opacity: .7;
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
          background: var(--accent); opacity: .75; pointer-events: none;
        }

        /* ---------- landing: sol üstte 4px turuncu şerit, sağ altta ışıklı zemin yok ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 4px;
          background: var(--accent); opacity: .9; pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; left: -6vw; bottom: -18vh; width: 44vw; height: 44vw;
          background-image: radial-gradient(color-mix(in srgb, var(--ink) 14%, transparent) 1.2px, transparent 1.2px);
          background-size: 16px 16px;
          -webkit-mask-image: radial-gradient(60% 60% at 50% 50%, var(--ink) 0%, transparent 70%);
          mask-image: radial-gradient(60% 60% at 50% 50%, var(--ink) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ---------- dashboard: KPI şeridi tek çizgiyle bölünür, geciken işte turuncu halka ---------- */
        body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: var(--surface); }
        body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; background: transparent; }
        body.scene-dashboard .kpi:last-child { border-right: 0; }
        body.scene-dashboard .kpi:nth-child(2) { box-shadow: inset 3px 0 0 var(--accent); }

        @media (max-width: 900px) {
          h1 { font-size: 26px; max-width: 20ch; }
          h2 { font-size: 20px; }
          .lede { font-size: 14px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); box-shadow: none; }
          body.scene-dashboard .kpi:last-child { border-bottom: 0; }
          body.scene-landing .sig::after { display: none; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); padding: 20px; }
          .hero-visual .visual-card::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 4px;
            border-radius: var(--radius-lg) var(--radius-lg) 0 0; background-color: var(--surface-2);
            background-image: radial-gradient(var(--accent) 1.2px, transparent 1.2px); background-size: 8px 4px; }
          .hero-visual .visual-card .bar { height: 6px; border: 0; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 34%; background: var(--accent); }
          .hero-visual .visual-row { height: 32px; border-bottom: 1px solid var(--line); grid-template-columns: 18px 1fr auto; gap: 10px; }
          .hero-visual .visual-row .sq { width: 14px; height: 14px; border-radius: 3px; border: 1px solid var(--accent); background: transparent; }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em; }
          .hero-visual::after { content: 'WO-2481'; position: absolute; right: 18px; top: 14px;
            font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-faint); }
        `,
    },
  },
  'construction-site': {
    motif: 'paper',
    bodyClass: 'upper',
    extraCss: `
        /* ---------- tipografi: Anton plaka başlık · Jost gövde · Space Mono metraj ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; }
        h1 { font-size: 64px; line-height: .92; letter-spacing: .01em; max-width: 16ch; }
        h2 { font-size: 30px; line-height: 1.05; letter-spacing: 0; max-width: 24ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
        h3 { font-size: 21px; line-height: 1.25; }
        h4 { font-size: 16px; line-height: 1.3; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num, .kpi .k {
          font-family: var(--font-mono); letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 28px; font-weight: 400; }
        .eyebrow, .label, .mono, .chip, .logo-strip span, .proof li, .crumbs span {
          font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
        }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '▪ '; color: var(--ink); }
        .label, .kpi .k { color: var(--ink-faint); font-weight: 400; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.62; max-width: 60ch; color: var(--ink-soft); }

        /* ---------- nav: 2px yapısal alt kural ---------- */
        .nav { height: 60px; padding: 0 32px; background: var(--bg); border-bottom: 2px solid var(--ink); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 400; font-size: 20px; letter-spacing: .02em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -21px; height: 4px; background: var(--accent);
        }

        /* ---------- plaka: 2px ink çerçeve, gölge yok ---------- */
        .panel, .panel-2, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .m-tile, .table {
          background: var(--surface); border: 2px solid var(--ink);
          border-radius: var(--radius-lg); box-shadow: none; backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .trow .num { font-size: 14px; font-weight: 400; letter-spacing: .02em; }
        .side { background: var(--bg-2); border-right: 2px solid var(--ink); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 2px solid var(--ink); }
        .divider { height: 1px; background: var(--line); }
        .divider-x { background: var(--line); }

        /* kaldırılan blok: 6px sert ofset */
        .plan, .comp-card-demo, .state-card, .m-tile.accent, .modal, .drawer, .menu {
          box-shadow: var(--shadow-hard); border-radius: var(--radius-lg);
        }
        .plan { padding: 24px; }
        .plan.hot { border-color: var(--ink); box-shadow: var(--shadow-hard); }
        .plan.hot::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: var(--accent);
        }

        /* ---------- kontroller: 48px hedef, ofset basma ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 14px; letter-spacing: .06em; text-transform: uppercase;
          min-height: 48px; padding: 12px 24px; border-radius: var(--radius); border: 2px solid var(--ink);
          box-shadow: var(--shadow-hard);
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 2px solid var(--ink); box-shadow: none; }
        .btn.sm { min-height: 40px; padding: 8px 14px; font-size: 12px; box-shadow: none; }
        .btn:hover { transform: translate(3px, 3px); box-shadow: 3px 3px 0 var(--ink); }
        .btn:active { transform: translate(6px, 6px); box-shadow: none; }
        .btn:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--ink); }
        .field, input, select, textarea {
          min-height: 48px; border: 2px solid var(--ink); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-mono); font-size: 15px; letter-spacing: .02em;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 3px solid var(--accent); outline-offset: 2px;
        }
        .field.err { border-color: var(--danger); outline-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 8px; border-radius: 0;
          background: transparent; border: 1px solid var(--ink); color: var(--ink);
          letter-spacing: .14em;
        }
        .chip.accent { background: var(--accent); border-color: var(--ink); color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--ink); color: var(--bg); font-family: var(--font-display); font-weight: 400; }
        .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 2px solid var(--ink); background: var(--surface-2); }
        .icon-btn { border-radius: var(--radius); border: 2px solid var(--ink); background: var(--surface); box-shadow: none; }
        .opt .box { border-radius: 0; border: 2px solid var(--ink); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 0; height: 10px; box-shadow: inset 0 0 0 2px var(--ink); }
        .track i { background: var(--accent); border-radius: 0; height: 10px; }
        .proof li::before { width: 8px; height: 8px; border-radius: 0; background: var(--accent); }
        .tabbar { border-top: 2px solid var(--ink); background: var(--bg-2); }
        .scene-mobile .tabs span { border-radius: 0; }

        /* ---------- numara kutusu: bölüm başlığının yanında ---------- */
        .hero-copy::before {
          content: '01'; display: inline-grid; place-items: center;
          width: 32px; height: 32px; margin-bottom: 14px;
          border: 2px solid var(--ink); background: var(--surface);
          font-family: var(--font-display); font-size: 18px; line-height: 1; color: var(--ink);
        }
        .art-main h2::before, .co-sec h2::before {
          content: '▪'; margin-right: 10px; color: var(--accent); font-family: var(--font-mono); font-size: 0.7em;
        }

        /* ---------- imza: hero görselinde grafik kâğıdı + kalıp plakası ---------- */
        .hero-visual { background: var(--bg-2); border: 2px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); overflow: hidden; }
        .hero-visual::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(color-mix(in srgb, var(--ink) 22%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 22%, transparent) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: .35;
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 8px;
          background: repeating-linear-gradient(112deg, var(--ink) 0 10px, var(--accent) 10px 20px);
          pointer-events: none;
        }

        /* ---------- landing: üstte 2px kural + sağda numara bloğu ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0; height: 2px; background: var(--ink);
          pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: 'B-04'; position: absolute; right: 4vw; top: 8vh;
          font-family: var(--font-display); font-size: 96px; line-height: 1; letter-spacing: .02em;
          color: color-mix(in srgb, var(--ink) 10%, transparent);
          pointer-events: none;
        }

        /* ---------- dashboard: metraj satırları ve toplam ---------- */
        body.scene-dashboard .kpis { gap: 16px; }
        body.scene-dashboard .table .trow:last-of-type { border-top: 2px solid var(--ink); border-bottom: 0; }
        body.scene-dashboard .kpi .v { font-family: var(--font-mono); }

        @media (max-width: 900px) {
          h1 { font-size: 34px; max-width: 18ch; }
          h2 { font-size: 22px; }
          .lede { font-size: 15px; }
          .btn { min-height: 48px; box-shadow: 4px 4px 0 var(--ink); }
          .hero-visual { box-shadow: 4px 4px 0 var(--ink); }
          body.scene-landing .sig::after { font-size: 48px; top: 4vh; opacity: .8; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 2px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); padding: 22px; }
          .hero-visual .visual-card .bar { height: 6px; border-radius: 0; border: 1px solid var(--ink); background: var(--surface-2); box-shadow: none; }
          .hero-visual .visual-card .bar.accent { width: 30%; background: var(--accent); border-color: transparent; }
          .hero-visual .visual-row { height: 36px; border-top: 2px solid var(--ink); grid-template-columns: 26px 1fr auto; }
          .hero-visual .visual-row .sq { width: 22px; height: 22px; border-radius: 0; border: 2px solid var(--ink); background: var(--surface); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 13px; }
          .hero-visual::before { content: ''; position: absolute; inset: 0; pointer-events: none;
            background-image: repeating-linear-gradient(0deg, transparent 0 22px, color-mix(in srgb, var(--ink) 16%, transparent) 22px 23px); opacity: .5; }
        `,
    },
  },
  'cockpit-avionics': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: `
        /* ---------- tipografi: Rajdhani başlık · Inter gövde · Share Tech Mono okuma ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 700; text-transform: uppercase; }
        h1 { font-size: 34px; line-height: 1.02; letter-spacing: .06em; max-width: 22ch; }
        h2 { font-size: 22px; line-height: 1.15; letter-spacing: .04em; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
        h3 { font-size: 17px; line-height: 1.25; }
        h4 { font-size: 14px; line-height: 1.3; }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '◈ '; color: var(--ink-faint); }
        .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.5; max-width: 70ch; color: var(--ink-soft); }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .04em;
        }
        .kpi .v, .kpi .num-big { font-size: 22px; }

        /* ---------- nav: 3 bölgeli üst bar ---------- */
        .nav { height: 44px; padding: 0 20px; background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 700; font-size: 16px; letter-spacing: .14em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--accent); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -15px; height: 2px; background: var(--accent);
        }

        /* ---------- bezel: dış 1px + iç 1px, gölge yok ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent);
          backdrop-filter: none;
        }
        .table { border-radius: var(--radius); overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .trow .num { font-size: 15px; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }

        /* aktif panel: 1px cyan dış halka (shadow-hard) */
        .plan.hot, .kpi:first-child, .m-tile.accent {
          box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent), var(--shadow-hard);
        }
        .plan.hot::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent);
        }

        /* ---------- kontroller: 34px görsel, 44px hedef ---------- */
        .btn {
          font-family: var(--font-display); font-weight: 700; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
          min-height: 34px; padding: 8px 14px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft { background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }
        .btn.ghost:hover, .btn.soft:hover { border-color: var(--ink-soft); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 28px; padding: 4px 10px; font-size: 10px; letter-spacing: .16em; }
        .field, input, select, textarea {
          min-height: 34px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--bg-2); color: var(--ink);
          font-family: var(--font-mono); font-size: 13px; letter-spacing: .04em;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 1px; border-left: 2px solid var(--accent);
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 20px; padding: 0 8px; border-radius: var(--radius);
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .14em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
        .avatar, .avatar-lg, .empty-ic { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); }
        .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }

        /* segmentli gösterge: 4px bloklar, sürekli gradient yok */
        .track {
          height: 12px; border-radius: var(--radius); background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line);
          background-image: repeating-linear-gradient(90deg, transparent 0 6px, var(--bg) 6px 8px);
        }
        .track i { background: var(--accent); border-radius: var(--radius); height: 12px; }
        .visual-card .bar, .bars .bar { border-radius: 1px; }
        .proof li::before { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- imza: radar halkaları (statik) + ufuk çizgisi ---------- */
        .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent); overflow: hidden; }
        .hero-visual::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: repeating-radial-gradient(circle at 50% 50%, transparent 0 42px, color-mix(in srgb, var(--accent) 34%, transparent) 42px 43px, transparent 43px 84px);
          opacity: .7;
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px;
          background: color-mix(in srgb, var(--accent) 45%, transparent); pointer-events: none;
        }

        /* ---------- landing: üstte 2px cyan ölçüm şeridi + sağ altta ölçek bandı ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0; height: 2px; background: var(--accent); opacity: .8;
          pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 6px;
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 55%, transparent) 0 1px, transparent 1px 24px);
          pointer-events: none;
        }

        /* ---------- dashboard: 3/6/3 bölge, gösterge ızgarası ---------- */
        body.scene-dashboard .main { gap: 12px; }
        body.scene-dashboard .kpis { gap: 12px; }
        body.scene-dashboard .kpi { padding: 12px 14px; }
        body.scene-dashboard .kpi .k { letter-spacing: .2em; }
        body.scene-dashboard .table .trow { font-variant-numeric: tabular-nums; }
        body.scene-dashboard .side { border-right: 1px solid var(--line); }

        @media (max-width: 900px) {
          h1 { font-size: 24px; max-width: 20ch; }
          h2 { font-size: 19px; }
          .lede { font-size: 13px; }
          .nav { height: 44px; padding: 0 14px; }
          .panel, .panel-2, .kpi, .table { border-radius: var(--radius); }
          body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; gap: 8px; }
          body.scene-landing .sig::after { display: none; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 1px solid var(--accent); border-radius: var(--radius-lg); padding: 18px;
            box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent); }
          .hero-visual .visual-card .bar { height: 10px; border: 0; border-radius: var(--radius); background: var(--surface-2);
            background-image: repeating-linear-gradient(90deg, transparent 0 5px, var(--bg) 5px 7px); }
          .hero-visual .visual-card .bar.accent { width: 42%; background: var(--accent);
            background-image: repeating-linear-gradient(90deg, transparent 0 5px, color-mix(in srgb, var(--bg) 45%, transparent) 5px 7px); }
          .hero-visual .visual-row { height: 32px; border-bottom: 1px solid var(--line); grid-template-columns: 8px 1fr auto; }
          .hero-visual .visual-row .sq { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
          .hero-visual::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px;
            background: color-mix(in srgb, var(--accent) 32%, transparent); pointer-events: none; }
          .hero-visual::after { content: ''; position: absolute; inset: 0; pointer-events: none;
            background: repeating-radial-gradient(circle at 50% 50%, transparent 0 42px, color-mix(in srgb, var(--accent) 20%, transparent) 42px 43px); }
        `,
    },
  },
  'nordic-folk': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* imza: düz boyanmış zemin · 2px boyalı çift kural · rosemaling nokta şeridi */
        h1 { font-size: 54px; line-height: 1.04; letter-spacing: -.015em; max-width: 20ch; }
        h2 { font-size: 30px; line-height: 1.16; }
        h3 { font-size: 20px; line-height: 1.28; }
        .eyebrow, .label, .mono { letter-spacing: .18em; }
        .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: .01em; }
        .lede { font-size: 16.5px; line-height: 1.66; max-width: 46ch; }

        /* boyalı çift kural: 1px accent + 8px boşluk + 1px line */
        .nav { border-bottom: 1px solid var(--line); box-shadow: 0 2px 0 -1px var(--accent); }
        .divider { height: 9px; background: none; border-top: 1px solid var(--accent); border-bottom: 1px solid var(--line); }
        .hero-copy { border-left: 2px solid var(--accent); padding-left: 22px; }

        /* yüzey: mat boya, kart yalnız 1px çizgi + radius-lg */
        .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .hero-visual { border-radius: var(--radius-lg); }
        .chip { border-radius: 999px; border-color: color-mix(in srgb, var(--accent) 42%, transparent); letter-spacing: .12em; }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: 50%; box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 45%, transparent); }
        .btn { border-radius: var(--radius); font-family: var(--font-body); font-size: 15px; font-weight: 600; letter-spacing: 0; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); }

        /* rosemaling nokta şeridi: yalnız dekoratif katman (metin arkasına girmez) */
        body.scene-landing .sig::before {
          content: ""; position: absolute; top: 0; left: 0; right: 0; height: 20px;
          background-image:
            radial-gradient(circle at 50% 50%, var(--accent) 0 2px, transparent 2px),
            radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 40%, transparent) 0 1.5px, transparent 1.5px);
          background-size: 32px 20px, 16px 20px;
          background-position: 4px 3px, 12px 13px;
          opacity: .5;
        }
        /* kurbits köşe: üç eş merkezli halka + yaprak damlası */
        body.scene-landing .sig::after {
          content: ""; position: absolute; top: 34px; right: 5vw;
          width: 148px; height: 148px; border-radius: 50%;
          border: 2px solid color-mix(in srgb, var(--accent) 34%, transparent);
          box-shadow: inset 0 0 0 9px transparent, inset 0 0 0 10px color-mix(in srgb, var(--accent) 20%, transparent);
        }
        /* bant: bölüm üstü ince nokta dizisi (yalnız logo şeridi ve alt şerit) */
        .logo-strip, .foot-demo {
          background-image: radial-gradient(circle at 50% 100%, color-mix(in srgb, var(--accent) 30%, transparent) 0 1.5px, transparent 1.5px);
          background-size: 18px 6px; background-repeat: repeat-x; background-position: bottom;
        }
        @media (max-width: 900px) {
          h1 { font-size: 34px; max-width: 22ch; }
          body.scene-landing .sig::after { width: 84px; height: 84px; right: 4vw; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 20px 22px; }
          .hero-visual .visual-card .bar { height: 5px; border: 0; border-radius: 999px; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 38%; background: var(--accent); }
          .hero-visual .visual-row { height: 30px; border-bottom: 1px dashed var(--line); grid-template-columns: 14px 1fr auto; }
          .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 2px; background: var(--accent); opacity: .8; }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
          .hero-visual::before { content: ''; position: absolute; left: 0; right: 0; top: 16px; height: 6px; pointer-events: none;
            background: repeating-linear-gradient(90deg, var(--accent) 0 10px, transparent 10px 20px); opacity: .45; }
        `,
    },
  },
  'japanese-ma': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* imza: ölçülmüş boşluk · tek yatay çizgi · mühür kırmızısı nokta */
        h1 { font-size: 64px; line-height: 1.02; letter-spacing: -.03em; font-weight: 400; max-width: 17ch; }
        h2 { font-size: 26px; line-height: 1.2; letter-spacing: -.02em; font-weight: 400; }
        h3 { font-size: 17px; line-height: 1.35; letter-spacing: -.01em; }
        .eyebrow, .label, .mono { letter-spacing: .22em; font-size: 11px; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .16em; text-transform: uppercase; }
        .lede { font-size: 16px; line-height: 1.78; max-width: 38ch; color: var(--ink-soft); }

        /* tek yatay çizgi: bölüm başlığının üstünde 1px, başka çizgi yok */
        .nav { border-bottom: 1px solid var(--line); padding: 26px 56px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
        .divider { height: 0; background: none; border: 0; border-top: 1px solid var(--line); }
        .hero-copy { padding-left: 0; border-left: 0; }

        /* düz washi: kart gölgesiz, radius yok, yalnız 1px çizgi */
        .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: var(--radius-lg); box-shadow: none; border: 1px solid var(--line); background: var(--surface);
        }
        .hero-visual { border-radius: var(--radius-lg); box-shadow: none; border: 1px solid var(--line); }
        .chip { border-radius: 0; background: transparent; border-color: var(--line); font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase; color: var(--ink-soft); }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .btn { border-radius: 0; font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; min-height: 46px; padding: 14px 22px; box-shadow: none; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
        .field, input, select, textarea { border-radius: 0; background: transparent; border: 0; border-bottom: 1px solid var(--line); padding-left: 0; }
        .field.focus, input:focus { outline: 1px solid var(--accent); outline-offset: 4px; }

        /* mühür: hero metninin sağında tek küçük kırmızı kare (alan <= %2) */
        body.scene-landing .sig::before {
          content: ""; position: absolute; top: 128px; left: 58vw;
          width: 26px; height: 26px; background: var(--accent); border-radius: 0;
        }
        /* boşluk çizgisi: sağ 4 kolonun sınırında 1px dikey kural, yalnız hero */
        body.scene-landing .sig::after {
          content: ""; position: absolute; top: 96px; bottom: 20vh; left: 66.6%;
          width: 1px; background: var(--line); opacity: .9;
        }
        /* kimlik: başlık üstü tek 1px çizgi (başka süs yok) */
        .hero-copy h1 { border-top: 1px solid var(--line); padding-top: 28px; }
        @media (max-width: 900px) {
          h1 { font-size: 40px; max-width: 15ch; }
          .lede { max-width: 34ch; }
          body.scene-landing .sig::after { display: none; }
          body.scene-landing .sig::before { top: 92px; left: auto; right: 6vw; width: 20px; height: 20px; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 0; box-shadow: none; background: transparent; padding: 8px 4px; }
          .hero-visual .visual-card .bar { height: 1px; border: 0; border-radius: 0; background: var(--ink-faint); opacity: .6; }
          .hero-visual .visual-card .bar.accent { width: 24%; background: var(--accent); opacity: 1; }
          .hero-visual .visual-rows { gap: 26px; margin-top: 22px; }
          .hero-visual .visual-row { grid-template-columns: 6px 1fr auto; gap: 16px; border: 0; }
          .hero-visual .visual-row .sq { width: 4px; height: 4px; border-radius: 50%; background: var(--ink-faint); }
          .hero-visual .visual-row .line { height: 1px; border-radius: 0; background: var(--line); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 10px; letter-spacing: .2em; color: var(--ink-faint); }
          .hero-visual::after { content: ''; position: absolute; left: 18%; right: 18%; bottom: 26%; height: 1px; background: var(--line); pointer-events: none; }
        `,
    },
  },
  'levant-calligraphy': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* imza: tezhip iç çerçeve · kalın-ince kalem kuralı · sağ omurga */
        h1 { font-size: 58px; line-height: 1.08; letter-spacing: -.005em; font-weight: 500; max-width: 22ch; }
        h2 { font-size: 31px; line-height: 1.14; font-weight: 500; }
        h3 { font-size: 20px; line-height: 1.3; font-weight: 500; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); letter-spacing: .12em; font-size: 11px; }
        .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: .04em; }
        .lede { font-size: 16.5px; line-height: 1.74; max-width: 48ch; color: var(--ink-soft); }
        .nav { border-bottom: 1px solid var(--line); padding: 22px 48px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11.5px; letter-spacing: .1em; }

        /* kalın-ince kalem kuralı: 2px stroke, uçları %12'de şeffafa döner */
        .divider, .hero-copy h1::after {
          content: ""; display: block; height: 2px; border: 0; margin-top: 26px;
          background: linear-gradient(90deg, transparent 0, var(--accent) 12%, var(--accent) 88%, transparent 100%);
        }
        .hero-copy { border-left: 0; padding-left: 0; }

        /* tezhip iç çerçeve: 20px içeri çekilmiş 1px altın kural (tek çerçeve) */
        .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card, .art-main {
          border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: var(--shadow);
        }
        .visual-card, .co-sec, .comp-card-demo, .art-main {
          position: relative;
        }
        .visual-card::after, .co-sec::after, .comp-card-demo::after, .art-main::after {
          content: ""; position: absolute; inset: 14px; pointer-events: none; border-radius: 1px;
          border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
        }
        .hero-visual { border-radius: var(--radius-lg); }
        .chip { border-radius: 1px; background: transparent; border-color: color-mix(in srgb, var(--accent) 50%, transparent); color: var(--ink-soft); letter-spacing: .1em; }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .btn { border-radius: 1px; font-family: var(--font-body); font-size: 15px; font-weight: 600; min-height: 46px; padding: 13px 24px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field, input, select, textarea { border-radius: 1px; background: var(--surface); border: 1px solid var(--line); }
        .mark { border-radius: 50%; background: var(--accent); color: var(--accent-ink); }

        /* tezhip gülü (rosette): 8 yapraklı madalyon, yalnız dekoratif katman */
        body.scene-landing .sig::before {
          content: ""; position: absolute; top: 84px; left: 8vw; width: 180px; height: 180px; border-radius: 50%;
          background-image:
            radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 55%, transparent) 0 8px, transparent 9px),
            repeating-conic-gradient(from 22.5deg, color-mix(in srgb, var(--accent) 30%, transparent) 0deg 6deg, transparent 6deg 45deg);
          opacity: .8;
        }
        body.scene-landing .sig::after {
          content: ""; position: absolute; top: 84px; left: 8vw; width: 180px; height: 180px; border-radius: 50%;
          border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
          box-shadow: inset 0 0 0 10px transparent, inset 0 0 0 11px color-mix(in srgb, var(--accent) 25%, transparent);
        }
        /* sağ omurga: içerik sağa dayalı, sol kolon künye */
        .hero-copy { text-align: right; }
        .hero-copy .lede { margin-left: auto; }
        .art-side, .auth-aside { border-right: 1px solid var(--line); }
        @media (max-width: 900px) {
          h1 { font-size: 36px; }
          .hero-copy { text-align: left; }
          body.scene-landing .sig::before, body.scene-landing .sig::after { width: 104px; height: 104px; top: 64px; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 1px solid var(--line); box-shadow: var(--shadow); padding: 26px 24px 20px;
            border-radius: 50% 50% var(--radius-lg) var(--radius-lg) / 18% 18% var(--radius-lg); }
          .hero-visual .visual-card .bar { height: 3px; border: 0; border-radius: 999px; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 44%; background: var(--accent); }
          .hero-visual .visual-row { height: 32px; border-bottom: 1px solid var(--line); }
          .hero-visual .visual-row .line { height: 2px; border-radius: 999px; background: color-mix(in srgb, var(--ink) 22%, transparent); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
          .hero-visual::before { content: ''; position: absolute; left: 10%; right: 10%; bottom: -16%; height: 46%; pointer-events: none;
            border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent); border-radius: 50% 50% 0 0; }
        `,
    },
  },
  'andalusian-azulejo': {
    motif: 'grid',
    bodyClass: '',
    extraCss: `
        /* imza: 2px harç ızgarası · sekiz köşeli yıldız tekrarı · ince seramik display */
        h1 { font-size: 52px; line-height: 1.1; letter-spacing: .02em; font-weight: 400; max-width: 21ch; }
        h2 { font-size: 28px; line-height: 1.2; letter-spacing: .015em; font-weight: 400; }
        h3 { font-size: 19px; line-height: 1.32; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); letter-spacing: .14em; font-size: 11px; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-size: 18px; letter-spacing: .08em; text-transform: uppercase; }
        .lede { font-size: 16px; line-height: 1.68; max-width: 50ch; color: var(--ink-soft); }

        .nav { border-bottom: 2px solid var(--line); padding: 20px 40px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .divider { height: 2px; background: var(--line); border: 0; }
        .hero-copy { border-left: 2px solid var(--accent); padding-left: 20px; }

        /* fayans: kartlar 1px ince kenar, radius 2px, golge yok; ayrım harç rengiyle */
        .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: var(--radius); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
        }
        .hero-visual { border-radius: var(--radius); box-shadow: none; border: 1px solid var(--line); }
        .chip { border-radius: 1px; background: var(--surface-2); border-color: var(--line); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .btn { border-radius: 1px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; min-height: 44px; padding: 12px 18px; box-shadow: none; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field, input, select, textarea { border-radius: 1px; background: var(--surface); border: 1px solid var(--line); }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 0; }
        .mark { border-radius: 1px; background: var(--accent); color: var(--accent-ink); }

        /* harç: bitişik fayans blokları arasında 2px zemin çizgisi */
        .m-grid, .data-grid, .comp-grid, .quad, .plan-grid, .stat-grid { gap: 2px; background: var(--line); padding: 2px; }
        .m-grid > *, .data-grid > *, .comp-grid > *, .quad > *, .plan-grid > * { background: var(--surface); }

        /* sekiz köşeli yıldız tekrarı: iki kare üst üste, yalnız dekoratif katman */
        body.scene-landing .sig::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .16;
          background-image:
            repeating-conic-gradient(from 22.5deg, var(--accent) 0deg 45deg, transparent 45deg 90deg),
            repeating-linear-gradient(45deg, transparent 0 58px, var(--accent) 58px 59px),
            repeating-linear-gradient(-45deg, transparent 0 58px, var(--accent) 58px 59px);
          background-size: 60px 60px, 60px 60px, 60px 60px;
          -webkit-mask-image: radial-gradient(circle at 78% 22%, var(--ink) 0 22vmax, transparent 24vmax);
          mask-image: radial-gradient(circle at 78% 22%, var(--ink) 0 22vmax, transparent 24vmax);
        }
        /* kobalt tek kare mühür: sağ alt köşede tek fayans */
        body.scene-landing .sig::after {
          content: ""; position: absolute; right: 7vw; bottom: 14vh; width: 58px; height: 58px;
          background: var(--accent); border-radius: 1px;
          box-shadow: inset 0 0 0 5px var(--bg), inset 0 0 0 6px var(--accent);
        }
        @media (max-width: 900px) {
          h1 { font-size: 34px; }
          body.scene-landing .sig::before { opacity: .12; }
          body.scene-landing .sig::after { width: 40px; height: 40px; right: 6vw; bottom: 8vh; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 1px solid var(--ink); border-radius: 0; padding: 20px; box-shadow: none; }
          .hero-visual .visual-card .bar { height: 4px; border: 0; border-radius: 0; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 36%; background: var(--accent); }
          .hero-visual .visual-rows { gap: 0; }
          .hero-visual .visual-row { height: 34px; padding: 0 10px; border: 1px solid var(--line); margin: -1px 0 0 -1px; grid-template-columns: 16px 1fr auto; }
          .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 0; border: 1px solid var(--accent); background: transparent; transform: rotate(45deg); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
          .hero-visual::before { content: ''; position: absolute; inset: 0; pointer-events: none;
            background-image: linear-gradient(90deg, color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px),
              linear-gradient(0deg, color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px);
            background-size: 32px 32px; }
        `,
    },
  },
  'slavic-late-brutalist': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
        /* imza: bitişik beton panel · 3px kenar · sert ofset gölge · tehlike şeridi */
        h1 { font-size: 68px; line-height: .94; letter-spacing: .01em; font-weight: 400; max-width: 16ch; }
        h2 { font-size: 34px; line-height: 1.02; letter-spacing: .01em; font-weight: 400; }
        h3 { font-size: 21px; line-height: 1.18; letter-spacing: .015em; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); letter-spacing: .16em; font-size: 11px; }
        .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: .06em; }
        .lede { font-size: 16.5px; line-height: 1.6; max-width: 46ch; }

        .nav { border-bottom: 3px solid var(--ink); padding: 18px 32px; background: var(--surface); }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; }
        .divider { height: 3px; background: var(--ink); border: 0; }
        .hero-copy { border-left: 3px solid var(--ink); padding-left: 22px; }

        /* panel: bitişik bloklar, 3px kenar, radius 0 */
        .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: 0; border: 3px solid var(--line); box-shadow: none; background: var(--surface);
        }
        .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 0; }
        .m-grid > *, .data-grid > *, .comp-grid > *, .quad > *, .plan-grid > * { border-radius: 0; margin: -1.5px 0 0 -1.5px; }
        .hero-visual { border: 3px solid var(--ink); border-radius: 0; box-shadow: var(--shadow-hard); }
        .chip { border-radius: 0; background: var(--ink); border-color: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; padding: 3px 7px; }
        .chip.accent { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
        .btn { border-radius: 0; border: 3px solid var(--ink); font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; min-height: 48px; padding: 13px 22px; box-shadow: none; }
        .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 3px solid var(--ink); box-shadow: none; }
        .btn:hover { box-shadow: var(--shadow-hard); transform: translate(-1px, -1px); }
        .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 3px solid var(--line); }
        .field.focus, input:focus { outline: 3px solid var(--ink); outline-offset: -3px; }
        .mark { border-radius: 0; background: var(--ink); color: var(--bg); }

        /* beton dokusu: yalnız bölüm zeminlerinde 1px yatay tekrar */
        .sec, .foot-demo, .art-body, .auth-aside {
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 6%, transparent) 0 1px, transparent 1px 6px);
        }
        /* tehlike şeridi: tek bant, 24px, 45 derece (ekran basina 1) */
        body.scene-landing .sig::before {
          content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 24px; pointer-events: none;
          background-image: repeating-linear-gradient(45deg, var(--accent) 0 12px, var(--ink) 12px 24px);
        }
        /* damga: sag ustte buyuk numara/etiket blogu (arsiv muhru) */
        body.scene-landing .sig::after {
          content: ""; position: absolute; top: 92px; right: 6vw; width: 120px; height: 120px;
          border: 3px solid var(--ink); background: var(--bg-2);
          box-shadow: var(--shadow-hard);
        }
        @media (max-width: 900px) {
          h1 { font-size: 40px; max-width: 14ch; }
          body.scene-landing .sig::after { width: 72px; height: 72px; top: 70px; }
          body.scene-landing .sig::before { height: 16px; }
        }

        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
      `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 2px solid var(--ink); border-radius: 0; padding: 18px;
            box-shadow: 8px 8px 0 color-mix(in srgb, var(--ink) 85%, transparent); }
          .hero-visual .visual-card .bar { height: 10px; border: 0; border-radius: 0; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 46%; background: var(--accent); }
          .hero-visual .visual-row { height: 30px; border-top: 2px solid var(--ink); grid-template-columns: 1fr auto; }
          .hero-visual .visual-row .sq { display: none; }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 13px; }
          .hero-visual::after { content: ''; position: absolute; right: -6px; bottom: -6px; width: 40%; height: 40%;
            border: 2px solid color-mix(in srgb, var(--ink) 35%, transparent); pointer-events: none; }
        `,
    },
  },
  'west-african-pattern': {
    motif: 'grid',
    bodyClass: '',
    extraCss: `
      /* imza: 8px dokuma şeritleri · 24px desen bloğu · adinkra damgası · keskin köşe · gölge yok */
      h1, h2, h3, h4 {
        font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking);
        text-transform: uppercase;
      }
      h1 { font-size: 40px; line-height: 1.1; max-width: 20ch; }
      h2 { font-size: 26px; line-height: 1.24; }
      h3 { font-size: 20px; line-height: 1.3; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; font-weight: 500;
        letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before {
        content: ''; display: inline-block; width: 8px; height: 8px;
        background: var(--accent); margin-right: 8px; vertical-align: baseline;
      }
      .lede { font-size: 16px; line-height: 1.6; max-width: 60ch; color: var(--ink-soft); }

      /* dokuma bandı: 8px şeritler, her beşinci blok 24px */
      .nav {
        height: 60px; padding: 0 24px; border-radius: 0; background: var(--bg);
        border-bottom: 1px solid var(--line); box-shadow: none; position: relative;
      }
      .nav::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 12px;
        background-image: repeating-linear-gradient(
          90deg,
          var(--accent) 0 8px, transparent 8px 16px,
          var(--line) 16px 24px, transparent 24px 32px,
          var(--accent) 32px 56px, transparent 56px 64px
        );
        opacity: .5;
      }
      .nav-links a {
        font-family: var(--font-body); font-size: 13px; letter-spacing: .12em;
        text-transform: uppercase;
      }

      /* kart: üstte 8px dokuma şeridi, keskin köşe */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; padding: 16px; position: relative; overflow: hidden;
      }
      .panel::before, .card::before, .kpi::before, .visual-card::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 8px;
        background-image: repeating-linear-gradient(
          90deg,
          var(--accent) 0 8px, transparent 8px 16px,
          var(--line) 16px 24px, transparent 24px 40px,
          var(--accent) 40px 48px, transparent 48px 56px
        );
        opacity: .42;
      }
      .panel > .t, .card > .t, .comp-card-demo > .t {
        font-family: var(--font-display); font-size: 20px; text-transform: uppercase;
        line-height: 1.3; padding-top: 12px;
      }
      .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
        font-family: var(--font-mono); font-weight: 500; letter-spacing: -.01em;
        font-variant-numeric: tabular-nums;
      }
      .kpi .v { font-size: 30px; line-height: 1.1; }

      .btn {
        min-height: 44px; padding: 0 24px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-display); font-size: 13px; font-weight: 400;
        letter-spacing: .08em; text-transform: uppercase;
      }
      .btn.ghost, .btn.soft {
        background: transparent; border: 2px solid var(--line); color: var(--ink);
        font-family: var(--font-body); font-size: 13px; letter-spacing: .12em;
      }
      .field {
        height: 40px; border-radius: var(--radius); background: var(--surface);
        border-color: var(--line); box-shadow: none; font-size: 15px;
        box-shadow: inset 4px 0 0 var(--surface-2);
      }
      .field.focus { box-shadow: inset 4px 0 0 var(--accent); }
      .chip {
        border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em;
        text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* dokuma zemin: yalnız hero ve alt bant */
      .hero, .foot-demo, .logo-strip {
        background-image: repeating-linear-gradient(
          90deg,
          color-mix(in srgb, var(--accent) 10%, transparent) 0 8px,
          transparent 8px 16px,
          color-mix(in srgb, var(--ink) 4%, transparent) 16px 24px,
          transparent 24px 40px
        );
      }
      .hero-visual {
        border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface);
        background-image: repeating-linear-gradient(
          0deg,
          color-mix(in srgb, var(--accent) 8%, transparent) 0 8px,
          transparent 8px 24px
        );
      }
      .visual-card .bar, .bars .bar { background: var(--accent); }
      .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 8px; height: 8px; border-radius: 0;
        background: var(--accent);
      }
      .divider {
        height: 8px; background: none;
        background-image: repeating-linear-gradient(
          90deg,
          var(--accent) 0 8px, transparent 8px 16px,
          var(--line) 16px 24px, transparent 24px 40px
        );
        opacity: .6;
      }
      .tbl tr:nth-child(even) td, .trow:nth-child(even) { background: var(--surface-2); }
      .tbl td:first-child, .trow .t { box-shadow: inset 3px 0 0 color-mix(in srgb, var(--accent) 35%, transparent); }
      .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; }
        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }

    `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 2px solid var(--ink); border-radius: var(--radius-lg); padding: 18px; box-shadow: var(--shadow); }
          .hero-visual .visual-card .bar { height: 6px; border: 0; border-radius: 0; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 34%; background: var(--accent); }
          .hero-visual .visual-rows { gap: 6px; }
          .hero-visual .visual-row { height: 26px; grid-template-columns: 12px 1fr auto; gap: 8px;
            background-image: repeating-linear-gradient(90deg, transparent 0 14px, color-mix(in srgb, var(--accent) 22%, transparent) 14px 16px); }
          .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 0; background: var(--accent); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
          .hero-visual::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 8px; pointer-events: none;
            background: repeating-linear-gradient(90deg, var(--accent) 0 12px, var(--ink) 12px 14px, transparent 14px 26px); opacity: .55; }
        `,
    },
  },
  'andean-textile': {
    motif: 'bars',
    bodyClass: '',
    extraCss: `
      /* imza: basamak (escalera) bandı · 8px çözgü şeritleri · 3px ofset gölge · aynalı simetri */
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: var(--tracking); }
      h1 { font-size: 38px; line-height: 1.12; max-width: 22ch; }
      h2 { font-size: 26px; line-height: 1.26; }
      h3 { font-size: 19px; line-height: 1.32; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; font-weight: 700;
        letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before {
        content: ''; display: inline-block; width: 12px; height: 6px; margin-right: 8px;
        background-image: linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 8px, var(--accent) 8px 12px);
        vertical-align: middle;
      }
      .lede { font-size: 16px; line-height: 1.62; max-width: 62ch; color: var(--ink-soft); }

      /* çözgü şeritleri: 8px aralık, 1px çizgi */
      .nav {
        height: 64px; padding: 0 24px; border-radius: 0; background: var(--surface);
        border-bottom: 1px solid var(--line); box-shadow: none; position: relative;
      }
      .nav::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 8px;
        background-image:
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 55%, transparent) 0 4px, transparent 4px 8px),
          linear-gradient(0deg, var(--line) 1px, transparent 1px);
        background-size: 8px 8px, 8px 8px;
        opacity: .5;
      }
      .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: .06em; }
      .nav-links a.active { box-shadow: inset 0 -3px 0 var(--accent); }

      /* kart: üstte çözgü şeridi, altta 4px basamak bandı, ofset gölge yok */
      .panel, .card, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; padding: 20px; position: relative; overflow: hidden;
      }
      .panel::after, .card::after, .kpi::after, .visual-card::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 4px;
        background-image:
          linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 8px),
          linear-gradient(0deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px);
        background-size: 8px 4px, 8px 4px;
        opacity: .7;
      }
      .kpi {
        box-shadow: var(--shadow-hard);
        background-image: repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 4%, transparent) 0 1px, transparent 1px 8px);
      }
      .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
        font-family: var(--font-mono); font-weight: 700; letter-spacing: 0;
        font-variant-numeric: tabular-nums;
      }
      .kpi .v { font-size: 32px; line-height: 1.1; }

      .btn {
        min-height: 46px; padding: 0 22px; border-radius: var(--radius);
        font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: .06em;
        box-shadow: var(--shadow-hard);
      }
      .btn.ghost, .btn.soft {
        background: var(--surface); border: 1px solid var(--line); color: var(--ink);
        box-shadow: none; font-family: var(--font-mono); font-size: 13px; font-weight: 700;
        letter-spacing: .08em;
      }
      .field {
        height: 42px; border-radius: var(--radius); background: var(--surface);
        border-color: var(--line); box-shadow: none; font-size: 15px;
      }
      .chip {
        border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; font-weight: 700;
        letter-spacing: .1em; text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* basamaklı zemin: hero ve alt bant */
      .hero, .foot-demo, .logo-strip {
        background-image:
          repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 5%, transparent) 0 1px, transparent 1px 8px),
          repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 2px, transparent 2px 16px);
      }
      .side, .art-toc {
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 10%, transparent) 0 2px, transparent 2px 8px, color-mix(in srgb, var(--ink) 6%, transparent) 8px 10px, transparent 10px 16px);
      }
      .hero-visual {
        border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface);
        box-shadow: var(--shadow-hard);
      }
      .visual-card .bar, .bars .bar { background: var(--accent); }
      .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 10px; height: 6px; border-radius: 0; background: none;
        background-image: linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 5px, var(--accent) 5px 10px);
      }
      .divider {
        height: 6px; background: none;
        background-image:
          linear-gradient(90deg, var(--accent) 0 4px, transparent 4px 8px),
          linear-gradient(0deg, var(--line) 1px, transparent 1px);
        background-size: 8px 6px, 8px 6px;
        opacity: .8;
      }
      .tbl td:first-child, .trow .t {
        box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--accent) 45%, transparent);
      }
      .logo-strip span { font-family: var(--font-mono); font-size: 12px; letter-spacing: .1em; }
        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }

    `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow); }
          .hero-visual .visual-card .bar { height: 6px; border: 0; border-radius: 0; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 32%; background: var(--accent); }
          .hero-visual .visual-row { height: 28px; grid-template-columns: 14px 1fr auto; }
          .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 0; background: var(--accent);
            clip-path: polygon(0 100%, 0 40%, 50% 40%, 50% 0, 100% 0, 100% 60%, 50% 60%, 50% 100%); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
          .hero-visual::before { content: ''; position: absolute; left: 12px; right: 12px; top: 12px; height: 10px; pointer-events: none;
            background-image: repeating-linear-gradient(135deg, var(--accent) 0 6px, transparent 6px 12px); opacity: .4; }
        `,
    },
  },
  'indian-block-print': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
      /* imza: 1px kayma izi · 4px ofset birincil yüzey · blok damga · çift baskı çizgisi */
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: var(--tracking); }
      h1 { font-size: 36px; line-height: 1.16; max-width: 22ch; }
      h2 { font-size: 24px; line-height: 1.28; }
      h3 { font-size: 18px; line-height: 1.32; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; font-weight: 500;
        letter-spacing: .18em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before {
        content: ''; display: inline-block; width: 8px; height: 8px; margin-right: 8px;
        background: var(--accent); vertical-align: baseline;
      }
      .lede { font-size: 15px; line-height: 1.66; max-width: 58ch; color: var(--ink-soft); }

      .nav {
        height: 56px; padding: 0 20px; border-radius: 0; background: var(--bg);
        border-bottom: 1px solid var(--line); box-shadow: none;
      }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .1em; text-transform: uppercase; }
      .nav-links a.active {
        box-shadow: inset 0 -1px 0 var(--accent), inset 0 -3px 0 transparent;
        background-image: linear-gradient(var(--accent), var(--accent));
        background-repeat: no-repeat;
        background-size: 100% 1px;
        background-position: 0 calc(100% - 3px);
      }

      /* kart: 1px kayma izi + köşede damga */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
        position: relative; background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 18px;
      }
      .card::after, .panel::after, .visual-card::after {
        content: ''; position: absolute; right: 12px; bottom: 12px; width: 20px; height: 20px;
        background-image:
          linear-gradient(90deg, var(--accent) 0 2px, transparent 2px 18px, var(--accent) 18px 20px),
          linear-gradient(0deg, var(--accent) 0 2px, transparent 2px 18px, var(--accent) 18px 20px);
        background-size: 20px 6px, 6px 20px;
        background-repeat: no-repeat;
        background-position: top left, top left;
        opacity: .28;
      }
      .panel > .t, .card > .t, .comp-card-demo > .t {
        font-family: var(--font-display); font-size: 24px; font-weight: 600;
        line-height: 1.28; padding-bottom: 8px; border-bottom: 1px solid var(--accent);
        margin-bottom: 12px;
      }
      .kpi { box-shadow: var(--shadow-hard); }
      .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
        font-family: var(--font-mono); font-weight: 500; letter-spacing: 0;
        font-variant-numeric: tabular-nums;
      }
      .kpi .v { font-size: 30px; line-height: 1.1; }

      .btn {
        min-height: 42px; padding: 0 20px; border-radius: var(--radius);
        font-family: var(--font-body); font-size: 13px; font-weight: 500;
        letter-spacing: .1em; text-transform: uppercase; box-shadow: var(--shadow-hard);
      }
      .btn.ghost, .btn.soft {
        background: var(--surface); border: 1px solid var(--line); color: var(--ink);
        box-shadow: var(--shadow); font-family: var(--font-mono); font-size: 12px;
        letter-spacing: .1em;
      }
      .field {
        height: 40px; border-radius: var(--radius); background: var(--surface);
        border-color: var(--line); box-shadow: var(--shadow); font-size: 14px;
      }
      .field.focus { box-shadow: none; }
      .chip {
        border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em;
        text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* blok tekrarı: damga deseni yalnız hero ve alt bant zemininde */
      .hero, .foot-demo, .logo-strip {
        background-image: radial-gradient(color-mix(in srgb, var(--accent) 16%, transparent) 2px, transparent 2px);
        background-size: 24px 24px;
      }
      .side, .art-toc {
        background-image: repeating-linear-gradient(
          135deg,
          color-mix(in srgb, var(--accent) 7%, transparent) 0 2px,
          transparent 2px 12px
        );
      }
      .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); box-shadow: var(--shadow-hard); }
      .visual-card .bar, .bars .bar { background: var(--accent); }
      .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 8px; height: 8px; border-radius: 0;
        background: var(--accent);
      }
      .divider { height: 1px; background: var(--line); box-shadow: 0 2px 0 color-mix(in srgb, var(--ink) 8%, transparent); }
      .tbl td:first-child, .trow .t {
        box-shadow: inset 1px 0 0 var(--accent);
      }
      .tbl tr:nth-child(4n) td, .trow:nth-child(4n) { box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--ink) 10%, transparent); }
      .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; }
        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }

    `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 1px solid var(--ink); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow); }
          .hero-visual .visual-card .bar { height: 4px; border: 0; border-radius: 99px; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 38%; background: var(--accent); }
          .hero-visual .visual-row { height: 30px; border-bottom: 1px dotted var(--line); }
          .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 50%; border: 1px solid var(--accent);
            background: radial-gradient(circle, var(--accent) 0 2px, transparent 2px); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
          .hero-visual::before { content: ''; position: absolute; right: 18px; bottom: 18px; width: 56px; height: 56px; pointer-events: none;
            border: 1px solid var(--accent); border-radius: 50%;
            background: radial-gradient(circle, transparent 0 10px, color-mix(in srgb, var(--accent) 38%, transparent) 10px 11px,
              transparent 11px 20px, color-mix(in srgb, var(--accent) 22%, transparent) 20px 21px, transparent 21px); }
        `,
    },
  },
  'persian-miniature': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
      /* imza: çift altın çerçeve · madalyon kemeri · gece laciverti · 58ch metin bloğu */
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking); }
      h1 { font-size: 42px; line-height: 1.14; max-width: 20ch; }
      h2 { font-size: 28px; line-height: 1.3; }
      h3 { font-size: 20px; line-height: 1.34; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; font-weight: 500;
        letter-spacing: .16em; text-transform: uppercase; color: var(--accent);
      }
      .eyebrow::before {
        content: ''; display: inline-block; width: 10px; height: 5px; margin-right: 8px;
        border-top: 1px solid var(--accent); border-left: 1px solid var(--accent);
        border-right: 1px solid var(--accent); border-radius: 5px 5px 0 0;
        vertical-align: middle;
      }
      .lede { font-size: 17px; line-height: 1.72; max-width: 56ch; color: var(--ink-soft); }

      /* çift altın çerçeve: dış 1px + 4px aralık + iç 1px */
      .nav {
        height: 68px; padding: 0 28px; border-radius: 0; background: var(--bg);
        border-bottom: 1px solid var(--accent); box-shadow: none; position: relative;
      }
      .nav::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -5px; height: 1px;
        background: color-mix(in srgb, var(--accent) 45%, transparent);
      }
      .nav-links a { font-family: var(--font-body); font-size: 15px; letter-spacing: .02em; }

      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
        position: relative; background: var(--surface); border-radius: var(--radius-lg);
        border: 1px solid var(--accent); box-shadow: none; padding: 28px;
      }
      .panel::before, .card::before, .kpi::before, .visual-card::before, .m-tile::before {
        content: ''; position: absolute; inset: 4px; border: 1px solid var(--accent);
        border-radius: calc(var(--radius-lg) - 4px); opacity: .55; pointer-events: none;
      }
      .kpi::after, .visual-card::after {
        content: ''; position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
        width: 96px; height: 20px; border: 1px solid var(--accent); border-bottom: 0;
        border-radius: 48px 48px 0 0; background: var(--bg); pointer-events: none;
      }
      .panel > .t, .card > .t, .comp-card-demo > .t {
        font-family: var(--font-display); font-size: 28px; font-weight: 400;
        line-height: 1.3; margin-bottom: 10px; letter-spacing: var(--tracking);
      }
      .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
        font-family: var(--font-mono); font-weight: 400; letter-spacing: 0;
        font-variant-numeric: tabular-nums; color: var(--accent);
      }
      .kpi .v { font-size: 34px; line-height: 1.1; }

      .btn {
        min-height: 44px; padding: 0 24px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: .06em;
      }
      .btn.ghost, .btn.soft {
        background: transparent; border: 1px solid var(--accent); color: var(--ink);
        position: relative;
      }
      .btn.ghost::after {
        content: ''; position: absolute; inset: 3px; border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
        border-radius: calc(var(--radius) - 2px); pointer-events: none;
      }
      .field {
        height: 44px; border-radius: var(--radius); background: var(--bg-2);
        border-color: var(--line); box-shadow: none; font-size: 16px;
        font-family: var(--font-body);
      }
      .chip {
        border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em;
        text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* altın ızgara dokusu: yalnız hero ve yan paneller */
      .hero, .side, .art-toc, .foot-demo {
        background-image:
          repeating-linear-gradient(0deg, color-mix(in srgb, var(--accent) 12%, transparent) 0 1px, transparent 1px 24px),
          repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 24px);
      }
      .hero-visual {
        border-radius: var(--radius-lg); border: 1px solid var(--accent); background: var(--surface);
        box-shadow: inset 0 0 0 4px var(--surface), inset 0 0 0 5px var(--accent);
      }
      .visual-card .bar, .bars .bar { background: var(--accent); }
      .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 8px; height: 4px; border-radius: 4px 4px 0 0; background: none;
        border: 1px solid var(--accent); border-bottom: 0;
      }
      .divider { height: 5px; background: none; border-top: 1px solid var(--accent); border-bottom: 1px solid color-mix(in srgb, var(--accent) 45%, transparent); }
      .tbl td:first-child, .trow .t { font-family: var(--font-mono); font-variant-numeric: tabular-nums; color: var(--ink-soft); }
      .logo-strip span { font-family: var(--font-display); font-size: 17px; letter-spacing: .02em; text-transform: none; }
        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }

    `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 1px solid var(--accent); padding: 30px 22px 18px; box-shadow: var(--shadow);
            border-radius: 50% 50% var(--radius-lg) var(--radius-lg) / 22% 22% var(--radius-lg); }
          .hero-visual .visual-card .bar { height: 3px; border: 0; border-radius: 99px; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 40%; background: var(--accent); }
          .hero-visual .visual-row { height: 30px; border-bottom: 1px solid var(--line); }
          .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 0; background: var(--accent);
            clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
          .hero-visual::before { content: ''; position: absolute; inset: 14px; pointer-events: none;
            border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent); border-radius: 50% 50% 0 0 / 26% 26% 0; }
        `,
    },
  },
  'aegean-island': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
      /* imza: kemer açıklık (22px) · badana dashed kenarı · 2px dalga çizgisi · neredeyse gölgesiz */
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: var(--tracking); }
      h1 { font-size: 40px; line-height: 1.12; max-width: 22ch; }
      h2 { font-size: 27px; line-height: 1.26; }
      h3 { font-size: 20px; line-height: 1.3; }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; font-weight: 500;
        letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before {
        content: ''; display: inline-block; width: 14px; height: 9px; margin-right: 8px;
        border: 1px solid var(--accent); border-bottom: 0; border-radius: 7px 7px 0 0;
        vertical-align: middle;
      }
      .lede { font-size: 16px; line-height: 1.64; max-width: 62ch; color: var(--ink-soft); }

      .nav {
        height: 68px; padding: 0 24px; border-radius: 0; background: var(--surface);
        border-bottom: 1px solid var(--line); box-shadow: none;
      }
      .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: .02em; }
      .nav-links a.active {
        border-radius: 7px 7px 0 0; box-shadow: inset 0 -1px 0 var(--accent);
        background-image: radial-gradient(circle at 50% 100%, transparent 6px, var(--accent) 6px 6.5px, transparent 7px);
        background-repeat: no-repeat; background-size: 14px 7px; background-position: 50% 100%;
      }

      /* kemerli kart: 22px radius + badana kenarı + neredeyse gölgesiz */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 24px;
      }
      .state-card, .comp-card-demo { border-style: dashed; }
      .panel > .t, .card > .t, .comp-card-demo > .t {
        font-family: var(--font-display); font-size: 27px; font-weight: 500;
        line-height: 1.26; margin-bottom: 10px; letter-spacing: var(--tracking);
      }
      .kpi .v, .kpi .num-big, .trow .num, .plan .price b {
        font-family: var(--font-mono); font-weight: 500; letter-spacing: -.01em;
        font-variant-numeric: tabular-nums;
      }
      .kpi .v { font-size: 32px; line-height: 1.1; }

      .btn {
        min-height: 46px; padding: 0 24px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-display); font-size: 14px; font-weight: 500; letter-spacing: .06em;
      }
      .btn.ghost, .btn.soft {
        background: var(--surface); border: 1px dashed var(--line); color: var(--ink);
        font-family: var(--font-body); font-size: 14px;
      }
      .field {
        height: 46px; border-radius: var(--radius); background: var(--surface);
        border-color: var(--line); box-shadow: none; font-size: 16px;
      }
      .chip {
        border-radius: 12px; background: var(--surface-2); border: 1px solid var(--line);
        color: var(--ink-soft); font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
      }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

      /* dalga çizgisi: yalnız hero kartı ve modal başlığı üstünde */
      .hero-visual {
        border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface);
        box-shadow: var(--shadow); position: relative; overflow: hidden;
      }
      .hero-visual::before {
        content: ''; position: absolute; top: 12px; left: 24px; right: 24px; height: 4px;
        background-image: radial-gradient(circle at 4px 4px, var(--accent) 3px, transparent 3.5px);
        background-size: 16px 8px; background-repeat: repeat-x; opacity: .55;
      }
      .hero, .foot-demo {
        background-image: radial-gradient(color-mix(in srgb, var(--accent) 9%, transparent) 1px, transparent 1px);
        background-size: 28px 28px;
      }
      .side, .art-toc { background-image: none; }
      .visual-card .bar, .bars .bar { background: var(--accent); }
      .visual-card .bar:not(.accent), .bars .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
      .proof li::before {
        content: ''; width: 14px; height: 9px; border-radius: 7px 7px 0 0;
        background: none; border: 1px solid var(--accent); border-bottom: 0;
      }
      .divider { height: 2px; background: none; border-top: 1px dashed var(--line); }
      .tbl td:first-child, .trow .t { box-shadow: inset 3px 0 0 var(--accent); }
      .logo-strip span { font-family: var(--font-display); font-size: 15px; letter-spacing: .04em; text-transform: none; }
        /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
        .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
        .btn { white-space: nowrap; }
        .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
        .chip.accent { color: var(--accent-ink); }
        .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig::before, .sig::after { opacity: .6; }
        .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
        @media (min-width: 901px) { .hero-visual { min-height: 380px; } }

    `,
    scenes: {
      landing: `
          .hero-visual .visual-card { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 22px 20px; box-shadow: var(--shadow); }
          .hero-visual .visual-card .bar { height: 6px; border: 0; border-radius: 999px; background: var(--surface-2); }
          .hero-visual .visual-card .bar.accent { width: 34%; background: var(--accent); }
          .hero-visual .visual-row { height: 32px; border-bottom: 1px solid var(--line); grid-template-columns: 14px 1fr auto; }
          .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 999px; background: var(--accent); opacity: .85; }
          .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
          .hero-visual::before { content: ''; position: absolute; left: 12%; right: 12%; bottom: 0; height: 52%; pointer-events: none;
            border-radius: 50% 50% 0 0 / 100% 100% 0 0; background: color-mix(in srgb, var(--accent) 10%, transparent); }
          .hero-visual::after { content: ''; position: absolute; left: 0; right: 0; bottom: 30%; height: 1px; pointer-events: none;
            background: color-mix(in srgb, var(--accent) 38%, transparent); }
        `,
    },
  },
  'biophilic-botanical': {
    motif: 'blob',
    bodyClass: '',
    extraCss: `
        /* imza: yaprak köşeli kart · yumuşak gölge · dal çizgisi · bitki skalası */
        body {
          background-image:
            radial-gradient(60% 50% at 12% 0%, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 70%),
            radial-gradient(50% 40% at 100% 100%, color-mix(in srgb, var(--ok) 8%, transparent) 0%, transparent 70%);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: -.01em; }
        h1 { font-size: 48px; line-height: 1.08; max-width: 20ch; }
        h2 { font-size: 32px; line-height: 1.14; }
        h3 { font-size: 22px; line-height: 1.28; }
        .lede { font-size: 16px; line-height: 1.65; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .eyebrow::before {
          content: ''; width: 8px; height: 8px; border-radius: 999px 999px 999px 2px;
          background: var(--accent);
        }
        .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: 0; }

        .nav {
          background: color-mix(in srgb, var(--bg) 86%, var(--surface));
          border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        }
        .nav-links a { font-family: var(--font-body); font-size: 15px; font-weight: 600; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        /* yaprak biçimi: çapraz köşeler */
        .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: 32px 12px 32px 12px; box-shadow: var(--shadow);
        }
        .kpi, .field { border-radius: 20px 10px 20px 10px; box-shadow: none; }
        .panel, .card, .visual-card { position: relative; overflow: hidden; }
        .panel::after, .card::after, .visual-card::after {
          content: ''; position: absolute; left: 24px; bottom: 14px; width: 64px; height: 1px;
          background: color-mix(in srgb, var(--accent) 45%, transparent);
        }

        .btn {
          height: 44px; padding: 0 22px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn.sm { height: 36px; padding: 0 16px; font-size: 14px; }
        .btn.ghost, .btn.soft {
          background: var(--surface); color: var(--ink); border: 1px solid var(--line);
        }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 35%, transparent); outline-offset: 2px;
        }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-body); font-size: 12px; font-weight: 600;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 12%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 32%, transparent); }
        .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .table tr:hover td { background: var(--surface-2); }
        .bar, .visual-row .line, .divider { background: var(--line); border-radius: 999px; }
        .divider { height: 1px; }
        .m-grid {
          background-image: radial-gradient(color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px);
          background-size: 18px 18px; border-radius: var(--radius-lg);
        }
        .mark { border-radius: 999px 999px 999px 4px; background: var(--accent); color: var(--accent-ink); }
        .sig {
          background: radial-gradient(40% 60% at 80% 20%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%);
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: bitki büyüme katmanları + yaprak köşesi */
            .hero-visual { min-height: 360px; padding: 22px; background: color-mix(in srgb, var(--accent) 8%, var(--bg-2)); }
            .visual-card { width: 100%; min-height: 300px; border-radius: 32px 12px 32px 12px; display: flex; flex-direction: column; gap: 12px; }
            .visual-card .bar { height: 6px; border-radius: 999px; }
            .visual-rows { margin-top: auto; gap: 10px; }
            .visual-row { grid-template-columns: 26px 1fr auto; border-radius: 20px 8px 20px 8px; }
            .visual-row .sq { border-radius: 999px 999px 999px 4px; height: 26px; }
            .hero-visual::after {
              content: ''; position: absolute; left: 18px; right: 18px; bottom: 14px; height: 1px;
              background: color-mix(in srgb, var(--accent) 40%, transparent);
            }
      `,
    },
  },
  'weather-atmosphere': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* imza: atmosfer gradyanı · sisli cam katman · bulut kütlesi · yumuşak gölge */
        body {
          background-image:
            linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, var(--bg)) 0%, var(--bg) 46%, var(--bg-2) 100%);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: -.01em; }
        h1 { font-size: 54px; line-height: 1.04; max-width: 19ch; }
        h2 { font-size: 34px; line-height: 1.14; }
        h3 { font-size: 22px; line-height: 1.3; }
        .lede { font-size: 16px; line-height: 1.6; max-width: 60ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow::before { content: '~ '; color: var(--accent); }
        .brand { font-family: var(--font-display); font-size: 19px; font-weight: 500; }

        /* sisli cam nav */
        .nav {
          height: 64px; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
          background: color-mix(in srgb, var(--surface) 72%, transparent);
          backdrop-filter: blur(var(--blur)); -webkit-backdrop-filter: blur(var(--blur));
        }
        .nav-links a { font-family: var(--font-body); font-size: 15px; font-weight: 500; }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        .panel, .card, .visual-card { position: relative; overflow: hidden; }
        .panel::before, .card::before, .visual-card::before {
          content: ''; position: absolute; inset: 0 0 auto 0; height: 2px;
          background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 42%, transparent), transparent);
        }
        /* bulut kütlesi: hero görselinin zemini */
        .hero-visual, .visual-card {
          background-image:
            radial-gradient(38% 46% at 28% 62%, color-mix(in srgb, var(--surface) 92%, transparent) 0%, transparent 70%),
            radial-gradient(44% 52% at 72% 48%, color-mix(in srgb, var(--accent) 14%, transparent) 0%, transparent 72%),
            linear-gradient(160deg, color-mix(in srgb, var(--accent) 12%, var(--bg)) 0%, var(--bg-2) 100%);
        }
        .btn {
          height: 46px; padding: 0 24px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: 0 6px 16px color-mix(in srgb, var(--ink) 16%, transparent);
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn.sm { height: 38px; padding: 0 18px; font-size: 14px; }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 30%, transparent); outline-offset: 2px;
        }
        .chip {
          background: color-mix(in srgb, var(--surface) 78%, transparent); border: 1px solid var(--line);
          border-radius: 999px; backdrop-filter: blur(var(--blur)); font-family: var(--font-body); font-size: 12px; font-weight: 600;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent); }
        .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .bar, .visual-row .line, .divider { background: var(--line); }
        .m-grid {
          background-image: linear-gradient(180deg, color-mix(in srgb, var(--accent) 18%, transparent) 0 34%, transparent 100%);
          border-radius: var(--radius-lg);
        }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
        .sig {
          background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, transparent), transparent 60%);
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: bulut kütlesi + yağış çizgileri */
            .hero-visual { min-height: 360px; padding: 20px; background: linear-gradient(165deg, color-mix(in srgb, var(--accent) 14%, var(--bg-2)) 0%, var(--bg) 100%); }
            .visual-card { width: 100%; min-height: 300px; backdrop-filter: blur(var(--blur)); background: color-mix(in srgb, var(--surface) 82%, transparent); }
            .visual-card .bar { height: 5px; }
            .visual-rows { margin-top: auto; }
            .visual-row { background: color-mix(in srgb, var(--surface) 70%, transparent); }
            .hero-visual::before {
              content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .5;
              background-image: repeating-linear-gradient(105deg, transparent 0 22px, color-mix(in srgb, var(--accent) 20%, transparent) 22px 23px, transparent 23px 44px);
            }
      `,
    },
  },
  'topographic-terrain': {
    motif: 'paper',
    bodyClass: 'upper',
    extraCss: `
        /* imza: harita kâğıdı · eş yükselti halkaları · pafta çerçevesi · mono ölçü */
        body {
          background-image:
            repeating-radial-gradient(circle at 18% 12%, color-mix(in srgb, var(--ink) 7%, transparent) 0 1px, transparent 1px 34px),
            repeating-radial-gradient(circle at 84% 78%, color-mix(in srgb, var(--accent) 12%, transparent) 0 1px, transparent 1px 26px);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: .01em; }
        h1 { font-size: 46px; line-height: 1.06; max-width: 22ch; }
        h2 { font-size: 30px; line-height: 1.16; letter-spacing: .02em; }
        h3 { font-size: 20px; line-height: 1.28; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 62ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow::before { content: '▲ '; color: var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .12em; text-transform: uppercase; }

        .nav {
          background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
          box-shadow: inset 0 -3px 0 -2px var(--line);
        }
        .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 500; letter-spacing: .02em; }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); box-shadow: inset 0 -2px 0 var(--accent); }

        /* pafta: 1px dış çerçeve + köşe artıları */
        .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .panel, .card, .visual-card { position: relative; }
        /* FIX: içeriksiz iç çerçeve tüm kartlardan kaldırıldı; pafta çerçevesi yalnız hero görselinde */
        body.scene-landing .hero-visual::after {
          content: ''; position: absolute; inset: 6px; pointer-events: none;
          border: 1px solid color-mix(in srgb, var(--ink) 12%, transparent);
        }
        /* eş yükselti halkaları: hero görselinin zemini */
        .hero-visual, .visual-card {
          background-image:
            repeating-radial-gradient(circle at 50% 62%, transparent 0 18px, color-mix(in srgb, var(--accent) 26%, transparent) 18px 19px),
            repeating-radial-gradient(circle at 50% 62%, transparent 0 42px, color-mix(in srgb, var(--ink) 12%, transparent) 42px 43px);
        }
        .btn {
          height: 40px; padding: 0 16px; border-radius: var(--radius); box-shadow: none; border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink);
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn.sm { height: 32px; padding: 0 12px; font-size: 10px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
        }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--accent);
        }
        .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
        .bar, .visual-row .line, .divider { background: var(--line); }
        .m-grid {
          background-image:
            repeating-radial-gradient(circle at 50% 50%, transparent 0 14px, color-mix(in srgb, var(--ink) 10%, transparent) 14px 15px);
          border-radius: var(--radius-lg);
        }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .sig {
          border-top: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 12%, transparent);
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: eş yükselti halkaları + pafta çerçevesi */
            .hero-visual {
              min-height: 360px; padding: 18px; border: 1px solid var(--line);
              background-image:
                repeating-radial-gradient(circle at 30% 40%, color-mix(in srgb, var(--ink) 9%, transparent) 0 1px, transparent 1px 26px),
                repeating-radial-gradient(circle at 76% 66%, color-mix(in srgb, var(--accent) 16%, transparent) 0 1px, transparent 1px 20px);
            }
            .visual-card { width: 100%; min-height: 300px; border-radius: 2px; }
            .visual-card .bar { height: 4px; border-radius: 0; }
            .visual-row { border-radius: 2px; }
            .visual-row .sq { border-radius: 0; }
            .visual-row .num { font-size: 11px; letter-spacing: .06em; }
            .hero-visual::after { content: '1:25 000'; position: absolute; right: 14px; bottom: 10px; font-family: var(--font-mono); font-size: 9px; letter-spacing: .14em; color: var(--ink-soft); }
      `,
    },
  },
  'ocean-current': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
        /* imza: derin su zemini · akıntı çizgisi · katman parlaklığı · serif display */
        body {
          background-image:
            radial-gradient(70% 50% at 50% 0%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 70%),
            repeating-linear-gradient(96deg, color-mix(in srgb, var(--accent) 7%, transparent) 0 1px, transparent 1px 46px);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: .005em; }
        h1 { font-size: 56px; line-height: 1.04; max-width: 19ch; }
        h2 { font-size: 36px; line-height: 1.14; }
        h3 { font-size: 24px; line-height: 1.26; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.75; max-width: 56ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .eyebrow::before {
          content: ''; width: 18px; height: 1.5px; background: var(--accent); border-radius: 999px;
        }
        .brand { font-family: var(--font-display); font-size: 22px; font-weight: 500; }

        .nav {
          background: color-mix(in srgb, var(--bg-2) 88%, transparent); border-bottom: 1px solid var(--line);
          border-radius: 0; box-shadow: inset 0 -1.5px 0 color-mix(in srgb, var(--accent) 22%, transparent);
          backdrop-filter: blur(var(--blur)); -webkit-backdrop-filter: blur(var(--blur));
        }
        .nav-links a { font-family: var(--font-body); font-size: 15px; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .panel, .card, .visual-card { position: relative; overflow: hidden; }
        .panel::before, .card::before, .visual-card::before {
          content: ''; position: absolute; inset: 0 0 auto 0; height: 1.5px;
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 40%, transparent), transparent);
        }
        /* akıntı çizgileri: hero görselinin zemini */
        .hero-visual, .visual-card {
          background-image:
            repeating-radial-gradient(120% 100% at 20% 110%, transparent 0 26px, color-mix(in srgb, var(--accent) 20%, transparent) 26px 27px),
            repeating-linear-gradient(72deg, color-mix(in srgb, var(--ink) 8%, transparent) 0 1px, transparent 1px 32px);
        }
        .btn {
          height: 46px; padding: 0 24px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
        .btn.sm { height: 36px; padding: 0 16px; font-size: 14px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 52%, transparent); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          background: var(--bg-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-body); font-size: 12px; font-weight: 600;
        }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
        .table th {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
        .bar, .visual-row .line, .divider { background: color-mix(in srgb, var(--accent) 24%, var(--line)); }
        .m-grid {
          background-image:
            repeating-radial-gradient(140% 120% at 10% 120%, transparent 0 22px, color-mix(in srgb, var(--accent) 16%, transparent) 22px 23px);
          border-radius: var(--radius-lg);
        }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
        .sig {
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 18%, transparent), transparent);
          height: 1.5px;
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: akıntı çizgileri + derinlik katmanı */
            .hero-visual { min-height: 360px; padding: 20px; background: linear-gradient(180deg, var(--bg-2) 0%, var(--surface) 100%); }
            .visual-card { width: 100%; min-height: 300px; background: color-mix(in srgb, var(--surface) 88%, transparent); }
            .visual-rows { margin-top: auto; }
            .visual-row { background: transparent; border: 0; border-bottom: 1px solid color-mix(in srgb, var(--accent) 26%, transparent); border-radius: 0; }
            .visual-row .sq { border-radius: 999px 999px 999px 2px; }
            .hero-visual::before {
              content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .45;
              background-image: repeating-linear-gradient(6deg, transparent 0 26px, color-mix(in srgb, var(--accent) 26%, transparent) 26px 27px, transparent 27px 52px);
            }
      `,
    },
  },
  'seasonal-shift': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* imza: krem zemin · iki tonlu mevsim şeridi · yumuşak gölge · serif display */
        body {
          background-image: linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: 0; }
        h1 { font-size: 50px; line-height: 1.06; max-width: 21ch; }
        h2 { font-size: 32px; line-height: 1.16; }
        h3 { font-size: 21px; line-height: 1.3; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.65; max-width: 60ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .eyebrow::before {
          content: ''; width: 14px; height: 3px; border-radius: 999px;
          background: linear-gradient(90deg, var(--accent) 0 50%, var(--ok) 50% 100%);
        }
        .brand { font-family: var(--font-display); font-size: 21px; font-weight: 500; }

        /* iki tonlu mevsim şeridi */
        .nav {
          height: 62px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
          box-shadow: inset 0 -3px 0 -1px transparent;
          border-image: linear-gradient(90deg, var(--accent) 0 50%, var(--ok) 50% 100%) 3;
        }
        .nav-links a { font-family: var(--font-body); font-size: 15px; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        .panel, .card, .visual-card { position: relative; overflow: hidden; }
        .panel::before, .card::before, .visual-card::before {
          content: ''; position: absolute; inset: 0 0 auto 0; height: 3px;
          background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 55%, transparent), color-mix(in srgb, var(--ok) 40%, transparent));
        }
        /* iki mevsim bölünmesi: hero görseli */
        .hero-visual, .visual-card {
          background-image:
            linear-gradient(115deg, color-mix(in srgb, var(--accent) 16%, var(--surface)) 0 46%, color-mix(in srgb, var(--ok) 14%, var(--surface)) 54% 100%),
            radial-gradient(color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px);
          background-size: auto, 14px 14px;
        }
        .btn {
          height: 44px; padding: 0 22px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
        .btn.sm { height: 36px; padding: 0 16px; font-size: 14px; }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 30%, transparent); outline-offset: 2px;
        }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-body); font-size: 12px; font-weight: 600;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 13%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 34%, transparent); }
        .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .bar, .visual-row .line, .divider { background: var(--line); }
        .m-grid {
          background-image: linear-gradient(115deg, color-mix(in srgb, var(--accent) 14%, transparent) 0 48%, color-mix(in srgb, var(--ok) 12%, transparent) 52% 100%);
          border-radius: var(--radius-lg);
        }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
        .sig {
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 20%, transparent) 40%, color-mix(in srgb, var(--ok) 16%, transparent) 60%, transparent);
          height: 3px;
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: dört mevsim bandı */
            .hero-visual { min-height: 360px; padding: 20px; }
            .visual-card { width: 100%; min-height: 300px; }
            .visual-rows { margin-top: auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
            .visual-row { grid-template-columns: 16px 1fr auto; background: var(--surface-2); }
            .visual-row:nth-child(1) .sq { background: color-mix(in srgb, var(--accent) 100%, var(--surface)); }
            .visual-row:nth-child(2) .sq { background: color-mix(in srgb, var(--accent) 70%, var(--surface)); }
            .visual-row:nth-child(3) .sq { background: color-mix(in srgb, var(--accent) 40%, var(--surface)); }
            .hero-visual::after {
              content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 4px;
              background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 90%, transparent), color-mix(in srgb, var(--accent) 20%, transparent));
            }
      `,
    },
  },
  'forest-bark': {
    motif: 'blob',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Lora başlık · EB Garamond gövde · mono ölçü ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; }
        h1 { font-size: 52px; line-height: 1.04; letter-spacing: -.01em; max-width: 19ch; }
        h2 { font-size: 32px; line-height: 1.14; max-width: 26ch; }
        h3 { font-size: 22px; line-height: 1.2; }
        h4 { font-size: 17px; line-height: 1.3; }
        .lede { font-family: var(--font-body); font-size: 17px; line-height: 1.7; max-width: 64ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .18em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-soft); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '❧ '; color: var(--ink-faint); letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num, .metric b {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 24px; }
        .trow .num { font-size: 14px; text-transform: none; letter-spacing: .02em; }

        /* ---------- nav: 1px alt çizgi, aktifte 2px tan ---------- */
        .nav { height: 56px; padding: 0 28px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 600; font-size: 19px; letter-spacing: -.01em; text-transform: none; }
        .nav-links a { font-family: var(--font-body); font-size: 16px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 2px; background: var(--accent);
        }

        /* ---------- yüzey: ton katmanı + 1px çizgi, yumuşak gölge ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }

        /* damar çizgisi: yalnız ilk kartta (ekran başına 1) */
        .kpi:first-child::before, .plan:first-child::before {
          content: ''; position: absolute; left: 22px; top: 0; width: 1px; height: 22px;
          background: var(--line); pointer-events: none;
        }
        .kpi, .plan { position: relative; }

        /* ---------- kontroller ---------- */
        .btn {
          font-family: var(--font-display); font-weight: 600; font-size: 14px; letter-spacing: 0;
          min-height: 44px; padding: 10px 20px; border-radius: var(--radius);
          border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn:active { transform: translateY(1px); }
        .field, input, select, textarea {
          min-height: 44px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--bg-2); color: var(--ink);
          font-family: var(--font-body); font-size: 15px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 2px; border-left: 2px solid var(--accent);
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 10px; border-radius: 999px;
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 11px; letter-spacing: .16em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 600; }
        .avatar, .avatar-lg, .empty-ic { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); }
        .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .opt .box { border-radius: 6px; border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }

        /* ölçü çubuğu: türün boy aralığı, 4px, accent dolgu */
        .track { background: var(--surface-2); border-radius: 999px; height: 4px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 999px; height: 4px; }
        .bar { border-radius: 999px; background: var(--accent); }
        .bar:not(.accent) { background: var(--ink-soft); }
        .proof li::before { width: 7px; height: 7px; border-radius: 999px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }

        /* ---------- imza: hero görselinde kabuk damarı + yumuşak katman ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg);
          box-shadow: var(--shadow); overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: repeating-linear-gradient(
            97deg,
            transparent 0 26px,
            color-mix(in srgb, var(--accent) 14%, transparent) 26px 27px,
            transparent 27px 54px
          );
          -webkit-mask-image: radial-gradient(70% 70% at 40% 50%, var(--ink) 0%, transparent 78%);
          mask-image: radial-gradient(70% 70% at 40% 50%, var(--ink) 0%, transparent 78%);
          opacity: .9;
        }
        .hero-visual::after {
          content: ''; position: absolute; right: -12%; bottom: -18%; width: 62%; height: 70%;
          border-radius: 46% 54% 52% 48% / 58% 42% 58% 42%;
          background: radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 72%);
          pointer-events: none;
        }

        /* ---------- landing: sol üstte yumuşak ışık lekesi (yeşil sızıntı), yazı yok ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: -12vw; top: -18vh; width: 48vw; height: 48vw;
          background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--ok) 30%, transparent) 0%, transparent 70%);
          opacity: .28; pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 3px;
          background: color-mix(in srgb, var(--accent) 30%, transparent); pointer-events: none;
        }

        /* ---------- dashboard: mevsim şeridi + ölçü tablosu ---------- */
        body.scene-dashboard .kpis { gap: 16px; }
        body.scene-dashboard .side { background: var(--bg-2); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 30px; max-width: 20ch; }
          h2 { font-size: 24px; }
          .lede { font-size: 16px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-landing .sig::before { opacity: .18; }
          .hero-visual::before { opacity: .6; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: kabuk damarı + yaş halkası sayacı */
            .hero-visual { min-height: 360px; padding: 20px; }
            .visual-card { width: 100%; min-height: 300px; background: color-mix(in srgb, var(--surface) 92%, transparent); }
            .visual-rows { margin-top: auto; }
            .visual-row { border-bottom: 1px dashed color-mix(in srgb, var(--accent) 30%, transparent); border-radius: 0; background: transparent; }
            .visual-row .num { font-size: 13px; letter-spacing: .04em; }
            .hero-visual::after { content: '◍ 128 halka'; position: absolute; left: 18px; bottom: 12px; font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
      `,
    },
  },
  'desert-sand': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Cormorant 300 başlık · Jost gövde ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 300; }
        h1 { font-size: 58px; line-height: 1; letter-spacing: .01em; max-width: 17ch; }
        h2 { font-size: 30px; line-height: 1.12; letter-spacing: .02em; max-width: 28ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: .01em; }
        h3 { font-size: 20px; line-height: 1.3; }
        h4 { font-size: 16px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.66; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .22em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-soft); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '◦ '; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .04em;
        }
        .kpi .v, .kpi .num-big { font-size: 26px; }
        .trow .num { font-size: 13px; letter-spacing: .04em; }

        /* ---------- nav: ortalanmış marka, ince alt çizgi ---------- */
        .nav { height: 64px; padding: 0 32px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 300; font-size: 22px; letter-spacing: .18em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 1px; background: var(--ink);
        }

        /* ---------- yüzey: kumul radiusu + tek yön uzun gölge ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        /* kartın üstü daha yuvarlak: kumul eğrisi */
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card {
          border-radius: var(--radius-lg) var(--radius-lg) var(--radius) var(--radius);
          padding: 28px;
        }
        .plan.hot { box-shadow: inset 0 0 0 1px var(--line), var(--shadow); }
        .plan.hot::before {
          content: ''; position: absolute; left: 28px; right: 28px; top: 0; height: 1px; background: var(--accent);
        }

        /* ---------- kontroller: 48px hedef, hap ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .08em; text-transform: uppercase;
          min-height: 48px; padding: 12px 26px; border-radius: 999px; border: 1px solid transparent; box-shadow: var(--shadow);
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn.sm { min-height: 36px; padding: 8px 18px; font-size: 11px; }
        .btn:hover { box-shadow: 0 18px 34px -18px color-mix(in srgb, var(--ink) 35%, transparent), var(--shadow); }
        .btn:active { transform: translateY(2px); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .field, input, select, textarea {
          min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-body); font-size: 15px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 2px;
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 12px; border-radius: 999px;
          background: transparent; border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .18em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 300; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .opt .box { border-radius: 12px; border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 999px; height: 6px; }
        .bar { border-radius: 999px; }
        .proof li::before { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: 999px; }
        .fab { border-radius: 999px; box-shadow: var(--shadow); }

        /* ---------- imza: hero görselinde kumul profili (eşmerkezli eğriler) ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: var(--radius-lg) var(--radius-lg) var(--radius) var(--radius);
          box-shadow: var(--shadow); overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; left: -20%; right: -20%; bottom: -46%; height: 120%;
          border-radius: 50% 50% 0 0;
          background: var(--surface);
          box-shadow: inset 0 1px 0 var(--line), inset 0 40px 60px -50px color-mix(in srgb, var(--ink) 18%, transparent);
          pointer-events: none;
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 42%;
          background-image: repeating-linear-gradient(
            0deg,
            transparent 0 22px,
            color-mix(in srgb, var(--ink) 8%, transparent) 22px 23px
          );
          -webkit-mask-image: linear-gradient(transparent 0%, var(--ink) 90%);
          mask-image: linear-gradient(transparent 0%, var(--ink) 90%);
          pointer-events: none;
        }

        /* ---------- landing: düşük ufuk + yumuşak güneş halkası ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; right: -12vw; top: -24vh; width: 56vw; height: 56vw;
          border-radius: 50%;
          background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 70%);
          opacity: .55; pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 18vh; height: 1px;
          background: color-mix(in srgb, var(--ink) 22%, transparent); pointer-events: none;
        }

        /* ---------- dashboard: ölçüm tablosu, geniş satır ---------- */
        body.scene-dashboard .kpis { gap: 24px; }
        body.scene-dashboard .kpi { padding: 24px 28px; }
        body.scene-dashboard .side { background: var(--bg-2); }

        @media (max-width: 900px) {
          h1 { font-size: 32px; max-width: 18ch; }
          h2 { font-size: 24px; }
          .lede { font-size: 15px; }
          .plan, .comp-card-demo, .state-card, .m-tile { padding: 20px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-landing .sig::before { opacity: .35; }
          .hero-visual::before { bottom: -30%; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: kumul sırtları + ufuk çizgisi */
            .hero-visual { min-height: 360px; padding: 20px; background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 12%, var(--bg-2)) 0%, var(--bg-2) 100%); }
            .visual-card { width: 100%; min-height: 300px; border-radius: var(--radius-lg); }
            .visual-rows { margin-top: auto; }
            .visual-row { border-radius: 999px; border: 0; background: color-mix(in srgb, var(--surface) 76%, transparent); }
            .hero-visual::before {
              content: ''; position: absolute; left: -10%; right: -10%; bottom: 6%; height: 46%; pointer-events: none; opacity: .55;
              background:
                radial-gradient(120% 60% at 20% 100%, color-mix(in srgb, var(--accent) 26%, transparent) 0 40%, transparent 41%),
                radial-gradient(120% 60% at 80% 100%, color-mix(in srgb, var(--ink) 14%, transparent) 0 34%, transparent 35%);
            }
      `,
    },
  },
  'polar-ice': {
    motif: 'grid',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Space Grotesk başlık · Inter gövde · Space Mono ölçüm ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 700; }
        h1 { font-size: 40px; line-height: 1.08; letter-spacing: -.02em; max-width: 24ch; }
        h2 { font-size: 24px; line-height: 1.18; letter-spacing: -.01em; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
        h3 { font-size: 18px; line-height: 1.3; }
        h4 { font-size: 15px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 68ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-soft); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '✳ '; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 24px; }
        .trow .num { font-size: 13px; }

        /* ---------- nav ---------- */
        .nav { height: 48px; padding: 0 24px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 700; font-size: 17px; letter-spacing: -.02em; text-transform: none; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 2px; background: var(--accent);
        }

        /* ---------- gölgesiz plaka: 1px çizgi + 2px ton ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none; backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .kpi { padding: 14px 16px; }
        .comp-card-demo, .m-tile, .state-card { padding: 18px; }
        .plan { padding: 20px; }
        /* seçili plaka: 1px buz halkası (gölge değil) */
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }
        .plan.hot::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0; height: 2px;
          background: var(--accent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        /* ---------- kontroller: 2px radius iç kutu, 40px görsel ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: 0;
          min-height: 40px; padding: 10px 18px; border-radius: var(--radius);
          border: 1px solid transparent; box-shadow: none; text-transform: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid var(--accent); color: var(--accent); }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn:active { transform: translateY(1px); }
        .field, input, select, textarea {
          min-height: 40px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-mono); font-size: 14px; letter-spacing: .02em;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 1px;
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 20px; padding: 0 8px; border-radius: var(--radius);
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .16em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 2px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 2px; height: 6px; }
        .bar { border-radius: 1px; }
        .proof li::before { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- imza: buz plakası + kristal örgü + eşik çizgisi ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none; overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(60deg, transparent 0 47%, color-mix(in srgb, var(--accent) 16%, transparent) 47% 48%, transparent 48% 100%),
            linear-gradient(-60deg, transparent 0 47%, color-mix(in srgb, var(--accent) 16%, transparent) 47% 48%, transparent 48% 100%);
          background-size: 48px 84px;
          opacity: .9;
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 0; right: 0; top: 58%; height: 1px;
          background: color-mix(in srgb, var(--warn) 55%, transparent);
          pointer-events: none;
        }

        /* ---------- landing: üstte ince buz çizgisi, sağda çatlak deseni ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0; height: 1px;
          background: color-mix(in srgb, var(--accent) 45%, transparent); pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: -8vw; top: -10vh; width: 44vw; height: 44vw;
          background-image: repeating-linear-gradient(
            58deg,
            color-mix(in srgb, var(--accent) 12%, transparent) 0 1px,
            transparent 1px 34px
          );
          -webkit-mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 74%);
          mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 74%);
          pointer-events: none;
        }

        /* ---------- dashboard: 4×3 simetrik veri ızgarası ---------- */
        body.scene-dashboard .kpis { gap: 12px; }
        body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
        body.scene-dashboard .kpi .v { font-variant-numeric: tabular-nums; }
        body.scene-dashboard .side { background: var(--bg-2); }

        @media (max-width: 900px) {
          h1 { font-size: 26px; max-width: 22ch; }
          h2 { font-size: 20px; }
          .lede { font-size: 14px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; gap: 8px; }
          .table { overflow-x: auto; }
          body.scene-landing .sig::after { display: none; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: buz katmanları + kristal çatlak */
            .hero-visual { min-height: 360px; padding: 20px; background: linear-gradient(200deg, color-mix(in srgb, var(--accent) 10%, var(--bg-2)) 0%, var(--surface) 100%); }
            .visual-card { width: 100%; min-height: 300px; background: color-mix(in srgb, var(--surface) 84%, transparent); }
            .visual-rows { margin-top: auto; }
            .visual-row { border-radius: 2px; }
            .visual-row .sq { border-radius: 2px; transform: rotate(45deg); width: 14px; height: 14px; }
            .hero-visual::before {
              content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .35;
              background-image: linear-gradient(60deg, transparent 0 46%, color-mix(in srgb, var(--accent) 40%, transparent) 46% 46.4%, transparent 46.4% 100%),
                linear-gradient(-60deg, transparent 0 62%, color-mix(in srgb, var(--ink) 18%, transparent) 62% 62.3%, transparent 62.3% 100%);
            }
      `,
    },
  },
  'volcanic-mineral': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
        /* ---------- tipografi: Michroma fasetli başlık · Space Grotesk gövde · mono ölçüm ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; }
        h1 { font-size: 48px; line-height: 1.02; letter-spacing: .04em; max-width: 20ch; }
        h2 { font-size: 28px; line-height: 1.1; letter-spacing: .03em; max-width: 28ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 700; letter-spacing: 0; }
        h3 { font-size: 19px; line-height: 1.25; }
        h4 { font-size: 15px; line-height: 1.3; }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.58; max-width: 66ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-soft); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '▲ '; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 26px; }
        .trow .num { font-size: 13px; }

        /* ---------- nav ---------- */
        .nav { height: 52px; padding: 0 24px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 400; font-size: 15px; letter-spacing: .14em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; font-weight: 500; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 2px; background: var(--accent);
        }

        /* ---------- keskin yüzey: radius 0, gölge yok ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: 0; box-shadow: none; backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .modal, .drawer, .menu { border-radius: var(--radius-lg); border: 1px solid var(--accent); box-shadow: var(--shadow); }
        /* aktif örnek: 1px magma halka */
        .plan.hot, .kpi.accent, .m-tile.accent, .comp-card-demo.accent { box-shadow: var(--shadow-hard); }

        /* kart: üstte 3px mineral şeridi */
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { position: relative; padding: 20px; }
        .plan::before, .comp-card-demo::before, .state-card::before, .auth-card::before, .ob-card::before {
          content: ''; position: absolute; left: 0; right: 0; top: 0; height: 3px;
          background: color-mix(in srgb, var(--accent) 70%, transparent);
        }

        /* ---------- kontroller: keskin köşe, 40px ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 700; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
          min-height: 40px; padding: 10px 18px; border-radius: 0; border: 1px solid transparent; box-shadow: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:hover { border-bottom-color: var(--accent); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 30px; padding: 6px 12px; font-size: 10px; }
        .field, input, select, textarea {
          min-height: 40px; border: 1px solid var(--line); border-radius: 0;
          background: var(--bg-2); color: var(--ink);
          font-family: var(--font-mono); font-size: 14px; letter-spacing: .02em;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 1px; border-bottom: 2px solid var(--accent);
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 20px; padding: 0 8px; border-radius: 0;
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .16em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
        .avatar, .avatar-lg, .empty-ic, .icon-btn { border-radius: 0; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .opt .box { border-radius: 0; border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 0; height: 8px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 0; height: 8px; }
        .bar { border-radius: 0; }
        .bars i, .bar i { border-radius: 0; }
        .proof li::before { width: 6px; height: 6px; border-radius: 0; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: 0; }
        .fab { border-radius: 0; box-shadow: var(--shadow); }

        /* ---------- imza: hero görselinde 15° katman çizgileri ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: 0; box-shadow: none; overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: -20% -10%; pointer-events: none;
          background-image: repeating-linear-gradient(
            15deg,
            transparent 0 26px,
            color-mix(in srgb, var(--ink) 16%, transparent) 26px 27px,
            transparent 27px 52px,
            color-mix(in srgb, var(--accent) 40%, transparent) 52px 53px
          );
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px;
          background: color-mix(in srgb, var(--accent) 70%, transparent); pointer-events: none;
        }

        /* ---------- landing: sol üstte magma çatlağı (statik) ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
          background: color-mix(in srgb, var(--accent) 70%, transparent); pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: -6vw; top: -8vh; width: 40vw; height: 40vw;
          background-image: repeating-linear-gradient(
            15deg,
            color-mix(in srgb, var(--accent) 14%, transparent) 0 1px,
            transparent 1px 30px
          );
          -webkit-mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 72%);
          mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 72%);
          pointer-events: none;
        }

        /* ---------- dashboard: örnek ızgarası, keskin bölmeler ---------- */
        body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); }
        body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; }
        body.scene-dashboard .kpi:last-child { border-right: 0; }
        body.scene-dashboard .side { background: var(--bg-2); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 28px; max-width: 18ch; }
          h2 { font-size: 20px; }
          .lede { font-size: 14px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
          body.scene-dashboard .kpi:last-child { border-bottom: 0; }
          body.scene-landing .sig::after { display: none; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: mineral damarı + kor bandı */
            .hero-visual { min-height: 360px; padding: 18px; background: var(--bg-2); }
            .visual-card { width: 100%; min-height: 300px; border-radius: 0; border: 1px solid var(--line); }
            .visual-rows { margin-top: auto; }
            .visual-row { border-radius: 0; background: color-mix(in srgb, var(--surface-2) 88%, transparent); }
            .visual-row .sq { border-radius: 0; height: 18px; }
            .hero-visual::before {
              content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .5;
              background-image: repeating-linear-gradient(58deg, transparent 0 30px, color-mix(in srgb, var(--accent) 34%, transparent) 30px 31px, transparent 31px 60px);
            }
            .hero-visual::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: var(--accent); }
      `,
    },
  },
  'coral-reef': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Baloo 2 başlık · Nunito gövde · Courier Prime kayıt ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 600; }
        h1 { font-size: 46px; line-height: 1.08; letter-spacing: 0; max-width: 20ch; }
        h2 { font-size: 28px; line-height: 1.2; max-width: 26ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 700; letter-spacing: 0; }
        h3 { font-size: 20px; line-height: 1.3; }
        h4 { font-size: 16px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.66; max-width: 60ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .14em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-soft); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '❋ '; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 26px; }
        .trow .num { font-size: 14px; }

        /* ---------- nav: hap aktif işaret + su sıcaklığı ---------- */
        .nav { height: 60px; padding: 0 26px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 600; font-size: 20px; letter-spacing: 0; text-transform: none; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::before {
          content: ''; display: inline-block; width: 6px; height: 6px; margin-right: 7px; border-radius: 999px;
          background: var(--accent); vertical-align: middle;
        }

        /* ---------- yüzey: koyu su tonları + asimetrik mercan köşesi ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
        }
        /* mercan öbeği: asimetrik köşe + 24px padding */
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card, .co-sec {
          border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px;
          padding: 24px; position: relative;
        }
        .table { overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }
        .plan.hot::before {
          content: ''; position: absolute; left: 24px; right: 24px; top: 0; height: 2px; background: var(--accent);
          border-radius: 999px;
        }

        /* ---------- kontroller: hap + 48px hedef ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 700; font-size: 14px; letter-spacing: 0;
          min-height: 48px; padding: 12px 24px; border-radius: 999px;
          border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid var(--accent); color: var(--accent); box-shadow: none; }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:hover { transform: translateY(-2px); }
        .btn:active { transform: translateY(1px); box-shadow: none; }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 12px; }
        .field, input, select, textarea {
          min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-body); font-size: 15px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 2px;
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 12px; border-radius: 999px;
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 11px; letter-spacing: .12em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 600; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); box-shadow: var(--shadow); }
        .opt .box { border-radius: 10px; border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 999px; height: 8px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 999px; height: 8px; }
        .bar { border-radius: 999px; }
        .proof li::before { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: 999px; }
        .scene-m-sheet .m-sheet { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }

        /* ---------- imza: hero görselinde kabarcık dizisi + mercan öbeği ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px;
          box-shadow: var(--shadow); overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image:
            radial-gradient(circle at 22% 74%, transparent 0 22px, color-mix(in srgb, var(--ink) 16%, transparent) 22px 23px, transparent 23px),
            radial-gradient(circle at 38% 46%, transparent 0 13px, color-mix(in srgb, var(--ink) 14%, transparent) 13px 14px, transparent 14px),
            radial-gradient(circle at 52% 26%, transparent 0 7px, color-mix(in srgb, var(--ink) 12%, transparent) 7px 8px, transparent 8px),
            radial-gradient(circle at 70% 36%, transparent 0 4px, color-mix(in srgb, var(--accent) 40%, transparent) 4px 5px, transparent 5px);
        }
        .hero-visual::after {
          content: ''; position: absolute; right: -16%; bottom: -30%; width: 76%; height: 70%;
          border-radius: 46% 54% 52% 48% / 58% 42% 58% 42%;
          background: radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--accent) 24%, transparent) 0%, transparent 72%);
          pointer-events: none;
        }

        /* ---------- landing: su üstü ışığı (statik) + alt kabarcık bandı ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: -10vw; top: -20vh; width: 52vw; height: 52vw;
          border-radius: 50%;
          background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 70%);
          opacity: .5; pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 12vh;
          background-image: radial-gradient(circle, color-mix(in srgb, var(--ink) 14%, transparent) 2px, transparent 2px);
          background-size: 34px 34px;
          -webkit-mask-image: linear-gradient(transparent 0%, var(--ink) 100%);
          mask-image: linear-gradient(transparent 0%, var(--ink) 100%);
          pointer-events: none;
        }

        /* ---------- dashboard: bölge dağılımı + gözlem listesi ---------- */
        body.scene-dashboard .kpis { gap: 20px; }
        body.scene-dashboard .kpi { border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px; }
        body.scene-dashboard .side { background: var(--bg-2); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 30px; max-width: 20ch; }
          h2 { font-size: 22px; }
          .lede { font-size: 15px; }
          .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 18px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; gap: 12px; }
          body.scene-landing .sig::before { opacity: .3; }
          body.scene-landing .sig::after { height: 8vh; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: mercan dalları + resif katmanı */
            .hero-visual { min-height: 360px; padding: 20px; background: radial-gradient(120% 100% at 80% 100%, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 62%), var(--bg-2); }
            .visual-card { width: 100%; min-height: 300px; border-radius: 22px 22px 6px 22px; }
            .visual-rows { margin-top: auto; }
            .visual-row { border-radius: 999px; }
            .visual-row .sq { border-radius: 999px 999px 999px 4px; }
            .hero-visual::after {
              content: ''; position: absolute; right: 12%; bottom: 8%; width: 42%; height: 46%; pointer-events: none; opacity: .5;
              background: radial-gradient(60% 60% at 50% 100%, color-mix(in srgb, var(--accent) 40%, transparent) 0 32%, transparent 33%),
                radial-gradient(50% 50% at 20% 90%, color-mix(in srgb, var(--accent) 30%, transparent) 0 30%, transparent 31%);
            }
      `,
    },
  },
  'literary-hardcover': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* imza: tek serif aile · kapak bloğu (4px radius + iç hairline + 2px accent şerit) · künye şeridi */
        h1 { font-size: 58px; line-height: 1.10; letter-spacing: -0.01em; font-weight: 600; font-family: var(--font-display); }
        h2 { font-size: 34px; line-height: 1.22; letter-spacing: -0.005em; font-weight: 600; }
        h3 { font-size: 22px; line-height: 1.34; letter-spacing: -0.005em; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 20px; line-height: 1.62; color: var(--ink-soft); max-width: 64ch; }
        .eyebrow, .label, .mono, .kpi small { font-family: var(--font-mono); letter-spacing: .14em; font-size: 11px; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-weight: 600; font-size: 18px; letter-spacing: .02em; }

        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi {
          border-radius: var(--radius-lg); box-shadow: none; border: 1px solid var(--line); background: var(--surface);
        }
        .visual-card, .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; position: relative; background: var(--bg-2); }
        .visual-card::before, .hero-visual::before {
          content: ""; position: absolute; inset: 0 0 auto 0; height: 2px; background: var(--accent); pointer-events: none;
        }
        .btn { border-radius: var(--radius); border: 1px solid transparent; background: var(--ink); color: var(--bg); font-family: var(--font-body); font-weight: 600; min-height: 46px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .btn:hover { background: var(--accent); color: var(--accent-ink); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); }
        .field.focus, input:focus { border-color: var(--ink); outline: 2px solid var(--accent); outline-offset: 1px; }
        .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
        .divider, hr { height: 1px; background: var(--line); border: 0; }
        .foot-demo, .art-body { background-image: none; }

        /* kâğıt grain: tek doku, overlay */
        body.sig::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: var(--grain);
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 30%, transparent) 0 1px, transparent 1px 4px);
        }
        .kpi strong, .counter { font-variant-numeric: tabular-nums; }
        @media (max-width: 900px) {
          h1 { font-size: 34px; }
          h2 { font-size: 26px; }
          .lede { font-size: 17px; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: kitap sayfası + künye satırları (içindekiler) */
            .hero-visual { min-height: 360px; padding: 0; background: var(--bg-2); border-radius: var(--radius-lg); }
            .visual-card { width: 100%; min-height: 340px; border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; padding: 28px 30px; }
            .visual-card::after { content: ''; position: absolute; inset: 0 auto 0 0; width: 3px; background: var(--accent); }
            .visual-card .bar { height: 1px; background: var(--line); border: 0; border-radius: 0; }
            .visual-card .bar.accent { height: 2px; background: var(--accent); width: 38%; }
            .visual-rows { margin-top: auto; gap: 0; }
            .visual-row { border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: transparent; padding: 10px 0; }
            .visual-row .sq { display: none; }
            .visual-row .num { font-size: 11px; letter-spacing: .06em; }
      `,
    },
  },
  'broadsheet-daily': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
        /* imza: masthead (tek satır) · çift kural · keskin köşe · stats bandı */
        h1 { font-size: 46px; line-height: 1.02; letter-spacing: -0.02em; font-weight: 400; text-transform: uppercase; font-family: var(--font-display); max-width: 18ch; }
        h2 { font-size: 30px; line-height: 1.10; letter-spacing: -0.01em; font-weight: 400; }
        h3 { font-size: 20px; line-height: 1.20; letter-spacing: -0.005em; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 18px; line-height: 1.5; max-width: 38ch; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-size: 24px; letter-spacing: -0.02em; text-transform: uppercase; }

        .nav { border-bottom: 3px solid var(--ink); padding: 14px 24px; background: var(--surface); }
        .masthead, .hero-copy { border-bottom: 3px solid var(--ink); padding-bottom: 10px; box-shadow: 0 1px 0 0 var(--ink); }
        .divider, hr { height: 3px; background: var(--ink); border: 0; }
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
          border-radius: 0; border: 1px solid var(--line); box-shadow: none; background: var(--surface);
        }
        .hero-visual { border: 1px solid var(--ink); }
        .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 12px; }
        .btn { border-radius: 0; font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; min-height: 44px; box-shadow: none; }
        .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); border: 1px solid var(--accent); }
        .btn.ghost, .btn.soft { background: var(--bg); color: var(--ink); border: 1px solid var(--ink); }
        .btn:hover { transform: translate(2px, 2px); }
        .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: -2px; }
        .chip { border-radius: 0; background: var(--ink); color: var(--bg); border: 1px solid var(--ink); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .chip.accent { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
        .kpi strong, .counter { font-family: var(--font-mono); font-size: 22px; font-variant-numeric: tabular-nums; }

        /* kâğıt çizgisi: yalnız bölüm zemininde, 6px aralık, %2 */
        .sec, .art-body, .auth-aside {
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 2%, transparent) 0 1px, transparent 1px 6px);
        }
        @media (max-width: 900px) {
          h1 { font-size: 32px; max-width: 16ch; }
          h2 { font-size: 24px; }
          .nav { border-bottom-width: 2px; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: gazete kolonları + masthead bandı */
            .hero-visual { min-height: 360px; padding: 0; background: var(--surface); border: 1px solid var(--ink); border-radius: 0; }
            .visual-card { width: 100%; min-height: 340px; border-radius: 0; border: 0; box-shadow: none; padding: 18px 20px; }
            .visual-card .bar { height: 6px; border-radius: 0; background: var(--ink); border: 0; }
            .visual-card .bar.accent { background: var(--accent); width: 44%; }
            .visual-card .bar.w70, .visual-card .bar.w45 { background: var(--surface-2); }
            .visual-rows { margin-top: auto; gap: 0; }
            .visual-row { border-radius: 0; border: 0; border-top: 1px solid var(--line); background: transparent; padding: 9px 0; }
            .visual-row .sq { border-radius: 0; width: 12px; height: 12px; }
            .hero-visual::after { content: 'GÜNLÜK · 14. SAYFA'; position: absolute; top: 6px; right: 10px; font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em; color: var(--ink-soft); }
      `,
    },
  },
  'magazine-feature': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
        /* imza: 7/5 asimetri · tam kanama görsel · pull-quote (3px accent çizgi) · 14px radius */
        h1 { font-size: 64px; line-height: 1.04; letter-spacing: -0.02em; font-weight: 600; font-family: var(--font-display); max-width: 14ch; }
        h2 { font-size: 38px; line-height: 1.10; letter-spacing: -0.01em; font-weight: 600; }
        h3 { font-size: 24px; line-height: 1.20; letter-spacing: -0.01em; font-weight: 500; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 19px; line-height: 1.6; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; border-bottom: 1px solid var(--line); padding-bottom: 8px; display: inline-block; }
        .brand { font-family: var(--font-display); font-weight: 600; font-size: 20px; }

        .quad, .m-grid { grid-template-columns: 5fr 7fr; gap: 24px; align-items: center; }
        .visual-card, .hero-visual { border-radius: var(--radius-lg); box-shadow: var(--shadow); border: 1px solid var(--line); overflow: hidden; position: relative; }
        .visual-card::after, .hero-visual::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: var(--grain);
          background-image: repeating-linear-gradient(45deg, color-mix(in srgb, var(--ink) 20%, transparent) 0 1px, transparent 1px 3px);
        }
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi { border-radius: var(--radius-lg); box-shadow: none; border: 1px solid var(--line); background: var(--surface); }
        .quote, blockquote {
          font-family: var(--font-display); font-size: 28px; line-height: 1.26; font-weight: 500;
          border-left: 3px solid var(--accent); padding: 4px 0 4px 32px; margin: 0; max-width: 40ch;
        }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; font-weight: 500; min-height: 48px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .btn:hover { box-shadow: var(--shadow); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
        .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; }
        .kpi strong, .counter { font-family: var(--font-display); font-size: 34px; letter-spacing: -0.01em; }
        @media (max-width: 900px) {
          h1 { font-size: 36px; max-width: 16ch; }
          h2 { font-size: 26px; }
          .quad, .m-grid { grid-template-columns: 1fr; }
          .quote, blockquote { font-size: 22px; padding-left: 20px; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: feature açılışı — tam kanama görsel bandı + pull-quote */
            .hero-visual { min-height: 380px; padding: 0; background: color-mix(in srgb, var(--accent) 10%, var(--bg-2)); border-radius: var(--radius-lg); }
            .visual-card { width: 100%; min-height: 360px; border-radius: var(--radius-lg); box-shadow: var(--shadow); padding: 0; overflow: hidden; display: flex; flex-direction: column; }
            .visual-card .bar { margin: 24px 26px 0; }
            .visual-card .bar.accent { height: 6px; border-radius: 3px; }
            .visual-rows { margin: auto 26px 26px; gap: 12px; }
            .visual-row { border-radius: var(--radius); }
            .visual-row .sq { border-radius: var(--radius); height: 24px; }
            .visual-card::before {
              content: ''; display: block; height: 150px;
              background: linear-gradient(140deg, color-mix(in srgb, var(--accent) 48%, transparent) 0%, color-mix(in srgb, var(--ink) 12%, transparent) 100%);
            }
            .hero-visual::after { content: 'FEATURE'; position: absolute; left: 26px; top: 158px; font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-soft); }
      `,
    },
  },
  'academic-paper': {
    motif: 'grid',
    bodyClass: '',
    extraCss: `
        /* imza: numaralı başlık · özet bloğu (3px sol çizgi) · kenar notu · dipnot çizgisi */
        h1 { font-size: 34px; line-height: 1.18; letter-spacing: -0.005em; font-weight: 600; font-family: var(--font-display); max-width: 28ch; }
        h2 { font-size: 24px; line-height: 1.24; letter-spacing: -0.005em; font-weight: 600; }
        h2::before { content: counter(sec) ". "; color: var(--ink-soft); }
        h3 { font-size: 18px; line-height: 1.3; font-weight: 600; }
        p, .lede, .copy { font-family: var(--font-body); font-size: 15.5px; line-height: 1.66; max-width: 72ch; }
        .lede { border-left: 3px solid var(--line); padding-left: 22px; color: var(--ink); max-width: 72ch; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; }
        .brand { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }

        .quad, .m-grid { grid-template-columns: 8fr 3fr; gap: 24px; }
        .aside-note, .state-card { font-size: 12.5px; line-height: 1.5; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }
        .panel, .panel-2, .comp-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
          border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
        }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; font-weight: 600; min-height: 44px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 15.5px; }
        .field.focus, input:focus { border-color: var(--ink); outline: 2px solid var(--accent); outline-offset: 1px; }
        .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; }
        .foot-demo, .footnote { border-top: 1px solid var(--line); width: 64px; padding-top: 8px; font-size: 12.5px; color: var(--ink-soft); }
        .divider, hr { height: 1px; background: var(--line); border: 0; }
        .kpi strong, .counter, table td.num { font-variant-numeric: tabular-nums; }
        table { border-collapse: collapse; }
        table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-align: left; border-bottom: 1px solid var(--ink); }
        table td { border-bottom: 1px solid var(--line); }
        @media (max-width: 900px) {
          h1 { font-size: 26px; }
          .quad, .m-grid { grid-template-columns: 1fr; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: figür kutusu + numaralı atıf satırları */
            .hero-visual { min-height: 360px; padding: 18px; background: var(--bg-2); border: 0; border-radius: var(--radius-lg); }
            .visual-card { width: 100%; min-height: 320px; border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; padding: 18px; }
            .visual-card .bar { height: 2px; border-radius: 0; }
            .visual-card .bar.accent { width: 26%; }
            .visual-rows { margin-top: auto; gap: 0; }
            .visual-row { border-radius: 0; border: 0; border-top: 1px solid var(--line); background: transparent; padding: 8px 0; counter-increment: ref; }
            .visual-row .sq { display: none; }
            .visual-row .num { font-family: var(--font-mono); font-size: 10px; }
            .hero-visual::after { content: 'Şekil 1 · ölçüm düzeni'; position: absolute; left: 18px; bottom: 8px; font-family: var(--font-mono); font-size: 9px; letter-spacing: .08em; color: var(--ink-soft); }
      `,
    },
  },
  'poetry-chapbook': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* imza: sol kenarda 1px kesikli el dikişi · dar ölçü (46ch) · italik dize · mono bölüm numarası */
        h1 { font-size: 44px; line-height: 1.14; letter-spacing: .01em; font-weight: 500; font-family: var(--font-display); max-width: 18ch; }
        h2 { font-size: 28px; line-height: 1.26; font-weight: 500; }
        h3 { font-size: 20px; line-height: 1.36; font-weight: 500; }
        p, .lede, .copy { font-family: var(--font-body); font-size: 16.5px; line-height: 1.78; max-width: 46ch; }
        .lede { font-style: italic; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .brand { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-soft); }

        /* el dikişi: sol kenar, tek çizgi, ekran başına 1 */
        .sig::before {
          content: ""; position: absolute; left: 28px; top: 96px; bottom: 96px; width: 0;
          border-left: 1px dashed var(--line); pointer-events: none;
        }
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
          border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
        }
        .btn { border-radius: var(--radius); background: transparent; color: var(--accent); border: 1px solid var(--accent); min-height: 44px; font-family: var(--font-body); }
        .btn:hover { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft { color: var(--ink); border: 1px solid var(--line); }
        .field, input, select, textarea { border-radius: 0; background: transparent; border: 0; border-bottom: 1px solid var(--line); font-family: var(--font-body); font-size: 16.5px; }
        .field.focus, input:focus { border-bottom-color: var(--accent); outline: 2px solid var(--accent); outline-offset: 3px; }
        .chip { border-radius: var(--radius); background: transparent; border: 1px solid var(--line); font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase; }
        .quote, blockquote { font-family: var(--font-display); font-style: italic; font-size: 20px; line-height: 1.72; border: 0; padding: 0; max-width: 46ch; color: var(--ink-soft); }
        .divider, hr { height: 1px; background: var(--line); border: 0; }
        body.sig::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: var(--grain);
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 18%, transparent) 0 1px, transparent 1px 5px);
        }
        @media (max-width: 900px) {
          h1 { font-size: 30px; }
          .sig::before { display: none; }
        }

        /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
          border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
        }
        .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
        .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .logo-strip { color: var(--ink-soft); }
        .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
        .sig, .sig::before, .sig::after { pointer-events: none; }
        .sig { z-index: 0; }
        .sig::before, .sig::after { z-index: -1; }
        .hero-visual { overflow: hidden; }
        .hero-visual > * { position: relative; z-index: 1; }

      `,
    scenes: {
      landing: `
            /* imza hero: dize bloğu + sol dikiş çizgisi */
            .hero-visual { min-height: 360px; padding: 24px 22px 24px 40px; background: var(--bg-2); border-radius: var(--radius-lg); }
            .visual-card { width: 100%; min-height: 310px; border-radius: var(--radius-lg); border: 0; box-shadow: none; background: transparent; padding: 0; }
            .visual-card .bar { height: 3px; border-radius: 999px; background: color-mix(in srgb, var(--ink) 22%, transparent); border: 0; }
            .visual-card .bar.accent { width: 30%; background: var(--accent); }
            .visual-rows { margin-top: auto; gap: 14px; }
            .visual-row { border-radius: 0; border: 0; background: transparent; padding: 0; }
            .visual-row .sq { display: none; }
            .visual-row .line { height: 2px; background: color-mix(in srgb, var(--ink) 18%, transparent); }
            .visual-row .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em; }
            .hero-visual::before { content: ''; position: absolute; left: 18px; top: 24px; bottom: 24px; width: 0; border-left: 1px dashed var(--line); }
      `,
    },
  },
  'product-catalog': {
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
  },
  'museum-thesis': {
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
  },
  'type-experiment': {
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
  },
  'encyclopedia': {
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
  },
  'punk-fanzine': {
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
  },
  'kinetic-marquee': {
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
  },
  'optical-illusion': {
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
  },
  'generative-grid': {
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
  },
  'depth-parallax': {
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
  },
  'fluid-simulation': {
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
  },
  'shadow-stage': {
    motif: 'blob',
    bodyClass: '',
    extraCss: `
      /* imza: tek ışık kaynağı (üst-sol) + köşe vinyeti + Poiret One ince başlık */
      /* tek ışık kaynağı: üst-sol leke + karşı köşede çok soluk serin yansıma */
      .motif-blob::before {
        background:
          radial-gradient(46% 42% at 24% 18%, var(--accent) 0%, transparent 66%),
          radial-gradient(40% 38% at 78% 82%, var(--ink) 0%, transparent 72%);
        opacity: .16;
        filter: blur(24px);
      }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 50px; line-height: 1.08; letter-spacing: var(--tracking); max-width: 22ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 27px; line-height: 1.22; letter-spacing: .02em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 19px; line-height: 1.3; letter-spacing: 0; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; }
      .lede { max-width: 58ch; font-size: 15px; line-height: 1.62; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      .nav { height: 56px; padding: 0 24px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: .14em; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); position: relative; }
      .nav-links a:first-child::after {
        content: ""; position: absolute; left: 0; right: 0; bottom: -8px; height: 1px; background: var(--accent);
      }

      /* yüzeyler: tek katman, üst-sol yönlü çok soluk gölge */
      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: var(--shadow); backdrop-filter: none; background: var(--surface);
      }
      .kpi { border-radius: var(--radius); }
      .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--bg-2); }
      /* ışık huzmesi: hero görselde tek kaynak yansıması */
      .hero-visual::after {
        content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
        background: radial-gradient(52% 46% at 22% 16%, var(--accent) 0%, transparent 64%);
        opacity: .12;
      }

      .btn { min-height: 40px; padding: 0 18px; border-radius: var(--radius); box-shadow: none; font-size: 13px; font-weight: 600; }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink);
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 24px; padding: 0 10px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
      .track { border-radius: 999px; background: var(--surface-2); }
      .track i { border-radius: 999px; background: var(--accent); }
      .opt .box { border-radius: 8px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .06em; }
      .proof li::before { background: var(--accent); border-radius: 999px; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--ink-faint); }

      /* sayfa atmosferi: köşe vinyeti (≤ %22) + tek ışık lekesi */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background:
          radial-gradient(120% 90% at 22% 10%, transparent 30%, var(--bg) 78%),
          radial-gradient(60% 50% at 18% 12%, var(--accent) 0%, transparent 60%);
        opacity: .22;
      }
      @media (max-width: 900px) {
        h1 { font-size: 30px; max-width: 22ch; }
        body.scene-landing .sig::before { opacity: .14; }
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
        /* hero: sahne — tek ışık konisi, zemin çizgisi, düşen gölge */
        .hero-visual .visual-card { box-shadow: 28px 28px 0 -20px color-mix(in srgb, var(--ink) 22%, transparent); }
        .hero-visual .visual-card::before {
          content: "SAHNE 01 · ışık 22% / 16% · tek kaynak";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em;
          color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
        }
        .hero-visual .visual-card::after {
          content: "gölge 24px · blur .7 · vinyet .14";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
          color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
        }
        .hero-visual .visual-rows { border-bottom: 1px solid var(--line); }
        .hero-visual .bar { height: 4px; }

      `,
    },
  },
  'moire-field': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: `
      /* imza: iki perde çizgi (4° / 7° fark) + keskin köşe + Silkscreen başlık */
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 38px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 26ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.26; letter-spacing: .01em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 18px; line-height: 1.34; letter-spacing: 0; text-transform: none; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 13px; text-transform: none; }
      .lede { max-width: 68ch; font-size: 15px; line-height: 1.55; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      /* çift perde: tüm yüzeylerde keskin köşe */
      *, *::before, *::after { border-radius: 0 !important; }

      .nav { height: 48px; padding: 0 20px; border-bottom: 1px solid var(--ink); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .04em; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi, .table, .side {
        border: 1px solid var(--ink); border-radius: 0; box-shadow: none; backdrop-filter: none;
        background: var(--surface);
      }
      .hero-visual { border: 1px solid var(--ink); border-radius: 0; box-shadow: none; background: var(--surface); overflow: hidden; }
      /* iki perde: hero görselin zemini */
      .hero-visual::before {
        content: ""; position: absolute; inset: -20%; z-index: 0; pointer-events: none;
        background-image:
          repeating-linear-gradient(4deg, var(--line) 0 1px, transparent 1px 5px),
          repeating-linear-gradient(11deg, var(--line) 0 1px, transparent 1px 7px);
        opacity: .9;
      }
      /* girişim tepesi: accent noktalar */
      .hero-visual::after {
        content: ""; position: absolute; right: 10%; bottom: 12%; width: 46%; height: 46%; z-index: 1;
        pointer-events: none;
        background-image:
          radial-gradient(var(--accent) 2px, transparent 2.4px),
          radial-gradient(var(--accent) 2px, transparent 2.4px);
        background-size: 15px 15px, 21px 21px;
        background-position: 0 0, 7px 9px;
        opacity: .5;
      }

      .btn {
        min-height: 36px; padding: 0 14px; border-radius: 0; box-shadow: none;
        font-family: var(--font-display); font-size: 12px; font-weight: 400; letter-spacing: .04em;
      }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
      .field, input, select, textarea {
        border: 1px solid var(--ink); border-radius: 0; background: var(--surface); color: var(--ink);
        font-family: var(--font-mono); font-size: 12px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip {
        height: 20px; padding: 0 8px; border-radius: 0; border: 1px solid var(--ink);
        background: var(--surface-2); font-family: var(--font-display); font-size: 10px; letter-spacing: .04em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); }
      .mark { border-radius: 0; background: var(--ink); color: var(--surface); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 0; border: 1px solid var(--ink); }
      .icon-btn { border-radius: 0; border: 1px solid var(--ink); background: var(--surface); }
      .divider { height: 1px; background: var(--ink); opacity: .4; }
      .tabbar { border-top: 1px solid var(--ink); background: var(--bg); }
      .track { border-radius: 0; background: var(--surface-2); border: 1px solid var(--line); }
      .track i { border-radius: 0; background: var(--accent); }
      .logo-strip { border-top: 1px solid var(--ink); font-family: var(--font-mono); letter-spacing: .12em; font-size: 10px; }
      .proof li::before { background: var(--accent); border-radius: 0; }
      .bar:not(.accent) { background: var(--ink); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

      /* sayfa atmosferi: iki perde, düşük opaklık; metin opak katmanda kalır */
      body.scene-landing .sig::before, body.scene-pricing .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image:
          repeating-linear-gradient(7deg, var(--line) 0 1px, transparent 1px 6px),
          repeating-linear-gradient(-4deg, var(--line) 0 1px, transparent 1px 9px);
        opacity: .55;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: 0; top: 0; width: 42%; height: 100%; pointer-events: none;
        background: linear-gradient(90deg, var(--surface) 0%, transparent 100%);
        opacity: .5;
      }
      @media (max-width: 900px) {
        h1 { font-size: 24px; max-width: 24ch; }
        body.scene-landing .sig::before { opacity: .35; }
        body.scene-landing .sig::after { display: none; }
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
        /* hero: moiré test kartı — açı notu, kesim payı, girişim çizgileri */
        .hero-visual .visual-card { background: color-mix(in srgb, var(--surface) 90%, transparent); border: 1px solid var(--ink); }
        .hero-visual .visual-card::before {
          content: "MOIRÉ 4° / 11° · girişim 15px";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em;
          color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--ink);
        }
        .hero-visual .visual-card::after {
          content: "kesim payı 3 mm · statik baskı";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em;
          color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--ink); margin-top: auto;
        }
        .hero-visual .visual-row { border-bottom: 1px solid var(--line); }
        .hero-visual .visual-row .sq { border-radius: 0; }
        .hero-visual .visual-row .line { border-radius: 0; height: 2px; }

      `,
    },
  },
  'motion-trail': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
      /* imza: üç kademeli iz kopyası (%40/%20/%8) + Anton başlık + hap kontrol */
      /* imza motifi yok: izin kendisi motiftir; hız şeritleri aşağıdaki sig kurallarında. */

      h1 { font-family: var(--font-display); font-weight: 400; font-size: 52px; line-height: 1.02; letter-spacing: var(--tracking); max-width: 20ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 28px; line-height: 1.16; letter-spacing: -.005em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; line-height: 1.3; letter-spacing: 0; text-transform: none; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; text-transform: none; }
      .lede { max-width: 60ch; font-size: 16px; line-height: 1.6; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      .nav { height: 60px; padding: 0 28px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 19px; letter-spacing: .01em; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); text-transform: none; }
      .nav-links a:first-child { color: var(--ink); background: var(--surface-2); border-radius: 999px; padding: 6px 14px; }

      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: var(--shadow); backdrop-filter: none; background: var(--surface);
      }
      .kpi { border-radius: var(--radius); }
      .table { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: none; }
      .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--surface); }
      /* iz katmanları: iki kopya, hareket yönünde kaymış */
      .hero-visual::before {
        content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
        border: 1px solid var(--accent); border-radius: var(--radius-lg);
        transform: translate(-16px, 0); opacity: .08;
      }
      .hero-visual::after {
        content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
        border: 1px solid var(--accent); border-radius: var(--radius-lg);
        transform: translate(-8px, 0); opacity: .20;
      }

      .btn {
        min-height: 44px; padding: 0 24px; border-radius: 999px; box-shadow: var(--shadow);
        font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: 0; text-transform: none;
      }
      .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 13px; }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--surface); color: var(--ink); font-family: var(--font-body); font-size: 15px; min-height: 44px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 26px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-body); font-size: 12px; font-weight: 600; text-transform: none;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; }
      .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--surface); }
      .track { border-radius: 999px; background: var(--surface-2); height: 8px; }
      .track i { border-radius: 999px; background: var(--accent); }
      .opt .box { border-radius: 8px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }
      .proof li::before { background: var(--accent); border-radius: 999px; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); }
      .table .trow:hover, tr:hover { transform: translateX(4px); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }

      /* sayfa atmosferi: soldan sağa solan üç iz şeridi */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; left: 0; right: 0; top: 33%; height: 8px; pointer-events: none;
        background: linear-gradient(90deg, transparent 0%, var(--accent) 22%, transparent 46%);
        opacity: .5;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: 0; right: 0; top: 38%; height: 1px; pointer-events: none;
        background: linear-gradient(90deg, transparent 0%, var(--accent) 16%, transparent 40%);
        opacity: .28;
      }
      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        .hero-visual::before { transform: translate(-10px, 0); }
        .hero-visual::after { transform: translate(-5px, 0); }
        .table .trow:hover, tr:hover { transform: none; }
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

      /* D7 · iz şeritleri metnin üstünden geçmesin: yalnız sağ yarı, hero görsel hizası */
      body.scene-landing .sig::before { left: 54%; right: 0; top: 46%; }
      body.scene-landing .sig::after { left: 54%; right: 0; top: 51%; }

    `,
    scenes: {
      landing: `
        /* hero: iz zaman çizelgesi — 12px kademeli hayalet kopyalar */
        .hero-visual .visual-card {
          box-shadow: 12px 0 0 -6px color-mix(in srgb, var(--surface) 70%, transparent),
                      24px 0 0 -12px color-mix(in srgb, var(--surface) 45%, transparent);
        }
        .hero-visual .visual-card::before {
          content: "0 → 12px → 24px · iz .40 / .20 / .08";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em;
          color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
        }
        .hero-visual .visual-card::after {
          content: "0.37s · 3 kademe · hap kontrol";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
          color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
        }
        .hero-visual .visual-row .line { height: 8px; }
        .hero-visual .visual-row:nth-child(2) { transform: translateX(6px); }

      `,
    },
  },
  'stepped-mechanism': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
      /* imza: 8px kademe ızgarası + 2px alt kural + 4 çentikli kademe göstergesi */
      .motif-grid::before {
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 8px 8px;
        opacity: .7;
      }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 38px; line-height: 1.1; letter-spacing: var(--tracking); max-width: 28ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.24; letter-spacing: .02em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 18px; line-height: 1.3; letter-spacing: 0; text-transform: none; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 13px; text-transform: none; }
      .lede { max-width: 70ch; font-size: 14px; line-height: 1.52; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      .nav { height: 48px; padding: 0 20px; border-bottom: 2px solid var(--ink); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .08em; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi, .table, .side {
        border: 1px solid var(--ink); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; background: var(--surface);
      }
      .kpi, .m-tile { border-radius: var(--radius); }
      .hero-visual { border: 1px solid var(--ink); border-radius: var(--radius-lg); box-shadow: var(--shadow-hard); background: var(--surface); }
      /* kademe göstergesi: dört çentik, ikisi dolu */
      .hero-visual::after {
        content: ""; position: absolute; right: 8%; bottom: 10%; z-index: 1; width: 96px; height: 8px;
        pointer-events: none;
        background-image:
          repeating-linear-gradient(90deg, var(--ink) 0 16px, transparent 16px 24px);
        background-size: 100% 8px;
        opacity: .55;
      }
      .hero-visual::before {
        content: ""; position: absolute; right: 8%; bottom: 16%; z-index: 1; width: 48px; height: 8px;
        pointer-events: none;
        background: var(--accent);
      }

      .btn {
        min-height: 36px; padding: 0 16px; border-radius: var(--radius); box-shadow: var(--shadow-hard);
        font-family: var(--font-display); font-size: 13px; font-weight: 400; letter-spacing: .03em;
        transition-timing-function: steps(4, end);
      }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
      .field, input, select, textarea {
        border: 1px solid var(--ink); border-radius: var(--radius); background: var(--surface); color: var(--ink);
        font-family: var(--font-mono); font-size: 12px; min-height: 36px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip {
        height: 22px; padding: 0 8px; border-radius: var(--radius); border: 1px solid var(--ink);
        background: var(--surface-2); font-family: var(--font-display); font-size: 11px; letter-spacing: .02em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); }
      .mark { border-radius: var(--radius); background: var(--ink); color: var(--surface); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--ink); background: var(--surface); }
      .divider { height: 2px; background: var(--ink); opacity: .5; }
      .tabbar { border-top: 2px solid var(--ink); background: var(--surface); }
      .track { border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--ink); height: 8px; }
      .track i { border-radius: 0; background: var(--accent); }
      .opt .box { border-radius: 2px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--ink); font-family: var(--font-mono); letter-spacing: .1em; font-size: 10px; }
      .proof li::before { background: var(--accent); border-radius: 0; }
      .bar:not(.accent) { background: var(--ink); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 32px; }
      .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

      /* sayfa atmosferi: 8px kademe ızgarası + alt kademe şeridi */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 8px 8px;
        opacity: .5;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 8px; pointer-events: none;
        background-image: repeating-linear-gradient(90deg, var(--ink) 0 32px, transparent 32px 48px);
        background-size: 100% 8px;
        opacity: .5;
      }
      @media (max-width: 900px) {
        h1 { font-size: 24px; max-width: 26ch; }
        body.scene-landing .sig::before { opacity: .3; }
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
        /* hero: kademeli gösterge — çentik cetveli + 8px basamak */
        .hero-visual .visual-card::before {
          content: "KADEME 3 / 8 · adım 8px";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em;
          color: var(--ink-soft); padding-bottom: 8px; border-bottom: 2px solid var(--ink);
        }
        .hero-visual .visual-card::after {
          content: "0 [###-----] 8";
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .22em;
          color: var(--accent); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
        }
        .hero-visual .visual-row { border-left: 8px solid var(--surface-2); }
        .hero-visual .visual-row .line { border-radius: 0; height: 6px; }
        .hero-visual .bar { border-radius: 0; }

      `,
    },
  },
  'holographic-layer': {
    motif: 'mesh',
    bodyClass: '',
    extraCss: `
      /* imza: üç katman yığını (0/1/2) + 12px kayma + ince mesh + Michroma başlık */
      .motif-mesh::before {
        content: ""; position: absolute; inset: -14%; z-index: 0; pointer-events: none;
        background-image:
          repeating-linear-gradient(60deg, var(--line) 0 1px, transparent 1px 24px),
          repeating-linear-gradient(-60deg, var(--line) 0 1px, transparent 1px 24px);
        opacity: .8;
      }
      .motif-mesh::after {
        content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
        background: radial-gradient(58% 54% at 70% 24%, var(--accent) 0%, transparent 68%);
        opacity: .16;
        filter: blur(var(--blur));
      }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 44px; line-height: 1.14; letter-spacing: var(--tracking); max-width: 24ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 26px; line-height: 1.24; letter-spacing: .01em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 19px; line-height: 1.3; letter-spacing: 0; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; }
      .lede { max-width: 58ch; font-size: 15px; line-height: 1.6; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      .nav {
        height: 64px; padding: 0 28px; border-bottom: 1px solid var(--line);
        background: color-mix(in srgb, var(--surface) 74%, transparent);
        backdrop-filter: blur(var(--blur)) saturate(120%);
      }
      .brand { font-family: var(--font-display); font-size: 16px; letter-spacing: .04em; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      /* yüzeyler: ana katman opak, dekoratif kopyalar kaymış ve soluk */
      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: var(--shadow), inset 0 1px 0 color-mix(in srgb, var(--ink) 8%, transparent);
        background: var(--surface); backdrop-filter: none;
      }
      .kpi { border-radius: var(--radius); }
      .table { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: var(--surface); }
      .hero-visual {
        border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow);
        background: var(--bg-2); overflow: visible;
      }
      /* katman 1 ve 2: 12px aralıklı kayma, artan solukluk */
      .hero-visual::before {
        content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        background: color-mix(in srgb, var(--surface) 40%, transparent);
        transform: translate(12px, 12px); opacity: .10;
      }
      .hero-visual::after {
        content: ""; position: absolute; inset: 0; z-index: -2; pointer-events: none;
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        background: color-mix(in srgb, var(--accent) 24%, transparent);
        transform: translate(24px, 24px); opacity: .08;
      }

      .btn {
        min-height: 46px; padding: 0 22px; border-radius: 999px; box-shadow: var(--shadow);
        font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .02em;
      }
      .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 12px; }
      .btn.ghost, .btn.soft {
        background: color-mix(in srgb, var(--surface) 62%, transparent);
        border: 1px solid var(--line); color: var(--ink); box-shadow: none;
        backdrop-filter: blur(var(--blur));
      }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 15px; min-height: 46px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 26px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; background: var(--surface-2); border: 1px solid var(--line); }
      .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); }
      .divider { height: 1px; background: var(--line); }
      .tabbar {
        border-top: 1px solid var(--line);
        background: color-mix(in srgb, var(--surface) 78%, transparent);
        backdrop-filter: blur(var(--blur));
      }
      .track { border-radius: 999px; background: var(--surface-2); height: 6px; }
      .track i { border-radius: 999px; background: var(--accent); }
      .opt .box { border-radius: 6px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .06em; }
      .proof li::before { background: var(--accent); border-radius: 999px; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); }
      .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--ink-faint); }

      /* sayfa atmosferi: mesh + tek accent ışıması; metin opak katmanda */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image:
          repeating-linear-gradient(60deg, var(--line) 0 1px, transparent 1px 28px),
          repeating-linear-gradient(-60deg, var(--line) 0 1px, transparent 1px 28px);
        opacity: .7;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; right: -12vw; top: -18vh; width: 64vw; height: 64vw;
        border-radius: 999px; pointer-events: none;
        background: radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%);
        opacity: .14; filter: blur(28px);
      }
      @media (max-width: 900px) {
        h1 { font-size: 27px; max-width: 22ch; }
        .hero-visual::before { transform: translate(8px, 8px); }
        .hero-visual::after { transform: translate(16px, 16px); }
        body.scene-landing .sig::after { opacity: .10; }
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
        /* hero: üç katman yığını — 0/1/2 offset + tarama çizgisi */
        .hero-visual .visual-card { background: color-mix(in srgb, var(--surface) 92%, transparent); }
        .hero-visual .visual-card::before {
          content: "KATMAN 0 · 1 · 2  /  12px kayma";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em;
          color: var(--ink-soft); padding-bottom: 8px; border-bottom: 1px solid var(--line);
        }
        .hero-visual .visual-card::after {
          content: "opaklık .40 / .24 / .08 · tarama 3px";
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .16em;
          color: var(--ink-soft); padding-top: 8px; border-top: 1px solid var(--line); margin-top: auto;
        }
        .hero-visual .visual-row:nth-child(2) { transform: translateX(6px); }
        .hero-visual .visual-row:nth-child(3) { transform: translateX(12px); }
        .hero-visual .visual-row .line { border-radius: 0; height: 5px; }

      `,
    },
  },
  'voice-first': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
        /* imza: dinleme halkası · dalga formu · hap buton · mono transkript */
        body {
          background-image:
            radial-gradient(52% 44% at 50% 8%, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 72%),
            radial-gradient(40% 36% at 88% 92%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 70%);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: -.01em; }
        h1 { font-size: 48px; line-height: 1.08; max-width: 20ch; }
        h2 { font-size: 32px; line-height: 1.16; }
        h3 { font-size: 22px; line-height: 1.3; }
        .lede { font-size: 16px; line-height: 1.62; max-width: 54ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .eyebrow::before {
          content: ''; width: 8px; height: 8px; border-radius: 999px; background: var(--accent);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 22%, transparent);
        }
        .brand { font-family: var(--font-display); font-size: 19px; font-weight: 500; }

        .nav {
          background: color-mix(in srgb, var(--bg) 88%, var(--surface));
          border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        }
        .nav-links a { font-family: var(--font-body); font-size: 15px; font-weight: 500; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        /* dinleme halkası: hero görselinin zemini */
        .hero-visual, .visual-card {
          position: relative; overflow: hidden;
          background-image:
            repeating-radial-gradient(circle at 50% 52%, transparent 0 34px, color-mix(in srgb, var(--accent) 26%, transparent) 34px 35px),
            repeating-radial-gradient(circle at 50% 52%, transparent 0 68px, color-mix(in srgb, var(--accent) 14%, transparent) 68px 69px);
        }
        /* dalga formu: satır içi çubuklar */
        .bar:not(.accent):not(.w70):not(.w45) {
          background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 40%, transparent));
          border-radius: 999px; width: 4px;
        }
        .line, .divider { background: var(--line); }
        .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .state-card, .comp-card-demo:first-child { box-shadow: var(--shadow); border-color: color-mix(in srgb, var(--accent) 34%, transparent); }
        .btn {
          height: 48px; padding: 0 26px; border-radius: 999px; border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: var(--shadow);
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 90%, var(--ink)); }
        .btn:active { transform: scale(.98); }
        .btn.sm { height: 38px; padding: 0 18px; font-size: 14px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
        .field input, .field select, .field textarea {
          border-radius: 999px; background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field textarea { border-radius: var(--radius-lg); }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); outline-offset: 2px;
        }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-body); font-size: 12px; font-weight: 600;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 40%, transparent); }
        .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .m-grid {
          background-image: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 30%, transparent) 0 2px, transparent 2px);
          background-size: 12px 12px; border-radius: var(--radius-lg);
        }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
        .sig { background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%); }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; grid-template-rows: auto 1fr; gap: 18px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 9px; border-radius: 999px; background: var(--accent); border: 0; }
  body.scene-landing .hero-visual .visual-card .bar.w70 { width: 38%; background: color-mix(in srgb, var(--accent) 44%, transparent); }
  body.scene-landing .hero-visual .visual-card .bar.w45 { width: 22%; background: color-mix(in srgb, var(--accent) 22%, transparent); }
  body.scene-landing .hero-visual .visual-rows { display: flex; align-items: center; justify-content: space-between; height: 96px; margin: 0; padding: 0; }
  body.scene-landing .hero-visual .visual-row { display: block; width: 5px; padding: 0; background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 26%, transparent)); border-radius: 999px; }
  body.scene-landing .hero-visual .visual-row:nth-child(1) { height: 32%; }
  body.scene-landing .hero-visual .visual-row:nth-child(2) { height: 66%; }
  body.scene-landing .hero-visual .visual-row:nth-child(3) { height: 92%; }
  body.scene-landing .hero-visual .visual-row > * { display: none; }
  body.scene-landing .hero-visual .visual-card::after { content: 'canlı transkript 00:04 — notları özetle, ekibe gönder'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 12px; }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; grid-template-rows: auto 1fr; gap: 18px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 9px; border-radius: 999px; background: var(--accent); border: 0; }
  body.scene-landing .hero-visual .visual-card .bar.w70 { width: 38%; background: color-mix(in srgb, var(--accent) 44%, transparent); }
  body.scene-landing .hero-visual .visual-card .bar.w45 { width: 22%; background: color-mix(in srgb, var(--accent) 22%, transparent); }
  body.scene-landing .hero-visual .visual-rows { display: flex; align-items: center; justify-content: space-between; height: 96px; margin: 0; padding: 0; }
  body.scene-landing .hero-visual .visual-row { display: block; width: 5px; padding: 0; background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 26%, transparent)); border-radius: 999px; }
  body.scene-landing .hero-visual .visual-row:nth-child(1) { height: 32%; }
  body.scene-landing .hero-visual .visual-row:nth-child(2) { height: 66%; }
  body.scene-landing .hero-visual .visual-row:nth-child(3) { height: 92%; }
  body.scene-landing .hero-visual .visual-row > * { display: none; }
  body.scene-landing .hero-visual .visual-card::after { content: 'canlı transkript 00:04 — notları özetle, ekibe gönder'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 12px; }`,
    },
  },
  'spatial-ar-layer': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
        /* imza: perspektif ızgara · çapa artısı · üç derinlik düzlemi · mono koordinat */
        body {
          background-image:
            linear-gradient(color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
          background-size: 40px 40px, 40px 40px;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: .01em; }
        h1 { font-size: 44px; line-height: 1.08; max-width: 21ch; }
        h2 { font-size: 30px; line-height: 1.16; }
        h3 { font-size: 21px; line-height: 1.28; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow::before { content: '⊕ '; color: var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; }

        .nav {
          background: color-mix(in srgb, var(--surface) 72%, transparent);
          border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
          backdrop-filter: blur(var(--blur)); -webkit-backdrop-filter: blur(var(--blur));
        }
        .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 500; }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        /* katman yükseklikleri: z0 düz, z1 orta, z2 ön */
        .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: 0 8px 20px color-mix(in srgb, var(--ink) 12%, transparent);
        }
        .panel, .card, .visual-card, .comp-card-demo { position: relative; box-shadow: var(--shadow); }
        /* çapa artısı */
        .panel::before, .card::before, .visual-card::before, .comp-card-demo::before {
          content: '+'; position: absolute; top: 6px; left: 8px; font-family: var(--font-mono);
          font-size: 12px; line-height: 1; color: var(--accent); pointer-events: none;
        }
        /* perspektif sahne: hero görseli */
        .hero-visual, .visual-card {
          background-image:
            linear-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px),
            linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%);
          background-size: 28px 28px, 28px 28px, 100% 100%;
        }
        .m-tile, .field { box-shadow: none; }
        .btn {
          height: 42px; padding: 0 18px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: 0 8px 20px color-mix(in srgb, var(--ink) 16%, transparent);
          font-family: var(--font-display); font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn:active { transform: translateY(1px); box-shadow: 0 4px 12px color-mix(in srgb, var(--ink) 18%, transparent); }
        .btn.sm { height: 32px; padding: 0 12px; font-size: 11px; }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 44%, transparent); }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
        .bar:not(.accent):not(.w70):not(.w45), .line, .divider { background: var(--line); }
        .m-grid {
          background-image:
            linear-gradient(color-mix(in srgb, var(--accent) 20%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--accent) 20%, transparent) 1px, transparent 1px);
          background-size: 24px 24px; border-radius: var(--radius-lg);
        }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .sig {
          border-top: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          box-shadow: inset 0 8px 20px color-mix(in srgb, var(--ink) 10%, transparent);
        }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 12px; background: color-mix(in srgb, var(--surface) 86%, transparent); }
  body.scene-landing .hero-visual { min-height: 380px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: var(--radius); background: color-mix(in srgb, var(--accent) 16%, transparent); border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent); }
  body.scene-landing .hero-visual .visual-rows { gap: 14px; perspective: 900px; }
  body.scene-landing .hero-visual .visual-row { transform: rotateY(4deg); box-shadow: 0 10px 24px color-mix(in srgb, var(--ink) 14%, transparent); background: color-mix(in srgb, var(--surface) 92%, transparent); }
  body.scene-landing .hero-visual .visual-row:nth-child(2) { transform: rotateY(-3deg) translateX(10px); }
  body.scene-landing .hero-visual .visual-row:nth-child(3) { transform: rotateY(2deg) translateX(20px); }
  body.scene-landing .hero-visual .visual-row .sq { background: transparent; position: relative; }
  body.scene-landing .hero-visual .visual-row .sq::before { content: '+'; position: absolute; inset: 0; display: grid; place-items: center; font-family: var(--font-mono); font-size: 13px; color: var(--accent); }
  body.scene-landing .hero-visual .visual-card::after { content: 'x 1.24 · y 0.86 · z 0.42 — 3 katman sabitlendi'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 12px; background: color-mix(in srgb, var(--surface) 86%, transparent); }
  body.scene-landing .hero-visual { min-height: 380px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: var(--radius); background: color-mix(in srgb, var(--accent) 16%, transparent); border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent); }
  body.scene-landing .hero-visual .visual-rows { gap: 14px; perspective: 900px; }
  body.scene-landing .hero-visual .visual-row { transform: rotateY(4deg); box-shadow: 0 10px 24px color-mix(in srgb, var(--ink) 14%, transparent); background: color-mix(in srgb, var(--surface) 92%, transparent); }
  body.scene-landing .hero-visual .visual-row:nth-child(2) { transform: rotateY(-3deg) translateX(10px); }
  body.scene-landing .hero-visual .visual-row:nth-child(3) { transform: rotateY(2deg) translateX(20px); }
  body.scene-landing .hero-visual .visual-row .sq { background: transparent; position: relative; }
  body.scene-landing .hero-visual .visual-row .sq::before { content: '+'; position: absolute; inset: 0; display: grid; place-items: center; font-family: var(--font-mono); font-size: 13px; color: var(--accent); }
  body.scene-landing .hero-visual .visual-card::after { content: 'x 1.24 · y 0.86 · z 0.42 — 3 katman sabitlendi'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-soft); }`,
    },
  },
  'command-palette': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
        /* imza: tek chalk accent · keycap chip · 44px komut satırı · blur arka plan */
        body {
          background-image: radial-gradient(60% 50% at 50% 0%, color-mix(in srgb, var(--ink) 6%, transparent) 0%, transparent 70%);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
        h1 { font-size: 30px; line-height: 1.2; max-width: 28ch; }
        h2 { font-size: 22px; line-height: 1.3; }
        h3 { font-size: 17px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.5; max-width: 68ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow::before { content: '> '; color: var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 13px; font-weight: 600; letter-spacing: 0; }
        body { font-variant-numeric: tabular-nums; }

        .nav { height: 48px; background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        }
        /* palet gövdesi: yüzen tek katman */
        .comp-card-demo, .state-card {
          box-shadow: var(--shadow); border-radius: var(--radius-lg);
        }
        /* seçim satırı */
        .table tr[aria-selected='true'] td, .table tr.selected td, .table tr:hover td {
          background: var(--accent); color: var(--accent-ink);
        }
        .comp-card-demo .t, .list-row, .table td { font-family: var(--font-body); }
        .btn {
          height: 32px; padding: 0 12px; border-radius: var(--radius); border: 1px solid var(--line);
          background: var(--surface-2); color: var(--ink); box-shadow: none;
          font-family: var(--font-mono); font-size: 12px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--surface-2) 85%, var(--accent)); }
        .btn.sm { height: 24px; padding: 0 8px; font-size: 11px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink-soft); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        /* keycap chip */
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 4px;
          font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .02em;
          text-transform: none; min-width: 20px; justify-content: center;
        }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-faint); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); height: 44px; }
        .bar:not(.accent):not(.w70):not(.w45), .line, .divider { background: var(--line); }
        .m-grid { background-image: none; border-radius: var(--radius-lg); }
        .mark { border-radius: 4px; background: var(--accent); color: var(--accent-ink); }
        .scene-overlay .sig, .scene-auth .sig {
          background: color-mix(in srgb, var(--bg) 60%, transparent);
          backdrop-filter: blur(var(--blur)); -webkit-backdrop-filter: blur(var(--blur));
        }
        .hero-visual, .visual-card {
          background-image: linear-gradient(180deg, color-mix(in srgb, var(--ink) 5%, transparent), transparent 60%);
        }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border: 1px solid color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 0; overflow: hidden; box-shadow: 0 24px 60px color-mix(in srgb, var(--ink) 32%, transparent); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 52px; border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 12%, var(--surface-2)) 0 46%, var(--surface-2) 46%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 0; margin: 0; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 18px 1fr auto; padding: 12px 16px; border-radius: 0; border-bottom: 1px solid var(--line); }
  body.scene-landing .hero-visual .visual-row:first-child { background: color-mix(in srgb, var(--accent) 10%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 14px; height: 14px; border-radius: 3px; opacity: 1; background: color-mix(in srgb, var(--accent) 26%, transparent); }
  body.scene-landing .hero-visual .visual-row .num { font-size: 10px; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line); border-radius: 4px; padding: 2px 6px; }
  body.scene-landing .hero-visual .visual-card::after { content: 'komut paleti · 8 satır · esc ile kapanır'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: var(--ink-soft); padding: 10px 16px; border-top: 1px solid var(--line); background: var(--surface-2); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 0; overflow: hidden; box-shadow: 0 24px 60px color-mix(in srgb, var(--ink) 32%, transparent); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 52px; border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 12%, var(--surface-2)) 0 46%, var(--surface-2) 46%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 0; margin: 0; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 18px 1fr auto; padding: 12px 16px; border-radius: 0; border-bottom: 1px solid var(--line); }
  body.scene-landing .hero-visual .visual-row:first-child { background: color-mix(in srgb, var(--accent) 10%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 14px; height: 14px; border-radius: 3px; opacity: 1; background: color-mix(in srgb, var(--accent) 26%, transparent); }
  body.scene-landing .hero-visual .visual-row .num { font-size: 10px; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line); border-radius: 4px; padding: 2px 6px; }
  body.scene-landing .hero-visual .visual-card::after { content: 'komut paleti · 8 satır · esc ile kapanır'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: var(--ink-soft); padding: 10px 16px; border-top: 1px solid var(--line); background: var(--surface-2); }`,
    },
  },
  'timeline-editor': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
        /* imza: kanal şeritleri · 2px playhead · zaman kodu · %14 klip tonu */
        body {
          background-image: repeating-linear-gradient(180deg, color-mix(in srgb, var(--ink) 4%, transparent) 0 1px, transparent 1px 32px);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; }
        h1 { font-size: 38px; line-height: 1.1; max-width: 24ch; }
        h2 { font-size: 26px; line-height: 1.18; }
        h3 { font-size: 18px; line-height: 1.28; }
        .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.55; max-width: 64ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
        .eyebrow::before { content: ''; width: 2px; height: 12px; background: var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 12px; letter-spacing: .08em; text-transform: uppercase; }

        .nav { height: 44px; background: var(--surface-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; font-weight: 500; }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        }
        /* klip bloğu: seçili klip accent %24 */
        .m-tile, .kpi { background: color-mix(in srgb, var(--accent) 8%, var(--surface)); border-color: color-mix(in srgb, var(--accent) 22%, var(--line)); }
        .m-tile:hover, .kpi:hover { background: color-mix(in srgb, var(--accent) 16%, var(--surface)); box-shadow: 0 2px 8px color-mix(in srgb, var(--ink) 12%, transparent); }
        /* playhead: hero görselinde tek dikey çizgi */
        .hero-visual, .visual-card {
          position: relative;
          background-image:
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 12%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px);
          background-size: 64px 100%, 16px 100%;
        }
        .hero-visual::after, .visual-card::after {
          content: ''; position: absolute; top: 0; bottom: 0; left: 42%; width: 2px; background: var(--accent);
        }
        .btn {
          height: 32px; padding: 0 10px; border-radius: var(--radius); border: 1px solid var(--line);
          background: var(--surface-2); color: var(--ink); box-shadow: none;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--surface-2) 88%, var(--ink)); }
        .btn.sm { height: 24px; padding: 0 8px; font-size: 10px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink-soft); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-mono); font-size: 12px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 20%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 40%, transparent); }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .02em; }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); height: 32px; font-variant-numeric: tabular-nums; }
        .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 24%, transparent); border-radius: var(--radius); }
        .line, .divider { background: var(--line); }
        .m-grid {
          background-image:
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px),
            linear-gradient(180deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
          background-size: 64px 100%, 100% 32px; border-radius: var(--radius-lg);
        }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .sig { border-left: 2px solid var(--accent); }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* chip.accent: accent metin / accent-karışımı zemin 4.38–4.51:1 → dolu accent + accent-ink (5.36–6.98:1) */
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 10px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 4px; border-radius: 0; background: var(--line); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--line) 0 34%, var(--accent) 34% 36%, var(--line) 36%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 10px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 16px 1fr auto; padding: 12px 10px; border-left: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); }
  body.scene-landing .hero-visual .visual-row:nth-child(2) { border-left-color: var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 1px; }
  body.scene-landing .hero-visual .visual-card::after { content: '00:00:12:04 · playhead · 2 kanal · snap 1/4'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 10px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 4px; border-radius: 0; background: var(--line); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--line) 0 34%, var(--accent) 34% 36%, var(--line) 36%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 10px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 16px 1fr auto; padding: 12px 10px; border-left: 2px solid color-mix(in srgb, var(--accent) 40%, transparent); }
  body.scene-landing .hero-visual .visual-row:nth-child(2) { border-left-color: var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 1px; }
  body.scene-landing .hero-visual .visual-card::after { content: '00:00:12:04 · playhead · 2 kanal · snap 1/4'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; color: var(--ink-soft); }`,
    },
  },
  'kanban-flow': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* imza: kolon sayacı · 3px kart şeridi · WIP chip · tahta zemini */
        body {
          background-image: radial-gradient(color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
          background-size: 22px 22px;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
        h1 { font-size: 36px; line-height: 1.12; max-width: 26ch; }
        h2 { font-size: 26px; line-height: 1.2; }
        h3 { font-size: 19px; line-height: 1.28; }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.55; max-width: 62ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
        .eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 999px; background: var(--accent); }
        .brand { font-family: var(--font-display); font-size: 14px; font-weight: 600; }

        .nav { height: 52px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 600; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        /* kolon zemini */
        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        .panel, .visual-card { background: var(--bg-2); box-shadow: none; border-style: solid; }
        /* kart: sol 3px etiket şeridi */
        .m-tile, .comp-card-demo, .state-card {
          position: relative; padding-left: 17px; box-shadow: var(--shadow); background: var(--surface);
        }
        .m-tile::before, .comp-card-demo::before, .state-card::before {
          content: ''; position: absolute; left: 0; top: 8px; bottom: 8px; width: 3px;
          border-radius: 999px; background: var(--accent); opacity: .8;
        }
        .kpi { padding-left: 17px; box-shadow: none; background: var(--surface-2); }
        /* kolon başlığı: sayaç */
        .kpi .t, .kpi .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; }
        .btn {
          height: 34px; padding: 0 12px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn.sm { height: 28px; padding: 0 10px; font-size: 12px; }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 14px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 30%, transparent); outline-offset: 1px;
        }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-body); font-size: 11px; font-weight: 600;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 32%, transparent); }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 22%, transparent); border-radius: 999px; }
        .line, .divider { background: var(--line); }
        .m-grid {
          background-image: radial-gradient(color-mix(in srgb, var(--ink) 8%, transparent) 1px, transparent 1px);
          background-size: 22px 22px; border-radius: var(--radius-lg);
        }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
        .sig { box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--accent) 30%, transparent); }
        .hero-visual, .visual-card {
          background-image:
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px);
          background-size: 25% 100%;
        }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 10px; background: var(--bg-2); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 999px; }
  body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 10px; background: var(--surface); border-radius: var(--radius); box-shadow: 0 1px 3px color-mix(in srgb, var(--ink) 12%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: 6px; border-radius: 3px; }
  body.scene-landing .hero-visual .visual-row .line { height: 26px; border-radius: var(--radius); background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--ink-soft); }
  body.scene-landing .hero-visual .visual-card::after { content: 'TODO 3/5 · YAPILIYOR 2/3 · BİTTİ 7/12 — WIP limiti aşılmadı'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 10px; background: var(--bg-2); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 999px; }
  body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 10px; background: var(--surface); border-radius: var(--radius); box-shadow: 0 1px 3px color-mix(in srgb, var(--ink) 12%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: 6px; border-radius: 3px; }
  body.scene-landing .hero-visual .visual-row .line { height: 26px; border-radius: var(--radius); background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--ink-soft); }
  body.scene-landing .hero-visual .visual-card::after { content: 'TODO 3/5 · YAPILIYOR 2/3 · BİTTİ 7/12 — WIP limiti aşılmadı'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }`,
    },
  },
  'step-wizard': {
    motif: 'grid',
    bodyClass: '',
    extraCss: `
        /* imza: dikey numaralı adım rayı · 2/5 mono sayaç · seçenek kartı · tek soru */
        body {
          background-image:
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 4%, transparent) 1px, transparent 1px);
          background-size: 25% 100%;
          background-position: 0 0;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
        h1 { font-size: 40px; line-height: 1.1; max-width: 22ch; }
        h2 { font-size: 28px; line-height: 1.16; }
        h3 { font-size: 20px; line-height: 1.26; }
        .lede { font-size: 16px; line-height: 1.6; max-width: 56ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .eyebrow::before {
          content: ''; width: 20px; height: 2px; background: var(--accent);
        }
        .brand { font-family: var(--font-display); font-size: 14px; font-weight: 600; }
        .nav { height: 56px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .nav-links a { font-size: 14px; font-weight: 600; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        /* adım rayı: panelin solunda 2px dikey çizgi + numaralı noktalar */
        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        .visual-card, .m-grid { background: var(--bg-2); box-shadow: none; }
        .panel { position: relative; padding-left: 30px; }
        .panel::before {
          content: ''; position: absolute; left: 13px; top: 16px; bottom: 16px; width: 2px;
          background: color-mix(in srgb, var(--ink) 12%, transparent);
        }
        .m-tile { position: relative; padding-left: 44px; }
        .m-tile::before {
          content: '1'; position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          width: 22px; height: 22px; border-radius: 999px; border: 1px solid var(--line);
          background: var(--surface-2); color: var(--ink-soft);
          font-family: var(--font-mono); font-size: 11px; line-height: 20px; text-align: center;
        }
        .m-tile:nth-child(2)::before { content: '2'; }
        .m-tile:nth-child(3)::before { content: '3'; }
        .m-tile:nth-child(4)::before { content: '4'; }
        .m-tile:first-child::before {
          background: var(--accent); border-color: var(--accent); color: var(--accent-ink);
        }
        .comp-card-demo, .state-card { background: var(--surface); }

        /* ilerleme: kpi sayacı + %8 zemin seçenek */
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; letter-spacing: 0; }
        .kpi { padding-left: 16px; box-shadow: none; background: var(--surface-2); }
        .kpi .t, .kpi .label { font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; }
        .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 22%, transparent); border-radius: 999px; }
        .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--accent); border-radius: 999px; }

        .btn {
          height: 44px; padding: 0 20px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 14px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 90%, var(--ink)); }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px; min-height: 44px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 28%, transparent); outline-offset: 1px;
        }
        .field.err input, .field.err select { border-color: var(--danger); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-body); font-size: 11px; font-weight: 600;
        }
        .chip.accent {
          background: color-mix(in srgb, var(--accent) 10%, var(--surface)); color: var(--accent);
          border-color: color-mix(in srgb, var(--accent) 30%, transparent);
        }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .mark { background: var(--accent); color: var(--accent-ink); border-radius: 999px; }
        .divider, .line { background: var(--line); }
        .sig { background-image: linear-gradient(180deg, transparent calc(100% - 57px), var(--surface) calc(100% - 57px)); }
        .hero-visual {
          background-image:
            linear-gradient(90deg, color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 1px);
          background-size: 25% 100%;
        }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* içeriksiz dekor bandı: landing sayfasında sabit şerit yok */
        .scene-landing .sig { background-image: none; box-shadow: none; }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; align-content: start; gap: 14px; }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 6px; border-radius: 999px; background: var(--line); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--accent) 0 66%, var(--line) 66%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 14px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 22px 1fr auto; padding: 10px 12px; border: 1px solid var(--line); border-radius: var(--radius); }
  body.scene-landing .hero-visual .visual-row:nth-child(1) { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 20px; height: 20px; border-radius: 999px; }
  body.scene-landing .hero-visual .visual-card::after { content: 'adım 2/5 · ekip büyüklüğü · ileri'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; align-content: start; gap: 14px; }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 6px; border-radius: 999px; background: var(--line); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--accent) 0 66%, var(--line) 66%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 14px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 22px 1fr auto; padding: 10px 12px; border: 1px solid var(--line); border-radius: var(--radius); }
  body.scene-landing .hero-visual .visual-row:nth-child(1) { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 20px; height: 20px; border-radius: 999px; }
  body.scene-landing .hero-visual .visual-card::after { content: 'adım 2/5 · ekip büyüklüğü · ileri'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }`,
    },
  },
  'zero-ui': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* imza: monokrom · 1px hairline · niyet satırı · gölgesiz katman */
        body {
          background-image: none;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: -.005em; }
        h1 { font-size: 44px; line-height: 1.14; max-width: 24ch; }
        h2 { font-size: 30px; line-height: 1.2; }
        h3 { font-size: 21px; line-height: 1.3; }
        .lede { font-size: 16px; line-height: 1.68; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: block; }
        .eyebrow::before { content: none; }
        .brand { font-family: var(--font-display); font-size: 15px; font-weight: 400; }

        .nav {
          height: 52px; background: transparent; border-bottom: 1px solid var(--line);
          border-radius: 0; box-shadow: none;
        }
        .nav-links a { font-size: 14px; color: var(--ink-soft); text-decoration: none; }
        .nav-links a[aria-current], .nav-links a.active {
          color: var(--ink); text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px;
        }

        /* hiçbir kart gölge taşımaz: yalnız hairline */
        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: transparent; border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .visual-card, .m-grid { background: var(--bg-2); border-color: transparent; }
        .comp-card-demo, .state-card { background: var(--surface); }

        /* dolu buton yok: eylemler altı çizili metin */
        .btn {
          height: 40px; padding: 0 0 2px; border-radius: 0; border: 0; border-bottom: 1px solid var(--ink);
          background: transparent; color: var(--ink); box-shadow: none;
          font-family: var(--font-body); font-size: 16px; font-weight: 500;
        }
        .btn:hover { border-bottom-width: 2px; }
        .btn.ghost, .btn.soft { border: 0; border-bottom: 1px solid var(--line); color: var(--ink-soft); }
        .btn.sm { height: 32px; font-size: 14px; }
        .icon-btn { background: transparent; border: 0; color: var(--ink-soft); }

        .field input, .field select, .field textarea {
          border: 0; border-bottom: 1px solid var(--line); border-radius: 0;
          background: transparent; font-family: var(--font-body); font-size: 16px; min-height: 44px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          outline: 0; border-bottom: 2px solid var(--ink);
        }
        .field.err input, .field.err select { border-bottom-color: var(--danger); }

        /* niyet satırı: ekranın tek vurgusu */
        .hint, .muted { font-family: var(--font-mono); font-size: 12px; color: var(--ink-faint); }
        .chip {
          background: transparent; border: 1px solid var(--line); border-radius: 2px;
          font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft);
        }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
        .kpi .num, .num { font-family: var(--font-display); font-weight: 400; font-variant-numeric: tabular-nums; letter-spacing: 0; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .bar:not(.accent):not(.w70):not(.w45) { background: var(--line); border-radius: 0; height: 2px; }
        .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--ink); border-radius: 0; }
        .divider, .line { background: var(--line); height: 1px; }
        .mark { background: var(--ink); color: var(--bg); }
        .m-grid { background-image: none; border-radius: var(--radius-lg); }
        .hero-visual {
          background-image: none; border: 1px solid var(--line); border-radius: var(--radius-lg);
        }
        .sig { background: none; }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-bottom-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 26px; display: grid; align-content: start; gap: 20px; border: 1px solid var(--line); background: transparent; }
  body.scene-landing .hero-visual { min-height: 350px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 1px; border-radius: 0; background: var(--line); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--ink) 0 28%, var(--line) 28%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 18px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 1fr auto; padding: 0 0 14px; border-radius: 0; border-bottom: 1px solid var(--line); }
  body.scene-landing .hero-visual .visual-row .sq { display: none; }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-body); font-size: 11px; color: var(--ink-soft); }
  body.scene-landing .hero-visual .visual-card::after { content: 'niyet satırı — yalnız bir eylem; alt çizgi odakta kalınlaşır'; font-family: var(--font-body); font-size: 12px; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 26px; display: grid; align-content: start; gap: 20px; border: 1px solid var(--line); background: transparent; }
  body.scene-landing .hero-visual { min-height: 350px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 1px; border-radius: 0; background: var(--line); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--ink) 0 28%, var(--line) 28%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 18px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 1fr auto; padding: 0 0 14px; border-radius: 0; border-bottom: 1px solid var(--line); }
  body.scene-landing .hero-visual .visual-row .sq { display: none; }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-body); font-size: 11px; color: var(--ink-soft); }
  body.scene-landing .hero-visual .visual-card::after { content: 'niyet satırı — yalnız bir eylem; alt çizgi odakta kalınlaşır'; font-family: var(--font-body); font-size: 12px; color: var(--ink-soft); }`,
    },
  },
  'notebook-repl': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* imza: In[n] oluğu · Out bloğu · kernel noktası · mono kod */
        body { background-image: none; }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: -.02em; }
        h1 { font-size: 36px; line-height: 1.16; max-width: 24ch; }
        h2 { font-size: 26px; line-height: 1.22; }
        h3 { font-size: 19px; line-height: 1.28; }
        .lede { font-size: 15px; line-height: 1.58; max-width: 66ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
        .eyebrow::before {
          content: ''; width: 6px; height: 6px; background: var(--accent); border-radius: 1px;
        }
        .brand { font-family: var(--font-display); font-size: 14px; font-weight: 700; }

        .nav { height: 48px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .nav-links a { font-family: var(--font-mono); font-size: 12px; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        /* hücre: beyaz yüzey + sol yürütme oluğu */
        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        .panel, .card, .comp-card-demo { position: relative; padding-left: 46px; }
        .state-card { position: relative; padding-left: 38px; }
        .panel::before, .card::before, .comp-card-demo::before, .state-card::before {
          content: 'In ['; position: absolute; left: 10px; top: 12px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .04em; color: var(--ink-faint);
        }
        .panel::after, .card::after, .comp-card-demo::after, .state-card::after {
          content: ']:'; position: absolute; left: 34px; top: 12px;
          font-family: var(--font-mono); font-size: 10px; color: var(--ink-faint);
        }
        .m-tile { position: relative; padding-left: 46px; background: var(--surface-2); box-shadow: none; }
        .m-tile::before {
          content: 'Out'; position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
          font-family: var(--font-mono); font-size: 10px; color: var(--ink-faint);
        }
        .visual-card, .m-grid { background: var(--bg-2); box-shadow: none; }
        .kpi { background: var(--surface-2); box-shadow: none; padding-left: 16px; }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; }

        /* çıktı bloğu */
        .code, code, pre {
          font-family: var(--font-mono); font-size: 12px; color: var(--ink);
          background: var(--surface-2); border-left: 2px solid var(--accent); padding: 2px 6px;
        }
        .btn {
          height: 32px; padding: 0 12px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn.sm { height: 26px; padding: 0 8px; font-family: var(--font-mono); font-size: 11px; }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-mono); font-size: 13px; min-height: 36px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 26%, transparent); outline-offset: 1px;
        }
        .field.err input, .field.err select { border-color: var(--danger); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft);
        }
        .chip.accent {
          background: color-mix(in srgb, var(--accent) 12%, var(--surface)); color: var(--accent);
          border-color: color-mix(in srgb, var(--accent) 34%, transparent);
        }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
        .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 18%, transparent); border-radius: 2px; height: 4px; }
        .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--accent); border-radius: 2px; }
        .divider, .line { background: var(--line); height: 1px; }
        .mark { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); }
        .m-grid {
          background-image:
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
          background-size: 100% 24px; border-radius: var(--radius-lg);
        }
        .hero-visual {
          background-image:
            linear-gradient(90deg, color-mix(in srgb, var(--accent) 30%, transparent) 2px, transparent 2px),
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
          background-size: 46px 100%, 100% 24px;
        }
        .sig { background-image: linear-gradient(0deg, color-mix(in srgb, var(--accent) 10%, transparent) 0 24px, transparent 24px); }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        /* dar kartta oluk başlığa giriyordu: .state-card için 38px oluk + 4/22px etiket */
        .state-card::before { left: 4px; }
        .state-card::after { left: 22px; }
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* chip.accent: accent metin / accent-karışımı zemin 4.38–4.51:1 → dolu accent + accent-ink (5.36–6.98:1) */
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px 20px; display: grid; align-content: start; gap: 12px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-rows { gap: 12px; }
  body.scene-landing .hero-visual .visual-row { position: relative; grid-template-columns: 1fr auto; padding: 10px 10px 10px 42px; background: var(--surface-2); border-radius: var(--radius); border-left: 2px solid var(--accent); }
  body.scene-landing .hero-visual .visual-row .sq { display: none; }
  body.scene-landing .hero-visual .visual-row::before { content: 'In ['; position: absolute; left: 8px; top: 10px; font-family: var(--font-mono); font-size: 10px; color: var(--ink-soft); }
  body.scene-landing .hero-visual .visual-card::after { content: 'Out[3]: 4 çekirdek · 128 GB · süre 00:04:12 — hata yok'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px 20px; display: grid; align-content: start; gap: 12px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-rows { gap: 12px; }
  body.scene-landing .hero-visual .visual-row { position: relative; grid-template-columns: 1fr auto; padding: 10px 10px 10px 42px; background: var(--surface-2); border-radius: var(--radius); border-left: 2px solid var(--accent); }
  body.scene-landing .hero-visual .visual-row .sq { display: none; }
  body.scene-landing .hero-visual .visual-row::before { content: 'In ['; position: absolute; left: 8px; top: 10px; font-family: var(--font-mono); font-size: 10px; color: var(--ink-soft); }
  body.scene-landing .hero-visual .visual-card::after { content: 'Out[3]: 4 çekirdek · 128 GB · süre 00:04:12 — hata yok'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }`,
    },
  },
  'multiplayer-presence': {
    motif: 'blob',
    bodyClass: '',
    extraCss: `
        /* imza: canlı imleç · avatar yığını · uzak seçim vurgusu · presence hapı */
        body {
          background-image:
            radial-gradient(46% 38% at 78% 6%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 70%);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
        h1 { font-size: 42px; line-height: 1.08; max-width: 22ch; }
        h2 { font-size: 29px; line-height: 1.18; }
        h3 { font-size: 21px; line-height: 1.24; }
        .lede { font-size: 16px; line-height: 1.62; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .05em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .eyebrow::before {
          content: ''; width: 8px; height: 8px; border-radius: 999px; background: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent);
        }
        .brand { font-family: var(--font-display); font-size: 17px; font-weight: 600; }

        .nav { height: 56px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .nav-links a { font-family: var(--font-body); font-size: 15px; font-weight: 700; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        /* avatar yığını */
        .avatar {
          width: 28px; height: 28px; border-radius: 999px; background: var(--surface-2);
          border: 2px solid var(--surface); color: var(--ink); font-family: var(--font-body);
          font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink) 12%, transparent);
        }
        .avatar + .avatar { margin-left: -10px; }
        .who { display: inline-flex; align-items: center; gap: 8px; }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        .visual-card, .m-grid { background: var(--bg-2); box-shadow: none; }
        /* uzak seçim: uzaktan birinin baktığı/düzenlediği kart */
        .comp-card-demo, .state-card {
          position: relative;
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 34%, transparent), var(--shadow);
          background: color-mix(in srgb, var(--accent) 6%, var(--surface));
        }
        .comp-card-demo::after, .state-card::after {
          content: '● 3 kişi düzenliyor'; position: absolute; right: 12px; top: 12px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .04em; color: var(--accent);
        }
        .kpi { position: relative; background: var(--surface-2); box-shadow: none; }

        /* canlı imleç bayrağı */
        .hero-visual {
          background-image:
            linear-gradient(180deg, color-mix(in srgb, var(--accent) 16%, transparent) 0 2px, transparent 2px),
            radial-gradient(circle at 22% 34%, color-mix(in srgb, var(--accent) 22%, transparent) 0 5px, transparent 5px),
            radial-gradient(circle at 68% 62%, color-mix(in srgb, var(--accent) 16%, transparent) 0 5px, transparent 5px);
          background-repeat: no-repeat;
        }
        .btn {
          height: 40px; padding: 0 18px; border-radius: 999px; border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 15px; font-weight: 700;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 90%, var(--ink)); }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn.sm { height: 32px; padding: 0 14px; font-size: 13px; }
        .field input, .field select, .field textarea {
          border-radius: 999px; background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px; min-height: 40px; padding: 0 16px;
        }
        .field textarea { border-radius: var(--radius-lg); padding: 12px 16px; }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 3px solid color-mix(in srgb, var(--accent) 22%, transparent); outline-offset: 1px;
        }
        .field.err input, .field.err select { border-color: var(--danger); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-body); font-size: 12px; font-weight: 700;
        }
        .chip.accent {
          background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent);
          border-color: color-mix(in srgb, var(--accent) 36%, transparent);
        }
        .kpi .num, .num { font-family: var(--font-display); font-weight: 600; font-variant-numeric: tabular-nums; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .05em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 18%, transparent); border-radius: 999px; }
        .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--accent); border-radius: 999px; }
        .divider, .line { background: var(--line); height: 1px; }
        .mark { background: color-mix(in srgb, var(--accent) 20%, transparent); color: var(--accent); }
        .m-grid {
          background-image:
            radial-gradient(color-mix(in srgb, var(--accent) 22%, transparent) 1px, transparent 1px);
          background-size: 26px 26px; border-radius: var(--radius-lg);
        }
        .sig { box-shadow: inset 0 -2px 0 color-mix(in srgb, var(--accent) 30%, transparent); }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        /* varlık rozeti ::after (right 12/top 12) başlık çipiyle çakışıyordu: üstte 34px pay */
        .comp-card-demo, .state-card { padding-top: 34px; }
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 14px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 999px; }
  body.scene-landing .hero-visual .visual-rows { gap: 12px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 28px 1fr auto; padding: 8px 10px; border: 1px solid var(--line); border-radius: 999px; }
  body.scene-landing .hero-visual .visual-row .sq { width: 26px; height: 26px; border-radius: 999px; border: 2px solid var(--surface); box-shadow: 0 0 0 1px var(--line); }
  body.scene-landing .hero-visual .visual-row:nth-child(2) .sq { background: color-mix(in srgb, var(--accent) 55%, var(--surface-2)); }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; }
  body.scene-landing .hero-visual .visual-card::after { content: '3 kişi düzenliyor · imleçler canlı · DÜZENLİYOR'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 14px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 999px; }
  body.scene-landing .hero-visual .visual-rows { gap: 12px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 28px 1fr auto; padding: 8px 10px; border: 1px solid var(--line); border-radius: 999px; }
  body.scene-landing .hero-visual .visual-row .sq { width: 26px; height: 26px; border-radius: 999px; border: 2px solid var(--surface); box-shadow: 0 0 0 1px var(--line); }
  body.scene-landing .hero-visual .visual-row:nth-child(2) .sq { background: color-mix(in srgb, var(--accent) 55%, var(--surface-2)); }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; letter-spacing: .1em; }
  body.scene-landing .hero-visual .visual-card::after { content: '3 kişi düzenliyor · imleçler canlı · DÜZENLİYOR'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); }`,
    },
  },
  'keyboard-first': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* imza: tuş başlığı (kbd) · sabit komut satırı · odak halkası · 2px seçim şeridi */
        body {
          background-image:
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px),
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px);
          background-size: 88px 88px;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: .01em; }
        h1 { font-size: 34px; line-height: 1.05; max-width: 26ch; text-transform: none; }
        h2 { font-size: 24px; line-height: 1.14; }
        h3 { font-size: 18px; line-height: 1.2; }
        .lede { font-size: 14px; line-height: 1.52; max-width: 70ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
        .eyebrow::before {
          content: '>'; font-family: var(--font-mono); color: var(--accent); font-size: 12px; line-height: 1;
        }
        .brand { font-family: var(--font-display); font-size: 15px; font-weight: 700; letter-spacing: .04em; }

        .nav {
          height: 44px; background: var(--bg-2); border-bottom: 1px solid var(--line);
          border-radius: 0; box-shadow: none;
        }
        .nav-links a { font-family: var(--font-mono); font-size: 12px; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active {
          color: var(--accent); text-decoration: underline; text-underline-offset: 5px; text-decoration-thickness: 2px;
        }

        /* tuş başlığı: mono, 4px radius, sert alt gölge */
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; color: var(--ink);
          box-shadow: var(--shadow-hard); padding: 0 6px;
        }
        .chip.accent {
          background: var(--accent); color: var(--accent-ink); border-color: var(--accent);
          box-shadow: 0 2px 0 color-mix(in srgb, var(--accent) 55%, var(--bg));
        }
        .hint {
          font-family: var(--font-mono); font-size: 11px; color: var(--ink-faint);
          border-left: 2px solid var(--line); padding-left: 8px;
        }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .panel, .kpi { background: var(--bg-2); }
        .visual-card, .m-grid { background: var(--bg-2); }
        /* seçili satır: sol 2px accent şerit */
        .comp-card-demo, .state-card, .m-tile { position: relative; padding-left: 16px; }
        .comp-card-demo::before, .state-card::before, .m-tile::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent);
        }
        .m-tile { box-shadow: none; background: var(--surface-2); }

        .btn {
          height: 32px; padding: 0 12px; border-radius: var(--radius); border: 1px solid var(--line);
          background: var(--surface-2); color: var(--ink); box-shadow: none;
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
        }
        .btn:hover { border-color: var(--accent); color: var(--accent); }
        .btn:active { transform: translateY(2px); }
        .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink-soft); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); color: var(--ink); }
        .btn.sm { height: 26px; padding: 0 8px; font-family: var(--font-mono); font-size: 11px; }

        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line);
          font-family: var(--font-mono); font-size: 13px; min-height: 34px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 30%, transparent); outline-offset: 1px;
        }
        .field.err input, .field.err select { border-color: var(--danger); }
        .kpi .num, .num { font-family: var(--font-mono); font-weight: 600; font-variant-numeric: tabular-nums; letter-spacing: -.01em; }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); font-family: var(--font-mono); font-size: 12px; }
        .table tr:hover td { background: var(--surface-2); }
        .bar:not(.accent):not(.w70):not(.w45) { background: color-mix(in srgb, var(--accent) 20%, transparent); border-radius: 1px; height: 4px; }
        .bar:not(.accent):not(.w70):not(.w45) > * { background: var(--accent); border-radius: 1px; }
        .divider, .line { background: var(--line); height: 1px; }
        .mark { background: var(--accent); color: var(--accent-ink); border-radius: var(--radius); }
        .m-grid {
          background-image:
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px),
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px);
          background-size: 44px 44px; border-radius: var(--radius-lg);
        }
        .hero-visual {
          background-image:
            linear-gradient(0deg, color-mix(in srgb, var(--accent) 34%, transparent) 2px, transparent 2px);
          background-repeat: no-repeat; background-position: bottom; background-size: 100% 6px;
          border: 1px solid var(--line); border-radius: var(--radius-lg);
        }
        .sig { box-shadow: inset 0 -32px 0 color-mix(in srgb, var(--bg-2) 92%, transparent); }
        /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border: 1px solid color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* içeriksiz dekor bandı: landing sayfasında sabit şerit yok */
        .scene-landing .sig { background-image: none; box-shadow: none; }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 0; display: grid; align-content: start; gap: 0; background: var(--bg-2); }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 34px; border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: var(--surface); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--surface) 0 88%, var(--surface-2) 88%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 0; margin: 0; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 14px 1fr auto; padding: 9px 14px; border-radius: 0; border-bottom: 1px solid var(--line); }
  body.scene-landing .hero-visual .visual-row:first-child { border-left: 2px solid var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 1px; background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line); border-radius: 3px; padding: 1px 5px; }
  body.scene-landing .hero-visual .visual-card::after { content: '> ara · K komut · ENTER seç · ↑↓ gez · ? yardım'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); padding: 9px 14px; }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 0; display: grid; align-content: start; gap: 0; background: var(--bg-2); }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 34px; border-radius: 0; border: 0; border-bottom: 1px solid var(--line); background: var(--surface); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 100%; background: linear-gradient(90deg, var(--surface) 0 88%, var(--surface-2) 88%); }
  body.scene-landing .hero-visual .visual-card .bar.w70, body.scene-landing .hero-visual .visual-card .bar.w45 { display: none; }
  body.scene-landing .hero-visual .visual-rows { gap: 0; margin: 0; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 14px 1fr auto; padding: 9px 14px; border-radius: 0; border-bottom: 1px solid var(--line); }
  body.scene-landing .hero-visual .visual-row:first-child { border-left: 2px solid var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 10px; height: 10px; border-radius: 1px; background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 9px; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line); border-radius: 3px; padding: 1px 5px; }
  body.scene-landing .hero-visual .visual-card::after { content: '> ara · K komut · ENTER seç · ↑↓ gez · ? yardım'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); padding: 9px 14px; }`,
    },
  },
  'kids-playground': {
    motif: 'blob',
    bodyClass: '',
    extraCss: `
        /* imza: 18px yuvarlak blok · tek kalın gölge (blur 0) · 60px hedef · renk blokları ≤%12 */
        h1 { font-size: 56px; line-height: 1.06; font-weight: 700; font-family: var(--font-display); letter-spacing: 0; max-width: 18ch; }
        h2 { font-size: 34px; line-height: 1.14; font-weight: 700; }
        h3 { font-size: 22px; line-height: 1.28; font-weight: 700; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 19px; line-height: 1.6; color: var(--ink-soft); max-width: 54ch; }
        .eyebrow, .label, .mono, .kpi small { font-family: var(--font-mono); font-size: 13px; letter-spacing: .06em; }
        .brand { font-family: var(--font-display); font-weight: 700; font-size: 24px; }

        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
          border-radius: var(--radius-lg); border: 0; background: var(--surface); box-shadow: var(--shadow);
        }
        .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 20px; }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 60px; font-weight: 700; box-shadow: var(--shadow); }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 2px solid var(--line); box-shadow: none; }
        .btn:hover { transform: translateY(-2px); }
        .btn:active { transform: translateY(2px); box-shadow: none; }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 2px solid var(--line); min-height: 60px; }
        .field.focus, input:focus { outline: 3px solid var(--accent); outline-offset: 3px; }
        .chip { border-radius: var(--radius); background: var(--surface-2); border: 0; font-family: var(--font-body); font-weight: 700; font-size: 13px; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); }
        .kpi strong, .counter { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-size: 20px; }
        .kpi { padding: 20px 22px; }
        .m-tile:nth-child(3n + 1) { background: var(--surface-2); }
        .m-tile:nth-child(3n + 2) { background: color-mix(in srgb, var(--surface-2) 60%, var(--surface)); }
        .nav { border-bottom: 2px solid var(--line); min-height: 72px; }
        .nav-links a { font-weight: 700; font-size: 15px; }
        @media (max-width: 900px) {
          h1 { font-size: 34px; }
          h2 { font-size: 26px; }
          .btn, .field, input, select, textarea { min-height: 56px; }
          .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 14px; }
        }
            /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; align-content: start; gap: 14px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 16px; border-radius: var(--radius); border: 0; background: var(--accent); }
  body.scene-landing .hero-visual .visual-card .bar.w70 { width: 32%; background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-card .bar.w45 { width: 20%; background: color-mix(in srgb, var(--surface-2) 70%, var(--surface)); }
  body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 6px; padding: 14px 12px; background: var(--surface-2); border-radius: var(--radius); box-shadow: var(--shadow); text-align: center; }
  body.scene-landing .hero-visual .visual-row .sq { width: 32px; height: 32px; margin: 0 auto; border-radius: 999px; }
  body.scene-landing .hero-visual .visual-row .line { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--ink) 14%, transparent); }
  body.scene-landing .hero-visual .visual-row .num { font-size: 15px; font-weight: 700; color: var(--ink); }
  body.scene-landing .hero-visual .visual-card::after { content: '3 blok tamam · 12 yıldız · sıradaki: renkleri eşleştir'; font-family: var(--font-mono); font-size: 13px; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px; display: grid; align-content: start; gap: 14px; }
  body.scene-landing .hero-visual { min-height: 360px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 16px; border-radius: var(--radius); border: 0; background: var(--accent); }
  body.scene-landing .hero-visual .visual-card .bar.w70 { width: 32%; background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-card .bar.w45 { width: 20%; background: color-mix(in srgb, var(--surface-2) 70%, var(--surface)); }
  body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 6px; padding: 14px 12px; background: var(--surface-2); border-radius: var(--radius); box-shadow: var(--shadow); text-align: center; }
  body.scene-landing .hero-visual .visual-row .sq { width: 32px; height: 32px; margin: 0 auto; border-radius: 999px; }
  body.scene-landing .hero-visual .visual-row .line { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--ink) 14%, transparent); }
  body.scene-landing .hero-visual .visual-row .num { font-size: 15px; font-weight: 700; color: var(--ink); }
  body.scene-landing .hero-visual .visual-card::after { content: '3 blok tamam · 12 yıldız · sıradaki: renkleri eşleştir'; font-family: var(--font-mono); font-size: 13px; color: var(--ink-soft); }`,
    },
  },
  'carnival-festival': {
    motif: 'dots',
    bodyClass: 'upper',
    extraCss: `
        /* imza: tek satır Anton bant başlık · 8px renk şeridi · bilet perforasyonu · 0–4px radius */
        h1 { font-size: 72px; line-height: .94; letter-spacing: -.01em; font-weight: 400; font-family: var(--font-display); text-transform: uppercase; max-width: 20ch; }
        h2 { font-size: 40px; line-height: 1.0; letter-spacing: 0; font-weight: 400; text-transform: uppercase; }
        h3 { font-size: 22px; line-height: 1.16; font-weight: 700; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 18px; line-height: 1.55; max-width: 52ch; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-size: 24px; text-transform: uppercase; letter-spacing: -.01em; }

        /* şerit bandı: 8px, metinsiz, ekran başına en fazla 3 */
        .sec::before {
          content: ""; display: block; height: 8px; border-radius: 0;
          background-image: repeating-linear-gradient(45deg, var(--accent) 0 16px, var(--ink) 16px 32px, var(--surface-2) 32px 48px);
          pointer-events: none;
        }
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card {
          border-radius: var(--radius-lg); border: 1px solid var(--ink); background: var(--surface); box-shadow: none;
        }
        /* bilet bloğu: 2px kesikli kenar */
        .plan, .auth-card { border: 2px dashed var(--ink); border-radius: var(--radius-lg); }
        .plan:hover, .auth-card:hover { box-shadow: var(--shadow-hard); transform: translate(-1px, -1px); }
        .btn { border-radius: 0; background: var(--accent); color: var(--accent-ink); border: 0; min-height: 52px; font-family: var(--font-body); font-weight: 700; font-size: 13px; letter-spacing: .06em; text-transform: uppercase; }
        .btn.ghost, .btn.soft { background: var(--bg); color: var(--ink); border: 2px solid var(--ink); }
        .btn:hover { transform: translateY(2px); }
        .field, input, select, textarea { border-radius: var(--radius-lg); background: var(--surface); border: 2px solid var(--line); }
        .field.focus, input:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
        .chip { border-radius: 0; background: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; padding: 4px 10px; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); }
        .kpi strong, .counter, .price { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
        .nav { border-bottom: 2px solid var(--ink); min-height: 60px; }
        .nav-links a { font-weight: 700; font-size: 13px; letter-spacing: .06em; text-transform: uppercase; }
        .sec { padding-top: 28px; }
        @media (max-width: 900px) {
          h1 { font-size: 40px; max-width: 16ch; }
          h2 { font-size: 26px; }
          .sig::before, .sec::before { height: 6px; }
        }
            /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 10px; border-radius: 4px; }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 0; border: 0; background: var(--accent); }
  body.scene-landing .hero-visual .visual-card .bar.w70 { width: 66%; background: var(--ink); }
  body.scene-landing .hero-visual .visual-card .bar.w45 { width: 33%; background: color-mix(in srgb, var(--accent) 60%, var(--ink)); }
  body.scene-landing .hero-visual .visual-rows { gap: 0; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 58px 1fr auto; padding: 12px 10px; border-radius: 0; border-bottom: 1px solid var(--line); }
  body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: auto; border-radius: 0; background: transparent; }
  body.scene-landing .hero-visual .visual-row .sq::before { font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); }
  body.scene-landing .hero-visual .visual-row:nth-child(1) .sq::before { content: '20:30'; }
  body.scene-landing .hero-visual .visual-row:nth-child(2) .sq::before { content: '22:00'; }
  body.scene-landing .hero-visual .visual-row:nth-child(3) .sq::before { content: '23:30'; }
  body.scene-landing .hero-visual .visual-row .line { height: 10px; border-radius: 2px; }
  body.scene-landing .hero-visual .visual-card::after { content: 'ANA SAHNE · BAHÇE · KAPANIŞ — bilet: 4px radius, 2px kesikli kenar'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); border-top: 2px solid var(--accent); padding-top: 10px; }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 10px; border-radius: 4px; }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 8px; border-radius: 0; border: 0; background: var(--accent); }
  body.scene-landing .hero-visual .visual-card .bar.w70 { width: 66%; background: var(--ink); }
  body.scene-landing .hero-visual .visual-card .bar.w45 { width: 33%; background: color-mix(in srgb, var(--accent) 60%, var(--ink)); }
  body.scene-landing .hero-visual .visual-rows { gap: 0; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 58px 1fr auto; padding: 12px 10px; border-radius: 0; border-bottom: 1px solid var(--line); }
  body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: auto; border-radius: 0; background: transparent; }
  body.scene-landing .hero-visual .visual-row .sq::before { font-family: var(--font-mono); font-size: 11px; color: var(--ink-soft); }
  body.scene-landing .hero-visual .visual-row:nth-child(1) .sq::before { content: '20:30'; }
  body.scene-landing .hero-visual .visual-row:nth-child(2) .sq::before { content: '22:00'; }
  body.scene-landing .hero-visual .visual-row:nth-child(3) .sq::before { content: '23:30'; }
  body.scene-landing .hero-visual .visual-row .line { height: 10px; border-radius: 2px; }
  body.scene-landing .hero-visual .visual-card::after { content: 'ANA SAHNE · BAHÇE · KAPANIŞ — bilet: 4px radius, 2px kesikli kenar'; font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink-soft); border-top: 2px solid var(--accent); padding-top: 10px; }`,
    },
  },
  'sticker-sheet': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
        /* imza: 6px die-cut halka · 2px ofset gölge · −10°…40° rotasyon · hover'da 8px kalkma */
        h1 { font-size: 44px; line-height: 1.1; letter-spacing: -.01em; font-weight: 900; font-family: var(--font-display); max-width: 20ch; }
        h2 { font-size: 26px; line-height: 1.16; font-weight: 900; }
        h3 { font-size: 20px; line-height: 1.28; font-weight: 700; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 18px; line-height: 1.6; color: var(--ink-soft); max-width: 58ch; }
        .eyebrow, .label, .mono, .counter { font-family: var(--font-mono); font-size: 12px; letter-spacing: .08em; }
        .brand { font-family: var(--font-display); font-weight: 900; font-size: 22px; }

        /* die-cut çıkartma: halka + ofset gölge */
        .panel, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .m-tile {
          border-radius: var(--radius); background: var(--surface);
          border: 6px solid var(--surface); box-shadow: var(--shadow);
        }
        .visual-card, .m-tile { border-radius: var(--radius-lg); }
        .m-grid, .comp-grid, .quad, .plan-grid, .data-grid { gap: 22px; }
        /* rotasyon: sayfa başına en fazla 6; sırayla dağıt */
        .m-tile:nth-child(6n + 1) { transform: rotate(-4deg); }
        .m-tile:nth-child(6n + 2) { transform: rotate(3deg); }
        .m-tile:nth-child(6n + 3) { transform: rotate(-7deg); }
        .m-tile:nth-child(6n + 4) { transform: rotate(6deg); }
        .m-tile:nth-child(6n + 5) { transform: rotate(-2deg); }
        .m-tile:nth-child(6n + 6) { transform: rotate(9deg); }
        .m-tile:hover { transform: translateY(-8px) rotate(0deg); }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 52px; font-weight: 700; font-size: 15px; box-shadow: var(--shadow); }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 2px solid var(--line); box-shadow: none; }
        .btn:hover { box-shadow: var(--shadow); transform: translateY(-8px); }
        .btn:active { transform: scale(.94); box-shadow: none; }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 2px solid var(--line); }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 4px; }
        .chip { border-radius: var(--radius); background: var(--surface-2); border: 0; font-family: var(--font-body); font-size: 13px; padding: 4px 10px; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); }
        .counter { font-variant-numeric: tabular-nums; }
        .divider, hr { border: 0; border-top: 1px dashed var(--line); height: 0; }
        .nav { border-bottom: 2px solid var(--line); min-height: 64px; }
        .nav-links a { font-weight: 700; font-size: 15px; }
        @media (max-width: 900px) {
          h1 { font-size: 28px; }
          h2 { font-size: 22px; }
          .panel, .comp-card, .plan, .kpi, .visual-card, .m-tile { border-width: 4px; }
          .m-tile { transform: none; }
        }
            /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 12px; background: var(--surface-2); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: 999px; border: 0; background: var(--surface); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 46%; background: var(--accent); }
  body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 16px 12px; background: var(--surface); border-radius: var(--radius-lg); border: 6px solid var(--surface); box-shadow: 2px 2px 0 color-mix(in srgb, var(--ink) 18%, transparent); text-align: center; }
  body.scene-landing .hero-visual .visual-row:nth-child(1) { transform: rotate(-4deg); }
  body.scene-landing .hero-visual .visual-row:nth-child(2) { transform: rotate(3deg); }
  body.scene-landing .hero-visual .visual-row:nth-child(3) { transform: rotate(-2deg); }
  body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: 42px; border-radius: var(--radius); }
  body.scene-landing .hero-visual .visual-row .line { height: 6px; border-radius: 3px; }
  body.scene-landing .hero-visual .visual-card::after { content: '12/24 çıkartma · 6 sayfa · kes-yeri: 1px kesikli çizgi'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 20px; display: grid; align-content: start; gap: 12px; background: var(--surface-2); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: 999px; border: 0; background: var(--surface); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 46%; background: var(--accent); }
  body.scene-landing .hero-visual .visual-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  body.scene-landing .hero-visual .visual-row { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 16px 12px; background: var(--surface); border-radius: var(--radius-lg); border: 6px solid var(--surface); box-shadow: 2px 2px 0 color-mix(in srgb, var(--ink) 18%, transparent); text-align: center; }
  body.scene-landing .hero-visual .visual-row:nth-child(1) { transform: rotate(-4deg); }
  body.scene-landing .hero-visual .visual-row:nth-child(2) { transform: rotate(3deg); }
  body.scene-landing .hero-visual .visual-row:nth-child(3) { transform: rotate(-2deg); }
  body.scene-landing .hero-visual .visual-row .sq { width: 100%; height: 42px; border-radius: var(--radius); }
  body.scene-landing .hero-visual .visual-row .line { height: 6px; border-radius: 3px; }
  body.scene-landing .hero-visual .visual-card::after { content: '12/24 çıkartma · 6 sayfa · kes-yeri: 1px kesikli çizgi'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }`,
    },
  },
  'arcade-8bit': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
        /* imza: pixel display (≤3 satır) · 4px köşe kırpma · statik CRT taraması · tek neon mint */
        h1 { font-size: 32px; line-height: 1.4; letter-spacing: 0; font-weight: 400; font-family: var(--font-display); max-width: 22ch; }
        h2 { font-size: 24px; line-height: 1.4; font-weight: 400; }
        h3 { font-size: 20px; line-height: 1.35; font-weight: 500; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 17px; line-height: 1.62; color: var(--ink-soft); max-width: 68ch; }
        .eyebrow, .label, .mono, .score { font-family: var(--font-mono); font-size: 20px; letter-spacing: 0; }
        .brand { font-family: var(--font-display); font-size: 14px; letter-spacing: .12em; text-transform: uppercase; }

        /* köşe kırpma: 4px */
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .m-tile {
          border-radius: 0; border: 1px solid var(--line); background: var(--surface); box-shadow: none;
          clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%);
        }
        /* statik CRT taraması: 1px / 3px, yalnız bölüm zemininde */
        .sec, .art-body {
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 4%, transparent) 0 1px, transparent 1px 3px);
        }
        .btn { border-radius: 0; background: var(--accent); color: var(--accent-ink); border: 0; min-height: 48px; font-family: var(--font-display); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
          clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%); }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .btn:active { transform: translateY(2px); }
        .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 16px; }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
        .chip { border-radius: 0; background: var(--surface-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); }
        .kpi strong, .counter, .score-value { font-family: var(--font-mono); font-size: 20px; font-variant-numeric: tabular-nums; }
        table td.num, .kpi strong { text-align: right; }
        .nav { border-bottom: 1px solid var(--line); min-height: 56px; }
        .nav-links a { font-family: var(--font-display); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; }
        @media (max-width: 900px) {
          h1 { font-size: 20px; }
          h2 { font-size: 16px; }
          .sec, .art-body { background-image: none; }
        }
            /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 12px; background: var(--bg-2); clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: 0; border: 0; background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 42%; background: var(--accent); }
  body.scene-landing .hero-visual .visual-rows { gap: 6px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 26px 1fr auto; padding: 8px 10px; border-radius: 0; background: color-mix(in srgb, var(--surface-2) 70%, transparent); border-left: 3px solid var(--accent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 0; clip-path: polygon(0 0, 100% 0, 100% 60%, 60% 100%, 0 100%); }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--accent); }
  body.scene-landing .hero-visual .visual-card::after { content: '1UP 001250 TAKEOFF HIP-SCORE — press start'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 18px; display: grid; align-content: start; gap: 12px; background: var(--bg-2); clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card .bar { height: 10px; border-radius: 0; border: 0; background: var(--surface-2); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 42%; background: var(--accent); }
  body.scene-landing .hero-visual .visual-rows { gap: 6px; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 26px 1fr auto; padding: 8px 10px; border-radius: 0; background: color-mix(in srgb, var(--surface-2) 70%, transparent); border-left: 3px solid var(--accent); }
  body.scene-landing .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 0; clip-path: polygon(0 0, 100% 0, 100% 60%, 60% 100%, 0 100%); }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--accent); }
  body.scene-landing .hero-visual .visual-card::after { content: '1UP 001250 TAKEOFF HIP-SCORE — press start'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 10px; }`,
    },
  },
  'craft-handmade': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* imza: kraft doku · sol kenarda kesikli dikiş · 4px radius · gölgesiz katman */
        h1 { font-size: 52px; line-height: 1.08; letter-spacing: .01em; font-weight: 700; font-family: var(--font-display); max-width: 16ch; }
        h2 { font-size: 32px; line-height: 1.16; letter-spacing: 0; font-weight: 700; }
        h3 { font-size: 20px; line-height: 1.3; font-weight: 700; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 18px; line-height: 1.66; color: var(--ink-soft); max-width: 48ch; }
        .eyebrow, .label, .mono, .price { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .14em; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-weight: 700; font-size: 24px; }

        /* kraft dokusu: grain + ince kâğıt çizgisi */
        .sig::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: var(--grain);
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 22%, transparent) 0 1px, transparent 1px 7px);
        }
        /* dikiş çizgisi: sol kenar, ekran başına 1 */
        .sig::before {
          content: ""; position: absolute; left: 24px; top: 96px; bottom: 96px; width: 0;
          border-left: 2px dashed var(--line); pointer-events: none;
        }
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .m-tile {
          border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); box-shadow: none;
        }
        .visual-card, .hero-visual { position: relative; overflow: hidden; }
        .visual-card::before, .hero-visual::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 2px; background: var(--accent); }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 48px; font-family: var(--font-body); font-weight: 700; font-size: 15px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .btn:hover { transform: translateY(-1px); border: 1px solid var(--ink); }
        .btn:active { transform: translateY(1px); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 16.5px; }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 3px; }
        .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .14em; text-transform: uppercase; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); }
        .price, .counter { font-variant-numeric: tabular-nums; }
        .divider, hr { border: 0; border-top: 1px dashed var(--line); height: 0; }
        .nav { border-bottom: 1px solid var(--line); min-height: 64px; }
        .nav-links a { font-family: var(--font-mono); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; }
        @media (max-width: 900px) {
          h1 { font-size: 32px; }
          .sig::before { left: 16px; border-left-width: 1px; }
        }
            /* === QA dalgası 106–120: okunurluk + çakışma düzeltmeleri === */
        /* devre dışı: .42 opaklık + ink-soft 2.79–3.82:1 veriyordu; .68 + ink = en kötü stil 5.17:1 */
        .btn:disabled, .btn[aria-disabled="true"], .btn.is-disabled { opacity: .68; color: var(--ink); cursor: not-allowed; box-shadow: none; }
        /* ghost/soft kenarlık: --line 1.26–1.61:1 idi; ink %55 = min 3.39:1 (iki mod) */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
        .chip { color: var(--ink); }
        /* hero kutusu: alt yarı boş kalmasın + kart kutuyu doldursun */
        .hero-visual { min-height: 360px; align-content: center; }
  `,
    scenes: {
      landing: `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px 22px 22px 34px; display: grid; align-content: start; gap: 12px; background: var(--surface); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card { border-left: 2px dashed var(--line); }
  body.scene-landing .hero-visual .visual-card .bar { height: 9px; border-radius: 2px; border: 0; background: color-mix(in srgb, var(--accent) 30%, transparent); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 40%; background: var(--accent); }
  body.scene-landing .hero-visual .visual-rows { gap: 0; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 18px 1fr auto; padding: 10px 0; border-radius: 0; border-bottom: 1px dashed var(--line); }
  body.scene-landing .hero-visual .visual-row .sq { width: 16px; height: 16px; border-radius: 2px; }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
  body.scene-landing .hero-visual .visual-card::after { content: 'defter · kes → dik → paketle · 3 adım · el işi parti no. 014'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-soft); }`,
      'dark-landing': `body.scene-landing .hero-visual .visual-card { width: 100%; min-height: 320px; padding: 22px 22px 22px 34px; display: grid; align-content: start; gap: 12px; background: var(--surface); }
  body.scene-landing .hero-visual { min-height: 370px; }
  body.scene-landing .hero-visual .visual-card { border-left: 2px dashed var(--line); }
  body.scene-landing .hero-visual .visual-card .bar { height: 9px; border-radius: 2px; border: 0; background: color-mix(in srgb, var(--accent) 30%, transparent); }
  body.scene-landing .hero-visual .visual-card .bar.accent { width: 40%; background: var(--accent); }
  body.scene-landing .hero-visual .visual-rows { gap: 0; }
  body.scene-landing .hero-visual .visual-row { grid-template-columns: 18px 1fr auto; padding: 10px 0; border-radius: 0; border-bottom: 1px dashed var(--line); }
  body.scene-landing .hero-visual .visual-row .sq { width: 16px; height: 16px; border-radius: 2px; }
  body.scene-landing .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
  body.scene-landing .hero-visual .visual-card::after { content: 'defter · kes → dik → paketle · 3 adım · el işi parti no. 014'; font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; color: var(--ink-soft); }`,
    },
  },
  'celebration-card': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* imza: die-cut dalgali kenar · folyo bant · konfeti · kurdele seridi · imza satiri */
        h1 { font-size: 52px; line-height: 1.02; letter-spacing: -.01em; font-weight: 700; max-width: 20ch; }
        h2 { font-size: 30px; line-height: 1.1; font-weight: 700; }
        h3 { font-size: 20px; line-height: 1.28; font-weight: 700; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; }
        .brand { font-family: var(--font-display); font-size: 20px; font-weight: 700; letter-spacing: 0; }
        .lede { font-size: 16px; line-height: 1.7; max-width: 52ch; color: var(--ink-soft); }

        /* kart: die-cut hissi — radius-lg + ust kenarda dalgali maske */
        .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: var(--shadow); background: var(--surface);
        }
        .hero-visual { border-radius: var(--radius-lg); box-shadow: var(--shadow); }
        .hero-visual::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; border-radius: inherit;
          -webkit-mask-image: radial-gradient(circle at 50% 0, transparent 0 9px, var(--ink) 9px 100%);
          mask-image: radial-gradient(circle at 50% 0, transparent 0 9px, var(--ink) 9px 100%);
        }
        .nav { border-bottom: 1px solid var(--line); padding: 20px 40px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; }
        .divider { height: 1px; background: var(--line); border: 0; }
        .hero-copy { border-left: 3px solid var(--accent); padding-left: 20px; }

        /* folyo bant: 6px accent serit, ust kenarda (gradient accent turevi) */
        .hero-copy h1 { border-top: 6px solid var(--accent); padding-top: 18px; }
        .hero-copy h1::after {
          content: "TEBRIKLER"; display: inline-block; margin-top: 14px;
          font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .22em;
          color: var(--accent-ink); background: var(--accent); padding: 5px 9px; border-radius: 999px;
        }
        .chip { border-radius: 999px; background: var(--surface-2); border-color: var(--line); font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .btn { border-radius: 999px; font-family: var(--font-body); font-size: 15px; font-weight: 700; min-height: 46px; padding: 13px 24px; box-shadow: none; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
        .mark { border-radius: 50%; background: var(--accent); color: var(--accent-ink); }

        /* imza satiri: elle atilmis gibi egik ince cizgi + mono isim */
        .art-author, .foot-demo, .comp-card-demo .t { border-bottom: 1px solid var(--accent); padding-bottom: 6px; }
        /* konfeti: sag ustte deterministic nokta sacilimi (yalniz dekoratif) */
        body.scene-landing .sig::before {
          content: ""; position: absolute; top: 0; right: 0; width: 46vw; height: 52vh; pointer-events: none;
          background-image:
            radial-gradient(circle at 20% 30%, var(--accent) 0 3px, transparent 3px),
            radial-gradient(circle at 62% 18%, var(--accent) 0 2px, transparent 2px),
            radial-gradient(circle at 40% 62%, var(--accent) 0 4px, transparent 4px),
            radial-gradient(circle at 78% 54%, var(--accent) 0 2.5px, transparent 2.5px),
            radial-gradient(circle at 12% 78%, var(--accent) 0 2px, transparent 2px);
          background-size: 180px 140px; opacity: .55;
        }
        /* kurdele: sol altta 10px serit, 12 derece egik */
        body.scene-landing .sig::after {
          content: ""; position: absolute; left: -40px; bottom: 16vh; width: 46vw; height: 12px;
          background: var(--accent); transform: rotate(-12deg); opacity: .9;
        }
        @media (max-width: 900px) {
          h1 { font-size: 34px; max-width: 18ch; }
          body.scene-landing .sig::before { width: 70vw; height: 34vh; opacity: .45; }
          body.scene-landing .sig::after { width: 70vw; height: 8px; }
        }
        /* --- QA dalgası: erişilebilirlik + örtüşme düzeltmeleri --- */
        .btn:disabled, .btn[disabled], .btn.disabled, .btn.is-disabled {
          opacity: .6; color: var(--ink-soft); border-color: var(--line);
        }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border: 1px solid color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        /* konfeti/kurdele dekoru içeriğin ÜSTÜNDE kalmasın */
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: kesik kenarlı tebrik kartı + folyo şerit + konfeti */
        .hero-visual { position: relative; min-height: 360px; }
        .hero-visual::before {
          content: "★  SEZON 0428"; position: absolute; inset: 26px;
          border: 1px dashed color-mix(in srgb, var(--accent) 50%, transparent);
          border-radius: var(--radius-lg); padding: 22px 24px; overflow: hidden;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .22em;
          color: var(--accent);
          background:
            radial-gradient(circle at 88% 22%, var(--accent) 0 3px, transparent 3px) 0 0 / 26px 26px repeat,
            linear-gradient(90deg, var(--accent) 0 96px, transparent 96px) 24px 96px / auto 6px no-repeat,
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 34%, transparent) 0 62%, transparent 62%) 24px 122px / auto 16px no-repeat,
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 18%, transparent) 0 44%, transparent 44%) 24px 152px / auto 8px no-repeat,
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 72%, transparent 72%) 24px 172px / auto 8px no-repeat;
          background-repeat: repeat, no-repeat, no-repeat, no-repeat, no-repeat;
        }
      `,
    },
  },
  'collectible-card': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
        /* imza: 2.5:3.5 kart orani · holo bant · nadirlik tasi · stat seridi · katmanli cerceve */
        h1 { font-size: 48px; line-height: 1.02; letter-spacing: .01em; font-weight: 600; max-width: 20ch; }
        h2 { font-size: 28px; line-height: 1.1; letter-spacing: .01em; font-weight: 600; }
        h3 { font-size: 19px; line-height: 1.24; font-weight: 600; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; }
        .brand { font-family: var(--font-display); font-size: 18px; font-weight: 600; letter-spacing: .06em; }
        .lede { font-size: 15.5px; line-height: 1.66; max-width: 52ch; color: var(--ink-soft); }

        /* kart: 2.5:3.5 oran + katmanli cerceve (6px ofset ikinci cerceve) */
        .visual-card, .comp-card, .hero-visual, .m-tile {
          aspect-ratio: 5 / 7; border-radius: var(--radius-lg); border: 1px solid var(--line);
          box-shadow: var(--shadow); background: var(--surface); position: relative; overflow: hidden;
        }
        .visual-card::before, .comp-card::before, .hero-visual::before {
          content: ""; position: absolute; inset: 6px; border-radius: calc(var(--radius-lg) - 6px);
          border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent); pointer-events: none;
        }
        /* holo bant: sol ust kose capraz accent taramasi */
        .visual-card::after, .hero-visual::after {
          content: ""; position: absolute; top: -30%; left: -30%; width: 60%; height: 160%;
          background-image: repeating-linear-gradient(45deg, color-mix(in srgb, var(--accent) 55%, transparent) 0 2px, transparent 2px 9px);
          opacity: .5; transform: rotate(0deg); pointer-events: none;
        }
        .panel, .panel-2, .kpi, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: var(--radius); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
        }
        .chip { border-radius: 2px; background: var(--surface-2); border-color: var(--line); font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .btn { border-radius: 2px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; min-height: 44px; padding: 12px 16px; box-shadow: none; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field, input, select, textarea { border-radius: 2px; background: var(--surface); border: 1px solid var(--line); }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
        .mark { border-radius: 2px; background: var(--accent); color: var(--accent-ink); }

        /* stat seridi: 3 hucre, mono sayilar, alt kenarda */
        .kpi .v, .counter, .trow .num, .sum-total b { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
        .kpi { display: flex; flex-direction: column; justify-content: flex-end; }
        /* nadirlik tasi: 22px dondurulmus kare (45 derece) */
        body.scene-landing .sig::before {
          content: ""; position: absolute; top: 96px; right: 7vw; width: 22px; height: 22px;
          background: var(--accent); transform: rotate(45deg); box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 22%, transparent);
        }
        /* kart yigini: sag altta iki ofset cerceve (deste hissi) */
        body.scene-landing .sig::after {
          content: ""; position: absolute; right: 9vw; bottom: 12vh; width: 168px; height: 235px;
          border: 1px solid var(--line); border-radius: var(--radius-lg); background: var(--surface);
          box-shadow: 6px 6px 0 color-mix(in srgb, var(--line) 60%, transparent),
                      12px 12px 0 color-mix(in srgb, var(--line) 35%, transparent);
          transform: rotate(-3deg);
        }
        @media (max-width: 900px) {
          h1 { font-size: 32px; }
          body.scene-landing .sig::after { width: 104px; height: 146px; right: 6vw; bottom: 8vh; }
          body.scene-landing .sig::before { top: 78px; width: 16px; height: 16px; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: folyo çerçeveli kart + derece rozeti + holo noktalar */
        .hero-visual { position: relative; min-height: 360px; }
        .hero-visual::before {
          content: "GRADE 9.5 · 1/1"; position: absolute; inset: 26px; padding: 18px 20px;
          border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .2em; color: var(--accent);
          background:
            radial-gradient(circle at 92% 18%, color-mix(in srgb, var(--accent) 70%, transparent) 0 2px, transparent 2px) 0 0 / 22px 22px repeat,
            linear-gradient(90deg, var(--accent) 0 30%, transparent 30%) 20px 92px / 110px 6px no-repeat,
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 30%, transparent) 0 66%, transparent 66%) 20px 112px / auto 14px no-repeat;
          background-repeat: repeat, no-repeat, no-repeat;
        }
      `,
    },
  },
  'comic-story': {
    motif: 'dots',
    bodyClass: 'upper',
    extraCss: `
        /* imza: 3px murekkep panel cercevesi · 6px oluk · yarim ton · konusma balonu · efekt etiketi */
        h1 { font-family: var(--font-display); font-size: 50px; line-height: 1.0; letter-spacing: .005em; font-weight: 600; max-width: 19ch; }
        h2 { font-family: var(--font-display); font-size: 30px; line-height: 1.08; font-weight: 600; }
        h3 { font-family: var(--font-display); font-size: 20px; line-height: 1.2; font-weight: 600; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; }
        .brand { font-family: var(--font-display); font-size: 21px; font-weight: 600; letter-spacing: .01em; }
        .lede { font-size: 15.5px; line-height: 1.62; max-width: 52ch; }

        .nav { border-bottom: 3px solid var(--ink); padding: 14px 32px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em; }
        .divider { height: 3px; background: var(--ink); border: 0; }
        .hero-copy { border-left: 0; padding-left: 0; }

        /* panel: 3px murekkep cerceve, 4px radius, golge yok */
        .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: var(--radius); border: 3px solid var(--ink); box-shadow: none; background: var(--surface);
        }
        .hero-visual { border-radius: var(--radius); border: 3px solid var(--ink); box-shadow: var(--shadow-hard); }
        /* panel izgarasi: 6px oluk, konteyner murekkep zemin */
        .m-grid, .data-grid, .comp-grid, .quad, .plan-grid, .stat-grid { gap: 6px; background: var(--ink); padding: 6px; border-radius: var(--radius); }
        .m-grid > *, .data-grid > *, .comp-grid > *, .quad > *, .plan-grid > * { background: var(--surface); border-radius: 2px; }

        .chip { border-radius: 2px; background: var(--ink); border-color: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em; padding: 3px 6px; }
        .chip.accent { background: var(--accent); border-color: var(--ink); color: var(--accent-ink); }
        .btn { border-radius: 2px; border: 3px solid var(--ink); font-family: var(--font-display); font-size: 16px; font-weight: 600; min-height: 46px; padding: 12px 20px; box-shadow: none; }
        .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 3px solid var(--ink); box-shadow: none; }
        .btn:hover { box-shadow: var(--shadow-hard); transform: translate(-1px, -1px); }
        .field, input, select, textarea { border-radius: 2px; background: var(--surface); border: 3px solid var(--ink); }
        .field.focus, input:focus { outline: 3px solid var(--accent); outline-offset: 0; }
        .mark { border-radius: 2px; background: var(--ink); color: var(--bg); }

        /* konusma balonu: caption kutusu + kuyruk (yalniz metin bloklarinda) */
        .comp-card-demo .t, .art-author, .co-note, .state-card .t {
          position: relative; background: var(--surface); border: 3px solid var(--ink);
          border-radius: 14px; padding: 10px 14px; box-shadow: none;
        }
        .comp-card-demo .t::after, .co-note::after {
          content: ""; position: absolute; left: 22px; bottom: -12px; width: 14px; height: 14px;
          background: var(--surface); border-right: 3px solid var(--ink); border-bottom: 3px solid var(--ink);
          transform: rotate(45deg);
        }
        /* caption kutusu: mono uppercase, murekkep zemin */
        .eyebrow { display: inline-block; background: var(--ink); color: var(--bg); padding: 3px 8px; border-radius: 2px; }
        /* yarim ton golge: kart koselerinde nokta dokusu */
        .visual-card::after, .hero-visual::after {
          content: ""; position: absolute; right: 0; bottom: 0; width: 96px; height: 96px; pointer-events: none;
          background-image: radial-gradient(circle at 50% 50%, var(--ink) 0 1.8px, transparent 1.8px);
          background-size: 7px 7px; opacity: .28;
          -webkit-mask-image: linear-gradient(315deg, var(--ink) 0 30%, transparent 72%);
          mask-image: linear-gradient(315deg, var(--ink) 0 30%, transparent 72%);
        }
        /* efekt etiketi: hero'da 12 derece donuk accent kutu (ekran basina 1) */
        body.scene-landing .sig::before {
          content: "HOOOP!"; position: absolute; top: 96px; right: 8vw;
          font-family: var(--font-display); font-size: 22px; font-weight: 600; letter-spacing: .02em;
          color: var(--accent-ink); background: var(--accent); border: 3px solid var(--ink);
          padding: 6px 12px; border-radius: 8px; transform: rotate(12deg); box-shadow: var(--shadow-hard);
        }
        /* panel oluk cizgisi: sag kenarda dikey 3px murekkep */
        body.scene-landing .sig::after {
          content: ""; position: absolute; top: 0; bottom: 0; right: 34vw; width: 3px; background: var(--ink); opacity: .9;
        }
        @media (max-width: 900px) {
          h1 { font-size: 32px; }
          body.scene-landing .sig::before { font-size: 15px; padding: 4px 8px; top: 74px; }
          body.scene-landing .sig::after { display: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 340px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: üç panelli çizgi roman sayfası + konuşma kuyruğu */
        .hero-visual { position: relative; min-height: 340px; background: var(--surface); }
        .hero-visual::before {
          content: "PANEL 3 / 3"; position: absolute; inset: 20px; padding: 12px;
          border: 3px solid var(--ink); box-shadow: var(--shadow-hard);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; color: var(--ink);
          background:
            linear-gradient(90deg, var(--ink) 0 2px, transparent 2px) 33% 0 / 2px 100% no-repeat,
            linear-gradient(90deg, var(--ink) 0 2px, transparent 2px) 66% 0 / 2px 100% no-repeat,
            radial-gradient(circle at 20% 30%, var(--accent) 0 22px, transparent 22px);
          background-repeat: no-repeat, no-repeat, no-repeat;
        }
      `,
    },
  },
  'album-sleeve': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
        /* imza: 1:1 kilif · sirt seridi + dikey yazi · A/B parca listesi · katalog no · barkod */
        h1 { font-family: var(--font-display); font-size: 66px; line-height: .92; letter-spacing: -.015em; font-weight: 400; max-width: 13ch; }
        h2 { font-family: var(--font-display); font-size: 34px; line-height: .98; letter-spacing: -.01em; font-weight: 400; }
        h3 { font-family: var(--font-body); font-size: 19px; line-height: 1.24; font-weight: 500; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .14em; }
        .brand { font-family: var(--font-display); font-size: 22px; letter-spacing: .02em; }
        .lede { font-size: 15px; line-height: 1.68; max-width: 50ch; color: var(--ink-soft); }

        .nav { border-bottom: 1px solid var(--line); padding: 18px 36px; }
        .nav-links a { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase; }
        .divider { height: 1px; background: var(--line); border: 0; }
        .hero-copy { border-left: 0; padding-left: 0; }

        /* kilif: 1:1 kare, 2px radius, ince cerceve, tek yumusak golge */
        .hero-visual { aspect-ratio: 1 / 1; border-radius: var(--radius); border: 1px solid var(--line); box-shadow: var(--shadow); position: relative; overflow: hidden; }
        /* sirt seridi: kilifin sol kenarinda 26px dikey serit + dikey yazi */
        .hero-visual::before {
          content: "LP · 33 1/3 RPM"; position: absolute; top: 0; bottom: 0; left: 0; width: 26px;
          background: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em;
          writing-mode: vertical-rl; text-orientation: mixed; display: flex; align-items: center; justify-content: center;
        }
        /* barkod: kilifin sag alt kosesinde dikey cizgi dizisi */
        .hero-visual::after {
          content: ""; position: absolute; right: 14px; bottom: 14px; width: 78px; height: 30px;
          background-image: repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 4px, var(--ink) 4px 5px, transparent 5px 9px);
          opacity: .85;
        }
        .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: var(--radius); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
        }
        .visual-card { aspect-ratio: 1 / 1; }
        .chip { border-radius: 0; background: transparent; border-color: var(--line); font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .12em; padding: 2px 6px; }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .btn { border-radius: 0; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .12em; min-height: 44px; padding: 12px 18px; box-shadow: none; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); }
        .field.focus, input:focus { outline: 1px solid var(--accent); outline-offset: 2px; }
        .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); }

        /* parca listesi: A/B yuz basligi + mono sure kolonu */
        .tbl th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--ink-soft); border-bottom: 1px solid var(--ink); }
        .tbl tr, .mini-table tr { border-bottom: 1px solid var(--line); }
        .tbl td:first-child, .mini-table td:first-child { font-family: var(--font-mono); font-size: 11px; color: var(--ink-faint); width: 28px; }
        .tbl td:last-child, .mini-table td:last-child { font-family: var(--font-mono); font-variant-numeric: tabular-nums; text-align: right; color: var(--ink-soft); }

        /* katalog etiketi: hero'da sol ust kosede mono kutu */
        body.scene-landing .sig::before {
          content: "CAT. NO. LP-124"; position: absolute; top: 84px; left: 6vw;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em;
          color: var(--accent-ink); background: var(--accent); padding: 4px 8px;
        }
        /* ic kilif kagidi: sag kenarda ince dikey cizgi + yatay kat izi */
        body.scene-landing .sig::after {
          content: ""; position: absolute; top: 0; bottom: 0; right: 11vw; width: 1px; background: var(--line);
          box-shadow: inset 0 0 0 0 transparent;
        }
        @media (max-width: 900px) {
          h1 { font-size: 40px; max-width: 14ch; }
          .hero-visual::before { width: 20px; font-size: 8px; }
          body.scene-landing .sig::after { display: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
      `,
    scenes: {
      landing: `
        /* hero imzası: plak (LP) — göbek deliği + oluk halkaları + şarkı listesi */
        .hero-visual { position: relative; }
        .hero-visual::before {
          content: "A · 33 1/3"; position: absolute; inset: 0; padding: 16px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
          background:
            radial-gradient(circle at 50% 46%, var(--surface) 0 10px, var(--ink) 10px 11px, transparent 11px) 0 0 / 100% 100% no-repeat,
            repeating-radial-gradient(circle at 50% 46%, color-mix(in srgb, var(--ink) 26%, transparent) 0 1px, transparent 1px 6px) 0 0 / 100% 100% no-repeat,
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 14%, transparent) 0 1px, transparent 1px) 100% 100% / 62% 26px repeat-y;
        }
      `,
    },
  },
  'sports-energy': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
        /* imza: skor tabelasi (tabular rakam) · forma numarasi konturu · pist seritleri · hiz kirigi */
        h1 { font-size: 62px; line-height: .9; letter-spacing: .005em; font-weight: 700; max-width: 16ch; }
        h2 { font-size: 32px; line-height: .98; letter-spacing: .005em; font-weight: 700; }
        h3 { font-size: 20px; line-height: 1.16; font-weight: 600; }
        .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; }
        .brand { font-family: var(--font-display); font-size: 20px; font-weight: 700; letter-spacing: .08em; }
        .lede { font-size: 15.5px; line-height: 1.6; max-width: 48ch; color: var(--ink-soft); }

        .nav { border-bottom: 3px solid var(--ink); padding: 14px 32px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; }
        .divider { height: 3px; background: var(--accent); border: 0; }
        .hero-copy { border-left: 6px solid var(--accent); padding-left: 20px; }

        /* skor tabelasi: mono tabular rakamlar, koyu blok, accent ek */
        .kpi { border-radius: 0; border: 2px solid var(--ink); background: var(--surface); }
        .kpi .v, .counter, .trow .num, .sum-total b, .bignum {
          font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: -.02em;
        }
        .kpi .v { font-size: 40px; line-height: 1; }
        /* forma numarasi: 96px kontur (ici bos) rakam, dekoratif katman */
        body.scene-landing .sig::before {
          content: "10"; position: absolute; top: 64px; right: 6vw;
          font-family: var(--font-display); font-size: 132px; line-height: .8; font-weight: 700; letter-spacing: -.02em;
          color: transparent; -webkit-text-stroke: 3px var(--ink); opacity: .9;
        }
        /* pist seritleri: ekranin alt bandinda 5 serit, accent son serit */
        body.scene-landing .sig::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 56px;
          background-image: repeating-linear-gradient(90deg,
            transparent 0 78px, var(--line) 78px 80px);
          border-top: 2px solid var(--line);
        }
        .panel, .panel-2, .visual-card, .m-tile, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
          border-radius: 0; border: 2px solid var(--line); box-shadow: none; background: var(--surface);
        }
        .hero-visual { border-radius: 0; border: 2px solid var(--ink); box-shadow: var(--shadow-hard); }
        .chip { border-radius: 0; background: var(--ink); border-color: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; padding: 3px 7px; }
        .chip.accent { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
        .btn { border-radius: 0; border: 2px solid var(--ink); font-family: var(--font-display); font-size: 17px; font-weight: 700; letter-spacing: .04em; min-height: 46px; padding: 12px 20px; box-shadow: none; }
        .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 2px solid var(--line); box-shadow: none; }
        .btn:hover { box-shadow: var(--shadow-hard); transform: translate(-2px, -2px); }
        .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 2px solid var(--line); }
        .field.focus, input:focus { outline: 3px solid var(--accent); outline-offset: 0; }
        .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); }

        /* hiz kirigi: baslik bolumunde 18 derece accent paralelkenar (tek) */
        .hero-copy h1 > span, .hero-copy h1 em {
          font-style: normal; background: var(--accent); color: var(--accent-ink);
          padding: 0 10px; display: inline-block; transform: skewX(-9deg);
        }
        /* ilerleme / sure bandi: 8px yukseklik, koyu zemin + accent dolgu */
        .track, .track i, .progress { border-radius: 0; }
        .track { height: 8px; background: var(--surface-2); border: 1px solid var(--line); }
        .track i { height: 100%; background: var(--accent); }
        /* skor satiri: bitisik hucreler, 2px kenar */
        .cmp .row, .cmp .row.head { border-bottom: 2px solid var(--line); }
        .cmp .row.head { background: var(--ink); color: var(--bg); }
        @media (max-width: 900px) {
          h1 { font-size: 36px; max-width: 13ch; }
          body.scene-landing .sig::before { font-size: 76px; top: 54px; -webkit-text-stroke-width: 2px; }
          body.scene-landing .sig::after { height: 36px; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        .eyebrow, .label { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 340px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: skor tabelası — dev skor + set çubukları */
        .hero-visual { position: relative; min-height: 340px; }
        .hero-visual::before {
          content: "2 — 1"; position: absolute; inset: 22px; padding: 16px;
          font-family: var(--font-display); font-size: 76px; line-height: 1; letter-spacing: -.02em;
          color: var(--accent); -webkit-text-stroke: 2px var(--ink);
          background:
            linear-gradient(0deg, var(--ink) 0 100%) 16px calc(100% - 20px) / 62% 6px no-repeat,
            linear-gradient(0deg, var(--accent) 0 100%) 16px calc(100% - 34px) / 38% 6px no-repeat;
        }
      `,
    },
  },
  'marble-vein': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Playfair 700 başlık · Inter gövde · mono künye ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 700; }
        h1 { font-size: 54px; line-height: 1.06; letter-spacing: -.01em; max-width: 18ch; }
        h2 { font-size: 30px; line-height: 1.16; max-width: 26ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
        h3 { font-size: 21px; line-height: 1.28; }
        h4 { font-size: 16px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.64; max-width: 62ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-faint); }
        .eyebrow { color: var(--ink-soft); }
        .eyebrow::before { content: '/ '; color: var(--accent); }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 24px; }
        .trow .num { font-size: 13px; }

        /* ---------- nav ---------- */
        .nav { height: 56px; padding: 0 28px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 700; font-size: 20px; letter-spacing: -.01em; text-transform: none; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .02em; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -19px; height: 2px; background: var(--ink);
        }

        /* ---------- plaka: 1px çizgi, gölge yok ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none; backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 24px; }
        .modal, .drawer, .menu { border: 1px solid var(--ink); box-shadow: var(--shadow); border-radius: var(--radius-lg); }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

        /* damar çizgisi: kart başlığının solunda 1px, ekran başına 1 */
        .kpi:first-child::before, .plan:first-child::before {
          content: ''; position: absolute; left: 24px; top: 0; width: 1px; height: 18px; background: var(--ink-faint);
        }
        .kpi, .plan { position: relative; }

        /* ---------- kontroller: 2px radius ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .02em;
          min-height: 44px; padding: 10px 20px; border-radius: var(--radius);
          border: 1px solid transparent; box-shadow: none; text-transform: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn:active { transform: translateY(1px); }
        .field, input, select, textarea {
          min-height: 44px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-body); font-size: 15px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 1px; border-bottom: 1px solid var(--ink);
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 22px; padding: 0 8px; border-radius: var(--radius);
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .16em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 0; height: 4px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 0; height: 4px; }
        .bar { border-radius: 0; }
        .proof li::before { width: 6px; height: 6px; border-radius: 0; background: var(--ink); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }
        .fab { border-radius: var(--radius); box-shadow: var(--shadow); }

        /* ---------- imza: hero görselinde tek damar + plaka kesiti ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none; overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: -10% -6%; pointer-events: none;
          background-image:
            linear-gradient(72deg, transparent 0 46%, color-mix(in srgb, var(--ink) 26%, transparent) 46% 46.35%, transparent 46.35% 100%),
            linear-gradient(68deg, transparent 0 62%, color-mix(in srgb, var(--ink) 14%, transparent) 62% 62.4%, transparent 62.4% 100%),
            linear-gradient(80deg, transparent 0 28%, color-mix(in srgb, var(--ink) 10%, transparent) 28% 28.3%, transparent 28.3% 100%);
          -webkit-mask-image: radial-gradient(75% 75% at 45% 50%, var(--ink) 0%, transparent 82%);
          mask-image: radial-gradient(75% 75% at 45% 50%, var(--ink) 0%, transparent 82%);
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px;
          background: var(--ink-faint); opacity: .5; pointer-events: none;
        }

        /* ---------- landing: tek ince damar, arka planda ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(74deg, transparent 0 58%, color-mix(in srgb, var(--ink) 12%, transparent) 58% 58.2%, transparent 58.2% 100%);
          -webkit-mask-image: linear-gradient(transparent 0%, var(--ink) 40%, transparent 90%);
          mask-image: linear-gradient(transparent 0%, var(--ink) 40%, transparent 90%);
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 1px;
          background: var(--line); pointer-events: none;
        }

        /* ---------- dashboard: ölçü tablosu, sakin satırlar ---------- */
        body.scene-dashboard .kpis { gap: 16px; }
        body.scene-dashboard .side { background: var(--bg-2); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 32px; max-width: 20ch; }
          h2 { font-size: 24px; }
          .lede { font-size: 15px; }
          .plan, .comp-card-demo, .state-card, .m-tile { padding: 18px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-landing .sig::before { opacity: .6; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: mermer damarı — ince eğri damarlar + kesit yüzeyi */
        .hero-visual { position: relative; min-height: 360px; }
        .hero-visual::after {
          content: "KESİT A–A"; position: absolute; inset: 0; padding: 18px 20px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
          background:
            repeating-linear-gradient(74deg, color-mix(in srgb, var(--ink) 24%, transparent) 0 1px, transparent 1px 46px),
            repeating-linear-gradient(-62deg, color-mix(in srgb, var(--accent) 42%, transparent) 0 1px, transparent 1px 64px),
            radial-gradient(120% 80% at 20% 10%, color-mix(in srgb, var(--ink) 8%, transparent), transparent 70%);
          opacity: .9; pointer-events: none;
        }
      `,
    },
  },
  'silk-drape': {
    motif: 'blob',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Cormorant 300 başlık · Poppins gövde ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 300; }
        h1 { font-size: 60px; line-height: 1.02; letter-spacing: .02em; max-width: 16ch; }
        h2 { font-size: 32px; line-height: 1.14; letter-spacing: .01em; max-width: 26ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
        h3 { font-size: 20px; line-height: 1.3; }
        h4 { font-size: 15px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.7; max-width: 56ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .24em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '〜 '; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .04em;
        }
        .kpi .v, .kpi .num-big { font-size: 26px; }
        .trow .num { font-size: 12px; }

        /* ---------- nav ---------- */
        .nav { height: 64px; padding: 0 32px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 300; font-size: 24px; letter-spacing: .16em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 1px; background: var(--ink);
        }

        /* ---------- yüzey: kumaş düşüşü gölgesi, kıvrım köşesi ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
        }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card, .co-sec {
          border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px;
          padding: 28px; position: relative;
        }
        .table { overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }
        .plan.hot::before {
          content: ''; position: absolute; left: 28px; right: 28px; top: 0; height: 1px; background: var(--accent);
        }

        /* ---------- kontroller: hap + 48px hedef ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .08em; text-transform: uppercase;
          min-height: 48px; padding: 12px 26px; border-radius: 999px; border: 1px solid transparent; box-shadow: var(--shadow);
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:hover { box-shadow: 0 16px 34px -18px color-mix(in srgb, var(--accent) 45%, transparent), var(--shadow); }
        .btn:active { transform: translateY(1px); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn.sm { min-height: 36px; padding: 8px 18px; font-size: 11px; }
        .field, input, select, textarea {
          min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-body); font-size: 14px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 2px;
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 12px; border-radius: 999px;
          background: transparent; border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .18em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 300; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); }
        .icon-btn, .fab { box-shadow: none; }
        .fab { box-shadow: var(--shadow); }
        .opt .box { border-radius: 12px; border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 999px; height: 6px; }
        .bar { border-radius: 999px; }
        .proof li::before { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: 999px; }
        .scene-m-sheet .m-sheet { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }

        /* ---------- imza: hero görselinde kumaş kıvrımı ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: var(--radius-lg) var(--radius-lg) var(--radius-lg) 12px;
          box-shadow: var(--shadow); overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: -12% -8%; pointer-events: none;
          background-image:
            radial-gradient(120% 80% at 20% 10%, color-mix(in srgb, var(--surface) 92%, transparent) 0%, transparent 60%),
            linear-gradient(115deg, transparent 0 34%, color-mix(in srgb, var(--ink) 9%, transparent) 34% 34.6%, transparent 34.6% 52%,
              color-mix(in srgb, var(--ink) 6%, transparent) 52% 52.5%, transparent 52.5% 70%, color-mix(in srgb, var(--accent) 14%, transparent) 70% 70.6%, transparent 70.6% 100%);
        }
        .hero-visual::after {
          content: ''; position: absolute; right: 18px; bottom: 18px; width: 56px; height: 1px;
          background: var(--ink-faint); opacity: .6; pointer-events: none;
        }

        /* ---------- landing: yumuşak ipek ışığı + sağ kenar kıvrımı ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; right: -14vw; top: -26vh; width: 58vw; height: 58vw;
          border-radius: 50%;
          background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 70%);
          opacity: .5; pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; left: -10vw; bottom: -16vh; width: 46vw; height: 34vw;
          border-radius: 50% 50% 0 0;
          background: radial-gradient(60% 60% at 50% 40%, color-mix(in srgb, var(--surface) 85%, transparent) 0%, transparent 72%);
          opacity: .5; pointer-events: none;
        }

        /* ---------- dashboard: kartela, geniş satır ---------- */
        body.scene-dashboard .kpis { gap: 24px; }
        body.scene-dashboard .kpi { padding: 24px 28px; }
        body.scene-dashboard .side { background: var(--bg-2); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 34px; max-width: 18ch; }
          h2 { font-size: 24px; }
          .lede { font-size: 14px; }
          .plan, .comp-card-demo, .state-card, .m-tile { padding: 20px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-landing .sig::before { opacity: .3; }
          body.scene-landing .sig::after { display: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: ipek perde — düşen kuma kıvrımları + kenar dikişi */
        .hero-visual { position: relative; min-height: 360px; }
        .hero-visual::before {
          content: "İPEK · 19 MOM"; position: absolute; inset: 0; padding: 18px 22px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em; color: var(--ink-soft);
          background:
            repeating-linear-gradient(96deg, color-mix(in srgb, var(--ink) 16%, transparent) 0 2px, transparent 2px 22px),
            repeating-linear-gradient(84deg, color-mix(in srgb, var(--accent) 22%, transparent) 0 1px, transparent 1px 36px),
            radial-gradient(90% 60% at 30% 0%, color-mix(in srgb, var(--ink) 7%, transparent), transparent 72%);
          pointer-events: none;
        }
      `,
    },
  },
  'brass-copper': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
        /* ---------- tipografi: Cinzel gravür başlık · Jost gövde · Courier künye ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 600; text-transform: uppercase; }
        h1 { font-size: 44px; line-height: 1.1; letter-spacing: .12em; max-width: 20ch; }
        h2 { font-size: 26px; line-height: 1.2; letter-spacing: .08em; max-width: 28ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
        h3 { font-size: 19px; line-height: 1.25; }
        h4 { font-size: 15px; line-height: 1.3; }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 66ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '// '; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .04em;
        }
        .kpi .v, .kpi .num-big { font-size: 24px; }
        .trow .num { font-size: 14px; }

        /* ---------- nav ---------- */
        .nav { height: 56px; padding: 0 24px; background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 600; font-size: 16px; letter-spacing: .16em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .06em; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -18px; height: 1px; background: var(--accent);
        }

        /* ---------- plaka: üst kenarda 1px iç parlaklık ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 10%, transparent);
          backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 20px; position: relative; }
        .modal, .drawer, .menu {
          border: 1px solid var(--accent); box-shadow: var(--shadow); border-radius: var(--radius-lg);
        }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 10%, transparent), var(--shadow-hard); }

        /* perçin: kartın sol üstünde tek 4px nokta */
        .plan::before, .comp-card-demo::before, .state-card::before {
          content: ''; position: absolute; left: 10px; top: 10px; width: 4px; height: 4px; border-radius: 50%;
          background: var(--ink-faint);
        }

        /* ---------- kontroller: 3px radius, 40px ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 12px; letter-spacing: .10em; text-transform: uppercase;
          min-height: 40px; padding: 10px 20px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid var(--accent); color: var(--accent); }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:hover { box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 22%, transparent); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 30px; padding: 6px 12px; font-size: 10px; }
        .field, input, select, textarea {
          min-height: 40px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--bg-2); color: var(--ink);
          font-family: var(--font-mono); font-size: 14px; letter-spacing: .02em;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 1px; border-bottom: 1px solid var(--accent);
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 22px; padding: 0 8px; border-radius: var(--radius);
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .14em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 600; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .fab { box-shadow: var(--shadow); }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--bg-2); border-radius: 1px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 1px; height: 6px; }
        .bar { border-radius: 1px; }
        .proof li::before { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- imza: hero görselinde fırçalanmış metal + patina ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 12%, transparent); overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: repeating-linear-gradient(
            0deg,
            color-mix(in srgb, var(--ink) 7%, transparent) 0 1px,
            transparent 1px 4px
          );
          opacity: .8;
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 12%; right: 12%; top: 38%; height: 34%;
          border-radius: 50%;
          background: radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, var(--accent) 26%, transparent) 0%, transparent 72%);
          pointer-events: none;
        }

        /* ---------- landing: sol üstte bakır şerit + sağda gravür halkası ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 1px;
          background: var(--accent); opacity: .7; pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: -6vw; top: -6vh; width: 40vw; height: 40vw;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0 30px, color-mix(in srgb, var(--accent) 16%, transparent) 30px 31px);
          -webkit-mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 74%);
          mask-image: radial-gradient(55% 55% at 50% 50%, var(--ink) 0%, transparent 74%);
          pointer-events: none;
        }

        /* ---------- dashboard: alaşım tablosu, sert bölmeler ---------- */
        body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
        body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        body.scene-dashboard .kpi:last-child { border-right: 0; }
        body.scene-dashboard .side { background: var(--bg-2); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 28px; max-width: 20ch; }
          h2 { font-size: 20px; }
          .lede { font-size: 14px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
          body.scene-dashboard .kpi:last-child { border-bottom: 0; }
          body.scene-landing .sig::after { display: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: pirinç plaka — 4 perçin + gravür çizgileri */
        .hero-visual { position: relative; min-height: 360px; }
        .hero-visual::before {
          content: "PİRİNÇ · No. 128"; position: absolute; inset: 26px; padding: 20px;
          border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .22em; color: var(--accent);
          background:
            radial-gradient(circle at 10px 10px, var(--accent) 0 3px, transparent 3px) 0 0 / 100% 100% no-repeat,
            radial-gradient(circle at calc(100% - 10px) 10px, var(--accent) 0 3px, transparent 3px) 0 0 / 100% 100% no-repeat,
            radial-gradient(circle at 10px calc(100% - 10px), var(--accent) 0 3px, transparent 3px) 0 0 / 100% 100% no-repeat,
            radial-gradient(circle at calc(100% - 10px) calc(100% - 10px), var(--accent) 0 3px, transparent 3px) 0 0 / 100% 100% no-repeat,
            linear-gradient(0deg, color-mix(in srgb, var(--accent) 40%, transparent) 0 1px, transparent 1px) 20px 74px / 62% 1px no-repeat;
          pointer-events: none;
        }
      `,
    },
  },
  'porcelain-glaze': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: EB Garamond başlık · Nunito gövde · Space Mono ölçü ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 400; }
        h1 { font-size: 46px; line-height: 1.1; letter-spacing: .01em; max-width: 20ch; }
        h2 { font-size: 26px; line-height: 1.22; letter-spacing: .01em; max-width: 28ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 700; letter-spacing: 0; }
        h3 { font-size: 19px; line-height: 1.28; }
        h4 { font-size: 16px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.68; max-width: 60ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '· '; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 24px; }
        .trow .num { font-size: 13px; }

        /* ---------- nav ---------- */
        .nav { height: 60px; padding: 0 28px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 400; font-size: 22px; letter-spacing: .14em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -20px; height: 2px; background: var(--accent);
        }

        /* ---------- yüzey: ince kontur, 2px gölge ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 22px; }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }
        .plan.hot::before {
          content: ''; position: absolute; left: 22px; right: 22px; top: 0; height: 1px; background: var(--accent);
        }

        /* ---------- kontroller: 14px form, hap buton ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 700; font-size: 14px; letter-spacing: 0;
          min-height: 46px; padding: 12px 24px; border-radius: 999px;
          border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: var(--surface); border: 1px solid var(--line); color: var(--accent); box-shadow: none; }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 36px; padding: 8px 16px; font-size: 12px; }
        .field, input, select, textarea {
          min-height: 46px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-body); font-size: 15px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 2px;
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 10px; border-radius: 999px;
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .16em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 999px; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .fab { box-shadow: var(--shadow); }
        .opt .box { border-radius: 10px; border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 999px; height: 5px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 999px; height: 5px; }
        .bar { border-radius: 999px; }
        .proof li::before { width: 6px; height: 6px; border-radius: 999px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: 999px; }
        .scene-m-sheet .m-sheet { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }

        /* ---------- imza: hero görselinde 1px vazo silüeti (tek kez) ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
          overflow: hidden; margin-left: 2px;
        }
        .hero-visual::before {
          content: ''; position: absolute; left: 50%; bottom: 0; width: 42%; height: 82%;
          transform: translateX(-50%);
          border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
          border-bottom: 0;
          border-radius: 50% 50% 8% 8% / 42% 42% 6% 6%;
          pointer-events: none;
        }
        .hero-visual::after {
          content: ''; position: absolute; left: 8%; right: 8%; top: 26%; height: 1px;
          background: color-mix(in srgb, var(--accent) 35%, transparent); pointer-events: none;
        }

        /* ---------- landing: kobalt ince yay, sol kenarda 1px çizgi ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(120% 90% at 50% 0%, transparent 0 62%, color-mix(in srgb, var(--accent) 12%, transparent) 62% 62.25%, transparent 62.25% 100%);
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: var(--line); pointer-events: none;
        }

        /* ---------- dashboard: koleksiyon ızgarası, sakin satırlar ---------- */
        body.scene-dashboard .kpis { gap: 20px; }
        body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
        body.scene-dashboard .side { background: var(--bg-2); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 30px; max-width: 18ch; }
          h2 { font-size: 21px; }
          .lede { font-size: 15px; }
          .plan, .comp-card-demo, .state-card, .m-tile { padding: 18px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          .hero-visual { margin-left: 0; }
          body.scene-landing .sig::before { opacity: .5; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: sır halkaları + kraklür çatlakları */
        .hero-visual { position: relative; min-height: 360px; }
        .hero-visual::before {
          content: "SIR · 1.280 °C"; position: absolute; inset: 0; padding: 18px 20px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
          background:
            repeating-radial-gradient(circle at 50% 62%, color-mix(in srgb, var(--accent) 30%, transparent) 0 1px, transparent 1px 26px),
            repeating-linear-gradient(38deg, color-mix(in srgb, var(--ink) 10%, transparent) 0 1px, transparent 1px 38px);
          pointer-events: none;
        }
      `,
    },
  },
  'leather-craft': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Fraunces başlık · Lora gövde · Share Tech Mono künye ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 700; }
        h1 { font-size: 50px; line-height: 1.08; letter-spacing: -.01em; max-width: 18ch; }
        h2 { font-size: 28px; line-height: 1.2; max-width: 26ch; }
        h3, h4 { font-family: var(--font-body); font-weight: 600; letter-spacing: 0; }
        h3 { font-size: 20px; line-height: 1.28; }
        h4 { font-size: 16px; line-height: 1.35; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.66; max-width: 62ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .14em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '— '; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b, .trow .num {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .02em;
        }
        .kpi .v, .kpi .num-big { font-size: 26px; }
        .trow .num { font-size: 13px; }

        /* ---------- nav ---------- */
        .nav { height: 58px; padding: 0 26px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 700; font-size: 21px; letter-spacing: -.01em; text-transform: none; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -19px; height: 2px; background: var(--accent);
        }

        /* ---------- yüzey: kısa gölge + iç kesikli dikiş ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table, .modal, .drawer {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow); backdrop-filter: none;
        }
        /* dikiş çerçevesi: kart/modal içinde 8px boşlukla kesikli çizgi */
        .plan::after, .comp-card-demo::after, .state-card::after, .auth-card::after, .ob-card::after, .modal::after {
          content: ''; position: absolute; inset: 8px; border-radius: calc(var(--radius-lg) - 6px);
          border: 1px dashed color-mix(in srgb, var(--ink-soft) 45%, transparent);
          pointer-events: none;
        }
        .plan, .comp-card-demo, .state-card, .auth-card, .ob-card, .modal { position: relative; padding: 24px; }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard), var(--shadow); }
        .plan.hot::before {
          content: ''; position: absolute; left: 24px; right: 24px; top: 0; height: 2px; background: var(--accent);
        }

        /* ---------- kontroller: 4px radius, 46px hedef ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 14px; letter-spacing: 0;
          min-height: 46px; padding: 12px 22px; border-radius: var(--radius);
          border: 1px solid transparent; box-shadow: var(--shadow); text-transform: none;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: var(--surface); border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:hover { border-bottom: 1px dashed color-mix(in srgb, var(--ink-soft) 55%, transparent); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:not(.ghost):not(.soft):focus-visible { outline-color: var(--accent-ink); }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 36px; padding: 8px 14px; font-size: 12px; }
        .field, input, select, textarea {
          min-height: 46px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--surface); color: var(--ink);
          font-family: var(--font-body); font-size: 15px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 2px;
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 10px; border-radius: var(--radius);
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .14em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .fab { box-shadow: var(--shadow); }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--surface-2); border-radius: 2px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 2px; height: 6px; }
        .bar { border-radius: 2px; }
        .proof li::before { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- imza: hero görselinde deri tanesi + dikiş sırası ---------- */
        .hero-visual {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow); overflow: hidden;
        }
        .hero-visual::before {
          content: ''; position: absolute; inset: 10px; pointer-events: none;
          border: 1px dashed color-mix(in srgb, var(--ink-soft) 40%, transparent);
          border-radius: calc(var(--radius-lg) - 6px);
        }
        .hero-visual::after {
          content: ''; position: absolute; right: 22px; bottom: 22px; width: 64px; height: 1px;
          background: repeating-linear-gradient(90deg, var(--ink-soft) 0 4px, transparent 4px 8px);
          pointer-events: none;
        }

        /* ---------- landing: sol üstte alet izi, sağda kesikli dikiş bandı ---------- */
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 6px;
          background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 22%, transparent) 0 6px, transparent 6px 14px);
          pointer-events: none;
        }
        body.scene-landing .sig::after {
          content: ''; position: absolute; right: -8vw; top: -10vh; width: 42vw; height: 42vw;
          background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 70%);
          opacity: .5; pointer-events: none;
        }

        /* ---------- dashboard: atölye panosu ---------- */
        body.scene-dashboard .kpis { gap: 18px; }
        body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
        body.scene-dashboard .side { background: var(--bg-2); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 32px; max-width: 20ch; }
          h2 { font-size: 22px; }
          .lede { font-size: 15px; }
          .plan, .comp-card-demo, .state-card, .auth-card, .ob-card, .modal { padding: 20px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-landing .sig::after { display: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: deri — çift dikiş kenarı + kayış dili */
        .hero-visual { position: relative; min-height: 360px; }
        .hero-visual::after {
          content: "EL DİKİŞİ · 130"; position: absolute; inset: 14px; padding: 20px;
          border: 1px solid color-mix(in srgb, var(--ink) 22%, transparent); border-radius: var(--radius);
          outline: 1px dashed color-mix(in srgb, var(--ink-soft) 45%, transparent); outline-offset: -8px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em; color: var(--ink-soft);
          background: linear-gradient(90deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 100%) 20px calc(100% - 26px) / 46% 14px no-repeat;
          pointer-events: none;
        }
      `,
    },
  },
  'optic-prism': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
        /* imza: 1px prizma (conic) kenar · ölçü bandı · 2px radius · blur 0 */
        h1 { font-size: 44px; line-height: 1.3; letter-spacing: .02em; font-weight: 400; font-family: var(--font-display); max-width: 22ch; }
        h2 { font-size: 26px; line-height: 1.3; letter-spacing: .01em; font-weight: 400; }
        h3 { font-size: 20px; line-height: 1.35; font-weight: 400; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 17px; line-height: 1.62; color: var(--ink-soft); max-width: 68ch; }
        .eyebrow, .label, .mono, .spec { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-size: 14px; letter-spacing: .06em; }

        /* prizma kenarı: 1px conic halka + iç yüzey */
        .panel, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
          border-radius: var(--radius); border: 0; background: var(--surface); box-shadow: none;
          background-image: linear-gradient(var(--surface), var(--surface)), conic-gradient(from 210deg, var(--line), color-mix(in srgb, var(--ink) 26%, transparent), var(--line), color-mix(in srgb, var(--accent) 22%, transparent), var(--line));
          background-origin: border-box; background-clip: padding-box, border-box; border: 1px solid transparent;
        }
        .visual-card, .hero-visual { border-radius: var(--radius-lg); }
        .spec-band { display: flex; gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .spec-band > * { flex: 1; padding: 10px 14px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
        .spec-band > * + * { border-left: 1px solid var(--line); }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 1px solid var(--accent); min-height: 48px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .btn:hover { background: var(--ink); border-color: var(--ink); color: var(--bg); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); }
        .field.focus, input:focus { border-color: var(--accent); outline: 2px solid var(--accent); outline-offset: 1px; }
        .chip { border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
        .kpi strong, .counter { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
        .nav { border-bottom: 1px solid var(--line); min-height: 60px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
        @media (max-width: 900px) {
          h1 { font-size: 26px; }
          h2 { font-size: 20px; }
          .spec-band > * { padding: 8px 10px; font-size: 10px; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        .hero-visual { min-height: 340px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: prizma — ayrışan tayf bantları */
        .hero-visual { position: relative; min-height: 340px; }
        .hero-visual::before {
          content: "λ 400 → 700 nm"; position: absolute; inset: 24px; padding: 16px 20px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
          background:
            linear-gradient(112deg, transparent 0 24%, color-mix(in srgb, var(--accent) 80%, transparent) 24% 30%, transparent 30%) ,
            linear-gradient(112deg, transparent 0 44%, color-mix(in srgb, var(--accent) 55%, transparent) 44% 50%, transparent 50%),
            linear-gradient(112deg, transparent 0 64%, color-mix(in srgb, var(--ink) 22%, transparent) 64% 70%, transparent 70%);
          background-repeat: no-repeat;
          pointer-events: none;
        }
      `,
    },
  },
  'wood-joinery': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* imza: 1px geçme çizgisi (en fazla 2) · ahşap damarı %3 · 4px radius · gölge yok */
        h1 { font-size: 48px; line-height: 1.1; letter-spacing: -.005em; font-weight: 600; font-family: var(--font-display); max-width: 20ch; }
        h2 { font-size: 30px; line-height: 1.14; letter-spacing: 0; font-weight: 600; }
        h3 { font-size: 22px; line-height: 1.22; font-weight: 600; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 17.5px; line-height: 1.64; color: var(--ink-soft); max-width: 62ch; }
        .eyebrow, .label, .mono, .dim { font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; }
        .brand { font-family: var(--font-display); font-weight: 600; font-size: 20px; border-bottom: 1px solid var(--line); padding-bottom: 6px; }

        /* geçme çizgisi: ekran başına en fazla 2 */
        .sec::before, .hero-copy::before {
          content: ""; display: block; width: 100%; height: 1px; background: var(--line); margin-bottom: 28px;
        }
        /* ahşap damarı: yalnız bölüm zemininde */
        .sec, .art-body, .auth-aside {
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 3%, transparent) 0 1px, transparent 1px 9px);
        }
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi {
          border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); box-shadow: none;
        }
        .visual-card, .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); border-bottom: 2px solid var(--line); background: var(--surface); box-shadow: none; }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 48px; font-family: var(--font-body); font-weight: 500; font-size: 15px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .btn:hover { background: var(--ink); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 16.5px; }
        .field.focus, input:focus { border-color: var(--ink); outline: 2px solid var(--accent); outline-offset: 1px; }
        .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
        .dim, .spec { font-family: var(--font-mono); font-size: 12px; color: var(--ink-soft); }
        .nav { border-bottom: 1px solid var(--line); min-height: 64px; }
        .nav-links a { font-size: 13px; font-weight: 500; }
        @media (max-width: 900px) {
          h1 { font-size: 30px; }
          h2 { font-size: 24px; }
          .sec, .art-body, .auth-aside { background-image: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        .hero-visual { min-height: 340px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: ahşap geçme — kırlangıç kuyruğu dişleri */
        .hero-visual { position: relative; min-height: 340px; }
        .hero-visual::before {
          content: "KIRLANGIÇ KUYRUĞU · 1:6"; position: absolute; inset: 24px; padding: 16px 20px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .18em; color: var(--ink-soft);
          background:
            repeating-linear-gradient(62deg, color-mix(in srgb, var(--ink) 26%, transparent) 0 2px, transparent 2px 12px),
            repeating-linear-gradient(-62deg, color-mix(in srgb, var(--ink) 14%, transparent) 0 2px, transparent 2px 12px),
            linear-gradient(0deg, var(--accent) 0 2px, transparent 2px) 0 100% / 100% 2px no-repeat;
          pointer-events: none;
        }
      `,
    },
  },
  'letterpress-print': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* imza: 1px deboss (yalnız başlık) · 1px iç gölge (basınç izi) · kâğıt elyafı %3 · 2px radius */
        h1 { font-size: 46px; line-height: 1.12; letter-spacing: .06em; font-weight: 600; font-family: var(--font-display); text-transform: uppercase;
          text-shadow: 0 1px 0 color-mix(in srgb, var(--surface) 90%, transparent); max-width: 20ch; }
        h2 { font-size: 28px; line-height: 1.18; letter-spacing: .04em; font-weight: 600; text-transform: uppercase; }
        h3 { font-size: 22px; line-height: 1.24; letter-spacing: .02em; font-weight: 600; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 17.5px; line-height: 1.7; color: var(--ink-soft); max-width: 58ch; }
        .eyebrow, .label, .mono, .edition { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-size: 18px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }

        /* kâğıt elyafı */
        .sec, .art-body, .auth-aside, .foot-demo {
          background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 3%, transparent) 0 1px, transparent 1px 6px);
        }
        /* basınç izi: iç gölge */
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
          border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface);
          box-shadow: inset 0 1px 0 var(--line);
        }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 46px; font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .04em; box-shadow: inset 0 1px 0 var(--line); }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
        .btn:hover { background: var(--ink); }
        .btn:active { transform: translateY(2px); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 16.5px; }
        .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
        .chip { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
        .edition { position: relative; }
        .divider, hr { height: 1px; background: var(--line); border: 0; }
        .nav { border-bottom: 1px solid var(--line); min-height: 60px; }
        .nav-links a { font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
        @media (max-width: 900px) {
          h1 { font-size: 28px; }
          h2 { font-size: 22px; }
          .sec, .art-body, .auth-aside, .foot-demo { background-image: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        .hero-visual { min-height: 340px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: tipo baskı izi — kalınlık çizgileri + hafif kabartma */
        .hero-visual { position: relative; min-height: 340px; }
        .hero-visual::before {
          content: "TİPO · 300 g/m² · 133"; position: absolute; inset: 22px; padding: 18px 20px;
          box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 16%, transparent), inset 0 -1px 0 var(--surface-2);
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
          background:
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 34%, transparent) 0 10px, transparent 10px) 20px 64px / 58% 10px no-repeat,
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 18%, transparent) 0 6px, transparent 6px) 20px 88px / 42% 6px no-repeat,
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 10%, transparent) 0 6px, transparent 6px) 20px 106px / 70% 6px no-repeat;
          pointer-events: none;
        }
      `,
    },
  },
  'concrete-monolith': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
        /* imza: kenarlık YOK · gölge YOK · radius 0 · kütle yalnız tonla · kalıp izi (1 kez) */
        h1 { font-size: 56px; line-height: 1.02; letter-spacing: -.02em; font-weight: 400; font-family: var(--font-display); text-transform: uppercase; max-width: 18ch; }
        h2 { font-size: 30px; line-height: 1.08; letter-spacing: -.01em; font-weight: 400; text-transform: uppercase; }
        h3 { font-size: 20px; line-height: 1.2; letter-spacing: 0; font-weight: 500; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 17px; line-height: 1.6; color: var(--ink-soft); max-width: 66ch; }
        .eyebrow, .label, .mono, .figure { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: -.02em; text-transform: uppercase; }

        /* kütle: hiçbir blokta kenarlık ve gölge yok */
        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual, .m-tile {
          border: 0; border-radius: 0; background: var(--surface); box-shadow: none;
        }
        .panel-2, .kpi, .plan { background: var(--surface-2); }
        .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 40px; }
        .kpi { padding: 28px; }
        .figure, .kpi strong { font-family: var(--font-mono); font-size: 24px; letter-spacing: 0; }
        /* kalıp izi: yalnız hero, 1 kez */
        body.scene-landing .sig::before {
          content: ""; position: absolute; inset: 0 0 0 0; pointer-events: none;
          background-image: repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 3%, transparent) 0 1px, transparent 1px 14px);
          opacity: .9;
        }
        .btn { border: 0; border-radius: 0; background: var(--accent); color: var(--accent-ink); min-height: 52px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; box-shadow: none; }
        .btn.ghost, .btn.soft { background: var(--surface-2); color: var(--ink); }
        .btn:hover { background: var(--ink); color: var(--bg); }
        .field, input, select, textarea { border: 0; border-radius: 0; background: var(--surface); font-family: var(--font-body); font-size: 16px; }
        .field.focus, input:focus { outline: 3px solid var(--accent); outline-offset: 0; }
        .chip { border: 0; border-radius: 0; background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); }
        .divider, hr { height: 0; background: none; border: 0; }
        .nav { border: 0; min-height: 72px; }
        .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
        @media (max-width: 900px) {
          h1 { font-size: 32px; }
          h2 { font-size: 22px; }
          .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 24px; }
          body.scene-landing .sig::before { display: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: beton kalıp — düşey ek yerleri + kalıp bağlantı delikleri */
        .hero-visual { position: relative; min-height: 360px; }
        .hero-visual::before {
          content: "C30/37 · KALIP 134"; position: absolute; inset: 0; padding: 18px 20px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
          background:
            radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--ink) 26%, transparent) 0 4px, transparent 4px) 0 0 / 96px 96px repeat,
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 14%, transparent) 0 1px, transparent 1px) 0 0 / 96px 100% repeat-x,
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 10%, transparent) 0 1px, transparent 1px) 0 0 / 100% 96px repeat-y;
          pointer-events: none;
        }
      `,
    },
  },
  'enamel-porcelain': {
    motif: 'rings',
    bodyClass: '',
    extraCss: `
        /* imza: 1px kobalt kontur · 1px sır highlight · tek 2px gölge · 6/12px radius */
        h1 { font-size: 40px; line-height: 1.2; letter-spacing: .08em; font-weight: 400; font-family: var(--font-display); max-width: 20ch; }
        h2 { font-size: 26px; line-height: 1.25; letter-spacing: .06em; font-weight: 400; }
        h3 { font-size: 19px; line-height: 1.3; letter-spacing: .02em; font-weight: 600; }
        p, .lede, .copy { font-family: var(--font-body); }
        .lede { font-size: 17px; line-height: 1.66; color: var(--ink-soft); max-width: 62ch; }
        .eyebrow, .label, .mono, .material { font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; }
        .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: .1em; }

        .panel, .panel-2, .comp-card, .state-card, .auth-card, .ob-card, .plan, .kpi, .visual-card, .hero-visual {
          border-radius: var(--radius-lg); background: var(--surface); border: 1px solid var(--line);
          box-shadow: inset 0 1px 0 var(--surface), var(--shadow);
        }
        .visual-card, .hero-visual, .plan { border-color: var(--accent); }
        .btn { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); border: 0; min-height: 48px; font-family: var(--font-body); font-weight: 600; font-size: 15px;
          box-shadow: inset 0 1px 0 color-mix(in srgb, var(--surface) 24%, transparent); }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--accent); border: 1px solid var(--accent); box-shadow: none; }
        .btn:hover { background: var(--ink); }
        .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); font-family: var(--font-body); font-size: 16px; }
        .field.focus, input:focus { border-color: var(--accent); outline: 2px solid var(--accent); outline-offset: 1px; }
        .chip { border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line); font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
        /* tek süs: 1px kobalt çizgi */
        .sec::before { content: ""; display: block; width: 64px; height: 1px; background: var(--accent); margin-bottom: 32px; }
        .material { color: var(--ink-soft); }
        .nav { border-bottom: 1px solid var(--line); min-height: 68px; }
        .nav-links a { font-size: 13px; font-weight: 500; }
        @media (max-width: 900px) {
          h1 { font-size: 26px; }
          h2 { font-size: 20px; }
          .sec::before { width: 44px; margin-bottom: 24px; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        .hero-visual { min-height: 340px; }
      `,
    scenes: {
      landing: `
        /* hero imzası: mine rozetleri — emaye çerçeve + iç halka */
        .hero-visual { position: relative; min-height: 340px; }
        .hero-visual::before {
          content: "MİNE · 135"; position: absolute; inset: 0; padding: 20px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
          background:
            radial-gradient(circle at 34% 58%, transparent 0 34px, color-mix(in srgb, var(--accent) 70%, transparent) 34px 36px, transparent 36px) 0 0 / 100% 100% no-repeat,
            radial-gradient(circle at 34% 58%, transparent 0 26px, color-mix(in srgb, var(--ink) 22%, transparent) 26px 27px, transparent 27px) 0 0 / 100% 100% no-repeat,
            radial-gradient(circle at 68% 40%, transparent 0 18px, color-mix(in srgb, var(--accent) 40%, transparent) 18px 19px, transparent 19px) 0 0 / 100% 100% no-repeat;
          pointer-events: none;
        }
      `,
    },
  },
  'speculative-scifi': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
        /* imza: gravür plaka · çift çerçeve · radyal kadran tiki · diegetic ölçü */
        body {
          background-image:
            linear-gradient(color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
          background-size: 32px 32px, 32px 32px;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: .02em; }
        h1 { font-size: 46px; line-height: 1.06; max-width: 22ch; }
        h2 { font-size: 30px; line-height: 1.14; letter-spacing: .04em; }
        h3 { font-size: 21px; line-height: 1.26; letter-spacing: .04em; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.58; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow::before { content: '◈ '; color: var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 12px; letter-spacing: .16em; text-transform: uppercase; }

        .nav {
          background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
          box-shadow: inset 0 -3px 0 -2px var(--line);
        }
        .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 500; letter-spacing: .04em; }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        /* gravür plaka: çift çerçeve, gölge yok */
        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .panel, .card, .visual-card { position: relative; }
        .panel::after, .card::after, .visual-card::after {
          content: ''; position: absolute; inset: 4px; pointer-events: none;
          border: 1px solid color-mix(in srgb, var(--ink) 10%, transparent);
        }
        /* radyal kadran tiki: hero görselinin zemini */
        .hero-visual, .visual-card {
          background-image:
            repeating-conic-gradient(from 0deg at 50% 62%, color-mix(in srgb, var(--accent) 42%, transparent) 0deg 0.6deg, transparent 0.6deg 9deg),
            radial-gradient(circle at 50% 62%, transparent 0 34%, color-mix(in srgb, var(--ink) 8%, transparent) 34% 34.4%, transparent 34.4%),
            radial-gradient(circle at 50% 62%, transparent 0 58%, color-mix(in srgb, var(--ink) 8%, transparent) 58% 58.4%, transparent 58.4%);
        }
        .btn {
          height: 38px; padding: 0 16px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
        .btn.sm { height: 30px; padding: 0 10px; font-size: 10px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase;
        }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--accent);
        }
        .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
        .bar { background: var(--accent); opacity: .7; }
        .line, .divider { background: var(--line); }
        .m-grid {
          background-image: repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 26%, transparent) 0 1px, transparent 1px 12px);
          border-radius: var(--radius-lg);
        }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .sig { border-top: 1px solid var(--accent); box-shadow: inset 0 4px 0 -3px var(--line); }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }
        /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
           ink %48 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 48%, transparent); }
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 48%, transparent);
        }
      `,
    scenes: {
      landing: `

        /* 01 · landing — gravür plaka: çift çerçeve + kadran + mono kayıt satırları */
        .scene-landing .hero-visual { background-color: var(--bg-2); border: 1px solid var(--ink); }
        .scene-landing .hero-visual::before {
          content: ""; position: absolute; inset: 10px; pointer-events: none;
          border: 1px solid color-mix(in srgb, var(--ink) 16%, transparent);
        }
        .scene-landing .visual-card { width: 64%; border: 1px solid var(--ink); box-shadow: none; }
        .scene-landing .visual-card::before {
          content: "◈ SEKTÖR 7 · KAYIT 12"; display: block; margin-bottom: 4px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em;
          text-transform: uppercase; color: var(--accent);
        }
        .scene-landing .visual-card .bar { height: 2px; border: 0; border-radius: 0; background: color-mix(in srgb, var(--ink) 18%, transparent); }
        .scene-landing .visual-card .bar.accent { width: 46%; background: var(--accent); }
        .scene-landing .visual-row .line { height: 1px; background: color-mix(in srgb, var(--ink) 24%, transparent); }
        .scene-landing .visual-row .num { font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em; color: var(--ink); }
        .scene-landing .visual-row .sq { border-radius: 0; background: var(--accent); }
      `,
    },
  },
  'volumetric-data': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* imza: nokta bulutu yoğunluğu · projeksiyon ızgarası · kesit barı · eksen etiketi */
        body {
          background-image: radial-gradient(color-mix(in srgb, var(--ink) 14%, transparent) 1px, transparent 1px);
          background-size: 8px 8px;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
        h1 { font-size: 40px; line-height: 1.12; max-width: 24ch; }
        h2 { font-size: 28px; line-height: 1.2; }
        h3 { font-size: 20px; line-height: 1.28; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 60ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow::before { content: '▦ '; color: var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 13px; font-weight: 600; letter-spacing: .02em; }

        .nav { background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none;
        }
        .comp-card-demo, .state-card { box-shadow: var(--shadow); }
        /* projeksiyon hacmi: nokta bulutu + izdüşüm ızgarası */
        .hero-visual, .visual-card {
          background-image:
            radial-gradient(color-mix(in srgb, var(--accent) 42%, transparent) 1px, transparent 1px),
            linear-gradient(color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1px);
          background-size: 7px 7px, 28px 28px, 28px 28px;
        }
        .btn {
          height: 40px; padding: 0 16px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
        .btn.sm { height: 30px; padding: 0 10px; font-size: 10px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 50%, transparent); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line);
          font-family: var(--font-mono); font-size: 13px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 16%, transparent); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 46%, transparent); }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .02em; }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
        /* kesit barı */
        .bar { background: color-mix(in srgb, var(--accent) 55%, transparent); border-radius: var(--radius); }
        .line, .divider { background: var(--line); }
        .m-grid {
          background-image:
            radial-gradient(color-mix(in srgb, var(--accent) 50%, transparent) 1px, transparent 1px),
            linear-gradient(color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px);
          background-size: 6px 6px, 24px 24px; border-radius: var(--radius-lg);
        }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .sig { box-shadow: inset 0 1px 0 color-mix(in srgb, var(--accent) 40%, transparent); }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }
      `,
    scenes: {
      landing: `

        /* 01 · landing — hacim kesiti: nokta bulutu + eşik çizgisi + eksen toleransı */
        .scene-landing .hero-visual {
          background-color: var(--bg);
          background-image: radial-gradient(color-mix(in srgb, var(--accent) 42%, transparent) 1px, transparent 1px);
          background-size: 7px 7px;
        }
        .scene-landing .hero-visual::before {
          content: ""; position: absolute; left: 8%; right: 8%; top: 50%; height: 1px;
          background: color-mix(in srgb, var(--accent) 55%, transparent); pointer-events: none;
        }
        .scene-landing .visual-card { width: 56%; background: color-mix(in srgb, var(--surface) 86%, transparent); }
        .scene-landing .visual-card::before {
          content: "KESİT · z 0.42"; display: block; margin-bottom: 6px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--accent);
        }
        .scene-landing .visual-card .bar { height: 10px; border: 0; border-radius: 2px; background: color-mix(in srgb, var(--accent) 26%, transparent); }
        .scene-landing .visual-card .bar.accent { width: 42%; background: var(--accent); }
        .scene-landing .visual-row .line { background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 70%, transparent) 0 6px, transparent 6px 12px); }
        .scene-landing .visual-row .num::after { content: " ±0.03"; color: var(--ink-soft); }
      `,
    },
  },
  'agent-orchestration': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* imza: numaralı iz rayı · onay kapısı (2px accent) · gerekçe/atıf şeridi */
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: -.01em; }
        h1 { font-size: 34px; line-height: 1.16; max-width: 26ch; }
        h2 { font-size: 24px; line-height: 1.26; }
        h3 { font-size: 18px; line-height: 1.32; }
        .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.55; max-width: 66ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
        .eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 999px; background: var(--accent); }
        .brand { font-family: var(--font-display); font-size: 14px; font-weight: 700; }
        body { font-variant-numeric: tabular-nums; }

        .nav { height: 50px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; color: var(--ink-soft); }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        /* iz rayı: numaralı satır + dikey konektör */
        .card, .comp-card-demo, .state-card { position: relative; padding-left: 44px; }
        .card::before, .comp-card-demo::before, .state-card::before {
          content: ''; position: absolute; left: 27px; top: 18px; bottom: 18px; width: 1px;
          background: color-mix(in srgb, var(--ink) 14%, transparent);
        }
        .card::after, .comp-card-demo::after, .state-card::after {
          content: ''; position: absolute; left: 24px; top: 18px; width: 7px; height: 7px;
          border-radius: 999px; background: var(--accent);
        }
        /* onay kapısı: 2px accent çerçeve */
        .modal, .state-card[data-gate] { border-width: 2px; border-color: var(--accent); }
        .btn {
          height: 36px; padding: 0 14px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn.sm { height: 28px; padding: 0 10px; font-size: 12px; }
        .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 14px;
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 28%, transparent); outline-offset: 1px;
        }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 12%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 34%, transparent); }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; }
        /* gerekçe/atıf şeridi */
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .bar { background: color-mix(in srgb, var(--accent) 30%, transparent); border-radius: var(--radius); }
        .line, .divider { background: var(--line); }
        .m-grid { background-image: none; }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .sig { border-left: 2px solid var(--accent); }
        .hero-visual, .visual-card {
          background-image: linear-gradient(180deg, color-mix(in srgb, var(--accent) 7%, transparent), transparent 60%);
        }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }
        /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
           ink %48 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 48%, transparent); }
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 48%, transparent);
        }
      `,
    scenes: {
      landing: `

        /* 01 · landing — ajan izi: numaralı dikey ray + durum metinleri */
        .scene-landing .visual-card { width: 62%; }
        .scene-landing .visual-card::before {
          content: "İZ · 3 ADIM"; display: block; margin-bottom: 6px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--accent);
        }
        .scene-landing .visual-rows { position: relative; padding-left: 18px; }
        .scene-landing .visual-rows::before {
          content: ""; position: absolute; left: 4px; top: 6px; bottom: 6px; width: 1px; background: var(--line);
        }
        .scene-landing .visual-row { position: relative; }
        .scene-landing .visual-row .sq { width: 7px; height: 7px; border-radius: 999px; background: var(--accent); }
        .scene-landing .visual-row:first-child::before {
          content: "ÇALIŞIYOR"; position: absolute; right: 0; top: 0;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .06em; color: var(--accent);
        }
        .scene-landing .visual-row:nth-child(2)::before {
          content: "ONAY BEKLİYOR"; position: absolute; right: 0; top: 0;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: .06em; color: var(--ink-soft);
        }
      `,
    },
  },
  'bio-synthetic': {
    motif: 'blob',
    bodyClass: '',
    extraCss: `
        /* imza: zar halkası · hücre noktası · yumuşak köşe · kültür etiketi */
        body {
          background-image:
            radial-gradient(60% 46% at 14% 4%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 72%),
            radial-gradient(44% 38% at 92% 96%, color-mix(in srgb, var(--accent) 7%, transparent) 0%, transparent 70%);
          background-repeat: no-repeat;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: 0; }
        h1 { font-size: 50px; line-height: 1.1; max-width: 20ch; }
        h2 { font-size: 34px; line-height: 1.16; }
        h3 { font-size: 24px; line-height: 1.26; }
        .lede { font-family: var(--font-body); font-size: 17px; line-height: 1.68; max-width: 56ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
        .eyebrow::before {
          content: ''; width: 10px; height: 10px; border-radius: 999px;
          border: 1.5px solid var(--accent); box-shadow: inset 0 0 0 2px var(--bg);
        }
        .brand { font-family: var(--font-display); font-size: 21px; font-weight: 600; }

        .nav {
          background: color-mix(in srgb, var(--bg) 86%, var(--surface));
          border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        }
        .nav-links a { font-family: var(--font-body); font-size: 16px; font-weight: 600; color: var(--ink-soft); }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        /* zar halkası + hücre noktası */
        .panel, .card, .visual-card, .comp-card-demo { position: relative; overflow: hidden; }
        .panel::before, .card::before, .visual-card::before, .comp-card-demo::before {
          content: ''; position: absolute; inset: 0 0 auto 0; height: 1px;
          background: color-mix(in srgb, var(--accent) 22%, transparent);
        }
        .panel::after, .card::after, .visual-card::after {
          content: ''; position: absolute; top: 16px; right: 16px; width: 8px; height: 8px;
          border-radius: 999px; background: color-mix(in srgb, var(--accent) 70%, transparent);
        }
        /* hücre kümesi: hero görseli */
        .hero-visual, .visual-card {
          background-image:
            repeating-radial-gradient(circle at 62% 44%, transparent 0 22px, color-mix(in srgb, var(--accent) 24%, transparent) 22px 23px),
            radial-gradient(circle at 30% 70%, color-mix(in srgb, var(--accent) 14%, transparent) 0 12%, transparent 13%);
        }
        .btn {
          height: 48px; padding: 0 26px; border-radius: 999px; border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-body); font-size: 16px; font-weight: 600;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn:active { transform: scale(.985); }
        .btn.sm { height: 38px; padding: 0 18px; font-size: 14px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field input, .field select, .field textarea {
          border-radius: 999px; background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 16px;
        }
        .field textarea { border-radius: var(--radius-lg); }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 36%, transparent); outline-offset: 2px;
        }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
          font-family: var(--font-mono); font-size: 12px; letter-spacing: .08em;
        }
        .chip.accent { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 40%, transparent); }
        .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 600; }
        .table th {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
        }
        .table td { border-bottom: 1px solid var(--line); }
        .bar { background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 30%, transparent)); border-radius: 999px; }
        .line, .divider { background: var(--line); }
        .m-grid {
          background-image: radial-gradient(color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px);
          background-size: 16px 16px; border-radius: var(--radius-lg);
        }
        .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
        .sig { background: radial-gradient(60% 60% at 50% 100%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%); }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }
        /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
           ink %36 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 36%, transparent); }
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 36%, transparent);
        }
      `,
    scenes: {
      landing: `

        /* 01 · landing — hücre kümesi: zar halkaları + parti etiketi + hap barlar */
        .scene-landing .visual-card { width: 60%; border-radius: 32px; }
        .scene-landing .visual-card::before {
          content: "LOT-2291 · P3"; display: block; margin-bottom: 6px;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--accent);
        }
        .scene-landing .visual-card .bar { height: 8px; border: 0; border-radius: 999px; background: color-mix(in srgb, var(--accent) 22%, transparent); }
        .scene-landing .visual-card .bar.accent { width: 38%; background: var(--accent); }
        .scene-landing .visual-row .sq { border-radius: 999px; background: color-mix(in srgb, var(--accent) 70%, var(--surface)); }
        .scene-landing .hero-visual::before {
          content: ""; position: absolute; left: 12%; top: 18%; width: 26px; height: 26px;
          border-radius: 999px; border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          pointer-events: none;
        }
        .scene-landing .hero-visual::after {
          content: ""; position: absolute; right: 14%; bottom: 16%; width: 46px; height: 46px;
          border-radius: 999px; border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent);
          pointer-events: none;
        }
      `,
    },
  },
  'nanotech': {
    motif: 'dots',
    bodyClass: 'upper',
    extraCss: `
        /* imza: karbon kafes · nokta ızgarası · nm ölçü etiketi · monokrom accent */
        body {
          background-image: radial-gradient(color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px);
          background-size: 8px 8px;
        }
        h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; }
        h1 { font-size: 42px; line-height: 1.08; max-width: 22ch; }
        h2 { font-size: 27px; line-height: 1.18; letter-spacing: .02em; }
        h3 { font-size: 19px; line-height: 1.26; }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 64ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
        .eyebrow::before { content: ''; width: 3px; height: 3px; background: var(--accent); box-shadow: 6px 0 0 var(--accent), 12px 0 0 var(--accent); }
        .brand { font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }

        .nav {
          background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
          box-shadow: inset 0 -8px 0 -7px color-mix(in srgb, var(--ink) 14%, transparent);
        }
        .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 500; }
        .nav-links a[aria-current], .nav-links a.active { color: var(--accent); box-shadow: inset 0 -2px 0 var(--accent); }

        .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: var(--shadow);
        }
        /* kafes noktası: kart sol üst */
        .panel, .card, .visual-card, .kpi { position: relative; }
        .panel::before, .card::before, .visual-card::before, .kpi::before {
          content: ''; position: absolute; top: 8px; left: 8px; width: 3px; height: 3px;
          background: var(--accent); box-shadow: 4px 0 0 var(--accent), 0 4px 0 var(--accent), 4px 4px 0 var(--accent);
          opacity: .55;
        }
        /* kafes sahnesi: altıgen bağ + nokta */
        .hero-visual, .visual-card {
          background-image:
            repeating-linear-gradient(60deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px 18px),
            repeating-linear-gradient(-60deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px 18px),
            radial-gradient(color-mix(in srgb, var(--accent) 60%, transparent) 1.2px, transparent 1.3px);
          background-size: auto, auto, 18px 18px;
        }
        .btn {
          height: 36px; padding: 0 14px; border-radius: var(--radius); border: 1px solid transparent;
          background: var(--accent); color: var(--accent-ink); box-shadow: none;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
        }
        .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
        .btn.sm { height: 28px; padding: 0 10px; font-size: 10px; }
        .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
        .field input, .field select, .field textarea {
          border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
          font-family: var(--font-body); font-size: 15px;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .chip {
          background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
        }
        .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
        .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .02em; }
        .table th {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--ink);
        }
        .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
        .bar { background: color-mix(in srgb, var(--accent) 70%, transparent); border-radius: var(--radius); }
        .line, .divider { background: var(--line); }
        .m-grid {
          background-image:
            repeating-linear-gradient(60deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px 16px),
            repeating-linear-gradient(-60deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px 16px);
          border-radius: var(--radius-lg);
        }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
        .sig { border-top: 1px solid color-mix(in srgb, var(--ink) 30%, transparent); }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }
        /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
           ink %48 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 48%, transparent); }
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 48%, transparent);
        }

        /* D3b: nav aktif göstergesi metnin altına iner (inset gölge için alt padding) */
        .nav-links a { padding-bottom: 4px; }
      `,
    scenes: {
      landing: `

        /* 01 · landing — nanometre ölçüm levhası: kafes düğümleri + mono ölçüler */
        .scene-landing .visual-card { width: 58%; }
        .scene-landing .visual-card::before {
          content: "Ø 42 nm · ±1.5 nm"; display: block; margin-bottom: 6px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--accent);
        }
        .scene-landing .visual-card .bar { height: 2px; border: 0; border-radius: 0; background: color-mix(in srgb, var(--ink) 20%, transparent); }
        .scene-landing .visual-card .bar.accent { width: 34%; background: var(--accent); }
        .scene-landing .visual-row .sq { border-radius: 1px; background: var(--accent); opacity: .7; }
        .scene-landing .hero-visual::before {
          content: ""; position: absolute; inset: 16px; pointer-events: none; opacity: .5;
          background-image: radial-gradient(color-mix(in srgb, var(--accent) 60%, transparent) 1.4px, transparent 1.5px);
          background-size: 18px 18px;
        }
      `,
    },
  },
  'planetary-service': {
    motif: 'rings',
    bodyClass: 'upper',
    extraCss: `
      /* imza: eşmerkezli yörünge halkaları + mono telemetri ızgarası + pencere sayacı */
      .motif-rings::before {
        background:
          radial-gradient(circle at 50% 52%, transparent 0 58px, var(--line) 58px 59px, transparent 59px 104px,
            var(--accent) 104px 105px, transparent 105px 168px, var(--line) 168px 169px, transparent 169px 236px,
            var(--accent) 236px 237px, transparent 237px);
        opacity: .85;
      }
      h1 { font-family: var(--font-display); font-weight: 600; font-size: 42px; line-height: 1.1; letter-spacing: var(--tracking); max-width: 24ch; }
      h2 { font-family: var(--font-display); font-weight: 600; font-size: 24px; line-height: 1.24; letter-spacing: .02em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 18px; line-height: 1.3; letter-spacing: 0; text-transform: none; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 13px; text-transform: none; }
      .lede { max-width: 64ch; font-size: 14px; line-height: 1.55; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      body { font-variant-numeric: tabular-nums; }

      .nav { height: 52px; padding: 0 24px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 14px; letter-spacing: .14em; }
      .nav-links a { font-family: var(--font-mono); font-size: 12px; letter-spacing: .04em; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .table, .side {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; background: var(--surface);
      }
      .kpi { border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); box-shadow: none; }
      .kpi .v, .kpi .num-big, .big404 { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
      .hero-visual {
        border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        background: var(--bg-2);
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 24px 24px;
      }
      /* yörünge izdüşümü: hero içinde tek halka + cisim */
      .hero-visual::after {
        content: ""; position: absolute; left: 50%; top: 50%; width: 168px; height: 168px; z-index: 1;
        transform: translate(-50%, -50%); border-radius: 999px; pointer-events: none;
        border: 1px solid var(--accent); opacity: .5;
      }
      .hero-visual::before {
        content: ""; position: absolute; left: 50%; top: 50%; width: 8px; height: 8px; z-index: 2;
        transform: translate(-50%, -50%); border-radius: 999px; pointer-events: none;
        background: var(--ink);
      }

      .btn {
        min-height: 38px; padding: 0 14px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-mono); font-size: 12px; font-weight: 600; letter-spacing: .06em;
      }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius);
        background: var(--bg-2); color: var(--ink);
        font-family: var(--font-mono); font-size: 12px; min-height: 38px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 22px; padding: 0 8px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
      .track { border-radius: 999px; background: var(--surface-2); height: 6px; }
      .track i { border-radius: 999px; background: var(--accent); }
      .opt .box { border-radius: 4px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .1em; font-size: 10px; }
      .proof li::before { background: var(--accent); border-radius: 999px; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 36px; }
      .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

      /* sayfa atmosferi: yıldız tozu + tek yörünge yayı; süs ≤ .18 */
      body.scene-landing .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image: radial-gradient(var(--ink-faint) 1px, transparent 1.4px);
        background-size: 96px 96px; opacity: .18;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; right: -10vw; top: -14vh; width: 56vw; height: 56vw;
        border-radius: 999px; pointer-events: none;
        border: 1px solid var(--accent); opacity: .18;
      }
      @media (max-width: 900px) {
        h1 { font-size: 26px; max-width: 24ch; }
        .hero-visual::after { width: 120px; height: 120px; }
        body.scene-landing .sig::after { display: none; }
      }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }
        /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
           ink %40 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 40%, transparent); }
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 40%, transparent);
        }

        /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
        .eyebrow, .label, .mono { color: var(--ink-soft); }
        .table th, .mini-table th { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `

        /* 01 · landing — telemetri penceresi: 24px ızgara + yörünge halkası + mono pencere no */
        .scene-landing .hero-visual {
          background-color: var(--bg-2);
          background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .scene-landing .visual-card {
          width: 58%; border-radius: 0; border: 1px solid var(--line);
          background: color-mix(in srgb, var(--surface) 90%, transparent);
        }
        .scene-landing .visual-card::before {
          content: "PENCERE 04 · YÖRÜNGE"; display: block; margin-bottom: 6px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; color: var(--accent);
        }
        .scene-landing .hero-visual::after {
          width: 58%; height: auto; aspect-ratio: 1;
          border-color: color-mix(in srgb, var(--accent) 55%, transparent);
        }
        .scene-landing .visual-row .sq { border-radius: 0; background: var(--accent); }
        .scene-landing .visual-row .num { font-family: var(--font-mono); font-size: 10px; color: var(--accent); }
      `,
    },
  },
  'quantum-lab': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
      /* imza: olasılık bulutu (nokta) + 0 radius + Courier Prime daktilo başlık */
      .motif-dots::before {
        background-image:
          radial-gradient(var(--ink) 1px, transparent 1.2px),
          radial-gradient(var(--accent) 1.4px, transparent 1.6px);
        background-size: 14px 14px, 22px 22px;
        background-position: 0 0, 7px 9px;
        opacity: .5;
      }
      *, *::before, *::after { border-radius: 0 !important; }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 40px; line-height: 1.14; letter-spacing: var(--tracking); max-width: 26ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 25px; line-height: 1.24; letter-spacing: .01em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 19px; line-height: 1.32; letter-spacing: 0; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 13px; }
      .lede { max-width: 66ch; font-size: 15px; line-height: 1.58; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      body { font-variant-numeric: tabular-nums; }

      .nav { height: 46px; padding: 0 20px; border-bottom: 1px solid var(--ink); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 16px; letter-spacing: .01em; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi, .table, .side {
        border: 1px solid var(--ink); border-radius: 0; box-shadow: none; backdrop-filter: none; background: var(--surface);
      }
      .hero-visual { border: 1px solid var(--ink); border-radius: 0; box-shadow: none; background: var(--surface); overflow: hidden; }
      /* ölçüm histogramı: iki katmanlı çubuk dizisi (maske yok) */
      .hero-visual::after {
        content: ""; position: absolute; left: 8%; right: 8%; bottom: 10%; height: 46%; z-index: 1; pointer-events: none;
        background-image:
          repeating-linear-gradient(90deg, var(--ink) 0 6px, transparent 6px 18px),
          repeating-linear-gradient(90deg, var(--accent) 0 6px, transparent 6px 42px);
        background-size: 100% 62%, 100% 88%;
        background-position: 0 100%, 0 100%;
        background-repeat: repeat-x, repeat-x;
        opacity: .45;
      }

      .btn {
        min-height: 36px; padding: 0 14px; border-radius: 0; box-shadow: none;
        font-family: var(--font-display); font-size: 13px; font-weight: 400; letter-spacing: .01em;
      }
      .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
      .field, input, select, textarea {
        border: 1px solid var(--ink); border-radius: 0; background: var(--surface); color: var(--ink);
        font-family: var(--font-mono); font-size: 12px; min-height: 36px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip {
        height: 20px; padding: 0 8px; border-radius: 0; border: 1px solid var(--ink);
        background: var(--surface-2); font-family: var(--font-display); font-size: 11px; letter-spacing: .01em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); }
      .mark { border-radius: 0; background: var(--ink); color: var(--surface); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 0; border: 1px solid var(--ink); }
      .icon-btn { border-radius: 0; border: 1px solid var(--ink); background: var(--surface); }
      .divider { height: 1px; background: var(--ink); opacity: .45; }
      .tabbar { border-top: 1px solid var(--ink); background: var(--bg); }
      .track { border-radius: 0; background: var(--surface-2); border: 1px solid var(--ink); height: 10px; }
      .track i { border-radius: 0; background: var(--accent); }
      .opt .box { border-radius: 0; }
      .logo-strip { border-top: 1px solid var(--ink); font-family: var(--font-mono); letter-spacing: .12em; font-size: 10px; }
      .proof li::before { background: var(--accent); border-radius: 0; }
      .bar:not(.accent) { background: var(--ink); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 32px; }
      .table .trow:last-child, tr:last-child { border-top: 1px solid var(--ink); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

      /* sayfa atmosferi: nokta bulutu, metin opak katmanda; süs ≤ .10 */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image:
          radial-gradient(var(--ink) 1px, transparent 1.2px),
          radial-gradient(var(--accent) 1.2px, transparent 1.4px);
        background-size: 18px 18px, 26px 26px;
        background-position: 0 0, 9px 11px;
        opacity: .10;
      }
      @media (max-width: 900px) {
        h1 { font-size: 25px; max-width: 24ch; }
        body.scene-landing .sig::before { opacity: .06; }
      }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }

        /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
        .eyebrow, .label, .mono { color: var(--ink-soft); }
        .table th, .mini-table th { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `

        /* 01 · landing — olasılık bulutu + histogram (6px çubuk, iki katman) */
        .scene-landing .hero-visual {
          background-color: var(--surface);
          background-image:
            radial-gradient(color-mix(in srgb, var(--ink) 22%, transparent) 1px, transparent 1.2px),
            radial-gradient(color-mix(in srgb, var(--accent) 30%, transparent) 1.2px, transparent 1.4px);
          background-size: 14px 14px, 22px 22px;
        }
        .scene-landing .visual-card { position: relative; width: 60%; border-radius: 0; border: 1px solid var(--ink); background: var(--surface); }
        .scene-landing .visual-card::before {
          content: "ψ · 0.42 ± 0.03"; display: block; margin-bottom: 6px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em; color: var(--ink);
        }
        .scene-landing .visual-card .bar { height: 6px; border: 0; border-radius: 0; background: color-mix(in srgb, var(--ink) 24%, transparent); }
        .scene-landing .visual-card .bar.accent { width: 47%; background: var(--accent); }
        .scene-landing .visual-card::after {
          content: ""; position: absolute; left: 16px; right: 16px; bottom: 14px; height: 18px;
          background-image: repeating-linear-gradient(90deg, var(--ink) 0 6px, transparent 6px 18px);
          background-size: 100% 60%; background-repeat: repeat-x; background-position: 0 100%;
          opacity: .35; pointer-events: none;
        }
      `,
    },
  },
  'retro-future': {
    motif: 'bars',
    bodyClass: 'upper',
    extraCss: `
      /* imza: uzay çağı afişi — geniş harf aralığı, 3px alt kural, yörünge yayı, hız çizgileri */
      .motif-bars::before {
        background:
          linear-gradient(0deg, transparent 0%, var(--accent) 22%, var(--accent) 30%, transparent 52%),
          linear-gradient(0deg, transparent 0%, var(--accent) 44%, var(--accent) 50%, transparent 66%),
          linear-gradient(0deg, transparent 0%, var(--accent) 64%, var(--accent) 68%, transparent 78%);
        background-size: 100% 6px, 100% 3px, 100% 2px;
        background-position: 0 62%, 0 74%, 0 84%;
        background-repeat: no-repeat;
        opacity: .5;
      }
      h1 { font-family: var(--font-display); font-weight: 600; font-size: 56px; line-height: 1.04; letter-spacing: var(--tracking); max-width: 22ch; text-transform: uppercase; }
      h2 { font-family: var(--font-display); font-weight: 600; font-size: 30px; line-height: 1.16; letter-spacing: .06em; text-transform: uppercase; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 21px; line-height: 1.28; letter-spacing: 0; text-transform: none; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; text-transform: none; }
      .lede { max-width: 56ch; font-size: 16px; line-height: 1.62; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .22em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      /* uzay çağı başlığı: 3px alt kural, kağıttan kesilmiş panel */
      .nav { height: 60px; padding: 0 28px; border-bottom: 3px solid var(--ink); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: .14em; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .06em; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
        border: 1px solid var(--ink); border-radius: var(--radius-lg);
        box-shadow: var(--shadow), 0 3px 0 var(--ink); backdrop-filter: none; background: var(--surface);
      }
      .kpi { border-radius: var(--radius); }
      .table { border: 1px solid var(--ink); border-radius: var(--radius-lg); overflow: hidden; box-shadow: 0 3px 0 var(--ink); background: var(--surface); }
      .hero-visual { border: 1px solid var(--ink); border-radius: var(--radius-lg); box-shadow: 0 3px 0 var(--ink); background: var(--surface-2); overflow: hidden; }
      /* yörünge yayı: hero görselin alt yarısında yarım daire */
      .hero-visual::after {
        content: ""; position: absolute; left: 50%; bottom: -46%; width: 120%; height: 120%; z-index: 0;
        transform: translateX(-50%); border-radius: 999px; pointer-events: none;
        border: 2px solid var(--accent); opacity: .45;
      }
      .hero-visual::before {
        content: ""; position: absolute; right: 16%; top: 22%; width: 10px; height: 10px; z-index: 1;
        border-radius: 999px; background: var(--accent); pointer-events: none;
      }

      .btn {
        min-height: 44px; padding: 0 26px; border-radius: 999px; box-shadow: var(--shadow);
        font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: none;
      }
      .btn.sm { min-height: 34px; padding: 8px 18px; font-size: 12px; }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--ink); color: var(--ink); box-shadow: none; }
      .field, input, select, textarea {
        border: 1px solid var(--ink); border-radius: var(--radius); background: var(--surface); color: var(--ink);
        font-family: var(--font-body); font-size: 15px; min-height: 44px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 26px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--ink);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); }
      .mark { border-radius: 999px; background: var(--ink); color: var(--surface); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; border: 1px solid var(--ink); }
      .icon-btn { border-radius: 999px; border: 1px solid var(--ink); background: var(--surface); }
      .divider { height: 3px; background: var(--ink); }
      .tabbar { border-top: 3px solid var(--ink); background: var(--bg); }
      .track { border-radius: 999px; background: var(--surface-2); border: 1px solid var(--ink); height: 10px; }
      .track i { border-radius: 999px; background: var(--accent); }
      .opt .box { border-radius: 6px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 3px solid var(--ink); letter-spacing: .2em; font-size: 11px; }
      .proof li::before { background: var(--accent); border-radius: 999px; }
      .bar:not(.accent) { background: var(--ink); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 42px; }
      .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }

      /* sayfa atmosferi: yörünge yayı + hız çizgileri; süs ≤ .20 */
      body.scene-landing .sig::before {
        content: ""; position: absolute; left: 50%; bottom: -34vh; width: 120vw; height: 120vw;
        transform: translateX(-50%); border-radius: 999px; pointer-events: none;
        border: 2px solid var(--accent); opacity: .20;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: 0; right: 0; top: 30%; height: 7px; pointer-events: none;
        background: repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 18px);
        opacity: .18;
      }
      @media (max-width: 900px) {
        h1 { font-size: 32px; max-width: 20ch; }
        body.scene-landing .sig::before { bottom: -22vh; }
        body.scene-landing .sig::after { display: none; }
      }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }

        /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
        .eyebrow, .label, .mono { color: var(--ink-soft); }
        .table th, .mini-table th { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `

        /* 01 · landing — yörünge yayı + yapıştırılmış panel (3px alt kural) */
        .scene-landing .hero-visual { background: var(--surface-2); border: 1px solid var(--ink); box-shadow: 0 3px 0 var(--ink); }
        .scene-landing .visual-card {
          width: 60%; border: 1px solid var(--ink); box-shadow: 0 3px 0 var(--ink);
          border-radius: var(--radius-lg);
        }
        .scene-landing .visual-card::before {
          content: "YÖRÜNGE · 1962"; display: block; margin-bottom: 6px;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .22em;
          text-transform: uppercase; color: var(--accent);
        }
        .scene-landing .visual-card .bar { height: 3px; border: 0; border-radius: 999px; background: color-mix(in srgb, var(--ink) 20%, transparent); }
        .scene-landing .visual-card .bar.accent { width: 36%; background: var(--accent); }
        .scene-landing .hero-visual::after { width: 96%; height: 96%; bottom: -38%; }
        .scene-landing .visual-row .sq { border-radius: 999px; background: var(--accent); }
      `,
    },
  },
  'virtual-engine': {
    motif: 'none',
    bodyClass: 'upper',
    extraCss: `
      /* imza: ortografik dünya ızgarası (hero + sayfa zemininde) + viewport/denetçi üçlüsü + konsol */
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 46px; line-height: 1.08; letter-spacing: var(--tracking); max-width: 28ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 28px; line-height: 1.2; letter-spacing: .01em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; line-height: 1.3; letter-spacing: 0; text-transform: none; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; text-transform: none; }
      .lede { max-width: 70ch; font-size: 14px; line-height: 1.54; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }
      body { font-variant-numeric: tabular-nums; }

      .nav { height: 46px; padding: 0 16px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
      .brand { font-family: var(--font-display); font-size: 18px; letter-spacing: .08em; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi, .table, .side {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: none; backdrop-filter: none; background: var(--surface);
      }
      .kpi, .m-tile { border-radius: var(--radius); }
      .hero-visual {
        border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        background: var(--bg-2);
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 32px 32px;
      }
      /* viewport ekseni: köşede iki eksen oku + seçili varlık çerçevesi */
      .hero-visual::after {
        content: ""; position: absolute; left: 12%; top: 16%; width: 24%; height: 34%; z-index: 1;
        border: 1px solid var(--accent); border-radius: 2px; pointer-events: none;
        box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent);
      }
      .hero-visual::before {
        content: ""; position: absolute; left: 8%; bottom: 8%; width: 44px; height: 1px; z-index: 1;
        background: var(--ink-faint); pointer-events: none;
        box-shadow: 0 -44px 0 -0.5px var(--ink-faint);
      }

      .btn {
        min-height: 34px; padding: 0 14px; border-radius: var(--radius); box-shadow: none;
        font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .06em;
      }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-2); color: var(--ink);
        font-family: var(--font-mono); font-size: 12px; min-height: 34px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
      .chip {
        height: 22px; padding: 0 8px; border-radius: var(--radius); border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-display); font-size: 12px; letter-spacing: .04em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
      .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--surface-2); }
      .track { border-radius: 2px; background: var(--surface-2); height: 5px; }
      .track i { border-radius: 2px; background: var(--accent); }
      .opt .box { border-radius: 3px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); font-family: var(--font-mono); letter-spacing: .1em; font-size: 10px; }
      .proof li::before { background: var(--accent); border-radius: 1px; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 30px; }
      .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
      .table .trow:first-child, tr:first-child { border-left: 3px solid var(--accent); }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

      /* sayfa atmosferi: dünya ızgarası + alt konsol satırı; süs ≤ .25 */
      body.scene-landing .sig::before, body.scene-dashboard .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        background-image:
          linear-gradient(var(--line) 1px, transparent 1px),
          linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 32px 32px; opacity: .6;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 26px; pointer-events: none;
        border-top: 1px solid var(--line); background: var(--surface-2);
        background-image: repeating-linear-gradient(90deg, var(--ink-faint) 0 22px, transparent 22px 74px);
        background-size: 100% 4px; background-repeat: no-repeat; background-position: 0 center;
        opacity: .45;
      }
      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 24ch; }
        .hero-visual::after { width: 32%; height: 28%; }
        body.scene-landing .sig::after { height: 18px; }
      }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }
        /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
           ink %40 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 40%, transparent); }
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 40%, transparent);
        }

        /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
        .eyebrow, .label, .mono { color: var(--ink-soft); }
        .table th, .mini-table th { color: var(--ink-soft); }

        /* D4: opak dekor şeridi (26px --surface-2 bandı) 1px taban çizgisine indirildi */
        body .sig::after {
          height: 1px; border-top: 0; background: var(--line); background-image: none; opacity: .8;
        }
      `,
    scenes: {
      landing: `

        /* 01 · landing — viewport: 32px ızgara + seçim çerçevesi + varlık satırları */
        .scene-landing .hero-visual {
          background-color: var(--bg-2);
          background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scene-landing .visual-card {
          width: 62%; border: 1px solid var(--accent);
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent);
        }
        .scene-landing .visual-card::before {
          content: "VİTRİN · 3 VARLIK"; display: block; margin-bottom: 4px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em;
          text-transform: uppercase; color: var(--accent);
        }
        .scene-landing .visual-row {
          height: 30px; padding-left: 6px; border-bottom: 1px solid var(--line);
          box-shadow: inset 3px 0 0 var(--accent);
        }
        .scene-landing .visual-row .sq { width: 10px; height: 10px; border-radius: 2px; background: color-mix(in srgb, var(--accent) 70%, transparent); }
        .scene-landing .visual-row .num { font-family: var(--font-mono); font-size: 10px; color: var(--ink-soft); }
        .scene-landing .visual-card .bar { height: 4px; border: 0; border-radius: 2px; }
      `,
    },
  },
  'zero-gravity': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
      /* imza: yüzen kartlar (kademeli dikey kayma) + ince yörünge yayı + geniş radius */
      /* yıldız tozu: iki nokta ızgarası + tek soluk accent lekesi */
      .motif-dots::before {
        background-image:
          radial-gradient(var(--line) 1.4px, transparent 1.6px),
          radial-gradient(var(--accent) 1.2px, transparent 1.4px),
          radial-gradient(40% 34% at 70% 22%, var(--accent) 0%, transparent 70%);
        background-size: 22px 22px, 38px 38px, 100% 100%;
        background-position: 0 0, 11px 15px, 0 0;
        background-repeat: repeat, repeat, no-repeat;
        opacity: .35;
      }
      h1 { font-family: var(--font-display); font-weight: 400; font-size: 48px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 24ch; }
      h2 { font-family: var(--font-display); font-weight: 400; font-size: 27px; line-height: 1.22; letter-spacing: .03em; }
      h3 { font-family: var(--font-body); font-weight: 600; font-size: 19px; line-height: 1.3; letter-spacing: 0; }
      h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; }
      .lede { max-width: 60ch; font-size: 15px; line-height: 1.66; color: var(--ink-soft); }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10px; letter-spacing: .2em; color: var(--ink-faint); }
      .eyebrow { color: var(--accent); }

      /* yüzen nav: sayfadan kopuk, hap formunda */
      .nav {
        margin: 16px 24px 0; height: 56px; padding: 0 24px; border: 1px solid var(--line);
        border-radius: 999px; background: color-mix(in srgb, var(--surface) 88%, transparent);
        box-shadow: var(--shadow);
      }
      .brand { font-family: var(--font-display); font-size: 17px; letter-spacing: .16em; }
      .nav-links a { font-family: var(--font-body); font-size: 13px; color: var(--ink-soft); }
      .nav-links a:first-child { color: var(--ink); }

      .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi {
        border: 1px solid var(--line); border-radius: var(--radius-lg);
        box-shadow: var(--shadow); backdrop-filter: none; background: var(--surface);
      }
      .kpi { border-radius: var(--radius); }
      .table { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: var(--surface); box-shadow: var(--shadow); }
      .hero-visual { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); background: var(--surface); overflow: visible; }
      /* yörünge yayı: hero görselin arkasında ince halka + yüzen nokta */
      .hero-visual::after {
        content: ""; position: absolute; inset: -14% -10%; z-index: -1; pointer-events: none;
        border-radius: 999px; border: 1px solid var(--accent); opacity: .35;
      }
      .hero-visual::before {
        content: ""; position: absolute; right: 6%; top: -6%; width: 10px; height: 10px; z-index: 2;
        border-radius: 999px; background: var(--accent); pointer-events: none;
        box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent) 16%, transparent);
      }
      /* kartlar dikeyde kademeli yüzer (4–8px) */
      .panel:nth-of-type(2n), .kpi:nth-of-type(2n) { transform: translateY(6px); }
      .panel:nth-of-type(3n), .kpi:nth-of-type(3n) { transform: translateY(-4px); }

      .btn {
        min-height: 46px; padding: 0 26px; border-radius: 999px; box-shadow: var(--shadow);
        font-family: var(--font-body); font-size: 13px; font-weight: 600; letter-spacing: .02em;
      }
      .btn.sm { min-height: 34px; padding: 8px 16px; font-size: 12px; }
      .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
      .field, input, select, textarea {
        border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); color: var(--ink);
        font-family: var(--font-body); font-size: 15px; min-height: 46px;
      }
      .field:focus, input:focus, select:focus, textarea:focus { outline: 3px solid var(--accent); outline-offset: 2px; }
      .chip {
        height: 26px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line);
        background: var(--surface-2); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
      }
      .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
      .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 999px; }
      .icon-btn { border-radius: 999px; border: 1px solid var(--line); background: var(--surface); }
      .divider { height: 1px; background: var(--line); }
      .tabbar { border-top: 1px solid var(--line); background: var(--surface); }
      .track { border-radius: 999px; background: var(--surface-2); height: 8px; }
      .track i { border-radius: 999px; background: var(--accent); }
      .opt .box { border-radius: 8px; }
      .opt.round .box { border-radius: 999px; }
      .logo-strip { border-top: 1px solid var(--line); letter-spacing: .12em; font-size: 10px; }
      .proof li::before { background: var(--accent); border-radius: 999px; }
      .bar:not(.accent) { background: var(--ink-soft); }
      .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 46px; }
      .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; color: var(--ink-faint); }

      /* sayfa atmosferi: ince yörünge halkaları + çok soluk buz lekesi; süs ≤ .18 */
      body.scene-landing .sig::before {
        content: ""; position: absolute; right: -14vw; top: -20vh; width: 64vw; height: 64vw;
        border-radius: 999px; pointer-events: none;
        border: 1px solid var(--accent); opacity: .18;
      }
      body.scene-landing .sig::after {
        content: ""; position: absolute; left: -12vw; bottom: -24vh; width: 52vw; height: 52vw;
        border-radius: 999px; pointer-events: none;
        background: radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%);
        opacity: .10;
      }
      @media (max-width: 900px) {
        h1 { font-size: 28px; max-width: 22ch; }
        .panel:nth-of-type(2n), .kpi:nth-of-type(2n), .panel:nth-of-type(3n), .kpi:nth-of-type(3n) { transform: none; }
        body.scene-landing .sig::after { display: none; }
      }


        /* ===== FIX136 denetim düzeltmeleri ===== */
        /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
           opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
           opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
           (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
        .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
          opacity: 1 !important; color: var(--ink-soft);
          background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
          box-shadow: none;
        }
        /* D1b: buton metni ikinci satıra düşmesin */
        .btn { white-space: nowrap; }
        /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
        .chip { color: var(--ink); }
        .chip.accent, .chip:first-child { color: var(--accent-ink); }
        /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
           ink %48 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
        .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 48%, transparent); }
        [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
          border-color: color-mix(in srgb, var(--ink) 48%, transparent);
        }

        /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
        .eyebrow, .label, .mono { color: var(--ink-soft); }
        .table th, .mini-table th { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `

        /* 01 · landing — yüzen kart + ince yörünge halkası (geniş, aşağı yönlü gölge) */
        .scene-landing .hero-visual {
          background: var(--surface); border: 1px solid var(--line);
          box-shadow: 0 30px 70px -48px var(--ink); border-radius: var(--radius-lg);
        }
        .scene-landing .visual-card {
          width: 62%; border-radius: 36px; transform: translateY(-4px);
          box-shadow: 0 30px 70px -48px color-mix(in srgb, var(--ink) 70%, transparent);
        }
        .scene-landing .visual-card::before {
          content: "YÖRÜNGE · 0.00 g"; display: block; margin-bottom: 6px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
        }
        .scene-landing .visual-card .bar { height: 6px; border: 0; border-radius: 999px; }
        .scene-landing .visual-rows { gap: 9px; }
        .scene-landing .hero-visual::after { inset: -12% -8%; border-color: color-mix(in srgb, var(--accent) 45%, transparent); }
      `,
    },
  },
  'noir-estate': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Cormorant 300 başlık · Jost gövde · JetBrains künye ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2, h3 { font-family: var(--font-display); font-weight: 300; text-transform: none; }
        h1 { font-size: 56px; line-height: 1.06; letter-spacing: .01em; max-width: 18ch; }
        h2 { font-size: 38px; line-height: 1.12; letter-spacing: .01em; max-width: 24ch; }
        h3 { font-size: 24px; line-height: 1.2; font-weight: 500; max-width: 28ch; }
        h4 { font-family: var(--font-body); font-weight: 600; font-size: 15px; letter-spacing: 0; }
        h1 em, h2 em { font-style: normal; color: var(--accent); }
        .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 56ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .22em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); display: inline-flex; align-items: center; gap: 10px; }
        .eyebrow::before { content: ''; width: 24px; height: 1px; background: var(--accent); letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b { font-family: var(--font-display); font-weight: 500; letter-spacing: 0; }
        .kpi .v, .kpi .num-big { font-size: 28px; line-height: 1.1; letter-spacing: 0; }
        .trow .num { font-family: var(--font-mono); font-size: 13px; letter-spacing: 0; }

        /* ---------- cam hap gezinme çubuğu ---------- */
        .nav {
          height: 64px; margin: 16px 16px 0; padding: 0 20px; border-radius: 999px;
          background: color-mix(in srgb, var(--bg) 55%, transparent);
          border: 1px solid var(--line); border-bottom-color: var(--line);
          -webkit-backdrop-filter: blur(var(--blur)) saturate(1.25);
          backdrop-filter: blur(var(--blur)) saturate(1.25);
          box-shadow: var(--shadow);
        }
        .brand { font-family: var(--font-display); font-weight: 500; font-size: 17px; letter-spacing: .18em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .04em; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -22px; height: 1px; background: var(--accent);
        }

        /* ---------- yüzeyler: gölgesiz, 1px çerçeve ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line);
          border-radius: var(--radius-lg); box-shadow: none; backdrop-filter: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 24px; position: relative; }
        .modal, .drawer, .menu {
          border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
          box-shadow: var(--shadow); border-radius: var(--radius-lg);
          background: color-mix(in srgb, var(--surface) 92%, transparent);
          -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
        }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

        /* ---------- kontroller ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
          min-height: 48px; padding: 12px 26px; border-radius: var(--radius); border: 1px solid transparent;
          box-shadow: 0 10px 24px -16px rgba(0,0,0,.9); transition: transform 140ms ease, box-shadow 140ms ease;
        }
        .btn:not(.ghost):not(.soft):not(.sm) {
          background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 92%, var(--ink)), var(--accent));
          color: var(--accent-ink);
        }
        .btn.ghost { background: transparent; border: 1px solid color-mix(in srgb, var(--ink) 28%, transparent); color: var(--ink); box-shadow: none; }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); border-color: color-mix(in srgb, var(--accent) 45%, transparent); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 34px; padding: 7px 14px; font-size: 10px; letter-spacing: .10em; }
        .field, input, select, textarea {
          min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 15px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid var(--accent); outline-offset: 1px; border-color: color-mix(in srgb, var(--accent) 55%, transparent);
        }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 10px; border-radius: 999px;
          background: color-mix(in srgb, var(--bg) 62%, transparent); border: 1px solid var(--line);
          color: var(--ink-soft); font-size: 10px; letter-spacing: .16em;
          -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: 50%; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 500; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 50%; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .fab { box-shadow: var(--shadow); }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--bg-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 999px; height: 6px; }
        .bar { border-radius: 2px 2px 0 0; }
        .proof li::before { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- hero: gece fotoğrafı + scrim ---------- */
        .hero-media { position: relative; border-radius: 0; overflow: hidden; background: var(--bg-2); border: 0; }
        .hero-photo { filter: saturate(.88) brightness(.68) contrast(1.06) sepia(.16); }
        .hero-media-scrim {
          background:
            linear-gradient(180deg, rgba(8,6,5,.18) 0%, rgba(8,6,5,.30) 42%, rgba(8,6,5,.78) 100%),
            linear-gradient(90deg, rgba(8,6,5,.72) 0%, rgba(8,6,5,.10) 58%, rgba(8,6,5,0) 100%);
        }
        .hero-fullbleed { background: var(--bg-2); }
        .hero-fullbleed .hero-copy { color: var(--ink); }
        .hero-media-cap { color: var(--ink-soft); }
        .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }

        /* ---------- altın ince çizgi: bölüm başlığı üstünde 32px ---------- */
        .sec-head > *:first-child::before,
        body.scene-landing .sec-head > *:first-child::before {
          content: ''; display: block; width: 32px; height: 1px; background: var(--accent); margin-bottom: 14px;
        }

        /* ---------- dashboard: sert bölmeler, tabular para ---------- */
        body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
        body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        body.scene-dashboard .kpi:last-child { border-right: 0; }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 32px; max-width: 20ch; }
          h2 { font-size: 26px; }
          h3 { font-size: 19px; }
          .lede { font-size: 14px; }
          .nav { height: 56px; margin: 8px 8px 0; padding: 0 12px; }
          .nav-links { display: none; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
          body.scene-dashboard .kpi:last-child { border-bottom: 0; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .55; color: var(--ink-soft); background: var(--surface-2); border-color: var(--line); box-shadow: none; }
        .btn { white-space: nowrap; }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 360px; }
        .proof li { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `
        /* hero imzası: altın künye çizgisi + cam filtre paneli */
        .hero-fullbleed .hero-copy { max-width: 560px; }
        .hero-fullbleed .cta-row { gap: 12px; margin-top: 22px; }
        .hero-fullbleed .proof { margin-top: 26px; gap: 18px; }
        .hero-fullbleed .proof li { font-size: 10px; letter-spacing: .18em; }
        .hero-fullbleed::after {
          content: ''; position: absolute; left: 24px; right: 24px; bottom: 0; height: 1px;
          background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 60%, transparent), transparent 62%);
          pointer-events: none;
        }
      `,
    },
  },
  'agency-portfolio': {
    motif: 'grid',
    bodyClass: 'upper',
    extraCss: `
        /* ---------- tipografi: Archivo Black display · Inter gövde · Space Mono indeks ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: none; }
        h1 { font-size: 72px; line-height: 1.02; letter-spacing: -.02em; max-width: 22ch; }
        h2 { font-size: 36px; line-height: 1.1; letter-spacing: -.01em; max-width: 28ch; }
        h3 { font-family: var(--font-body); font-weight: 600; font-size: 24px; line-height: 1.2; letter-spacing: -.01em; }
        h4 { font-family: var(--font-body); font-weight: 600; font-size: 16px; line-height: 1.3; letter-spacing: 0; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 60ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .14em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .eyebrow::after { content: ' /'; letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b {
          font-family: var(--font-display); font-weight: 400; letter-spacing: -.02em;
        }
        .kpi .v, .kpi .num-big { font-size: 40px; line-height: 1; }
        .trow .num { font-size: 11px; letter-spacing: .1em; color: var(--ink-faint); }

        /* ---------- nav: 1px siyah alt çizgi, gölge yok ---------- */
        .nav { height: 60px; padding: 0 32px; background: var(--bg); border: 0; border-bottom: 1px solid var(--ink); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 400; font-size: 16px; letter-spacing: -.02em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); font-weight: 600; position: relative; }
        .nav-links a:first-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: -20px; height: 2px; background: var(--accent); }

        /* ---------- yüzeyler: 1px çizgi, radius 6px, gölge yok ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .trow:hover { background: var(--bg-2); position: relative; }
        .trow:hover::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent); }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--ink); }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 20px; position: relative; }
        .modal, .drawer, .menu { border: 1px solid var(--ink); box-shadow: none; border-radius: var(--radius-lg); background: var(--surface); }
        .plan.hot { box-shadow: inset 0 2px 0 var(--accent); }

        /* ---------- kontroller: 2px radius, keskin ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
          min-height: 44px; padding: 10px 22px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
          transition: background-color 120ms ease, color 120ms ease, transform 120ms ease;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid var(--ink); color: var(--ink); }
        .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
        .btn.ghost:hover { background: var(--ink); color: var(--bg); }
        .btn.soft:hover { background: var(--bg-2); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 30px; padding: 6px 12px; font-size: 10px; letter-spacing: .1em; }
        .field, input, select, textarea {
          min-height: 48px; border: 1px solid var(--ink); border-radius: var(--radius);
          background: var(--surface); color: var(--ink); font-family: var(--font-body); font-size: 16px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 22px; padding: 0 8px; border-radius: var(--radius);
          background: transparent; border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .14em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); box-shadow: none; }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--ink); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--bg-2); border-radius: 2px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 2px; height: 6px; }
        .bar { border-radius: 2px 2px 0 0; }
        .proof li::before { width: 8px; height: 1px; border-radius: 0; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- imza: indeks satırı + sağda büyük numara ---------- */
        .hero-visual { position: relative; background: var(--bg-2); border: 1px solid var(--ink); border-radius: var(--radius-lg); overflow: hidden; min-height: 360px; }
        .hero-visual::before {
          content: counter(indexitem, decimal-leading-zero);
          position: absolute; right: 18px; bottom: 8px;
          font-family: var(--font-display); font-size: 92px; line-height: 1;
          color: color-mix(in srgb, var(--accent) 40%, transparent);
          letter-spacing: -.04em;
        }
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: var(--line);
        }
        body.scene-landing .sec-head { border-bottom: 1px solid var(--ink); padding-bottom: 14px; }

        /* ---------- dashboard: indeks tablosu ---------- */
        body.scene-dashboard .kpis { gap: 0; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }
        body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        body.scene-dashboard .kpi:last-child { border-right: 0; }
        body.scene-dashboard .trow:nth-child(odd) { background: var(--bg-2); }

        @media (max-width: 900px) {
          h1 { font-size: 36px; max-width: 18ch; }
          h2 { font-size: 24px; }
          h3 { font-size: 19px; }
          .lede { font-size: 15px; }
          .nav { height: 52px; padding: 0 16px; }
          .nav-links { display: none; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
          body.scene-dashboard .kpi:last-child { border-bottom: 0; }
          .hero-visual::before { font-size: 56px; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .45; color: var(--ink-soft); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .proof li { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `
        /* hero imzası: dev başlık + sağda indeks rayı */
        .hero .hero-copy { max-width: 720px; }
        .hero .cta-row { gap: 0; margin-top: 26px; }
        .hero .cta-row .btn { margin-right: -1px; }
        .hero .proof { margin-top: 30px; gap: 0; border-top: 1px solid var(--ink); }
        .hero .proof li { flex: 1 1 0; padding: 12px 0; border-right: 1px solid var(--line); font-size: 10px; }
        .hero .proof li:last-child { border-right: 0; }
      `,
    },
  },
  'product-launch': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Space Grotesk 700 · Poppins gövde · IBM Plex etiket ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2, h3 { font-family: var(--font-display); font-weight: 700; text-transform: none; }
        h1 { font-size: 52px; line-height: 1.06; letter-spacing: -.01em; max-width: 20ch; }
        h2 { font-size: 32px; line-height: 1.14; letter-spacing: -.005em; max-width: 26ch; }
        h3 { font-size: 22px; line-height: 1.2; max-width: 32ch; }
        h4 { font-family: var(--font-body); font-weight: 600; font-size: 16px; letter-spacing: 0; }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 52ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .18em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .eyebrow::before { content: '●'; font-size: 7px; letter-spacing: 0; margin-right: 8px; vertical-align: 2px; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b { font-family: var(--font-display); font-weight: 700; letter-spacing: -.02em; }
        .kpi .v, .kpi .num-big { font-size: 38px; line-height: 1; }
        .trow .num { font-size: 11px; letter-spacing: .12em; }

        /* ---------- nav ---------- */
        .nav { height: 64px; padding: 0 28px; background: var(--bg-2); border: 0; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 700; font-size: 17px; letter-spacing: -.01em; text-transform: none; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after { content: ''; position: absolute; left: 50%; bottom: -22px; width: 4px; height: 4px; margin-left: -2px; border-radius: 50%; background: var(--accent); }

        /* ---------- paneller: üst kenarda 1px iç parlaklık ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
        }
        .table { overflow: hidden; border-radius: var(--radius-lg); }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .trow:hover { background: var(--surface-2); }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 24px; position: relative; }
        .modal, .drawer, .menu {
          border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          box-shadow: var(--shadow); border-radius: var(--radius-lg); background: var(--surface);
          -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
        }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

        /* ---------- kontroller ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .02em; text-transform: none;
          min-height: 48px; padding: 12px 26px; border-radius: var(--radius); border: 1px solid transparent;
          transition: background-color 130ms ease, transform 130ms ease, box-shadow 130ms ease;
        }
        .btn:not(.ghost):not(.soft):not(.sm) {
          background: var(--accent); color: var(--accent-ink);
          box-shadow: 0 10px 30px -18px color-mix(in srgb, var(--accent) 55%, transparent);
        }
        .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); box-shadow: none; }
        .btn.ghost:hover, .btn.soft:hover { border-color: color-mix(in srgb, var(--accent) 35%, transparent); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 34px; padding: 7px 14px; font-size: 11px; }
        .field, input, select, textarea {
          min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 16px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 26px; padding: 0 12px; border-radius: 999px;
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .16em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-weight: 700; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .fab { box-shadow: var(--shadow); }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .opt.on .box { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); }
        .track { background: var(--bg-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 999px; height: 6px; }
        .bar { border-radius: 4px 4px 0 0; }
        .proof li::before { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- imza: sabit spotlight ---------- */
        body::before {
          content: ''; position: fixed; left: 50%; top: 0; transform: translateX(-50%);
          width: 120vw; height: 62vh; pointer-events: none; z-index: 0;
          background: radial-gradient(58% 46% at 50% 0%, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 72%);
        }
        .hero { position: relative; }
        .hero::after {
          content: ''; position: absolute; left: 50%; bottom: -1px; transform: translateX(-50%);
          width: 62%; height: 1px; background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 45%, transparent), transparent);
          pointer-events: none;
        }
        .hero-visual { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: inset 0 1px 0 rgba(255,255,255,.06); overflow: hidden; min-height: 360px; }

        /* ---------- adım göstergesi: aktif mint hap ---------- */
        .ob-steps i, .dots i { background: var(--line); }
        .ob-steps i.on, .dots i.on { background: var(--accent); width: 24px; border-radius: 999px; }

        /* ---------- dashboard: yoğun ama tek accent ---------- */
        body.scene-dashboard .kpis { gap: 12px; }
        body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }
        body.scene-dashboard .side { border-radius: 0; }

        @media (max-width: 900px) {
          h1 { font-size: 30px; max-width: 20ch; }
          h2 { font-size: 24px; }
          h3 { font-size: 19px; }
          .lede { font-size: 15px; }
          .nav { height: 56px; padding: 0 16px; }
          .nav-links { display: none; }
          body::before { height: 46vh; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .45; color: var(--ink-soft); background: var(--surface-2); border-color: var(--line); box-shadow: none; }
        .btn { white-space: nowrap; }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .proof li { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `
        /* hero imzası: solda kopya, sağda panel; spotlight ikisinin arkasında */
        .hero .hero-copy { max-width: 560px; }
        .hero .cta-row { gap: 10px; margin-top: 24px; }
        .hero .proof { gap: 18px; margin-top: 26px; }
        .hero .proof li { font-size: 10px; letter-spacing: .16em; }
        .hero-visual { min-height: 400px; }
      `,
    },
  },
  'boutique-hotel': {
    motif: 'none',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Playfair 400 başlık · Nunito gövde · IBM Plex künye ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: none; }
        h1 { font-size: 46px; line-height: 1.12; letter-spacing: 0; max-width: 20ch; }
        h2 { font-size: 30px; line-height: 1.2; letter-spacing: 0; max-width: 28ch; }
        h3 { font-family: var(--font-display); font-weight: 400; font-size: 21px; line-height: 1.3; max-width: 32ch; }
        h4 { font-family: var(--font-body); font-weight: 700; font-size: 15px; line-height: 1.35; letter-spacing: 0; }
        h1 em, h2 em { font-style: italic; font-weight: 700; color: var(--accent); }
        .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.65; max-width: 58ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b { font-family: var(--font-display); font-weight: 400; letter-spacing: 0; }
        .kpi .v, .kpi .num-big { font-size: 32px; line-height: 1.1; }
        .trow .num { font-size: 12px; letter-spacing: .12em; }

        /* ---------- nav: ince çizgi, terracotta aktif ---------- */
        .nav { height: 68px; padding: 0 28px; background: var(--bg-2); border: 0; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 400; font-size: 18px; letter-spacing: .16em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: -24px; height: 1px; background: var(--accent); }

        /* ---------- yüzeyler: 1px çerçeve, radius 10px, gölge yok ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 22px; position: relative; }
        .modal, .drawer, .menu {
          border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          box-shadow: var(--shadow); border-radius: var(--radius-lg); background: var(--surface);
          -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
        }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

        /* ---------- kontroller ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 700; font-size: 12px; letter-spacing: .12em; text-transform: uppercase;
          min-height: 48px; padding: 12px 24px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
          transition: background-color 150ms ease, transform 150ms ease;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid color-mix(in srgb, var(--accent) 70%, transparent); color: var(--accent); }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
        .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 32px; padding: 6px 12px; font-size: 10px; }
        .field, input, select, textarea {
          min-height: 48px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 16px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 24px; padding: 0 10px; border-radius: var(--radius);
          background: transparent; border: 1px solid color-mix(in srgb, var(--accent) 60%, transparent);
          color: var(--accent); font-size: 10px; letter-spacing: .18em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 50%; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .fab { box-shadow: var(--shadow); }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--bg-2); border-radius: 1px; height: 5px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 1px; height: 5px; }
        .bar { border-radius: 1px; }
        .proof li::before { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- hero: oda fotoğrafı + ısınan scrim ---------- */
        .hero-media { position: relative; border-radius: 0; overflow: hidden; background: var(--bg-2); border: 0; }
        .hero-photo { filter: saturate(1.02) brightness(.82) sepia(.1); }
        .hero-media-scrim {
          background:
            linear-gradient(180deg, rgba(22,17,12,.10) 0%, rgba(22,17,12,.34) 48%, rgba(22,17,12,.80) 100%),
            linear-gradient(90deg, rgba(22,17,12,.66) 0%, rgba(22,17,12,.12) 56%, rgba(22,17,12,0) 100%);
        }
        .hero-fullbleed { background: var(--bg-2); }
        .hero-media-cap { color: var(--ink-soft); }
        .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; }

        /* ---------- terracotta ince çizgi: bölüm başlığı üstünde 28px ---------- */
        .sec-head > *:first-child::before {
          content: ''; display: block; width: 28px; height: 1px; background: var(--accent); margin-bottom: 12px;
        }

        /* ---------- dashboard: rezervasyon tablosu ---------- */
        body.scene-dashboard .kpis { gap: 12px; }
        body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }
        body.scene-dashboard .trow:hover { background: var(--surface-2); }

        @media (max-width: 900px) {
          h1 { font-size: 32px; max-width: 18ch; }
          h2 { font-size: 24px; }
          h3 { font-size: 19px; }
          .lede { font-size: 15px; }
          .nav { height: 56px; padding: 0 16px; }
          .nav-links { display: none; }
          .hero-fullbleed .hero-copy { max-width: 100%; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .5; color: var(--ink-soft); background: var(--surface-2); border-color: var(--line); }
        .btn { white-space: nowrap; }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .hero-visual { min-height: 340px; }
        .proof li { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `
        /* hero imzası: sol metin + altta 4 hücreli künye şeridi */
        .hero-fullbleed .hero-copy { max-width: 540px; }
        .hero-fullbleed .cta-row { gap: 10px; margin-top: 22px; }
        .hero-fullbleed::after {
          content: 'GPS 37.03 · 27.42'; position: absolute; right: 24px; bottom: 20px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .2em; color: var(--ink-soft);
          pointer-events: none;
        }
        .hero-fullbleed .proof {
          margin-top: 26px; gap: 0; border-top: 1px solid var(--line); padding-top: 12px;
        }
        .hero-fullbleed .proof li { flex: 1 1 0; border-right: 1px solid var(--line); padding-right: 12px; font-size: 10px; }
        .hero-fullbleed .proof li:last-child { border-right: 0; }
      `,
    },
  },
  'lookbook-editorial': {
    motif: 'paper',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Fraunces display · Inter gövde · JetBrains etiket ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: none; }
        h1 { font-size: 62px; line-height: 1.04; letter-spacing: -.01em; max-width: 20ch; }
        h2 { font-size: 38px; line-height: 1.14; letter-spacing: 0; max-width: 26ch; }
        h3 { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.3; max-width: 34ch; }
        h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; line-height: 1.4; letter-spacing: .02em; text-transform: uppercase; }
        h1 em, h2 em { font-style: italic; font-weight: 700; color: var(--accent); }
        .lede { font-family: var(--font-body); font-size: 17px; line-height: 1.7; max-width: 56ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .18em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 11px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); display: inline-flex; align-items: center; gap: 12px; }
        .eyebrow::before { content: ''; width: 40px; height: 1px; background: var(--accent); letter-spacing: 0; }
        .big404, .kpi .v, .kpi .num-big, .plan .price b, .sum-total b { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; }
        .kpi .v, .kpi .num-big { font-size: 38px; line-height: 1.05; }
        .trow .num { font-size: 12px; letter-spacing: .1em; }

        /* ---------- nav: ince çizgi, kiremit aktif ---------- */
        .nav { height: 64px; padding: 0 32px; background: var(--bg); border: 0; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        .brand { font-family: var(--font-display); font-weight: 400; font-size: 18px; letter-spacing: .14em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 14px; letter-spacing: .02em; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: -22px; height: 1px; background: var(--accent); }

        /* ---------- yüzeyler: 1px çizgi, radius 4px, gölge yok ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); }
        .trow:last-child { border-bottom: 0; }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 0; }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 24px; position: relative; }
        .modal, .drawer, .menu { border: 1px solid var(--ink); box-shadow: none; border-radius: var(--radius-lg); background: var(--surface); }
        .plan.hot { box-shadow: inset 0 1px 0 var(--accent); }

        /* ---------- kontroller: radius 0, alt çizgi ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
          min-height: 44px; padding: 10px 24px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
          transition: background-color 110ms ease, transform 110ms ease;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 0; color: var(--ink); position: relative; padding: 10px 0; }
        .btn.ghost::after { content: ''; position: absolute; left: 0; right: 0; bottom: 6px; height: 1px; background: var(--accent); transition: height 110ms ease; }
        .btn.ghost:hover::after { height: 2px; }
        .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
        .btn.soft:hover { border-color: var(--ink); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 30px; padding: 6px 14px; font-size: 10px; }
        .field, input, select, textarea {
          min-height: 52px; border: 0; border-bottom: 1px solid var(--line); border-radius: 0;
          background: transparent; color: var(--ink); font-family: var(--font-body); font-size: 17px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: none; border-bottom-color: var(--accent); }
        .field.err { border-bottom-color: var(--danger); }
        .chip {
          height: 22px; padding: 0; border-radius: 0; background: transparent; border: 0;
          color: var(--accent); font-size: 11px; letter-spacing: .18em;
          display: inline-flex; align-items: center; gap: 10px;
        }
        .chip::before { content: ''; width: 16px; height: 1px; background: var(--accent); }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); padding: 0 8px; }
        .chip.accent::before { display: none; }
        .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 0; border: 1px solid var(--line); background: transparent; box-shadow: none; }
        .opt .box { border-radius: 0; border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: transparent; border-radius: 0; height: 1px; box-shadow: none; border-bottom: 1px solid var(--line); }
        .track i { background: var(--accent); border-radius: 0; height: 1px; }
        .bar { border-radius: 0; }
        .proof li::before { width: 12px; height: 1px; border-radius: 0; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: 0; }

        /* ---------- imza: taşan fasikül rakamı ---------- */
        .hero-visual { position: relative; background: transparent; border: 1px solid var(--line); border-radius: 0; overflow: visible; min-height: 380px; }
        .hero-visual::before {
          content: '01'; position: absolute; left: -18px; top: -46px;
          font-family: var(--font-display); font-weight: 400; font-size: 104px; line-height: .8;
          letter-spacing: -.04em; color: var(--ink-faint); opacity: .4; pointer-events: none;
        }
        body.scene-landing .hero .eyebrow { margin-bottom: 8px; }
        body.scene-landing .sec-head { border-top: 1px solid var(--line); padding-top: 18px; }

        /* ---------- dashboard: koleksiyon listesi ---------- */
        body.scene-dashboard .kpis { gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        body.scene-dashboard .kpi { border: 0; border-right: 1px solid var(--line); border-radius: 0; box-shadow: none; }
        body.scene-dashboard .kpi:last-child { border-right: 0; }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }

        @media (max-width: 900px) {
          h1 { font-size: 32px; max-width: 20ch; }
          h2 { font-size: 26px; }
          h3 { font-size: 20px; }
          .lede { font-size: 16px; }
          .nav { height: 54px; padding: 0 16px; }
          .nav-links { display: none; }
          .hero-visual::before { font-size: 56px; left: 0; top: -24px; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr; }
          body.scene-dashboard .kpi { border-right: 0; border-bottom: 1px solid var(--line); }
          body.scene-dashboard .kpi:last-child { border-bottom: 0; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .4; color: var(--ink-soft); background: transparent; border: 1px dashed var(--line); }
        .btn { white-space: nowrap; }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .proof li { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `
        /* hero imzası: tipografi ağırlıklı, sağda tek dikey fotoğraf */
        .hero .hero-copy { max-width: 640px; }
        .hero .cta-row { gap: 22px; margin-top: 26px; align-items: baseline; }
        .hero .proof { margin-top: 32px; gap: 20px; border-top: 1px solid var(--line); padding-top: 14px; }
        .hero .proof li { font-size: 11px; }
        .hero-visual { min-height: 420px; }
        /* taşan fasikül rakamı: boşluğu doldurur, bilgi taşımadığı için aria-hidden */
        .hero { position: relative; }
        .hero::after {
          content: '01'; position: absolute; right: 2vw; top: 8%;
          font-family: var(--font-display); font-weight: 400; font-size: clamp(120px, 20vw, 260px);
          line-height: .8; letter-spacing: -.04em; color: var(--ink-faint); opacity: .18;
          pointer-events: none; user-select: none;
        }
      `,
    },
  },
  'dark-dashboard': {
    motif: 'dots',
    bodyClass: '',
    extraCss: `
        /* ---------- tipografi: Michroma yalnız display · Inter gövde · JetBrains sayı ---------- */
        body { font-variant-numeric: tabular-nums; }
        h1, h2 { font-family: var(--font-display); font-weight: 400; text-transform: none; }
        h1 { font-size: 34px; line-height: 1.15; letter-spacing: -.01em; max-width: 24ch; }
        h2 { font-size: 26px; line-height: 1.22; letter-spacing: 0; max-width: 32ch; }
        h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; line-height: 1.3; letter-spacing: -.005em; }
        h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; line-height: 1.35; letter-spacing: 0; }
        .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.55; max-width: 64ch; color: var(--ink-soft); }
        .eyebrow, .label, .mono, .chip, .kpi .k, .trow .num, .logo-strip span, .proof li, .crumbs span, .axis, .legend {
          font-family: var(--font-mono); font-weight: 400; letter-spacing: .16em; text-transform: uppercase;
        }
        .eyebrow, .label, .kpi .k, .axis, .legend { font-size: 10px; color: var(--ink-faint); }
        .eyebrow { color: var(--accent); }
        .big404, .kpi .v, .kpi .num-big { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; font-size: 34px; line-height: 1.1; }
        .plan .price b, .sum-total b { font-family: var(--font-mono); font-weight: 400; letter-spacing: 0; }
        .trow .num { font-size: 13px; letter-spacing: 0; }

        /* ---------- nav: sticky ince cam, sol ray ---------- */
        .nav {
          height: 56px; padding: 0 20px; background: color-mix(in srgb, var(--bg) 88%, transparent);
          border: 0; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
          -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
        }
        .brand { font-family: var(--font-display); font-weight: 400; font-size: 14px; letter-spacing: .12em; text-transform: uppercase; }
        .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: 0; text-transform: none; color: var(--ink-soft); }
        .nav-links a:first-child { color: var(--ink); position: relative; }
        .nav-links a:first-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: -18px; height: 2px; background: var(--accent); }

        /* ---------- yüzeyler: 1px çizgi, radius 14px, gölge yok ---------- */
        .panel, .panel-2, .visual-card, .comp-card-demo, .state-card, .co-sec, .auth-card, .ob-card, .plan, .kpi, .m-tile, .table {
          background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
        }
        .table { overflow: hidden; }
        .trow { border-bottom: 1px solid var(--line); height: 44px; }
        .trow:last-child { border-bottom: 0; }
        .trow:hover { background: var(--surface-2); }
        .side { background: var(--bg-2); border-right: 1px solid var(--line); border-radius: 0; }
        .side a, .side .nav-item { border-radius: var(--radius); }
        .side .on, .side .active { background: var(--surface-2); box-shadow: inset 2px 0 0 var(--accent); }
        .logo-strip, .foot-demo { background: var(--bg-2); border-top: 1px solid var(--line); }
        .divider { height: 1px; background: var(--line); }
        .plan, .comp-card-demo, .state-card, .m-tile, .auth-card, .ob-card { padding: 16px; position: relative; }
        .modal, .drawer, .menu {
          border: 1px solid var(--line); box-shadow: var(--shadow); border-radius: var(--radius-lg);
          background: var(--surface); -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
        }
        .plan.hot, .kpi.accent, .m-tile.accent { box-shadow: var(--shadow-hard); }

        /* ---------- kontroller ---------- */
        .btn {
          font-family: var(--font-body); font-weight: 600; font-size: 13px; letter-spacing: .02em; text-transform: none;
          min-height: 40px; padding: 8px 16px; border-radius: var(--radius); border: 1px solid transparent; box-shadow: none;
          transition: background-color 100ms ease, transform 100ms ease;
        }
        .btn:not(.ghost):not(.soft):not(.sm) { background: var(--accent); color: var(--accent-ink); }
        .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
        .btn.soft { background: var(--surface-2); border: 1px solid var(--line); color: var(--ink); }
        .btn.ghost:hover, .btn.soft:hover { border-color: var(--ink-faint); }
        .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .btn:active { transform: translateY(1px); }
        .btn.sm { min-height: 28px; padding: 4px 10px; font-size: 12px; }
        .field, input, select, textarea {
          min-height: 40px; border: 1px solid var(--line); border-radius: var(--radius);
          background: var(--bg-2); color: var(--ink); font-family: var(--font-body); font-size: 14px;
        }
        .field:focus, .field.focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
        .field.err { border-color: var(--danger); }
        .chip {
          height: 22px; padding: 0 8px; border-radius: var(--radius);
          background: var(--surface-2); border: 1px solid var(--line); color: var(--ink-soft);
          font-size: 10px; letter-spacing: .14em;
        }
        .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
        .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); font-size: 12px; }
        .avatar, .avatar-lg, .empty-ic, .icon-btn, .fab { border-radius: 50%; border: 1px solid var(--line); background: var(--surface-2); box-shadow: none; }
        .opt .box { border-radius: var(--radius); border: 1px solid var(--line); }
        .opt.round .box { border-radius: 999px; }
        .track { background: var(--bg-2); border-radius: 999px; height: 6px; box-shadow: inset 0 0 0 1px var(--line); }
        .track i { background: var(--accent); border-radius: 999px; height: 6px; }
        .bar { border-radius: 2px 2px 0 0; }
        .proof li::before { width: 6px; height: 6px; border-radius: 2px; background: var(--accent); }
        .tabbar { border-top: 1px solid var(--line); background: var(--bg-2); }
        .tabbar div.on { color: var(--accent); }
        .scene-mobile .tabs span { border-radius: var(--radius); }

        /* ---------- durum noktası: renk + metin ---------- */
        .dot-ok, .dot-warn, .dot-err { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
        .dot-ok { background: var(--ok); }
        .dot-warn { background: var(--warn); }
        .dot-err { background: var(--danger); }

        /* ---------- imza: KPI şeridi + mini grafik ---------- */
        .hero-visual { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; min-height: 360px; position: relative; }
        .hero-visual::after {
          content: ''; position: absolute; inset: auto 0 0 0; height: 42%;
          background:
            linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--accent) 10%, transparent) 100%),
            repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 6%, transparent) 0 1px, transparent 1px 44px);
          pointer-events: none;
        }
        body.scene-landing .sec-head { border-top: 1px solid var(--line); padding-top: 14px; }
        body.scene-landing .sig::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent); opacity: .5;
        }

        /* ---------- dashboard: yoğun ızgara ---------- */
        body.scene-dashboard .kpis { gap: 12px; }
        body.scene-dashboard .kpi { border-radius: var(--radius-lg); }
        body.scene-dashboard .kpi .v, body.scene-dashboard .kpi .num-big { font-size: 34px; }
        body.scene-dashboard .trow { font-variant-numeric: tabular-nums; }
        body.scene-dashboard .side { border-radius: 0; }

        @media (max-width: 900px) {
          h1 { font-size: 24px; max-width: 22ch; }
          h2 { font-size: 20px; }
          h3 { font-size: 17px; }
          .lede { font-size: 13px; }
          .nav { height: 52px; padding: 0 12px; }
          .nav-links { display: none; }
          body.scene-dashboard .kpis { grid-template-columns: 1fr 1fr; }
          .side { display: none; }
        }
        /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
        .btn:disabled, .btn[disabled], .btn.disabled { opacity: .4; color: var(--ink-soft); background: transparent; border: 1px dashed var(--line); }
        .btn { white-space: nowrap; }
        .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
        body.scene-landing .sig { z-index: -1; }
        .proof li { color: var(--ink-soft); }
      `,
    scenes: {
      landing: `
        /* hero imzası: solda kopya, sağda panel önizlemesi */
        .hero .hero-copy { max-width: 560px; }
        .hero .cta-row { gap: 8px; margin-top: 20px; }
        .hero .proof { margin-top: 24px; gap: 16px; }
        .hero .proof li { font-size: 10px; }
        .hero-visual { min-height: 380px; }
      `,
    },
  },
  /* <<< apply-fragments:styles <<< */

};

export function configFor(slug) {
  return { ...DEFAULTS, ...(STYLES[slug] ?? {}) };
}
