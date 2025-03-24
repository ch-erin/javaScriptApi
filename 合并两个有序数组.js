const merge = function (nums1, m, nums2, n) {
  const k = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = k; i > 0; i--) {
    if (p2 < 0) break;

    p1 >= 0 && nums1[p1] >= nums2[p2]
      ? (nums1[i] = nums1[p1--])
      : (nums1[i] = nums2[p2--]);
  }

  return nums1;
};
