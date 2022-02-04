// https://leetcode.com/problems/binary-tree-pruning/

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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  // Base case
  if (!root) return null;

  // Recursive case
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  return !root.left && !root.right && root.val === 0 ? null : root;
};
