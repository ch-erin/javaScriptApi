const inorderTraversal = function (root) {
  const res = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    res.push(stack.pop().val);

    root = root.right;
  }

  return res;
};
