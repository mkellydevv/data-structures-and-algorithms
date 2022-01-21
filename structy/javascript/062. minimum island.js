const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const islandSize = explore(grid, r, c, visited);
      if (islandSize > 0) minSize = Math.min(minSize, islandSize);
    }
  }

  return minSize;
};

const explore = (grid, r, c, visited) => {
  if (outOfBounds(grid, r, c)) return 0;
  if (grid[r][c] === 'W') return 0;
  if (visited.has(r + ',' + c)) return 0;

  visited.add(r + ',' + c);

  let size = 1;

  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r, c + 1, visited);
  size += explore(grid, r, c - 1, visited);

  return size;
};

const outOfBounds = (grid, r, c) => {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return true;
  return false;
};

module.exports = {
  minimumIsland,
};
