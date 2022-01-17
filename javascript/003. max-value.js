const maxValue = (nums) => {
  let max = -Infinity;

  for (const num of nums) {
    max = Math.max(num, max);
  }

  return max;
};

module.exports = {
  maxValue,
};
