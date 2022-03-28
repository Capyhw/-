/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效 二叉搜索树定义如下：
 *      节点的左子树只包含 小于 当前节点的数。
 *      节点的右子树只包含 大于 当前节点的数。
 *      所有左子树和右子树自身必须也是二叉搜索树。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//方法1：
var isValidBST = function (root) {
    return help(root, -Infinity, Infinity)
};
let help = function (root, min, max) {
    if (root == null) {
        return true
    }
    if (root.val >= max || root.val <= min) {
        return false
    }
    return help(root.left, min, root.val) && help(root.right, root.val, max)
}
//方法2：
//中序遍历二叉搜索树，遍历的结果一定是有序的
//首先中序遍历到数组arr中
function middleOrder(root, arr = []) {
    if (root) {
        middleOrder(root.left, arr);
        arr.push(root.val);
        middleOrder(root.right, arr);
    }
    return arr;
}
//判断arr是否为升序
function isValidBST(root) {
    let arr = middleOrder(root);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] <= arr[i]) return false;
    }
    return true
}



