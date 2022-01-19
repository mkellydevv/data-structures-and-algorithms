// https://leetcode.com/problems/path-sum-ii/

var pathSum = function (root, tarSum, paths = [], currPath = []) {
  if (root === null) return [];

  tarSum -= root.val;
  currPath.push(root.val);

  if (!root.left && !root.right && tarSum === 0) paths.push(currPath.slice());

  pathSum(root.left, tarSum, paths, currPath);
  pathSum(root.right, tarSum, paths, currPath);

  tarSum += root.val;
  currPath.pop();

  return paths;
};
