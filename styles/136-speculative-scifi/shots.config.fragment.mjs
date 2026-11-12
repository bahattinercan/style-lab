/**
 * 136 · Spekülatif Bilim-Kurgu — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['speculative-scifi'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'grid',
  bodyClass: 'upper',
  extraCss: `
      /* imza: gravür plaka · çift çerçeve · radyal kadran tiki · diegetic ölçü */
      body {
        background-image:
          linear-gradient(color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px),
          linear-gradient(90deg, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
        background-size: 32px 32px, 32px 32px;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: .02em; }
      h1 { font-size: 46px; line-height: 1.06; max-width: 22ch; }
      h2 { font-size: 30px; line-height: 1.14; letter-spacing: .04em; }
      h3 { font-size: 21px; line-height: 1.26; letter-spacing: .04em; }
      .lede { font-family: var(--font-body); font-size: 16px; line-height: 1.58; max-width: 58ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow::before { content: '◈ '; color: var(--accent); }
      .brand { font-family: var(--font-mono); font-size: 12px; letter-spacing: .16em; text-transform: uppercase; }

      .nav {
        background: var(--bg-2); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
        box-shadow: inset 0 -3px 0 -2px var(--line);
      }
      .nav-links a { font-family: var(--font-body); font-size: 14px; font-weight: 500; letter-spacing: .04em; }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      /* gravür plaka: çift çerçeve, gölge yok */
      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: none;
      }
      .panel, .card, .visual-card { position: relative; }
      .panel::after, .card::after, .visual-card::after {
        content: ''; position: absolute; inset: 4px; pointer-events: none;
        border: 1px solid color-mix(in srgb, var(--ink) 10%, transparent);
      }
      /* radyal kadran tiki: hero görselinin zemini */
      .hero-visual, .visual-card {
        background-image:
          repeating-conic-gradient(from 0deg at 50% 62%, color-mix(in srgb, var(--accent) 42%, transparent) 0deg 0.6deg, transparent 0.6deg 9deg),
          radial-gradient(circle at 50% 62%, transparent 0 34%, color-mix(in srgb, var(--ink) 8%, transparent) 34% 34.4%, transparent 34.4%),
          radial-gradient(circle at 50% 62%, transparent 0 58%, color-mix(in srgb, var(--ink) 8%, transparent) 58% 58.4%, transparent 58.4%);
      }
      .btn {
        height: 38px; padding: 0 16px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 86%, var(--ink)); }
      .btn.sm { height: 30px; padding: 0 10px; font-size: 10px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .btn.ghost:hover, .btn.soft:hover { background: var(--surface-2); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 15px;
      }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase;
      }
      .chip.accent { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; letter-spacing: .04em; }
      .table th {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--accent);
      }
      .table td { border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
      .bar { background: var(--accent); opacity: .7; }
      .line, .divider { background: var(--line); }
      .m-grid {
        background-image: repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 26%, transparent) 0 1px, transparent 1px 12px);
        border-radius: var(--radius-lg);
      }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .sig { border-top: 1px solid var(--accent); box-shadow: inset 0 4px 0 -3px var(--line); }


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
    `,
  scenes: {
    landing: `

      /* 01 · landing — gravür plaka: çift çerçeve + kadran + mono kayıt satırları */
      .scene-landing .hero-visual { background-color: var(--bg-2); border: 1px solid var(--ink); }
      .scene-landing .hero-visual::before {
        content: ""; position: absolute; inset: 10px; pointer-events: none;
        border: 1px solid color-mix(in srgb, var(--ink) 16%, transparent);
      }
      .scene-landing .visual-card { width: 64%; border: 1px solid var(--ink); box-shadow: none; }
      .scene-landing .visual-card::before {
        content: "◈ SEKTÖR 7 · KAYIT 12"; display: block; margin-bottom: 4px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .16em;
        text-transform: uppercase; color: var(--accent);
      }
      .scene-landing .visual-card .bar { height: 2px; border: 0; border-radius: 0; background: color-mix(in srgb, var(--ink) 18%, transparent); }
      .scene-landing .visual-card .bar.accent { width: 46%; background: var(--accent); }
      .scene-landing .visual-row .line { height: 1px; background: color-mix(in srgb, var(--ink) 24%, transparent); }
      .scene-landing .visual-row .num { font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em; color: var(--ink); }
      .scene-landing .visual-row .sq { border-radius: 0; background: var(--accent); }
    `,
  },
};
