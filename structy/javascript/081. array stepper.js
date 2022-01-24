const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i === nums.length - 1) return true;

  for (let step = 1; step <= nums[i]; step++) {
    if (arrayStepper(nums, i + step, memo)) return true;
  }

  return (memo[i] = false);
};

module.exports = {
  arrayStepper,
};
