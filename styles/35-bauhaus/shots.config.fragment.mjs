export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
    .nav { border-bottom: 3px solid var(--ink); }
    h1 { max-width: 15ch; font-size: 58px; line-height: .98; }
    .hero-copy { border-left: 3px solid var(--accent); padding-left: 20px; }
    .btn { border: 2px solid var(--ink); box-shadow: none; }
    .btn:not(.ghost):not(.soft) { box-shadow: none; }
    .panel { border: 2px solid var(--ink); }
    .visual-card { border: 2px solid var(--ink); }
    .mark { border-radius: 0; }
    body.scene-landing .sig::before {
      content: ''; position: absolute; right: 6vw; top: 8vh;
      width: 156px; height: 156px; border-radius: 50%; background: var(--accent); opacity: .9;
    }
    body.scene-landing .sig::after {
      content: ''; position: absolute; left: 47vw; top: 60vh;
      width: 0; height: 0; border-left: 44px solid transparent;
      border-right: 44px solid transparent; border-bottom: 70px solid var(--ink); opacity: .10;
    }
    @media (max-width: 900px) { .sig::before, .sig::after { display: none; } }
  `,
};
