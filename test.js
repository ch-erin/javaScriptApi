var maxSlidingWindow = function (nums, k) {
  const ans = []; // 存储最终结果
  const q = []; // 单调递减队列（存储数组元素的索引）

  for (let i = 0; i < nums.length; i++) {
    // === 步骤1：维护队列的单调性（入队） ===
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop(); // 队尾元素 <= 当前元素 → 弹出队尾
    }
    q.push(i); // 将当前元素索引加入队尾

    // === 步骤2：移除窗口外的元素（出队） ===
    if (i - q[0] >= k) {
      // 队首元素已超出窗口左边界
      q.shift(); // 移除队首
    }

    // === 步骤3：记录窗口最大值 ===
    if (i >= k - 1) {
      // 当窗口形成时（i是窗口右边界）
      ans.push(nums[q[0]]); // 队首元素是当前窗口最大值
    }
  }
  return ans;
};

const maxSlidingWindow2 = function (nums, k) {
  const ans = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    //入
    while (q.length && nums[q[q.length - 1]] <= nums[i]) q.pop();
    q.push();
    //出，当
    if (i - q[0] >= k) q.shift();
    //记录结果
    if (i >= k - 1) ans.push(nums[q[0]]);
  }

  return ans;
};
