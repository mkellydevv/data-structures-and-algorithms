# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def linked_list_values(head):
  lst = []
  ptr = head
  while ptr is not None:
    lst.append(ptr.val)
    ptr = ptr.next
  return lst
