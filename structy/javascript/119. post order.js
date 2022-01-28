// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const postOrder = (root, arr = []) => {
  if (!root) return arr;
  postOrder(root.left, arr);
  postOrder(root.right, arr);
  arr.push(root.val);
  return arr;
};

module.exports = {
  postOrder,
};
