from collections import deque

def best_bridge(grid):
  height = len(grid)
  width = len(grid[0])
  visited = set()

  for row in range(height):
    for col in range(width):
      if grid[row][col] == 'L':
        queue = deque([(row,col,0)])
        queue2 = deque()

        # Find first island and add lands to queue2
        while queue:
          r,c,dist = queue.popleft()

          if grid[r][c] == 'W' or (r,c) in visited:
            continue

          grid[r][c] = 'W'
          visited.add((r,c))
          queue2.append((r,c,0))

          if r > 0:
            queue.append((r-1,c,dist + 1))
          if r < height - 1:
            queue.append((r+1,c,dist + 1))
          if c > 0:
            queue.append((r,c-1,dist + 1))
          if c < width - 1:
            queue.append((r,c+1,dist + 1))

        # BFS outwards from first island
        while queue2:
          r,c,dist = queue2.popleft()

          if grid[r][c] == 'L':
            return dist - 1

          if r > 0 and (r-1,c) not in visited:
            visited.add((r-1,c))
            queue2.append((r-1,c,dist + 1))
          if r < height - 1 and (r+1,c) not in visited:
            visited.add((r+1,c))
            queue2.append((r+1,c,dist + 1))
          if c > 0 and (r,c-1) not in visited:
            visited.add((r,c-1))
            queue2.append((r,c-1,dist + 1))
          if c < width - 1 and (r,c+1) not in visited:
            visited.add((r,c+1))
            queue2.append((r,c+1,dist + 1))
