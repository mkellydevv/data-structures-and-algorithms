// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function (head) {
  if (head === null || head.next === null) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (fast === slow) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
