const spiralOrder = function (matrix) {
  if (!matrix) return [];

  let ans = [];
  const m = matrix[0].length - 1;
  const n = matrix.length - 1;

  const [left, right] = [0, m];
  const [top, buttom] = [0, n];

  while (left <= right && top <= buttom) {
    for (let i = left; i < right; i++) ans.push(matrix[top++][i]);
    for (let i = top; i < buttom; i++) ans.push(matrix[i][right--]);
    for (let i = right; i >= left; i--) ans.push(matrix[buttom--][i]);
    for (let i = buttom; i >= top; i--) ans.push(matrix[i][left++]);
  }

  return ans;
};
