const anagrams = (s1, s2) => {
  const map = {};

  for (let char of s1) {
    if (map[char]) map[char]++;
    else map[char] = 1;
  }

  for (let char of s2) {
    if (map[char]) map[char]--;
    else return false;
  }

  for (let key in map) {
    if (map[key] !== 0) return false;
  }

  return true;
};

module.exports = {
  anagrams,
};
