const bestBridge = (grid) => {
  const bridgeLength = 0;
  let islandA = [];
  let visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 'L') {
        mapIsland(grid, r, c, visited, islandA);
        return findFirstBridgeLength(grid, visited, islandA) - 1;
      }
    }
  }
};

const findFirstBridgeLength = (grid, visited, island) => {
  const queue = island;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift();
    const pos = r + ',' + c;

    if (grid[r][c] === 'L' && !visited.has(pos)) return dist;

    visited.add(pos);

    for (let dir of directions) {
      let neighborR = r + dir[0];
      let neighborC = c + dir[1];
      let neighborPos = neighborR + ',' + neighborC;
      if (!visited.has(neighborPos) && !oob(grid, neighborR, neighborC)) {
        queue.push([neighborR, neighborC, dist + 1]);
      }
    }
  }

  return null;
};

const oob = (grid, r, c) => {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return true;
  return false;
};

const mapIsland = (grid, r, c, visited, island) => {
  if (visited.has(r + ',' + c)) return;
  if (oob(grid, r, c)) return;
  if (grid[r][c] !== 'L') return;

  visited.add(r + ',' + c);
  island.push([r, c, 0]);

  mapIsland(grid, r + 1, c, visited, island);
  mapIsland(grid, r - 1, c, visited, island);
  mapIsland(grid, r, c + 1, visited, island);
  mapIsland(grid, r, c - 1, visited, island);
};

module.exports = {
  bestBridge,
};
