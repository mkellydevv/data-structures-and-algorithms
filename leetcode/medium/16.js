// https://leetcode.com/problems/3sum-closest/

var threeSumClosest = function (nums, tar) {
  nums.sort((a, b) => a - b);

  let sum = nums[0] + nums[1] + nums[2];
  if (tar < sum) return sum;

  sum = nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3];
  if (tar > sum) return sum;

  let i = 0;
  let closest = sum;

  while (i < nums.length - 2) {
    if (nums[i] !== nums[i - 1]) {
      closest = getClosest(tar, closest, twoSum(nums, i, tar));
      if (closest === tar) return closest;
    }
    i++;
  }

  return closest;
};

const twoSum = (nums, i, tar) => {
  let j = i + 1;
  let k = nums.length - 1;
  let closest = Infinity;

  while (j < k) {
    const sum = nums[i] + nums[j] + nums[k];

    closest = getClosest(tar, closest, sum);

    if (sum < tar) j++;
    else if (sum > tar) k--;
    else return closest;
  }

  return closest;
};

const getClosest = (tar, val1, val2) => {
  if (Math.abs(tar - val1) < Math.abs(tar - val2)) return val1;
  return val2;
};
