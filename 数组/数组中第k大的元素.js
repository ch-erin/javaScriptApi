const topK = (nums, k) => {
  const n = nums.length;
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
  const heapify = (i, n) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && nums[left] > nums[largest]) largest = left;
    if (right < n && nums[right] > nums[largest]) largest = right;
    if (largest !== i) {
      swap(i, largest);
      heapify(largest, n);
    }
  };

  //我们假设n为左叶子节点，则n/2-1为最大的非叶子节点
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(i, n);
  for (let i = n - 1; i >= n - k; i--) {
    swap(0, i);
    heapify(0, i);
  }

  return nums[n - k];
};

const arr = [2, 0, 1, 3, 7, 4, 8];

const res = topK(arr, 4);
console.log(res);
