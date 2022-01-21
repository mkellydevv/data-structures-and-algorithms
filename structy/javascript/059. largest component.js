const largestComponent = (graph) => {
  const visited = new Set();
  let maxSize = 0;

  for (let node in graph) {
    if (!visited.has(String(node)))
      maxSize = Math.max(maxSize, explore(graph, node, visited));
  }

  return maxSize;
};

const explore = (graph, startNode, visited) => {
  const stack = [startNode];
  let size = 0;

  while (stack.length > 0) {
    const currNode = stack.pop();
    if (visited.has(currNode)) continue;

    visited.add(String(currNode));
    size++;

    for (let neighbor of graph[currNode]) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }

  return size;
};

module.exports = {
  largestComponent,
};
