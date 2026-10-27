import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isBalanced } from '../src/brackets.js';

test('корректные последовательности', () => {
  for (const input of ['', '()', '({})', '[<>]{()}', '<{[()]}>', 'a(b)c[d]']) {
    assert.equal(isBalanced(input), true, input);
  }
});

test('некорректные последовательности', () => {
  for (const input of ['({)}', '(', ')', '((', '())', '<]', ')(', '{[}]']) {
    assert.equal(isBalanced(input), false, input);
  }
});
