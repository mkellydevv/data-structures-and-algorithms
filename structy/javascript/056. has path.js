const hasPath = (graph, src, dst) => {
  const stack = [src];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node === dst) return true;

    for (let neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }

  return false;
};

module.exports = {
  hasPath,
};
