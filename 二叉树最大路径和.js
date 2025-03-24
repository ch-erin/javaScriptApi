class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxPathSum(root) {
  let ans = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    const lVal = dfs(node.left);
    const rVal = dfs(node.right);

    ans = Math.max(ans, lVal + rVal + node.val);

    return Math.max(Math.max(lVal, rVal) + node.val, 0);
  }

  dfs(root);

  return ans;
}

// 示例使用
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(maxPathSum(root)); // 输出：6
