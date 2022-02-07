// leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
https: var nextPermutation = function (nums) {
  if (nums.length < 2) return nums;

  // Find first element that isnt larger than right neighbor
  let i = nums.length - 2;
  while (i > -1 && nums[i] >= nums[i + 1]) i--;

  // Scan for first larger element and swap with it
  let j = i + 1;
  while (nums[j] > nums[i]) j++;
  j--;
  [nums[i], nums[j]] = [nums[j], nums[i]];

  // Reverse remaining elements
  let lo = i + 1;
  let hi = nums.length - 1;
  while (lo < hi) {
    [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
    lo++;
    hi--;
  }

  return nums;
};
