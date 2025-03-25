const generateParenthesis = function (n) {
  const m = n * 2;
  const ans = [];
  const path = [];

  function dfs(i, open) {
    if (i === m) {
      ans.push(path.join(""));
      return;
    }
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
