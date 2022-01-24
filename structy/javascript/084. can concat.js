const canConcat = (s, words, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i === s.length) return true;

  for (let word of words) {
    if (startsWith(s, i, word)) {
      if (canConcat(s, words, i + word.length, memo)) return true;
    }
  }

  memo[i] = false;
  return false;
};

const startsWith = (s, idx, word) => {
  for (let i = 0; i < word.length; i++) {
    if (s[i + idx] !== word[i]) return false;
  }
  return true;
};

const canConcat = (str, dict) => {
  const table = new Array(str.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === true) {
      for (let word of dict) {
        if (startsWith(str, i, word)) table[i + word.length] = true;
      }
    }
  }

  return table[table.length - 1];
};

module.exports = {
  canConcat,
};
