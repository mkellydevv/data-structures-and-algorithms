const befittingBrackets = (str) => {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of str) {
    if (map[char]) {
      const top = stack.pop();
      if (map[char] !== top) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

module.exports = {
  befittingBrackets,
};
