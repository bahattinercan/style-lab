/**
 * 70 · Slavic Late Brutalist — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
      /* imza: bitişik beton panel · 3px kenar · sert ofset gölge · tehlike şeridi */
      h1 { font-size: 68px; line-height: .94; letter-spacing: .01em; font-weight: 400; max-width: 16ch; }
      h2 { font-size: 34px; line-height: 1.02; letter-spacing: .01em; font-weight: 400; }
      h3 { font-size: 21px; line-height: 1.18; letter-spacing: .015em; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); letter-spacing: .16em; font-size: 11px; }
      .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: .06em; }
      .lede { font-size: 16.5px; line-height: 1.6; max-width: 46ch; }

      .nav { border-bottom: 3px solid var(--ink); padding: 18px 32px; background: var(--surface); }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; }
      .divider { height: 3px; background: var(--ink); border: 0; }
      .hero-copy { border-left: 3px solid var(--ink); padding-left: 22px; }

      /* panel: bitişik bloklar, 3px kenar, radius 0 */
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: 0; border: 3px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .m-grid, .data-grid, .comp-grid, .quad, .plan-grid { gap: 0; }
      .m-grid > *, .data-grid > *, .comp-grid > *, .quad > *, .plan-grid > * { border-radius: 0; margin: -1.5px 0 0 -1.5px; }
      .hero-visual { border: 3px solid var(--ink); border-radius: 0; box-shadow: var(--shadow-hard); }
      .chip { border-radius: 0; background: var(--ink); border-color: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; padding: 3px 7px; }
      .chip.accent { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
      .btn { border-radius: 0; border: 3px solid var(--ink); font-family: var(--font-mono); font-size: 12px; letter-spacing: .14em; min-height: 48px; padding: 13px 22px; box-shadow: none; }
      .btn:not(.ghost):not(.soft) { background: var(--accent); color: var(--accent-ink); }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 3px solid var(--ink); box-shadow: none; }
      .btn:hover { box-shadow: var(--shadow-hard); transform: translate(-1px, -1px); }
      .field, input, select, textarea { border-radius: 0; background: var(--surface); border: 3px solid var(--line); }
      .field.focus, input:focus { outline: 3px solid var(--ink); outline-offset: -3px; }
      .mark { border-radius: 0; background: var(--ink); color: var(--bg); }

      /* beton dokusu: yalnız bölüm zeminlerinde 1px yatay tekrar */
      .sec, .foot-demo, .art-body, .auth-aside {
        background-image: repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 6%, transparent) 0 1px, transparent 1px 6px);
      }
      /* tehlike şeridi: tek bant, 24px, 45 derece (ekran basina 1) */
      body.scene-landing .sig::before {
        content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 24px; pointer-events: none;
        background-image: repeating-linear-gradient(45deg, var(--accent) 0 12px, var(--ink) 12px 24px);
      }
      /* damga: sag ustte buyuk numara/etiket blogu (arsiv muhru) */
      body.scene-landing .sig::after {
        content: ""; position: absolute; top: 92px; right: 6vw; width: 120px; height: 120px;
        border: 3px solid var(--ink); background: var(--bg-2);
        box-shadow: var(--shadow-hard);
      }
      @media (max-width: 900px) {
        h1 { font-size: 40px; max-width: 14ch; }
        body.scene-landing .sig::after { width: 72px; height: 72px; top: 70px; }
        body.scene-landing .sig::before { height: 16px; }
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
        .hero-visual .visual-card { border: 2px solid var(--ink); border-radius: 0; padding: 18px;
          box-shadow: 8px 8px 0 color-mix(in srgb, var(--ink) 85%, transparent); }
        .hero-visual .visual-card .bar { height: 10px; border: 0; border-radius: 0; background: var(--surface-2); }
        .hero-visual .visual-card .bar.accent { width: 46%; background: var(--accent); }
        .hero-visual .visual-row { height: 30px; border-top: 2px solid var(--ink); grid-template-columns: 1fr auto; }
        .hero-visual .visual-row .sq { display: none; }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 13px; }
        .hero-visual::after { content: ''; position: absolute; right: -6px; bottom: -6px; width: 40%; height: 40%;
          border: 2px solid color-mix(in srgb, var(--ink) 35%, transparent); pointer-events: none; }
      `,
  },
};
