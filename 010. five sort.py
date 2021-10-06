def five_sort(nums):
  i = 0
  j = len(nums) - 1

  while i < j:
    while nums[i] != 5:
      i += 1
    while nums[j] == 5:
      j -= 1

    nums[i], nums[j] = nums[j], nums[i]
    i += 1
    j -= 1

  return nums
