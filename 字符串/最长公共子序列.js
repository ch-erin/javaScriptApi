/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const memo = {};
  let res = "";

  for (let char of text1) {
    char in memo ? memo[char]++ : (memo[char] = 1);
  }

  for (let char of text2) {
    if (char in memo) {
      res += char;
      memo[char]--;
    }
  }

  return res;
};

const text1 = "abcde";
const text2 = "ace";

const res = longestCommonSubsequence(text1, text2);
console.log(res);
