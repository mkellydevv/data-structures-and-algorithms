const rareRouting = (n, roads) => {
  const graph = buildUndirectedGraph(roads);
  const visited = new Set();

  const altPathsExist = hasAltPaths(graph, String(roads[0][0]), null, visited);

  return !altPathsExist && visited.size === n;
};

const hasAltPaths = (graph, node, parent, visited) => {
  visited.add(node);

  for (let neighbor of graph[node]) {
    if (neighbor === parent) continue;
    else if (visited.has(neighbor)) {
      return true;
    } else {
      if (hasAltPaths(graph, neighbor, node, visited)) return true;
    }
  }

  return false;
};

const buildUndirectedGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(String(b));
    graph[b].push(String(a));
  }

  return graph;
};

module.exports = {
  rareRouting,
};
