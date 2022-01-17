// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (h1, h2) => {
  const head = h1;
  let tail = head;
  let ptr1 = h1;
  let ptr2 = h2;

  while (ptr1 && ptr2) {
    const tmp1 = ptr1.next;
    const tmp2 = ptr2.next;

    ptr1.next = ptr2;
    ptr2.next = tmp1;

    tail = ptr2;
    ptr1 = tmp1;
    ptr2 = tmp2;
  }

  if (ptr2) tail.next = ptr2;

  return head;
};

module.exports = {
  zipperLists,
};
