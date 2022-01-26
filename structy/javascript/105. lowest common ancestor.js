// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const lowestCommonAncestor = (root, val1, val2) => {
  const paths = lca(root, val1, val2);

  let res = null;

  if (paths.length === 2) {
    for (let i = 0; i < paths[0].length && i < paths[1].length; i++) {
      if (paths[0][i] === paths[1][i]) res = paths[0][i];
      else break;
    }
  }

  return res;
};

const lca = (root, val1, val2, paths = [], currPath = []) => {
  if (root.val === val1 || root.val === val2) {
    currPath.push(root.val);
    paths.push(currPath.slice());
    currPath.pop();
  }
  if (paths.length === 2) return paths;

  currPath.push(root.val);

  if (root.left) lca(root.left, val1, val2, paths, currPath);
  if (root.right) lca(root.right, val1, val2, paths, currPath);

  currPath.pop();

  return paths;
};

module.exports = {
  lowestCommonAncestor,
};
