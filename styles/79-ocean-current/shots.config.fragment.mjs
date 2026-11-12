/**
 * 79 · Deniz & Akıntı — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['ocean-current'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'rings',
  bodyClass: '',
  extraCss: `
      /* imza: derin su zemini · akıntı çizgisi · katman parlaklığı · serif display */
      body {
        background-image:
          radial-gradient(70% 50% at 50% 0%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 70%),
          repeating-linear-gradient(96deg, color-mix(in srgb, var(--accent) 7%, transparent) 0 1px, transparent 1px 46px);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: .005em; }
      h1 { font-size: 56px; line-height: 1.04; max-width: 19ch; }
      h2 { font-size: 36px; line-height: 1.14; }
      h3 { font-size: 24px; line-height: 1.26; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.75; max-width: 56ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
      .eyebrow::before {
        content: ''; width: 18px; height: 1.5px; background: var(--accent); border-radius: 999px;
      }
      .brand { font-family: var(--font-display); font-size: 22px; font-weight: 500; }

      .nav {
        background: color-mix(in srgb, var(--bg-2) 88%, transparent); border-bottom: 1px solid var(--line);
        border-radius: 0; box-shadow: inset 0 -1.5px 0 color-mix(in srgb, var(--accent) 22%, transparent);
        backdrop-filter: blur(var(--blur)); -webkit-backdrop-filter: blur(var(--blur));
      }
      .nav-links a { font-family: var(--font-body); font-size: 15px; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
      }
      .panel, .card, .visual-card { position: relative; overflow: hidden; }
      .panel::before, .card::before, .visual-card::before {
        content: ''; position: absolute; inset: 0 0 auto 0; height: 1.5px;
        background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 40%, transparent), transparent);
      }
      /* akıntı çizgileri: hero görselinin zemini */
      .hero-visual, .visual-card {
        background-image:
          repeating-radial-gradient(120% 100% at 20% 110%, transparent 0 26px, color-mix(in srgb, var(--accent) 20%, transparent) 26px 27px),
          repeating-linear-gradient(72deg, color-mix(in srgb, var(--ink) 8%, transparent) 0 1px, transparent 1px 32px);
      }
      .btn {
        height: 46px; padding: 0 24px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 15px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
      .btn.sm { height: 36px; padding: 0 16px; font-size: 14px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 52%, transparent); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        background: var(--bg-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-body); font-size: 12px; font-weight: 600;
      }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
      .table th {
        font-family: var(--font-mono); font-size: 12px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
      .bar, .visual-row .line, .divider { background: color-mix(in srgb, var(--accent) 24%, var(--line)); }
      .m-grid {
        background-image:
          repeating-radial-gradient(140% 120% at 10% 120%, transparent 0 22px, color-mix(in srgb, var(--accent) 16%, transparent) 22px 23px);
        border-radius: var(--radius-lg);
      }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
      .sig {
        background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 18%, transparent), transparent);
        height: 1.5px;
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
          /* imza hero: akıntı çizgileri + derinlik katmanı */
          .hero-visual { min-height: 360px; padding: 20px; background: linear-gradient(180deg, var(--bg-2) 0%, var(--surface) 100%); }
          .visual-card { width: 100%; min-height: 300px; background: color-mix(in srgb, var(--surface) 88%, transparent); }
          .visual-rows { margin-top: auto; }
          .visual-row { background: transparent; border: 0; border-bottom: 1px solid color-mix(in srgb, var(--accent) 26%, transparent); border-radius: 0; }
          .visual-row .sq { border-radius: 999px 999px 999px 2px; }
          .hero-visual::before {
            content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .45;
            background-image: repeating-linear-gradient(6deg, transparent 0 26px, color-mix(in srgb, var(--accent) 26%, transparent) 26px 27px, transparent 27px 52px);
          }
    `,
  },
};
