# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def linked_list_find(head, tar):
  ptr = head
  while ptr is not None:
    if ptr.val == tar:
      return True
    ptr = ptr.next
  return False

# Recursive
def linked_list_find(head, tar):
  if head is None:
    return False
  return head.val == tar or linked_list_find(head.next, tar)
