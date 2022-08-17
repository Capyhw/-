/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let res = 0,
    board = new Array(n).fill(0).map(() => new Array(n).fill("."));
  //检查是否能放
  const isValid = (board, row, col) => {
    //检查列
    for (let i = 0; i < row; i++) {
      if (board[i][col] == "Q") return false;
    }
    //检查左上对角线
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == "Q") return false;
    }
    //检查右上对角线
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] == "Q") return false;
    }
    return true;
  };
  const backtracking = (row, board) => {
    if (row == n) {
      res++;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (isValid(board, row, i)) {
        board[row][i] = "Q";
        backtracking(row + 1, board);
        board[row][i] = ".";
      }
    }
  };

  backtracking(0, board);
  return res;
};

console.log(totalNQueens(4));
