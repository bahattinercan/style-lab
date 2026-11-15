const CSS_LENGTH = /^(?:\d+(?:\.\d+)?(?:px|rem|em|vw)|clamp\(\d+(?:\.\d+)?px,\s*\d+(?:\.\d+)?vw,\s*\d+(?:\.\d+)?px\))$/;

const PROPERTIES = [
  ['h1', 'type-h1', '62px'],
  ['h1Mobile', 'type-h1-mobile', '28px'],
  ['h2', 'type-h2', '26px'],
  ['h3', 'type-h3', '20px'],
];

export function inlineTypeScale(scale = {}) {
  return PROPERTIES.map(([key, property, fallback]) => {
    const value = scale[key] ?? fallback;
    if (typeof value !== 'string' || !CSS_LENGTH.test(value)) {
      throw new Error(`typography.scale.${key} must be a CSS length`);
    }
    return `--${property}: ${value}`;
  }).join('; ');
}
