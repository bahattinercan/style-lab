/**
 * 125 · Sports Energy — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
