const stringSearch = (grid, str) => {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === str[0]) {
        const foundString = dfs(grid, str, 0, r, c);
        if (foundString) return true;
      }
    }
  }
  return false;
};

const dfs = (grid, str, idx, r, c, visited = new Set()) => {
  const pos = r + ',' + c;
  if (visited.has(pos)) return false;
  if (r < 0 || c < 0 || r === grid.length || c === grid.length) return false;
  if (str[idx] !== grid[r][c]) return false;
  if (idx === str.length) return false;

  if (idx === str.length - 1 && str[idx] === grid[r][c]) return true;

  visited.add(pos);

  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let delta of deltas) {
    if (dfs(grid, str, idx + 1, r + delta[0], c + delta[1], visited))
      return true;
  }

  visited.delete(pos);

  return false;
};

module.exports = {
  stringSearch,
};
