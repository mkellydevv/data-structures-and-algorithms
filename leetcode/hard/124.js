// https://leetcode.com/problems/binary-tree-maximum-path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  const max = [-Infinity];
  _maxPathSum(root, max);
  return max[0];
};

const _maxPathSum = (root, max) => {
  if (!root) return 0;

  const leftPath = _maxPathSum(root.left, max);
  const rightPath = _maxPathSum(root.right, max);
  const joinedPath =
    root.val + Math.max(leftPath + rightPath, leftPath, rightPath, 0);

  if (joinedPath > max[0]) max[0] = joinedPath;

  return root.val + Math.max(leftPath, rightPath, 0);
};
