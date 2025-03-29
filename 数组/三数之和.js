const nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
        continue;
      }
      if (sum > 0) {
        right--;
        continue;
      }
      res.push([nums[i], nums[left], nums[right]]);

      while (left < right && nums[left] === nums[left + 1]) left++;
      while (left < right && nums[right] === nums[right - 1]) right--;
      left++;
      right--;
    }
  }

  return res;
}

function threeSum(nums) {
  const length = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
        continue;
      }
      if (sum > 0) {
        right--;
        continue;
      }
      if (sum === 0) res.push([nums[i], nums[left], nums[right]]);

      while (left < right && nums[left] === nums[left + 1]) left++;
      while (left < right && nums[right] === nums[right - 1]) right--;
      left++;
      right++;
    }
  }

  return res;
}
