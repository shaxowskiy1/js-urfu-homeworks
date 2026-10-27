export function mergeSort(array, compare = (a, b) => a - b) {
  if (array.length <= 1) {
    return array.slice();
  }
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle), compare);
  const right = mergeSort(array.slice(middle), compare);
  return merge(left, right, compare);
}

function merge(left, right, compare) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) <= 0) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
}
