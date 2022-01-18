# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_includes(root, tar):
  if not root:
    return False

  stack = [root]

  while stack:
    node = stack.pop()
    if node.val is tar:
      return True

    if node.right:
      stack.append(node.right)
    if node.left:
      stack.append(node.left)

  return False

# Recursive
def tree_includes(root, tar):
  if not root:
    return False

  if root.val is tar:
    return True

  return tree_includes(root.left, tar) or tree_includes(root.right, tar)
