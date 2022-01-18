# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def longest_streak(head):
  count = 0
  max_streak = 0
  curr = head
  curr_val = None

  while curr:
    if curr_val != curr.val:
      max_streak = max(count, max_streak)
      count = 0
      curr_val = curr.val

    count += 1
    curr = curr.next

  return max(max_streak, count)
