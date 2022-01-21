const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (!visited.has(Number(node))) {
      explore(graph, node, visited);
      count++;
    }
  }

  return count;
};

const explore = (graph, startNode, visited) => {
  const stack = [startNode];

  while (stack.length > 0) {
    const node = stack.pop();

    visited.add(Number(node));

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
};

module.exports = {
  connectedComponentsCount,
};
