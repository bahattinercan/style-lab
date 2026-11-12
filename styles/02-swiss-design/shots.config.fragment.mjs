export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
    .nav { border-bottom: 3px solid var(--ink); }
    .nav-links a { font-size: 12px; letter-spacing: .04em; }
    .eyebrow { color: var(--accent); letter-spacing: .18em; }
    h1 { font-weight: 700; letter-spacing: -.035em; }
    .hero-copy { border-left: 6px solid var(--accent); padding-left: 22px; }
    .btn { border-radius: 0; box-shadow: none; border: 2px solid var(--ink); }
    .btn.ghost { border-width: 2px; }
    .hero-visual { border-radius: 0; box-shadow: none; border-color: var(--ink); }
    .logo-strip { border-top: 3px solid var(--ink); font-weight: 700; letter-spacing: .12em; }
    .proof li::before { background: var(--accent); }
  `,
};
