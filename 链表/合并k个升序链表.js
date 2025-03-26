//实现合并k个升序链表

const mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let cur = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 ?? list2;
  return dummy.next;
};

const mergeKLists = function (lists) {
  //合并从i到j-i个链表
  function dfs(i, j) {
    const m = j - i;
    if (!m) return null;

    if (m === 1) return lists[1];

    const left = dfs(i, (i + m) >> 1);
    const right = dfs((i + m) >> 1, j);
    return mergeTwoLists(left, right);
  }

  return dfs(0, lists.length);
};
