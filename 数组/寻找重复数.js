const findDuplicate = function (nums) {
  const n = nums.length; // 数组长度
  let l = 1; // 查找范围的左边界
  let r = n - 1; // 查找范围的右边界
  let ans = -1; // 用于存储重复数字

  while (l <= r) {
    // 当查找范围有效时
    let mid = (l + r) >> 1; // 计算中点
    let cnt = 0; // 用于统计小于等于 mid 的数字数量

    // 遍历数组，统计小于等于 mid 的数字数量
    for (let i = 0; i < n; i++) {
      if (nums[i] <= mid) {
        cnt++;
      }
    }

    // 判断重复数字的范围
    if (cnt <= mid) {
      // 如果小于等于 mid 的数字数量没有超出预期，说明重复数字在右半部分
      l = mid + 1;
    } else {
      // 如果小于等于 mid 的数字数量超出了预期，说明重复数字在左半部分
      r = mid - 1;
      ans = mid; // 更新答案
    }
  }

  return ans; // 返回重复数字
};
