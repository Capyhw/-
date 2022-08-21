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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let arr = [];
  function inorder(node) {
    if (node) {
      inorder(node.left);
      arr.push(node.val);
      inorder(node.right);
    }
  }
  inorder(root);
  let minDiffValue = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    minDiffValue = Math.min(minDiffValue, arr[i + 1] - arr[i]);
  }
  return minDiffValue;
};
