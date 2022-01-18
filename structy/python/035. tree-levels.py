# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

from collections import deque

def tree_levels(root):
  if not root:
    return []

  queue = deque([root, None])
  levels = []
  level = []

  while queue:
    node = queue.popleft()

    if node:
      level.append(node.val)
      if node.left:
        queue.append(node.left)
      if node.right:
        queue.append(node.right)
    else:
      levels.append(level)
      level = []
      if len(queue):
        queue.append(None)

  return levels
