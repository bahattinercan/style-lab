export const CONFIG = {
  motif: 'none',
  extraCss: `
    .panel {
      background: linear-gradient(180deg, #fdf8ee, #ece3d2);
      border-color: #b9ad99;
      box-shadow: var(--shadow);
    }
    .nav, .logo-strip, .tabbar { background: linear-gradient(180deg, #ece3d2, #d8cfbd); border-color: #b9ad99; }
    .btn {
      background: linear-gradient(180deg, #479a74, #2f6b4f);
      border-color: #245139;
      text-shadow: 0 1px 0 rgba(0,0,0,.35);
      box-shadow: var(--shadow);
    }
    .btn.ghost { background: linear-gradient(180deg, #fbf6ea, #e3dac8); border-color: #b9ad99; color: var(--ink); text-shadow: none; }
    .field { background: #fffdf7; box-shadow: inset 0 2px 4px rgba(47,42,36,.22); }
    .hero-visual { background: linear-gradient(180deg, #fdf8ee, #e6dcc9); border-color: #b9ad99; }
    .mark { background: linear-gradient(180deg, #479a74, #245139); }
  `,
};
