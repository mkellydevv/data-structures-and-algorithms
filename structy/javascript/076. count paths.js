const countPaths = (grid) => {
  return countPathsHelper(grid, 0, 0, {});
};

const _countPathsHelper = (grid, r, c, memo) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;
  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;

  return (memo[pos] =
    _countPathsHelper(grid, r + 1, c, memo) +
    _countPathsHelper(grid, r, c + 1, memo));
};

module.exports = {
  countPaths,
};
