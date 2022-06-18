/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  for (let i = 0, j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      i++;
    }
    if (i === s.length) {
      return true;
    }
  }
  return false;
};
