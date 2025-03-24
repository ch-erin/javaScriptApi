class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode(0);
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
      cur = cur.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
      cur = cur.next;
    }
  }

  cur.next = list1 ?? list2;

  return dummy.next;
};

let list1 = new ListNode(2, new ListNode(5));

let list2 = new ListNode(3, new ListNode(4));

const res = mergeTwoLists(list1, list2);

console.log(res);
