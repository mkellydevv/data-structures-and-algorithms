const nonAdjacentSum = (nums) => {
  let prevVal = 0;
  let currVal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tmp = Math.max(nums[i] + prevVal, currVal);
    prevVal = currVal;
    currVal = tmp;
  }

  return currVal;
};

const nonAdjacentSum = (nums, idx = 0, memo = {}) => {
  if (idx in memo) return memo[idx];
  if (idx > nums.length - 1) return 0;

  return (memo[idx] = Math.max(
    nums[idx] + nonAdjacentSum(nums, idx + 2, memo),
    nonAdjacentSum(nums, idx + 1, memo)
  ));
};

module.exports = {
  nonAdjacentSum,
};
