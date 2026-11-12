export const CONFIG = {
  motif: 'bars',
  bodyClass: 'upper',
  extraCss: `
    .panel, .field, .icon-btn, .btn.ghost, .hero-visual { border-width: 2px; }
    .btn { border: 2px solid var(--ink); }
    .chip { border-width: 1.5px; }
    .nav, .logo-strip, .table .trow, .side { border-color: var(--ink); }
    .side { border-right-width: 2px; }
    .nav { border-bottom-width: 2px; }
    .hero-visual { box-shadow: 8px 8px 0 var(--accent); }
    .kpi:nth-child(2) { background: var(--surface-2); }
    .eyebrow { color: var(--ink); font-weight: 700; }
    h1 { max-width: 13ch; }
  `,
};
