const topK = (nums, k) => {
  const n = nums.length;

  const heapify = (i, n) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && nums[left] > nums[largest]) largest = left;
    if (right < n && nums[right] > nums[largest]) largest = right;

    if (largest !== i) {
      [nums[i], nums[largest]] = [nums[largest], nums[i]];
      heapify(largest, n);
    }
  };

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(i, n);
  for (let i = n - 1; i >= n - k; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    heapify(0, i);
  }

  return nums[n - k];
};

const arr = [2, 0, 1, 3, 7, 4, 8];

const res = topK(arr, 4);
console.log(res);

var findKthLargest = function (nums, k) {
  const targetIndex = nums.length - k;

  const quickSelect = (arr, left, right) => {
    if (left >= right) return arr[left];

    const pivot = arr[(left + right) >> 1];
    let i = left - 1;
    let j = right + 1;

    while (i < j) {
      while (arr[++i] < pivot);
      while (arr[--j] > pivot);
      if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return targetIndex <= j
      ? quickSelect(arr, left, j)
      : quickSelect(arr, j + 1, right);
  };

  return quickSelect(nums, 0, nums.length - 1);
};
