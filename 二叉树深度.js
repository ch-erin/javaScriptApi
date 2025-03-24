const maxDepth = function (root) {
  if (root.val === null) return 0;

  const leftRes = maxDepth(root.left);
  const rightRes = maxDepth(root.right);

  return Math.max(leftRes, rightRes) + 1;
};
