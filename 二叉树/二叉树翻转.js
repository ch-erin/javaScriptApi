const invertTree = function (root) {
  if (root === null) return null;

  root.left = invertTree(root.right);
  root.right = invertTree(root.left);

  return root;
};
