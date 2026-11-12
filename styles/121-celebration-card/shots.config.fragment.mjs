/**
 * 121 · Celebration Card — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
