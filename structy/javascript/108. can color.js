const canColor = (graph) => {
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
