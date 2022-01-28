const detectDictionary = (dict, alphabet) => {
  const alphabetMap = {};
  for (let i = 0; i < alphabet.length; i++) alphabetMap[alphabet[i]] = i;

  for (let i = 0; i < dict.length - 1; i++) {
    const word1 = dict[i];
    const word2 = dict[i + 1];
    const correctOrder = lexicalOrder(word1, word2, alphabetMap);
    if (!correctOrder) return false;
  }

  return true;
};

const lexicalOrder = (word1, word2, alphabetMap) => {
  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];
    if (alphabetMap[char1] < alphabetMap[char2]) return true;
    else if (alphabetMap[char1] > alphabetMap[char2]) return false;
  }

  if (word1.length <= word2.length) return true;
  return false;
};

module.exports = {
  detectDictionary,
};
