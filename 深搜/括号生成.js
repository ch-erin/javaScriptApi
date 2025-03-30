/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  let m = 2 * n;
  const ans = [];
  const path = [];

  function dfs(i, open) {
    if (i === m) return ans.push(path.join(""));
    if (open < n) {
      path[i] = "(";
      dfs(i + 1, open + 1);
    }
    if (i < 2 * open) {
      path[i] = ")";
      dfs(i + 1, open);
    }
  }

  dfs(0, 0);
  return ans;
};
