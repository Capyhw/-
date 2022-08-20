/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/**
 * 我们从根节点开始遍历;
 * 如果当前节点的值大于 p 和 q 的值,说明 p 和 q 应该在当前节点的左子树,因此将当前节点移动到它的左子节点;
 * 如果当前节点的值小于 p 和 q 的值,说明 p 和 q 应该在当前节点的右子树,因此将当前节点移动到它的右子节点;
 * 如果当前节点的值不满足上述两条要求,那么说明当前节点就是「分岔点」.此时,p 和 q 要么在当前节点的不同的子树中,要么其中一个就是当前节点.
 */
var lowestCommonAncestor = function (root, p, q) {
  while (1) {
    if (root.val > p.val && root.val > q.val) root = root.left;
    else if (root.val < p.val && root.val < q.val) root = root.right;
    else break;
  }
  return root;
};
