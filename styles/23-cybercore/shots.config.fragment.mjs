export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
    h1::before { content: "> "; color: var(--accent); }
    .panel { border-color: rgba(51,255,153,.30); }
    .eyebrow { color: var(--accent); }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, rgba(51,255,153,.055) 0 1px, transparent 1px 3px);
    }
    .hero-visual { border-color: rgba(51,255,153,.30); }
  `,
};
