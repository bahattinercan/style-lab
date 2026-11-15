import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeCss } from './css-cascade.mjs';

test('normalizes same-selector overrides without crossing media queries', () => {
  const output = normalizeCss('.a, .b { color: red; padding: 2px } .a { color: blue } @media (max-width: 600px) { .a { color: green } }');
  assert.doesNotMatch(output, /\.a\s*\{[^}]*color:\s*red/);
  assert.match(output, /\.b\s*\{[^}]*color:\s*red/);
  assert.match(output, /\.a\s*\{[^}]*color:\s*blue/);
  assert.match(output, /@media \(max-width: 600px\)[\s\S]*\.a\s*\{[^}]*color:\s*green/);
});

test('keeps the last declaration when importance is equal', () => {
  const output = normalizeCss('h1 { font-size: 20px; } h1 { font-size: 24px; }');
  assert.doesNotMatch(output, /20px/);
  assert.match(output, /24px/);
});
