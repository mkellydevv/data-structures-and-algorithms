class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def insert_node(head, val, idx):
  dummy = Node(None)
  dummy.next = head
  prev = dummy
  curr = head

  while idx is not 0:
    prev = prev.next
    curr = curr.next
    idx -= 1

  new_node = Node(val)
  prev.next = new_node
  new_node.next = curr

  return dummy.next
