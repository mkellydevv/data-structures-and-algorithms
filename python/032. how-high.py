# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def how_high(node):
  if not node:
    return -1

  left = how_high(node.left)
  right = how_high(node.right)

  return 1 + max(left, right)
