const topologicalOrder = (graph) => {
  const numParents = getNumParents(graph);

  const ready = [];
  for (let node in numParents) {
    if (numParents[node] === 0) ready.push(node);
  }

  const order = [];
  while (ready.length > 0) {
    const node = ready.shift();

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
  topologicalOrder,
};
