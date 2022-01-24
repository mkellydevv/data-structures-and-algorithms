const summingSquares = (n) => {
  return summingSquaresHelper(n, {});
};

const summingSquaresHelper = (target, memo) => {
  if (target in memo) return memo[target];
  if (target === 0) return 0;

  let minSquares = Infinity;
  for (let i = 1; i <= Math.sqrt(target); i++) {
    const square = i ** 2;
    minSquares = Math.min(
      minSquares,
      1 + summingSquaresHelper(target - square, memo)
    );
  }

  return (memo[target] = minSquares);
};

module.exports = {
  summingSquares,
};
