from collections import deque

def largest_component(graph):
  largest = 0
  visited = set()

  for node in graph:
    if node not in visited:
      count = 0
      queue = deque([node])
      visited.add(node)

      while queue:
        curr = queue.popleft()
        count += 1
        for neighbor in graph[curr]:
          if neighbor not in visited:
            queue.append(neighbor)
          visited.add(neighbor)

      largest = max(count, largest)

  return largest
