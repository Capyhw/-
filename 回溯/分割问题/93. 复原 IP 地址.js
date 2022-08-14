/**
 * @param {string} s
 * @resurn {string[]}
 */
/**
 * 递归函数参数: 分割线开始的位置start .的数量 pointNum
 * 递归终止条件: 如果path.length === 4 && start === s.length
 *             说明已经找到了一组分割方案了
 * 单层搜索的逻辑: 判断[start,i]是否有效
 *               不能重复切割,所以,backtracking(i + 1)
 */
var restoreIpAddresses = function (s) {
  // 排除长度不够的,或超出ip可能的最大长度
  if (s.length < 4 || s.length > 12) {
    return [];
  }

  let res = new Array(),
    path = new Array();
  function isValid(str) {
    // 要得符合ip的判断逻辑
    if (Number(str) > 255) {
      return false;
    }
    if (str.length > 1 && str[0] === "0") {
      return false;
    }
    return true;
  }
  function backtracking(start) {
    if (path.length > 4) {
      return;
    }
    if (path.length === 4 && start === s.length) {
      res.push(path.join("."));
      return;
    }
    for (let j = start; j < s.length; j++) {
      const str = s.substring(start, j + 1);
      if (!isValid(str)) {
        break;
      }
      path.push(str);
      backtracking(j + 1);
      path.pop();
    }
  }
  backtracking(0);
  return res;
};

console.log(restoreIpAddresses("25525511135"));
