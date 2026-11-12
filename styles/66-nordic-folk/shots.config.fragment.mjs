/**
 * 66 · Nordic Folk — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
