/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let w = board[0].length,
    h = board.length;
  let used = new Array(h).fill(0).map(() => new Array(w).fill(false));
  //判断当前点是否是目标路径上的点
  const canFind = (row, col, i) => {
    if (i == word.length) return true;
    if (row < 0 || row >= h || col < 0 || col >= w) return false;
    if (used[row][col] || board[row][col] != word[i]) return false;

    used[row][col] = true;
    const canFindRes =
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1) ||
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1);
    if (canFindRes) return true;
    used[row][col] = false;
    return false;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] == word[0] && canFind(i, j, 0)) return true;
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
