def non_adjacent_sum(nums):
  if len(nums) < 2:
    return max(nums)

  sums = [nums[0], max(nums[0], nums[1])]

  for i in range(2,len(nums)):
    sums.append(max(sums[i-2] + nums[i], sums[i-1]))

  return sums[len(nums) - 1]
