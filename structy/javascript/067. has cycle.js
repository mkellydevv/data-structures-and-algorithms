const hasCycle = (graph) => {
  for (let startNode in graph) {
    if (detectCycle(graph, startNode)) return true;
  }

  return false;
};

const detectCycle = (
  graph,
  node,
  visited = new Set(),
  visiting = new Set()
) => {
  if (visited.has(node)) return false;
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
