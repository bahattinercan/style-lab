export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
    .hero-visual { transform: rotate(-1.5deg); border-radius: 0; }
    .panel:nth-of-type(2n) { transform: rotate(.6deg); border-radius: 0; }
    .btn { border: 3px solid var(--ink); border-radius: 0; box-shadow: var(--shadow-hard); }
    .eyebrow { color: var(--accent); letter-spacing: .1em; }
    h1 { letter-spacing: -.01em; line-height: .92; }
    .field { border-radius: 0; border-width: 2px; }
    .nav { border-bottom: 3px solid var(--ink); }
  `,
};
