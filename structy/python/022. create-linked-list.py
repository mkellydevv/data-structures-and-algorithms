class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def create_linked_list(values):
  dummy = Node(None)
  curr = dummy
  for val in values:
    curr.next = Node(val)
    curr = curr.next
  return dummy.next
