import test from 'node:test';
import assert from 'node:assert/strict';
import { applySectionPlan } from './section-plan.mjs';

test('reorders page sections in the DOM according to the section plan', () => {
  const html = '<main class="pg"><!-- SECTION:a -->A<!-- SECTION:b -->B</main>';
  assert.equal(applySectionPlan(html, { id: 'reverse', order: ['b', 'a'] }), '<main class="pg">BA</main>');
});

test('rejects plans that omit or repeat a section', () => {
  const html = '<main class="pg"><!-- SECTION:a -->A<!-- SECTION:b -->B</main>';
  assert.throws(() => applySectionPlan(html, { id: 'bad', order: ['a'] }), /count or uniqueness/);
  assert.throws(() => applySectionPlan(html, { id: 'bad', order: ['a', 'a'] }), /count or uniqueness/);
});
