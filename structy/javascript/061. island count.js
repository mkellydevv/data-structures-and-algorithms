const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 'L' && !visited.has(`${r},${c}`)) {
        explore(grid, r, c, visited);
        count++;
      }
    }
  }

  return count;
};

const explore = (grid, r, c, visited) => {
  if (outOfBounds(grid, r, c)) return;

  if (grid[r][c] !== 'L') return;

  const pos = `${r},${c}`;
  if (visited.has(pos)) return;

  visited.add(pos);

  explore(grid, r + 1, c, visited);
  explore(grid, r - 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);
};

const outOfBounds = (grid, r, c) => {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return true;
  return false;
};

module.exports = {
  islandCount,
};
