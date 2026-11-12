export const CONFIG = {
  motif: 'rings',
  extraCss: `
    body { background: linear-gradient(180deg, #ffffff 0%, var(--bg) 42%, #c9e7ff 100%); }
    .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.95); }
    .hero-visual { background: radial-gradient(circle at 28% 18%, #ffffff, #cfe9ff 55%, #8ecbf2); }
    .btn { background: linear-gradient(180deg, #6fc0f0, var(--accent)); box-shadow: 0 2px 6px rgba(47,155,224,.45), inset 0 1px 0 rgba(255,255,255,.75); }
    .btn.ghost { background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(214,236,255,.7)); }
  `,
};
