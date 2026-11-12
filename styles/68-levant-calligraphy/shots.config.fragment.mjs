/**
 * 68 · Levant Calligraphy — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
