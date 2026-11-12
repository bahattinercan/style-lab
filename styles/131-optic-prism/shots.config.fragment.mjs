/**
 * 131 · Optic Prism — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
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
};
