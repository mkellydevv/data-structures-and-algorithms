// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function (arr) {
  let swapIdx = 0;
  let currIdx = 0;

  while (currIdx < arr.length) {
    if (arr[currIdx] !== 0) {
      [arr[swapIdx], arr[currIdx]] = [arr[currIdx], arr[swapIdx]];
      swapIdx++;
    }
    currIdx++;
  }
};
