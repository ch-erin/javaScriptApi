function quickSort(arr) {
  const length = arr.length;
  if (!length) return [];

  const midIndex = Math.floor(length >> 1);
  const midValue = arr.slice(midIndex)[0];

  let left = [];
  let right = [];

  for (let i = 0; i < length; i++) {
    arr[i] <= midValue ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), midValue, ...quickSort(right)];
}

const a = [1, 2, 3, 4, 5];
const res = quickSort(a);
console.log(res);
