import test from 'node:test';
import assert from 'node:assert/strict';
import { inlineTypeScale } from './type-scale.mjs';

test('turns typography scale values into safe inline variables', () => {
  assert.equal(
    inlineTypeScale({ h1: '48px', h1Mobile: 'clamp(28px, 9vw, 44px)' }),
    '--type-h1: 48px; --type-h1-mobile: clamp(28px, 9vw, 44px); --type-h2: 26px; --type-h3: 20px',
  );
});

test('rejects values that could inject CSS declarations', () => {
  assert.throws(() => inlineTypeScale({ h1: '40px; color: red' }), /must be a CSS length/);
});
