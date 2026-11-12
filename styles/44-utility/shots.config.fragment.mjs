export const CONFIG = {
  motif: 'grid',
  extraCss: `
    /* imza: hairline yüzey · gradyan başlık · tek accent · 680px ölçü · 4'ün katı boşluk */
    h1, h2, h3, h4 { font-weight: 600; letter-spacing: 0; }
    h1 { font-size: 60px; line-height: 1; max-width: 680px; }
    h2 { font-size: 48px; line-height: 1; max-width: 680px; }
    h3 { font-size: 36px; line-height: 1.11; }
    .hero h1 {
      background: linear-gradient(90deg, var(--ink), color-mix(in srgb, var(--ink) 60%, var(--bg)));
      -webkit-background-clip: text; background-clip: text; color: transparent;
    }
    .lede { font-size: 18px; line-height: 1.56; max-width: 680px; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 12px; letter-spacing: .02em; color: var(--ink-soft); }
    /* cümle düzeni: büyük harf dönüşümü yok, buton altı çizgisiz */
    .chip, .label, .eyebrow, .mono, .kpi .k, .btn, .nav-links a, .proof li, .logo-strip, .tbl th, .mini-table th { text-transform: none; }
    .btn { text-decoration: none; }
    /* nav: üstten kopmuş, içeriğe göre daralan tek parça bar */
    .nav {
      margin: 12px 24px; padding: 0 12px; border-radius: var(--radius-lg);
      border: 1px solid var(--line); box-shadow: none;
      background: color-mix(in srgb, var(--bg) 82%, transparent);
      -webkit-backdrop-filter: blur(var(--blur)); backdrop-filter: blur(var(--blur));
    }
    /* yüzey ayrımı gölgeyle değil hairline ile */
    .panel, .card, .kpi, .field, .chip, .visual-card, .comp-card-demo, .state-card {
      box-shadow: none; border: 1px solid var(--line);
    }
    .btn { font-weight: 600; padding: 8px 12px; min-height: 44px; border-radius: var(--radius); box-shadow: none; }
    .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
    .btn.sm { min-height: 36px; padding: 8px 12px; font-size: 14px; }
    .chip { border-radius: var(--radius); background: var(--surface-2); color: var(--ink-soft); }
    .mark { border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); }
    .hero-visual { background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--radius-lg); }
    .bar:not(.accent) { background: var(--ink-soft); }
  `,
};
