const hasCycle = (graph) => {
  const visited = new Set();

  for (let startNode in graph) {
    if (!visited.has(startNode)) {
      if (detectCycle(graph, startNode, visited)) return true;
    }
  }

  return false;
};

const detectCycle = (graph, node, visited, visiting = new Set()) => {
  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, visiting, visited)) return true;
  }

  visiting.delete(node);
  visited.add(node);
  return false;
};

module.exports = {
  hasCycle,
};
