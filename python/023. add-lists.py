class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def add_lists(head_1, head_2):
  dummy = Node(None)
  curr = dummy

  curr_1 = head_1
  curr_2 = head_2
  carry = 0

  while curr_1 or curr_2:
    val_1 = 0 if not curr_1 else curr_1.val
    val_2 = 0 if not curr_2 else curr_2.val
    sum = val_1 + val_2 + carry
    carry = 1 if sum > 9 else 0

    curr.next = Node(sum % 10)
    curr = curr.next

    curr_1 = curr_1.next if curr_1 else None
    curr_2 = curr_2.next if curr_2 else None

  if carry:
    curr.next = Node(carry)

  return dummy.next
