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

# Recursive
def get_node_value(head, idx):
  if head is None:
    return None
  return head.val if idx == 0 else get_node_value(head.next, idx - 1)
