export const CONFIG = {
  motif: 'grid',
  extraCss: `
    h1 { letter-spacing: .22em; font-weight: 400; text-transform: uppercase; }
    .panel { border-color: rgba(246,239,255,.22); }
    .sig::before {
      content: ""; position: absolute; inset: 0;
      background:
        linear-gradient(transparent 58%, rgba(242,160,192,.30) 58%),
        repeating-linear-gradient(90deg, rgba(246,239,255,.14) 0 1px, transparent 1px 56px),
        repeating-linear-gradient(0deg, rgba(246,239,255,.14) 0 1px, transparent 1px 56px);
      -webkit-mask-image: linear-gradient(transparent 45%, #000 100%);
      mask-image: linear-gradient(transparent 45%, #000 100%);
    }
    .sig::after {
      content: ""; position: absolute; left: 50%; top: 42%; width: 260px; height: 260px;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(242,160,192,.55) 0 40%, rgba(255,214,102,.35) 41% 60%, transparent 61%);
      filter: blur(2px);
      opacity: .5;
    }
  `,
};
