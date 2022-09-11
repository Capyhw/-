var wordBreak = function (s, wordDict) {
  // dp数组,表示前index为能否被拆分
  let dp = new Array(s.length + 1).fill(false);
  // 空子前缀串默认能被拆分
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      //存在一个字串能被拆分,并且剩余的字符串能在单词表中找到就表示当前单词能被拆分
      if (dp[j] && wordDict.indexOf(s.substring(j, i)) !== -1) {
        dp[i] = true;
      }
    }
  }
  return dp[s.length];
};

//回溯一:超时了
var wordBreak = function (s, wordDict) {
  let ok = false;
  let backtracking = (start) => {
    if (start == s.length) {
      ok = true;
      return;
    }
    for (let i = start; i < s.length; i++) {
      let word = s.substring(start, i + 1);
      if (wordDict.indexOf(word) == -1) continue;
      backtracking(i + 1);
    }
  };
  backtracking(0);
  return ok;
};
//回溯二:
var wordBreak = function (s, wordDict) {
  let used = new Array(s.length);
  let backtracking = (start) => {
    if (start == s.length) return true;
    if (used[start] != undefined) return used[start];

    for (let i = start; i < s.length; i++) {
      let word = s.substring(start, i + 1);
      if (wordDict.indexOf(word) == -1) continue;
      let boolres = backtracking(i + 1);
      if (boolres) {
        used[start] = true;
        return true;
      }
    }
    used[start] = false;
    return false;
  };
  return backtracking(0);
};
