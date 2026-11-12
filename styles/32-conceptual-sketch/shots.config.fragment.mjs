export const CONFIG = {
  motif: 'paper',
  extraCss: `
    h1 { font-family: var(--font-display); font-weight: 400; letter-spacing: 0; }
    .panel { border: 1.5px dashed rgba(42,42,42,.35); box-shadow: none; }
    .hero-visual { border: 1.5px dashed rgba(42,42,42,.4); box-shadow: none; transform: rotate(-.5deg); }
    .btn { border: 1.5px solid var(--ink); box-shadow: var(--shadow-hard); }
    .field { border-style: dashed; }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, rgba(42,42,42,.05) 0 1px, transparent 1px 32px);
    }
  `,
};
