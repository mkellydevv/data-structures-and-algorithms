def longest_path(graph):
  map = {}

  for node in graph:
    _longest_path(graph, node, map)

  return max(map.values())

def _longest_path(graph, node, map):
  if node in map:
    return map[node]
  if len(graph[node]) == 0:
    map[node] = 0
    return 0

  longest = 0

  for neighbor in graph[node]:
    longest = max(longest, _longest_path(graph,neighbor,map))

  map[node] = 1 + longest

  return map[node]
