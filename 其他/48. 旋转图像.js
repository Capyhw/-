//辅助数组,找规律  matrix_new[j][n - i - 1] = matrix[i][j];
var rotate = function (matrix) {
  const n = matrix.length;
  const matrix_new = new Array(n).fill(0).map(() => new Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix_new[j][n - i - 1] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j];
    }
  }
};

//用tmp保存,原地修改 (下面交换的4行代码从下往上看比较好理解)
var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
};
//两次翻转
var rotate = function (matrix) {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[n - i - 1][j];
      matrix[n - i - 1][j] = tmp;
    }
  }
  // 主对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
};
