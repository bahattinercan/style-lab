/**
 * 132 · Wood Joinery — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
