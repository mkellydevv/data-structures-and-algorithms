// https://leetcode.com/problems/reverse-linked-list-ii/

var reverseBetween = function (head, left, right) {
  if (left === right) return head;

  const dummy = new ListNode(null, head);
  let ptr = dummy;
  let leftTail = dummy;
  let idx = 0;

  // Find inner linked list start
  while (idx !== left) {
    leftTail = ptr;
    ptr = ptr.next;
    idx++;
  }
  const innerHead = ptr;

  // Reverse inner Linked List
  let prev = null;
  let curr = innerHead;
  let next;
  for (let i = left; i < right + 1; i++) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Stitch together linked lists
  leftTail.next = prev;
  innerHead.next = curr;

  return dummy.next;
};
