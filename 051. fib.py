def fib(n, memo = {0:0,1:1}):
  if n in memo:
    return memo[n]
  memo[n] = fib(n - 2, memo) + fib(n - 1, memo)
  return memo[n]
