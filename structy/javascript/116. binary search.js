const binarySearch = (nums, tar) => {
  return bsHelper(nums, tar, 0, nums.length - 1);
};

// const bsHelper = (nums, tar, left, right) => {
//   if (left > right) return -1;

//   const mid = Math.floor((right - left) / 2) + left;

//   if (nums[mid] < tar)
//     return bsHelper(nums, tar, mid + 1, right);
//   else if (nums[mid] > tar)
//     return bsHelper(nums, tar, left, mid - 1);
//   else
//     return mid;
// }

const bsHelper = (nums, tar) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] < tar) {
      left = mid + 1;
    } else if (nums[mid] > tar) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

module.exports = {
  binarySearch,
};
