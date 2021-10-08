# Unfinished
def path_finder(root, tar, path = []):
  if not root:
    return None

  path.append(root.val)

  if root.val is tar:
    return path

  if root.left:
    left_path = path_finder(root.left, tar, path)
    if not left_path:
      path.pop()
    else:
      return left_path

  if root.right:
    right_path = path_finder(root.right, tar, path)
    if not right_path:
      path.pop()
    else:
      return right_path
