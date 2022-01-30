/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const res = [-1, -1];

  let i = 0;
  while (i < 2) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
      const mid = Math.floor((hi - lo) / 2) + lo;

      if (nums[mid] < target) lo = mid + 1;
      else if (nums[mid] > target) hi = mid - 1;
      else {
        if (i === 0) {
          if (mid === 0 || nums[mid - 1] !== target) {
            res[0] = mid;
            break;
          } else hi = mid - 1;
        } else {
          if (mid === nums.length - 1 || nums[mid + 1] !== target) {
            res[1] = mid;
            break;
          } else lo = mid + 1;
        }
      }
    }
    i++;
  }

  return res;
};
