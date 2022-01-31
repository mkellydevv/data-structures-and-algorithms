/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  return _uniquePaths(m, n, 0, 0, {});
};

const _uniquePaths = (m, n, r, c, memo) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (r === m || c === n) return 0;
  if (r === m - 1 && c === n - 1) return 1;

  return (memo[pos] =
    _uniquePaths(m, n, r + 1, c, memo) + _uniquePaths(m, n, r, c + 1, memo));
};
