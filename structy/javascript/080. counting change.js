const countingChange = (amount, coins, coinIdx = 0, memo = {}) => {
  const key = amount + ',' + coinIdx;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;

  let count = 0;
  let coin = coins[coinIdx];
  for (let i = 0; i * coin <= amount; i++) {
    count += countingChange(amount - i * coin, coins, coinIdx + 1, memo);
  }

  return (memo[key] = count);
};

module.exports = {
  countingChange,
};
