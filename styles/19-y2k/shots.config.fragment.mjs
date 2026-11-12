export const CONFIG = {
  motif: 'rings',
  bodyClass: 'upper',
  extraCss: `
    h1 { letter-spacing: .02em; font-size: 52px; }
    .panel { background: linear-gradient(180deg, rgba(255,255,255,.95), rgba(214,236,255,.8)); }
    .hero-visual { background: linear-gradient(160deg, #ffffff, #cfe8ff 55%, #a9d4ff); }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background:
        radial-gradient(circle at 88% 12%, rgba(123,92,255,.35) 0 3px, transparent 4px),
        radial-gradient(circle at 74% 22%, rgba(123,92,255,.25) 0 2px, transparent 3px),
        radial-gradient(circle at 12% 78%, rgba(47,155,224,.30) 0 3px, transparent 4px);
    }
  `,
};
