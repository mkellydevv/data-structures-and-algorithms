// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedPalindrome = (head) => {
  const arr = [];
  let ptr = head;

  while (ptr) {
    arr.push(ptr.val);
    ptr = ptr.next;
  }

  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }

  return true;
};

module.exports = {
  linkedPalindrome,
};
