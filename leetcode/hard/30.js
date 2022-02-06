// https://leetcode.com/problems/substring-with-concatenation-of-all-words/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// Sliding window
const findSubstring = (str, words) => {
  const wordLength = words[0].length;
  const subStringLength = words.length * wordLength;
  const end = str.length - subStringLength;
  const res = [];

  for (let i = 0; i < wordLength; i++) {
    let [wordMap, keyCount] = wordsToMapAndCount(words);

    let j = i;
    let k = j;
    let firstSubStr = str.slice(j, j + wordLength);
    while (k < str.length) {
      let subStr = str.slice(k, k + wordLength);

      if (k - j + 1 > subStringLength) {
        wordMap[firstSubStr]++;
        keyCount++;
        j += wordLength;
        firstSubStr = str.slice(j, j + wordLength);
      }

      if (wordMap[subStr] > 0) {
        wordMap[subStr]--;
        keyCount--;
        k += wordLength;
      } else {
        if (wordMap[subStr] === 0) j += wordLength;
        else j = k + wordLength;
        k = j;
        firstSubStr = str.slice(j, j + wordLength);
        let data = wordsToMapAndCount(words);
        wordMap = data[0];
        keyCount = data[1];
      }

      if (keyCount === 0) res.push(j);
    }
  }

  return res;
};

const wordsToMapAndCount = (words) => {
  let wordMap = {};
  for (let word of words) {
    if (word in wordMap) wordMap[word]++;
    else wordMap[word] = 1;
  }
  let keyCount = words.length;
  return [wordMap, keyCount];
};

// Check All Indices Using a Hash Table
var findSubstring2 = function (str, words) {
  const results = [];
  const len = words[0].length;
  const end = str.length - words.length * len + 1;

  for (let i = 0; i < end; i++) {
    const wordMap = {};
    for (let word of words) {
      if (word in wordMap) wordMap[word]++;
      else wordMap[word] = 1;
    }
    let keyCount = words.length;

    let j = i;
    while (keyCount > 0 && j < str.length) {
      let subStr = str.slice(j, j + len);

      if (wordMap[subStr] > 0) {
        wordMap[subStr]--;
        keyCount--;
        j += len;
      } else {
        break;
      }
    }

    if (keyCount === 0) results.push(i);
  }

  return results;
};
