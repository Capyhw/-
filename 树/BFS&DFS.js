//bfs
function bfs(tree) {
    if (tree == null) return;
    let list = [];//看做队列
    list.push(tree);//相当于把数据加入到队列尾部
    while (!list.length) {
        let node = new TreeNode()
        node = list.shift();//移除队列头部的元素
        console.log(node.val);
        if (node.left != null) list.push(node.left);
        if (node.right != null) list.push(node.right);
    }
}
//dfs  前序遍历
function dfs(root) {
    if (root == null) return;
    console.log(root.val);
    dfs(root.left);
    dfs(root.right);
}

