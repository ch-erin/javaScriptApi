const preorderTraversal = function (root) {
  const list = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      res.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  return res;
};



