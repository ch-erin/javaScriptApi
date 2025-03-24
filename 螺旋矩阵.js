const spiralOrder = function (matrix) {
  const res = [];
  if (matrix.length === 0) return res;

  let [left, right] = [0, matrix[0].length - 1];
  let [top, bottom] = [0, matrix.length - 1];

  while (left <= right && top <= bottom) {
    for (let i = left; i < right; i++) res.push(matrix[top++][i]);
    for (let i = top; i < bottom; i++) res.push(matrix[i][right--]);
    if (top <= bottom)
      for (let i = right; i >= left; i--) res.push(matrix[bottom--][i]);
    if (left <= right)
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left++]);
  }

  return res;
};
