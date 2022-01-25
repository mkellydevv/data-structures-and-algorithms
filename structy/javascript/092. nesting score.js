const nestingScore = (str) => {
  const stack = [];

  for (let char of str) {
    if (char === '[') {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top === '[') {
        stack.push(1);
      } else {
        let sum = top;
        while (stack.length > 0) {
          const curr = stack.pop();
          if (curr === '[') {
            break;
          } else {
            sum += curr;
          }
        }
        stack.push(sum * 2);
      }
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};

module.exports = {
  nestingScore,
};
