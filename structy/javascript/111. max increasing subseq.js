const maxIncreasingSubseq = (nums, i = 0, prev = -Infinity, memo = {}) => {
  const key = i + ',' + prev;
  if (key in memo) return memo[key];
  if (i === nums.length) return 0;

  const countA =
    nums[i] > prev
      ? 1 + maxIncreasingSubseq(nums, i + 1, nums[i], memo)
      : -Infinity;
  const countB = maxIncreasingSubseq(nums, i + 1, prev, memo);

  return (memo[key] = Math.max(countA, countB));
};

module.exports = {
  maxIncreasingSubseq,
};
