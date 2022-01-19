// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const depthFirstValues = (root) => {
//   if (!root) return [];
//   return [ root.val, ...depthFirstValues(root.left), ... depthFirstValues(root.right)];
// };

const depthFirstValues = (root, vals = []) => {
  if (!root) return [];
  vals.push(root.val);
  depthFirstValues(root.left, vals);
  depthFirstValues(root.right, vals);
  return vals;
};

module.exports = {
  depthFirstValues,
};
