
def semesters_required(num_courses, prereqs):
  graph = {}
  map = {}

  for p in prereqs:
    if p[0] in graph:
      graph[p[0]].append(p[1])
    else:
      graph[p[0]] = [p[1]]

    if p[1] not in graph:
      graph[p[1]] = []

  longest = 0

  for node in graph:
    longest = max(longest,_semesters_required(graph, node, map))

  return longest + 1

def _semesters_required(graph, node, map):
  if node in map:
    return map[node]
  if len(graph[node]) == 0:
    return 0

  longest = 0

  for neighbor in graph[node]:
    longest = max(longest, _semesters_required(graph,neighbor,map))

  map[node] = longest + 1

  return map[node]
