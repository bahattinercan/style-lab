/**
 * 77 · Hava Durumu & Atmosfer — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['weather-atmosphere'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* imza: atmosfer gradyanı · sisli cam katman · bulut kütlesi · yumuşak gölge */
      body {
        background-image:
          linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, var(--bg)) 0%, var(--bg) 46%, var(--bg-2) 100%);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: -.01em; }
      h1 { font-size: 54px; line-height: 1.04; max-width: 19ch; }
      h2 { font-size: 34px; line-height: 1.14; }
      h3 { font-size: 22px; line-height: 1.3; }
      .lede { font-size: 16px; line-height: 1.6; max-width: 60ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '~ '; color: var(--accent); }
      .brand { font-family: var(--font-display); font-size: 19px; font-weight: 500; }

      /* sisli cam nav */
      .nav {
        height: 64px; border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        background: color-mix(in srgb, var(--surface) 72%, transparent);
        backdrop-filter: blur(var(--blur)); -webkit-backdrop-filter: blur(var(--blur));
      }
      .nav-links a { font-family: var(--font-body); font-size: 15px; font-weight: 500; }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      .panel, .card, .visual-card { position: relative; overflow: hidden; }
      .panel::before, .card::before, .visual-card::before {
        content: ''; position: absolute; inset: 0 0 auto 0; height: 2px;
        background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 42%, transparent), transparent);
      }
      /* bulut kütlesi: hero görselinin zemini */
      .hero-visual, .visual-card {
        background-image:
          radial-gradient(38% 46% at 28% 62%, color-mix(in srgb, var(--surface) 92%, transparent) 0%, transparent 70%),
          radial-gradient(44% 52% at 72% 48%, color-mix(in srgb, var(--accent) 14%, transparent) 0%, transparent 72%),
          linear-gradient(160deg, color-mix(in srgb, var(--accent) 12%, var(--bg)) 0%, var(--bg-2) 100%);
      }
      .btn {
        height: 46px; padding: 0 24px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: 0 6px 16px color-mix(in srgb, var(--ink) 16%, transparent);
        font-family: var(--font-body); font-size: 15px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn.sm { height: 38px; padding: 0 18px; font-size: 14px; }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); box-shadow: none; }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 30%, transparent); outline-offset: 2px;
      }
      .chip {
        background: color-mix(in srgb, var(--surface) 78%, transparent); border: 1px solid var(--line);
        border-radius: 999px; backdrop-filter: blur(var(--blur)); font-family: var(--font-body); font-size: 12px; font-weight: 600;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 14%, var(--surface)); color: var(--accent); }
      .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .1em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .bar, .visual-row .line, .divider { background: var(--line); }
      .m-grid {
        background-image: linear-gradient(180deg, color-mix(in srgb, var(--accent) 18%, transparent) 0 34%, transparent 100%);
        border-radius: var(--radius-lg);
      }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
      .sig {
        background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, transparent), transparent 60%);
      }

      /* ---------- FIX (76-90 QA): kontrast + çakışma ---------- */
      .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
        opacity: .6 !important; color: var(--ink-soft) !important; background: var(--surface-2) !important;
        border-color: var(--line) !important; box-shadow: none !important; cursor: not-allowed;
      }
      .btn, .btn.ghost, .btn.soft, .btn.sm { white-space: nowrap; }
      .btn.ghost { border-color: color-mix(in srgb, var(--ink) 55%, transparent); }
      .btn.ghost:hover { border-color: color-mix(in srgb, var(--ink) 70%, transparent); }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      .logo-strip { color: var(--ink-soft); }
      .logo-strip span, .proof li, .crumbs span, .foot-demo, .foot-demo * { color: var(--ink-soft); }
      .sig, .sig::before, .sig::after { pointer-events: none; }
      .sig { z-index: 0; }
      .sig::before, .sig::after { z-index: -1; }
      .hero-visual { overflow: hidden; }
      .hero-visual > * { position: relative; z-index: 1; }

    `,
  scenes: {
    landing: `
          /* imza hero: bulut kütlesi + yağış çizgileri */
          .hero-visual { min-height: 360px; padding: 20px; background: linear-gradient(165deg, color-mix(in srgb, var(--accent) 14%, var(--bg-2)) 0%, var(--bg) 100%); }
          .visual-card { width: 100%; min-height: 300px; backdrop-filter: blur(var(--blur)); background: color-mix(in srgb, var(--surface) 82%, transparent); }
          .visual-card .bar { height: 5px; }
          .visual-rows { margin-top: auto; }
          .visual-row { background: color-mix(in srgb, var(--surface) 70%, transparent); }
          .hero-visual::before {
            content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .5;
            background-image: repeating-linear-gradient(105deg, transparent 0 22px, color-mix(in srgb, var(--accent) 20%, transparent) 22px 23px, transparent 23px 44px);
          }
    `,
  },
};
