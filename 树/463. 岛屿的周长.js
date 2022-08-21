/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let dfs = (row, col) => {
    // 从一个岛屿方格走向网格边界,周长加 1
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      return 1;
    }
    // 从一个岛屿方格走向水域方格,周长加 1
    if (grid[row][col] == 0) return 1;
    //遍历过的
    if (grid[row][col] == 2) return 0;
    //将遍历过的标记为2
    grid[row][col] = 2;
    return (
      dfs(row - 1, col) +
      dfs(row + 1, col) +
      dfs(row, col - 1) +
      dfs(row, col + 1)
    );
  };
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == 1) {
        // dfs入口
        return dfs(r, c);
      }
    }
  }
  return 0;
};

//方法er:
const islandPerimeter = (grid) => {
  let land = 0; // 土地个数
  let border = 0; // 接壤边界的条数

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        land++;
        if (i < grid.length - 1 && grid[i + 1][j] == 1) {
          border++;
        }
        if (j < grid[0].length - 1 && grid[i][j + 1] == 1) {
          border++;
        }
      }
    }
  }
  return 4 * land - 2 * border;
};
