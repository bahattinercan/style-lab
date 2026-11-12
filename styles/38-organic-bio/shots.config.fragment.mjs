export const CONFIG = {
  motif: 'blob',
  extraCss: `
    /* imza: asimetrik yumuşak radius + katmanlı blob + 1px ince çizgi */
    .nav { border-bottom: 1px solid var(--line); padding: 22px 44px; }
    .mark {
      border-radius: 42% 58% 55% 45% / 52% 45% 55% 48%;
      background: var(--accent); color: var(--accent-ink);
    }
    h1 { font-size: 54px; line-height: 1.06; letter-spacing: -.01em; max-width: 19ch; }
    h2 { font-size: 30px; line-height: 1.16; }
    h3 { font-size: 18px; }
    .lede { max-width: 46ch; font-size: 16px; line-height: 1.68; }
    .eyebrow, .label { letter-spacing: .14em; }
    .hero-copy { gap: 16px; }
    .btn { border-radius: 999px; border: 1px solid transparent; min-height: 44px; padding: 0 22px; }
    .btn.ghost { border-color: var(--line); background: var(--surface); box-shadow: none; }
    .panel {
      border: 1px solid var(--line); border-radius: 26px 26px 26px 8px;
      box-shadow: var(--shadow); backdrop-filter: none;
    }
    .panel-2, .kpi, .comp-card, .m-tile {
      border: 1px solid var(--line); border-radius: 18px 18px 18px 6px;
      box-shadow: none; backdrop-filter: none;
    }
    .hero-visual {
      border: 1px solid var(--line); border-radius: 26px 26px 26px 8px;
      box-shadow: var(--shadow);
    }
    .visual-card { border-radius: 18px 18px 18px 6px; box-shadow: var(--shadow); }
    .visual-card .bar { border-radius: 9px; }
    .visual-row { border-radius: 12px; }
    .visual-row .sq { border-radius: 42% 58% 51% 49% / 55% 45% 55% 45%; }
    .field, input, select, textarea { border: 1px solid var(--line); border-radius: 14px; background: var(--surface); }
    .chip { border: 1px solid var(--line); border-radius: 999px; letter-spacing: .14em; }
    .divider { height: 1px; background: var(--line); }
    .opt .box { border-radius: 8px; }
    .opt.round .box { border-radius: 999px; }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: 42% 58% 55% 45% / 52% 45% 55% 48%; }
    .fab, .empty-ic { box-shadow: var(--shadow); }
    .tabbar, .track, .track i { border-radius: 999px; }
    .proof li::before { border-radius: 42% 58% 51% 49% / 55% 45% 55% 45%; }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }
    .table-row, .trow, tr { border-radius: 12px; }
    /* landing/mobile: iki yumuşak blob + büyüme halkaları (süs, metnin altında) */
    body.scene-landing .sig::before, body.scene-mobile .sig::before {
      content: ""; position: absolute; right: -8vw; top: -10vh; width: 52vw; height: 52vw;
      border-radius: 46% 54% 48% 52% / 52% 46% 54% 48%;
      background: radial-gradient(58% 58% at 40% 40%, var(--accent) 0%, transparent 72%);
      opacity: .14; filter: none;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: -10vw; bottom: -14vh; width: 38vw; height: 38vw;
      border-radius: 50%; opacity: .10;
      background: radial-gradient(60% 60% at 50% 50%, var(--accent) 0%, transparent 74%);
    }
    body.scene-mobile .sig::after {
      content: ""; position: absolute; left: -18vw; bottom: 6vh; width: 46vw; height: 46vw;
      border-radius: 50%; opacity: .10;
      background: repeating-radial-gradient(circle at 50% 50%, transparent 0 18px, var(--line) 18px 19px, transparent 19px 40px);
    }
    @media (max-width: 900px) {
      h1 { font-size: 32px; max-width: 20ch; }
      .panel, .hero-visual { border-radius: 22px 22px 22px 8px; }
      body.scene-landing .sig::after { display: none; }
    }
  `,
};
