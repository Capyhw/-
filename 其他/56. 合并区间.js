/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = new Array();
  res.push(intervals[0]);
  for (let item of intervals) {
    if (item[0] > res[res.length - 1][1]) {
      res.push(item);
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], item[1]);
    }
  }
  return res;
};
