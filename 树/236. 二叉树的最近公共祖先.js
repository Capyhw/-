/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root == null || root == p || root == q) return root   //当root等于p/q，直接返回
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (left == null) return right //left为空，p,q 在右子树
    if (right == null) return left//right为空,p,q 在左子树
    return root//left和right都不空，则p,q在root的左右子树
};