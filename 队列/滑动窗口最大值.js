function maxSlidingWindow(nums, k) {
  const q = [];
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) q.pop();
    q.push(i);

    if (i - q[0] >= k) q.shift(i);

    if (i >= k - 1) ans.push(nums[q[0]]);
  }

  return ans;
}

let ans = [2, 4, 2, 3];
