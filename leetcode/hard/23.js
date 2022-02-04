// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (listsA) => {
  const map = {};

  for (let head of listsA) {
    let ptr = head;
    while (ptr) {
      let val = ptr.val + 10 ** 4 + 1;
      if (val in map) {
        let [head, tail] = map[val];
        tail.next = ptr;
        map[val][1] = tail.next;
      } else {
        map[val] = [ptr, ptr];
      }
      ptr = ptr.next;
    }
  }

  const dummy = new ListNode();
  let tail = dummy;

  for (let key in map) {
    let [keyHead, keyTail] = map[key];
    tail.next = keyHead;
    tail = keyTail;
  }

  return dummy.next;
};

const mergeKLists = (listsA) => {
  let listsB = [];

  while (listsA.length > 1) {
    const mergedList = mergeTwoLists(listsA.pop(), listsA.pop());
    listsB.push(mergedList);
    if (listsA.length === 1) listsB.push(listsA.pop());
    if (listsA.length === 0) [listsA, listsB] = [listsB, listsA];
  }

  return listsA[0] || null;
};

const mergeTwoLists = (headA, headB) => {
  const dummy = new ListNode();
  let currPtr = dummy;
  while (headA && headB) {
    if (headA.val < headB.val) {
      currPtr.next = headA;
      headA = headA.next;
    } else {
      currPtr.next = headB;
      headB = headB.next;
    }
    currPtr = currPtr.next;
  }
  if (headA) currPtr.next = headA;
  if (headB) currPtr.next = headB;
  return dummy.next;
};
