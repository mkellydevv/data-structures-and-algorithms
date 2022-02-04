// https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // Zipper in copies of each node
  let ptr = head;
  while (ptr) {
    let next = ptr.next;
    ptr.next = new Node(ptr.val, next, null);
    ptr = next;
  }

  // Copy random pointers
  ptr = head;
  while (ptr) {
    ptr.next.random = ptr.random ? ptr.random.next : null;
    ptr = ptr.next.next;
  }

  // Unzip the linked list
  const dummyHead = new Node();
  let dummyPtr = dummyHead;
  ptr = head;
  while (ptr) {
    let copy = ptr.next;
    dummyPtr.next = copy;
    dummyPtr = dummyPtr.next;
    ptr.next = ptr.next.next;
    ptr = ptr.next;
  }

  return dummyHead.next;
};
