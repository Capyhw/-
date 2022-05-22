/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let sum,
    num = 0,
    temp = [],
    res = [];
  for (let l = 1, r = 2; l < r; ) {
    sum = ((l + r) * (r - l + 1)) / 2;
    if (sum == target) {
      temp = [];
      for (let i = l; i < r + 1; i++) {
        temp.push(i);
      }
      console.log(temp);
      res[num++] = temp;
      l++;
    } else if (sum < target) {
      r++;
    } else {
      l++;
    }
  }
  return res;
};

console.log(findContinuousSequence(15));
