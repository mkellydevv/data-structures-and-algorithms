// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, tar) => {
  if (root === null) return false;
  return (
    root.val === tar ||
    treeIncludes(root.left, tar) ||
    treeIncludes(root.right, tar)
  );
};

module.exports = {
  treeIncludes,
};
