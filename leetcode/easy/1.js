// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, tar) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in map) return [i, map[num]];
    else map[tar - num] = i;
  }

  return null;
};
