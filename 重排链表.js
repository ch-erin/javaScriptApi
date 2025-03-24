class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createList(arr) {
  let dummy = new ListNode();
  let cur = dummy;

  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }

  return dummy.next;
}

const reorderList = function (head) {
  if (!head || !head.next) return;

  function findMidIndex(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow; // 返回中点节点
  }

  // 翻转链表
  function reserve(head) {
    let pre = null;
    let cur = head;

    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }

    return pre;
  }

  function marge(head1, head2) {
    let cur1 = head1;
    let cur2 = head2;

    while (cur2) {
      const nxt1 = cur1.next;
      const nxt2 = cur2.next;

      cur1.next = cur2;
      cur2.next = nxt1;

      cur1 = nxt1;
      cur2 = nxt2;
    }

    return head1;
  }

  const mid = findMidIndex(head);

  const head2 = reserve(mid.next);
  mid.next = null;

  marge(head, head2);

  let cur = head;
  while (cur) {
    console.log(cur.val);
    cur = cur.next;
  }
};

const arr = [1, 2, 3, 4, 5, 6];

function mark(arr) {
  const List = createList(arr);
  reorderList(List);
}

mark(arr);
