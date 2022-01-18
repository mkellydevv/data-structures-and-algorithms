# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def zipper_lists(head_1, head_2):
  curr_1 = head_1
  curr_2 = head_2
  tail = None

  while curr_1 and curr_2:
    next_1 = curr_1.next
    next_2 = curr_2.next

    curr_1.next = curr_2
    curr_2.next = next_1

    tail = curr_2
    curr_1 = next_1
    curr_2 = next_2

  if curr_2:
    tail.next = curr_2

  return head_1

# Recursive
def zipper_lists(head_1, head_2, tail = None):
  if head_1 is None or head_2 is None:
    if head_2:
      tail.next = head_2
    return

  next_1 = head_1.next
  next_2 = head_2.next

  head_1.next = head_2
  head_2.next = next_1

  zipper_lists(next_1, next_2, head_2)

  return head_1
