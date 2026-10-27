import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mergeSort } from '../src/sort.js';

test('сортирует массив чисел по возрастанию', () => {
  assert.deepEqual(mergeSort([5, 2, 9, 1, 5, 6]), [1, 2, 5, 5, 6, 9]);
});

test('работает с пустым массивом и массивом из одного элемента', () => {
  assert.deepEqual(mergeSort([]), []);
  assert.deepEqual(mergeSort([42]), [42]);
});

test('не изменяет исходный массив', () => {
  const source = [3, 1, 2];
  mergeSort(source);
  assert.deepEqual(source, [3, 1, 2]);
});

test('поддерживает пользовательский компаратор', () => {
  assert.deepEqual(mergeSort([1, 3, 2], (a, b) => b - a), [3, 2, 1]);
  assert.deepEqual(mergeSort(['b', 'c', 'a'], (a, b) => a.localeCompare(b)), ['a', 'b', 'c']);
});

test('совпадает со встроенной сортировкой на случайных данных', () => {
  const data = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 2000) - 1000);
  assert.deepEqual(mergeSort(data), [...data].sort((a, b) => a - b));
});
