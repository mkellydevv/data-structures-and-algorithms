const parentheticalPossibilities = (str) => {
  if (str.length === 0) return [''];

  let i = 0;
  while (str[i] !== '(' && i < str.length) i++;
  const prefix = str.slice(0, i);
  if (i === str.length) return [prefix];

  let j = i;
  while (str[j] !== ')') j++;
  const chars = str.slice(i + 1, j);

  const suffixes = parentheticalPossibilities(str.slice(j + 1), 0);

  const res = [];
  for (let char of chars) {
    for (let suffix of suffixes) res.push(prefix + char + suffix);
  }

  return res;
};

module.exports = {
  parentheticalPossibilities,
};
