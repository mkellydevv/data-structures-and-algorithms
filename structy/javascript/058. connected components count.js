const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (!visited.has(String(node))) {
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
    if (visited.has(String(node))) continue;

    visited.add(String(node));

    for (let neighbor of graph[node]) {
      if (!visited.has(String(neighbor))) stack.push(neighbor);
    }
  }
};

module.exports = {
  connectedComponentsCount,
};
