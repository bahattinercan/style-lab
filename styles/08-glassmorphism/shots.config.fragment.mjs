export const CONFIG = {
  motif: 'blob',
  extraCss: `
    body {
      background:
        radial-gradient(34% 40% at 16% 20%, #7dd3fc 0%, transparent 62%),
        radial-gradient(32% 36% at 84% 26%, #a78bfa 0%, transparent 64%),
        radial-gradient(38% 38% at 58% 92%, #f472b6 0%, transparent 62%),
        linear-gradient(160deg, #1b1035, #2a1a5e 60%, #14082b);
      background-attachment: fixed;
    }
    .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.28); }
    .nav { background: rgba(255,255,255,.08); backdrop-filter: blur(20px) saturate(140%); }
    .logo-strip { background: rgba(255,255,255,.04); backdrop-filter: blur(18px); }
    .side { background: rgba(255,255,255,.06); backdrop-filter: blur(18px); }
    .hero-visual { background: rgba(255,255,255,.05); }
  `,
};
