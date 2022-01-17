class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (h1, h2) => {
  const head = new Node(null);
  let tail = head;
  let ptr1 = h1;
  let ptr2 = h2;

  while (ptr1 && ptr2) {
    if (ptr1.val < ptr2.val) {
      tail.next = ptr1;
      ptr1 = ptr1.next;
    } else {
      tail.next = ptr2;
      ptr2 = ptr2.next;
    }
    tail = tail.next;
  }

  if (ptr1) tail.next = ptr1;
  if (ptr2) tail.next = ptr2;

  return head.next;
};

module.exports = {
  mergeLists,
};
