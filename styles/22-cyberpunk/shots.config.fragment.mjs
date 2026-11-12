export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
    h1 { color: var(--accent); text-shadow: 0 0 16px rgba(249,240,2,.45); }
    .panel { border-color: rgba(5,217,232,.35); }
    .sig::before {
      content: ""; position: absolute; left: 0; right: 0; top: 0; height: 8px;
      background: repeating-linear-gradient(90deg, var(--accent) 0 14px, #0b0b0f 14px 28px);
      opacity: .85;
    }
    .sig::after {
      content: ""; position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, rgba(5,217,232,.06) 0 1px, transparent 1px 3px);
    }
  `,
};
