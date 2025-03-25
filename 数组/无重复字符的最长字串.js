const lengthOfLongestSubstring = function (s) {
  const cnt = {};
  let res = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] in cnt ? cnt[s[i]]++ : (cnt[s[i]] = 1);
    while (cnt[s[i]] >= 2) cnt[s[left++]]--;
    res > i + 1 - left ? res : (res = i + 1 - left);
  }

  return res;
};
