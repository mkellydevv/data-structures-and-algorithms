const closestCarrot = (grid, r, c) => {
  const queue = [[r, c], null];
  const visited = new Set();
  let dist = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      dist++;
      if (queue.length > 0) queue.push(null);
      continue;
    }
    const [r, c] = node;

    if (outOfBounds(grid, r, c)) continue;

    if (grid[r][c] === 'X') continue;

    const pos = r + ',' + c;
    if (visited.has(pos)) continue;
    visited.add(pos);

    if (grid[r][c] === 'C') return dist;

    const deltas = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (let delta of deltas) {
      let deltaR = r + delta[0];
      let deltaC = c + delta[1];
      let deltaPos = deltaR + ',' + deltaC;
      if (!visited.has(deltaPos)) {
        queue.push([deltaR, deltaC]);
      }
    }
  }

  return -1;
};

const outOfBounds = (grid, r, c) => {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return true;
  return false;
};

module.exports = {
  closestCarrot,
};
