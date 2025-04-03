const minPathSum = (grid) => {
  const [m, n] = [grid.length, grid[0]?.length];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      grid[i][j] +=
        Math.min(
          i ? grid[i - 1][j] : j ? Infinity : 0,
          j ? grid[i][j - 1] : i ? Infinity : 0
        ) || 0;
  return grid[m - 1]?.[n - 1] || 0;
};

