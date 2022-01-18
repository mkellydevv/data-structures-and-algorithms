# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def reverse_list(head):
  curr = head
  prev = None

  while curr is not None:
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next

  return prev

# Recursive
def reverse_list(head, prev = None):
  if head is None:
    return prev

  next = head.next
  head.next = prev
  return reverse_list(next, head)
