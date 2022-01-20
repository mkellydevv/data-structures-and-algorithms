// https://leetcode.com/problems/3sum/

var threeSum = function (nums) {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  const results = [];
  let i = 0;

  while (i < nums.length - 2) {
    // Constraint: Unique Triplets - Increment i until it is a new value
    if (nums[i] !== nums[i - 1]) twoSum(nums, i, results);
    i++;
  }

  return results;
};

// Target is always 0 for this problem
var twoSum = function (nums, i, results) {
  let j = i + 1;
  let k = nums.length - 1;

  while (j < k) {
    const sum = nums[i] + nums[j] + nums[k];

    if (sum < 0) j++;
    else if (sum > 0) k--;
    else {
      results.push([nums[i], nums[j], nums[k]]);
      j++;
      k--;
      // Constraint: Unique Triplets - Increment j until it is a new value
      while (nums[j] === nums[j - 1] && j < k) j++;
    }
  }
};
