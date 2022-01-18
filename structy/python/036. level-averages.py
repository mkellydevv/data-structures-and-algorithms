from collections import deque

def level_averages(root):
  if not root:
    return []

  queue = deque([root, None])
  avgs = []
  sum = 0
  count = 0

  while queue:
    node = queue.popleft()

    if node:
      sum += node.val
      count += 1
      if node.left:
        queue.append(node.left)
      if node.right:
        queue.append(node.right)
    else:
      avgs.append(sum / count)
      sum = 0
      count = 0
      if len(queue):
        queue.append(None)

  return avgs
