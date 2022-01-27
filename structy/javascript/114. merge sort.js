const mergeSort = (nums) => {
  if (nums.length < 2) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (arr1, arr2) => {
  const mergedArr = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) mergedArr.push(arr1[i++]);
    else mergedArr.push(arr2[j++]);
  }

  while (i < arr1.length) mergedArr.push(arr1[i++]);
  while (j < arr2.length) mergedArr.push(arr2[j++]);

  return mergedArr;
};

module.exports = {
  mergeSort,
};
