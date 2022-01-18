import math

# Recursive
def tree_min_value(root):
  if not root:
    return math.inf
  return min(root.val, tree_min_value(root.left), tree_min_value(root.right))
