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
