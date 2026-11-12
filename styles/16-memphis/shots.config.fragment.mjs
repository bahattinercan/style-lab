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
        radial-gradient(circle at 92% 26%, #ffd93d 0 24px, transparent 25px),
        radial-gradient(circle at 14% 86%, #3ad1c4 0 12px, transparent 13px),
        radial-gradient(circle at 78% 92%, #7b5cff 0 10px, transparent 11px);
      opacity: .45;
    }
    .kpi:nth-child(2) { background: var(--surface-2); }
  `,
};
