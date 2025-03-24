function longestCommonSubsequence(s, t) {
  const n = s.length;
  const m = t.length;
  const f = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (s[i] === t[j]) {
        f[i + 1][j + 1] = f[i][j] + 1;
      } else {
        f[i + 1][j + 1] = Math.max(f[i][j + 1], f[i + 1][j]);
      }
    }
  }

  return f[n][m];
}

// 示例使用
const s = "abcde";
const t = "ace";
console.log(longestCommonSubsequence(s, t)); // 输出：3
