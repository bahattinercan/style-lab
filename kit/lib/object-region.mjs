/** Rebuilds an object's complete body while preserving its declaration and trailing code. */
export function replaceObjectRegion(source, open, close, generated) {
  const start = source.indexOf(open);
  if (start < 0) throw new Error(`object declaration not found: ${open}`);
  const bodyStart = start + open.length;
  const end = source.indexOf(close, bodyStart);
  if (end < 0) throw new Error(`object closing anchor not found: ${close.split('\n')[0]}`);
  return `${source.slice(0, bodyStart)}\n${generated}${source.slice(end)}`;
}
