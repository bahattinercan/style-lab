export const CONFIG = {
  motif: 'none',
  bodyClass: 'upper',
  extraCss: `
    /* imza: kalın diagonal çubuk + 3px siyah kural + uppercase display */
    .nav { border-bottom: 3px solid var(--line); }
    .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
    .brand { font-family: var(--font-mono); font-size: 13px; letter-spacing: .14em; text-transform: uppercase; }
    h1 { font-size: 62px; line-height: .94; letter-spacing: -.01em; max-width: 16ch; }
    h2 { font-size: 27px; line-height: 1.02; letter-spacing: 0; }
    .eyebrow { color: var(--accent); letter-spacing: .22em; }
    .lede { max-width: 44ch; }
    .hero-copy { border-left: 6px solid var(--accent); padding-left: 24px; }
    .btn {
      border: 3px solid var(--line); border-radius: 0; box-shadow: none;
      font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
    }
    .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
    .btn.ghost { background: transparent; color: var(--ink); border: 3px solid var(--line); }
    .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card {
      border: 3px solid var(--line); border-radius: 0; box-shadow: none; backdrop-filter: none;
    }
    .hero-visual { box-shadow: var(--shadow-hard); border: 3px solid var(--line); border-radius: 0; }
    .field, input, select, textarea { border: 3px solid var(--line); border-radius: 0; background: var(--surface); }
    .chip { border: 1px solid var(--line); border-radius: 0; font-family: var(--font-mono); letter-spacing: .16em; text-transform: uppercase; }
    .mark { border-radius: 0; }
    .empty-ic { border-radius: 0; border: 3px solid var(--line); }
    .opt .box, .opt.round .box, .opt.round input:checked + .box::after { border-radius: 0; }
    .divider { height: 3px; }
    .avatar, .avatar-lg, .fab { border-radius: 0; }
    .fab { border: 3px solid var(--line); }
    .scene-mobile .tabs span { border-radius: 0; }
    .tabbar { border-top: 3px solid var(--line); }
    .track, .track i { border-radius: 0; }
    .logo-strip { border-top: 6px solid var(--line); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .16em; }
    .proof li::before { background: var(--accent); border-radius: 0; }
    /* hero görselinde kalın diagonal accent çubuk (kartın arkasında) */
    .hero-visual::after {
      content: ""; position: absolute; z-index: 1;
      left: -16%; right: -16%; top: 44%; height: 38px;
      background: var(--accent); transform: rotate(-20deg);
    }
    /* landing: sağ kenarda dikey kırmızı çubuk + ince diagonal kural */
    body.scene-landing .sig::before {
      content: ""; position: absolute; top: 0; bottom: 0; right: 0; width: 20px;
      background: var(--accent);
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; right: 20px; top: 0; bottom: 0; width: 6px;
      background: var(--line); opacity: .16;
    }
    @media (max-width: 900px) {
      h1 { font-size: 34px; max-width: 18ch; }
      body.scene-landing .sig::before { width: 12px; }
      body.scene-landing .sig::after { display: none; }      }
  `,
};
