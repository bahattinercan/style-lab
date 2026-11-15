import test from 'node:test';
import assert from 'node:assert/strict';
import { replaceObjectRegion } from '../lib/object-region.mjs';

test('object regeneration removes entries outside the generated region and is idempotent', () => {
  const open = 'export const STYLES = {';
  const close = '\n};\n\nexport function configFor(slug) {';
  const initial = `${open}\n  'legacy': {},\n  /* >>> generated >>> */\n  'newer': {},\n  /* <<< generated <<< */${close}\n  return STYLES[slug];\n}`;
  const generated = ["  /* >>> generated >>> */", "  'legacy': { source: true },", "  /* <<< generated <<< */"].join('\n');
  const once = replaceObjectRegion(initial, open, close, generated);
  const twice = replaceObjectRegion(once, open, close, generated);

  assert.equal(once, twice);
  assert.match(once, /'legacy': \{ source: true \}/);
  assert.doesNotMatch(once, /'legacy': \{\},/);
});
