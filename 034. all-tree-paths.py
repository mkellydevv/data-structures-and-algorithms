# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def all_tree_paths(root, curr_path = [], paths = []):
  if not root:
    return []

  curr_path.append(root.val)

  if not root.left and not root.right:
    paths.append(curr_path.copy())

  if root.left:
    all_tree_paths(root.left, curr_path, paths)
    curr_path.pop()

  if root.right:
    all_tree_paths(root.right, curr_path, paths)
    curr_path.pop()

  return paths
