const substituteSynonyms = (sentence, synonyms) => {
  const sentenceArr = sentence.split(' ');

  const sents = helper(sentenceArr, 0, synonyms);

  return sents.map((subArr) => subArr.join(' '));
};

const helper = (arr, synonyms, idx) => {
  const newArr = [];

  // Find prefix
  let i = idx;
  while (!(arr[i] in synonyms) && i < arr.length) i++;
  const prefix = arr.slice(idx, i);
  if (i === arr.length) return [arr.slice(idx)];

  // Find suffixes
  const suffixes = helper(arr, synonyms, i + 1);

  // Attach suffixes
  for (let synonym of synonyms[arr[i]]) {
    for (let suffix of suffixes) {
      newArr.push([...prefix, synonym, ...suffix]);
    }
  }

  return newArr;
};

module.exports = {
  substituteSynonyms,
};
