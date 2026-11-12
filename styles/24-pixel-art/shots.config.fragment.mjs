export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
    *, *::before, *::after { border-radius: 0 !important; }
    h1 { font-size: 30px; line-height: 1.3; letter-spacing: 0; }
    h2 { font-size: 18px; }
    .lede { font-size: 14px; max-width: 40ch; }
    .hero-visual { border: 3px solid var(--ink); box-shadow: var(--shadow-hard); }
    .panel, .btn, .field { border-width: 2px; }
    .btn { box-shadow: var(--shadow-hard); }
    .eyebrow, .label, .chip { font-family: var(--font-display); font-size: 9px; letter-spacing: .06em; }
  `,
};
