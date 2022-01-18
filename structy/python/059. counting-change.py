def counting_change(amount, coins):
  return _counting_change(amount, coins, 0)

def _counting_change(amount, coins, i, memo={}):
  key = (amount, i)
  if key in memo:
    return memo[key]
  if amount == 0:
    return 1
  if i == len(coins):
    return 0

  coin = coins[i]

  num_ways = 0
  j = 0
  while j * coin <= amount:
    num_ways += _counting_change(amount - (j * coin), coins, i + 1, memo)
    j += 1

  memo[key] = num_ways

  return memo[key]
