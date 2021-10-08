# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def depth_first_values(root):
  if not root:
    return []

  lst = []
  stack = [root]

  while stack:
    node = stack.pop()
    lst.append(node.val)

    if node.right:
      stack.append(node.right)
    if node.left:
      stack.append(node.left)

  return lst

# Recursive
def depth_first_values(root, lst = []):
  if not root:
    return lst

  lst.append(root.val)

  if root.left:
    depth_first_values(root.left)
  if root.right:
    depth_first_values(root.right)

  return lst
