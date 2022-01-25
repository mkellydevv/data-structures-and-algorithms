const createCombinations = (items, k) => {
  if (k === 0) return [[]];
  if (k > items.length) return [];

  const first = items[0];
  const right = items.slice(1);

  const combosWFirst = createCombinations(right, k - 1);
  for (let combo of combosWFirst) combo.push(first);

  const combosWOFirst = createCombinations(right, k);

  return [...combosWFirst, ...combosWOFirst];
};

module.exports = {
  createCombinations,
};
