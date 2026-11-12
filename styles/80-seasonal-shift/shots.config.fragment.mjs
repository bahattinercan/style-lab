/**
 * 80 · Mevsim Geçişi — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['seasonal-shift'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
      /* imza: krem zemin · iki tonlu mevsim şeridi · yumuşak gölge · serif display */
      body {
        background-image: linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 500; letter-spacing: 0; }
      h1 { font-size: 50px; line-height: 1.06; max-width: 21ch; }
      h2 { font-size: 32px; line-height: 1.16; }
      h3 { font-size: 21px; line-height: 1.3; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.65; max-width: 60ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
      .eyebrow::before {
        content: ''; width: 14px; height: 3px; border-radius: 999px;
        background: linear-gradient(90deg, var(--accent) 0 50%, var(--ok) 50% 100%);
      }
      .brand { font-family: var(--font-display); font-size: 21px; font-weight: 500; }

      /* iki tonlu mevsim şeridi */
      .nav {
        height: 62px; background: var(--bg); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        box-shadow: inset 0 -3px 0 -1px transparent;
        border-image: linear-gradient(90deg, var(--accent) 0 50%, var(--ok) 50% 100%) 3;
      }
      .nav-links a { font-family: var(--font-body); font-size: 15px; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      .panel, .card, .kpi, .visual-card, .comp-card-demo, .state-card, .m-tile, .field {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      .panel, .card, .visual-card { position: relative; overflow: hidden; }
      .panel::before, .card::before, .visual-card::before {
        content: ''; position: absolute; inset: 0 0 auto 0; height: 3px;
        background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 55%, transparent), color-mix(in srgb, var(--ok) 40%, transparent));
      }
      /* iki mevsim bölünmesi: hero görseli */
      .hero-visual, .visual-card {
        background-image:
          linear-gradient(115deg, color-mix(in srgb, var(--accent) 16%, var(--surface)) 0 46%, color-mix(in srgb, var(--ok) 14%, var(--surface)) 54% 100%),
          radial-gradient(color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px);
        background-size: auto, 14px 14px;
      }
      .btn {
        height: 44px; padding: 0 22px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 15px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
      .btn.sm { height: 36px; padding: 0 16px; font-size: 14px; }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 30%, transparent); outline-offset: 2px;
      }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-body); font-size: 12px; font-weight: 600;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 13%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 34%, transparent); }
      .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 500; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .bar, .visual-row .line, .divider { background: var(--line); }
      .m-grid {
        background-image: linear-gradient(115deg, color-mix(in srgb, var(--accent) 14%, transparent) 0 48%, color-mix(in srgb, var(--ok) 12%, transparent) 52% 100%);
        border-radius: var(--radius-lg);
      }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
      .sig {
        background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 20%, transparent) 40%, color-mix(in srgb, var(--ok) 16%, transparent) 60%, transparent);
        height: 3px;
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
          /* imza hero: dört mevsim bandı */
          .hero-visual { min-height: 360px; padding: 20px; }
          .visual-card { width: 100%; min-height: 300px; }
          .visual-rows { margin-top: auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .visual-row { grid-template-columns: 16px 1fr auto; background: var(--surface-2); }
          .visual-row:nth-child(1) .sq { background: color-mix(in srgb, var(--accent) 100%, var(--surface)); }
          .visual-row:nth-child(2) .sq { background: color-mix(in srgb, var(--accent) 70%, var(--surface)); }
          .visual-row:nth-child(3) .sq { background: color-mix(in srgb, var(--accent) 40%, var(--surface)); }
          .hero-visual::after {
            content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 4px;
            background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 90%, transparent), color-mix(in srgb, var(--accent) 20%, transparent));
          }
    `,
  },
};
