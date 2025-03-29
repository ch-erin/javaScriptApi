//删除链表中的重复元素

const deleteDuplicates = function (head) {
  const dummy = new ListNode(0, head);

  let cur = dummy;

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const val = cur.next.val;
      while (cur.next && cur.next.val === val) cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};

//字符串转数字

const stringArray = ["1", "2", "3", "4", "5"];
const intArray = stringArray.map(Number);

console.log(intArray);
