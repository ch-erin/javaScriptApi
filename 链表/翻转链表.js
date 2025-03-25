import { buildLinkedList } from "../utils/index.js";

const values = [1, 2, 3, 4, 5];

const head = buildLinkedList(values);

function reverseList(head) {
  let cur = head;
  let pre = null;

  while (cur) {
    const next = cur;

    cur.next = pre;
    pre = cur;

    cur = next;
  }

  return pre;
}

const res = revsere(head);
console.log(res);
