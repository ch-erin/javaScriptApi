// ListNode.js
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseKGroup = function (head, k) {
  let n = 0;
  let node = head;
  while (node) {
    n += 1;
    node = node.next;
  }

  let dummy = new ListNode(0, head);
  let p0 = dummy;
  let prev = null;
  let cur = p0.next;

  while (n >= k) {
    let start = cur;
    for (let i = 0; i < k; i++) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    p0.next = prev;
    //原反转部分的尾节点指向cur,即下一组的头节点
    start.next = cur;
    //更新p0伪反转部分的尾节点
    p0 = start;

    n -= k;
  }

  return dummy.next;
};

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);

const reserveKGroup = (head, k) => {
  let n = 0;
  let node = head;
  while (node) {
    n += 1;
    node = node.next;
  }

  let dummy = new ListNode(0, head);
  let p0 = dummy;
  let prev = null;
  let cur = p0.next;

  while (n >= k) {
    let start = cur;
    for (let i = 0; i < k; i++) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    //顺接头指针
    p0.next = prev;
    start.next = cur;
    //伪翻转节点的尾指针
    p0 = start;

    n -= k;
  }

  return dummy.next;
};

const res = reverseK(head);
console.log(res);
