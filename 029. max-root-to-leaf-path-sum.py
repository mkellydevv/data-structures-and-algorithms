# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

import math

def max_path_sum(root):
  if not root:
    return -math.inf

  if root.left or root.right:
    return root.val + max(max_path_sum(root.left), max_path_sum(root.right))

  return root.val
