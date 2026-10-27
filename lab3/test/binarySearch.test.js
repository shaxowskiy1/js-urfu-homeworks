import { test } from 'node:test';
import assert from 'node:assert/strict';
import { binarySearch } from '../src/binarySearch.js';

const sorted = [-5, 3, 9, 10, 27, 38, 43, 82];

test('находит индекс существующего элемента', () => {
  sorted.forEach((value, index) => {
    assert.equal(binarySearch(sorted, value), index);
  });
});

test('возвращает -1 для отсутствующего элемента', () => {
  assert.equal(binarySearch(sorted, 100), -1);
  assert.equal(binarySearch(sorted, -100), -1);
  assert.equal(binarySearch(sorted, 11), -1);
});

test('работает с пустым массивом', () => {
  assert.equal(binarySearch([], 1), -1);
});
