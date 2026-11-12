/**
 * 137 · Hologram & Uzamsal Veri — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['volumetric-data'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: '',
  extraCss: `
      /* imza: nokta bulutu yoğunluğu · projeksiyon ızgarası · kesit barı · eksen etiketi */
      body {
        background-image: radial-gradient(color-mix(in srgb, var(--ink) 14%, transparent) 1px, transparent 1px);
        background-size: 8px 8px;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.01em; }
      h1 { font-size: 40px; line-height: 1.12; max-width: 24ch; }
      h2 { font-size: 28px; line-height: 1.2; }
      h3 { font-size: 20px; line-height: 1.28; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.6; max-width: 60ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '▦ '; color: var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 13px; font-weight: 600; letter-spacing: .02em; }

      .nav { background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
      }
      .comp-card-demo, .state-card { box-shadow: var(--shadow); }
      /* projeksiyon hacmi: nokta bulutu + izdüşüm ızgarası */
      .hero-visual, .visual-card {
        background-image:
          radial-gradient(color-mix(in srgb, var(--accent) 42%, transparent) 1px, transparent 1px),
          linear-gradient(color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1px);
        background-size: 7px 7px, 28px 28px, 28px 28px;
      }
      .btn {
        height: 40px; padding: 0 16px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
      .btn.sm { height: 30px; padding: 0 10px; font-size: 10px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 50%, transparent); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--bg-2); border: 1px solid var(--line);
        font-family: var(--font-mono); font-size: 13px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 16%, transparent); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 46%, transparent); }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .02em; }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
      /* kesit barı */
      .bar { background: color-mix(in srgb, var(--accent) 55%, transparent); border-radius: var(--radius); }
      .line, .divider { background: var(--line); }
      .m-grid {
        background-image:
          radial-gradient(color-mix(in srgb, var(--accent) 50%, transparent) 1px, transparent 1px),
          linear-gradient(color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px);
        background-size: 6px 6px, 24px 24px; border-radius: var(--radius-lg);
      }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .sig { box-shadow: inset 0 1px 0 color-mix(in srgb, var(--accent) 40%, transparent); }


      /* ===== FIX136 denetim düzeltmeleri ===== */
      /* D1a: "Pasif" butonu. Ölçüm: element opacity .42 (kit inline) → 1.9-3.3:1,
         opacity .6 + ink-soft → 2.1-3.7:1 (eşik altı). Bu yüzden .6 görsel ağırlık
         opacity yerine %60 karışım + kesikli kenarla kurulur; metin ink-soft kalır
         (ölçüm 5.6-8.5:1). Inline opacity: .42 bu yüzden !important ile kırılır. */
      .btn[aria-disabled="true"], .btn:disabled, .btn.is-disabled {
        opacity: 1 !important; color: var(--ink-soft);
        background: var(--surface); border: 1px dashed color-mix(in srgb, var(--ink) 32%, transparent);
        box-shadow: none;
      }
      /* D1b: buton metni ikinci satıra düşmesin */
      .btn { white-space: nowrap; }
      /* D2: chip metni iki modda da açıkça sabitlenir (koyu zemin / koyu metin çakışması) */
      .chip { color: var(--ink); }
      .chip.accent, .chip:first-child { color: var(--accent-ink); }
    `,
  scenes: {
    landing: `

      /* 01 · landing — hacim kesiti: nokta bulutu + eşik çizgisi + eksen toleransı */
      .scene-landing .hero-visual {
        background-color: var(--bg);
        background-image: radial-gradient(color-mix(in srgb, var(--accent) 42%, transparent) 1px, transparent 1px);
        background-size: 7px 7px;
      }
      .scene-landing .hero-visual::before {
        content: ""; position: absolute; left: 8%; right: 8%; top: 50%; height: 1px;
        background: color-mix(in srgb, var(--accent) 55%, transparent); pointer-events: none;
      }
      .scene-landing .visual-card { width: 56%; background: color-mix(in srgb, var(--surface) 86%, transparent); }
      .scene-landing .visual-card::before {
        content: "KESİT · z 0.42"; display: block; margin-bottom: 6px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .14em; color: var(--accent);
      }
      .scene-landing .visual-card .bar { height: 10px; border: 0; border-radius: 2px; background: color-mix(in srgb, var(--accent) 26%, transparent); }
      .scene-landing .visual-card .bar.accent { width: 42%; background: var(--accent); }
      .scene-landing .visual-row .line { background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 70%, transparent) 0 6px, transparent 6px 12px); }
      .scene-landing .visual-row .num::after { content: " ±0.03"; color: var(--ink-soft); }
    `,
  },
};
