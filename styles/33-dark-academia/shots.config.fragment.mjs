export const CONFIG = {
  motif: 'paper',
  extraCss: `
    body {
      background:
        radial-gradient(72% 62% at 26% 14%, #2a231c 0%, #1b1714 62%),
        var(--bg);
      background-attachment: fixed;
    }
    h1 { font-weight: 400; letter-spacing: .01em; line-height: 1.1; }
    .panel { border-color: rgba(176,134,63,.22); }
    .eyebrow { color: var(--accent); letter-spacing: .26em; }
    .hero-visual { border-color: rgba(176,134,63,.22); }
    .lede::first-letter { font-family: var(--font-display); font-size: 40px; float: left; line-height: .82; padding-right: 6px; color: var(--accent); }
  `,
};
