// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, tar, path = []) => {
  if (root === null) return null;

  path.push(root.val);

  if (root.val === tar) return path;

  // Check left
  pathFinder(root.left, tar, path);
  if (path[path.length - 1] === tar) return path;

  // Check right
  pathFinder(root.right, tar, path);
  if (path[path.length - 1] === tar) return path;

  // Clean up
  path.pop();

  return null;
};

module.exports = {
  pathFinder,
};
