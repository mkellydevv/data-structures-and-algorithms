const quickestConcat = (str, words) => {
  const table = new Array(str.length + 1).fill(Infinity);
  table[0] = 0;

  for (let i = 0; i < table.length; i++) {
    if (table[i] < Infinity) {
      for (let word of words) {
        if (startsWith(str, i, word)) {
          let j = i + word.length;
          table[j] = Math.min(table[j], 1 + table[i]);
        }
      }
    }
  }

  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};

const startsWith = (s, idx, word) => {
  for (let i = 0; i < word.length; i++) {
    if (s[i + idx] !== word[i]) return false;
  }
  return true;
};

module.exports = {
  quickestConcat,
};
