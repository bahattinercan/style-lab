/**
 * 122 · Collectible Card — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
