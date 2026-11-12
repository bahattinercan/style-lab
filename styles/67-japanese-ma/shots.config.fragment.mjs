/**
 * 67 · Japanese Ma — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* imza: ölçülmüş boşluk · tek yatay çizgi · mühür kırmızısı nokta */
      h1 { font-size: 64px; line-height: 1.02; letter-spacing: -.03em; font-weight: 400; max-width: 17ch; }
      h2 { font-size: 26px; line-height: 1.2; letter-spacing: -.02em; font-weight: 400; }
      h3 { font-size: 17px; line-height: 1.35; letter-spacing: -.01em; }
      .eyebrow, .label, .mono { letter-spacing: .22em; font-size: 11px; text-transform: uppercase; }
      .brand { font-family: var(--font-display); font-size: 15px; letter-spacing: .16em; text-transform: uppercase; }
      .lede { font-size: 16px; line-height: 1.78; max-width: 38ch; color: var(--ink-soft); }

      /* tek yatay çizgi: bölüm başlığının üstünde 1px, başka çizgi yok */
      .nav { border-bottom: 1px solid var(--line); padding: 26px 56px; }
      .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-soft); }
      .divider { height: 0; background: none; border: 0; border-top: 1px solid var(--line); }
      .hero-copy { padding-left: 0; border-left: 0; }

      /* düz washi: kart gölgesiz, radius yok, yalnız 1px çizgi */
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: var(--radius-lg); box-shadow: none; border: 1px solid var(--line); background: var(--surface);
      }
      .hero-visual { border-radius: var(--radius-lg); box-shadow: none; border: 1px solid var(--line); }
      .chip { border-radius: 0; background: transparent; border-color: var(--line); font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase; color: var(--ink-soft); }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .btn { border-radius: 0; font-family: var(--font-mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; min-height: 46px; padding: 14px 22px; box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
      .field, input, select, textarea { border-radius: 0; background: transparent; border: 0; border-bottom: 1px solid var(--line); padding-left: 0; }
      .field.focus, input:focus { outline: 1px solid var(--accent); outline-offset: 4px; }

      /* mühür: hero metninin sağında tek küçük kırmızı kare (alan <= %2) */
      body.scene-landing .sig::before {
        content: ""; position: absolute; top: 128px; left: 58vw;
        width: 26px; height: 26px; background: var(--accent); border-radius: 0;
      }
      /* boşluk çizgisi: sağ 4 kolonun sınırında 1px dikey kural, yalnız hero */
      body.scene-landing .sig::after {
        content: ""; position: absolute; top: 96px; bottom: 20vh; left: 66.6%;
        width: 1px; background: var(--line); opacity: .9;
      }
      /* kimlik: başlık üstü tek 1px çizgi (başka süs yok) */
      .hero-copy h1 { border-top: 1px solid var(--line); padding-top: 28px; }
      @media (max-width: 900px) {
        h1 { font-size: 40px; max-width: 15ch; }
        .lede { max-width: 34ch; }
        body.scene-landing .sig::after { display: none; }
        body.scene-landing .sig::before { top: 92px; left: auto; right: 6vw; width: 20px; height: 20px; }
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
        .hero-visual .visual-card { border: 0; box-shadow: none; background: transparent; padding: 8px 4px; }
        .hero-visual .visual-card .bar { height: 1px; border: 0; border-radius: 0; background: var(--ink-faint); opacity: .6; }
        .hero-visual .visual-card .bar.accent { width: 24%; background: var(--accent); opacity: 1; }
        .hero-visual .visual-rows { gap: 26px; margin-top: 22px; }
        .hero-visual .visual-row { grid-template-columns: 6px 1fr auto; gap: 16px; border: 0; }
        .hero-visual .visual-row .sq { width: 4px; height: 4px; border-radius: 50%; background: var(--ink-faint); }
        .hero-visual .visual-row .line { height: 1px; border-radius: 0; background: var(--line); }
        .hero-visual .visual-row .num { font-family: var(--font-mono); font-size: 10px; letter-spacing: .2em; color: var(--ink-faint); }
        .hero-visual::after { content: ''; position: absolute; left: 18%; right: 18%; bottom: 26%; height: 1px; background: var(--line); pointer-events: none; }
      `,
  },
};
