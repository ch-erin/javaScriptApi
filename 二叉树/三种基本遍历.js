class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 递归版（极简实现）
const traverse = {
  preorder: (root, res = []) =>
    (root &&
      (res.push(root.val),
      traverse.preorder(root.left, res),
      traverse.preorder(root.right, res))) ||
    res,

  inorder: (root, res = []) =>
    (root &&
      (traverse.inorder(root.left, res),
      res.push(root.val),
      traverse.inorder(root.right, res))) ||
    res,

  postorder: (root, res = []) =>
    (root &&
      (traverse.postorder(root.left, res),
      traverse.postorder(root.right, res),
      res.push(root.val))) ||
    res,
};

// 迭代版（通用模板）
const iterate = {
  preorder: (root) => {
    const stack = [root],
      res = [];
    while (stack.length) {
      const node = stack.pop();
      if (!node) continue;
      res.push(node.val);
      stack.push(node.right, node.left); // 右先入栈
    }
    return res;
  },

  inorder: (root) => {
    const stack = [],
      res = [];
    let curr = root;
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
    }
    return res;
  },

  postorder: (root) => {
    const stack = [root],
      res = [];
    while (stack.length) {
      const node = stack.pop();
      if (!node) continue;
      res.unshift(node.val); // 逆序插入
      stack.push(node.left, node.right); // 左先入栈
    }
    return res;
  },
};

/* 使用示例
     1
    / \
   2   3
  / \
  4 5
  */
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log("递归前序:", traverse.preorder(root)); // [1,2,4,5,3]
console.log("递归中序:", traverse.inorder(root)); // [4,2,5,1,3]
console.log("递归后序:", traverse.postorder(root)); // [4,5,2,3,1]

console.log("迭代前序:", iterate.preorder(root)); // [1,2,4,5,3]
console.log("迭代中序:", iterate.inorder(root)); // [4,2,5,1,3]
console.log("迭代后序:", iterate.postorder(root)); // [4,5,2,3,1]
