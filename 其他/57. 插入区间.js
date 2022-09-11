/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  //把要插入的push进来,然后用合并区间的做法
  intervals.push(newInterval);
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

// n  1
var insert = function (intervals, newInterval) {
  let l = newInterval[0],
    r = newInterval[1],
    n = intervals.length;
  let index = 0,
    res = new Array();
  //当前区间在待插入区间的左边(不重叠)
  while (index < n && intervals[index][1] < l) {
    res.push(intervals[index]);
    index++;
  }
  //有重叠 intervals[index][1]>=l
  while (index < n && intervals[index][0] <= r) {
    l = Math.min(intervals[index][0], l);
    r = Math.max(intervals[index][1], r);
    index++;
  }
  res.push([l, r]);
  //当前区间在待插入区间的右边(不重叠)
  while (index < n) {
    res.push(intervals[index]);
    index++;
  }
  return res;
};
