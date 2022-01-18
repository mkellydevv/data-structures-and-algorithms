def min_change(amount, coins):
  ans = _min_change(amount, coins)
  return ans if ans < float('inf') else -1

def _min_change(amount, coins, memo = {}):
  if amount in memo:
    return memo[amount]
  if amount < 0:
    return float('inf')
  if amount == 0:
    return 0

  smallest = float('inf')
  for coin in coins:
    val = _min_change(amount - coin, coins, memo) + 1
    smallest = min(smallest, val)

  memo[amount] = smallest
  return smallest
