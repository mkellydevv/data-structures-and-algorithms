from collections import deque

def best_bridge(grid):
  height = len(grid)
  width = len(grid[0])

  for row in range(height):
    for col in range(width):
      if grid[row][col] == 'L':
        queue = deque([(row,col,0)])
        queue2 = deque()

        while queue:
          r,c,dist = queue.popleft()

          if grid[r][c] == 'W' or grid[r][c] is None:
            continue

          grid[r][c] = None

          queue2.append((r,c,0))

          if r > 0:
            queue.append((r-1,c,dist + 1))
          if r < height - 1:
            queue.append((r+1,c,dist + 1))
          if c > 0:
            queue.append((r,c-1,dist + 1))
          if c < width - 1:
            queue.append((r,c+1,dist + 1))

        while queue2:
          r,c,dist = queue2.popleft()

          if grid[r][c] == 'L':
            return dist - 1

          grid[r][c] = None

          if r > 0 and grid[r-1][c] is not None:
            queue2.append((r-1,c,dist + 1))
          if r < height - 1 and grid[r+1][c] is not None:
            queue2.append((r+1,c,dist + 1))
          if c > 0 and grid[r][c-1] is not None:
            queue2.append((r,c-1,dist + 1))
          if c < width - 1 and grid[r][c+1] is not None:
            queue2.append((r,c+1,dist + 1))
