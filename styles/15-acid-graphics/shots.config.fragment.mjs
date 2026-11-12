export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
    h1 { color: var(--accent); text-shadow: 0 0 28px rgba(204,255,0,.35); }
    .eyebrow { color: var(--accent); }
    .panel { border-color: rgba(204,255,0,.35); }
    .btn { box-shadow: 0 0 20px rgba(204,255,0,.25); }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, rgba(204,255,0,.07) 0 1px, transparent 1px 4px);
    }
    .sig::after {
      content: ""; position: absolute; inset: 0;
      background: radial-gradient(circle at 82% 18%, rgba(204,255,0,.18), transparent 45%);
    }
  `,
};
