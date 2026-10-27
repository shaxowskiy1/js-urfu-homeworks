export function binarySearch(sortedArray, target, compare = (a, b) => a - b) {
  let low = 0;
  let high = sortedArray.length - 1;
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    const result = compare(sortedArray[middle], target);
    if (result === 0) {
      return middle;
    }
    if (result < 0) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}
