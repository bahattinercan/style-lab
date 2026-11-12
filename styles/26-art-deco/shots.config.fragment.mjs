export const CONFIG = {
  motif: 'rings',
  bodyClass: 'upper',
  extraCss: `
    h1 { letter-spacing: .10em; font-weight: 400; }
    .hero-visual { border: 1px solid var(--accent); outline: 1px solid var(--accent); outline-offset: 7px; box-shadow: none; }
    .eyebrow { color: var(--accent); letter-spacing: .32em; }
    .nav { border-bottom: 1px solid var(--accent); }
    .logo-strip { border-top: 1px solid var(--accent); letter-spacing: .24em; }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background: repeating-linear-gradient(90deg, rgba(200,162,74,.16) 0 1px, transparent 1px 9px);
      -webkit-mask-image: linear-gradient(#000, transparent 45%);
      mask-image: linear-gradient(#000, transparent 45%);
    }
  `,
};
