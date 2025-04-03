export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

export function buildLinkedList(values) {
  if (values.length === 0) return null;

  let head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

/**
 * 打印链表，每四个节点换一行
 * @param {ListNode} head - 链表的头节点
 */
export function printList(head) {
  let current = head;
  let count = 0;

  while (current) {
    process.stdout.write(`${current.val}`);
    count++;

    if (current.next) {
      process.stdout.write(" -> ");
    }

    if (count % 4 === 0) {
      console.log();
    }

    current = current.next;
  }

  // 如果最后一行没有满四个节点，也需要换行
  if (count % 4 !== 0) {
    console.log();
  }
}

export function getPointers(head, ...indices) {
  // 检查索引是否为非负整数
  for (let index of indices) {
    if (index < 0) {
      throw new Error("All indices must be non-negative");
    }
  }

  let current = head;
  let count = 0;
  let result = [];

  while (current) {
    for (let index of indices) {
      if (count === index) {
        result.push(current); // 收集对应索引的节点
      }
    }
    current = current.next;
    count++;
  }

  // 检查是否有索引超出链表长度
  for (let index of indices) {
    if (index >= count) {
      throw new Error("Index out of bounds");
    }
  }

  return result;
}
