/**
 * 140 · Nanoteknik — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['nanotech'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'dots',
  bodyClass: 'upper',
  extraCss: `
      /* imza: karbon kafes · nokta ızgarası · nm ölçü etiketi · monokrom accent */
      body {
        background-image: radial-gradient(color-mix(in srgb, var(--ink) 10%, transparent) 1px, transparent 1px);
        background-size: 8px 8px;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 400; letter-spacing: -.01em; }
      h1 { font-size: 42px; line-height: 1.08; max-width: 22ch; }
      h2 { font-size: 27px; line-height: 1.18; letter-spacing: .02em; }
      h3 { font-size: 19px; line-height: 1.26; }
      .lede { font-family: var(--font-body); font-size: 15px; line-height: 1.6; max-width: 64ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
      .eyebrow::before { content: ''; width: 3px; height: 3px; background: var(--accent); box-shadow: 6px 0 0 var(--accent), 12px 0 0 var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }

      .nav {
        background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        box-shadow: inset 0 -8px 0 -7px color-mix(in srgb, var(--ink) 14%, transparent);
      }
      .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 500; }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); box-shadow: inset 0 -2px 0 var(--accent); }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      /* kafes noktası: kart sol üst */
      .panel, .card, .visual-card, .kpi { position: relative; }
      .panel::before, .card::before, .visual-card::before, .kpi::before {
        content: ''; position: absolute; top: 8px; left: 8px; width: 3px; height: 3px;
        background: var(--accent); box-shadow: 4px 0 0 var(--accent), 0 4px 0 var(--accent), 4px 4px 0 var(--accent);
        opacity: .55;
      }
      /* kafes sahnesi: altıgen bağ + nokta */
      .hero-visual, .visual-card {
        background-image:
          repeating-linear-gradient(60deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px 18px),
          repeating-linear-gradient(-60deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px 18px),
          radial-gradient(color-mix(in srgb, var(--accent) 60%, transparent) 1.2px, transparent 1.3px);
        background-size: auto, auto, 18px 18px;
      }
      .btn {
        height: 36px; padding: 0 14px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn.sm { height: 28px; padding: 0 10px; font-size: 10px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .02em; }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--ink);
      }
      .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
      .bar { background: color-mix(in srgb, var(--accent) 70%, transparent); border-radius: var(--radius); }
      .line, .divider { background: var(--line); }
      .m-grid {
        background-image:
          repeating-linear-gradient(60deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px 16px),
          repeating-linear-gradient(-60deg, color-mix(in srgb, var(--ink) 12%, transparent) 0 1px, transparent 1px 16px);
        border-radius: var(--radius-lg);
      }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .sig { border-top: 1px solid color-mix(in srgb, var(--ink) 30%, transparent); }


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
      /* D3a: ghost kenarlığı --line (%13-20) koyu modda görünmüyordu;
         ink %48 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 48%, transparent); }
      [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
        border-color: color-mix(in srgb, var(--ink) 48%, transparent);
      }

      /* D3b: nav aktif göstergesi metnin altına iner (inset gölge için alt padding) */
      .nav-links a { padding-bottom: 4px; }
    `,
  scenes: {
    landing: `

      /* 01 · landing — nanometre ölçüm levhası: kafes düğümleri + mono ölçüler */
      .scene-landing .visual-card { width: 58%; }
      .scene-landing .visual-card::before {
        content: "Ø 42 nm · ±1.5 nm"; display: block; margin-bottom: 6px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em;
        text-transform: uppercase; color: var(--accent);
      }
      .scene-landing .visual-card .bar { height: 2px; border: 0; border-radius: 0; background: color-mix(in srgb, var(--ink) 20%, transparent); }
      .scene-landing .visual-card .bar.accent { width: 34%; background: var(--accent); }
      .scene-landing .visual-row .sq { border-radius: 1px; background: var(--accent); opacity: .7; }
      .scene-landing .hero-visual::before {
        content: ""; position: absolute; inset: 16px; pointer-events: none; opacity: .5;
        background-image: radial-gradient(color-mix(in srgb, var(--accent) 60%, transparent) 1.4px, transparent 1.5px);
        background-size: 18px 18px;
      }
    `,
  },
};
