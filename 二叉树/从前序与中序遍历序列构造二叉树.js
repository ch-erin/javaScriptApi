/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  const n = preorder.length;
  if (n === 0) return null;

  //取根节点
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal); // 创建根节点

  // 在中序遍历中找到根节点的位置
  const midIdx = inorder.indexOf(rootVal);

  root.left = buildTree(
    preorder.slice(1, midIdx + 1),
    inorder.slice(0, midIdx)
  );

  root.right = buildTree(preorder.slice(midIdx + 1), inorder.slice(midIdx + 1));

  return root;
}
