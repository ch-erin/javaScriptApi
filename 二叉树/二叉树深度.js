const maxDepth = function (root) {
  if (!root) return null;

  let left = maxDepth(root.left);
  let rigth = maxDepth(root.rigth);

  return Math.max(left.rigth) + 1;
};
