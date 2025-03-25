const deleteDuplicates = function (head) {
  const dummy = new ListNode(0, head);
  let cur = dummy;

  while (cur.next && cur.next.next) {
    let val = cur.next.val;

    // 如果后两个节点值相同，进入删除逻辑
    if (cur.next.next.val === val) {
      // 删除所有值等于 val 的节点
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};
