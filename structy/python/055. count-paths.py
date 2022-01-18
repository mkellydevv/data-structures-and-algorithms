def count_paths(grid):
  if grid[len(grid) - 1][len(grid[0]) - 1] == "X":
    return 0

  return _count_paths(grid, 0, 0)

def _count_paths(grid, r, c, memo = {}):
  pos = (r,c)
  if pos in memo:
    return memo[pos]

  if r == len(grid) - 1 and c == len(grid[0]) - 1:
    return 1

  if r == len(grid) or c == len(grid[0]) or grid[r][c] == "X":
    return 0

  memo[pos] = _count_paths(grid, r + 1, c, memo) + _count_paths(grid, r, c + 1, memo)

  return memo[pos]
