/**
 * 133 · Letterpress Print — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
