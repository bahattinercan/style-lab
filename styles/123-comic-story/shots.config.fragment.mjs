/**
 * 123 · Comic Story — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
