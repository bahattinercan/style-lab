export const CONFIG = {
  motif: 'dots',
  extraCss: `
    .hero-visual { border-radius: 24px 24px 24px 4px; }
    .panel { border-radius: 18px 18px 18px 3px; }
    h1 { font-weight: 400; }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background: repeating-linear-gradient(45deg, rgba(192,96,60,.07) 0 10px, transparent 10px 20px);
    }
  `,
};
