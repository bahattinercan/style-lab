export const CONFIG = {
  motif: 'mesh',
  extraCss: `
    /* imza: iki katmanlı mesh atmosfer + cam kart + tek üst iç parlaklık */
    h1 { font-size: 40px; font-weight: 600; line-height: 1.14; letter-spacing: var(--tracking); max-width: 24ch; }
    h2 { font-size: 26px; font-weight: 600; line-height: 1.2; letter-spacing: var(--tracking); }
    h3 { font-size: 20px; font-weight: 500; letter-spacing: -.005em; }
    .eyebrow, .label, .mono { letter-spacing: .1em; }
    .eyebrow { color: var(--accent); }
    .lede { max-width: 54ch; font-size: 16px; line-height: 1.6; color: var(--ink-soft); }
    .mark { border-radius: var(--radius); background: var(--surface-2); color: var(--ink); border: 1px solid var(--line); }

    /* 1 · cam yüzey: surface %82 + blur 14px + yalnız üst kenarda 1px iç parlaklık */
    .panel, .visual-card {
      background: color-mix(in srgb, var(--surface) 82%, transparent);
      border: 1px solid var(--line);
      border-radius: var(--radius-lg);
      box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow);
      backdrop-filter: blur(var(--blur)) saturate(112%);
    }
    .kpi, .m-tile, .state-card { border-radius: var(--radius); }
    .table { border-radius: var(--radius-lg); }
    .plan.hot { border-color: var(--line); box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow); }
    .plan.hot::before {
      content: ""; position: absolute; left: 0; right: 0; top: 0; height: 2px;
      background: var(--accent); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }

    /* 2 · mat ikincil yüzey: blur yok, cam üstüne cam yasak */
    .comp-card-demo, .visual-row, .sk, .code, .ob-opt, .opt .box {
      background: var(--surface-2); backdrop-filter: none; box-shadow: none;
    }

    /* 3 · kontroller */
    .btn { min-height: 44px; padding: 0 20px; border-radius: var(--radius); font-size: 13px; font-weight: 600; letter-spacing: .01em; }
    .btn.sm { min-height: 34px; padding: 8px 14px; }
    .btn.ghost {
      background: color-mix(in srgb, var(--surface) 60%, transparent);
      border-color: var(--line); box-shadow: none; backdrop-filter: blur(var(--blur));
    }
    .field, input, select, textarea { border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line); }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .field.focus { outline: 2px solid var(--accent); outline-offset: 2px; }
    .chip { border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line); letter-spacing: .1em; backdrop-filter: none; }
    .icon-btn { border-radius: var(--radius); background: var(--surface-2); }
    .divider { height: 1px; background: var(--line); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
    .avatar { background: var(--surface-2); border: 1px solid var(--line); }
    .track, .track i { border-radius: 999px; }
    .opt .box { border-radius: 6px; }
    .opt.round .box { border-radius: 999px; }

    /* 4 · gezinme: cam nav, alt 1px kural, aktif 2px accent */
    .nav {
      background: color-mix(in srgb, var(--surface) 72%, transparent);
      backdrop-filter: blur(var(--blur)) saturate(112%);
      border-bottom: 1px solid var(--line);
    }
    .nav-links a { color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }
    .tabbar {
      background: color-mix(in srgb, var(--surface) 78%, transparent);
      backdrop-filter: blur(var(--blur)); border-top: 1px solid var(--line);
    }
    .scene-m-sheet .m-sheet, .scene-m-form .m-foot {
      background: color-mix(in srgb, var(--surface) 90%, transparent);
      backdrop-filter: blur(var(--blur));
    }
    .logo-strip { border-top: 1px solid var(--line); letter-spacing: .02em; }

    /* 5 · atmosfer: kahraman görselde iki katman (radial çifti + conic) */
    .motif-mesh::before {
      content: ""; position: absolute; inset: -18% -14%; pointer-events: none;
      background:
        radial-gradient(52% 46% at 18% 22%, color-mix(in srgb, var(--accent) 84%, transparent) 0%, transparent 64%),
        radial-gradient(46% 42% at 78% 74%, color-mix(in srgb, var(--accent) 46%, transparent) 0%, transparent 66%);
      filter: blur(16px) saturate(118%);
      opacity: .5;
    }
    .motif-mesh::after {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background: conic-gradient(
        from 210deg at 62% 38%,
        color-mix(in srgb, var(--accent) 44%, transparent) 0deg,
        transparent 130deg,
        color-mix(in srgb, var(--ink) 14%, transparent) 235deg,
        transparent 360deg);
      filter: blur(22px);
      opacity: .5;
    }
    .hero-visual { background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); }

    /* 6 · sayfa atmosferi: tek renk ailesi, ≤ .16, hareket yok */
    body.scene-landing .sig::before {
      content: ""; position: absolute; right: -14vw; top: -26vh; width: 72vw; height: 72vw;
      background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 88%, transparent) 0%, transparent 70%);
      opacity: .16; filter: blur(26px); pointer-events: none;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: -16vw; bottom: -30vh; width: 58vw; height: 58vw;
      background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--ink) 40%, transparent) 0%, transparent 72%);
      opacity: .10; filter: blur(34px); pointer-events: none;
    }
    body.scene-dashboard .sig::before, body.scene-auth .sig::before, body.scene-onboarding .sig::before {
      content: ""; position: absolute; right: -18vw; top: -30vh; width: 64vw; height: 64vw;
      background: radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--accent) 80%, transparent) 0%, transparent 70%);
      opacity: .10; filter: blur(30px); pointer-events: none;
    }
    @media (max-width: 900px) {
      h1 { font-size: 28px; max-width: 22ch; }
      .panel, .visual-card { border-radius: var(--radius-lg); }
      body.scene-landing .sig::after, body.scene-dashboard .sig::before { display: none; }
      body.scene-landing .sig::before { opacity: .12; }
    }
  `,
};
