// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const binarySearchTreeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  if (root.val < target) return binarySearchTreeIncludes(root.right, target);
  return binarySearchTreeIncludes(root.left, target);
};

module.exports = {
  binarySearchTreeIncludes,
};
