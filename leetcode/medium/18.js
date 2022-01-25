// https://leetcode.com/problems/4sum/

var fourSum = function (nums, tar) {
  if (nums.length < 4) return [];
  nums = nums.sort((a, b) => a - b);
  const res = [];

  let i = 0;
  let j = 1;
  let k = 2;
  let m = nums.length - 1;

  while (i < nums.length - 3) {
    j = i + 1;

    while (j < nums.length - 2) {
      k = j + 1;
      m = nums.length - 1;

      while (k < m) {
        const sum = nums[i] + nums[j] + nums[k] + nums[m];
        if (sum < tar) k++;
        else if (sum > tar) m--;
        else {
          res.push([nums[i], nums[j], nums[k], nums[m]]);

          k++;
          m--;
          // Don't need to m because a change in nums[k] necessitates a change in nums[m]
          while (nums[k] === nums[k - 1] && k < m) k++;
        }
      }

      j++;
      while (nums[j] === nums[j - 1]) j++;
    }

    i++;
    while (nums[i] === nums[i - 1]) i++;
  }

  return res;
};
