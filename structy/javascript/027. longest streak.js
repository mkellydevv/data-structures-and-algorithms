// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head, max = 1, curr = 1) => {
  if (!head) return 0;
  if (!head.next) return max;

  if (head.val === head.next.val)
    return longestStreak(head.next, Math.max(max, curr + 1), curr + 1);
  else return longestStreak(head.next, max, 1);
};

module.exports = {
  longestStreak,
};
