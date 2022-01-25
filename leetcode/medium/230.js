// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

var kthSmallest = function (root, k, arr = [0]) {
  if (root.left) {
    let val = kthSmallest(root.left, k, arr);
    if (arr[0] === k) return val;
  }

  arr[0] += 1;
  if (arr[0] === k) return root.val;

  if (root.right) {
    let val = kthSmallest(root.right, k, arr);
    if (arr[0] === k) return val;
  }

  return arr[0];
};

var kthSmallest = function (root, k, arr = [0]) {
  const stack = [];
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    const currNode = stack.pop();
    k--;
    if (k === 0) return currNode.val;

    root = root.right;
  }
};
