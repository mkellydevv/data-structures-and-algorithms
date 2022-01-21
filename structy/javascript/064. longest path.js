const longestPath = (graph) => {
  const pathLength = {};
  let longest = 0;

  for (let node in graph) {
    longest = Math.max(longest, explorePath(graph, node, pathLength));
  }

  return longest;
};

const explorePath = (graph, node, pathLength) => {
  if (node in pathLength) return pathLength[node];

  let maxDist = 0;
  for (let neighbor of graph[node]) {
    maxDist = Math.max(maxDist, 1 + explorePath(graph, neighbor, pathLength));
  }

  pathLength[node] = maxDist;

  return maxDist;
};

module.exports = {
  longestPath,
};
