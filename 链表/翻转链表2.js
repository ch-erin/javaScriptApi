/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  const dummy = new ListNode(0, head);
  let pre = head;

  for (let i = 0; i < left - 1; i++) pre = pre.next;

  let cur = pre.next;
  let prev = null;
  for (let i = 0; i < right - left + 1; i++) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }

  pre.next.next = cur;
  pre.next = prev;

  return dummy.next;
};
