# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def leaf_list(root, leaves = []):
  if not root:
    return []

  if not root.left and not root.right:
    leaves.append(root.val)

  if root.left:
    leaf_list(root.left, leaves)

  if root.right:
    leaf_list(root.right, leaves)

  return leaves
