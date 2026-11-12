export const CONFIG = {
  motif: 'rings',
  extraCss: `
    h1 { font-weight: 400; letter-spacing: .01em; line-height: 1.08; }
    .hero-copy { border: 1px solid var(--line); outline: 1px solid var(--line); outline-offset: 5px; padding: 22px; }
    .hero-visual { border: 1px solid var(--line); outline: 1px solid var(--line); outline-offset: 5px; box-shadow: none; }
    .nav { border-bottom: 3px double var(--line); }
    .lede::first-letter { font-family: var(--font-display); font-size: 42px; float: left; line-height: .8; padding-right: 6px; }
    .logo-strip { border-top: 3px double var(--line); }
  `,
};
