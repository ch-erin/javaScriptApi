const hasPathSum = function (root, targetSum) {
  // 如果当前节点为空，直接返回 false，因为没有路径
  if (root === null) return false;

  // 从当前节点的值中减去目标和，逐步逼近目标值
  targetSum -= root.val;

  // 检查当前节点是否为叶子节点（即没有左子节点和右子节点）
  // 如果是叶子节点，判断当前 targetSum 是否为 0
  // 如果为 0，说明从根节点到当前叶子节点的路径和等于目标值
  if (root.left === null && root.right === null) return targetSum === 0;

  // 如果当前节点不是叶子节点，递归检查左子树和右子树
  // 只要左子树或右子树中有一条路径满足条件，就返回 true
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

const hasPathSum2 = function (root, targetSum) {
  if (root === null) return false;

  targetSum -= root.val;

  if (root.left === root.right) return targetSum === 0;

  return (
    hasPathSum2(root.left, targetSum) || hasPathSum2(root.right, targetSum)
  );
};
