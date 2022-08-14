/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let len = tasks.length;
  if (n == 0 || len == 1) {
    return len;
  }
  let cnt = new Array(26).fill(0);
  for (let task of tasks) {
    cnt[task.charCodeAt() - "A".charCodeAt()] += 1;
  }
  let count = 0,
    max = 0;
  for (let i = 0; i < 26; i++) {
    if (cnt[i] > max) {
      max = cnt[i];
      count = 1;
    } else if (cnt[i] == max) {
      count++;
    }
  }
  /**
   * 这里注意:如果任务数量最多的空都被插完了,还有任务没安排,
   * 说明不需要额外的时间,所以最短时间就是任务数量(数组长度)
   */
  return Math.max(len, (max - 1) * (n + 1) + count);
};
