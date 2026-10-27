const PAIRS = {
  ')': '(',
  ']': '[',
  '}': '{',
  '>': '<',
};

const OPENING = new Set(Object.values(PAIRS));

export function isBalanced(input) {
  const stack = [];
  for (const char of input) {
    if (OPENING.has(char)) {
      stack.push(char);
    } else if (char in PAIRS) {
      if (stack.pop() !== PAIRS[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
