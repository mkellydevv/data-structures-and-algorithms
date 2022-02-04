// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const nums = [];
  for (let num = 1; num <= n; num++) nums.push(num);

  return _combine(nums, k);
};

const _combine = (nums, k) => {
  if (k === 0) return [[]];
  if (k > nums.length) return [];

  const first = nums[0];
  const remainder = nums.slice(1);

  const combosWithFirst = _combine(remainder, k - 1);
  for (let combo of combosWithFirst) combo.push(first);

  const combosWithoutFirst = _combine(remainder, k);

  return [...combosWithFirst, ...combosWithoutFirst];
};
