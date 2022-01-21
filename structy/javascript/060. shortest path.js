const shortestPath = (edges, nodeA, nodeB) => {
  const adjList = buildGraph(edges);
  const visited = new Set();
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [currNode, dist] = queue.shift();

    if (currNode === nodeB) return dist;

    visited.add(currNode);

    for (let neighbor of adjList[currNode]) {
      if (!visited.has(neighbor)) queue.push([neighbor, dist + 1]);
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

module.exports = {
  shortestPath,
};
