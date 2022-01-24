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

module.exports = {
  nonAdjacentSum,
};
