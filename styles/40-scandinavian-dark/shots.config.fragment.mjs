export const CONFIG = {
  motif: 'paper',
  extraCss: `
    /* imza: mat koyu yüzey + 1px hairline + geniş boşluk + sakin başlık */
    .motif-paper::before { opacity: .08; }
    .nav { border-bottom: 1px solid var(--line); padding: 24px 48px; }
    .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: var(--tracking); text-transform: none; }
    .nav-links a { font-family: var(--font-body); font-size: 13px; letter-spacing: .01em; text-transform: none; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 44px; line-height: 1.12; letter-spacing: var(--tracking); max-width: 21ch; text-transform: none; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 26px; line-height: 1.2; letter-spacing: var(--tracking); text-transform: none; }
    h3 { font-weight: 500; letter-spacing: 0; }
    h4 { font-weight: 500; }
    .art-main h2, .auth-card h1, .ob-card h1, .app-bar h2 { font-weight: 400; letter-spacing: var(--tracking); }
    .big404 { font-family: var(--font-display); font-weight: 400; font-size: 64px; line-height: 1; letter-spacing: var(--tracking); }
    .eyebrow, .label, .mono { letter-spacing: .12em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }
    .lede { max-width: 52ch; font-size: 16px; line-height: 1.7; color: var(--ink-soft); }
    .mark { border-radius: var(--radius); background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); font-family: var(--font-display); }
    .btn { min-height: 44px; padding: 0 20px; border-radius: var(--radius); box-shadow: none; font-size: 13px; font-weight: 500; letter-spacing: .01em; text-transform: none; }
    .btn.ghost { background: transparent; border: 1px solid var(--line); color: var(--ink); }
    .panel, .panel-2, .kpi, .comp-card, .m-tile {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none; padding: 30px;
    }
    .kpi, .m-tile { padding: 20px; }
    .table {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none; padding: 0; overflow: hidden;
    }
    .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: var(--shadow); }
    .plan { padding: 24px; }
    .plan.hot { background: var(--surface-2); border-color: var(--line); box-shadow: none; }
    .plan.hot::before {
      content: ""; position: absolute; left: 0; right: 0; top: 0; height: 2px;
      background: var(--accent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }
    .plan .price b { font-weight: 400; letter-spacing: var(--tracking); }
    .comp-card-demo { border-radius: var(--radius); }
    .field, input, select, textarea { border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-2); color: var(--ink); }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip { height: 26px; border: 1px solid var(--line); border-radius: 4px; background: var(--surface-2); letter-spacing: .12em; }
    .divider { height: 1px; background: var(--line); }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .04em; }
    .proof li::before { background: var(--accent); border-radius: 2px; }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
    .tabbar { border-top: 1px solid var(--line); }
    .track, .track i { border-radius: 3px; }
    .opt .box { border-radius: 4px; }
    .opt.round .box { border-radius: 999px; }
    /* kuzey ışığı: tek geniş, çok soluk ışık lekesi (süs değil, ışık) */
    body.scene-landing .sig::before {
      content: ""; position: absolute; right: -10vw; top: -22vh; width: 62vw; height: 62vw;
      background: radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%);
      opacity: .07; pointer-events: none;
    }
    @media (max-width: 900px) {
      h1 { font-size: 30px; max-width: 22ch; }
      .panel, .panel-2, .comp-card { padding: 20px; }
      body.scene-landing .sig::before { opacity: .05; }
    }
  `,
};
