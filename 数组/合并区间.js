const arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const marge = (arr) => {
  const ans = [];

  arr.sort((a, b) => a - b);

  let left = arr[0][0];
  let right = arr[0][1];

  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];

    if (item[0] <= right) right = item[1];
    if (item[0] > right) {
      ans.push([left, right]);
      left = item[0];
      right = item[1];
    }
  }

  ans.push([left, right]);

  console.log(ans);
};

marge(arr);
