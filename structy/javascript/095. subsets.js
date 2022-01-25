const subsets = (elements) => {
  const arr = [[]];

  for (let el of elements) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const copy = arr[i].slice();
      copy.push(el);
      arr.push(copy);
    }
  }

  return arr;
};

module.exports = {
  subsets,
};
