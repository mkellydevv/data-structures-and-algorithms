const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);

  return !hasCycle(graph);
};

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
    if (detectCycle(graph, neighbor, visited, visiting)) return true;
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(String(b));
  }

  return graph;
};

module.exports = {
  prereqsPossible,
};
