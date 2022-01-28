// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const isBinarySearchTree = (root) => {
  const arr = buildArr(root, []);
  return checkSorted(arr);
};

const buildArr = (root, arr) => {
  if (!root) return arr;

  buildArr(root.left, arr);

  arr.push(root.val);

  buildArr(root.right, arr);

  return arr;
};

const checkSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

module.exports = {
  isBinarySearchTree,
};
