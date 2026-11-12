export const CONFIG = {
  motif: 'grid',
  extraCss: `
    /* imza: mono ızgara · 1px çerçeve · ters video · efekt yok */
    body { font-variant-numeric: tabular-nums; }
    h1, h2, h3, h4 { font-family: var(--font-mono); font-weight: 600; letter-spacing: 0; }
    h1 { font-size: 40px; line-height: 1.15; max-width: 26ch; }
    h2 { font-size: 24px; line-height: 1.3; }
    h3 { font-size: 18px; line-height: 1.35; }
    .lede { font-size: 14px; line-height: 1.55; max-width: 72ch; color: var(--ink-soft); }
    .eyebrow, .label, .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: .08em; color: var(--ink-soft); }
    .eyebrow::before { content: '> '; color: var(--accent); }
    .nav {
      border-bottom: 1px solid var(--line); border-radius: 0; box-shadow: none;
      background: var(--bg); padding: 0 16px; height: 40px;
    }
    .nav-links a { font-family: var(--font-mono); font-size: 13px; }
    .panel, .card, .kpi, .field, .chip, .visual-card, .comp-card-demo, .state-card {
      box-shadow: none; border: 1px solid var(--line); border-radius: var(--radius-lg);
    }
    .btn {
      font-family: var(--font-mono); font-size: 13px; font-weight: 600; text-transform: none;
      min-height: 36px; padding: 6px 10px; border-radius: var(--radius); box-shadow: none;
    }
    .btn::before { content: '['; margin-right: 5px; opacity: .65; }
    .btn::after { content: ']'; margin-left: 5px; opacity: .65; }
    .btn.ghost, .btn.soft { background: transparent; border: 1px solid var(--line); color: var(--ink); }
    .chip { border-radius: 0; font-family: var(--font-mono); font-size: 11px; }
    .hero-visual { border-radius: 2px; background: var(--surface); border: 1px solid var(--line); }
    .bar { background: var(--accent); }
    .bar:not(.accent) { background: var(--ink-soft); }
    .proof li::before {
      content: '[ok]'; width: auto; height: auto; border-radius: 0; background: none;
      color: var(--accent); font-family: var(--font-mono); font-size: 11px;
    }
    .logo-strip span { letter-spacing: 0; text-transform: none; }
  `,
};
