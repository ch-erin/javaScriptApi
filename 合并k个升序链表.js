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
  function dfs(i, j) {
    const m = j - i;
    if (m === 0) return null;
    if (m === 1) return lists[i];

    const left = dfs(i, i + (m >> 1)); // 合并左半部分
    const right = dfs(i + (m >> 1), j); // 合并右半部分

    return mergeTwoLists(left, right);
  }

  return dfs(0, lists.length);
};
