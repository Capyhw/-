/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let res = new Array(),
    path = new Array();
  let backtracking = (start) => {
    if (start == s.length) {
      res.push(path.join(" "));
      return;
    }
    for (let i = start; i < s.length; i++) {
      let word = s.substring(start, i + 1);
      if (wordDict.indexOf(word) == -1) continue;
      path.push(word);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
