export const CONFIG = {
  motif: 'blob',
  extraCss: `
    body {
      background:
        radial-gradient(40% 46% at 12% 8%, var(--bg-2) 0%, transparent 62%),
        radial-gradient(36% 40% at 88% 18%, var(--accent) 0%, transparent 58%),
        radial-gradient(30% 34% at 60% 96%, #22d3ee 0%, transparent 60%),
        var(--bg);
      background-attachment: fixed;
    }
    .panel { box-shadow: var(--shadow); }
  `,
};
