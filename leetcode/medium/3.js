// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let i = 0;
  let j = 0;
  const seen = {};
  let longestSubStr = -Infinity;

  while (j < str.length) {
    const char = str[j];
    if (char in seen) i = Math.max(i, seen[char] + 1);
    seen[char] = j;
    longestSubStr = Math.max(j - i + 1, longestSubStr);
    j++;
  }

  return longestSubStr === -Infinity ? 0 : longestSubStr;
};
