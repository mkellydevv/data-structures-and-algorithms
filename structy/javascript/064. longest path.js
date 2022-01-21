const longestPath = (graph) => {
  const visited = new Set();
  let longest = 0;

  for (let node in graph) {
    if (!visited.has(node)) {
      longest = Math.max(longest, explorePath(graph, node, visited));
    }
  }

  return longest;
};

const explorePath = (graph, startNode, visited) => {
  const visiting = new Set();
  const stack = [[startNode, 0]];
  let longest = 0;

  while (stack.length > 0) {
    const [node, dist] = stack.pop();

    longest = Math.max(dist, longest);

    visiting.add(node);

    for (let neighbor of graph[node]) {
      if (!visiting.has(neighbor)) {
        stack.push([neighbor, dist + 1]);
      }
    }

    visiting.delete(node);
    visited.add(node);
  }

  return longest;
};

module.exports = {
  longestPath,
};
