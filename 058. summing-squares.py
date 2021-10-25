def summing_squares(n):
  squares = []

  i = 1
  while i * i <= n:
    squares.append(i * i)
    i += 1

  return _summing_squares(n, squares)

def _summing_squares(n, squares, memo = {}):
  if n in memo:
    return memo[n]
  if n < 0:
    return float('inf')
  if n == 0:
    return 0

  min_squares = float('inf')
  for sq in squares:
    min_squares = min(_summing_squares(n - sq, squares, memo) + 1, min_squares)

  memo[n] = min_squares
  return memo[n]
