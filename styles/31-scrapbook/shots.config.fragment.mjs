export const CONFIG = {
  motif: 'paper',
  extraCss: `
    h1 { font-family: var(--font-display); font-weight: 700; letter-spacing: .005em; }
    .hero-visual { transform: rotate(-1.2deg); box-shadow: 6px 6px 0 rgba(31,43,58,.14); }
    .hero-visual::after {
      content: ""; position: absolute; top: -12px; left: 44px; width: 96px; height: 24px;
      background: rgba(255,246,214,.9); border: 1px solid rgba(31,43,58,.15); transform: rotate(-3deg);
    }
    .panel:nth-of-type(2n) { transform: rotate(.8deg); }
    .eyebrow { font-family: var(--font-display); font-size: 14px; letter-spacing: .02em; text-transform: none; }
  `,
};
