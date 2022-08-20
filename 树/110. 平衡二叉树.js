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
 * @return {boolean}
 * @description 自顶而下遍历 时间复杂度n^2
 */
var isBalanced = function (root) {
  if (!root) return true;
  let depth = (root) => {
    if (!root) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1;
  };
  return (
    Math.abs(depth(root.left) - depth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 自下而上遍历、后序遍历   时间复杂度n
 */
var isBalanced = function (root) {
  return height(root) >= 0;
};
let height = function (root) {
  if (root == null) return 0;
  let leftHeight = height(root.left);
  if (leftHeight == -1) return -1;
  let rightHeight = height(root.right);
  if (rightHeight == -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
};
