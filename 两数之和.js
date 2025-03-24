function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const x = nums[i];
    const mark = target - x;

    if (map.has(mark)) return [map.get(mark), i];

    map.set(x, i);
  }
}

//记住存的是值 -> 地址
