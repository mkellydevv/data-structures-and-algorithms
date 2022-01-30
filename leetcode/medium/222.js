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
var countNodes = function (root) {
  if (!root) return 0;

  const height = getHeightOfTree(root);
  const rowLength = 2 ** height;

  const loIdx = rowLength - 1;
  const hiIdx = loIdx * 2;
  const target = 0;

  let lo = loIdx;
  let hi = hiIdx;

  while (lo <= hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;

    if (getNodeByIdx(root, mid) > target) hi = mid - 1;
    else {
      if (mid === hiIdx || getNodeByIdx(root, mid + 1) !== target)
        return mid + 1;
      else lo = mid + 1;
    }
  }

  return null;
};

const getNodeByIdx = (root, idx) => {
  const path = [];

  while (idx > 0) {
    path.push(idx);
    idx = Math.ceil(idx / 2) - 1;
  }

  return _getNodeByIdx(root, path);
};

const _getNodeByIdx = (root, path) => {
  if (!root) return 1;
  if (path.length === 0) return 0;

  const nextIdx = path.pop();

  if (nextIdx % 2 === 0) return _getNodeByIdx(root.right, path);
  else return _getNodeByIdx(root.left, path);
};

const getHeightOfTree = (root) => {
  let height = 0;
  while (root.left) {
    height++;
    root = root.left;
  }
  return height;
};
