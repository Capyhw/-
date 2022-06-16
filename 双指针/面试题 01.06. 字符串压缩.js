/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let i = 0,
    j = 0,
    res = "";
  while (i < S.length) {
    while (j < S.length && S[i] === S[j]) {
      j++;
    }
    res += S[i] + (j - i).toString();
    i = j;
  }
  if (res.length < S.length) {
    return res;
  } else {
    return S;
  }
};
