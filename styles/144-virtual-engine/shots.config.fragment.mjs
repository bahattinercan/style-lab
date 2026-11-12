/* styles/144-virtual-engine/shots.config.fragment.mjs
   Entegratör: bu CONFIG'i kit/render/shots.config.mjs içindeki STYLES nesnesine
   `'virtual-engine': CONFIG` olarak taşır. Renk yalnız var(--...) ile; hard-coded renk yok. */
export const CONFIG = {
  motif: 'none',
  bodyClass: 'upper',
  extraCss: `
    /* imza: ortografik dünya ızgarası (hero + sayfa zemininde) + viewport/denetçi üçlüsü + konsol */
    h1 { font-family: var(--font-display); font-weight: 400; font-size: 46px; line-height: 1.08; letter-spacing: var(--tracking); max-width: 28ch; }
    h2 { font-family: var(--font-display); font-weight: 400; font-size: 28px; line-height: 1.2; letter-spacing: .01em; }
    h3 { font-family: var(--font-body); font-weight: 600; font-size: 20px; line-height: 1.3; letter-spacing: 0; text-transform: none; }
    h4 { font-family: var(--font-body); font-weight: 600; font-size: 14px; text-transform: none; }
    .lede { max-width: 70ch; font-size: 14px; line-height: 1.54; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; color: var(--ink-faint); }
    .eyebrow { color: var(--accent); }
    body { font-variant-numeric: tabular-nums; }

    .nav { height: 46px; padding: 0 16px; border-bottom: 1px solid var(--line); background: var(--bg); box-shadow: none; }
    .brand { font-family: var(--font-display); font-size: 18px; letter-spacing: .08em; }
    .nav-links a { font-family: var(--font-mono); font-size: 11px; letter-spacing: .06em; color: var(--ink-soft); }
    .nav-links a:first-child { color: var(--ink); }

    .panel, .panel-2, .visual-card, .comp-card, .m-tile, .state-card, .kpi, .table, .side {
      border: 1px solid var(--line); border-radius: var(--radius-lg);
      box-shadow: none; backdrop-filter: none; background: var(--surface);
    }
    .kpi, .m-tile { border-radius: var(--radius); }
    .hero-visual {
      border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none;
      background: var(--bg-2);
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 32px 32px;
    }
    /* viewport ekseni: köşede iki eksen oku + seçili varlık çerçevesi */
    .hero-visual::after {
      content: ""; position: absolute; left: 12%; top: 16%; width: 24%; height: 34%; z-index: 1;
      border: 1px solid var(--accent); border-radius: 2px; pointer-events: none;
      box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent);
    }
    .hero-visual::before {
      content: ""; position: absolute; left: 8%; bottom: 8%; width: 44px; height: 1px; z-index: 1;
      background: var(--ink-faint); pointer-events: none;
      box-shadow: 0 -44px 0 -0.5px var(--ink-faint);
    }

    .btn {
      min-height: 34px; padding: 0 14px; border-radius: var(--radius); box-shadow: none;
      font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .06em;
    }
    .btn.ghost, .btn.soft { background: var(--surface); border: 1px solid var(--line); color: var(--ink); }
    .field, input, select, textarea {
      border: 1px solid var(--line); border-radius: var(--radius); background: var(--bg-2); color: var(--ink);
      font-family: var(--font-mono); font-size: 12px; min-height: 34px;
    }
    .field:focus, input:focus, select:focus, textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
    .chip {
      height: 22px; padding: 0 8px; border-radius: var(--radius); border: 1px solid var(--line);
      background: var(--surface-2); font-family: var(--font-display); font-size: 12px; letter-spacing: .04em;
    }
    .chip:first-child { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-family: var(--font-display); }
    .avatar, .avatar-lg, .fab, .empty-ic { border-radius: var(--radius); }
    .icon-btn { border-radius: var(--radius); border: 1px solid var(--line); background: var(--surface); }
    .divider { height: 1px; background: var(--line); }
    .tabbar { border-top: 1px solid var(--line); background: var(--surface-2); }
    .track { border-radius: 2px; background: var(--surface-2); height: 5px; }
    .track i { border-radius: 2px; background: var(--accent); }
    .opt .box { border-radius: 3px; }
    .opt.round .box { border-radius: 999px; }
    .logo-strip { border-top: 1px solid var(--line); font-family: var(--font-mono); letter-spacing: .1em; font-size: 10px; }
    .proof li::before { background: var(--accent); border-radius: 1px; }
    .bar:not(.accent) { background: var(--ink-soft); }
    .table .trow, .trow, tr { border-bottom: 1px solid var(--line); height: 30px; }
    .table .trow:nth-child(even), tr:nth-child(even) { background: var(--surface-2); }
    .table .trow:first-child, tr:first-child { border-left: 3px solid var(--accent); }
    .table th, .mini-table th { font-family: var(--font-mono); font-size: 10px; letter-spacing: .12em; color: var(--ink-faint); }

    /* sayfa atmosferi: dünya ızgarası + alt konsol satırı; süs ≤ .25 */
    body.scene-landing .sig::before, body.scene-dashboard .sig::before {
      content: ""; position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(var(--line) 1px, transparent 1px),
        linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 32px 32px; opacity: .6;
    }
    body.scene-landing .sig::after {
      content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 26px; pointer-events: none;
      border-top: 1px solid var(--line); background: var(--surface-2);
      background-image: repeating-linear-gradient(90deg, var(--ink-faint) 0 22px, transparent 22px 74px);
      background-size: 100% 4px; background-repeat: no-repeat; background-position: 0 center;
      opacity: .45;
    }
    @media (max-width: 900px) {
      h1 { font-size: 28px; max-width: 24ch; }
      .hero-visual::after { width: 32%; height: 28%; }
      body.scene-landing .sig::after { height: 18px; }
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
         ink %40 karışımı iki modda da >=3:1 (WCAG 1.4.11). */
      .btn.ghost, .btn.soft { border-color: color-mix(in srgb, var(--ink) 40%, transparent); }
      [data-theme="dark"] .btn.ghost, [data-theme="dark"] .btn.soft {
        border-color: color-mix(in srgb, var(--ink) 40%, transparent);
      }

      /* D5: etiketler --ink-faint (3.2–4.4:1) yerine --ink-soft (>=4.5:1) */
      .eyebrow, .label, .mono { color: var(--ink-soft); }
      .table th, .mini-table th { color: var(--ink-soft); }

      /* D4: opak dekor şeridi (26px --surface-2 bandı) 1px taban çizgisine indirildi */
      body .sig::after {
        height: 1px; border-top: 0; background: var(--line); background-image: none; opacity: .8;
      }
    `,
  scenes: {
    landing: `

      /* 01 · landing — viewport: 32px ızgara + seçim çerçevesi + varlık satırları */
      .scene-landing .hero-visual {
        background-color: var(--bg-2);
        background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 32px 32px;
      }
      .scene-landing .visual-card {
        width: 62%; border: 1px solid var(--accent);
        box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent);
      }
      .scene-landing .visual-card::before {
        content: "VİTRİN · 3 VARLIK"; display: block; margin-bottom: 4px;
        font-family: var(--font-mono); font-size: 10px; letter-spacing: .1em;
        text-transform: uppercase; color: var(--accent);
      }
      .scene-landing .visual-row {
        height: 30px; padding-left: 6px; border-bottom: 1px solid var(--line);
        box-shadow: inset 3px 0 0 var(--accent);
      }
      .scene-landing .visual-row .sq { width: 10px; height: 10px; border-radius: 2px; background: color-mix(in srgb, var(--accent) 70%, transparent); }
      .scene-landing .visual-row .num { font-family: var(--font-mono); font-size: 10px; color: var(--ink-soft); }
      .scene-landing .visual-card .bar { height: 4px; border: 0; border-radius: 2px; }
    `,
  },
};
