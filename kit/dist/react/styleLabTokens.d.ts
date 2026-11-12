// GENERATED — node kit/export/react.mjs
export type StyleLabTheme = 'light' | 'dark';

export interface StyleLabPalette {
  bg: string;
  bg2: string;
  surface: string;
  surface2: string;
  ink: string;
  inkSoft: string;
  inkFaint: string;
  accent: string;
  accentInk: string;
  line: string;
}

export interface StyleLabMotion {
  fastMs: number;
  baseMs: number;
  slowMs: number;
  easing: string | null;
  easingPoints: number[] | null;
  enter: { durationMs: number | null; easing: string | null; offsetY: number; stagger: number };
  scroll: { durationMs: number | null; offsetY: number; triggerPercent: number | null; once: boolean };
  hover: { durationMs: number | null; imageScale: number };
  pin: { enabled: boolean; scrub: number | null };
  reduced: string | null;
}

export interface StyleLabStyle {
  num: string;
  name: string;
  family: string;
  light: StyleLabPalette;
  dark: StyleLabPalette;
  radius: string;
  radiusLg: string;
  shadow: string;
  shadowHard: string;
  spacing: string[];
  fonts: { display: string; body: string; mono: string };
  scale: Record<string, string>;
  weights: Record<string, number>;
  lineHeight: Record<string, number>;
  tracking: Record<string, string>;
  motion: StyleLabMotion;
}

export declare const styleLabTokens: Readonly<Record<string, StyleLabStyle>>;
export declare const styleLabSlugs: string[];
export declare function styleLabPalette(slug: string, theme?: StyleLabTheme): StyleLabPalette;
export declare function styleLabCssVars(slug: string, theme?: StyleLabTheme): Record<string, string>;
export declare function applyStyleLab(
  slug: string,
  options?: { theme?: StyleLabTheme; target?: Element | null },
): void;
