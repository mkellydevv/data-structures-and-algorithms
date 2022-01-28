class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPost = (inOrder, postOrder) => {
  if (inOrder.length === 0) return null;
  const midVal = postOrder.pop();
  const midIdx = inOrder.indexOf(midVal);
  const node = new Node(midVal);

  node.left = buildTreeInPost(
    inOrder.slice(0, midIdx),
    postOrder.slice(0, midIdx)
  );
  node.right = buildTreeInPost(
    inOrder.slice(midIdx + 1),
    postOrder.slice(midIdx)
  );

  return node;
};

module.exports = {
  buildTreeInPost,
};
