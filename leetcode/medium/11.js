/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
  let i = 0;
  let j = heights.length - 1;
  let max = -Infinity;

  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(heights[i], heights[j]));

    if (heights[i] < heights[j]) i++;
    else j--;
  }

  return max;
};
