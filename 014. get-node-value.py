# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def get_node_value(head, idx):
  ptr = head
  i = 0
  while ptr is not None:
    if i == idx:
      return ptr.val
    ptr = ptr.next
    i += 1
  return None
