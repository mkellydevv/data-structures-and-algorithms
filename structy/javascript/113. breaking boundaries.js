const breakingBoundaries = (m, n, moves, r, c, memo = {}) => {
  const key = r + ',' + c + ',' + moves;
  if (key in memo) return memo[key];
  if (r < 0 || c < 0 || r === m || c === n) return 1;
  if (moves === 0) return 0;

  let count = 0;
  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let delta of deltas) {
    count += breakingBoundaries(
      m,
      n,
      moves - 1,
      r + delta[0],
      c + delta[1],
      memo
    );
  }

  return (memo[key] = count);
};

module.exports = {
  breakingBoundaries,
};
