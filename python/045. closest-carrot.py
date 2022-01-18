from collections import deque

def closest_carrot(grid, r_start, c_start):
  queue = deque([(r_start,c_start,0)])
  height = len(grid)
  width = len(grid[0])

  while queue:
    r,c,dist = queue.popleft()

    if grid[r][c] == "C":
      return dist
    elif grid[r][c] == "X":
      continue

    grid[r][c] = "X"

    if r > 0:
      queue.append((r-1,c,dist + 1))
    if r < height - 1:
      queue.append((r+1,c,dist + 1))
    if c > 0:
      queue.append((r,c-1,dist + 1))
    if c < width - 1:
      queue.append((r,c+1,dist + 1))

  return -1
