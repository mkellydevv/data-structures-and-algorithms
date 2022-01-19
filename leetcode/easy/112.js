// https://leetcode.com/problems/path-sum/

var hasPathSum = function (root, tarSum) {
  if (root === null) return false;

  tarSum -= root.val;

  if (root.left === null && root.right === null && tarSum === 0) return true;

  if (hasPathSum(root.left, tarSum)) return true;
  if (hasPathSum(root.right, tarSum)) return true;

  tarSum += root.val;

  return false;
};
