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
var diameterOfBinaryTree = function (root) {
  let res = 1;

  let help = (node) => {
    if (node == null) return 0;
    let l = help(node.left);
    let r = help(node.right);
    res = Math.max(res, l + r + 1);
    return Math.max(l, r) + 1;
  };
  
  help(root);
  return res - 1;
};
