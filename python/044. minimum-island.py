def minimum_island(grid):
  smallest = float('inf')
  height = len(grid)
  width = len(grid[0])

  for row in range(height):
    for col in range(width):
      if grid[row][col] == 'L':
        count = 0
        stack = [(row,col)]

        while stack:
          r,c = stack.pop()

          if grid[r][c] == 'W':
            continue

          count += 1
          grid[r][c] = 'W'

          if r > 0:
            stack.append((r-1,c))
          if r < height - 1:
            stack.append((r+1,c))
          if c > 0:
            stack.append((r,c-1))
          if c < width - 1:
            stack.append((r,c+1))

        smallest = min(count, smallest)

  return smallest
