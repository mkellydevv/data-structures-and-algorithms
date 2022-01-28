const safeCracking = (hints) => {
  const graph = buildDirectedGraph(hints);

  const topologicalOrder = getTopologicalOrder(graph);

  return topologicalOrder.join('');
};

const buildDirectedGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
  }
  return graph;
};

const getTopologicalOrder = (graph) => {
  const numParents = getNumParents(graph);

  let ready = [];
  for (let node in numParents) {
    if (numParents[node] === 0) ready.push(node);
  }

  let order = [];
  while (ready.length > 0) {
    const node = ready.pop();
    order.push(node);
    for (let neighbor of graph[node]) {
      numParents[neighbor]--;
      if (numParents[neighbor] === 0) ready.push(neighbor);
    }
  }

  return order;
};

const getNumParents = (graph) => {
  const numParents = {};

  for (let node in graph) {
    numParents[node] = 0;
  }

  for (let node in graph) {
    for (let neighbor of graph[node]) numParents[neighbor]++;
  }

  return numParents;
};

module.exports = {
  safeCracking,
};
