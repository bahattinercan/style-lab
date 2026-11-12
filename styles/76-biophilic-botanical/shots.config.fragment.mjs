/**
 * 76 · Biyofilik Botanik — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['biophilic-botanical'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
      /* imza: yaprak köşeli kart · yumuşak gölge · dal çizgisi · bitki skalası */
      body {
        background-image:
          radial-gradient(60% 50% at 12% 0%, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 70%),
          radial-gradient(50% 40% at 100% 100%, color-mix(in srgb, var(--ok) 8%, transparent) 0%, transparent 70%);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: -.01em; }
      h1 { font-size: 48px; line-height: 1.08; max-width: 20ch; }
      h2 { font-size: 32px; line-height: 1.14; }
      h3 { font-size: 22px; line-height: 1.28; }
      .lede { font-size: 16px; line-height: 1.65; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
      .eyebrow::before {
        content: ''; width: 8px; height: 8px; border-radius: 999px 999px 999px 2px;
        background: var(--accent);
      }
      .brand { font-family: var(--font-display); font-size: 20px; letter-spacing: 0; }

      .nav {
        background: color-mix(in srgb, var(--bg) 86%, var(--surface));
        border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
      }
      .nav-links a { font-family: var(--font-body); font-size: 15px; font-weight: 600; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      /* yaprak biçimi: çapraz köşeler */
      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: 32px 12px 32px 12px; box-shadow: var(--shadow);
      }
      .kpi, .field { border-radius: 20px 10px 20px 10px; box-shadow: none; }
      .panel, .card, .visual-card { position: relative; overflow: hidden; }
      .panel::after, .card::after, .visual-card::after {
        content: ''; position: absolute; left: 24px; bottom: 14px; width: 64px; height: 1px;
        background: color-mix(in srgb, var(--accent) 45%, transparent);
      }

      .btn {
        height: 44px; padding: 0 22px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 15px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn.sm { height: 36px; padding: 0 16px; font-size: 14px; }
      .btn.ghost, .btn.soft {
        background: var(--surface); color: var(--ink); border: 1px solid var(--line);
      }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 35%, transparent); outline-offset: 2px;
      }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-body); font-size: 12px; font-weight: 600;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 12%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 32%, transparent); }
      .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .table tr:hover td { background: var(--surface-2); }
      .bar, .visual-row .line, .divider { background: var(--line); border-radius: 999px; }
      .divider { height: 1px; }
      .m-grid {
        background-image: radial-gradient(color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px);
        background-size: 18px 18px; border-radius: var(--radius-lg);
      }
      .mark { border-radius: 999px 999px 999px 4px; background: var(--accent); color: var(--accent-ink); }
      .sig {
        background: radial-gradient(40% 60% at 80% 20%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%);
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
          /* imza hero: bitki büyüme katmanları + yaprak köşesi */
          .hero-visual { min-height: 360px; padding: 22px; background: color-mix(in srgb, var(--accent) 8%, var(--bg-2)); }
          .visual-card { width: 100%; min-height: 300px; border-radius: 32px 12px 32px 12px; display: flex; flex-direction: column; gap: 12px; }
          .visual-card .bar { height: 6px; border-radius: 999px; }
          .visual-rows { margin-top: auto; gap: 10px; }
          .visual-row { grid-template-columns: 26px 1fr auto; border-radius: 20px 8px 20px 8px; }
          .visual-row .sq { border-radius: 999px 999px 999px 4px; height: 26px; }
          .hero-visual::after {
            content: ''; position: absolute; left: 18px; right: 18px; bottom: 14px; height: 1px;
            background: color-mix(in srgb, var(--accent) 40%, transparent);
          }
    `,
  },
};
