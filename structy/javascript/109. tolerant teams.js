const tolerantTeams = (rivalries) => {
  const graph = buildUndirectedGraph(rivalries);
  return isGraphBipartite(graph);
};

const isGraphBipartite = (graph) => {
  let setA = new Set();
  let setB = new Set();

  for (let key in graph) {
    if (setB.has(key)) [setA, setB] = [setB, setA];

    setA.add(key);

    for (let neighbor of graph[key]) {
      if (setA.has(neighbor)) return false;
      setB.add(neighbor);
    }
  }

  return true;
};

const buildUndirectedGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

module.exports = {
  tolerantTeams,
};
