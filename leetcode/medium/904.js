// https://leetcode.com/problems/fruit-into-baskets/submissions/

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  if (fruits.length === 1) return 1;

  let max = -Infinity;
  let basket = new Set([fruits[0]]);
  let runIdx = 0;

  for (let i = 0, j = 1; j < fruits.length; j++) {
    if (!basket.has(fruits[j])) {
      if (basket.size === 2) {
        basket = new Set([fruits[j], fruits[j - 1]]);
        i = runIdx;
      } else {
        basket.add(fruits[j]);
      }
    }

    // Update runIdx
    if (fruits[j] !== fruits[j - 1]) runIdx = j;

    max = Math.max(max, j - i);
  }

  return max + 1;
};
