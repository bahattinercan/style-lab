export const CONFIG = {
  motif: 'rings',
  extraCss: `
    .nav-links a, .brand { letter-spacing: .22em; text-transform: uppercase; font-size: 10px; }
    h1 { font-weight: 300; letter-spacing: .005em; line-height: 1.12; max-width: 14ch; }
    .eyebrow { letter-spacing: .34em; color: var(--accent); }
    .lede { font-family: var(--font-body); font-size: 13px; letter-spacing: .06em; max-width: 38ch; }
    .btn { padding: 14px 26px; letter-spacing: .18em; text-transform: uppercase; font-size: 10px; box-shadow: none; }
    .btn.ghost { border-color: var(--accent); }
    .hero-visual { border-radius: 0; border-color: var(--accent); box-shadow: none; }
    .logo-strip { letter-spacing: .3em; font-size: 10px; text-transform: uppercase; }
  `,
};
