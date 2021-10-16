def sum_possible(amount, nums, memo = set()):
  if amount == 0:
    return True
  if amount < 0:
    return False

  for num in nums:
    next = amount - num
    if next not in memo:
      memo.add(amount - num)
      if sum_possible(next, nums, memo):
        return True

  return False
