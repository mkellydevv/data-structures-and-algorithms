def connected_components_count(graph):
  count = 0
  visited = set()

  for node in graph:
    if node not in visited:
      count += 1
      stack = [node]

      while stack:
        curr = stack.pop()
        visited.add(curr)

        for neighbor in graph[curr]:
          if neighbor not in visited:
            stack.append(neighbor)

  return count
