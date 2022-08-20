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
/**
 * 递归结束条件
 * 叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
 * 当 root 节点左右孩子都为空时,返回 1
 * 当 root 节点左右孩子有一个为空时,返回不为空的孩子节点的深度
 * 当 root 节点左右孩子都不为空时,返回左右孩子较小深度的节点值
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let min = Infinity;
  if (root.left) min = Math.min(minDepth(root.left), min);
  if (root.right) min = Math.min(minDepth(root.right), min);
  return min + 1;
};
