// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preOrder, inOrder) => {
  return _buildTree(inOrder, preOrder, 0, inOrder.length - 1, 0);
};

const _buildTree = (inOrder, preOrder, inLo, inHi, preStart) => {
  if (inLo === inHi) return new TreeNode(inOrder[inLo]);
  if (inLo > inHi) return null;

  const midVal = preOrder[preStart];
  const midIdx = inOrder.indexOf(midVal);
  const node = new TreeNode(midVal);

  const leftInLo = inLo;
  const leftInHi = midIdx - 1;
  const leftPreStart = preStart + 1;

  const rightInLo = midIdx + 1;
  const rightInHi = inHi;
  const rightPreStart = preStart + (midIdx - inLo) + 1;

  node.left = _buildTree(inOrder, preOrder, leftInLo, leftInHi, leftPreStart);
  node.right = _buildTree(
    inOrder,
    preOrder,
    rightInLo,
    rightInHi,
    rightPreStart
  );

  return node;
};
