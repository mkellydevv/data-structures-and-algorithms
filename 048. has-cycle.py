# visited is for tracking all nodes to cut down on rechecking paths for cycles
# visiting is for tracking visited nodes of a particular component (sub-graph)

def has_cycle(graph):
  visited = set()
  for node in graph:
    if _has_cycle(graph, node, visited):
      return True
  return False

def _has_cycle(graph, node, visited, visiting = set()):
  if node in visited:
    return False

  if node in visiting:
    return True

  visiting.add(node)

  for neighbor in graph[node]:
    if _has_cycle(graph, neighbor, visited, visiting):
      return True

  visiting.remove(node)
  visited.add(node)
  return False
