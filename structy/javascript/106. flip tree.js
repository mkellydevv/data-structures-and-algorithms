// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const flipTree = (root) => {
  if (!root) return null;

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  flipTree(root.left);
  flipTree(root.right);

  return root;
};

module.exports = {
  flipTree,
};
