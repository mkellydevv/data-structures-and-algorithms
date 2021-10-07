# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def sum_list(head):
  sum = 0
  ptr = head
  while ptr is not None:
    sum += ptr.val
    ptr = ptr.next
  return sum

# Recursive
def sum_list(head):
  if head is None:
    return 0
  return sum_list(head.next) + head.val
