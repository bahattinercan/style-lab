/**
 * 69 · Andalusian Azulejo — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: '',
  extraCss: `
      /* imza: 2px harç ızgarası · sekiz köşeli yıldız tekrarı · ince seramik display */
      h1 { font-size: 52px; line-height: 1.1; letter-spacing: .02em; font-weight: 400; max-width: 21ch; }
      h2 { font-size: 28px; line-height: 1.2; letter-spacing: .015em; font-weight: 400; }
      h3 { font-size: 19px; line-height: 1.32; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); letter-spacing: .14em; font-size: 11px; text-transform: uppercase; }
      .brand { font-family: var(--font-display); font-size: 18px; letter-spacing: .08em; text-transform: uppercase; }
      .lede { font-size: 16px; line-height: 1.68; max-width: 50ch; color: var(--ink-soft); }

      .nav { border-bottom: 2px solid var(--line); padding: 20px 40px; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
      .divider { height: 2px; background: var(--line); border: 0; }
      .hero-copy { border-left: 2px solid var(--accent); padding-left: 20px; }

      /* fayans: kartlar 1px ince kenar, radius 2px, golge yok; ayrım harç rengiyle */
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: var(--radius); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .hero-visual { border-radius: var(--radius); box-shadow: none; border: 1px solid var(--line); }
      .chip { border-radius: 1px; background: var(--surface-2); border-color: var(--line); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .btn { border-radius: 1px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; min-height: 44px; padding: 12px 18px; box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field, input, select, textarea { border-radius: 1px; background: var(--surface); border: 1px solid var(--line); }
      .field.focus, input:focus { outline: 2px solid var(--accent); outline-offset: 0; }
      .mark { border-radius: 1px; background: var(--accent); color: var(--accent-ink); }

      /* harç: bitişik fayans blokları arasında 2px zemin çizgisi */
      .m-grid, .data-grid, .comp-grid, .quad, .plan-grid, .stat-grid { gap: 2px; background: var(--line); padding: 2px; }
      .m-grid > *, .data-grid > *, .comp-grid > *, .quad > *, .plan-grid > * { background: var(--surface); }

      /* sekiz köşeli yıldız tekrarı: iki kare üst üste, yalnız dekoratif katman */
      body.scene-landing .sig::before {
        content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .16;
        background-image:
          repeating-conic-gradient(from 22.5deg, var(--accent) 0deg 45deg, transparent 45deg 90deg),
          repeating-linear-gradient(45deg, transparent 0 58px, var(--accent) 58px 59px),
          repeating-linear-gradient(-45deg, transparent 0 58px, var(--accent) 58px 59px);
        background-size: 60px 60px, 60px 60px, 60px 60px;
        -webkit-mask-image: radial-gradient(circle at 78% 22%, var(--ink) 0 22vmax, transparent 24vmax);
        mask-image: radial-gradient(circle at 78% 22%, var(--ink) 0 22vmax, transparent 24vmax);
      }
      /* kobalt tek kare mühür: sağ alt köşede tek fayans */
      body.scene-landing .sig::after {
        content: ""; position: absolute; right: 7vw; bottom: 14vh; width: 58px; height: 58px;
        background: var(--accent); border-radius: 1px;
        box-shadow: inset 0 0 0 5px var(--bg), inset 0 0 0 6px var(--accent);
      }
      @media (max-width: 900px) {
        h1 { font-size: 34px; }
        body.scene-landing .sig::before { opacity: .12; }
        body.scene-landing .sig::after { width: 40px; height: 40px; right: 6vw; bottom: 8vh; }
      }

      /* ---------- QA dalgası: okunurluk / çakışma / boşluk (kaynak düzeyi) ---------- */
      .btn:disabled, .btn[disabled], .btn.is-disabled { opacity: .6; background: var(--surface-2); color: var(--ink); box-shadow: inset 0 0 0 1px var(--line); }
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 32%, transparent); }
      .btn { white-space: nowrap; }
      .chip:not(.accent) { background: var(--surface-2); color: var(--ink-soft); }
      .chip.accent { color: var(--accent-ink); }
      .logo-strip, .logo-strip span, .foot-demo .col-h, .foot-legal, .proof li { color: var(--ink-soft); }
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .sig::before, .sig::after { opacity: .6; }
      .tabs, .tabbar, .mbar { max-width: 100%; overflow: hidden; }
      @media (min-width: 901px) { .hero-visual { min-height: 380px; } }
    `,
  scenes: {
    landing: `
        .hero-visual .visual-card { border: 1px solid var(--ink); border-radius: 0; padding: 20px; box-shadow: none; }
        .hero-visual .visual-card .bar { height: 4px; border: 0; border-radius: 0; background: var(--surface-2); }
        .hero-visual .visual-card .bar.accent { width: 36%; background: var(--accent); }
        .hero-visual .visual-rows { gap: 0; }
        .hero-visual .visual-row { height: 34px; padding: 0 10px; border: 1px solid var(--line); margin: -1px 0 0 -1px; grid-template-columns: 16px 1fr auto; }
        .hero-visual .visual-row .sq { width: 12px; height: 12px; border-radius: 0; border: 1px solid var(--accent); background: transparent; transform: rotate(45deg); }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 11px; }
        .hero-visual::before { content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(90deg, color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px),
            linear-gradient(0deg, color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px);
          background-size: 32px 32px; }
      `,
  },
};
