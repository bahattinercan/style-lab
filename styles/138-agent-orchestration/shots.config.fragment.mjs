/**
 * 138 · AI-native Ajan Arayüzü — shots.config.mjs fragment.
 * Integrator bu nesneyi `kit/render/shots.config.mjs` içindeki STYLES['agent-orchestration'] alanına taşır.
 * extraCss yalnız var(--…) tüketir; hard-coded renk yok.
 */
export const CONFIG = {
  motif: 'none',
  bodyClass: '',
  extraCss: `
      /* imza: numaralı iz rayı · onay kapısı (2px accent) · gerekçe/atıf şeridi */
      h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; letter-spacing: -.01em; }
      h1 { font-size: 34px; line-height: 1.16; max-width: 26ch; }
      h2 { font-size: 24px; line-height: 1.26; }
      h3 { font-size: 18px; line-height: 1.32; }
      .lede { font-family: var(--font-body); font-size: 14px; line-height: 1.55; max-width: 66ch; color: var(--ink-soft); }
      .eyebrow, .label, .mono {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft);
      }
      .eyebrow { display: inline-flex; align-items: center; gap: 6px; }
      .eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 999px; background: var(--accent); }
      .brand { font-family: var(--font-display); font-size: 14px; font-weight: 700; }
      body { font-variant-numeric: tabular-nums; }

      .nav { height: 50px; background: var(--surface); border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none; }
      .nav-links a { font-family: var(--font-body); font-size: 14px; color: var(--ink-soft); }

      .panel, .card, .kpi, .field, .visual-card, .comp-card-demo, .state-card, .m-tile {
        background: var(--surface); border: 1px solid var(--line);
        border-radius: var(--radius-lg); box-shadow: var(--shadow);
      }
      /* iz rayı: numaralı satır + dikey konektör */
      .card, .comp-card-demo, .state-card { position: relative; padding-left: 44px; }
      .card::before, .comp-card-demo::before, .state-card::before {
        content: ''; position: absolute; left: 27px; top: 18px; bottom: 18px; width: 1px;
        background: color-mix(in srgb, var(--ink) 14%, transparent);
      }
      .card::after, .comp-card-demo::after, .state-card::after {
        content: ''; position: absolute; left: 24px; top: 18px; width: 7px; height: 7px;
        border-radius: 999px; background: var(--accent);
      }
      /* onay kapısı: 2px accent çerçeve */
      .modal, .state-card[data-gate] { border-width: 2px; border-color: var(--accent); }
      .btn {
        height: 36px; padding: 0 14px; border-radius: var(--radius); border: 1px solid transparent;
        background: var(--accent); color: var(--accent-ink); box-shadow: none;
        font-family: var(--font-body); font-size: 13px; font-weight: 600;
      }
      .btn:hover { background: color-mix(in srgb, var(--accent) 88%, var(--ink)); }
      .btn.sm { height: 28px; padding: 0 10px; font-size: 12px; }
      .btn.ghost, .btn.soft { background: var(--surface); color: var(--ink); border: 1px solid var(--line); }
      .field input, .field select, .field textarea {
        border-radius: var(--radius); background: var(--surface); border: 1px solid var(--line);
        font-family: var(--font-body); font-size: 14px;
      }
      .field input:focus, .field select:focus, .field textarea:focus {
        border-color: var(--accent); outline: 2px solid color-mix(in srgb, var(--accent) 28%, transparent); outline-offset: 1px;
      }
      .chip {
        background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius);
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
      }
      .chip.accent { background: color-mix(in srgb, var(--accent) 12%, var(--surface)); color: var(--accent); border-color: color-mix(in srgb, var(--accent) 34%, transparent); }
      .kpi .num, .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; font-weight: 600; }
      /* gerekçe/atıf şeridi */
      .table th {
        font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--ink-soft); border-bottom: 1px solid var(--line);
      }
      .table td { border-bottom: 1px solid var(--line); }
      .bar { background: color-mix(in srgb, var(--accent) 30%, transparent); border-radius: var(--radius); }
      .line, .divider { background: var(--line); }
      .m-grid { background-image: none; }
      .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
      .sig { border-left: 2px solid var(--accent); }
      .hero-visual, .visual-card {
        background-image: linear-gradient(180deg, color-mix(in srgb, var(--accent) 7%, transparent), transparent 60%);
      }


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

      /* 01 · landing — ajan izi: numaralı dikey ray + durum metinleri */
      .scene-landing .visual-card { width: 62%; }
      .scene-landing .visual-card::before {
        content: "İZ · 3 ADIM"; display: block; margin-bottom: 6px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em;
        text-transform: uppercase; color: var(--accent);
      }
      .scene-landing .visual-rows { position: relative; padding-left: 18px; }
      .scene-landing .visual-rows::before {
        content: ""; position: absolute; left: 4px; top: 6px; bottom: 6px; width: 1px; background: var(--line);
      }
      .scene-landing .visual-row { position: relative; }
      .scene-landing .visual-row .sq { width: 7px; height: 7px; border-radius: 999px; background: var(--accent); }
      .scene-landing .visual-row:first-child::before {
        content: "ÇALIŞIYOR"; position: absolute; right: 0; top: 0;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .06em; color: var(--accent);
      }
      .scene-landing .visual-row:nth-child(2)::before {
        content: "ONAY BEKLİYOR"; position: absolute; right: 0; top: 0;
        font-family: var(--font-mono); font-size: 9px; letter-spacing: .06em; color: var(--ink-soft);
      }
    `,
  },
};
