def max_path_sum(grid):
  return mps(grid, 0, 0)

def mps(grid, r, c, memo = {}):
  pos = (r,c)
  if pos in memo:
    return memo[pos]

  if r == len(grid) - 1 and c == len(grid[0]) - 1:
    return grid[r][c]

  if r == len(grid) or c == len(grid[0]):
    return 0

  memo[pos] = grid[r][c] + max(mps(grid,r+1,c), mps(grid,r,c+1))

  return memo[pos]
