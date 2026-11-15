export const CONFIG = {
  motif: 'dots',
  bodyClass: 'upper',
  extraCss: `
    .panel { border: 3px solid var(--ink); }
    .btn { border: 3px solid var(--ink); }
    .hero-visual { border: 3px solid var(--ink); }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background:
        radial-gradient(circle at 8% 18%, var(--accent) 0 16px, transparent 17px),
        radial-gradient(circle at 92% 26%, var(--warn) 0 24px, transparent 25px),
        radial-gradient(circle at 14% 86%, color-mix(in srgb, var(--accent) 70%, var(--surface)) 0 12px, transparent 13px),
        radial-gradient(circle at 78% 92%, color-mix(in srgb, var(--accent) 45%, var(--surface)) 0 10px, transparent 11px);
      opacity: .45;
    }
    .kpi:nth-child(2) { background: var(--surface-2); }
  `,
};
