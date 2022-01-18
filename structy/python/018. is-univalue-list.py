# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def is_univalue_list(head):
  curr = head
  while curr:
    if curr.val != head.val:
      return False
    curr = curr.next
  return True

# Recursive
def is_univalue_list(head):
  if head is None:
    return True
  if head.next and head.val != head.next.val:
    return False
  return is_univalue_list(head.next)
