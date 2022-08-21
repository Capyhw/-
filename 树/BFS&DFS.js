//bfs
function bfs(root) {
  if (root == null) return;
  let quene = [root]; //看做队列
  if (!root) return res;
  while (quene.length) {
    let node = quene.shift(); //移除队列头部的元素
    console.log(node.val);
    if (node.left != null) quene.push(node.left);
    if (node.right != null) quene.push(node.right);
  }
}
//dfs  前序遍历
function dfs(root) {
  if (root == null) return;
  console.log(root.val);
  dfs(root.left);
  dfs(root.right);
}
