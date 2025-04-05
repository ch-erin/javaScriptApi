class queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(value) {
    this.inStack.push(value);
  }

  pop() {
    if (this.outStack.length === 0) this._transfer();

    return this.outStack.pop() ?? null;
  }

  peek() {
    if (this.outStack.length === 0) this._transfer();

    return this.outStack.length > 0
      ? this.outStack[this.outStack.length - 1]
      : null;
  }

  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  _transfer() {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
}

const q = new queue();

// 测试1: 空队列行为
console.log("Test 1:", q.pop()); // 预期输出: null
console.log("Test 2:", q.peek()); // 预期输出: null
console.log("Test 3:", q.empty()); // 预期输出: true

// 测试2: 单元素操作
q.push(10);
console.log("Test 4:", q.peek()); // 预期输出: 10 (不删除)
console.log("Test 5:", q.pop()); // 预期输出: 10 (删除后队列空)
console.log("Test 6:", q.empty()); // 预期输出: true

// 测试3: 多元素顺序和转移逻辑
q.push(20);
q.push(30);
q.push(40);
console.log("Test 7:", q.pop()); // 预期输出: 20 (触发转移 inStack→outStack)
console.log("Test 8:", q.peek()); // 预期输出: 30 (当前头部)
console.log("Test 9:", q.pop()); // 预期输出: 30
q.push(50);
console.log("Test 10:", q.pop()); // 预期输出: 40 (outStack为空，再次触发转移)
console.log("Test 11:", q.pop()); // 预期输出: 50
console.log("Test 12:", q.empty()); // 预期输出: true

// 测试4: 混合操作
q.push(100);
console.log("Test 13:", q.peek()); // 预期输出: 100
q.push(200);
console.log("Test 14:", q.pop()); // 预期输出: 100 (触发转移)
console.log("Test 15:", q.peek()); // 预期输出: 200
