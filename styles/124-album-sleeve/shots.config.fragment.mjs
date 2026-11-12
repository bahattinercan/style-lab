/**
 * 124 · Album Sleeve — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: 'upper',
  extraCss: `
      /* imza: 1:1 kilif · sirt seridi + dikey yazi · A/B parca listesi · katalog no · barkod */
      h1 { font-family: var(--font-display); font-size: 66px; line-height: .92; letter-spacing: -.015em; font-weight: 400; max-width: 13ch; }
      h2 { font-family: var(--font-display); font-size: 34px; line-height: .98; letter-spacing: -.01em; font-weight: 400; }
      h3 { font-family: var(--font-body); font-size: 19px; line-height: 1.24; font-weight: 500; }
      .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .14em; }
      .brand { font-family: var(--font-display); font-size: 22px; letter-spacing: .02em; }
      .lede { font-size: 15px; line-height: 1.68; max-width: 50ch; color: var(--ink-soft); }

      .nav { border-bottom: 1px solid var(--line); padding: 18px 36px; }
      .nav-links a { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase; }
      .divider { height: 1px; background: var(--line); border: 0; }
      .hero-copy { border-left: 0; padding-left: 0; }

      /* kilif: 1:1 kare, 2px radius, ince cerceve, tek yumusak golge */
      .hero-visual { aspect-ratio: 1 / 1; border-radius: var(--radius); border: 1px solid var(--line); box-shadow: var(--shadow); position: relative; overflow: hidden; }
      /* sirt seridi: kilifin sol kenarinda 26px dikey serit + dikey yazi */
      .hero-visual::before {
        content: "LP · 33 1/3 RPM"; position: absolute; top: 0; bottom: 0; left: 0; width: 26px;
        background: var(--ink); color: var(--bg); font-family: var(--font-mono); font-size: 9px; letter-spacing: .22em;
        writing-mode: vertical-rl; text-orientation: mixed; display: flex; align-items: center; justify-content: center;
      }
      /* barkod: kilifin sag alt kosesinde dikey cizgi dizisi */
      .hero-visual::after {
        content: ""; position: absolute; right: 14px; bottom: 14px; width: 78px; height: 30px;
        background-image: repeating-linear-gradient(90deg, var(--ink) 0 2px, transparent 2px 4px, var(--ink) 4px 5px, transparent 5px 9px);
        opacity: .85;
      }
      .panel, .panel-2, .visual-card, .m-tile, .kpi, .comp-card, .state-card, .co-sec, .auth-card, .ob-card {
        border-radius: var(--radius); border: 1px solid var(--line); box-shadow: none; background: var(--surface);
      }
      .visual-card { aspect-ratio: 1 / 1; }
      .chip { border-radius: 0; background: transparent; border-color: var(--line); font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .12em; padding: 2px 6px; }
      .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }
      .btn { border-radius: 0; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .12em; min-height: 44px; padding: 12px 18px; box-shadow: none; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field, input, select, textarea { border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line); }
      .field.focus, input:focus { outline: 1px solid var(--accent); outline-offset: 2px; }
      .mark { border-radius: 0; background: var(--accent); color: var(--accent-ink); }

      /* parca listesi: A/B yuz basligi + mono sure kolonu */
      .tbl th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--ink-soft); border-bottom: 1px solid var(--ink); }
      .tbl tr, .mini-table tr { border-bottom: 1px solid var(--line); }
      .tbl td:first-child, .mini-table td:first-child { font-family: var(--font-mono); font-size: 11px; color: var(--ink-faint); width: 28px; }
      .tbl td:last-child, .mini-table td:last-child { font-family: var(--font-mono); font-variant-numeric: tabular-nums; text-align: right; color: var(--ink-soft); }

      /* katalog etiketi: hero'da sol ust kosede mono kutu */
      body.scene-landing .sig::before {
        content: "CAT. NO. LP-124"; position: absolute; top: 84px; left: 6vw;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em;
        color: var(--accent-ink); background: var(--accent); padding: 4px 8px;
      }
      /* ic kilif kagidi: sag kenarda ince dikey cizgi + yatay kat izi */
      body.scene-landing .sig::after {
        content: ""; position: absolute; top: 0; bottom: 0; right: 11vw; width: 1px; background: var(--line);
        box-shadow: inset 0 0 0 0 transparent;
      }
      @media (max-width: 900px) {
        h1 { font-size: 40px; max-width: 14ch; }
        .hero-visual::before { width: 20px; font-size: 8px; }
        body.scene-landing .sig::after { display: none; }
      }
      /* --- QA dalgası: kontrast + örtüşme + yerleşim --- */
      .btn:disabled, .btn[disabled], .btn.disabled { opacity: .6; color: var(--ink-soft); border-color: var(--line); }
      .btn { white-space: nowrap; }
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 30%, transparent); }
      .logo-strip span, .foot-demo .label, .foot-demo span { color: var(--ink-soft); }
      body.scene-landing .sig { z-index: -1; }
    `,
  scenes: {
    landing: `
      /* hero imzası: plak (LP) — göbek deliği + oluk halkaları + şarkı listesi */
      .hero-visual { position: relative; }
      .hero-visual::before {
        content: "A · 33 1/3"; position: absolute; inset: 0; padding: 16px;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .2em; color: var(--ink-soft);
        background:
          radial-gradient(circle at 50% 46%, var(--surface) 0 10px, var(--ink) 10px 11px, transparent 11px) 0 0 / 100% 100% no-repeat,
          repeating-radial-gradient(circle at 50% 46%, color-mix(in srgb, var(--ink) 26%, transparent) 0 1px, transparent 1px 6px) 0 0 / 100% 100% no-repeat,
          linear-gradient(0deg, color-mix(in srgb, var(--ink) 14%, transparent) 0 1px, transparent 1px) 100% 100% / 62% 26px repeat-y;
      }
    `,
  },
};
