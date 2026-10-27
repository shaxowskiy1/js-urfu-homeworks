import { mergeSort } from './sort.js';
import { binarySearch } from './binarySearch.js';
import { isBalanced } from './brackets.js';

const numbers = [38, 27, 43, 3, 9, 82, 10, 3, -5];
const sorted = mergeSort(numbers);
console.log('Исходный массив:', numbers);
console.log('Отсортированный массив:', sorted);

for (const target of [43, -5, 100]) {
  console.log(`Поиск ${target}: индекс ${binarySearch(sorted, target)}`);
}

for (const input of ['({})', '({)}', '[<>]{()}', '((', '())', '']) {
  console.log(`"${input}" -> ${isBalanced(input) ? 'корректный' : 'некорректный'}`);
}
