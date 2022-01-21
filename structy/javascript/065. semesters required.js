const semestersRequired = (numCourses, prereqs) => {
  const adjList = buildAdjList(prereqs);
  return longestPath(adjList) + 1;
};

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
  if (node in graph) {
    for (let neighbor of graph[node]) {
      maxDist = Math.max(maxDist, 1 + explorePath(graph, neighbor, pathLength));
    }
  }

  pathLength[node] = maxDist;

  return maxDist;
};

const buildAdjList = (edges) => {
  const adjList = {};
  for (let edge of edges) {
    const a = String(edge[0]);
    const b = String(edge[1]);
    if (a in adjList) adjList[a].push(b);
    else adjList[a] = [b];
  }
  return adjList;
};

module.exports = {
  semestersRequired,
};
