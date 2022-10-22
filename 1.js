function test(str1, str2) {
  let LeonArr = [], //点数
    LeonArr2 = [], //花色
    JudyArr = [], //点数
    JudyArr2 = []; //花色
  //将两人的拍填入四个数组中
  let findArr = (str, arr1, arr2) => {
    let preIndex = 0,
      preKey = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] == "S" || str[i] == "H" || str[i] == "C" || str[i] == "D") {
        if (
          str.substring(preIndex + 1, i) == "J" ||
          str.substring(preIndex + 1, i) == "Q" ||
          str.substring(preIndex + 1, i) == "K"
        ) {
          arr1.push(10);
        } else if (str.substring(preIndex + 1, i) == "A") {
          arr1.push(1);
        } else {
          arr1.push(Number(str.substring(preIndex + 1, i)));
        }
        arr2.push(preKey);
        preIndex = i;
        preKey = str[i];
      }
    }
    arr1.push(Number(str.substring(preIndex + 1)));
    arr2.push(preKey);
  };
  findArr(str1, LeonArr, LeonArr2);
  findArr(str2, JudyArr, JudyArr2);
  console.log(LeonArr, JudyArr);
  //从5张中取出3张的所有组合
  let combine = function (arr, k) {
    let path = new Array(),
      res = new Array();
    const backtracking = (startIndex) => {
      if (path.length == k) {
        res.push([...path]);
        return;
      }
      for (let i = startIndex; i < arr.length - (k - path.length) + 1; i++) {
        path.push(arr[i]);
        backtracking(i + 1);
        path.pop(); //回溯
      }
    };
    backtracking(0);
    return res;
  };
  let LeonSelect = combine(LeonArr, 3);
  let JudySelect = combine(JudyArr, 3);
  console.log(LeonSelect, JudySelect);

  //找出其余两张牌
  let findRest = (orgin, target) => {
    let res = [];
    for (let item2 of target) {
      let path = [];
      for (let i = 0; i < orgin.length; i++) {
        if (item2.indexOf(orgin[i]) == -1) {
          path.push(orgin[i]);
        } else {
          item2.splice(item2.indexOf(orgin[i]), 1);
        }
      }
      res.push(path);
    }
    return res;
  };
  let rest = findRest(LeonArr, LeonSelect);
  console.log(rest);
  



}

test("H4C2H5C4S3", "HJD9H6HQD10");
