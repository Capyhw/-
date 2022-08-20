/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let res = new Array();
  let path = new Array();

  let dfs = (root, sum) => {
    if (!root) return;
    path.push(root.val);
    if (!root.left && !root.right && root.val == sum) res.push([...path]);

    dfs(root.left, sum - root.val);
    dfs(root.right, sum - root.val);
    //回溯
    path.pop();
  };

  dfs(root, targetSum);
  return res;
};
