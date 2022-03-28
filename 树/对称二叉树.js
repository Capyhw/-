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
 */
var isSymmetric = function (root) {
    if (root == null) return true
    return help(root.left, root.right)
};

let help = function (left, right) {
    if (left == null && right == null) return true
    if (left == null || right == null || left.val != right.val) return false
    return help(left.left, right.right) && help(left.right, right.left)
}