// https://leetcode.com/problems/house-robber/

const rob = (nums) => {
  if (nums.length === 1) return nums[0];

  let prevMax = 0;
  let currMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tmp = currMax;
    currMax = Math.max(currMax, nums[i] + prevMax);
    prevMax = tmp;
  }

  return currMax;
};
