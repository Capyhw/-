/**
 * @param {string} s
 * @return {string[][]}
 */
/**
 * 递归函数参数: 分割线开始的位置start
 * 递归终止条件: 如果start>s.length,说明已经找到了一组分割方案了
 * 单层搜索的逻辑: 判断[start,i]是不是回文
 *               不能重复切割,所以,backtracking(i + 1)
 */
var partition = function (s) {
  let path = new Array(),
    res = new Array();

  const isP = (s, l = 0, r = s.length - 1) => {
    for (let i = l, j = r; i < j; i++, j--) {
      if (s[i] != s[j]) return false;
    }
    return true;
  };
  const backtracking = (start) => {
    if (start >= s.length) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (!isP(s, start, i)) continue;
      path.push(s.substring(start, i + 1));
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};

console.log(partition("aab"));
