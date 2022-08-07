/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let max = values[0],
    res = 0;
  for (let i = 1; i < values.length; i++) {
    max = Math.max(max, values[i - 1] + i - 1);
    res = Math.max(res, max + values[i] - i);
  }
  return res;
};
