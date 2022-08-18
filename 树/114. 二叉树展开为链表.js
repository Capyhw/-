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
 * @return {void} Do not return anything, modify root in-place instead.
 */
/* 
其实是分为三步:

首先将根节点的左子树变成链表
其次将根节点的右子树变成链表
最后将变成链表的右子树放在变成链表的左子树的最右边
*/
var flatten = function (root) {
  flatten(root.left);
  flatten(root.right);
  let temp = root.right;
  //根节点的右子树接上左子树的链表
  root.right = root.left;
  //清空左子树
  root.left = null;
  //找到左子树链表的最后一个
  while (root.right) {
    root = root.right;
  }
  //把右子树的链表接到左子树链表的最后一个
  root.right = temp;
};
