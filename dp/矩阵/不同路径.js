/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (i <= 0 || i >= n) dp[i + 1][j + 1] = dp[i][j - 1];
      if (j <= 0 || j >= m) dp[i + 1][j + 1] = dp[i - 1][j];
      dp[i + 1][j + 1] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  return dp[n][m];
};
