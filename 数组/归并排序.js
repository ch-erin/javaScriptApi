function quickSort(arr) {
  const length = arr.length;
  if (!length) return [];

  const midIndex = Math.floor(length >> 1);
  const midValue = arr[midIndex];

  let left = [];
  let right = [];

  for (let i = 0; i < length; i++) {
    if (i === midIndex) continue;
    arr[i] < midValue ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), midValue, ...quickSort(right)];
}

const a = [2, 1, 5, 4, 3];
const res = quickSort(a);
console.log(res);
