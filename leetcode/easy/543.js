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
var diameterOfBinaryTree = function (root) {
  const diameter = [0];

  longestPath(root, diameter);

  return diameter[0];
};

const longestPath = (root, diameter) => {
  if (!root) return 0;

  const left = longestPath(root.left, diameter);
  const right = longestPath(root.right, diameter);

  if (left + right > diameter[0]) diameter[0] = left + right;

  return 1 + Math.max(left, right);
};
