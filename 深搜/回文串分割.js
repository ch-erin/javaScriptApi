const isPalindrome = (s, left, right) => {
  while (left < right) {
    if (s.charAt(left++) !== s.charAt(right--)) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const n = s.length;
  const ans = [];
  const path = [];

  function dfs(i, start) {
    if (i === n) {
      ans.push([...path]); // 复制 path
      return;
    }

    if (i < n - 1) dfs(i + 1, start);

    if (isPalindrome(s, start, i)) {
      path.push(s.substring(start, i + 1));
      dfs(i + 1, i + 1); // 下一个子串从 i+1 开始
      path.pop(); // 恢复现场
    }
  }

  dfs(0, 0);
  return ans;
};
