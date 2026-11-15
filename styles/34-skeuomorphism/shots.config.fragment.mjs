export const CONFIG = {
  motif: 'none',
  extraCss: `
    .panel {
      background: linear-gradient(180deg, var(--bg), var(--surface-2));
      border-color: var(--line);
      box-shadow: var(--shadow);
    }
    .nav, .logo-strip, .tabbar { background: linear-gradient(180deg, var(--surface-2), color-mix(in srgb, var(--surface-2) 70%, var(--line))); border-color: var(--line); }
    .btn {
      background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 75%, var(--ink)));
      border-color: color-mix(in srgb, var(--accent) 60%, var(--ink));
      text-shadow: 0 1px 0 rgba(0,0,0,.35);
      box-shadow: var(--shadow);
    }
    .btn.ghost { background: linear-gradient(180deg, var(--bg), var(--surface-2)); border-color: var(--line); color: var(--ink); text-shadow: none; }
    .field { background: var(--surface); box-shadow: inset 0 2px 4px rgba(47,42,36,.22); }
    .hero-visual { background: linear-gradient(180deg, var(--bg), var(--surface-2)); border-color: var(--line); }
    .mark { background: linear-gradient(180deg, var(--accent), color-mix(in srgb, var(--accent) 60%, var(--ink))); }
  `,
};
