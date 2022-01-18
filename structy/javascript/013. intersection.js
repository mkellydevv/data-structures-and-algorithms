const intersection = (a, b) => {
  const setA = new Set(a);
  const arr = [];

  for (let el of b) {
    if (setA.has(el)) arr.push(el);
  }

  return arr;
};

module.exports = {
  intersection,
};
