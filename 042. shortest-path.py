from collections import deque

def shortest_path(edges, src, dest):
  adj_list = {}

  for edge in edges:
    if edge[0] in adj_list:
      adj_list[edge[0]].append(edge[1])
    else:
      adj_list[edge[0]] = [edge[1]]

    if edge[1] in adj_list:
      adj_list[edge[1]].append(edge[0])
    else:
      adj_list[edge[1]] = [edge[0]]

  queue = deque([(src,0)])
  visited = set()

  while queue:
    node, dist = queue.popleft()
    visited.add(node)

    if node == dest:
      return dist

    for neighbor in adj_list[node]:
      if neighbor not in visited:
        queue.append((neighbor, dist + 1))

  return -1

# DFS is not good for shortest path problems
# def shortest_path(edges, src, dst):
#   adj_list = {}

#   for edge in edges:
#     if edge[0] in adj_list:
#       adj_list[edge[0]].append(edge[1])
#     else:
#       adj_list[edge[0]] = [edge[1]]

#     if edge[1] in adj_list:
#       adj_list[edge[1]].append(edge[0])
#     else:
#       adj_list[edge[1]] = [edge[0]]

#   path_length = explore(adj_list, src, dst)

#   if path_length == float('inf'):
#     return -1
#   return path_length


# def explore(adj_list, src, dst, visited = set()):
#   if src == dst:
#     return 0

#   visited.add(src)
#   smallest = float('inf')

#   for neighbor in adj_list[src]:
#     if neighbor not in visited:
#       smallest = min(smallest, 1 + explore(adj_list, neighbor, dst, visited))

#   visited.remove(src)
#   return smallest
