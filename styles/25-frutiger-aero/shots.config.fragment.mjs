export const CONFIG = {
  motif: 'rings',
  extraCss: `
    body { background: linear-gradient(180deg, var(--surface) 0%, var(--bg) 42%, color-mix(in srgb, var(--accent) 18%, var(--surface)) 100%); }
    .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.95); }
    .hero-visual { background: radial-gradient(circle at 28% 18%, var(--surface), color-mix(in srgb, var(--accent) 25%, var(--surface)) 55%, color-mix(in srgb, var(--accent) 34%, var(--surface))); }
    .btn { background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 55%, var(--surface)), var(--accent)); box-shadow: 0 2px 6px rgba(47,155,224,.45), inset 0 1px 0 rgba(255,255,255,.75); }
    .btn.ghost { background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(214,236,255,.7)); }
  `,
};
