class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def remove_node(head, tar):
  dummy = Node(None)
  dummy.next = head
  prev = dummy
  curr = head

  while curr:
    if curr.val is tar:
      prev.next = curr.next
      break
    prev = prev.next
    curr = curr.next

  return dummy.next

# Recursive
def remove_node(head, tar):
  if head is None:
    return None

  if head.val is tar:
    return head.next

  head.next = remove_node(head.next, tar)

  return head
