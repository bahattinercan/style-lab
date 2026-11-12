/* kit/live-motion.js — node kit/build-gallery.mjs üretir; elle düzenleme */
/* Kaynak: styles/<slug>/tokens.json → motion.choreography + dist/motion.json (ms) */
window.STYLE_MOTION = {
  "minimalism": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 500,
      "easeCss": "ease-out",
      "offsetY": 12,
      "staggerMs": 40
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 600,
      "offsetY": 24
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 160,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "swiss-design": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 320,
      "easeCss": "cubic-bezier(0.2,0.6,0.2,1)",
      "offsetY": 0,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 300,
      "offsetY": 0
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 90,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "editorial-design": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 550,
      "easeCss": "ease-out",
      "offsetY": 10,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "velocity-skew",
      "durationMs": 650,
      "offsetY": 24
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 180,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "luxury-typography": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 800,
      "easeCss": "cubic-bezier(0.2,0.7,0.2,1)",
      "offsetY": 24,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 1000,
      "offsetY": 24
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 320,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "bento-grid": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 450,
      "easeCss": "cubic-bezier(0.2,0.6,0.2,1)",
      "offsetY": 16,
      "staggerMs": 80
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 550,
      "offsetY": 24
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 200,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "japandi": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 700,
      "easeCss": "cubic-bezier(0.3,0.7,0.3,1)",
      "offsetY": 14,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 850,
      "offsetY": 24
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 220,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "wabi-sabi": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 750,
      "easeCss": "cubic-bezier(0.3,0.6,0.3,1)",
      "offsetY": 18,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 950,
      "offsetY": 24
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 260,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "glassmorphism": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 700,
      "easeCss": "cubic-bezier(0.165,0.84,0.44,1)",
      "offsetY": 20,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 850,
      "offsetY": 24
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 260,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "liquid-glass": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 900,
      "easeCss": "cubic-bezier(0.23,1,0.32,1)",
      "offsetY": 28,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1000,
      "offsetY": 24
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 220,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "neumorphism": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 400,
      "easeCss": "ease-out",
      "offsetY": 8,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 500,
      "offsetY": 24
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 200,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "claymorphism": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 600,
      "easeCss": "cubic-bezier(0.34,1.328,0.64,1)",
      "offsetY": 18,
      "staggerMs": 80
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 700,
      "offsetY": 24
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 300,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "aurora-ui": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 900,
      "easeCss": "cubic-bezier(0.39,0.575,0.565,1)",
      "offsetY": 24,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 1150,
      "offsetY": 24
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 320,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "neo-brutalism": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 280,
      "easeCss": "linear",
      "offsetY": 8,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 320,
      "offsetY": 16
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 90,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "anti-design": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 340,
      "easeCss": "steps(3, end)",
      "offsetY": 16,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 400,
      "offsetY": 16
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 110,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "acid-graphics": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 250,
      "easeCss": "steps(4, end)",
      "offsetY": 4,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 240,
      "offsetY": 16
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 80,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "memphis": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 300,
      "easeCss": "cubic-bezier(0.34,1.6,0.64,1)",
      "offsetY": 14,
      "staggerMs": 40
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 280,
      "offsetY": 16
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 100,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "maximalism": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 420,
      "easeCss": "cubic-bezier(0.2,0.6,0.2,1)",
      "offsetY": 20,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 500,
      "offsetY": 16
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 140,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "dopamine-ui": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 360,
      "easeCss": "cubic-bezier(0.34,1.4,0.64,1)",
      "offsetY": 18,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 300,
      "offsetY": 16
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 130,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "y2k": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 400,
      "easeCss": "linear",
      "offsetY": 12,
      "staggerMs": 40
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 550,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 140,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "vaporwave": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 650,
      "easeCss": "ease-in-out",
      "offsetY": 20,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 700,
      "offsetY": 20
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 260,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "synthwave": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 500,
      "easeCss": "linear",
      "offsetY": 16,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 600,
      "offsetY": 20
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 180,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "cyberpunk": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 280,
      "easeCss": "steps(3, end)",
      "offsetY": 10,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 500,
      "offsetY": 20
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 90,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "cybercore": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 240,
      "easeCss": "steps(4, end)",
      "offsetY": 8,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 520,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 80,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "pixel-art": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 300,
      "easeCss": "steps(2, end)",
      "offsetY": 6,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 580,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 60,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "frutiger-aero": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 550,
      "easeCss": "ease-out",
      "offsetY": 22,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 650,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 240,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "art-deco": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 580,
      "easeCss": "ease-in-out",
      "offsetY": 28,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 680,
      "offsetY": 20
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 320,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "victorian": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 520,
      "easeCss": "ease-out",
      "offsetY": 24,
      "staggerMs": 80
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 620,
      "offsetY": 20
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 300,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "surrealism": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 1100,
      "easeCss": "ease-out",
      "offsetY": 36,
      "staggerMs": 130
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1050,
      "offsetY": 32
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 420,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "ethereal": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 1150,
      "easeCss": "ease-in-out",
      "offsetY": 40,
      "staggerMs": 140
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1200,
      "offsetY": 32
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 380,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "bohemian": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 950,
      "easeCss": "ease-out",
      "offsetY": 28,
      "staggerMs": 100
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 900,
      "offsetY": 32
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 340,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "scrapbook": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 340,
      "easeCss": "cubic-bezier(0.34,1.28,0.52,1)",
      "offsetY": 10,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "velocity-skew",
      "durationMs": 440,
      "offsetY": 12
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 150,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "conceptual-sketch": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 380,
      "easeCss": "linear",
      "offsetY": 0,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 300,
      "offsetY": 6
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 110,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "dark-academia": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 1050,
      "easeCss": "cubic-bezier(0.5,0.05,0.35,0.95)",
      "offsetY": 22,
      "staggerMs": 160
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 1050,
      "offsetY": 26
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 520,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "skeuomorphism": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 360,
      "easeCss": "cubic-bezier(0.22,1.32,0.4,1)",
      "offsetY": 6,
      "staggerMs": 40
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 500,
      "offsetY": 10
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 130,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "bauhaus": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 440,
      "easeCss": "cubic-bezier(0.2,0.8,0.2,1)",
      "offsetY": 14,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 620,
      "offsetY": 18
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 170,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": 1
    },
    "reduced": "opacity"
  },
  "constructivism": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 300,
      "easeCss": "cubic-bezier(0.7,0,0.25,1)",
      "offsetY": 26,
      "staggerMs": 40
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 340,
      "offsetY": 28
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 110,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": 1
    },
    "reduced": "opacity"
  },
  "kinetic-type": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 620,
      "easeCss": "cubic-bezier(0.85,0,0.15,1)",
      "offsetY": 40,
      "staggerMs": 100
    },
    "scroll": {
      "pattern": "velocity-skew",
      "durationMs": 500,
      "offsetY": 44
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 130,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": 1
    },
    "reduced": "opacity"
  },
  "organic-bio": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 1000,
      "easeCss": "cubic-bezier(0.215,0.61,0.355,1)",
      "offsetY": 28,
      "staggerMs": 100
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 900,
      "offsetY": 24
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 280,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "ai-native-mesh": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 750,
      "easeCss": "cubic-bezier(0.32,0.72,0,1)",
      "offsetY": 22,
      "staggerMs": 65
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 850,
      "offsetY": 20
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 210,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": true,
      "scrub": 1.2
    },
    "reduced": "static-frame"
  },
  "scandinavian-dark": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 880,
      "easeCss": "cubic-bezier(0.5,0.4,0.15,1)",
      "offsetY": 16,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 950,
      "offsetY": 14
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 260,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": true,
      "scrub": 1.2
    },
    "reduced": "static-frame"
  },
  "grand-tourer": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 660,
      "easeCss": "cubic-bezier(0.22,0.68,0.24,1)",
      "offsetY": 18,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 850,
      "offsetY": 20
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 230,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": true,
      "scrub": 1.1
    },
    "reduced": "static-frame"
  },
  "grand-tourer-oxblood": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 900,
      "easeCss": "cubic-bezier(0.4,0.1,0.2,1)",
      "offsetY": 28,
      "staggerMs": 110
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 1000,
      "offsetY": 30
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 300,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": true,
      "scrub": 1.1
    },
    "reduced": "static-frame"
  },
  "grand-tourer-midnight": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 1060,
      "easeCss": "cubic-bezier(0.6,0.02,0.25,1)",
      "offsetY": 12,
      "staggerMs": 140
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 1100,
      "offsetY": 16
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 340,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": true,
      "scrub": 1.1
    },
    "reduced": "static-frame"
  },
  "utility": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 400,
      "easeCss": "cubic-bezier(0.22,1,0.36,1)",
      "offsetY": 10,
      "staggerMs": 45
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 560,
      "offsetY": 28
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 120,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "terminal-ui": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 180,
      "easeCss": "steps(3, end)",
      "offsetY": 0,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 200,
      "offsetY": 8
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 90,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "telemetry-grid": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 280,
      "easeCss": "cubic-bezier(0.16,0.84,0.44,1)",
      "offsetY": 6,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 320,
      "offsetY": 10
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 110,
      "imageScale": 1.01
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "trading-desk": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 220,
      "easeCss": "cubic-bezier(0.4,0,0.1,1)",
      "offsetY": 4,
      "staggerMs": 15
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 260,
      "offsetY": 6
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 70,
      "imageScale": 1.004
    },
    "pin": {
      "enabled": true,
      "scrub": 0.35
    },
    "reduced": "static-frame"
  },
  "executive-kpi": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 950,
      "easeCss": "cubic-bezier(0.65,0,0.35,1)",
      "offsetY": 30,
      "staggerMs": 110
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 1050,
      "offsetY": 36
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 320,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "log-stream": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 160,
      "easeCss": "steps(4, end)",
      "offsetY": 0,
      "staggerMs": 12
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 180,
      "offsetY": 4
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 60,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "lab-instrument": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 420,
      "easeCss": "cubic-bezier(0.34,1.28,0.64,1)",
      "offsetY": 14,
      "staggerMs": 45
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 500,
      "offsetY": 18
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 190,
      "imageScale": 1.018
    },
    "pin": {
      "enabled": true,
      "scrub": 0.75
    },
    "reduced": "static-frame"
  },
  "atlas-console": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 440,
      "easeCss": "cubic-bezier(0.25,0.46,0.45,0.94)",
      "offsetY": 12,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 500,
      "offsetY": 18
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 120,
      "imageScale": 1.01
    },
    "pin": {
      "enabled": true,
      "scrub": 0.6
    },
    "reduced": "static-frame"
  },
  "experiment-split": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 320,
      "easeCss": "cubic-bezier(0.4,0,0.2,1)",
      "offsetY": 10,
      "staggerMs": 45
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 380,
      "offsetY": 14
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 180,
      "imageScale": 1.005
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "ledger-meter": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 660,
      "easeCss": "cubic-bezier(0.65,0,0.35,1)",
      "offsetY": 20,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 720,
      "offsetY": 26
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 110,
      "imageScale": 1
    },
    "pin": {
      "enabled": true,
      "scrub": 1.35
    },
    "reduced": "static-frame"
  },
  "vitals-triage": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 260,
      "easeCss": "cubic-bezier(0.16,1,0.3,1)",
      "offsetY": 6,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 280,
      "offsetY": 5
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 150,
      "imageScale": 1.025
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "fleet-telemetry": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 880,
      "easeCss": "cubic-bezier(0.2,0.8,0.2,1)",
      "offsetY": 14,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 600,
      "offsetY": 22
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 130,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": true,
      "scrub": 0.9
    },
    "reduced": "static-frame"
  },
  "blueprint-drawing": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 360,
      "easeCss": "cubic-bezier(0.55,0.06,0.35,1)",
      "offsetY": 6,
      "staggerMs": 45
    },
    "scroll": {
      "pattern": "velocity-skew",
      "durationMs": 400,
      "offsetY": 9
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 140,
      "imageScale": 1.005
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "machined-metal-panel": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 260,
      "easeCss": "cubic-bezier(0.28,1.46,0.58,1)",
      "offsetY": 4,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 280,
      "offsetY": 11
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 110,
      "imageScale": 1.008
    },
    "pin": {
      "enabled": true,
      "scrub": 0.62
    },
    "reduced": "static-frame"
  },
  "safety-signage": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 140,
      "easeCss": "linear",
      "offsetY": 16,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 150,
      "offsetY": 22
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 80,
      "imageScale": 1.012
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "mes-production-line": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 440,
      "easeCss": "cubic-bezier(0.12,0.94,0.24,1)",
      "offsetY": 20,
      "staggerMs": 35
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 480,
      "offsetY": 30
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 180,
      "imageScale": 1.016
    },
    "pin": {
      "enabled": true,
      "scrub": 0.95
    },
    "reduced": "static-frame"
  },
  "energy-grid": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 580,
      "easeCss": "cubic-bezier(0.45,0,0.15,1)",
      "offsetY": 12,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 660,
      "offsetY": 16
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 200,
      "imageScale": 1.004
    },
    "pin": {
      "enabled": true,
      "scrub": 1.45
    },
    "reduced": "static-frame"
  },
  "calibration-lab": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 420,
      "easeCss": "cubic-bezier(0.16,0.84,0.44,1)",
      "offsetY": 8,
      "staggerMs": 45
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 360,
      "offsetY": 12
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 140,
      "imageScale": 1.006
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "warehouse-flow": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 300,
      "easeCss": "cubic-bezier(0.34,1.56,0.64,1)",
      "offsetY": 18,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 500,
      "offsetY": 40
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 110,
      "imageScale": 1.045
    },
    "pin": {
      "enabled": true,
      "scrub": 0.65
    },
    "reduced": "static-frame"
  },
  "maintenance-cmms": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 550,
      "easeCss": "cubic-bezier(0.4,0,0.2,1)",
      "offsetY": 26,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 620,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 260,
      "imageScale": 1.018
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "construction-site": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 460,
      "easeCss": "cubic-bezier(0.2,1.3,0.3,1)",
      "offsetY": 44,
      "staggerMs": 110
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 340,
      "offsetY": 56
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 190,
      "imageScale": 1.012
    },
    "pin": {
      "enabled": true,
      "scrub": 0.55
    },
    "reduced": "static-frame"
  },
  "cockpit-avionics": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 240,
      "easeCss": "cubic-bezier(0,0,0.2,1)",
      "offsetY": 6,
      "staggerMs": 55
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 280,
      "offsetY": 4
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 70,
      "imageScale": 1.004
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "nordic-folk": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 620,
      "easeCss": "cubic-bezier(0.22,0.61,0.36,1)",
      "offsetY": 18,
      "staggerMs": 45
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 760,
      "offsetY": 22
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 190,
      "imageScale": 1.018
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "japanese-ma": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 1050,
      "easeCss": "cubic-bezier(0.25,0.1,0.25,1)",
      "offsetY": 12,
      "staggerMs": 140
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 1150,
      "offsetY": 14
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 520,
      "imageScale": 1.006
    },
    "pin": {
      "enabled": true,
      "scrub": 0.6
    },
    "reduced": "static-frame"
  },
  "levant-calligraphy": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 940,
      "easeCss": "cubic-bezier(0.34,0.03,0.24,1)",
      "offsetY": 26,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1020,
      "offsetY": 30
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 340,
      "imageScale": 1.032
    },
    "pin": {
      "enabled": true,
      "scrub": 1.4
    },
    "reduced": "static-frame"
  },
  "andalusian-azulejo": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 420,
      "easeCss": "cubic-bezier(0.6,0.02,0.2,1)",
      "offsetY": 10,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 550,
      "offsetY": 12
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 150,
      "imageScale": 1.045
    },
    "pin": {
      "enabled": true,
      "scrub": 0.9
    },
    "reduced": "static-frame"
  },
  "slavic-late-brutalist": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 260,
      "easeCss": "cubic-bezier(0.85,0,0.15,1)",
      "offsetY": 34,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 300,
      "offsetY": 40
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 70,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "west-african-pattern": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 500,
      "easeCss": "cubic-bezier(0.7,0.15,0.3,1)",
      "offsetY": 22,
      "staggerMs": 55
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 580,
      "offsetY": 16
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 210,
      "imageScale": 1.022
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "andean-textile": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 720,
      "easeCss": "cubic-bezier(0.5,0,0.5,1)",
      "offsetY": 16,
      "staggerMs": 75
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 660,
      "offsetY": 28
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 240,
      "imageScale": 1.014
    },
    "pin": {
      "enabled": true,
      "scrub": 1.15
    },
    "reduced": "static-frame"
  },
  "indian-block-print": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 300,
      "easeCss": "steps(2, end)",
      "offsetY": 12,
      "staggerMs": 35
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 340,
      "offsetY": 14
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 130,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "persian-miniature": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 1150,
      "easeCss": "cubic-bezier(0.45,0.05,0.55,0.95)",
      "offsetY": 26,
      "staggerMs": 100
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 1150,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 440,
      "imageScale": 1.008
    },
    "pin": {
      "enabled": true,
      "scrub": 0.85
    },
    "reduced": "static-frame"
  },
  "aegean-island": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 380,
      "easeCss": "cubic-bezier(0.25,0.75,0.5,1)",
      "offsetY": 8,
      "staggerMs": 80
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 440,
      "offsetY": 12
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 280,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "biophilic-botanical": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 680,
      "easeCss": "cubic-bezier(0.3,0.7,0.2,1)",
      "offsetY": 24,
      "staggerMs": 85
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 740,
      "offsetY": 26
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 320,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "weather-atmosphere": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 780,
      "easeCss": "cubic-bezier(0.25,0.6,0.15,1)",
      "offsetY": 18,
      "staggerMs": 65
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 640,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 260,
      "imageScale": 1.012
    },
    "pin": {
      "enabled": true,
      "scrub": 1.35
    },
    "reduced": "static-frame"
  },
  "topographic-terrain": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 480,
      "easeCss": "cubic-bezier(0.5,0.05,0.3,1)",
      "offsetY": 32,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 520,
      "offsetY": 34
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 150,
      "imageScale": 1.006
    },
    "pin": {
      "enabled": true,
      "scrub": 0.7
    },
    "reduced": "static-frame"
  },
  "ocean-current": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 830,
      "easeCss": "cubic-bezier(0.35,0.02,0.25,1)",
      "offsetY": 40,
      "staggerMs": 115
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 860,
      "offsetY": 36
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 380,
      "imageScale": 1.022
    },
    "pin": {
      "enabled": true,
      "scrub": 1.05
    },
    "reduced": "static-frame"
  },
  "seasonal-shift": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 570,
      "easeCss": "cubic-bezier(0.42,0.12,0.2,1)",
      "offsetY": 22,
      "staggerMs": 75
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 570,
      "offsetY": 44
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 220,
      "imageScale": 1.018
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "forest-bark": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 880,
      "easeCss": "cubic-bezier(0.32,0.72,0,1)",
      "offsetY": 30,
      "staggerMs": 120
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 950,
      "offsetY": 36
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 320,
      "imageScale": 1.026
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "desert-sand": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 1150,
      "easeCss": "cubic-bezier(0.16,0.62,0.24,1)",
      "offsetY": 40,
      "staggerMs": 160
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 1150,
      "offsetY": 48
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 420,
      "imageScale": 1.038
    },
    "pin": {
      "enabled": true,
      "scrub": 1.35
    },
    "reduced": "static-frame"
  },
  "polar-ice": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 320,
      "easeCss": "cubic-bezier(0.15,1,0.3,1)",
      "offsetY": 10,
      "staggerMs": 35
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 420,
      "offsetY": 14
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 100,
      "imageScale": 1.01
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "volcanic-mineral": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 680,
      "easeCss": "cubic-bezier(1,0,0.2,1)",
      "offsetY": 12,
      "staggerMs": 150
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 300,
      "offsetY": 64
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 460,
      "imageScale": 1.006
    },
    "pin": {
      "enabled": true,
      "scrub": 0.35
    },
    "reduced": "static-frame"
  },
  "coral-reef": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 980,
      "easeCss": "cubic-bezier(0.2,0.8,0.3,1)",
      "offsetY": 22,
      "staggerMs": 80
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 880,
      "offsetY": 18
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 280,
      "imageScale": 1.058
    },
    "pin": {
      "enabled": true,
      "scrub": 1.05
    },
    "reduced": "static-frame"
  },
  "literary-hardcover": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 720,
      "easeCss": "cubic-bezier(0.2,0.6,0.2,1)",
      "offsetY": 18,
      "staggerMs": 55
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 860,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 260,
      "imageScale": 1.018
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "broadsheet-daily": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 220,
      "easeCss": "steps(3, end)",
      "offsetY": 4,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 280,
      "offsetY": 8
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 80,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "magazine-feature": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 900,
      "easeCss": "cubic-bezier(0.215,0.61,0.355,1)",
      "offsetY": 34,
      "staggerMs": 100
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1000,
      "offsetY": 28
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 320,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": true,
      "scrub": 0.9
    },
    "reduced": "static-frame"
  },
  "academic-paper": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 330,
      "easeCss": "linear",
      "offsetY": 0,
      "staggerMs": 40
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 420,
      "offsetY": 10
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 120,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "poetry-chapbook": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 1100,
      "easeCss": "cubic-bezier(0.33,1,0.68,1)",
      "offsetY": 26,
      "staggerMs": 120
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1150,
      "offsetY": 22
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 380,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "product-catalog": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 460,
      "easeCss": "cubic-bezier(0.18,0.86,0.24,1)",
      "offsetY": 8,
      "staggerMs": 35
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 580,
      "offsetY": 10
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 170,
      "imageScale": 1.012
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "museum-thesis": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 1100,
      "easeCss": "cubic-bezier(0.35,0.02,0.28,1)",
      "offsetY": 20,
      "staggerMs": 110
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1150,
      "offsetY": 18
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 460,
      "imageScale": 1.004
    },
    "pin": {
      "enabled": true,
      "scrub": 0.8
    },
    "reduced": "static-frame"
  },
  "type-experiment": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 220,
      "easeCss": "steps(4, end)",
      "offsetY": 48,
      "staggerMs": 15
    },
    "scroll": {
      "pattern": "velocity-skew",
      "durationMs": 260,
      "offsetY": 56
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 80,
      "imageScale": 1.06
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "encyclopedia": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 330,
      "easeCss": "cubic-bezier(0.4,0,0.3,1)",
      "offsetY": 6,
      "staggerMs": 25
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 420,
      "offsetY": 8
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 130,
      "imageScale": 1.008
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "punk-fanzine": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 150,
      "easeCss": "steps(2, end)",
      "offsetY": 30,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 180,
      "offsetY": 34
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 60,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "kinetic-marquee": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 620,
      "easeCss": "cubic-bezier(0.12,0.9,0.2,1)",
      "offsetY": 0,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 500,
      "offsetY": 0
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 180,
      "imageScale": 1.006
    },
    "pin": {
      "enabled": true,
      "scrub": 0.25
    },
    "reduced": "static-frame"
  },
  "optical-illusion": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 340,
      "easeCss": "cubic-bezier(0.9,0,0.1,1)",
      "offsetY": 18,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 280,
      "offsetY": 8
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 90,
      "imageScale": 1.045
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "generative-grid": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 780,
      "easeCss": "cubic-bezier(0.3,0,0,1)",
      "offsetY": 10,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 900,
      "offsetY": 24
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 150,
      "imageScale": 1.012
    },
    "pin": {
      "enabled": true,
      "scrub": 1.6
    },
    "reduced": "static-frame"
  },
  "depth-parallax": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 1000,
      "easeCss": "cubic-bezier(0.16,0.6,0.3,1)",
      "offsetY": 40,
      "staggerMs": 130
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 1100,
      "offsetY": 56
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 360,
      "imageScale": 1.035
    },
    "pin": {
      "enabled": true,
      "scrub": 0.45
    },
    "reduced": "static-frame"
  },
  "fluid-simulation": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 1050,
      "easeCss": "cubic-bezier(0.22,0.9,0.24,1)",
      "offsetY": 20,
      "staggerMs": 160
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 1150,
      "offsetY": 34
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 520,
      "imageScale": 1.028
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "shadow-stage": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 430,
      "easeCss": "cubic-bezier(0.4,0.05,0.25,1)",
      "offsetY": 18,
      "staggerMs": 75
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 610,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 250,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "moire-field": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 530,
      "easeCss": "cubic-bezier(0.37,0,0.63,1)",
      "offsetY": 4,
      "staggerMs": 25
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 470,
      "offsetY": 6
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 95,
      "imageScale": 1
    },
    "pin": {
      "enabled": true,
      "scrub": 1.05
    },
    "reduced": "static-frame"
  },
  "motion-trail": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 370,
      "easeCss": "cubic-bezier(0.15,0.8,0.3,1)",
      "offsetY": 10,
      "staggerMs": 130
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 490,
      "offsetY": 14
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 300,
      "imageScale": 1.045
    },
    "pin": {
      "enabled": true,
      "scrub": 1.15
    },
    "reduced": "static-frame"
  },
  "stepped-mechanism": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 360,
      "easeCss": "steps(4, end)",
      "offsetY": 0,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 310,
      "offsetY": 12
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 85,
      "imageScale": 1.008
    },
    "pin": {
      "enabled": true,
      "scrub": 0.45
    },
    "reduced": "static-frame"
  },
  "holographic-layer": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 970,
      "easeCss": "cubic-bezier(0.32,0.06,0.2,1)",
      "offsetY": 28,
      "staggerMs": 110
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 860,
      "offsetY": 24
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 410,
      "imageScale": 1.038
    },
    "pin": {
      "enabled": true,
      "scrub": 1.25
    },
    "reduced": "static-frame"
  },
  "voice-first": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 370,
      "easeCss": "cubic-bezier(0.2,0.9,0.3,1)",
      "offsetY": 2,
      "staggerMs": 22
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 230,
      "offsetY": 6
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 95,
      "imageScale": 1.002
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "spatial-ar-layer": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 860,
      "easeCss": "cubic-bezier(0.16,0.9,0.24,1)",
      "offsetY": 25,
      "staggerMs": 88
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 810,
      "offsetY": 28
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 285,
      "imageScale": 1.008
    },
    "pin": {
      "enabled": true,
      "scrub": 0.42
    },
    "reduced": "static-frame"
  },
  "command-palette": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 190,
      "easeCss": "cubic-bezier(0.05,0.9,0.1,1)",
      "offsetY": 5,
      "staggerMs": 18
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 170,
      "offsetY": 4
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 65,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "timeline-editor": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 510,
      "easeCss": "cubic-bezier(0.45,0.08,0.25,1)",
      "offsetY": 15,
      "staggerMs": 42
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 530,
      "offsetY": 18
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 165,
      "imageScale": 1.004
    },
    "pin": {
      "enabled": true,
      "scrub": 1.3
    },
    "reduced": "static-frame"
  },
  "kanban-flow": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 730,
      "easeCss": "cubic-bezier(0.3,0.4,0.2,1)",
      "offsetY": 19,
      "staggerMs": 68
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 690,
      "offsetY": 22
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 235,
      "imageScale": 1.024
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "step-wizard": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 390,
      "easeCss": "cubic-bezier(0.25,0.8,0.3,1)",
      "offsetY": 7,
      "staggerMs": 48
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 410,
      "offsetY": 9
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 145,
      "imageScale": 1.008
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "zero-ui": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 1100,
      "easeCss": "cubic-bezier(0.33,0,0.12,1)",
      "offsetY": 3,
      "staggerMs": 185
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1150,
      "offsetY": 2
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 560,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "notebook-repl": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 230,
      "easeCss": "cubic-bezier(0.2,0.9,0.2,1)",
      "offsetY": 3,
      "staggerMs": 24
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 190,
      "offsetY": 2
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 70,
      "imageScale": 1.004
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "multiplayer-presence": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 630,
      "easeCss": "cubic-bezier(0.34,1.16,0.64,1)",
      "offsetY": 9,
      "staggerMs": 33
    },
    "scroll": {
      "pattern": "pin-scrub",
      "durationMs": 570,
      "offsetY": 11
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 210,
      "imageScale": 1.026
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "keyboard-first": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 120,
      "easeCss": "linear",
      "offsetY": 0,
      "staggerMs": 8
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 100,
      "offsetY": 1
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 45,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "kids-playground": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 460,
      "easeCss": "cubic-bezier(0.34,1.574,0.64,1)",
      "offsetY": 22,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 520,
      "offsetY": 18
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 180,
      "imageScale": 1.04
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "carnival-festival": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 280,
      "easeCss": "cubic-bezier(0.34,1.56,0.64,1)",
      "offsetY": 30,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 360,
      "offsetY": 24
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 120,
      "imageScale": 1.06
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "sticker-sheet": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 340,
      "easeCss": "cubic-bezier(0.34,1.82,0.64,1)",
      "offsetY": 12,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 400,
      "offsetY": 14
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 160,
      "imageScale": 1.08
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "arcade-8bit": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 180,
      "easeCss": "steps(4, end)",
      "offsetY": 8,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 220,
      "offsetY": 6
    },
    "hover": {
      "pattern": "tilt-3d",
      "durationMs": 70,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "craft-handmade": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 820,
      "easeCss": "cubic-bezier(0.4,0.1,0.3,1)",
      "offsetY": 26,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 950,
      "offsetY": 22
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 300,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": true,
      "scrub": 1.1
    },
    "reduced": "static-frame"
  },
  "celebration-card": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 520,
      "easeCss": "cubic-bezier(0.34,1.42,0.4,1)",
      "offsetY": 14,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 600,
      "offsetY": 16
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 180,
      "imageScale": 1.024
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "collectible-card": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 700,
      "easeCss": "cubic-bezier(0.16,0.9,0.24,1)",
      "offsetY": 26,
      "staggerMs": 80
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 780,
      "offsetY": 22
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 200,
      "imageScale": 1.038
    },
    "pin": {
      "enabled": true,
      "scrub": 1.05
    },
    "reduced": "static-frame"
  },
  "comic-story": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 280,
      "easeCss": "steps(3, end)",
      "offsetY": 22,
      "staggerMs": 45
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 340,
      "offsetY": 20
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 120,
      "imageScale": 1.016
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "album-sleeve": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 900,
      "easeCss": "cubic-bezier(0.4,0.05,0.2,1)",
      "offsetY": 18,
      "staggerMs": 100
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 950,
      "offsetY": 24
    },
    "hover": {
      "pattern": "tilt-3d",
      "durationMs": 380,
      "imageScale": 1.062
    },
    "pin": {
      "enabled": true,
      "scrub": 0.7
    },
    "reduced": "static-frame"
  },
  "sports-energy": {
    "enter": {
      "pattern": "split-slide",
      "durationMs": 240,
      "easeCss": "cubic-bezier(0.9,0,0.1,1)",
      "offsetY": 36,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 280,
      "offsetY": 40
    },
    "hover": {
      "pattern": "tilt-3d",
      "durationMs": 80,
      "imageScale": 1.05
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "marble-vein": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 640,
      "easeCss": "cubic-bezier(0.18,0.72,0.22,1)",
      "offsetY": 13,
      "staggerMs": 32
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 870,
      "offsetY": 17
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 310,
      "imageScale": 1.035
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "silk-drape": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 760,
      "easeCss": "cubic-bezier(0.46,0.03,0.24,1)",
      "offsetY": 27,
      "staggerMs": 78
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 920,
      "offsetY": 29
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 245,
      "imageScale": 1.048
    },
    "pin": {
      "enabled": true,
      "scrub": 0.78
    },
    "reduced": "static-frame"
  },
  "brass-copper": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 920,
      "easeCss": "cubic-bezier(0.52,0.04,0.3,1)",
      "offsetY": 9,
      "staggerMs": 52
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 790,
      "offsetY": 7
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 195,
      "imageScale": 1.009
    },
    "pin": {
      "enabled": true,
      "scrub": 1.32
    },
    "reduced": "static-frame"
  },
  "porcelain-glaze": {
    "enter": {
      "pattern": "fade-rise",
      "durationMs": 560,
      "easeCss": "cubic-bezier(0.12,0.75,0.24,1)",
      "offsetY": 33,
      "staggerMs": 95
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 840,
      "offsetY": 35
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 360,
      "imageScale": 1.028
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "leather-craft": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 1080,
      "easeCss": "cubic-bezier(0.66,0.02,0.3,1)",
      "offsetY": 21,
      "staggerMs": 108
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 930,
      "offsetY": 23
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 430,
      "imageScale": 1.052
    },
    "pin": {
      "enabled": true,
      "scrub": 0.68
    },
    "reduced": "static-frame"
  },
  "optic-prism": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 580,
      "easeCss": "cubic-bezier(0.16,0.84,0.44,1)",
      "offsetY": 14,
      "staggerMs": 45
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 720,
      "offsetY": 16
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 220,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": true,
      "scrub": 0.85
    },
    "reduced": "static-frame"
  },
  "wood-joinery": {
    "enter": {
      "pattern": "line-mask",
      "durationMs": 660,
      "easeCss": "cubic-bezier(0.22,0.72,0.24,1)",
      "offsetY": 20,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "scroll-zoom",
      "durationMs": 800,
      "offsetY": 24
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 240,
      "imageScale": 1.015
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "letterpress-print": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 300,
      "easeCss": "cubic-bezier(0.7,0,0.3,1)",
      "offsetY": 2,
      "staggerMs": 35
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 340,
      "offsetY": 6
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 110,
      "imageScale": 1.005
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "concrete-monolith": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 950,
      "easeCss": "cubic-bezier(0.5,0.02,0.3,1)",
      "offsetY": 32,
      "staggerMs": 80
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1050,
      "offsetY": 28
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 340,
      "imageScale": 1.01
    },
    "pin": {
      "enabled": true,
      "scrub": 1.15
    },
    "reduced": "static-frame"
  },
  "enamel-porcelain": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 440,
      "easeCss": "cubic-bezier(0.34,1.3,0.64,1)",
      "offsetY": 10,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 500,
      "offsetY": 12
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 200,
      "imageScale": 1.025
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "speculative-scifi": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 410,
      "easeCss": "cubic-bezier(0.58,0.02,0.34,1)",
      "offsetY": 11,
      "staggerMs": 47
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 430,
      "offsetY": 17
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 185,
      "imageScale": 1.011
    },
    "pin": {
      "enabled": true,
      "scrub": 0.58
    },
    "reduced": "static-frame"
  },
  "volumetric-data": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 960,
      "easeCss": "cubic-bezier(0.24,0.02,0.18,1)",
      "offsetY": 38,
      "staggerMs": 98
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 890,
      "offsetY": 31
    },
    "hover": {
      "pattern": "tilt-3d",
      "durationMs": 430,
      "imageScale": 1.029
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "agent-orchestration": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 270,
      "easeCss": "cubic-bezier(0.72,0.04,0.2,1)",
      "offsetY": 1,
      "staggerMs": 13
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 290,
      "offsetY": 6
    },
    "hover": {
      "pattern": "tilt-3d",
      "durationMs": 105,
      "imageScale": 1.001
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "bio-synthetic": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 1080,
      "easeCss": "cubic-bezier(0.44,0.16,0.3,1)",
      "offsetY": 46,
      "staggerMs": 146
    },
    "scroll": {
      "pattern": "stack-pin",
      "durationMs": 1070,
      "offsetY": 33
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 490,
      "imageScale": 1.043
    },
    "pin": {
      "enabled": true,
      "scrub": 1.18
    },
    "reduced": "static-frame"
  },
  "nanotech": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 610,
      "easeCss": "cubic-bezier(0.62,0.06,0.28,0.98)",
      "offsetY": 21,
      "staggerMs": 31
    },
    "scroll": {
      "pattern": "mask-wipe",
      "durationMs": 670,
      "offsetY": 23
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 155,
      "imageScale": 1.007
    },
    "pin": {
      "enabled": true,
      "scrub": 0.4
    },
    "reduced": "static-frame"
  },
  "planetary-service": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 570,
      "easeCss": "cubic-bezier(0.24,0.72,0.18,1)",
      "offsetY": 22,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 670,
      "offsetY": 26
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 190,
      "imageScale": 1.022
    },
    "pin": {
      "enabled": true,
      "scrub": 0.85
    },
    "reduced": "static-frame"
  },
  "quantum-lab": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 290,
      "easeCss": "cubic-bezier(0.5,0.05,0.3,1)",
      "offsetY": 0,
      "staggerMs": 35
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 350,
      "offsetY": 8
    },
    "hover": {
      "pattern": "tilt-3d",
      "durationMs": 105,
      "imageScale": 1
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "retro-future": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 610,
      "easeCss": "cubic-bezier(0.3,1.2,0.4,1)",
      "offsetY": 16,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 700,
      "offsetY": 18
    },
    "hover": {
      "pattern": "tilt-3d",
      "durationMs": 340,
      "imageScale": 1.035
    },
    "pin": {
      "enabled": true,
      "scrub": 1.1
    },
    "reduced": "static-frame"
  },
  "virtual-engine": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 210,
      "easeCss": "steps(6, end)",
      "offsetY": 32,
      "staggerMs": 20
    },
    "scroll": {
      "pattern": "counter",
      "durationMs": 240,
      "offsetY": 40
    },
    "hover": {
      "pattern": "tilt-3d",
      "durationMs": 70,
      "imageScale": 1.05
    },
    "pin": {
      "enabled": false,
      "scrub": null
    },
    "reduced": "opacity"
  },
  "zero-gravity": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 1080,
      "easeCss": "cubic-bezier(0.2,0.7,0.15,1)",
      "offsetY": 36,
      "staggerMs": 140
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 1050,
      "offsetY": 30
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 480,
      "imageScale": 1.018
    },
    "pin": {
      "enabled": true,
      "scrub": 1.32
    },
    "reduced": "static-frame"
  },
  "noir-estate": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 880,
      "easeCss": "cubic-bezier(0.16,0.84,0.28,1)",
      "offsetY": 14,
      "staggerMs": 60
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 900,
      "offsetY": 10
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 260,
      "imageScale": 1.014
    },
    "pin": {
      "enabled": true,
      "scrub": 1.22
    },
    "reduced": "static-frame"
  },
  "agency-portfolio": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 620,
      "easeCss": "cubic-bezier(0.2,0.8,0.2,1)",
      "offsetY": 20,
      "staggerMs": 40
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 540,
      "offsetY": 16
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 180,
      "imageScale": 1.03
    },
    "pin": {
      "enabled": false,
      "scrub": 0
    },
    "reduced": "opacity"
  },
  "product-launch": {
    "enter": {
      "pattern": "scale-settle",
      "durationMs": 740,
      "easeCss": "cubic-bezier(0.22,0.9,0.24,1)",
      "offsetY": 24,
      "staggerMs": 50
    },
    "scroll": {
      "pattern": "reveal",
      "durationMs": 700,
      "offsetY": 18
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 220,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": 0
    },
    "reduced": "opacity"
  },
  "boutique-hotel": {
    "enter": {
      "pattern": "clip-curtain",
      "durationMs": 1020,
      "easeCss": "cubic-bezier(0.3,0.02,0.2,1)",
      "offsetY": 10,
      "staggerMs": 70
    },
    "scroll": {
      "pattern": "parallax",
      "durationMs": 1000,
      "offsetY": 8
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 300,
      "imageScale": 1.018
    },
    "pin": {
      "enabled": false,
      "scrub": 0
    },
    "reduced": "opacity"
  },
  "lookbook-editorial": {
    "enter": {
      "pattern": "letter-stagger",
      "durationMs": 700,
      "easeCss": "cubic-bezier(0.4,0,0.15,1)",
      "offsetY": 12,
      "staggerMs": 90
    },
    "scroll": {
      "pattern": "velocity-skew",
      "durationMs": 620,
      "offsetY": 14
    },
    "hover": {
      "pattern": "underline-draw",
      "durationMs": 160,
      "imageScale": 1.02
    },
    "pin": {
      "enabled": false,
      "scrub": 0
    },
    "reduced": "opacity"
  },
  "dark-dashboard": {
    "enter": {
      "pattern": "blur-in",
      "durationMs": 480,
      "easeCss": "cubic-bezier(0.25,0.6,0.2,1)",
      "offsetY": 16,
      "staggerMs": 30
    },
    "scroll": {
      "pattern": "grid-stagger",
      "durationMs": 440,
      "offsetY": 12
    },
    "hover": {
      "pattern": "scale",
      "durationMs": 140,
      "imageScale": 1.01
    },
    "pin": {
      "enabled": false,
      "scrub": 0
    },
    "reduced": "opacity"
  }
};
