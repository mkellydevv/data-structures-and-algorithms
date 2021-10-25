def prereqs_possible(num_courses, prereqs):
  graph = {}

  for p in prereqs:
    if p[1] in graph:
      graph[p[1]].append(p[0])
    else:
      graph[p[1]] = [p[0]]

    if p[0] not in graph:
      graph[p[0]] = []

  visited = set()

  for node in graph:
    if has_cycle(graph, node, visited):
      return False

  return True

def has_cycle(graph, node, visited, visiting = set()):
  if node in visited:
    return False

  if node in visiting:
    return True

  visiting.add(node)

  for neighbor in graph[node]:
    if has_cycle(graph,neighbor,visited,visiting):
      return True

  visiting.remove(node)
  visited.add(node)

  return False
