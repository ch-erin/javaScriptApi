var findMedianSortedArrays = function (a, b) {
  if (a.length > b.length) [a, b] = [b, a];

  const m = a.length,
    n = b.length;
  a = [-Infinity, ...a, Infinity];
  b = [-Infinity, ...b, Infinity];

  let i = 0,
    j = Math.floor((m + n + 1) / 2);
  while (true) {
    if (a[i] <= b[j + 1] && a[i + 1] > b[j]) {
      const max1 = Math.max(a[i], b[j]);
      const min2 = Math.min(a[i + 1], b[j + 1]);
      return (m + n) % 2 ? max1 : (max1 + min2) >> 1;
    }
    i++;
    j--;
  }
};
