// GENERATED DOSYA — elle düzenlenmez.
// Kaynak: styles/<nn>-<slug>/tokens.json + kit/dist/motion.json
// Üretim: node kit/export/react.mjs · Doğrulama: node kit/export/react.mjs --verify
//
// CSS değişkenleri (kit/dist/tokens.all.css) tek başına yeterlidir; bu modül JS tarafında
// (grafik renkleri, canvas, inline style, test) aynı değerleri bağımlılıksız verir.
// 151 stil · açık + koyu palet · normalize edilmiş hareket.

/** @typedef {'light'|'dark'} StyleLabTheme */

/** @type {Readonly<Record<string, any>>} */
export const styleLabTokens = {
  "minimalism": {
    "num": "01",
    "name": "Minimalism",
    "family": "Sade",
    "light": {
      "bg": "#fafaf9",
      "bg2": "#f2f2f0",
      "surface": "#ffffff",
      "surface2": "#f7f7f5",
      "ink": "#101112",
      "inkSoft": "#5a5f66",
      "inkFaint": "#9aa0a6",
      "accent": "#2563eb",
      "accentInk": "#ffffff",
      "line": "rgba(16,17,18,.10)"
    },
    "dark": {
      "bg": "#0b0b0c",
      "bg2": "#121214",
      "surface": "#161618",
      "surface2": "#1d1d20",
      "ink": "#ededed",
      "inkSoft": "#a0a4aa",
      "inkFaint": "#6f747a",
      "accent": "#60a5fa",
      "accentInk": "#0b0b0c",
      "line": "rgba(255,255,255,.12)"
    },
    "radius": "8px",
    "radiusLg": "12px",
    "shadow": "0 1px 2px rgba(16,17,18,.06)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Inter",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "28px",
      "h1": "56px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.15,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.03em",
      "heading": "-0.02em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 180,
      "slowMs": 240,
      "easing": "cubic-bezier(0.2,0.6,0.2,1)",
      "easingPoints": [
        0.2,
        0.6,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 500,
        "easing": "ease-out",
        "offsetY": 12,
        "stagger": 0.04
      },
      "scroll": {
        "durationMs": 600,
        "offsetY": 24,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 160,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global)"
    }
  },
  "swiss-design": {
    "num": "02",
    "name": "Swiss Design",
    "family": "Sade",
    "light": {
      "bg": "#ffffff",
      "bg2": "#f1f1f1",
      "surface": "#ffffff",
      "surface2": "#fafafa",
      "ink": "#0a0a0a",
      "inkSoft": "#4a4a4a",
      "inkFaint": "#8c8c8c",
      "accent": "#e4002b",
      "accentInk": "#ffffff",
      "line": "#0a0a0a"
    },
    "dark": {
      "bg": "#0d0d0d",
      "bg2": "#1b1b1b",
      "surface": "#141414",
      "surface2": "#262626",
      "ink": "#f5f5f5",
      "inkSoft": "#afafaf",
      "inkFaint": "#757575",
      "accent": "#ff2d4b",
      "accentInk": "#0d0d0d",
      "line": "#f5f5f5"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Helvetica Neue",
      "body": "Helvetica Neue",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "34px",
      "h1": "64px",
      "h1Mobile": "36px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 0.95,
      "heading": 1,
      "body": 1.55
    },
    "tracking": {
      "display": "-0.035em",
      "heading": "-0.03em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 160,
      "slowMs": 420,
      "easing": "cubic-bezier(0.2,0.6,0.2,1)",
      "easingPoints": [
        0.2,
        0.6,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 320,
        "easing": "cubic-bezier(0.2,0.6,0.2,1)",
        "offsetY": 0,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 300,
        "offsetY": 0,
        "triggerPercent": 92,
        "once": true
      },
      "hover": {
        "durationMs": 90,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "editorial-design": {
    "num": "03",
    "name": "Editorial Design",
    "family": "Sade",
    "light": {
      "bg": "#fdfcf9",
      "bg2": "#f4f1ea",
      "surface": "#ffffff",
      "surface2": "#faf8f3",
      "ink": "#141414",
      "inkSoft": "#56504a",
      "inkFaint": "#8e8880",
      "accent": "#b4472f",
      "accentInk": "#ffffff",
      "line": "rgba(20,20,20,.14)"
    },
    "dark": {
      "bg": "#14120f",
      "bg2": "#1e1b16",
      "surface": "#1a1714",
      "surface2": "#2b2824",
      "ink": "#f0e9dd",
      "inkSoft": "#b9b0a2",
      "inkFaint": "#77736c",
      "accent": "#d76a4c",
      "accentInk": "#14120f",
      "line": "rgba(240,233,221,.18)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "17px",
      "h3": "21px",
      "h2": "32px",
      "h1": "60px",
      "h1Mobile": "34px",
      "quote": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.12,
      "body": 1.65,
      "quote": 1.4
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 180,
      "slowMs": 300,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 550,
        "easing": "ease-out",
        "offsetY": 10,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 650,
        "offsetY": 24,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 180,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "luxury-typography": {
    "num": "04",
    "name": "Luxury Typography",
    "family": "Sade",
    "light": {
      "bg": "#f6f1e7",
      "bg2": "#efe7d8",
      "surface": "#fffdf8",
      "surface2": "#f3ecdf",
      "ink": "#1a1815",
      "inkSoft": "#5c554b",
      "inkFaint": "#9a9184",
      "accent": "#c6a664",
      "accentInk": "#1a1815",
      "line": "rgba(26,24,21,.16)"
    },
    "dark": {
      "bg": "#12100e",
      "bg2": "#1a1714",
      "surface": "#171512",
      "surface2": "#282622",
      "ink": "#efe8db",
      "inkSoft": "#b3aa9c",
      "inkFaint": "#75716a",
      "accent": "#d8bb7d",
      "accentInk": "#0d0d0d",
      "line": "rgba(239,232,219,.18)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px",
      "96px",
      "128px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Jost",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "14px",
      "h3": "20px",
      "h2": "34px",
      "h1": "64px",
      "h1Mobile": "38px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 300
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.2,
      "body": 1.75
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0.02em",
      "label": "0.3em"
    },
    "motion": {
      "fastMs": 180,
      "baseMs": 320,
      "slowMs": 400,
      "easing": "cubic-bezier(0.2,0.7,0.2,1)",
      "easingPoints": [
        0.2,
        0.7,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 800,
        "easing": "cubic-bezier(0.2,0.7,0.2,1)",
        "offsetY": 24,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 1000,
        "offsetY": 24,
        "triggerPercent": 80,
        "once": true
      },
      "hover": {
        "durationMs": 320,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "bento-grid": {
    "num": "05",
    "name": "Bento Grid",
    "family": "Sade",
    "light": {
      "bg": "#f4f4f2",
      "bg2": "#ececea",
      "surface": "#ffffff",
      "surface2": "#fafaf9",
      "ink": "#12130f",
      "inkSoft": "#5b5f58",
      "inkFaint": "#9aa096",
      "accent": "#1f6feb",
      "accentInk": "#ffffff",
      "line": "rgba(18,19,15,.08)"
    },
    "dark": {
      "bg": "#0e0f0d",
      "bg2": "#1c1d1b",
      "surface": "#191b18",
      "surface2": "#202320",
      "ink": "#f0f1ee",
      "inkSoft": "#a8ada5",
      "inkFaint": "#747572",
      "accent": "#5b9cff",
      "accentInk": "#0d0d0d",
      "line": "rgba(255,255,255,.10)"
    },
    "radius": "18px",
    "radiusLg": "24px",
    "shadow": "0 1px 2px rgba(18,19,15,.05), 0 8px 24px rgba(18,19,15,.04)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px"
    ],
    "fonts": {
      "display": "Inter",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "14px",
      "h3": "16px",
      "h2": "24px",
      "number": "34–40px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1,
      "heading": 1.3,
      "body": 1.5
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 180,
      "slowMs": 220,
      "easing": "cubic-bezier(0.2,0.6,0.2,1)",
      "easingPoints": [
        0.2,
        0.6,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 450,
        "easing": "cubic-bezier(0.2,0.6,0.2,1)",
        "offsetY": 16,
        "stagger": 0.08
      },
      "scroll": {
        "durationMs": 550,
        "offsetY": 24,
        "triggerPercent": 85,
        "once": true
      },
      "hover": {
        "durationMs": 200,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "transform kapalı, yalnız opacity"
    }
  },
  "japandi": {
    "num": "06",
    "name": "Japandi",
    "family": "Sade",
    "light": {
      "bg": "#f4efe7",
      "bg2": "#ebe4d9",
      "surface": "#fbf8f3",
      "surface2": "#f2ece2",
      "ink": "#2c2925",
      "inkSoft": "#635c53",
      "inkFaint": "#918a80",
      "accent": "#8a9b84",
      "accentInk": "#2c2925",
      "line": "rgba(44,41,37,.10)"
    },
    "dark": {
      "bg": "#17150f",
      "bg2": "#24211b",
      "surface": "#221f18",
      "surface2": "#2a261e",
      "ink": "#ece5d8",
      "inkSoft": "#b3aa9c",
      "inkFaint": "#777369",
      "accent": "#9fae97",
      "accentInk": "#17150f",
      "line": "rgba(236,229,216,.14)"
    },
    "radius": "10px",
    "radiusLg": "14px",
    "shadow": "0 1px 2px rgba(44,41,37,.04)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Lora",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "17px",
      "h2": "28px",
      "h1": "46px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.2,
      "body": 1.65
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 240,
      "slowMs": 400,
      "easing": "cubic-bezier(0.3,0.7,0.3,1)",
      "easingPoints": [
        0.3,
        0.7,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 700,
        "easing": "cubic-bezier(0.3,0.7,0.3,1)",
        "offsetY": 14,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 850,
        "offsetY": 24,
        "triggerPercent": 83,
        "once": true
      },
      "hover": {
        "durationMs": 220,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "wabi-sabi": {
    "num": "07",
    "name": "Wabi-Sabi",
    "family": "Sade",
    "light": {
      "bg": "#ede6da",
      "bg2": "#e3d9c9",
      "surface": "#f6f1e6",
      "surface2": "#eadfce",
      "ink": "#2a2724",
      "inkSoft": "#5f574d",
      "inkFaint": "#8f8779",
      "accent": "#a85831",
      "accentInk": "#fff8ef",
      "line": "rgba(42,39,36,.18)"
    },
    "dark": {
      "bg": "#1a1714",
      "bg2": "#26231f",
      "surface": "#221e19",
      "surface2": "#322e28",
      "ink": "#e8e0d3",
      "inkSoft": "#b0a495",
      "inkFaint": "#77716a",
      "accent": "#c9744a",
      "accentInk": "#0d0d0d",
      "line": "rgba(232,224,211,.16)"
    },
    "radius": "3px",
    "radiusLg": "18px",
    "shadow": "0 1px 0 rgba(42,39,36,.06)",
    "shadowHard": "2px 2px 0 rgba(42,39,36,.12)",
    "spacing": [
      "6px",
      "12px",
      "18px",
      "24px",
      "36px",
      "54px",
      "72px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Inter",
      "mono": "Courier New"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "17px",
      "h2": "30px",
      "h1": "48px",
      "h1Mobile": "30px",
      "handNote": "20px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.18,
      "body": 1.7
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 300,
      "slowMs": 500,
      "easing": "cubic-bezier(0.3,0.6,0.3,1)",
      "easingPoints": [
        0.3,
        0.6,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 750,
        "easing": "cubic-bezier(0.3,0.6,0.3,1)",
        "offsetY": 18,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 950,
        "offsetY": 24,
        "triggerPercent": 78,
        "once": true
      },
      "hover": {
        "durationMs": 260,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "glassmorphism": {
    "num": "08",
    "name": "Glassmorphism",
    "family": "Yüzey",
    "light": {
      "bg": "#1b1035",
      "bg2": "#2a1a5e",
      "surface": "rgba(255,255,255,.12)",
      "surface2": "rgba(255,255,255,.07)",
      "ink": "#ffffff",
      "inkSoft": "rgba(255,255,255,.78)",
      "inkFaint": "rgba(255,255,255,.55)",
      "accent": "#7dd3fc",
      "accentInk": "#06222e",
      "line": "rgba(255,255,255,.24)"
    },
    "dark": {
      "bg": "#1b1035",
      "bg2": "#2a1a5e",
      "surface": "rgba(255,255,255,.12)",
      "surface2": "rgba(255,255,255,.07)",
      "ink": "#ffffff",
      "inkSoft": "rgba(255,255,255,.78)",
      "inkFaint": "rgba(255,255,255,.55)",
      "accent": "#7dd3fc",
      "accentInk": "#0d0d0d",
      "line": "rgba(255,255,255,.24)"
    },
    "radius": "16px",
    "radiusLg": "24px",
    "shadow": "0 8px 32px rgba(0,0,0,.22)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Inter",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "26px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 280,
      "slowMs": 400,
      "easing": "cubic-bezier(0.34,1.4,0.64,1)",
      "easingPoints": [
        0.34,
        1.4,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 700,
        "easing": "cubic-bezier(0.165,0.84,0.44,1)",
        "offsetY": 20,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 850,
        "offsetY": 24,
        "triggerPercent": 80,
        "once": true
      },
      "hover": {
        "durationMs": 260,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms + blob durur"
    }
  },
  "liquid-glass": {
    "num": "09",
    "name": "Liquid Glass",
    "family": "Yüzey",
    "light": {
      "bg": "#0a0d12",
      "bg2": "#141a24",
      "surface": "rgba(255,255,255,.10)",
      "surface2": "rgba(255,255,255,.06)",
      "ink": "#f5f7fa",
      "inkSoft": "rgba(245,247,250,.76)",
      "inkFaint": "rgba(245,247,250,.5)",
      "accent": "#4cc9f0",
      "accentInk": "#041018",
      "line": "rgba(255,255,255,.28)"
    },
    "dark": {
      "bg": "#04060a",
      "bg2": "#0a1017",
      "surface": "rgba(255,255,255,.08)",
      "surface2": "rgba(255,255,255,.05)",
      "ink": "#fbfdff",
      "inkSoft": "rgba(251,253,255,.78)",
      "inkFaint": "rgba(251,253,255,.52)",
      "accent": "#7fdcff",
      "accentInk": "#03121a",
      "line": "rgba(255,255,255,.22)"
    },
    "radius": "20px",
    "radiusLg": "28px",
    "shadow": "0 10px 40px rgba(0,0,0,.35)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "SF Pro Display",
      "body": "SF Pro Text",
      "mono": "SF Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "26px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 220,
      "slowMs": 280,
      "easing": "cubic-bezier(0.34,1.4,0.64,1)",
      "easingPoints": [
        0.34,
        1.4,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 900,
        "easing": "cubic-bezier(0.23,1,0.32,1)",
        "offsetY": 28,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 1000,
        "offsetY": 24,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 220,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "yay → ease-out, 0.01ms"
    }
  },
  "neumorphism": {
    "num": "10",
    "name": "Neumorphism",
    "family": "Yüzey",
    "light": {
      "bg": "#e4e8ef",
      "bg2": "#dde2ea",
      "surface": "#e4e8ef",
      "surface2": "#e9edf3",
      "ink": "#333a45",
      "inkSoft": "#5d6674",
      "inkFaint": "#8b93a1",
      "accent": "#4262e8",
      "accentInk": "#ffffff",
      "line": "transparent"
    },
    "dark": {
      "bg": "#23262e",
      "bg2": "#1c1f26",
      "surface": "#23262e",
      "surface2": "#33363d",
      "ink": "#e6e9ef",
      "inkSoft": "#a7aebc",
      "inkFaint": "#7b7e85",
      "accent": "#4262e8",
      "accentInk": "#ffffff",
      "line": "rgba(230,233,239,.14)"
    },
    "radius": "16px",
    "radiusLg": "24px",
    "shadow": "6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Nunito Sans",
      "body": "Nunito Sans",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 220,
      "slowMs": 300,
      "easing": "cubic-bezier(0.34,1.4,0.64,1)",
      "easingPoints": [
        0.34,
        1.4,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 400,
        "easing": "ease-out",
        "offsetY": 8,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 24,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 200,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "gölge geçişi anlık, 0.01ms"
    }
  },
  "fluid-simulation": {
    "num": "100",
    "name": "Fluid Simulation",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#eff4f3",
      "bg2": "#e3ecea",
      "surface": "#fbfdfc",
      "surface2": "#f0f6f4",
      "ink": "#101a1c",
      "inkSoft": "#435452",
      "inkFaint": "#7d8b89",
      "accent": "#b8481a",
      "accentInk": "#fdf6f2",
      "line": "rgba(16,26,28,.13)"
    },
    "dark": {
      "bg": "#0b1417",
      "bg2": "#101c1f",
      "surface": "#132327",
      "surface2": "#1a2f33",
      "ink": "#e9f1f1",
      "inkSoft": "#a6b6b5",
      "inkFaint": "#748584",
      "accent": "#ff8a5c",
      "accentInk": "#1d0a04",
      "line": "rgba(233,241,241,.16)"
    },
    "radius": "18px",
    "radiusLg": "28px",
    "shadow": "0 2px 10px rgba(16,26,28,.08)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Baloo 2",
      "body": "Poppins",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "21px",
      "h2": "28px",
      "h1": "44px",
      "h1Mobile": "29px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.3,
      "body": 1.68
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 260,
      "baseMs": 520,
      "slowMs": 1400,
      "easing": "cubic-bezier(0.22,0.9,0.24,1)",
      "easingPoints": [
        0.22,
        0.9,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 1050,
        "easing": "cubic-bezier(0.22,0.9,0.24,1)",
        "offsetY": 20,
        "stagger": 0.16
      },
      "scroll": {
        "durationMs": 1150,
        "offsetY": 34,
        "triggerPercent": 72,
        "once": true
      },
      "hover": {
        "durationMs": 520,
        "imageScale": 1.028
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; blob katmanı statik; hiçbir form değişmez"
    }
  },
  "shadow-stage": {
    "num": "101",
    "name": "Shadow Stage",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#12151a",
      "bg2": "#171b21",
      "surface": "#1b2028",
      "surface2": "#232a33",
      "ink": "#eef1f5",
      "inkSoft": "#adb6c2",
      "inkFaint": "#7e8896",
      "accent": "#e3b341",
      "accentInk": "#1a1405",
      "line": "rgba(238,241,245,.15)"
    },
    "dark": {
      "bg": "#100c08",
      "bg2": "#151009",
      "surface": "#19130c",
      "surface2": "#221a11",
      "ink": "#f6f3ee",
      "inkSoft": "#c3b9ad",
      "inkFaint": "#948a7d",
      "accent": "#ffc861",
      "accentInk": "#1a1206",
      "line": "rgba(246,243,238,.18)"
    },
    "radius": "10px",
    "radiusLg": "16px",
    "shadow": "0 24px 60px -42px rgba(0,0,0,.92)",
    "shadowHard": "0 0 0 1px var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poiret One",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "27px",
      "h1": "50px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.22,
      "body": 1.62
    },
    "tracking": {
      "display": "0.04em",
      "heading": "0.02em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 220,
      "slowMs": 320,
      "easing": "cubic-bezier(0.4,0.05,0.25,1)",
      "easingPoints": [
        0.4,
        0.05,
        0.25,
        1
      ],
      "enter": {
        "durationMs": 430,
        "easing": "cubic-bezier(0.4,0.05,0.25,1)",
        "offsetY": 18,
        "stagger": 0.075
      },
      "scroll": {
        "durationMs": 610,
        "offsetY": 20,
        "triggerPercent": 79,
        "once": true
      },
      "hover": {
        "durationMs": 250,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — ışık lekesi donar, gölge kayması durur"
    }
  },
  "moire-field": {
    "num": "102",
    "name": "Moiré Field",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#a6a29b",
      "bg2": "#9c9891",
      "surface": "#b1ada6",
      "surface2": "#8e8a84",
      "ink": "#12130f",
      "inkSoft": "#2b2c28",
      "inkFaint": "#45463f",
      "accent": "#9c2e6e",
      "accentInk": "#ffffff",
      "line": "rgba(18,19,15,.22)"
    },
    "dark": {
      "bg": "#1c1b19",
      "bg2": "#232220",
      "surface": "#2a2825",
      "surface2": "#34322e",
      "ink": "#ece8e1",
      "inkSoft": "#b3aea6",
      "inkFaint": "#8a857d",
      "accent": "#e57ab0",
      "accentInk": "#1a0712",
      "line": "rgba(236,232,225,.18)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "0 0 0 1px var(--ink)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Silkscreen",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "18px",
      "h2": "24px",
      "h1": "38px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.26,
      "body": 1.55
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 95,
      "baseMs": 160,
      "slowMs": 240,
      "easing": "cubic-bezier(0.37,0,0.63,1)",
      "easingPoints": [
        0.37,
        0,
        0.63,
        1
      ],
      "enter": {
        "durationMs": 530,
        "easing": "cubic-bezier(0.37,0,0.63,1)",
        "offsetY": 4,
        "stagger": 0.025
      },
      "scroll": {
        "durationMs": 470,
        "offsetY": 6,
        "triggerPercent": 93,
        "once": true
      },
      "hover": {
        "durationMs": 95,
        "imageScale": 1
      },
      "pin": {
        "enabled": true,
        "scrub": 1.05
      },
      "reduced": "0.01ms (tokens.css global) — desen sabit, perde kayması yok"
    }
  },
  "motion-trail": {
    "num": "103",
    "name": "Motion Trail",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#f5f3ef",
      "bg2": "#ecebe6",
      "surface": "#ffffff",
      "surface2": "#f0eeea",
      "ink": "#14161a",
      "inkSoft": "#4c5157",
      "inkFaint": "#7d838a",
      "accent": "#a8500f",
      "accentInk": "#ffffff",
      "line": "rgba(20,22,26,.12)"
    },
    "dark": {
      "bg": "#121316",
      "bg2": "#181a1e",
      "surface": "#1e2025",
      "surface2": "#262930",
      "ink": "#f1f2f4",
      "inkSoft": "#aeb3b9",
      "inkFaint": "#7f858c",
      "accent": "#ffa06b",
      "accentInk": "#200a06",
      "line": "rgba(241,242,244,.16)"
    },
    "radius": "20px",
    "radiusLg": "28px",
    "shadow": "0 18px 44px -32px rgba(20,22,26,.55)",
    "shadowHard": "6px 6px 0 var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Anton",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "20px",
      "h2": "28px",
      "h1": "52px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.16,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "-0.005em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 240,
      "slowMs": 360,
      "easing": "cubic-bezier(0.15,0.8,0.3,1)",
      "easingPoints": [
        0.15,
        0.8,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 370,
        "easing": "cubic-bezier(0.15,0.8,0.3,1)",
        "offsetY": 10,
        "stagger": 0.13
      },
      "scroll": {
        "durationMs": 490,
        "offsetY": 14,
        "triggerPercent": 84,
        "once": true
      },
      "hover": {
        "durationMs": 300,
        "imageScale": 1.045
      },
      "pin": {
        "enabled": true,
        "scrub": 1.15
      },
      "reduced": "0.01ms (tokens.css global) — iz katmanları kapanır, öğe doğrudan son konumda"
    }
  },
  "stepped-mechanism": {
    "num": "104",
    "name": "Stepped Mechanism",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#a0a6aa",
      "bg2": "#979da1",
      "surface": "#abb1b5",
      "surface2": "#8b9195",
      "ink": "#0f1417",
      "inkSoft": "#2b3238",
      "inkFaint": "#485056",
      "accent": "#1f6b3d",
      "accentInk": "#ffffff",
      "line": "rgba(15,20,23,.22)"
    },
    "dark": {
      "bg": "#15191c",
      "bg2": "#1b2024",
      "surface": "#22272b",
      "surface2": "#2b3136",
      "ink": "#eaf0f3",
      "inkSoft": "#adb8be",
      "inkFaint": "#7f8a90",
      "accent": "#4fbf7a",
      "accentInk": "#05170c",
      "line": "rgba(234,240,243,.17)"
    },
    "radius": "8px",
    "radiusLg": "16px",
    "shadow": "0 8px 18px -14px rgba(15,20,23,.5)",
    "shadowHard": "0 2px 0 var(--ink)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Share Tech Mono",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "18px",
      "h2": "24px",
      "h1": "38px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.24,
      "body": 1.52
    },
    "tracking": {
      "display": "0.03em",
      "heading": "0.02em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 85,
      "baseMs": 160,
      "slowMs": 240,
      "easing": "steps(4, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 360,
        "easing": "steps(4, end)",
        "offsetY": 0,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 310,
        "offsetY": 12,
        "triggerPercent": 73,
        "once": true
      },
      "hover": {
        "durationMs": 85,
        "imageScale": 1.008
      },
      "pin": {
        "enabled": true,
        "scrub": 0.45
      },
      "reduced": "0.01ms (tokens.css global) — kademeler anında son konuma atlar"
    }
  },
  "holographic-layer": {
    "num": "105",
    "name": "Holographic Layer",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#0e0b16",
      "bg2": "#141020",
      "surface": "#181323",
      "surface2": "#211a2e",
      "ink": "#f0edf7",
      "inkSoft": "#b3aac4",
      "inkFaint": "#827896",
      "accent": "#8f7bff",
      "accentInk": "#0a0713",
      "line": "rgba(240,237,247,.16)"
    },
    "dark": {
      "bg": "#12081a",
      "bg2": "#180c22",
      "surface": "#1d1029",
      "surface2": "#261534",
      "ink": "#f6f1fb",
      "inkSoft": "#c3b6d2",
      "inkFaint": "#94899f",
      "accent": "#d0a8ff",
      "accentInk": "#150a1f",
      "line": "rgba(246,241,251,.18)"
    },
    "radius": "20px",
    "radiusLg": "28px",
    "shadow": "0 28px 64px -44px rgba(4,2,10,.95)",
    "shadowHard": "0 0 0 1px var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "27px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.24,
      "body": 1.6
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 260,
      "slowMs": 380,
      "easing": "cubic-bezier(0.32,0.06,0.2,1)",
      "easingPoints": [
        0.32,
        0.06,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 970,
        "easing": "cubic-bezier(0.32,0.06,0.2,1)",
        "offsetY": 28,
        "stagger": 0.11
      },
      "scroll": {
        "durationMs": 860,
        "offsetY": 24,
        "triggerPercent": 76,
        "once": true
      },
      "hover": {
        "durationMs": 410,
        "imageScale": 1.038
      },
      "pin": {
        "enabled": true,
        "scrub": 1.25
      },
      "reduced": "0.01ms (tokens.css global) — katman kayması kapanır, tek katman kalır"
    }
  },
  "voice-first": {
    "num": "106",
    "name": "Ses-Öncelikli",
    "family": "Etkileşim",
    "light": {
      "bg": "#171021",
      "bg2": "#1d152a",
      "surface": "#241a33",
      "surface2": "#2b2040",
      "ink": "#f1e9f7",
      "inkSoft": "#c0b0d0",
      "inkFaint": "#8f7fa2",
      "accent": "#ff8ad4",
      "accentInk": "#2a0a1e",
      "line": "rgba(241,233,247,.16)"
    },
    "dark": {
      "bg": "#050309",
      "bg2": "#09060f",
      "surface": "#0d0814",
      "surface2": "#14101d",
      "ink": "#fdf8ff",
      "inkSoft": "#cfc2e0",
      "inkFaint": "#9e8fb4",
      "accent": "#d9a6ff",
      "accentInk": "#170428",
      "line": "rgba(253,248,255,.16)"
    },
    "radius": "24px",
    "radiusLg": "32px",
    "shadow": "0 8px 40px rgba(255,138,212,.22)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poppins",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "22px",
      "h2": "32px",
      "h1": "48px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.24,
      "body": 1.62
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".1em"
    },
    "motion": {
      "fastMs": 95,
      "baseMs": 240,
      "slowMs": 600,
      "easing": "cubic-bezier(0.2,0.9,0.3,1)",
      "easingPoints": [
        0.2,
        0.9,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 370,
        "easing": "cubic-bezier(0.2,0.9,0.3,1)",
        "offsetY": 2,
        "stagger": 0.022
      },
      "scroll": {
        "durationMs": 230,
        "offsetY": 6,
        "triggerPercent": 95,
        "once": true
      },
      "hover": {
        "durationMs": 95,
        "imageScale": 1.002
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — dinleme halkası ve dalga statik kalır"
    }
  },
  "spatial-ar-layer": {
    "num": "107",
    "name": "Uzamsal AR Katman",
    "family": "Etkileşim",
    "light": {
      "bg": "#e9edf5",
      "bg2": "#dfe5f0",
      "surface": "#f7f9fc",
      "surface2": "#eef2f9",
      "ink": "#161a24",
      "inkSoft": "#4a5364",
      "inkFaint": "#78818f",
      "accent": "#2a4bd7",
      "accentInk": "#ffffff",
      "line": "rgba(22,26,36,.16)"
    },
    "dark": {
      "bg": "#0c1017",
      "bg2": "#111722",
      "surface": "#161d29",
      "surface2": "#1c2533",
      "ink": "#e8edf6",
      "inkSoft": "#a7b2c4",
      "inkFaint": "#75808f",
      "accent": "#7d95ff",
      "accentInk": "#0a0f1e",
      "line": "rgba(232,237,246,.16)"
    },
    "radius": "12px",
    "radiusLg": "20px",
    "shadow": "0 18px 40px rgba(22,26,36,.14)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Chakra Petch",
      "body": "Jost",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "16px",
      "h3": "21px",
      "h2": "30px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.24,
      "body": 1.6
    },
    "tracking": {
      "display": ".01em",
      "heading": ".02em",
      "body": "0",
      "label": ".14em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 320,
      "slowMs": 860,
      "easing": "cubic-bezier(0.16,0.9,0.24,1)",
      "easingPoints": [
        0.16,
        0.9,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 860,
        "easing": "cubic-bezier(0.16,0.9,0.24,1)",
        "offsetY": 25,
        "stagger": 0.088
      },
      "scroll": {
        "durationMs": 810,
        "offsetY": 28,
        "triggerPercent": 73,
        "once": true
      },
      "hover": {
        "durationMs": 285,
        "imageScale": 1.008
      },
      "pin": {
        "enabled": true,
        "scrub": 0.42
      },
      "reduced": "0.01ms (tokens.css global) — katman kayması ve pin statik kalır"
    }
  },
  "command-palette": {
    "num": "108",
    "name": "Komut Paleti",
    "family": "Etkileşim",
    "light": {
      "bg": "#111318",
      "bg2": "#16191f",
      "surface": "#1b1f26",
      "surface2": "#222731",
      "ink": "#eef0f3",
      "inkSoft": "#a9b1bc",
      "inkFaint": "#767e8a",
      "accent": "#e8ecf2",
      "accentInk": "#14171c",
      "line": "rgba(238,240,243,.14)"
    },
    "dark": {
      "bg": "#020305",
      "bg2": "#05070a",
      "surface": "#0a0c11",
      "surface2": "#10141b",
      "ink": "#f8fafd",
      "inkSoft": "#b6bec9",
      "inkFaint": "#7f8893",
      "accent": "#cfe0ff",
      "accentInk": "#06101f",
      "line": "rgba(248,250,253,.12)"
    },
    "radius": "6px",
    "radiusLg": "12px",
    "shadow": "0 24px 60px rgba(0,0,0,.55)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "JetBrains Mono",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "17px",
      "h2": "22px",
      "h1": "30px",
      "h1Mobile": "22px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.2,
      "heading": 1.3,
      "body": 1.5
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".06em"
    },
    "motion": {
      "fastMs": 65,
      "baseMs": 120,
      "slowMs": 260,
      "easing": "cubic-bezier(0.05,0.9,0.1,1)",
      "easingPoints": [
        0.05,
        0.9,
        0.1,
        1
      ],
      "enter": {
        "durationMs": 190,
        "easing": "cubic-bezier(0.05,0.9,0.1,1)",
        "offsetY": 5,
        "stagger": 0.018
      },
      "scroll": {
        "durationMs": 170,
        "offsetY": 4,
        "triggerPercent": 97,
        "once": true
      },
      "hover": {
        "durationMs": 65,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — palet anında açılır"
    }
  },
  "timeline-editor": {
    "num": "109",
    "name": "Zaman Çizelgesi Editörü",
    "family": "Etkileşim",
    "light": {
      "bg": "#f1efec",
      "bg2": "#e7e3de",
      "surface": "#fbfaf8",
      "surface2": "#f5f2ee",
      "ink": "#1e1a17",
      "inkSoft": "#554d46",
      "inkFaint": "#857b71",
      "accent": "#a12a6e",
      "accentInk": "#fff4f8",
      "line": "rgba(30,26,23,.16)"
    },
    "dark": {
      "bg": "#121213",
      "bg2": "#171719",
      "surface": "#1d1c1f",
      "surface2": "#242327",
      "ink": "#efece7",
      "inkSoft": "#b7b0a8",
      "inkFaint": "#857f78",
      "accent": "#d97ac0",
      "accentInk": "#1c0508",
      "line": "rgba(239,236,231,.16)"
    },
    "radius": "4px",
    "radiusLg": "8px",
    "shadow": "0 2px 8px rgba(30,26,23,.12)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "12px",
      "body": "14px",
      "h3": "18px",
      "h2": "26px",
      "h1": "38px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.26,
      "body": 1.55
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".08em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 220,
      "slowMs": 530,
      "easing": "cubic-bezier(0.45,0.08,0.25,1)",
      "easingPoints": [
        0.45,
        0.08,
        0.25,
        1
      ],
      "enter": {
        "durationMs": 510,
        "easing": "cubic-bezier(0.45,0.08,0.25,1)",
        "offsetY": 15,
        "stagger": 0.042
      },
      "scroll": {
        "durationMs": 530,
        "offsetY": 18,
        "triggerPercent": 67,
        "once": true
      },
      "hover": {
        "durationMs": 165,
        "imageScale": 1.004
      },
      "pin": {
        "enabled": true,
        "scrub": 1.3
      },
      "reduced": "0.01ms (tokens.css global) — playhead ve pin statik kalır"
    }
  },
  "claymorphism": {
    "num": "11",
    "name": "Claymorphism",
    "family": "Yüzey",
    "light": {
      "bg": "#f3efff",
      "bg2": "#e9e3ff",
      "surface": "#ffffff",
      "surface2": "#f6f2ff",
      "ink": "#2b2350",
      "inkSoft": "#5b5382",
      "inkFaint": "#8d87ad",
      "accent": "#6f4df0",
      "accentInk": "#ffffff",
      "line": "rgba(255,255,255,.7)"
    },
    "dark": {
      "bg": "#1a1630",
      "bg2": "#27233c",
      "surface": "#241f3d",
      "surface2": "#2c2649",
      "ink": "#ece7ff",
      "inkSoft": "#b4add6",
      "inkFaint": "#78748d",
      "accent": "#8b6dff",
      "accentInk": "#14102a",
      "line": "rgba(236,231,255,.14)"
    },
    "radius": "24px",
    "radiusLg": "32px",
    "shadow": "0 12px 24px rgba(124,92,255,.18), inset -6px -8px 16px rgba(43,35,80,.10), inset 6px 8px 16px rgba(255,255,255,.65)",
    "shadowHard": "0 16px 28px rgba(124,92,255,.22)",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Baloo 2",
      "body": "Nunito",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "19px",
      "h2": "28px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 600
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 280,
      "slowMs": 320,
      "easing": "cubic-bezier(0.34,1.4,0.64,1)",
      "easingPoints": [
        0.34,
        1.4,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 600,
        "easing": "cubic-bezier(0.34,1.328,0.64,1)",
        "offsetY": 18,
        "stagger": 0.08
      },
      "scroll": {
        "durationMs": 700,
        "offsetY": 24,
        "triggerPercent": 84,
        "once": true
      },
      "hover": {
        "durationMs": 300,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "ölçek animasyonu kapalı, yalnız opacity"
    }
  },
  "kanban-flow": {
    "num": "110",
    "name": "Kanban Akışı",
    "family": "Etkileşim",
    "light": {
      "bg": "#f2f4f7",
      "bg2": "#e8ebf0",
      "surface": "#ffffff",
      "surface2": "#f7f9fb",
      "ink": "#171a20",
      "inkSoft": "#4e5663",
      "inkFaint": "#7d8593",
      "accent": "#1a62cc",
      "accentInk": "#ffffff",
      "line": "rgba(23,26,32,.14)"
    },
    "dark": {
      "bg": "#0f1216",
      "bg2": "#141922",
      "surface": "#191f28",
      "surface2": "#1f2632",
      "ink": "#e9eef4",
      "inkSoft": "#a9b3c0",
      "inkFaint": "#79828f",
      "accent": "#6fa8ff",
      "accentInk": "#08101c",
      "line": "rgba(233,238,244,.16)"
    },
    "radius": "8px",
    "radiusLg": "14px",
    "shadow": "0 1px 3px rgba(23,26,32,.12)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Grotesk",
      "body": "Nunito",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "26px",
      "h1": "36px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.28,
      "body": 1.55
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".06em"
    },
    "motion": {
      "fastMs": 235,
      "baseMs": 420,
      "slowMs": 730,
      "easing": "cubic-bezier(0.3,0.4,0.2,1)",
      "easingPoints": [
        0.3,
        0.4,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 730,
        "easing": "cubic-bezier(0.3,0.4,0.2,1)",
        "offsetY": 19,
        "stagger": 0.068
      },
      "scroll": {
        "durationMs": 690,
        "offsetY": 22,
        "triggerPercent": 70,
        "once": true
      },
      "hover": {
        "durationMs": 235,
        "imageScale": 1.024
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — kart yerleşimi anında olur"
    }
  },
  "step-wizard": {
    "num": "111",
    "name": "Adım Sihirbazı",
    "family": "Etkileşim",
    "light": {
      "bg": "#f4f6fa",
      "bg2": "#e9eef7",
      "surface": "#ffffff",
      "surface2": "#f7f9fd",
      "ink": "#101828",
      "inkSoft": "#46536b",
      "inkFaint": "#7b879c",
      "accent": "#3346c9",
      "accentInk": "#ffffff",
      "line": "rgba(16,24,40,.14)"
    },
    "dark": {
      "bg": "#0c1120",
      "bg2": "#121a2c",
      "surface": "#172033",
      "surface2": "#1d283d",
      "ink": "#eef2fa",
      "inkSoft": "#aeb9cd",
      "inkFaint": "#7d8aa1",
      "accent": "#8fa3ff",
      "accentInk": "#0a1024",
      "line": "rgba(238,242,250,.16)"
    },
    "radius": "10px",
    "radiusLg": "18px",
    "shadow": "0 2px 6px rgba(16,24,40,.08)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Jost",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "20px",
      "h2": "28px",
      "h1": "40px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.26,
      "body": 1.6
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".04em"
    },
    "motion": {
      "fastMs": 150,
      "baseMs": 240,
      "slowMs": 390,
      "easing": "cubic-bezier(0.25,0.8,0.3,1)",
      "easingPoints": [
        0.25,
        0.8,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 390,
        "easing": "cubic-bezier(0.25,0.8,0.3,1)",
        "offsetY": 7,
        "stagger": 0.048
      },
      "scroll": {
        "durationMs": 410,
        "offsetY": 9,
        "triggerPercent": 87,
        "once": true
      },
      "hover": {
        "durationMs": 145,
        "imageScale": 1.008
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — adım geçişi anında olur, ilerleme çubuğu zıplamaz"
    }
  },
  "zero-ui": {
    "num": "112",
    "name": "Sıfır Arayüz",
    "family": "Etkileşim",
    "light": {
      "bg": "#f4f3ee",
      "bg2": "#ecebe5",
      "surface": "#fdfcf8",
      "surface2": "#f2f1eb",
      "ink": "#1f211d",
      "inkSoft": "#4f544a",
      "inkFaint": "#83887c",
      "accent": "#26302a",
      "accentInk": "#f6f5ef",
      "line": "rgba(31,33,29,.12)"
    },
    "dark": {
      "bg": "#12130f",
      "bg2": "#191a15",
      "surface": "#1d1e18",
      "surface2": "#24251f",
      "ink": "#eeefe6",
      "inkSoft": "#b6b8ab",
      "inkFaint": "#86887c",
      "accent": "#dfe3d3",
      "accentInk": "#14150f",
      "line": "rgba(238,239,230,.14)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "21px",
      "h2": "30px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.3,
      "body": 1.68
    },
    "tracking": {
      "display": "-.005em",
      "heading": "0",
      "body": "0",
      "label": ".08em"
    },
    "motion": {
      "fastMs": 220,
      "baseMs": 480,
      "slowMs": 1100,
      "easing": "cubic-bezier(0.33,0,0.12,1)",
      "easingPoints": [
        0.33,
        0,
        0.12,
        1
      ],
      "enter": {
        "durationMs": 1100,
        "easing": "cubic-bezier(0.33,0,0.12,1)",
        "offsetY": 3,
        "stagger": 0.185
      },
      "scroll": {
        "durationMs": 1150,
        "offsetY": 2,
        "triggerPercent": 64,
        "once": true
      },
      "hover": {
        "durationMs": 560,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — niyet satırı anında görünür, hiçbir katman kaymaz"
    }
  },
  "notebook-repl": {
    "num": "113",
    "name": "Notebook / REPL",
    "family": "Etkileşim",
    "light": {
      "bg": "#e9edf2",
      "bg2": "#dfe5ec",
      "surface": "#ffffff",
      "surface2": "#f4f7fa",
      "ink": "#131a22",
      "inkSoft": "#47566a",
      "inkFaint": "#7a8798",
      "accent": "#b8460f",
      "accentInk": "#ffffff",
      "line": "rgba(19,26,34,.14)"
    },
    "dark": {
      "bg": "#101519",
      "bg2": "#171d23",
      "surface": "#1c242b",
      "surface2": "#232c34",
      "ink": "#e8eef4",
      "inkSoft": "#a7b5c2",
      "inkFaint": "#79879a",
      "accent": "#f08a4b",
      "accentInk": "#1a0e05",
      "line": "rgba(232,238,244,.15)"
    },
    "radius": "4px",
    "radiusLg": "8px",
    "shadow": "0 1px 2px rgba(19,26,34,.08)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Mono",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "26px",
      "h1": "36px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.16,
      "heading": 1.28,
      "body": 1.58
    },
    "tracking": {
      "display": "-.02em",
      "heading": "0",
      "body": "0",
      "label": ".06em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 190,
      "slowMs": 230,
      "easing": "cubic-bezier(0.2,0.9,0.2,1)",
      "easingPoints": [
        0.2,
        0.9,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 230,
        "easing": "cubic-bezier(0.2,0.9,0.2,1)",
        "offsetY": 3,
        "stagger": 0.024
      },
      "scroll": {
        "durationMs": 190,
        "offsetY": 2,
        "triggerPercent": 90,
        "once": false
      },
      "hover": {
        "durationMs": 70,
        "imageScale": 1.004
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — hücre çıktısı anında belirir, `busy` noktası durur"
    }
  },
  "multiplayer-presence": {
    "num": "114",
    "name": "Eşzamanlı İşbirlikçi",
    "family": "Etkileşim",
    "light": {
      "bg": "#f8f7fc",
      "bg2": "#eeecf8",
      "surface": "#ffffff",
      "surface2": "#f4f2fc",
      "ink": "#1b1630",
      "inkSoft": "#514870",
      "inkFaint": "#857ea0",
      "accent": "#6d28d9",
      "accentInk": "#ffffff",
      "line": "rgba(27,22,48,.14)"
    },
    "dark": {
      "bg": "#14101f",
      "bg2": "#1b1630",
      "surface": "#221c33",
      "surface2": "#2a2340",
      "ink": "#f0ecfa",
      "inkSoft": "#b6adcc",
      "inkFaint": "#8b82a3",
      "accent": "#b18cff",
      "accentInk": "#150a24",
      "line": "rgba(240,236,250,.16)"
    },
    "radius": "12px",
    "radiusLg": "20px",
    "shadow": "0 4px 14px rgba(27,22,48,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Baloo 2",
      "body": "Nunito",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "21px",
      "h2": "29px",
      "h1": "42px",
      "h1Mobile": "27px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 600
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.24,
      "body": 1.62
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".05em"
    },
    "motion": {
      "fastMs": 210,
      "baseMs": 380,
      "slowMs": 630,
      "easing": "cubic-bezier(0.34,1.16,0.64,1)",
      "easingPoints": [
        0.34,
        1.16,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 630,
        "easing": "cubic-bezier(0.34,1.16,0.64,1)",
        "offsetY": 9,
        "stagger": 0.033
      },
      "scroll": {
        "durationMs": 570,
        "offsetY": 11,
        "triggerPercent": 88,
        "once": false
      },
      "hover": {
        "durationMs": 210,
        "imageScale": 1.026
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — imleçler konum atlar, seçim vurgusu anında belirir"
    }
  },
  "keyboard-first": {
    "num": "115",
    "name": "Klavye-Öncelikli Komut Arayüzü",
    "family": "Etkileşim",
    "light": {
      "bg": "#0f1013",
      "bg2": "#14161a",
      "surface": "#17191e",
      "surface2": "#1d2026",
      "ink": "#e9ecf1",
      "inkSoft": "#a3abb8",
      "inkFaint": "#737d8c",
      "accent": "#ffb62e",
      "accentInk": "#1a1205",
      "line": "rgba(233,236,241,.16)"
    },
    "dark": {
      "bg": "#020306",
      "bg2": "#06080c",
      "surface": "#08090d",
      "surface2": "#0f1216",
      "ink": "#f6f8fc",
      "inkSoft": "#b1bac7",
      "inkFaint": "#808a98",
      "accent": "#ffd79a",
      "accentInk": "#1a1205",
      "line": "rgba(246,248,252,.13)"
    },
    "radius": "4px",
    "radiusLg": "8px",
    "shadow": "0 1px 0 rgba(0,0,0,.4)",
    "shadowHard": "0 2px 0 rgba(0,0,0,.55)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Rajdhani",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "18px",
      "h2": "24px",
      "h1": "34px",
      "h1Mobile": "22px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.05,
      "heading": 1.2,
      "body": 1.52
    },
    "tracking": {
      "display": ".01em",
      "heading": ".01em",
      "body": "0",
      "label": ".08em"
    },
    "motion": {
      "fastMs": 45,
      "baseMs": 110,
      "slowMs": 160,
      "easing": "linear",
      "easingPoints": [
        0,
        0,
        1,
        1
      ],
      "enter": {
        "durationMs": 120,
        "easing": "linear",
        "offsetY": 0,
        "stagger": 0.008
      },
      "scroll": {
        "durationMs": 100,
        "offsetY": 1,
        "triggerPercent": 98,
        "once": true
      },
      "hover": {
        "durationMs": 45,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — komut çıktısı ışınlanır, imleç yanıp sönmez"
    }
  },
  "kids-playground": {
    "num": "116",
    "name": "Kids Playground",
    "family": "Oyuncul",
    "light": {
      "bg": "#fdf7ec",
      "bg2": "#f6eddd",
      "surface": "#ffffff",
      "surface2": "#f4ecdf",
      "ink": "#1e2a33",
      "inkSoft": "#4b5a64",
      "inkFaint": "#7c8a92",
      "accent": "#17607a",
      "accentInk": "#f6fbfd",
      "line": "rgba(30,42,51,.16)"
    },
    "dark": {
      "bg": "#141c22",
      "bg2": "#1c262e",
      "surface": "#18222a",
      "surface2": "#24313a",
      "ink": "#f0f4f2",
      "inkSoft": "#b0bcc0",
      "inkFaint": "#7c8a90",
      "accent": "#7fd3c8",
      "accentInk": "#0e1518",
      "line": "rgba(240,244,242,.16)"
    },
    "radius": "14px",
    "radiusLg": "18px",
    "shadow": "0 6px 0 var(--line)",
    "shadowHard": "0 6px 0 var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Baloo 2",
      "body": "Nunito",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "13px",
      "caption": "13px",
      "small": "15px",
      "body": "17px",
      "h3": "22px",
      "h2": "34px",
      "h1": "56px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.2,
      "body": 1.65
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.06em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 220,
      "slowMs": 380,
      "easing": "cubic-bezier(0.34,1.574,0.64,1)",
      "easingPoints": [
        0.34,
        1.574,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 460,
        "easing": "cubic-bezier(0.34,1.574,0.64,1)",
        "offsetY": 22,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 520,
        "offsetY": 18,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 180,
        "imageScale": 1.04
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — ölçek kapanır, yalnız opacity"
    }
  },
  "carnival-festival": {
    "num": "117",
    "name": "Carnival Festival",
    "family": "Oyuncul",
    "light": {
      "bg": "#fdf3e3",
      "bg2": "#f6e7d0",
      "surface": "#fffaf0",
      "surface2": "#f7ead6",
      "ink": "#241a12",
      "inkSoft": "#55463a",
      "inkFaint": "#827164",
      "accent": "#b3360f",
      "accentInk": "#fdf5ee",
      "line": "rgba(36,26,18,.18)"
    },
    "dark": {
      "bg": "#191009",
      "bg2": "#231710",
      "surface": "#1e140d",
      "surface2": "#2c1f15",
      "ink": "#f8ecdd",
      "inkSoft": "#bfaa99",
      "inkFaint": "#8a7767",
      "accent": "#f0873f",
      "accentInk": "#1a1007",
      "line": "rgba(248,236,221,.16)"
    },
    "radius": "0px",
    "radiusLg": "4px",
    "shadow": "none",
    "shadowHard": "3px 3px 0 rgba(36,26,18,.92)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Anton",
      "body": "Poppins",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "12px",
      "caption": "13px",
      "small": "14px",
      "body": "16.5px",
      "h3": "22px",
      "h2": "40px",
      "h1": "72px",
      "h1Mobile": "40px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 0.94,
      "heading": 1.1,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 180,
      "slowMs": 280,
      "easing": "cubic-bezier(0.34,1.56,0.64,1)",
      "easingPoints": [
        0.34,
        1.56,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 280,
        "easing": "cubic-bezier(0.34,1.56,0.64,1)",
        "offsetY": 30,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 360,
        "offsetY": 24,
        "triggerPercent": 91,
        "once": true
      },
      "hover": {
        "durationMs": 120,
        "imageScale": 1.06
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — şerit animasyonsuz yerleşir"
    }
  },
  "sticker-sheet": {
    "num": "118",
    "name": "Sticker Sheet",
    "family": "Oyuncul",
    "light": {
      "bg": "#f7f6f2",
      "bg2": "#ecebe4",
      "surface": "#ffffff",
      "surface2": "#f2f1ea",
      "ink": "#16160f",
      "inkSoft": "#4a4a40",
      "inkFaint": "#78786c",
      "accent": "#b5174e",
      "accentInk": "#fff5f7",
      "line": "rgba(22,22,15,.18)"
    },
    "dark": {
      "bg": "#121210",
      "bg2": "#1b1b18",
      "surface": "#171714",
      "surface2": "#24241f",
      "ink": "#f4f3ea",
      "inkSoft": "#b3b2a5",
      "inkFaint": "#7f7e72",
      "accent": "#f472a0",
      "accentInk": "#1a0a10",
      "line": "rgba(244,243,234,.16)"
    },
    "radius": "10px",
    "radiusLg": "16px",
    "shadow": "2px 2px 0 rgba(22,22,15,.92)",
    "shadowHard": "2px 2px 0 rgba(22,22,15,.92)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Nunito",
      "body": "Poppins",
      "mono": "Silkscreen"
    },
    "scale": {
      "label": "12px",
      "caption": "13px",
      "small": "14px",
      "body": "16.5px",
      "h3": "20px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 900
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.18,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.08em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 200,
      "slowMs": 340,
      "easing": "cubic-bezier(0.34,1.82,0.64,1)",
      "easingPoints": [
        0.34,
        1.82,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 340,
        "easing": "cubic-bezier(0.34,1.82,0.64,1)",
        "offsetY": 12,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 400,
        "offsetY": 14,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 160,
        "imageScale": 1.08
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — rotasyon statik, hareket susar"
    }
  },
  "arcade-8bit": {
    "num": "119",
    "name": "Arcade 8-bit",
    "family": "Oyuncul",
    "light": {
      "bg": "#0e1224",
      "bg2": "#141a2e",
      "surface": "#121728",
      "surface2": "#1b2136",
      "ink": "#eef4ff",
      "inkSoft": "#a7b3cc",
      "inkFaint": "#78849c",
      "accent": "#35e08a",
      "accentInk": "#05130c",
      "line": "rgba(238,244,255,.16)"
    },
    "dark": {
      "bg": "#010309",
      "bg2": "#050914",
      "surface": "#04070f",
      "surface2": "#0d1424",
      "ink": "#f4f9ff",
      "inkSoft": "#aebcd4",
      "inkFaint": "#7f8ba3",
      "accent": "#66ffb8",
      "accentInk": "#04120a",
      "line": "rgba(244,249,255,.13)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Press Start 2P",
      "body": "Space Grotesk",
      "mono": "VT323"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "24px",
      "h1": "32px",
      "h1Mobile": "20px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.4,
      "heading": 1.3,
      "body": 1.62
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 70,
      "baseMs": 140,
      "slowMs": 220,
      "easing": "steps(4, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 180,
        "easing": "steps(4, end)",
        "offsetY": 8,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 220,
        "offsetY": 6,
        "triggerPercent": 95,
        "once": true
      },
      "hover": {
        "durationMs": 70,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — tarama statik, hareket susar"
    }
  },
  "aurora-ui": {
    "num": "12",
    "name": "Aurora UI",
    "family": "Yüzey",
    "light": {
      "bg": "#0a0a10",
      "bg2": "#12121c",
      "surface": "rgba(255,255,255,.06)",
      "surface2": "rgba(255,255,255,.04)",
      "ink": "#f7f7fb",
      "inkSoft": "rgba(247,247,251,.72)",
      "inkFaint": "rgba(247,247,251,.48)",
      "accent": "#6d5bff",
      "accentInk": "#ffffff",
      "line": "rgba(255,255,255,.14)"
    },
    "dark": {
      "bg": "#050409",
      "bg2": "#0b0a14",
      "surface": "rgba(255,255,255,.05)",
      "surface2": "rgba(255,255,255,.035)",
      "ink": "#fbfbff",
      "inkSoft": "rgba(251,251,255,.76)",
      "inkFaint": "rgba(251,251,255,.50)",
      "accent": "#9b8cff",
      "accentInk": "#0a0818",
      "line": "rgba(255,255,255,.12)"
    },
    "radius": "16px",
    "radiusLg": "24px",
    "shadow": "0 20px 60px rgba(109,91,255,.25)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Inter",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "28px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.2,
      "body": 1.65
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.02em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 260,
      "slowMs": 400,
      "easing": "cubic-bezier(0.3,0.7,0.3,1)",
      "easingPoints": [
        0.3,
        0.7,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 900,
        "easing": "cubic-bezier(0.39,0.575,0.565,1)",
        "offsetY": 24,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 1150,
        "offsetY": 24,
        "triggerPercent": 76,
        "once": true
      },
      "hover": {
        "durationMs": 320,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "blob durur, geçişler 0.01ms"
    }
  },
  "craft-handmade": {
    "num": "120",
    "name": "Craft Handmade",
    "family": "Oyuncul",
    "light": {
      "bg": "#efe6d6",
      "bg2": "#e5dac6",
      "surface": "#f9f3e7",
      "surface2": "#e9dfcb",
      "ink": "#2a231a",
      "inkSoft": "#574c3d",
      "inkFaint": "#857a68",
      "accent": "#7a4b2a",
      "accentInk": "#fbf5ea",
      "line": "rgba(42,35,26,.20)"
    },
    "dark": {
      "bg": "#1a1610",
      "bg2": "#241f17",
      "surface": "#201b14",
      "surface2": "#2c261c",
      "ink": "#f2e9d9",
      "inkSoft": "#bcb09c",
      "inkFaint": "#8a8071",
      "accent": "#d9a86a",
      "accentInk": "#1a1208",
      "line": "rgba(242,233,217,.16)"
    },
    "radius": "4px",
    "radiusLg": "10px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Caveat",
      "body": "Nunito",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "12.5px",
      "caption": "13px",
      "small": "15px",
      "body": "16.5px",
      "h3": "20px",
      "h2": "32px",
      "h1": "52px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.24,
      "body": 1.72
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 300,
      "slowMs": 520,
      "easing": "cubic-bezier(0.4,0.1,0.3,1)",
      "easingPoints": [
        0.4,
        0.1,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 820,
        "easing": "cubic-bezier(0.4,0.1,0.3,1)",
        "offsetY": 26,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 950,
        "offsetY": 22,
        "triggerPercent": 79,
        "once": true
      },
      "hover": {
        "durationMs": 300,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": true,
        "scrub": 1.1
      },
      "reduced": "0.01ms — pin/scrub kapalı, dikiş statik"
    }
  },
  "celebration-card": {
    "num": "121",
    "name": "Celebration Card",
    "family": "Oyuncul",
    "light": {
      "bg": "#fbeee8",
      "bg2": "#f5e2da",
      "surface": "#fffaf7",
      "surface2": "#f2ded4",
      "ink": "#341c2a",
      "inkSoft": "#6b4a5b",
      "inkFaint": "#8f6f7f",
      "accent": "#bd1f5c",
      "accentInk": "#fff5f9",
      "line": "rgba(52,28,42,.16)"
    },
    "dark": {
      "bg": "#1a1116",
      "bg2": "#211720",
      "surface": "#271b24",
      "surface2": "#33232e",
      "ink": "#f6e9ee",
      "inkSoft": "#cbb2bd",
      "inkFaint": "#9c8390",
      "accent": "#ff7fae",
      "accentInk": "#2a0d18",
      "line": "rgba(246,233,238,.16)"
    },
    "radius": "14px",
    "radiusLg": "22px",
    "shadow": "0 6px 18px rgba(52,28,42,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Playfair Display",
      "body": "Nunito",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "30px",
      "h1": "52px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.1,
      "body": 1.7
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 180,
      "slowMs": 320,
      "easing": "cubic-bezier(0.34,1.42,0.4,1)",
      "easingPoints": [
        0.34,
        1.42,
        0.4,
        1
      ],
      "enter": {
        "durationMs": 520,
        "easing": "cubic-bezier(0.34,1.42,0.4,1)",
        "offsetY": 14,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 600,
        "offsetY": 16,
        "triggerPercent": 85,
        "once": true
      },
      "hover": {
        "durationMs": 180,
        "imageScale": 1.024
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — konfeti ve kurdele statik kalır"
    }
  },
  "collectible-card": {
    "num": "122",
    "name": "Collectible Card",
    "family": "Oyuncul",
    "light": {
      "bg": "#eef1f7",
      "bg2": "#e5e9f2",
      "surface": "#ffffff",
      "surface2": "#e9edf6",
      "ink": "#131521",
      "inkSoft": "#474b5c",
      "inkFaint": "#767b8c",
      "accent": "#5c33e0",
      "accentInk": "#f7f4ff",
      "line": "rgba(19,21,33,.16)"
    },
    "dark": {
      "bg": "#0d0e15",
      "bg2": "#12131c",
      "surface": "#171926",
      "surface2": "#1f2231",
      "ink": "#eceaf5",
      "inkSoft": "#b0aec0",
      "inkFaint": "#86849a",
      "accent": "#a48bff",
      "accentInk": "#0f0d18",
      "line": "rgba(236,234,245,.16)"
    },
    "radius": "10px",
    "radiusLg": "16px",
    "shadow": "0 10px 24px rgba(19,21,33,.14)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Chakra Petch",
      "body": "Jost",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "15.5px",
      "h3": "19px",
      "h2": "28px",
      "h1": "48px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.1,
      "body": 1.66
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 200,
      "slowMs": 340,
      "easing": "cubic-bezier(0.16,0.9,0.24,1)",
      "easingPoints": [
        0.16,
        0.9,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 700,
        "easing": "cubic-bezier(0.16,0.9,0.24,1)",
        "offsetY": 26,
        "stagger": 0.08
      },
      "scroll": {
        "durationMs": 780,
        "offsetY": 22,
        "triggerPercent": 81,
        "once": true
      },
      "hover": {
        "durationMs": 200,
        "imageScale": 1.038
      },
      "pin": {
        "enabled": true,
        "scrub": 1.05
      },
      "reduced": "0.01ms (tokens.css global) — kart ve deste statik kalır, pin kapanır"
    }
  },
  "comic-story": {
    "num": "123",
    "name": "Comic Story",
    "family": "Oyuncul",
    "light": {
      "bg": "#f8f2e2",
      "bg2": "#f0e8d3",
      "surface": "#fffdf6",
      "surface2": "#ece4cd",
      "ink": "#111114",
      "inkSoft": "#494a45",
      "inkFaint": "#75766e",
      "accent": "#d92b1f",
      "accentInk": "#fff8f2",
      "line": "rgba(17,17,20,.22)"
    },
    "dark": {
      "bg": "#121214",
      "bg2": "#17171a",
      "surface": "#1c1c20",
      "surface2": "#26262b",
      "ink": "#f2eddd",
      "inkSoft": "#b5b0a2",
      "inkFaint": "#8a857a",
      "accent": "#ff6a58",
      "accentInk": "#180a08",
      "line": "rgba(242,237,221,.18)"
    },
    "radius": "4px",
    "radiusLg": "8px",
    "shadow": "none",
    "shadowHard": "4px 4px 0 #111114",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Baloo 2",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "15.5px",
      "h3": "20px",
      "h2": "30px",
      "h1": "50px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1,
      "heading": 1.08,
      "body": 1.62
    },
    "tracking": {
      "display": "0.005em",
      "heading": "0.005em",
      "body": "0",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 80,
      "baseMs": 120,
      "slowMs": 240,
      "easing": "steps(3, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 280,
        "easing": "steps(3, end)",
        "offsetY": 22,
        "stagger": 0.045
      },
      "scroll": {
        "durationMs": 340,
        "offsetY": 20,
        "triggerPercent": 90,
        "once": true
      },
      "hover": {
        "durationMs": 120,
        "imageScale": 1.016
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — kare geçişleri durur, paneller statik kalır"
    }
  },
  "album-sleeve": {
    "num": "124",
    "name": "Album Sleeve",
    "family": "Oyuncul",
    "light": {
      "bg": "#ecebe4",
      "bg2": "#e2e0d8",
      "surface": "#fbfaf5",
      "surface2": "#e6e4da",
      "ink": "#131418",
      "inkSoft": "#45474e",
      "inkFaint": "#74767c",
      "accent": "#cf3b0c",
      "accentInk": "#fff8f2",
      "line": "rgba(19,20,24,.18)"
    },
    "dark": {
      "bg": "#0e0f11",
      "bg2": "#141517",
      "surface": "#191a1d",
      "surface2": "#222327",
      "ink": "#eeede8",
      "inkSoft": "#b3b2ab",
      "inkFaint": "#888780",
      "accent": "#ff6a2c",
      "accentInk": "#140a05",
      "line": "rgba(238,237,232,.16)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "0 2px 10px rgba(19,20,24,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Anton",
      "body": "Space Grotesk",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10.5px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "34px",
      "h1": "66px",
      "h1Mobile": "40px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 0.92,
      "heading": 0.98,
      "body": 1.68
    },
    "tracking": {
      "display": "-0.015em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 380,
      "slowMs": 620,
      "easing": "cubic-bezier(0.4,0.05,0.2,1)",
      "easingPoints": [
        0.4,
        0.05,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 900,
        "easing": "cubic-bezier(0.4,0.05,0.2,1)",
        "offsetY": 18,
        "stagger": 0.1
      },
      "scroll": {
        "durationMs": 950,
        "offsetY": 24,
        "triggerPercent": 80,
        "once": false
      },
      "hover": {
        "durationMs": 380,
        "imageScale": 1.062
      },
      "pin": {
        "enabled": true,
        "scrub": 0.7
      },
      "reduced": "0.01ms (tokens.css global) — kılıf statik, pin/scrub kapanır"
    }
  },
  "sports-energy": {
    "num": "125",
    "name": "Sports Energy",
    "family": "Oyuncul",
    "light": {
      "bg": "#f1f3f1",
      "bg2": "#e7eae7",
      "surface": "#ffffff",
      "surface2": "#eceee9",
      "ink": "#0f1412",
      "inkSoft": "#444d47",
      "inkFaint": "#6f7a73",
      "accent": "#f24a00",
      "accentInk": "#17100c",
      "line": "rgba(15,20,18,.18)"
    },
    "dark": {
      "bg": "#0c100e",
      "bg2": "#111612",
      "surface": "#161b18",
      "surface2": "#1e2420",
      "ink": "#e9efe9",
      "inkSoft": "#aebbb2",
      "inkFaint": "#7f8d84",
      "accent": "#ff6a2e",
      "accentInk": "#100804",
      "line": "rgba(233,239,233,.16)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "none",
    "shadowHard": "6px 6px 0 #0f1412",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Rajdhani",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "15.5px",
      "h3": "20px",
      "h2": "32px",
      "h1": "62px",
      "h1Mobile": "36px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 0.9,
      "heading": 0.98,
      "body": 1.6
    },
    "tracking": {
      "display": "0.005em",
      "heading": "0.005em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 60,
      "baseMs": 120,
      "slowMs": 240,
      "easing": "cubic-bezier(0.9,0,0.1,1)",
      "easingPoints": [
        0.9,
        0,
        0.1,
        1
      ],
      "enter": {
        "durationMs": 240,
        "easing": "cubic-bezier(0.9,0,0.1,1)",
        "offsetY": 36,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 280,
        "offsetY": 40,
        "triggerPercent": 93,
        "once": false
      },
      "hover": {
        "durationMs": 80,
        "imageScale": 1.05
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — skor/süre güncellemeleri anında, hareket yok"
    }
  },
  "marble-vein": {
    "num": "126",
    "name": "Marble Vein",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#f3f4f3",
      "bg2": "#e8eae8",
      "surface": "#fdfdfc",
      "surface2": "#f0f2f0",
      "ink": "#14181a",
      "inkSoft": "#4c565a",
      "inkFaint": "#748083",
      "accent": "#242b2e",
      "accentInk": "#f5f7f6",
      "line": "rgba(20,24,26,.14)"
    },
    "dark": {
      "bg": "#121416",
      "bg2": "#0d0f10",
      "surface": "#191c1e",
      "surface2": "#222629",
      "ink": "#eef0ef",
      "inkSoft": "#a7aeae",
      "inkFaint": "#7b8484",
      "accent": "#e8ebe7",
      "accentInk": "#14181a",
      "line": "rgba(238,240,239,.16)"
    },
    "radius": "5px",
    "radiusLg": "12px",
    "shadow": "0 1px 2px rgba(20,24,26,.07)",
    "shadowHard": "0 0 0 1px rgba(20,24,26,.35)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Lora",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "21px",
      "h2": "30px",
      "h1": "54px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.16,
      "body": 1.64
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 320,
      "slowMs": 640,
      "easing": "cubic-bezier(0.18,0.72,0.22,1)",
      "easingPoints": [
        0.18,
        0.72,
        0.22,
        1
      ],
      "enter": {
        "durationMs": 640,
        "easing": "cubic-bezier(0.18,0.72,0.22,1)",
        "offsetY": 13,
        "stagger": 0.032
      },
      "scroll": {
        "durationMs": 870,
        "offsetY": 17,
        "triggerPercent": 69,
        "once": true
      },
      "hover": {
        "durationMs": 310,
        "imageScale": 1.035
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — giriş ve damar geçişi anında, içerik yerleşir"
    }
  },
  "silk-drape": {
    "num": "127",
    "name": "Silk Drape",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#f6efe7",
      "bg2": "#ede2d6",
      "surface": "#fdf9f3",
      "surface2": "#f3eade",
      "ink": "#241a20",
      "inkSoft": "#5b4b52",
      "inkFaint": "#83737a",
      "accent": "#6b2f4a",
      "accentInk": "#f9f1f4",
      "line": "rgba(36,26,32,.14)"
    },
    "dark": {
      "bg": "#1a1217",
      "bg2": "#140e12",
      "surface": "#221820",
      "surface2": "#2c2028",
      "ink": "#f6ecf0",
      "inkSoft": "#c4b1ba",
      "inkFaint": "#8e7d86",
      "accent": "#d08aa8",
      "accentInk": "#26101a",
      "line": "rgba(246,236,240,.16)"
    },
    "radius": "20px",
    "radiusLg": "44px",
    "shadow": "0 10px 30px -18px rgba(60,34,44,.35)",
    "shadowHard": "0 0 0 1px rgba(107,47,74,.3)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Poppins",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "20px",
      "h2": "32px",
      "h1": "60px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 300
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.14,
      "body": 1.7
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.24em"
    },
    "motion": {
      "fastMs": 180,
      "baseMs": 380,
      "slowMs": 760,
      "easing": "cubic-bezier(0.46,0.03,0.24,1)",
      "easingPoints": [
        0.46,
        0.03,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 760,
        "easing": "cubic-bezier(0.46,0.03,0.24,1)",
        "offsetY": 27,
        "stagger": 0.078
      },
      "scroll": {
        "durationMs": 920,
        "offsetY": 29,
        "triggerPercent": 65,
        "once": true
      },
      "hover": {
        "durationMs": 245,
        "imageScale": 1.048
      },
      "pin": {
        "enabled": true,
        "scrub": 0.78
      },
      "reduced": "0.01ms (tokens.css global) — kıvrım ve pin/scrub kapalı, içerik anında"
    }
  },
  "brass-copper": {
    "num": "128",
    "name": "Brass Copper",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#1a1512",
      "bg2": "#130f0d",
      "surface": "#221b16",
      "surface2": "#2c231c",
      "ink": "#f0e7da",
      "inkSoft": "#bda892",
      "inkFaint": "#8a7862",
      "accent": "#c9743c",
      "accentInk": "#1a0d05",
      "line": "rgba(240,231,218,.15)"
    },
    "dark": {
      "bg": "#0b0705",
      "bg2": "#080403",
      "surface": "#120d0a",
      "surface2": "#1a1310",
      "ink": "#f8f0e5",
      "inkSoft": "#cdbba7",
      "inkFaint": "#9a876f",
      "accent": "#f0a062",
      "accentInk": "#1a0d05",
      "line": "rgba(248,240,229,.18)"
    },
    "radius": "5px",
    "radiusLg": "12px",
    "shadow": "0 8px 24px -16px rgba(0,0,0,.85)",
    "shadowHard": "0 0 0 1px rgba(201,116,60,.45)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cinzel",
      "body": "Jost",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "0.12em",
      "heading": "0.08em",
      "body": "0",
      "label": "0.20em"
    },
    "motion": {
      "fastMs": 130,
      "baseMs": 300,
      "slowMs": 920,
      "easing": "cubic-bezier(0.52,0.04,0.3,1)",
      "easingPoints": [
        0.52,
        0.04,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 920,
        "easing": "cubic-bezier(0.52,0.04,0.3,1)",
        "offsetY": 9,
        "stagger": 0.052
      },
      "scroll": {
        "durationMs": 790,
        "offsetY": 7,
        "triggerPercent": 66,
        "once": true
      },
      "hover": {
        "durationMs": 195,
        "imageScale": 1.009
      },
      "pin": {
        "enabled": true,
        "scrub": 1.32
      },
      "reduced": "0.01ms (tokens.css global) — gravür kayması ve pin/scrub kapalı, içerik anında"
    }
  },
  "porcelain-glaze": {
    "num": "129",
    "name": "Porcelain Glaze",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#f2f6f8",
      "bg2": "#e6eef3",
      "surface": "#fbfdfe",
      "surface2": "#eef4f7",
      "ink": "#141d26",
      "inkSoft": "#46586a",
      "inkFaint": "#6f8394",
      "accent": "#1d4f9c",
      "accentInk": "#f4f8fd",
      "line": "rgba(20,29,38,.12)"
    },
    "dark": {
      "bg": "#0b1420",
      "bg2": "#0e1926",
      "surface": "#121f2e",
      "surface2": "#192838",
      "ink": "#eaf2fa",
      "inkSoft": "#a8bccf",
      "inkFaint": "#7b8fa3",
      "accent": "#6aa6f0",
      "accentInk": "#07172b",
      "line": "rgba(234,242,250,.14)"
    },
    "radius": "14px",
    "radiusLg": "28px",
    "shadow": "0 2px 6px rgba(20,29,38,.06)",
    "shadowHard": "0 0 0 1px rgba(29,79,156,.35)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Nunito",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "19px",
      "h2": "26px",
      "h1": "46px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 500
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.22,
      "body": 1.68
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 150,
      "baseMs": 280,
      "slowMs": 560,
      "easing": "cubic-bezier(0.12,0.75,0.24,1)",
      "easingPoints": [
        0.12,
        0.75,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 560,
        "easing": "cubic-bezier(0.12,0.75,0.24,1)",
        "offsetY": 33,
        "stagger": 0.095
      },
      "scroll": {
        "durationMs": 840,
        "offsetY": 35,
        "triggerPercent": 98,
        "once": false
      },
      "hover": {
        "durationMs": 360,
        "imageScale": 1.028
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — sır geçişi ve giriş anında, içerik yerleşir"
    }
  },
  "neo-brutalism": {
    "num": "13",
    "name": "Neo-Brutalism",
    "family": "Cesur",
    "light": {
      "bg": "#fffdf5",
      "bg2": "#ffe9a8",
      "surface": "#ffffff",
      "surface2": "#ffd93d",
      "ink": "#000000",
      "inkSoft": "#2b2b2b",
      "inkFaint": "#6b6b6b",
      "accent": "#ff5c8a",
      "accentInk": "#000000",
      "line": "#000000"
    },
    "dark": {
      "bg": "#111111",
      "bg2": "#2a2a1a",
      "surface": "#1b1b1b",
      "surface2": "#3a3320",
      "ink": "#fffdf5",
      "inkSoft": "#d8d4c8",
      "inkFaint": "#9a958a",
      "accent": "#ff5c8a",
      "accentInk": "#000000",
      "line": "#fffdf5"
    },
    "radius": "0px",
    "radiusLg": "4px",
    "shadow": "4px 4px 0 #000000",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Space Grotesk",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "32px",
      "h1": "64px",
      "h1Mobile": "36px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 0.98,
      "heading": 1,
      "body": 1.55
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.02em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 120,
      "slowMs": 240,
      "easing": "cubic-bezier(0.34,1.4,0.64,1)",
      "easingPoints": [
        0.34,
        1.4,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 280,
        "easing": "linear",
        "offsetY": 8,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 320,
        "offsetY": 16,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 90,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; basılma efekti opacity ile"
    }
  },
  "leather-craft": {
    "num": "130",
    "name": "Leather Craft",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#e3cba9",
      "bg2": "#d7bd98",
      "surface": "#f0e0c6",
      "surface2": "#e9d5b7",
      "ink": "#2b1d12",
      "inkSoft": "#5d452f",
      "inkFaint": "#7f6748",
      "accent": "#7a3f1d",
      "accentInk": "#f8ecda",
      "line": "rgba(43,29,18,.22)"
    },
    "dark": {
      "bg": "#1d1510",
      "bg2": "#160f0b",
      "surface": "#251b14",
      "surface2": "#2f241b",
      "ink": "#f4ead9",
      "inkSoft": "#c6b39a",
      "inkFaint": "#93826b",
      "accent": "#d59a63",
      "accentInk": "#1c1007",
      "line": "rgba(244,234,217,.16)"
    },
    "radius": "7px",
    "radiusLg": "16px",
    "shadow": "0 6px 16px -10px rgba(43,29,18,.45)",
    "shadowHard": "0 0 0 1px rgba(122,63,29,.4)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Playfair Display",
      "body": "Lora",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "28px",
      "h1": "50px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.2,
      "body": 1.66
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 170,
      "baseMs": 400,
      "slowMs": 1080,
      "easing": "cubic-bezier(0.66,0.02,0.3,1)",
      "easingPoints": [
        0.66,
        0.02,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 1080,
        "easing": "cubic-bezier(0.66,0.02,0.3,1)",
        "offsetY": 21,
        "stagger": 0.108
      },
      "scroll": {
        "durationMs": 930,
        "offsetY": 23,
        "triggerPercent": 64,
        "once": true
      },
      "hover": {
        "durationMs": 430,
        "imageScale": 1.052
      },
      "pin": {
        "enabled": true,
        "scrub": 0.68
      },
      "reduced": "0.01ms (tokens.css global) — dikiş ve pin/scrub kapalı, içerik anında"
    }
  },
  "optic-prism": {
    "num": "131",
    "name": "Optic Prism",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#f2f6f7",
      "bg2": "#e7eef0",
      "surface": "#fdfeff",
      "surface2": "#eaf1f3",
      "ink": "#101a1f",
      "inkSoft": "#43535a",
      "inkFaint": "#74858c",
      "accent": "#0d5c63",
      "accentInk": "#f2fbfc",
      "line": "rgba(16,26,31,.14)"
    },
    "dark": {
      "bg": "#0a1216",
      "bg2": "#111a1f",
      "surface": "#0d161b",
      "surface2": "#172128",
      "ink": "#eef6f8",
      "inkSoft": "#a9bcc2",
      "inkFaint": "#7e939b",
      "accent": "#6fe6dc",
      "accentInk": "#04140f",
      "line": "rgba(238,246,248,.16)"
    },
    "radius": "2px",
    "radiusLg": "10px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.3,
      "heading": 1.3,
      "body": 1.62
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 200,
      "slowMs": 320,
      "easing": "cubic-bezier(0.16,0.84,0.44,1)",
      "easingPoints": [
        0.16,
        0.84,
        0.44,
        1
      ],
      "enter": {
        "durationMs": 580,
        "easing": "cubic-bezier(0.16,0.84,0.44,1)",
        "offsetY": 14,
        "stagger": 0.045
      },
      "scroll": {
        "durationMs": 720,
        "offsetY": 16,
        "triggerPercent": 84,
        "once": true
      },
      "hover": {
        "durationMs": 220,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": true,
        "scrub": 0.85
      },
      "reduced": "0.01ms — pin kapalı, kırılma halkası statik"
    }
  },
  "wood-joinery": {
    "num": "132",
    "name": "Wood Joinery",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#f0e9dc",
      "bg2": "#e6dccb",
      "surface": "#faf5ec",
      "surface2": "#ece2d1",
      "ink": "#1f1c17",
      "inkSoft": "#4f4a41",
      "inkFaint": "#7b7469",
      "accent": "#33546b",
      "accentInk": "#f4f8fa",
      "line": "rgba(31,28,23,.16)"
    },
    "dark": {
      "bg": "#17130f",
      "bg2": "#211b15",
      "surface": "#1d1812",
      "surface2": "#2a231b",
      "ink": "#f2ebdf",
      "inkSoft": "#bdb2a3",
      "inkFaint": "#8a8072",
      "accent": "#8fb6cf",
      "accentInk": "#0d1519",
      "line": "rgba(242,235,223,.16)"
    },
    "radius": "4px",
    "radiusLg": "8px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Jost",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "12px",
      "caption": "13px",
      "small": "14.5px",
      "body": "16.5px",
      "h3": "22px",
      "h2": "30px",
      "h1": "48px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.18,
      "body": 1.66
    },
    "tracking": {
      "display": "-0.005em",
      "heading": "0",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 130,
      "baseMs": 240,
      "slowMs": 380,
      "easing": "cubic-bezier(0.22,0.72,0.24,1)",
      "easingPoints": [
        0.22,
        0.72,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 660,
        "easing": "cubic-bezier(0.22,0.72,0.24,1)",
        "offsetY": 20,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 800,
        "offsetY": 24,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 240,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — yalnız opacity"
    }
  },
  "letterpress-print": {
    "num": "133",
    "name": "Letterpress Print",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#f7f4ec",
      "bg2": "#ece7db",
      "surface": "#fdfbf5",
      "surface2": "#efeade",
      "ink": "#191713",
      "inkSoft": "#4a453d",
      "inkFaint": "#7a746a",
      "accent": "#2a2c6b",
      "accentInk": "#f3f2fb",
      "line": "rgba(25,23,19,.16)"
    },
    "dark": {
      "bg": "#14120f",
      "bg2": "#1d1a16",
      "surface": "#191612",
      "surface2": "#26221c",
      "ink": "#f4efe4",
      "inkSoft": "#b6afa2",
      "inkFaint": "#857f73",
      "accent": "#9fa2e8",
      "accentInk": "#0e0d1a",
      "line": "rgba(244,239,228,.16)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "inset 0 1px 0 var(--line)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cinzel",
      "body": "Lora",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "11px",
      "caption": "13px",
      "small": "14.5px",
      "body": "16.5px",
      "h3": "22px",
      "h2": "28px",
      "h1": "46px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.2,
      "body": 1.7
    },
    "tracking": {
      "display": "0.06em",
      "heading": "0.04em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 80,
      "baseMs": 160,
      "slowMs": 280,
      "easing": "cubic-bezier(0.7,0,0.3,1)",
      "easingPoints": [
        0.7,
        0,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 300,
        "easing": "cubic-bezier(0.7,0,0.3,1)",
        "offsetY": 2,
        "stagger": 0.035
      },
      "scroll": {
        "durationMs": 340,
        "offsetY": 6,
        "triggerPercent": 90,
        "once": true
      },
      "hover": {
        "durationMs": 110,
        "imageScale": 1.005
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — deboss statik kalır"
    }
  },
  "concrete-monolith": {
    "num": "134",
    "name": "Concrete Monolith",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#dedcd6",
      "bg2": "#d2cfc8",
      "surface": "#eae8e3",
      "surface2": "#c6c3bc",
      "ink": "#14161a",
      "inkSoft": "#3f4448",
      "inkFaint": "#6b7074",
      "accent": "#7a5a17",
      "accentInk": "#f9f5e9",
      "line": "rgba(20,22,26,.22)"
    },
    "dark": {
      "bg": "#1b1c1d",
      "bg2": "#232526",
      "surface": "#202223",
      "surface2": "#2c2e30",
      "ink": "#e8e7e3",
      "inkSoft": "#a9a8a4",
      "inkFaint": "#82837f",
      "accent": "#d9b463",
      "accentInk": "#1a1408",
      "line": "rgba(232,231,227,.16)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12.5px",
      "small": "14.5px",
      "body": "16px",
      "h3": "20px",
      "h2": "30px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.12,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 280,
      "slowMs": 460,
      "easing": "cubic-bezier(0.5,0.02,0.3,1)",
      "easingPoints": [
        0.5,
        0.02,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 950,
        "easing": "cubic-bezier(0.5,0.02,0.3,1)",
        "offsetY": 32,
        "stagger": 0.08
      },
      "scroll": {
        "durationMs": 1050,
        "offsetY": 28,
        "triggerPercent": 76,
        "once": true
      },
      "hover": {
        "durationMs": 340,
        "imageScale": 1.01
      },
      "pin": {
        "enabled": true,
        "scrub": 1.15
      },
      "reduced": "0.01ms — pin kapalı, kalıp izi statik"
    }
  },
  "enamel-porcelain": {
    "num": "135",
    "name": "Enamel Porcelain",
    "family": "Materyal & Lüks",
    "light": {
      "bg": "#f8f6f0",
      "bg2": "#efebe1",
      "surface": "#fffdf8",
      "surface2": "#f2eee4",
      "ink": "#131a18",
      "inkSoft": "#46514c",
      "inkFaint": "#757f7a",
      "accent": "#17543f",
      "accentInk": "#f1faf4",
      "line": "rgba(19,26,24,.14)"
    },
    "dark": {
      "bg": "#101612",
      "bg2": "#17201b",
      "surface": "#141a16",
      "surface2": "#1f2823",
      "ink": "#f0f4f1",
      "inkSoft": "#aeb8b2",
      "inkFaint": "#78837d",
      "accent": "#7fd2ae",
      "accentInk": "#08120d",
      "line": "rgba(240,244,241,.14)"
    },
    "radius": "6px",
    "radiusLg": "12px",
    "shadow": "0 1px 2px rgba(19,24,32,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poiret One",
      "body": "Nunito",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "19px",
      "h2": "26px",
      "h1": "40px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.2,
      "heading": 1.25,
      "body": 1.66
    },
    "tracking": {
      "display": "0.08em",
      "heading": "0.06em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 200,
      "slowMs": 340,
      "easing": "cubic-bezier(0.34,1.3,0.64,1)",
      "easingPoints": [
        0.34,
        1.3,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 440,
        "easing": "cubic-bezier(0.34,1.3,0.64,1)",
        "offsetY": 10,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 12,
        "triggerPercent": 87,
        "once": true
      },
      "hover": {
        "durationMs": 200,
        "imageScale": 1.025
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — highlight statik"
    }
  },
  "speculative-scifi": {
    "num": "136",
    "name": "Spekülatif Bilim-Kurgu",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#e9e8e2",
      "bg2": "#dfded6",
      "surface": "#f4f3ee",
      "surface2": "#eeede6",
      "ink": "#1c1a16",
      "inkSoft": "#524d42",
      "inkFaint": "#837c6d",
      "accent": "#8a5a12",
      "accentInk": "#fff6e6",
      "line": "rgba(28,26,22,.16)"
    },
    "dark": {
      "bg": "#14120e",
      "bg2": "#1a1813",
      "surface": "#211e17",
      "surface2": "#28241b",
      "ink": "#f0ece1",
      "inkSoft": "#bcb4a2",
      "inkFaint": "#8b8375",
      "accent": "#e0a33a",
      "accentInk": "#1a1405",
      "line": "rgba(240,236,225,.16)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Chakra Petch",
      "body": "Space Grotesk",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "16px",
      "h3": "21px",
      "h2": "30px",
      "h1": "46px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.22,
      "body": 1.58
    },
    "tracking": {
      "display": ".02em",
      "heading": ".04em",
      "body": "0",
      "label": ".16em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 200,
      "slowMs": 430,
      "easing": "cubic-bezier(0.58,0.02,0.34,1)",
      "easingPoints": [
        0.58,
        0.02,
        0.34,
        1
      ],
      "enter": {
        "durationMs": 410,
        "easing": "cubic-bezier(0.58,0.02,0.34,1)",
        "offsetY": 11,
        "stagger": 0.047
      },
      "scroll": {
        "durationMs": 430,
        "offsetY": 17,
        "triggerPercent": 99,
        "once": true
      },
      "hover": {
        "durationMs": 185,
        "imageScale": 1.011
      },
      "pin": {
        "enabled": true,
        "scrub": 0.58
      },
      "reduced": "0.01ms (tokens.css global) — kadran tiki ve pin statik kalır"
    }
  },
  "volumetric-data": {
    "num": "137",
    "name": "Hologram & Uzamsal Veri",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#0a1428",
      "bg2": "#0e1a32",
      "surface": "#122240",
      "surface2": "#17294a",
      "ink": "#e6eef8",
      "inkSoft": "#a6b8cf",
      "inkFaint": "#6f819a",
      "accent": "#ffb347",
      "accentInk": "#2a1500",
      "line": "rgba(230,238,248,.16)"
    },
    "dark": {
      "bg": "#010306",
      "bg2": "#04080f",
      "surface": "#0b1a2e",
      "surface2": "#112740",
      "ink": "#f7faff",
      "inkSoft": "#c3d3e6",
      "inkFaint": "#8b9db8",
      "accent": "#ffdf9e",
      "accentInk": "#1a1105",
      "line": "rgba(247,250,255,.20)"
    },
    "radius": "4px",
    "radiusLg": "10px",
    "shadow": "0 10px 30px rgba(3,10,22,.55)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "IBM Plex Mono",
      "body": "Jost",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "16px",
      "h3": "20px",
      "h2": "28px",
      "h1": "40px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.24,
      "body": 1.6
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".14em"
    },
    "motion": {
      "fastMs": 150,
      "baseMs": 380,
      "slowMs": 960,
      "easing": "cubic-bezier(0.24,0.02,0.18,1)",
      "easingPoints": [
        0.24,
        0.02,
        0.18,
        1
      ],
      "enter": {
        "durationMs": 960,
        "easing": "cubic-bezier(0.24,0.02,0.18,1)",
        "offsetY": 38,
        "stagger": 0.098
      },
      "scroll": {
        "durationMs": 890,
        "offsetY": 31,
        "triggerPercent": 63,
        "once": true
      },
      "hover": {
        "durationMs": 430,
        "imageScale": 1.029
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — dilim taraması ve izo-eğri çizimi durur"
    }
  },
  "agent-orchestration": {
    "num": "138",
    "name": "AI-native Ajan Arayüzü",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#f4f5f6",
      "bg2": "#eaecee",
      "surface": "#ffffff",
      "surface2": "#f7f8f9",
      "ink": "#16181c",
      "inkSoft": "#4b5158",
      "inkFaint": "#7c838b",
      "accent": "#3b3f8f",
      "accentInk": "#f6f7ff",
      "line": "rgba(22,24,28,.14)"
    },
    "dark": {
      "bg": "#101216",
      "bg2": "#15181d",
      "surface": "#1a1e24",
      "surface2": "#20252c",
      "ink": "#e9ecf0",
      "inkSoft": "#a8afb8",
      "inkFaint": "#78808a",
      "accent": "#8e93e8",
      "accentInk": "#0d0e20",
      "line": "rgba(233,236,240,.16)"
    },
    "radius": "6px",
    "radiusLg": "16px",
    "shadow": "0 1px 2px rgba(22,24,28,.08)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Mono",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "18px",
      "h2": "24px",
      "h1": "34px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.16,
      "heading": 1.3,
      "body": 1.55
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".06em"
    },
    "motion": {
      "fastMs": 105,
      "baseMs": 210,
      "slowMs": 380,
      "easing": "cubic-bezier(0.72,0.04,0.2,1)",
      "easingPoints": [
        0.72,
        0.04,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 270,
        "easing": "cubic-bezier(0.72,0.04,0.2,1)",
        "offsetY": 1,
        "stagger": 0.013
      },
      "scroll": {
        "durationMs": 290,
        "offsetY": 6,
        "triggerPercent": 61,
        "once": true
      },
      "hover": {
        "durationMs": 105,
        "imageScale": 1.001
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — iz satırları anında görünür"
    }
  },
  "bio-synthetic": {
    "num": "139",
    "name": "Biyo & Sentetik",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#0f1412",
      "bg2": "#141a17",
      "surface": "#19211d",
      "surface2": "#1f2924",
      "ink": "#e9f2ec",
      "inkSoft": "#a9bfb2",
      "inkFaint": "#75897e",
      "accent": "#c8f05f",
      "accentInk": "#141f07",
      "line": "rgba(233,242,236,.16)"
    },
    "dark": {
      "bg": "#020504",
      "bg2": "#050d08",
      "surface": "#0d1f16",
      "surface2": "#142e20",
      "ink": "#f6fdf8",
      "inkSoft": "#c6dccb",
      "inkFaint": "#93ab9c",
      "accent": "#a6f5c8",
      "accentInk": "#0d2418",
      "line": "rgba(246,253,248,.20)"
    },
    "radius": "20px",
    "radiusLg": "32px",
    "shadow": "0 14px 34px rgba(4,10,7,.55)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Baloo 2",
      "body": "Nunito",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "17px",
      "h3": "24px",
      "h2": "34px",
      "h1": "50px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.24,
      "body": 1.68
    },
    "tracking": {
      "display": "0",
      "heading": ".01em",
      "body": "0",
      "label": ".08em"
    },
    "motion": {
      "fastMs": 190,
      "baseMs": 420,
      "slowMs": 1080,
      "easing": "cubic-bezier(0.44,0.16,0.3,1)",
      "easingPoints": [
        0.44,
        0.16,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 1080,
        "easing": "cubic-bezier(0.44,0.16,0.3,1)",
        "offsetY": 46,
        "stagger": 0.146
      },
      "scroll": {
        "durationMs": 1070,
        "offsetY": 33,
        "triggerPercent": 60,
        "once": true
      },
      "hover": {
        "durationMs": 490,
        "imageScale": 1.043
      },
      "pin": {
        "enabled": true,
        "scrub": 1.18
      },
      "reduced": "0.01ms (tokens.css global) — zar halkası ve pin statik kalır"
    }
  },
  "anti-design": {
    "num": "14",
    "name": "Anti-Design",
    "family": "Cesur",
    "light": {
      "bg": "#f2e9da",
      "bg2": "#d6ff3f",
      "surface": "#ffffff",
      "surface2": "#ff3b6b",
      "ink": "#1b1b1b",
      "inkSoft": "#4a4a4a",
      "inkFaint": "#7b7b7b",
      "accent": "#ff3b6b",
      "accentInk": "#1b1b1b",
      "line": "#1b1b1b"
    },
    "dark": {
      "bg": "#111111",
      "bg2": "#c6ef2e",
      "surface": "#1c1c1c",
      "surface2": "#2d2d2c",
      "ink": "#f5f1e6",
      "inkSoft": "#b1aea6",
      "inkFaint": "#787671",
      "accent": "#ff3b6b",
      "accentInk": "#0d0d0d",
      "line": "#f5f1e6"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "8px 8px 0 #1b1b1b",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "40px",
      "64px",
      "96px"
    ],
    "fonts": {
      "display": "Anton",
      "body": "Space Grotesk",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "15px",
      "body": "15px",
      "h3": "22px",
      "h2": "56px",
      "h1": "104px",
      "h1Mobile": "48px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 0.86,
      "heading": 0.9,
      "body": 1.55
    },
    "tracking": {
      "display": "-0.03em",
      "heading": "-0.02em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 160,
      "slowMs": 240,
      "easing": "steps(3, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 340,
        "easing": "steps(3, end)",
        "offsetY": 16,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 400,
        "offsetY": 16,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 110,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "nanotech": {
    "num": "140",
    "name": "Nanoteknik",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#f7f7f5",
      "bg2": "#edede9",
      "surface": "#ffffff",
      "surface2": "#f4f4f1",
      "ink": "#191b1e",
      "inkSoft": "#4d5257",
      "inkFaint": "#7f858a",
      "accent": "#22272c",
      "accentInk": "#f7f7f5",
      "line": "rgba(25,27,30,.16)"
    },
    "dark": {
      "bg": "#0c0d0f",
      "bg2": "#111316",
      "surface": "#16181b",
      "surface2": "#1c1f23",
      "ink": "#eef0f2",
      "inkSoft": "#a9aeb4",
      "inkFaint": "#767c83",
      "accent": "#e6e9ec",
      "accentInk": "#101215",
      "line": "rgba(238,240,242,.16)"
    },
    "radius": "3px",
    "radiusLg": "8px",
    "shadow": "0 1px 2px rgba(25,27,30,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Jost",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "27px",
      "h1": "42px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.22,
      "body": 1.6
    },
    "tracking": {
      "display": "-.01em",
      "heading": ".02em",
      "body": "0",
      "label": ".12em"
    },
    "motion": {
      "fastMs": 130,
      "baseMs": 300,
      "slowMs": 610,
      "easing": "cubic-bezier(0.62,0.06,0.28,0.98)",
      "easingPoints": [
        0.62,
        0.06,
        0.28,
        0.98
      ],
      "enter": {
        "durationMs": 610,
        "easing": "cubic-bezier(0.62,0.06,0.28,0.98)",
        "offsetY": 21,
        "stagger": 0.031
      },
      "scroll": {
        "durationMs": 670,
        "offsetY": 23,
        "triggerPercent": 59,
        "once": true
      },
      "hover": {
        "durationMs": 155,
        "imageScale": 1.007
      },
      "pin": {
        "enabled": true,
        "scrub": 0.4
      },
      "reduced": "0.01ms (tokens.css global) — kafes noktaları ve pin statik kalır"
    }
  },
  "planetary-service": {
    "num": "141",
    "name": "Planetary Service",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#0a1420",
      "bg2": "#0e1a28",
      "surface": "#12202f",
      "surface2": "#182a3c",
      "ink": "#e6eef7",
      "inkSoft": "#a4b6c8",
      "inkFaint": "#75899e",
      "accent": "#2f6bc4",
      "accentInk": "#ffffff",
      "line": "rgba(230,238,247,.15)"
    },
    "dark": {
      "bg": "#010307",
      "bg2": "#040a12",
      "surface": "#0a1a2b",
      "surface2": "#102538",
      "ink": "#f5f9fe",
      "inkSoft": "#c0cfdf",
      "inkFaint": "#8ea1b6",
      "accent": "#a8d0ff",
      "accentInk": "#04101f",
      "line": "rgba(245,249,254,.22)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "0 16px 36px -30px rgba(2,6,12,.95)",
    "shadowHard": "0 0 0 1px var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "IBM Plex Mono",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "18px",
      "h2": "24px",
      "h1": "42px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.24,
      "body": 1.55
    },
    "tracking": {
      "display": "0.04em",
      "heading": "0.02em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 190,
      "slowMs": 300,
      "easing": "cubic-bezier(0.24,0.72,0.18,1)",
      "easingPoints": [
        0.24,
        0.72,
        0.18,
        1
      ],
      "enter": {
        "durationMs": 570,
        "easing": "cubic-bezier(0.24,0.72,0.18,1)",
        "offsetY": 22,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 670,
        "offsetY": 26,
        "triggerPercent": 81,
        "once": true
      },
      "hover": {
        "durationMs": 190,
        "imageScale": 1.022
      },
      "pin": {
        "enabled": true,
        "scrub": 0.85
      },
      "reduced": "0.01ms (tokens.css global) — yörünge dönüşü ve scrub kapanır"
    }
  },
  "quantum-lab": {
    "num": "142",
    "name": "Quantum Lab",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#9b99a3",
      "bg2": "#92909a",
      "surface": "#a6a4ae",
      "surface2": "#86848e",
      "ink": "#14121a",
      "inkSoft": "#2f2c38",
      "inkFaint": "#4a4753",
      "accent": "#5b3fa8",
      "accentInk": "#ffffff",
      "line": "rgba(20,18,26,.24)"
    },
    "dark": {
      "bg": "#191822",
      "bg2": "#1f1e29",
      "surface": "#26242f",
      "surface2": "#2e2c38",
      "ink": "#ece9f2",
      "inkSoft": "#b4b0c0",
      "inkFaint": "#8a8698",
      "accent": "#a48bff",
      "accentInk": "#120a26",
      "line": "rgba(236,233,242,.17)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "0 0 0 1px var(--ink)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Courier Prime",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "25px",
      "h1": "40px",
      "h1Mobile": "25px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.24,
      "body": 1.58
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 95,
      "baseMs": 160,
      "slowMs": 240,
      "easing": "cubic-bezier(0.5,0.05,0.3,1)",
      "easingPoints": [
        0.5,
        0.05,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 290,
        "easing": "cubic-bezier(0.5,0.05,0.3,1)",
        "offsetY": 0,
        "stagger": 0.035
      },
      "scroll": {
        "durationMs": 350,
        "offsetY": 8,
        "triggerPercent": 89,
        "once": true
      },
      "hover": {
        "durationMs": 105,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — bulut donar, çubuklar anında çizilir"
    }
  },
  "retro-future": {
    "num": "143",
    "name": "Retro Future",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#f3ecdd",
      "bg2": "#ece3d0",
      "surface": "#faf5e9",
      "surface2": "#e8dfca",
      "ink": "#1b1710",
      "inkSoft": "#4f4737",
      "inkFaint": "#857a63",
      "accent": "#7a5c04",
      "accentInk": "#ffffff",
      "line": "rgba(27,23,16,.16)"
    },
    "dark": {
      "bg": "#16130d",
      "bg2": "#1c1811",
      "surface": "#221d14",
      "surface2": "#2a241a",
      "ink": "#f4eddc",
      "inkSoft": "#c2b69c",
      "inkFaint": "#918872",
      "accent": "#e8b93f",
      "accentInk": "#1a1405",
      "line": "rgba(244,237,220,.16)"
    },
    "radius": "20px",
    "radiusLg": "28px",
    "shadow": "0 20px 44px -34px rgba(27,23,16,.55)",
    "shadowHard": "0 3px 0 var(--ink)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Jost",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "21px",
      "h2": "30px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.16,
      "body": 1.62
    },
    "tracking": {
      "display": "0.1em",
      "heading": "0.06em",
      "body": "0",
      "label": "0.22em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 240,
      "slowMs": 340,
      "easing": "cubic-bezier(0.3,1.2,0.4,1)",
      "easingPoints": [
        0.3,
        1.2,
        0.4,
        1
      ],
      "enter": {
        "durationMs": 610,
        "easing": "cubic-bezier(0.3,1.2,0.4,1)",
        "offsetY": 16,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 700,
        "offsetY": 18,
        "triggerPercent": 77,
        "once": true
      },
      "hover": {
        "durationMs": 340,
        "imageScale": 1.035
      },
      "pin": {
        "enabled": true,
        "scrub": 1.1
      },
      "reduced": "0.01ms (tokens.css global) — yörünge yayı ve iz kapanır"
    }
  },
  "virtual-engine": {
    "num": "144",
    "name": "Virtual Engine",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#120c1c",
      "bg2": "#181024",
      "surface": "#1d142b",
      "surface2": "#251a36",
      "ink": "#eee8fa",
      "inkSoft": "#b3a7c9",
      "inkFaint": "#7f7395",
      "accent": "#c7307f",
      "accentInk": "#ffffff",
      "line": "rgba(238,232,250,.15)"
    },
    "dark": {
      "bg": "#030206",
      "bg2": "#07040d",
      "surface": "#140c22",
      "surface2": "#1d1230",
      "ink": "#faf6ff",
      "inkSoft": "#cfc2e2",
      "inkFaint": "#9a8db2",
      "accent": "#ff9fcb",
      "accentInk": "#1f0612",
      "line": "rgba(250,246,255,.22)"
    },
    "radius": "8px",
    "radiusLg": "14px",
    "shadow": "0 14px 30px -26px rgba(4,1,10,.95)",
    "shadowHard": "0 0 0 1px var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "VT323",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "20px",
      "h2": "28px",
      "h1": "46px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.2,
      "body": 1.54
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 70,
      "baseMs": 130,
      "slowMs": 200,
      "easing": "steps(6, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 210,
        "easing": "steps(6, end)",
        "offsetY": 32,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 240,
        "offsetY": 40,
        "triggerPercent": 95,
        "once": true
      },
      "hover": {
        "durationMs": 70,
        "imageScale": 1.05
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — sahne ızgarası ve kare geçişleri durur"
    }
  },
  "zero-gravity": {
    "num": "145",
    "name": "Zero Gravity",
    "family": "Deneysel & Gelecek",
    "light": {
      "bg": "#eef4f2",
      "bg2": "#e3ecea",
      "surface": "#f8fbfa",
      "surface2": "#dfe9e6",
      "ink": "#0f1a19",
      "inkSoft": "#3f5450",
      "inkFaint": "#74857f",
      "accent": "#1d6b52",
      "accentInk": "#ffffff",
      "line": "rgba(15,26,25,.13)"
    },
    "dark": {
      "bg": "#0b1514",
      "bg2": "#101d1b",
      "surface": "#142321",
      "surface2": "#1a2c29",
      "ink": "#e9f4f1",
      "inkSoft": "#a9c2bb",
      "inkFaint": "#7c968f",
      "accent": "#6fd3a8",
      "accentInk": "#05170f",
      "line": "rgba(233,244,241,.16)"
    },
    "radius": "28px",
    "radiusLg": "36px",
    "shadow": "0 30px 70px -48px rgba(8,26,24,.6)",
    "shadowHard": "0 0 0 1px var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poiret One",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "27px",
      "h1": "48px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.22,
      "body": 1.66
    },
    "tracking": {
      "display": "0.06em",
      "heading": "0.03em",
      "body": "0",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 200,
      "baseMs": 320,
      "slowMs": 460,
      "easing": "cubic-bezier(0.2,0.7,0.15,1)",
      "easingPoints": [
        0.2,
        0.7,
        0.15,
        1
      ],
      "enter": {
        "durationMs": 1080,
        "easing": "cubic-bezier(0.2,0.7,0.15,1)",
        "offsetY": 36,
        "stagger": 0.14
      },
      "scroll": {
        "durationMs": 1050,
        "offsetY": 30,
        "triggerPercent": 74,
        "once": true
      },
      "hover": {
        "durationMs": 480,
        "imageScale": 1.018
      },
      "pin": {
        "enabled": true,
        "scrub": 1.32
      },
      "reduced": "0.01ms (tokens.css global) — yüzme ve scrub kapanır, kartlar sabitlenir"
    }
  },
  "noir-estate": {
    "num": "146",
    "name": "Noir Estate",
    "family": "Sahne & Prestij",
    "light": {
      "bg": "#0d0b09",
      "bg2": "#070605",
      "surface": "#171310",
      "surface2": "#211b15",
      "ink": "#f5f0e7",
      "inkSoft": "#c7bca9",
      "inkFaint": "#8f8574",
      "accent": "#d3af62",
      "accentInk": "#170f04",
      "line": "rgba(245,240,231,.14)"
    },
    "dark": {
      "bg": "#060505",
      "bg2": "#030303",
      "surface": "#0f0d0b",
      "surface2": "#17130f",
      "ink": "#faf6ef",
      "inkSoft": "#d2c8b7",
      "inkFaint": "#9c9283",
      "accent": "#e9c882",
      "accentInk": "#17100a",
      "line": "rgba(250,246,239,.16)"
    },
    "radius": "6px",
    "radiusLg": "16px",
    "shadow": "0 18px 48px -28px rgba(0,0,0,.95)",
    "shadowHard": "0 0 0 1px color-mix(in srgb, var(--accent) 55%, transparent)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Jost",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "26px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 300
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.18,
      "body": 1.6
    },
    "tracking": {
      "display": ".01em",
      "heading": ".01em",
      "body": "0",
      "label": ".22em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 320,
      "slowMs": 880,
      "easing": "cubic-bezier(0.16,0.84,0.28,1)",
      "easingPoints": [
        0.16,
        0.84,
        0.28,
        1
      ],
      "enter": {
        "durationMs": 880,
        "easing": "cubic-bezier(0.16,0.84,0.28,1)",
        "offsetY": 14,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 900,
        "offsetY": 10,
        "triggerPercent": 72,
        "once": true
      },
      "hover": {
        "durationMs": 260,
        "imageScale": 1.014
      },
      "pin": {
        "enabled": true,
        "scrub": 1.22
      },
      "reduced": "0.01ms — perde ve parallax kapalı, içerik anında"
    }
  },
  "agency-portfolio": {
    "num": "147",
    "name": "Agency Portfolio",
    "family": "Sahne & Prestij",
    "light": {
      "bg": "#f3f1ec",
      "bg2": "#eae7e0",
      "surface": "#ffffff",
      "surface2": "#e4e0d7",
      "ink": "#0e0e0d",
      "inkSoft": "#55534d",
      "inkFaint": "#8b8880",
      "accent": "#1f45d6",
      "accentInk": "#ffffff",
      "line": "rgba(14,14,13,.14)"
    },
    "dark": {
      "bg": "#0a0a0a",
      "bg2": "#050505",
      "surface": "#141414",
      "surface2": "#1d1d1d",
      "ink": "#f6f5f2",
      "inkSoft": "#b6b3ac",
      "inkFaint": "#85827c",
      "accent": "#7d93ff",
      "accentInk": "#08091a",
      "line": "rgba(246,245,242,.16)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "0 0 0 1px var(--ink)",
    "shadowHard": "0 0 0 2px var(--accent)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "24px",
      "h2": "36px",
      "h1": "72px",
      "h1Mobile": "36px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.1,
      "body": 1.6
    },
    "tracking": {
      "display": "-.02em",
      "heading": "-.01em",
      "body": "0",
      "label": ".14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 240,
      "slowMs": 620,
      "easing": "cubic-bezier(0.2,0.8,0.2,1)",
      "easingPoints": [
        0.2,
        0.8,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 620,
        "easing": "cubic-bezier(0.2,0.8,0.2,1)",
        "offsetY": 20,
        "stagger": 0.04
      },
      "scroll": {
        "durationMs": 540,
        "offsetY": 16,
        "triggerPercent": 80,
        "once": true
      },
      "hover": {
        "durationMs": 180,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": 0
      },
      "reduced": "0.01ms — harf kademesi ve ızgara stagger kapalı, içerik anında"
    }
  },
  "product-launch": {
    "num": "148",
    "name": "Product Launch",
    "family": "Sahne & Prestij",
    "light": {
      "bg": "#070b14",
      "bg2": "#04070e",
      "surface": "#0e1522",
      "surface2": "#16202f",
      "ink": "#eef3fb",
      "inkSoft": "#b3c1d6",
      "inkFaint": "#7d8ba1",
      "accent": "#6fe8b8",
      "accentInk": "#04140d",
      "line": "rgba(238,243,251,.12)"
    },
    "dark": {
      "bg": "#04070c",
      "bg2": "#020408",
      "surface": "#0a111b",
      "surface2": "#121b27",
      "ink": "#f2f7fd",
      "inkSoft": "#bcc9dc",
      "inkFaint": "#8695aa",
      "accent": "#8bf2c9",
      "accentInk": "#04140d",
      "line": "rgba(242,247,253,.14)"
    },
    "radius": "10px",
    "radiusLg": "24px",
    "shadow": "0 24px 60px -32px rgba(0,0,0,.9)",
    "shadowHard": "0 0 0 1px color-mix(in srgb, var(--accent) 45%, transparent), 0 10px 30px -18px color-mix(in srgb, var(--accent) 55%, transparent)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Grotesk",
      "body": "Poppins",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "22px",
      "h2": "32px",
      "h1": "52px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.14,
      "body": 1.6
    },
    "tracking": {
      "display": "-.01em",
      "heading": "-.005em",
      "body": "0",
      "label": ".18em"
    },
    "motion": {
      "fastMs": 130,
      "baseMs": 300,
      "slowMs": 740,
      "easing": "cubic-bezier(0.22,0.9,0.24,1)",
      "easingPoints": [
        0.22,
        0.9,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 740,
        "easing": "cubic-bezier(0.22,0.9,0.24,1)",
        "offsetY": 24,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 700,
        "offsetY": 18,
        "triggerPercent": 76,
        "once": true
      },
      "hover": {
        "durationMs": 220,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": 0
      },
      "reduced": "0.01ms — scale-settle ve scroll-zoom kapalı, panel anında"
    }
  },
  "boutique-hotel": {
    "num": "149",
    "name": "Boutique Hotel",
    "family": "Sahne & Prestij",
    "light": {
      "bg": "#16110c",
      "bg2": "#100c08",
      "surface": "#211a13",
      "surface2": "#2b2219",
      "ink": "#f3e9dc",
      "inkSoft": "#c8b7a3",
      "inkFaint": "#94836f",
      "accent": "#d97f4e",
      "accentInk": "#1a0b04",
      "line": "rgba(243,233,220,.14)"
    },
    "dark": {
      "bg": "#0e0a07",
      "bg2": "#080605",
      "surface": "#17120d",
      "surface2": "#211a13",
      "ink": "#f8f0e6",
      "inkSoft": "#d3c2ae",
      "inkFaint": "#9e8d79",
      "accent": "#e89567",
      "accentInk": "#1a0b04",
      "line": "rgba(248,240,230,.16)"
    },
    "radius": "2px",
    "radiusLg": "10px",
    "shadow": "0 16px 40px -26px rgba(0,0,0,.9)",
    "shadowHard": "0 0 0 1px color-mix(in srgb, var(--accent) 50%, transparent)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Playfair Display",
      "body": "Nunito",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "21px",
      "h2": "30px",
      "h1": "46px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.2,
      "body": 1.65
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": ".20em"
    },
    "motion": {
      "fastMs": 150,
      "baseMs": 340,
      "slowMs": 1020,
      "easing": "cubic-bezier(0.3,0.02,0.2,1)",
      "easingPoints": [
        0.3,
        0.02,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 1020,
        "easing": "cubic-bezier(0.3,0.02,0.2,1)",
        "offsetY": 10,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 1000,
        "offsetY": 8,
        "triggerPercent": 68,
        "once": true
      },
      "hover": {
        "durationMs": 300,
        "imageScale": 1.018
      },
      "pin": {
        "enabled": false,
        "scrub": 0
      },
      "reduced": "0.01ms — blur-in ve parallax kapalı, görsel anında net"
    }
  },
  "acid-graphics": {
    "num": "15",
    "name": "Acid Graphics",
    "family": "Cesur",
    "light": {
      "bg": "#050505",
      "bg2": "#101010",
      "surface": "#0e0e0e",
      "surface2": "#161616",
      "ink": "#f2fff0",
      "inkSoft": "rgba(242,255,240,.72)",
      "inkFaint": "rgba(242,255,240,.45)",
      "accent": "#ccff00",
      "accentInk": "#050505",
      "line": "rgba(204,255,0,.35)"
    },
    "dark": {
      "bg": "#030303",
      "bg2": "#0a0a0a",
      "surface": "#070707",
      "surface2": "#101010",
      "ink": "#f6fff4",
      "inkSoft": "#c8d6c6",
      "inkFaint": "#8f9c8e",
      "accent": "#d8ff2e",
      "accentInk": "#050505",
      "line": "rgba(216,255,46,.30)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "0 0 24px rgba(204,255,0,.25)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "16px",
      "24px",
      "40px",
      "64px",
      "96px"
    ],
    "fonts": {
      "display": "Archivo Expanded",
      "body": "Space Grotesk",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "44px",
      "h1": "88px",
      "h1Mobile": "40px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 0.9,
      "heading": 0.95,
      "body": 1.6
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 160,
      "slowMs": 240,
      "easing": "steps(4, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 250,
        "easing": "steps(4, end)",
        "offsetY": 4,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 240,
        "offsetY": 16,
        "triggerPercent": 90,
        "once": true
      },
      "hover": {
        "durationMs": 80,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "scanline ve glitch kapanır"
    }
  },
  "lookbook-editorial": {
    "num": "150",
    "name": "Lookbook Editorial",
    "family": "Sahne & Prestij",
    "light": {
      "bg": "#efebe4",
      "bg2": "#e6e1d8",
      "surface": "#f7f4ef",
      "surface2": "#ffffff",
      "ink": "#13110f",
      "inkSoft": "#5a554e",
      "inkFaint": "#857f76",
      "accent": "#a8402a",
      "accentInk": "#fdf6f2",
      "line": "rgba(19,17,15,.14)"
    },
    "dark": {
      "bg": "#0c0b0a",
      "bg2": "#080706",
      "surface": "#151312",
      "surface2": "#1e1c1a",
      "ink": "#f2ede6",
      "inkSoft": "#bcb4aa",
      "inkFaint": "#8a837a",
      "accent": "#e0704f",
      "accentInk": "#140703",
      "line": "rgba(242,237,230,.16)"
    },
    "radius": "0px",
    "radiusLg": "4px",
    "shadow": "0 0 0 1px var(--ink)",
    "shadowHard": "0 0 0 1px var(--accent)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "17px",
      "h3": "24px",
      "h2": "38px",
      "h1": "62px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.14,
      "body": 1.7
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".18em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 280,
      "slowMs": 700,
      "easing": "cubic-bezier(0.4,0,0.15,1)",
      "easingPoints": [
        0.4,
        0,
        0.15,
        1
      ],
      "enter": {
        "durationMs": 700,
        "easing": "cubic-bezier(0.4,0,0.15,1)",
        "offsetY": 12,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 620,
        "offsetY": 14,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 160,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": 0
      },
      "reduced": "0.01ms — satır maskesi ve mask-wipe kapalı, içerik anında"
    }
  },
  "dark-dashboard": {
    "num": "151",
    "name": "Dark Dashboard",
    "family": "Sahne & Prestij",
    "light": {
      "bg": "#0b0d10",
      "bg2": "#07090b",
      "surface": "#12161a",
      "surface2": "#1a2026",
      "ink": "#e9eef4",
      "inkSoft": "#a9b6c2",
      "inkFaint": "#75818d",
      "accent": "#58c8ff",
      "accentInk": "#04141f",
      "line": "rgba(233,238,244,.12)"
    },
    "dark": {
      "bg": "#06080a",
      "bg2": "#040506",
      "surface": "#0d1014",
      "surface2": "#151a20",
      "ink": "#f0f5fa",
      "inkSoft": "#b6c2ce",
      "inkFaint": "#818d99",
      "accent": "#7ad6ff",
      "accentInk": "#04141f",
      "line": "rgba(240,245,250,.14)"
    },
    "radius": "8px",
    "radiusLg": "14px",
    "shadow": "0 20px 48px -30px rgba(0,0,0,.9)",
    "shadowHard": "0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "20px",
      "h2": "26px",
      "h1": "34px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.22,
      "body": 1.55
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".16em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 220,
      "slowMs": 480,
      "easing": "cubic-bezier(0.25,0.6,0.2,1)",
      "easingPoints": [
        0.25,
        0.6,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 480,
        "easing": "cubic-bezier(0.25,0.6,0.2,1)",
        "offsetY": 16,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 440,
        "offsetY": 12,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 140,
        "imageScale": 1.01
      },
      "pin": {
        "enabled": false,
        "scrub": 0
      },
      "reduced": "0.01ms — giriş ve reveal kapalı, veri anında"
    }
  },
  "memphis": {
    "num": "16",
    "name": "Memphis",
    "family": "Cesur",
    "light": {
      "bg": "#fff6e9",
      "bg2": "#ffe8cc",
      "surface": "#ffffff",
      "surface2": "#ffd400",
      "ink": "#111111",
      "inkSoft": "#3d3d3d",
      "inkFaint": "#767676",
      "accent": "#ff4e50",
      "accentInk": "#111111",
      "line": "#111111"
    },
    "dark": {
      "bg": "#141210",
      "bg2": "#22201d",
      "surface": "#1e1a16",
      "surface2": "#e8c000",
      "ink": "#fff6e9",
      "inkSoft": "#b9b2a8",
      "inkFaint": "#7e7972",
      "accent": "#ff4e50",
      "accentInk": "#0d0d0d",
      "line": "#fff6e9"
    },
    "radius": "10px",
    "radiusLg": "18px",
    "shadow": "3px 3px 0 #111111",
    "shadowHard": "0 0 0 #111111",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poppins",
      "body": "Poppins",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "32px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.05,
      "heading": 1.1,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 180,
      "slowMs": 260,
      "easing": "cubic-bezier(0.34,1.6,0.64,1)",
      "easingPoints": [
        0.34,
        1.6,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 300,
        "easing": "cubic-bezier(0.34,1.6,0.64,1)",
        "offsetY": 14,
        "stagger": 0.04
      },
      "scroll": {
        "durationMs": 280,
        "offsetY": 16,
        "triggerPercent": 87,
        "once": true
      },
      "hover": {
        "durationMs": 100,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "ölçek kapanır, yalnız opacity"
    }
  },
  "maximalism": {
    "num": "17",
    "name": "Maximalism",
    "family": "Cesur",
    "light": {
      "bg": "#f6e7d8",
      "bg2": "#e8cfae",
      "surface": "#fffaf3",
      "surface2": "#f2c14e",
      "ink": "#221410",
      "inkSoft": "#57403a",
      "inkFaint": "#8f7a72",
      "accent": "#7a1f3d",
      "accentInk": "#f6e7d8",
      "line": "rgba(34,20,16,.2)"
    },
    "dark": {
      "bg": "#1a1310",
      "bg2": "#27201c",
      "surface": "#241a15",
      "surface2": "#c79b33",
      "ink": "#f6e7d8",
      "inkSoft": "#b4a79c",
      "inkFaint": "#7d726a",
      "accent": "#a8385a",
      "accentInk": "#ffffff",
      "line": "rgba(246,231,216,.14)"
    },
    "radius": "6px",
    "radiusLg": "14px",
    "shadow": "6px 6px 0 rgba(34,20,16,.85)",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Playfair Display",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "13px",
      "small": "15px",
      "body": "16px",
      "quote": "22px",
      "h2": "40px",
      "h1": "68px",
      "h1Mobile": "36px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1,
      "heading": 1.05,
      "body": 1.6,
      "quote": 1.4
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 240,
      "slowMs": 360,
      "easing": "cubic-bezier(0.2,0.6,0.2,1)",
      "easingPoints": [
        0.2,
        0.6,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 420,
        "easing": "cubic-bezier(0.2,0.6,0.2,1)",
        "offsetY": 20,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 16,
        "triggerPercent": 84,
        "once": true
      },
      "hover": {
        "durationMs": 140,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "motif animasyonu kapalı"
    }
  },
  "dopamine-ui": {
    "num": "18",
    "name": "Dopamine UI",
    "family": "Cesur",
    "light": {
      "bg": "#fffdf7",
      "bg2": "#fff3d6",
      "surface": "#ffffff",
      "surface2": "#ffe3ec",
      "ink": "#16121f",
      "inkSoft": "#4a4358",
      "inkFaint": "#837b93",
      "accent": "#ff3d71",
      "accentInk": "#16121f",
      "line": "rgba(22,18,31,.10)"
    },
    "dark": {
      "bg": "#14101a",
      "bg2": "#221e27",
      "surface": "#211b2b",
      "surface2": "#3a2430",
      "ink": "#fdf7f9",
      "inkSoft": "#b9b1c6",
      "inkFaint": "#7d787e",
      "accent": "#ff5d8a",
      "accentInk": "#0d0d0d",
      "line": "rgba(253,247,249,.14)"
    },
    "radius": "18px",
    "radiusLg": "24px",
    "shadow": "0 10px 24px rgba(255,61,113,.18)",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poppins",
      "body": "Poppins",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "19px",
      "h2": "28px",
      "h1": "48px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.15,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 240,
      "slowMs": 400,
      "easing": "cubic-bezier(0.34,1.4,0.64,1)",
      "easingPoints": [
        0.34,
        1.4,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 360,
        "easing": "cubic-bezier(0.34,1.4,0.64,1)",
        "offsetY": 18,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 300,
        "offsetY": 16,
        "triggerPercent": 89,
        "once": true
      },
      "hover": {
        "durationMs": 130,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "ödül animasyonu ve konfeti kapalı"
    }
  },
  "y2k": {
    "num": "19",
    "name": "Y2K",
    "family": "Retro",
    "light": {
      "bg": "#eaf4ff",
      "bg2": "#d9e9ff",
      "surface": "#ffffff",
      "surface2": "#e6f0ff",
      "ink": "#1b2340",
      "inkSoft": "#4b557a",
      "inkFaint": "#8b94b5",
      "accent": "#6f4de8",
      "accentInk": "#ffffff",
      "line": "rgba(90,120,220,.35)"
    },
    "dark": {
      "bg": "#0b1024",
      "bg2": "#181e31",
      "surface": "#141a33",
      "surface2": "#252b43",
      "ink": "#eaf2ff",
      "inkSoft": "#a7aebd",
      "inkFaint": "#6f7687",
      "accent": "#8b74ff",
      "accentInk": "#0d0d0d",
      "line": "rgba(234,242,255,.14)"
    },
    "radius": "20px",
    "radiusLg": "28px",
    "shadow": "0 6px 18px rgba(120,150,255,.35), inset 0 1px 0 #ffffff",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "19px",
      "h2": "28px",
      "h1": "52px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 220,
      "slowMs": 300,
      "easing": "cubic-bezier(0.34,1.4,0.64,1)",
      "easingPoints": [
        0.34,
        1.4,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 400,
        "easing": "linear",
        "offsetY": 12,
        "stagger": 0.04
      },
      "scroll": {
        "durationMs": 550,
        "offsetY": 20,
        "triggerPercent": 84,
        "once": true
      },
      "hover": {
        "durationMs": 140,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "yay kapanır, 0.01ms"
    }
  },
  "vaporwave": {
    "num": "20",
    "name": "Vaporwave",
    "family": "Retro",
    "light": {
      "bg": "#1a1230",
      "bg2": "#2a1b4d",
      "surface": "rgba(185,167,224,.14)",
      "surface2": "rgba(242,160,192,.12)",
      "ink": "#f6efff",
      "inkSoft": "rgba(246,239,255,.74)",
      "inkFaint": "rgba(246,239,255,.5)",
      "accent": "#f2a0c0",
      "accentInk": "#2a1b4d",
      "line": "rgba(242,160,192,.4)"
    },
    "dark": {
      "bg": "#0c0718",
      "bg2": "#170f2e",
      "surface": "rgba(185,167,224,.12)",
      "surface2": "rgba(242,160,192,.10)",
      "ink": "#fbf4ff",
      "inkSoft": "rgba(251,244,255,.76)",
      "inkFaint": "rgba(251,244,255,.52)",
      "accent": "#ff9ec6",
      "accentInk": "#2a1b4d",
      "line": "rgba(255,158,198,.34)"
    },
    "radius": "6px",
    "radiusLg": "14px",
    "shadow": "0 10px 40px rgba(107,78,155,.45)",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "88px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Poppins",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "26px",
      "h1": "46px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.2,
      "heading": 1.25,
      "body": 1.7
    },
    "tracking": {
      "display": "0.14em",
      "heading": "0.12em",
      "body": "0.01em",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 480,
      "slowMs": 600,
      "easing": "ease-in-out",
      "easingPoints": [
        0.42,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 650,
        "easing": "ease-in-out",
        "offsetY": 20,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 700,
        "offsetY": 20,
        "triggerPercent": 78,
        "once": true
      },
      "hover": {
        "durationMs": 260,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "motif durur"
    }
  },
  "synthwave": {
    "num": "21",
    "name": "Synthwave",
    "family": "Retro",
    "light": {
      "bg": "#120458",
      "bg2": "#2b1055",
      "surface": "#1b0a63",
      "surface2": "#2a1178",
      "ink": "#fdfdff",
      "inkSoft": "rgba(253,253,255,.78)",
      "inkFaint": "rgba(253,253,255,.52)",
      "accent": "#ff2a6d",
      "accentInk": "#120458",
      "line": "rgba(5,217,232,.55)"
    },
    "dark": {
      "bg": "#0a0330",
      "bg2": "#1c0a44",
      "surface": "#12064a",
      "surface2": "#1e0c5c",
      "ink": "#fdfdff",
      "inkSoft": "rgba(253,253,255,.80)",
      "inkFaint": "rgba(253,253,255,.54)",
      "accent": "#ff4f86",
      "accentInk": "#120458",
      "line": "rgba(5,217,232,.48)"
    },
    "radius": "4px",
    "radiusLg": "10px",
    "shadow": "0 0 12px rgba(255,42,109,.65), 0 0 32px rgba(5,217,232,.35)",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "88px"
    ],
    "fonts": {
      "display": "Outrun",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "34px",
      "h1": "64px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 1.05,
      "heading": 1.1,
      "body": 1.6
    },
    "tracking": {
      "display": "0.06em",
      "heading": "0.06em",
      "body": "0.01em",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 260,
      "slowMs": 320,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 500,
        "easing": "linear",
        "offsetY": 16,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 600,
        "offsetY": 20,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 180,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "ızgara ve nabız durur"
    }
  },
  "cyberpunk": {
    "num": "22",
    "name": "Cyberpunk",
    "family": "Retro",
    "light": {
      "bg": "#0b0b0f",
      "bg2": "#15151d",
      "surface": "rgba(20,20,28,.85)",
      "surface2": "#1b1b26",
      "ink": "#f2f5f7",
      "inkSoft": "rgba(242,245,247,.76)",
      "inkFaint": "rgba(242,245,247,.5)",
      "accent": "#f9f002",
      "accentInk": "#0b0b0f",
      "line": "rgba(5,217,232,.55)"
    },
    "dark": {
      "bg": "#0b0b0f",
      "bg2": "#15151d",
      "surface": "rgba(20,20,28,.85)",
      "surface2": "#1b1b26",
      "ink": "#f2f5f7",
      "inkSoft": "rgba(242,245,247,.76)",
      "inkFaint": "rgba(242,245,247,.5)",
      "accent": "#f9f002",
      "accentInk": "#0b0b0f",
      "line": "rgba(5,217,232,.55)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "0 0 16px rgba(5,217,232,.35)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Chakra Petch",
      "body": "IBM Plex Mono",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "9px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "17px",
      "h2": "30px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.05,
      "heading": 1.15,
      "body": 1.65
    },
    "tracking": {
      "display": "0.10em",
      "heading": "0.10em",
      "body": "0.01em",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 180,
      "slowMs": 240,
      "easing": "steps(3, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 280,
        "easing": "steps(3, end)",
        "offsetY": 10,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 20,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 90,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "glitch ve scanline durur"
    }
  },
  "cybercore": {
    "num": "23",
    "name": "Cybercore",
    "family": "Retro",
    "light": {
      "bg": "#05080a",
      "bg2": "#0a1014",
      "surface": "#0a1014",
      "surface2": "#0f171c",
      "ink": "#d7ffe9",
      "inkSoft": "#86c9a6",
      "inkFaint": "#4d7a63",
      "accent": "#33ff99",
      "accentInk": "#05080a",
      "line": "rgba(51,255,153,.35)"
    },
    "dark": {
      "bg": "#030507",
      "bg2": "#070d10",
      "surface": "#070d10",
      "surface2": "#0b1419",
      "ink": "#e6fff2",
      "inkSoft": "#93d7b3",
      "inkFaint": "#58876e",
      "accent": "#4dffab",
      "accentInk": "#04150c",
      "line": "rgba(77,255,171,.30)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "0 0 10px rgba(51,255,153,.28)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "JetBrains Mono",
      "body": "JetBrains Mono",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "16px",
      "h2": "22px",
      "h1": "40px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.2,
      "heading": 1.3,
      "body": 1.65
    },
    "tracking": {
      "display": "0.04em",
      "heading": "0.04em",
      "body": "0",
      "label": "0.08em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 160,
      "slowMs": 240,
      "easing": "steps(4, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 240,
        "easing": "steps(4, end)",
        "offsetY": 8,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 520,
        "offsetY": 20,
        "triggerPercent": 90,
        "once": true
      },
      "hover": {
        "durationMs": 80,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "scanline durur"
    }
  },
  "pixel-art": {
    "num": "24",
    "name": "Pixel Art",
    "family": "Retro",
    "light": {
      "bg": "#1a1c2c",
      "bg2": "#23263a",
      "surface": "#29366f",
      "surface2": "#3b5dc9",
      "ink": "#f4f4f4",
      "inkSoft": "#c2c3c7",
      "inkFaint": "#8b8d98",
      "accent": "#ffcd75",
      "accentInk": "#1a1c2c",
      "line": "#f4f4f4"
    },
    "dark": {
      "bg": "#101220",
      "bg2": "#171a2a",
      "surface": "#1d2752",
      "surface2": "#2a3f8f",
      "ink": "#f7f7f7",
      "inkSoft": "#c9cace",
      "inkFaint": "#92949f",
      "accent": "#ffd98a",
      "accentInk": "#14162a",
      "line": "#f7f7f7"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "0 0 0 2px #f4f4f4, 0 0 0 4px #1a1c2c",
    "shadowHard": "4px 4px 0 #0d0e17",
    "spacing": [
      "4px",
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Press Start 2P",
      "body": "Inter",
      "mono": "Silkscreen"
    },
    "scale": {
      "label": "9px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "12px",
      "h2": "18px",
      "h1": "28px",
      "h1Mobile": "18px"
    },
    "weights": {
      "body": 400,
      "strong": 400,
      "display": 400
    },
    "lineHeight": {
      "display": 1.4,
      "heading": 1.4,
      "body": 1.6
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.06em"
    },
    "motion": {
      "fastMs": 80,
      "baseMs": 160,
      "slowMs": 240,
      "easing": "steps(2–4, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 300,
        "easing": "steps(2, end)",
        "offsetY": 6,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 580,
        "offsetY": 20,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 60,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "blink kapanır"
    }
  },
  "frutiger-aero": {
    "num": "25",
    "name": "Frutiger Aero",
    "family": "Retro",
    "light": {
      "bg": "#dff1ff",
      "bg2": "#bfe3ff",
      "surface": "linear-gradient(180deg, #ffffff, #d6ecff)",
      "surface2": "#eaf6ff",
      "ink": "#0d2b45",
      "inkSoft": "#365a75",
      "inkFaint": "#6f8fa8",
      "accent": "#2f9be0",
      "accentInk": "#0d2b45",
      "line": "rgba(255,255,255,.85)"
    },
    "dark": {
      "bg": "#0d2233",
      "bg2": "#1a2f3f",
      "surface": "linear-gradient(180deg,#15364d,#0f2839)",
      "surface2": "linear-gradient(180deg,#15364d,#0f2839)",
      "ink": "#e6f4ff",
      "inkSoft": "#a5b5c2",
      "inkFaint": "#6f818f",
      "accent": "#4cb8f0",
      "accentInk": "#0d0d0d",
      "line": "rgba(230,244,255,.14)"
    },
    "radius": "14px",
    "radiusLg": "22px",
    "shadow": "0 8px 20px rgba(47,155,224,.28), inset 0 1px 0 #ffffff",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Segoe UI",
      "body": "Segoe UI",
      "mono": "Consolas"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 260,
      "slowMs": 320,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 550,
        "easing": "ease-out",
        "offsetY": 22,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 650,
        "offsetY": 20,
        "triggerPercent": 80,
        "once": true
      },
      "hover": {
        "durationMs": 240,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "art-deco": {
    "num": "26",
    "name": "Art Deco",
    "family": "Retro",
    "light": {
      "bg": "#0e1b17",
      "bg2": "#14241e",
      "surface": "#12211c",
      "surface2": "#18302a",
      "ink": "#ede3d2",
      "inkSoft": "#bcb2a1",
      "inkFaint": "#8a8172",
      "accent": "#c8a24a",
      "accentInk": "#0e1b17",
      "line": "rgba(200,162,74,.55)"
    },
    "dark": {
      "bg": "#08120f",
      "bg2": "#0d1a16",
      "surface": "#0b1713",
      "surface2": "#112420",
      "ink": "#f2ead9",
      "inkSoft": "#c3b9a7",
      "inkFaint": "#918877",
      "accent": "#d8b34f",
      "accentInk": "#0a1512",
      "line": "rgba(216,179,79,.48)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "96px"
    ],
    "fonts": {
      "display": "Cinzel",
      "body": "Jost",
      "mono": "Courier New"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "28px",
      "h1": "52px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.2,
      "body": 1.7
    },
    "tracking": {
      "display": "0.22em",
      "heading": "0.18em",
      "body": "0.03em",
      "label": "0.3em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 400,
      "slowMs": 600,
      "easing": "ease-in-out",
      "easingPoints": [
        0.42,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 580,
        "easing": "ease-in-out",
        "offsetY": 28,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 680,
        "offsetY": 20,
        "triggerPercent": 76,
        "once": true
      },
      "hover": {
        "durationMs": 320,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "victorian": {
    "num": "27",
    "name": "Victorian",
    "family": "Retro",
    "light": {
      "bg": "#efe7d6",
      "bg2": "#e5dbc5",
      "surface": "#f7f1e3",
      "surface2": "#eae0cb",
      "ink": "#1c1a17",
      "inkSoft": "#4f4940",
      "inkFaint": "#857c6e",
      "accent": "#5a1e2b",
      "accentInk": "#f7f1e3",
      "line": "rgba(28,26,23,.45)"
    },
    "dark": {
      "bg": "#1a1713",
      "bg2": "#26231e",
      "surface": "#221d18",
      "surface2": "#322d26",
      "ink": "#e9dfcc",
      "inkSoft": "#aba394",
      "inkFaint": "#777166",
      "accent": "#8d3547",
      "accentInk": "#ffffff",
      "line": "rgba(233,223,204,.14)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "80px"
    ],
    "fonts": {
      "display": "Playfair Display",
      "body": "EB Garamond",
      "mono": "Courier New"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "15px",
      "body": "17px",
      "h3": "20px",
      "h2": "28px",
      "h1": "50px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.2,
      "body": 1.7
    },
    "tracking": {
      "display": "0.04em",
      "heading": "0.02em",
      "body": "0.01em",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 300,
      "slowMs": 500,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 520,
        "easing": "ease-out",
        "offsetY": 24,
        "stagger": 0.08
      },
      "scroll": {
        "durationMs": 620,
        "offsetY": 20,
        "triggerPercent": 79,
        "once": true
      },
      "hover": {
        "durationMs": 300,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "surrealism": {
    "num": "28",
    "name": "Surrealism",
    "family": "Sanatsal",
    "light": {
      "bg": "#e7e2da",
      "bg2": "#d9d2c7",
      "surface": "#fbf9f5",
      "surface2": "#efeae1",
      "ink": "#1e1c1a",
      "inkSoft": "#56514a",
      "inkFaint": "#8d877e",
      "accent": "#e4572e",
      "accentInk": "#1e1c1a",
      "line": "rgba(30,28,26,.12)"
    },
    "dark": {
      "bg": "#15130f",
      "bg2": "#22201b",
      "surface": "#1e1b16",
      "surface2": "#2e2b26",
      "ink": "#ece7de",
      "inkSoft": "#aca7a0",
      "inkFaint": "#76726c",
      "accent": "#f07a52",
      "accentInk": "#0d0d0d",
      "line": "rgba(236,231,222,.14)"
    },
    "radius": "4px",
    "radiusLg": "10px",
    "shadow": "0 24px 60px rgba(30,28,26,.16)",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "88px"
    ],
    "fonts": {
      "display": "Inter",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "15px",
      "h3": "20px",
      "h2": "40px",
      "h1": "88px",
      "h1Mobile": "40px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 0.92,
      "heading": 1,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.03em",
      "heading": "-0.02em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 320,
      "slowMs": 600,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 1100,
        "easing": "ease-out",
        "offsetY": 36,
        "stagger": 0.13
      },
      "scroll": {
        "durationMs": 1050,
        "offsetY": 32,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 420,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "ethereal": {
    "num": "29",
    "name": "Ethereal",
    "family": "Sanatsal",
    "light": {
      "bg": "#f7f4f8",
      "bg2": "#efe9f4",
      "surface": "rgba(255,255,255,.55)",
      "surface2": "rgba(255,255,255,.35)",
      "ink": "#3b3542",
      "inkSoft": "#635c6e",
      "inkFaint": "#968fa3",
      "accent": "#7a63bd",
      "accentInk": "#ffffff",
      "line": "rgba(59,53,66,.10)"
    },
    "dark": {
      "bg": "#1a1720",
      "bg2": "#27232d",
      "surface": "#27232d",
      "surface2": "#37333d",
      "ink": "#ece7f2",
      "inkSoft": "#ada9b3",
      "inkFaint": "#78757f",
      "accent": "#9d8ae0",
      "accentInk": "#0d0d0d",
      "line": "rgba(236,231,242,.14)"
    },
    "radius": "20px",
    "radiusLg": "28px",
    "shadow": "0 20px 50px rgba(143,123,214,.16)",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "96px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "18px",
      "h2": "28px",
      "h1": "46px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 300
    },
    "lineHeight": {
      "display": 1.2,
      "heading": 1.25,
      "body": 1.75
    },
    "tracking": {
      "display": "0.03em",
      "heading": "0.03em",
      "body": "0",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 600,
      "slowMs": 800,
      "easing": "ease-in-out",
      "easingPoints": [
        0.42,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 1150,
        "easing": "ease-in-out",
        "offsetY": 40,
        "stagger": 0.14
      },
      "scroll": {
        "durationMs": 1200,
        "offsetY": 32,
        "triggerPercent": 78,
        "once": true
      },
      "hover": {
        "durationMs": 380,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "nefes durur, 0.01ms"
    }
  },
  "bohemian": {
    "num": "30",
    "name": "Bohemian",
    "family": "Sanatsal",
    "light": {
      "bg": "#f3e9d8",
      "bg2": "#e8d9c0",
      "surface": "#fbf4e6",
      "surface2": "#f0e0c4",
      "ink": "#2e2620",
      "inkSoft": "#5f5347",
      "inkFaint": "#91857a",
      "accent": "#b45634",
      "accentInk": "#fff8ee",
      "line": "rgba(46,38,32,.18)"
    },
    "dark": {
      "bg": "#1c1712",
      "bg2": "#29231e",
      "surface": "#26201a",
      "surface2": "#363029",
      "ink": "#f0e6d5",
      "inkSoft": "#b0a89b",
      "inkFaint": "#7b746a",
      "accent": "#d0704a",
      "accentInk": "#0d0d0d",
      "line": "rgba(240,230,213,.14)"
    },
    "radius": "14px",
    "radiusLg": "22px",
    "shadow": "0 10px 24px rgba(46,38,32,.12)",
    "shadowHard": "4px 4px 0 rgba(46,38,32,.15)",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "76px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Inter",
      "mono": "Courier New"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "15px",
      "body": "16px",
      "h3": "20px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "28px",
      "hand": "20px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.2,
      "body": 1.65
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 280,
      "slowMs": 400,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 950,
        "easing": "ease-out",
        "offsetY": 28,
        "stagger": 0.1
      },
      "scroll": {
        "durationMs": 900,
        "offsetY": 32,
        "triggerPercent": 84,
        "once": true
      },
      "hover": {
        "durationMs": 340,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "scrapbook": {
    "num": "31",
    "name": "Scrapbook",
    "family": "Sanatsal",
    "light": {
      "bg": "#f7f1e4",
      "bg2": "#efe6d2",
      "surface": "#fffdf7",
      "surface2": "#fdf3dc",
      "ink": "#1f2b3a",
      "inkSoft": "#4e5a68",
      "inkFaint": "#858e99",
      "accent": "#c63d2f",
      "accentInk": "#fffdf7",
      "line": "rgba(31,43,58,.18)"
    },
    "dark": {
      "bg": "#1a1f26",
      "bg2": "#272b31",
      "surface": "#232a33",
      "surface2": "#343a41",
      "ink": "#f2ece0",
      "inkSoft": "#b1afa8",
      "inkFaint": "#7b7b7a",
      "accent": "#e0574a",
      "accentInk": "#0d0d0d",
      "line": "rgba(242,236,224,.14)"
    },
    "radius": "3px",
    "radiusLg": "8px",
    "shadow": "0 2px 6px rgba(31,43,58,.18)",
    "shadowHard": "6px 6px 0 rgba(31,43,58,.12)",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Caveat",
      "body": "Inter",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "28px",
      "h1": "40px",
      "h1Mobile": "28px",
      "note": "20px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.2,
      "body": 1.65
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 260,
      "slowMs": 320,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 340,
        "easing": "cubic-bezier(0.34,1.28,0.52,1)",
        "offsetY": 10,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 440,
        "offsetY": 12,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 150,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "eğiklik statik"
    }
  },
  "conceptual-sketch": {
    "num": "32",
    "name": "Conceptual Sketch",
    "family": "Sanatsal",
    "light": {
      "bg": "#fcfbf7",
      "bg2": "#f2f0e8",
      "surface": "#ffffff",
      "surface2": "#f7f6f0",
      "ink": "#2a2a2a",
      "inkSoft": "#5c5c5c",
      "inkFaint": "#8f8f8f",
      "accent": "#2b5fad",
      "accentInk": "#ffffff",
      "line": "#2a2a2a"
    },
    "dark": {
      "bg": "#15161a",
      "bg2": "#222327",
      "surface": "#1d1f24",
      "surface2": "#2d2f34",
      "ink": "#e9eaee",
      "inkSoft": "#a9aaae",
      "inkFaint": "#747579",
      "accent": "#7aa7f0",
      "accentInk": "#0d0d0d",
      "line": "rgba(233,234,238,.14)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "none",
    "shadowHard": "2px 2px 0 rgba(42,42,42,.18)",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Architects Daughter",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "24px",
      "h1": "40px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.2,
      "heading": 1.25,
      "body": 1.6
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 200,
      "slowMs": 300,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 380,
        "easing": "linear",
        "offsetY": 0,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 300,
        "offsetY": 6,
        "triggerPercent": 92,
        "once": true
      },
      "hover": {
        "durationMs": 110,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "dark-academia": {
    "num": "33",
    "name": "Dark Academia",
    "family": "Sanatsal",
    "light": {
      "bg": "#1b1714",
      "bg2": "#241f1a",
      "surface": "#262019",
      "surface2": "#2f2820",
      "ink": "#e8dfce",
      "inkSoft": "#b8ac97",
      "inkFaint": "#8a7f6d",
      "accent": "#b0863f",
      "accentInk": "#1b1714",
      "line": "rgba(176,134,63,.32)"
    },
    "dark": {
      "bg": "#1b1714",
      "bg2": "#241f1a",
      "surface": "#262019",
      "surface2": "#2f2820",
      "ink": "#e8dfce",
      "inkSoft": "#b8ac97",
      "inkFaint": "#8a7f6d",
      "accent": "#b0863f",
      "accentInk": "#0d0d0d",
      "line": "rgba(176,134,63,.32)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "0 12px 32px rgba(0,0,0,.5)",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "88px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "EB Garamond",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "15px",
      "body": "17px",
      "h3": "20px",
      "h2": "28px",
      "h1": "46px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.2,
      "body": 1.7
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.02em",
      "body": "0.01em",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 400,
      "slowMs": 600,
      "easing": "ease-in-out",
      "easingPoints": [
        0.42,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 1050,
        "easing": "cubic-bezier(0.5,0.05,0.35,0.95)",
        "offsetY": 22,
        "stagger": 0.16
      },
      "scroll": {
        "durationMs": 1050,
        "offsetY": 26,
        "triggerPercent": 78,
        "once": true
      },
      "hover": {
        "durationMs": 520,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "skeuomorphism": {
    "num": "34",
    "name": "Skeuomorphism",
    "family": "Sanatsal",
    "light": {
      "bg": "#cfc6b8",
      "bg2": "#bdb2a1",
      "surface": "#f2ebdd",
      "surface2": "#e6ddcb",
      "ink": "#2f2a24",
      "inkSoft": "#5d554a",
      "inkFaint": "#8b8173",
      "accent": "#2f6b4f",
      "accentInk": "#f7f3e8",
      "line": "rgba(47,42,36,.35)"
    },
    "dark": {
      "bg": "#2a241d",
      "bg2": "#363028",
      "surface": "#3a3226",
      "surface2": "#494134",
      "ink": "#f0e8da",
      "inkSoft": "#b5ada1",
      "inkFaint": "#837c72",
      "accent": "#3f8a68",
      "accentInk": "#0d0d0d",
      "line": "rgba(240,232,218,.14)"
    },
    "radius": "6px",
    "radiusLg": "10px",
    "shadow": "0 2px 4px rgba(47,42,36,.35), inset 0 1px 0 rgba(255,255,255,.75)",
    "shadowHard": "none",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Helvetica Neue",
      "body": "Helvetica Neue",
      "mono": "Menlo"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "15px",
      "body": "16px",
      "h3": "20px",
      "h2": "24px",
      "h1": "40px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.2,
      "body": 1.55
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.08em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 220,
      "slowMs": 300,
      "easing": "ease-out",
      "easingPoints": [
        0,
        0,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 360,
        "easing": "cubic-bezier(0.22,1.32,0.4,1)",
        "offsetY": 6,
        "stagger": 0.04
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 10,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 130,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "bauhaus": {
    "num": "35",
    "name": "Bauhaus",
    "family": "Geometrik",
    "light": {
      "bg": "#f2ece1",
      "bg2": "#e6ddcd",
      "surface": "#fffdf8",
      "surface2": "#efe7d8",
      "ink": "#16161a",
      "inkSoft": "#55524b",
      "inkFaint": "#7d776b",
      "accent": "#d92b2b",
      "accentInk": "#fffdf8",
      "line": "#16161a"
    },
    "dark": {
      "bg": "#16161a",
      "bg2": "#232326",
      "surface": "#1f1f24",
      "surface2": "#302f33",
      "ink": "#f4ede1",
      "inkSoft": "#b1aca5",
      "inkFaint": "#7a7774",
      "accent": "#e84747",
      "accentInk": "#0d0d0d",
      "line": "rgba(244,237,225,.14)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "4px 4px 0 var(--ink)",
    "spacing": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Jost",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "14px",
      "body": "15.5px",
      "h3": "19px",
      "h2": "24px",
      "h1": "46px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.1,
      "body": 1.6
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0.01em",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 180,
      "slowMs": 260,
      "easing": "cubic-bezier(0.2,0.8,0.2,1)",
      "easingPoints": [
        0.2,
        0.8,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 440,
        "easing": "cubic-bezier(0.2,0.8,0.2,1)",
        "offsetY": 14,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 620,
        "offsetY": 18,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 170,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": 1
      },
      "reduced": "0.01ms"
    }
  },
  "constructivism": {
    "num": "36",
    "name": "Constructivism",
    "family": "Geometrik",
    "light": {
      "bg": "#efeae0",
      "bg2": "#e2dbcd",
      "surface": "#fbf8f2",
      "surface2": "#e9e2d5",
      "ink": "#11100f",
      "inkSoft": "#5a5349",
      "inkFaint": "#847d6f",
      "accent": "#c1121f",
      "accentInk": "#fbf8f2",
      "line": "#11100f"
    },
    "dark": {
      "bg": "#11100f",
      "bg2": "#1e1d1c",
      "surface": "#1a1817",
      "surface2": "#2b2927",
      "ink": "#f0eae0",
      "inkSoft": "#ada9a1",
      "inkFaint": "#75726d",
      "accent": "#cb2f38",
      "accentInk": "#ffffff",
      "line": "rgba(240,234,224,.14)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "6px 6px 0 var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "20px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Jost",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "13px",
      "body": "15.5px",
      "h3": "19px",
      "h2": "27px",
      "h1": "72px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 0.94,
      "heading": 1.02,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0em",
      "body": "0.01em",
      "label": "0.22em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 200,
      "slowMs": 320,
      "easing": "cubic-bezier(0.16,0.84,0.24,1)",
      "easingPoints": [
        0.16,
        0.84,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 300,
        "easing": "cubic-bezier(0.7,0,0.25,1)",
        "offsetY": 26,
        "stagger": 0.04
      },
      "scroll": {
        "durationMs": 340,
        "offsetY": 28,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 110,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": 1
      },
      "reduced": "0.01ms"
    }
  },
  "kinetic-type": {
    "num": "37",
    "name": "Kinetic Type",
    "family": "Tipografik",
    "light": {
      "bg": "#0e0e10",
      "bg2": "#17171a",
      "surface": "#1b1b1f",
      "surface2": "#232329",
      "ink": "#f4f2ec",
      "inkSoft": "#a8a49b",
      "inkFaint": "#6f6b64",
      "accent": "#e8ff47",
      "accentInk": "#0e0e10",
      "line": "rgba(244,242,236,.18)"
    },
    "dark": {
      "bg": "#0e0e10",
      "bg2": "#1c1c1d",
      "surface": "#1b1b1f",
      "surface2": "#2c2c2f",
      "ink": "#f4f2ec",
      "inkSoft": "#afaeaa",
      "inkFaint": "#757573",
      "accent": "#e8ff47",
      "accentInk": "#0d0d0d",
      "line": "rgba(244,242,236,.14)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Anton",
      "body": "Space Grotesk",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "body": "15px",
      "h3": "19px",
      "h2": "32px",
      "kpi": "44px",
      "h1": "96px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 0.95,
      "heading": 1,
      "body": 1.55
    },
    "tracking": {
      "display": "-0.03em",
      "heading": "-0.02em",
      "body": "0em",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 220,
      "slowMs": 320,
      "easing": "cubic-bezier(0.2,0.8,0.2,1)",
      "easingPoints": [
        0.2,
        0.8,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 620,
        "easing": "cubic-bezier(0.85,0,0.15,1)",
        "offsetY": 40,
        "stagger": 0.1
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 44,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 130,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": 1
      },
      "reduced": "0.01ms"
    }
  },
  "organic-bio": {
    "num": "38",
    "name": "Organic / Biophilic",
    "family": "Organik",
    "light": {
      "bg": "#f3f1e7",
      "bg2": "#e7e4d6",
      "surface": "#fbfaf4",
      "surface2": "#eeece0",
      "ink": "#232a22",
      "inkSoft": "#55604f",
      "inkFaint": "#848b78",
      "accent": "#4f7a45",
      "accentInk": "#fbfaf4",
      "line": "rgba(35,42,34,.16)"
    },
    "dark": {
      "bg": "#171c16",
      "bg2": "#242923",
      "surface": "#212720",
      "surface2": "#313730",
      "ink": "#eef1e7",
      "inkSoft": "#aeb1a8",
      "inkFaint": "#787c74",
      "accent": "#8fbf7d",
      "accentInk": "#0d0d0d",
      "line": "rgba(238,241,231,.14)"
    },
    "radius": "18px",
    "radiusLg": "26px",
    "shadow": "0 6px 18px rgba(35,42,34,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Nunito",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10.5px",
      "caption": "13px",
      "body": "16px",
      "h3": "19px",
      "h2": "30px",
      "h1": "54px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.16,
      "body": 1.68
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "-0.005em",
      "body": "0em",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 260,
      "slowMs": 420,
      "easing": "cubic-bezier(0.22,0.61,0.36,1)",
      "easingPoints": [
        0.22,
        0.61,
        0.36,
        1
      ],
      "enter": {
        "durationMs": 1000,
        "easing": "cubic-bezier(0.215,0.61,0.355,1)",
        "offsetY": 28,
        "stagger": 0.1
      },
      "scroll": {
        "durationMs": 900,
        "offsetY": 24,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 280,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms"
    }
  },
  "ai-native-mesh": {
    "num": "39",
    "name": "AI-native Mesh",
    "family": "Yeni Dalga",
    "light": {
      "bg": "#0b0c10",
      "bg2": "#101218",
      "surface": "#14161d",
      "surface2": "#1b1e27",
      "ink": "#f2f4f8",
      "inkSoft": "#a9b0c0",
      "inkFaint": "#7a8294",
      "accent": "#7c8cff",
      "accentInk": "#0b0c10",
      "line": "rgba(242,244,248,.12)"
    },
    "dark": {
      "bg": "#0b0c10",
      "bg2": "#191a1e",
      "surface": "#14161d",
      "surface2": "#26282f",
      "ink": "#f2f4f8",
      "inkSoft": "#adaeb2",
      "inkFaint": "#737478",
      "accent": "#7c8cff",
      "accentInk": "#0b0c10",
      "line": "rgba(242,244,248,.14)"
    },
    "radius": "14px",
    "radiusLg": "22px",
    "shadow": "0 8px 30px rgba(0,0,0,.45)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Geist",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "13px",
      "body": "16px",
      "h3": "20px",
      "h2": "26px",
      "h1": "40px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "-0.01em",
      "body": "0em",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 220,
      "slowMs": 420,
      "easing": "cubic-bezier(0.22,0.61,0.36,1)",
      "easingPoints": [
        0.22,
        0.61,
        0.36,
        1
      ],
      "enter": {
        "durationMs": 750,
        "easing": "cubic-bezier(0.32,0.72,0,1)",
        "offsetY": 22,
        "stagger": 0.065
      },
      "scroll": {
        "durationMs": 850,
        "offsetY": 20,
        "triggerPercent": 83,
        "once": true
      },
      "hover": {
        "durationMs": 210,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": true,
        "scrub": 1.2
      },
      "reduced": "0.01ms"
    }
  },
  "scandinavian-dark": {
    "num": "40",
    "name": "Scandinavian Dark",
    "family": "Yeni Dalga",
    "light": {
      "bg": "#171a19",
      "bg2": "#1d211f",
      "surface": "#1f2422",
      "surface2": "#262c29",
      "ink": "#e9e7e0",
      "inkSoft": "#a6aaa2",
      "inkFaint": "#7d8279",
      "accent": "#b9c6a9",
      "accentInk": "#141715",
      "line": "rgba(233,231,224,.14)"
    },
    "dark": {
      "bg": "#171a19",
      "bg2": "#242625",
      "surface": "#1f2422",
      "surface2": "#2f3431",
      "ink": "#e9e7e0",
      "inkSoft": "#aaaaa4",
      "inkFaint": "#767673",
      "accent": "#b9c6a9",
      "accentInk": "#0d0d0d",
      "line": "rgba(233,231,224,.14)"
    },
    "radius": "6px",
    "radiusLg": "10px",
    "shadow": "0 2px 10px rgba(0,0,0,.35)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "72px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10.5px",
      "caption": "13px",
      "body": "16px",
      "h3": "20px",
      "h2": "28px",
      "h1": "44px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.2,
      "body": 1.7
    },
    "tracking": {
      "display": "-0.005em",
      "heading": "-0.005em",
      "body": "0em",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 240,
      "slowMs": 380,
      "easing": "cubic-bezier(0.32,0.72,0.28,1)",
      "easingPoints": [
        0.32,
        0.72,
        0.28,
        1
      ],
      "enter": {
        "durationMs": 880,
        "easing": "cubic-bezier(0.5,0.4,0.15,1)",
        "offsetY": 16,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 950,
        "offsetY": 14,
        "triggerPercent": 79,
        "once": true
      },
      "hover": {
        "durationMs": 260,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": true,
        "scrub": 1.2
      },
      "reduced": "0.01ms"
    }
  },
  "grand-tourer": {
    "num": "41",
    "name": "Grand Tourer",
    "family": "Zamansız",
    "light": {
      "bg": "#efe7da",
      "bg2": "#e6dccb",
      "surface": "#f8f2e8",
      "surface2": "#e8ddca",
      "ink": "#1c1a17",
      "inkSoft": "#574f44",
      "inkFaint": "#726757",
      "accent": "#1f3b2c",
      "accentInk": "#f4ecdc",
      "line": "rgba(28,26,23,.18)"
    },
    "dark": {
      "bg": "#14180f",
      "bg2": "#21241b",
      "surface": "#1d2318",
      "surface2": "#2e3328",
      "ink": "#efe7da",
      "inkSoft": "#ada99d",
      "inkFaint": "#77756a",
      "accent": "#b7c8a8",
      "accentInk": "#0d0d0d",
      "line": "rgba(239,231,218,.14)"
    },
    "radius": "3px",
    "radiusLg": "6px",
    "shadow": "inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(28,26,23,.08)",
    "shadowHard": "3px 3px 0 rgba(28,26,23,.12)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "96px"
    ],
    "fonts": {
      "display": "Cinzel",
      "body": "Jost",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "9.5px",
      "caption": "13px",
      "body": "16.5px",
      "h3": "15.5px",
      "h2": "24px",
      "h1": "50px",
      "h1Mobile": "30px",
      "counter": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.16,
      "body": 1.68
    },
    "tracking": {
      "display": "0.09em",
      "heading": "0.07em",
      "body": "0em",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 280,
      "slowMs": 420,
      "easing": "cubic-bezier(0.2,0.72,0.2,1)",
      "easingPoints": [
        0.2,
        0.72,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 660,
        "easing": "cubic-bezier(0.22,0.68,0.24,1)",
        "offsetY": 18,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 850,
        "offsetY": 20,
        "triggerPercent": 84,
        "once": true
      },
      "hover": {
        "durationMs": 230,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": true,
        "scrub": 1.1
      },
      "reduced": "0.01ms"
    }
  },
  "grand-tourer-oxblood": {
    "num": "42",
    "name": "Grand Tourer Oxblood",
    "family": "Zamansız",
    "light": {
      "bg": "#f1e9dd",
      "bg2": "#e8dfd0",
      "surface": "#f9f3e9",
      "surface2": "#e9dfce",
      "ink": "#201a17",
      "inkSoft": "#5a4d45",
      "inkFaint": "#74665c",
      "accent": "#6b2130",
      "accentInk": "#f7efe1",
      "line": "rgba(32,26,23,.18)"
    },
    "dark": {
      "bg": "#1a1214",
      "bg2": "#271f20",
      "surface": "#241a1c",
      "surface2": "#342b2b",
      "ink": "#f1e9dd",
      "inkSoft": "#b1a9a1",
      "inkFaint": "#7b736e",
      "accent": "#d3a3ab",
      "accentInk": "#0d0d0d",
      "line": "rgba(241,233,221,.14)"
    },
    "radius": "3px",
    "radiusLg": "6px",
    "shadow": "inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(32,26,23,.08)",
    "shadowHard": "3px 3px 0 rgba(32,26,23,.12)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "96px"
    ],
    "fonts": {
      "display": "Cinzel",
      "body": "Jost",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "9.5px",
      "caption": "13px",
      "body": "16.5px",
      "h3": "15.5px",
      "h2": "24px",
      "h1": "52px",
      "h1Mobile": "30px",
      "counter": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.16,
      "body": 1.68
    },
    "tracking": {
      "display": "0.12em",
      "heading": "0.10em",
      "body": "0em",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 200,
      "baseMs": 400,
      "slowMs": 560,
      "easing": "cubic-bezier(0.2,0.72,0.2,1)",
      "easingPoints": [
        0.2,
        0.72,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 900,
        "easing": "cubic-bezier(0.4,0.1,0.2,1)",
        "offsetY": 28,
        "stagger": 0.11
      },
      "scroll": {
        "durationMs": 1000,
        "offsetY": 30,
        "triggerPercent": 80,
        "once": true
      },
      "hover": {
        "durationMs": 300,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": true,
        "scrub": 1.1
      },
      "reduced": "0.01ms"
    }
  },
  "grand-tourer-midnight": {
    "num": "43",
    "name": "Grand Tourer Midnight",
    "family": "Zamansız",
    "light": {
      "bg": "#f1ece2",
      "bg2": "#e7e0d2",
      "surface": "#f8f4ec",
      "surface2": "#e6e1d5",
      "ink": "#171b23",
      "inkSoft": "#4f5560",
      "inkFaint": "#5f6470",
      "accent": "#1b2e4a",
      "accentInk": "#f2eadb",
      "line": "rgba(23,27,35,.18)"
    },
    "dark": {
      "bg": "#101520",
      "bg2": "#1d222b",
      "surface": "#171d29",
      "surface2": "#282d37",
      "ink": "#eae6dc",
      "inkSoft": "#a9a7a4",
      "inkFaint": "#727375",
      "accent": "#9db2cc",
      "accentInk": "#0d0d0d",
      "line": "rgba(234,230,220,.14)"
    },
    "radius": "3px",
    "radiusLg": "6px",
    "shadow": "inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(23,27,35,.08)",
    "shadowHard": "3px 3px 0 rgba(23,27,35,.12)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "96px"
    ],
    "fonts": {
      "display": "Cinzel",
      "body": "Jost",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "9.5px",
      "caption": "13px",
      "body": "16.5px",
      "h3": "15.5px",
      "h2": "24px",
      "h1": "50px",
      "h1Mobile": "30px",
      "counter": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.16,
      "body": 1.68
    },
    "tracking": {
      "display": "0.09em",
      "heading": "0.07em",
      "body": "0em",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 280,
      "slowMs": 420,
      "easing": "cubic-bezier(0.2,0.72,0.2,1)",
      "easingPoints": [
        0.2,
        0.72,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 1060,
        "easing": "cubic-bezier(0.6,0.02,0.25,1)",
        "offsetY": 12,
        "stagger": 0.14
      },
      "scroll": {
        "durationMs": 1100,
        "offsetY": 16,
        "triggerPercent": 78,
        "once": true
      },
      "hover": {
        "durationMs": 340,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": true,
        "scrub": 1.1
      },
      "reduced": "0.01ms"
    }
  },
  "utility": {
    "num": "44",
    "name": "Utility",
    "family": "Zamansız",
    "light": {
      "bg": "#ffffff",
      "bg2": "#f6f6f7",
      "surface": "#ffffff",
      "surface2": "#fafafa",
      "ink": "#111112",
      "inkSoft": "#5a5f66",
      "inkFaint": "#9298a0",
      "accent": "#1d4ed8",
      "accentInk": "#ffffff",
      "line": "rgba(17,17,18,.10)"
    },
    "dark": {
      "bg": "#000000",
      "bg2": "#181818",
      "surface": "#1f1f1f",
      "surface2": "#272727",
      "ink": "#ffffff",
      "inkSoft": "#9b9b9b",
      "inkFaint": "#6e6e6e",
      "accent": "#7aa2ff",
      "accentInk": "#000000",
      "line": "rgba(255,255,255,.12)"
    },
    "radius": "8px",
    "radiusLg": "12px",
    "shadow": "0 1px 2px rgba(17,17,18,.06)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poppins",
      "body": "Poppins",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "12px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "36px",
      "h1": "60px",
      "h1Mobile": "36px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1,
      "heading": 1.15,
      "body": 1.5
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.02em"
    },
    "motion": {
      "fastMs": 200,
      "baseMs": 500,
      "slowMs": 800,
      "easing": "cubic-bezier(0.22,1,0.36,1)",
      "easingPoints": [
        0.22,
        1,
        0.36,
        1
      ],
      "enter": {
        "durationMs": 400,
        "easing": "cubic-bezier(0.22,1,0.36,1)",
        "offsetY": 10,
        "stagger": 0.045
      },
      "scroll": {
        "durationMs": 560,
        "offsetY": 28,
        "triggerPercent": 90,
        "once": true
      },
      "hover": {
        "durationMs": 120,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global)"
    }
  },
  "terminal-ui": {
    "num": "45",
    "name": "Terminal UI",
    "family": "Teknik",
    "light": {
      "bg": "#0a0d0a",
      "bg2": "#0d110d",
      "surface": "#0f140f",
      "surface2": "#131a13",
      "ink": "#d7e6d2",
      "inkSoft": "#9bb394",
      "inkFaint": "#6d8268",
      "accent": "#58e08a",
      "accentInk": "#04120a",
      "line": "rgba(215,230,210,.16)"
    },
    "dark": {
      "bg": "#050705",
      "bg2": "#080b08",
      "surface": "#0b0f0b",
      "surface2": "#101510",
      "ink": "#e6f1e2",
      "inkSoft": "#a8bda2",
      "inkFaint": "#78896f",
      "accent": "#6ff09c",
      "accentInk": "#03150a",
      "line": "rgba(230,241,226,.18)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "JetBrains Mono",
      "body": "JetBrains Mono",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "18px",
      "h2": "24px",
      "h1": "40px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.15,
      "heading": 1.3,
      "body": 1.55
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.08em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 180,
      "slowMs": 300,
      "easing": "steps(2, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 180,
        "easing": "steps(3, end)",
        "offsetY": 0,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 200,
        "offsetY": 8,
        "triggerPercent": 90,
        "once": true
      },
      "hover": {
        "durationMs": 90,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — imleç yanıp sönmesi durur"
    }
  },
  "telemetry-grid": {
    "num": "46",
    "name": "Telemetry Grid",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#eef1f4",
      "bg2": "#e5eaee",
      "surface": "#ffffff",
      "surface2": "#f6f8fa",
      "ink": "#10171c",
      "inkSoft": "#46585f",
      "inkFaint": "#7b8a91",
      "accent": "#0b6e75",
      "accentInk": "#ffffff",
      "line": "rgba(16,23,28,.14)"
    },
    "dark": {
      "bg": "#0a0f12",
      "bg2": "#0e1417",
      "surface": "#101820",
      "surface2": "#162028",
      "ink": "#e6eef2",
      "inkSoft": "#a3b3bb",
      "inkFaint": "#6e8089",
      "accent": "#3ec6cd",
      "accentInk": "#04191b",
      "line": "rgba(230,238,242,.16)"
    },
    "radius": "4px",
    "radiusLg": "10px",
    "shadow": "0 1px 2px rgba(16,23,28,.07)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Chakra Petch",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "17px",
      "h2": "22px",
      "h1": "34px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.28,
      "body": 1.52
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 280,
      "slowMs": 420,
      "easing": "cubic-bezier(0.16,0.84,0.44,1)",
      "easingPoints": [
        0.16,
        0.84,
        0.44,
        1
      ],
      "enter": {
        "durationMs": 280,
        "easing": "cubic-bezier(0.16,0.84,0.44,1)",
        "offsetY": 6,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 320,
        "offsetY": 10,
        "triggerPercent": 88,
        "once": false
      },
      "hover": {
        "durationMs": 110,
        "imageScale": 1.01
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; canlı değer güncellemesi sürer ama geçiş animasyonu yok"
    }
  },
  "trading-desk": {
    "num": "47",
    "name": "Trading Desk",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#101418",
      "bg2": "#151b20",
      "surface": "#161d23",
      "surface2": "#1c242b",
      "ink": "#e8eef2",
      "inkSoft": "#9fb3bf",
      "inkFaint": "#6f8593",
      "accent": "#f2a33c",
      "accentInk": "#171002",
      "line": "rgba(232,238,242,.14)"
    },
    "dark": {
      "bg": "#05070a",
      "bg2": "#080d12",
      "surface": "#0c131a",
      "surface2": "#131c26",
      "ink": "#f2f7f9",
      "inkSoft": "#a8bcc7",
      "inkFaint": "#74899a",
      "accent": "#ffbd6b",
      "accentInk": "#1a1104",
      "line": "rgba(242,247,249,.16)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Rajdhani",
      "body": "Space Grotesk",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "16px",
      "h2": "20px",
      "h1": "36px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.24,
      "body": 1.48
    },
    "tracking": {
      "display": "0.015em",
      "heading": "0.015em",
      "body": "0",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 70,
      "baseMs": 220,
      "slowMs": 320,
      "easing": "cubic-bezier(0.4,0,0.1,1)",
      "easingPoints": [
        0.4,
        0,
        0.1,
        1
      ],
      "enter": {
        "durationMs": 220,
        "easing": "cubic-bezier(0.4,0,0.1,1)",
        "offsetY": 4,
        "stagger": 0.015
      },
      "scroll": {
        "durationMs": 260,
        "offsetY": 6,
        "triggerPercent": 92,
        "once": true
      },
      "hover": {
        "durationMs": 70,
        "imageScale": 1.004
      },
      "pin": {
        "enabled": true,
        "scrub": 0.35
      },
      "reduced": "0.01ms; fiyat flash'ı kapanır, ticker kayması durur"
    }
  },
  "executive-kpi": {
    "num": "48",
    "name": "Executive KPI",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#faf7f1",
      "bg2": "#f3eee5",
      "surface": "#ffffff",
      "surface2": "#f7f3ec",
      "ink": "#171614",
      "inkSoft": "#51544b",
      "inkFaint": "#86897e",
      "accent": "#2b5c46",
      "accentInk": "#f6f7f2",
      "line": "rgba(23,22,20,.14)"
    },
    "dark": {
      "bg": "#121310",
      "bg2": "#171913",
      "surface": "#1a1c16",
      "surface2": "#21251d",
      "ink": "#eeeadf",
      "inkSoft": "#b3b0a2",
      "inkFaint": "#7e7c70",
      "accent": "#9dbf8f",
      "accentInk": "#101a0e",
      "line": "rgba(238,234,223,.16)"
    },
    "radius": "0px",
    "radiusLg": "3px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Jost",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "19px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.22,
      "body": 1.62
    },
    "tracking": {
      "display": "0.005em",
      "heading": "0.005em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 320,
      "baseMs": 600,
      "slowMs": 950,
      "easing": "cubic-bezier(0.65,0,0.35,1)",
      "easingPoints": [
        0.65,
        0,
        0.35,
        1
      ],
      "enter": {
        "durationMs": 950,
        "easing": "cubic-bezier(0.65,0,0.35,1)",
        "offsetY": 30,
        "stagger": 0.11
      },
      "scroll": {
        "durationMs": 1050,
        "offsetY": 36,
        "triggerPercent": 78,
        "once": true
      },
      "hover": {
        "durationMs": 320,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; KPI rakamı animasyonsuz, tek karede yazılır"
    }
  },
  "log-stream": {
    "num": "49",
    "name": "Log Stream",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#12141a",
      "bg2": "#171a22",
      "surface": "#1a1e28",
      "surface2": "#21262f",
      "ink": "#e7e9f0",
      "inkSoft": "#a2a8bb",
      "inkFaint": "#767d92",
      "accent": "#a78bfa",
      "accentInk": "#14101f",
      "line": "rgba(231,233,240,.14)"
    },
    "dark": {
      "bg": "#06070b",
      "bg2": "#0a0c12",
      "surface": "#0e1119",
      "surface2": "#141926",
      "ink": "#f0f1f7",
      "inkSoft": "#abb0c4",
      "inkFaint": "#7c8399",
      "accent": "#ccb9ff",
      "accentInk": "#120d1e",
      "line": "rgba(240,241,247,.16)"
    },
    "radius": "6px",
    "radiusLg": "12px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Mono",
      "body": "IBM Plex Mono",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "12px",
      "body": "13px",
      "h3": "15px",
      "h2": "19px",
      "h1": "30px",
      "h1Mobile": "22px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 700
    },
    "lineHeight": {
      "display": 1.18,
      "heading": 1.32,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.08em"
    },
    "motion": {
      "fastMs": 60,
      "baseMs": 160,
      "slowMs": 260,
      "easing": "steps(4, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 160,
        "easing": "steps(4, end)",
        "offsetY": 0,
        "stagger": 0.012
      },
      "scroll": {
        "durationMs": 180,
        "offsetY": 4,
        "triggerPercent": 94,
        "once": false
      },
      "hover": {
        "durationMs": 60,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; yeni satır animasyonsuz eklenir, otomatik kaydırma kapanır"
    }
  },
  "lab-instrument": {
    "num": "50",
    "name": "Lab Instrument",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#f5f7f7",
      "bg2": "#eaeff0",
      "surface": "#ffffff",
      "surface2": "#f2f6f7",
      "ink": "#0e1517",
      "inkSoft": "#43565c",
      "inkFaint": "#76898f",
      "accent": "#1a5c8a",
      "accentInk": "#f4f8fa",
      "line": "rgba(14,21,23,.14)"
    },
    "dark": {
      "bg": "#0b0f11",
      "bg2": "#0f1517",
      "surface": "#121a1d",
      "surface2": "#182326",
      "ink": "#e5eef0",
      "inkSoft": "#a1b3b9",
      "inkFaint": "#6c8086",
      "accent": "#63bde0",
      "accentInk": "#06171f",
      "line": "rgba(229,238,240,.16)"
    },
    "radius": "2px",
    "radiusLg": "8px",
    "shadow": "0 1px 2px rgba(14,21,23,.08)",
    "shadowHard": "2px 2px 0 rgba(14,21,23,.13)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Inter",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "16px",
      "h2": "21px",
      "h1": "32px",
      "h1Mobile": "22px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.16,
      "heading": 1.3,
      "body": 1.58
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.02em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 190,
      "baseMs": 420,
      "slowMs": 640,
      "easing": "cubic-bezier(0.34,1.28,0.64,1)",
      "easingPoints": [
        0.34,
        1.28,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 420,
        "easing": "cubic-bezier(0.34,1.28,0.64,1)",
        "offsetY": 14,
        "stagger": 0.045
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 18,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 190,
        "imageScale": 1.018
      },
      "pin": {
        "enabled": true,
        "scrub": 0.75
      },
      "reduced": "0.01ms; iğne/kadran animasyonu kapalı, değer tek karede yazılır"
    }
  },
  "atlas-console": {
    "num": "51",
    "name": "Atlas Console",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#0d1520",
      "bg2": "#111b28",
      "surface": "#14202e",
      "surface2": "#1a2836",
      "ink": "#e9eef6",
      "inkSoft": "#a7b7cb",
      "inkFaint": "#7c8ea6",
      "accent": "#7fa8f0",
      "accentInk": "#081120",
      "line": "rgba(233,238,246,.16)"
    },
    "dark": {
      "bg": "#04090f",
      "bg2": "#070e17",
      "surface": "#0a1420",
      "surface2": "#101d2c",
      "ink": "#f2f6fb",
      "inkSoft": "#b6c5d6",
      "inkFaint": "#8595a8",
      "accent": "#ffcf7a",
      "accentInk": "#071019",
      "line": "rgba(242,246,251,.18)"
    },
    "radius": "8px",
    "radiusLg": "16px",
    "shadow": "0 18px 40px -32px rgba(4,8,14,.9)",
    "shadowHard": "0 0 0 1px var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cinzel",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "26px",
      "h1": "48px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.22,
      "body": 1.58
    },
    "tracking": {
      "display": "0.06em",
      "heading": "0.03em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 200,
      "slowMs": 320,
      "easing": "cubic-bezier(0.25,0.46,0.45,0.94)",
      "easingPoints": [
        0.25,
        0.46,
        0.45,
        0.94
      ],
      "enter": {
        "durationMs": 440,
        "easing": "cubic-bezier(0.25,0.46,0.45,0.94)",
        "offsetY": 12,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 18,
        "triggerPercent": 78,
        "once": true
      },
      "hover": {
        "durationMs": 120,
        "imageScale": 1.01
      },
      "pin": {
        "enabled": true,
        "scrub": 0.6
      },
      "reduced": "0.01ms (tokens.css global) — pin scrub kapanır, pin statik iğneye döner"
    }
  },
  "experiment-split": {
    "num": "52",
    "name": "Experiment Split",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#f7f7fb",
      "bg2": "#eeeef6",
      "surface": "#ffffff",
      "surface2": "#f2f2fa",
      "ink": "#15151f",
      "inkSoft": "#55566b",
      "inkFaint": "#85869c",
      "accent": "#4b3ee8",
      "accentInk": "#ffffff",
      "line": "rgba(21,21,31,.10)"
    },
    "dark": {
      "bg": "#0c0c14",
      "bg2": "#121220",
      "surface": "#161627",
      "surface2": "#1d1d31",
      "ink": "#ecebff",
      "inkSoft": "#a9a8c6",
      "inkFaint": "#787890",
      "accent": "#8f86ff",
      "accentInk": "#0a0918",
      "line": "rgba(236,235,255,.14)"
    },
    "radius": "10px",
    "radiusLg": "16px",
    "shadow": "0 12px 28px -24px rgba(21,21,31,.35)",
    "shadowHard": "4px 0 0 var(--surface-2)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Grotesk",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "20px",
      "h2": "29px",
      "h1": "54px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.03,
      "heading": 1.16,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.025em",
      "heading": "-0.015em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 180,
      "slowMs": 280,
      "easing": "cubic-bezier(0.4,0,0.2,1)",
      "easingPoints": [
        0.4,
        0,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 320,
        "easing": "cubic-bezier(0.4,0,0.2,1)",
        "offsetY": 10,
        "stagger": 0.045
      },
      "scroll": {
        "durationMs": 380,
        "offsetY": 14,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 180,
        "imageScale": 1.005
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — sayaçlar son değerde durur"
    }
  },
  "ledger-meter": {
    "num": "53",
    "name": "Ledger Meter",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#faf7ee",
      "bg2": "#f2ecdc",
      "surface": "#fffdf6",
      "surface2": "#f6f0e1",
      "ink": "#1c1913",
      "inkSoft": "#56503f",
      "inkFaint": "#8a8068",
      "accent": "#22456b",
      "accentInk": "#ffffff",
      "line": "rgba(28,25,19,.13)"
    },
    "dark": {
      "bg": "#12110d",
      "bg2": "#181712",
      "surface": "#1d1b15",
      "surface2": "#24221a",
      "ink": "#f1ebdc",
      "inkSoft": "#bdb29b",
      "inkFaint": "#8d8571",
      "accent": "#8fb3dd",
      "accentInk": "#0b1119",
      "line": "rgba(241,235,220,.16)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "0 10px 24px -22px rgba(29,26,21,.55)",
    "shadowHard": "0 2px 0 var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "EB Garamond",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "20px",
      "h2": "29px",
      "h1": "48px",
      "h1Mobile": "29px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.18,
      "body": 1.62
    },
    "tracking": {
      "display": "-0.005em",
      "heading": "0.005em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 200,
      "slowMs": 320,
      "easing": "cubic-bezier(0.65,0,0.35,1)",
      "easingPoints": [
        0.65,
        0,
        0.35,
        1
      ],
      "enter": {
        "durationMs": 660,
        "easing": "cubic-bezier(0.65,0,0.35,1)",
        "offsetY": 20,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 720,
        "offsetY": 26,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 110,
        "imageScale": 1
      },
      "pin": {
        "enabled": true,
        "scrub": 1.35
      },
      "reduced": "0.01ms (tokens.css global) — sayaç ve scrub kapanır, toplam satırı anında görünür"
    }
  },
  "vitals-triage": {
    "num": "54",
    "name": "Vitals Triage",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#f4f8f7",
      "bg2": "#e8f1ef",
      "surface": "#ffffff",
      "surface2": "#eef5f3",
      "ink": "#10201f",
      "inkSoft": "#47605d",
      "inkFaint": "#7d938f",
      "accent": "#b3341f",
      "accentInk": "#ffffff",
      "line": "rgba(16,32,31,.11)"
    },
    "dark": {
      "bg": "#0a1413",
      "bg2": "#0f1c1a",
      "surface": "#132220",
      "surface2": "#1a2c29",
      "ink": "#e9f4f1",
      "inkSoft": "#a3bfba",
      "inkFaint": "#79948f",
      "accent": "#ff8a72",
      "accentInk": "#250a05",
      "line": "rgba(233,244,241,.15)"
    },
    "radius": "14px",
    "radiusLg": "22px",
    "shadow": "0 16px 32px -26px rgba(16,32,31,.35)",
    "shadowHard": "0 0 0 2px var(--surface-2)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Baloo 2",
      "body": "Nunito",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "20px",
      "h2": "27px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 600
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.2,
      "body": 1.62
    },
    "tracking": {
      "display": "-0.015em",
      "heading": "-0.005em",
      "body": "0",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 190,
      "slowMs": 300,
      "easing": "cubic-bezier(0.16,1,0.3,1)",
      "easingPoints": [
        0.16,
        1,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 260,
        "easing": "cubic-bezier(0.16,1,0.3,1)",
        "offsetY": 6,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 280,
        "offsetY": 5,
        "triggerPercent": 91,
        "once": true
      },
      "hover": {
        "durationMs": 150,
        "imageScale": 1.025
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — nabız halkası sabit, EKG çizgisi donar"
    }
  },
  "fleet-telemetry": {
    "num": "55",
    "name": "Fleet Telemetry",
    "family": "Veri & Gösterge",
    "light": {
      "bg": "#f1f4f7",
      "bg2": "#e6ebf0",
      "surface": "#ffffff",
      "surface2": "#edf1f5",
      "ink": "#101820",
      "inkSoft": "#47555f",
      "inkFaint": "#7b8892",
      "accent": "#a8386f",
      "accentInk": "#ffffff",
      "line": "rgba(16,24,32,.13)"
    },
    "dark": {
      "bg": "#0d1116",
      "bg2": "#121820",
      "surface": "#161e26",
      "surface2": "#1e2731",
      "ink": "#e9eef3",
      "inkSoft": "#a9b6c2",
      "inkFaint": "#7d8b97",
      "accent": "#f07fb4",
      "accentInk": "#20050f",
      "line": "rgba(233,238,243,.16)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "0 6px 14px -12px rgba(16,19,23,.5)",
    "shadowHard": "0 0 0 2px var(--line)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Share Tech Mono",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14px",
      "h3": "18px",
      "h2": "23px",
      "h1": "36px",
      "h1Mobile": "22px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.24,
      "body": 1.5
    },
    "tracking": {
      "display": "0.03em",
      "heading": "0.02em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 180,
      "slowMs": 260,
      "easing": "cubic-bezier(0.2,0.8,0.2,1)",
      "easingPoints": [
        0.2,
        0.8,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 880,
        "easing": "cubic-bezier(0.2,0.8,0.2,1)",
        "offsetY": 14,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 600,
        "offsetY": 22,
        "triggerPercent": 80,
        "once": true
      },
      "hover": {
        "durationMs": 130,
        "imageScale": 1.015
      },
      "pin": {
        "enabled": true,
        "scrub": 0.9
      },
      "reduced": "0.01ms (tokens.css global) — LED nabzı ve ticker durur"
    }
  },
  "blueprint-drawing": {
    "num": "56",
    "name": "Blueprint Çizimi",
    "family": "Endüstriyel",
    "light": {
      "bg": "#0a1b2b",
      "bg2": "#0d2133",
      "surface": "#102a40",
      "surface2": "#14344e",
      "ink": "#dceaf5",
      "inkSoft": "#a6c2d6",
      "inkFaint": "#6f90a6",
      "accent": "#6fd3f2",
      "accentInk": "#04202c",
      "line": "rgba(220,234,245,.16)"
    },
    "dark": {
      "bg": "#04101a",
      "bg2": "#061727",
      "surface": "#082034",
      "surface2": "#0b2a41",
      "ink": "#e8f2fa",
      "inkSoft": "#b3ccdd",
      "inkFaint": "#7b9cb2",
      "accent": "#b0eaff",
      "accentInk": "#03161f",
      "line": "rgba(232,242,250,.18)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Chakra Petch",
      "body": "Space Grotesk",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "12px",
      "body": "15px",
      "h3": "20px",
      "h2": "30px",
      "h1": "46px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.24,
      "body": 1.62
    },
    "tracking": {
      "display": ".01em",
      "heading": ".02em",
      "body": "0",
      "label": ".08em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 200,
      "slowMs": 360,
      "easing": "cubic-bezier(0.55,0.06,0.35,1)",
      "easingPoints": [
        0.55,
        0.06,
        0.35,
        1
      ],
      "enter": {
        "durationMs": 360,
        "easing": "cubic-bezier(0.55,0.06,0.35,1)",
        "offsetY": 6,
        "stagger": 0.045
      },
      "scroll": {
        "durationMs": 400,
        "offsetY": 9,
        "triggerPercent": 89,
        "once": true
      },
      "hover": {
        "durationMs": 140,
        "imageScale": 1.005
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — ızgara çizgisi statik kalır"
    }
  },
  "machined-metal-panel": {
    "num": "57",
    "name": "İşlenmiş Metal Panel",
    "family": "Endüstriyel",
    "light": {
      "bg": "#d5d8da",
      "bg2": "#c9cdd0",
      "surface": "#e2e5e7",
      "surface2": "#eceef0",
      "ink": "#1b1f22",
      "inkSoft": "#4e565c",
      "inkFaint": "#6b7379",
      "accent": "#9c4a0c",
      "accentInk": "#ffffff",
      "line": "rgba(27,31,34,.18)"
    },
    "dark": {
      "bg": "#1a1d1f",
      "bg2": "#202426",
      "surface": "#24282b",
      "surface2": "#2b3033",
      "ink": "#e6e9ea",
      "inkSoft": "#aeb6ba",
      "inkFaint": "#7a8286",
      "accent": "#e59244",
      "accentInk": "#1a1d1f",
      "line": "rgba(230,233,234,.18)"
    },
    "radius": "3px",
    "radiusLg": "6px",
    "shadow": "var(--shadow) = inset üst 1px açık + inset alt 1px koyu (bevel)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Jost",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "9px",
      "caption": "10px",
      "small": "12px",
      "body": "16px",
      "h3": "19px",
      "h2": "26px",
      "h1": "38px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.26,
      "body": 1.58
    },
    "tracking": {
      "display": ".06em",
      "heading": ".04em",
      "body": "0",
      "label": ".14em"
    },
    "motion": {
      "fastMs": 80,
      "baseMs": 160,
      "slowMs": 280,
      "easing": "cubic-bezier(0.28,1.46,0.58,1)",
      "easingPoints": [
        0.28,
        1.46,
        0.58,
        1
      ],
      "enter": {
        "durationMs": 260,
        "easing": "cubic-bezier(0.28,1.46,0.58,1)",
        "offsetY": 4,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 280,
        "offsetY": 11,
        "triggerPercent": 87,
        "once": true
      },
      "hover": {
        "durationMs": 110,
        "imageScale": 1.008
      },
      "pin": {
        "enabled": true,
        "scrub": 0.62
      },
      "reduced": "0.01ms (tokens.css global) — bevel ve nokta sabit kalır"
    }
  },
  "safety-signage": {
    "num": "58",
    "name": "Güvenlik Tabelası",
    "family": "Endüstriyel",
    "light": {
      "bg": "#12120e",
      "bg2": "#1a1a14",
      "surface": "#1f1f18",
      "surface2": "#26261d",
      "ink": "#f6f2e4",
      "inkSoft": "#c4c0a9",
      "inkFaint": "#8b8874",
      "accent": "#ffd52e",
      "accentInk": "#14140d",
      "line": "rgba(246,242,228,.20)"
    },
    "dark": {
      "bg": "#090906",
      "bg2": "#0f0f0b",
      "surface": "#15150e",
      "surface2": "#1d1d15",
      "ink": "#fbf8ec",
      "inkSoft": "#cdc9b2",
      "inkFaint": "#918e79",
      "accent": "#fff08a",
      "accentInk": "#0f0f0a",
      "line": "rgba(251,248,236,.22)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Anton",
      "body": "Rajdhani",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "17px",
      "h3": "24px",
      "h2": "40px",
      "h1": "72px",
      "h1Mobile": "40px"
    },
    "weights": {
      "body": 500,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 0.94,
      "heading": 1.1,
      "body": 1.45
    },
    "tracking": {
      "display": ".01em",
      "heading": ".02em",
      "body": ".01em",
      "label": ".1em"
    },
    "motion": {
      "fastMs": 60,
      "baseMs": 150,
      "slowMs": 220,
      "easing": "linear",
      "easingPoints": [
        0,
        0,
        1,
        1
      ],
      "enter": {
        "durationMs": 140,
        "easing": "linear",
        "offsetY": 16,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 150,
        "offsetY": 22,
        "triggerPercent": 93,
        "once": true
      },
      "hover": {
        "durationMs": 80,
        "imageScale": 1.012
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — çapraz bant statik kalır"
    }
  },
  "mes-production-line": {
    "num": "59",
    "name": "Üretim Hattı · MES",
    "family": "Endüstriyel",
    "light": {
      "bg": "#f2f4f3",
      "bg2": "#e8ebe9",
      "surface": "#ffffff",
      "surface2": "#f7f9f8",
      "ink": "#17201c",
      "inkSoft": "#4c5a53",
      "inkFaint": "#7d8a83",
      "accent": "#0d7a4f",
      "accentInk": "#ffffff",
      "line": "rgba(23,32,28,.14)"
    },
    "dark": {
      "bg": "#101614",
      "bg2": "#141b18",
      "surface": "#18201c",
      "surface2": "#1e2723",
      "ink": "#e3ece6",
      "inkSoft": "#a5b4ab",
      "inkFaint": "#78867e",
      "accent": "#35c98b",
      "accentInk": "#06110c",
      "line": "rgba(227,236,230,.16)"
    },
    "radius": "4px",
    "radiusLg": "8px",
    "shadow": "0 1px 2px rgba(23,32,28,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "JetBrains Mono",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "18px",
      "h2": "24px",
      "h1": "34px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.16,
      "heading": 1.3,
      "body": 1.55
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".06em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 260,
      "slowMs": 480,
      "easing": "cubic-bezier(0.12,0.94,0.24,1)",
      "easingPoints": [
        0.12,
        0.94,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 440,
        "easing": "cubic-bezier(0.12,0.94,0.24,1)",
        "offsetY": 20,
        "stagger": 0.035
      },
      "scroll": {
        "durationMs": 480,
        "offsetY": 30,
        "triggerPercent": 76,
        "once": true
      },
      "hover": {
        "durationMs": 180,
        "imageScale": 1.016
      },
      "pin": {
        "enabled": true,
        "scrub": 0.95
      },
      "reduced": "0.01ms (tokens.css global) — akış şeridi ve sayaçlar sabit kalır"
    }
  },
  "energy-grid": {
    "num": "60",
    "name": "Enerji Şebekesi",
    "family": "Endüstriyel",
    "light": {
      "bg": "#0c0f12",
      "bg2": "#101519",
      "surface": "#131a1f",
      "surface2": "#182127",
      "ink": "#e4eef2",
      "inkSoft": "#a7b8c0",
      "inkFaint": "#71858f",
      "accent": "#9be23c",
      "accentInk": "#0e1503",
      "line": "rgba(228,238,242,.14)"
    },
    "dark": {
      "bg": "#04080d",
      "bg2": "#081019",
      "surface": "#0b1620",
      "surface2": "#102230",
      "ink": "#edf5f7",
      "inkSoft": "#b0c1c8",
      "inkFaint": "#7b8f98",
      "accent": "#d2ff85",
      "accentInk": "#080d01",
      "line": "rgba(237,245,247,.16)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "0 8px 24px rgba(3,6,8,.55)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Space Grotesk",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "21px",
      "h2": "32px",
      "h1": "52px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.18,
      "body": 1.6
    },
    "tracking": {
      "display": "-.01em",
      "heading": ".01em",
      "body": "0",
      "label": ".12em"
    },
    "motion": {
      "fastMs": 130,
      "baseMs": 340,
      "slowMs": 660,
      "easing": "cubic-bezier(0.45,0,0.15,1)",
      "easingPoints": [
        0.45,
        0,
        0.15,
        1
      ],
      "enter": {
        "durationMs": 580,
        "easing": "cubic-bezier(0.45,0,0.15,1)",
        "offsetY": 12,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 660,
        "offsetY": 16,
        "triggerPercent": 81,
        "once": true
      },
      "hover": {
        "durationMs": 200,
        "imageScale": 1.004
      },
      "pin": {
        "enabled": true,
        "scrub": 1.45
      },
      "reduced": "0.01ms (tokens.css global) — akış çizgisi ve ölçüm sayacı sabit kalır"
    }
  },
  "calibration-lab": {
    "num": "61",
    "name": "Calibration Lab",
    "family": "Endüstriyel",
    "light": {
      "bg": "#eef1f0",
      "bg2": "#e5eae9",
      "surface": "#fbfcfc",
      "surface2": "#f3f7f6",
      "ink": "#101a1a",
      "inkSoft": "#4a5c5b",
      "inkFaint": "#728482",
      "accent": "#0d5f5c",
      "accentInk": "#f4fbfa",
      "line": "rgba(16,26,26,.15)"
    },
    "dark": {
      "bg": "#0c1414",
      "bg2": "#111b1b",
      "surface": "#142020",
      "surface2": "#1a2828",
      "ink": "#e6efee",
      "inkSoft": "#a3b6b4",
      "inkFaint": "#6f8482",
      "accent": "#3fd7cb",
      "accentInk": "#02201d",
      "line": "rgba(230,239,238,.16)"
    },
    "radius": "3px",
    "radiusLg": "6px",
    "shadow": "0 1px 2px rgba(16,26,26,.06)",
    "shadowHard": "0 0 0 1px rgba(16,26,26,.24)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Jost",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.16,
      "body": 1.62
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 180,
      "slowMs": 420,
      "easing": "cubic-bezier(0.16,0.84,0.44,1)",
      "easingPoints": [
        0.16,
        0.84,
        0.44,
        1
      ],
      "enter": {
        "durationMs": 420,
        "easing": "cubic-bezier(0.16,0.84,0.44,1)",
        "offsetY": 8,
        "stagger": 0.045
      },
      "scroll": {
        "durationMs": 360,
        "offsetY": 12,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 140,
        "imageScale": 1.006
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — okuma bandı sayı geçişi anında, imleç sabit"
    }
  },
  "warehouse-flow": {
    "num": "62",
    "name": "Warehouse Flow",
    "family": "Endüstriyel",
    "light": {
      "bg": "#f3f1ec",
      "bg2": "#e7e4dc",
      "surface": "#fcfbf8",
      "surface2": "#f0ede5",
      "ink": "#17150f",
      "inkSoft": "#56523f",
      "inkFaint": "#807b66",
      "accent": "#f2b705",
      "accentInk": "#1a1608",
      "line": "rgba(23,21,15,.22)"
    },
    "dark": {
      "bg": "#14130f",
      "bg2": "#1c1a14",
      "surface": "#211f18",
      "surface2": "#2a271d",
      "ink": "#f2efe4",
      "inkSoft": "#ada695",
      "inkFaint": "#7d7768",
      "accent": "#ffc728",
      "accentInk": "#1a1608",
      "line": "rgba(242,239,228,.16)"
    },
    "radius": "2px",
    "radiusLg": "8px",
    "shadow": "0 1px 0 rgba(23,21,15,.10)",
    "shadowHard": "4px 4px 0 rgba(23,21,15,.88)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "20px",
      "h2": "30px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 0.96,
      "heading": 1.1,
      "body": 1.55
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 240,
      "slowMs": 360,
      "easing": "cubic-bezier(0.34,1.56,0.64,1)",
      "easingPoints": [
        0.34,
        1.56,
        0.64,
        1
      ],
      "enter": {
        "durationMs": 300,
        "easing": "cubic-bezier(0.34,1.56,0.64,1)",
        "offsetY": 18,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 40,
        "triggerPercent": 78,
        "once": false
      },
      "hover": {
        "durationMs": 110,
        "imageScale": 1.045
      },
      "pin": {
        "enabled": true,
        "scrub": 0.65
      },
      "reduced": "0.01ms (tokens.css global) — taşıma ve tarama animasyonu durur, durum anında değişir"
    }
  },
  "maintenance-cmms": {
    "num": "63",
    "name": "Maintenance CMMS",
    "family": "Endüstriyel",
    "light": {
      "bg": "#17191a",
      "bg2": "#1e2122",
      "surface": "#222628",
      "surface2": "#2b3032",
      "ink": "#ece9e3",
      "inkSoft": "#a9a8a2",
      "inkFaint": "#7a7b77",
      "accent": "#ff8a3d",
      "accentInk": "#1a0f05",
      "line": "rgba(236,233,227,.16)"
    },
    "dark": {
      "bg": "#060708",
      "bg2": "#0a0c0d",
      "surface": "#0e1112",
      "surface2": "#161a1c",
      "ink": "#f7f4ee",
      "inkSoft": "#b6b4ae",
      "inkFaint": "#868784",
      "accent": "#ffa066",
      "accentInk": "#170b03",
      "line": "rgba(247,244,238,.18)"
    },
    "radius": "6px",
    "radiusLg": "10px",
    "shadow": "0 2px 6px rgba(0,0,0,.35)",
    "shadowHard": "0 0 0 2px rgba(255,138,61,.32)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Chakra Petch",
      "body": "Space Grotesk",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "18px",
      "h2": "24px",
      "h1": "38px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 500,
      "strong": 700,
      "display": 600
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "0",
      "heading": "0.01em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 260,
      "slowMs": 550,
      "easing": "cubic-bezier(0.4,0,0.2,1)",
      "easingPoints": [
        0.4,
        0,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 550,
        "easing": "cubic-bezier(0.4,0,0.2,1)",
        "offsetY": 26,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 620,
        "offsetY": 20,
        "triggerPercent": 72,
        "once": true
      },
      "hover": {
        "durationMs": 260,
        "imageScale": 1.018
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — adım onayı ve giriş anında, dönen pul durur"
    }
  },
  "construction-site": {
    "num": "64",
    "name": "Construction Site",
    "family": "Endüstriyel",
    "light": {
      "bg": "#e8e2d4",
      "bg2": "#dcd4c2",
      "surface": "#f4efe4",
      "surface2": "#eae3d4",
      "ink": "#191612",
      "inkSoft": "#4f483d",
      "inkFaint": "#7b7059",
      "accent": "#a03a26",
      "accentInk": "#f7f1e6",
      "line": "rgba(25,22,18,.42)"
    },
    "dark": {
      "bg": "#14120e",
      "bg2": "#1c1914",
      "surface": "#211d17",
      "surface2": "#2a251d",
      "ink": "#f0e9db",
      "inkSoft": "#b1a795",
      "inkFaint": "#82796a",
      "accent": "#df6b4a",
      "accentInk": "#130a06",
      "line": "rgba(240,233,219,.18)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "0 1px 0 rgba(25,22,18,.12)",
    "shadowHard": "6px 6px 0 rgba(25,22,18,.85)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Anton",
      "body": "Jost",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "21px",
      "h2": "30px",
      "h1": "64px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 0.92,
      "heading": 1.05,
      "body": 1.62
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 340,
      "slowMs": 460,
      "easing": "cubic-bezier(0.2,1.3,0.3,1)",
      "easingPoints": [
        0.2,
        1.3,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 460,
        "easing": "cubic-bezier(0.2,1.3,0.3,1)",
        "offsetY": 44,
        "stagger": 0.11
      },
      "scroll": {
        "durationMs": 340,
        "offsetY": 56,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 190,
        "imageScale": 1.012
      },
      "pin": {
        "enabled": true,
        "scrub": 0.55
      },
      "reduced": "0.01ms (tokens.css global) — blok yerleşimi anında, blok ilerlemesi durur"
    }
  },
  "cockpit-avionics": {
    "num": "65",
    "name": "Cockpit Avionics",
    "family": "Endüstriyel",
    "light": {
      "bg": "#0a0f14",
      "bg2": "#10161c",
      "surface": "#131a21",
      "surface2": "#1a232b",
      "ink": "#e8f0f4",
      "inkSoft": "#9fb0ba",
      "inkFaint": "#6d7f8a",
      "accent": "#35d6e8",
      "accentInk": "#032026",
      "line": "rgba(232,240,244,.15)"
    },
    "dark": {
      "bg": "#02040a",
      "bg2": "#05080f",
      "surface": "#080d16",
      "surface2": "#0d1420",
      "ink": "#f4fbff",
      "inkSoft": "#b0c4d2",
      "inkFaint": "#7e93a3",
      "accent": "#7ff0ff",
      "accentInk": "#021a22",
      "line": "rgba(244,251,255,.2)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "0 1px 3px rgba(0,0,0,.5)",
    "shadowHard": "0 0 0 1px rgba(53,214,232,.45)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Rajdhani",
      "body": "Inter",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "14px",
      "h3": "17px",
      "h2": "22px",
      "h1": "34px",
      "h1Mobile": "24px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.15,
      "body": 1.5
    },
    "tracking": {
      "display": "0.06em",
      "heading": "0.04em",
      "body": "0",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 70,
      "baseMs": 160,
      "slowMs": 240,
      "easing": "cubic-bezier(0,0,0.2,1)",
      "easingPoints": [
        0,
        0,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 240,
        "easing": "cubic-bezier(0,0,0.2,1)",
        "offsetY": 6,
        "stagger": 0.055
      },
      "scroll": {
        "durationMs": 280,
        "offsetY": 4,
        "triggerPercent": 94,
        "once": true
      },
      "hover": {
        "durationMs": 70,
        "imageScale": 1.004
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — değer güncellemesi anında, segment çubuğu sıçrar, uyarı yanıp sönmez"
    }
  },
  "nordic-folk": {
    "num": "66",
    "name": "Nordic Folk",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#f2ece0",
      "bg2": "#e9e0cf",
      "surface": "#fbf7ed",
      "surface2": "#e3d9c6",
      "ink": "#1d2a24",
      "inkSoft": "#4b5b51",
      "inkFaint": "#6f7d71",
      "accent": "#9c2b21",
      "accentInk": "#fdf6e8",
      "line": "rgba(29,42,36,.16)"
    },
    "dark": {
      "bg": "#141a17",
      "bg2": "#1a221e",
      "surface": "#1f2823",
      "surface2": "#27332c",
      "ink": "#ece5d5",
      "inkSoft": "#b4bfae",
      "inkFaint": "#8a9686",
      "accent": "#e07a66",
      "accentInk": "#141a17",
      "line": "rgba(236,229,213,.16)"
    },
    "radius": "6px",
    "radiusLg": "10px",
    "shadow": "0 1px 2px rgba(29,42,36,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Lora",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "30px",
      "h1": "54px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.16,
      "body": 1.66
    },
    "tracking": {
      "display": "-0.015em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 190,
      "slowMs": 300,
      "easing": "cubic-bezier(0.22,0.61,0.36,1)",
      "easingPoints": [
        0.22,
        0.61,
        0.36,
        1
      ],
      "enter": {
        "durationMs": 620,
        "easing": "cubic-bezier(0.22,0.61,0.36,1)",
        "offsetY": 18,
        "stagger": 0.045
      },
      "scroll": {
        "durationMs": 760,
        "offsetY": 22,
        "triggerPercent": 86,
        "once": true
      },
      "hover": {
        "durationMs": 190,
        "imageScale": 1.018
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — nokta şeritleri statik kalır"
    }
  },
  "japanese-ma": {
    "num": "67",
    "name": "Japanese Ma",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#f6f5f1",
      "bg2": "#ecebe5",
      "surface": "#ffffff",
      "surface2": "#f1f0ea",
      "ink": "#16181a",
      "inkSoft": "#4a4f52",
      "inkFaint": "#7b8084",
      "accent": "#bf3320",
      "accentInk": "#fdf7f2",
      "line": "rgba(22,24,26,.14)"
    },
    "dark": {
      "bg": "#0f1113",
      "bg2": "#141719",
      "surface": "#171a1d",
      "surface2": "#1e2225",
      "ink": "#ece9e2",
      "inkSoft": "#a8adaf",
      "inkFaint": "#7d8286",
      "accent": "#e4674f",
      "accentInk": "#12100f",
      "line": "rgba(236,233,226,.15)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Jost",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "17px",
      "h2": "26px",
      "h1": "64px",
      "h1Mobile": "40px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.2,
      "body": 1.78
    },
    "tracking": {
      "display": "-0.03em",
      "heading": "-0.02em",
      "body": "0",
      "label": "0.22em"
    },
    "motion": {
      "fastMs": 180,
      "baseMs": 320,
      "slowMs": 520,
      "easing": "cubic-bezier(0.25,0.1,0.25,1)",
      "easingPoints": [
        0.25,
        0.1,
        0.25,
        1
      ],
      "enter": {
        "durationMs": 1050,
        "easing": "cubic-bezier(0.25,0.1,0.25,1)",
        "offsetY": 12,
        "stagger": 0.14
      },
      "scroll": {
        "durationMs": 1150,
        "offsetY": 14,
        "triggerPercent": 76,
        "once": true
      },
      "hover": {
        "durationMs": 520,
        "imageScale": 1.006
      },
      "pin": {
        "enabled": true,
        "scrub": 0.6
      },
      "reduced": "0.01ms (tokens.css global) — hiçbir katman kaymaz"
    }
  },
  "levant-calligraphy": {
    "num": "68",
    "name": "Levant Calligraphy",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#f4eee1",
      "bg2": "#eae2d0",
      "surface": "#fdf9ef",
      "surface2": "#f0e8d7",
      "ink": "#171d2e",
      "inkSoft": "#444d63",
      "inkFaint": "#6f7789",
      "accent": "#7a5a22",
      "accentInk": "#fdf8ec",
      "line": "rgba(23,29,46,.16)"
    },
    "dark": {
      "bg": "#101426",
      "bg2": "#161b30",
      "surface": "#1a2038",
      "surface2": "#222a45",
      "ink": "#ece5d3",
      "inkSoft": "#b3b6c4",
      "inkFaint": "#868ca0",
      "accent": "#d8b269",
      "accentInk": "#141422",
      "line": "rgba(236,229,211,.16)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "0 2px 14px rgba(23,29,46,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Lora",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "31px",
      "h1": "58px",
      "h1Mobile": "36px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.14,
      "body": 1.74
    },
    "tracking": {
      "display": "-0.005em",
      "heading": "0",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 340,
      "slowMs": 620,
      "easing": "cubic-bezier(0.34,0.03,0.24,1)",
      "easingPoints": [
        0.34,
        0.03,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 940,
        "easing": "cubic-bezier(0.34,0.03,0.24,1)",
        "offsetY": 26,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 1020,
        "offsetY": 30,
        "triggerPercent": 79,
        "once": true
      },
      "hover": {
        "durationMs": 340,
        "imageScale": 1.032
      },
      "pin": {
        "enabled": true,
        "scrub": 1.4
      },
      "reduced": "0.01ms (tokens.css global) — kalem kuralı animasyonu durur"
    }
  },
  "andalusian-azulejo": {
    "num": "69",
    "name": "Andalusian Azulejo",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#ecebe6",
      "bg2": "#e2e1da",
      "surface": "#ffffff",
      "surface2": "#f5f4ef",
      "ink": "#14233a",
      "inkSoft": "#46566f",
      "inkFaint": "#72808f",
      "accent": "#1c4ea0",
      "accentInk": "#f4f8ff",
      "line": "rgba(20,35,58,.18)"
    },
    "dark": {
      "bg": "#0b1524",
      "bg2": "#101c2e",
      "surface": "#142237",
      "surface2": "#1b2c45",
      "ink": "#e9f0f8",
      "inkSoft": "#a9b7c8",
      "inkFaint": "#7d8ea1",
      "accent": "#5b93f0",
      "accentInk": "#081120",
      "line": "rgba(233,240,248,.16)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "0 1px 0 rgba(20,35,58,.14)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poiret One",
      "body": "Jost",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "19px",
      "h2": "28px",
      "h1": "52px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.2,
      "body": 1.68
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.015em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 150,
      "slowMs": 300,
      "easing": "cubic-bezier(0.6,0.02,0.2,1)",
      "easingPoints": [
        0.6,
        0.02,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 420,
        "easing": "cubic-bezier(0.6,0.02,0.2,1)",
        "offsetY": 10,
        "stagger": 0.07
      },
      "scroll": {
        "durationMs": 550,
        "offsetY": 12,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 150,
        "imageScale": 1.045
      },
      "pin": {
        "enabled": true,
        "scrub": 0.9
      },
      "reduced": "0.01ms (tokens.css global) — desen statik kalır"
    }
  },
  "slavic-late-brutalist": {
    "num": "70",
    "name": "Slavic Late Brutalist",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#d8d6d0",
      "bg2": "#cdcac3",
      "surface": "#e7e5e0",
      "surface2": "#bfbcb5",
      "ink": "#16181a",
      "inkSoft": "#43464a",
      "inkFaint": "#6b6f74",
      "accent": "#a8431d",
      "accentInk": "#f7f3ea",
      "line": "rgba(22,24,26,.26)"
    },
    "dark": {
      "bg": "#1a1b1c",
      "bg2": "#202224",
      "surface": "#24262a",
      "surface2": "#2f3236",
      "ink": "#e8e6e1",
      "inkSoft": "#adaead",
      "inkFaint": "#83858a",
      "accent": "#d26234",
      "accentInk": "#141414",
      "line": "rgba(232,230,225,.22)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "5px 5px 0 #16181a",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Anton",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "21px",
      "h2": "34px",
      "h1": "68px",
      "h1Mobile": "40px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 0.94,
      "heading": 1.02,
      "body": 1.6
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 70,
      "baseMs": 140,
      "slowMs": 260,
      "easing": "cubic-bezier(0.85,0,0.15,1)",
      "easingPoints": [
        0.85,
        0,
        0.15,
        1
      ],
      "enter": {
        "durationMs": 260,
        "easing": "cubic-bezier(0.85,0,0.15,1)",
        "offsetY": 34,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 300,
        "offsetY": 40,
        "triggerPercent": 92,
        "once": false
      },
      "hover": {
        "durationMs": 70,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — beton dokusu ve şerit statik kalır"
    }
  },
  "west-african-pattern": {
    "num": "71",
    "name": "West African Pattern",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#17120f",
      "bg2": "#1e1713",
      "surface": "#241b16",
      "surface2": "#2d221b",
      "ink": "#f3e7d3",
      "inkSoft": "#c0ae93",
      "inkFaint": "#8d7f68",
      "accent": "#d99a1f",
      "accentInk": "#1c1206",
      "line": "rgba(243,231,211,.16)"
    },
    "dark": {
      "bg": "#0a0705",
      "bg2": "#0e0a07",
      "surface": "#14100c",
      "surface2": "#1c1711",
      "ink": "#fbf2e2",
      "inkSoft": "#cbbba1",
      "inkFaint": "#9a8b72",
      "accent": "#f2b64a",
      "accentInk": "#1d1204",
      "line": "rgba(251,242,226,.2)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Jost",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "26px",
      "h1": "40px",
      "h1Mobile": "27px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.24,
      "body": 1.6
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 130,
      "baseMs": 300,
      "slowMs": 500,
      "easing": "cubic-bezier(0.7,0.15,0.3,1)",
      "easingPoints": [
        0.7,
        0.15,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 500,
        "easing": "cubic-bezier(0.7,0.15,0.3,1)",
        "offsetY": 22,
        "stagger": 0.055
      },
      "scroll": {
        "durationMs": 580,
        "offsetY": 16,
        "triggerPercent": 84,
        "once": true
      },
      "hover": {
        "durationMs": 210,
        "imageScale": 1.022
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; dokuma bandı sabit kalır, desen animasyonu yok"
    }
  },
  "andean-textile": {
    "num": "72",
    "name": "Andean Textile",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#f1ece2",
      "bg2": "#e7e0d2",
      "surface": "#fffdf8",
      "surface2": "#f7f2e8",
      "ink": "#1a1620",
      "inkSoft": "#4e4657",
      "inkFaint": "#857c8f",
      "accent": "#8d2148",
      "accentInk": "#fdf6f7",
      "line": "rgba(26,22,32,.14)"
    },
    "dark": {
      "bg": "#171319",
      "bg2": "#1c1820",
      "surface": "#211c26",
      "surface2": "#2a2430",
      "ink": "#efe8f2",
      "inkSoft": "#b6abbf",
      "inkFaint": "#82768d",
      "accent": "#e06a92",
      "accentInk": "#24101a",
      "line": "rgba(239,232,242,.16)"
    },
    "radius": "4px",
    "radiusLg": "12px",
    "shadow": "none",
    "shadowHard": "3px 3px 0 rgba(26,22,32,.14)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Nunito",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "19px",
      "h2": "26px",
      "h1": "38px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.26,
      "body": 1.62
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 240,
      "baseMs": 420,
      "slowMs": 720,
      "easing": "cubic-bezier(0.5,0,0.5,1)",
      "easingPoints": [
        0.5,
        0,
        0.5,
        1
      ],
      "enter": {
        "durationMs": 720,
        "easing": "cubic-bezier(0.5,0,0.5,1)",
        "offsetY": 16,
        "stagger": 0.075
      },
      "scroll": {
        "durationMs": 660,
        "offsetY": 28,
        "triggerPercent": 80,
        "once": false
      },
      "hover": {
        "durationMs": 240,
        "imageScale": 1.014
      },
      "pin": {
        "enabled": true,
        "scrub": 1.15
      },
      "reduced": "0.01ms; basamak bandı statik, ofset gölge sabit"
    }
  },
  "indian-block-print": {
    "num": "73",
    "name": "Indian Block Print",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#f7f1e2",
      "bg2": "#eee6d2",
      "surface": "#fffcf3",
      "surface2": "#f6efdd",
      "ink": "#16181d",
      "inkSoft": "#464a55",
      "inkFaint": "#7c8089",
      "accent": "#26356e",
      "accentInk": "#f7f4e9",
      "line": "rgba(22,24,29,.15)"
    },
    "dark": {
      "bg": "#131519",
      "bg2": "#181b20",
      "surface": "#1c2026",
      "surface2": "#24282f",
      "ink": "#eceee6",
      "inkSoft": "#aeb2b8",
      "inkFaint": "#7b7f88",
      "accent": "#7f97e0",
      "accentInk": "#0f1424",
      "line": "rgba(236,238,230,.16)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "1px 1px 0 rgba(22,24,29,.10)",
    "shadowHard": "4px 4px 0 rgba(22,24,29,.16)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Playfair Display",
      "body": "Poppins",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "18px",
      "h2": "24px",
      "h1": "36px",
      "h1Mobile": "25px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1.16,
      "heading": 1.28,
      "body": 1.66
    },
    "tracking": {
      "display": "0.015em",
      "heading": "0.015em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 130,
      "baseMs": 220,
      "slowMs": 300,
      "easing": "steps(2, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 300,
        "easing": "steps(2, end)",
        "offsetY": 12,
        "stagger": 0.035
      },
      "scroll": {
        "durationMs": 340,
        "offsetY": 14,
        "triggerPercent": 90,
        "once": true
      },
      "hover": {
        "durationMs": 130,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; kayma izi statik kalır, damga animasyonu yok"
    }
  },
  "persian-miniature": {
    "num": "74",
    "name": "Persian Miniature",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#131a2c",
      "bg2": "#182135",
      "surface": "#1c2640",
      "surface2": "#232f4c",
      "ink": "#f0e6ce",
      "inkSoft": "#bfb193",
      "inkFaint": "#8b8368",
      "accent": "#cfa53a",
      "accentInk": "#1a1206",
      "line": "rgba(240,230,206,.16)"
    },
    "dark": {
      "bg": "#070a15",
      "bg2": "#0a0f1e",
      "surface": "#0d1324",
      "surface2": "#141b30",
      "ink": "#f6efe2",
      "inkSoft": "#c2b6a0",
      "inkFaint": "#8f8571",
      "accent": "#e6c169",
      "accentInk": "#1b1406",
      "line": "rgba(246,239,226,.18)"
    },
    "radius": "10px",
    "radiusLg": "16px",
    "shadow": "0 2px 6px rgba(0,0,0,.45)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "EB Garamond",
      "body": "Lora",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "17px",
      "h3": "20px",
      "h2": "28px",
      "h1": "42px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.3,
      "body": 1.72
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.02em",
      "body": "0.005em",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 440,
      "baseMs": 800,
      "slowMs": 1150,
      "easing": "cubic-bezier(0.45,0.05,0.55,0.95)",
      "easingPoints": [
        0.45,
        0.05,
        0.55,
        0.95
      ],
      "enter": {
        "durationMs": 1150,
        "easing": "cubic-bezier(0.45,0.05,0.55,0.95)",
        "offsetY": 26,
        "stagger": 0.1
      },
      "scroll": {
        "durationMs": 1150,
        "offsetY": 20,
        "triggerPercent": 74,
        "once": true
      },
      "hover": {
        "durationMs": 440,
        "imageScale": 1.008
      },
      "pin": {
        "enabled": true,
        "scrub": 0.85
      },
      "reduced": "0.01ms; madalyon ve çerçeve statik, sayfa geçişi animasyonsuz"
    }
  },
  "aegean-island": {
    "num": "75",
    "name": "Aegean Island",
    "family": "Kültürel & Bölgesel",
    "light": {
      "bg": "#fbfaf6",
      "bg2": "#f2f1ea",
      "surface": "#ffffff",
      "surface2": "#f6f6f1",
      "ink": "#12181c",
      "inkSoft": "#44545c",
      "inkFaint": "#7d8b92",
      "accent": "#0e6f92",
      "accentInk": "#f7fbfd",
      "line": "rgba(18,24,28,.13)"
    },
    "dark": {
      "bg": "#0c1418",
      "bg2": "#101a1f",
      "surface": "#131f25",
      "surface2": "#1a282f",
      "ink": "#e9f2f4",
      "inkSoft": "#a6b6bc",
      "inkFaint": "#71848b",
      "accent": "#4fb8d4",
      "accentInk": "#04181f",
      "line": "rgba(233,242,244,.16)"
    },
    "radius": "14px",
    "radiusLg": "22px",
    "shadow": "0 1px 2px rgba(18,24,28,.07)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Jost",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "27px",
      "h1": "40px",
      "h1Mobile": "27px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 500
    },
    "lineHeight": {
      "display": 1.12,
      "heading": 1.26,
      "body": 1.64
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.02em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 280,
      "baseMs": 440,
      "slowMs": 620,
      "easing": "cubic-bezier(0.25,0.75,0.5,1)",
      "easingPoints": [
        0.25,
        0.75,
        0.5,
        1
      ],
      "enter": {
        "durationMs": 380,
        "easing": "cubic-bezier(0.25,0.75,0.5,1)",
        "offsetY": 8,
        "stagger": 0.08
      },
      "scroll": {
        "durationMs": 440,
        "offsetY": 12,
        "triggerPercent": 87,
        "once": true
      },
      "hover": {
        "durationMs": 280,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; dalga çizgisi statik, geçişler kapanır"
    }
  },
  "biophilic-botanical": {
    "num": "76",
    "name": "Biyofilik Botanik",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#f2f4ea",
      "bg2": "#e9eddd",
      "surface": "#fbfcf6",
      "surface2": "#f5f8ee",
      "ink": "#1b2a1f",
      "inkSoft": "#4a5c4a",
      "inkFaint": "#73826f",
      "accent": "#2f6b3f",
      "accentInk": "#ffffff",
      "line": "rgba(27,42,31,.14)"
    },
    "dark": {
      "bg": "#101a12",
      "bg2": "#16221a",
      "surface": "#1b2a1f",
      "surface2": "#223328",
      "ink": "#e6efe2",
      "inkSoft": "#a9bca6",
      "inkFaint": "#7d9079",
      "accent": "#7fbf6a",
      "accentInk": "#0e1a10",
      "line": "rgba(230,239,226,.16)"
    },
    "radius": "14px",
    "radiusLg": "24px",
    "shadow": "0 8px 24px rgba(27,42,31,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Nunito",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "22px",
      "h2": "32px",
      "h1": "48px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.24,
      "body": 1.65
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".08em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 320,
      "slowMs": 680,
      "easing": "cubic-bezier(0.3,0.7,0.2,1)",
      "easingPoints": [
        0.3,
        0.7,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 680,
        "easing": "cubic-bezier(0.3,0.7,0.2,1)",
        "offsetY": 24,
        "stagger": 0.085
      },
      "scroll": {
        "durationMs": 740,
        "offsetY": 26,
        "triggerPercent": 77,
        "once": true
      },
      "hover": {
        "durationMs": 320,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — yaprak salınımı ve büyüme durur"
    }
  },
  "weather-atmosphere": {
    "num": "77",
    "name": "Hava Durumu & Atmosfer",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#eef2f7",
      "bg2": "#e4eaf2",
      "surface": "#ffffff",
      "surface2": "#f6f9fc",
      "ink": "#1a2430",
      "inkSoft": "#4d5b6b",
      "inkFaint": "#75828d",
      "accent": "#2b6491",
      "accentInk": "#ffffff",
      "line": "rgba(26,36,48,.14)"
    },
    "dark": {
      "bg": "#0e141b",
      "bg2": "#131b24",
      "surface": "#18222d",
      "surface2": "#1e2a36",
      "ink": "#e6eef6",
      "inkSoft": "#a8b7c6",
      "inkFaint": "#7c8b9a",
      "accent": "#6fb3e6",
      "accentInk": "#08131c",
      "line": "rgba(230,238,246,.16)"
    },
    "radius": "10px",
    "radiusLg": "18px",
    "shadow": "0 12px 32px rgba(26,36,48,.12)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Poppins",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "22px",
      "h2": "34px",
      "h1": "54px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "-.01em",
      "heading": "0",
      "body": "0",
      "label": ".1em"
    },
    "motion": {
      "fastMs": 180,
      "baseMs": 360,
      "slowMs": 780,
      "easing": "cubic-bezier(0.25,0.6,0.15,1)",
      "easingPoints": [
        0.25,
        0.6,
        0.15,
        1
      ],
      "enter": {
        "durationMs": 780,
        "easing": "cubic-bezier(0.25,0.6,0.15,1)",
        "offsetY": 18,
        "stagger": 0.065
      },
      "scroll": {
        "durationMs": 640,
        "offsetY": 20,
        "triggerPercent": 83,
        "once": true
      },
      "hover": {
        "durationMs": 260,
        "imageScale": 1.012
      },
      "pin": {
        "enabled": true,
        "scrub": 1.35
      },
      "reduced": "0.01ms (tokens.css global) — bulut kayması ve blur geçişi durur"
    }
  },
  "topographic-terrain": {
    "num": "78",
    "name": "Topografya & Arazi",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#ece6d8",
      "bg2": "#e2dac9",
      "surface": "#f7f3e8",
      "surface2": "#f0eadc",
      "ink": "#241f18",
      "inkSoft": "#574e3e",
      "inkFaint": "#857b64",
      "accent": "#a34f24",
      "accentInk": "#fff8ef",
      "line": "rgba(36,31,24,.16)"
    },
    "dark": {
      "bg": "#17130e",
      "bg2": "#1d1811",
      "surface": "#241e16",
      "surface2": "#2b2419",
      "ink": "#efe8da",
      "inkSoft": "#bcb09c",
      "inkFaint": "#8c8271",
      "accent": "#e08a4e",
      "accentInk": "#1a1209",
      "line": "rgba(239,232,218,.16)"
    },
    "radius": "2px",
    "radiusLg": "6px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Grotesk",
      "body": "Jost",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "16px",
      "h3": "20px",
      "h2": "30px",
      "h1": "46px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 500
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.22,
      "body": 1.6
    },
    "tracking": {
      "display": ".01em",
      "heading": ".02em",
      "body": "0",
      "label": ".12em"
    },
    "motion": {
      "fastMs": 110,
      "baseMs": 240,
      "slowMs": 480,
      "easing": "cubic-bezier(0.5,0.05,0.3,1)",
      "easingPoints": [
        0.5,
        0.05,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 480,
        "easing": "cubic-bezier(0.5,0.05,0.3,1)",
        "offsetY": 32,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 520,
        "offsetY": 34,
        "triggerPercent": 75,
        "once": true
      },
      "hover": {
        "durationMs": 150,
        "imageScale": 1.006
      },
      "pin": {
        "enabled": true,
        "scrub": 0.7
      },
      "reduced": "0.01ms (tokens.css global) — kontur çizimi ve pin statik kalır"
    }
  },
  "ocean-current": {
    "num": "79",
    "name": "Deniz & Akıntı",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#0a2029",
      "bg2": "#0e2833",
      "surface": "#12323e",
      "surface2": "#163a48",
      "ink": "#dff0f4",
      "inkSoft": "#a3c4cd",
      "inkFaint": "#6f939d",
      "accent": "#46d8c4",
      "accentInk": "#04211d",
      "line": "rgba(223,240,244,.16)"
    },
    "dark": {
      "bg": "#01070c",
      "bg2": "#041019",
      "surface": "#061723",
      "surface2": "#0a2130",
      "ink": "#f2fcff",
      "inkSoft": "#b9d9e0",
      "inkFaint": "#83aab4",
      "accent": "#8affe8",
      "accentInk": "#02100c",
      "line": "rgba(242,252,255,.22)"
    },
    "radius": "6px",
    "radiusLg": "16px",
    "shadow": "0 16px 40px rgba(3,12,16,.55)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Lora",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "12px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "24px",
      "h2": "36px",
      "h1": "56px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.22,
      "body": 1.75
    },
    "tracking": {
      "display": ".005em",
      "heading": ".01em",
      "body": "0",
      "label": ".06em"
    },
    "motion": {
      "fastMs": 200,
      "baseMs": 420,
      "slowMs": 830,
      "easing": "cubic-bezier(0.35,0.02,0.25,1)",
      "easingPoints": [
        0.35,
        0.02,
        0.25,
        1
      ],
      "enter": {
        "durationMs": 830,
        "easing": "cubic-bezier(0.35,0.02,0.25,1)",
        "offsetY": 40,
        "stagger": 0.115
      },
      "scroll": {
        "durationMs": 860,
        "offsetY": 36,
        "triggerPercent": 71,
        "once": true
      },
      "hover": {
        "durationMs": 380,
        "imageScale": 1.022
      },
      "pin": {
        "enabled": true,
        "scrub": 1.05
      },
      "reduced": "0.01ms (tokens.css global) — akıntı çizgisi ve pin statik kalır"
    }
  },
  "seasonal-shift": {
    "num": "80",
    "name": "Mevsim Geçişi",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#f6efe2",
      "bg2": "#ede3d2",
      "surface": "#fdf9f1",
      "surface2": "#f7f0e4",
      "ink": "#2a2018",
      "inkSoft": "#5c4c3d",
      "inkFaint": "#8a7b68",
      "accent": "#a4471f",
      "accentInk": "#fff6ec",
      "line": "rgba(42,32,24,.14)"
    },
    "dark": {
      "bg": "#1a1310",
      "bg2": "#211813",
      "surface": "#271d17",
      "surface2": "#2f231b",
      "ink": "#f0e6d8",
      "inkSoft": "#c0af9c",
      "inkFaint": "#8f8172",
      "accent": "#e88f4a",
      "accentInk": "#1b1108",
      "line": "rgba(240,230,216,.16)"
    },
    "radius": "8px",
    "radiusLg": "16px",
    "shadow": "0 6px 20px rgba(42,32,24,.12)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "EB Garamond",
      "body": "Inter",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "21px",
      "h2": "32px",
      "h1": "50px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.24,
      "body": 1.65
    },
    "tracking": {
      "display": "0",
      "heading": ".01em",
      "body": "0",
      "label": ".08em"
    },
    "motion": {
      "fastMs": 150,
      "baseMs": 300,
      "slowMs": 570,
      "easing": "cubic-bezier(0.42,0.12,0.2,1)",
      "easingPoints": [
        0.42,
        0.12,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 570,
        "easing": "cubic-bezier(0.42,0.12,0.2,1)",
        "offsetY": 22,
        "stagger": 0.075
      },
      "scroll": {
        "durationMs": 570,
        "offsetY": 44,
        "triggerPercent": 96,
        "once": true
      },
      "hover": {
        "durationMs": 220,
        "imageScale": 1.018
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — renk geçişi ve pin statik kalır"
    }
  },
  "forest-bark": {
    "num": "81",
    "name": "Forest Bark",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#1f2620",
      "bg2": "#19201a",
      "surface": "#283029",
      "surface2": "#313b31",
      "ink": "#ecefe3",
      "inkSoft": "#b4bfa8",
      "inkFaint": "#85917b",
      "accent": "#d7a469",
      "accentInk": "#201708",
      "line": "rgba(236,239,227,.15)"
    },
    "dark": {
      "bg": "#0a0d08",
      "bg2": "#0d110a",
      "surface": "#131711",
      "surface2": "#1b2117",
      "ink": "#f1f4e7",
      "inkSoft": "#bcc7ae",
      "inkFaint": "#8d9a80",
      "accent": "#e9bd7f",
      "accentInk": "#171004",
      "line": "rgba(241,244,231,.22)"
    },
    "radius": "5px",
    "radiusLg": "11px",
    "shadow": "0 2px 10px rgba(8,12,9,.45)",
    "shadowHard": "0 0 0 1px rgba(215,164,105,.35)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Lora",
      "body": "EB Garamond",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "17px",
      "h3": "22px",
      "h2": "32px",
      "h1": "52px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.14,
      "body": 1.7
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "0",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 320,
      "slowMs": 880,
      "easing": "cubic-bezier(0.32,0.72,0,1)",
      "easingPoints": [
        0.32,
        0.72,
        0,
        1
      ],
      "enter": {
        "durationMs": 880,
        "easing": "cubic-bezier(0.32,0.72,0,1)",
        "offsetY": 30,
        "stagger": 0.12
      },
      "scroll": {
        "durationMs": 950,
        "offsetY": 36,
        "triggerPercent": 82,
        "once": true
      },
      "hover": {
        "durationMs": 320,
        "imageScale": 1.026
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — yaprak salınımı ve giriş durur, içerik anında yerleşir"
    }
  },
  "desert-sand": {
    "num": "82",
    "name": "Desert Sand",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#f0e5cf",
      "bg2": "#e6d9be",
      "surface": "#faf4e6",
      "surface2": "#efe4cc",
      "ink": "#241f18",
      "inkSoft": "#5a4f3e",
      "inkFaint": "#857a62",
      "accent": "#5f4a8a",
      "accentInk": "#f7f1e4",
      "line": "rgba(36,31,24,.16)"
    },
    "dark": {
      "bg": "#191510",
      "bg2": "#211b14",
      "surface": "#251f17",
      "surface2": "#2f271d",
      "ink": "#f4ecdc",
      "inkSoft": "#c0b39c",
      "inkFaint": "#8f8271",
      "accent": "#b39ae0",
      "accentInk": "#1d1230",
      "line": "rgba(244,236,220,.16)"
    },
    "radius": "24px",
    "radiusLg": "44px",
    "shadow": "0 14px 30px -18px rgba(76,58,34,.45)",
    "shadowHard": "0 0 0 1px rgba(36,31,24,.22)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Jost",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "12px",
      "small": "13px",
      "body": "16px",
      "h3": "20px",
      "h2": "30px",
      "h1": "58px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 300
    },
    "lineHeight": {
      "display": 1,
      "heading": 1.12,
      "body": 1.66
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.02em",
      "body": "0",
      "label": "0.22em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 420,
      "slowMs": 1150,
      "easing": "cubic-bezier(0.16,0.62,0.24,1)",
      "easingPoints": [
        0.16,
        0.62,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 1150,
        "easing": "cubic-bezier(0.16,0.62,0.24,1)",
        "offsetY": 40,
        "stagger": 0.16
      },
      "scroll": {
        "durationMs": 1150,
        "offsetY": 48,
        "triggerPercent": 68,
        "once": true
      },
      "hover": {
        "durationMs": 420,
        "imageScale": 1.038
      },
      "pin": {
        "enabled": true,
        "scrub": 1.35
      },
      "reduced": "0.01ms (tokens.css global) — kumul kayması ve pin/scrub kapalı, içerik anında yerleşir"
    }
  },
  "polar-ice": {
    "num": "83",
    "name": "Polar Ice",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#eaf3f8",
      "bg2": "#dceaf2",
      "surface": "#f9fcfe",
      "surface2": "#eef5fa",
      "ink": "#0e2733",
      "inkSoft": "#45626f",
      "inkFaint": "#6c8794",
      "accent": "#096d8a",
      "accentInk": "#f2fbfd",
      "line": "rgba(14,39,51,.14)"
    },
    "dark": {
      "bg": "#071119",
      "bg2": "#0b1a24",
      "surface": "#0e2130",
      "surface2": "#13293a",
      "ink": "#e8f4fa",
      "inkSoft": "#a6c2d0",
      "inkFaint": "#74909e",
      "accent": "#4ecde8",
      "accentInk": "#04212a",
      "line": "rgba(232,244,250,.16)"
    },
    "radius": "2px",
    "radiusLg": "10px",
    "shadow": "0 1px 2px rgba(14,39,51,.08)",
    "shadowHard": "0 0 0 1px rgba(9,109,138,.45)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Grotesk",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "18px",
      "h2": "24px",
      "h1": "40px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.18,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 240,
      "slowMs": 320,
      "easing": "cubic-bezier(0.15,1,0.3,1)",
      "easingPoints": [
        0.15,
        1,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 320,
        "easing": "cubic-bezier(0.15,1,0.3,1)",
        "offsetY": 10,
        "stagger": 0.035
      },
      "scroll": {
        "durationMs": 420,
        "offsetY": 14,
        "triggerPercent": 90,
        "once": false
      },
      "hover": {
        "durationMs": 100,
        "imageScale": 1.01
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — kristal girişi ve kar tanesi dönüşü durur, değer anında yazılır"
    }
  },
  "volcanic-mineral": {
    "num": "84",
    "name": "Volcanic Mineral",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#14120f",
      "bg2": "#0e0d0b",
      "surface": "#1c1916",
      "surface2": "#26221d",
      "ink": "#f0eae0",
      "inkSoft": "#b6a998",
      "inkFaint": "#877d6d",
      "accent": "#e0572a",
      "accentInk": "#120603",
      "line": "rgba(240,234,224,.14)"
    },
    "dark": {
      "bg": "#040403",
      "bg2": "#0b0a08",
      "surface": "#100e0b",
      "surface2": "#191512",
      "ink": "#f8f3ea",
      "inkSoft": "#b9b0a1",
      "inkFaint": "#8b8276",
      "accent": "#ff8a4d",
      "accentInk": "#140703",
      "line": "rgba(248,243,234,.22)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "0 8px 22px -12px rgba(0,0,0,.9)",
    "shadowHard": "0 0 0 1px rgba(224,87,42,.5)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Space Grotesk",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "28px",
      "h1": "48px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 500,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.1,
      "body": 1.58
    },
    "tracking": {
      "display": "0.04em",
      "heading": "0.03em",
      "body": "0",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 300,
      "slowMs": 680,
      "easing": "cubic-bezier(1,0,0.2,1)",
      "easingPoints": [
        1,
        0,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 680,
        "easing": "cubic-bezier(1,0,0.2,1)",
        "offsetY": 12,
        "stagger": 0.15
      },
      "scroll": {
        "durationMs": 300,
        "offsetY": 64,
        "triggerPercent": 74,
        "once": true
      },
      "hover": {
        "durationMs": 460,
        "imageScale": 1.006
      },
      "pin": {
        "enabled": true,
        "scrub": 0.35
      },
      "reduced": "0.01ms (tokens.css global) — kesit kayması ve pin/scrub kapalı, içerik anında"
    }
  },
  "coral-reef": {
    "num": "85",
    "name": "Coral Reef",
    "family": "Doğa & Organik",
    "light": {
      "bg": "#0d2b30",
      "bg2": "#092226",
      "surface": "#123840",
      "surface2": "#174650",
      "ink": "#e6f4f2",
      "inkSoft": "#a4c6c4",
      "inkFaint": "#779c9b",
      "accent": "#ff8a73",
      "accentInk": "#2a0d08",
      "line": "rgba(230,244,242,.16)"
    },
    "dark": {
      "bg": "#021015",
      "bg2": "#051b21",
      "surface": "#07222a",
      "surface2": "#0b2c34",
      "ink": "#f0fbf9",
      "inkSoft": "#b6d8d6",
      "inkFaint": "#82a9a7",
      "accent": "#ffa88f",
      "accentInk": "#180904",
      "line": "rgba(240,251,249,.22)"
    },
    "radius": "22px",
    "radiusLg": "36px",
    "shadow": "0 10px 24px -14px rgba(4,14,16,.6)",
    "shadowHard": "0 0 0 1px rgba(255,138,115,.4)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Baloo 2",
      "body": "Nunito",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "28px",
      "h1": "46px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 600
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.2,
      "body": 1.66
    },
    "tracking": {
      "display": "0",
      "heading": "0",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 380,
      "slowMs": 980,
      "easing": "cubic-bezier(0.2,0.8,0.3,1)",
      "easingPoints": [
        0.2,
        0.8,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 980,
        "easing": "cubic-bezier(0.2,0.8,0.3,1)",
        "offsetY": 22,
        "stagger": 0.08
      },
      "scroll": {
        "durationMs": 880,
        "offsetY": 18,
        "triggerPercent": 79,
        "once": false
      },
      "hover": {
        "durationMs": 280,
        "imageScale": 1.058
      },
      "pin": {
        "enabled": true,
        "scrub": 1.05
      },
      "reduced": "0.01ms (tokens.css global) — kabarcık ve pin/scrub kapalı, içerik anında"
    }
  },
  "literary-hardcover": {
    "num": "86",
    "name": "Literary Hardcover",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#f2ebdd",
      "bg2": "#e8dfcd",
      "surface": "#fdfaf2",
      "surface2": "#ece3d3",
      "ink": "#1b1a17",
      "inkSoft": "#4e4a42",
      "inkFaint": "#7b7568",
      "accent": "#2f4a3c",
      "accentInk": "#f7f3e8",
      "line": "rgba(27,26,23,.16)"
    },
    "dark": {
      "bg": "#191813",
      "bg2": "#211f18",
      "surface": "#1e1d16",
      "surface2": "#2a2820",
      "ink": "#f2eee2",
      "inkSoft": "#b3ada0",
      "inkFaint": "#7e786c",
      "accent": "#a8c3b2",
      "accentInk": "#10130f",
      "line": "rgba(242,238,226,.14)"
    },
    "radius": "4px",
    "radiusLg": "10px",
    "shadow": "0 1px 0 rgba(27,26,23,.10)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Lora",
      "body": "Lora",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "13px",
      "small": "15px",
      "body": "17px",
      "h3": "22px",
      "h2": "34px",
      "h1": "58px",
      "h1Mobile": "34px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.22,
      "body": 1.72
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "-0.005em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 120,
      "baseMs": 220,
      "slowMs": 380,
      "easing": "cubic-bezier(0.2,0.6,0.2,1)",
      "easingPoints": [
        0.2,
        0.6,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 720,
        "easing": "cubic-bezier(0.2,0.6,0.2,1)",
        "offsetY": 18,
        "stagger": 0.055
      },
      "scroll": {
        "durationMs": 860,
        "offsetY": 20,
        "triggerPercent": 81,
        "once": true
      },
      "hover": {
        "durationMs": 260,
        "imageScale": 1.018
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — reveal yalnız opacity'ye düşer"
    }
  },
  "broadsheet-daily": {
    "num": "87",
    "name": "Broadsheet Daily",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#f3f0e9",
      "bg2": "#e8e4da",
      "surface": "#fbf9f4",
      "surface2": "#ece8df",
      "ink": "#12141a",
      "inkSoft": "#45484f",
      "inkFaint": "#74777e",
      "accent": "#a8241b",
      "accentInk": "#fdf7f2",
      "line": "rgba(18,20,26,.18)"
    },
    "dark": {
      "bg": "#121316",
      "bg2": "#1b1c20",
      "surface": "#17181c",
      "surface2": "#232428",
      "ink": "#f0eee8",
      "inkSoft": "#b0ada6",
      "inkFaint": "#7d7a74",
      "accent": "#e0665a",
      "accentInk": "#14100f",
      "line": "rgba(240,238,232,.16)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "2px 2px 0 rgba(18,20,26,.92)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "EB Garamond",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "13px",
      "small": "14.5px",
      "body": "16.5px",
      "h3": "20px",
      "h2": "30px",
      "h1": "46px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 400
    },
    "lineHeight": {
      "display": 1.02,
      "heading": 1.16,
      "body": 1.56
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 160,
      "slowMs": 260,
      "easing": "steps(3, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 220,
        "easing": "steps(3, end)",
        "offsetY": 4,
        "stagger": 0.02
      },
      "scroll": {
        "durationMs": 280,
        "offsetY": 8,
        "triggerPercent": 94,
        "once": true
      },
      "hover": {
        "durationMs": 80,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — damga animasyonsuz görünür"
    }
  },
  "magazine-feature": {
    "num": "88",
    "name": "Magazine Feature",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#faf6f0",
      "bg2": "#f0e9df",
      "surface": "#fffdf9",
      "surface2": "#f4eee4",
      "ink": "#1a1614",
      "inkSoft": "#4b423d",
      "inkFaint": "#7b716a",
      "accent": "#8a2f52",
      "accentInk": "#fdf3f0",
      "line": "rgba(26,22,20,.14)"
    },
    "dark": {
      "bg": "#161113",
      "bg2": "#1f171a",
      "surface": "#1b1417",
      "surface2": "#282022",
      "ink": "#f4ece7",
      "inkSoft": "#b5a9a6",
      "inkFaint": "#82746f",
      "accent": "#e08aa6",
      "accentInk": "#180d11",
      "line": "rgba(244,236,231,.14)"
    },
    "radius": "2px",
    "radiusLg": "14px",
    "shadow": "0 10px 30px rgba(26,22,20,.12)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Jost",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "13px",
      "small": "15px",
      "body": "17px",
      "h3": "24px",
      "h2": "38px",
      "h1": "64px",
      "h1Mobile": "36px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.14,
      "body": 1.66
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 140,
      "baseMs": 260,
      "slowMs": 420,
      "easing": "cubic-bezier(0.215,0.61,0.355,1)",
      "easingPoints": [
        0.215,
        0.61,
        0.355,
        1
      ],
      "enter": {
        "durationMs": 900,
        "easing": "cubic-bezier(0.215,0.61,0.355,1)",
        "offsetY": 34,
        "stagger": 0.1
      },
      "scroll": {
        "durationMs": 1000,
        "offsetY": 28,
        "triggerPercent": 77,
        "once": true
      },
      "hover": {
        "durationMs": 320,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": true,
        "scrub": 0.9
      },
      "reduced": "0.01ms — pin/scrub kapalı, poster statik"
    }
  },
  "academic-paper": {
    "num": "89",
    "name": "Academic Paper",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#f8f8f6",
      "bg2": "#eeeeea",
      "surface": "#fdfdfb",
      "surface2": "#f2f2ee",
      "ink": "#1b1e23",
      "inkSoft": "#4a4e55",
      "inkFaint": "#7a7e85",
      "accent": "#1f4a7a",
      "accentInk": "#f6f8fb",
      "line": "rgba(27,30,35,.16)"
    },
    "dark": {
      "bg": "#101216",
      "bg2": "#171a1f",
      "surface": "#14171c",
      "surface2": "#1f232a",
      "ink": "#eef0f2",
      "inkSoft": "#a9aeb5",
      "inkFaint": "#757a82",
      "accent": "#86aad6",
      "accentInk": "#0d1015",
      "line": "rgba(238,240,242,.14)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "0 1px 2px rgba(27,30,35,.08)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "EB Garamond",
      "body": "EB Garamond",
      "mono": "Courier Prime"
    },
    "scale": {
      "label": "11px",
      "caption": "12.5px",
      "small": "14px",
      "body": "15.5px",
      "h3": "18px",
      "h2": "24px",
      "h1": "34px",
      "h1Mobile": "26px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.18,
      "heading": 1.24,
      "body": 1.66
    },
    "tracking": {
      "display": "-0.005em",
      "heading": "-0.005em",
      "body": "0",
      "label": "0.08em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 180,
      "slowMs": 300,
      "easing": "linear",
      "easingPoints": [
        0,
        0,
        1,
        1
      ],
      "enter": {
        "durationMs": 330,
        "easing": "linear",
        "offsetY": 0,
        "stagger": 0.04
      },
      "scroll": {
        "durationMs": 420,
        "offsetY": 10,
        "triggerPercent": 89,
        "once": true
      },
      "hover": {
        "durationMs": 120,
        "imageScale": 1
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms — hareket yalnız opacity, diyagram statik"
    }
  },
  "poetry-chapbook": {
    "num": "90",
    "name": "Poetry Chapbook",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#f7f2e9",
      "bg2": "#ece6da",
      "surface": "#fdfaf4",
      "surface2": "#f0eadd",
      "ink": "#22201d",
      "inkSoft": "#55504a",
      "inkFaint": "#837c74",
      "accent": "#4b3f66",
      "accentInk": "#f7f3ee",
      "line": "rgba(34,32,29,.14)"
    },
    "dark": {
      "bg": "#15141a",
      "bg2": "#1d1c23",
      "surface": "#19181f",
      "surface2": "#25242c",
      "ink": "#f1eee9",
      "inkSoft": "#b0aba4",
      "inkFaint": "#7c7770",
      "accent": "#b0a2d6",
      "accentInk": "#14121a",
      "line": "rgba(241,238,233,.14)"
    },
    "radius": "2px",
    "radiusLg": "8px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Cormorant Garamond",
      "body": "Cormorant Garamond",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10.5px",
      "caption": "12.5px",
      "small": "14px",
      "body": "16.5px",
      "h3": "20px",
      "h2": "28px",
      "h1": "44px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 500
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.26,
      "body": 1.78
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.005em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 300,
      "slowMs": 520,
      "easing": "cubic-bezier(0.33,1,0.68,1)",
      "easingPoints": [
        0.33,
        1,
        0.68,
        1
      ],
      "enter": {
        "durationMs": 1100,
        "easing": "cubic-bezier(0.33,1,0.68,1)",
        "offsetY": 26,
        "stagger": 0.12
      },
      "scroll": {
        "durationMs": 1150,
        "offsetY": 22,
        "triggerPercent": 83,
        "once": true
      },
      "hover": {
        "durationMs": 380,
        "imageScale": 1.02
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — nefes durur, dikiş çizgisi statik"
    }
  },
  "product-catalog": {
    "num": "91",
    "name": "Product Catalog",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#f6f4ef",
      "bg2": "#eeeae0",
      "surface": "#fffdf8",
      "surface2": "#e9e4d8",
      "ink": "#1a1c19",
      "inkSoft": "#4b5148",
      "inkFaint": "#767c72",
      "accent": "#16624f",
      "accentInk": "#f7f3e8",
      "line": "rgba(26,28,25,.16)"
    },
    "dark": {
      "bg": "#121512",
      "bg2": "#171b17",
      "surface": "#1b201b",
      "surface2": "#232a23",
      "ink": "#e8e6dd",
      "inkSoft": "#b0b5a9",
      "inkFaint": "#868c80",
      "accent": "#5fb39c",
      "accentInk": "#0d1412",
      "line": "rgba(232,230,221,.16)"
    },
    "radius": "2px",
    "radiusLg": "4px",
    "shadow": "0 1px 2px rgba(26,28,25,.08)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Space Grotesk",
      "body": "Lora",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "15.5px",
      "h3": "18px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 600
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.12,
      "body": 1.66
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "-0.005em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 100,
      "baseMs": 170,
      "slowMs": 240,
      "easing": "cubic-bezier(0.18,0.86,0.24,1)",
      "easingPoints": [
        0.18,
        0.86,
        0.24,
        1
      ],
      "enter": {
        "durationMs": 460,
        "easing": "cubic-bezier(0.18,0.86,0.24,1)",
        "offsetY": 8,
        "stagger": 0.035
      },
      "scroll": {
        "durationMs": 580,
        "offsetY": 10,
        "triggerPercent": 87,
        "once": true
      },
      "hover": {
        "durationMs": 170,
        "imageScale": 1.012
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — ürün ızgarası statik görünür"
    }
  },
  "museum-thesis": {
    "num": "92",
    "name": "Museum & Thesis",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#f4f2ec",
      "bg2": "#ebe8df",
      "surface": "#fbfaf6",
      "surface2": "#e6e2d8",
      "ink": "#191b1f",
      "inkSoft": "#4c515a",
      "inkFaint": "#787e88",
      "accent": "#3c4a63",
      "accentInk": "#f4f1e8",
      "line": "rgba(25,27,31,.16)"
    },
    "dark": {
      "bg": "#14161a",
      "bg2": "#191c21",
      "surface": "#1e2228",
      "surface2": "#262b33",
      "ink": "#e9e7e0",
      "inkSoft": "#b6b9bf",
      "inkFaint": "#8b9099",
      "accent": "#9fb0c9",
      "accentInk": "#14161a",
      "line": "rgba(233,231,224,.16)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "0 1px 3px rgba(25,27,31,.07)",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "EB Garamond",
      "body": "EB Garamond",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "15px",
      "body": "17px",
      "h3": "18px",
      "h2": "25px",
      "h1": "38px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.14,
      "heading": 1.2,
      "body": 1.72
    },
    "tracking": {
      "display": "-0.005em",
      "heading": "0",
      "body": "0",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 160,
      "baseMs": 460,
      "slowMs": 720,
      "easing": "cubic-bezier(0.35,0.02,0.28,1)",
      "easingPoints": [
        0.35,
        0.02,
        0.28,
        1
      ],
      "enter": {
        "durationMs": 1100,
        "easing": "cubic-bezier(0.35,0.02,0.28,1)",
        "offsetY": 20,
        "stagger": 0.11
      },
      "scroll": {
        "durationMs": 1150,
        "offsetY": 18,
        "triggerPercent": 77,
        "once": true
      },
      "hover": {
        "durationMs": 460,
        "imageScale": 1.004
      },
      "pin": {
        "enabled": true,
        "scrub": 0.8
      },
      "reduced": "0.01ms (tokens.css global) — pin/scrub kapanır, levha statik kalır"
    }
  },
  "type-experiment": {
    "num": "93",
    "name": "Type Experiment",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#f4f4f0",
      "bg2": "#eaeae4",
      "surface": "#ffffff",
      "surface2": "#efefe9",
      "ink": "#0d0d0f",
      "inkSoft": "#47474c",
      "inkFaint": "#74747a",
      "accent": "#2b1de0",
      "accentInk": "#f6f5ff",
      "line": "rgba(13,13,15,.16)"
    },
    "dark": {
      "bg": "#0b0b0d",
      "bg2": "#101013",
      "surface": "#141417",
      "surface2": "#1b1b1f",
      "ink": "#efeff1",
      "inkSoft": "#a9a9ae",
      "inkFaint": "#7e7e84",
      "accent": "#7b6cff",
      "accentInk": "#0b0b0d",
      "line": "rgba(239,239,241,.16)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Space Mono",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10.5px",
      "caption": "12px",
      "small": "13.5px",
      "body": "14px",
      "h3": "20px",
      "h2": "34px",
      "h1": "76px",
      "h1Mobile": "40px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 400
    },
    "lineHeight": {
      "display": 0.92,
      "heading": 1.02,
      "body": 1.75
    },
    "tracking": {
      "display": "-0.02em",
      "heading": "-0.015em",
      "body": "0",
      "label": "0.16em"
    },
    "motion": {
      "fastMs": 80,
      "baseMs": 140,
      "slowMs": 260,
      "easing": "steps(4, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 220,
        "easing": "steps(4, end)",
        "offsetY": 48,
        "stagger": 0.015
      },
      "scroll": {
        "durationMs": 260,
        "offsetY": 56,
        "triggerPercent": 94,
        "once": true
      },
      "hover": {
        "durationMs": 80,
        "imageScale": 1.06
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — kademeli geçiş durur, katmanlar statik kalır"
    }
  },
  "encyclopedia": {
    "num": "94",
    "name": "Encyclopedia",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#f7f5ee",
      "bg2": "#efece1",
      "surface": "#fffcf4",
      "surface2": "#ebe7da",
      "ink": "#1a1c1a",
      "inkSoft": "#4a4f4a",
      "inkFaint": "#767b76",
      "accent": "#7a1f52",
      "accentInk": "#fdf6ef",
      "line": "rgba(26,28,26,.16)"
    },
    "dark": {
      "bg": "#131211",
      "bg2": "#181715",
      "surface": "#1d1b19",
      "surface2": "#262321",
      "ink": "#ece7dc",
      "inkSoft": "#b5afa4",
      "inkFaint": "#8a857c",
      "accent": "#d684ae",
      "accentInk": "#17100f",
      "line": "rgba(236,231,220,.16)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Lora",
      "body": "Inter",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "10.5px",
      "caption": "12px",
      "small": "13px",
      "body": "14.5px",
      "h3": "18px",
      "h2": "26px",
      "h1": "42px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 700
    },
    "lineHeight": {
      "display": 1.08,
      "heading": 1.16,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.005em",
      "heading": "0",
      "body": "0",
      "label": "0.1em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 130,
      "slowMs": 240,
      "easing": "cubic-bezier(0.4,0,0.3,1)",
      "easingPoints": [
        0.4,
        0,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 330,
        "easing": "cubic-bezier(0.4,0,0.3,1)",
        "offsetY": 6,
        "stagger": 0.025
      },
      "scroll": {
        "durationMs": 420,
        "offsetY": 8,
        "triggerPercent": 89,
        "once": false
      },
      "hover": {
        "durationMs": 130,
        "imageScale": 1.008
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — satır vurgusu statik kalır"
    }
  },
  "punk-fanzine": {
    "num": "95",
    "name": "Punk Fanzine",
    "family": "Yayın & Tipografi",
    "light": {
      "bg": "#e6e4dd",
      "bg2": "#dbd8d0",
      "surface": "#f2f0e9",
      "surface2": "#d2cfc6",
      "ink": "#0e0e0e",
      "inkSoft": "#43433f",
      "inkFaint": "#6d6d68",
      "accent": "#cf1f2b",
      "accentInk": "#fff7f1",
      "line": "rgba(14,14,14,.24)"
    },
    "dark": {
      "bg": "#0f0f0f",
      "bg2": "#151514",
      "surface": "#1a1a19",
      "surface2": "#242423",
      "ink": "#ececea",
      "inkSoft": "#adadab",
      "inkFaint": "#838381",
      "accent": "#f0434f",
      "accentInk": "#100b0b",
      "line": "rgba(236,236,234,.22)"
    },
    "radius": "0px",
    "radiusLg": "2px",
    "shadow": "none",
    "shadowHard": "4px 4px 0 #0e0e0e",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Kalam",
      "body": "Courier Prime",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "14.5px",
      "h3": "19px",
      "h2": "28px",
      "h1": "46px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 700,
      "display": 700
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.1,
      "body": 1.6
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.12em"
    },
    "motion": {
      "fastMs": 60,
      "baseMs": 120,
      "slowMs": 200,
      "easing": "steps(2, end)",
      "easingPoints": null,
      "enter": {
        "durationMs": 150,
        "easing": "steps(2, end)",
        "offsetY": 30,
        "stagger": 0.05
      },
      "scroll": {
        "durationMs": 180,
        "offsetY": 34,
        "triggerPercent": 96,
        "once": false
      },
      "hover": {
        "durationMs": 60,
        "imageScale": 1.03
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms (tokens.css global) — toner dokusu ve şeritler statik kalır"
    }
  },
  "kinetic-marquee": {
    "num": "96",
    "name": "Kinetic Marquee",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#f4f1ea",
      "bg2": "#eae5da",
      "surface": "#fdfbf6",
      "surface2": "#f2eee4",
      "ink": "#14161a",
      "inkSoft": "#4a4d57",
      "inkFaint": "#82858f",
      "accent": "#2d3ad0",
      "accentInk": "#f7f7ff",
      "line": "rgba(20,22,26,.14)"
    },
    "dark": {
      "bg": "#0d0f18",
      "bg2": "#121522",
      "surface": "#161a2a",
      "surface2": "#1e2338",
      "ink": "#eef0f6",
      "inkSoft": "#a9afc4",
      "inkFaint": "#78809a",
      "accent": "#7f88ff",
      "accentInk": "#0a0b18",
      "line": "rgba(238,240,246,.16)"
    },
    "radius": "3px",
    "radiusLg": "8px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Chakra Petch",
      "body": "Space Grotesk",
      "mono": "JetBrains Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "18px",
      "h2": "24px",
      "h1": "56px",
      "h1Mobile": "32px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 600
    },
    "lineHeight": {
      "display": 1.04,
      "heading": 1.18,
      "body": 1.6
    },
    "tracking": {
      "display": "0.02em",
      "heading": "0.02em",
      "body": "0",
      "label": "0.18em"
    },
    "motion": {
      "fastMs": 180,
      "baseMs": 340,
      "slowMs": 620,
      "easing": "cubic-bezier(0.12,0.9,0.2,1)",
      "easingPoints": [
        0.12,
        0.9,
        0.2,
        1
      ],
      "enter": {
        "durationMs": 620,
        "easing": "cubic-bezier(0.12,0.9,0.2,1)",
        "offsetY": 0,
        "stagger": 0.09
      },
      "scroll": {
        "durationMs": 500,
        "offsetY": 0,
        "triggerPercent": 70,
        "once": true
      },
      "hover": {
        "durationMs": 180,
        "imageScale": 1.006
      },
      "pin": {
        "enabled": true,
        "scrub": 0.25
      },
      "reduced": "0.01ms; tüm bantlar durur, skew 0°, harf dalgası kapanır — içerik statik poster gibi okunur"
    }
  },
  "optical-illusion": {
    "num": "97",
    "name": "Optical Illusion",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#fbfbfb",
      "bg2": "#f1f1f1",
      "surface": "#ffffff",
      "surface2": "#f4f4f4",
      "ink": "#0a0a0a",
      "inkSoft": "#464646",
      "inkFaint": "#8a8a8a",
      "accent": "#b8123f",
      "accentInk": "#ffffff",
      "line": "rgba(10,10,10,.12)"
    },
    "dark": {
      "bg": "#0a0a0a",
      "bg2": "#121212",
      "surface": "#171717",
      "surface2": "#1f1f1f",
      "ink": "#f7f7f7",
      "inkSoft": "#b0b0b0",
      "inkFaint": "#7d7d7d",
      "accent": "#ff5d7e",
      "accentInk": "#20040a",
      "line": "rgba(247,247,247,.14)"
    },
    "radius": "0px",
    "radiusLg": "0px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Archivo Black",
      "body": "Inter",
      "mono": "Space Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "13px",
      "body": "15px",
      "h3": "19px",
      "h2": "26px",
      "h1": "44px",
      "h1Mobile": "28px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.06,
      "heading": 1.2,
      "body": 1.6
    },
    "tracking": {
      "display": "-0.01em",
      "heading": "-0.01em",
      "body": "0",
      "label": "0.2em"
    },
    "motion": {
      "fastMs": 90,
      "baseMs": 180,
      "slowMs": 340,
      "easing": "cubic-bezier(0.9,0,0.1,1)",
      "easingPoints": [
        0.9,
        0,
        0.1,
        1
      ],
      "enter": {
        "durationMs": 340,
        "easing": "cubic-bezier(0.9,0,0.1,1)",
        "offsetY": 18,
        "stagger": 0.06
      },
      "scroll": {
        "durationMs": 280,
        "offsetY": 8,
        "triggerPercent": 82,
        "once": false
      },
      "hover": {
        "durationMs": 90,
        "imageScale": 1.045
      },
      "pin": {
        "enabled": false,
        "scrub": null
      },
      "reduced": "0.01ms; desenler zaten statik — yalnız geçişler kapanır"
    }
  },
  "generative-grid": {
    "num": "98",
    "name": "Generative Grid",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#e9edf0",
      "bg2": "#dfe5e9",
      "surface": "#f7f9fa",
      "surface2": "#eef2f4",
      "ink": "#0f161a",
      "inkSoft": "#414b51",
      "inkFaint": "#79858c",
      "accent": "#0b7d55",
      "accentInk": "#ffffff",
      "line": "rgba(15,22,26,.13)"
    },
    "dark": {
      "bg": "#0e1215",
      "bg2": "#131a1e",
      "surface": "#172025",
      "surface2": "#1f2a30",
      "ink": "#e8f0f3",
      "inkSoft": "#a7b6bd",
      "inkFaint": "#74858d",
      "accent": "#3ddca0",
      "accentInk": "#04170f",
      "line": "rgba(232,240,243,.16)"
    },
    "radius": "1px",
    "radiusLg": "4px",
    "shadow": "none",
    "shadowHard": "none",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Michroma",
      "body": "Jost",
      "mono": "Share Tech Mono"
    },
    "scale": {
      "label": "10px",
      "caption": "11px",
      "small": "13px",
      "body": "15px",
      "h3": "17px",
      "h2": "22px",
      "h1": "34px",
      "h1Mobile": "22px"
    },
    "weights": {
      "body": 400,
      "strong": 500,
      "display": 400
    },
    "lineHeight": {
      "display": 1.2,
      "heading": 1.32,
      "body": 1.58
    },
    "tracking": {
      "display": "0.03em",
      "heading": "0.03em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 150,
      "baseMs": 300,
      "slowMs": 780,
      "easing": "cubic-bezier(0.3,0,0,1)",
      "easingPoints": [
        0.3,
        0,
        0,
        1
      ],
      "enter": {
        "durationMs": 780,
        "easing": "cubic-bezier(0.3,0,0,1)",
        "offsetY": 10,
        "stagger": 0.03
      },
      "scroll": {
        "durationMs": 900,
        "offsetY": 24,
        "triggerPercent": 76,
        "once": true
      },
      "hover": {
        "durationMs": 150,
        "imageScale": 1.012
      },
      "pin": {
        "enabled": true,
        "scrub": 1.6
      },
      "reduced": "0.01ms; düğümler ve yaylar statik, çizim animasyonu kapalı"
    }
  },
  "depth-parallax": {
    "num": "99",
    "name": "Depth Parallax",
    "family": "Hareket & Optik",
    "light": {
      "bg": "#0b1014",
      "bg2": "#101820",
      "surface": "#131d26",
      "surface2": "#1a2732",
      "ink": "#eaf0f4",
      "inkSoft": "#a8b6c0",
      "inkFaint": "#74828c",
      "accent": "#5ac8ff",
      "accentInk": "#05131a",
      "line": "rgba(234,240,244,.15)"
    },
    "dark": {
      "bg": "#05161a",
      "bg2": "#082025",
      "surface": "#0a282e",
      "surface2": "#0f333a",
      "ink": "#eef7f8",
      "inkSoft": "#aebfc1",
      "inkFaint": "#7d9092",
      "accent": "#7af0ff",
      "accentInk": "#042022",
      "line": "rgba(238,247,248,.18)"
    },
    "radius": "6px",
    "radiusLg": "14px",
    "shadow": "0 4px 18px rgba(0,0,0,.45)",
    "shadowHard": "0 10px 32px rgba(0,0,0,.5)",
    "spacing": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px"
    ],
    "fonts": {
      "display": "Fraunces",
      "body": "Nunito",
      "mono": "IBM Plex Mono"
    },
    "scale": {
      "label": "11px",
      "caption": "12px",
      "small": "14px",
      "body": "16px",
      "h3": "20px",
      "h2": "30px",
      "h1": "48px",
      "h1Mobile": "30px"
    },
    "weights": {
      "body": 400,
      "strong": 600,
      "display": 500
    },
    "lineHeight": {
      "display": 1.1,
      "heading": 1.24,
      "body": 1.66
    },
    "tracking": {
      "display": "0.01em",
      "heading": "0.01em",
      "body": "0",
      "label": "0.14em"
    },
    "motion": {
      "fastMs": 360,
      "baseMs": 640,
      "slowMs": 1000,
      "easing": "cubic-bezier(0.16,0.6,0.3,1)",
      "easingPoints": [
        0.16,
        0.6,
        0.3,
        1
      ],
      "enter": {
        "durationMs": 1000,
        "easing": "cubic-bezier(0.16,0.6,0.3,1)",
        "offsetY": 40,
        "stagger": 0.13
      },
      "scroll": {
        "durationMs": 1100,
        "offsetY": 56,
        "triggerPercent": 88,
        "once": true
      },
      "hover": {
        "durationMs": 360,
        "imageScale": 1.035
      },
      "pin": {
        "enabled": true,
        "scrub": 0.45
      },
      "reduced": "0.01ms; parallax kapanır, tüm düzlemler sabit konumda; pus kalır"
    }
  }
};

/** Bir stilin paletini döndürür (koyu modda yalnız renkler değişir). */
export function styleLabPalette(slug, theme = 'light') {
  const style = styleLabTokens[slug];
  if (!style) throw new Error(`style-lab: bilinmeyen stil "${slug}" (${Object.keys(styleLabTokens).length} stil var)`);
  return theme === 'dark' ? style.dark : style.light;
}

/** Stili CSS değişkeni nesnesine çevirir: { '--bg': '#fafaf9', ... } */
export function styleLabCssVars(slug, theme = 'light') {
  const style = styleLabTokens[slug];
  if (!style) throw new Error(`style-lab: bilinmeyen stil "${slug}"`);
  const palette = theme === 'dark' ? style.dark : style.light;
  const vars = {};
  for (const [key, value] of Object.entries(palette)) vars[`--${key.replace(/([A-Z0-9])/g, (m) => `-${m.toLowerCase()}`)}`] = value;
  vars['--radius'] = style.radius;
  vars['--radius-lg'] = style.radiusLg;
  vars['--shadow'] = style.shadow;
  vars['--shadow-hard'] = style.shadowHard;
  vars['--font-display'] = style.fonts.display;
  vars['--font-body'] = style.fonts.body;
  vars['--font-mono'] = style.fonts.mono;
  return vars;
}

/** <html> üzerinde stil/koyu mod uygular (SSR'de document yoksa sessizce atlar). */
export function applyStyleLab(slug, { theme = 'light', target = typeof document !== 'undefined' ? document.documentElement : null } = {}) {
  if (!target) return;
  target.setAttribute('data-style', slug);
  if (theme === 'dark') target.setAttribute('data-theme', 'dark');
  else target.removeAttribute('data-theme');
  target.style.colorScheme = theme;
}

/** Slug listesi (galeri/sidebar için). */
export const styleLabSlugs = Object.keys(styleLabTokens);
