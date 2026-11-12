export const CONFIG = {
  motif: 'bars',
  extraCss: `
    h1 { font-size: 66px; line-height: .92; }
    .hero-copy { max-width: 40ch; }
    .panel { border: 2px solid var(--ink); }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background: repeating-linear-gradient(-45deg, rgba(122,31,61,.10) 0 10px, transparent 10px 20px);
      opacity: .8;
    }
    .hero-visual { box-shadow: 10px 10px 0 rgba(34,20,16,.85); }
  `,
};
