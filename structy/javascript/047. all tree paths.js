// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (root, paths = [], currPath = []) => {
  if (root === null) return [];

  currPath.push(root.val);

  if (!root.left && !root.right) {
    paths.push(currPath.slice());
  }

  allTreePaths(root.left, paths, currPath);
  allTreePaths(root.right, paths, currPath);

  currPath.pop(root.val);

  return paths;
};

module.exports = {
  allTreePaths,
};
