def undirected_path(edges, node_A, node_B):
  adj_list = {}

  # Populate adj_list
  for edge in edges:
    if edge[0] in adj_list:
      adj_list[edge[0]].append(edge[1])
    else:
      adj_list[edge[0]] = [edge[1]]

    if edge[1] in adj_list:
      adj_list[edge[1]].append(edge[0])
    else:
      adj_list[edge[1]] = [edge[0]]

  if node_A in adj_list and node_B in adj_list:
    visited = set()
    stack = [node_A]

    while stack:
      curr = stack.pop()

      if curr is node_B:
        return True

      visited.add(curr)

      for neighbor in adj_list[curr]:
        if neighbor not in visited:
          stack.append(neighbor)

  return False
