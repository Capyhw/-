/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = new Array(),
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
  //对board处理
  const tranform = (board) => {
    let res = new Array();
    for (let i = 0; i < board.length; i++) {
      let str = "";
      for (let j = 0; j < board[i].length; j++) {
        str += board[i][j];
      }
      res.push(str);
    }
    return res;
  };
  const backtracking = (row, board) => {
    if (row == n) {
      res.push(tranform(board));
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

