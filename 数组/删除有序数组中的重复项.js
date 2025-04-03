const removeDuplicates = function (nums) {
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] != nums[i]) nums[left++] = nums[i];
  }

  return left;
};

const remerve = (nums) => {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right + 1] !== nums[right]) nums[left++] = nums[right];
  }

  return left;
};
