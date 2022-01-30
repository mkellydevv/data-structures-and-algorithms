// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let islandCount = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        exploreIsland(grid, r, c);
        islandCount++;
      }
    }
  }

  return islandCount;
};

const exploreIsland = (grid, r, c) => {
  if (r < 0 || c < 0 || r === grid.length || c === grid[0].length) return;
  if (grid[r][c] === '0') return;

  grid[r][c] = '0';

  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let delta of deltas) {
    exploreIsland(grid, r + delta[0], c + delta[1]);
  }
};
