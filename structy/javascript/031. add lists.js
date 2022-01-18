class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (h1, h2, carry = 0) => {
  if (!h1 && !h2 && !carry) return null;

  if (!h1) h1 = new Node(0);
  if (!h2) h2 = new Node(0);

  const sum = h1.val + h2.val + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  h1.val = sum % 10;
  h1.next = addLists(h1.next, h2.next, nextCarry);

  return h1;
};

module.exports = {
  addLists,
};
