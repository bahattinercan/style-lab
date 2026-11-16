/**
 * 251 · Post-screen Voice — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: 'bars',
  bodyClass: '',
  extraCss: `
h1   { font-size: var(--type-h1); max-width: 22ch; }
.panel, .pg-card { border-radius: 6px; }
.pg-media { border-radius: 6px; }
.btn { border-radius: 4px; letter-spacing: .04em; }
.field { border-radius: 4px; font-family: var(--font-mono); font-size: 13px; }
.chip { border-radius: 3px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .12em; }
.pg-cap { letter-spacing: .22em; }
.pg-band { background: color-mix(in srgb, var(--accent) 6%, var(--bg-2)); }
h1 { font-size: var(--type-h1); max-width: 22ch; }
.pg-media { background-image: repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 26%, transparent) 0 3px, transparent 3px 12px); background-size: auto 60%; background-position: center; background-repeat: repeat-x; }
.pg-card { border-radius: 14px; }
  `,
};
