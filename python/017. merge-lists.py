class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def merge_lists(head_1, head_2):
  dummy = Node(None)
  tail = dummy
  curr_1 = head_1
  curr_2 = head_2

  while curr_1 and curr_2:
    if curr_1.val < curr_2.val:
      tail.next = curr_1
      curr_1 = curr_1.next
    else:
      tail.next = curr_2
      curr_2 = curr_2.next
    tail = tail.next

  if curr_1:
    tail.next = curr_1
  if curr_2:
    tail.next = curr_2

  return dummy.next

# Recursive
def merge_lists(head_1, head_2):
  if head_1 is None and head_2 is None:
    return None
  if head_1 is None:
    return head_2
  if head_2 is None:
    return head_1
  if head_1.val < head_2.val:
    next_1 = head_1.next
    head_1.next = merge_lists(next_1, head_2)
    return head_1
  else:
    next_2 = head_2.next
    head_2.next = merge_lists(head_1, next_2)
    return head_2
