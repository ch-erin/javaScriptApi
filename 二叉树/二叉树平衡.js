function isBalanced(root) {
  function dfs(node) {
    if (!node) return 0;
    const leftH = dfs(node.left);
    if (leftH === -1) return -1;
    const rightH = dfs(node.right);
    if (rightH === -1 || Math.abs(leftH - rightH) > 1) return -1;
    return Math.max(leftH, rightH) + 1;
  }
  return dfs(root) !== -1;
}
