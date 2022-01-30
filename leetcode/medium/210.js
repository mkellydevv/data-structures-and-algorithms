// https://leetcode.com/problems/course-schedule-ii/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prereqs) {
  const graph = buildDirectedGraph(numCourses, prereqs);

  const order = topologicalOrder(graph);

  if (order.length === numCourses) return order;
  return [];
};

const topologicalOrder = (graph) => {
  const numParents = {};

  for (let node in graph) numParents[node] = 0;

  for (let node in graph) {
    for (let neighbor of graph[node]) numParents[neighbor]++;
  }

  const ready = [];
  for (let node in graph) {
    if (numParents[node] === 0) ready.push(node);
  }

  const order = [];
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

const buildDirectedGraph = (numCourses, edges) => {
  const graph = {};

  for (let i = 0; i < numCourses; i++) graph[String(i)] = [];

  for (let edge of edges) {
    let [a, b] = edge;
    a = String(a);
    b = String(b);
    graph[b].push(a);
  }

  return graph;
};
