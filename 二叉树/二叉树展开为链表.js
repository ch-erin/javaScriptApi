const flatten = function (root) {
  let head = null;
  
  function dfs(node) {
    if (!node) return;

    dfs(node.right);
    dfs(node.left);

    node.left = null;
    node.right = head;
    head = node;
  }

  dfs(root);
};
