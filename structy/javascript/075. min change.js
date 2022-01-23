const minChange = (amount, coins) => {
  const minCoins = minChangeHelper(amount, coins);
  return minCoins === Infinity ? -1 : minCoins;
};

const minChangeHelper = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;

  let minCoins = Infinity;
  for (let coin of coins) {
    minCoins = Math.min(
      minCoins,
      minChangeHelper(amount - coin, coins, memo) + 1
    );
  }

  return (memo[amount] = minCoins);
};

module.exports = {
  minChange,
};
