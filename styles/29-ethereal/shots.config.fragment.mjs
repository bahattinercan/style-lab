export const CONFIG = {
  motif: 'blob',
  extraCss: `
    body {
      background:
        radial-gradient(60% 52% at 18% 8%, color-mix(in srgb, var(--accent) 10%, var(--surface)) 0%, transparent 68%),
        radial-gradient(52% 52% at 86% 82%, color-mix(in srgb, var(--accent) 18%, var(--surface)) 0%, transparent 68%),
        var(--bg);
      background-attachment: fixed;
    }
    h1 { font-weight: 300; letter-spacing: 0; }
    .panel { box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.6); }
    .btn { box-shadow: var(--shadow); }
    .eyebrow { letter-spacing: .3em; }
  `,
};
