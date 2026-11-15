export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
    h1 { letter-spacing: .04em; text-shadow: 0 0 18px rgba(255,42,109,.55); }
    .panel { border-color: rgba(255,42,109,.35); }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background:
        radial-gradient(circle at 50% 76%, var(--accent) 0 96px, color-mix(in srgb, var(--accent) 45%, var(--warn)) 96px 132px, transparent 133px),
        repeating-linear-gradient(0deg, rgba(255,42,109,.45) 0 2px, transparent 2px 34px);
      opacity: .55;
    }
  `,
};
