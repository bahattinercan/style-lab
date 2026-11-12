export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
    /* imza: kadran yayı · köşe crosshair · 4px cetvel tıkları · 2px sert gölge · birim etiketi */
    body { font-variant-numeric: tabular-nums; }
    h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: var(--tracking); text-transform: uppercase; }
    h1 { font-size: 32px; line-height: 1.16; max-width: 24ch; }
    h2 { font-size: 21px; line-height: 1.24; }
    h3 { font-size: 16px; line-height: 1.3; }
    .eyebrow, .label, .mono {
      font-family: var(--font-mono); font-size: 10px; font-weight: 400;
      letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft);
    }
    .eyebrow::before { content: 'CH-'; color: var(--accent); }
    .lede { font-size: 15px; line-height: 1.58; max-width: 64ch; color: var(--ink-soft); }

    .nav {
      height: 56px; padding: 0 20px; border-radius: 0; background: var(--surface);
      border-bottom: 1px solid var(--line); box-shadow: none;
    }
    .nav-links a { font-family: var(--font-body); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; }
    .nav::after {
      content: 'CAL 2026-02-11'; position: absolute; right: 20px; top: 50%; transform: translateY(-50%);
      font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-soft);
    }

    /* ölçüm kartı: crosshair köşeler + kadran yayı + birim */
    .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile {
      position: relative; background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius-lg); box-shadow: none; padding: 16px;
    }
    .kpi { box-shadow: var(--shadow-hard); }
    .kpi::before, .kpi::after {
      content: ''; position: absolute; width: 8px; height: 8px; pointer-events: none;
      border-top: 1px solid var(--accent); border-left: 1px solid var(--accent);
    }
    .kpi::before { top: 6px; left: 6px; }
    .kpi::after { bottom: 6px; right: 6px; transform: rotate(180deg); }
    .kpi .v, .kpi .num-big {
      font-family: var(--font-mono); font-weight: 400; font-size: 40px;
      line-height: 1.05; letter-spacing: 0; font-variant-numeric: tabular-nums;
    }
    .kpi .v::after { content: ' mV'; font-size: 12px; letter-spacing: .12em; color: var(--ink-soft); }

    /* cetvel tıkları: bölüm ayırıcıları 4px aralıklı 1px çizgiler */
    .divider {
      height: 6px; background: none; border: 0;
      background-image: repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 4px);
    }
    .hero, .side, .foot-demo {
      background-image: repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 64px);
    }

    .btn {
      min-height: 40px; padding: 0 16px; border-radius: var(--radius);
      font-family: var(--font-display); font-size: 12px; font-weight: 400;
      letter-spacing: .06em; text-transform: uppercase;
      box-shadow: var(--shadow-hard);
    }
    .btn.ghost, .btn.soft {
      background: var(--surface); border: 1px solid var(--line); color: var(--ink);
      box-shadow: none; font-family: var(--font-mono); font-size: 12px;
      letter-spacing: .08em; text-transform: none;
    }
    .field {
      height: 36px; border-radius: var(--radius); background: var(--surface);
      border-color: var(--line); box-shadow: none; font-size: 14px;
      font-family: var(--font-mono); font-variant-numeric: tabular-nums;
    }
    .chip {
      border-radius: var(--radius); background: var(--surface-2); border: 1px solid var(--line);
      color: var(--ink-soft); font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
      text-transform: uppercase;
    }
    .chip.accent { background: var(--accent); border-color: transparent; color: var(--accent-ink); }

    .hero-visual { border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--surface); }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
    .proof li::before {
      content: ''; width: 10px; height: 2px; border-radius: 0; background: var(--accent);
    }
    .logo-strip span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; }
  
      /* ---- FIX46-60 · R3 düzeltme katmanı (kontrast + çakışma) ---- */
      /* devre dışı buton: opaklık yerine ölçülmüş renk çifti (ink-soft / surface-2 >= 4.5:1) */
      .btn[aria-disabled="true"], .btn[aria-disabled="true"]:hover {
        opacity: 1 !important; background: var(--surface-2) !important;
        color: var(--ink-soft) !important; border-color: var(--line) !important; box-shadow: none !important;
      }
      /* ghost/soft kenarlığı koyu modda görünür kalır (>=3:1 non-text) */
      [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
        border-color: color-mix(in srgb, var(--ink) 62%, transparent);
      }
      /* footer / logo şeridi etiketleri: ink-faint -> ink-soft */
      .logo-strip, .logo-strip span, .foot-demo .col-h, footer .label { color: var(--ink-soft); }
      /* motif katmanı içeriğin arkasında kalsın (kit z-index:-1 üstüne güvence) */
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .hero-copy, .hero-visual, .visual-card { position: relative; z-index: 1; }
`,
  scenes: {
  landing: `
      /* landing imzası: kadran yayı + iğne + okuma satırı */
      .hero-visual { background: radial-gradient(120% 100% at 50% 100%, var(--surface-2), var(--surface)); }
      .hero-visual::after { content: ''; position: absolute; left: 50%; bottom: 26px; width: 190px; height: 95px;
        transform: translateX(-50%); pointer-events: none;
        background: conic-gradient(from 270deg at 50% 100%, var(--accent) 0 62%, color-mix(in srgb, var(--ink) 12%, transparent) 62% 100%);
        border-radius: 190px 190px 0 0;
        mask-image: radial-gradient(circle at 50% 100%, transparent 0 54%, var(--ink) 55%);
        -webkit-mask-image: radial-gradient(circle at 50% 100%, transparent 0 54%, var(--ink) 55%); }
      .visual-card { background: color-mix(in srgb, var(--surface) 92%, transparent); }
      .visual-card .bar { height: 3px; }
      .visual-row .num { font-family: var(--font-mono); font-size: 13px; letter-spacing: .06em; }
      .visual-row .line { height: 1px; background: color-mix(in srgb, var(--ink) 16%, transparent); }`,
  },
};
