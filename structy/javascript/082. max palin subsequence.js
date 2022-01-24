const maxPalinSubsequence = (str) => {
  return rec(str, 0, str.length - 1, {});
};

const rec = (str, i, j, memo) => {
  const key = i + ',' + j;
  if (key in memo) return memo[key];
  if (i === j) return 1;
  if (i > j) return 0;

  if (str[i] === str[j]) memo[key] = 2 + rec(str, i + 1, j - 1, memo);
  else memo[key] = Math.max(rec(str, i + 1, j, memo), rec(str, i, j - 1, memo));

  return memo[key];
};

module.exports = {
  maxPalinSubsequence,
};
