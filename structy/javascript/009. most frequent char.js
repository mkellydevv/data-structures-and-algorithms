const mostFrequentChar = (s) => {
  const map = {};
  let freq = null;
  map[freq] = [-1, -1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) map[s[i]][0]++;
    else map[s[i]] = [1, i];
  }

  for (let key in map) {
    if (map[key][0] > map[freq][0]) freq = key;
    else if (map[key][0] === map[freq][0])
      freq = map[key][1] < map[freq][1] ? key : freq;
  }

  return freq;
};

module.exports = {
  mostFrequentChar,
};
