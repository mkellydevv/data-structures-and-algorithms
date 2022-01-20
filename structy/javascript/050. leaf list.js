// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root, leaves = []) => {
  if (!root) return [];

  if (!root.left && !root.right) {
    leaves.push(root.val);
  }

  leafList(root.left, leaves);
  leafList(root.right, leaves);

  return leaves;
};

module.exports = {
  leafList,
};
