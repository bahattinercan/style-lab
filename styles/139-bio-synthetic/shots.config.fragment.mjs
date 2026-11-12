/**
 * 139 · Biyo & Sentetik — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['bio-synthetic'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'blob',
  bodyClass: '',
  extraCss: `
      /* imza: zar halkası · hücre noktası · yumuşak köşe · kültür etiketi */
      body {
        background-image:
          radial-gradient(60% 46% at 14% 4%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 72%),
          radial-gradient(44% 38% at 92% 96%, color-mix(in srgb, var(--accent) 7%, transparent) 0%, transparent 70%);
        background-repeat: no-repeat;
      }
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; letter-spacing: 0; }
      h1 { font-size: 50px; line-height: 1.1; max-width: 20ch; }
      h2 { font-size: 34px; line-height: 1.16; }
      h3 { font-size: 24px; line-height: 1.26; }
      .lede { font-family: var(--font-body); font-size: 17px; line-height: 1.68; max-width: 56ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 8px; }
      .eyebrow::before {
        content: ''; width: 10px; height: 10px; border-radius: 999px;
        border: 1.5px solid var(--accent); box-shadow: inset 0 0 0 2px var(--bg);
      }
      .brand { font-family: var(--font-display); font-size: 21px; font-weight: 600; }

      .nav {
        background: color-mix(in srgb, var(--bg) 86%, var(--surface));
        border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
      }
      .nav-links a { font-family: var(--font-body); font-size: 16px; font-weight: 600; color: var(--ink-soft); }
      .nav-links a[aria-current], .nav-links a.active { color: var(--accent); }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      /* zar halkası + hücre noktası */
      .panel, .card, .visual-card, .comp-card-demo { position: relative; overflow: hidden; }
      .panel::before, .card::before, .visual-card::before, .comp-card-demo::before {
        content: ''; position: absolute; inset: 0 0 auto 0; height: 1px;
        background: color-mix(in srgb, var(--accent) 22%, transparent);
      }
      .panel::after, .card::after, .visual-card::after {
        content: ''; position: absolute; top: 16px; right: 16px; width: 8px; height: 8px;
        border-radius: 999px; background: color-mix(in srgb, var(--accent) 70%, transparent);
      }
      /* hücre kümesi: hero görseli */
      .hero-visual, .visual-card {
        background-image:
          repeating-radial-gradient(circle at 62% 44%, transparent 0 22px, color-mix(in srgb, var(--accent) 24%, transparent) 22px 23px),
          radial-gradient(circle at 30% 70%, color-mix(in srgb, var(--accent) 14%, transparent) 0 12%, transparent 13%);
      }
      .btn {
        height: 48px; padding: 0 26px; border-radius: 999px; border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 16px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn:active { transform: scale(.985); }
      .btn.sm { height: 38px; padding: 0 18px; font-size: 14px; }
      .btn.ghost, .btn.soft { background: transparent; color: var(--ink); border: 1px solid var(--line); }
      .field input, .field select, .field textarea {
        border-radius: 999px; background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 16px;
      }
      .field textarea { border-radius: var(--radius-lg); }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 36%, transparent); outline-offset: 2px;
      }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: 999px;
        font-family: var(--font-mono); font-size: 12px; letter-spacing: .08em;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 40%, transparent); }
      .kpi .num, .num { font-family: var(--font-display); font-variant-numeric: tabular-nums; font-weight: 600; }
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .bar { background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 30%, transparent)); border-radius: 999px; }
      .line, .divider { background: var(--line); }
      .m-grid {
        background-image: radial-gradient(color-mix(in srgb, var(--accent) 26%, transparent) 1px, transparent 1px);
        background-size: 16px 16px; border-radius: var(--radius-lg);
      }
      .mark { border-radius: 999px; background: var(--accent); color: var(--accent-ink); }
      .sig { background: radial-gradient(60% 60% at 50% 100%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%); }


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
         ink %36 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 36%, transparent); }
      [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
        border-color: color-mix(in srgb, var(--ink) 36%, transparent);
      }
    `,
  scenes: {
    landing: `

      /* 01 · landing — hücre kümesi: zar halkaları + parti etiketi + hap barlar */
      .scene-landing .visual-card { width: 60%; border-radius: 32px; }
      .scene-landing .visual-card::before {
        content: "LOT-2291 · P3"; display: block; margin-bottom: 6px;
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--accent);
      }
      .scene-landing .visual-card .bar { height: 8px; border: 0; border-radius: 999px; background: color-mix(in srgb, var(--accent) 22%, transparent); }
      .scene-landing .visual-card .bar.accent { width: 38%; background: var(--accent); }
      .scene-landing .visual-row .sq { border-radius: 999px; background: color-mix(in srgb, var(--accent) 70%, var(--surface)); }
      .scene-landing .hero-visual::before {
        content: ""; position: absolute; left: 12%; top: 18%; width: 26px; height: 26px;
        border-radius: 999px; border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
        pointer-events: none;
      }
      .scene-landing .hero-visual::after {
        content: ""; position: absolute; right: 14%; bottom: 16%; width: 46px; height: 46px;
        border-radius: 999px; border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent);
        pointer-events: none;
      }
    `,
  },
};
