def non_adjacent_sum(nums):
  if len(nums) < 2:
    return max(nums)

  sum1 = nums[0]
  sum2 = max(nums[0], nums[1])

  for i in range(2,len(nums)):
    tmp = sum2
    sum2 = max(sum1 + nums[i], sum2)
    sum1 = tmp

  return sum2
