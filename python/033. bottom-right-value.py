# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

from collections import deque

def bottom_right_value(root):
  queue = deque([root])

  while queue:
    node = queue.popleft()

    if node.left:
      queue.append(node.left)
    if node.right:
      queue.append(node.right)
