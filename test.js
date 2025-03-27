//实现k个一组翻转链表

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);

function getLength(head) {
  let cur = head;
  let n = 0;
  while (cur) {
    n++;
    cur = cur.next;
  }
}

const reverseK = function (head, k) {
  let n = getLength(head);

  let dummy = new ListNode(0, head);
  let p = dummy;
  let prev = null;
  let cur = p.next;

  while (n >= k) {
    let start = cur;

    for (let i = 0; i < k; i++) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    p.next = prev;
    start.next = cur;
    p = start;

    n -= k;
  }

  return dummy.next;
};

const res = reverseK(head);
console.log(res);
