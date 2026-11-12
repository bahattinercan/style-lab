export const CONFIG = {
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
};
