# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

from collections import deque

def tree_sum(root):
  if not root:
    return 0

  queue = deque([root])
  sum = 0

  while queue:
    node = queue.popleft()

    sum += node.val

    if node.left:
      queue.append(node.left)

    if node.right:
      queue.append(node.right)

  return sum

# Recursive
def tree_sum(root):
  if not root:
    return 0

  return root.val + tree_sum(root.left) + tree_sum(root.right)
