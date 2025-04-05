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

const quick = (arr) => {
  if (arr.length <= 1) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quick(left), pivot, ...quick(right)];
};

const a = [1, 2, 3, 4, 5];
const res = quickSort(a);
console.log(res);
