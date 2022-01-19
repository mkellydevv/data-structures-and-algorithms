// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, tar) => {
  if (root === null) return 0;
  const val = root.val === tar ? 1 : 0;
  return val + treeValueCount(root.left, tar) + treeValueCount(root.right, tar);
};

module.exports = {
  treeValueCount,
};
