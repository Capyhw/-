/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const help = (preL, preR, inL, inR) => {
    if (preL > preR) return null;
    //根节点索引
    let preorderRootIndex = preL;
    //根节点在inorder中的索引
    let inorderRootIndex = map.get(preorder[preL]);
    //左子树长度
    let leftLength = inorderRootIndex - inL;
    let myTree = new TreeNode(preorder[preorderRootIndex]);
    // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素
    //就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    myTree.left = help(preL + 1, preL + leftLength, inL, inorderRootIndex - 1);
    myTree.right = help(preL + leftLength + 1, preR, inorderRootIndex + 1, inR);
    return myTree;
  };

  return help(0, preorder.length - 1, 0, preorder.length - 1);
};
