class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function revsere(head) {
  let [pre, cur] = [null, head];

  while (cur) {
    const next = cur.next;

    cur.next = pre;
    pre = cur;

    cur = next;
  }
}
