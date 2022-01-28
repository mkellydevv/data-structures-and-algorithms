class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTreeInPre = (inOrder, preOrder) => {
  return buildTreeInPreHelper(inOrder, preOrder, 0, inOrder.length - 1, 0);
};

const buildTreeInPreHelper = (inOrder, preOrder, inLo, inHi, preStart) => {
  if (inLo === inHi) return new Node(inOrder[inLo]);
  if (inLo > inHi) return null;

  const midVal = preOrder[preStart];
  const midIdx = inOrder.indexOf(midVal);
  const node = new Node(midVal);

  const leftInLo = inLo;
  const leftInHi = midIdx - 1;
  const leftPreStart = preStart + 1;

  const rightInLo = midIdx + 1;
  const rightInHi = inHi;
  const rightPreStart = preStart + (midIdx - inLo) + 1;

  node.left = buildTreeInPreHelper(
    inOrder,
    preOrder,
    leftInLo,
    leftInHi,
    leftPreStart
  );
  node.right = buildTreeInPreHelper(
    inOrder,
    preOrder,
    rightInLo,
    rightInHi,
    rightPreStart
  );

  return node;
};

module.exports = {
  buildTreeInPre,
};
