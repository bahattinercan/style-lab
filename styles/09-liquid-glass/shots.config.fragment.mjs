export const CONFIG = {
  motif: 'blob',
  extraCss: `
    body {
      background:
        radial-gradient(30% 34% at 22% 18%, color-mix(in srgb, var(--accent) 26%, var(--surface)) 0%, transparent 60%),
        radial-gradient(28% 32% at 78% 34%, color-mix(in srgb, var(--accent) 58%, var(--surface)) 0%, transparent 62%),
        radial-gradient(34% 34% at 46% 96%, var(--accent) 0%, transparent 60%),
        linear-gradient(170deg, var(--bg), color-mix(in srgb, var(--bg) 75%, var(--ink)));
      background-attachment: fixed;
    }
    .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.35); }
    .btn { border-radius: 999px; }
    .field, .icon-btn { border-radius: 999px; }
    .nav, .logo-strip { background: rgba(255,255,255,.05); backdrop-filter: blur(24px) saturate(150%); }
    .hero-visual { background: rgba(255,255,255,.04); }
  `,
};
