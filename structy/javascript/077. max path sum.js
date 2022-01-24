const maxPathSum = (grid) => {
  return maxPathSumHelper(grid, 0, 0, {});
};

const maxPathSumHelper = (grid, r, c, memo) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (r === grid.length || c === grid[0].length) return -Infinity;
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

  const down = maxPathSumHelper(grid, r + 1, c, memo);
  const right = maxPathSumHelper(grid, r, c + 1, memo);

  return (memo[pos] = Math.max(down, right) + grid[r][c]);
};

module.exports = {
  maxPathSum,
};
