def island_count(grid):
  count = 0
  height = len(grid)
  width = len(grid[0])

  for row in range(height):
    for col in range(width):
        if grid[row][col] is 'L':
          count += 1
          stack = [(row,col)]

          while stack:
            r, c = stack.pop()

            if grid[r][c] is 'L':
              grid[r][c] = 'W'

              # Check neighbors
              if r > 0:
                stack.append((r-1,c))
              if r < height - 1:
                stack.append((r+1,c))
              if c > 0:
                stack.append((r,c-1))
              if c < width - 1:
                stack.append((r,c+1))

  return count
