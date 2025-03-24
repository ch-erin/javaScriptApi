/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const ret = [];
  if (!root) return ret;

  const queue = [root];

  while (queue.length) {
    const currentSize = queue.length;
    const currentResult = [];

    for (let i = 0; i < currentSize; i++) {
      const node = queue.shift();
      currentResult.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    ret.push(currentResult);
  }

  return ret;
};
