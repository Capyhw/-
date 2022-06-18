let str = "www.baidu.toutiao.com";
str = reverseString(str);
console.log(str);
function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
let res = "";
for (let i = 0, j = 0; j < str.length; j++) {
  if (str[j] === ".") {
    res = res + reverseString(str.substring(i, j)) + ".";
    i = j + 1;
  }
  if (str.substring(i).indexOf(".") === -1) {
    res = res + reverseString(str.substring(i));
    break;
  }
}
console.log(res);
