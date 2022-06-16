/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  let set = new Set();
  let cur = head,
    prev = null;
  while (cur) {
    //如果当前节点已经存在于set中，则删除当前节点
    if (set.has(cur.val)) {
      prev.next = cur.next;
    }
    //否则，将当前节点加入set中
    else {
      set.add(cur.val);
      prev = cur;
    }
    //移动到下一个节点
    cur = cur.next;
  }
  return head;
};
