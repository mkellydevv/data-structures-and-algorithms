const undirectedPath = (edges, nodeA, nodeB) => {
  const adjList = buildAdjList(edges);
  const visited = new Set();
  const stack = [nodeA];

  while (stack.length > 0) {
    const curr = stack.pop();

    if (curr === nodeB) return true;

    visited.add(curr);

    for (let neighbor of adjList[curr]) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }

  return false;
};

const buildAdjList = (edges) => {
  const adjList = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in adjList)) adjList[a] = [];
    if (!(b in adjList)) adjList[b] = [];
    adjList[a].push(b);
    adjList[b].push(a);
  }
  return adjList;
};

module.exports = {
  undirectedPath,
};
