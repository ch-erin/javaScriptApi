function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) [arr[++i], arr[j]] = [arr[j], arr[i]];
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  quickSort(arr, left, i);
  quickSort(arr, i + 2, right);
  return arr;
}

const a = [1, 2, 3, 4, 5];
const res = quickSort(a);
console.log(res);
