/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let a = root
    while (1) {
        if (p.val < a.val && q.val < a.val) {
            a = a.left;
        } else if (p.val > a.val && q.val > a.val) {
            a = a.right;
        } else {
            break;
        }
    }
    return a
};