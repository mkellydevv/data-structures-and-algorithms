from collections import deque

# DFS
def has_path(graph, src, dst, visited = set()):
  if src is dst:
    return True

  visited.add(src)

  for neighbor in graph[src]:
    if neighbor not in visited:
      if has_path(graph, neighbor, dst):
        return True

  return False

# BFS
def has_path(graph, src, dst):
  queue = deque([src])
  visited = set()

  while queue:
    curr = queue.popleft()
    visited.add(curr)

    if curr is dst:
      return True

    for neighbor in graph[curr]:
      if neighbor not in visited:
        queue.append(neighbor)

  return False
