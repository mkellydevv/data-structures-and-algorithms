# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_value_count(root, tar):
  if not root:
    return 0

  val = 1 if root.val is tar else 0

  return val + tree_value_count(root.left, tar) + tree_value_count(root.right, tar)
