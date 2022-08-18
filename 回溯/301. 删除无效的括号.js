/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  let res = new Array(),
    lremove = 0,
    rremove = 0;
  //判断str是否是有效括号
  const isValid = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "(") {
        count++;
      } else if (str[i] == ")") {
        count--;
        if (count < 0) return false;
      }
    }
    return count == 0;
  };
  //回溯
  const backtracking = (str, start, lremove, rremove) => {
    if (lremove == 0 && rremove == 0) {
      if (isValid(str)) {
        res.push(str);
      }
      return;
    }

    for (let i = start; i < str.length; i++) {
      //如果遇到连续相同的括号,只需搜索一次
      if (i > start && str[i] == str[i - 1]) {
        continue;
      }
      //如果剩余的字符无法满足去掉的数量要求,直接返回
      if (lremove + rremove > str.length - i) {
        return;
      }

      if (lremove > 0 && str[i] == "(") {
        backtracking(
          str.substring(0, i) + str.substring(i + 1),
          i,
          lremove - 1,
          rremove
        );
      }
      if (rremove > 0 && str[i] == ")") {
        backtracking(
          str.substring(0, i) + str.substring(i + 1),
          i,
          lremove,
          rremove - 1
        );
      }
    }
  };
  //统计需要去掉的左右括号数
  for (const c of s) {
    if (c == "(") {
      lremove++;
    } else if (c == ")") {
      if (lremove == 0) {
        rremove++;
      } else {
        lremove--;
      }
    }
  }
  backtracking(s, 0, lremove, rremove);
  return res;
};

