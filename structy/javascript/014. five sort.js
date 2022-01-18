const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    while (nums[i] !== 5 && i < j) i++;
    while (nums[j] === 5 && i < j) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  return nums;
};

module.exports = {
  fiveSort,
};
