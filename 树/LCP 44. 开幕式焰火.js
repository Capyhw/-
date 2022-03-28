/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * @description 前序遍历，放到Set中去重，返回Set的size
 */

var numColor = function (root) {
    let set = new Set()
    let help = function (root) {
        if (root != null) {
            set.add(root.val)
            help(root.left)
            help(root.right)
        }
    }
    help(root)
    return set.size
};
